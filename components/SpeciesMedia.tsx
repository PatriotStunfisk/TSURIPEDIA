'use client';
import {useState} from 'react';
import dynamic from 'next/dynamic';
import ProfileImage from './ProfileImage';
const Viewer=dynamic(()=>import('./FishViewer'),{ssr:false,loading:()=><p>3Dモデルを読み込み中…</p>});

export default function SpeciesMedia({name,image,modelSrc}:{name:string;image:string;modelSrc?:string}){
 const [mode,setMode]=useState<'2d'|'3d'>('2d');
 return <div style={{position:'absolute',inset:0,overflow:'hidden'}}>
  {modelSrc&&<div style={{position:'absolute',left:18,top:18,zIndex:6,display:'flex',gap:6}}>{(['2d','3d'] as const).map(value=><button key={value} aria-pressed={mode===value} onClick={()=>setMode(value)} style={{padding:'8px 12px',borderRadius:999,border:'1px solid #416377',background:mode===value?'#1687e8':'#0b2434',color:'#fff',cursor:'pointer'}}>{value==='2d'?'▧ 2D画像':'◈ 3D表示'}</button>)}</div>}
  <div style={{position:'absolute',inset:0,padding:'54px 22px 48px',display:'flex',alignItems:'center',justifyContent:'center'}}>
   {mode==='3d'&&modelSrc?<Viewer modelSrc={modelSrc}/>:<ProfileImage optimized loading="eager" fetchPriority="high" sizes="(max-width: 800px) 100vw, 70vw" src={image} alt={`${name}の図鑑画像`} width={1536} height={1024} style={{width:'100%',height:'100%',objectFit:'contain'}}/>}
  </div>
 </div>
}
