import {getWeatherPlace,searchWeatherPlaces,weatherMapPoints} from '@/lib/weather-places';
export function GET(request:Request){
 const q=new URL(request.url).searchParams;
 if(q.has('bounds')){const raw=(q.get('bounds')??'').split(','),zoom=q.get('zoom');if(raw.length!==4||raw.some(x=>!x.trim())||!zoom)return Response.json({error:'Invalid bounds'},{status:400});const [s,w,n,e]=raw.map(Number);const points=weatherMapPoints(s,w,n,e,Number(zoom));return Response.json(points??{error:'Invalid bounds'},{status:points?200:400,headers:{'Cache-Control':'public, s-maxage=3600'}})}
 if(q.has('id')){const place=getWeatherPlace(q.get('id')!);return Response.json(place??{error:'Unknown place'},{status:place?200:404})}
 return Response.json(searchWeatherPlaces(q.get('q')??''),{headers:{'Cache-Control':'public, s-maxage=3600'}})
}
