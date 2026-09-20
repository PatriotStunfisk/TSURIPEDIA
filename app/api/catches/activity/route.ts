import {recentActivity} from '@/lib/server/catch-activity';
import {catchStoreReady} from '@/lib/server/catch-store';
export async function GET(request:Request){
 const p=new URL(request.url).searchParams,fish=p.get('fish')??'',method=p.get('method')??'',days=p.get('days')==='7'?7:30;
 if(!/^[a-z0-9-]{0,100}$/.test(fish)||!/^[a-z0-9-]{0,100}$/.test(method))return Response.json({error:'条件を確認してください。'},{status:400});
 try{return Response.json({available:catchStoreReady(),spots:await recentActivity({fish,method,days}),updatedAt:new Date().toISOString()},{headers:{'Cache-Control':'public, s-maxage=60, stale-while-revalidate=60'}});}catch{return Response.json({error:'最近の釣果を取得できません。時間を空けて再試行してください。'},{status:503});}
}
