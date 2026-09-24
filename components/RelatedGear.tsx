import Link from 'next/link';
import {methodGearPlans} from '@/lib/method-gear-plans';
import {selectRelatedGear,gearKindLabels} from '@/lib/gear-catalog';
import {amazonProductUrl,amazonSearchUrl,affiliateDisclosure} from '@/lib/affiliate-products';
import GearProductVisual from './GearProductVisual';
import s from './GearCatalog.module.css';
export default function RelatedGear({method,fish,title,limit}:{method?:string;fish?:string;title:string;limit?:number}){
 const plan=method?methodGearPlans[method]:undefined;
 const products=selectRelatedGear({method,fish,limit:limit??plan?.items.length??6});if(!products.length)return null;
 const query=new URLSearchParams({...method?{method}:{},...fish?{fish}:{}}).toString();
 return <section className={s.section} aria-label={title}><h2>{title}</h2><p className={s.note}>{plan?.note??'使うルアー・オモリの重さ、ライン、岸・船の違いから型番を選びます。船釣りは船宿指定を優先。'}</p><div className={s.grid}>{products.map(p=><article className={s.card} key={p.slug}><Link href={`/gear/${p.slug}`}><GearProductVisual product={p} compact/><div className={s.content}><small>{p.brand} · {plan?.items.find(item=>item.slug===p.slug)?.role??gearKindLabels[p.kind]}</small><h3>{p.name}</h3><p>{plan?.items.find(item=>item.slug===p.slug)?.reason??p.summary}</p><span>仕様・色・選び方を見る →</span></div></Link><a className={s.inlineAmazon} href={p.asin?amazonProductUrl(p.asin):amazonSearchUrl(p.amazonQuery??`${p.brand} ${p.name}`)} target="_blank" rel="sponsored noopener noreferrer">Amazonで型番を確認 ↗</a></article>)}</div><p><Link href={`/gear?${query}`}>対応する釣具をすべて見る →</Link></p><p className={s.note}>PR · {affiliateDisclosure}</p></section>;
}
