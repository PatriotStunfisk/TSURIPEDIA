import Link from 'next/link';
import {methods} from '@/lib/data';
import {methodDetails} from '@/lib/method-details';
export const metadata={title:'釣り方'};
export default function Page(){return <div className="section pageTop"><div className="pageHero"><span>FISHING METHODS</span><h1>釣り方</h1><p>対象魚・場所・必要な道具だけでなく、仕掛け、手順、コツ、よくある失敗、安全までまとめて確認できます。</p></div><div className="listCards">{methods.map((m,i)=>{const d=methodDetails[m.slug];return <article key={m.slug}><div className="number">0{i+1}</div><div className="listEmoji">{m.emoji}</div><div><small>{m.level} ・ {m.place}</small><h2>{m.name}</h2><p>{m.desc}</p><div className="chips"><span>狙える魚：{m.target}</span>{d&&<span>手順 {d.steps.length}ステップ</span>}{d&&<span>難易度 {'★'.repeat(d.difficulty)}</span>}</div></div><Link href={`/methods/${m.slug}`} className="searchBtn">詳しく見る →</Link></article>})}</div></div>}
