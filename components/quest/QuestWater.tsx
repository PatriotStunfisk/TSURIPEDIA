'use client';
import {useState,useEffect,useRef} from 'react';
import dynamic from 'next/dynamic';
import ProfileImage from '@/components/ProfileImage';
import FishArt from '@/components/FishArt';
import {canLand,type Round} from '@/lib/quest/engine';
import {containedAnchor,defaultMouthAnchor,approachFraction,contactOffset,easeOffset} from '@/lib/quest/hook-anchor';
import s from './QuestWater.module.css';
const Viewer=dynamic(()=>import('@/components/FishViewer'),{ssr:false,loading:()=><span>3D読み込み中</span>});
export default function QuestWater({round,now}:{round:Round;now:number}){
 const offsetRef=useRef({x:0,y:0});
 const waterRef=useRef<HTMLDivElement>(null);
 const fishRef=useRef<HTMLDivElement>(null);const hookRef=useRef<HTMLSpanElement>(null);const lineRef=useRef<SVGPathElement>(null);const baitRef=useRef<HTMLSpanElement>(null);
 useEffect(()=>{if(['fight','landing'].includes(round.phase))waterRef.current?.scrollIntoView({block:'start',behavior:'instant'})},[round.phase]);
 const [threeD,setThreeD]=useState(false);
 const f=round.fish;const engaged=['waiting','bite','fight','landing','caught'].includes(round.phase);
 const fight=round.phase==='fight';const bite=round.phase==='bite';
 const finishing=round.phase==='landing'||round.phase==='caught';
 const near=round.initialDepth?1-round.fishDepth/round.initialDepth:0;
 const jumping=fight&&round.running&&f?.fightProfile==='jumper'&&near>.6;
 const y=jumping?20:finishing?32:fight?32+Math.min(1,round.fishDepth/round.initialDepth)*42:round.style==='sabiki'?38+round.targetDepth*20:65;
 const baitY=round.style==='sabiki'?38+round.depth*20:round.style==='eging'&&now-round.lastLure<1400?42:65;
 const x=finishing?40:fight?Math.max(38,(round.running?68:48)-round.progress*.22):72-round.attraction*.18;
 const fishWidth=finishing?55:fight?33+near*16:33;
 const attached=fight||finishing;
 const approaching=round.phase==='waiting'||bite;
 const contact=bite?1:approachFraction(round.attraction,round.style);
 useEffect(()=>{
  let frame=0,last=performance.now();
  const sync=(time:number)=>{
   const elapsed=time-last;last=time;
   const water=waterRef.current,body=fishRef.current,marker=hookRef.current;
   if(water&&body&&marker){
    if(!threeD||!f?.modelSrc){const img=body.querySelector('img');if(img?.naturalWidth){const p=containedAnchor(body.clientWidth,body.clientHeight,img.naturalWidth,img.naturalHeight,f?.hook?.mouthAnchor??defaultMouthAnchor);marker.style.left=`${p.x}px`;marker.style.top=`${p.y}px`;marker.dataset.ready='true';}}
    if(marker.dataset.ready==='true'&&baitRef.current){
     const m=marker.getBoundingClientRect(),b=baitRef.current.getBoundingClientRect();
     const target=approaching?contactOffset({x:m.x,y:m.y},{x:b.x+b.width/2,y:b.y+b.height/2},offsetRef.current,contact):{x:0,y:0};
     offsetRef.current=easeOffset(offsetRef.current,target,elapsed);
     body.style.translate=`${offsetRef.current.x}px ${offsetRef.current.y}px`;
    }
    if(attached&&marker.dataset.ready==='true'){
     const w=water.getBoundingClientRect(),m=marker.getBoundingClientRect();
     const ax=(m.x-w.x)/w.width*100,ay=(m.y-w.y)/w.height*100;
     lineRef.current?.setAttribute('d',`M 43 20 L ${ax} ${ay}`);
     if(baitRef.current){baitRef.current.style.left=`${ax}%`;baitRef.current.style.top=`${ay}%`;}
    }else if(!attached&&baitRef.current){baitRef.current.style.left='43%';baitRef.current.style.top=`${baitY}%`;}
   }
   frame=requestAnimationFrame(sync);
  };frame=requestAnimationFrame(sync);return()=>cancelAnimationFrame(frame);
 },[attached,approaching,contact,threeD,f,baitY]);
 const pose=round.phase==='caught'?'GET! 釣り上げ成功':round.phase==='landing'?(round.landingMode==='net'?'LANDING · タモ入れ':'LANDING · 抜き上げ'):fight?(jumping?'水面でジャンプ！':now<round.finalRunUntil?'最後の抵抗！':round.running?(round.fish?.fightProfile==='diver'?'底へ突っ込む！':round.fish?.fightProfile==='jet'?'ジェット噴射！':'横へ走る！'):canLand(round)?'水面まで来た！糸を整えて取り込もう':'巻いて浅い層へ寄せる'):bite?(round.style==='eging'?'エギを抱いた！':round.style==='kawahagi'?'餌を持ち込んだ！':round.style==='ayu'?'おとりを追い払った！':'食いついた！'):round.attraction>60?(round.style==='ayu'?'おとりへ近づいている':round.style==='eging'?'エギを追っている':'餌を追っている'):round.attraction>20?'こちらに気づいた':'水中の魚を観察';
 return <div ref={waterRef} className={s.water} data-phase={round.phase} aria-label="水中の様子">
  <div className={s.horizon}><span>UOLINK QUEST · UNDERWATER</span>{f?.modelSrc&&<button aria-pressed={threeD} onClick={()=>setThreeD(v=>!v)}>{threeD?'軽量2Dに戻す':'水中を3Dで見る'}</button>}</div>
  <svg className={s.line} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path ref={lineRef} d={`M 10 4 Q 27 ${bite||fight?28:4} 43 20 L ${43} ${baitY}`} fill="none" stroke={bite?'#ffd673':'#e0f9ff'} strokeWidth={bite?'.7':'.3'}/><path d={`M 10 4 Q 27 ${bite||fight?28:4} 43 20`} fill="none" stroke="#bd8560" strokeWidth="1.3"/></svg>
  {round.style==='sabiki'&&<><span className={s.depth} style={{top:`${y}%`}}>群れの棚 {['浅','中','深'][round.targetDepth]}</span>{[0,1].map(i=><div aria-hidden="true" key={i} className={s.school} style={{left:`${56+i*15}%`,top:`${y+7+i*3}%`}}>{f?.image?<ProfileImage optimized src={f.image} alt="" sizes="100px"/>:null}</div>)}</>}
  {engaged&&<><span ref={baitRef} data-attached={attached} className={`${s.bait} ${bite?s.bitten:''}`} style={{left: `${43}%`,top:`${baitY}%`}} aria-label={round.style==='eging'?'エギ':round.style==='ayu'?'おとり':'餌'}>{round.style==='eging'?'◁':round.style==='ayu'?'◁':'●'}</span><div ref={fishRef} className={`${s.fish} ${fight&&round.running?s.running:''}`} style={{left:`${x-fishWidth/2}%`,top:`${y}%`,width:`${fishWidth}%`,height:finishing?150:fight?100+near*45:undefined,animationDuration:`${2/(f?.swimSpeed??1)}s`}}>{threeD&&f?.modelSrc?<Viewer modelSrc={f.modelSrc} modelTilt={f.modelTilt} contain swim hookAnchor={f.hook?.modelAnchor} hookMarkerRef={hookRef}/>:f?.image?<ProfileImage optimized src={f.image} alt={`${f.name}が${pose}`} sizes="(max-width:760px) 180px, 360px"/>:<FishArt slug={f?.slug??''} label={f?.name??'魚影'}/>}<span key={`${f?.slug}-${threeD}`} ref={hookRef} className={s.hookAnchor} data-hook-kind={f?.hook?.kind??'mouth'} aria-hidden="true"/></div></>}
  {(fight||finishing)&&<div className={s.surface} aria-hidden="true">〜 〜 〜 〜 〜</div>}{finishing&&<div className={s.landing} aria-hidden="true">{round.landingMode==='net'?'◯':'↑'}</div>}
  <div className={s.caption}>{engaged?pose:round.phase==='miss'?'魚は水中へ戻っていった':'キャストして、水中の世界へ'}{round.style==='eging'&&round.phase==='waiting'&&<small>{now-round.lastLure<2200?'しゃくり → フォール中':'しゃくりで誘い、止めて抱かせる'}</small>}{round.style==='kawahagi'&&round.phase==='waiting'&&round.attraction>=65&&<small>コツコツ…まだ餌をつついている</small>}</div>
 </div>;
}
