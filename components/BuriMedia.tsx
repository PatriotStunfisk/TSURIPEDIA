'use client';
import {useState} from 'react';
import FishVisual from './FishVisual';
import BuriViewer from './BuriViewer';
import s from './TachiuoMedia.module.css';

export default function BuriMedia(){
 const [mode,setMode]=useState<'2d'|'3d'>('2d');
 return <div className={s.stage}>
  <div className={s.tabs}>
   <button className={mode==='2d'?s.active:''} onClick={()=>setMode('2d')}>▧ 2D画像</button>
   <button className={mode==='3d'?s.active:''} onClick={()=>setMode('3d')}>◈ 3D表示</button>
   <span>◎ AR予定</span>
  </div>
  <div className={s.media}>{mode==='2d'?<FishVisual slug="buri" name="ブリ" className={s.realFish}/>:<BuriViewer/>}</div>
  <div className={s.note}>{mode==='2d'?'高精細2D図鑑画像':'ドラッグして360°観察'}</div>
 </div>
}
