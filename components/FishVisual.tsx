'use client';
import {useEffect,useState} from 'react';
import FishArt from './FishArt';
import s from './FishVisual.module.css';

type Props={slug:string;name:string;className?:string};

const madaiDishImages:Record<string,string>={
  '刺身':'/images/fish/madai-sashimi.jpg',
  '炙り':'/images/fish/madai-aburi.jpg',
  '鯛めし':'/images/fish/madai-taimeshi.jpg',
  '潮汁':'/images/fish/madai-ushiojiru.jpg'
};

export default function FishVisual({slug,name,className=''}:Props){
  const [failed,setFailed]=useState(false);
  const src=slug==='tachiuo'
    ? '/images/fish/tachiuo-real-v2.png'
    : slug==='madai'
      ? '/images/fish/madai-real-v2.png'
      : `/images/fish/${slug}-real.png`;

  useEffect(()=>{
    setFailed(false);
  },[src]);

  useEffect(()=>{
    if(slug!=='madai')return;
    const added:HTMLElement[]=[];
    const apply=()=>{
      document.querySelectorAll('article').forEach(article=>{
        const label=article.querySelector('b')?.textContent?.trim()||'';
        const dishSrc=madaiDishImages[label];
        if(!dishSrc||article.querySelector('[data-madai-dish-photo]'))return;
        const photo=document.createElement('div');
        photo.dataset.madaiDishPhoto='true';
        Object.assign(photo.style,{height:'132px',overflow:'hidden',background:'#102f42'});
        const img=document.createElement('img');
        img.src=dishSrc;
        img.alt=`マダイの${label}`;
        Object.assign(img.style,{width:'100%',height:'100%',display:'block',objectFit:'cover'});
        photo.appendChild(img);
        article.insertBefore(photo,article.firstChild);
        added.push(photo);
      });
    };
    const id=window.setTimeout(apply,0);
    return()=>{window.clearTimeout(id);added.forEach(x=>x.remove())};
  },[slug]);

  return <div className={`${s.wrap} ${className}`}>
    {!failed?<img src={src} alt={`${name}の図鑑画像`} onError={()=>setFailed(true)}/>:<FishArt slug={slug} label={name}/>} 
  </div>
}
