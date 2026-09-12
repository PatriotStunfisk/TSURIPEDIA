'use client';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
import FishArt from './FishArt';
import BuriMedia from './BuriMedia';
import SabaMedia from './SabaMedia';
import AjiMedia from './AjiMedia';
import MadaiMedia from './MadaiMedia';
import KasagoMedia from './KasagoMedia';
import KisuMedia from './KisuMedia';
import s from './FishVisual.module.css';

type Props={slug:string;name:string;className?:string;imageSrc?:string};

const v2Fish=new Set(['aji','saba','buri','kisu','kasago']);

export default function FishVisual({slug,name,className='',imageSrc}:Props){
  const pathname=usePathname();
  const [failed,setFailed]=useState(false);
  const src=imageSrc??(slug==='tachiuo'
    ? '/images/fish/tachiuo-real-v2.png'
    : slug==='madai'
      ? '/images/fish/madai-real-v2.png'
      : slug==='saba'
        ? '/images/fish/saba-real-v2-new.png'
        : slug==='buri'
          ? '/images/fish/buri-real-v2.png?v=20260911-2'
          : slug==='kisu'
            ? '/images/fish/kisu-real-v2.png?v=20260911-1'
            : slug==='kasago'
              ? '/images/fish/kasago-real-v2.png?v=20260911-1'
              : v2Fish.has(slug)
                ? `/images/fish/${slug}-real-v2.png`
                : `/images/fish/${slug}-real.png`);

  useEffect(()=>{setFailed(false)},[src]);

  if(slug==='buri'&&pathname==='/fish/buri')return <BuriMedia/>;
  if(slug==='saba'&&pathname==='/fish/saba')return <SabaMedia/>;
  if(slug==='aji'&&pathname==='/fish/aji')return <AjiMedia/>;
  if(slug==='madai'&&pathname==='/fish/madai')return <MadaiMedia/>;
  if(slug==='kasago'&&pathname==='/fish/kasago')return <KasagoMedia/>;
  if(slug==='kisu'&&pathname==='/fish/kisu')return <KisuMedia/>;

  return <div className={`${s.wrap} ${className}`}>
    {!failed?<img src={src} alt={`${name}の図鑑画像`} width={slug==='saba'?1891:undefined} height={slug==='saba'?831:undefined} onError={()=>setFailed(true)}/>:<FishArt slug={slug} label={name}/>} 
  </div>
}
