import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {catchAuth,safeCatchReturn} from '@/lib/server/catch-auth';
export async function GET(request:Request){const url=new URL(request.url),code=url.searchParams.get('code');const jar=await cookies();const next=safeCatchReturn(jar.get('uolink-auth-next')?.value);if(code){try{const client=await catchAuth();const {error}=await client.auth.exchangeCodeForSession(code);if(!error){jar.delete('uolink-auth-next');return NextResponse.redirect(new URL(next,url.origin),{headers:{'Cache-Control':'private, no-store','Referrer-Policy':'no-referrer'}});}}catch{}}
 const retry=new URL('/login',url.origin);retry.searchParams.set('error',url.searchParams.get('error')==='access_denied'?'cancelled':'failed');retry.searchParams.set('next',next);return NextResponse.redirect(retry,{headers:{'Cache-Control':'no-store'}});
}
