import Link from 'next/link';
import {notFound} from 'next/navigation';
import GuideProductCards from '@/components/GuideProductCards';
import GuideAffiliatePicks from '@/components/GuideAffiliatePicks';
import GuideAffiliateExtras from '@/components/GuideAffiliateExtras';
import {allGuides,getGuide} from '@/lib/all-guides';

const compact=(text:string)=>text.replace(/となります。/g,'となる。').replace(/になります。/g,'になる。').replace(/できます。/g,'できる。').replace(/使えます。/g,'使える。').replace(/狙えます。/g,'狙える。').replace(/変わります。/g,'変わる。').replace(/あります。/g,'ある。').replace(/重要です。/g,'重要。').replace(/基本です。/g,'基本。').replace(/目安です。/g,'目安。').replace(/おすすめです。/g,'おすすめ。').replace(/安心です。/g,'安心。').replace(/有効です。/g,'有効。').replace(/必要です。/g,'必要。');
const base='https://uolink.vercel.app';
const categoryAdvice:Record<string,{title:string;body:string;points:string[]}>= {
 '季節・釣り場':{title:'季節記事の使い方',body:'月・地域ごとの魚種は例年傾向。実際の水温、ベイト、風、潮で前後する。出発前は直近数日の釣果と現地ルールを重ねて判断。',points:['直近の釣果で対象魚を絞る','同じ地域でも港・河口・外洋で魚種は変わる','風・波・立入禁止情報を出発前に確認']},
 'タチウオ':{title:'現場で迷ったときの優先順位',body:'棚・誘い・餌の状態を順番に確認。釣れた棚と誘いを再現することが近道。',points:['アタリが出た水深を最優先','餌の曲がりと針先を確認','リーダー傷をこまめに点検']},
 'タイラバ':{title:'釣れないときの確認順',body:'色を替える前に底取りと巻き速度。着底→即巻きを崩さない。',points:['底が曖昧なら重くする','巻き速度を一定にする','釣れた人の速度とレンジを参考']},
 'アジ':{title:'アジは棚合わせが中心',body:'仕掛けより先に群れの深さを探る。一匹釣れた棚を再現。',points:['底から表層まで探る','サビキはコマセと同じ棚へ','アジングは重さでレンジを把握']},
 'サビキ':{title:'サビキで釣れない時',body:'色より魚の有無・棚・針サイズを確認。',points:['周囲の釣果を見る','棚を変える','小魚には小針']},
 '青物':{title:'青物はベイトと時合い',body:'道具変更より魚が入る時間を逃さない。鳥、ナブラ、潮目を観察。',points:['朝夕まずめを集中','ベイト位置を優先','反応がなければ移動']},
 'アオリイカ':{title:'フォールを丁寧に見る',body:'しゃくりより抱く時間を作ることが重要。',points:['底取りできるエギを選ぶ','しゃくった後は沈める','ライン変化を見る']},
 'シロギス':{title:'群れの場所を探す',body:'距離と止める位置を変えて群れを探る。',points:['数mずつ距離変更','釣れた距離を再現','底質変化で止める']},
 'カワハギ':{title:'餌・針先・底取り',body:'小さな差が釣果に直結する釣り。',points:['餌はコンパクト','針先を頻繁に交換','指定オモリで底を取る']},
 'カサゴ':{title:'一つの穴で粘りすぎない',body:'居場所を直撃して数を伸ばす。',points:['底まで落とす','短時間で穴を替える','掛けたらすぐ浮かせる']},
 'メバル':{title:'表層から探る',body:'夜は浮いている個体も多い。表層→中層→底の順。',points:['スローただ巻き','釣れたレンジを再現','風なら少し重く']},
 'サワラ':{title:'歯対策と点検',body:'高速巻き後はリーダーと金具の傷を確認。',points:['一定の高速巻き','リーダー先端確認','フック・リングも点検']},
 'ヒラメ':{title:'地形と移動を優先',body:'離岸流・ブレイク・ベイトを探しながら歩く。',points:['波の変化を見る','扇状に投げる','反応なければ移動']},
 '初心者':{title:'安全と扱いやすさ優先',body:'専用品を増やす前に安全装備と予備仕掛け。',points:['ライフジャケット','ハサミ・プライヤー','予備仕掛け']},
 '釣行準備':{title:'釣行前に先に確認すること',body:'釣れるかどうか以前に、安全に釣りが成立する条件を確認。風・波・雷・足場・現地ルールの順で見る。',points:['風速だけでなく風向きも確認','雷予報があれば無理をしない','帰宅までの保冷と装備を準備']},
 '釣具・仕掛け':{title:'買う前にここを確認',body:'価格や人気だけで決めず、対象魚・釣り方・使用するラインやオモリとの適合を先に確認。専用品が必要な部分と、手持ちで代用できる部分を分ける。',points:['適合重量・ライン容量を最優先','自重と取り回しも比較','最初から最上位機種で揃える必要はない']},
 '魚の扱い':{title:'釣った後は「早く冷やす」が基本',body:'締め方に迷っても、鮮度を落とさない共通点は低温維持。魚種とサイズに合わせて処理し、帰宅まで冷却を切らさない。',points:['小型魚は素早く氷締め','大型魚は血抜き後に冷却','溶けた真水へ長時間浸けない']}
};

