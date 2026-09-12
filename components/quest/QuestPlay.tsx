'use client';
import {useEffect,useMemo,useState} from 'react';
import Link from 'next/link';
import {useQuest} from './QuestProvider';
import QuestFishView from './QuestFishView';
import {questHabitats} from '@/lib/quest/habitats';
import {advance,cast,emptyRound,eligibleFish,fight,hook,jstMonth} from '@/lib/quest/engine';
import s from './Quest.module.css';

export default function QuestPlay({initialFish='',initialMethod=''}:{initialFish?:string;initialMethod?:string}){
 const {fish,methods,save,ready,addCatch}=useQuest();
 const requested=fish.find(f=>f.slug===initialFish);
 const startingMethod=methods.some(m=>m.slug===initialMethod)?initialMethod:requested?.methods[0]??'sabiki';
 const startingHabitat=questHabitats.find(h=>h.methods.includes(startingMethod)&&(!requested||requested.habitats.includes(h.slug)));
 const [habitat,setHabitat]=useState(startingHabitat?.slug??questHabitats[0].slug);const [method,setMethod]=useState(startingMethod);
 const [round,setRound]=useState(emptyRound);const [now,setNow]=useState(0);
 const location=questHabitats.find(h=>h.slug===habitat)!;
 const available=useMemo(()=>methods.filter(m=>location.methods.includes(m.slug)&&eligibleFish(fish,habitat,m.slug).length),[methods,location,fish,habitat]);
 const selected=available.find(m=>m.slug===method)??available[0];
 const targets=selected?eligibleFish(fish,habitat,selected.slug):[];
 const busy=['waiting','bite','fight'].includes(round.phase);
 useEffect(()=>{setNow(Date.now())},[]);
 useEffect(()=>{if(!busy)return;const timer=window.setInterval(()=>{const time=Date.now();setNow(time);setRound(value=>advance(value,time))},250);return()=>window.clearInterval(timer)},[busy]);
 useEffect(()=>{if(round.phase==='caught'&&round.catch)addCatch(round.catch)},[round.phase,round.catch,addCatch]);
 const start=()=>{if(!selected||busy||!ready)return;const time=Date.now();setNow(time);setRound(cast(fish,habitat,selected.slug,crypto.randomUUID(),time))};
 const message={ready:'釣り場と仕掛けを選んで、キャスト。',waiting:'仕掛けがなじむまで、アタリを待とう。',bite:'アタリ！今、合わせよう。',fight:'掛かった！テンションを見ながら取り込もう。',caught:'釣り上げた！',miss:round.reason}[round.phase];
 const step={ready:1,waiting:2,bite:3,fight:5,caught:6,miss:2}[round.phase];
 const awarded=save.recent.find(c=>c.id===round.catch?.id);
 return <><h1 className={s.heading}>釣りに行く</h1><p>今月は{now?jstMonth(now):'—'}月。図鑑の釣れる時期に合う魚は、ゲームでも出会いやすくなります。</p><ol className={s.steps} aria-label="釣りの進行">{['釣り場','仕掛け','キャスト','アタリ','合わせ','ファイト','釣果'].map((label,i)=><li key={label} aria-current={i===step?'step':undefined}>{i+1} {label}</li>)}</ol>
  <div className={s.selection}><label>釣り場<select value={habitat} disabled={busy} onChange={e=>{setHabitat(e.target.value);setRound(emptyRound())}}>{questHabitats.map(h=><option key={h.slug} value={h.slug}>{h.name}</option>)}</select></label><label>釣り方・仕掛け<select value={selected?.slug??''} disabled={busy||!available.length} onChange={e=>{setMethod(e.target.value);setRound(emptyRound())}}>{available.map(m=><option key={m.slug} value={m.slug}>{m.name}</option>)}</select></label></div>
  <p>{location.description}</p><p className={s.note}>狙える魚：{targets.map(f=>f.name).join('・')||'対象魚を準備中'}</p>
  {selected&&<details className={s.tackle}><summary>今回のタックルを確認：{selected.name}</summary><dl>{[['ロッド',selected.rod],['リール',selected.reel],['ライン',selected.line],['リーダー',selected.leader],['仕掛け',selected.rig],['餌・ルアー',selected.bait]].map(([label,text])=><div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl><p>{selected.tip}</p><Link href={`/methods/${selected.slug}`}>この釣り方を実際に見る →</Link></details>}
  <div className={s.sea}><div className={s.seaContent}><span aria-hidden="true" className={`${s.bobber} ${round.phase==='bite'?s.biting:''}`}/><h2 role="status" aria-live="polite">{message}</h2>{round.phase==='waiting'&&<p>早合わせに注意。アタリは文字とウキで知らせます。</p>}{round.phase==='bite'&&<p>合わせの残り時間：約{Math.max(0,Math.ceil((round.deadline-now)/1000))}秒</p>}{round.phase==='fight'&&<p>残り約{Math.max(0,Math.ceil((round.deadline-now)/1000))}秒 · 連打より、糸の張りに注目。</p>}</div></div>
  {round.phase==='fight'&&<div className={s.meters}><label>取り込み {Math.round(round.progress)} / 100<progress aria-label="取り込み" value={round.progress} max={100}/></label><label>テンション {Math.round(round.tension)} / 100<meter aria-label="テンション" min={0} max={100} low={10} high={70} optimum={40} value={round.tension}/></label></div>}
  <div className={s.gameControls}>{!busy&&<button className={s.primary} disabled={!ready||!targets.length} onClick={start}>{round.phase==='ready'?'キャストする':'もう一度キャスト'}</button>}{(round.phase==='waiting'||round.phase==='bite')&&<button className={s.primary} onClick={()=>setRound(value=>hook(value,Date.now()))}>合わせる</button>}{round.phase==='fight'&&<><button className={s.primary} onClick={()=>setRound(value=>fight(value,'reel',Date.now()))}>巻く</button><button className={s.secondary} onClick={()=>setRound(value=>fight(value,'ease',Date.now()))}>糸を送る</button></>}</div>
  {round.phase==='fight'&&<p className={s.note}>巻くと取り込みが進み、糸が張ります。70に近づいたら糸を送り、100になる前に緩めよう。ゲーム操作を実際の釣りの動作やドラグ設定にそのまま当てはめないでください。</p>}
  {round.phase==='caught'&&round.fish&&round.catch&&<section className={s.result} aria-label="釣果"><span className={s.eyebrow}>CATCH & DISCOVER</span><h2>{round.fish.name}を釣った！</h2><p><b>{round.fish.sizeLabel} {round.catch.size}cm</b> · {round.catch.grade==='record'?'記録級':round.catch.grade==='big'?'BIG':'ナイスキャッチ'} · レア度 {round.fish.rarity} / 5</p><p>{awarded?`+${awarded.xp} XP · 捕獲図鑑に記録しました`:'記録しています…'}</p><QuestFishView key={round.catch.id} fish={round.fish} method={round.catch.method} habitat={round.catch.habitat}/><div className={s.actions}><Link className={s.primary} href="/quest/collection">捕獲図鑑へ</Link><Link className={s.secondary} href="/quest/missions">ミッションを確認</Link></div></section>}
 </>;
}
