'use client';
import {usePathname} from 'next/navigation';
// Kept separate so this optional navigation can be removed without changing page layouts.
export default function MobileNavigation({locale='ja'}:{locale?:'ja'|'en'}){
 const path=usePathname(),en=locale==='en';
 const items=[['fish',en?'Fish':'魚図鑑'],['cooking',en?'Cooking':'料理'],['spots',en?'Map':'釣り場マップ'],['catches',en?'Catches':'釣果'],['methods',en?'Methods':'釣り方']];
 return <nav className="mobileNavigation" aria-label={en?'Quick navigation':'主要ページ'}>{items.map(([id,label])=>{const href=(en&&id!=='catches'?'/en':'')+'/'+id;return <a key={id} href={href} aria-current={path===href||path.startsWith(href+'/')?'page':undefined} aria-label={en&&id==='catches'?'Catches (Japanese)':undefined}>{label}</a>})}</nav>;
}
