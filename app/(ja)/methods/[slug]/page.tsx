import readingStyles from '@/components/RecipeDeepDive.module.css';
import {languageAlternates} from '@/lib/i18n/routes';
import RelatedGear from '@/components/RelatedGear';
import {selectRelatedGear} from '@/lib/gear-catalog';
import RelatedSpots from '@/components/RelatedSpots';
import TackleDiagram from '@/components/TackleDiagram';
import {amazonSearchUrl,tachiuoRodSearch} from '@/lib/affiliate-products';
import MethodTackle from '@/components/MethodTackle';
import AffiliateProducts from '@/components/AffiliateProducts';
import {getSpotsForMethod} from '@/lib/fishing-map-data';
import {fishCatalog,getFishByName} from '@/lib/fish-registry';
import {getFishMethodSlugs} from '@/lib/fish-methods';
import {allGuides} from '@/lib/all-guides';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {methodDetails} from '@/lib/method-registry';

const TACHIUO_ROD_AMAZON=tachiuoRodSearch;
const amazonSearch=amazonSearchUrl;
const amazonByMethod:Record<string,{rig:string;bait:string}>={
 'tachiuo-tenya':{rig:amazonSearch('船 タチウオ テンヤ 40号'),bait:amazonSearch('タチウオ テンヤ イワシ エサ')},
 'sabiki':{rig:amazonSearch('サビキ 仕掛け アジ'),bait:amazonSearch('アミエビ サビキ')},
 'tai-rubber':{rig:amazonSearch('タイラバ 仕掛け ヘッド ネクタイ'),bait:amazonSearch('タイラバ ワーム')},
 'nomase':{rig:amazonSearch('ノマセ 泳がせ 仕掛け 青物'),bait:amazonSearch('釣り 活かし バケツ エアーポンプ')}
};

export function generateStaticParams(){return Object.keys(methodDetails).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const m=methodDetails[slug];return {title:m?`${m.name}｜釣り方`:'釣り方',description:m?.overview,alternates:{canonical:`/methods/${slug}`,languages:languageAlternates(`/methods/${slug}`)}}}

