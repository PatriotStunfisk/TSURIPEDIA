'use client';
import {useState} from 'react';
import Link from 'next/link';
import s from './Submission.module.css';
export default function CatchLogin({next,error,providers}:{next:string;error?:string;providers:{google:boolean;apple:boolean}}){
 const [busy,setBusy]=useState<string|null>(null),[message,setMessage]=useState(error?(error==='cancelled'?'ログインをキャンセルしました。もう一度選択できます。':'ログインを完了できませんでした。同じブラウザでもう一度お試しください。'):'');
 async function login(provider:'google'|'apple'){setBusy(provider);setMessage('');try{const r=await fetch('/api/catch-auth',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({provider,next})});const v=await r.json();if(!r.ok)throw Error(v.error||'ログインを開始できませんでした。');window.location.assign(v.url);}catch{setMessage('ログインを開始できませんでした。通信状況を確認して、もう一度お試しください。');setBusy(null);}}
 return <section className={s.panel}><p>釣果を見るだけなら登録不要です。投稿・自分の釣果の管理にはログインしてください。</p><div className={s.oauthButtons}>{(['google','apple'] as const).map(provider=><button key={provider} className={`${s.button} ${provider==='apple'?s.appleLogin:s.googleLogin}`} disabled={!!busy||!providers[provider]} onClick={()=>void login(provider)}>{busy===provider?'接続中…':`${provider==='google'?'Google':'Apple'}で続ける`}{!providers[provider]&&<small>準備中</small>}</button>)}</div>{!providers.google&&!providers.apple&&<p className={s.notice}>ログインの接続設定中です。公開釣果はそのまま閲覧できます。</p>}<p className={s.meta}>認証後は元の投稿画面へ戻ります。メールの認証リンクや新しいパスワードの登録は不要です。</p><p role="status" aria-live="polite">{message}</p><Link href={next}>元の画面へ戻る</Link></section>;
}
