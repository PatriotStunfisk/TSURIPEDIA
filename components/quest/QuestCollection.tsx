'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {useQuest} from './QuestProvider';
import ProfileImage from '@/components/ProfileImage';
import QuestFishView from './QuestFishView';
import s from './Quest.module.css';
import {measure} from '@/lib/quest/presentation';
export default function QuestCollection(){
 const {fish,save,ready}=useQuest();const [selected,setSelected]=useState('');const active=fish.find(f=>f.slug===selected&&save.records[f.slug]);const detail=useRef<HTMLElement>(null);
 useEffect(()=>{if(selected)detail.current?.focus()},[selected]);
 return <><h1 className={s.heading}>捕獲図鑑</h1><p>出会った魚を、記録とともに。未捕獲の魚は釣り上げると名前が開きます。</p>{active&&<section ref={detail} tabIndex={-1} id="quest-fish-detail" className={s.result}><h2>{active.name}</h2><p>{save.records[active.slug].count}匹 · 最大{active.sizeLabel} {measure(save.records[active.slug].best,active)}</p><QuestFishView key={active.slug} fish={active}/><button className={s.secondary} onClick={()=>setSelected('')}>詳細を閉じる</button></section>}<div className={s.collection}>{fish.map((f,i)=>{const record=ready?save.records[f.slug]:undefined;return <button className={s.fishButton} key={f.slug} disabled={!record} aria-expanded={record?selected===f.slug:undefined} aria-controls={record?'quest-fish-detail':undefined} onClick={()=>setSelected(f.slug)}>{record&&f.image&&<ProfileImage optimized src={f.image} alt={f.name} sizes="(max-width:760px) 160px, 260px" style={{width:'100%',height:100,objectFit:'contain'}}/>}<span>No. {String(i+1).padStart(3,'0')}</span><b className={!record?s.locked:undefined}>{record?f.name:'？？？？'}</b><span>{record?`${record.count}匹 / 最大 ${measure(record.best,f)}`:'未捕獲'}</span>{record&&<span>記録・3D・詳しい図鑑を見る →</span>}</button>})}</div><div className={s.actions}><Link className={s.primary} href="/quest/play">次の魚に出会う</Link></div></>;
}
