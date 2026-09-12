'use client';
import {useState} from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import FishArt from '@/components/FishArt';
import ProfileImage from '@/components/ProfileImage';
import {questHabitats} from '@/lib/quest/habitats';
import type {QuestFish} from '@/lib/quest/types';
import s from './Quest.module.css';
const Viewer=dynamic(()=>import('@/components/FishViewer'),{ssr:false,loading:()=><p>3Dモデルを読み込み中…</p>});
export default function QuestFishView({fish,method,habitat}:{fish:QuestFish;method?:string;habitat?:string}){
 const [threeD,setThreeD]=useState(false);const location=questHabitats.find(h=>h.slug===habitat);
 return <><div className={s.visual}>{threeD&&fish.modelSrc?<Viewer modelSrc={fish.modelSrc} contain/>:fish.image?<ProfileImage optimized src={fish.image} alt={fish.name} sizes="(max-width:760px) 100vw, 50vw"/>:<FishArt slug={fish.slug} label={fish.name}/>}</div>{!fish.image&&!fish.modelSrc&&<p className={s.note}>魚体画像は準備中です。現在は共通シルエットを表示しています。</p>}{fish.modelSrc&&<div className={s.actions}><button className={s.secondary} aria-pressed={threeD} onClick={()=>setThreeD(value=>!value)}>{threeD?'2Dに戻す':'3Dで観察する'}</button></div>}<div className={s.links}><Link href={`/fish/${fish.slug}`}>魚図鑑を見る</Link><Link href={`/methods/${method??fish.methods[0]}`}>実際の釣り方</Link><Link href={`/gear?method=${method??fish.methods[0]}`}>必要な釣具</Link><Link href={`/spots?q=${encodeURIComponent(location?.mapQuery??'')}`}>釣り場を探す</Link>{fish.cooking&&<Link href={`/cooking/${fish.slug}`}>捌き方・料理</Link>}{fish.guideHref&&<Link href={fish.guideHref}>釣りGUIDE</Link>}</div></>;
}
