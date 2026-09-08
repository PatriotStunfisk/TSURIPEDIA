'use client';
import {useState} from 'react';
import FishArt from './FishArt';
import s from './FishVisual.module.css';

type Props={slug:string;name:string;className?:string};

const externalFishImages:Record<string,string>={
  tachiuo:'https://upload.wikimedia.org/wikipedia/commons/f/fb/Trichiurus_lepturus1.jpg',
};

export default function FishVisual({slug,name,className=''}:Props){
  const [failed,setFailed]=useState(false);
  const src=externalFishImages[slug]??`/images/fish/${slug}-real.png`;
  return <div className={`${s.wrap} ${className}`}>
    {!failed?<img src={src} alt={`${name}の図鑑画像`} onError={()=>setFailed(true)}/>:<FishArt slug={slug} label={name}/>} 
  </div>
}