export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const m=methodDetails[slug];if(!m)notFound();const shop=amazonByMethod[slug];const hasGear=selectRelatedGear({method:slug}).length>0;const relatedGuides=allGuides.filter(g=>g.related.some(r=>r.href.split(/[?#]/)[0]===`/methods/${slug}`)||g.title.includes(m.name)).slice(0,6);const targetSlugs=new Set(m.target.flatMap(name=>{const fish=getFishByName(name);return fish?[fish.slug]:[]}));
 return <div className="section pageTop">
  <div className="breadcrumb"><Link href="/">ホーム</Link> / <Link href="/methods">釣り方</Link> / {m.name}</div>
  <div className="pageHero"><span>FISHING METHOD</span><h1>{m.name}</h1><p>{m.subtitle}</p></div>
  {(slug==='tachiuo-tenya'||shop)&&<div className="adNotice">このページにはAmazonへの商品リンクを含みます。</div>}
  <section className="factsGrid"><article><span>対象魚</span><b>{m.target.join('・')}</b></article><article><span>シーズン</span><b>{m.season}</b></article><article><span>場所</span><b>{m.places.join('・')}</b></article><article><span>難易度</span><b>{'★'.repeat(m.difficulty)}{'☆'.repeat(5-m.difficulty)}</b></article></section>
  <TackleDiagram slug={slug}/>
  {m.sources?.length&&<details><summary>参考にしたメーカーの釣法解説</summary>{m.sources.map(s=><p key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label} ↗</a></p>)}</details>}
  <section className="detailGrid"><article><span>OVERVIEW</span><h2>{m.name}とは？</h2><p>{m.overview}</p><h3>タックル</h3><p><b>ロッド：</b>{m.rod}</p>{slug==='tachiuo-tenya'&&<a href={TACHIUO_ROD_AMAZON} target="_blank" rel="sponsored noopener noreferrer" className="gearCta">Amazonで船タチウオテンヤロッドを見る →</a>}<p><b>リール：</b>{m.reel}</p><p><b>ライン：</b>{m.line}</p><p><b>リーダー：</b>{m.leader}</p></article><aside><span>RIG & BAIT</span><h2>仕掛けとエサ</h2><p><b>仕掛け：</b>{m.rig}</p>{shop&&<a href={shop.rig} target="_blank" rel="sponsored noopener noreferrer" className="gearCta">Amazonで仕掛けを探す →</a>}<p><b>エサ：</b>{m.bait}</p>{shop&&<a href={shop.bait} target="_blank" rel="sponsored noopener noreferrer" className="gearCta">Amazonでエサ・関連品を探す →</a>}<Link href={hasGear?`/gear?method=${slug}`:"/gear"} className="gearCta">{hasGear?"この釣りの釣具を見る":"釣具図鑑で道具を探す"} →</Link></aside></section>
  <RelatedGear method={slug} title={`${m.name}に使う釣具図鑑`}/><section className="detailGrid"><article><span>STEP BY STEP</span><h2>基本の手順</h2>{m.steps.map((x,i)=><div className="methodLink" key={x}><strong>{String(i+1).padStart(2,'0')}</strong><div><b>{x}</b></div></div>)}</article><aside><span>KEY POINTS</span><h2>釣果を伸ばすコツ</h2>{m.tips.map(x=><p key={x}>✓ {x}</p>)}</aside></section>
  <section className="detailGrid"><article><span>COMMON MISTAKES</span><h2>よくある失敗</h2>{m.troubleshooting?.length?<table className={readingStyles.table}><thead><tr><th scope="col">困ったこと</th><th scope="col">試すこと</th></tr></thead><tbody>{m.troubleshooting.map(row=><tr key={row.problem}><th scope="row">{row.problem}</th><td>{row.action}<br/><small>{row.check}</small></td></tr>)}</tbody></table>:m.mistakes.map(x=><p key={x}>・{x}</p>)}</article><aside><span>SAFETY</span><h2>安全ポイント</h2>{m.safety.map(x=><p key={x}>⚠ {x}</p>)}</aside></section>
  <section className="detailGrid"><article><span>CHECKLIST</span><h2>持ち物チェック</h2><div className="chips">{m.checklist.map(x=><span key={x}>{x}</span>)}</div></article><aside><span>NEXT</span><h2>次に見る</h2><Link href="/fish" className="methodLink"><div><b>狙う魚の図鑑</b><small>生態・旬・食べ方を見る</small></div><em>→</em></Link><Link href={`/spots?method=${slug}`} className="methodLink"><div><b>釣れる場所</b><small>エリア・設備を見る</small></div><em>→</em></Link></aside></section>
 <section className="detailGrid"><article><h2>この釣法で狙う魚</h2>{fishCatalog.filter(f=>getFishMethodSlugs(f).includes(slug)||targetSlugs.has(f.slug)).map(f=><p key={f.slug}><Link href={`/fish/${f.slug}`}>{f.name}の図鑑</Link>{f.cooking&&<> · <Link href={`/cooking/${f.slug}`}>捌き方と料理</Link></>}</p>)}</article><aside>{relatedGuides.length>0&&<h2>理解を深めるGUIDE</h2>}{relatedGuides.map(g=><p key={g.slug}><Link href={`/guide/${g.slug}`}>{g.title}</Link></p>)}<RelatedSpots entries={getSpotsForMethod(slug)} method={slug} name={m.name}/><Link href={`/quest/play?method=${slug}`}>QUESTで釣法を試す →</Link></aside></section>
 <MethodTackle slug={slug}/>{!selectRelatedGear({method:slug}).length&&<AffiliateProducts methods={[slug]}/>}</div>
}
