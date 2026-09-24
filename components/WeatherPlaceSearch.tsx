'use client';
import {useState,useEffect} from 'react';
import s from './WeatherPanel.module.css';
export type WeatherPlace={id:string;name:string;area:string};
export default function WeatherPlaceSearch({onSelect}:{onSelect:(p:WeatherPlace)=>void}){
 const [query,setQuery]=useState(''),[results,setResults]=useState<WeatherPlace[]>([]),[loading,setLoading]=useState(false),[error,setError]=useState(false);
 useEffect(()=>{const controller=new AbortController();setResults([]);setError(false);if(query.trim().length<2){setLoading(false);return}setLoading(true);const timer=setTimeout(()=>{fetch(`/api/weather/places?q=${encodeURIComponent(query)}`,{signal:controller.signal}).then(r=>{if(!r.ok)throw Error();return r.json()}).then(setResults).catch(e=>{if(e.name!=='AbortError')setError(true)}).finally(()=>{if(!controller.signal.aborted)setLoading(false)})},300);return()=>{clearTimeout(timer);controller.abort()}},[query]);
 return <div className={s.placeSearch}><label htmlFor="weather-place">地名・釣り場名から天気を探す</label><input id="weather-place" type="search" placeholder="例：白浜、淡路島、八丈島、琵琶湖" value={query} maxLength={80} onChange={e=>setQuery(e.target.value)}/><small>UOLINK MAPの登録地点から検索（2文字以上）</small>{query.trim().length>=2&&<div role="status">{loading?'検索中…':error?'検索できませんでした。入力し直してお試しください。':results.length?`${results.length}件${results.length===20?'まで表示・地名を追加して絞り込めます':''}`:'該当地点がありません。別の地名で検索してください。'}</div>}{results.length>0&&<ul>{results.map(p=><li key={p.id}><button type="button" onClick={()=>{onSelect(p);setQuery('')}}><strong>{p.name}</strong><small>{p.area}</small><span>天気を見る →</span></button></li>)}</ul>}</div>;
}
