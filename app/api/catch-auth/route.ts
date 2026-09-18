import {catchProviders} from '@/lib/server/catch-providers';
import {cookies} from 'next/headers';
import {catchAuth,catchUser,isCatchModerator,safeCatchReturn} from '@/lib/server/catch-auth';
import {backendConfigured,takeQuota} from '@/lib/server/catch-store';
import {apiError,HttpError,limitedJson,sameOrigin} from '@/lib/server/request';
export const runtime='nodejs';
export async function GET(){try{if(!backendConfigured())return Response.json({user:null,available:false});const user=await catchUser(false);return Response.json({user,available:true,providers:await catchProviders(),moderator:user?await isCatchModerator(user.id):false},{headers:{'Cache-Control':'private, no-store'}});}catch(e){return apiError(e)}}
export async function POST(request:Request){try{
 sameOrigin(request);const v=await limitedJson(request,2000) as Record<string,unknown>;
 if(v.provider!=='google'&&v.provider!=='apple')throw new HttpError(400,'GoogleまたはAppleを選択してください。');
 const providers=await catchProviders();if(!providers[v.provider])throw new HttpError(503,'このログイン方法は準備中です。');
 await takeQuota(request,'login',10);const auth=await catchAuth();const next=safeCatchReturn(v.next);
 (await cookies()).set('uolink-auth-next',next,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:3600});
 const {data,error}=await auth.auth.signInWithOAuth({provider:v.provider,options:{redirectTo:new URL('/auth/callback',request.url).href,skipBrowserRedirect:true,...(v.provider==='google'?{queryParams:{prompt:'select_account'}}:{})}});
 if(error||!data.url)throw new HttpError(503,'ログインを開始できませんでした。もう一度お試しください。');
 return Response.json({url:data.url},{headers:{'Cache-Control':'private, no-store'}});
 }catch(e){return apiError(e)}}
export async function DELETE(request:Request){try{sameOrigin(request);const auth=await catchAuth();const {error}=await auth.auth.signOut({scope:'local'});if(error)throw new HttpError(503,'ログアウトできませんでした。再試行してください。');return Response.json({signedOut:true});}catch(e){return apiError(e)}}
