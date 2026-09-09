import {spots} from '@/lib/data';
import SpotMap from '@/components/SpotMap';

export const metadata={title:'釣り場マップ｜UOLINK',description:'Googleマップで釣り場を探し、釣れる魚・設備・初心者向け情報を確認できるUOLINK釣り場ガイド。'};

export default function Page(){return <div className="section pageTop"><div className="pageHero"><span>FISHING SPOTS</span><h1>釣り場マップ</h1><p>地図から釣り場を探して、釣れる魚・釣り方・設備へつなげます。</p></div><SpotMap/><div className="spotGrid">{spots.map(s=><article key={s.name}><div className="spotTop"><span>{s.type}</span>{s.kids&&<b>👨‍👩‍👧 親子向け</b>}</div><h2>📍 {s.name}</h2><small>{s.area}</small><p>{s.desc}</p><div className="chips"><span>🐟 {s.fish}</span>{s.parking&&<span>🅿 駐車場</span>}{s.toilet&&<span>🚻 トイレ</span>}</div></article>)}</div></div>}
