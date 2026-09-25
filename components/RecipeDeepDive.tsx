import Image from 'next/image';
import type {RecipeDetail} from '@/lib/fish-species/types';
import styles from './RecipeDeepDive.module.css';

export default function RecipeDeepDive({detail}:{detail:RecipeDetail}) {
 return <section id="recipe-details" className={styles.section}>
  <h2>仕上がりが変わる、下処理と火加減</h2>
  <p>{detail.intro}</p>
  {detail.processImage&&<figure className={styles.figure}><Image src={detail.processImage.src} alt={detail.processImage.alt} width={1536} height={1024} sizes="(max-width: 700px) 100vw, 900px"/><figcaption>{detail.processImage.caption}</figcaption></figure>}
  <ol className={styles.steps}>{detail.checkpoints.map((item,i)=><li key={item.title}><span>POINT {i+1}</span><h3>{item.title}</h3><p>{item.body}</p></li>)}</ol>
  <h3>うまくいかない時の見直し表</h3>
  <table className={styles.table}><thead><tr><th scope="col">気になること</th><th scope="col">次に試すこと</th></tr></thead><tbody>{detail.troubleshooting.map(row=><tr key={row.problem}><th scope="row">{row.problem}</th><td>{row.solution}</td></tr>)}</tbody></table>
  <details className={styles.sources}><summary>参考資料</summary><ul>{detail.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></details>
 </section>;
}
