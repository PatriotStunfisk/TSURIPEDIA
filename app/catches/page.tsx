import CatchFeed from '@/components/CatchFeed';
import {fishingMapEntries} from '@/lib/fishing-map-data';
import CloudCatchJournal from '@/components/CloudCatchJournal';
import Link from 'next/link';import {RealCatchJournal} from '@/components/CatchReports';import {catchOptions} from '@/lib/catches/options';
export const metadata={title:'全国の新着釣果｜魚・釣法・エリアから探す',description:'全国の利用者の釣果を魚種・都道府県・釣り場・釣法・釣行日で探せます。閲覧といいねはログイン不要です。',alternates:{canonical:'/catches'}};
export default async function Page({searchParams}:{searchParams:Promise<{spot?:string}>}){const query=await searchParams;return <div className="section pageTop"><h1>全国の新着釣果</h1><p><Link href="/spots">釣り場マップを見る →</Link> · <a href="#my-catches">自分の記録へ</a></p><CatchFeed initialSpot={fishingMapEntries.some(s=>s.slug===query.spot)?query.spot:undefined} options={catchOptions()} prefectures={[...new Set(fishingMapEntries.flatMap(s=>s.prefecture?[s.prefecture]:[]))]}/><details id="my-catches"><summary>自分の釣果・端末内の記録</summary><CloudCatchJournal options={catchOptions()}/><RealCatchJournal options={catchOptions()}/><Link href="/quest/profile">QUESTのマイ記録へ →</Link></details></div>}
