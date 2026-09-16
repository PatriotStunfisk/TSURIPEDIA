import {amazonSearchUrl,affiliateDisclosure} from '@/lib/affiliate-products';
type Pick={label:string;title:string;desc:string;href:string};

const amazon:Record<string,Pick[]>={
 'tairaba-reel-beginner':[
  {label:'Amazon',title:'タイラバ用ICベイトリール',desc:'PE0.8〜1号を200m以上巻けるIC付きモデル。',href:amazonSearchUrl('タイラバ用ICベイトリール')}
 ],
 'tairaba-rod-beginner':[
  {label:'Amazon',title:'タイラバロッド',desc:'近海タイラバの最初の1本候補。',href:amazonSearchUrl('タイラバロッド')}
 ],
 'tairaba-tungsten-worth-it':[
  {label:'Amazon',title:'鉛タイラバヘッド 100g',desc:'TG品薄時の現実的な選択肢。底取り優先なら100gを候補に。',href:amazonSearchUrl('鉛タイラバヘッド 100g')}
 ],
 'shore-jigging-reel-size':[
  {label:'Amazon',title:'ショアジギング用4000番リール',desc:'40g前後中心のライトショアジギング向け。',href:amazonSearchUrl('ショアジギング用4000番リール')}
 ],
 'shore-jigging-rod-power':[
  {label:'Amazon',title:'ショアジギング MHロッド',desc:'40〜60g前後を広く扱いやすい万能クラス。',href:amazonSearchUrl('ショアジギング MHロッド')}
 ],
 'eging-reel-size':[
  {label:'Amazon',title:'エギング用2500番リール',desc:'PE0.6〜0.8号を使うエギングの定番サイズ。',href:amazonSearchUrl('エギング用2500番リール')}
 ],
 'eging-rod-length':[
  {label:'Amazon',title:'エギング 8.6ftロッド',desc:'飛距離と操作性のバランスが良い万能長。',href:amazonSearchUrl('エギング 8.6ftロッド')}
 ],
 'nomase-reel-choice':[
  {label:'Amazon',title:'ブリ・ノマセ用ベイトリール',desc:'太めPEと大型青物を想定した船ノマセ向け。',href:amazonSearchUrl('ブリ・ノマセ用ベイトリール')}
 ],
 'nomase-rod-choice':[
  {label:'Amazon',title:'青物船竿',desc:'ブリなど大型青物の船ノマセ候補。',href:amazonSearchUrl('青物船竿')}
 ],
 'tachiuo-tenya-rod-choice':[
  {label:'Amazon',title:'タチウオテンヤ 8:2調子ロッド',desc:'40号前後のテンヤを扱いやすい8:2調子。',href:amazonSearchUrl('タチウオテンヤ 8:2調子ロッド')}
 ],
 'tachiuo-tenya-reel-choice':[
  {label:'Amazon',title:'タチウオ用PGリール',desc:'巻き上げ力と一定速度の誘いを重視するPG。',href:amazonSearchUrl('タチウオ用PGリール')}
 ],
 'fishing-cooler-15-vs-30':[
  {label:'15L級',title:'15Lクラスの釣り用クーラー',desc:'アジ・キスなど日帰り小物釣り向け。',href:amazonSearchUrl('15Lクラスの釣り用クーラー')},
  {label:'32L級',title:'32Lクラスの釣り用クーラー',desc:'船・タチウオ・青物まで余裕を持たせたい人向け。',href:amazonSearchUrl('32Lクラスの釣り用クーラー')}
 ],
 'life-jacket-waist-vs-shoulder':[
  {label:'Amazon',title:'腰巻きライフジャケット',desc:'上半身が動かしやすい膨張式腰巻きタイプ。',href:amazonSearchUrl('腰巻きライフジャケット')}
 ],
 'pe-line-4-vs-8-strand':[
  {label:'0.6号',title:'8本編みPE 0.6号',desc:'エギング・ライトゲームなど細糸用途。',href:amazonSearchUrl('8本編みPE 0.6号')},
  {label:'0.8号',title:'8本編みPE 0.8号',desc:'タイラバ・エギングで使いやすい号数。',href:amazonSearchUrl('8本編みPE 0.8号')},
  {label:'1号',title:'8本編みPE 1号',desc:'タイラバ・ライトショアジギングの汎用域。',href:amazonSearchUrl('8本編みPE 1号')},
  {label:'1.5号',title:'8本編みPE 1.5号',desc:'ショアジギングなど青物寄り。',href:amazonSearchUrl('8本編みPE 1.5号')},
  {label:'2号',title:'8本編みPE 2号',desc:'青物・強めのショアゲーム向け。',href:amazonSearchUrl('8本編みPE 2号')},
  {label:'3号',title:'8本編みPE 3号',desc:'船青物・ノマセなど太糸用途。',href:amazonSearchUrl('8本編みPE 3号')}
 ],
 'leader-fluoro-vs-nylon':[
  {label:'Amazon',title:'フロロリーダー 3号',desc:'海のルアー釣りで使いやすい基準号数のひとつ。',href:amazonSearchUrl('フロロリーダー 3号')}
 ]
};

export function hasAffiliatePicks(slug:string){return !!amazon[slug]?.length}

export default function GuideAffiliatePicks({slug}:{slug:string}){
 const items=amazon[slug];
 if(!items?.length)return null;
 return <section style={{margin:'26px 0 0',padding:'24px',borderRadius:20,background:'#fff7e8',border:'1px solid #f1d7a3'}}>
  <span style={{fontSize:12,fontWeight:900,letterSpacing:1.2,color:'#a15d00'}}>AMAZON PICKS</span>
  <h2 style={{margin:'6px 0 6px'}}>PR · 選び方に合う候補を比較</h2>
  <p style={{margin:'0 0 16px',fontSize:13,lineHeight:1.7,color:'#715f46'}}>記事の条件に合う候補。購入前に番手・号数・適合重量・サイズを商品ページで最終確認。</p>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:12}}>{items.map(x=><article key={x.href} style={{display:'flex',flexDirection:'column',padding:18,minHeight:175,borderRadius:16,background:'#fff',border:'1px solid #efd9b5'}}>
   <span style={{alignSelf:'flex-start',padding:'5px 8px',borderRadius:999,background:'#fff0cf',fontSize:10,fontWeight:900,color:'#9b5c00'}}>{x.label}</span>
   <h3 style={{margin:'11px 0 7px',fontSize:18,lineHeight:1.45}}>{x.title}</h3>
   <p style={{margin:'0 0 16px',fontSize:13,lineHeight:1.7,color:'#6c6255'}}>{x.desc}</p>
   <a href={x.href} target="_blank" rel="sponsored noopener noreferrer" style={{marginTop:'auto',display:'inline-flex',justifyContent:'center',padding:'11px 12px',borderRadius:10,background:'#ff9900',color:'#111',fontWeight:900,fontSize:13}}>Amazonで候補を比較 →</a>
  </article>)}</div>
  <small style={{display:'block',marginTop:12,color:'#877966',lineHeight:1.6}}>{affiliateDisclosure}</small>
 </section>
}
