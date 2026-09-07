import Link from 'next/link';
import {fish,methods} from '@/lib/data';
import FishArt from '@/components/FishArt';
import {launchFishSlugs} from '@/lib/launch-fish';
import s from './home.module.css';

export default function Home(){
  const featured=launchFishSlugs.map(slug=>fish.find(f=>f.slug===slug)!).filter(Boolean);
  return <div className={s.home}>
    <section className={s.hero}>
      <div className={s.heroShade}></div>
      <div className={s.heroContent}>
        <div className={s.kicker}>UOLINK — 魚から、釣りへつながる。</div>
        <h1>釣りが、もっと<br/>好きになる。</h1>
        <p className={s.heroSub}>魚を知り、釣り方を学び、フィールドへ。</p>
        <p className={s.lead}>UOLINKは、魚図鑑・釣り方・釣り場・釣具をひとつにつなぐ釣りの総合ガイドです。</p>
        <div className={s.actions}><Link className={s.primary} href="/fish">魚を探す</Link><Link className={s.secondary} href="/spots">釣り場を探す</Link></div>
      </div>
      <div className={s.sun}></div><div className={s.horizon}></div><div className={s.rod}></div>
    </section>

    <section className={s.navGrid}>
      <Link className={s.navCard} href="/fish"><div className={s.navIcon}>◉</div><b>魚図鑑</b><span>旬・サイズ・見分け方まで</span></Link>
      <Link className={s.navCard} href="/methods"><div className={s.navIcon}>⌁</div><b>釣り方</b><span>仕掛け・手順・コツを解説</span></Link>
      <Link className={s.navCard} href="/spots"><div className={s.navIcon}>⌖</div><b>釣りスポット</b><span>魚種・設備・エリアから探す</span></Link>
      <Link className={s.navCard} href="/gear"><div className={s.navIcon}>▣</div><b>釣具</b><span>ロッド・リール・仕掛け</span></Link>
    </section>

    <div className={s.band}>
      <section className={s.section}>
        <div className={s.head}><div><div className={s.eyebrow}>FEATURED FISH</div><h2>人気の魚図鑑</h2><p className={s.sectionLead}>まずはこの7魚種から、内容と画像を完成させています。</p></div><Link href="/fish">すべての魚図鑑を見る →</Link></div>
        <div className={s.fishGrid}>{featured.map(f=><Link key={f.slug} className={s.fishCard} href={`/fish/${f.slug}`}><div className={s.thumb} style={{'--tone':f.accent} as React.CSSProperties}><FishArt slug={f.slug} label={f.name}/><span className={s.season}>{f.season}</span></div><div className={s.fishInfo}><h3>{f.name}</h3><p>{f.en}</p><div className={s.chips}><span>{f.methods[0]}</span><span>{f.areas[0]}</span></div></div></Link>)}</div>
      </section>
    </div>

    <section className={`${s.section} ${s.flow}`}>
      <div className={s.flowIntro}><div className={s.eyebrow}>ONE CONNECTED GUIDE</div><h2>魚を調べて、<br/>そのまま釣りへ。</h2><p>図鑑で終わらず、魚ごとに釣り方・ポイント・必要な道具までつなげます。</p></div>
      <div className={s.steps}><Link className={s.step} href="/fish"><span className={s.stepNo}>01</span><div><b>魚を知る</b><p>見分け方・生態・旬・食べ方</p></div><span className={s.stepArrow}>→</span></Link><Link className={s.step} href="/methods"><span className={s.stepNo}>02</span><div><b>釣り方を選ぶ</b><p>仕掛け・タックル・基本手順</p></div><span className={s.stepArrow}>→</span></Link><Link className={s.step} href="/spots"><span className={s.stepNo}>03</span><div><b>釣り場を探す</b><p>エリア・魚種・設備から検索</p></div><span className={s.stepArrow}>→</span></Link><Link className={s.step} href="/gear"><span className={s.stepNo}>04</span><div><b>釣具をそろえる</b><p>必要な道具を迷わず選ぶ</p></div><span className={s.stepArrow}>→</span></Link></div>
    </section>

    <div className={s.dark}><section className={s.section}><div className={s.head}><div><div className={s.eyebrow}>START FISHING</div><h2>まず覚えたい釣り方</h2></div><Link href="/methods">釣り方をすべて見る →</Link></div><div className={s.methodGrid}>{methods.slice(0,3).map(m=><Link href={`/methods/${m.slug}`} className={s.method} key={m.slug}><small>{m.level} ・ {m.place}</small><h3>{m.name}</h3><p>{m.desc}</p><b>{m.target}を狙う →</b></Link>)}</div></section></div>

    <section className={s.game}><div className={s.gameCopy}><div className={s.eyebrow}>FOR KIDS</div><h2>遊んで覚える、<br/>UOLINK QUEST。</h2><p>ゲームは図鑑とは少し違う、デフォルメした魚で気軽に遊べる方向にします。リアルな魚体は図鑑、かわいさはゲームに分けます。</p><div className={s.ctaRow}><Link className={s.primary} href="/game">ゲームで遊ぶ</Link><Link className={s.secondary} href="/fish">魚図鑑を見る</Link></div></div><div className={s.gameBox}><div className={s.gameWater}></div><div className={s.gameCopyMark}>UOLINK<br/><b>QUEST</b></div><div className={s.score}>つって、あつめて、魚を知ろう。</div></div></section>
  </div>
}
