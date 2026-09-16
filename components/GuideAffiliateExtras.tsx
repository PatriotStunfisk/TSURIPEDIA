import {amazonSearchUrl,affiliateDisclosure} from '@/lib/affiliate-products';
type Pick={label:string;title:string;desc:string;href:string};

const picks:Record<string,Pick[]>={
 'tairaba-pe':[{label:'0.8号',title:'8本編みPE 0.8号',desc:'タイラバの基準として使いやすい号数。',href:amazonSearchUrl('8本編みPE 0.8号')},{label:'1号',title:'8本編みPE 1号',desc:'強度に少し余裕を持たせたい時の候補。',href:amazonSearchUrl('8本編みPE 1号')}],
 'tairaba-weight':[{label:'100g',title:'鉛タイラバヘッド 100g',desc:'80gで底が取りにくい潮や水深で使いやすい。',href:amazonSearchUrl('鉛タイラバヘッド 100g')}],
 'shore-jigging-pe':[{label:'1.5号',title:'8本編みPE 1.5号',desc:'ライト〜標準的なショアジギング向け。',href:amazonSearchUrl('8本編みPE 1.5号')},{label:'2号',title:'8本編みPE 2号',desc:'大型青物や強めのタックルで余裕を持たせる。',href:amazonSearchUrl('8本編みPE 2号')}],
 'shore-jigging-leader-length':[{label:'5号',title:'フロロリーダー 5号',desc:'ライト寄りの青物・ショアゲームの候補。',href:amazonSearchUrl('フロロリーダー 5号')},{label:'6号',title:'フロロリーダー 6号',desc:'擦れと強度に余裕を持たせたい時に。',href:amazonSearchUrl('フロロリーダー 6号')}],
 'nomase-leader':[{label:'7号',title:'フロロリーダー 7号',desc:'ブリのノマセで使う太めリーダーの候補。',href:amazonSearchUrl('フロロリーダー 7号')},{label:'3号PE',title:'8本編みPE 3号',desc:'船ノマセのメインライン候補。',href:amazonSearchUrl('8本編みPE 3号')}],
 'pe-line-how-much':[{label:'200m候補',title:'8本編みPE 1号',desc:'万能寄りの号数。必要量は釣り方と水深で決める。',href:amazonSearchUrl('8本編みPE 1号')},{label:'青物向け',title:'8本編みPE 2号',desc:'青物や強めのショアゲーム向け。',href:amazonSearchUrl('8本編みPE 2号')}],
 'spinning-reel-size':[{label:'4000番',title:'ショアジギング用4000番リール',desc:'青物まで視野に入れる海釣りの強め番手。',href:amazonSearchUrl('ショアジギング用4000番リール')},{label:'2500番',title:'エギング用2500番リール',desc:'エギング・軽めの海釣りで扱いやすい。',href:amazonSearchUrl('エギング用2500番リール')}],
 'cooler-size-fishing':[{label:'15L',title:'15Lクラスの釣り用クーラー',desc:'アジ・キスなど小型魚の日帰り釣行に。',href:amazonSearchUrl('15Lクラスの釣り用クーラー')},{label:'32L',title:'32Lクラスの釣り用クーラー',desc:'船・タチウオ・青物まで余裕を持たせたい時に。',href:amazonSearchUrl('32Lクラスの釣り用クーラー')}],
 'life-jacket-type':[{label:'腰巻き',title:'腰巻きライフジャケット',desc:'動きやすさを優先した膨張式タイプ。',href:amazonSearchUrl('腰巻きライフジャケット')}],
 'leader-length-general':[{label:'3号',title:'フロロリーダー 3号',desc:'ライト〜中量級の海釣りで使いやすい。',href:amazonSearchUrl('フロロリーダー 3号')},{label:'6号',title:'フロロリーダー 6号',desc:'青物など擦れと強度を重視する釣りに。',href:amazonSearchUrl('フロロリーダー 6号')}],
 'fg-knot-vs-pr-knot':[{label:'青物用',title:'8本編みPE 3号',desc:'PRノットを使う大型青物系のライン候補。',href:amazonSearchUrl('8本編みPE 3号')},{label:'リーダー',title:'フロロリーダー 7号',desc:'太めラインシステムの候補。',href:amazonSearchUrl('フロロリーダー 7号')}],
 'beginner-sea-fishing-setup':[{label:'安全装備',title:'腰巻きライフジャケット',desc:'最初に揃えたい安全装備。',href:amazonSearchUrl('腰巻きライフジャケット')},{label:'クーラー',title:'15Lクラスの釣り用クーラー',desc:'堤防の小物釣りで扱いやすいサイズ。',href:amazonSearchUrl('15Lクラスの釣り用クーラー')}],
 'fish-carry-home':[{label:'日帰り',title:'15Lクラスの釣り用クーラー',desc:'小型魚の持ち帰りに。',href:amazonSearchUrl('15Lクラスの釣り用クーラー')},{label:'大型魚',title:'32Lクラスの釣り用クーラー',desc:'大型魚や船釣りの持ち帰りに余裕。',href:amazonSearchUrl('32Lクラスの釣り用クーラー')}],
 'ice-amount-cooler':[{label:'15L',title:'15Lクラスの釣り用クーラー',desc:'小型魚の日帰り釣行向け。',href:amazonSearchUrl('15Lクラスの釣り用クーラー')},{label:'32L',title:'32Lクラスの釣り用クーラー',desc:'多めの氷を入れたい船釣り向け。',href:amazonSearchUrl('32Lクラスの釣り用クーラー')}],
 'eging-best-time':[{label:'リール',title:'エギング用2500番リール',desc:'朝夕まずめのエギングにも扱いやすい定番サイズ。',href:amazonSearchUrl('エギング用2500番リール')},{label:'ロッド',title:'8.6ftエギングロッド',desc:'堤防・港で使いやすい万能長。',href:amazonSearchUrl('8.6ftエギングロッド')}],
 'eging-shakuri-count':[{label:'ロッド',title:'8.6ftエギングロッド',desc:'しゃくりとフォールを両立しやすい万能長。',href:amazonSearchUrl('8.6ftエギングロッド')}],
 'tairaba-bottom-contact':[{label:'100g',title:'鉛タイラバヘッド 100g',desc:'着底が曖昧な時は重量アップが有効。',href:amazonSearchUrl('鉛タイラバヘッド 100g')},{label:'ICリール',title:'タイラバ用ICベイトリール',desc:'水深把握と棚の再現に便利。',href:amazonSearchUrl('タイラバ用ICベイトリール')}],
 'tairaba-pe-06-08-1':[{label:'0.6号',title:'8本編みPE 0.6号',desc:'感度と潮抜けを重視。',href:amazonSearchUrl('8本編みPE 0.6号')},{label:'0.8号',title:'8本編みPE 0.8号',desc:'近海タイラバの万能候補。',href:amazonSearchUrl('8本編みPE 0.8号')},{label:'1号',title:'8本編みPE 1号',desc:'強度に余裕を持たせたい時に。',href:amazonSearchUrl('8本編みPE 1号')}],
 'shore-jigging-pe-15-vs-2':[{label:'1.5号',title:'8本編みPE 1.5号',desc:'飛距離と強度のバランス。',href:amazonSearchUrl('8本編みPE 1.5号')},{label:'2号',title:'8本編みPE 2号',desc:'大型青物まで見るなら安心。',href:amazonSearchUrl('8本編みPE 2号')}],
 'eging-pe-06-vs-08':[{label:'0.6号',title:'8本編みPE 0.6号',desc:'飛距離と軽快さを優先。',href:amazonSearchUrl('8本編みPE 0.6号')},{label:'0.8号',title:'8本編みPE 0.8号',desc:'初心者・大型イカまで安心。',href:amazonSearchUrl('8本編みPE 0.8号')}],
 'nomase-pe3-vs4':[{label:'3号',title:'8本編みPE 3号',desc:'船ノマセで扱いやすい太さ。',href:amazonSearchUrl('8本編みPE 3号')},{label:'リーダー7号',title:'フロロリーダー 7号',desc:'PE3号と合わせる太めリーダー候補。',href:amazonSearchUrl('フロロリーダー 7号')}],
 'cooler-15-vs-32':[{label:'15L',title:'15Lクラスの釣り用クーラー',desc:'小型魚・徒歩移動向け。',href:amazonSearchUrl('15Lクラスの釣り用クーラー')},{label:'32L',title:'32Lクラスの釣り用クーラー',desc:'船・大型魚まで幅広く対応。',href:amazonSearchUrl('32Lクラスの釣り用クーラー')}],
 'tairaba-ic-reel-necessary':[{label:'IC付き',title:'タイラバ用ICベイトリール',desc:'水深と巻き上げ距離を数値で管理。',href:amazonSearchUrl('タイラバ用ICベイトリール')}],
 'tachiuo-pg-vs-hg':[{label:'PG',title:'タチウオ用PGリール',desc:'巻き上げ力と一定速度の誘いを重視。',href:amazonSearchUrl('タチウオ用PGリール')}],
 'fishing-reel-2500-vs4000':[{label:'2500番',title:'エギング用2500番リール',desc:'軽い釣り・エギング向け。',href:amazonSearchUrl('エギング用2500番リール')},{label:'4000番',title:'ショアジギング用4000番リール',desc:'青物まで視野に入れる強め番手。',href:amazonSearchUrl('ショアジギング用4000番リール')}],
 'fluoro-leader-size-guide':[{label:'2号',title:'フロロリーダー 2号',desc:'エギング・ライト用途。',href:amazonSearchUrl('フロロリーダー 2号')},{label:'3号',title:'フロロリーダー 3号',desc:'タイラバなど万能寄り。',href:amazonSearchUrl('フロロリーダー 3号')},{label:'5号',title:'フロロリーダー 5号',desc:'強めのルアー釣りに。',href:amazonSearchUrl('フロロリーダー 5号')},{label:'7号',title:'フロロリーダー 7号',desc:'青物・ノマセ向け。',href:amazonSearchUrl('フロロリーダー 7号')}],
 'pe-line-size-guide':[{label:'0.6号',title:'8本編みPE 0.6号',desc:'エギング・ライト用途。',href:amazonSearchUrl('8本編みPE 0.6号')},{label:'0.8号',title:'8本編みPE 0.8号',desc:'タイラバ・エギング向け。',href:amazonSearchUrl('8本編みPE 0.8号')},{label:'1.5号',title:'8本編みPE 1.5号',desc:'ショアジギング向け。',href:amazonSearchUrl('8本編みPE 1.5号')},{label:'3号',title:'8本編みPE 3号',desc:'船青物・ノマセ向け。',href:amazonSearchUrl('8本編みPE 3号')}]
};

