import Link from 'next/link';
import {fish} from '@/lib/data';
import FishArt from '@/components/FishArt';
export const metadata={title:'魚図鑑'};
export default function Page(){return <div className="section pageTop"><div className="pageHero"><span>FISH ENCYCLOPEDIA</span><h1>魚図鑑</h1><p>旬・釣り方・難易度から、次に釣りたい魚を見つけよう。まずは2D図鑑を充実させ、主要魚種から順に3Dにも対応していきます。</p></div><div className="filterBar"><input placeholder="魚の名前を検索（例：タチウオ）"/><button>検索</button></div><div className="fishGrid large">{fish.map(f=><Link key={f.slug} className="fishCard" href={`/fish/${f.slug}`}><div className="fishThumb fishThumbArt" style={{'--accent':f.accent} as React.CSSProperties}><FishArt slug={f.slug} label={f.name}/><span>{f.season}</span></div><h3>{f.name}</h3><p>{f.scientific}</p><div className="chips"><span>{f.methods[0]}</span><span>{f.areas[0]}</span>{f.kids&&<span>親子向け</span>}</div></Link>)}</div></div>}
