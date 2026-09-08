'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

const madaiDishes=[
  ['/images/fish/madai-sashimi.jpg','刺身'],
  ['/images/fish/madai-carpaccio.jpg','カルパッチョ'],
  ['/images/fish/madai-shioyaki.jpg','塩焼き'],
  ['/images/fish/madai-nitsuke.jpg','煮付け'],
  ['/images/fish/madai-taimeshi.jpg','鯛めし'],
  ['/images/fish/madai-ushiojiru.jpg','潮汁'],
] as const;

function setActive(el:HTMLElement,on:boolean){
  el.style.background=on?'#1687e8':'';
  el.style.color=on?'#fff':'';
}

export default function FishPageEnhancer(){
  const pathname=usePathname();
  useEffect(()=>{
    if(!pathname?.startsWith('/fish/'))return;
    const slug=pathname.split('/')[2]||'';
    const cleanups:(()=>void)[]=[];

    document.querySelectorAll<HTMLElement>('main [class*="tools"]').forEach(tools=>{
      const buttons=Array.from(tools.children).filter((x):x is HTMLElement=>x instanceof HTMLElement);
      buttons.forEach((el,i)=>{
        el.setAttribute('role','button');el.tabIndex=0;el.style.cursor='pointer';
        const key=i===0?`uolink:favorite:${slug}`:i===1?`uolink:caught:${slug}`:i===3?`uolink:saved:${slug}`:'';
        if(key)setActive(el,localStorage.getItem(key)==='1');
        const run=async()=>{
          if(i===2){
            const share={title:document.title,text:`UOLINKで${slug==='tachiuo'?'タチウオ':slug==='madai'?'マダイ':'魚'}を見る`,url:location.href};
            try{if(navigator.share)await navigator.share(share);else{await navigator.clipboard.writeText(location.href);const s=el.querySelector('small');if(s){const old=s.textContent;s.textContent='URLコピー済み';setTimeout(()=>s.textContent=old,1600)}}}catch{}
            return;
          }
          if(!key)return;
          const on=localStorage.getItem(key)!=='1';localStorage.setItem(key,on?'1':'0');setActive(el,on);
          const s=el.querySelector('small');
          if(s){const base=i===0?'お気に入り':i===1?'釣った！':'保存';s.textContent=on?`${base}済み`:base;}
        };
        const click=()=>{void run()};const keydown=(e:KeyboardEvent)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();void run()}};
        el.addEventListener('click',click);el.addEventListener('keydown',keydown);
        cleanups.push(()=>{el.removeEventListener('click',click);el.removeEventListener('keydown',keydown)});
      });
    });

    if(slug==='madai'){
      const grid=document.querySelector<HTMLElement>('main [class*="dishGrid"]');
      if(grid){
        const current=Array.from(grid.children) as HTMLElement[];
        grid.innerHTML='';
        madaiDishes.forEach(([src,name],i)=>{
          const card=document.createElement('article');
          card.style.cssText='background:#102f42;border:1px solid #1f4a60;border-radius:14px;overflow:hidden';
          const photo=document.createElement('div');photo.style.cssText='height:132px;overflow:hidden;background:#17394c';
          const img=document.createElement('img');img.src=src;img.alt=`マダイの${name}`;img.style.cssText='width:100%;height:100%;object-fit:cover;display:block';photo.appendChild(img);
          const body=document.createElement('div');body.style.padding='11px';
          const b=document.createElement('b');b.textContent=name;b.style.fontSize='13px';body.appendChild(b);
          const p=document.createElement('p');p.textContent=i===0?'上品な甘みと旨味をそのまま。':i===1?'さっぱり華やかな洋風アレンジ。':i===2?'皮は香ばしく、身はふっくら。':i===3?'アラまで使えて旨味たっぷり。':i===4?'鯛の出汁が染みる定番ご飯。':'アラから出る上品な旨味を楽しむ。';p.style.cssText='margin:4px 0 0;color:#a9c2cf;font-size:10px;line-height:1.6';body.appendChild(p);
          card.append(photo,body);grid.appendChild(card);
        });
        cleanups.push(()=>{grid.innerHTML='';current.forEach(x=>grid.appendChild(x))});
      }
    }
    return()=>cleanups.forEach(fn=>fn());
  },[pathname]);
  return null;
}
