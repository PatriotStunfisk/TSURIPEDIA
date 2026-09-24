import Image from 'next/image';
import {gearKindLabels,type GearProduct} from '@/lib/gear-catalog';
import s from './GearCatalog.module.css';
export default function GearProductVisual({product:p,compact=false}:{product:GearProduct;compact?:boolean}){return <div className={s.visual}>{p.image?<><Image style={p.image.flipX?{transform:'scaleX(-1)'}:undefined} src={p.image.src} alt={p.image.alt} width={640} height={400} sizes={compact?"(max-width:600px) 44vw, 360px":"(max-width:600px) 90vw, 600px"}/>{p.image.caption&&<small className={s.photoCaption}>{p.image.caption}</small>}</>:<div><small>{gearKindLabels[p.kind]}</small><strong>{p.brand}</strong><span>製品写真はメーカー公式で確認 ↗</span></div>}</div>}
