import Link from 'next/link';
import type {SpotSitePlan as Plan,SiteShapeKind} from '@/lib/spot-site-plan-types';
import s from './SpotSitePlan.module.css';
const colors:Record<SiteShapeKind,string>={land:'#e8e5d9',deck:'#f8fcfd',reef:'#81aa98',tetrapods:'#9babb9',restricted:'#f4ccbd',sand:'#e8d9ac'};
const names:Record<SiteShapeKind,string>={land:'陸側',deck:'護岸・釣り台',reef:'魚礁・根',tetrapods:'テトラ・人工磯',restricted:'利用対象外',sand:'砂泥底'};
export default function SpotSitePlan({plan}:{plan:Plan}){
 return <section id={`site-plan-${plan.slug}`} className={s.plan} aria-label="釣り場のポイント図解">
 <div className={s.heading}><span>FIELD GUIDE</span><h2>{plan.title}</h2><p>{plan.orientation}</p></div>
 <figure className={s.figure}>
 <svg viewBox="0 0 640 340" role="group" aria-label={`${plan.title}。${plan.caption}`}>
 <rect width="640" height="340" rx="16" fill="#dceff5"/>
 {plan.shapes.map((area,i)=><polygon key={i} points={area.points} fill={colors[area.kind]} stroke={area.kind==='deck'?'#5d7786':'#ffffff'} strokeWidth="2"/>)}
 {plan.labels.map((label,i)=><text key={i} x={label.x} y={label.y} fill="#264859" fontSize="24" fontWeight="600" textAnchor="middle">{label.text}</text>)}
 {plan.points.map(point=><a key={point.id} href={`#point-${plan.slug}-${point.id}`} aria-label={`${point.id}：${point.title}の説明へ`}><circle cx={point.x} cy={point.y} r="42" fill="transparent"/><circle cx={point.x} cy={point.y} r="24" fill="#07354a" stroke="white" strokeWidth="3"/><text x={point.x} y={point.y+8} textAnchor="middle" fill="white" fontSize="24" fontWeight="800">{point.id}</text></a>)}
 </svg>
 <figcaption>{plan.caption}</figcaption>
 </figure>
 <div className={s.legend}>{[...new Set(plan.shapes.map(x=>x.kind))].map(kind=><span key={kind}><i style={{background:colors[kind]}}/>{names[kind]}</span>)}</div>
 <div className={s.points}>{plan.points.map(point=><article id={`point-${plan.slug}-${point.id}`} className={s.point} key={point.id}>
 <h3><b>{point.id}</b>{point.title}</h3><p className={s.terrain}>{point.terrain}{point.depth&&<> · {point.depth}</>}</p>
 <div className={s.links}>{point.fish.map(f=><Link key={f.slug} href={`/fish/${f.slug}`}>{f.name} →</Link>)}</div>
 <p>{point.technique}</p><dl><div><dt>時期・タイミング</dt><dd>{point.season}</dd></div><div><dt>探るときのコツ</dt><dd>{point.watch}</dd></div></dl>
 <div className={s.links}>{point.methods.map(m=><Link key={m.slug} href={`/methods/${m.slug}`}>{m.name}の仕掛け →</Link>)}</div>
 </article>)}</div>
 <details className={s.notes}><summary>図の参考資料・確認日（{plan.reviewedAt}）</summary>{plan.sources.map(source=><p key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></p>)}</details>
 </section>;
}
