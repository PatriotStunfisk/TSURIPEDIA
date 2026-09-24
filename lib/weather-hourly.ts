import {weatherLocations} from './weather-locations';
export type HourForecast={time:string;temperature:number|null;wind:number|null;direction:number|null;rain:number|null;weather:string|null;wave:number|null};
export type HourlyResult={date:string;city:string;sea:string;published:string|null;hours:HourForecast[]};
const finite=(n:unknown):number|null=>typeof n==='number'&&Number.isFinite(n)?n:null;
export function metWeather(symbol:string):string|null{
 if(symbol.includes('thunder'))return '雷雨';if(symbol.includes('snow')||symbol.includes('sleet'))return '雪';if(symbol.includes('rain'))return '雨';if(symbol.includes('fog'))return '霧';if(symbol.startsWith('clearsky'))return '晴れ';if(symbol.startsWith('fair'))return '晴れ';if(symbol.startsWith('partlycloudy'))return '晴れ・曇り';if(symbol.startsWith('cloudy'))return '曇り';return null;
}
export function emptyHours(date:string):HourForecast[]{return Array.from({length:24},(_,h)=>({time:`${date}T${String(h).padStart(2,'0')}:00:00+09:00`,temperature:null,wind:null,direction:null,rain:null,weather:null,wave:null}))}
export function mergeHourly(date:string,met:unknown,waves:unknown,now=Date.now()):{hours:HourForecast[];published:string|null}{
 const hours=emptyHours(date),byTime=new Map(hours.map(h=>[Date.parse(h.time),h]));
 const m=met as {properties?:{meta?:{updated_at?:string};timeseries?:{time:string;data?:{instant?:{details?:Record<string,unknown>};next_1_hours?:{summary?:{symbol_code?:string};details?:{precipitation_amount?:number}}}}[]}}|null;
 const published=m?.properties?.meta?.updated_at??null;
 if(published&&Number.isFinite(Date.parse(published))&&now-Date.parse(published)<36*3600000&&Date.parse(published)<=now+3600000){
  for(const t of m?.properties?.timeseries??[]){const row=byTime.get(Date.parse(t.time)),d=t.data?.instant?.details;if(!row||!d)continue;row.temperature=finite(d.air_temperature);row.wind=finite(d.wind_speed);row.direction=finite(d.wind_from_direction);row.rain=finite(t.data?.next_1_hours?.details?.precipitation_amount);row.weather=metWeather(t.data?.next_1_hours?.summary?.symbol_code??'');}
 }
 const table=(waves as {table?:{columnNames?:string[];rows?:unknown[][]}}|null)?.table;
 const ti=table?.columnNames?.indexOf('time')??-1,wi=table?.columnNames?.indexOf('Thgt')??-1;
 if(ti>=0&&wi>=0)for(const r of table?.rows??[]){const row=byTime.get(Date.parse(String(r[ti]))),v=finite(r[wi]);if(row&&v!==null&&v>=0&&v<=60)row.wave=v;}
 return {hours,published:hours.some(h=>h.temperature!==null)?published:null};
}
export async function getHourlyWeather(city:keyof typeof weatherLocations,date:string):Promise<HourlyResult>{
 const p=weatherLocations[city],start=new Date(`${date}T00:00:00+09:00`).toISOString().replace('.000',''),end=new Date(`${date}T23:00:00+09:00`).toISOString().replace('.000','');
 const query=`Thgt[(${start}):1:(${end})][(0.0)][(${p.waveLat})][(${p.waveLon})]`;
 const urls=[`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${p.lat}&lon=${p.lon}`,`https://upwell.pfeg.noaa.gov/erddap/griddap/ww3_global.json?${encodeURI(query)}`];
 const result=await Promise.allSettled(urls.map(url=>fetch(url,{headers:{'User-Agent':'UOLINK/1.0 https://uolink.jp'},next:{revalidate:3600},signal:AbortSignal.timeout(12000)}).then(async r=>{if(!r.ok)throw Error('Hourly forecast unavailable');return r.json()})));
 const [met,waves]=result.map(r=>r.status==='fulfilled'?r.value:null);
 return {date,city,sea:p.sea,...mergeHourly(date,met,waves)};
}
export function windDirection(degrees:number|null){return degrees===null?'—':['北','北北東','北東','東北東','東','東南東','南東','南南東','南','南南西','南西','西南西','西','西北西','北西','北北西'][Math.round(degrees/22.5)%16]}
