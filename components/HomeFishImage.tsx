import images from '@/lib/home-images.json';
import s from './FishVisual.module.css';
// Plain responsive images keep navigation independent of hydration and 3D viewers.
export default function HomeFishImage({slug,name}:{slug:string;name:string}){const image=(images as Record<string,{src:string;srcSet:string;width:number;height:number}>)[slug];if(!image)return null;return <div className={s.wrap}><img src={image.src} srcSet={image.srcSet} width={image.width} height={image.height} sizes="(max-width:560px) calc(100vw - 34px), (max-width:900px) calc(50vw - 32px), 280px" loading="lazy" decoding="async" alt={name+'の図鑑画像'}/></div>}
