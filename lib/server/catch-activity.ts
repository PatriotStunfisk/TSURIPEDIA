import {unstable_cache} from 'next/cache';
import {aggregateActivity,type CatchSignal} from '../catches/activity';
import {catchStoreReady,storeRequest} from './catch-store';
export async function activitySignals(filters:{fish?:string;method?:string;days?:number}={}):Promise<CatchSignal[]>{
 if(!catchStoreReady())return [];
 const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 const since=new Date(Date.parse(today)-((filters.days??30)-1)*86400000).toISOString().slice(0,10);
 const rows:CatchSignal[]=[];
 // Only the recent window and small scalar columns. Never load photos or payloads for a map.
 for(let offset=0;offset<100000;offset+=1000){
  const q=new URLSearchParams({status:'eq.approved',deleted_at:'is.null',upload_complete:'eq.true',caught_on:'gte.'+since,select:'id,user_id,spot_slug,fish_slug,caught_on,method_slug,size_cm',order:'id.asc',limit:'1000',offset:String(offset)});
  if(filters.fish)q.set('fish_slug','eq.'+filters.fish);if(filters.method)q.set('method_slug','eq.'+filters.method);
  const batch=await(await storeRequest('/rest/v1/catch_reports?'+q)).json() as {id:string;user_id:string|null;spot_slug:string;fish_slug:string;caught_on:string;method_slug?:string;size_cm?:number}[];
  rows.push(...batch.map(r=>({id:r.id,source:'uolink',sourceType:'user' as const,actor:r.user_id??'legacy-anonymous',date:r.caught_on,spotSlug:r.spot_slug,fishSlug:r.fish_slug,methodSlug:r.method_slug,sizeCm:r.size_cm})));
  if(batch.length<1000)break;if(offset===99000)throw Error('Recent activity capacity exceeded');
 }
 if(process.env.CATCH_EXTERNAL_ENABLED==='true'){
  for(let offset=0;offset<100000;offset+=1000){const batch=await(await storeRequest(`/rest/v1/external_catches?signal->>excluded=is.null&date=gte.${since}${filters.fish?`&fish_slug=eq.${encodeURIComponent(filters.fish)}`:''}${filters.method?`&method_slug=eq.${encodeURIComponent(filters.method)}`:''}&order=id.asc&limit=1000&offset=${offset}&select=signal`)).json() as {signal:CatchSignal}[];rows.push(...batch.map(r=>r.signal));if(batch.length<1000)break;if(offset===99000)throw Error('External activity capacity exceeded');}
 }
 return rows;
}
// Cache only compact aggregates, not raw report history or actor identifiers.
const cachedActivity=unstable_cache(async(fish:string,method:string,days:number)=>aggregateActivity(await activitySignals({fish,method,days})),['catch-activity-v1'],{revalidate:300,tags:['catch-activity']});
export async function recentActivity(filters:{fish?:string;method?:string;days?:number}={}){
 return cachedActivity(filters.fish??'',filters.method??'',filters.days??30);
}
