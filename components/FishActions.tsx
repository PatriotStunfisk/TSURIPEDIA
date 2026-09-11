'use client';

import {useEffect,useRef,useState} from 'react';
import type {CSSProperties,KeyboardEvent} from 'react';

type Props={slug:string;name:string;className?:string;variant?:'rail'|'inline'};
type StoredFish={slug:string;name:string;url:string;updatedAt:string};

const keys={favorite:'uolink:favorites',caught:'uolink:caught',saved:'uolink:saved'} as const;

function readStore(key:string):Record<string,StoredFish>{
 try{return JSON.parse(localStorage.getItem(key)||'{}')||{}}catch{return {}}
}
function hasItem(key:string,slug:string){return !!readStore(key)[slug]}
function toggleItem(key:string,fish:StoredFish){
 const store=readStore(key);
 if(store[fish.slug])delete store[fish.slug];else store[fish.slug]=fish;
 localStorage.setItem(key,JSON.stringify(store));
 window.dispatchEvent(new CustomEvent('uolink:collection-change'));
 return !!store[fish.slug];
}

export default function FishActions({slug,name,className='',variant='rail'}:Props){
 const [favorite,setFavorite]=useState(false);
 const [caught,setCaught]=useState(false);
 const [saved,setSaved]=useState(false);
 const [notice,setNotice]=useState('');
 const timer=useRef<number|undefined>(undefined);

 useEffect(()=>{
  setFavorite(hasItem(keys.favorite,slug));
  setCaught(hasItem(keys.caught,slug));
  setSaved(hasItem(keys.saved,slug));
  return()=>{if(timer.current)window.clearTimeout(timer.current)};
 },[slug]);

 const fish=():StoredFish=>({slug,name,url:location.href,updatedAt:new Date().toISOString()});
 const flash=(text:string)=>{setNotice(text);if(timer.current)window.clearTimeout(timer.current);timer.current=window.setTimeout(()=>setNotice(''),1800)};
 const toggleFavorite=()=>{const on=toggleItem(keys.favorite,fish());setFavorite(on);flash(on?'お気に入りに追加しました':'お気に入りから外しました')};
 const toggleCaught=()=>{const on=toggleItem(keys.caught,fish());setCaught(on);flash(on?'「釣った！」に記録しました':'釣果記録を解除しました')};
 const toggleSaved=()=>{const on=toggleItem(keys.saved,fish());setSaved(on);flash(on?'あとで見るに保存しました':'保存を解除しました')};
 const share=async()=>{
  const data={title:`${name}｜UOLINK魚図鑑`,text:`${name}の魚図鑑をチェック`,url:location.href};
  try{
   if(navigator.share){await navigator.share(data);return}
   if(navigator.clipboard){await navigator.clipboard.writeText(location.href);flash('リンクをコピーしました');return}
   flash('この端末ではシェアを利用できません');
  }catch(e){if((e as Error)?.name!=='AbortError')flash('シェアできませんでした')}
 };
 const keyAction=(fn:()=>void|Promise<void>)=>(e:KeyboardEvent<HTMLSpanElement>)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();void fn()}};
 const inline=variant==='inline';
 const wrapStyle:CSSProperties=inline?{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:'8px',margin:'16px 0 20px'}:{};
 const itemStyle:CSSProperties=inline?{display:'grid',placeItems:'center',minHeight:'66px',border:'1px solid #dfe8ee',borderRadius:'12px',background:'#fff',fontSize:'20px',cursor:'pointer',position:'relative'}:{cursor:'pointer',position:'relative'};
 const smallStyle:CSSProperties=inline?{display:'block',fontSize:'10px',marginTop:'4px',color:'#667786'}:{};
 const activeStyle=(on:boolean):CSSProperties=>inline&&on?{...itemStyle,background:'#e8f5ff',borderColor:'#1687e8',color:'#087bc4'}:itemStyle;
 return <div className={className} style={wrapStyle} aria-label={`${name}のアクション`}>
  <span role="button" tabIndex={0} aria-pressed={favorite} aria-label={`${name}をお気に入り${favorite?'から外す':'に追加'}`} onClick={toggleFavorite} onKeyDown={keyAction(toggleFavorite)} style={activeStyle(favorite)}>{favorite?'♥':'♡'}<small style={smallStyle}>お気に入り</small></span>
  <span role="button" tabIndex={0} aria-pressed={caught} aria-label={`${name}の釣果記録を${caught?'解除':'追加'}`} onClick={toggleCaught} onKeyDown={keyAction(toggleCaught)} style={activeStyle(caught)}>🎣<small style={smallStyle}>釣った！</small></span>
  <span role="button" tabIndex={0} aria-label={`${name}をシェア`} onClick={()=>void share()} onKeyDown={keyAction(share)} style={itemStyle}>↗<small style={smallStyle}>シェア</small></span>
  <span role="button" tabIndex={0} aria-pressed={saved} aria-label={`${name}を${saved?'保存から外す':'あとで見るに保存'}`} onClick={toggleSaved} onKeyDown={keyAction(toggleSaved)} style={activeStyle(saved)}>▣<small style={smallStyle}>保存</small></span>
  {notice&&<span aria-live="polite" style={{position:'fixed',left:'50%',bottom:'24px',transform:'translateX(-50%)',zIndex:1000,background:'#061827',color:'#fff',padding:'10px 14px',borderRadius:'999px',fontSize:'12px',whiteSpace:'nowrap',boxShadow:'0 8px 30px #0003'}}>{notice}</span>}
 </div>
}
