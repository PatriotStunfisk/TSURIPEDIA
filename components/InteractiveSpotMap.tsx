'use client';
import {useEffect,useRef,useState} from 'react';
import type * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {hasCoordinates} from '@/lib/spot-distance';
import type {FishingMapEntry} from '@/lib/fishing-map-data';
import s from './SpotMap.module.css';

type Props={entries:FishingMapEntry[];selected?:string;onSelect:(slug:string)=>void};
export default function InteractiveSpotMap({entries,selected,onSelect}:Props){
 const root=useRef<HTMLDivElement>(null),map=useRef<Leaflet.Map|null>(null),markers=useRef<Leaflet.LayerGroup|null>(null);
 const [ready,setReady]=useState(false),[failed,setFailed]=useState(false);
 const callback=useRef(onSelect);
 const fittedPoints=useRef('');
 useEffect(()=>{callback.current=onSelect},[onSelect]);
 useEffect(()=>{
  let cancelled=false;let observer:ResizeObserver|undefined;
  import('leaflet').then(L=>{
   if(cancelled||!root.current)return;
   const instance=L.map(root.current,{scrollWheelZoom:false}).setView([36.5,137.5],5);map.current=instance;
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).on('tileerror',()=>setFailed(true)).addTo(instance);
   markers.current=L.layerGroup().addTo(instance);
   observer=new ResizeObserver(()=>instance.invalidateSize());observer.observe(root.current);setReady(true);
  }).catch(()=>{if(!cancelled)setFailed(true)});
  return ()=>{cancelled=true;observer?.disconnect();map.current?.remove();map.current=null;markers.current=null;};
 },[]);
 useEffect(()=>{
  if(!ready)return;let cancelled=false;
  import('leaflet').then(L=>{
   if(cancelled||!map.current||!markers.current)return;
   markers.current.clearLayers();const points=entries.filter(hasCoordinates);
   for(const entry of points){
    const text=document.createElement('span');text.textContent=entry.name;
    L.marker([entry.lat,entry.lng],{title:entry.name,alt:entry.name,icon:L.divIcon({className:s.mapPin,html:entry.slug===selected?'●':'○',iconSize:[28,28],iconAnchor:[14,14]})}).bindTooltip(text).on('click',()=>callback.current(entry.slug)).addTo(markers.current);
   }
   const pointKey=points.map(e=>`${e.slug}:${e.lat}:${e.lng}`).sort().join('|');
   if(points.length&&pointKey!==fittedPoints.current){map.current.fitBounds(L.latLngBounds(points.map(e=>[e.lat,e.lng])),{padding:[30,30],maxZoom:13});fittedPoints.current=pointKey;}
  });return ()=>{cancelled=true};
 },[entries,ready,selected]);
 return <div className={s.mapFrame}><div ref={root} className={s.liveMap} aria-label="釣り場の地図"/>{failed&&<p role="status">地図を読み込めない部分があります。下の一覧と公式アクセス案内からも探せます。</p>}{!entries.some(hasCoordinates)&&<p role="status">現在の条件には位置登録のある地点がありません。下の一覧で地域と公式案内を確認できます。</p>}<p>丸印は登録地点の参考位置です。釣り可能範囲や入場口を示すものではありません。地図を拡大しても未登録の釣り場は表示されません。</p></div>;
}
