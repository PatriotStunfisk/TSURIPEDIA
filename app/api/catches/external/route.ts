import {externalFeed} from '@/lib/server/external-catches';
export async function GET(request:Request){try{return Response.json({reports:await externalFeed(new URL(request.url).searchParams)},{headers:{'Cache-Control':'public, s-maxage=300'}});}catch{return Response.json({error:'外部情報を取得できません。'},{status:503});}}
