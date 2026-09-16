import {fishCatalog} from '@/lib/fish-registry';
import {methodDetails} from '@/lib/method-registry';
import SpotMap from '@/components/SpotMap';

export const metadata={title:'釣り場マップ',alternates:{canonical:'/spots'},description:'全国の釣り場・釣船・船宿を地方・都道府県・魚・釣法から検索。現在地からの距離と公式情報の確認日を見ながら釣行を計画できます。'};

export default async function Page({searchParams}:{searchParams:Promise<{q?:string}>}){
  const query=await searchParams;
  return <div className="section pageTop">
    <div className="pageHero"><span>FISHING SPOTS</span><h1>釣り場マップ</h1><p>釣り場も船宿も、地方・都道府県・魚・釣法から。マーカーを選ぶと地図のすぐ下に詳細が表示されます。位置は参考表示のため、出発前に公式の入口・集合港・利用条件を確認してください。</p></div>
    <SpotMap fishNames={Object.fromEntries(fishCatalog.map(f=>[f.slug,f.name]))} methodNames={Object.fromEntries(Object.values(methodDetails).map(m=>[m.slug,m.name]))} key={String(query.q??'')} initialQuery={typeof query.q==='string'?query.q.slice(0,100):''}/>
  </div>;
}
