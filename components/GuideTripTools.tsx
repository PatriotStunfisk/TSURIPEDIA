import {tripTools,guideTripTools,amazonSearchUrl,affiliateDisclosure} from '@/lib/affiliate-products';
import s from './AffiliateProducts.module.css';
export default function GuideTripTools({slug}:{slug:string}){
 const items=(guideTripTools[slug]??[]).map(key=>tripTools[key]);if(!items.length)return null;
 return <section className={s.section}><span className={s.label}>PR · 準備する道具</span><h2>必要な理由を確認して、足りない物だけ用意</h2><p>すべて新品でそろえる必要はありません。手持ちと貸出品を確認し、記事の条件に合うものを比較してください。</p><div className={s.grid}>{items.map(item=><article key={item.name}><h3>{item.name}</h3><p>{item.reason}</p><p className={s.check}><b>選ぶ基準：</b>{item.check}</p><a href={amazonSearchUrl(item.query)} target="_blank" rel="sponsored noopener noreferrer">Amazonで条件に合う候補を比較 ↗</a></article>)}</div><p className={s.notice}>{affiliateDisclosure} リンク先は商品検索です。仕様・在庫は販売ページで確認してください。</p></section>;
}
