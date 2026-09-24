import Image from 'next/image';
import type {GearProduct} from '@/lib/gear-catalog';
import s from './GearCatalog.module.css';
export default function GearProductVisual({product:p}:{product:GearProduct}){return <div className={s.visual}>{p.image?<><Image src={p.image.src} alt={p.image.alt} width={640} height={400} sizes="(max-width:600px) 90vw, 360px"/>{p.image.caption&&<small className={s.photoCaption}>{p.image.caption}</small>}</>:<div><small>{p.kind==='rod'?'ROD':'REEL'}</small><strong>{p.brand}</strong><span>製品写真はメーカー公式で確認 ↗</span></div>}</div>}
