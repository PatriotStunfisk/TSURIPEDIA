'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import CatchCard from './CatchCard';
import type {CatchOptions} from './CatchReports';
import type {PublicCatch} from '@/lib/catches/types';
import s from './Submission.module.css';
type Queue={reports:PublicCatch[];flags:{id:string;report_id:string;reason:string;created_at:string}[];deletions:string[]};
export default function CatchModeration({options}:{options:CatchOptions}){const [queue,setQueue]=useState<Queue|null>(null),[message,setMessage]=useState(''),[busy,setBusy]=useState(false);
 async function load(){try{const r=await fetch('/api/catches/moderate');const v=await r.json();if(!r.ok)throw Error(v.error);setQueue(v);}catch(e){setMessage((e as Error).message);}}
 useEffect(()=>{void load();},[]);
 async function act(id:string,action:string){if(action==='delete'&&!confirm('投稿本文と写真を完全に削除しますか？'))return;setBusy(true);try{const r=await fetch('/api/catches/moderate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id,action})});const v=await r.json();if(!r.ok)throw Error(v.error);setMessage('更新しました。');await load();}catch(e){setMessage((e as Error).message);}finally{setBusy(false);}}
 return <section><p>実釣の写真・魚種・個人情報・無断転載・広告・現地ルールを確認してください。メールアドレスや正確なGPSは公開されません。</p><p role="status">{message}</p><Link href="/login?next=%2Fadmin%2Fcatches">管理者アカウントでログイン</Link>{queue?.reports.map(report=><div key={report.id} className={s.panel}><p>{report.status} · 投稿ID {report.id}</p>{queue.deletions.includes(report.id)&&<p>削除途中です。写真の削除を再試行してください。</p>}<CatchCard report={report} options={options}/>{queue.flags.filter(f=>f.report_id===report.id).map(f=><p key={f.id}>報告理由：{f.reason}</p>)}<div className={s.actions}>{!queue.deletions.includes(report.id)&&<><button className={s.button} disabled={busy} onClick={()=>act(report.id,'approve')}>確認して公開</button><button className={s.button} disabled={busy} onClick={()=>act(report.id,'reject')}>非公開にする</button><button className={s.button} disabled={busy} onClick={()=>act(report.id,'resolve')}>通報対応済み</button></>}<button className={s.button} disabled={busy} onClick={()=>act(report.id,'delete')}>本文・写真を削除</button></div></div>)}{queue&&!queue.reports.length&&<p>確認待ち・未対応の通報はありません。</p>}<button className={s.button} disabled={busy} onClick={load}>最新30件を読み直す</button></section>;
}
