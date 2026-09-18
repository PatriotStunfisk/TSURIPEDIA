import CatchLogin from '@/components/CatchLogin';
import {safeCatchReturn} from '@/lib/server/catch-auth';
export const metadata={title:'釣果投稿にログイン',robots:{index:false,follow:false}};
export default async function Page({searchParams}:{searchParams:Promise<{next?:string;error?:string}>}){const p=await searchParams;return <div className="section pageTop"><h1>UOLINKにログイン</h1><CatchLogin emailReady={process.env.CATCH_EMAIL_LOGIN_READY==='true'} next={safeCatchReturn(p.next)} error={p.error}/></div>}
