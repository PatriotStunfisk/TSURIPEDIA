import {randomUUID,createHmac} from 'node:crypto';
import {cookies} from 'next/headers';
import {storeRequest,catchStoreReady,takeQuota} from '@/lib/server/catch-store';
import {sameOrigin,limitedJson,apiError,HttpError} from '@/lib/server/request';
import {validDeleteToken} from '@/lib/catches/types';
export const runtime='nodejs';
const cookieName='uolink-catch-visitor';
async function visitor(create=false){const jar=await cookies();let token=jar.get(cookieName)?.value;if(!validDeleteToken(token)){if(!create)return null;token=randomUUID();jar.set(cookieName,token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:31536000});}return createHmac('sha256',process.env.SUPABASE_SERVICE_ROLE_KEY!).update('catch-like:'+token).digest('hex');}
async function result(id:string,hash:string|null,liked:boolean|null){if(!catchStoreReady())throw new HttpError(503,'いいねは準備中です。');if(!validDeleteToken(id))throw new HttpError(400,'投稿が不正です。');const r=await storeRequest('/rest/v1/rpc/uolink_catch_like',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({p_report:id,p_visitor:hash,p_liked:liked})});const v=await r.json();if(v===null)throw new HttpError(404,'公開投稿が見つかりません。');return Response.json(v,{headers:{'Cache-Control':'private, no-store'}});}
export async function GET(request:Request){try{if(!catchStoreReady())throw new HttpError(503,'いいねは準備中です。');return await result(new URL(request.url).searchParams.get('id')??'',await visitor(),null);}catch(e){return apiError(e);}}
export async function POST(request:Request){try{sameOrigin(request);if(!catchStoreReady())throw new HttpError(503,'いいねは準備中です。');const v=await limitedJson(request,1000) as {id:string;liked:boolean};if(!v||!validDeleteToken(v.id)||typeof v.liked!=='boolean')throw new HttpError(400,'内容が不正です。');await takeQuota(request,'catch-like',120);return await result(v.id,await visitor(true),v.liked);}catch(e){return apiError(e);}}
