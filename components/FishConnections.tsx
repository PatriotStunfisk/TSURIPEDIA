import {selectHubGuides} from '@/lib/guide-selection';
import RelatedSpots from './RelatedSpots';
import MethodTackle from './MethodTackle';
import {getFishProfile} from '@/lib/fish-registry';
import AffiliateProducts from './AffiliateProducts';
import {getSpotsForFish} from '@/lib/fishing-map-data';
import Link from 'next/link';
import {getFishConnections} from '@/lib/fish-connections';
import {questFish} from '@/lib/quest/catalog';

export default function FishConnections({slug}:{slug:string}){
  const links=getFishConnections(slug);const spots=getSpotsForFish(slug);const fieldNotes=getFishProfile(slug)?.fieldNotes;
  if(!links)return null;
  const {methods,guides,cooking,related,hasEditorialRelated}=links;
  if(!methods.length&&!guides.length&&!cooking&&!related.length)return null;
  return <>{!!fieldNotes?.length&&<section aria-label="この魚を狙うときの観察ポイント"><h2>この魚を狙うときの観察ポイント</h2><div className="detailGrid">{fieldNotes.map(note=><article key={note.heading}><h3>{note.heading}</h3><p>{note.body}</p></article>)}</div></section>}{slug==='buri'&&<section className="detailGrid"><article><h2>成長による呼び名</h2><p>ハマチは別種ではなくブリの成長段階を表す呼び名です。</p><h3>関西での呼び名の例</h3><p>ツバス → ハマチ → メジロ → ブリ</p><h3>関東での呼び名の例</h3><p>ワカシ → イナダ → ワラサ → ブリ</p></article><aside><h3>地域や市場によって異なります</h3><p>呼称や切り替わる大きさは全国一律ではありません。若魚は比較的脂が控えめで、夏から秋にも岸や船で狙われます。ブリとハマチを別の生物種として数えません。</p><Link href="/methods/shore-jigging" className="gearCta">岸から若魚を狙うショアジギング →</Link><a href="https://www.daiwa.com/jp/column/fish_field_guide/sea/040" target="_blank" rel="noopener noreferrer">出典：DAIWA 魚種図鑑 ブリ</a></aside></section>}<section className="detailGrid" aria-label="関連する釣り情報">
    {(methods.length>0||guides.length>0)&&<article>
      <span>FISHING &amp; GUIDE</span><h2>釣り方と実践ガイド</h2>
      {methods.length>0&&<><h3>釣り方を詳しく見る</h3>{methods.map(method=><Link key={method.slug} href={`/methods/${method.slug}`} className="methodLink"><div><b>{method.name}</b><small>{method.subtitle}</small></div><em>→</em></Link>)}</>}
      {guides.length>0&&<><h3>この魚を知る実践GUIDE</h3>{selectHubGuides(guides).map(guide=><Link key={guide.slug} href={`/guide/${guide.slug}`} className="methodLink"><div><b>{guide.title}</b></div><em>→</em></Link>)}{guides.length>6&&<Link href={`/guide?fish=${slug}`} className="gearCta">釣りGUIDEの一覧を見る →</Link>}</>}
      <Link className="gearCta" href={`/spots?fish=${slug}&recent=30days`}>最近この魚が釣れている場所を見る →</Link>
      <RelatedSpots entries={spots} fish={slug} name={getFishProfile(slug)?.name??slug}/>
      {methods[0]&&<Link className="gearCta" href={`/gear?method=${methods[0].slug}`}>この釣り方の道具一式 →</Link>}
      {questFish.some(f=>f.slug===slug)&&<Link href={`/quest/play?fish=${slug}`} className="gearCta">この魚をQUESTで狙う →</Link>}
    </article>}
    {(cooking||related.length>0)&&<aside>
      {cooking&&<><span>COOKING</span><h2>捌き方と料理</h2><Link href={`/cooking/${slug}`} className="gearCta">{cooking.name}の捌き方・料理を見る →</Link>{cooking.recipes.map(recipe=><Link key={recipe.slug} href={`/cooking/${slug}/${recipe.slug}`} className="methodLink"><div><b>{recipe.name}</b></div><em>→</em></Link>)}</>}
      {related.length>0&&<><h2>{hasEditorialRelated?'関連する魚の図鑑':'同じ釣り方で狙える魚'}</h2>{related.slice(0,6).map(fish=><Link key={fish.slug} href={`/fish/${fish.slug}`} className="methodLink"><div><b>{fish.name}</b></div><em>→</em></Link>)}</>}
    </aside>}
  </section>{methods[0]&&<section aria-label="この魚を釣るための道具"><h2>{getFishProfile(slug)?.name}を釣るための道具</h2><p>岸と船では道具が異なります。まず代表的な釣法の一式を確認し、別の釣法は上のリンクから選んでください。</p><MethodTackle slug={methods[0].slug}/></section>}{methods[0]&&<AffiliateProducts methods={[methods[0].slug]} title={`${getFishProfile(slug)?.name}の釣りで使う商品候補`}/>}</>;
}
