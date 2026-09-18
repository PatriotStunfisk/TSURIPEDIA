'use client';
import {useEffect,useState} from 'react';
import type {PublicCatch} from '@/lib/catches/types';
import s from './SpotMap.module.css';
export default function SpotCatchPreview({slug,fishNames,canPost=true,onDetails}:{onDetails?:()=>void;slug:string;fishNames:Record<string,string>;canPost?:boolean}){
 const [state,setState]=useState<{reports:PublicCatch[];loading:boolean;error:boolean}>({reports:[],loading:true,error:false});
 useEffect(()=>{const controller=new AbortController();setState({reports:[],loading:true,error:false});fetch(`/api/catches?spot=${encodeURIComponent(slug)}&summary=1`,{signal:controller.signal}).then(async r=>{const v=await r.json();if(!r.ok||!v.available)throw Error();setState({reports:v.reports.slice(0,2),loading:false,error:false});}).catch(()=>{if(!controller.signal.aborted)setState({reports:[],loading:false,error:true});});return()=>controller.abort();},[slug]);
 return <div className={s.catchPreview}><b>最近の釣果</b>{state.loading?<span>確認中…</span>:state.error?<span>釣果は詳細ページで確認できます</span>:state.reports.length?state.reports.map(r=><a key={r.id} href={`/spots/${slug}#catches`} onClick={onDetails?event=>{event.preventDefault();onDetails();}:undefined}>{fishNames[r.fishSlug]||r.fishName||(r.fishSlug==='other'?'その他':'魚種不明')} {r.sizeLabel||(r.sizeCm?`${r.sizeCm}cm`:'')} ×{r.count} <time>{r.date.slice(5).replace('-','/')}</time></a>):<span>最初の釣果を投稿しませんか</span>}<div><a href={`/spots/${slug}#catches`} onClick={onDetails?event=>{event.preventDefault();onDetails();}:undefined}>釣果をもっと見る</a>{canPost&&<a href={`/spots/${slug}#catch-form`}>＋ 釣果を投稿</a>}</div></div>;
}
