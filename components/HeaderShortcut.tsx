'use client';

import {usePathname} from 'next/navigation';

export default function HeaderShortcut(){
 const isMap=usePathname()==='/spots';
 return <a className="mobileQuest" href={isMap?'/fish':'/spots'}>{isMap?'魚図鑑を見る':'釣り場マップを見る'}</a>;
}
