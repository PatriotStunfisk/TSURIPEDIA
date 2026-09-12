import Link from 'next/link';
import {methods} from '@/lib/data';
import {getFishProfile} from '@/lib/fish-registry';
import {allGuides} from '@/lib/all-guides';
import FishVisual from '@/components/FishVisual';
import {launchFishSlugs} from '@/lib/launch-fish';
import s from './home.module.css';

const quickLinks=[
  {href:'/fish',icon:'◉',label:'魚図鑑'},
  {href:'/methods',icon:'⌁',label:'釣り方'},
  {href:'/guide',icon:'?',label:'GUIDE'},
  {href:'/spots',icon:'⌖',label:'釣り場'},
  {href:'/gear',icon:'▣',label:'釣具'},
  {href:'/cooking',icon:'◇',label:'魚料理'}
];

export default function Home(){
  const featured=launchFishSlugs.map(slug=>getFishProfile(slug)!).filter(Boolean);
  const guidePicks=allGuides.slice(0,6);
  return <div className={s.home}>
    <section className={s.hero}>
      <div className={s.heroShade}></div>
      <div className={s.heroContent}>
        <div className={s.kicker}>UOLINK — 魚から、釣りへつながる。</div>
        <h1>釣りが、もっと<br/>好きになる。</h1>
        <p className={s.heroSub}>魚を知り、釣り方を学び、フィールドへ。</p>
        <p className={s.lead}>UOLINKは、魚図鑑・釣り方・釣り場・釣具・魚料理をひとつにつなぐ釣りの総合ガイドです。</p>
        <div className={s.actions}><Link className={s.primary} href="/fish">魚を探す</Link><Link className={s.secondary} href="/guide">釣りGUIDEを見る</Link></div>
        <nav className={s.heroQuick}>{quickLinks.map(x=><Link href={x.href} key={x.href}><span>{x.icon}</span><b>{x.label}</b></Link>)}</nav>
      </div>
    </section>

    <section className={s.navGrid}>
      <Link className={s.navCard} href="/fish"><div className={s.navIcon}>◉</div><b>魚図鑑</b><span>旬・サイズ・見分け方まで</span></Link>
      <Link className={s.navCard} href="/methods"><div className={s.navIcon}>⌁</div><b>釣り方</b><span>仕掛け・手順・コツを解説</span></Link>
      <Link className={s.navCard} href="/guide"><div className={s.navIcon}>?</div><b>釣りGUIDE</b><span>何号？何g？いつ釣れる？</span></Link>
      <Link className={s.navCard} href="/spots"><div className={s.navIcon}>⌖</div><b>釣りスポット</b><span>魚種・設備・エリアから探す</span></Link>
      <Link className={s.navCard} href="/gear"><div className={s.navIcon}>▣</div><b>釣具</b><span>ロッド・リール・仕掛け</span></Link>
      <Link className={s.navCard} href="/cooking"><div className={s.navIcon}>◇</div><b>魚料理</b><span>捌き方・下処理・レシピ</span></Link>
    </section>

    <div className={s.band} style={{background:'#e9f5fb'}}>
      <section className={s.section}>
        <div className={s.head}><div><div className={s.eyebrow}>FEATURED FISH</div><h2>人気の魚図鑑</h2></div><Link href="/fish">すべての魚図鑑を見る →</Link></div>
        <div className={s.fishGrid}>{featured.map(f=><Link key={f.slug} className={s.fishCard} href={`/fish/${f.slug}`}><div className={s.thumb} style={{'--tone':f.accent} as React.CSSProperties}><FishVisual imageSrc={f.media?.image} slug={f.slug} name={f.name}/><span className={s.season}>{f.season}</span></div><div className={s.fishInfo}><h3>{f.name}</h3><p>{f.en}</p><div className={s.chips}><span>{f.methods[0]}</span><span>{f.areas[0]}</span></div></div></Link>)}</div>
      </section>
    </div>

    <section className={s.section}>
      <div className={s.head}><div><div className={s.eyebrow}>SEARCH GUIDE</div><h2>釣行前によく調べる疑問</h2></div><Link href="/guide">釣りGUIDEをすべて見る →</Link></div>
      <div className={s.guideGrid}>{guidePicks.map(a=><Link key={a.slug} href={`/guide/${a.slug}`} className={s.guideCard}><small>{a.query}</small><h3>{a.title}</h3><p>{a.answer}</p><b>答えを見る →</b></Link>)}</div>
    </section>

    <section className={`${s.section} ${s.flow}`}>
      <div className={s.flowIntro}><div className={s.eyebrow}>ONE CONNECTED GUIDE</div><h2>疑問を解いて、<br/>そのまま釣りへ。</h2><p>GUIDEで数字や選び方を確認し、魚図鑑・釣り方・釣具・料理までつなげます。</p></div>
      <div className={s.steps}><Link className={s.step} href="/guide"><span className={s.stepNo}>01</span><div><b>疑問を解く</b><p>何号？何g？いつ釣れる？</p></div><span className={s.stepArrow}>→</span></Link><Link className={s.step} href="/fish"><span className={s.stepNo}>02</span><div><b>魚を知る</b><p>見分け方・生態・旬・食べ方</p></div><span className={s.stepArrow}>→</span></Link><Link className={s.step} href="/methods"><span className={s.stepNo}>03</span><div><b>釣り方を選ぶ</b><p>仕掛け・タックル・基本手順</p></div><span className={s.stepArrow}>→</span></Link><Link className={s.step} href="/gear"><span className={s.stepNo}>04</span><div><b>釣具をそろえる</b><p>必要な道具を迷わず選ぶ</p></div><span className={s.stepArrow}>→</span></Link><Link className={s.step} href="/cooking"><span className={s.stepNo}>05</span><div><b>釣った魚を食べる</b><p>捌き方・下処理・定番料理</p></div><span className={s.stepArrow}>→</span></Link></div>
    </section>

    <div className={s.dark} style={{background:'#f4efe5'}}><section className={s.section}><div className={s.head}><div><div className={s.eyebrow}>START FISHING</div><h2>まず覚えたい釣り方</h2></div><Link href="/methods">釣り方をすべて見る →</Link></div><div className={s.methodGrid}>{methods.slice(0,3).map(m=><Link href={`/methods/${m.slug}`} className={s.method} key={m.slug}><small>{m.level} ・ {m.place}</small><h3>{m.name}</h3><p>{m.desc}</p><b>{m.target}を狙う →</b></Link>)}</div></section></div>

    <section className={s.game}><div className={s.gameCopy}><div className={s.eyebrow}>FOR KIDS</div><h2>遊んで覚える、<br/>UOLINK QUEST。</h2><p>ゲームは図鑑とは少し違う、デフォルメした魚で気軽に遊べる方向にします。リアルな魚体は図鑑、かわいさはゲームに分けます。</p><div className={s.ctaRow}><Link className={s.primary} href="/game">ゲームで遊ぶ</Link><Link className={s.secondary} href="/fish">魚図鑑を見る</Link></div></div><div className={s.gameBox}><div className={s.gameWater}></div><div className={s.gameCopyMark}>UOLINK<br/><b>QUEST</b></div><div className={s.score}>つって、あつめて、魚を知ろう。</div></div></section>

    <section className={s.linkHub}><div><span>EXPLORE UOLINK</span><h2>目的からすぐ探す</h2><p>ページの最後からも、GUIDE・魚・釣り方・釣り場・釣具・魚料理へすぐ戻れます。</p></div><nav>{quickLinks.map(x=><Link href={x.href} key={x.href}><span>{x.icon}</span><b>{x.label}</b><em>→</em></Link>)}</nav></section>
  </div>
}
