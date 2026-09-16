'use client';
import {useEffect,useRef,useState} from 'react';
import type * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {hasCoordinates} from '@/lib/spot-distance';
import type {FishingMapEntry} from '@/lib/fishing-map-data';
import {markerKinds,markerKind,clusterPoints,clusterCellSize} from '@/lib/spot-markers';
import type {SpotPrimaryType} from '@/lib/spot-classification';
import s from './SpotMap.module.css';

type Props={entries:FishingMapEntry[];selected?:string;onSelect:(slug:string)=>void;selectedTypes:SpotPrimaryType[];onTypesChange:(types:SpotPrimaryType[])=>void;fitKey:string};
export default function InteractiveSpotMap({entries,selected,onSelect,selectedTypes,onTypesChange,fitKey}:Props){
 const root=useRef<HTMLDivElement>(null),map=useRef<Leaflet.Map|null>(null),markers=useRef<Leaflet.LayerGroup|null>(null);
 const [revision,setRevision]=useState(0);
 const [ready,setReady]=useState(false),[failed,setFailed]=useState(false);
 const callback=useRef(onSelect);
 const fittedPoints=useRef<string|null>(null);
 useEffect(()=>{callback.current=onSelect},[onSelect]);
 useEffect(()=>{
  let cancelled=false;let observer:ResizeObserver|undefined;
  import('leaflet').then(L=>{
   if(cancelled||!root.current)return;
   const instance=L.map(root.current,{scrollWheelZoom:false}).setView([36.5,137.5],5);map.current=instance;
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).on('tileerror',()=>setFailed(true)).addTo(instance);
   instance.on('zoomend',()=>setRevision(v=>v+1));
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
   const instance=map.current,layer=markers.current;
   const pointKey=fitKey;
   // Fit before projecting clusters; cancel an older zoom when filters change.
   if(points.length&&pointKey!==fittedPoints.current){fittedPoints.current=pointKey;instance.stop();instance.fitBounds(L.latLngBounds(points.map(e=>[e.lat,e.lng])),{padding:[30,30],maxZoom:13,animate:false});}
   const groups=clusterPoints(points,p=>instance.project([p.lat,p.lng],instance.getZoom()),selected,clusterCellSize(instance.getZoom()));
   for(const group of groups){
    if(group.length>1){
     const center=L.latLngBounds(group.map(e=>[e.lat,e.lng])).getCenter();
     const marker=L.marker(center,{title:`${group.length}件の地点を表示`,alt:`${group.length}件の地点を表示`,icon:L.divIcon({className:s.clusterPin,html:String(group.length),iconSize:[38,38],iconAnchor:[19,19]})}).addTo(layer);
     const choices=document.createElement('div');choices.style.maxHeight='200px';choices.style.overflowY='auto';
     for(const e of group){const button=document.createElement('button');button.type='button';button.textContent=e.name;button.style.cssText='display:block;padding:12px;width:100%;text-align:left;border:0;background:white;cursor:pointer';button.onclick=()=>{instance.closePopup();callback.current(e.slug)};choices.appendChild(button);}
     marker.getElement()?.setAttribute('aria-label',`${group.length}件の地点を表示`);
     marker.bindPopup(choices);continue;
    }
    const entry=group[0],kind=markerKinds[markerKind(entry)],chosen=entry.slug===selected;
    const text=document.createElement('span');text.textContent=`${kind.label}：${entry.name}${chosen?'（選択中）':''}`;
    const marker=L.marker([entry.lat,entry.lng],{title:text.textContent,alt:text.textContent,zIndexOffset:chosen?1000:0,icon:L.divIcon({className:`${s.mapPin} ${chosen?s.selectedPin:''}`,html:`<span style="display:block;border-radius:50%;background:${kind.color}">${kind.symbol}</span>`,iconSize:[30,30],iconAnchor:[15,15]})}).bindTooltip(text).on('click',()=>callback.current(entry.slug)).addTo(layer);
    marker.getElement()?.setAttribute('aria-label',text.textContent);
   }
  });return ()=>{cancelled=true};
 },[entries,ready,selected,revision,fitKey]);
 return <div className={s.mapFrame}><div ref={root} className={s.liveMap} aria-label="釣り場の地図"/>{failed&&<p role="status">地図を読み込めない部分があります。下の一覧と公式アクセス案内からも探せます。</p>}{!entries.some(hasCoordinates)&&<p role="status">現在の条件には位置登録のある地点がありません。下の一覧で地域と公式案内を確認できます。</p>}<div className={s.legend} role="group" aria-label="釣り場タイプの複数選択"><button onClick={()=>onTypesChange(Object.keys(markerKinds) as SpotPrimaryType[])}>すべて選択</button><button onClick={()=>onTypesChange([])}>すべて解除</button>{Object.entries(markerKinds).map(([id,k])=><button key={id} aria-pressed={selectedTypes.includes(id as SpotPrimaryType)} onClick={()=>onTypesChange(selectedTypes.includes(id as SpotPrimaryType)?selectedTypes.filter(t=>t!==id):[...selectedTypes,id as SpotPrimaryType])}><i style={{background:k.color}}>{k.symbol}</i>{k.label}</button>)}</div><p>数字の丸印は近接地点の一覧を開きます。黒枠は選択中。マーカーは登録地点の参考位置です。釣り可能範囲や入場口を示すものではありません。地図を拡大しても未登録の釣り場は表示されません。</p></div>;
}
