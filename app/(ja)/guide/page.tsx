import {getGuideListing,guideListingMetadata,guideSorts,type GuideSearchParams} from '@/lib/guide-listing';
import Link from 'next/link';
import {allGuides} from '@/lib/all-guides';
import {fish} from '@/lib/data';
import {methodDetails} from '@/lib/method-registry';
import {guideTopics,guideGearTags} from '@/lib/guide-taxonomy';
import s from './page.module.css';
export async function generateMetadata({searchParams}:{searchParams:Promise<GuideSearchParams>}){
 return guideListingMetadata(await searchParams);
}
export default async function GuidePage({searchParams}:{searchParams:Promise<GuideSearchParams>}){
 const {params,filters,results,pages,page,pageHref}=getGuideListing(await searchParams);
 const fishes=fish.filter(f=>allGuides.some(g=>g.fishTags.includes(f.slug)));
 const methods=Object.values(methodDetails).filter(m=>allGuides.some(g=>g.methodTags.includes(m.slug)));
 return <div className="section pageTop">
  <div className="pageHero"><span>UOLINK GUIDE</span><h1>釣りガイド</h1><p>釣り方を最初から学ぶ。今の疑問をすぐ解決する。どちらもここから探せます。</p></div>
  <div className="chips"><Link href="/guide?q=%E8%B3%BC%E5%85%A5%E5%89%8D%E3%81%AE%E9%81%93%E5%85%B7%E9%81%B8%E3%81%B3">購入前の道具選び →</Link></div>
  <form action="/guide" className={s.search}>
   <label className={s.searchText}>知りたいこと<input name="q" defaultValue={params.q??''} placeholder="アジ・棚・仕掛け・結び目など"/></label>
   <label>並び順<select name="sort" defaultValue={params.sort??'recommended'}>{Object.entries(guideSorts).map(([id,label])=><option key={id} value={id}>{label}</option>)}</select></label>
   <label>読む時間<select name="time" defaultValue={params.time??''}><option value="">すべて</option><option value="short">3分以内</option><option value="long">4分以上</option></select></label>
   <button type="submit" className="searchBtn">検索・並べ替え</button><Link href="/guide">条件をクリア</Link>
   <details className={s.filters} open={!!(params.topic||params.type||params.fish||params.method||params.gear)}><summary>目的・魚・釣法・道具で絞り込む</summary><div className={s.filterGrid}>
    <label>目的<select name="topic" defaultValue={params.topic??''}><option value="">すべての目的</option>{Object.entries(guideTopics).map(([id,name])=><option value={id} key={id}>{name}</option>)}</select></label>
    <label>記事タイプ<select name="type" defaultValue={params.type??''}><option value="">両方を表示</option><option value="GUIDE">GUIDE · 体系的に学ぶ</option><option value="QUICK GUIDE">QUICK GUIDE · 疑問を解決</option></select></label>
    <label>魚<select name="fish" defaultValue={filters.fish??''}><option value="">すべての魚</option>{fishes.map(f=><option value={f.slug} key={f.slug}>{f.name}</option>)}</select></label>
    <label>釣法<select name="method" defaultValue={params.method??''}><option value="">すべての釣法</option>{methods.map(m=><option value={m.slug} key={m.slug}>{m.name}</option>)}</select></label>
    <label>道具<select name="gear" defaultValue={params.gear??''}><option value="">すべての道具</option>{Object.entries(guideGearTags).map(([id,name])=><option value={id} key={id}>{name}</option>)}</select></label>
   </div><button type="submit" className="searchBtn">この条件で探す</button></details>
  </form>
  <p className={s.hint}>おすすめ順は初めての釣行や道具選びに役立つ記事を優先する編集セレクトです（アクセス数順ではありません）。GUIDEは体系的な解説、QUICK GUIDEは具体的な疑問への回答です。読了時間は本文量からの目安です。</p>
  <p role="status">{results.length}記事{params.q&&`：「${params.q}」`}{pages>1&&` · ${page} / ${pages}ページ`}</p>
  {!results.length&&<p>一致する記事がありません。短い言葉に変えるか、絞り込みを減らしてください。</p>}
  <div className={s.cards}>{results.slice((page-1)*24,page*24).map(a=><article key={a.slug}>
   <div className="chips"><span>{a.articleType}</span><span>約{a.readingMinutes}分</span><span>{guideTopics[a.topic]}</span></div>
   <h2><Link href={`/guide/${a.slug}`}>{a.title}</Link></h2><p>{a.summary}</p><Link className={s.read} href={`/guide/${a.slug}`}>読む →</Link>
  </article>)}</div>
  {pages>1&&<nav aria-label="釣りガイドのページ" className={s.pagination}>{page>1&&<a href={pageHref(page-1)}>← 前へ</a>}<span>{page} / {pages}</span>{page<pages&&<a href={pageHref(page+1)}>次へ →</a>}</nav>}
 </div>;
}
