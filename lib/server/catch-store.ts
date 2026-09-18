import {createHmac,createHash} from 'node:crypto';
import type {CatchReport,PublicCatch} from '../catches/types';
import {HttpError} from './request';
function backendUrl(){return process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL;}
export function backendConfigured(){return !!(backendUrl()&&process.env.SUPABASE_SERVICE_ROLE_KEY);}
export function catchStoreReady(){return backendConfigured()&&process.env.CATCH_REPORTS_ENABLED==='true';}
function config(){if(!backendConfigured())throw new HttpError(503,'公開釣果は準備中です。端末内の記録は利用できます。');return {url:backendUrl()!.replace(/\/$/,''),key:process.env.SUPABASE_SERVICE_ROLE_KEY!};}
export async function storeRequest(path:string,init:RequestInit={}){const {url,key}=config();const response=await fetch(url+path,{...init,headers:{apikey:key,Authorization:`Bearer ${key}`,...init.headers},cache:'no-store',signal:AbortSignal.timeout(12000)});if(!response.ok)throw new HttpError(503,'公開釣果の保存先へ接続できません。端末内の記録は保持されています。');return response;}
export async function takeQuota(request:Request,bucket:string,limit:number,identity?:string){const {key}=config();const ip=request.headers.get('x-vercel-forwarded-for')??request.headers.get('x-forwarded-for')?.split(',')[0]??'unknown';const hash=createHmac('sha256',key).update(bucket+':'+(identity??ip)).digest('hex');const r=await storeRequest('/rest/v1/rpc/uolink_take_quota',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({p_key:hash,p_limit:limit})});if(!(await r.json()))throw new HttpError(429,'送信回数の上限です。1時間ほど空けてください。');}
type StoredCatch={id:string;user_id:string|null;payload:CatchReport;photo_path:string|null;photo_paths:string[];status:'pending'|'approved'|'rejected';upload_complete:boolean;created_at:string;deleted_at:string|null};
const fields='id,user_id,payload,photo_path,photo_paths,status,upload_complete,created_at,deleted_at';
const jsonHeaders={'Content-Type':'application/json'};
export async function publishCatch(report:CatchReport,userId:string,photos:Buffer[]=[]){
 const existing=await storeRequest(`/rest/v1/catch_reports?id=eq.${report.id}&select=${fields}`);const rows=await existing.json() as StoredCatch[];
 if(rows.length){if(rows[0].user_id!==userId)throw new HttpError(409,'記録IDが重複しています。');if(!rows[0].upload_complete||rows[0].deleted_at)throw new HttpError(409,'同じ記録を処理中です。時間を空けて再試行してください。');return rows[0].status;}
 const {photo,photos:discard,...payload}=report;void photo;void discard;
 const paths=photos.map((_,i)=>`${userId}/${report.id}/${i}.jpg`);
 // Reserve the ID first. Concurrent retries cannot replace an existing photo.
 await storeRequest('/rest/v1/catch_reports',{method:'POST',headers:jsonHeaders,body:JSON.stringify({id:report.id,user_id:userId,spot_slug:report.spotSlug,fish_slug:report.fishSlug,fish_name:report.fishName??null,caught_on:report.date,time_band:report.time,method_slug:report.methodSlug??null,count:report.count,size_cm:report.sizeCm??null,released:report.released??null,payload,photo_paths:paths,token_hash:null,status:'pending',upload_complete:false})});
 try{
  for(let i=0;i<photos.length;i++)await storeRequest(`/storage/v1/object/catch-photos/${paths[i]}`,{method:'POST',headers:{'Content-Type':'image/jpeg','x-upsert':'false'},body:new Uint8Array(photos[i])});
  await storeRequest(`/rest/v1/catch_reports?id=eq.${report.id}&user_id=eq.${userId}`,{method:'PATCH',headers:jsonHeaders,body:JSON.stringify({upload_complete:true,status:'approved'})});
 }catch(error){await deleteStoredCatch(report.id,userId).catch(()=>{});throw error;}
 return 'approved';
}
async function displayRows(rows:StoredCatch[],userId?:string):Promise<PublicCatch[]>{
 const paths=[...new Set(rows.flatMap(r=>r.photo_paths?.length?r.photo_paths:r.photo_path?[r.photo_path]:[]))];const photos=new Map<string,string>();
 if(paths.length){const signed=await storeRequest('/storage/v1/object/sign/catch-photos',{method:'POST',headers:jsonHeaders,body:JSON.stringify({paths,expiresIn:600})});for(const item of await signed.json()){if(item.signedURL&&item.path)photos.set(item.path,config().url+'/storage/v1'+item.signedURL);}}
 return rows.map(row=>{const urls=(row.photo_paths?.length?row.photo_paths:row.photo_path?[row.photo_path]:[]).flatMap(p=>photos.has(p)?[photos.get(p)!]:[]);return {...row.payload,id:row.id,photo:urls[0],photos:urls,createdAt:row.created_at,status:row.status,isOwn:!!userId&&row.user_id===userId};});
}
export async function recentCatches(spotSlug:string,offset=0){const r=await storeRequest(`/rest/v1/catch_reports?spot_slug=eq.${encodeURIComponent(spotSlug)}&status=eq.approved&deleted_at=is.null&upload_complete=eq.true&order=created_at.desc,id.desc&limit=10&offset=${offset}&select=${fields}`);return displayRows(await r.json());}
export async function ownCatches(userId:string,spotSlug?:string,offset=0){const r=await storeRequest(`/rest/v1/catch_reports?user_id=eq.${userId}&deleted_at=is.null&upload_complete=eq.true${spotSlug?`&spot_slug=eq.${encodeURIComponent(spotSlug)}`:''}&order=created_at.desc,id.desc&limit=10&offset=${offset}&select=${fields}`);return displayRows(await r.json(),userId);}
export async function deleteStoredCatch(id:string,userId?:string,legacyToken?:string,moderator=false){
 const where=moderator?'':userId?`&user_id=eq.${userId}`:legacyToken?`&user_id=is.null&token_hash=eq.${createHash('sha256').update(legacyToken).digest('hex')}`:'';
 if(!where&&!moderator)throw new HttpError(401,'ログインしてください。');
 const path=`/rest/v1/catch_reports?id=eq.${id}${where}`;const r=await storeRequest(path+`&select=${fields}`);const rows=await r.json() as StoredCatch[];if(!rows.length)throw new HttpError(404,'投稿が見つからないか、削除する権限がありません。');
 // Hide immediately. Failed storage deletion remains retryable by owner/moderator.
 await storeRequest(path,{method:'PATCH',headers:jsonHeaders,body:JSON.stringify({status:'rejected',deleted_at:new Date().toISOString()})});
 const paths=rows.flatMap(row=>row.photo_paths?.length?row.photo_paths:row.photo_path?[row.photo_path]:[]);
 if(paths.length)await storeRequest('/storage/v1/object/catch-photos',{method:'DELETE',headers:jsonHeaders,body:JSON.stringify({prefixes:paths})});
 await storeRequest(path,{method:'DELETE'});
}
export async function flagCatch(id:string,userId:string,reason:string){
 const r=await storeRequest(`/rest/v1/catch_reports?id=eq.${id}&status=eq.approved&deleted_at=is.null&select=id`);if(!(await r.json()).length)throw new HttpError(404,'公開投稿が見つかりません。');
 await storeRequest('/rest/v1/catch_flags?on_conflict=report_id,user_id',{method:'POST',headers:{...jsonHeaders,Prefer:'resolution=ignore-duplicates'},body:JSON.stringify({report_id:id,user_id:userId,reason})});
}
export async function moderationQueue(){const [r,f]=await Promise.all([storeRequest(`/rest/v1/catch_reports?or=(status.eq.pending,deleted_at.not.is.null)&order=created_at.asc&limit=30&select=${fields}`),storeRequest('/rest/v1/catch_flags?resolved_at=is.null&order=created_at.asc&limit=30&select=id,report_id,reason,created_at')]);const flags=await f.json();const pending=await r.json() as StoredCatch[];const ids=[...new Set(flags.map((x:{report_id:string})=>x.report_id))];const flagged=ids.length?await (await storeRequest(`/rest/v1/catch_reports?id=in.(${ids.join(',')})&select=${fields}`)).json() as StoredCatch[]:[];const rows=[...new Map([...pending,...flagged].map(row=>[row.id,row])).values()];return {reports:await displayRows(rows),flags,deletions:rows.filter(r=>r.deleted_at).map(r=>r.id)};}
export async function moderateCatch(id:string,action:'approve'|'reject'|'delete'|'resolve'){
 if(action==='delete'){await deleteStoredCatch(id,undefined,undefined,true);return;}
 if(action==='approve'||action==='reject')await storeRequest(`/rest/v1/catch_reports?id=eq.${id}&upload_complete=eq.true&deleted_at=is.null`,{method:'PATCH',headers:jsonHeaders,body:JSON.stringify({status:action==='approve'?'approved':'rejected',reviewed_at:new Date().toISOString()})});
 await storeRequest(`/rest/v1/catch_flags?report_id=eq.${id}&resolved_at=is.null`,{method:'PATCH',headers:jsonHeaders,body:JSON.stringify({resolved_at:new Date().toISOString()})});
}

