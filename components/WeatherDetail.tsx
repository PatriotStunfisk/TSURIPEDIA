'use client';
import {useState,useEffect} from 'react';
import {weatherCities,japanDate,type WeatherResult} from '@/lib/weather';
import {TideGraph} from './WeatherPanel';
import WeatherIcon from './WeatherIcon';
import dynamic from 'next/dynamic';
const WeatherLocationMap=dynamic(()=>import('./WeatherLocationMap'),{ssr:false,loading:()=> <p>地図を読み込み中…</p>});
import WeatherHourly from './WeatherHourly';
import WeatherPlaceSearch,{type WeatherPlace} from './WeatherPlaceSearch';
import s from './WeatherPanel.module.css';
export default function WeatherDetail(){
 const compact=false;
 const [spot,setSpot]=useState<WeatherPlace|null>(null);
 useEffect(()=>{const id=new URLSearchParams(window.location.search).get('spot');if(!id)return;const c=new AbortController();fetch(`/api/weather/places?id=${encodeURIComponent(id)}`,{signal:c.signal}).then(r=>r.ok?r.json():null).then(setSpot).catch(()=>{});return()=>c.abort()},[]);
 const [city,setCity]=useState('osaka'),[offset,setOffset]=useState(0),[data,setData]=useState<WeatherResult|null>(null),[failed,setFailed]=useState(false),[retry,setRetry]=useState(0);
 useEffect(()=>{if(!compact){const id=new URLSearchParams(window.location.search).get('city');if(weatherCities.some(c=>c.id===id))setCity(id!)}},[compact]);
 const date=japanDate(new Date(Date.now()+offset*86400000));
 useEffect(()=>{const controller=new AbortController();setData(null);setFailed(false);fetch(`/api/weather?city=${city}&date=${date}`,{signal:controller.signal}).then(r=>{if(!r.ok)throw Error();return r.json()}).then(d=>setData(d)).catch(e=>{if(e.name!=='AbortError')setFailed(true)});return()=>controller.abort()},[city,date,retry]);
 const place=weatherCities.find(c=>c.id===city)!;
 return <section className={`${s.panel} ${compact?s.compact:''}`} aria-label="全国の天気と潮汐"><div className={s.head}><strong>天気・タイドグラフ</strong><label><span className="srOnly">都市</span><select value={spot?'':city} onChange={e=>{setCity(e.target.value);setSpot(null);window.history.replaceState(null,'',`?city=${e.target.value}`)}}>{spot&&<option value="" disabled>釣り場を選択中</option>}{weatherCities.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select></label>{compact?<a href={`/weather?city=${city}`}>詳しく見る →</a>:<label><span className="srOnly">日付</span><select value={offset} onChange={e=>setOffset(Number(e.target.value))}><option value={0}>今日</option><option value={1}>明日</option></select></label>}</div>
 <WeatherPlaceSearch onSelect={p=>{setSpot(p);window.history.replaceState(null,'',`?spot=${encodeURIComponent(p.id)}`)}}/><WeatherLocationMap selected={spot} onSelect={p=>{setSpot(p);window.history.replaceState(null,'',`?spot=${encodeURIComponent(p.id)}`)}}/><div className={s.cityChoices} aria-label="主要都市の天気・潮汐">{weatherCities.map(c=><button key={c.id} aria-pressed={!spot&&city===c.id} onClick={()=>{setCity(c.id);setSpot(null);window.history.replaceState(null,'',`?city=${c.id}`)}}>{c.name}</button>)}</div>{spot?<section className={s.selectedPlace}><h2>{spot.name}の天気</h2><p>{spot.area}</p><a href={`/spots/${spot.id}`}>釣り場情報を見る →</a><WeatherHourly key={spot.id} city={city} date={date} spot={spot.id}/><p className={s.hourlyNote}>登録地点の座標に基づく予報です。この地点の潮汐・波高は未対応です。海域の予報は地図上の主要都市から確認できます。</p></section>:<><div className={s.body} aria-live="polite"><div><small>{date} · {place.name}</small>{!data&&!failed?<p>天気を読み込み中…</p>:<><p className={s.weather}>{data?.forecast&&<WeatherIcon text={data.forecast.weather}/>} {data?.forecast?.weather??'天気データを取得できませんでした'}</p>{data?.forecast&&<p>降水確率 {data.forecast.rain!==undefined?`${data.forecast.rain}%（日内最大）`:'—'}</p>}{!compact&&data?.forecast&&<><p>風：{data.forecast.wind??'情報なし'}</p><p>波：{data.forecast.wave??'情報なし'}</p><small>発表：{new Date(data.forecast.published).toLocaleString('ja-JP',{timeZone:'Asia/Tokyo'})}</small></>}</>}</div><div><small>潮汐地点：{place.port} · 予測潮位</small>{data?.tide?<><TideGraph tide={data.tide} port={place.port}/>{!compact&&<div className={s.events}><p>満潮 {data.tide.high.map(e=>`${e.time}（${e.height}cm）`).join(' / ')||'この日は予測なし'}</p><p>干潮 {data.tide.low.map(e=>`${e.time}（${e.height}cm）`).join(' / ')||'この日は予測なし'}</p></div>}</>:<p>{!data&&!failed?'潮汐を読み込み中…':'潮汐データを取得できませんでした'}</p>}</div></div>
 {(failed||(data&&(!data.forecast||!data.tide)))&&<button className={s.retry} onClick={()=>setRetry(n=>n+1)}>再読み込み</button>}
 <WeatherHourly city={city} date={date}/><div className={s.source}><a href={`https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=${place.office}`} target="_blank" rel="noreferrer">出典：気象庁（天気）</a><a href={`https://www.data.jma.go.jp/kaiyou/db/tide/suisan/suisan.php?stn=${place.tide}`} target="_blank" rel="noreferrer">潮位表</a><span>時刻は日本時間。潮位は天文潮位で、波・高潮や現地の実測水位とは異なります。</span></div></>}</section>;
}
