import Link from 'next/link';
import type {ContentLink} from '@/lib/content-navigation';
import styles from './NextReading.module.css';

export default function NextReading({links,title='次に知りたいこと'}:{links:ContentLink[];title?:string}) {
 if(!links.length)return null;
 return <nav aria-label={title} className={styles.section}>
  <h2>{title}</h2>
  <div className={styles.links}>{links.slice(0,3).map(link=><Link key={link.href} href={link.href} className={styles.link} prefetch={false}>
   <span><b>{link.label}</b>{link.reason&&<small>{link.reason}</small>}</span><span aria-hidden="true">→</span>
  </Link>)}</div>
  {links.length>3&&<details className={styles.more}><summary>ほかの関連ページ</summary><ul>{links.slice(3).map(link=><li key={link.href}><Link href={link.href} prefetch={false}>{link.label} →</Link>{link.reason&&<small> — {link.reason}</small>}</li>)}</ul></details>}
 </nav>;
}
