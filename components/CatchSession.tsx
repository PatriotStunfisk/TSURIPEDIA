'use client';
import {useEffect,useState} from 'react';
export type CatchSession={user:{id:string;email?:string}|null;moderator?:boolean;available?:boolean;loading:boolean;error?:string};
export function useCatchSession(){const [session,setSession]=useState<CatchSession>({user:null,loading:true});useEffect(()=>{const controller=new AbortController();fetch('/api/catch-auth',{signal:controller.signal,cache:'no-store'}).then(async r=>{const v=await r.json();if(!r.ok)throw Error(v.error);setSession({...v,loading:false});}).catch(e=>{if(!controller.signal.aborted)setSession({user:null,loading:false,error:e.message});});return()=>controller.abort();},[]);return session;}
export function loginHref(next:string){return `/login?next=${encodeURIComponent(next)}`;}
