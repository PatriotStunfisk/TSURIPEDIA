'use client';

import Link from 'next/link';
import {useMemo,useState} from 'react';
import {fishingMapEntries,fishingMapFish,type MapEntryType} from '@/lib/fishing-map-data';
import s from './SpotMap.module.css';
import SpotLocationMap from './SpotLocationMap';

export default function SpotMap({initialQuery='',fishNames={},methodNames={}}:{initialQuery?:string;fishNames?:Record<string,string>;methodNames?:Record<string,string>}){
 const [kind,setKind]=useState<'all'|MapEntryType>('all');
 const [fish,setFish]=useState('すべて');
 const [query,setQuery]=useState(initialQuery);
 const [showClosed,setShowClosed]=useState(false);
 const [selected,setSelected]=useState(fishingMapEntries[0]?.slug??'');
 const entries=useMemo(()=>fishingMapEntries.filter(e=>(showClosed||!e.closed)&&(kind==='all'||e.type===kind)&&(fish==='すべて'||e.fish.includes(fish))&&(!query||`${e.name}${e.area}${e.fish.join('')}${e.methods.join('')}${e.bestFor.join('')}`.toLowerCase().includes(query.toLowerCase()))),[kind,fish,query,showClosed]);
 const active=entries.find(e=>e.slug===selected)??entries[0];
 return <section className={s.wrap}>
  <div className={s.toolbar}>
   <div className={s.tabs}>
    <button className={kind==='all'?s.active:''} onClick={()=>setKind('all')}>すべて</button>
    <button className={kind==='spot'?s.active:''} onClick={()=>setKind('spot')}>🎣 釣り場</button>
    <button className={kind==='area'?s.active:''} onClick={()=>setKind('area')}>海域・釣行計画</button><button className={kind==='boat'?s.active:''} onClick={()=>setKind('boat')}>🚤 釣船</button>
   </div>
   <label><input type="checkbox" checked={showClosed} onChange={e=>setShowClosed(e.target.checked)}/>休業・閉鎖情報も表示</label><input aria-label="釣り場を検索" value={query} onChange={e=>setQuery(e.target.value)} placeholder="釣り場・魚・釣り方で検索"/>
  </div>
  <div className={s.fishFilters}>{fishingMapFish.map(v=><button key={v} onClick={()=>setFish(v)} className={fish===v?s.activeChip:''}>{v}</button>)}</div>
  {active?.lat!==undefined&&active?.lng!==undefined?<SpotLocationMap key={active.slug} name={active.name} lat={active.lat} lng={active.lng}/>:<p>位置は各項目の公式アクセス案内・地図検索から確認できます。</p>}
  <div className={s.contentGrid}>
   <div className={s.spotList}>{entries.length?entries.map(e=><button key={e.slug} className={`${s.spotCard} ${active?.slug===e.slug?s.selected:''}`} onClick={()=>setSelected(e.slug)}>
    <div><span>{e.type==='area'?'釣行エリア':e.type==='boat'?'釣船':'釣り場'}</span><small>{e.area}</small></div><strong>{e.name}</strong><p>{e.note}</p><div className={s.miniFish}>{e.fish.slice(0,5).map(f=><em key={f}>{f}</em>)}</div>
   </button>):<div className={s.empty}>条件に合う釣り場はありません。休業・閉鎖情報を探す場合は「休業・閉鎖情報も表示」を選んでください。</div>}</div>
   <aside className={s.panel}>{active?<>
    <div className={s.panelTop}><span>{active.type==='area'?'釣行エリア':active.type==='boat'?'釣船':'釣り場'}</span><small>{active.area}</small></div>
    <h2>{active.name}</h2>
    {active.status&&<div className={s.status}>{active.status}</div>}
    <p className={s.lead}>{active.note}</p><p>公式情報確認日：{active.verifiedAt??'未確認（釣行前に要確認）'}</p>{active.sources?.map(source=><p key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></p>)}
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
    <section className={s.detailBlock}><h3>魚・釣法・料理につなぐ</h3><div className={s.bestFor}>{active.fishSlugs?.map(slug=><Link key={slug} href={`/fish/${slug}`}>{fishNames[slug]??slug}の図鑑</Link>)}{active.methodSlugs?.map(slug=><Link key={slug} href={`/methods/${slug}`}>{methodNames[slug]??slug}</Link>)}</div></section>
    <a className={s.googleLink} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.googleQuery)}`} target="_blank" rel="noopener noreferrer">Googleマップで場所を確認 ↗</a>
   </>:<div className={s.panelEmpty}>条件を変えて釣り場を探してください。</div>}</aside>
  </div>
 </section>
}
