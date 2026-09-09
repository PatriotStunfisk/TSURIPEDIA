'use client';

import {useMemo,useRef,useState} from 'react';
import {fishingMapEntries,fishingMapFish,type MapEntryType} from '@/lib/fishing-map-data';
import s from './SpotMap.module.css';

const MAX_ZOOM=3.6;
const pinPosition:Record<string,{x:number;y:number}>={
 'mukogawa-ichimonji':{x:43.05,y:62.45},'hira-isoumi':{x:42.30,y:62.72},'tottopark-kojima':{x:42.55,y:63.85},'nanko-fishing-park':{x:42.90,y:63.15},'kada-port':{x:42.45,y:64.00}
};
const clamp=(n:number,min:number,max:number)=>Math.max(min,Math.min(max,n));

export default function SpotMap(){
 const [kind,setKind]=useState<'all'|MapEntryType>('all');const [fish,setFish]=useState('すべて');const [query,setQuery]=useState('');const [selected,setSelected]=useState(fishingMapEntries[0]?.slug??'');
 const [view,setView]=useState({x:0,y:0,scale:1});const drag=useRef<{x:number;y:number;vx:number;vy:number}|null>(null);const pinch=useRef<{distance:number;scale:number}|null>(null);const pointers=useRef(new Map<number,{x:number;y:number}>());
 const entries=useMemo(()=>fishingMapEntries.filter(e=>(kind==='all'||e.type===kind)&&(fish==='すべて'||e.fish.includes(fish))&&(!query||`${e.name}${e.area}${e.fish.join('')}${e.methods.join('')}`.toLowerCase().includes(query.toLowerCase()))),[kind,fish,query]);
 const active=entries.find(e=>e.slug===selected)??entries[0];
 const safeView=(x:number,y:number,scale:number)=>({x:clamp(x,-520*(scale-1),520*(scale-1)),y:clamp(y,-700*(scale-1),700*(scale-1)),scale:clamp(scale,1,MAX_ZOOM)});
 const zoom=(delta:number)=>setView(v=>safeView(v.x,v.y,v.scale+delta));
 const focusKansai=()=>setView({x:115,y:-135,scale:3.35});const reset=()=>setView({x:0,y:0,scale:1});
 const onPointerDown=(e:React.PointerEvent)=>{pointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.current.size===1)drag.current={x:e.clientX,y:e.clientY,vx:view.x,vy:view.y};if(pointers.current.size===2){const a=[...pointers.current.values()];pinch.current={distance:Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y),scale:view.scale}}};
 const onPointerMove=(e:React.PointerEvent)=>{if(!pointers.current.has(e.pointerId))return;pointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.current.size===2&&pinch.current){const a=[...pointers.current.values()];const d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);const next=clamp(pinch.current.scale*d/pinch.current.distance,1,MAX_ZOOM);setView(v=>safeView(v.x,v.y,next));return}if(drag.current&&pointers.current.size===1)setView(v=>safeView(drag.current!.vx+e.clientX-drag.current!.x,drag.current!.vy+e.clientY-drag.current!.y,v.scale))};
 const onPointerUp=(e:React.PointerEvent)=>{pointers.current.delete(e.pointerId);if(pointers.current.size===0)drag.current=null;if(pointers.current.size<2)pinch.current=null};
 return <section className={s.wrap}>
  <div className={s.toolbar}><div className={s.tabs}><button className={kind==='all'?s.active:''} onClick={()=>setKind('all')}>すべて</button><button className={kind==='spot'?s.active:''} onClick={()=>setKind('spot')}>🎣 釣り場</button><button className={kind==='boat'?s.active:''} onClick={()=>setKind('boat')}>🚤 釣船</button></div><input aria-label="釣り場を検索" value={query} onChange={e=>setQuery(e.target.value)} placeholder="釣り場・魚・釣り方で検索"/></div>
  <div className={s.fishFilters}>{fishingMapFish.map(v=><button key={v} onClick={()=>setFish(v)} className={fish===v?s.activeChip:''}>{v}</button>)}</div>
  <div className={s.layout}><div className={s.mapShell}><div className={s.mapHeader}><div><span>UOLINK FISHING MAP</span><small>ドラッグ・ピンチで移動 / 拡大</small></div><div className={s.mapActions}><button onClick={focusKansai}>関西へ</button><button onClick={reset}>全国</button></div></div>
   <div className={s.viewport} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} onWheel={e=>zoom(e.deltaY<0?.35:-.35)}>
    <div className={s.canvas} style={{transform:`translate3d(${view.x}px,${view.y}px,0) scale(${view.scale})`}}><img src="/images/maps/uolink-japan-base-map.jpg" alt="日本全国のUOLINK釣り場マップ" draggable={false}/>{entries.map(e=>{const p=pinPosition[e.slug];if(!p)return null;return <button key={e.slug} className={`${s.pin} ${selected===e.slug?s.pinActive:''}`} style={{left:`${p.x}%`,top:`${p.y}%`}} onPointerDown={ev=>ev.stopPropagation()} onClick={()=>setSelected(e.slug)}><span>{e.type==='boat'?'🚤':'🎣'}</span><b>{e.name}</b></button>})}</div>
    <div className={s.zoom}><button onPointerDown={e=>e.stopPropagation()} onClick={()=>zoom(.55)}>＋</button><button onPointerDown={e=>e.stopPropagation()} onClick={()=>zoom(-.55)}>−</button></div>
   </div><p className={s.note}>地図素材：つながる白地図（freemap.jp）をUOLINK用に加工。高精細版へ順次切替予定。ピン位置・営業情報・立入可否は釣行前に最新情報を確認してください。</p></div>
   <aside className={s.panel}>{active?<><div className={s.panelTop}><span>{active.type==='boat'?'釣船':'釣り場'}</span><small>{active.area}</small></div><h2>{active.name}</h2><p>{active.note}</p><dl><div><dt>狙える魚</dt><dd>{active.fish.join('・')}</dd></div><div><dt>主な釣り方</dt><dd>{active.methods.join('・')}</dd></div><div><dt>シーズン</dt><dd>{active.season}</dd></div></dl><div className={s.badges}>{active.beginner&&<span>初心者向け</span>}{active.kids&&<span>親子向け</span>}{active.parking&&<span>駐車場</span>}{active.toilet&&<span>トイレ</span>}</div><a className={s.googleLink} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.googleQuery)}`} target="_blank" rel="noopener noreferrer">Googleマップで場所を確認 ↗</a></>:<div className={s.panelEmpty}>条件を変えて釣り場を探してください。</div>}</aside></div>
 </section>
}
