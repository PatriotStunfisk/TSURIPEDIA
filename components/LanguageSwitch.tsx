'use client';
import {usePathname} from 'next/navigation';
import {englishPath} from '@/lib/i18n/routes';
export default function LanguageSwitch(){
 const path=usePathname();const en=path==='/en'||path.startsWith('/en/');
 const target=en?(path.slice(3)||'/'):englishPath(path);
 // Never advertise an untranslated article as its English equivalent.
 return <a className="languageSwitch" href={target??'/en'} hrefLang={en?'ja':'en'} lang={en?'ja':'en'} onClick={event=>{if(target&&!event.ctrlKey&&!event.metaKey&&!event.shiftKey&&!event.altKey){event.preventDefault();window.location.assign(target+window.location.search+window.location.hash);}}}>{en?'日本語':target?'English':'English home'}</a>;
}
