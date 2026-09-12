import s from './SpotMap.module.css';

export default function SpotLocationMap({name,lat,lng}:{name:string;lat:number;lng:number}){
 const href=`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=14/${lat}/${lng}`;
 return <div className={s.mapFrame}>
  <a className={s.loadMap} href={href} target="_blank" rel="noopener noreferrer">⌖ {name}の地図を開く ↗</a>
  <p>参考位置です。入場口・立入可能範囲は公式案内で確認。地図：<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© OpenStreetMap contributors</a></p>
 </div>;
}
