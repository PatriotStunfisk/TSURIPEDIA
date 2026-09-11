'use client';

import {useEffect,useRef,useState} from 'react';
import type {CSSProperties,KeyboardEvent} from 'react';

type Props={slug:string;name:string;className?:string;variant?:'rail'|'inline'};
type StoredFish={slug:string;name:string;url:string;updatedAt:string};

const keys={favorite:'uolink:favorites',caught:'uolink:caught'} as const;

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
 const [notice,setNotice]=useState('');
 const timer=useRef<number|undefined>(undefined);

 useEffect(()=>{
  setFavorite(hasItem(keys.favorite,slug));
  setCaught(hasItem(keys.caught,slug));
  return()=>{if(timer.current)window.clearTimeout(timer.current)};
 },[slug]);

 const fish=():StoredFish=>({slug,name,url:location.href,updatedAt:new Date().toISOString()});
 const flash=(text:string)=>{setNotice(text);if(timer.current)window.clearTimeout(timer.current);timer.current=window.setTimeout(()=>setNotice(''),1800)};
 const toggleFavorite=()=>{const on=toggleItem(keys.favorite,fish());setFavorite(on);flash(on?'お気に入りに追加しました':'お気に入りから外しました')};
 const toggleCaught=()=>{const on=toggleItem(keys.caught,fish());setCaught(on);flash(on?'「釣った！」に記録しました':'釣果記録を解除しました')};
 const share=async()=>{
  const data={title:`${name}｜UOLINK魚図鑑`,text:`${name}の魚図鑑をチェック`,url:location.href};
  try{
   if(navigator.share){await navigator.share(data);return}
   if(navigator.clipboard){await navigator.clipboard.writeText(location.href);flash('リンクをコピーしました');return}
   flash('この端末ではシェアを利用できません');
  }catch(e){if((e as Error)?.name!=='AbortError')flash('シェアできませんでした')}
 };
 const savePdf=()=>{
  const oldTitle=document.title;
  document.title=`UOLINK_${name}_魚図鑑`;
  document.body.classList.add('uolink-pdf-mode');
  const restore=()=>{document.body.classList.remove('uolink-pdf-mode');document.title=oldTitle;window.removeEventListener('afterprint',restore)};
  window.addEventListener('afterprint',restore);
  flash('PDF保存用の画面を開きます');
  window.setTimeout(()=>window.print(),120);
  window.setTimeout(()=>{if(document.body.classList.contains('uolink-pdf-mode'))restore()},5000);
 };
 const keyAction=(fn:()=>void|Promise<void>)=>(e:KeyboardEvent<HTMLSpanElement>)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();void fn()}};
 const inline=variant==='inline';
 const wrapStyle:CSSProperties=inline?{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:'0',margin:'16px 0 20px',background:'#061827',border:'1px solid #173c50',borderRadius:'16px',overflow:'hidden',color:'#fff'}:{};
 const itemStyle:CSSProperties=inline?{display:'grid',placeItems:'center',minHeight:'72px',borderRight:'1px solid #173c50',background:'#061827',fontSize:'20px',cursor:'pointer',position:'relative'}:{cursor:'pointer',position:'relative',background:'transparent',color:'inherit'};
 const lastItemStyle:CSSProperties=inline?{...itemStyle,borderRight:'0'}:itemStyle;
 const smallStyle:CSSProperties=inline?{display:'block',fontSize:'9px',marginTop:'4px',color:'#afc9d7'}:{};
 const activeStyle=(on:boolean):CSSProperties=>on?{...itemStyle,background:'#1687e8',color:'#fff'}:{...itemStyle,background:inline?'#061827':'transparent',color:'inherit'};
 return <>
  <style>{`@media print{body.uolink-pdf-mode{background:#fff!important;color:#132333!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}body.uolink-pdf-mode .header,body.uolink-pdf-mode .footer,body.uolink-pdf-mode [aria-label$="のアクション"],body.uolink-pdf-mode .nextActions{display:none!important}body.uolink-pdf-mode .section{max-width:none!important;padding:18px 22px!important}body.uolink-pdf-mode .pageTop{padding-top:0!important}body.uolink-pdf-mode article,body.uolink-pdf-mode aside,body.uolink-pdf-mode section{break-inside:avoid-page}body.uolink-pdf-mode a{text-decoration:none!important;color:inherit!important}.uolink-print-head{display:flex!important;justify-content:space-between;align-items:flex-end;border-bottom:2px solid #1687e8;padding:0 0 12px;margin:0 0 18px}.uolink-print-head b{font-size:24px;color:#061827}.uolink-print-head span{font-size:12px;color:#667786}}`}</style>
  <div className="uolink-print-head" style={{display:'none'}}><b>UOLINK 魚図鑑</b><span>{name} / {new Date().toLocaleDateString('ja-JP')}</span></div>
  <div className={className} style={wrapStyle} aria-label={`${name}のアクション`}>
   <span role="button" tabIndex={0} aria-pressed={favorite} aria-label={`${name}をお気に入り${favorite?'から外す':'に追加'}`} onClick={toggleFavorite} onKeyDown={keyAction(toggleFavorite)} style={activeStyle(favorite)}>{favorite?'♥':'♡'}<small style={smallStyle}>お気に入り</small></span>
   <span role="button" tabIndex={0} aria-pressed={caught} aria-label={`${name}の釣果記録を${caught?'解除':'追加'}`} onClick={toggleCaught} onKeyDown={keyAction(toggleCaught)} style={activeStyle(caught)}>🎣<small style={smallStyle}>釣った！</small></span>
   <span role="button" tabIndex={0} aria-label={`${name}をシェア`} onClick={()=>void share()} onKeyDown={keyAction(share)} style={itemStyle}>↗<small style={smallStyle}>シェア</small></span>
   <span role="button" tabIndex={0} aria-label={`${name}をPDFで保存`} onClick={savePdf} onKeyDown={keyAction(savePdf)} style={lastItemStyle}>📄<small style={smallStyle}>PDF保存</small></span>
   {notice&&<span aria-live="polite" style={{position:'fixed',left:'50%',bottom:'24px',transform:'translateX(-50%)',zIndex:1000,background:'#061827',color:'#fff',padding:'10px 14px',borderRadius:'999px',fontSize:'12px',whiteSpace:'nowrap',boxShadow:'0 8px 30px #0003'}}>{notice}</span>}
  </div>
 </>
}