export async function recentCatchSummary(spotSlug:string){const r=await storeRequest(`/rest/v1/catch_reports?spot_slug=eq.${encodeURIComponent(spotSlug)}&status=eq.approved&deleted_at=is.null&upload_complete=eq.true&order=created_at.desc,id.desc&limit=2&select=id,payload`);return (await r.json() as StoredCatch[]).map(({id,payload:p})=>({id,fishSlug:p.fishSlug,fishName:p.fishName,count:p.count,sizeCm:p.sizeCm,sizeLabel:p.sizeLabel,date:p.date}));}

export async function catchFeed(filters:{fish?:string;method?:string;spots?:string[];from?:string;to?:string},offset=0){
 if(filters.spots?.length===0)return [];
 const query=new URLSearchParams({status:'eq.approved',deleted_at:'is.null',upload_complete:'eq.true',order:'created_at.desc,id.desc',limit:'10',offset:String(offset),select:fields});
 if(filters.fish)query.set('fish_slug','eq.'+filters.fish);
 if(filters.method)query.set('method_slug','eq.'+filters.method);
 if(filters.spots)query.set('spot_slug','in.('+filters.spots.join(',')+')');
 if(filters.from)query.append('caught_on','gte.'+filters.from);
 if(filters.to)query.append('caught_on','lte.'+filters.to);
 return displayRows(await (await storeRequest('/rest/v1/catch_reports?'+query)).json());
}
