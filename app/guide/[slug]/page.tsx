import Link from 'next/link';
import {notFound} from 'next/navigation';
import {guideArticles} from '@/lib/guide-articles';
import {extraGuideArticles} from '@/lib/guide-articles-extra';

const allGuides=[...guideArticles,...extraGuideArticles];
const getGuide=(slug:string)=>allGuides.find(x=>x.slug===slug);
const compact=(text:string)=>text
 .replace(/となります。/g,'となる。').replace(/になります。/g,'になる。')
 .replace(/できます。/g,'できる。').replace(/使えます。/g,'使える。')
 .replace(/狙えます。/g,'狙える。').replace(/変わります。/g,'変わる。')
 .replace(/あります。/g,'ある。').replace(/重要です。/g,'重要。')
 .replace(/基本です。/g,'基本。').replace(/目安です。/g,'目安。')
 .replace(/おすすめです。/g,'おすすめ。').replace(/安心です。/g,'安心。')
 .replace(/有効です。/g,'有効。').replace(/必要です。/g,'必要。')
 .replace(/十分です。/g,'十分。').replace(/確実です。/g,'確実。')
 .replace(/便利です。/g,'便利。').replace(/候補です。/g,'候補。');
const base='https://uolink.vercel.app';
export function generateStaticParams(){return allGuides.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=getGuide(slug);if(!a)return {};return {title:a.title,description:a.summary,alternates:{canonical:`/guide/${slug}`},keywords:[a.query,a.category,'釣り','UOLINK','ウオリンク'],openGraph:{title:`${a.title}｜UOLINK（ウオリンク）`,description:a.summary,url:`${base}/guide/${slug}`,type:'article',siteName:'UOLINK（ウオリンク）',locale:'ja_JP'}}}

export default async function GuideArticlePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const a=getGuide(slug);if(!a)notFound();
 const breadcrumb={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'ホーム',item:base},{'@type':'ListItem',position:2,name:'釣りGUIDE',item:`${base}/guide`},{'@type':'ListItem',position:3,name:a.title,item:`${base}/guide/${slug}`}]};
 const article={'@context':'https://schema.org','@type':'Article',headline:a.title,description:a.summary,inLanguage:'ja-JP',mainEntityOfPage:`${base}/guide/${slug}`,publisher:{'@id':`${base}/#organization`},isPartOf:{'@id':`${base}/#website`}};
 return <div className="section pageTop">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(article)}}/>
  <div className="breadcrumb"><Link href="/">ホーム</Link> / <Link href="/guide">釣りGUIDE</Link> / {a.category}</div>
  <div className="pageHero"><span>UOLINK GUIDE</span><h1>{a.title}</h1><p>{a.summary}</p></div>
  <section style={{margin:'24px 0',padding:'26px 28px',borderRadius:20,background:'#0e2f43',color:'#fff',border:'1px solid #1d4c66',boxShadow:'0 12px 30px rgba(8,39,57,.12)'}}><span style={{display:'inline-flex',padding:'5px 9px',borderRadius:999,background:'#fff',color:'#0e2f43',fontSize:11,fontWeight:900,letterSpacing:1.2}}>結論</span><p style={{fontSize:'clamp(18px,2.3vw,23px)',lineHeight:1.7,fontWeight:900,margin:'13px 0 0',letterSpacing:'.01em'}}>{compact(a.answer)}</p></section>
  <section className="factsGrid"><article><span>検索テーマ</span><b>{a.query}</b></article><article><span>カテゴリ</span><b>{a.category}</b></article><article><span>読む目安</span><b>約2〜4分</b></article><article><span>UOLINK</span><b>釣行前の疑問解決</b></article></section>
  <div style={{display:'grid',gap:18,marginTop:28}}>{a.sections.map((s,i)=><section key={s.heading} style={{padding:'24px',border:'1px solid #e0e8ed',borderRadius:18,background:'#fff'}}><span style={{fontSize:12,fontWeight:900,letterSpacing:1.2,color:'#087bc4'}}>POINT {String(i+1).padStart(2,'0')}</span><h2 style={{margin:'6px 0 10px'}}>{s.heading}</h2><p style={{lineHeight:1.9,margin:0}}>{s.body}</p>{s.points&&<div style={{display:'grid',gap:8,marginTop:14}}>{s.points.map(p=><div key={p} style={{padding:'10px 12px',background:'#f4f8fa',borderRadius:10,fontWeight:700}}>✓ {p}</div>)}</div>}</section>)}</div>
  <section style={{margin:'34px 0 10px',padding:'24px',borderRadius:20,background:'#edf6fb'}}><span style={{fontSize:12,fontWeight:900,letterSpacing:1.3,color:'#087bc4'}}>RELATED</span><h2 style={{margin:'5px 0 14px'}}>次に見る</h2><div style={{display:'grid',gap:10}}>{a.related.map(r=><Link key={r.href} href={r.href} className="methodLink"><div><b>{r.label}</b><small>UOLINK内で詳しく見る</small></div><em>→</em></Link>)}</div></section>
  <p style={{fontSize:12,lineHeight:1.7,opacity:.62,marginTop:22}}>※釣具の号数・重量や仕掛けは、釣り場・潮・対象サイズ・船宿ルールで変わる。現地や船宿の指定がある場合は、その指定を優先。</p>
 </div>
}
