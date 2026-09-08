'use client';
import {useState} from 'react';
import FishArt from './FishArt';
import s from './FishVisual.module.css';

type Props={slug:string;name:string;className?:string};

export default function FishVisual({slug,name,className=''}:Props){
  const [failed,setFailed]=useState(false);
  const src=slug==='tachiuo'
    ? '/images/fish/tachiuo-real-v2.png'
    : slug==='madai'
      ? '/images/fish/madai-real.jpg'
      : `/images/fish/${slug}-real.png`;
  return <div className={`${s.wrap} ${className}`}>
    {!failed?<img src={src} alt={`${name}の図鑑画像`} onError={()=>setFailed(true)}/>:<FishArt slug={slug} label={name}/>} 
  </div>
}
