'use client';
import {useEffect,useState} from 'react';
import s from './Submission.module.css';
export default function CatchLike({id}:{id:string}){
 const [state,setState]=useState({count:0,liked:false,ready:false}),[busy,setBusy]=useState(false),[error,setError]=useState('');
 useEffect(()=>{const controller=new AbortController();fetch(`/api/catches/likes?id=${id}`,{signal:controller.signal}).then(async r=>{const v=await r.json();if(!r.ok||!Number.isInteger(v.count)||typeof v.liked!=='boolean')throw Error();setState({...v,ready:true});}).catch(()=>{});return()=>controller.abort();},[id]);
 async function toggle(){setBusy(true);setError('');try{const r=await fetch('/api/catches/likes',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id,liked:!state.liked})});const v=await r.json();if(!r.ok)throw Error(v.error);setState({...v,ready:true});}catch(e){setError((e as Error).message);}finally{setBusy(false);}}
 return <div><button type="button" className={s.like} aria-pressed={state.liked} disabled={busy} onClick={toggle}>{state.liked?'♥':'♡'} いいね{state.ready&&` ${state.count}`}</button>{error&&<small role="status">{error}</small>}</div>;
}
