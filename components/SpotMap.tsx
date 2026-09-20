'use client';
import {useCatchActivity} from './CatchActivity';
import {relatedSpotGuideSlugs} from '@/lib/spot-connections';

import {markerKind,markerKinds} from '@/lib/spot-markers';
import type {SpotPrimaryType} from '@/lib/spot-classification';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const CatchReports=dynamic(()=>import('./CatchReports').then(m=>m.CatchReports));
import SpotFavorite,{useSpotFavorites} from './SpotFavorite';
import {japanRegions,prefectures,type JapanRegion} from '@/lib/japan-regions';
import {matchesSpot} from '@/lib/spot-filters';
import {useMemo,useState,useRef,useEffect} from 'react';
import type {FishingMapEntry,MapEntryType} from '@/lib/fishing-map-data';
import s from './SpotMap.module.css';
import {readMapLayers,mapSessionKey} from '@/lib/map-session';
import {nearbyTackleShops,type TackleShop} from '@/lib/tackle-shops';
import InteractiveSpotMap from './InteractiveSpotMap';
import SpotMapPreview from './SpotMapPreview';
import {distanceKm,hasCoordinates,sortByDistance,type Coordinates} from '@/lib/spot-distance';

export default function SpotMap({mapEntries,shops=[],nearSpot,initialShops=false,initialFavorites=false,initialQuery='',initialFish='',initialMethod='',initialRecent=false,catchFishOptions=[],fishOptions=[],guideIndex={},initialKind='all',fishNames={},methodNames={},guideNames={},cookingSlugs=[]}:{mapEntries:FishingMapEntry[];shops?:TackleShop[];nearSpot?:string;initialShops?:boolean;initialFavorites?:boolean;initialKind?:'all'|MapEntryType;initialQuery?:string;initialFish?:string;initialMethod?:string;initialRecent?:boolean;catchFishOptions?:{slug:string;name:string;aliases?:string[]}[];fishOptions?:{value:string;label:string}[];guideIndex?:Record<string,string[]>;fishNames?:Record<string,string>;methodNames?:Record<string,string>;guideNames?:Record<string,string>;cookingSlugs?:string[]}){
 const favorites=useSpotFavorites();const [favoritesOnly,setFavoritesOnly]=useState(initialFavorites);
 const [selectedTypes,setSelectedTypes]=useState<SpotPrimaryType[]>(Object.keys(markerKinds) as SpotPrimaryType[]);
 const [shopsOn,setShopsOn]=useState(initialShops),[selectedShop,setSelectedShop]=useState(''),[restored,setRestored]=useState(false);
 useEffect(()=>{try{const saved=readMapLayers(sessionStorage.getItem(mapSessionKey));setSelectedTypes(saved.types);setShopsOn(initialShops||saved.shops);}catch{}setRestored(true);},[initialShops]);
 useEffect(()=>{if(restored)try{sessionStorage.setItem(mapSessionKey,JSON.stringify({types:selectedTypes,shops:shopsOn}));}catch{}},[restored,selectedTypes,shopsOn]);
 const detailRef=useRef<HTMLElement>(null),mapRef=useRef<HTMLDivElement>(null);
 const [previewOpen,setPreviewOpen]=useState(false);
 const [detailOpened,setDetailOpened]=useState(false);
 const [catchScroll,setCatchScroll]=useState(0);
 const showCatches=()=>{setDetailOpened(true);setCatchScroll(n=>n+1);};
 const showDetails=()=>{setCatchScroll(0);setDetailOpened(true);detailRef.current?.scrollIntoView({block:'start',behavior:'smooth'});};
 const [listLimit,setListLimit]=useState(20);
 const selectSpot=(slug:string)=>{setCatchScroll(0);setSelectedShop('');setSelected(slug);setPreviewOpen(true);};
 const selectShop=(id:string)=>{setSelectedShop(id);setPreviewOpen(true);};
 const [kind,setKind]=useState<'all'|MapEntryType>(initialKind);
 const [region,setRegion]=useState('');const [prefecture,setPrefecture]=useState('');const [method,setMethod]=useState(initialMethod);const [terrain,setTerrain]=useState('');const [beginner,setBeginner]=useState(false);const [family,setFamily]=useState(false);
 const fishingMapFish=[{value:'すべて',label:'すべて'},...fishOptions];
 const [fish,setFish]=useState(initialFish||'すべて');
 const [recentOnly,setRecentOnly]=useState(initialRecent);
 const activity=useCatchActivity(fish==='すべて'?'':fish,method);
 const activityIndex=useMemo(()=>Object.fromEntries(activity.spots.map(s=>[s.spotSlug,s])),[activity.spots]);
 const [query,setQuery]=useState(initialQuery);
 const [showClosed,setShowClosed]=useState(false);
 const [selected,setSelected]=useState(nearSpot??mapEntries[0]?.slug??'');
 const [origin,setOrigin]=useState<(Coordinates&{accuracy?:number})|null>(null);
 const [locating,setLocating]=useState(false);
 const [locationMessage,setLocationMessage]=useState('');
 function locate(){
  if(!navigator.geolocation){setLocationMessage('このブラウザは現在地検索に対応していません。地域名で検索してください。');return;}
  setLocating(true);setLocationMessage('現在地の取得を待っています…');
  navigator.geolocation.getCurrentPosition(p=>{const point={lat:p.coords.latitude,lng:p.coords.longitude,accuracy:Number.isFinite(p.coords.accuracy)&&p.coords.accuracy>=0?p.coords.accuracy:undefined};setLocating(false);if(!hasCoordinates(point)){setLocationMessage('位置を確認できませんでした。地域名で検索してください。');return;}setOrigin(point);setSelected('');setLocationMessage('現在の検索条件で、位置登録のある釣り場を近い順に表示しています。距離は直線距離です。');},error=>{setLocating(false);setLocationMessage(error.code===1?'現在地の利用が許可されませんでした。地域名で検索できます。':'現在地を取得できませんでした。屋外で試すか、地域名で検索してください。');},{enableHighAccuracy:false,timeout:10000,maximumAge:60000});
 }
 const anchor=mapEntries.find(e=>e.slug===nearSpot);
 const nearby=useMemo(()=>anchor&&hasCoordinates(anchor)?nearbyTackleShops(shops,anchor):[],[anchor,shops]);
 const visibleShops=useMemo(()=>!shopsOn||favoritesOnly?[]:anchor?nearby.map(x=>x.shop):shops.filter(x=>x.status==='open'&&(!prefecture||x.prefecture===prefecture)&&(!region||(japanRegions[region as JapanRegion] as readonly string[]).includes(x.prefecture))),[shopsOn,favoritesOnly,anchor,nearby,shops,prefecture,region]);
 const activeShop=visibleShops.find(x=>x.id===selectedShop);
 const filteredEntries=useMemo(()=>mapEntries.filter(e=>(!recentOnly||!!activityIndex[e.slug])&&(!favoritesOnly||favorites.includes(e.slug))&&(!anchor||!hasCoordinates(anchor)||(hasCoordinates(e)&&distanceKm(anchor,e)<=30))&&selectedTypes.includes(markerKind(e))&&matchesSpot(e,{region,prefecture,method:recentOnly?undefined:method,terrain,beginner,family,showClosed,kind,fish:recentOnly?undefined:fish,query})),[mapEntries,recentOnly,activityIndex,favoritesOnly,favorites,anchor,selectedTypes,region,prefecture,method,terrain,beginner,family,showClosed,kind,fish,query]);
 const entries=useMemo(()=>origin?sortByDistance(filteredEntries,origin):filteredEntries,[filteredEntries,origin]);
 const chosen=entries.find(e=>e.slug===selected);
 const active=chosen??entries[0];
 return <section className={s.wrap}>
  <div className={s.nationalFilters}>
   <label>地方<select value={region} onChange={e=>{setRegion(e.target.value);setPrefecture('');}}><option value="">日本全国</option>{Object.keys(japanRegions).map(r=><option key={r} value={r}>{r}</option>)}</select></label>
   <label>都道府県<select value={prefecture} onChange={e=>setPrefecture(e.target.value)}><option value="">すべての都道府県</option>{(region?japanRegions[region as JapanRegion]:prefectures).map(p=><option key={p} value={p}>{p}</option>)}</select></label>
   <label>釣法<select value={method} onChange={e=>setMethod(e.target.value)}><option value="">すべての釣法</option>{Object.entries(methodNames).map(([slug,name])=><option key={slug} value={slug}>{name}</option>)}</select></label>
   <label>足場・フィールド<select value={terrain} onChange={e=>setTerrain(e.target.value)}><option value="">すべてのフィールド</option>{[['park','公園沿いの護岸'],['port','漁港'],['estuary','河口'],['lake','湖'],['pier','堤防・桟橋'],['shore','海岸・護岸'],['beach','砂浜'],['rock','磯'],['boat','船'],['raft','イカダ'],['river','川'],['pond','管理池'],['sea-pond','海上釣り堀']].map(([v,n])=><option value={v} key={v}>{n}</option>)}</select></label>
   <label><input type="checkbox" checked={beginner} onChange={e=>setBeginner(e.target.checked)}/>初心者向け</label><label><input type="checkbox" checked={family} onChange={e=>setFamily(e.target.checked)}/>ファミリー向け</label>
   <button onClick={()=>{setRecentOnly(false);setFavoritesOnly(false);setRegion('');setPrefecture('');setMethod('');setTerrain('');setBeginner(false);setFamily(false);setFish('すべて');setQuery('');setKind('all');setShowClosed(false);setShopsOn(false);setSelectedShop('');setSelectedTypes(Object.keys(markerKinds) as SpotPrimaryType[]);}}>絞り込みをリセット</button>
  </div><p className={s.resultCount} role="status">登録情報から {entries.length} 件。未登録の地域は順次追加しています。</p>
  <div className={s.toolbar}>
   <label><input type="checkbox" checked={showClosed} onChange={e=>setShowClosed(e.target.checked)}/>休業・閉鎖情報も表示</label><input aria-label="釣り場を検索" value={query} onChange={e=>setQuery(e.target.value)} placeholder="釣り場・魚・釣り方で検索"/>
  </div>
  <div className={s.fishFilters}>{fishingMapFish.map(v=><button key={v.value} onClick={()=>setFish(v.value)} aria-pressed={fish===v.value} className={fish===v.value?s.activeChip:''}>{v.label}</button>)}</div>
  <div className={s.locationControls}><button disabled={locating} onClick={locate}>{locating?'現在地を取得中…':'⌖ 現在地から近い順に探す'}</button>{origin&&<button onClick={()=>{setOrigin(null);setLocationMessage('');}}>現在地の利用をやめる</button>}<p>現在地は許可した場合だけ取得し、この画面で距離計算に使います。位置情報を保存したり、サーバーへ送信したりしません。位置未登録の項目は一覧の最後に表示します。</p><p role="status">{locationMessage}</p></div>
  {anchor&&<p className={s.notice}>{anchor.name}から30km以内の登録店舗を表示。距離は直線距離です。<Link href="/spots">全国MAPへ戻る →</Link></p>}
  <label><input type="checkbox" checked={recentOnly} onChange={e=>setRecentOnly(e.target.checked)}/> 直近30日の釣果がある釣り場のみ</label><p style={{fontSize:12}}>緑のリング：最近の釣果あり ／ オレンジのリング：HOT</p>{activity.loading&&<p role="status">最近の釣果を確認中…</p>}{activity.error&&<p role="status">{activity.error}</p>}<div ref={mapRef} className={s.mapAnchor}><InteractiveSpotMap activity={activityIndex} preview={previewOpen&&(activeShop||chosen)?<SpotMapPreview activity={chosen?activityIndex[chosen.slug]:undefined} fishNames={fishNames} methodNames={methodNames} entry={activeShop?undefined:chosen} shop={activeShop} onClose={()=>setPreviewOpen(false)} onDetails={showDetails} onCatches={showCatches}/>:null} boundaryPrefectures={prefecture?[prefecture]:region?japanRegions[region as JapanRegion]:[]} favorites={favorites} favoritesOnly={favoritesOnly} onFavoritesChange={on=>{setFavoritesOnly(on);setListLimit(20);}} userLocation={origin??undefined} shopsOn={shopsOn} onShopsChange={setShopsOn} shops={visibleShops} selectedShop={previewOpen?activeShop?.id:undefined} onShopSelect={selectShop} focus={anchor&&hasCoordinates(anchor)?anchor:undefined} fitKey={[nearSpot,region,prefecture,query,fish,method,terrain,kind,favoritesOnly,recentOnly].join("|")} selectedTypes={selectedTypes} onTypesChange={setSelectedTypes} entries={entries} selected={previewOpen&&!activeShop?chosen?.slug:undefined} onSelect={selectSpot}/></div>
  <div className={s.contentGrid}>
   <aside ref={detailRef} className={s.panel} aria-label="選択した地点の詳細"><button className={s.backToMap} onClick={()=>mapRef.current?.scrollIntoView({block:'start',behavior:'smooth'})}>↑ MAPに戻る</button>{activeShop?<><span className={s.status}>釣具店</span><h2>{activeShop.name}</h2><p>{activeShop.address}</p><p>{activeShop.hours??'営業時間：公式案内を確認'}</p><p>定休日：{activeShop.closedDays??'未確認'} / 駐車場：{activeShop.parking===undefined?'未確認':activeShop.parking?'あり':'なし'}</p><p>活き餌：{activeShop.baits?.live===undefined?'未確認':activeShop.baits.live?'取扱あり（在庫要確認）':'取扱なし'} / 冷凍餌：{activeShop.baits?.frozen===undefined?'未確認':activeShop.baits.frozen?'取扱あり（在庫要確認）':'取扱なし'}</p>{anchor&&hasCoordinates(anchor)&&<p>{anchor.name}から約{distanceKm(anchor,activeShop).toFixed(1)}km（直線）</p>}<p>{activeShop.note}</p><p>最終確認日：{activeShop.verifiedAt}</p><a className={s.googleLink} href={activeShop.officialUrl} target="_blank" rel="noopener noreferrer">店舗公式・営業時間を確認 ↗</a><a className={s.googleLink} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeShop.name+' '+activeShop.address)}`} target="_blank" rel="noopener noreferrer">店舗への経路を調べる ↗</a></>:active?<>
    <div className={s.panelTop}><span>{active.type==='area'?'釣行エリア':active.type==='boat'?'釣船':'釣り場'}</span><small>{active.area}</small></div>
    <h2><Link className={s.detailTitleLink} href={`/spots/${active.slug}`}>{active.name}<span aria-hidden="true"> →</span><small>釣り場ページを見る</small></Link></h2><SpotFavorite slug={active.slug} name={active.name}/><div className={s.badges}><span>{markerKinds[markerKind(active)].label}</span>{active.features?.map(f=><span key={f}>{f}</span>)}</div>{active.port&&<p>出船港：{active.port}</p>}{active.officialUrl&&<a className={s.googleLink} href={active.officialUrl} target="_blank" rel="noopener noreferrer">{markerKind(active)==='boat'?'船宿公式サイト・出船案内 ↗':'施設・利用条件の公式案内 ↗'}</a>}
    {active.status&&<div className={s.status}>{active.status}</div>}
    <p className={s.lead}>{active.note}</p><p>参照情報の確認日：{active.verifiedAt??'未確認（釣行前に要確認）'}</p>{active.sourceUpdatedAt&&<p>参照元の更新日：{active.sourceUpdatedAt}</p>}{active.sources?.map(source=><p key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></p>)}
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
    <p><Link href={`/spots/${active.slug}`}>{active.name}の釣り場ページを見る →</Link></p><div className={s.bestFor}>{relatedSpotGuideSlugs(active,guideIndex).map(slug=><Link key={slug} href={`/guide/${slug}`}>{guideNames[slug]??slug} →</Link>)}</div><a className={s.googleLink} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.googleQuery)}`} target="_blank" rel="noopener noreferrer">Googleマップで場所を確認 ↗</a>
    {detailOpened&&active.type!=='area'&&<CatchReports scrollRequest={catchScroll} key={active.slug} spotSlug={active.slug} canPost={!active.closed} options={{fish:catchFishOptions.length?catchFishOptions:Object.entries(fishNames).map(([slug,name])=>({slug,name})),methods:Object.entries(methodNames).map(([slug,name])=>({slug,name})),spots:[{slug:active.slug,name:active.name}]}}/>}
    <p className={s.positionFootnote}>ピンは位置の目安です。釣りの許可範囲や駐車位置を示すものではありません。{active.positionNote}</p>
   </>:<div className={s.panelEmpty}>条件を変えて釣り場を探してください。</div>}</aside>
   {shopsOn&&!favoritesOnly&&<section><h2>登録されている釣具店</h2><div className={s.shopList}>{visibleShops.map(shop=><button className={s.spotCard} key={shop.id} onClick={()=>selectShop(shop.id)}><strong>店 {shop.name}</strong><p>{shop.address}</p>{anchor&&hasCoordinates(anchor)&&<small>約{distanceKm(anchor,shop).toFixed(1)}km（直線）</small>}</button>)}</div>{!visibleShops.length&&<p>この範囲には確認済みの登録店舗がまだありません。店舗が存在しないという意味ではありません。</p>}</section>}<div className={s.spotList}>{entries.length?entries.slice(0,listLimit).map(e=><div key={e.slug} className={s.favoriteCard}><button aria-pressed={active?.slug===e.slug} className={`${s.spotCard} ${active?.slug===e.slug?s.selected:''}`} onClick={()=>selectSpot(e.slug)}>
    <div><span>{e.type==='area'?'釣行エリア':e.type==='boat'?'釣船':'釣り場'}</span><small>{e.area}</small></div><strong>{e.name}</strong>{origin&&<small>{hasCoordinates(e)?`現在地から約${distanceKm(origin,e).toFixed(1)}km（直線）`:'位置未登録・距離不明'}</small>}<p>{e.note}</p><div className={s.miniFish}>{e.fish.slice(0,5).map(f=><em key={f}>{f}</em>)}</div>
   </button><SpotFavorite slug={e.slug} name={e.name}/></div>):<div className={s.empty}>{favoritesOnly?(favorites.length?'現在の絞り込み条件に合うお気に入りはありません。':'お気に入りの釣り場はまだありません。'):'条件に合う釣り場はありません。'}{!favoritesOnly&&'休業・閉鎖情報を探す場合は「休業・閉鎖情報も表示」を選んでください。'}</div>}</div>
{entries.length>listLimit&&<button className={s.more} onClick={()=>setListLimit(n=>n+20)}>さらに20件表示（残り{entries.length-listLimit}件）</button>}
  </div>
 </section>
}
