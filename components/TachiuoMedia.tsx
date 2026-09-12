'use client';
import {useEffect,useState} from 'react';
import FishViewer from './FishViewer';
import FishVisual from './FishVisual';
import s from './TachiuoMedia.module.css';

const dishReplacements=[
  {from:'タチウオの刺身',to:'タチウオの刺身',src:'/images/fish/tachiuo-sashimi.png'},
  {from:'タチウオの塩焼き',to:'タチウオの塩焼き',src:'/images/fish/tachiuo-shioyaki.png'},
  {from:'タチウオの天ぷら',to:'タチウオの天ぷら',src:'/images/fish/tachiuo-tempura.png'},
  {from:'タチウオの炙り',to:'タチウオの煮付け',src:'/images/fish/tachiuo-nitsuke.png',name:'煮付け',desc:'しょうがを効かせた甘辛い味付けで、ご飯にも合う定番料理。'}
];

export default function TachiuoMedia(){
  const [mode,setMode]=useState<'2d'|'3d'>('2d');

  useEffect(()=>{
    const timer=window.setTimeout(()=>{
      dishReplacements.forEach(x=>{
        const img=document.querySelector<HTMLImageElement>(`img[alt="${x.from}"]`);
        if(!img)return;
        img.src=x.src;
        img.alt=x.to;
        if(x.name){
          const card=img.closest('article');
          const name=card?.querySelector('b');
          const desc=card?.querySelector('p');
          if(name)name.textContent=x.name;
          if(desc&&x.desc)desc.textContent=x.desc;
        }
      });
    },0);
    return()=>window.clearTimeout(timer);
  },[]);

  return <div className={s.stage}>
    <div className={s.tabs}>
      <button className={mode==='2d'?s.active:''} onClick={()=>setMode('2d')}>▧ 2D画像</button>
      <button className={mode==='3d'?s.active:''} onClick={()=>setMode('3d')}>◈ 3D表示</button>
      <span>◎ AR予定</span>
    </div>
    <div className={s.media}>
      {mode==='2d'?<FishVisual slug="tachiuo" name="タチウオ" className={s.realFish}/>:<FishViewer/>}
    </div>
    <div className={s.note}>{mode==='2d'?'高精細2D図鑑画像':'ドラッグして360°観察'}</div>
  </div>
}
