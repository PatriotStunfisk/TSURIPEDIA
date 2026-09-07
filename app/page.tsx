import Link from 'next/link';
import {fish,methods} from '@/lib/data';
import s from './home.module.css';

export default function Home(){
  return <div className={s.home}>
    <section className={s.hero}>
      <div>
        <div className={s.kicker}>🐟 3D魚図鑑 × 釣り方 × スポット × 釣具</div>
        <h1>釣りたい魚が、<br/><em>見つかる。わかる。</em></h1>
        <p className={s.lead}>TSURIPEDIAは、魚を調べるだけで終わらない釣り百科事典。魚の特徴から釣り方、狙える場所、必要な釣具までをひとつにつなげます。</p>
        <div className={s.actions}>
          <Link className={s.primary} href="/fish">🐟 魚図鑑から探す</Link>
          <Link className={s.secondary} href="/spots">📍 釣れる場所を探す</Link>
        </div>
        <div className={s.proof}><span>✓ 初心者にもわかりやすい</span><span>✓ 親子で使える</span><span>✓ 船釣りまで対応</span></div>
      </div>
      <Link href="/fish/tachiuo" className={s.visual} aria-label="タチウオの魚図鑑を見る">
        <div className={s.modelTag}>3D MODEL対応</div>
        <div className={s.fish}><div className={s.body}></div><div className={s.tail}></div></div>
        <div className={s.fishLabel}><strong>タチウオ</strong><small>Largehead hairtail</small></div>
        <div className={s.fishFacts}><span>旬 8〜12月</span><span>大阪湾</span><span>テンヤ</span></div>
      </Link>
    </section>

    <section className={s.navGrid}>
      <Link className={s.navCard} href="/fish"><div className={s.navIcon}>🐟</div><b>魚から探す</b><span>旬・サイズ・難易度から</span></Link>
      <Link className={s.navCard} href="/methods"><div className={s.navIcon}>🎣</div><b>釣り方から探す</b><span>サビキ・テンヤ・タイラバ</span></Link>
      <Link className={s.navCard} href="/spots"><div className={s.navIcon}>📍</div><b>場所から探す</b><span>魚種・設備・家族向け情報</span></Link>
      <Link className={s.navCard} href="/gear"><div className={s.navIcon}>🧰</div><b>釣具から探す</b><span>ロッド・リール・仕掛け</span></Link>
    </section>

    <div className={s.band}>
      <section className={s.section}>
        <div className={s.head}><div><div className={s.eyebrow}>POPULAR FISH</div><h2>まずは、この魚から。</h2></div><Link href="/fish">魚図鑑をすべて見る →</Link></div>
        <div className={s.fishGrid}>{fish.slice(0,4).map(f=><Link key={f.slug} className={s.fishCard} href={`/fish/${f.slug}`}><div className={s.thumb} style={{'--tone':f.accent} as React.CSSProperties}><div className={s.thumbIcon}>🐟</div><span className={s.season}>{f.season}</span></div><div className={s.fishInfo}><h3>{f.name}</h3><p>{f.en}</p><div className={s.chips}><span>難易度 {'★'.repeat(f.difficulty)}</span><span>{f.methods[0]}</span><span>{f.areas[0]}</span></div></div></Link>)}</div>
      </section>
    </div>

    <section className={`${s.section} ${s.flow}`}>
      <div className={s.flowIntro}><div className={s.eyebrow}>ONE CONNECTED GUIDE</div><h2>「魚を知る」から<br/>「釣りに行く」まで。</h2><p>ページ同士をバラバラにせず、ひとつの魚から必要な情報へ順番につながる設計にします。</p></div>
      <div className={s.steps}>
        <Link className={s.step} href="/fish"><span className={s.stepNo}>01</span><div><b>魚を知る</b><p>旬・生態・サイズ・危険ポイント</p></div><span className={s.stepArrow}>→</span></Link>
        <Link className={s.step} href="/methods"><span className={s.stepNo}>02</span><div><b>釣り方を決める</b><p>仕掛け・誘い方・難易度を確認</p></div><span className={s.stepArrow}>→</span></Link>
        <Link className={s.step} href="/spots"><span className={s.stepNo}>03</span><div><b>釣れる場所を探す</b><p>エリア・設備・家族向け情報</p></div><span className={s.stepArrow}>→</span></Link>
        <Link className={s.step} href="/gear"><span className={s.stepNo}>04</span><div><b>必要な釣具をそろえる</b><p>ロッド・リール・ライン・仕掛け</p></div><span className={s.stepArrow}>→</span></Link>
      </div>
    </section>

    <div className={s.dark}>
      <section className={s.section}>
        <div className={s.head}><div><div className={s.eyebrow}>START FISHING</div><h2>初心者でも始めやすい釣り</h2></div><Link href="/methods">釣り方をすべて見る →</Link></div>
        <div className={s.methodGrid}>{methods.slice(0,3).map(m=><Link href="/methods" className={s.method} key={m.slug}><div className={s.methodIcon}>{m.emoji}</div><small>{m.level} ・ {m.place}</small><h3>{m.name}</h3><p>{m.desc}</p><b>{m.target}を狙う →</b></Link>)}</div>
      </section>
    </div>

    <section className={s.game}>
      <div className={s.gameCopy}><div className={s.eyebrow}>FOR KIDS</div><h2>遊んで覚える、<br/>もうひとつの魚図鑑。</h2><p>子ども向けのTSURI QUESTでは、ゲームで魚を釣りながら名前や特徴を覚えられるようにします。将来は本編の魚図鑑と連動予定です。</p><div className={s.ctaRow}><Link className={s.primary} href="/game">🎮 TSURI QUESTを遊ぶ</Link><Link className={s.secondary} href="/fish">📘 魚図鑑を見る</Link></div></div>
      <div className={s.gameBox}><div className={s.gameRod}>🎣</div><div className={s.gameFish}>🐟</div><div className={s.score}>アジをつった！ +20pt</div></div>
    </section>
  </div>
}
