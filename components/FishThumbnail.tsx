import Image from 'next/image';
import {getFishImage} from '@/lib/fish-images';
import s from './FishVisual.module.css';

/** Listing-only image: no media switcher, viewer or model dependencies. */
export default function FishThumbnail({fish}:{fish:{slug:string;name:string;media?:{image:string}}}){
 const src=getFishImage(fish);
 return <div className={s.wrap}>{src&&<Image src={src} alt={fish.name} width={640} height={427} sizes="(max-width:600px) 90vw, (max-width:1000px) 45vw, 320px" loading="lazy" decoding="async"/>}</div>;
}
