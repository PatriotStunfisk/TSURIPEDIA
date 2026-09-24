'use client';
import {useEffect,useRef,useState} from 'react';
import type {Map as LeafletMap} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import s from './SpotSitePlan.module.css';
// Only the selected coordinates cross the client boundary; load Leaflet near the viewport.
export default function SpotLocalMap({lat,lng,name}:{lat:number;lng:number;name:string}){
 const root=useRef<HTMLDivElement>(null);
 const [failed,setFailed]=useState(false);
 useEffect(()=>{
  let disposed=false,started=false,instance:LeafletMap|undefined,resize:ResizeObserver|undefined;
  const start=()=>{
   if(started||disposed)return;started=true;
   import('leaflet').then(L=>{
    if(disposed||!root.current)return;
    instance=L.map(root.current,{scrollWheelZoom:false}).setView([lat,lng],16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).on('tileerror',()=>{if(!disposed)setFailed(true)}).addTo(instance);
    const marker=L.circleMarker([lat,lng],{radius:9,color:'#ffffff',weight:3,fillColor:'#096b91',fillOpacity:1}).addTo(instance);
    const label=document.createElement('span');label.textContent=name;marker.bindTooltip(label,{permanent:true,direction:'top',offset:[0,-9]});
    if(typeof ResizeObserver!=='undefined'){resize=new ResizeObserver(()=>instance?.invalidateSize({pan:false}));resize.observe(root.current);}
   }).catch(()=>{if(!disposed)setFailed(true)});
  };
  let observer:IntersectionObserver|undefined;
  if(typeof IntersectionObserver!=='undefined'&&root.current){observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){observer?.disconnect();start()}},{rootMargin:'300px'});observer.observe(root.current);}else start();
  return()=>{disposed=true;observer?.disconnect();resize?.disconnect();instance?.remove();};
 },[lat,lng,name]);
 return <><div className={s.map} ref={root} role="region" aria-label={`${name}の周辺地図`}/>{failed&&<p className={s.notes}>地図を読み込めない場合は、下の「地図を大きく開く」から確認できます。</p>}</>;
}
