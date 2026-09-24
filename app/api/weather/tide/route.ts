import {tideStations,nearbyTideStations} from '@/lib/tide-stations';
import {getWeatherPlace} from '@/lib/weather-places';
import {parseTide,japanDate} from '@/lib/weather';
export async function GET(request:Request){
 const q=new URL(request.url).searchParams,place=getWeatherPlace(q.get('spot')??''),date=q.get('date')??japanDate();
 if(!place||![japanDate(),japanDate(new Date(Date.now()+86400000))].includes(date))return Response.json({error:'Unknown place or date'},{status:400});
 const nearby=nearbyTideStations(place.lat,place.lon),station=q.has('station')?tideStations.find(s=>s.id===q.get('station')):nearby[0];
 if(!station)return Response.json({error:'Unknown station'},{status:400});
 let tide=null;
 try{const response=await fetch(`https://www.data.jma.go.jp/kaiyou/data/db/tide/suisan/txt/${date.slice(0,4)}/${station.id}.txt`,{next:{revalidate:86400},signal:AbortSignal.timeout(7000)});if(response.ok)tide=parseTide(await response.text(),date,station.id)}catch{/* Keep forecast usable when JMA is unavailable. */}
 return Response.json({station,nearby,tide},{headers:{'Cache-Control':tide?'public, s-maxage=3600':'public, s-maxage=60'}});
}
