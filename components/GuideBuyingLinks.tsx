import Link from 'next/link';
import {amazonSearchUrl,affiliateDisclosure} from '@/lib/affiliate-products';
import {filterGear,gearKindLabels} from '@/lib/gear-catalog';
import type {GuideArticle} from '@/lib/guide-articles';
import s from './GuideBuyingLinks.module.css';

export default function GuideBuyingLinks({buying}:{buying:NonNullable<GuideArticle['buying']>}){
 const params=new URLSearchParams({kind:buying.kind});
 // Do not send readers to an empty category/method combination.
 if(buying.method&&filterGear({kind:buying.kind,method:buying.method}).length)params.set('method',buying.method);
 return <section className={s.section} aria-labelledby="buying-heading">
  <span className={s.label}>道具を選ぶ · PR</span>
  <h2 id="buying-heading">条件が決まったら、仕様と価格を比較</h2>
  <p>「{buying.query}」の候補を探す。型番・サイズ・付属品を、上のチェック項目と照らし合わせる。</p>
  <div className={s.actions}>
   <Link href={`/gear?${params}`}>釣具図鑑で{gearKindLabels[buying.kind]}を比較 →</Link>
   <a href={amazonSearchUrl(buying.query)} target="_blank" rel="sponsored noopener noreferrer">Amazonで候補・価格を見る ↗</a>
  </div>
  <small>Amazonは検索結果へ移動する。セット内容や送料も含めて確認。{affiliateDisclosure}</small>
 </section>;
}
