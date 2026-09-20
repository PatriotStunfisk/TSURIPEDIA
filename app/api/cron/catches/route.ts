import {revalidateTag} from 'next/cache';
import {refreshExternalCatches} from '@/lib/server/external-catches';
import {recentActivity} from '@/lib/server/catch-activity';
export const maxDuration=60;
export async function GET(request:Request){
 if(!process.env.CRON_SECRET||request.headers.get('authorization')!==`Bearer ${process.env.CRON_SECRET}`)return Response.json({error:'Unauthorized'},{status:401});
 try{const results=process.env.CATCH_EXTERNAL_ENABLED==='true'?await refreshExternalCatches():[];revalidateTag('catch-activity',{expire:0});const spots=await recentActivity();return Response.json({results,spots:spots.length});}catch{return Response.json({error:'釣果更新に失敗しました。保存済みデータは維持されています。'},{status:503});}
}