export function generateStaticParams(){return allGuides.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=getGuide(slug);if(!a)return {};return {title:a.title,description:a.summary,alternates:{canonical:`/guide/${slug}`},keywords:[a.query,a.category,'釣り','UOLINK','ウオリンク'],openGraph:{title:`${a.title}｜UOLINK（ウオリンク）`,description:a.summary,url:`${base}/guide/${slug}`,type:'article',siteName:'UOLINK（ウオリンク）',locale:'ja_JP'}}}

export default async function GuideArticlePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const a=getGuide(slug);if(!a)notFound();const advice=categoryAdvice[a.category];
 const breadcrumb={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'ホーム',item:base},{'@type':'ListItem',position:2,name:'釣りGUIDE',item:`${base}/guide`},{'@type':'ListItem',position:3,name:a.title,item:`${base}/guide/${slug}`}]};
 const article={'@context':'https://schema.org','@type':'Article',headline:a.title,description:a.summary,inLanguage:'ja-JP',mainEntityOfPage:`${base}/guide/${slug}`,publisher:{'@id':`${base}/#organization`},isPartOf:{'@id':`${base}/#website`}};
 return <div className="section pageTop">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(article)}}/>
  <div className="breadcrumb"><Link href="/">ホーム</Link> / <Link href="/guide">釣りGUIDE</Link> / {a.category}</div>
  <div className="pageHero"><span>UOLINK GUIDE</span><h1>{a.title}</h1><p>{a.summary}</p></div>
  <section style={{margin:'24px 0',padding:'26px 28px',borderRadius:20,background:'#0e2f43',color:'#fff',border:'1px solid #1d4c66'}}><span style={{display:'inline-flex',padding:'5px 9px',borderRadius:999,background:'#fff',color:'#0e2f43',fontSize:11,fontWeight:900}}>結論</span><p style={{fontSize:'clamp(18px,2.3vw,23px)',lineHeight:1.7,fontWeight:900,margin:'13px 0 0'}}>{compact(a.answer)}</p></section>
  <section className="factsGrid"><article><span>検索テーマ</span><b>{a.query}</b></article><article><span>カテゴリ</span><b>{a.category}</b></article><article><span>読む目安</span><b>約3〜5分</b></article><article><span>UOLINK</span><b>釣行前の疑問解決</b></article></section>
  <nav style={{margin:'20px 0 0',padding:'18px 20px',borderRadius:14,background:'#f4f8fa'}}><b style={{display:'block',marginBottom:8}}>この記事のポイント</b><div style={{display:'flex',gap:10,flexWrap:'wrap'}}>{a.sections.map((s,i)=><a key={s.heading} href={`#p${i+1}`} style={{fontSize:12,fontWeight:800,color:'#087bc4'}}>0{i+1} {s.heading}</a>)}</div></nav>
  <div style={{display:'grid',gap:18,marginTop:28}}>{a.sections.map((s,i)=><section id={`p${i+1}`} key={s.heading} style={{padding:'24px',border:'1px solid #e0e8ed',borderRadius:18,background:'#fff',scrollMarginTop:90}}><span style={{fontSize:12,fontWeight:900,letterSpacing:1.2,color:'#087bc4'}}>POINT {String(i+1).padStart(2,'0')}</span><h2 style={{margin:'6px 0 10px'}}>{s.heading}</h2><p style={{lineHeight:1.9,margin:0}}>{s.body}</p>{s.points&&<div style={{display:'grid',gap:8,marginTop:14}}>{s.points.map(p=><div key={p} style={{padding:'10px 12px',background:'#f4f8fa',borderRadius:10,fontWeight:700}}>✓ {p}</div>)}</div>}</section>)}</div>
  {advice&&<section style={{margin:'20px 0 0',padding:'24px',borderRadius:18,background:'#fff8e8',border:'1px solid #f0ddb1'}}><span style={{fontSize:12,fontWeight:900,color:'#9a6b00'}}>PRACTICAL NOTE</span><h2 style={{margin:'6px 0 10px'}}>{advice.title}</h2><p style={{lineHeight:1.9}}>{advice.body}</p><div style={{display:'grid',gap:8}}>{advice.points.map(p=><div key={p} style={{padding:'10px 12px',background:'#fff',borderRadius:10,fontWeight:800}}>・{p}</div>)}</div></section>}
  <GuideAffiliatePicks slug={slug}/>
  <GuideAffiliateExtras slug={slug}/>
  <GuideProductCards slug={slug}/>
  <section style={{margin:'34px 0 10px',padding:'24px',borderRadius:20,background:'#edf6fb'}}><span style={{fontSize:12,fontWeight:900,color:'#087bc4'}}>RELATED</span><h2 style={{margin:'5px 0 14px'}}>次に見る</h2><div style={{display:'grid',gap:10}}>{a.related.map(r=><Link key={r.href} href={r.href} className="methodLink"><div><b>{r.label}</b><small>UOLINK内で詳しく見る</small></div><em>→</em></Link>)}</div></section>
  <p style={{fontSize:12,lineHeight:1.7,opacity:.62,marginTop:22}}>※季節・魚種・仕掛けは海況や地域で変わる。現地ルールと直近情報を優先。</p>
 </div>
}
