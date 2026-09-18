'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import CatchCard from './CatchCard';
import {useCatchSession} from './CatchSession';
import type {CatchOptions} from './CatchReports';
import type {PublicCatch} from '@/lib/catches/types';
import s from './Submission.module.css';
export default function CatchFeed({options,prefectures,initialSpot}:{initialSpot?:string;options:CatchOptions;prefectures:string[]}){
 const session=useCatchSession();const [filters,setFilters]=useState({fish:'',method:'',prefecture:'',spot:initialSpot??'',from:'',to:''}),[reports,setReports]=useState<PublicCatch[]>([]),[error,setError]=useState(''),[loading,setLoading]=useState(true),[more,setMore]=useState(false),[page,setPage]=useState(0),[revision,setRevision]=useState(0);
 const key=new URLSearchParams({...filters,feed:'1'}).toString();
 useEffect(()=>{const controller=new AbortController();setLoading(true);setError('');fetch(`/api/catches?${key}&offset=${page*10}`,{signal:controller.signal}).then(async r=>{const v=await r.json();if(!r.ok)throw Error(v.error);setReports(old=>page?[...old,...v.reports]:v.reports);setMore(v.reports.length===10);}).catch(e=>{if(!controller.signal.aborted)setError(e.message);}).finally(()=>{if(!controller.signal.aborted)setLoading(false);});return()=>controller.abort();},[key,page,revision]);
 function change(name:keyof typeof filters,value:string){setPage(0);setReports([]);setFilters(v=>({...v,[name]:value}));}
 return <section aria-label="新着釣果"><p>利用者の実釣報告を新着順で表示します。投稿数は釣れやすさを示すものではありません。</p><div className={s.feedFilters}>
 <label className={s.field}>魚種<select aria-label="魚種" value={filters.fish} onChange={e=>change('fish',e.target.value)}><option value="">すべての魚</option>{options.fish.map(f=><option key={f.slug} value={f.slug}>{f.name}</option>)}<option value="other">その他</option><option value="unknown">魚種不明</option></select></label>
 <label className={s.field}>都道府県<select aria-label="都道府県" value={filters.prefecture} onChange={e=>change('prefecture',e.target.value)}><option value="">全国</option>{prefectures.map(p=><option key={p}>{p}</option>)}</select></label>
 <label className={s.field}>釣法<select aria-label="釣法" value={filters.method} onChange={e=>change('method',e.target.value)}><option value="">すべての釣法</option>{options.methods.map(m=><option key={m.slug} value={m.slug}>{m.name}</option>)}</select></label>
 <label className={s.field}>釣り場<select aria-label="釣り場" value={filters.spot} onChange={e=>change('spot',e.target.value)}><option value="">すべての釣り場</option>{options.spots.map(p=><option key={p.slug} value={p.slug}>{p.name}</option>)}</select></label>
 <label className={s.field}>釣行日（開始）<input type="date" value={filters.from} onChange={e=>change('from',e.target.value)}/></label><label className={s.field}>釣行日（終了）<input type="date" value={filters.to} onChange={e=>change('to',e.target.value)}/></label></div>
 <div className={s.actions}>{[7,30].map(days=><button key={days} className={`${s.button} ${s.secondary}`} onClick={()=>{setPage(0);setReports([]);setFilters(v=>({...v,from:new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo'}).format(new Date(Date.now()-(days-1)*86400000)),to:''}));}}>直近{days}日</button>)}<button className={s.textButton} onClick={()=>{setPage(0);setReports([]);setFilters({fish:'',method:'',prefecture:'',spot:'',from:'',to:''});}}>条件をリセット</button></div>
 {reports.map(r=><CatchCard key={r.id} report={r} options={options} publicCard authenticated={!!session.user} onDeleted={()=>{setPage(0);setRevision(n=>n+1);}}/>)}{loading&&<p role="status">釣果を読み込み中…</p>}{error&&<p role="alert">{error}</p>}{!loading&&!error&&!reports.length&&<p className={s.empty}>この条件の投稿はまだありません。<Link href="/spots">釣り場マップから最初の釣果を投稿する →</Link></p>}{more&&<button disabled={loading} className={s.button} onClick={()=>setPage(n=>n+1)}>さらに釣果を見る</button>}
 </section>;
}
