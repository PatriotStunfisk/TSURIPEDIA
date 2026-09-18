import type {FishingMapEntry} from '@/lib/fishing-map-data';
import {representativeSpots} from '@/lib/spot-connections';
export default function RelatedSpots({entries,fish,method,name}:{entries:FishingMapEntry[];fish?:string;method?:string;name:string}){
 const spots=representativeSpots(entries);
 const query=new URLSearchParams(fish?{fish}:{method:method!});
 return <section aria-label="関連する釣り場"><h3>{fish?`${name}が狙える釣り場`:`${name}で探す釣り場・船宿`}</h3><p>設備や初心者向け情報のある地点を中心に紹介しています。現地の利用条件と対象魚の季節を確認してください。</p>{spots.map(s=><a className="methodLink" key={s.slug} href={`/spots/${s.slug}`}><div><b>{s.name}</b><small>{s.prefecture} · {s.type==='boat'?'船宿':s.beginner?'初心者向け':'釣り場'} · 利用条件・最近の釣果</small></div><em>→</em></a>)}<a className="gearCta" href={`/spots?${query}`}>{fish?`${name}が狙える釣り場をMAPで探す`:'この釣り方ができる釣り場をMAPで探す'} →</a></section>;
}
