import {fishSlugs} from '@/lib/fish-registry';
import {fishingMapEntries} from '@/lib/fishing-map-data';
import {methodDetails} from '@/lib/method-registry';
import {parseCatch,validDeleteToken} from '@/lib/catches/types';
import {catchFeed,catchStoreReady,publishCatch,recentCatches,recentCatchSummary,ownCatches,deleteStoredCatch,takeQuota} from '@/lib/server/catch-store';
import {catchUser} from '@/lib/server/catch-auth';
import {sameOrigin,limitedJson,apiError,cleanJpeg,HttpError} from '@/lib/server/request';
export const runtime='nodejs';
const allowed={fish:new Set(fishSlugs),spots:new Set(fishingMapEntries.filter(s=>!s.closed&&s.type!=='area').map(s=>s.slug)),methods:new Set(Object.keys(methodDetails))};
const allSpots=new Set(fishingMapEntries.map(s=>s.slug));
export async function GET(request:Request){try{if(!catchStoreReady())return Response.json({available:false,reports:[]},{headers:{'Cache-Control':'no-store'}});const url=new URL(request.url),spot=url.searchParams.get('spot')??'',offset=Number(url.searchParams.get('offset')??0);if((spot&&!allSpots.has(spot))||!Number.isInteger(offset)||offset<0||offset>10000)throw new HttpError(400,'釣り場・表示位置が不正です。');if(url.searchParams.get('feed')==='1'){
 const fish=url.searchParams.get('fish')||'',method=url.searchParams.get('method')||'',prefecture=url.searchParams.get('prefecture')||'',from=url.searchParams.get('from')||'',to=url.searchParams.get('to')||'';
 const dateValid=(v:string)=>!v||(/^\d{4}-\d{2}-\d{2}$/.test(v)&&Number.isFinite(Date.parse(v))&&new Date(v).toISOString().slice(0,10)===v);
 if((fish&&!allowed.fish.has(fish)&&!['other','unknown'].includes(fish))||(method&&!allowed.methods.has(method))||(prefecture&&!fishingMapEntries.some(s=>s.prefecture===prefecture))||!dateValid(from)||!dateValid(to)||(from&&to&&from>to))throw new HttpError(400,'絞り込み条件を確認してください。');
 const spots=spot?[spot]:prefecture?fishingMapEntries.filter(s=>s.prefecture===prefecture).map(s=>s.slug):undefined;
 const reports=spot&&prefecture&&!fishingMapEntries.some(s=>s.slug===spot&&s.prefecture===prefecture)?[]:await catchFeed({fish,method,spots,from,to},offset);
 return Response.json({available:true,reports},{headers:{'Cache-Control':'private, no-store'}});
 }const mine=url.searchParams.get('mine')==='1';if(!mine&&!spot)throw new HttpError(400,'釣り場を選択してください。');const reports=mine?await ownCatches((await catchUser())!.id,spot||undefined,offset):url.searchParams.get('summary')==='1'?await recentCatchSummary(spot):await recentCatches(spot,offset);return Response.json({available:true,reports},{headers:{'Cache-Control':'private, no-store'}});}catch(e){return apiError(e)}}
export async function POST(request:Request){try{sameOrigin(request);if(!catchStoreReady())throw new HttpError(503,'公開釣果は準備中です。');const user=(await catchUser())!;const v=await limitedJson(request,2200000) as Record<string,unknown>;if(v.website||v.consent!==true)throw new HttpError(400,'公開条件を確認してください。');let report;try{report=parseCatch(v.report,allowed);}catch(e){throw new HttpError(400,(e as Error).message)}await takeQuota(request,'catch-post-user',5,user.id);await takeQuota(request,'catch-post-ip',15);const photos=(report.photos??(report.photo?[report.photo]:[])).map(cleanJpeg);const status=await publishCatch(report,user.id,photos);return Response.json({status,id:report.id},{status:202,headers:{'Cache-Control':'no-store'}});}catch(e){return apiError(e)}}
export async function DELETE(request:Request){try{sameOrigin(request);if(!catchStoreReady())throw new HttpError(503,'公開釣果は準備中です。');const v=await limitedJson(request,2000) as Record<string,unknown>;if(!validDeleteToken(v.id))throw new HttpError(400,'削除情報が不正です。');const user=await catchUser(false);if(!user&&!validDeleteToken(v.deleteToken))throw new HttpError(401,'ログインしてください。');await takeQuota(request,'catch-delete',20,user?.id);if(validDeleteToken(v.deleteToken)){
 // Legacy anonymous records can only be removed with their existing private token.
 try{await deleteStoredCatch(v.id,undefined,v.deleteToken);}catch(e){if(!user||!(e instanceof HttpError)||e.status!==404)throw e;await deleteStoredCatch(v.id,user.id);}
 }else await deleteStoredCatch(v.id,user!.id);return Response.json({deleted:true});}catch(e){return apiError(e)}}
