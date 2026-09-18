'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {localCatches} from '@/lib/catches/local';
import type {LocalCatch} from '@/lib/catches/types';
import CatchCard from './CatchCard';
import type {CatchOptions} from './CatchReports';
export default function LocalSpotCatches({spotSlug,options}:{spotSlug:string;options:CatchOptions}){const [rows,setRows]=useState<LocalCatch[]>([]);useEffect(()=>{let active=true;const refresh=()=>localCatches().then(all=>{if(active)setRows(all.filter(r=>r.spotSlug===spotSlug));}).catch(()=>{});void refresh();window.addEventListener('uolink-real-catch',refresh);return()=>{active=false;window.removeEventListener('uolink-real-catch',refresh);};},[spotSlug]);return rows.length?<details><summary>この端末に保存した記録（{rows.length}件）</summary><p>端末内のみの記録や、従来の匿名送信の控えもここに残ります。</p>{rows.slice(0,5).map(r=><CatchCard key={r.id} report={r} options={options}/>)}<Link href="/catches">端末内の記録をすべて見る →</Link></details>:null;}
