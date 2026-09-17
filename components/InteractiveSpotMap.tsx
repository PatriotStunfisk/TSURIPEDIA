'use client';
import {useEffect,useRef,useState} from 'react';
import type * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {hasCoordinates} from '@/lib/spot-distance';
import type {FishingMapEntry} from '@/lib/fishing-map-data';
import {markerKinds,markerKind,clusterPoints,clusterCellSize} from '@/lib/spot-markers';
import type {SpotPrimaryType} from '@/lib/spot-classification';
import s from './SpotMap.module.css';
import {displaySpotPositions} from '@/lib/spot-marker-positions';
import {visibleSpotLabels} from '@/lib/spot-labels';
import type {TackleShop} from '@/lib/tackle-shops';
import type {Coordinates} from '@/lib/spot-distance';

type Props={favorites:readonly string[];favoritesOnly:boolean;onFavoritesChange:(on:boolean)=>void;userLocation?:Coordinates&{accuracy?:number};shopsOn:boolean;onShopsChange:(on:boolean)=>void;shops:TackleShop[];selectedShop?:string;onShopSelect:(id:string)=>void;focus?:Coordinates;entries:FishingMapEntry[];selected?:string;onSelect:(slug:string)=>void;selectedTypes:SpotPrimaryType[];onTypesChange:(types:SpotPrimaryType[])=>void;fitKey:string};
export default function InteractiveSpotMap({favorites,favoritesOnly,onFavoritesChange,userLocation,entries,shops,shopsOn,onShopsChange,selectedShop,onShopSelect,focus,selected,onSelect,selectedTypes,onTypesChange,fitKey}:Props){
 const root=useRef<HTMLDivElement>(null),map=useRef<Leaflet.Map|null>(null),markers=useRef<Leaflet.LayerGroup|null>(null);
 const [revision,setRevision]=useState(0);
 const [ready,setReady]=useState(false),[failed,setFailed]=useState(false);
 const callback=useRef(onSelect),shopCallback=useRef(onShopSelect);
 const fittedPoints=useRef<string|null>(null);
 const locationActive=useRef(false);
 // Do not persist a viewport derived from private geolocation, even after hiding the dot.
 useEffect(()=>{if(userLocation)locationActive.current=true},[userLocation]);
 useEffect(()=>{callback.current=onSelect;shopCallback.current=onShopSelect},[onSelect,onShopSelect]);
 useEffect(()=>{
  let cancelled=false;let observer:ResizeObserver|undefined;
  import('leaflet').then(L=>{
   if(cancelled||!root.current)return;
   const instance=L.map(root.current,{scrollWheelZoom:false}).setView([36.5,137.5],5);map.current=instance;
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).on('tileerror',()=>setFailed(true)).addTo(instance);
   instance.on('zoomend',()=>setRevision(v=>v+1));
   instance.on('moveend',()=>{setRevision(v=>v+1);if(!fittedPoints.current||locationActive.current)return;try{const c=instance.getCenter();sessionStorage.setItem('uolink-map-view-v1',JSON.stringify({key:fittedPoints.current,lat:c.lat,lng:c.lng,zoom:instance.getZoom()}));}catch{}});
   markers.current=L.layerGroup().addTo(instance);
   observer=new ResizeObserver(()=>instance.invalidateSize());observer.observe(root.current);setReady(true);
  }).catch(()=>{if(!cancelled)setFailed(true)});
  return ()=>{cancelled=true;observer?.disconnect();map.current?.remove();map.current=null;markers.current=null;};
 },[]);
 useEffect(()=>{
  if(!ready||!userLocation||!map.current)return;
  let cancelled=false;let layer:Leaflet.LayerGroup|undefined;
  import('leaflet').then(L=>{
   if(cancelled||!map.current)return;
   const instance=map.current,position=L.latLng(userLocation.lat,userLocation.lng);
   layer=L.layerGroup().addTo(instance);
   if(userLocation.accuracy!==undefined&&Number.isFinite(userLocation.accuracy)&&userLocation.accuracy>0)L.circle(position,{radius:userLocation.accuracy,color:'#1677ff',weight:1,fillColor:'#1677ff',fillOpacity:.1,interactive:false}).addTo(layer);
   L.marker(position,{title:'現在地',alt:'現在地',zIndexOffset:2000,icon:L.divIcon({className:s.currentLocation,html:'<span></span>',iconSize:[20,20],iconAnchor:[10,10]})}).bindTooltip('現在地（端末の測位による概算）',{direction:'top',offset:[0,-10]}).addTo(layer);
   instance.setView(position,Math.max(instance.getZoom(),12));
  });
  return ()=>{cancelled=true;layer?.remove();};
 },[ready,userLocation]);
 useEffect(()=>{
  if(!ready)return;let cancelled=false;
  import('leaflet').then(L=>{
   if(cancelled||!map.current||!markers.current)return;
   markers.current.clearLayers();const points=entries.filter(hasCoordinates);
   const instance=map.current,layer=markers.current;
   const pointKey=fitKey;
   if(fittedPoints.current===null&&!userLocation){try{const v=JSON.parse(sessionStorage.getItem('uolink-map-view-v1')??'null');if(v?.key===pointKey&&Number.isFinite(v.lat)&&Number.isFinite(v.lng)&&Math.abs(v.lat)<=90&&Math.abs(v.lng)<=180&&v.zoom>=3&&v.zoom<=18){fittedPoints.current=pointKey;instance.setView([v.lat,v.lng],v.zoom,{animate:false});}}catch{}}
   // Fit before projecting clusters; cancel an older zoom when filters change.
   if(!userLocation&&(points.length||shops.length||focus)&&pointKey!==fittedPoints.current){fittedPoints.current=pointKey;instance.stop();if(focus)instance.setView([focus.lat,focus.lng],11,{animate:false});else instance.fitBounds(L.latLngBounds([...points,...shops].map(e=>[e.lat,e.lng])),{padding:[30,30],maxZoom:13,animate:false});}
   const zoom=instance.getZoom(),renderBounds=instance.getBounds().pad(.2),favoriteSet=new Set(favorites);
   const positions=displaySpotPositions(points,p=>instance.project([p.lat,p.lng],zoom),zoom);
   const displayLatLng=(p:typeof points[number])=>{const v=positions.get(p.slug)!;return instance.unproject(L.point(v.x,v.y),zoom)};
   const groups=clusterPoints(points,p=>positions.get(p.slug)!,selected,clusterCellSize(zoom));
   const size=instance.getSize();const labels=visibleSpotLabels(groups.filter(g=>g.length===1).map(([e])=>({slug:e.slug,name:e.name,...instance.latLngToContainerPoint(displayLatLng(e))})),instance.getZoom(),size.x,size.y,selected);
   for(const group of groups){
    if(group.length>1){
     const center=L.latLngBounds(group.map(e=>[e.lat,e.lng])).getCenter();
     if(!renderBounds.contains(center))continue;
     const marker=L.marker(center,{title:`${group.length}件の地点を表示`,alt:`${group.length}件の地点を表示`,icon:L.divIcon({className:s.clusterPin,html:String(group.length),iconSize:[38,38],iconAnchor:[19,19]})}).addTo(layer);
     marker.bindPopup(()=>{const choices=document.createElement('div');choices.style.maxHeight='200px';choices.style.overflowY='auto';
     for(const e of group){const button=document.createElement('button');button.type='button';button.textContent=e.name;button.style.cssText='display:block;padding:12px;width:100%;text-align:left;border:0;background:white;cursor:pointer';button.onclick=()=>{instance.closePopup();callback.current(e.slug)};choices.appendChild(button);}
     return choices;});
     marker.getElement()?.setAttribute('aria-label',`${group.length}件の地点を表示`);continue;
    }
    const entry=group[0],kind=markerKinds[markerKind(entry)],chosen=entry.slug===selected,isFavorite=favoriteSet.has(entry.slug);
    if(!renderBounds.contains(displayLatLng(entry)))continue;
    const text=document.createElement('span');text.textContent=`${kind.label}：${entry.name}${isFavorite?'（お気に入り）':''}${chosen?'（選択中）':''}`;
    const tip=document.createElement('span');tip.textContent=labels.has(entry.slug)?entry.name:text.textContent;
    const display=displayLatLng(entry);
    if(!display.equals(L.latLng(entry.lat,entry.lng),1e-8)){L.polyline([[entry.lat,entry.lng],display],{color:kind.color,weight:1.5,opacity:.65,interactive:false}).addTo(layer);}
    const marker=L.marker(display,{title:text.textContent,alt:text.textContent,zIndexOffset:chosen?1000:0,icon:L.divIcon({className:`${s.mapPin} ${chosen?s.selectedPin:''}`,html:`<span style="display:block;border-radius:50%;background:${kind.color}">${kind.symbol}</span>${isFavorite?`<b class="${s.favoriteBadge}" aria-hidden="true">★</b>`:''}`,iconSize:[30,30],iconAnchor:[15,15]})}).bindTooltip(tip,{permanent:labels.has(entry.slug),direction:'top',offset:[0,-14],className:labels.has(entry.slug)?s.placeLabel:''}).on('click',()=>callback.current(entry.slug)).addTo(layer);
    marker.getElement()?.setAttribute('aria-label',text.textContent);
   }
   // Shops are a separate retail layer, excluded from fishing-spot clusters and totals.
   for(const shop of shops){if(!renderBounds.contains([shop.lat,shop.lng]))continue;const chosen=shop.id===selectedShop;const label=`釣具店：${shop.name}${chosen?'（選択中）':''}`;const tip=document.createElement('span');tip.textContent=label;const marker=L.marker([shop.lat,shop.lng],{title:label,alt:label,zIndexOffset:chosen?1200:100,icon:L.divIcon({className:`${s.mapPin} ${s.shopPin} ${chosen?s.selectedPin:''}`,html:'店',iconSize:[30,30],iconAnchor:[15,15]})}).bindTooltip(tip).on('click',()=>shopCallback.current(shop.id)).addTo(layer);marker.getElement()?.setAttribute('aria-label',label);}
  });return ()=>{cancelled=true};
 },[favorites,entries,shops,selectedShop,focus,ready,selected,revision,fitKey,userLocation]);
 return <div className={s.mapFrame}><div ref={root} className={s.liveMap} aria-label="釣り場の地図"/>{failed&&<p role="status">地図を読み込めない部分があります。下の一覧と公式アクセス案内からも探せます。</p>}{favoritesOnly&&favorites.length===0?<p role="status">お気に入りの釣り場はまだありません。</p>:!entries.some(hasCoordinates)&&!shops.length&&<p role="status">現在の条件には位置登録のある地点がありません。下の一覧で地域と公式案内を確認できます。</p>}<div className={s.legend} role="group" aria-label="釣り場タイプの複数選択"><button onClick={()=>onTypesChange(Object.keys(markerKinds) as SpotPrimaryType[])}>すべて選択</button><button onClick={()=>onTypesChange([])}>すべて解除</button>{Object.entries(markerKinds).map(([id,k])=><button key={id} aria-pressed={selectedTypes.includes(id as SpotPrimaryType)} onClick={()=>onTypesChange(selectedTypes.includes(id as SpotPrimaryType)?selectedTypes.filter(t=>t!==id):[...selectedTypes,id as SpotPrimaryType])}><i style={{background:k.color}}>{k.symbol}</i>{k.label}</button>)}<button className={s.shopChip} aria-pressed={shopsOn} onClick={()=>onShopsChange(!shopsOn)}><i>店</i>釣具店{shopsOn&&<small> {shops.length}</small>}</button><button className={s.favoriteChip} aria-pressed={favoritesOnly} onClick={()=>onFavoritesChange(!favoritesOnly)}>☆ お気に入りのみ{favorites.length>0&&<small>{favorites.length}</small>}</button></div><p>数字の丸印は近接地点の一覧を開きます。黒枠は選択中。★はお気に入り。{userLocation&&'青い点は現在地、薄い円は位置精度の目安です。'}同じ位置の地点は拡大時に少し離し、線で登録位置を示します。マーカーは登録地点の参考位置です。釣り可能範囲や入場口を示すものではありません。地図を拡大しても未登録の釣り場は表示されません。</p></div>;
}
