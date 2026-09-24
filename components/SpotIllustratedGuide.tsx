import Link from 'next/link';
import type {SpotIllustration} from '@/lib/spot-illustration-types';
import {illustrationLessons} from '@/lib/spot-illustration-lessons';
import SpotFishingDiagram from './SpotFishingDiagram';
import s from './SpotIllustratedGuide.module.css';
export default function SpotIllustratedGuide({guide}:{guide:SpotIllustration}){
 const lesson=illustrationLessons[guide.topic];
 return <section className={s.section} id={`fishing-diagram-${guide.slug}`} aria-label={`${guide.name}の図解付き解説`}>
  <span className={s.eyebrow}>FIELD GUIDE</span><h2>{guide.name}の特徴と探り方</h2>
  <p className={s.context}>{guide.context}</p>
  <div className={s.layout}><figure><h3>{lesson.title}</h3><SpotFishingDiagram topic={guide.topic}/><figcaption>釣り方の模式図。現地の形・方角・水深や釣り許可範囲を示す図ではありません。位置は現地マップで確認できます。</figcaption></figure>
  <ol className={s.steps}>{lesson.steps.map((text,i)=><li key={text}><b>{i+1}</b><div><h4>{lesson.labels[i]}</h4><p>{text}</p></div></li>)}</ol></div>
  <div className={s.local}><h3>この場所で組み立てるなら</h3>{guide.localApproach.map(text=><p key={text}>{text}</p>)}</div>
  <h3>反応がないときの見直し</h3><table className={s.table}><thead><tr><th scope="col">見えた状況</th><th scope="col">次に変えること</th></tr></thead><tbody>{lesson.checks.map(c=><tr key={c.when}><th scope="row">{c.when}</th><td>{c.action}</td></tr>)}</tbody></table>
  <nav className={s.links} aria-label="図解に関連する釣り方と魚"><Link href={`/methods/${guide.method.slug}`}>{guide.method.name}の仕掛け・道具 →</Link>{guide.fish.slice(0,5).map(f=><Link href={`/fish/${f.slug}`} key={f.slug}>{f.name} →</Link>)}</nav>
  <details className={s.sources}><summary>場所の参考資料{guide.sourceCheckedAt&&`（登録情報の確認日 ${guide.sourceCheckedAt}）`}</summary>{guide.sources.map(source=><p key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></p>)}</details>
 </section>;
}
