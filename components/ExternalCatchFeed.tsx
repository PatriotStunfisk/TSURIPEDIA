'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {ageDays} from '@/lib/catches/activity';
import type {ExternalCatch} from '@/lib/catches/sources';
import type {CatchOptions} from './CatchReports';
export default function ExternalCatchFeed({query,options,hideEmpty=false}:{query:string;options:CatchOptions;hideEmpty?:boolean}){
 const [reports,setReports]=useState<Omit<ExternalCatch,'actor'>[]>([]),[error,setError]=useState('');
 useEffect(()=>{const controller=new AbortController();setReports([]);setError('');fetch('/api/catches/external?'+query,{signal:controller.signal}).then(async r=>{const v=await r.json();if(!r.ok)throw Error(v.error);setReports(v.reports);}).catch(e=>{if(!controller.signal.aborted)setError(e.message);});return()=>controller.abort();},[query]);
 if(hideEmpty&&!reports.length&&!error)return null;
 return <section><h3>公式・外部の最近の釣果</h3>{error?<p role="status">{error}</p>:!reports.length?<p>この条件で掲載できる公式・外部の釣果はまだありません。</p>:reports.map(r=><article key={r.id}><small>{r.sourceType==='official'?'公式情報':'外部情報'} · {r.source} · {r.date} · {ageDays(r.date)<7?'7日以内':ageDays(r.date)<14?'新しい情報':'参考情報'}</small><p><Link href={`/fish/${r.fishSlug}`}>{options.fish.find(f=>f.slug===r.fishSlug)?.name??r.fishSlug}</Link> · <Link href={`/spots/${r.spotSlug}`}>{options.spots.find(s=>s.slug===r.spotSlug)?.name??r.spotSlug}</Link>{r.sizeCm?` ${r.sizeCm}cm`:''}</p><p>{r.summary}</p><a href={r.sourceUrl} target="_blank" rel="noopener noreferrer">出典の釣果を読む ↗</a>{r.methodSlug&&<p><Link href={`/methods/${r.methodSlug}`}>この釣法・必要な道具を見る →</Link></p>}</article>)}</section>;
}
