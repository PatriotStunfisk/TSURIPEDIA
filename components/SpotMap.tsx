'use client';

import {useEffect,useRef,useState} from 'react';

type SpotPoint={name:string;area:string;lat:number;lng:number;fish:string};

const points:SpotPoint[]=[
 {name:'武庫川一文字',area:'兵庫県尼崎市・西宮市沖',lat:34.6968,lng:135.3526,fish:'アジ・サバ・タチウオ・青物'},
 {name:'平磯海づり公園',area:'兵庫県神戸市垂水区',lat:34.6255,lng:135.0679,fish:'アジ・マダイ・青物・根魚'},
 {name:'とっとパーク小島',area:'大阪府泉南郡岬町',lat:34.3064,lng:135.0967,fish:'アジ・タチウオ・マダイ・青物'},
 {name:'大阪南港魚つり園護岸',area:'大阪府大阪市住之江区',lat:34.6156,lng:135.4019,fish:'アジ・サバ・タチウオ・青物'},
 {name:'加太港',area:'和歌山県和歌山市',lat:34.2756,lng:135.0714,fish:'アジ・キス・マダイ・青物'}
];

declare global{interface Window{google:any;__uolinkInitMap?:()=>void}}

export default function SpotMap(){
 const el=useRef<HTMLDivElement>(null);const [error,setError]=useState('');
 useEffect(()=>{
  const key=process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if(!key){setError('Google Maps APIキーを設定すると、ここにUOLINK釣り場マップが表示されます。');return}
  const draw=()=>{
   if(!el.current||!window.google)return;
   const map=new window.google.maps.Map(el.current,{center:{lat:34.55,lng:135.20},zoom:8,mapTypeControl:false,streetViewControl:false,fullscreenControl:true});
   const info=new window.google.maps.InfoWindow();
   points.forEach(p=>{const marker=new window.google.maps.Marker({position:{lat:p.lat,lng:p.lng},map,title:p.name});marker.addListener('click',()=>{info.setContent(`<div style="max-width:240px;padding:4px"><strong>${p.name}</strong><br><small>${p.area}</small><p style="margin:8px 0 0">🐟 ${p.fish}</p></div>`);info.open({map,anchor:marker})})});
  };
  if(window.google?.maps){draw();return}
  window.__uolinkInitMap=draw;
  const existing=document.querySelector('script[data-uolink-maps]');if(existing)return;
  const script=document.createElement('script');script.dataset.uolinkMaps='true';script.async=true;script.defer=true;script.src=`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&callback=__uolinkInitMap&v=weekly`;
  script.onerror=()=>setError('Google Mapsを読み込めませんでした。APIキーとGoogle Cloudの設定を確認してください。');document.head.appendChild(script);
 },[]);
 return <div style={{margin:'28px 0'}}><div ref={el} style={{height:'min(62vh,620px)',minHeight:420,borderRadius:24,overflow:'hidden',background:'#e8eef1'}}>{error&&<div style={{height:'100%',display:'grid',placeItems:'center',padding:32,textAlign:'center'}}><div><b>UOLINK FISHING MAP</b><p>{error}</p></div></div>}</div><small style={{display:'block',marginTop:10,opacity:.7}}>※釣り場の位置・利用ルール・立入可否は現地の最新情報も確認してください。</small></div>
}
