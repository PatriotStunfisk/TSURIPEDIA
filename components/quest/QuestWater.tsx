'use client';
import {useState} from 'react';
import dynamic from 'next/dynamic';
import ProfileImage from '@/components/ProfileImage';
import FishArt from '@/components/FishArt';
import type {Round} from '@/lib/quest/engine';
import s from './QuestWater.module.css';
const Viewer=dynamic(()=>import('@/components/FishViewer'),{ssr:false,loading:()=><span>3D読み込み中</span>});
export default function QuestWater({round,now}:{round:Round;now:number}){
 const [threeD,setThreeD]=useState(false);
 const f=round.fish;const engaged=['waiting','bite','fight','caught'].includes(round.phase);
 const fight=round.phase==='fight';const bite=round.phase==='bite';
 const y=round.style==='sabiki'?38+round.targetDepth*20:65;
 const baitY=round.style==='sabiki'?38+round.depth*20:round.style==='eging'&&now-round.lastLure<1400?42:65;
 const x=fight?(round.running?68:48)-round.progress*.22:bite?(threeD?32:40):72-round.attraction*(threeD?.4:.32);
 const pose=round.phase==='caught'?'取り込み成功':fight?(round.running?'魚が走る！':'走りが弱まった'):bite?(round.style==='eging'?'エギを抱いた！':round.style==='kawahagi'?'餌を持ち込んだ！':'食いついた！'):round.attraction>60?'餌を追っている':round.attraction>20?'こちらに気づいた':'水中の魚を観察';
 return <div className={s.water} data-phase={round.phase} aria-label="水中の様子">
  <div className={s.horizon}><span>UOLINK QUEST · UNDERWATER</span>{f?.modelSrc&&<button aria-pressed={threeD} onClick={()=>setThreeD(v=>!v)}>{threeD?'軽量2Dに戻す':'水中を3Dで見る'}</button>}</div>
  <svg className={s.line} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d={`M 10 4 Q 27 ${bite||fight?28:4} 43 20 L ${fight?x+2:43} ${fight?y:baitY}`} fill="none" stroke={bite?'#ffd673':'#e0f9ff'} strokeWidth={bite?'.7':'.3'}/><path d={`M 10 4 Q 27 ${bite||fight?28:4} 43 20`} fill="none" stroke="#bd8560" strokeWidth="1.3"/></svg>
  {round.style==='sabiki'&&<><span className={s.depth} style={{top:`${y}%`}}>群れの棚 {['浅','中','深'][round.targetDepth]}</span>{[0,1].map(i=><div aria-hidden="true" key={i} className={s.school} style={{left:`${56+i*15}%`,top:`${y+7+i*3}%`}}>{f?.image?<ProfileImage optimized src={f.image} alt="" sizes="100px"/>:null}</div>)}</>}
  {engaged&&<><span className={`${s.bait} ${bite?s.bitten:''}`} style={{left: `${fight?x+2:43}%`,top:`${fight?y:baitY}%`}} aria-label={round.style==='eging'?'エギ':'餌'}>{round.style==='eging'?'◁':'●'}</span><div className={`${s.fish} ${fight&&round.running?s.running:''}`} style={{left:`${x}%`,top:`${y}%`,animationDuration:`${2/(f?.swimSpeed??1)}s`}}>{threeD&&f?.modelSrc?<Viewer modelSrc={f.modelSrc} contain swim/>:f?.image?<ProfileImage optimized src={f.image} alt={`${f.name}が${pose}`} sizes="(max-width:760px) 180px, 360px"/>:<FishArt slug={f?.slug??''} label={f?.name??'魚影'}/>}</div></>}
  <div className={s.caption}>{engaged?pose:round.phase==='miss'?'魚は海へ戻っていった':'キャストして、水中の世界へ'}{round.style==='eging'&&round.phase==='waiting'&&<small>{now-round.lastLure<2200?'しゃくり → フォール中':'しゃくりで誘い、止めて抱かせる'}</small>}{round.style==='kawahagi'&&round.phase==='waiting'&&round.attraction>=65&&<small>コツコツ…まだ餌をつついている</small>}</div>
 </div>;
}
