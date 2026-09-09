'use client';

import {useEffect,useMemo,useRef,useState} from 'react';
import {fishingMapEntries,fishingMapFish,type MapEntryType} from '@/lib/fishing-map-data';
import s from './SpotMap.module.css';

declare global{interface Window{google:any;__uolinkGoogleMaps?:Promise<void>}}

function loadGoogleMaps(key:string){
 if(window.google?.maps)return Promise.resolve();
 if(window.__uolinkGoogleMaps)return window.__uolinkGoogleMaps;
 window.__uolinkGoogleMaps=new Promise((resolve,reject)=>{
  const existing=document.querySelector<HTMLScriptElement>('script[data-uolink-google-maps]');
  if(existing){existing.addEventListener('load',()=>resolve(),{once:true});existing.addEventListener('error',()=>reject(new Error('Google Maps load failed')),{once:true});return}
  const script=document.createElement('script');script.dataset.uolinkGoogleMaps='true';script.src=`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&loading=async&v=weekly`;script.async=true;script.onload=()=>resolve();script.onerror=()=>reject(new Error('Google Maps load failed'));document.head.appendChild(script);
 });
 return window.__uolinkGoogleMaps;
}

export default function SpotMap(){
 const [kind,setKind]=useState<'all'|MapEntryType>('all');const [fish,setFish]=useState('すべて');const [query,setQuery]=useState('');const [selected,setSelected]=useState(fishingMapEntries[0]?.slug??'');const [mapError,setMapError]=useState('');
 const mapEl=useRef<HTMLDivElement>(null);const mapRef=useRef<any>(null);const markers=useRef<any[]>([]);
 const entries=useMemo(()=>fishingMapEntries.filter(e=>(kind==='all'||e.type===kind)&&(fish==='すべて'||e.fish.includes(fish))&&(!query||`${e.name}${e.area}${e.fish.join('')}${e.methods.join('')}`.toLowerCase().includes(query.toLowerCase()))),[kind,fish,query]);
 const active=entries.find(e=>e.slug===selected)??entries[0];
 useEffect(()=>{const key=process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;if(!key){setMapError('Google Mapsの設定を確認しています。');return}let cancelled=false;loadGoogleMaps(key).then(()=>{if(cancelled||!mapEl.current)return;mapRef.current=new window.google.maps.Map(mapEl.current,{center:{lat:34.56,lng:135.22},zoom:8,mapTypeControl:false,streetViewControl:false,fullscreenControl:false,gestureHandling:'greedy',clickableIcons:false});setMapError('')}).catch(()=>!cancelled&&setMapError('Google Mapsを読み込めませんでした。API設定を確認してください。'));return()=>{cancelled=true}},[]);
 useEffect(()=>{const map=mapRef.current;if(!map||!window.google?.maps)return;markers.current.forEach(m=>m.setMap(null));markers.current=entries.map(e=>{const marker=new window.google.maps.Marker({map,position:{lat:e.lat,lng:e.lng},title:e.name,label:{text:e.type==='boat'?'🚤':'🎣',fontSize:'16px'}});marker.addListener('click',()=>{setSelected(e.slug);map.panTo({lat:e.lat,lng:e.lng});if((map.getZoom()??8)<11)map.setZoom(11)});return marker});if(entries.length){const bounds=new window.google.maps.LatLngBounds();entries.forEach(e=>bounds.extend({lat:e.lat,lng:e.lng}));map.fitBounds(bounds,48);window.google.maps.event.addListenerOnce(map,'idle',()=>{if((map.getZoom()??8)>11)map.setZoom(11)})}},[entries]);
 const focusKansai=()=>{mapRef.current?.panTo({lat:34.52,lng:135.18});mapRef.current?.setZoom(9)};
 const reset=()=>{mapRef.current?.panTo({lat:36.2,lng:138.2});mapRef.current?.setZoom(5)};
 return <section className={s.wrap}>
  <div className={s.toolbar}><div className={s.tabs}><button className={kind==='all'?s.active:''} onClick={()=>setKind('all')}>すべて</button><button className={kind==='spot'?s.active:''} onClick={()=>setKind('spot')}>🎣 釣り場</button><button className={kind==='boat'?s.active:''} onClick={()=>setKind('boat')}>🚤 釣船</button></div><input aria-label="釣り場を検索" value={query} onChange={e=>setQuery(e.target.value)} placeholder="釣り場・魚・釣り方で検索"/></div>
  <div className={s.fishFilters}>{fishingMapFish.map(v=><button key={v} onClick={()=>setFish(v)} className={fish===v?s.activeChip:''}>{v}</button>)}</div>
  <div className={s.layout}><div className={s.mapShell}><div className={s.mapHeader}><div><span>UOLINK × GOOGLE MAPS</span><small>ピンチ・ドラッグで自由に探索</small></div><div className={s.mapActions}><button onClick={focusKansai}>関西へ</button><button onClick={reset}>全国</button></div></div>
   <div className={s.viewport}><div ref={mapEl} className={s.googleMap}/>{mapError&&<div className={s.mapError}>{mapError}</div>}</div><p className={s.note}>Google Maps上にUOLINKの釣り場・釣船データを重ねています。営業情報・立入可否は釣行前に最新情報を確認してください。</p></div>
   <aside className={s.panel}>{active?<><div className={s.panelTop}><span>{active.type==='boat'?'釣船':'釣り場'}</span><small>{active.area}</small></div><h2>{active.name}</h2><p>{active.note}</p><dl><div><dt>狙える魚</dt><dd>{active.fish.join('・')}</dd></div><div><dt>主な釣り方</dt><dd>{active.methods.join('・')}</dd></div><div><dt>シーズン</dt><dd>{active.season}</dd></div></dl><div className={s.badges}>{active.beginner&&<span>初心者向け</span>}{active.kids&&<span>親子向け</span>}{active.parking&&<span>駐車場</span>}{active.toilet&&<span>トイレ</span>}</div><a className={s.googleLink} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.googleQuery)}`} target="_blank" rel="noopener noreferrer">Googleマップで場所を確認 ↗</a></>:<div className={s.panelEmpty}>条件を変えて釣り場を探してください。</div>}</aside></div>
 </section>
}
