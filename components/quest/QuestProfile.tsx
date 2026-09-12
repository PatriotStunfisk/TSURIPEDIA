'use client';
import Link from 'next/link';
import {useQuest} from './QuestProvider';
import {levelInfo} from '@/lib/quest/progress';
import s from './Quest.module.css';
import {measure} from '@/lib/quest/presentation';
export default function QuestProfile(){
 const {save,fish,ready}=useQuest();const level=levelInfo(save.xp);
 if(!ready)return <p role="status">記録を読み込み中…</p>;
 return <><h1 className={s.heading}>マイ記録</h1><section className={s.hero}><span className={s.eyebrow}>ANGLER PROFILE</span><h2>LEVEL {level.level} · {level.title}</h2><p>合計 {save.xp} XP / 次のレベルまで {level.next-save.xp} XP</p><progress className={s.inlineProgress} aria-label="次のレベルへの経験値" max={level.required} value={level.progress}/></section><div className={s.stats}><div className={s.stat}><span>総釣果</span><b>{save.total} 匹</b></div><div className={s.stat}><span>捕獲魚種</span><b>{Object.keys(save.records).filter(slug=>fish.some(f=>f.slug===slug)).length}</b></div><div className={s.stat}><span>ミッション報酬</span><b>{save.claimed.length} 回</b></div></div><h2>最近の釣果</h2>{save.recent.length?<ul className={s.recordList}>{save.recent.slice(0,20).map(c=><li key={c.id}><Link href={`/fish/${c.slug}`}><b>{fish.find(f=>f.slug===c.slug)?.name??c.slug}</b> · {measure(c.size,fish.find(f=>f.slug===c.slug))}</Link><span>{new Date(c.at).toLocaleDateString('ja-JP',{timeZone:'Asia/Tokyo'})} · +{c.xp} XP</span></li>)}</ul>:<p className={s.empty}>まだ釣果はありません。最初のキャストへ出かけよう。</p>}<div className={s.actions}><Link className={s.primary} href="/quest/play">釣りに行く</Link><Link className={s.secondary} href="/quest/missions">ミッション報酬</Link></div><p className={s.note}>最新200件の釣果を保存し、この画面では20件を表示します。総釣果・魚種別の最大サイズは保持します。ブラウザのサイトデータを消すと記録も消えます。</p></>;
}
