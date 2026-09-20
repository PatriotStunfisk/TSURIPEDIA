'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import type {SpotActivity} from '@/lib/catches/activity';
export function useCatchActivity(fish='',method='',days=30){
 const [revision,setRevision]=useState(0);useEffect(()=>{const refresh=()=>setRevision(n=>n+1);window.addEventListener('uolink-public-catch',refresh);return()=>window.removeEventListener('uolink-public-catch',refresh);},[]);
 const [state,setState]=useState<{spots:SpotActivity[];loading:boolean;error:string}>({spots:[],loading:true,error:''});
 useEffect(()=>{const controller=new AbortController();setState({spots:[],loading:true,error:''});fetch('/api/catches/activity?'+new URLSearchParams({fish,method,days:String(days)}),{signal:controller.signal}).then(async r=>{const v=await r.json();if(!r.ok||!v.available)throw Error(v.error||'最近の釣果集計は準備中です。');setState({spots:v.spots,loading:false,error:''});}).catch(e=>{if(!controller.signal.aborted)setState({spots:[],loading:false,error:e.message});});return()=>controller.abort();},[fish,method,days,revision]);return state;
}
export function ActivityReason({activity,fishNames}:{activity:SpotActivity;fishNames:Record<string,string>}){return <p style={{fontSize:12,margin:'8px 0'}}><b>{activity.level==='hot'?'🔥 最近の釣果が集まっています':'最近の釣果あり'}</b><br/>直近7日：{activity.count7}件 · 30日：{activity.count30}件<br/>{activity.fish.map(f=>`${fishNames[f.slug]??'その他'} ${f.count}`).join(' / ')}<small>（30日・報告件数）</small></p>;}
export default function CatchActivity({fishNames,spotNames}:{fishNames:Record<string,string>;spotNames:Record<string,string>}){
 const state=useCatchActivity();const hot=state.spots.filter(s=>s.level==='hot').slice(0,6);const fish=new Map<string,number>();for(const spot of state.spots)for(const f of spot.fish)fish.set(f.slug,(fish.get(f.slug)??0)+f.count);
 return <section aria-label="今釣れている場所"><h2>最近の釣果から探す</h2><p>投稿・確認できた情報の集計です。釣れることを保証する情報ではありません。</p>{state.loading?<p role="status">集計を確認中…</p>:state.error?<p role="status">{state.error}</p>:<><h3>HOTな釣り場</h3>{hot.length?hot.map(s=><div key={s.spotSlug}><Link href={`/spots?near=${s.spotSlug}&recent=30days`}>{spotNames[s.spotSlug]??s.spotSlug} →</Link><ActivityReason activity={s} fishNames={fishNames}/></div>):<p>HOTと判定できる情報はまだありません。最初の釣果をMAPから投稿できます。</p>}<h3>最近報告のある魚</h3><div className="chips">{[...fish].sort((a,b)=>b[1]-a[1]).slice(0,8).map(([slug])=><Link key={slug} href={`/spots?fish=${slug}&recent=30days`}>{fishNames[slug]??'その他'}の最近の釣果を見る →</Link>)}</div></>}</section>;
}
