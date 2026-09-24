import {japanDate} from './weather';
import {weatherLocations} from './weather-locations';
export type HourForecast={time:string;temperature:number|null;wind:number|null;direction:number|null;rain:number|null;weather:string|null;wave:number|null};
export type HourlyResult={date:string;city:string;sea:string;published:string|null;hours:HourForecast[];days:DayForecast[]};
export type DayForecast={date:string;weather:string|null;low:number|null;high:number|null};
const finite=(n:unknown):number|null=>typeof n==='number'&&Number.isFinite(n)?n:null;
export function metWeather(symbol:string):string|null{
 if(symbol.includes('thunder'))return '雷雨';if(symbol.includes('snow')||symbol.includes('sleet'))return '雪';if(symbol.includes('rain'))return '雨';if(symbol.includes('fog'))return '霧';if(symbol.startsWith('clearsky'))return '晴れ';if(symbol.startsWith('fair'))return '晴れ';if(symbol.startsWith('partlycloudy'))return '晴れ・曇り';if(symbol.startsWith('cloudy'))return '曇り';return null;
}
export function emptyHours(date:string):HourForecast[]{return Array.from({length:24},(_,h)=>({time:`${date}T${String(h).padStart(2,'0')}:00:00+09:00`,temperature:null,wind:null,direction:null,rain:null,weather:null,wave:null}))}
export function mergeHourly(date:string,met:unknown,waves:unknown,now=Date.now(),dayCount=1):{hours:HourForecast[];published:string|null}{
 const hours=Array.from({length:dayCount},(_,i)=>emptyHours(japanDate(new Date(Date.parse(date+'T00:00:00+09:00')+i*86400000)))).flat(),byTime=new Map(hours.map(h=>[Date.parse(h.time),h]));
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
 const p=weatherLocations[city],start=new Date(`${date}T00:00:00+09:00`).toISOString().replace('.000',''),end=new Date(Date.parse(`${date}T00:00:00+09:00`)+47*3600000).toISOString().replace('.000','');
 const query=`Thgt[(${start}):1:(${end})][(0.0)][(${p.waveLat})][(${p.waveLon})]`;
 const urls=[`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${p.lat}&lon=${p.lon}`,`https://upwell.pfeg.noaa.gov/erddap/griddap/ww3_global.json?${encodeURI(query)}`];
 const result=await Promise.allSettled(urls.map(url=>fetch(url,{headers:{'User-Agent':'UOLINK/1.0 https://uolink.jp'},next:{revalidate:3600},signal:AbortSignal.timeout(12000)}).then(async r=>{if(!r.ok)throw Error('Hourly forecast unavailable');return r.json()})));
 const [met,waves]=result.map(r=>r.status==='fulfilled'?r.value:null);
 return {date,city,sea:p.sea,...mergeHourly(date,met,waves,Date.now(),2),days:weeklyForecast(met,date)};
}
export function windDirection(degrees:number|null){return degrees===null?'—':['北','北北東','北東','東北東','東','東南東','南東','南南東','南','南南西','南西','西南西','西','西北西','北西','北北西'][Math.round(degrees/22.5)%16]}

export async function getPlaceHourlyWeather(place:{id:string;lat:number;lon:number},date:string):Promise<HourlyResult>{
 let met:unknown=null;
 try{const r=await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${place.lat}&lon=${place.lon}`,{headers:{'User-Agent':'UOLINK/1.0 https://uolink.jp'},next:{revalidate:3600},signal:AbortSignal.timeout(12000)});if(r.ok)met=await r.json()}catch{/* Independent point forecast failure is shown as unavailable. */}
 return {city:place.id,date,sea:'',...mergeHourly(date,met,null,Date.now(),2),days:weeklyForecast(met,date)};
}

// Medium-range forecasts have six-hour intervals. Keep missing hours missing;
// daily temperature ranges below use only supplied samples, not invented minima.
export function weeklyForecast(input:unknown,date:string,now=Date.now()):DayForecast[]{
 const m=input as {properties?:{meta?:{updated_at?:string};timeseries?:{time:string;data?:{instant?:{details?:{air_temperature?:number}};next_1_hours?:{summary?:{symbol_code?:string}};next_6_hours?:{summary?:{symbol_code?:string}}}}[]}}|null;
 const published=Date.parse(m?.properties?.meta?.updated_at??'');
 const fresh=Number.isFinite(published)&&now-published<36*3600000&&published<=now+3600000;
 return Array.from({length:7},(_,i)=>{
  const day=japanDate(new Date(Date.parse(date+'T00:00:00+09:00')+i*86400000));
  const rows=fresh?(m?.properties?.timeseries??[]).filter(t=>Number.isFinite(Date.parse(t.time))&&japanDate(new Date(t.time))===day):[];
  const temps=rows.map(t=>finite(t.data?.instant?.details?.air_temperature)).filter((v):v is number=>v!==null);
  const noon=Date.parse(day+'T12:00:00+09:00');
  const representative=rows.filter(t=>t.data?.next_1_hours?.summary||t.data?.next_6_hours?.summary).sort((a,b)=>Math.abs(Date.parse(a.time)-noon)-Math.abs(Date.parse(b.time)-noon))[0];
  return {date:day,weather:metWeather(representative?.data?.next_1_hours?.summary?.symbol_code??representative?.data?.next_6_hours?.summary?.symbol_code??''),low:temps.length?Math.min(...temps):null,high:temps.length?Math.max(...temps):null};
 });
}
