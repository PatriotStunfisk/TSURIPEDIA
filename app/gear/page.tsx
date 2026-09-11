import Link from 'next/link';
import s from './gear.module.css';
export const metadata={title:'釣具｜UOLINK'};

const basics=[
 {title:'ロッド',icon:'🎣',text:'釣り方に合う長さ・硬さを選ぶ。船はオモリ負荷、岸は飛距離と操作性を重視。'},
 {title:'リール',icon:'⚙️',text:'スピニングか両軸かを釣法で決める。青物や深場では糸巻量とドラグ力も重要。'},
 {title:'ライン',icon:'〰️',text:'PEは感度と強度、フロロは擦れへの強さが特徴。号数は魚種・水深・潮で調整。'},
 {title:'仕掛け・小物',icon:'🪝',text:'針、ハリス、オモリ、スナップ、プライヤーまで含めて一式で考えると忘れ物が減る。'}
];

const targets=[
 {slug:'tachiuo',fish:'タチウオ',icon:'⚔️',href:'/fish/tachiuo',routes:[{place:'🚤 船',method:'/methods/tachiuo-tenya',name:'船テンヤ',items:'専用竿 7:3〜8:2調子・両軸/電動・PE1.5〜3号・リーダー6〜10号・40号前後テンヤ'},{place:'⚓ 堤防',method:'/methods#tachiuo-tenya-shore',name:'ウキ・引き釣り',items:'磯/ルアー竿・3000〜4000番・PE1〜2号・太ハリス/ワイヤー・電気ウキ/テンヤ'}],amazon:'https://link.amazon/B01XtTirB'},
 {slug:'aji',fish:'マアジ',icon:'🐟',href:'/fish/aji',routes:[{place:'⚓ 堤防',method:'/methods/sabiki',name:'サビキ',items:'3〜4m万能竿・2000〜3000番・ナイロン2〜3号・サビキ4〜8号・コマセカゴ'},{place:'🚤 船',method:'/methods#douzuki',name:'船アジ',items:'7:3調子船竿・小型両軸・PE0.8〜2号・胴突き/サビキ・船指定オモリ'}]},
 {slug:'madai',fish:'マダイ',icon:'🔴',href:'/fish/madai',routes:[{place:'🚤 船',method:'/methods/tai-rubber',name:'タイラバ',items:'タイラバ竿・小型両軸・PE0.6〜1号・リーダー2〜4号・ヘッド45〜150g'},{place:'⚓ 堤防',method:'/methods#fukase',name:'カゴ・フカセ',items:'磯/遠投竿・2500〜4000番・ナイロン/PE・ウキ・ハリス1.5〜3号'}]},
 {slug:'buri',fish:'ブリ',icon:'💨',href:'/fish/buri',routes:[{place:'🚤 船',method:'/methods/nomase',name:'船ノマセ',items:'青物船竿・両軸/電動・PE3〜5号・リーダー8〜14号・泳がせ仕掛け'},{place:'⚓ 堤防',method:'/methods/nomase',name:'堤防ノマセ',items:'磯/遠投竿・4000〜6000番・PE2〜4号・リーダー6〜10号・泳がせ仕掛け'}]},
 {slug:'kisu',fish:'シロギス',icon:'🏖️',href:'/fish/kisu',routes:[{place:'⚓ 岸',method:'/methods#choinage',name:'ちょい投げ',items:'2〜3m投げ/ルアー竿・2500〜3000番・PE0.8〜1.2号・天秤・オモリ5〜15号'},{place:'🚤 船',method:'/methods#boat-kisu',name:'船キス',items:'1.5〜2mライト竿・小型スピニング/両軸・PE0.8〜1号・天秤・船指定オモリ'}]},
 {slug:'kasago',fish:'カサゴ',icon:'🪨',href:'/fish/kasago',routes:[{place:'⚓ 堤防',method:'/methods#ana',name:'穴釣り',items:'短竿・小型両軸/スピニング・フロロ2〜4号・ブラクリ3〜10号'},{place:'🚤 船',method:'/methods#douzuki',name:'胴突き',items:'ライト船竿・小型両軸・PE1〜2号・胴突き仕掛け・オモリ20〜50号'}]},
 {slug:'saba',fish:'マサバ',icon:'🌊',href:'/fish/saba',routes:[{place:'⚓ 堤防',method:'/methods/sabiki',name:'サビキ',items:'万能竿・3000番・ナイロン3号前後・サビキ6〜10号・大きめコマセカゴ'},{place:'🚤 船',method:'/methods#jigging',name:'ライトジギング',items:'ライトジギング竿・4000番/小型両軸・PE1〜2号・ジグ40〜120g'}]},
 {slug:'kawahagi',fish:'カワハギ',icon:'🟨',href:'/fish/kawahagi',routes:[{place:'🚤 船',method:'/methods#kawahagi',name:'胴突き',items:'カワハギ竿・小型両軸・PE0.8〜1号・3本針仕掛け・オモリ25〜30号'},{place:'⚓ 堤防',method:'/methods#douzuki',name:'胴突き',items:'短めの先調子竿・小型リール・細糸・小針胴突き・軽めのオモリ'}]},
 {slug:'hirame',fish:'ヒラメ',icon:'⬜',href:'/fish/hirame',routes:[{place:'🚤 船',method:'/methods/nomase',name:'泳がせ',items:'ヒラメ/青物竿・両軸・PE2〜4号・リーダー6〜10号・泳がせ仕掛け'},{place:'🏖️ サーフ',method:'/methods#surf-lure',name:'ルアー',items:'9〜11ftロッド・4000番・PE1〜1.5号・リーダー4〜6号・ミノー/ジグ/ワーム'}]},
 {slug:'aoriika',fish:'アオリイカ',icon:'🦑',href:'/fish/aoriika',routes:[{place:'⚓ 岸',method:'/methods#eging',name:'エギング',items:'8〜9ftエギング竿・2500〜3000番・PE0.6〜0.8号・リーダー1.75〜2.5号・エギ2.5〜3.5号'},{place:'🚤 船',method:'/methods#tiprun',name:'ティップラン',items:'専用竿・2500番・PE0.6〜0.8号・リーダー2号前後・ティップラン用エギ30〜60g'}]}
];

