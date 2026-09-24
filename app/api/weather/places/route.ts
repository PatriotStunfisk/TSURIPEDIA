import {getWeatherPlace,searchWeatherPlaces} from '@/lib/weather-places';
export function GET(request:Request){const q=new URL(request.url).searchParams;if(q.has('id')){const place=getWeatherPlace(q.get('id')!);return Response.json(place??{error:'Unknown place'},{status:place?200:404})}return Response.json(searchWeatherPlaces(q.get('q')??''),{headers:{'Cache-Control':'public, s-maxage=3600'}})}
