import LanguageSwitch from './LanguageSwitch';
import MobileNavigation from './MobileNavigation';
export default function Header({locale='ja'}:{locale?:'ja'|'en'}){
 const en=locale==='en',base=en?'/en':'';
 const links=en?[['/en','Home'],['/en/fish','Fish'],['/en/methods','Methods'],['/en/guide','Guides'],['/en/spots','Fishing map'],['/en/cooking','Cooking'],['/weather','Weather']]:[['/','ホーム'],['/fish','魚図鑑'],['/methods','釣り方'],['/guide','釣りガイド'],['/spots','釣り場マップ'],['/gear','釣具図鑑'],['/cooking','料理'],['/quest','QUEST'],['/weather','天気']];
 return <header className="header"><a className="brand" href={base||'/'}><img src="/brand/uolink-logo-header-small.webp" width="414" height="138" loading="eager" decoding="async" alt={en?'UOLINK':'UOLINK 魚から、釣りへつながる。'}/></a><nav className="desktopNavigation" aria-label={en?'Main navigation':'メインナビゲーション'}>{links.map(([href,label])=><a key={href} href={href}>{label}</a>)}</nav><LanguageSwitch/><MobileNavigation locale={locale}/></header>;
}
