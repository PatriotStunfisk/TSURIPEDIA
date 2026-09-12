import {getSpotsForMethod} from '@/lib/fishing-map-data';
import {fishCatalog} from '@/lib/fish-registry';
import {getFishMethodSlugs} from '@/lib/fish-methods';
import {allGuides} from '@/lib/all-guides';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {methodDetails} from '@/lib/method-registry';

const TACHIUO_ROD_AMAZON='https://link.amazon/B01XtTirB';
const amazonSearch=(q:string)=>`https://www.amazon.co.jp/s?k=${encodeURIComponent(q)}`;
const amazonByMethod:Record<string,{rig:string;bait:string}>={
 'tachiuo-tenya':{rig:amazonSearch('船 タチウオ テンヤ 40号'),bait:amazonSearch('タチウオ テンヤ イワシ エサ')},
 'sabiki':{rig:amazonSearch('サビキ 仕掛け アジ'),bait:amazonSearch('アミエビ サビキ')},
 'tai-rubber':{rig:amazonSearch('タイラバ 仕掛け ヘッド ネクタイ'),bait:amazonSearch('タイラバ ワーム')},
 'nomase':{rig:amazonSearch('ノマセ 泳がせ 仕掛け 青物'),bait:amazonSearch('釣り 活かし バケツ エアーポンプ')}
};

export function generateStaticParams(){return Object.keys(methodDetails).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const m=methodDetails[slug];return {title:m?`${m.name}｜釣り方`:'釣り方',description:m?.overview,alternates:{canonical:`/methods/${slug}`}}}

export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const m=methodDetails[slug];if(!m)notFound();const shop=amazonByMethod[slug];
 return <div className="section pageTop">
  <div className="breadcrumb"><Link href="/">ホーム</Link> / <Link href="/methods">釣り方</Link> / {m.name}</div>
  <div className="pageHero"><span>FISHING METHOD</span><h1>{m.name}</h1><p>{m.subtitle}</p></div>
  {(slug==='tachiuo-tenya'||shop)&&<div className="adNotice">このページにはAmazonへの商品リンクを含みます。</div>}
  <section className="factsGrid"><article><span>対象魚</span><b>{m.target.join('・')}</b></article><article><span>シーズン</span><b>{m.season}</b></article><article><span>場所</span><b>{m.places.join('・')}</b></article><article><span>難易度</span><b>{'★'.repeat(m.difficulty)}{'☆'.repeat(5-m.difficulty)}</b></article></section>
  <section className="detailGrid"><article><span>OVERVIEW</span><h2>{m.name}とは？</h2><p>{m.overview}</p><h3>タックル</h3><p><b>ロッド：</b>{m.rod}</p>{slug==='tachiuo-tenya'&&<a href={TACHIUO_ROD_AMAZON} target="_blank" rel="sponsored noopener noreferrer" className="gearCta">Amazonで船タチウオテンヤロッドを見る →</a>}<p><b>リール：</b>{m.reel}</p><p><b>ライン：</b>{m.line}</p><p><b>リーダー：</b>{m.leader}</p></article><aside><span>RIG & BAIT</span><h2>仕掛けとエサ</h2><p><b>仕掛け：</b>{m.rig}</p>{shop&&<a href={shop.rig} target="_blank" rel="sponsored noopener noreferrer" className="gearCta">Amazonで仕掛けを探す →</a>}<p><b>エサ：</b>{m.bait}</p>{shop&&<a href={shop.bait} target="_blank" rel="sponsored noopener noreferrer" className="gearCta">Amazonでエサ・関連品を探す →</a>}<Link href={`/gear?method=${slug}`} className="gearCta">この釣りの釣具を見る →</Link></aside></section>
  <section className="detailGrid"><article><span>STEP BY STEP</span><h2>基本の手順</h2>{m.steps.map((x,i)=><div className="methodLink" key={x}><strong>{String(i+1).padStart(2,'0')}</strong><div><b>{x}</b></div></div>)}</article><aside><span>KEY POINTS</span><h2>釣果を伸ばすコツ</h2>{m.tips.map(x=><p key={x}>✓ {x}</p>)}</aside></section>
  <section className="detailGrid"><article><span>COMMON MISTAKES</span><h2>よくある失敗</h2>{m.mistakes.map(x=><p key={x}>・{x}</p>)}</article><aside><span>SAFETY</span><h2>安全ポイント</h2>{m.safety.map(x=><p key={x}>⚠ {x}</p>)}</aside></section>
  <section className="detailGrid"><article><span>CHECKLIST</span><h2>持ち物チェック</h2><div className="chips">{m.checklist.map(x=><span key={x}>{x}</span>)}</div></article><aside><span>NEXT</span><h2>次に見る</h2><Link href="/fish" className="methodLink"><div><b>狙う魚の図鑑</b><small>生態・旬・食べ方を見る</small></div><em>→</em></Link><Link href="/spots" className="methodLink"><div><b>釣れる場所</b><small>エリア・設備を見る</small></div><em>→</em></Link></aside></section>
 <section className="detailGrid"><article><h2>この釣法で狙う魚</h2>{fishCatalog.filter(f=>getFishMethodSlugs(f).includes(slug)).map(f=><p key={f.slug}><Link href={`/fish/${f.slug}`}>{f.name}の図鑑</Link>{f.cooking&&<> · <Link href={`/cooking/${f.slug}`}>捌き方と料理</Link></>}</p>)}</article><aside><h2>理解を深めるGUIDE</h2>{allGuides.filter(g=>g.related.some(r=>r.href.split(/[?#]/)[0]===`/methods/${slug}`)).slice(0,6).map(g=><p key={g.slug}><Link href={`/guide/${g.slug}`}>{g.title}</Link></p>)}{getSpotsForMethod(slug).slice(0,3).map(spot=><p key={spot.slug}><Link href={`/spots?q=${encodeURIComponent(spot.name)}`}>{spot.name}の利用条件を見る</Link></p>)}<Link href={`/quest/play?method=${slug}`}>QUESTで釣法を試す →</Link></aside></section>
 </div>
}
