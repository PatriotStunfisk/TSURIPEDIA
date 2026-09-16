import Link from 'next/link';
import type {FishProfile} from '@/lib/fish-registry';
import s from './FishHazard.module.css';
export default function FishHazard({fish:f,compact=false}:{fish:FishProfile;compact?:boolean}){
 const h=f.hazard;if(!h)return null;
 if(compact)return <aside className={s.compact}><strong>WARNING · 素手で触らない</strong><p>{h.headline}</p><a href="#fish-safety">危険部位と扱い方を確認 ↓</a></aside>;
 const parts=h.parts.map(p=>p.name).join('・');
 return <section id="fish-safety" className={s.panel} aria-label={`${f.name}の危険情報`}>
 <header><strong>WARNING</strong><h2>{f.name}を触る前に</h2><p>{h.headline}</p></header>
 <div className={s.grid}><div><h3>危険な部位</h3><figure><svg viewBox="0 0 400 170" role="img" aria-label={`模式図：${parts}`}>
 {f.slug==='akaei'?<><path d="M45 85 130 25 225 85 130 145Z" fill="#d6dde0" stroke="#637985" strokeWidth="2"/><path d="M225 85q55-35 145 0" fill="none" stroke="#637985" strokeWidth="6"/><path d="m270 73-7-22" stroke="#bd3d22" strokeWidth="9"/><text x="242" y="35" fontSize="17" fill="#8b2615">尾の毒棘</text></>:<><path d="M50 95Q135 15 280 85L340 55V130L280 105Q135 175 50 95Z" fill="#d6dde0" stroke="#637985" strokeWidth="2"/><circle cx="90" cy="80" r="5" fill="#304b57"/>
 {parts.includes('背ビレ')&&<path d="m125 59 10-25 15 22 15-27 15 28 15-25 15 30" fill="none" stroke="#bd3d22" strokeWidth="5"/>}
 {parts.includes('胸ビレ')&&<path d="m117 97 32 26" stroke="#bd3d22" strokeWidth="6"/>}
 {parts.includes('腹ビレ')&&<path d="m150 130 12 20" stroke="#bd3d22" strokeWidth="6"/>}
 {parts.includes('尻ビレ')&&<path d="m225 121 17 20" stroke="#bd3d22" strokeWidth="6"/>}
 {f.slug==='kusafugu'&&<><ellipse cx="192" cy="97" rx="48" ry="27" fill="#bd3d22" opacity=".7"/><text x="145" y="104" fill="white" fontSize="16">自己調理禁止</text></>}
 </>}
 </svg><figcaption>危険部位を示す模式図。形・位置・大きさは実物と異なり、赤い部分以外の安全を保証するものではありません。</figcaption></figure>
 <dl>{h.parts.map(p=><div key={p.name}><dt>{p.name}</dt><dd>{p.detail}</dd></div>)}</dl><h3>素手で触ってよい？</h3><p>{h.bareHands}</p></div>
 <div><h3>見分ける手掛かり</h3><ul>{h.identify.map(p=><li key={p}>{p}</li>)}</ul><p className={s.note}>魚体画像は特徴を示すイラストです。個体差・類似種があるため、画像だけで同定・食用判定をしないでください。</p><h3>釣れた場合の扱い</h3><ol>{h.handling.map(p=><li key={p}>{p}</li>)}</ol><h3>食用について</h3><p>{h.foodAdvice}</p></div></div>
 <footer><Link href="/guide/dangerous-fish-first-check">危険魚の比較・刺されたときの対応 →</Link><p>確認日：{h.verifiedAt} · {h.sources.map((source,i)=><span key={source.url}>{i>0?' ／ ':''}<a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></span>)}</p></footer>
 </section>;
}
