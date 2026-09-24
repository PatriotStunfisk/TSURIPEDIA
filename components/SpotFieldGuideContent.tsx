import type {SpotFieldGuide} from '@/lib/spot-planning';
export default function SpotFieldGuideContent({guide}:{guide:SpotFieldGuide}){
 return <section aria-label="この釣り場の地形と狙い方" style={{lineHeight:1.85}}>
  <h2>釣り場を詳しく知る</h2>
  <h3>場所の特徴・設備</h3><ul>{guide.features.map(x=><li key={x}>{x}</li>)}</ul>
  <h3>現地での探り方</h3><ol>{guide.approach.map(x=><li key={x}>{x}</li>)}</ol>
  {!!guide.beforeYouGo.length&&<details><summary>利用条件・準備の補足</summary><ul>{guide.beforeYouGo.map(x=><li key={x}>{x}</li>)}</ul></details>}
  {!!guide.sources?.length&&<p style={{fontSize:12,color:'#617482'}}>参考：{guide.sources.map((x,i)=><span key={x.url}>{i>0?' / ':''}<a href={x.url} target="_blank" rel="noopener noreferrer">{x.label} ↗</a></span>)}{guide.reviewedAt&&`（確認 ${guide.reviewedAt}）`}</p>}
 </section>;
}
