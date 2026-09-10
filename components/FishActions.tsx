'use client';

import {useEffect,useState} from 'react';
import s from './FishActions.module.css';

type Props={slug:string;name:string};
type SavedState={favorite:boolean;caught:boolean;saved:boolean};

const empty:SavedState={favorite:false,caught:false,saved:false};

export default function FishActions({slug,name}:Props){
 const [state,setState]=useState<SavedState>(empty);
 const [notice,setNotice]=useState('');
 const key=`uolink:fish:${slug}`;
 useEffect(()=>{
  try{const raw=localStorage.getItem(key);if(raw)setState({...empty,...JSON.parse(raw)});}catch{}
 },[key]);
 const update=(field:keyof SavedState)=>{
  setState(prev=>{const next={...prev,[field]:!prev[field]};try{localStorage.setItem(key,JSON.stringify(next));}catch{}return next;});
 };
 const share=async()=>{
  const data={title:`${name}｜UOLINK魚図鑑`,text:`UOLINKで${name}をチェック`,url:window.location.href};
  try{
   if(navigator.share){await navigator.share(data);return;}
   await navigator.clipboard.writeText(window.location.href);setNotice('リンクをコピーしました');
  }catch{}
 };
 return <div className={s.tools} aria-label={`${name}のアクション`}>
  <button type="button" className={state.favorite?s.active:''} onClick={()=>update('favorite')} aria-pressed={state.favorite}><span>{state.favorite?'♥':'♡'}</span><small>お気に入り</small></button>
  <button type="button" className={state.caught?s.active:''} onClick={()=>update('caught')} aria-pressed={state.caught}><span>🎣</span><small>{state.caught?'釣った！✓':'釣った！'}</small></button>
  <button type="button" onClick={share}><span>↗</span><small>シェア</small></button>
  <button type="button" className={state.saved?s.active:''} onClick={()=>update('saved')} aria-pressed={state.saved}><span>{state.saved?'▣':'▢'}</span><small>{state.saved?'保存済み':'保存'}</small></button>
  {notice&&<div className={s.notice} role="status">{notice}</div>}
 </div>;
}
