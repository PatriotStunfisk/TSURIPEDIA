'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {useQuest} from './QuestProvider';
import {missions} from '@/lib/quest/progress';
import s from './Quest.module.css';
export default function QuestMissions(){
 const {save,ready,claim}=useQuest();const [now,setNow]=useState(0);
 useEffect(()=>{setNow(Date.now());const timer=window.setInterval(()=>setNow(Date.now()),30000);return()=>window.clearInterval(timer)},[]);
 return <><h1 className={s.heading}>ミッション</h1><p>達成したミッションの報酬を受け取ろう。デイリーは日本時間の0時に切り替わります。</p>{ready&&now?(['初心者','デイリー','チャレンジ'] as const).map(group=><section key={group}><h2>{group} QUEST</h2><div className={s.grid}>{missions(save,now).filter(m=>m.group===group).map(m=><article className={s.card} key={m.id}><span className={s.badge}>+{m.xp} XP</span><h3>{m.title}</h3><p>{m.description}</p><progress aria-label={`${m.title}の進捗`} value={m.progress} max={m.goal}/><p>{m.progress} / {m.goal}</p><button className={s.primary} onClick={()=>claim(m.id)} disabled={m.claimed||m.progress<m.goal}>{m.claimed?'受取済み':m.progress>=m.goal?'報酬を受け取る':'挑戦中'}</button></article>)}</div></section>):<p role="status">記録を読み込み中…</p>}<div className={s.actions}><Link className={s.primary} href="/quest/play">釣りに行く</Link></div></>;
}
