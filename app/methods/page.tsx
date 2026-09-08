import Link from 'next/link';
import {methods} from '@/lib/data';
import {methodDetails} from '@/lib/method-details';
export const metadata={title:'釣り方'};
const placeIcon=(p:string)=>p.includes('船')?'🚤':p.includes('堤防')?'⚓':'📍';
export default function Page(){return <div className="section pageTop"><div className="pageHero"><span>FISHING METHODS</span><h1>釣り方</h1><p>同じ魚でも、船と堤防ではタックルも仕掛けも別物。まず「どこから釣るか」を分けて選べるようにしています。</p></div><div className="listCards">{methods.map((m,i)=>{const d=methodDetails[m.slug];return <article key={m.slug}><div className="number">0{i+1}</div><div className="listEmoji">{m.emoji}</div><div><div className="chips"><span>{placeIcon(m.place)} {m.place}</span><span>{m.level}</span></div><h2>{m.name}</h2><p>{m.desc}</p><div className="chips"><span>狙える魚：{m.target}</span>{d&&<span>手順 {d.steps.length}ステップ</span>}{d&&<span>難易度 {'★'.repeat(d.difficulty)}</span>}</div></div><Link href={`/methods/${m.slug}`} className="searchBtn">{placeIcon(m.place)} {m.place}の釣り方を見る →</Link></article>})}</div></div>}