export function hasAffiliateExtras(slug:string){return !!picks[slug]?.length}
export default function GuideAffiliateExtras({slug}:{slug:string}){
 const items=picks[slug];if(!items?.length)return null;
 return <section style={{margin:'26px 0 0',padding:'24px',borderRadius:20,background:'#fff7e8',border:'1px solid #f1d7a3'}}><span style={{fontSize:12,fontWeight:900,letterSpacing:1.2,color:'#a15d00'}}>RELATED GEAR</span><h2 style={{margin:'6px 0 6px'}}>PR · 必要な道具をAmazonで比較</h2><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:12,marginTop:16}}>{items.map(x=><article key={x.href} style={{display:'flex',flexDirection:'column',padding:18,minHeight:170,borderRadius:16,background:'#fff',border:'1px solid #efd9b5'}}><span style={{alignSelf:'flex-start',padding:'5px 8px',borderRadius:999,background:'#fff0cf',fontSize:10,fontWeight:900,color:'#9b5c00'}}>{x.label}</span><h3 style={{margin:'11px 0 7px',fontSize:18,lineHeight:1.45}}>{x.title}</h3><p style={{margin:'0 0 16px',fontSize:13,lineHeight:1.7,color:'#6c6255'}}>{x.desc}</p><a href={x.href} target="_blank" rel="sponsored noopener noreferrer" style={{marginTop:'auto',display:'inline-flex',justifyContent:'center',padding:'11px 12px',borderRadius:10,background:'#ff9900',color:'#111',fontWeight:900,fontSize:13}}>Amazonで候補を比較 →</a></article>)}</div><small style={{display:'block',marginTop:12,color:'#877966',lineHeight:1.6}}>{affiliateDisclosure}</small></section>
}
