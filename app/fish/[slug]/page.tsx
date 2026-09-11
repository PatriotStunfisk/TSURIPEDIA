import {notFound} from 'next/navigation';
import Link from 'next/link';
import FishVisual from '@/components/FishVisual';
import FishActions from '@/components/FishActions';
import TachiuoMedia from '@/components/TachiuoMedia';
import {fish,getFish} from '@/lib/data';
import {fishDetails} from '@/lib/fish-details';
import t from './tachiuo.module.css';

export function generateStaticParams(){return fish.map(f=>({slug:f.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const f=getFish(slug);
 if(!f)return {title:'魚図鑑'};
 return {title:`${f.name}の釣り方・旬・特徴｜魚図鑑`,description:`${f.name}の特徴、生態、釣れる時期、代表的な釣り方、食べ方をまとめて紹介。${f.desc}`};
}

const methodHref:Record<string,string>={
 'テンヤ':'/methods/tachiuo-tenya','船テンヤ':'/methods/tachiuo-tenya','サビキ':'/methods/sabiki','タイラバ':'/methods/tai-rubber','ノマセ':'/methods/nomase',
 'ジギング':'/methods','ウキ釣り':'/methods','引き釣り':'/methods','アジング':'/methods','船釣り':'/methods','ひとつテンヤ':'/methods','コマセ':'/methods','ちょい投げ':'/methods','船キス':'/methods','胴突き':'/methods','穴釣り':'/methods','ルアー':'/methods','泳がせ':'/methods','フカセ':'/methods','落とし込み':'/methods','ダンゴ':'/methods','メバリング':'/methods','エギング':'/methods','ヤエン':'/methods','ティップラン':'/methods','タコエギ':'/methods','キャスティング':'/methods','ブレードジグ':'/methods','エサ釣り':'/methods','テンカラ':'/methods','フライ':'/methods','友釣り':'/methods','毛バリ':'/methods','コロガシ':'/methods','ぶっこみ釣り':'/methods'
};

const difficulty=(n:number)=>'★'.repeat(n)+'☆'.repeat(5-n);
const dangerStars=(danger:string)=>danger==='低'?'★☆☆☆☆':danger.includes('歯')?'★★★☆☆':'★★☆☆☆';

const dishImages:Record<string,Record<string,string>>={
 tachiuo:{'刺身':'/images/fish/tachiuo-sashimi.jpg','塩焼き':'/images/fish/tachiuo-shioyaki.jpg','炙り':'/images/fish/tachiuo-aburi.jpg','天ぷら':'/images/fish/tachiuo-tempura-v4.jpg?v=20260908-4'},
 aji:{'刺身':'/images/fish/aji-sashimi.png','アジフライ':'/images/fish/aji-fry.png','なめろう':'/images/fish/aji-namero.png','煮付け':'/images/fish/aji-nitsuke.png'},
 madai:{'刺身':'/images/fish/madai-sashimi.jpg','炙り':'/images/fish/madai-aburi.jpg','鯛めし':'/images/fish/madai-taimeshi.jpg','潮汁':'/images/fish/madai-ushiojiru.jpg'}
};

export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const f=getFish(slug);if(!f)notFound();
 const d=fishDetails[slug];const months=Array.from({length:12},(_,i)=>i+1);
 const aliases=d?.aliases?.join('・')||'—';
 const cooking=(d?.cooking||[]).slice(0,4);
 const images=dishImages[slug]||{};
 return <div className={t.page}><section className={t.hero}>
  <div className={t.crumb}><Link href="/">ホーム</Link>　›　<Link href="/fish">魚図鑑</Link>　›　{f.name}</div>
  <div className={t.top}>
   <aside className={t.summary}>
    <h1>{f.name}</h1><div className={t.en}>{f.en}</div>
    <div className={t.facts}>
     {d&&<div className={t.row}><span>分類</span><b>{d.family} {d.genus}</b></div>}
     <div className={t.row}><span>学名</span><b><i>{f.scientific}</i></b></div>
     {d&&<div className={t.row}><span>別名</span><b>{aliases}</b></div>}
     <div className={t.row}><span>体長</span><b>{f.size}</b></div><div className={t.row}><span>旬</span><b>{f.season}</b></div>
     <div className={t.row}><span>難易度</span><b className={t.stars}>{difficulty(f.difficulty)}</b></div><div className={t.row}><span>危険度</span><b className={t.stars}>{dangerStars(f.danger)}</b></div>
    </div>
    <div className={t.tags}><span>{f.beginner?'初心者にもおすすめ':'経験者向け'}</span><span>{f.areas[0]}</span><span>{f.methods[0]}</span></div>
   </aside>
   {slug==='tachiuo'?<TachiuoMedia/>:<div className={t.stage}><div className={t.stageTabs}><span className={t.active}>魚体画像</span></div><div className={t.viewerWrap}><FishVisual slug={slug} name={f.name}/></div></div>}
   <FishActions slug={slug} name={f.name} className={t.tools}/>
  </div>

  <div className={t.cards}>
   <article className={t.card}><h3>▣ 特徴</h3><p>{f.desc}{d?` ${d.body}`:''}</p></article>
   <article className={t.card}><h3>🐟 生態</h3><div className={t.list}><div><span>生息域</span><b>{d?.habitat||f.areas.join('・')}</b></div><div><span>水深</span><b>{f.depth}</b></div>{d&&<><div><span>エサ</span><b>{d.diet}</b></div><div><span>行動</span><b>{d.behavior}</b></div><div><span>寿命</span><b>{d.lifespan}</b></div></>}</div></article>
   <article className={t.card}><h3>🎣 釣り方</h3><div className={t.methods}>{f.methods.map(m=><Link href={methodHref[m]||'/methods'} key={m}>{m} <span>›</span></Link>)}</div></article>
   <article className={t.card}><h3>◷ 釣れる時期</h3><div className={t.months}>{months.map(m=><span key={m} className={f.months.includes(m)?t.on:''}>{m}月</span>)}</div>{d&&<p>{d.seasonNote}</p>}</article>
  </div>

  {d&&<section className={t.foodSection}><div className={t.foodHead}><div><h2>{f.name}をおいしく食べる</h2></div><p>{d.taste}</p></div>{cooking.length>0&&<div className={t.dishGrid}>{cooking.map(name=><article key={name} className={t.dishCard}>{images[name]&&<div className={t.dishPhoto}><img src={images[name]} alt={`${f.name}の${name}`}/></div>}<div><b>{name}</b><p>{name}で{f.name}の持ち味を楽しめます。</p></div></article>)}</div>}</section>}
 </section>
 <section className={t.cta}><div><h2>{f.name}を釣ってみよう！</h2><p>釣り場・釣り方・必要な道具をUOLINKで続けて確認できます。</p></div><Link href="/spots">📍 おすすめの釣り場</Link><Link href="/gear">🧰 必要な釣具</Link><Link href={methodHref[f.methods[0]]||'/methods'}>🎣 釣り方を見る</Link><Link className={t.game} href="/game">🎮 ゲームで遊ぶ</Link></section>
 </div>
}
