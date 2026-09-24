import Link from 'next/link';
import {notFound} from 'next/navigation';
import {gearCatalog,getGearProduct,gearVerifiedAt} from '@/lib/gear-catalog';
import {getFishProfile} from '@/lib/fish-registry';
import {getMethod} from '@/lib/method-registry';
import {allGuides} from '@/lib/all-guides';
import {affiliateDisclosure,amazonProductUrl,amazonSearchUrl} from '@/lib/affiliate-products';
import GearProductVisual from '@/components/GearProductVisual';
import s from '@/components/GearCatalog.module.css';
export const dynamicParams=false;
export function generateStaticParams(){return gearCatalog.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const p=getGearProduct((await params).slug);if(!p)return {};return {title:`${p.name}｜釣具図鑑`,description:p.summary,alternates:{canonical:`/gear/${p.slug}`}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){
 const p=getGearProduct((await params).slug);if(!p)notFound();const methods=p.methods.map(getMethod).filter(m=>!!m),fish=p.fish.map(getFishProfile).filter(f=>!!f);const guides=allGuides.filter(g=>g.methodTags.some(m=>p.methods.includes(m))&&/ライン|リール|ロッド|エギ|スナップ|仕掛け/.test(g.title)).slice(0,4);const related=gearCatalog.filter(g=>g.kind!==p.kind&&g.methods.some(m=>p.methods.includes(m))).slice(0,3);
 return <main className="section pageTop"><Link href="/gear">← 釣具図鑑</Link><div className={s.detail}><div><GearProductVisual product={p}/>{p.image&&<small>{p.image.credit}</small>}<p className={s.note}><a href={p.source} target="_blank" rel="noopener noreferrer">メーカー公式の写真・製品情報 ↗</a></p></div><div><small className={s.eyebrow}>{p.brand} · {p.kind==='rod'?'ロッド':'リール'}</small><h1>{p.name}</h1><p className={s.intro}>{p.summary}</p><dl className={s.specs}>{Object.entries(p.specs).map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><small className={s.note}>仕様確認：{gearVerifiedAt} / メーカー公表値</small></div></div>
 <section className={s.section}><h2>この道具で楽しむ釣り</h2><div className={s.links}>{fish.map(f=><Link key={f.slug} href={`/fish/${f.slug}`}>{f.name}の魚図鑑 →</Link>)}{methods.map(m=><Link key={m.slug} href={`/methods/${m.slug}`}>{m.name}の釣り方 →</Link>)}</div></section>
 <section className={s.section}><h2>ライン・小物の組み合わせ</h2><p className={s.note}>以下はUOLINKの用途別の組み合わせ例です。</p><h3>ラインとリーダー</h3><p>{p.line}</p><h3>一緒に用意するもの</h3><p>{p.accessory}</p>{related.length>0&&<><h3>組み合わせ候補の{p.kind==='rod'?'リール':'ロッド'}</h3><div className={s.links}>{related.map(g=><Link href={`/gear/${g.slug}`} key={g.slug}>{g.name} →</Link>)}</div></>}<p>{p.check}</p></section>
 <section className={s.section}><h2>購入先で型番を確認</h2><p className={s.note}>PR · {affiliateDisclosure}</p><div className={s.purchase}><a href={p.asin?amazonProductUrl(p.asin):amazonSearchUrl(p.amazonQuery??(p.brand+' '+p.name))} target="_blank" rel="sponsored noopener noreferrer">Amazonで{p.asin?'商品':'この型番'}を見る ↗</a><a href={p.source} target="_blank" rel="noopener noreferrer">メーカー公式 ↗</a></div><p className={s.note}>価格・在庫と選択中の型番は販売先で確認してください。</p><div className={s.links}><a href={amazonSearchUrl(p.query)} rel="sponsored noopener noreferrer" target="_blank">対応するラインをAmazonで探す ↗</a><a href={amazonSearchUrl(p.accessoryQuery)} rel="sponsored noopener noreferrer" target="_blank">小物をAmazonで探す ↗</a></div></section>
 {guides.length>0&&<section className={s.section}><h2>使う前に知りたいこと</h2><div className={s.links}>{guides.map(g=><Link key={g.slug} href={`/guide/${g.slug}`}>{g.title} →</Link>)}</div></section>}</main>
}
