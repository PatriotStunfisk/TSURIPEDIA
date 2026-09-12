import Link from 'next/link';
import {fishCatalog} from '@/lib/fish-registry';
import FishVisual from '@/components/FishVisual';
import FishCollectionPanel from '@/components/FishCollectionPanel';
export const metadata={title:'魚図鑑'};
export default function Page(){return <div className="section pageTop"><div className="pageHero"><span>FISH ENCYCLOPEDIA</span><h1>魚図鑑</h1><p>旬・釣り方・難易度から、次に釣りたい魚を見つけよう。図鑑ではリアル寄り2D画像を基本にし、必要な魚種だけ軽量3Dにも対応していきます。</p></div><FishCollectionPanel/><div className="filterBar"><input placeholder="魚の名前を検索（例：タチウオ）"/><button>検索</button></div><div className="fishGrid large">{fishCatalog.map(f=><Link key={f.slug} className="fishCard" href={`/fish/${f.slug}`}><div className="fishThumb fishThumbArt" style={{'--accent':f.accent} as React.CSSProperties}><FishVisual slug={f.slug} name={f.name} className="fishListVisual"/><span>{f.season}</span></div><h3>{f.name}</h3><p>{f.scientific}</p><div className="chips"><span>{f.methods[0]}</span><span>{f.areas[0]}</span>{f.kids&&<span>親子向け</span>}</div></Link>)}</div></div>}
