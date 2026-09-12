'use client';
import {useEffect} from 'react';

type Dish={name:string;src:string;href:string;desc:string};

type Props={oldImageSrcs:string[];dishes:Dish[]};

export default function LegacyCookingCardBridge({oldImageSrcs,dishes}:Props){
  useEffect(()=>{
    const timer=window.setTimeout(()=>{
      oldImageSrcs.forEach((oldSrc,index)=>{
        const dish=dishes[index];
        if(!dish)return;
        const img=document.querySelector<HTMLImageElement>(`img[src="${oldSrc}"]`);
        if(!img)return;
        const card=img.closest('article');
        if(!card)return;

        img.src=dish.src;
        img.alt=dish.name;
        const name=card.querySelector('b');
        const desc=card.querySelector('p');
        if(name)name.textContent=dish.name;
        if(desc)desc.textContent=dish.desc;

        const parent=card.parentElement;
        if(parent?.tagName==='A'){
          (parent as HTMLAnchorElement).href=dish.href;
          return;
        }
        const link=document.createElement('a');
        link.href=dish.href;
        link.setAttribute('aria-label',`${dish.name}の作り方を見る`);
        Object.assign(link.style,{display:'block',color:'inherit',textDecoration:'none',height:'100%'});
        card.replaceWith(link);
        link.appendChild(card);
      });
    },0);
    return()=>window.clearTimeout(timer);
  },[oldImageSrcs,dishes]);
  return null;
}
