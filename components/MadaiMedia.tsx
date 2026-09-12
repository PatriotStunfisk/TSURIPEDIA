'use client';
import {useEffect,useRef,useState} from 'react';
import MadaiViewer from './MadaiViewer';

const dishReplacements=[
 {from:'マダイの刺身',to:'マダイの刺身',src:'/images/madai-sashimi-new.png'},
 {from:'マダイの炙り',to:'マダイの塩焼き',src:'/images/madai-shioyaki-new.png',name:'塩焼き',desc:'皮を香ばしく焼き、ふっくらした身をシンプルに楽しむ。'},
 {from:'マダイの鯛めし',to:'マダイの煮付け',src:'/images/madai-nitsuke-new.png',name:'煮付け',desc:'アラや切り身を甘辛く煮て、濃い旨味を引き出す。'},
 {from:'マダイの潮汁',to:'マダイの鯛茶漬け',src:'/images/madai-chazuke-new.png',name:'鯛茶漬け',desc:'刺身とだしを合わせて、さっぱりと締める一杯。'}
];

export default function MadaiMedia(){
 const [mode,setMode]=useState<'2d'|'3d'>('2d');
 const rootRef=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const viewerWrap=rootRef.current?.parentElement;
  const stage=viewerWrap?.parentElement;
  const originalTabs=stage?.firstElementChild as HTMLElement|null;
  if(!originalTabs)return;
  const prev=originalTabs.style.display;originalTabs.style.display='none';
  return()=>{originalTabs.style.display=prev};
 },[]);
 useEffect(()=>{
  const timer=window.setTimeout(()=>{
   dishReplacements.forEach(x=>{
    const img=document.querySelector<HTMLImageElement>(`img[alt="${x.from}"]`);
    if(!img)return;
    img.src=x.src;img.alt=x.to;
    const card=img.closest('article');
    if(x.name){const name=card?.querySelector('b');if(name)name.textContent=x.name;}
    if(x.desc){const desc=card?.querySelector('p');if(desc)desc.textContent=x.desc;}
   });
  },0);
  return()=>window.clearTimeout(timer);
 },[]);
 const button=(active:boolean)=>({padding:'8px 12px',borderRadius:999,border:`1px solid ${active?'#1687e8':'#416377'}`,background:active?'#1687e8':'#0b2434d9',color:active?'#fff':'#cfe7f2',fontSize:10,cursor:'pointer'} as const);
 return <div ref={rootRef} style={{position:'absolute',inset:0,overflow:'hidden'}}>
  <div style={{position:'absolute',left:18,top:18,zIndex:6,display:'flex',gap:6}}>
   <button style={button(mode==='2d')} onClick={()=>setMode('2d')}>▧ 2D画像</button>
   <button style={button(mode==='3d')} onClick={()=>setMode('3d')}>◈ 3D表示</button>
   <span style={{...button(false),cursor:'default'}}>◎ AR予定</span>
  </div>
  <div style={{position:'absolute',inset:0,padding:'54px 22px 48px',display:'flex',alignItems:'center',justifyContent:'center'}}>
   {mode==='2d'?<img src="/images/fish/madai-real-v2.png" alt="マダイの図鑑画像" style={{display:'block',width:'100%',height:'100%',objectFit:'contain',filter:'drop-shadow(0 14px 18px rgba(0,20,32,.28))'}}/>:<MadaiViewer/>}
  </div>
  <div style={{position:'absolute',left:'50%',bottom:18,transform:'translateX(-50%)',zIndex:6,color:'#c9ebf7',fontSize:10,background:'#06203099',border:'1px solid #2e566b',padding:'6px 10px',borderRadius:999,whiteSpace:'nowrap'}}>{mode==='2d'?'高精細2D図鑑画像':'ドラッグして360°観察'}</div>
 </div>
}
