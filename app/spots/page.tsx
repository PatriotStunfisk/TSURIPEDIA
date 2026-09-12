import {fishCatalog} from '@/lib/fish-registry';
import {methodDetails} from '@/lib/method-registry';
import SpotMap from '@/components/SpotMap';

export const metadata={title:'釣り場マップ',alternates:{canonical:'/spots'},description:'大阪湾・明石・紀北の釣り場を、狙える魚や釣り方から探せるUOLINK独自の釣り場マップ。'};

export default async function Page({searchParams}:{searchParams:Promise<{q?:string}>}){
  const query=await searchParams;
  return <div className="section pageTop">
    <div className="pageHero"><span>FISHING SPOTS</span><h1>釣り場マップ</h1><p>魚・釣り方・設備から探せるUOLINK独自マップ。今後、釣り場と釣船の情報を順次追加していきます。</p></div>
    <SpotMap fishNames={Object.fromEntries(fishCatalog.map(f=>[f.slug,f.name]))} methodNames={Object.fromEntries(Object.values(methodDetails).map(m=>[m.slug,m.name]))} key={String(query.q??'')} initialQuery={typeof query.q==='string'?query.q.slice(0,100):''}/>
  </div>;
}
