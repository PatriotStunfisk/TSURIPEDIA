'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {ageDays} from '@/lib/catches/activity';
import type {ExternalCatch} from '@/lib/catches/sources';
import type {CatchOptions} from './CatchReports';
import s from './CatchResults.module.css';
export default function ExternalCatchFeed({query,options,hideEmpty=false,spotView=false}:{query:string;options:CatchOptions;hideEmpty?:boolean;spotView?:boolean}){
 const [reports,setReports]=useState<Omit<ExternalCatch,'actor'>[]>([]),[error,setError]=useState(''),[loading,setLoading]=useState(true),[source,setSource]=useState('all'),[expanded,setExpanded]=useState(false);
 useEffect(()=>{const controller=new AbortController();setReports([]);setError('');setLoading(true);setExpanded(false);fetch('/api/catches/external?'+query,{signal:controller.signal}).then(async r=>{const v=await r.json();if(!r.ok)throw Error(v.error||'釣果を読み込めませんでした。');setReports(v.reports);}).catch(e=>{if(!controller.signal.aborted)setError(e.message);}).finally(()=>{if(!controller.signal.aborted)setLoading(false);});return()=>controller.abort();},[query]);
 if(hideEmpty&&!loading&&!reports.length&&!error)return null;
 const filtered=reports.filter(r=>source==='all'||r.sourceType===source),visible=expanded?filtered:filtered.slice(0,6);
 return <section className={s.section} aria-label="公式・外部の最近の釣果"><div className={s.heading}><h3>公式・外部の釣果</h3><span>直近30日</span></div>
 <div className={s.filters} aria-label="釣果の情報区分">{[['all','すべて'],['official','公式情報'],['external','外部情報']].map(([value,label])=><button key={value} type="button" aria-pressed={source===value} onClick={()=>{setSource(value);setExpanded(false);}}>{label}</button>)}</div>
 {loading?<p role="status" className={s.message}>釣果を読み込み中…</p>:error?<p role="status" className={s.message}>{error}</p>:!filtered.length?<p className={s.message}>この条件の{source==='official'?'公式':source==='external'?'外部':''}釣果はまだありません。</p>:<div className={s.list}>{visible.map(r=>{const fishName=options.fish.find(f=>f.slug===r.fishSlug)?.name??r.fishSlug;return <article className={s.card} key={r.id}>
 <div className={s.date}><time dateTime={r.date}>{Number(r.date.slice(5,7))}/{Number(r.date.slice(8,10))}</time>{ageDays(r.date)<7&&<small>7日以内</small>}</div><div className={s.body}>
 <div className={s.facts}><Link href={`/fish/${r.fishSlug}`}>{fishName}</Link>{r.sizeCm&&<span>{r.sizeCm}<small>cm</small></span>}{r.count&&<span>×{r.count}<small>匹</small></span>}</div>
 <div className={s.meta}><span className={r.sourceType==='official'?s.official:s.external}>{r.sourceType==='official'?'公式情報':'外部情報'}</span>{r.countScope==='facility'&&<span>施設集計</span>}{r.countScope==='boat'&&<span>船中合計</span>}{r.sourceType==='official'&&<span>{r.sourceName??r.source}</span>}</div>
 {!spotView&&<Link className={s.spot} href={`/spots/${r.spotSlug}`}>{options.spots.find(p=>p.slug===r.spotSlug)?.name??r.spotSlug} →</Link>}

 <div className={s.links}>{r.sourceType==='official'&&<a href={r.sourceUrl} target="_blank" rel="noopener noreferrer">出典の釣果を読む ↗</a>}{r.methodSlug&&<Link href={`/methods/${r.methodSlug}`}>この釣法・必要な道具を見る →</Link>}</div>
 </div></article>;})}</div>}
 {!loading&&reports.some(r=>r.sourceType==='official')&&<details className={s.note}><summary>情報の見方</summary><p>公式情報には施設全体の集計を含みます。件数は魚の総数ではなく釣果情報の件数です。</p></details>}
 {!loading&&filtered.length>6&&<button type="button" className={s.more} aria-expanded={expanded} onClick={()=>setExpanded(v=>!v)}>{expanded?'表示を少なくする':`残りの釣果を見る（${filtered.length-6}件）`}</button>}
 </section>;
}
