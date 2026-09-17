'use client';
import {useState,type RefObject} from 'react';
import type {ViewerNavigation} from '@/lib/viewer-navigation';
import s from './ViewerControls.module.css';
export default function ViewerControls({navigation}:{navigation:RefObject<ViewerNavigation|null>}){
 const [pan,setPan]=useState(false);
 return <div className={s.controls} aria-label="3Dモデルの操作"><div className={s.row}>
 <button type="button" aria-label="3Dモデルを拡大" onClick={()=>navigation.current?.zoom(1.2)}>＋</button><button type="button" aria-label="3Dモデルを縮小" onClick={()=>navigation.current?.zoom(1/1.2)}>−</button>
 <button type="button" aria-label={pan?'移動モード：回転に切り替える':'回転モード：移動に切り替える'} aria-pressed={pan} onClick={()=>{setPan(!pan);navigation.current?.mode(!pan);}}>{pan?'移動':'回転'}</button>
 <button type="button" aria-label="初期位置に戻す" title="初期位置に戻す" onClick={()=>{navigation.current?.reset();navigation.current?.mode(false);setPan(false);}}>↺</button>
 </div></div>;
}