export default function Page(){return <div className="section pageTop"><style>{`html{scroll-padding-top:96px}`}</style>
 <div className="pageHero"><span>FISHING GEAR</span><h1>釣具は「魚 × 釣り方」で選ぶ。</h1><p>ロッド、リール、ライン、仕掛けをばらばらに選ばず、狙う魚と釣り方から一式で考えるページです。</p></div>
 <div className="adNotice">このページにはAmazonアソシエイト等のアフィリエイトリンクを含みます。</div>

 <section className={s.guide}><div className={s.guideHead}><small>GEAR BASICS</small><h2>まず押さえる4つ</h2><p>迷ったら「ロッド → リール → ライン → 仕掛け」の順で確認。</p></div><div className={s.basicGrid}>{basics.map(x=><article key={x.title}><span>{x.icon}</span><h3>{x.title}</h3><p>{x.text}</p></article>)}</div></section>

 <section className={s.quickTips}><div><b>PE号数の目安</b><span>ライトゲーム 0.3〜0.8号</span><span>タイラバ 0.6〜1号</span><span>青物 2〜5号</span></div><div><b>リーダーの目安</b><span>小物 1.5〜3号</span><span>タイラバ 2〜4号</span><span>青物 6〜14号</span></div><div><b>船釣りで最優先</b><span>船宿指定のオモリ号数</span><span>PE号数</span><span>仕掛けの長さ</span></div></section>

 <div className={s.sectionHead}><div><small>BY TARGET</small><h2>魚別タックル早見</h2></div><p>岸と船で道具が大きく変わる魚は分けて掲載しています。</p></div>
 <div className={s.targetGrid}>{targets.map(x=><article id={x.slug} style={{scrollMarginTop:96}} className={s.target} key={x.fish}><div className={s.targetHead}><span>{x.icon}</span><div><small>TACKLE GUIDE</small><h2>{x.fish}の釣具</h2><p>釣り方に合う道具をチェック</p></div></div>{x.routes.map(r=><div className={s.route} key={r.place+r.name}><div><b>{r.place}｜{r.name}</b><p>{r.items}</p></div><Link href={r.method}>釣り方を見る →</Link></div>)}{'amazon' in x&&x.amazon&&<a className={s.amazonCard} href={x.amazon} target="_blank" rel="sponsored noopener noreferrer"><div className={s.amazonVisual}>🎣</div><div><small>Amazon</small><b>船タチウオテンヤ用ロッド</b><span>商品を見る →</span></div></a>}<div className={s.actions}><Link href={x.href}>{x.fish}の特徴を見る →</Link></div></article>)}</div>

 <section className={s.checklist}><div><small>BEFORE YOU GO</small><h2>釣行前の持ち物チェック</h2></div><div className={s.checkGrid}><span>□ プライヤー</span><span>□ フィッシュグリップ</span><span>□ ハサミ</span><span>□ 予備リーダー</span><span>□ 予備仕掛け</span><span>□ オモリ予備</span><span>□ タオル</span><span>□ クーラー</span><span>□ 氷・保冷剤</span><span>□ ライフジャケット</span></div></section>
 </div>}
