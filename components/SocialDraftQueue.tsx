'use client';
import {useState} from 'react';
import Link from 'next/link';
import type {socialDrafts} from '@/lib/guide-social';
import s from './SocialDraftQueue.module.css';
type Draft=(typeof socialDrafts)[number];
export default function SocialDraftQueue({drafts}:{drafts:Draft[]}){
 const [message,setMessage]=useState('');
 async function copy(text:string){try{await navigator.clipboard.writeText(text);setMessage('投稿文をコピーしました。画像と代替テキストも添付してください。')}catch{setMessage('コピーできませんでした。下の投稿文を選択してコピーできます。')}}
 return <><p role="status">{message}</p><div className={s.queue}>{drafts.map(d=><article key={d.id} className={s.card}>
  <small>下書き · {d.dayOffset+1}日目 {d.suggestedTime} JST（投稿時間の提案）</small><h2>{d.headline}</h2>
  <img src={d.thumbnail} alt={d.alt} width={1200} height={630}/><textarea aria-label={`${d.headline}の投稿文`} readOnly value={d.text}/>
  <div className={s.actions}><button onClick={()=>copy(d.text)}>投稿文をコピー</button><a href={d.thumbnail} download>画像を保存</a><a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(d.text)}`} target="_blank" rel="noopener noreferrer">Xで下書きを開く ↗</a></div>
  <p>画像の代替テキスト：{d.alt}</p><button onClick={()=>copy(d.alt)}>代替テキストをコピー</button><p><Link href={`/guide/${d.guideSlug}`}>原本GUIDEを確認 →</Link></p>
 </article>)}</div></>;
}
