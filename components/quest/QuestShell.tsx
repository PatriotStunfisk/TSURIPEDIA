'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useQuest} from './QuestProvider';
import {levelInfo} from '@/lib/quest/progress';
import s from './Quest.module.css';
const pages=[['/quest','ホーム'],['/quest/play','釣りに行く'],['/quest/missions','ミッション'],['/quest/collection','捕獲図鑑'],['/quest/profile','マイ記録']];
export default function QuestShell({children}:{children:React.ReactNode}){
 const path=usePathname();const {save,ready,warning}=useQuest();
 return <div className={s.root}><div className={s.brand}><Link href="/quest"><span className={s.eyebrow}>UOLINK QUEST</span><strong>遊んで知る、次の釣り。</strong></Link><span className={s.badge}>{ready?`LEVEL ${levelInfo(save.xp).level} · ${save.xp} XP`:'記録を読み込み中'}</span></div><nav className={s.nav} aria-label="QUESTメニュー">{pages.map(([href,label])=><Link href={href} key={href} aria-current={path===href?'page':undefined}>{label}</Link>)}</nav>{warning&&<p className={s.notice} role="status">{warning}</p>}{children}<p className={s.note}>ログイン不要。釣果・図鑑・XPはこのブラウザに保存されます。別端末への同期はありません。サイズ・出現率はゲーム用の設定です。</p></div>;
}
