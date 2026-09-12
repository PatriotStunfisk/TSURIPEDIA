import {getSpotsForFish} from '@/lib/fishing-map-data';
import Link from 'next/link';
import {getFishConnections} from '@/lib/fish-connections';
import {questFish} from '@/lib/quest/catalog';

export default function FishConnections({slug}:{slug:string}){
  const links=getFishConnections(slug);const spots=getSpotsForFish(slug);
  if(!links)return null;
  const {methods,guides,cooking,related,hasEditorialRelated}=links;
  if(!methods.length&&!guides.length&&!cooking&&!related.length)return null;
  return <section className="detailGrid" aria-label="関連する釣り情報">
    {(methods.length>0||guides.length>0)&&<article>
      <span>FISHING &amp; GUIDE</span><h2>釣り方と実践ガイド</h2>
      {methods.length>0&&<><h3>釣り方を詳しく見る</h3>{methods.map(method=><Link key={method.slug} href={`/methods/${method.slug}`} className="methodLink"><div><b>{method.name}</b><small>{method.subtitle}</small></div><em>→</em></Link>)}</>}
      {guides.length>0&&<><h3>この魚の釣りGUIDE</h3>{guides.slice(0,6).map(guide=><Link key={guide.slug} href={`/guide/${guide.slug}`} className="methodLink"><div><b>{guide.title}</b></div><em>→</em></Link>)}{guides.length>6&&<Link href="/guide" className="gearCta">釣りGUIDEの一覧を見る →</Link>}</>}
      {spots.length>0&&<><h3>釣り場・釣行エリア</h3>{spots.slice(0,3).map(spot=><Link key={spot.slug} className="methodLink" href={`/spots?q=${encodeURIComponent(spot.name)}`}><div><b>{spot.name}</b><small>利用条件・公式案内を確認</small></div><em>→</em></Link>)}</>}
      {methods[0]&&<Link className="gearCta" href={`/gear?method=${methods[0].slug}`}>この釣り方の道具一式 →</Link>}
      {questFish.some(f=>f.slug===slug)&&<Link href={`/quest/play?fish=${slug}`} className="gearCta">この魚をQUESTで狙う →</Link>}
    </article>}
    {(cooking||related.length>0)&&<aside>
      {cooking&&<><span>COOKING</span><h2>捌き方と料理</h2><Link href={`/cooking/${slug}`} className="gearCta">{cooking.name}の捌き方・料理を見る →</Link>{cooking.recipes.map(recipe=><Link key={recipe.slug} href={`/cooking/${slug}/${recipe.slug}`} className="methodLink"><div><b>{recipe.name}</b></div><em>→</em></Link>)}</>}
      {related.length>0&&<><h2>{hasEditorialRelated?'関連する魚の図鑑':'同じ釣り方で狙える魚'}</h2>{related.slice(0,6).map(fish=><Link key={fish.slug} href={`/fish/${fish.slug}`} className="methodLink"><div><b>{fish.name}</b></div><em>→</em></Link>)}</>}
    </aside>}
  </section>;
}
