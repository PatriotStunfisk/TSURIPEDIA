import {getHourlyWeather} from '@/lib/weather-hourly';
import {weatherCities,japanDate} from '@/lib/weather';
export async function GET(request:Request){
 const q=new URL(request.url).searchParams,city=weatherCities.find(c=>c.id===q.get('city')),date=q.get('date')??japanDate();
 if(!city||![japanDate(),japanDate(new Date(Date.now()+86400000))].includes(date))return Response.json({error:'Choose a supported city and today or tomorrow'},{status:400});
 const result=await getHourlyWeather(city.id,date);
 return Response.json(result,{headers:{'Cache-Control':result.hours.some(h=>h.weather!==null)&&result.hours.some(h=>h.wave!==null)?'public, s-maxage=1800, stale-while-revalidate=60':'public, s-maxage=120'}});
}
