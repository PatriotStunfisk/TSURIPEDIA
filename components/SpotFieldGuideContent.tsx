import Link from 'next/link';
import styles from './RecipeDeepDive.module.css';
import SpotIllustratedGuide from './SpotIllustratedGuide';
import SpotSitePlan from './SpotSitePlan';
import type {SpotFieldGuide} from '@/lib/spot-planning';
export default function SpotFieldGuideContent({guide}:{guide:SpotFieldGuide}){
 return <section aria-label="この釣り場の地形と狙い方" style={{lineHeight:1.85}}>
  {guide.sitePlan&&<SpotSitePlan plan={guide.sitePlan}/>}
  {guide.illustration&&<SpotIllustratedGuide guide={guide.illustration}/>}
  {!!guide.choices?.length&&<section><h3>目的別・現地での組み立て方</h3><table className={styles.table}><thead><tr><th scope="col">狙い・目的</th><th scope="col">最初にすること</th><th scope="col">次の判断</th></tr></thead><tbody>{guide.choices.map(row=><tr key={row.target}><th scope="row">{row.target}</th><td>{row.start}</td><td>{row.adjust}</td></tr>)}</tbody></table></section>}
  <details open={!guide.sitePlan&&!guide.illustration}><summary style={{fontWeight:700,cursor:'pointer',padding:'12px 0'}}>{guide.sitePlan||guide.illustration?'設備・現地での探り方をさらに読む':'釣り場を詳しく知る'}</summary>
  {!!guide.features.length&&<><h3>場所の特徴・設備</h3><ul>{guide.features.map(x=><li key={x}>{x}</li>)}</ul></>}
  {!guide.illustration&&<><h3>現地での探り方</h3><ol>{guide.approach.map(x=><li key={x}>{x}</li>)}</ol></>}
  {!!guide.beforeYouGo.length&&<details><summary>利用条件・準備の補足</summary><ul>{guide.beforeYouGo.map(x=><li key={x}>{x}</li>)}</ul></details>}
  {!!guide.sources?.length&&<p style={{fontSize:12,color:'#617482'}}>参考：{guide.sources.map((x,i)=><span key={x.url}>{i>0?' / ':''}<a href={x.url} target="_blank" rel="noopener noreferrer">{x.label} ↗</a></span>)}{guide.reviewedAt&&`（確認 ${guide.reviewedAt}）`}</p>}
  </details>
  {!!guide.nextLinks?.length&&<nav aria-label="釣行と料理をつなぐ" className="chips" style={{marginTop:16}}>{guide.nextLinks.map(link=><Link key={link.href} href={link.href}>{link.label} →</Link>)}</nav>}
 </section>;
}
