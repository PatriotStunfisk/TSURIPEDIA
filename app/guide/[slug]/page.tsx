import Link from 'next/link';
import {notFound} from 'next/navigation';
import {guideArticles} from '@/lib/guide-articles';
import {extraGuideArticles} from '@/lib/guide-articles-extra';
import {extraGuideArticles2} from '@/lib/guide-articles-extra2';

const allGuides=[...guideArticles,...extraGuideArticles,...extraGuideArticles2];
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
const categoryAdvice:Record<string,{title:string;body:string;points:string[]}>= {
 'タチウオ':{title:'現場で迷ったときの優先順位',body:'タチウオは日によって棚と活性の差が大きい。仕掛けを増やす前に、まず棚・誘い・餌の状態を順番に確認する。',points:['一度アタリが出た水深を最優先','餌が曲がったら即交換・付け直し','針先とリーダーの傷をこまめに確認']},
 'タイラバ':{title:'釣れないときに先に変えるもの',body:'色やネクタイを替える前に、底取りと巻き速度を確認。タイラバは「底へ届く」「一定に巻く」の2点が崩れると釣果が落ちやすい。',points:['底が曖昧ならヘッドを重くする','釣れた人の巻き速度を合わせる','着底後はすぐ巻き始める']},
 'アジ':{title:'アジ攻略は棚合わせが中心',body:'アジは群れのいる層を外すと、仕掛けやワームが合っていても反応が出にくい。まず深さを変え、次に仕掛けを調整する。',points:['一匹釣れた棚を再現','サビキはコマセと仕掛けを同じ層へ','アジングは重さを変えてレンジを把握']},
 'サビキ':{title:'サビキで伸び悩むときの確認順',body:'釣れない原因は色より、魚がいない・棚が違う・針サイズが合わないことが多い。基本条件から順に確認する。',points:['周囲で魚が上がっているか確認','底から表層まで棚を探る','魚が小さいなら針も小さくする']},
 '青物':{title:'青物はベイトと時合いを優先',body:'青物は回遊魚。道具を細かく変えるより、ベイト・鳥・潮の変化を見て「魚が入っている時間」を逃さないことが重要。',points:['朝夕まずめは集中して投げる','ナブラや鳥山が出たら即対応','魚がいなければ移動も選択肢']},
 'アオリイカ':{title:'エギングで迷ったらフォールを見る',body:'しゃくり回数より、エギが沈む時間と姿勢が重要。イカはフォール中に抱くことが多いため、ラインの変化を観察する。',points:['底取りできる重さ・沈下速度にする','しゃくった後は必ずフォール','釣れた深さと沈下時間を再現']},
 'シロギス':{title:'キスは「場所を探す」釣り',body:'キスは群れで固まることが多い。餌や針を細かく替えるより、投げる距離と仕掛けを止める位置を変えて群れを探す。',points:['数mずつ探る距離を変える','一匹釣れた距離を重点的に通す','砂地の変化で数秒止める']},
 'カワハギ':{title:'カワハギは餌・針先・底取り',body:'餌取り名人だけに、針先が鈍い、餌が大きい、底が分からないだけで一気に難しくなる。',points:['アサリはコンパクトに付ける','針先は頻繁に交換','船宿指定オモリで底を正確に取る']},
 'カサゴ':{title:'カサゴは一つの穴で粘りすぎない',body:'根魚は居場所を直撃する方が効率的。反応のない穴で待ち続けるより、短時間で次々探る。',points:['底まで確実に落とす','数十秒反応がなければ移動','掛けたらすぐ根から離す']},
 'メバル':{title:'メバルは表層から探る',body:'根魚だからと底だけを狙うと、浮いているメバルを外す。夜は表層から中層、最後に底の順で探ると効率的。',points:['最初はスローただ巻き','釣れたレンジを再現','風が強ければ少し重くする']},
 'サワラ':{title:'サワラは歯対策と高速回収',body:'高速巻きで追わせる釣りが多く、ヒット後のライン傷も出やすい。ルアーだけでなくリーダーと金具まで毎回点検する。',points:['高速巻きを一定に保つ','リーダー先端の傷を確認','フックとリングの変形も点検']},
 'ヒラメ':{title:'サーフでは地形と移動を優先',body:'広い砂浜で一カ所へ投げ続けるより、離岸流・ブレイク・ベイトを探しながら歩く方が魚へ近づきやすい。',points:['離岸流と波の変化を見る','扇状に投げて広く探る','反応がなければ数十m移動']},
 '季節・釣り場':{title:'月別情報は直近釣果で補正',body:'「例年釣れる魚」と「今まさに釣れている魚」は別物。水温・台風・ベイト状況でシーズンは前後するため、直近数日の釣果を重ねて判断する。',points:['同じエリアの直近釣果を確認','時間帯まで見る','天候と風・波を出発前に再確認']},
 '初心者':{title:'最初は釣果より安全と扱いやすさ',body:'初心者は専用品を増やすより、扱いやすい仕掛けと安全装備を優先。サビキやちょい投げなど、操作が単純な釣りから始める。',points:['ライフジャケットを最優先','仕掛けは予備を複数用意','魚つかみ・プライヤー・ハサミを準備']}
};
const base='https://uolink.vercel.app';
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
  <section style={{margin:'24px 0',padding:'26px 28px',borderRadius:20,background:'#0e2f43',color:'#fff',border:'1px solid #1d4c66',boxShadow:'0 12px 30px rgba(8,39,57,.12)'}}><span style={{display:'inline-flex',padding:'5px 9px',borderRadius:999,background:'#fff',color:'#0e2f43',fontSize:11,fontWeight:900,letterSpacing:1.2}}>結論</span><p style={{fontSize:'clamp(18px,2.3vw,23px)',lineHeight:1.7,fontWeight:900,margin:'13px 0 0',letterSpacing:'.01em'}}>{compact(a.answer)}</p></section>
  <section className="factsGrid"><article><span>検索テーマ</span><b>{a.query}</b></article><article><span>カテゴリ</span><b>{a.category}</b></article><article><span>読む目安</span><b>約3〜5分</b></article><article><span>UOLINK</span><b>釣行前の疑問解決</b></article></section>
  <nav style={{margin:'20px 0 0',padding:'18px 20px',borderRadius:14,background:'#f4f8fa'}}><b style={{display:'block',marginBottom:8}}>この記事のポイント</b><div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{a.sections.map((s,i)=><a key={s.heading} href={`#p${i+1}`} style={{fontSize:12,fontWeight:800,color:'#087bc4'}}>0{i+1} {s.heading}</a>)}</div></nav>
  <div style={{display:'grid',gap:18,marginTop:28}}>{a.sections.map((s,i)=><section id={`p${i+1}`} key={s.heading} style={{padding:'24px',border:'1px solid #e0e8ed',borderRadius:18,background:'#fff',scrollMarginTop:90}}><span style={{fontSize:12,fontWeight:900,letterSpacing:1.2,color:'#087bc4'}}>POINT {String(i+1).padStart(2,'0')}</span><h2 style={{margin:'6px 0 10px'}}>{s.heading}</h2><p style={{lineHeight:1.9,margin:0}}>{s.body}</p>{s.points&&<div style={{display:'grid',gap:8,marginTop:14}}>{s.points.map(p=><div key={p} style={{padding:'10px 12px',background:'#f4f8fa',borderRadius:10,fontWeight:700}}>✓ {p}</div>)}</div>}</section>)}</div>
  {advice&&<section style={{margin:'20px 0 0',padding:'24px',borderRadius:18,background:'#fff8e8',border:'1px solid #f0ddb1'}}><span style={{fontSize:12,fontWeight:900,letterSpacing:1.2,color:'#9a6b00'}}>PRACTICAL NOTE</span><h2 style={{margin:'6px 0 10px'}}>{advice.title}</h2><p style={{lineHeight:1.9,margin:'0 0 14px'}}>{advice.body}</p><div style={{display:'grid',gap:8}}>{advice.points.map(p=><div key={p} style={{padding:'10px 12px',background:'#fff',borderRadius:10,fontWeight:800}}>・{p}</div>)}</div></section>}
  <section style={{margin:'34px 0 10px',padding:'24px',borderRadius:20,background:'#edf6fb'}}><span style={{fontSize:12,fontWeight:900,letterSpacing:1.3,color:'#087bc4'}}>RELATED</span><h2 style={{margin:'5px 0 14px'}}>次に見る</h2><div style={{display:'grid',gap:10}}>{a.related.map(r=><Link key={r.href} href={r.href} className="methodLink"><div><b>{r.label}</b><small>UOLINK内で詳しく見る</small></div><em>→</em></Link>)}</div></section>
  <p style={{fontSize:12,lineHeight:1.7,opacity:.62,marginTop:22}}>※釣具の号数・重量や仕掛けは、釣り場・潮・対象サイズ・船宿ルールで変わる。現地や船宿の指定がある場合は、その指定を優先。</p>
 </div>
}
