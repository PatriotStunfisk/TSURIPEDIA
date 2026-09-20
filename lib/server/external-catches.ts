import {facilityLinks,parseFacility,type FacilityFormat} from '../catches/facility-parser';
import {anglersCandidates,parseAnglersCatch} from '../catches/anglers-parser';
import {parseNaruohama,parseTottopark} from '../catches/official-parser';
import {createHash} from 'node:crypto';
import {fishSlugs} from '../fish-registry';
import {fishingMapEntries} from '../fishing-map-data';
import {methodDetails} from '../method-registry';
import {ageDays,canonicalSourceUrl} from '../catches/activity';
import {catchSources,type CatchSource,type ExternalCatch} from '../catches/sources';
import {storeRequest} from './catch-store';
const fish=new Set(fishSlugs),spots=new Set(fishingMapEntries.map(s=>s.slug));
const headers={'Content-Type':'application/json',Prefer:'resolution=merge-duplicates'};
export function parseExternalCatch(value:unknown,source:CatchSource,now=new Date()):ExternalCatch{
 if(!value||typeof value!=='object')throw Error('Invalid entry');const v=value as Record<string,unknown>;
 const str=(key:string,max:number)=>{if(typeof v[key]!=='string'||!(v[key] as string).trim()||(v[key] as string).length>max)throw Error('Invalid '+key);return (v[key] as string).trim();};
 const id=str('id',200),date=str('date',10),fishSlug=str('fishSlug',100),spotSlug=str('spotSlug',100),summary=str('summary',240),sourceUrl=canonicalSourceUrl(str('sourceUrl',2000));
 if(!source.allowedHosts.includes(new URL(sourceUrl).hostname)||!fish.has(fishSlug)||!spots.has(spotSlug)||ageDays(date,now)<0||!Number.isFinite(ageDays(date,now)))throw Error('Unmapped or invalid entry');
 if(v.count!==undefined&&(!Number.isInteger(v.count)||(v.count as number)<1||(v.count as number)>100000))throw Error('Invalid count');
 if(v.sizeCm!==undefined&&(typeof v.sizeCm!=='number'||!Number.isFinite(v.sizeCm)||v.sizeCm<=0||v.sizeCm>500))throw Error('Invalid size');
 if(v.methodSlug!==undefined&&(typeof v.methodSlug!=='string'||!Object.hasOwn(methodDetails,v.methodSlug)))throw Error('Invalid method');
 return {id:source.id+':'+id,source:source.id,sourceName:source.name,sourceType:source.sourceType,actor:source.id,date,fishSlug,spotSlug,summary,sourceUrl,methodSlug:v.methodSlug as string|undefined,sizeCm:v.sizeCm as number|undefined,count:v.count as number|undefined,...(source.sourceType==='official'&&v.countScope==='facility'?{countScope:'facility' as const}:{})};
}
const sourceRequests=new Map<string,number>();
async function fetchText(source:CatchSource,endpoint=source.endpoint){
 let url=new URL(endpoint);let response:Response|undefined;
 for(let redirects=0;redirects<=2;redirects++){
  if(url.protocol!=='https:'||!source.allowedHosts.includes(url.hostname)||!source.permissionUrl)throw Error('Source not authorized');
  if(source.format==='anglers-html'){const due=Math.max(Date.now(),(sourceRequests.get(url.hostname)??0)+10000);sourceRequests.set(url.hostname,due);if(due>Date.now())await new Promise(resolve=>setTimeout(resolve,due-Date.now()));}
  response=await fetch(url,{redirect:'manual',signal:AbortSignal.timeout(10000),headers:{Accept:source.format==='json'?'application/json':'text/html','User-Agent':'UOLINK/1.0 (+https://uolink.jp)'},cache:'no-store'});
  if(![301,302,303,307,308].includes(response.status))break;
  const location=response.headers.get('location');await response.body?.cancel();if(!location||redirects===2)throw Error('Source redirect invalid');url=new URL(location,url);response=undefined;
 }
 if(!response)throw Error('Empty response');
 if(response.headers.get('x-amzn-waf-action')==='challenge')throw Error('Source requires browser verification');if(!response.ok)throw Error('Source HTTP '+response.status);if(!response.headers.get('content-type')?.includes(source.format==='json'?'json':'text/html'))throw Error('Source content type invalid');
 const reader=response.body?.getReader();if(!reader)throw Error('Empty response');const chunks:Uint8Array[]=[];let bytes=0;
 try{while(true){const {done,value}=await reader.read();if(done)break;bytes+=value.byteLength;if(bytes>1000000)throw Error('Feed too large');chunks.push(value);}}finally{await reader.cancel();}
 const body=new TextDecoder(source.format==='tottopark-html'?'shift_jis':'utf-8').decode(Buffer.concat(chunks));return body;
}
async function fetchSource(source:CatchSource){
 const body=await fetchText(source);
 if(source.format==='anglers-html'){
  console.info('catch_source_shape',{source:source.id,bytes:body.length,title:body.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.slice(0,100),cardTags:(body.match(/results\/ResultCard/g)??[]).length,props:(body.match(/data-react-props/g)??[]).length,catchLinks:(body.match(/\/catches\/\d+/g)??[]).length,challenge:/captcha|access denied|checking your browser|cf-chl-|awswaf|aws-waf|challenge\.js/i.test(body)});
  const rows=[];for(const url of anglersCandidates(body).slice(0,3)){const detail=await fetchText(source,url);const row=parseAnglersCatch(detail,url,source.areaId!,source.spotSlug!);if(row)rows.push(row);}
  return rows;
 }
 if(['fukuoka-html','shimonoseki-html','hiraiso-html','ichihara-html','happy-html'].includes(source.format)){
  const format=source.format as FacilityFormat;if(format==='fukuoka-html')return parseFacility(body,source.endpoint,source.spotSlug!,format);
  const rows=[];for(const url of facilityLinks(body,source.endpoint,format)){await new Promise(resolve=>setTimeout(resolve,1000));rows.push(...parseFacility(await fetchText(source,url),url,source.spotSlug!,format));}return rows;
 }
 if(source.format==='tottopark-html')return parseTottopark(body,source.endpoint,source.spotSlug);if(source.format==='naruohama-html')return parseNaruohama(body,source.endpoint);
 const data=JSON.parse(body);if(!Array.isArray(data.catches)||data.catches.length>500)throw Error('Invalid feed');return data.catches as unknown[];
}
export async function refreshExternalCatches(){
 const results=[];
 for(const source of catchSources.filter(s=>s.enabled)){
  let inserted=0,invalid=0,status='success';
  try{const values=await fetchSource(source);console.info('catch_import_parsed',{source:source.id,records:values.length});const records=new Map<string,object>();for(const value of values){let r:ExternalCatch;try{r=parseExternalCatch(value,source);}catch{invalid++;continue;}if(ageDays(r.date)>=30)continue;
   const id=createHash('sha256').update([r.sourceUrl,r.date,r.spotSlug,r.fishSlug].join('|')).digest('hex');
   records.set(id,{id,date:r.date,fish_slug:r.fishSlug,spot_slug:r.spotSlug,method_slug:r.methodSlug??null,size_cm:r.sizeCm??null,signal:r});
  }if(records.size){
   const entries=[...records.values()] as {id:string;signal:ExternalCatch}[];
   const comparable=(r:ExternalCatch)=>JSON.stringify([r.date,r.fishSlug,r.spotSlug,r.sizeCm,r.count,r.countScope,r.summary,r.sourceUrl,r.sourceType]);
   for(let offset=0;offset<entries.length;offset+=40){const batch=entries.slice(offset,offset+40);
    const existing=await(await storeRequest('/rest/v1/external_catches?select=id,signal&id=in.('+batch.map(r=>r.id).join(',')+')',{method:'GET'})).json() as {id:string;signal:ExternalCatch}[];
    const known=new Map(existing.map(r=>[r.id,r.signal]));const changed=batch.filter(r=>!known.has(r.id)||comparable(known.get(r.id)!)!==comparable(r.signal));
    if(changed.length){await storeRequest('/rest/v1/external_catches?on_conflict=id',{method:'POST',headers:{...headers,Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify(changed)});inserted+=changed.filter(r=>!known.has(r.id)).length;}
   }
  }
  }catch(error){status='failed';const message=error instanceof Error?error.message:'';const reason=/^Source HTTP [0-9]{3}$/.test(message)?message:['Source requires browser verification','Source content type invalid','Empty response','Feed too large','Catch listing requires rendering or its structure changed','Catch data structure changed','Missing catch card data','Invalid catch card data'].includes(message)?message:error instanceof Error?error.name:'Unknown error';console.error('catch_import_failed',{source:source.id,reason});}
  const log={source:source.id,status,inserted,invalid,finished_at:new Date().toISOString()};
  try{await storeRequest('/rest/v1/catch_import_runs',{method:'POST',headers,body:JSON.stringify(log)});}catch{console.error('catch_import_log_failed',{source:source.id,status});}results.push(log);
 }
 // Retention is explicitly limited to the external cache and operational logs.
 const cutoff=new Date(Date.now()-60*86400000).toISOString();
 await storeRequest(`/rest/v1/external_catches?date=lt.${cutoff.slice(0,10)}`,{method:'DELETE'});
 await storeRequest(`/rest/v1/catch_import_runs?finished_at=lt.${cutoff}`,{method:'DELETE'});
 return results;
}
export async function externalFeed(params:URLSearchParams){
 if(process.env.CATCH_EXTERNAL_ENABLED!=='true')return [];
 const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 const q=new URLSearchParams({date:'gte.'+new Date(Date.parse(today)-29*86400000).toISOString().slice(0,10),order:'date.desc,id.asc',limit:'20',select:'signal'});
 q.append('date','lte.'+today);
 for(const [param,column] of [['fish','fish_slug'],['spot','spot_slug'],['method','method_slug']] as const){const value=params.get(param);if(value&&/^[a-z0-9-]{1,100}$/.test(value))q.set(column,'eq.'+value);}
 const prefecture=params.get('prefecture');if(prefecture){const ids=fishingMapEntries.filter(s=>s.prefecture===prefecture).map(s=>s.slug);if(!ids.length)return [];const spot=params.get('spot');if(spot&&!ids.includes(spot))return [];if(!spot)q.set('spot_slug','in.('+ids.join(',')+')');}
 for(const [param,op] of [['from','gte.'],['to','lte.']] as const){const date=params.get(param);if(date&&/^\d{4}-\d{2}-\d{2}$/.test(date)&&Number.isFinite(ageDays(date)))q.append('date',op+date);}
 for(const [param,op] of [['minSize','gte.'],['maxSize','lte.']] as const){const size=params.get(param);if(size&&Number.isFinite(Number(size))&&Number(size)>0&&Number(size)<=500)q.append('size_cm',op+Number(size));}
 const rows=await(await storeRequest('/rest/v1/external_catches?'+q)).json() as {signal:ExternalCatch}[];
 return rows.map(({signal})=>{const {actor,...publicFields}=signal;void actor;return publicFields;});
}
