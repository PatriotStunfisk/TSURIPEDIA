import {fishCatalog} from '@/lib/fish-registry';
import {methodDetails} from '@/lib/method-registry';
import SpotMap from '@/components/SpotMap';

export const metadata={title:'釣り場マップ',alternates:{canonical:'/spots'},description:'全国の釣り場を地方・都道府県・魚・釣法から検索。現在地からの距離と公式情報の確認日を見ながら釣行を計画できます。'};

export default async function Page({searchParams}:{searchParams:Promise<{q?:string}>}){
  const query=await searchParams;
  return <div className="section pageTop">
    <div className="pageHero"><span>FISHING SPOTS</span><h1>釣り場マップ</h1><p>日本全国を地方・都道府県・魚・釣法から探す。関西の詳しい情報を残しながら、公式情報を確認できた釣り場を全国へ広げています。</p></div>
    <SpotMap fishNames={Object.fromEntries(fishCatalog.map(f=>[f.slug,f.name]))} methodNames={Object.fromEntries(Object.values(methodDetails).map(m=>[m.slug,m.name]))} key={String(query.q??'')} initialQuery={typeof query.q==='string'?query.q.slice(0,100):''}/>
  </div>;
}
