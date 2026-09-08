import Link from 'next/link';
import {launchFish,isLaunchFish} from '@/lib/launch-fish';

export default function LaunchFishExtras({slug,name}:{slug:string;name:string}){
  if(!isLaunchFish(slug))return null;
  const x=launchFish[slug];
  return <>
    <section className="detailGrid">
      <article><span>IDENTIFICATION</span><h2>見分けるポイント</h2>{x.identify.map((p,i)=><div className="methodLink" key={p}><strong>{String(i+1).padStart(2,'0')}</strong><div><b>{p}</b></div></div>)}</article>
      <aside><span>FISHING ROUTE</span><h2>この魚を狙う釣り方</h2>{x.methodLinks.map(m=><Link href={m.href} className="methodLink" key={m.label}><div><b>{m.label}</b><small>仕掛け・手順・コツを見る</small></div><em>→</em></Link>)}<h3>主なエリア</h3><p>{x.spotFocus}</p></aside>
    </section>
    <section className="detailGrid">
      <article><span>RELATED FISH</span><h2>似ている魚・一緒に覚えたい魚</h2><div className="chips">{x.related.map(v=><span key={v}>{v}</span>)}</div></article>
      <aside><span>UOLINK GUIDE</span><h2>{x.catchPhrase}</h2><p>魚の特徴を知ったら、次は釣り方・釣り場・必要な釣具へ。UOLINKでは図鑑情報を実釣までつなげます。</p><Link href="/spots" className="gearCta">釣れる場所を探す →</Link></aside>
    </section>
  </>
}
