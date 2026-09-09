'use client';

import {useMemo,useState} from 'react';
import {fishingMapEntries,fishingMapFish,type FishingMapEntry,type MapEntryType} from '@/lib/fishing-map-data';
import s from './SpotMap.module.css';

const bounds={minLat:34.15,maxLat:34.82,minLng:134.90,maxLng:135.48};
function pos(entry:FishingMapEntry){
  const x=((entry.lng-bounds.minLng)/(bounds.maxLng-bounds.minLng))*100;
  const y=(1-(entry.lat-bounds.minLat)/(bounds.maxLat-bounds.minLat))*100;
  return {left:`${Math.max(3,Math.min(97,x))}%`,top:`${Math.max(4,Math.min(96,y))}%`};
}

export default function SpotMap(){
  const [kind,setKind]=useState<'all'|MapEntryType>('all');
  const [fish,setFish]=useState('すべて');
  const [query,setQuery]=useState('');
  const [selected,setSelected]=useState(fishingMapEntries[0]?.slug??'');

  const entries=useMemo(()=>fishingMapEntries.filter(e=>{
    if(kind!=='all'&&e.type!==kind)return false;
    if(fish!=='すべて'&&!e.fish.includes(fish))return false;
    if(query&&!`${e.name}${e.area}${e.fish.join('')}${e.methods.join('')}`.toLowerCase().includes(query.toLowerCase()))return false;
    return true;
  }),[kind,fish,query]);

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

    <div className={s.layout}>
      <div className={s.mapShell}>
        <div className={s.mapHeader}><span>UOLINK FISHING MAP</span><small>大阪湾・明石・紀北 β版</small></div>
        <div className={s.map}>
          <svg className={s.land} viewBox="0 0 1000 720" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 0H1000V145C910 150 843 190 810 250C770 322 718 360 641 371C565 382 518 420 488 492C456 568 390 611 298 615C200 620 137 666 80 720H0Z"/>
            <path d="M0 538C112 501 202 482 280 485C354 488 420 522 483 584L430 720H0Z"/>
            <path d="M785 0H1000V720H885C892 624 868 536 812 460C760 389 747 310 768 224C786 151 792 78 785 0Z"/>
          </svg>
          <div className={s.waterLabel}>OSAKA BAY</div>
          {entries.map(e=><button key={e.slug} className={`${s.pin} ${selected===e.slug?s.pinActive:''}`} style={pos(e)} onClick={()=>setSelected(e.slug)} aria-label={e.name}><span>{e.type==='boat'?'🚤':'🎣'}</span><b>{e.name}</b></button>)}
          {!entries.length&&<div className={s.empty}>条件に合うスポットがありません</div>}
        </div>
        <p className={s.note}>※UOLINK独自の概略マップです。ピン位置・営業情報・立入可否は釣行前に必ず最新情報を確認してください。</p>
      </div>

      <aside className={s.panel}>
        {active?<>
          <div className={s.panelTop}><span>{active.type==='boat'?'釣船':'釣り場'}</span><small>{active.area}</small></div>
          <h2>{active.name}</h2>
          <p>{active.note}</p>
          <dl><div><dt>狙える魚</dt><dd>{active.fish.join('・')}</dd></div><div><dt>主な釣り方</dt><dd>{active.methods.join('・')}</dd></div><div><dt>シーズン</dt><dd>{active.season}</dd></div></dl>
          <div className={s.badges}>{active.beginner&&<span>初心者向け</span>}{active.kids&&<span>親子向け</span>}{active.parking&&<span>駐車場</span>}{active.toilet&&<span>トイレ</span>}</div>
          <a className={s.googleLink} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.googleQuery)}`} target="_blank" rel="noopener noreferrer">Googleマップで場所を確認 ↗</a>
          <button className={s.detailButton} disabled>UOLINK詳細ページは準備中</button>
        </>:<div className={s.panelEmpty}>条件を変えて釣り場を探してください。</div>}
      </aside>
    </div>

    <div className={s.cards}>{entries.map(e=><button key={e.slug} onClick={()=>setSelected(e.slug)} className={selected===e.slug?s.cardActive:''}><span>{e.type==='boat'?'🚤':'🎣'} {e.area}</span><strong>{e.name}</strong><small>{e.fish.join('・')}</small></button>)}</div>
  </section>;
}
