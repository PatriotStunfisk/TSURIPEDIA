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
 return <section style={{margin:'0 0 26px',padding:'18px',border:'1px solid #dcebf1',borderRadius:'18px',background:'linear-gradient(145deg,#f7fbfd,#fff)'}}>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',gap:'12px',marginBottom:'13px'}}><div><span style={{fontSize:'10px',fontWeight:900,letterSpacing:'1px',color:'#1687e8'}}>MY FISH</span><h2 style={{margin:'4px 0 0',fontSize:'22px'}}>あなたの魚図鑑</h2></div><small style={{color:'#718491'}}>この端末に保存</small></div>
  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'14px'}}>
   <button type="button" onClick={()=>setTab('favorite')} style={{border:'1px solid #dcebf1',borderRadius:'10px',padding:'10px',fontWeight:900,cursor:'pointer',background:tab==='favorite'?'#1687e8':'#fff',color:tab==='favorite'?'#fff':'#173144'}}>♡ お気に入り {favorite.length}</button>
   <button type="button" onClick={()=>setTab('caught')} style={{border:'1px solid #dcebf1',borderRadius:'10px',padding:'10px',fontWeight:900,cursor:'pointer',background:tab==='caught'?'#1687e8':'#fff',color:tab==='caught'?'#fff':'#173144'}}>🎣 釣った！ {caught.length}</button>
  </div>
  {items.length?<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:'9px'}}>{items.map(x=><Link key={x.slug} href={`/fish/${x.slug}`} style={{display:'block',padding:'12px 13px',border:'1px solid #dcebf1',borderRadius:'12px',background:'#fff',fontWeight:900,color:'#173144'}}>{x.name}<small style={{display:'block',marginTop:'4px',fontSize:'10px',fontWeight:700,color:'#718491'}}>図鑑を見る →</small></Link>)}</div>:<p style={{margin:'4px 0 0',color:'#718491',fontSize:'13px'}}>まだ登録した魚はありません。</p>}
 </section>
}
