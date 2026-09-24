 'use client';
import {useEffect,useState} from 'react';
import {TideGraph} from './WeatherPanel';
import type {TideDay} from '@/lib/weather';
import s from './WeatherPanel.module.css';
type Result={station:{id:string;name:string};nearby:{id:string;name:string;km:number}[];tide:TideDay|null};
export default function WeatherPlaceTide({spot,date}:{spot:string;date:string}){
 const [station,setStation]=useState(''),[data,setData]=useState<Result|null>(null),[failed,setFailed]=useState(false),[retry,setRetry]=useState(0);
 useEffect(()=>{const c=new AbortController();setData(null);setFailed(false);fetch(`/api/weather/tide?spot=${encodeURIComponent(spot)}&date=${date}${station?'&station='+station:''}`,{signal:c.signal}).then(r=>{if(!r.ok)throw Error();return r.json()}).then(setData).catch(e=>{if(e.name!=='AbortError')setFailed(true)});return()=>c.abort()},[spot,date,station,retry]);
 return <section className={s.hourly}><h2>近隣のタイドグラフ</h2>{data&&<label>潮汐地点 <select aria-label="潮汐地点" value={data.station.id} onChange={e=>setStation(e.target.value)}>{data.nearby.map(p=><option key={p.id} value={p.id}>{p.name}（約{p.km}km）</option>)}</select></label>}{data?.tide?<><TideGraph tide={data.tide} port={data.station.name}/><p className={s.hourlyNote}>満潮 {data.tide.high.map(e=>e.time).join(' / ')||'—'} ・ 干潮 {data.tide.low.map(e=>e.time).join(' / ')||'—'}</p></>:<p>{!data&&!failed?'潮汐を取得中…':'潮汐を取得できませんでした。'}</p>}{(failed||(data&&!data.tide))&&<button onClick={()=>setRetry(v=>v+1)}>再取得</button>}<p className={s.hourlyNote}>近い観測地点を初期選択しています。湾・海域が異なる場合は切り替えてください。内陸・淡水地点の水位予測には使えません。</p>{data&&<a className={s.hourlyNote} href={`https://www.data.jma.go.jp/kaiyou/db/tide/suisan/suisan.php?stn=${data.station.id}`} target="_blank" rel="noreferrer">出典：気象庁・{data.station.name}の天文潮位（現地の実測水位ではありません）↗</a>}</section>;
}
