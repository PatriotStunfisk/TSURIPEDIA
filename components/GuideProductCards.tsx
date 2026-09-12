import Link from 'next/link';

type Card={badge:string;title:string;desc:string;href:string;external?:boolean;cta?:string};

const gear=(anchor='')=>`/gear${anchor?`#${anchor}`:''}`;

const cards:Record<string,Card[]>={
 'tairaba-reel-beginner':[
  {badge:'まず買うなら',title:'小型ICベイトリール',desc:'PE0.8〜1号を200m以上。等速巻きと棚再現を両立。',href:gear('madai')},
  {badge:'コスパ重視',title:'ノーマル〜PGベイトリール',desc:'カウンターなしでも十分。巻きやすさと自重を優先。',href:gear('madai')},
  {badge:'上位候補',title:'軽量ICカウンター付きリール',desc:'深場・船釣り頻度が高い人向け。',href:gear('madai')}
 ],
 'tairaba-rod-beginner':[
  {badge:'万能',title:'6〜7ft台タイラバロッド',desc:'60〜120g前後を扱えるベイトモデルが基準。',href:gear('madai')},
  {badge:'食い込み重視',title:'ソフトティップモデル',desc:'穂先が素直に入り、アタリを弾きにくい。',href:gear('madai')},
  {badge:'深場対応',title:'高負荷対応タイラバロッド',desc:'120g超や速潮を想定する人向け。',href:gear('madai')}
 ],
 'tairaba-tungsten-worth-it':[
  {badge:'まず1個',title:'TG 80g前後',desc:'使う頻度が高い重量だけタングステン化。',href:gear('madai')},
  {badge:'コスパ',title:'鉛タイラバヘッド',desc:'浅場・根掛かり対策・予備として優秀。',href:gear('madai')},
  {badge:'速潮用',title:'TG 100〜120g',desc:'深場や潮が速い日に底取りを優先。',href:gear('madai')}
 ],
 'shore-jigging-reel-size':[
  {badge:'定番',title:'4000番スピニング',desc:'40g前後中心のライトショアジギングに。',href:gear('buri')},
  {badge:'パワー重視',title:'5000番スピニング',desc:'60g以上・大型青物まで見るなら余裕あり。',href:gear('buri')},
  {badge:'確認ポイント',title:'PE1.5〜2号を十分巻けるモデル',desc:'番手より実際の糸巻量と自重を確認。',href:gear('buri')}
 ],
 'shore-jigging-rod-power':[
  {badge:'軽快',title:'Mクラスロッド',desc:'30〜40g中心のライトショアジギング向け。',href:gear('buri')},
  {badge:'万能',title:'MHクラスロッド',desc:'40〜60gを幅広く扱いやすい。',href:gear('buri')},
  {badge:'大型対応',title:'Hクラスロッド',desc:'重いジグと強い青物向け。',href:gear('buri')}
 ],
 'eging-reel-size':[
  {badge:'軽さ重視',title:'2500番浅溝リール',desc:'PE0.6〜0.8号のエギング専用寄り。',href:gear('aoriika')},
  {badge:'万能',title:'C3000クラス',desc:'エギング以外にも流用しやすい。',href:gear('aoriika')},
  {badge:'確認ポイント',title:'軽量ドラグ重視モデル',desc:'一日しゃくるなら自重差が効く。',href:gear('aoriika')}
 ],
 'eging-rod-length':[
  {badge:'取り回し',title:'8.3ft前後',desc:'港内や足場の低い場所で軽快。',href:gear('aoriika')},
  {badge:'万能',title:'8.6ft M前後',desc:'飛距離と操作性のバランスが良い。',href:gear('aoriika')},
  {badge:'遠投',title:'8.6ft以上',desc:'高い足場や遠投を重視する釣り場に。',href:gear('aoriika')}
 ],
 'ajing-rod-solid-tubular':[
  {badge:'初心者向け',title:'ソリッドティップ',desc:'1g前後のジグ単を扱いやすい。',href:gear('aji')},
  {badge:'操作性',title:'チューブラーティップ',desc:'重めリグや遠投、明確な操作感を重視。',href:gear('aji')},
  {badge:'港内用',title:'短め軽量アジングロッド',desc:'ジグ単中心なら取り回し優先。',href:gear('aji')}
 ],
 'ajing-reel-size':[
  {badge:'最軽量',title:'1000番クラス',desc:'短いロッドとジグ単中心に。',href:gear('aji')},
  {badge:'万能',title:'2000番浅溝',desc:'メバリングなどにも流用しやすい。',href:gear('aji')},
  {badge:'確認ポイント',title:'軽量・滑らかドラグ',desc:'細糸を扱うためドラグの滑らかさ重視。',href:gear('aji')}
 ],
 'sabiki-rod-choice':[
  {badge:'初心者',title:'2〜3m万能竿',desc:'足元サビキと家族釣りに扱いやすい。',href:gear('aji')},
  {badge:'定番',title:'3〜4.5m磯竿',desc:'長い仕掛けや少し沖を狙う時に便利。',href:gear('aji')},
  {badge:'手軽',title:'リール付きサビキセット',desc:'初回釣行で一式そろえたい人向け。',href:gear('aji')}
 ],
 'sabiki-reel-size':[
  {badge:'軽量',title:'2500番スピニング',desc:'足元サビキ中心なら十分。',href:gear('aji')},
  {badge:'万能',title:'3000番スピニング',desc:'ちょい投げなどにも流用しやすい。',href:gear('aji')},
  {badge:'コスパ',title:'ナイロン付き入門リール',desc:'高級機より扱いやすさ優先でOK。',href:gear('aji')}
 ],
 'nomase-reel-choice':[
  {badge:'船',title:'PE3〜4号対応ベイトリール',desc:'大型青物に必要なライン容量と巻き上げ力。',href:gear('buri')},
  {badge:'堤防',title:'大型スピニングリール',desc:'太糸を十分巻ける番手を選ぶ。',href:gear('buri')},
  {badge:'上位候補',title:'強ドラグ・大型ハンドルモデル',desc:'大型青物を本格的に狙う人向け。',href:gear('buri')}
 ],
 'nomase-rod-choice':[
  {badge:'船',title:'7:3調子青物船竿',desc:'船宿指定オモリを背負えるモデル。',href:gear('buri')},
  {badge:'堤防',title:'強めの磯・遠投竿',desc:'泳がせ仕掛けと青物の負荷に対応。',href:gear('buri')},
  {badge:'確認ポイント',title:'オモリ負荷適合モデル',desc:'対象魚より先に仕掛け重量を確認。',href:gear('buri')}
 ],
 'tachiuo-tenya-rod-choice':[
  {badge:'Amazon',title:'船タチウオテンヤ用ロッド',desc:'40号前後のテンヤを操作できる専用竿。',href:'https://link.amazon/B01XtTirB',external:true,cta:'Amazonで見る'},
  {badge:'扱いやすい',title:'8:2調子テンヤロッド',desc:'食い込みと操作性のバランス。',href:gear('tachiuo')},
  {badge:'掛け重視',title:'9:1調子テンヤロッド',desc:'積極的に掛ける釣りを好む人向け。',href:gear('tachiuo')}
 ],
 'tachiuo-tenya-reel-choice':[
  {badge:'巻き上げ',title:'PG〜ノーマルギア',desc:'重いテンヤと魚を楽に回収。',href:gear('tachiuo')},
  {badge:'手返し',title:'HGベイトリール',desc:'回収速度を優先したい人向け。',href:gear('tachiuo')},
  {badge:'快適',title:'小型電動リール',desc:'深場・釣行頻度が高いなら価値大。',href:gear('tachiuo')}
 ],
 'kawahagi-rod-choice':[
  {badge:'初心者',title:'8:2調子カワハギ竿',desc:'操作と食い込みのバランス。',href:gear('kawahagi')},
  {badge:'操作性',title:'9:1調子カワハギ竿',desc:'積極的な誘いと掛けに。',href:gear('kawahagi')},
  {badge:'軽量',title:'軽量専用ロッド',desc:'一日誘う釣りなので自重差が効く。',href:gear('kawahagi')}
 ],
 'kawahagi-reel-choice':[
  {badge:'定番',title:'小型ベイトリール',desc:'PE1号前後を必要量巻ければ十分。',href:gear('kawahagi')},
  {badge:'軽量',title:'軽量ボディモデル',desc:'細かな誘いを続けても疲れにくい。',href:gear('kawahagi')},
  {badge:'手返し',title:'やや高めギア比',desc:'仕掛け回収を速くしたい人向け。',href:gear('kawahagi')}
 ],
 'boat-kisu-rod-choice':[
  {badge:'専用',title:'1.6〜1.8m船キス竿',desc:'軽くて底感度が高く、船内で扱いやすい。',href:gear('kisu')},
  {badge:'代用',title:'ライトゲームロッド',desc:'指定オモリ負荷に適合すれば初回は代用可能。',href:gear('kisu')},
  {badge:'軽量',title:'軽量先調子モデル',desc:'数釣りで疲れにくさを重視。',href:gear('kisu')}
 ],
 'boat-kisu-reel-choice':[
  {badge:'軽さ',title:'2000番スピニング',desc:'細PEと軽い仕掛けに相性良好。',href:gear('kisu')},
  {badge:'万能',title:'2500番スピニング',desc:'ちょい投げにも流用しやすい。',href:gear('kisu')},
  {badge:'確認ポイント',title:'軽量モデル',desc:'強ドラグより自重と操作性を優先。',href:gear('kisu')}
 ],
 'fishing-cooler-15-vs-30':[
  {badge:'小物釣り',title:'15L前後クーラー',desc:'アジ・キスの日帰りに軽快。',href:gear()},
  {badge:'万能',title:'25〜30Lクーラー',desc:'船・タチウオ・複数人で余裕あり。',href:gear()},
  {badge:'大型魚',title:'30L超ロング内寸タイプ',desc:'青物や長物は容量より内寸を確認。',href:gear()}
 ],
 'fishing-cooler-vacuum-panel':[
  {badge:'コスパ',title:'発泡ウレタンモデル',desc:'日帰り中心なら十分実用的。',href:gear()},
  {badge:'真夏向け',title:'部分真空パネルモデル',desc:'価格と保冷力のバランス。',href:gear()},
  {badge:'遠征',title:'多面真空パネルモデル',desc:'長時間・真夏・遠征で保冷力を重視。',href:gear()}
 ],
 'life-jacket-waist-vs-shoulder':[
  {badge:'動きやすい',title:'腰巻き膨張式',desc:'上半身が自由でルアー操作向き。',href:gear()},
  {badge:'安心感',title:'肩掛け膨張式',desc:'装着確認しやすく姿勢保持を重視。',href:gear()},
  {badge:'磯・波',title:'固定浮力式',desc:'水をかぶる環境ではこちらも候補。',href:gear()}
 ],
 'fishing-headlight-lumens':[
  {badge:'万能',title:'300〜500lmクラス',desc:'仕掛け作りと移動を一台で。',href:gear()},
  {badge:'夜釣り向け',title:'赤色灯付きヘッドライト',desc:'暗順応と周囲への眩しさを抑える。',href:gear()},
  {badge:'長時間',title:'予備電源対応モデル',desc:'交換電池または予備バッテリー運用。',href:gear()}
 ],
 'fishing-pliers-choice':[
  {badge:'一本目',title:'PEカッター付きプライヤー',desc:'ラインカット・針外しを一体化。',href:gear()},
  {badge:'ルアー派',title:'リングオープナー付き',desc:'フック交換をするなら便利。',href:gear()},
  {badge:'タチウオ',title:'ロングノーズプライヤー',desc:'鋭い歯から手を離して安全に外す。',href:gear('tachiuo')}
 ],
 'fish-grip-choice':[
  {badge:'ライトゲーム',title:'小型フィッシュグリップ',desc:'アジなど小型魚で携帯性重視。',href:gear()},
  {badge:'万能',title:'中型フィッシュグリップ',desc:'シーバス・中型青物まで使いやすい。',href:gear()},
  {badge:'大型魚',title:'高耐荷重グリップ',desc:'大型青物では剛性と耐荷重を優先。',href:gear('buri')}
 ],
 'landing-net-length':[
  {badge:'堤防定番',title:'5m前後タモ柄',desc:'一般的な岸壁で汎用性が高い。',href:gear()},
  {badge:'高場対応',title:'6m以上タモ柄',desc:'水面まで高い場所では長さ優先。',href:gear()},
  {badge:'青物',title:'大型ネット枠',desc:'魚体がしっかり入る枠径を選ぶ。',href:gear('buri')}
 ],
 'pe-line-4-vs-8-strand':[
  {badge:'コスパ',title:'4本編みPE',desc:'価格と耐摩耗性を重視。',href:gear()},
  {badge:'飛距離',title:'8本編みPE',desc:'滑らかさとガイド抜けを重視。',href:gear()},
  {badge:'確認ポイント',title:'200m巻き',desc:'高切れの余裕まで考えて長さを選ぶ。',href:gear()}
 ],
 'leader-fluoro-vs-nylon':[
  {badge:'万能',title:'フロロリーダー',desc:'根ズレと感度を重視する海ルアー向け。',href:gear()},
  {badge:'しなやか',title:'ナイロンリーダー',desc:'結びやすさと伸びによる衝撃吸収。',href:gear()},
  {badge:'青物',title:'太号数フロロ',desc:'大型魚では素材より適正太さを優先。',href:gear('buri')}
 ],
 'bobbin-winder-light-heavy':[
  {badge:'細糸',title:'ライトボビン',desc:'細めPEで過度なテンションを掛けにくい。',href:gear()},
  {badge:'青物',title:'ヘビーボビン',desc:'PE2〜4号以上のPRノットに。',href:gear('buri')},
  {badge:'確認ポイント',title:'テンション調整式',desc:'ラインに合わせて負荷を調整できる。',href:gear()}
 ],
 'fishing-bag-hard-vs-soft':[
  {badge:'船',title:'EVAハードバッグ',desc:'濡れても洗いやすく自立しやすい。',href:gear()},
  {badge:'ランガン',title:'ショルダー系ソフトバッグ',desc:'軽量で歩く釣りに向く。',href:gear()},
  {badge:'収納',title:'ロッドホルダー付きバッグ',desc:'ルアー交換時の置き場も確保。',href:gear()}
 ],
 'polarized-sunglasses-fishing':[
  {badge:'万能',title:'グレー系偏光レンズ',desc:'晴天で自然な色味を保ちやすい。',href:gear()},
  {badge:'曇天',title:'ブラウン系偏光レンズ',desc:'コントラストを高めやすい。',href:gear()},
  {badge:'安全',title:'UVカット偏光グラス',desc:'偏光度だけでなくUV性能も確認。',href:gear()}
 ],
 'fishing-rainwear-choice':[
  {badge:'日帰り',title:'軽量レインスーツ',desc:'小雨中心なら携帯性を優先。',href:gear()},
  {badge:'船釣り',title:'高防水レインウェア',desc:'波しぶきと長時間の雨に対応。',href:gear()},
  {badge:'快適',title:'高透湿モデル',desc:'夏や移動の多い釣りで蒸れを軽減。',href:gear()}
 ]
};

