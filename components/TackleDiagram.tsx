import Link from 'next/link';
import {getMethodTackle,type TacklePart} from '@/lib/method-tackle';
import s from './TackleDiagram.module.css';

function RigIcon({kind}:{kind:TacklePart['icon']}){
 return <svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
  {kind==='hook'?<path d="M32 0v24h16v14q0 13-12 13t-12-13v-7l6 7M32 24v40"/>:kind==='swivel'?<><path d="M32 0v17m0 30v17"/><ellipse cx="32" cy="25" rx="7" ry="9"/><ellipse cx="32" cy="40" rx="7" ry="9"/></>:kind==='weight'?<><path d="M32 0v18m0 30v16"/><path d="m32 18 10 22q3 10-10 10T22 40Z"/></>:kind==='float'?<><path d="M32 0v64"/><ellipse cx="32" cy="32" rx="12" ry="20"/><path d="M20 32h24"/></>:kind==='basket'?<><path d="M32 0v16m-13 0h26v34H19Zm0 12h26m-26 11h26M26 16v34m12-34v34m-6 0v12"/></>:kind==='lure'?<><path d="M32 0v12m0 0q22 20 0 36-18-20 0-36Zm0 36v7q0 9-8 2m8-2q0 9 8 2"/></>:<path d="M32 0v64"/>}
 </svg>;
}
export default function TackleDiagram({slug,connectionsOnly=false}:{slug:string;connectionsOnly?:boolean}){
 const data=getMethodTackle(slug);if(!data?.rig)return null;
 const {method,rig,specs}=data;
 return <section className={s.wrap} aria-label={`${method.name}の仕掛け図解`}>
  <header><small>BUILD YOUR TACKLE</small><h2>竿から針まで、つながりで理解する</h2><p>{method.name} · {rig.variant}</p></header>
  <div className={s.layout} style={connectionsOnly?{gridTemplateColumns:"1fr"}:undefined}><figure className={s.diagram}>
   <div className={s.rod}><svg viewBox="0 0 240 95" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3"><path d="m24 80 70-45Q149 9 202 15l-15 61"/><path d="M59 64v15h24V54"/><circle cx="72" cy="71" r="12"/><path d="m23 80 30-18" strokeWidth="8"/></svg><b>ロッド ＋ リール</b><span>リールから出た道糸を、竿のガイドへ通す</span></div>
   <ol><li><RigIcon kind="line"/><div><b>メインライン</b><span>{connectionsOnly?"太さ・巻き量は対象魚と船宿指定に合わせる":method.line}</span></div></li>
    {!rig.leaderInRig&&slug!=='fukase'&&<li><RigIcon kind="line"/><div><b>リーダー / ハリス</b><span>{connectionsOnly?"対象魚用の完成仕掛け・指定ハリスを使用":method.leader}</span></div></li>}
    {rig.parts.map((p,i)=><li key={`${i}-${p.label}`}><RigIcon kind={p.icon}/><div><b>{p.label}</b><span>{p.note}</span>{p.branch&&<em>↳ {p.branch}</em>}</div></li>)}
   </ol><figcaption>接続順を示す模式図です。長さ・大きさの比率は実物と異なります。</figcaption>
  </figure>{!connectionsOnly&&<aside className={s.starter}><small>FIRST SET</small><h3>最初の1セット</h3><p>まず揃える道具と、選ぶ範囲の目安です。</p><dl>{specs.map(v=><div key={v.key}><dt>{v.label}</dt><dd>{v.value}</dd></div>)}</dl><p className={s.note}>{rig.caution}</p><p>サイズは地域・魚・潮・水深で変わります。釣り場と船宿の指定を優先してください。</p><Link href={`/gear?method=${slug}`}>このタックルを揃える →</Link><Link href="/guide/tackle-connection-basics">接続と結び目の確認方法 →</Link></aside>}</div>
 </section>;
}
