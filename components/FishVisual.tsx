'use client';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
import FishArt from './FishArt';
import {establishedFishImages} from '@/lib/fish-images';
import ProfileImage from './ProfileImage';
import BuriMedia from './BuriMedia';
import SabaMedia from './SabaMedia';
import AjiMedia from './AjiMedia';
import MadaiMedia from './MadaiMedia';
import KasagoMedia from './KasagoMedia';
import KisuMedia from './KisuMedia';
import s from './FishVisual.module.css';

type Props={slug:string;name:string;className?:string;imageSrc?:string};

export default function FishVisual({slug,name,className='',imageSrc}:Props){
  const pathname=usePathname();
  const [failed,setFailed]=useState(false);
  const src=imageSrc??establishedFishImages[slug]??`/images/fish/${slug}-real.png`;

  useEffect(()=>{setFailed(false)},[src]);

  if(slug==='buri'&&pathname==='/fish/buri')return <BuriMedia/>;
  if(slug==='saba'&&pathname==='/fish/saba')return <SabaMedia/>;
  if(slug==='aji'&&pathname==='/fish/aji')return <AjiMedia/>;
  if(slug==='madai'&&pathname==='/fish/madai')return <MadaiMedia/>;
  if(slug==='kasago'&&pathname==='/fish/kasago')return <KasagoMedia/>;
  if(slug==='kisu'&&pathname==='/fish/kisu')return <KisuMedia/>;

  return <div className={`${s.wrap} ${className}`}>
    {!failed?<ProfileImage optimized={!!imageSrc} sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw" src={src} alt={`${name}の図鑑画像`} width={slug==='saba'?1891:undefined} height={slug==='saba'?831:undefined} onError={()=>setFailed(true)}/>:<FishArt slug={slug} label={name}/>}
  </div>
}
