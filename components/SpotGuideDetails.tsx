"use client";
import {useEffect,useState} from 'react';
import type {SpotFieldGuide} from '@/lib/spot-planning';
import SpotFieldGuideContent from './SpotFieldGuideContent';
export default function SpotGuideDetails({slug}:{slug:string}){
 const [guide,setGuide]=useState<SpotFieldGuide|null>(null);
 const [failed,setFailed]=useState(false);
 useEffect(()=>{
  const controller=new AbortController();
  fetch(`/api/spots/${encodeURIComponent(slug)}/guide`,{signal:controller.signal})
   .then(r=>{if(!r.ok)throw new Error('guide');return r.json();})
   .then(data=>setGuide(data.guide))
   .catch(()=>{if(!controller.signal.aborted)setFailed(true);});
  return ()=>controller.abort();
 },[slug]);
 if(failed)return <p><a href={`/spots/${slug}`}>釣り場個別ページで詳しい解説を見る →</a></p>;
 return guide?<SpotFieldGuideContent guide={guide}/>:null;
}
