import Link from 'next/link';

export const metadata={title:'釣具｜UOLINK'};

const targets=[
  {fish:'タチウオ',icon:'⚔️',href:'/fish/tachiuo',method:'/methods/tachiuo-tenya',methodName:'テンヤ釣り',items:['船竿・テンヤロッド','小型両軸リール','PEライン','テンヤ・リーダー'],note:'大阪湾の定番セットから選ぶ'},
  {fish:'マアジ',icon:'🐟',href:'/fish/aji',method:'/methods/sabiki',methodName:'サビキ',items:['サビキ竿','スピニングリール','サビキ仕掛け','カゴ・オモリ'],note:'家族釣り・船アジにも展開'},
  {fish:'マダイ',icon:'🔴',href:'/fish/madai',method:'/methods/tai-rubber',methodName:'タイラバ',items:['タイラバロッド','カウンター付きリール','PE0.6〜1号','タイラバヘッド'],note:'明石・瀬戸内の定番を選ぶ'},
  {fish:'ブリ',icon:'💨',href:'/fish/buri',method:'/methods/nomase',methodName:'ノマセ',items:['船竿','パワー系両軸リール','PE3〜5号','ハリス・仕掛け'],note:'大型青物向けの強度を重視'}
];

const basics=[
  {icon:'🎣',name:'ロッド',desc:'魚・釣り方・オモリ負荷から選ぶ。まずは専用竿が必要か、汎用竿で対応できるかを整理。',links:[['魚から選ぶ','/fish'],['釣り方から選ぶ','/methods']]},
  {icon:'⚙️',name:'リール',desc:'番手だけでなく、巻上力・ギア比・糸巻量・カウンター有無まで実釣目線で比較。',links:[['船釣りを見る','/methods'],['対象魚を見る','/fish']]},
  {icon:'🧵',name:'ライン・リーダー',desc:'PE号数、リーダー素材、太さ、長さを対象魚ごとに整理。結束方法も後から連携予定。',links:[['タチウオを見る','/fish/tachiuo'],['ブリを見る','/fish/buri']]},
  {icon:'🪝',name:'仕掛け・ルアー',desc:'テンヤ、タイラバ、サビキ、ノマセなど、釣り方から必要な消耗品へ直結。',links:[['釣り方一覧','/methods'],['釣れる魚一覧','/fish']]},
  {icon:'🧊',name:'クーラー・収納',desc:'釣る魚のサイズと釣行時間から容量を逆算。持ち運びや保冷力も比較できるようにする。',links:[['大型魚を見る','/fish/buri'],['魚図鑑へ','/fish']]},
  {icon:'🧤',name:'安全・便利グッズ',desc:'フィッシュグリップ、プライヤー、ハサミ、手袋など、危険魚対策も含めて提案。',links:[['タチウオを見る','/fish/tachiuo'],['釣り方を見る','/methods']]}
];

export default function Page(){return <div className="section pageTop">
  <div className="pageHero"><span>FISHING GEAR</span><h1>釣具を、魚から選ぶ。</h1><p>「何を買えばいいか分からない」をなくす。UOLINKでは魚 → 釣り方 → 必要な道具の順で迷わずたどれます。</p></div>

  <div className="adNotice">将来ここにAmazon・楽天などのアフィリエイトリンクを追加予定です。今は図鑑・釣り方との導線を先に整えています。</div>

  <div className="sectionTitle"><div><span>BY TARGET</span><h2>狙う魚からセットを探す</h2></div><Link href="/fish">魚図鑑をすべて見る →</Link></div>
  <div className="gearTargetGrid">{targets.map(x=><article className="gearTarget" key={x.fish}>
    <div className="gearTargetHead"><span>{x.icon}</span><div><small>FOR {x.fish}</small><h2>{x.fish}の釣具</h2><p>{x.note}</p></div></div>
    <div className="gearNeedList">{x.items.map(v=><span key={v}>✓ {v}</span>)}</div>
    <div className="gearActions"><Link href={x.href}>魚の特徴を見る</Link><Link className="primary" href={x.method}>{x.methodName}から選ぶ →</Link></div>
  </article>)}</div>

  <div className="sectionTitle gearTitle"><div><span>CATEGORY</span><h2>道具の種類から探す</h2></div><Link href="/methods">釣り方から逆引き →</Link></div>
  <div className="gearGrid">{basics.map(g=><article key={g.name}><div className="gearEmoji">{g.icon}</div><h2>{g.name}</h2><p>{g.desc}</p><div className="gearMiniLinks">{g.links.map(([label,href])=><Link key={label} href={href}>{label} →</Link>)}</div></article>)}</div>

  <section className="gearAffiliateReady"><div><span>NEXT</span><h2>あとから商品リンクを差し込める設計</h2><p>各カードに「Amazonで見る」「楽天で見る」を追加するだけで、図鑑から商品購入まで自然につながります。商品を先に押し売りせず、必要な理由を説明してからリンクへ進む形にします。</p></div><Link href="/fish/tachiuo">タチウオ図鑑で導線を見る →</Link></section>
</div>}
