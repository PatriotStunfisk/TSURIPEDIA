// Public JMA forecast and astronomical tide tables. No client credentials or inferred tide model.
export const weatherCities=[
 {id:'sapporo',name:'札幌',office:'016000',area:'016010',tide:'B3',port:'小樽'},
 {id:'sendai',name:'仙台',office:'040000',area:'040010',tide:'SD',port:'仙台新港'},
 {id:'tokyo',name:'東京',office:'130000',area:'130010',tide:'TK',port:'東京'},
 {id:'niigata',name:'新潟',office:'150000',area:'150010',tide:'S6',port:'新潟西港'},
 {id:'nagoya',name:'名古屋',office:'230000',area:'230010',tide:'NG',port:'名古屋'},
 {id:'osaka',name:'大阪',office:'270000',area:'270000',tide:'OS',port:'大阪'},
 {id:'wakayama',name:'和歌山',office:'300000',area:'300010',tide:'WY',port:'和歌山'},
 {id:'hiroshima',name:'広島',office:'340000',area:'340010',tide:'Q8',port:'広島'},
 {id:'fukuoka',name:'福岡',office:'400000',area:'400010',tide:'QF',port:'博多'},
 {id:'kagoshima',name:'鹿児島',office:'460100',area:'460010',tide:'KG',port:'鹿児島'},
 {id:'naha',name:'那覇',office:'471000',area:'471010',tide:'NH',port:'那覇'},
] as const;
export type WeatherCity=typeof weatherCities[number];
export type TideEvent={time:string;height:number};
export type TideDay={hours:(number|null)[];high:TideEvent[];low:TideEvent[]};
export type Forecast={published:string;weather:string;wind?:string;wave?:string;rain?:number};
export type WeatherResult={city:WeatherCity;date:string;forecast:Forecast|null;tide:TideDay|null};
export function japanDate(date=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(date)}
export function parseTide(text:string,date:string,station:string):TideDay|null{
 const [year,month,day]=date.split('-').map(Number);
 const line=text.split(/\r?\n/).find(l=>Number(l.slice(72,74))===year%100&&Number(l.slice(74,76))===month&&Number(l.slice(76,78))===day&&l.slice(78,80)===station);
 if(!line||line.length<136)return null;
 const value=(s:string)=>/^ *-?\d+$/.test(s)&&Number(s)!==999?Number(s):null;
 const hours=Array.from({length:24},(_,h)=>value(line.slice(h*3,h*3+3)));
 if(hours.every(h=>h===null))return null;
 const events=(offset:number)=>Array.from({length:4},(_,i)=>{const chunk=line.slice(offset+i*7,offset+i*7+7),t=chunk.slice(0,2).trim().padStart(2,'0')+chunk.slice(2,4).trim().padStart(2,'0'),height=value(chunk.slice(4));return /^\d{4}$/.test(t)&&Number(t.slice(0,2))<24&&Number(t.slice(2))<60&&height!==null?{time:t.slice(0,2)+':'+t.slice(2),height}:null}).filter((x):x is TideEvent=>x!==null);
 return {hours,high:events(80),low:events(108)};
}
type JmaArea={area:{code:string};weathers?:string[];winds?:string[];waves?:string[];pops?:string[]};
type JmaReport={reportDatetime:string;timeSeries:{timeDefines:string[];areas:JmaArea[]}[]};
export function parseForecast(data:unknown,date:string,area:string):Forecast|null{
 if(!Array.isArray(data))return null;
 const report=data[0] as JmaReport|undefined;
 if(!report?.timeSeries||!report.reportDatetime||!Number.isFinite(Date.parse(report.reportDatetime)))return null;
 // Do not present an old cached bulletin as today's weather.
 if(Date.parse(date+'T23:59:59+09:00')-Date.parse(report.reportDatetime)>48*3600000)return null;
 for(const ts of report.timeSeries){const a=ts.areas?.find(a=>a.area.code===area&&a.weathers);const i=ts.timeDefines?.findIndex(t=>t.slice(0,10)===date);if(a&&i>=0&&a.weathers?.[i]){
 const rain=report.timeSeries.flatMap(t=>{const a=t.areas.find(a=>a.area.code===area&&a.pops);return a?t.timeDefines.flatMap((d,i)=>d.slice(0,10)===date&&/^\d+$/.test(a.pops?.[i]??'')?[Number(a.pops![i])]:[]):[]});
 return {published:report.reportDatetime,weather:a.weathers[i].replace(/　/g,' '),wind:a.winds?.[i],wave:a.waves?.[i],rain:rain.length?Math.max(...rain):undefined};}}
 return null;
}
export async function getCityWeather(city:WeatherCity,date=japanDate()):Promise<WeatherResult>{
 const year=date.slice(0,4);
 const results=await Promise.allSettled([
  fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${city.office}.json`,{next:{revalidate:3600},signal:AbortSignal.timeout(7000)}).then(async r=>{if(!r.ok)throw Error('Forecast unavailable');return parseForecast(await r.json(),date,city.area)}),
  fetch(`https://www.data.jma.go.jp/kaiyou/data/db/tide/suisan/txt/${year}/${city.tide}.txt`,{next:{revalidate:86400},signal:AbortSignal.timeout(7000)}).then(async r=>{if(!r.ok)throw Error('Tide unavailable');return parseTide(await r.text(),date,city.tide)}),
 ]);
 return {city,date,forecast:results[0].status==='fulfilled'?results[0].value:null,tide:results[1].status==='fulfilled'?results[1].value:null};
}
