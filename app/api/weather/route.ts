import {getCityWeather,japanDate,weatherCities} from '@/lib/weather';
export async function GET(request:Request){
 const q=new URL(request.url).searchParams,city=weatherCities.find(c=>c.id===q.get('city'));
 if(!city)return Response.json({error:'Unknown city'},{status:400});
 const today=japanDate(),tomorrow=japanDate(new Date(Date.now()+86400000)),date=q.get('date')??today;
 if(date!==today&&date!==tomorrow)return Response.json({error:'Choose today or tomorrow'},{status:400});
 const data=await getCityWeather(city,date);
 return Response.json(data,{headers:{'Cache-Control':data.forecast&&data.tide?'public, s-maxage=900, stale-while-revalidate=60':'public, s-maxage=60'}});
}
