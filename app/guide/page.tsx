import Link from 'next/link';
import {guideArticles} from '@/lib/guide-articles';
import {extraGuideArticles} from '@/lib/guide-articles-extra';

const allGuides=[...guideArticles,...extraGuideArticles];
export const metadata={title:'釣りGUIDE｜疑問から探す実践Q&A',description:'PEは何号？オモリは何g？今月何が釣れる？釣り人が検索しやすい疑問に結論から答えるUOLINKの実践ガイド。'};

export default function GuidePage(){
 const cats=[...new Set(allGuides.map(a=>a.category))];
 return <div className="section pageTop">
  <div className="pageHero"><span>UOLINK GUIDE</span><h1>釣りGUIDE</h1><p>「何号？」「何g？」「いつ釣れる？」を、まず結論から。魚図鑑と釣り方ページにつながる実践Q&amp;Aです。</p></div>
  <section style={{margin:'24px 0 34px',padding:'22px',borderRadius:20,background:'#eef7fb',border:'1px solid #d8eaf3'}}><b style={{display:'block',fontSize:20,marginBottom:8}}>全{allGuides.length}記事。釣行前の疑問をすぐ解決</b><p style={{margin:0,lineHeight:1.8}}>タイラバのPEは何号？　タチウオテンヤ40号と50号は何が違う？　大阪湾で今の時期に何が釣れる？――釣行前に気になる「数字」「時期」「選び方」を中心にまとめています。</p></section>
  {cats.map(cat=><section key={cat} style={{margin:'36px 0'}}><div style={{display:'flex',alignItems:'end',justifyContent:'space-between',gap:16,marginBottom:14}}><div><span style={{fontSize:12,fontWeight:900,letterSpacing:1.4,color:'#087bc4'}}>SEARCH GUIDE</span><h2 style={{margin:'4px 0 0'}}>{cat}</h2></div><span style={{fontSize:13,opacity:.65}}>{allGuides.filter(a=>a.category===cat).length}記事</span></div><div className="listCards">{allGuides.filter(a=>a.category===cat).map((a,i)=><article key={a.slug} style={{gridTemplateColumns:'42px 1fr auto'}}><div className="number">{String(i+1).padStart(2,'0')}</div><div><div className="chips"><span>{a.query}</span></div><h3 style={{fontSize:22,margin:'9px 0 8px'}}>{a.title}</h3><p>{a.summary}</p><p style={{marginTop:10,fontWeight:800,color:'#173449'}}>{a.answer}</p></div><Link href={`/guide/${a.slug}`} className="searchBtn">読む →</Link></article>)}</div></section>)}
 </div>
}
