'use client';
import {useEffect,useState} from 'react';
import type {PublicCatch} from '@/lib/catches/types';
export default function RecentCatches({spot,names}:{spot:string;names:Record<string,string>}){
 const [state,setState]=useState<{loading:boolean;available:boolean;reports:PublicCatch[]}>({loading:true,available:true,reports:[]});
 useEffect(()=>{const controller=new AbortController();fetch(`/api/catches?spot=${encodeURIComponent(spot)}&summary=1`,{signal:controller.signal}).then(async r=>{if(!r.ok)throw Error();return r.json()}).then(v=>setState({loading:false,available:!!v.available,reports:v.reports??[]})).catch(()=>{if(!controller.signal.aborted)setState({loading:false,available:false,reports:[]})});return()=>controller.abort()},[spot]);
 return <section id="catches"><h2>Recent catches</h2><p className="enMuted">UOLINK community reports. Reports describe individual trips, not guaranteed catches.</p>{state.loading?<p>Loading reports…</p>:!state.available?<p>Catch reports are temporarily unavailable.</p>:state.reports.length?<ul>{state.reports.map(r=><li key={r.id}><time>{r.date}</time> — <a href={names[r.fishSlug]?`/en/fish/${r.fishSlug}`:`/spots/${spot}#catches`}>{names[r.fishSlug]??r.fishName??'Unidentified fish'}</a> {r.sizeCm?`${r.sizeCm} cm`:r.sizeLabel} ×{r.count}</li>)}</ul>:<p>No community catches have been posted for this spot yet.</p>}<a href={`/spots/${spot}#catches`} hrefLang="ja">Full catch feed and posting (Japanese) →</a></section>;
}
