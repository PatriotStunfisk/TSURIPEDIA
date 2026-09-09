import {notFound} from 'next/navigation';
import Link from 'next/link';
import FishArt from '@/components/FishArt';
import FishVisual from '@/components/FishVisual';
import LaunchFishExtras from '@/components/LaunchFishExtras';
import TachiuoMedia from '@/components/TachiuoMedia';
import {fish,getFish} from '@/lib/data';
import {fishDetails} from '@/lib/fish-details';
import t from './tachiuo.module.css';

export function generateStaticParams(){return fish.map(f=>({slug:f.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const f=getFish(slug);
 if(!f)return {title:'魚図鑑'};
 if(slug==='aji')return {title:'マアジの釣り方・旬・見分け方｜魚図鑑',description:'マアジの特徴、旬、ゼイゴの見分け方、サビキ・アジング・船釣りの基本、食べ方までまとめて紹介。'};
 return {title:`${f.name}｜魚図鑑`,description:f.desc};
}

function TachiuoPage(){
 const f=getFish('tachiuo')!;const d=fishDetails.tachiuo;const months=Array.from({length:12},(_,i)=>i+1);
 const dishes=[
  {name:'刺身',src:'/images/fish/tachiuo-sashimi.jpg',desc:'銀皮を生かした上品な白身。'},
  {name:'塩焼き',src:'/images/fish/tachiuo-shioyaki.jpg',desc:'皮目は香ばしく、身はふっくら。'},
  {name:'炙り',src:'/images/fish/tachiuo-aburi.jpg',desc:'皮を炙ると脂の香りが立つ。'},
  {name:'天ぷら',src:'/images/fish/tachiuo-tempura.jpg',desc:'ふわっと軽い食感を楽しめる。'}
 ];
 return <div className={t.page}><section className={t.hero}>
  <div className={t.crumb}><Link href="/">ホーム</Link>　›　<Link href="/fish">魚図鑑</Link>　›　タチウオ</div>
  <div className={t.top}><aside className={t.summary}><h1>タチウオ</h1><div className={t.en}>Largehead hairtail</div><button className={t.sound}>🔊 魚の解説を聞く</button><div className={t.facts}><div className={t.row}><span>分類</span><b>{d.family} {d.genus}</b></div><div className={t.row}><span>学名</span><b><i>{f.scientific}</i></b></div><div className={t.row}><span>別名</span><b>{d.aliases.join('・')}</b></div><div className={t.row}><span>体長</span><b>{f.size}</b></div><div className={t.row}><span>旬</span><b>{f.season}</b></div><div className={t.row}><span>難易度</span><b className={t.stars}>★★★☆☆</b></div><div className={t.row}><span>危険度</span><b className={t.stars}>★★★☆☆</b></div></div><div className={t.tags}><span>食べて美味しい</span><span>大阪湾の人気魚</span><span>船釣り対応</span></div></aside>
  <TachiuoMedia/><div className={t.tools}><span>♡<small>お気に入り</small></span><span>🎣<small>釣った！</small></span><span>↗<small>シェア</small></span><span>▣<small>保存</small></span></div></div>
  <div className={t.cards}><article className={t.card}><h3>▣ 特徴</h3><div className={t.feature}><p>{f.desc} {d.body}</p><div className={t.dangerArt}></div></div></article><article className={t.card}><h3>🐟 生態</h3><div className={t.list}><div><span>生息域</span><b>{d.habitat}</b></div><div><span>水深</span><b>{f.depth}</b></div><div><span>エサ</span><b>{d.diet}</b></div><div><span>行動</span><b>{d.behavior}</b></div><div><span>寿命</span><b>{d.lifespan}</b></div></div></article><article className={t.card}><h3>🎣 釣り方</h3><div className={t.methods}><Link href="/methods/tachiuo-tenya">テンヤ釣り <span>›</span></Link><Link href="/methods">ジギング <span>›</span></Link><Link href="/methods">ウキ釣り <span>›</span></Link><Link href="/methods">引き釣り <span>›</span></Link></div></article><article className={t.card}><h3>◷ 釣れる時期</h3><div className={t.months}>{months.map(m=><span key={m} className={f.months.includes(m)?t.on:''}>{m}月</span>)}</div></article></div>
  <section className={t.foodSection}><div className={t.foodHead}><div><span>TABLE GUIDE</span><h2>タチウオをおいしく食べる</h2></div><p>{d.taste} クセが少なく、皮目の香りとやわらかな身質を生かす料理がよく合います。</p></div><div className={t.dishGrid}>{dishes.map(x=><article key={x.name} className={t.dishCard}><div className={t.dishPhoto}><img src={x.src} alt={`タチウオの${x.name}`}/></div><div><b>{x.name}</b><p>{x.desc}</p></div></article>)}</div></section>
 </section><section className={t.cta}><div><h2>この魚を釣ってみよう！</h2><p>釣り場・釣り方・釣具をUOLINKでそのまま確認できます。</p></div><Link href="/spots">📍 おすすめの釣り場</Link><Link href="/gear">🧰 必要な釣具</Link><Link href="/methods/tachiuo-tenya">🎣 テンヤの詳細</Link><Link className={t.game} href="/game">🎮 ゲームで練習</Link></section><section className={t.lightSection}><LaunchFishExtras slug="tachiuo" name="タチウオ"/></section></div>
}

function AjiPage(){
 const f=getFish('aji')!;const d=fishDetails.aji;const months=Array.from({length:12},(_,i)=>i+1);
 const dishes=[
  {name:'刺身',src:'/images/fish/aji-sashimi.png',desc:'脂の乗った良型は甘みと旨味が強く、生食で魅力が出やすい。'},
  {name:'アジフライ',src:'/images/fish/aji-fry.png',desc:'ふっくらした身と香ばしい衣の相性が良い王道料理。'},
  {name:'なめろう',src:'/images/fish/aji-namero.png',desc:'味噌と薬味でたたく漁師料理。鮮度の良いアジの旨味を濃厚に楽しめる。'},
  {name:'煮付け',src:'/images/fish/aji-nitsuke.png',desc:'しょうがを効かせて甘辛く。ご飯にも合う家庭料理の定番。'}
 ];
 return <div className={t.page}><section className={t.hero}>
  <div className={t.crumb}><Link href="/">ホーム</Link>　›　<Link href="/fish">魚図鑑</Link>　›　マアジ</div>
  <div className={t.top}><aside className={t.summary}><h1>マアジ</h1><div className={t.en}>Japanese jack mackerel</div><button className={t.sound}>🔊 魚の解説を聞く</button><div className={t.facts}><div className={t.row}><span>分類</span><b>{d.family} {d.genus}</b></div><div className={t.row}><span>学名</span><b><i>{f.scientific}</i></b></div><div className={t.row}><span>別名</span><b>{d.aliases.join('・')}</b></div><div className={t.row}><span>体長</span><b>{f.size}</b></div><div className={t.row}><span>旬</span><b>{f.season}</b></div><div className={t.row}><span>難易度</span><b className={t.stars}>★★☆☆☆</b></div><div className={t.row}><span>危険度</span><b className={t.stars}>★☆☆☆☆</b></div></div><div className={t.tags}><span>初心者におすすめ</span><span>サビキの定番</span><span>食べて美味しい</span></div></aside>
  <div className={t.stage}><div className={t.stageTabs}><span className={t.active}>▧ 2D画像</span><span>3D準備中</span></div><div className={t.viewerWrap}><FishVisual slug="aji" name="マアジ"/></div></div><div className={t.tools}><span>♡<small>お気に入り</small></span><span>🎣<small>釣った！</small></span><span>↗<small>シェア</small></span><span>▣<small>保存</small></span></div></div>
  <div className={t.cards}><article className={t.card}><h3>▣ 特徴</h3><p>{f.desc} {d.body}</p><p><b>見分けるポイント：</b>尾の付け根付近に並ぶ硬いウロコ「ゼイゴ」が代表的です。</p></article><article className={t.card}><h3>🐟 生態</h3><div className={t.list}><div><span>生息域</span><b>{d.habitat}</b></div><div><span>水深</span><b>{f.depth}</b></div><div><span>エサ</span><b>{d.diet}</b></div><div><span>行動</span><b>{d.behavior}</b></div><div><span>寿命</span><b>{d.lifespan}</b></div></div></article><article className={t.card}><h3>🎣 釣り方</h3><div className={t.methods}><Link href="/methods/sabiki">サビキ釣り <span>›</span></Link><Link href="/methods">アジング <span>›</span></Link><Link href="/methods">船の胴突き <span>›</span></Link></div></article><article className={t.card}><h3>◷ 釣れる時期</h3><div className={t.months}>{months.map(m=><span key={m} className={f.months.includes(m)?t.on:''}>{m}月</span>)}</div><p>{d.seasonNote}</p></article></div>
  <section className={t.foodSection}><div className={t.foodHead}><div><span>TABLE GUIDE</span><h2>マアジをおいしく食べる</h2></div><p>{d.taste} サイズに合わせて生食から揚げ物まで幅広く楽しめます。</p></div><div className={t.dishGrid}>{dishes.map(x=><article key={x.name} className={t.dishCard}><div className={t.dishPhoto}><img src={x.src} alt={`マアジの${x.name}`}/></div><div><b>{x.name}</b><p>{x.desc}</p></div></article>)}</div></section>
 </section><section className={t.cta}><div><h2>マアジを釣ってみよう！</h2><p>初めてならサビキから。群れのいる棚を見つければ数釣りも狙えます。</p></div><Link href="/spots">📍 おすすめの釣り場</Link><Link href="/gear">🧰 必要な釣具</Link><Link href="/methods/sabiki">🎣 サビキの詳細</Link><Link className={t.game} href="/game">🎮 ゲームで練習</Link></section><section className={t.lightSection}><LaunchFishExtras slug="aji" name="マアジ"/></section></div>
}

function MadaiPage(){
 const f=getFish('madai')!;const d=fishDetails.madai;const months=Array.from({length:12},(_,i)=>i+1);
 const dishes=[
  {name:'刺身',desc:'透明感のある白身と上品な甘みを楽しめる王道。'},
  {name:'炙り',desc:'皮目を香ばしく炙ると、旨味と香りが一段と引き立つ。'},
  {name:'鯛めし',desc:'骨やアラの出汁まで使える、マダイらしい定番料理。'},
  {name:'潮汁',desc:'アラから出る上品な出汁をシンプルに味わえる。'}
 ];
 return <div className={t.page}><section className={t.hero}>
  <div className={t.crumb}><Link href="/">ホーム</Link>　›　<Link href="/fish">魚図鑑</Link>　›　マダイ</div>
  <div className={t.top}><aside className={t.summary}><h1>マダイ</h1><div className={t.en}>Red seabream</div><button className={t.sound}>🔊 魚の解説を聞く</button><div className={t.facts}><div className={t.row}><span>分類</span><b>{d.family} {d.genus}</b></div><div className={t.row}><span>学名</span><b><i>{f.scientific}</i></b></div><div className={t.row}><span>別名</span><b>{d.aliases.join('・')}</b></div><div className={t.row}><span>体長</span><b>{f.size}</b></div><div className={t.row}><span>旬</span><b>{f.season}</b></div><div className={t.row}><span>難易度</span><b className={t.stars}>★★★☆☆</b></div><div className={t.row}><span>危険度</span><b className={t.stars}>★☆☆☆☆</b></div></div><div className={t.tags}><span>祝い魚</span><span>明石の人気魚</span><span>タイラバ入門</span></div></aside>
  <div className={t.stage}><div className={t.stageTabs}><span className={t.active}>▧ 2D画像</span><span>3D準備中</span></div><div className={t.viewerWrap}><FishVisual slug="madai" name="マダイ"/></div></div><div className={t.tools}><span>♡<small>お気に入り</small></span><span>🎣<small>釣った！</small></span><span>↗<small>シェア</small></span><span>▣<small>保存</small></span></div></div>
  <div className={t.cards}><article className={t.card}><h3>▣ 特徴</h3><p>{f.desc} {d.body}</p></article><article className={t.card}><h3>🐟 生態</h3><div className={t.list}><div><span>生息域</span><b>{d.habitat}</b></div><div><span>水深</span><b>{f.depth}</b></div><div><span>エサ</span><b>{d.diet}</b></div><div><span>行動</span><b>{d.behavior}</b></div><div><span>寿命</span><b>{d.lifespan}</b></div></div></article><article className={t.card}><h3>🎣 釣り方</h3><div className={t.methods}><Link href="/methods/tai-rubber">タイラバ <span>›</span></Link><Link href="/methods">ひとつテンヤ <span>›</span></Link><Link href="/methods">コマセ釣り <span>›</span></Link></div></article><article className={t.card}><h3>◷ 釣れる時期</h3><div className={t.months}>{months.map(m=><span key={m} className={f.months.includes(m)?t.on:''}>{m}月</span>)}</div></article></div>
  <section className={t.foodSection}><div className={t.foodHead}><div><span>TABLE GUIDE</span><h2>マダイをおいしく食べる</h2></div><p>{d.taste} 身だけでなくアラからも良い出汁が出るため、一尾まるごと楽しめます。</p></div><div className={t.dishGrid}>{dishes.map(x=><article key={x.name} className={t.dishCard}><div><b>{x.name}</b><p>{x.desc}</p></div></article>)}</div></section>
 </section><section className={t.cta}><div><h2>マダイを釣ってみよう！</h2><p>まずはタイラバから。釣り場・釣り方・釣具をそのまま確認できます。</p></div><Link href="/spots">📍 おすすめの釣り場</Link><Link href="/gear">🧰 必要な釣具</Link><Link href="/methods/tai-rubber">🎣 タイラバの詳細</Link><Link className={t.game} href="/game">🎮 ゲームで練習</Link></section><section className={t.lightSection}><LaunchFishExtras slug="madai" name="マダイ"/></section></div>
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const f=getFish(slug);if(!f)notFound();if(slug==='tachiuo')return <TachiuoPage/>;if(slug==='aji')return <AjiPage/>;if(slug==='madai')return <MadaiPage/>;const d=fishDetails[slug];
 return <div className="section pageTop"><div className="breadcrumb"><Link href="/">ホーム</Link> / <Link href="/fish">魚図鑑</Link> / {f.name}</div><section className="fishDetailHero"><div className="fishTitle"><span>FISH No.{String(fish.indexOf(f)+1).padStart(3,'0')}</span><h1>{f.name}</h1><p>{f.en}</p><i>{f.scientific}</i><div className="chips"><span>旬 {f.season}</span><span>{'★'.repeat(f.difficulty)}{'☆'.repeat(5-f.difficulty)}</span><span>⚠ {f.danger}</span></div></div><div className="fallbackViewer"><FishArt slug={f.slug} label={`${f.name} 2D illustration`}/><small>2D図鑑イラスト</small></div></section>
 <section className="factsGrid"><article><span>サイズ</span><b>{f.size}</b></article><article><span>水深</span><b>{f.depth}</b></article><article><span>主なエリア</span><b>{f.areas.join('・')}</b></article><article><span>おすすめ</span><b>{f.beginner?'初心者にもおすすめ':'経験者向け'}</b></article></section>
 <section className="detailGrid"><article><span>ABOUT</span><h2>{f.name}ってどんな魚？</h2><p>{f.desc}</p>{d&&<><h3>体の特徴</h3><p>{d.body}</p><h3>釣れる時期</h3><p>{d.seasonNote}</p></>}<div className="months">{Array.from({length:12},(_,i)=>i+1).map(m=><b className={f.months.includes(m)?'on':''} key={m}>{m}月</b>)}</div></article><aside><span>HOW TO CATCH</span><h2>この魚を釣る</h2>{f.methods.map((m,i)=><Link href="/methods" className="methodLink" key={m}><strong>0{i+1}</strong><div><b>{m}</b><small>釣り方・仕掛けを見る</small></div><em>→</em></Link>)}<Link href="/gear" className="gearCta">必要な釣具をまとめて見る →</Link></aside></section>
 {d&&<><section className="detailGrid"><article><span>ECOLOGY</span><h2>生態と暮らし</h2><h3>分類</h3><p>{d.family}・{d.genus}</p><h3>生息場所</h3><p>{d.habitat}</p><h3>エサ</h3><p>{d.diet}</p><h3>行動</h3><p>{d.behavior}</p><h3>寿命</h3><p>{d.lifespan}</p></article><aside><span>BEGINNER GUIDE</span><h2>初めて狙うなら</h2><p>{d.beginnerTip}</p><h3>釣り方のポイント</h3><p>{d.fishing}</p><h3>安全</h3><p>{d.safety}</p></aside></section><section className="detailGrid"><article><span>TABLE</span><h2>食べて楽しむ</h2><p>{d.taste}</p><div className="chips">{d.cooking.map(x=><span key={x}>{x}</span>)}</div></article><aside><span>TRIVIA</span><h2>魚の豆知識</h2><p>{d.trivia}</p>{d.aliases.length>0&&<><h3>別名</h3><p>{d.aliases.join('・')}</p></>}</aside></section></>}
 <LaunchFishExtras slug={slug} name={f.name}/><section className="nextActions"><div><span>NEXT STEP</span><h2>次は、ほんものを釣りに行こう。</h2></div><Link href="/spots">📍 釣れる場所を探す</Link><Link href="/gear">🎣 必要な釣具を見る</Link></section></div>
}
