'use client';
import {useEffect,useState} from 'react';
import {weatherCities,japanDate,type WeatherResult,type TideDay} from '@/lib/weather';
import s from './WeatherPanel.module.css';
export function TideGraph({tide,port}:{tide:TideDay;port:string}){
 const values=tide.hours.filter((n):n is number=>n!==null),min=Math.min(...values)-10,max=Math.max(...values)+10;
 const y=(n:number)=>78-(n-min)/(max-min)*60;
 let path='';tide.hours.forEach((v,i)=>{if(v!==null)path+=`${i===0||tide.hours[i-1]===null?'M':'L'}${12+i*276/23},${y(v)} `});
 return <svg className={s.graph} viewBox="0 0 310 108" role="img" aria-label={`${port}の0時から23時までの予測潮位。単位cm`}><title>{port}の予測潮位（cm）</title><path d="M12 78H288" stroke="#d9e8f2" fill="none"/><path d={path} stroke="#1687e8" strokeWidth="2.5" fill="none"/>{[0,6,12,18,23].map(h=><text key={h} x={12+h*276/23} y="101" textAnchor="middle">{h}時</text>)}<text x="302" y="13" textAnchor="end">{Math.round(max-10)}cm</text><text x="302" y="85" textAnchor="end">{Math.round(min+10)}cm</text></svg>;
}
export default function WeatherPanel({compact=false}:{compact?:boolean}){
 const [city,setCity]=useState('osaka'),[offset,setOffset]=useState(0),[data,setData]=useState<WeatherResult|null>(null),[failed,setFailed]=useState(false),[retry,setRetry]=useState(0);
 useEffect(()=>{if(!compact){const id=new URLSearchParams(window.location.search).get('city');if(weatherCities.some(c=>c.id===id))setCity(id!)}},[compact]);
 const date=japanDate(new Date(Date.now()+offset*86400000));
 useEffect(()=>{const controller=new AbortController();setData(null);setFailed(false);fetch(`/api/weather?city=${city}&date=${date}`,{signal:controller.signal}).then(r=>{if(!r.ok)throw Error();return r.json()}).then(d=>setData(d)).catch(e=>{if(e.name!=='AbortError')setFailed(true)});return()=>controller.abort()},[city,date,retry]);
 const place=weatherCities.find(c=>c.id===city)!;
 return <section className={`${s.panel} ${compact?s.compact:''}`} aria-label="全国の天気と潮汐"><div className={s.head}><strong>天気・タイドグラフ</strong><label><span className="srOnly">都市</span><select value={city} onChange={e=>setCity(e.target.value)}>{weatherCities.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select></label>{compact?<a href={`/weather?city=${city}`}>詳しく見る →</a>:<label><span className="srOnly">日付</span><select value={offset} onChange={e=>setOffset(Number(e.target.value))}><option value={0}>今日</option><option value={1}>明日</option></select></label>}</div>
 <div className={s.body} aria-live="polite"><div><small>{date} · {place.name}</small>{!data&&!failed?<p>天気を読み込み中…</p>:<><p className={s.weather}>{data?.forecast?.weather??'天気データを取得できませんでした'}</p>{data?.forecast&&<p>降水確率 {data.forecast.rain!==undefined?`${data.forecast.rain}%（日内最大）`:'—'}</p>}{!compact&&data?.forecast&&<><p>風：{data.forecast.wind??'情報なし'}</p><p>波：{data.forecast.wave??'情報なし'}</p><small>発表：{new Date(data.forecast.published).toLocaleString('ja-JP',{timeZone:'Asia/Tokyo'})}</small></>}</>}</div><div><small>潮汐地点：{place.port} · 予測潮位</small>{data?.tide?<><TideGraph tide={data.tide} port={place.port}/>{!compact&&<div className={s.events}><p>満潮 {data.tide.high.map(e=>`${e.time}（${e.height}cm）`).join(' / ')||'この日は予測なし'}</p><p>干潮 {data.tide.low.map(e=>`${e.time}（${e.height}cm）`).join(' / ')||'この日は予測なし'}</p></div>}</>:<p>{!data&&!failed?'潮汐を読み込み中…':'潮汐データを取得できませんでした'}</p>}</div></div>
 {(failed||(data&&(!data.forecast||!data.tide)))&&<button className={s.retry} onClick={()=>setRetry(n=>n+1)}>再読み込み</button>}
 <div className={s.source}><a href={`https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=${place.office}`} target="_blank" rel="noreferrer">出典：気象庁（天気）</a><a href={`https://www.data.jma.go.jp/kaiyou/db/tide/suisan/suisan.php?stn=${place.tide}`} target="_blank" rel="noreferrer">潮位表</a><span>時刻は日本時間。潮位は天文潮位で、波・高潮や現地の実測水位とは異なります。</span></div></section>;
}
