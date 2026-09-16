import BaitDiagram from './BaitDiagram';
import type {GuideSection as Section} from '@/lib/guide-articles';
import TackleDiagram from './TackleDiagram';
import s from './GuideSection.module.css';
export default function GuideSection({section:a,index}:{section:Section;index:number}){
 return <section id={`p${index+1}`} className={s.section}>
  <small>POINT {String(index+1).padStart(2,'0')}</small><h2>{a.heading}</h2><p>{a.body}</p>
  {a.warning&&<aside className={s.warning}><strong>WARNING</strong><p>{a.warning}</p></aside>}
  {a.diagram&&<figure className={s.figure}><svg viewBox="0 0 640 250" role="img" aria-label={a.diagram.labels.join(' → ')}>
   <path d="M20 38H620V220H20Z" fill="#e9f6fc"/><path d="M20 38H620" stroke="#1186b5" strokeWidth="3"/><path d="M20 222q90-22 180-5t180 0 240 0" fill="none" stroke="#b29b71" strokeWidth="8"/>
   <path d={a.diagram.kind==='depth'?'M130 65V180H315V128H510V78':a.diagram.kind==='retrieve'?'M80 188L150 112L215 178L290 98L365 156L445 80L530 125':'M80 90Q220 160 330 170T560 195'} fill="none" stroke="#007d97" strokeWidth="5" strokeDasharray="9 6"/>
   {[130,320,510].map((x,i)=><g key={x}><circle cx={x} cy={a.diagram?.kind==='depth'?[180,128,78][i]:[160,135,105][i]} r="12" fill="#ef9a37"/><text x={x} y={245} textAnchor="middle" fontSize="15" fill="#173449">{i+1}</text></g>)}
   <text x="28" y="27" fontSize="15" fill="#173449">水面</text><text x="555" y="213" fontSize="15" fill="#173449">海底</text>
  </svg><figcaption><b>動きと棚の模式図（縮尺・時間は実際と異なります）</b><ol>{a.diagram.labels.map(label=><li key={label}>{label}</li>)}</ol></figcaption></figure>}
  {a.table&&<div className={s.scroll} tabIndex={0} role="region" aria-label={a.table.caption}><table><caption>{a.table.caption}<small className={s.tableHint}>表は横にスクロールできます</small></caption><thead><tr>{a.table.headers.map(h=><th scope="col" key={h}>{h}</th>)}</tr></thead><tbody>{a.table.rows.map((row,i)=><tr key={i}>{row.map((c,j)=>j===0?<th scope="row" key={j}>{c}</th>:<td key={j}>{c}</td>)}</tr>)}</tbody></table></div>}
  {a.baitDiagram&&<BaitDiagram kind={a.baitDiagram}/>}
  {a.tackleMethod&&<TackleDiagram slug={a.tackleMethod} connectionsOnly={a.tackleConnectionsOnly}/>}
  {a.steps&&<ol className={s.steps}>{a.steps.map(step=><li key={step.title}><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol>}
  {a.points&&<ul className={s.checks}>{a.points.map(point=><li key={point}>{point}</li>)}</ul>}
 </section>;
}
