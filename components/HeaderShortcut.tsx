'use client';

import {usePathname} from 'next/navigation';

export default function HeaderShortcut({locale='ja'}:{locale?:'ja'|'en'}){
 const base=locale==='en'?'/en':'',isMap=usePathname()===base+'/spots';
 return <a className="mobileQuest" href={base+(isMap?'/fish':'/spots')}>{locale==='en'?(isMap?'Browse fish':'Fishing map'):(isMap?'魚図鑑を見る':'釣り場マップを見る')}</a>;
}
