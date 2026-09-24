import WeatherPanel from '@/components/WeatherPanel';
import {pageSharing} from '@/lib/page-sharing';
import {methods} from '@/lib/data';
import {selectHomeFish,selectHomeGuides} from '@/lib/home-selection';
import HomeFishImage from '@/components/HomeFishImage';
import s from './home.module.css';

export const metadata=pageSharing("/","UOLINK｜魚から、釣りへつながる","魚を知る、釣り方を学ぶ、釣り場を探す。魚図鑑・GUIDE・MAP・料理・釣具をつなぐ釣り総合ガイド。");
export const revalidate=86400;

const quickLinks=[
  {href:'/fish',icon:'◉',label:'魚図鑑'},
  {href:'/methods',icon:'⌁',label:'釣り方'},
  {href:'/guide',icon:'?',label:'GUIDE'},
  {href:'/spots',icon:'⌖',label:'釣り場マップ'},
  {href:'/gear',icon:'▣',label:'釣具'},
  {href:'/cooking',icon:'◇',label:'魚料理'},
  {href:'/quest',icon:'◈',label:'QUEST'},
  {href:'/catches',icon:'▤',label:'新着釣果'},
  {href:'/weather',icon:'☀',label:'天気・潮汐'}
];

export default function Home(){
  const month=Number(new Intl.DateTimeFormat('en',{timeZone:'Asia/Tokyo',month:'numeric'}).format(new Date()));
  const featured=selectHomeFish(month);
  const guidePicks=selectHomeGuides(month);
  return <div className={s.home}>
    <section className={s.hero}>
      <div className={s.heroShade}></div>
      <div className={s.heroContent}>
        <div className={s.kicker}>UOLINK — 魚から、釣りへつながる。</div>
        <h1>釣りが、もっと<br/>好きになる。</h1>
        <p className={s.heroSub}>魚を知り、釣り方を学び、フィールドへ。</p>
        <p className={s.lead}>UOLINKは、魚図鑑・釣り方・釣り場・釣具・魚料理をひとつにつなぐ釣りの総合ガイドです。</p>
        <form action="/search" role="search" className={s.siteSearch}><label className="srOnly" htmlFor="home-search">サイト全体を検索</label><input id="home-search" name="q" type="search" placeholder="魚・釣り場・釣り方を検索" required maxLength={100}/><button type="submit" aria-label="検索"><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></svg></button></form><WeatherPanel compact/>
        <nav className={s.heroQuick}>{quickLinks.map(x=><a href={x.href} key={x.href}><span>{x.icon}</span><b>{x.label}</b></a>)}</nav>
      </div>
    </section>

    <section className={s.navGrid}>
      <a className={s.navCard} href="/fish"><div className={s.navIcon}>◉</div><b>魚図鑑</b><span>旬・サイズ・見分け方まで</span></a>
      <a className={s.navCard} href="/methods"><div className={s.navIcon}>⌁</div><b>釣り方</b><span>仕掛け・手順・コツを解説</span></a>
      <a className={s.navCard} href="/guide"><div className={s.navIcon}>?</div><b>釣りガイド</b><span>何号？何g？いつ釣れる？</span></a>
      <a className={s.navCard} href="/spots"><div className={s.navIcon}>⌖</div><b>釣り場マップ</b><span>魚種・設備・エリアから探す</span></a>
      <a className={s.navCard} href="/gear"><div className={s.navIcon}>▣</div><b>釣具</b><span>ロッド・リール・仕掛け</span></a>
      <a className={s.navCard} href="/cooking"><div className={s.navIcon}>◇</div><b>魚料理</b><span>捌き方・下処理・レシピ</span></a>
    </section>

    <div className={s.band} style={{background:'#e9f5fb'}}>
      <section className={s.section}>
        <div className={s.head}><div><div className={s.eyebrow}>FEATURED FISH</div><h2>まず知りたい基本10魚種</h2></div><a href="/fish">すべての魚図鑑を見る →</a></div>
        <p>図鑑・釣り方・料理をまとめて読める基本10魚種をご紹介。すべての魚は魚図鑑一覧から探せます。</p><p><a href="/fish?hazard=1">釣れた魚を触る前に：危険魚を確認 →</a></p><div className={s.fishGrid}>{featured.map(f=><a key={f.slug} className={s.fishCard} href={`/fish/${f.slug}`}><div className={s.thumb} style={{'--tone':f.accent} as React.CSSProperties}><HomeFishImage slug={f.slug} name={f.name}/><span className={s.season}>{f.season}</span></div><div className={s.fishInfo}><h3>{f.name}</h3><p>{f.en}</p><div className={s.chips}><span>{f.methods[0]}</span><span>{f.areas[0]}</span></div></div></a>)}</div>
      </section>
    </div>

    <section className={`${s.section} ${s.mapFeature}`} aria-label="釣り場マップ">
      <div className={s.mapIllustration} aria-hidden="true"><span>⌖</span><b>港</b><b>船</b><b>店</b><i>UOLINK MAP</i></div>
      <div><div className={s.eyebrow}>EXPLORE THE FIELD</div><h2>釣り場マップ</h2><p>全国の釣り場・船宿・釣具店を地図から探す。気になる場所の魚や釣り方、最近の釣果まで確認できます。</p><a className={s.primary} href="/spots">釣り場マップを開く →</a><nav className={s.mapFeatureLinks}><a href="/spots?fish=aji">アジが狙える釣り場</a><a href="/spots?method=sabiki">サビキの釣り場</a><a href="/catches">最近の釣果を見る</a></nav></div>
    </section>

    <section className={s.section}>
      <div className={s.head}><div><div className={s.eyebrow}>SEARCH GUIDE</div><h2>釣りに行くための実践GUIDE</h2></div><a href="/guide">釣りガイドをすべて見る →</a></div>
      <p>{month}月の釣行準備に役立つ編集セレクト。時期は地域・水温で前後するため、直近の釣果と現地ルールを確認してください。</p><div className={s.guideGrid}>{guidePicks.map(a=><a key={a.slug} href={`/guide/${a.slug}`} className={s.guideCard}><small>{a.query}</small><h3>{a.title}</h3><p>{a.answer}</p><b>答えを見る →</b></a>)}</div>
    </section>

    <section className={`${s.section} ${s.flow}`}>
      <div className={s.flowIntro}><div className={s.eyebrow}>ONE CONNECTED GUIDE</div><h2>疑問を解いて、<br/>そのまま釣りへ。</h2><p>GUIDEで数字や選び方を確認し、魚図鑑・釣り方・釣具・料理までつなげます。</p></div>
      <div className={s.steps}><a className={s.step} href="/guide"><span className={s.stepNo}>01</span><div><b>疑問を解く</b><p>何号？何g？いつ釣れる？</p></div><span className={s.stepArrow}>→</span></a><a className={s.step} href="/fish"><span className={s.stepNo}>02</span><div><b>魚を知る</b><p>見分け方・生態・旬・食べ方</p></div><span className={s.stepArrow}>→</span></a><a className={s.step} href="/methods"><span className={s.stepNo}>03</span><div><b>釣り方を選ぶ</b><p>仕掛け・タックル・基本手順</p></div><span className={s.stepArrow}>→</span></a><a className={s.step} href="/gear"><span className={s.stepNo}>04</span><div><b>釣具をそろえる</b><p>必要な道具を迷わず選ぶ</p></div><span className={s.stepArrow}>→</span></a><a className={s.step} href="/cooking"><span className={s.stepNo}>05</span><div><b>釣った魚を食べる</b><p>捌き方・下処理・定番料理</p></div><span className={s.stepArrow}>→</span></a></div>
    </section>

    <div className={s.dark} style={{background:'#f4efe5'}}><section className={s.section}><div className={s.head}><div><div className={s.eyebrow}>START FISHING</div><h2>まず覚えたい釣り方</h2></div><a href="/methods">釣り方をすべて見る →</a></div><div className={s.methodGrid}>{methods.slice(0,3).map(m=><a href={`/methods/${m.slug}`} className={s.method} key={m.slug}><small>{m.level} ・ {m.place}</small><h3>{m.name}</h3><p>{m.desc}</p><b>{m.target}を狙う →</b></a>)}</div></section></div>

    <section className={s.game}><div className={s.gameCopy}><div className={s.eyebrow}>PLAY &amp; LEARN</div><h2>遊んで覚える、<br/>UOLINK QUEST。</h2><p>釣り場と仕掛けを選び、魚を釣って捕獲図鑑を集める。遊んだあとは、実際の釣り方・釣具・料理へ。</p><div className={s.ctaRow}><a className={s.primary} href="/quest">QUESTで遊ぶ</a><a className={s.secondary} href="/fish">魚図鑑を見る</a></div></div><div className={s.gameBox}><div className={s.gameWater}></div><div className={s.gameCopyMark}>UOLINK<br/><b>QUEST</b></div><div className={s.score}>つって、あつめて、魚を知ろう。</div></div></section>

    <section className={s.linkHub}><div><span>EXPLORE UOLINK</span><h2>目的からすぐ探す</h2><p>ページの最後からも、GUIDE・魚・釣り方・釣り場・釣具・魚料理へすぐ戻れます。</p></div><nav>{quickLinks.map(x=><a href={x.href} key={x.href}><span>{x.icon}</span><b>{x.label}</b><em>→</em></a>)}</nav></section>
  </div>
}
