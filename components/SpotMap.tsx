'use client';

import Link from 'next/link';
import {japanRegions,prefectures,type JapanRegion} from '@/lib/japan-regions';
import {matchesSpot} from '@/lib/spot-filters';
import {useMemo,useState,useRef} from 'react';
import {fishingMapEntries,fishingMapFish,type MapEntryType} from '@/lib/fishing-map-data';
import s from './SpotMap.module.css';
import InteractiveSpotMap from './InteractiveSpotMap';
import {distanceKm,hasCoordinates,sortByDistance,type Coordinates} from '@/lib/spot-distance';

export default function SpotMap({initialQuery='',initialKind='all',fishNames={},methodNames={},guideNames={},cookingSlugs=[]}:{initialKind?:'all'|MapEntryType;initialQuery?:string;fishNames?:Record<string,string>;methodNames?:Record<string,string>;guideNames?:Record<string,string>;cookingSlugs?:string[]}){
 const detailRef=useRef<HTMLElement>(null);
 const [listLimit,setListLimit]=useState(20);
 const selectSpot=(slug:string)=>{setSelected(slug);requestAnimationFrame(()=>detailRef.current?.scrollIntoView({block:'start',behavior:'smooth'}));};
 const [kind,setKind]=useState<'all'|MapEntryType>(initialKind);
 const [region,setRegion]=useState('');const [prefecture,setPrefecture]=useState('');const [method,setMethod]=useState('');const [terrain,setTerrain]=useState('');const [beginner,setBeginner]=useState(false);const [family,setFamily]=useState(false);
 const [fish,setFish]=useState('すべて');
 const [query,setQuery]=useState(initialQuery);
 const [showClosed,setShowClosed]=useState(false);
 const [selected,setSelected]=useState(fishingMapEntries[0]?.slug??'');
 const [origin,setOrigin]=useState<Coordinates|null>(null);
 const [locating,setLocating]=useState(false);
 const [locationMessage,setLocationMessage]=useState('');
 function locate(){
  if(!navigator.geolocation){setLocationMessage('このブラウザは現在地検索に対応していません。地域名で検索してください。');return;}
  setLocating(true);setLocationMessage('現在地の取得を待っています…');
  navigator.geolocation.getCurrentPosition(p=>{const point={lat:p.coords.latitude,lng:p.coords.longitude};setLocating(false);if(!hasCoordinates(point)){setLocationMessage('位置を確認できませんでした。地域名で検索してください。');return;}setOrigin(point);setSelected('');setLocationMessage('現在の検索条件で、位置登録のある釣り場を近い順に表示しています。距離は直線距離です。');},error=>{setLocating(false);setLocationMessage(error.code===1?'現在地の利用が許可されませんでした。地域名で検索できます。':'現在地を取得できませんでした。屋外で試すか、地域名で検索してください。');},{enableHighAccuracy:false,timeout:10000,maximumAge:60000});
 }
 const filteredEntries=useMemo(()=>fishingMapEntries.filter(e=>matchesSpot(e,{region,prefecture,method,terrain,beginner,family,showClosed,kind,fish,query})),[region,prefecture,method,terrain,beginner,family,showClosed,kind,fish,query]);
 const entries=useMemo(()=>origin?sortByDistance(filteredEntries,origin):filteredEntries,[filteredEntries,origin]);
 const active=entries.find(e=>e.slug===selected)??entries[0];
 return <section className={s.wrap}>
  <div className={s.nationalFilters}>
   <label>地方<select value={region} onChange={e=>{setRegion(e.target.value);setPrefecture('');}}><option value="">日本全国</option>{Object.keys(japanRegions).map(r=><option key={r} value={r}>{r}</option>)}</select></label>
   <label>都道府県<select value={prefecture} onChange={e=>setPrefecture(e.target.value)}><option value="">すべての都道府県</option>{(region?japanRegions[region as JapanRegion]:prefectures).map(p=><option key={p} value={p}>{p}</option>)}</select></label>
   <label>釣法<select value={method} onChange={e=>setMethod(e.target.value)}><option value="">すべての釣法</option>{Object.entries(methodNames).map(([slug,name])=><option key={slug} value={slug}>{name}</option>)}</select></label>
   <label>足場・フィールド<select value={terrain} onChange={e=>setTerrain(e.target.value)}><option value="">すべてのフィールド</option>{[['park','海釣り公園'],['port','漁港'],['estuary','河口'],['lake','湖'],['pier','堤防・桟橋'],['shore','海岸・護岸'],['beach','砂浜'],['rock','磯'],['boat','船'],['raft','イカダ'],['river','川'],['pond','管理池'],['sea-pond','海上釣り堀']].map(([v,n])=><option value={v} key={v}>{n}</option>)}</select></label>
   <label><input type="checkbox" checked={beginner} onChange={e=>setBeginner(e.target.checked)}/>初心者向け</label><label><input type="checkbox" checked={family} onChange={e=>setFamily(e.target.checked)}/>ファミリー向け</label>
   <button onClick={()=>{setRegion('');setPrefecture('');setMethod('');setTerrain('');setBeginner(false);setFamily(false);setFish('すべて');setQuery('');setKind('all');setShowClosed(false);}}>絞り込みをリセット</button>
  </div><p className={s.resultCount} role="status">登録情報から {entries.length} 件。未登録の地域は順次追加しています。</p>
  <div className={s.toolbar}>
   <div className={s.tabs}>
    <button className={kind==='all'?s.active:''} onClick={()=>setKind('all')}>すべて</button>
    <button className={kind==='spot'?s.active:''} onClick={()=>setKind('spot')}>🎣 釣り場</button>
    <button className={kind==='area'?s.active:''} onClick={()=>setKind('area')}>海域・釣行計画</button><button className={kind==='boat'?s.active:''} onClick={()=>setKind('boat')}>🚤 釣船</button>
   </div>
   <label><input type="checkbox" checked={showClosed} onChange={e=>setShowClosed(e.target.checked)}/>休業・閉鎖情報も表示</label><input aria-label="釣り場を検索" value={query} onChange={e=>setQuery(e.target.value)} placeholder="釣り場・魚・釣り方で検索"/>
  </div>
  <div className={s.fishFilters}>{fishingMapFish.map(v=><button key={v} onClick={()=>setFish(v)} className={fish===v?s.activeChip:''}>{v}</button>)}</div>
  <div className={s.locationControls}><button disabled={locating} onClick={locate}>{locating?'現在地を取得中…':'⌖ 現在地から近い順に探す'}</button>{origin&&<button onClick={()=>{setOrigin(null);setLocationMessage('');}}>現在地の利用をやめる</button>}<p>現在地は許可した場合だけ取得し、この画面で距離計算に使います。位置情報を保存したり、サーバーへ送信したりしません。位置未登録の項目は一覧の最後に表示します。</p><p role="status">{locationMessage}</p></div>
  <InteractiveSpotMap entries={entries} selected={active?.slug} onSelect={selectSpot}/>
  <div className={s.contentGrid}>
   <aside ref={detailRef} className={s.panel} aria-label="選択した地点の詳細">{active?<>
    <div className={s.panelTop}><span>{active.type==='area'?'釣行エリア':active.type==='boat'?'釣船':'釣り場'}</span><small>{active.area}</small></div>
    <h2>{active.name}</h2>{active.port&&<p>出船港：{active.port}</p>}{active.officialUrl&&<a className={s.googleLink} href={active.officialUrl} target="_blank" rel="noopener noreferrer">船宿公式サイト・出船案内 ↗</a>}{active.positionNote&&<p>{active.positionNote}</p>}
    {active.status&&<div className={s.status}>{active.status}</div>}
    <p className={s.lead}>{active.note}</p><p>公式情報確認日：{active.verifiedAt??'未確認（釣行前に要確認）'}</p>{active.sourceUpdatedAt&&<p>参照元の更新日：{active.sourceUpdatedAt}</p>}{active.sources?.map(source=><p key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></p>)}
    <dl>
     <div><dt>狙える魚</dt><dd>{active.fish.join('・')||(active.closed?'休業・休園中':'最新の対象魚は現地の釣果情報を確認')}</dd></div>
     <div><dt>主な釣り方</dt><dd>{active.methods.length?active.methods.join('・'):active.methodSlugs?.map(slug=>methodNames[slug]??slug).join('・')||'利用可能な釣法は公式案内を確認'}</dd></div>
     <div><dt>シーズン</dt><dd>{active.season}</dd></div>
     <div><dt>アクセス・利用</dt><dd>{active.access}</dd></div>
     <div><dt>釣り場の特徴</dt><dd>{active.field}</dd></div>
     {active.waterDepth&&<div><dt>水深の目安</dt><dd>{active.waterDepth}</dd></div>}{active.nightFishing&&<div><dt>夜釣り</dt><dd>{active.nightFishing}</dd></div>}
     <div><dt>狙い目</dt><dd>{active.timing}</dd></div>
    </dl>
    <div className={s.badges}>{active.beginner&&<span>初心者向け</span>}{active.kids&&<span>親子向け</span>}{active.parking&&<span>駐車場</span>}{active.toilet&&<span>トイレ</span>}{active.parking===undefined&&<span>駐車場：未確認</span>}{active.toilet===undefined&&<span>トイレ：未確認</span>}</div>
    <section className={s.detailBlock}><h3>この釣り場に向く釣り</h3><div className={s.bestFor}>{active.bestFor.map(v=><span key={v}>{v}</span>)}</div></section>
    <section className={s.detailBlock}><h3>攻略メモ</h3><ul>{active.tips.map(v=><li key={v}>{v}</li>)}</ul></section>
    <section className={s.detailBlock}><h3>注意点</h3><ul>{active.caution.map(v=><li key={v}>{v}</li>)}</ul></section>
    <section className={s.detailBlock}><h3>魚・釣法・料理につなぐ</h3><div className={s.bestFor}>{active.fishSlugs?.map(slug=><Link key={slug} href={`/fish/${slug}`}>{fishNames[slug]??slug}の図鑑</Link>)}{active.fishSlugs?.filter(slug=>cookingSlugs.includes(slug)).map(slug=><Link key={'cooking-'+slug} href={`/cooking/${slug}`}>{fishNames[slug]??slug}の料理</Link>)}{active.methodSlugs?.map(slug=><Link key={slug} href={`/methods/${slug}`}>{methodNames[slug]??slug}</Link>)}</div></section>
    <div className={s.bestFor}>{active.guideSlugs?.map(slug=><Link key={slug} href={`/guide/${slug}`}>{guideNames[slug]??slug} →</Link>)}</div><a className={s.googleLink} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.googleQuery)}`} target="_blank" rel="noopener noreferrer">Googleマップで場所を確認 ↗</a>
   </>:<div className={s.panelEmpty}>条件を変えて釣り場を探してください。</div>}</aside>
   <div className={s.spotList}>{entries.length?entries.slice(0,listLimit).map(e=><button key={e.slug} aria-pressed={active?.slug===e.slug} className={`${s.spotCard} ${active?.slug===e.slug?s.selected:''}`} onClick={()=>selectSpot(e.slug)}>
    <div><span>{e.type==='area'?'釣行エリア':e.type==='boat'?'釣船':'釣り場'}</span><small>{e.area}</small></div><strong>{e.name}</strong>{origin&&<small>{hasCoordinates(e)?`現在地から約${distanceKm(origin,e).toFixed(1)}km（直線）`:'位置未登録・距離不明'}</small>}<p>{e.note}</p><div className={s.miniFish}>{e.fish.slice(0,5).map(f=><em key={f}>{f}</em>)}</div>
   </button>):<div className={s.empty}>条件に合う釣り場はありません。休業・閉鎖情報を探す場合は「休業・閉鎖情報も表示」を選んでください。</div>}</div>
{entries.length>listLimit&&<button className={s.more} onClick={()=>setListLimit(n=>n+20)}>さらに20件表示（残り{entries.length-listLimit}件）</button>}
  </div>
 </section>
}
