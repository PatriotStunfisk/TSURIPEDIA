import Link from 'next/link';
import {allGuides,getGuidesForFish} from '@/lib/all-guides';

const catId=(cat:string)=>`guide-${cat.replace(/[\s・/]/g,'-')}`;
export const metadata={title:'釣りGUIDE｜疑問から探す実践Q&A',alternates:{canonical:'/guide'},description:'PEは何号？オモリは何g？今月何が釣れる？釣り人が検索しやすい疑問に結論から答えるUOLINKの実践ガイド。'};

export default async function GuidePage({searchParams}:{searchParams:Promise<{q?:string;fish?:string}>}){
 const params=await searchParams;const q=typeof params.q==='string'?params.q.trim():'';
 const pool=typeof params.fish==='string'?getGuidesForFish(params.fish):allGuides;
 const results=pool.filter(a=>`${a.title} ${a.query} ${a.summary} ${a.category}`.toLowerCase().includes(q.toLowerCase()));
 const cats=[...new Set(results.map(a=>a.category))];
 return <div id="top" className="section pageTop">
  <style>{`.guideList article{grid-template-columns:42px 1fr;align-items:start}.guideList .guideCta{grid-column:2;justify-self:start;margin-top:2px}@media(max-width:700px){.guideList article{grid-template-columns:34px 1fr!important;gap:12px!important;padding:20px 16px!important}.guideList .guideCta{grid-column:2!important;width:auto!important;margin-top:4px!important;padding:10px 16px!important}.guideList h3{font-size:21px!important;line-height:1.45!important}.guideList p{line-height:1.7!important}}`}</style>
  <div className="pageHero"><span>UOLINK GUIDE</span><h1>釣りGUIDE</h1><p>「何号？」「何g？」「いつ・どこで釣れる？」を、まず結論から。魚図鑑と釣り方ページにつながる実践Q&amp;A。</p></div>
  <form action="/guide" className="filterBar"><input name="q" aria-label="魚名・釣り方・疑問からGUIDEを検索" defaultValue={q} placeholder="アジ・棚・仕掛け・危険魚など"/>{params.fish&&<input type="hidden" name="fish" value={params.fish}/>}<button type="submit">検索</button><Link href="/guide">すべて表示</Link></form><p role="status">{results.length}記事{q&&`：「${q}」の検索結果`}</p>{!results.length&&<p>一致する記事がありません。短い言葉で検索してください。</p>}
  <details style={{marginBottom:24}}><summary style={{cursor:"pointer",fontWeight:800,padding:12}}>魚種・カテゴリから探す（{cats.length}カテゴリ）</summary><nav aria-label="釣りGUIDEの目次" style={{margin:'24px 0 38px',padding:'22px',borderRadius:20,background:'#eef7fb',border:'1px solid #d8eaf3'}}><span style={{display:'block',fontSize:12,fontWeight:900,letterSpacing:1.3,color:'#087bc4',marginBottom:7}}>CONTENTS</span><b style={{display:'block',fontSize:20,marginBottom:14}}>気になる項目へすぐ移動</b><div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{cats.map(cat=><a key={cat} href={`#${catId(cat)}`} style={{display:'inline-flex',alignItems:'center',minHeight:40,padding:'8px 13px',borderRadius:999,background:'#fff',border:'1px solid #cfe2ec',fontSize:13,fontWeight:800,color:'#173449'}}>{cat} ↓</a>)}</div></nav></details>
  {cats.map(cat=><section id={catId(cat)} key={cat} style={{margin:'36px 0',scrollMarginTop:90}}><div style={{marginBottom:14}}><span style={{fontSize:12,fontWeight:900,letterSpacing:1.4,color:'#087bc4'}}>SEARCH GUIDE</span><h2 style={{margin:'4px 0 0'}}>{cat}</h2></div><div className="listCards guideList">{results.filter(a=>a.category===cat).map((a,i)=><article key={a.slug}><div className="number">{String(i+1).padStart(2,'0')}</div><div><div className="chips"><span>{a.query}</span>{a.featured&&<span>図解付き実践GUIDE</span>}</div><h3 style={{fontSize:22,margin:'9px 0 8px'}}>{a.title}</h3><p>{a.summary}</p></div><Link href={`/guide/${a.slug}`} className="searchBtn guideCta">詳しく読む →</Link></article>)}</div><div style={{textAlign:'right',marginTop:12}}><a href="#top" style={{fontSize:12,fontWeight:800,color:'#087bc4'}}>ページ上部へ ↑</a></div></section>)}
 </div>
}