export default function GuideProductCards({slug}:{slug:string}){
 const items=cards[slug];
 if(!items?.length)return null;
 return <section style={{margin:'26px 0 0',padding:'24px',border:'1px solid #d8e7ef',borderRadius:20,background:'#f8fbfd'}}>
  <span style={{fontSize:12,fontWeight:900,letterSpacing:1.2,color:'#087bc4'}}>GEAR PICKS</span>
  <h2 style={{margin:'6px 0 5px'}}>この記事から選ぶなら</h2>
  <p style={{margin:'0 0 16px',color:'#657b88',lineHeight:1.7,fontSize:13}}>買う前に、適合重量・ライン容量・サイズを確認。価格だけでなく今のタックルとの相性で選ぶ。</p>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:12}}>{items.map(x=><article key={x.badge+x.title} style={{display:'flex',flexDirection:'column',minHeight:190,padding:18,borderRadius:16,background:'#fff',border:'1px solid #dce8ee',boxShadow:'0 8px 24px rgba(24,61,82,.06)'}}>
   <span style={{alignSelf:'flex-start',padding:'5px 8px',borderRadius:999,background:'#e8f4fb',color:'#087bc4',fontSize:10,fontWeight:900}}>{x.badge}</span>
   <h3 style={{margin:'11px 0 7px',fontSize:18,lineHeight:1.45}}>{x.title}</h3>
   <p style={{margin:'0 0 16px',fontSize:13,lineHeight:1.7,color:'#607682'}}>{x.desc}</p>
   {x.external?<a href={x.href} target="_blank" rel="sponsored noopener noreferrer" style={{marginTop:'auto',display:'inline-flex',justifyContent:'center',padding:'11px 12px',borderRadius:10,background:'#ff9900',color:'#111',fontWeight:900,fontSize:13}}>{x.cta||'商品を見る →'}</a>:<Link href={x.href} style={{marginTop:'auto',display:'inline-flex',justifyContent:'center',padding:'11px 12px',borderRadius:10,background:'#0e2f43',color:'#fff',fontWeight:900,fontSize:13}}>釣具ページで候補を見る →</Link>}
  </article>)}</div>
  <small style={{display:'block',marginTop:12,color:'#82939d',lineHeight:1.6}}>※Amazonへの外部リンクがあるカードにはアフィリエイトリンクを含む場合があります。その他はUOLINK内の釣具ページへ移動します。</small>
 </section>
}
