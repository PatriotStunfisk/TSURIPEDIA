import Link from 'next/link';
import type {FishingMapEntry} from '@/lib/fishing-map-data';
import {getShoreMethodPlans,getSpotDepartureChecks,type SpotFieldGuide} from '@/lib/spot-planning';
import s from './Submission.module.css';

export default function SpotPlanning({spot,guide}:{spot:FishingMapEntry;guide?:SpotFieldGuide}){
 if(spot.closed)return null;
 const methods=getShoreMethodPlans(spot),checks=getSpotDepartureChecks(spot);
 const localChecks=guide?.beforeYouGo.filter(x=>!spot.caution.includes(x))??[];
 return <>
  {guide&&<section className={s.panel} aria-label="この釣り場の地形と狙い方">
   <h2>釣り座と狙い方を考える</h2>
   {!!guide.features.length&&<><h3>地形・足場の見方</h3><ul>{guide.features.map(x=><li key={x}>{x}</li>)}</ul></>}
   <h3>現地での探り方</h3><ol>{guide.approach.map(x=><li key={x}>{x}</li>)}</ol>
   {!!localChecks.length&&<><h3>この場所で確認したいこと</h3><ul>{localChecks.map(x=><li key={x}>{x}</li>)}</ul></>}
  </section>}
  {!!methods.length&&<section aria-label="釣法別の始め方">
   <h2>現地で釣りを始める手順</h2>
   <p>掲載釣法に合わせた一般的な手順です。この地点の水深や現在の釣果を示すものではありません。利用できる区画・釣法を先に確認してください。</p>
   <div className={s.grid}>{methods.map(m=><article className={s.card} key={m.slug}>
    <h3>{m.name}</h3><p>{m.prepare}</p><ol>{m.steps.map(x=><li key={x}>{x}</li>)}</ol>
    <h4>反応がないとき</h4><p>{m.ifQuiet}</p><Link href={`/methods/${m.slug}`}>仕掛け・道具と詳しい釣り方 →</Link>
   </article>)}</div>
  </section>}
  {!!guide?.questions?.length&&<section className={s.panel} aria-label="この釣り場のよくある疑問"><h2>この釣り場のよくある疑問</h2>{guide.questions.map(q=><details key={q.question} style={{padding:'12px 0',borderBottom:'1px solid #dce6ec'}}><summary style={{cursor:'pointer',fontWeight:700,lineHeight:1.6}}>{q.question}</summary><p>{q.answer}</p></details>)}</section>}
  <section className={s.panel}><h2>出発前・到着後のチェック</h2><ul>{checks.map(x=><li key={x}>{x}</li>)}</ul></section>
 </>;
}
