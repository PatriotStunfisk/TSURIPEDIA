import {affiliateProducts,affiliateDisclosure,amazonProductUrl,productsForMethods} from '@/lib/affiliate-products';
import s from './AffiliateProducts.module.css';
export default function AffiliateProducts({methods,limit=4,title="この釣り方で検討できる商品"}:{methods?:readonly string[];limit?:number;title?:string}){
 const products=(methods?productsForMethods(methods):affiliateProducts).slice(0,limit);
 if(!products.length)return null;
 return <section className={s.section} aria-label="関連する商品候補"><span className={s.label}>PR · 道具選び</span><h2>{title}</h2><p className={s.notice}>{affiliateDisclosure}</p><p>道具は釣り場・魚の大きさ・竿の対応負荷に合わせて選びます。価格・在庫・選択中のサイズは購入先で確認してください。</p><div className={s.grid}>{products.map(p=><article key={p.asin}><h3>{p.name}</h3><p>{p.reason}</p><p className={s.check}><b>購入前に：</b>{p.check}</p><a href={amazonProductUrl(p.asin)} target="_blank" rel="sponsored noopener noreferrer">Amazonで商品を確認する ↗</a></article>)}</div></section>;
}
