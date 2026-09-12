'use client';

import {useMemo,useState} from 'react';
import {fishingMapEntries,fishingMapFish,type MapEntryType} from '@/lib/fishing-map-data';
import s from './SpotMap.module.css';

export default function SpotMap({initialQuery=''}:{initialQuery?:string}){
 const [kind,setKind]=useState<'all'|MapEntryType>('all');
 const [fish,setFish]=useState('すべて');
 const [query,setQuery]=useState(initialQuery);
 const [selected,setSelected]=useState(fishingMapEntries[0]?.slug??'');
 const entries=useMemo(()=>fishingMapEntries.filter(e=>(kind==='all'||e.type===kind)&&(fish==='すべて'||e.fish.includes(fish))&&(!query||`${e.name}${e.area}${e.fish.join('')}${e.methods.join('')}${e.bestFor.join('')}`.toLowerCase().includes(query.toLowerCase()))),[kind,fish,query]);
 const active=entries.find(e=>e.slug===selected)??entries[0];
 return <section className={s.wrap}>
  <div className={s.toolbar}>
   <div className={s.tabs}>
    <button className={kind==='all'?s.active:''} onClick={()=>setKind('all')}>すべて</button>
    <button className={kind==='spot'?s.active:''} onClick={()=>setKind('spot')}>🎣 釣り場</button>
    <button className={kind==='boat'?s.active:''} onClick={()=>setKind('boat')}>🚤 釣船</button>
   </div>
   <input aria-label="釣り場を検索" value={query} onChange={e=>setQuery(e.target.value)} placeholder="釣り場・魚・釣り方で検索"/>
  </div>
  <div className={s.fishFilters}>{fishingMapFish.map(v=><button key={v} onClick={()=>setFish(v)} className={fish===v?s.activeChip:''}>{v}</button>)}</div>
  <div className={s.preparing}>
   <span>MAP</span><strong>UOLINK釣り場マップは準備中です</strong>
   <p>Google Maps連携は現在準備中です。先に釣り場ごとの魚・釣り方・特徴・注意点を充実させています。</p>
  </div>
  <div className={s.contentGrid}>
   <div className={s.spotList}>{entries.length?entries.map(e=><button key={e.slug} className={`${s.spotCard} ${active?.slug===e.slug?s.selected:''}`} onClick={()=>setSelected(e.slug)}>
    <div><span>{e.type==='boat'?'釣船':'釣り場'}</span><small>{e.area}</small></div><strong>{e.name}</strong><p>{e.note}</p><div className={s.miniFish}>{e.fish.slice(0,5).map(f=><em key={f}>{f}</em>)}</div>
   </button>):<div className={s.empty}>条件に合う釣り場はまだ登録されていません。</div>}</div>
   <aside className={s.panel}>{active?<>
    <div className={s.panelTop}><span>{active.type==='boat'?'釣船':'釣り場'}</span><small>{active.area}</small></div>
    <h2>{active.name}</h2>
    {active.status&&<div className={s.status}>{active.status}</div>}
    <p className={s.lead}>{active.note}</p>
    <dl>
     <div><dt>狙える魚</dt><dd>{active.fish.join('・')}</dd></div>
     <div><dt>主な釣り方</dt><dd>{active.methods.join('・')}</dd></div>
     <div><dt>シーズン</dt><dd>{active.season}</dd></div>
     <div><dt>アクセス・利用</dt><dd>{active.access}</dd></div>
     <div><dt>釣り場の特徴</dt><dd>{active.field}</dd></div>
     <div><dt>狙い目</dt><dd>{active.timing}</dd></div>
    </dl>
    <div className={s.badges}>{active.beginner&&<span>初心者向け</span>}{active.kids&&<span>親子向け</span>}{active.parking&&<span>駐車場</span>}{active.toilet&&<span>トイレ</span>}</div>
    <section className={s.detailBlock}><h3>この釣り場に向く釣り</h3><div className={s.bestFor}>{active.bestFor.map(v=><span key={v}>{v}</span>)}</div></section>
    <section className={s.detailBlock}><h3>攻略メモ</h3><ul>{active.tips.map(v=><li key={v}>{v}</li>)}</ul></section>
    <section className={s.detailBlock}><h3>注意点</h3><ul>{active.caution.map(v=><li key={v}>{v}</li>)}</ul></section>
    <a className={s.googleLink} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.googleQuery)}`} target="_blank" rel="noopener noreferrer">Googleマップで場所を確認 ↗</a>
   </>:<div className={s.panelEmpty}>条件を変えて釣り場を探してください。</div>}</aside>
  </div>
 </section>
}
