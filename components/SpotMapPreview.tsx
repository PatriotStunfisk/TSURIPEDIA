'use client';

import type {FishingMapEntry} from '@/lib/fishing-map-data';
import type {TackleShop} from '@/lib/tackle-shops';
import {markerKind,markerKinds} from '@/lib/spot-markers';
import SpotCatchPreview from './SpotCatchPreview';
import SpotFavorite from './SpotFavorite';
import s from './SpotMap.module.css';

const facility=(value:boolean|undefined)=>value===undefined?'未確認':value?'あり':'なし';

/** A non-modal sibling of the Leaflet canvas: card actions never drag or zoom the map. */
export default function SpotMapPreview({entry,shop,onClose,onDetails,fishNames={},methodNames={}}:{fishNames?:Record<string,string>;methodNames?:Record<string,string>;entry?:FishingMapEntry;shop?:TackleShop;onClose:()=>void;onDetails:()=>void}){
 if(!entry&&!shop)return null;
 const name=shop?.name??entry!.name;
 const kind=shop?{label:'釣具店',symbol:'店',color:'#b3480b'}:markerKinds[markerKind(entry!)];
 return <section className={s.mapPreview} aria-label="選択地点のプレビュー" onKeyDown={event=>{if(event.key==='Escape'){event.stopPropagation();onClose();}}}>
  <button type="button" className={s.previewClose} aria-label="プレビューを閉じる" onClick={onClose}>×</button>
  <div className={s.previewType}><i style={{background:kind.color}}>{kind.symbol}</i>{kind.label}<span>{shop?.prefecture??entry?.prefecture}</span></div>
  <h2 aria-live="polite">{name}</h2>
  <p className={s.previewArea}>{shop?.address??entry?.area}</p>
  {entry&&<div className={s.previewFish}>{entry.fishSlugs?.length?entry.fishSlugs.slice(0,4).map(slug=><a key={slug} href={`/fish/${slug}`}>{fishNames[slug]??slug} →</a>):entry.fish.slice(0,4).map(fish=><span key={fish}>{fish}</span>)}</div>}
  {entry&&<div className={s.previewFish}>{entry.methodSlugs?.slice(0,2).map(slug=><a key={slug} href={`/methods/${slug}`}>{methodNames[slug]??slug} →</a>)}{entry.fishSlugs?.[0]?<a href={`/guide?fish=${entry.fishSlugs[0]}`}>関連GUIDE →</a>:entry.guideSlugs?.[0]?<a href={`/guide/${entry.guideSlugs[0]}`}>関連GUIDE →</a>:null}</div>}
  <div className={s.previewFacilities}>{entry?.beginner&&<span>初心者向け</span>}<span>駐車場：{facility(shop?shop.parking:entry?.parking)}</span>{entry&&<span>トイレ：{facility(entry.toilet)}</span>}</div>
  <p className={s.previewIntro}>{shop?.note??entry?.note}</p>
  {entry&&entry.type!=='area'&&<SpotCatchPreview key={entry.slug} slug={entry.slug} fishNames={fishNames} canPost={!entry.closed}/>}
  <div className={s.previewActions}>{entry&&<SpotFavorite slug={entry.slug} name={entry.name}/>}<button type="button" className={s.previewDetails} onClick={onDetails}>詳細を見る ↓</button></div>
 </section>;
}
