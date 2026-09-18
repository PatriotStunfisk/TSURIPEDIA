import {createServerClient} from '@supabase/ssr';
import {cookies} from 'next/headers';
import {HttpError} from './request';
import {storeRequest} from './catch-store';

// Used only in route handlers. No authentication SDK or keys in the MAP bundle.
export async function catchAuth(){
 const url=process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL;
 const key=process.env.SUPABASE_ANON_KEY||process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||process.env.SUPABASE_SERVICE_ROLE_KEY;
 if(!url||!key)throw new HttpError(503,'ログインの接続準備中です。');
 const jar=await cookies();
 return createServerClient(url,key,{cookieOptions:{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/'},cookies:{getAll:()=>jar.getAll(),setAll:values=>{for(const {name,value,options} of values)jar.set(name,value,options);}}});
}
export async function catchUser(required=true){
 const auth=await catchAuth();const {data:{user},error}=await auth.auth.getUser();
 if(error||!user||(!user.email_confirmed_at&&!user.identities?.some(i=>i.provider==='google'||i.provider==='apple'))){if(required)throw new HttpError(401,'ログインしてから投稿してください。');return null;}
 return {id:user.id,email:user.email,displayName:typeof user.user_metadata?.full_name==='string'?user.user_metadata.full_name.slice(0,100):undefined,avatarUrl:typeof user.user_metadata?.avatar_url==='string'&&user.user_metadata.avatar_url.startsWith('https://')?user.user_metadata.avatar_url:undefined};
}
export async function isCatchModerator(userId:string){const r=await storeRequest(`/rest/v1/catch_moderators?user_id=eq.${encodeURIComponent(userId)}&select=user_id&limit=1`);return (await r.json()).length===1;}
export async function requireCatchModerator(){const user=(await catchUser())!;if(!await isCatchModerator(user.id))throw new HttpError(403,'管理者のみ利用できます。');return user;}
export function safeCatchReturn(value:unknown){return typeof value==='string'&&value.length<1000&&/^\/(?:spots(?:[/?#]|$)|catches(?:[?#]|$)|admin\/catches(?:[?#]|$))/.test(value)&&!/[\\\r\n]/.test(value)?value:'/catches';}
