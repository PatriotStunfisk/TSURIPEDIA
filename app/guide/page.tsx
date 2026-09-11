import Link from 'next/link';
import {guideArticles} from '@/lib/guide-articles';
import {extraGuideArticles} from '@/lib/guide-articles-extra';

const allGuides=[...guideArticles,...extraGuideArticles];
const catId=(cat:string)=>`guide-${cat.replace(/[\s・/]/g,'-')}`;
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

export const metadata={title:'釣りGUIDE｜疑問から探す実践Q&A',description:'PEは何号？オモリは何g？今月何が釣れる？釣り人が検索しやすい疑問に結論から答えるUOLINKの実践ガイド。'};

export default function GuidePage(){
 const cats=[...new Set(allGuides.map(a=>a.category))];
 return <div id="top" className="section pageTop">
  <div className="pageHero"><span>UOLINK GUIDE</span><h1>釣りGUIDE</h1><p>「何号？」「何g？」「いつ釣れる？」を、まず結論から。魚図鑑と釣り方ページにつながる実践Q&amp;A。</p></div>

  <nav aria-label="釣りGUIDEの目次" style={{margin:'24px 0 38px',padding:'22px',borderRadius:20,background:'#eef7fb',border:'1px solid #d8eaf3'}}>
   <span style={{display:'block',fontSize:12,fontWeight:900,letterSpacing:1.3,color:'#087bc4',marginBottom:7}}>CONTENTS</span>
   <b style={{display:'block',fontSize:20,marginBottom:14}}>気になる項目へすぐ移動</b>
   <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{cats.map(cat=><a key={cat} href={`#${catId(cat)}`} style={{display:'inline-flex',alignItems:'center',minHeight:40,padding:'8px 13px',borderRadius:999,background:'#fff',border:'1px solid #cfe2ec',fontSize:13,fontWeight:800,color:'#173449'}}>{cat} ↓</a>)}</div>
  </nav>

  {cats.map(cat=><section id={catId(cat)} key={cat} style={{margin:'36px 0',scrollMarginTop:90}}><div style={{display:'flex',alignItems:'end',justifyContent:'space-between',gap:16,marginBottom:14}}><div><span style={{fontSize:12,fontWeight:900,letterSpacing:1.4,color:'#087bc4'}}>SEARCH GUIDE</span><h2 style={{margin:'4px 0 0'}}>{cat}</h2></div></div><div className="listCards">{allGuides.filter(a=>a.category===cat).map((a,i)=><article key={a.slug} style={{gridTemplateColumns:'42px 1fr auto'}}><div className="number">{String(i+1).padStart(2,'0')}</div><div><div className="chips"><span>{a.query}</span></div><h3 style={{fontSize:22,margin:'9px 0 8px'}}>{a.title}</h3><p>{a.summary}</p><div style={{marginTop:13,padding:'14px 16px',borderLeft:'4px solid #1687e8',borderRadius:'0 12px 12px 0',background:'#f0f7fb'}}><span style={{display:'block',fontSize:10,fontWeight:900,letterSpacing:1.2,color:'#087bc4',marginBottom:5}}>結論</span><p style={{margin:0,fontWeight:800,lineHeight:1.75,color:'#102f42'}}>{compact(a.answer)}</p></div></div><Link href={`/guide/${a.slug}`} className="searchBtn">詳しく読む →</Link></article>)}</div><div style={{textAlign:'right',marginTop:12}}><a href="#top" style={{fontSize:12,fontWeight:800,color:'#087bc4'}}>ページ上部へ ↑</a></div></section>)}
 </div>
}
