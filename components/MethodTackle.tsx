import Link from 'next/link';
import {getMethod} from '@/lib/method-registry';
import {fishCatalog} from '@/lib/fish-registry';
import {getFishMethodSlugs} from '@/lib/fish-methods';
import s from '@/app/gear/gear.module.css';

export default function MethodTackle({slug}:{slug:string}){
 const method=getMethod(slug);if(!method)return null;
 const targets=fishCatalog.filter(f=>getFishMethodSlugs(f).includes(slug));
 return <section className={s.guide} aria-label="選んだ釣り方の道具"><div className={s.guideHead}><small>YOUR FISHING METHOD</small><h2>{method.name}に必要な道具</h2><p>{method.subtitle}</p></div><div className={s.basicGrid}>{[['ロッド',method.rod],['リール',method.reel],['ライン',method.line],['リーダー',method.leader],['仕掛け',method.rig],['餌・ルアー',method.bait]].map(([name,text])=><article key={name}><h3>{name}</h3><p>{text}</p></article>)}</div><h3>釣行前のチェック</h3><ul>{method.checklist.map(item=><li key={item}>{item}</li>)}</ul><div className="chips"><Link href={`/methods/${slug}`}>手順・失敗しやすい点を見る →</Link>{targets.map(f=><Link href={`/fish/${f.slug}`} key={f.slug}>{f.name}</Link>)}</div></section>;
}
