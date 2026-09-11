'use client';

import Link from 'next/link';
import {useEffect,useMemo,useState} from 'react';

type StoredFish={slug:string;name:string;url:string;updatedAt:string};
const keys={favorite:'uolink:favorites',caught:'uolink:caught'} as const;

function readStore(key:string):StoredFish[]{
 try{
  const raw=window.localStorage.getItem(key);
  if(!raw)return [];
  return Object.values(JSON.parse(raw)||{});
 }catch{return []}
}

export default function FishCollectionPanel(){
 const [favorite,setFavorite]=useState<StoredFish[]>([]);
 const [caught,setCaught]=useState<StoredFish[]>([]);
 const [tab,setTab]=useState<'favorite'|'caught'>('favorite');
 const refresh=()=>{setFavorite(readStore(keys.favorite));setCaught(readStore(keys.caught))};
 useEffect(()=>{
  refresh();
  window.addEventListener('uolink:collection-change',refresh);
  window.addEventListener('storage',refresh);
  return()=>{window.removeEventListener('uolink:collection-change',refresh);window.removeEventListener('storage',refresh)};
 },[]);
 const items=useMemo(()=>[...(tab==='favorite'?favorite:caught)].sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt)),[tab,favorite,caught]);
 if(!favorite.length&&!caught.length)return null;
 return <section style={{margin:'0 0 22px',padding:'16px',border:'1px solid #173c50',borderRadius:'18px',background:'#061827',color:'#fff'}}>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',gap:'12px',marginBottom:'12px'}}><div><span style={{fontSize:'9px',fontWeight:900,letterSpacing:'1.4px',color:'#59c8f1'}}>MY FISH</span><h2 style={{margin:'4px 0 0',fontSize:'20px',color:'#fff'}}>あなたの魚図鑑</h2></div><small style={{color:'#9db9c7'}}>この端末に保存</small></div>
  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'12px'}}>
   <button type="button" onClick={()=>setTab('favorite')} style={{border:'1px solid #1e4960',borderRadius:'10px',padding:'10px',fontWeight:900,cursor:'pointer',background:tab==='favorite'?'#1687e8':'#0b2637',color:'#fff'}}>♡ お気に入り {favorite.length}</button>
   <button type="button" onClick={()=>setTab('caught')} style={{border:'1px solid #1e4960',borderRadius:'10px',padding:'10px',fontWeight:900,cursor:'pointer',background:tab==='caught'?'#1687e8':'#0b2637',color:'#fff'}}>🎣 釣った！ {caught.length}</button>
  </div>
  {items.length?<div style={{display:'flex',gap:'8px',overflowX:'auto',paddingBottom:'2px'}}>{items.map(x=><Link key={x.slug} href={`/fish/${x.slug}`} style={{flex:'0 0 auto',display:'block',minWidth:'132px',padding:'11px 12px',border:'1px solid #1f4a60',borderRadius:'12px',background:'#102f42',fontWeight:900,color:'#fff'}}>{x.name}<small style={{display:'block',marginTop:'4px',fontSize:'9px',fontWeight:700,color:'#afc9d7'}}>図鑑を見る →</small></Link>)}</div>:<p style={{margin:'2px 0 0',color:'#9db9c7',fontSize:'12px'}}>まだ登録した魚はありません。</p>}
 </section>
}
