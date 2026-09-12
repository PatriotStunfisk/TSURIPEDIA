'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {primaryMethod} from '@/lib/fish-methods';

const fishNames:Record<string,string>={tachiuo:'タチウオ',aji:'マアジ',saba:'サバ',buri:'ブリ',kisu:'キス',kasago:'カサゴ',madai:'マダイ'};
// Legacy anchor behavior shares the same editorial choices as fish pages.


function setActive(el:HTMLElement,on:boolean){
  el.style.background=on?'#1687e8':'';
  el.style.color=on?'#fff':'';
  el.setAttribute('aria-pressed',String(on));
}

export default function FishPageEnhancer(){
  const pathname=usePathname();
  useEffect(()=>{
    if(!pathname?.startsWith('/fish/'))return;
    const slug=pathname.split('/')[2]||'';
    const fishName=fishNames[slug]||document.querySelector('main h1')?.textContent?.trim()||'魚';
    const cleanups:(()=>void)[]=[];

    // 魚ページから一覧ページへ移るリンクは、その魚・代表釣法の位置へ直接ジャンプさせる。
    document.querySelectorAll<HTMLAnchorElement>('main a[href]').forEach(a=>{
      const raw=a.getAttribute('href')||'';
      if(raw==='/gear')a.setAttribute('href',`/gear#${slug}`);
      if(raw==='/methods'&&primaryMethod[slug])a.setAttribute('href',`/methods#${primaryMethod[slug]}`);
    });

    document.querySelectorAll<HTMLElement>('main [class*="tools"]').forEach(tools=>{
      const buttons=Array.from(tools.children).filter((x):x is HTMLElement=>x instanceof HTMLElement);
      buttons.forEach((el,i)=>{
        el.setAttribute('role','button');el.setAttribute('aria-label',i===0?`${fishName}をお気に入りに追加`:i===1?`${fishName}を釣った魚として記録`:i===2?`${fishName}をシェア`:`${fishName}を保存`);el.tabIndex=0;el.style.cursor='pointer';
        const key=i===0?`uolink:favorite:${slug}`:i===1?`uolink:caught:${slug}`:i===3?`uolink:saved:${slug}`:'';
        const base=i===0?'お気に入り':i===1?'釣った！':i===3?'保存':'';
        if(key){
          const on=localStorage.getItem(key)==='1';setActive(el,on);
          const small=el.querySelector('small');if(small&&on)small.textContent=i===1?'釣った！✓':`${base}済み`;
        }
        const run=async()=>{
          if(i===2){
            const share={title:`${fishName}｜UOLINK魚図鑑`,text:`UOLINKで${fishName}をチェック`,url:location.href};
            try{
              if(navigator.share)await navigator.share(share);
              else{await navigator.clipboard.writeText(location.href);const small=el.querySelector('small');if(small){const old=small.textContent;small.textContent='コピー済み';window.setTimeout(()=>small.textContent=old,1600)}}
            }catch{}
            return;
          }
          if(!key)return;
          const on=localStorage.getItem(key)!=='1';localStorage.setItem(key,on?'1':'0');setActive(el,on);
          const small=el.querySelector('small');if(small)small.textContent=on?(i===1?'釣った！✓':`${base}済み`):base;
        };
        const click=()=>{void run()};const keydown=(e:KeyboardEvent)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();void run()}};
        el.addEventListener('click',click);el.addEventListener('keydown',keydown);
        cleanups.push(()=>{el.removeEventListener('click',click);el.removeEventListener('keydown',keydown)});
      });
    });

    return()=>cleanups.forEach(fn=>fn());
  },[pathname]);
  return null;
}
