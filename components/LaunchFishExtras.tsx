import Link from 'next/link';
import TachiuoSchool from './TachiuoSchool';
import {getFishLaunch} from '@/lib/fish-registry';

export default function LaunchFishExtras({slug,name}:{slug:string;name:string}){
  const x=getFishLaunch(slug);
  if(!x)return null;
  return <>
    {slug==='tachiuo'&&<TachiuoSchool/>}
    {slug==='aji'&&<>
      <section className="detailGrid">
        <article><span>HOW TO CATCH</span><h2>マアジの釣り方を選ぶ</h2><p>マアジは岸からも船からも狙えます。初めてならサビキ、ルアーで楽しむならアジング、良型を効率よく狙うなら船釣りが基本です。</p>
          <div className="methodLink"><strong>01</strong><div><b>サビキ釣り</b><small>堤防・港／小〜中型／難易度 ★☆☆</small></div></div><p>コマセで群れを寄せ、疑似餌の付いた複数針で狙います。足元から始め、反応がなければ中層〜底まで棚を変えます。家族連れや初めての一匹に最も向く釣り方です。</p>
          <div className="methodLink"><strong>02</strong><div><b>アジング</b><small>港・常夜灯周り／小〜中型／難易度 ★★☆</small></div></div><p>1g前後を中心とした軽いジグヘッドとワームで狙うルアー釣り。表層・中層・底を順に探り、アタリが出たレンジを繰り返します。夜は常夜灯の明暗や潮のヨレも有力です。</p>
          <div className="methodLink"><strong>03</strong><div><b>船のアジ釣り</b><small>沖・深場／中〜大型／難易度 ★★☆</small></div></div><p>胴突きやサビキなど船宿指定の仕掛けで狙います。良型が期待できる一方、オモリ号数や仕掛けは船ごとに合わせるのが基本。着底後すぐ棚を取り、釣れた水深へ正確に戻すことが重要です。</p>
        </article>
        <aside><span>QUICK COMPARE</span><h2>どれを選べばいい？</h2><h3>とにかく一匹釣りたい</h3><p><b>→ サビキ。</b> 群れが入っている堤防なら最短ルートです。</p><h3>道具を軽くしてゲーム性を楽しみたい</h3><p><b>→ アジング。</b> レンジとアクションを自分で組み立てます。</p><h3>30cm級以上の良型を狙いたい</h3><p><b>→ 船釣り。</b> 沖のポイントを直接狙えるのが強みです。</p><Link href="/methods/sabiki" className="gearCta">サビキ釣りを詳しく見る →</Link></aside>
      </section>
      <section className="detailGrid">
        <article><span>KEY TECHNIQUE</span><h2>共通する最大のコツは「棚」</h2><h3>① まず底を基準にする</h3><p>場所によって違いますが、反応が分からないときは底付近から探り、少しずつ上の層へ。周囲で釣れた人がいれば、その棚が最重要情報です。</p><h3>② 釣れた水深を再現する</h3><p>一匹釣れたら「何m」「何巻き」「着底から何回巻いたか」を覚え、すぐ同じ棚へ戻します。群れがいる間の手返しが数を伸ばします。</p><h3>③ 朝夕だけに決めつけない</h3><p>朝夕は有力ですが、潮の動きや群れの回遊で日中にも時合いがあります。反応が止まったら棚を固定せず探し直します。</p></article>
        <aside><span>TACKLE GUIDE</span><h2>釣り方別の基本タックル</h2><h3>サビキ</h3><p>磯竿・万能竿＋スピニングリール。サビキ仕掛け、コマセカゴ、アミエビを用意。</p><h3>アジング</h3><p>軽量アジングロッド＋小型スピニング。細いラインにジグヘッド＋ワームが基本。</p><h3>船</h3><p>船宿指定の竿・リール・仕掛け・オモリを優先。地域や水深で仕様差が大きいため、予約時の確認が確実です。</p><Link href="/gear" className="gearCta">アジ釣りの道具を見る →</Link></aside>
      </section>
      <section className="detailGrid">
        <article style={{gridColumn:'1 / -1'}}><span>IDENTIFICATION TIP</span><h2>「ゼイゴ」を見て覚える</h2><p>尾びれの付け根付近に並ぶ硬いウロコ「ゼイゴ」はアジ類を覚える代表的なポイント。体側の線や体形と合わせて観察すると、図鑑を見る楽しさが増します。</p></article>
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
