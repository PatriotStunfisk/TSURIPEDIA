'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {useCatchSession,loginHref} from './CatchSession';
import CatchCard from './CatchCard';
import type {CatchOptions} from './CatchReports';
import type {PublicCatch} from '@/lib/catches/types';
import s from './Submission.module.css';
export default function CloudCatchJournal({options}:{options:CatchOptions}){const session=useCatchSession();const [reports,setReports]=useState<PublicCatch[]>([]),[message,setMessage]=useState(''),[more,setMore]=useState(false),[busy,setBusy]=useState(false);
 async function load(offset=0){setBusy(true);try{const r=await fetch(`/api/catches?mine=1&offset=${offset}`);const v=await r.json();if(!r.ok)throw Error(v.error);setReports(p=>offset?[...p,...v.reports]:v.reports);setMore(v.reports.length===10);}catch(e){setMessage((e as Error).message);}finally{setBusy(false);}}
 useEffect(()=>{if(session.user)void load();},[session.user?.id]);
 return <section className={s.panel}><h2>自分の公開投稿</h2>{session.loading?<p>ログインを確認中…</p>:!session.user?<Link className={s.button} href={loginHref('/catches')}>ログイン</Link>:<><p className={s.meta}>確認待ち・非公開の投稿も本人だけに表示します。別の端末からも同じアカウントで確認できます。</p>{reports.map(report=><CatchCard key={report.id} report={report} options={options} authenticated onDeleted={()=>void load()}/>)}{!busy&&!reports.length&&<p>まだ投稿がありません。<Link href="/spots">MAPで釣り場を選んで投稿する →</Link></p>}{more&&<button className={s.button} disabled={busy} onClick={()=>load(reports.length)}>もっと見る</button>}{session.moderator&&<p><Link href="/admin/catches">釣果の確認・通報管理 →</Link></p>}<button className={s.textButton} onClick={async()=>{const r=await fetch('/api/catch-auth',{method:'DELETE',headers:{'Content-Type':'application/json'},body:'{}'});if(r.ok)location.reload();else setMessage('ログアウトできませんでした。');}}>ログアウト</button></>}<p role="status">{message||session.error}</p></section>;
}
