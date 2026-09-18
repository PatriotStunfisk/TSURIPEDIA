import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {catchAuth,safeCatchReturn} from '@/lib/server/catch-auth';
export async function GET(request:Request){const url=new URL(request.url),code=url.searchParams.get('code');if(code){try{const client=await catchAuth();const {error}=await client.auth.exchangeCodeForSession(code);if(!error){const jar=await cookies();const next=safeCatchReturn(jar.get('uolink-auth-next')?.value);jar.delete('uolink-auth-next');return NextResponse.redirect(new URL(next,url.origin),{headers:{'Cache-Control':'private, no-store','Referrer-Policy':'no-referrer'}});}}catch{}}
 return NextResponse.redirect(new URL('/login?error=expired',url.origin),{headers:{'Cache-Control':'no-store'}});
}
