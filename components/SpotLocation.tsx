import Link from 'next/link';
import SpotLocalMap from './SpotLocalMap';
import type {FishingMapEntry} from '@/lib/fishing-map-data';
import type {SpotSitePlan} from '@/lib/spot-site-plan-types';
import {spotCoordinateSearch} from '@/lib/spot-local-map';
import {hasCoordinates} from '@/lib/spot-distance';
import s from './SpotSitePlan.module.css';
export default function SpotLocation({spot,plan}:{spot:FishingMapEntry;plan?:SpotSitePlan}){

 return <section className={s.location} aria-label="現地の地図とアクセス"><h2>現地マップ・アクセス</h2>
 {hasCoordinates(spot)&&<SpotLocalMap lat={spot.lat} lng={spot.lng} name={spot.name}/>}
 <div className={s.actions}><Link href={`/spots?q=${encodeURIComponent(spot.name)}`}>UOLINK MAPで周辺を見る →</Link>{hasCoordinates(spot)&&<a href={spotCoordinateSearch(spot)} target="_blank" rel="noopener noreferrer">地図を大きく開く ↗</a>}</div>
 <p>{spot.access}</p>{plan&&<p><a href={`#site-plan-${spot.slug}`}>護岸・魚礁と狙い方の図解を見る ↓</a></p>}<dl className={s.access}>
 <div><dt>駐車場</dt><dd>{plan?.access.parking??(spot.parking===undefined?'詳細未確認':spot.parking?'あり。利用場所・入出庫条件は案内元を確認。':'専用駐車場なしの登録。')}</dd></div>
 <div><dt>トイレ</dt><dd>{plan?.access.toilet??(spot.toilet===undefined?'詳細未確認':spot.toilet?'あり。開放時間は施設案内を確認。':'なしの登録。')}</dd></div>
 {plan&&<div><dt>電車・バス</dt><dd>{plan.access.transit}</dd></div>}</dl>
 {plan&&<><h3>到着してから釣り座まで</h3><ol className={s.arrival}>{plan.access.arrival.map((step,i)=><li key={step}><b>{i+1}</b><span>{step}</span></li>)}</ol></>}
 <details className={s.notes}><summary>利用条件・位置情報の補足</summary><p>{spot.positionNote??'登録地点は代表位置です。駐車場や入口の場所とは限りません。'}</p><p>{spot.field}</p><p>{spot.timing}</p><ul>{spot.caution.map(x=><li key={x}>{x}</li>)}</ul></details>
 </section>;
}
