'use client';
import {useEffect,useState} from 'react';
import {weatherCities,japanDate,type WeatherResult,type TideDay} from '@/lib/weather';
import s from './WeatherPanel.module.css';
import WeatherIcon from './WeatherIcon';
import dynamic from 'next/dynamic';
const WeatherDetail=dynamic(()=>import('./WeatherDetail'));
export function TideGraph({tide,port,mini=false}:{tide:TideDay;port:string;mini?:boolean}){
 const values=tide.hours.filter((n):n is number=>n!==null),min=Math.min(...values)-10,max=Math.max(...values)+10;
 const y=(n:number)=>78-(n-min)/(max-min)*60;
 let path='';tide.hours.forEach((v,i)=>{if(v!==null)path+=`${i===0||tide.hours[i-1]===null?'M':'L'}${12+i*276/23},${y(v)} `});
 return <svg className={`${s.graph} ${mini?s.miniGraph:''}`} viewBox={mini?"0 8 310 80":"0 0 310 108"} role="img" aria-label={`${port}の0時から23時までの予測潮位。単位cm`}><title>{port}の予測潮位（cm）</title><path d="M12 78H288" stroke="#d9e8f2" fill="none"/><path d={path} stroke="#1687e8" strokeWidth="2.5" fill="none"/>{!mini&&[0,6,12,18,23].map(h=><text key={h} x={12+h*276/23} y="101" textAnchor="middle">{h}時</text>)}{!mini&&<><text x="302" y="13" textAnchor="end">{Math.round(max-10)}cm</text><text x="302" y="85" textAnchor="end">{Math.round(min+10)}cm</text></>}</svg>;
}
const overviewCities=weatherCities.filter(c=>['sapporo','tokyo','nagoya','osaka','fukuoka','naha'].includes(c.id));
function WeatherOverview(){
 const [results,setResults]=useState<Record<string,WeatherResult|null>>({});
 const date=japanDate();
 useEffect(()=>{
  const controller=new AbortController();
  for(const city of overviewCities){
   fetch(`/api/weather?city=${city.id}&date=${date}`,{signal:controller.signal})
    .then(r=>{if(!r.ok)throw Error();return r.json() as Promise<WeatherResult>})
    .then(result=>setResults(previous=>({...previous,[city.id]:result})))
    .catch(error=>{if(error.name!=='AbortError')setResults(previous=>({...previous,[city.id]:null}))});
  }
  return()=>controller.abort();
 },[date]);
 return <section className={`${s.panel} ${s.overview}`} aria-label="全国主要都市の天気と潮汐">
  <div className={s.head}><strong>全国の天気・タイドグラフ</strong><a href="/weather">詳しく見る →</a></div>
  <small className={s.overviewDate}>{date} · 今日の予報</small>
  <div className={s.cityGrid}>{overviewCities.map(city=>{
   const data=results[city.id],forecast=data?.forecast;
   return <a className={s.cityCard} href={`/weather?city=${city.id}`} key={city.id} aria-label={`${city.name}の天気・潮汐を詳しく見る`}>
    <div className={s.cityTitle}><strong>{city.name}</strong>{forecast?<span role="img" aria-label={forecast.weather} title={forecast.weather}><WeatherIcon text={forecast.weather}/></span>:<small>{data===undefined?'…':'—'}</small>}</div>
    {data?.tide?<TideGraph tide={data.tide} port={city.port} mini/>:<div className={s.miniPlaceholder}>{data===undefined?'潮汐を取得中…':'潮汐取得できず'}</div>}
    <small className={s.port}>{city.port}</small>
   </a>;
  })}</div>
  <div className={s.source}><a href="https://www.jma.go.jp/bosai/forecast/" target="_blank" rel="noreferrer">出典：気象庁</a><span>潮位は各港の今日0〜23時の予測。風・波・満干潮は詳細へ。</span></div>
 </section>;
}
export default function WeatherPanel({compact=false}:{compact?:boolean}){
 return compact?<WeatherOverview/>:<WeatherDetail/>;
}
