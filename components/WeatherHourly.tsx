'use client';
import {useEffect,useState,useRef} from 'react';
import {type HourlyResult,windDirection} from '@/lib/weather-hourly';
import WeatherIcon from './WeatherIcon';
import s from './WeatherPanel.module.css';
export default function WeatherHourly({city,date,spot}:{city:string;date:string;spot?:string}){
 const scroll=useRef<HTMLDivElement>(null);
 const [data,setData]=useState<HourlyResult|null>(null),[failed,setFailed]=useState(false),[retry,setRetry]=useState(0);
 useEffect(()=>{const controller=new AbortController();setData(null);setFailed(false);fetch(`/api/weather/hourly?${spot?`spot=${encodeURIComponent(spot)}`:`city=${city}`}&date=${date}`,{signal:controller.signal}).then(r=>{if(!r.ok)throw Error();return r.json()}).then(setData).catch(e=>{if(e.name!=='AbortError')setFailed(true)});return()=>controller.abort()},[city,date,retry,spot]);
 useEffect(()=>{if(!data||!scroll.current)return;const current=data.hours.findIndex(h=>Date.parse(h.time)>=Date.now()-3600000);const cell=scroll.current.querySelector('thead th:nth-child(2)');scroll.current.scrollLeft=Math.max(0,current)*(cell?.getBoundingClientRect().width??74)},[data]);
 const show=(v:number|null,unit='')=>v===null?'—':`${Math.round(v*10)/10}${unit}`;
 const available=data?.hours.some(h=>h.weather!==null||h.wave!==null);
 return <section className={s.hourly} aria-label="1時間ごとの予報"><h2>{spot?'1時間ごとの天気・風':'1時間ごとの天気・風・波'}</h2><p className={s.hourlyNote}>{date} · 日本時間 / 横にスワイプして確認</p>{!data&&!failed?<p role="status">時間別予報を取得中…</p>:available?<><div ref={scroll} className={s.hourlyScroll} tabIndex={0} role="region" aria-label="時間別予報表"><table><thead><tr><th scope="col">時刻</th>{data!.hours.map(h=><th scope="col" key={h.time}>{Number(h.time.slice(11,13))}時</th>)}</tr></thead><tbody><tr><th scope="row">天気</th>{data!.hours.map(h=><td key={h.time}>{h.weather?<span aria-label={h.weather} title={h.weather}><WeatherIcon text={h.weather}/><small>{h.weather}</small></span>:'—'}</td>)}</tr>{[['気温','temperature','℃'],['降水','rain','mm'],['風速','wind','m/s'],['沖合の波高','wave','m']].filter(([,key])=>!spot||key!=='wave').map(([label,key,unit])=><tr key={key}><th scope="row">{label}</th>{data!.hours.map(h=><td key={h.time}>{show(h[key as 'temperature'|'rain'|'wind'|'wave'],unit)}</td>)}</tr>)}<tr><th scope="row">風向</th>{data!.hours.map(h=><td key={h.time}>{windDirection(h.direction)}</td>)}</tr></tbody></table></div><p className={s.hourlyNote}>{!spot&&<>波：{data!.sea}（約50km格子の有義波高）。港内・岸際の波を表すものではありません。</>}— は未提供・取得不可。過去の時刻の天気は表示されない場合があります。</p></>:<p>時間別予報を取得できませんでした。日別予報もご確認ください。</p>}{(failed||(data&&!available))&&<button type="button" className={s.retry} onClick={()=>setRetry(n=>n+1)}>再取得</button>}
 {data?.published&&<p className={s.hourlyNote}>天気更新：{new Date(data.published).toLocaleString('ja-JP',{timeZone:'Asia/Tokyo'})}</p>}
 <div className={s.source}><a href="https://api.met.no/" target="_blank" rel="noreferrer">時間別天気：MET Norway</a><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0（表示用に加工）</a>{!spot&&<a href="https://www.pacioos.hawaii.edu/waves/model-global/" target="_blank" rel="noreferrer">波：PacIOOS / NOAA WW3</a>}</div></section>;
}
