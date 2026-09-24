 'use client';
import {useEffect,useRef,useState} from 'react';
import type * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type {WeatherPlace} from './WeatherPlaceSearch';
import s from './WeatherPanel.module.css';
type Point={id:string|null;name:string;lat:number;lon:number;count:number;choices?:{id:string;name:string}[]};
export default function WeatherLocationMap({selected,onSelect}:{selected:WeatherPlace|null;onSelect:(p:WeatherPlace)=>void}){
 const root=useRef<HTMLDivElement>(null),map=useRef<Leaflet.Map|null>(null),callback=useRef(onSelect);
 const [error,setError]=useState(false),[ready,setReady]=useState(false),[attempt,setAttempt]=useState(0);
 useEffect(()=>{callback.current=onSelect},[onSelect]);
 useEffect(()=>{
  let disposed=false,observer:ResizeObserver|undefined,request:AbortController|undefined,selection:AbortController|undefined,timer:ReturnType<typeof setTimeout>|undefined;
  setReady(false);setError(false);
  import('leaflet').then(L=>{
   if(disposed||!root.current)return;
   const instance=L.map(root.current,{scrollWheelZoom:false,minZoom:4,maxZoom:18,maxBounds:[[20,120],[50,155]],maxBoundsViscosity:1}).setView([36,137],5);map.current=instance;
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).addTo(instance);
   const layer=L.layerGroup().addTo(instance);
   const load=()=>{request?.abort();request=new AbortController();const signal=request.signal,b=instance.getBounds();const bounds=[Math.max(20,b.getSouth()),Math.max(120,b.getWest()),Math.min(50,b.getNorth()),Math.min(155,b.getEast())].map(v=>v.toFixed(4)).join(',');
    fetch(`/api/weather/places?bounds=${bounds}&zoom=${instance.getZoom()}`,{signal}).then(r=>{if(!r.ok)throw Error();return r.json() as Promise<Point[]>}).then(points=>{if(disposed||signal.aborted)return;layer.clearLayers();setError(false);for(const p of points){const marker=L.marker([p.lat,p.lon],{title:p.name,alt:p.name,icon:L.divIcon({className:s.weatherPin,html:p.count>1?`<b>${p.count}</b>`:'<b>●</b>',iconSize:[32,32],iconAnchor:[16,16]})}).addTo(layer);marker.getElement()?.setAttribute('aria-label',p.count>1?`${p.count}地点を拡大`:p.name);marker.bindTooltip(()=>{const el=document.createElement('span');el.textContent=p.name;return el});marker.on('click',()=>{if(!p.id){if(p.choices){const menu=document.createElement('div');menu.style.cssText='max-height:180px;overflow:auto';for(const c of p.choices){const button=document.createElement('button');button.textContent=c.name;button.style.cssText='display:block;background:white;border:0;padding:12px;color:#076b96';button.onclick=()=>{selection?.abort();selection=new AbortController();const signal=selection.signal;fetch(`/api/weather/places?id=${encodeURIComponent(c.id)}`,{signal}).then(r=>{if(!r.ok)throw Error();return r.json()}).then(place=>{if(!disposed&&!signal.aborted){callback.current(place);instance.closePopup()}}).catch(e=>{if(e.name!=='AbortError')setError(true)})};menu.appendChild(button)}marker.bindPopup(menu).openPopup()}else instance.setView([p.lat,p.lon],Math.min(18,instance.getZoom()+2));return}selection?.abort();selection=new AbortController();const pickSignal=selection.signal;fetch(`/api/weather/places?id=${encodeURIComponent(p.id)}`,{signal:pickSignal}).then(r=>{if(!r.ok)throw Error();return r.json()}).then(place=>{if(!disposed&&!pickSignal.aborted)callback.current(place)}).catch(e=>{if(e.name!=='AbortError')setError(true)})})}}).catch(e=>{if(!disposed&&e.name!=='AbortError')setError(true)});
   };
   instance.on('moveend',()=>{clearTimeout(timer);timer=setTimeout(load,200)});load();observer=new ResizeObserver(()=>instance.invalidateSize({pan:false}));observer.observe(root.current);setReady(true);
  }).catch(()=>{if(!disposed)setError(true)});
  return()=>{disposed=true;clearTimeout(timer);request?.abort();selection?.abort();observer?.disconnect();map.current?.remove();map.current=null};
 },[attempt]);
 useEffect(()=>{if(!ready||!selected||!map.current)return;const instance=map.current;let disposed=false;let marker:Leaflet.CircleMarker|undefined;import('leaflet').then(L=>{if(disposed)return;instance.setView([selected.lat,selected.lon],Math.max(11,instance.getZoom()));marker=L.circleMarker([selected.lat,selected.lon],{radius:19,color:'#e79d13',weight:3,fillOpacity:0,interactive:false}).addTo(instance).bindTooltip(()=>{const label=document.createElement('span');label.textContent=selected.name;return label},{permanent:true,direction:'top',offset:[0,-18]})});return()=>{disposed=true;marker?.remove()}},[ready,selected]);
 return <div><p className={s.hourlyNote}>地図を拡大して、釣り場のマーカーから天気を選べます。</p><div ref={root} className={s.weatherLocationMap} aria-label="詳細地点を選ぶ天気地図"/>{error&&<button type="button" onClick={()=>setAttempt(n=>n+1)}>地図を再読み込み</button>}</div>;
}
