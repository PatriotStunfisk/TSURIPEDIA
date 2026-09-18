import Image from 'next/image';
import type {FishEcologyVisual as EcologyVisual} from '@/lib/fish-species/types';
import s from './FishEcologyVisual.module.css';

export default function FishEcologyVisual({visual}:{visual?:EcologyVisual}){
  if(!visual)return null;
  return <section className={s.wrap} aria-label="生態のビジュアル解説">
    <figure className={s.photo}>
      <Image src={visual.image} alt={visual.alt} width={visual.width} height={visual.height}
        sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1230px) 55vw, 650px"
        loading="lazy"/>
      <figcaption>生態をもとにした再現画像（AI生成）</figcaption>
    </figure>
    <div className={s.copy}>
      <span className={s.eyebrow}>ECOLOGY VISUAL</span>
      <h2>{visual.title}</h2>
      <p>{visual.description}</p>
      <a className={s.source} href={visual.source.url} target="_blank" rel="noopener noreferrer">生態の参考：{visual.source.label} ↗</a>
    </div>
  </section>;
}
