'use client';

import Script from 'next/script';
import {useEffect,useRef,useState} from 'react';
import styles from './ArticleAd.module.css';

// Enable only after site approval and consent settings are complete.
const enabled=process.env.NEXT_PUBLIC_ADSENSE_ENABLED==='true';
const client='ca-pub-9276686549248163';
export default function ArticleAd(){
 const host=useRef<HTMLElement>(null);
 const unit=useRef<HTMLModElement>(null);
 const requested=useRef(false);
 const [visible,setVisible]=useState(false);
 useEffect(()=>{
  if(!enabled||!host.current)return;
  const observer=new IntersectionObserver(([entry])=>{
   if(entry.isIntersecting&&entry.boundingClientRect.width>=300){setVisible(true);observer.disconnect();}
  },{rootMargin:'200px'});
  observer.observe(host.current);return()=>observer.disconnect();
 },[]);
 const request=()=>{
  if(requested.current||!unit.current||unit.current.hasAttribute('data-adsbygoogle-status'))return;
  requested.current=true;
  try{const target=window as typeof window&{adsbygoogle?:Record<string,never>[]};(target.adsbygoogle??=[]).push({});}catch{/* Ad blockers must not affect article navigation. */}
 };
 if(!enabled)return null;
 return <aside ref={host} className={styles.ad} aria-label="広告">
  <span className={styles.label}>広告</span>
  {visible&&<><ins ref={unit} className="adsbygoogle" style={{display:'inline-block',width:300,height:250}} data-ad-client={client} data-ad-slot="7695773092"/>
   <Script id="uolink-adsense" async crossOrigin="anonymous" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`} strategy="afterInteractive" onReady={request}/></>}
 </aside>;
}
