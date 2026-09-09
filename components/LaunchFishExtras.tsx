import Link from 'next/link';
import TachiuoSchool from './TachiuoSchool';
import {launchFish,isLaunchFish} from '@/lib/launch-fish';

export default function LaunchFishExtras({slug,name}:{slug:string;name:string}){
  if(!isLaunchFish(slug))return null;
  const x=launchFish[slug];
  return <>
    {slug==='tachiuo'&&<TachiuoSchool/>}
    {slug==='aji'&&<>
      <section className="detailGrid">
        <article><span>AJI BASICS</span><h2>マアジを狙うなら、まずここ</h2><h3>サビキ</h3><p>港や堤防で群れを探す定番。表層だけでなく中層〜底付近まで棚を変え、周囲で釣れている深さに合わせるのが近道です。</p><h3>アジング</h3><p>小型ジグヘッドとワームで狙うルアー釣り。常夜灯周りや潮が動く場所で、レンジを刻みながら反応する層を探します。</p><h3>船のアジ釣り</h3><p>良型を狙いやすく、30〜40cm級が混じることもあります。船宿指定の仕掛け・オモリ・餌を合わせ、底取りと手返しを優先します。</p></article>
        <aside><span>GOOD TO KNOW</span><h2>釣果を伸ばす3つの視点</h2><h3>① 棚</h3><p>アジは群れのいる水深を外すと釣果が落ちやすい魚。釣れた深さを覚えて同じ棚へ素早く戻します。</p><h3>② 時合い</h3><p>朝夕や潮の動き始めなど、短時間で活性が上がることがあります。時合いでは仕掛け交換や餌付けを手早く。</p><h3>③ 鮮度</h3><p>持ち帰るなら早めに冷やすことが重要。食べる予定なら釣った直後からクーラーで低温を保ちます。</p></aside>
      </section>
      <section className="detailGrid">
        <article><span>TABLE GUIDE</span><h2>マアジは食べ方の幅も広い</h2><p>刺身・たたき・なめろう・フライ・南蛮漬けまで使いやすい魚です。脂の乗った良型は生食、数釣りした小型は南蛮漬けやフライにも向きます。</p><div className="chips"><span>刺身</span><span>たたき</span><span>なめろう</span><span>アジフライ</span><span>南蛮漬け</span></div></article>
        <aside><span>IDENTIFICATION TIP</span><h2>「ゼイゴ」を見て覚える</h2><p>尾びれの付け根付近に並ぶ硬いウロコ「ゼイゴ」はアジ類を覚える代表的なポイント。体側の線や体形と合わせて観察すると、図鑑を見る楽しさが増します。</p><Link href="/methods/sabiki" className="gearCta">サビキ釣りを詳しく見る →</Link></aside>
      </section>
    </>}
    <section className="detailGrid">
      <article><span>IDENTIFICATION</span><h2>見分けるポイント</h2>{x.identify.map((p,i)=><div className="methodLink" key={p}><strong>{String(i+1).padStart(2,'0')}</strong><div><b>{p}</b></div></div>)}</article>
      <aside><span>FISHING ROUTE</span><h2>この魚を狙う釣り方</h2>{x.methodLinks.map(m=><Link href={m.href} className="methodLink" key={m.label}><div><b>{m.label}</b><small>仕掛け・手順・コツを見る</small></div><em>→</em></Link>)}<h3>主なエリア</h3><p>{x.spotFocus}</p></aside>
    </section>
    <section className="detailGrid">
      <article><span>RELATED FISH</span><h2>似ている魚・一緒に覚えたい魚</h2><div className="chips">{x.related.map(v=><span key={v}>{v}</span>)}</div></article>
      <aside><span>UOLINK GUIDE</span><h2>{x.catchPhrase}</h2><p>魚の特徴を知ったら、次は釣り方・釣り場・必要な釣具へ。UOLINKでは図鑑情報を実釣までつなげます。</p><Link href="/spots" className="gearCta">釣れる場所を探す →</Link></aside>
    </section>
  </>
}
