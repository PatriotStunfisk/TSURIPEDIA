'use client';
import {useState} from 'react';
import KasagoViewer from './KasagoViewer';

export default function KasagoMedia(){
 const [mode,setMode]=useState<'2d'|'3d'>('2d');
 const button=(active:boolean)=>({padding:'8px 12px',borderRadius:999,border:`1px solid ${active?'#1687e8':'#416377'}`,background:active?'#1687e8':'#0b2434d9',color:active?'#fff':'#cfe7f2',fontSize:10,cursor:'pointer'} as const);
 return <div style={{position:'absolute',inset:0,overflow:'hidden'}}>
  <div style={{position:'absolute',left:18,top:18,zIndex:6,display:'flex',gap:6}}>
   <button style={button(mode==='2d')} onClick={()=>setMode('2d')}>▧ 2D画像</button>
   <button style={button(mode==='3d')} onClick={()=>setMode('3d')}>◈ 3D表示</button>
   <span style={{...button(false),cursor:'default'}}>◎ AR予定</span>
  </div>
  <div style={{position:'absolute',inset:0,padding:'54px 22px 48px',display:'flex',alignItems:'center',justifyContent:'center'}}>
   {mode==='2d'?<img src="/images/fish/kasago-real-v2.png?v=20260911-1" alt="カサゴの図鑑画像" style={{display:'block',width:'100%',height:'100%',objectFit:'contain',filter:'drop-shadow(0 14px 18px rgba(0,20,32,.28))'}}/>:<KasagoViewer/>}
  </div>
  <div style={{position:'absolute',left:'50%',bottom:18,transform:'translateX(-50%)',zIndex:6,color:'#c9ebf7',fontSize:10,background:'#06203099',border:'1px solid #2e566b',padding:'6px 10px',borderRadius:999,whiteSpace:'nowrap'}}>{mode==='2d'?'高精細2D図鑑画像':'ドラッグして360°観察'}</div>
 </div>
}
