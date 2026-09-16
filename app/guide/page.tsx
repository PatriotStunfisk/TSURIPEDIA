import Link from 'next/link';
import {allGuides} from '@/lib/all-guides';
import {fish} from '@/lib/data';
import {methodDetails} from '@/lib/method-registry';
import {canonicalFishSlug} from '@/lib/fish-aliases';
import {guideTopics,guideGearTags,filterGuides} from '@/lib/guide-taxonomy';
import s from './page.module.css';
export const metadata={title:'釣りガイド｜釣り方の基本から具体的な疑問まで',alternates:{canonical:'/guide'},description:'体系的に学べるGUIDEと、疑問に答えるQUICK GUIDEをまとめて検索。目的・魚・釣法・道具から必要な記事を探せます。'};
type Params={q?:string;fish?:string;method?:string;gear?:string;type?:string;topic?:string;page?:string};
export default async function GuidePage({searchParams}:{searchParams:Promise<Params>}){
 const raw=await searchParams;const params=Object.fromEntries(Object.entries(raw).filter(([,v])=>typeof v==='string').map(([k,v])=>[k,v.slice(0,100)])) as Params;
 const filters={...params,fish:params.fish?canonicalFishSlug(params.fish):undefined};
 const labels=Object.fromEntries([...fish.map(f=>[f.slug,f.name]),...Object.values(methodDetails).map(m=>[m.slug,m.name])]);
 const results=filterGuides(allGuides,filters,labels);const pages=Math.max(1,Math.ceil(results.length/24));const page=Math.max(1,Math.min(pages,Number.parseInt(params.page??'1',10)||1));
 const pageHref=(n:number)=>{const p=new URLSearchParams(Object.entries(params).filter(([k,v])=>k!=='page'&&!!v) as [string,string][]);p.set('page',String(n));return `/guide?${p}`;};
 const fishes=fish.filter(f=>allGuides.some(g=>g.fishTags.includes(f.slug)));
 const methods=Object.values(methodDetails).filter(m=>allGuides.some(g=>g.methodTags.includes(m.slug)));
 return <div className="section pageTop">
  <div className="pageHero"><span>UOLINK GUIDE</span><h1>釣りガイド</h1><p>釣り方を最初から学ぶ。今の疑問をすぐ解決する。どちらもここから探せます。</p></div>
  <form action="/guide" className={s.search}>
   <label className={s.searchText}>知りたいこと<input name="q" defaultValue={params.q??''} placeholder="アジ・棚・仕掛け・結び目など"/></label>
   <button type="submit" className="searchBtn">検索</button><Link href="/guide">条件をクリア</Link>
   <details className={s.filters} open={!!(params.topic||params.type||params.fish||params.method||params.gear)}><summary>目的・魚・釣法・道具で絞り込む</summary><div className={s.filterGrid}>
    <label>目的<select name="topic" defaultValue={params.topic??''}><option value="">すべての目的</option>{Object.entries(guideTopics).map(([id,name])=><option value={id} key={id}>{name}</option>)}</select></label>
    <label>記事タイプ<select name="type" defaultValue={params.type??''}><option value="">両方を表示</option><option value="GUIDE">GUIDE · 体系的に学ぶ</option><option value="QUICK GUIDE">QUICK GUIDE · 疑問を解決</option></select></label>
    <label>魚<select name="fish" defaultValue={filters.fish??''}><option value="">すべての魚</option>{fishes.map(f=><option value={f.slug} key={f.slug}>{f.name}</option>)}</select></label>
    <label>釣法<select name="method" defaultValue={params.method??''}><option value="">すべての釣法</option>{methods.map(m=><option value={m.slug} key={m.slug}>{m.name}</option>)}</select></label>
    <label>道具<select name="gear" defaultValue={params.gear??''}><option value="">すべての道具</option>{Object.entries(guideGearTags).map(([id,name])=><option value={id} key={id}>{name}</option>)}</select></label>
   </div><button type="submit" className="searchBtn">この条件で探す</button></details>
  </form>
  <p className={s.hint}>GUIDEは体系的な解説、QUICK GUIDEは具体的な疑問への回答です。読了時間は本文量からの目安です。</p>
  <p role="status">{results.length}記事{params.q&&`：「${params.q}」`}{pages>1&&` · ${page} / ${pages}ページ`}</p>
  {!results.length&&<p>一致する記事がありません。短い言葉に変えるか、絞り込みを減らしてください。</p>}
  <div className={s.cards}>{results.slice((page-1)*24,page*24).map(a=><article key={a.slug}>
   <div className="chips"><span>{a.articleType}</span><span>約{a.readingMinutes}分</span><span>{guideTopics[a.topic]}</span></div>
   <h2><Link href={`/guide/${a.slug}`}>{a.title}</Link></h2><p>{a.summary}</p><Link className={s.read} href={`/guide/${a.slug}`}>読む →</Link>
  </article>)}</div>
  {pages>1&&<nav aria-label="釣りガイドのページ" className={s.pagination}>{page>1&&<Link href={pageHref(page-1)}>← 前へ</Link>}<span>{page} / {pages}</span>{page<pages&&<Link href={pageHref(page+1)}>次へ →</Link>}</nav>}
 </div>;
}
