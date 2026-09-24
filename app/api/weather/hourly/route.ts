import {getHourlyWeather,getPlaceHourlyWeather} from '@/lib/weather-hourly';
import {getWeatherPlace} from '@/lib/weather-places';
import {weatherCities,japanDate} from '@/lib/weather';
export async function GET(request:Request){
 const q=new URL(request.url).searchParams,city=weatherCities.find(c=>c.id===q.get('city')),date=q.get('date')??japanDate(),place=q.has('spot')?getWeatherPlace(q.get('spot')!):undefined;
 if((q.has('spot')?!place:!city)||![japanDate(),japanDate(new Date(Date.now()+86400000))].includes(date))return Response.json({error:'Choose a supported place and today or tomorrow'},{status:400});
 const result=place?await getPlaceHourlyWeather(place,date):await getHourlyWeather(city!.id,date);
 return Response.json(result,{headers:{'Cache-Control':result.hours.some(h=>h.weather!==null)&&(place||result.hours.some(h=>h.wave!==null))?'public, s-maxage=1800, stale-while-revalidate=60':'public, s-maxage=120'}});
}
