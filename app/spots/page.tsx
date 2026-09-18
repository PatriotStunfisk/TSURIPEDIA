import {tackleShops} from '@/lib/tackle-shops';
import {pageSharing} from '@/lib/page-sharing';
import {allGuides} from '@/lib/all-guides';
import {getFishSpecies} from '@/lib/fish-species';
import {fishCatalog} from '@/lib/fish-registry';
import {methodDetails} from '@/lib/method-registry';
import {fishingMapEntries} from '@/lib/fishing-map-data';
import SpotMap from '@/components/SpotMap';

export const metadata=pageSharing("/spots","全国の釣り場・船宿MAP","全国の釣り場と船宿を地域・魚・釣法・施設タイプから検索。公式案内と最近の釣果を確認して釣行を計画。");

export default async function Page({searchParams}:{searchParams:Promise<{q?:string;type?:string;near?:string;shops?:string;favorites?:string}>}){
  const query=await searchParams;
  return <div className="section pageTop">
    <div className="pageHero"><span>FISHING SPOTS</span><h1>釣り場マップ</h1><p>釣り場も船宿も、地方・都道府県・魚・釣法から。マーカーを選ぶと地図内で概要を比較できます。「詳細を見る」で詳しい情報へ進めます。位置は参考表示のため、出発前に公式の入口・集合港・利用条件を確認してください。</p></div>
    <SpotMap initialFavorites={query.favorites==='1'} shops={tackleShops} nearSpot={typeof query.near==='string'?query.near:undefined} initialShops={query.shops==='1'} mapEntries={fishingMapEntries} guideNames={Object.fromEntries(allGuides.map(g=>[g.slug,g.title]))} cookingSlugs={fishCatalog.filter(f=>getFishSpecies(f.slug)?.cooking?.recipes.length).map(f=>f.slug)} initialKind={query.type==='boat'?'boat':'all'} fishNames={Object.fromEntries(fishCatalog.map(f=>[f.slug,f.name]))} methodNames={Object.fromEntries(Object.values(methodDetails).map(m=>[m.slug,m.name]))} key={`${query.q??''}:${query.type??''}:${query.near??''}:${query.shops??''}:${query.favorites??''}`}  initialQuery={typeof query.q==='string'?query.q.slice(0,100):''}/>
  </div>;
}
