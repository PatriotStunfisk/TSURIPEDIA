'use client';
import Link from 'next/link';
import {useMemo,useState} from 'react';
import {selectMethods,type MethodCard,type MethodPlace,type MethodSort} from '@/lib/method-catalog';
import styles from './MethodExplorer.module.css';
export default function MethodExplorer({items}:{items:MethodCard[]}){
 const [query,setQuery]=useState(''),[place,setPlace]=useState<MethodPlace>('all'),[sort,setSort]=useState<MethodSort>('recommended');
 const list=useMemo(()=>selectMethods(items,query,place,sort),[items,query,place,sort]);
 return <><form className={styles.filters} onSubmit={e=>e.preventDefault()} role="search" aria-label="釣り方を探す">
 <label className={styles.search}>釣法・魚名で検索<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="エギング、アジ、ヘラブナなど"/></label>
 <label>釣る場所<select value={place} onChange={e=>setPlace(e.target.value as MethodPlace)}><option value="all">すべて</option><option value="shore">海の岸から</option><option value="boat">船・ボート</option><option value="freshwater">湖・川・管理池</option></select></label>
 <label>並べ替え<select value={sort} onChange={e=>setSort(e.target.value as MethodSort)}><option value="recommended">基本の釣りから</option><option value="name">名前順</option><option value="easy">難易度が低い順</option><option value="advanced">難易度が高い順</option></select></label>
 </form><p className={styles.count} role="status">{list.length}種類の釣り方{(query||place!=='all')&&<button type="button" onClick={()=>{setQuery('');setPlace('all');}}>条件を解除</button>}</p>
 <div className={styles.list}>{list.map(m=><article id={m.slug} key={m.slug}><div className={styles.tags}><span>{m.places.join('・')}</span><span>難易度 {'★'.repeat(m.difficulty)}{'☆'.repeat(5-m.difficulty)}</span></div><h2><Link href={`/methods/${m.slug}`} prefetch={false}>{m.name} <span aria-hidden="true">→</span></Link></h2><p>{m.subtitle}</p><small>対象魚：{m.target.join('・')}</small><Link href={`/methods/${m.slug}`} prefetch={false} className={styles.cta}>仕掛け・釣り方を見る →</Link></article>)}</div>{!list.length&&<p>該当する釣り方がありません。魚名や場所の条件を変えて探してください。</p>}</>;
}
