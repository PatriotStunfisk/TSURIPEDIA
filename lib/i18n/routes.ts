// Small route manifest: safe to use in the language switch without importing content.
import routes from './route-manifest.json';
export type Locale='ja'|'en';
export function englishPath(path:string):string|undefined{
 const p=path.replace(/\/$/,'')||'/';
 if(routes.static.includes(p))return p==='/'?'/en':`/en${p}`;
 const [,kind,slug,...rest]=p.split('/');
 if(!slug||rest.length)return;
 if(kind==='spots'||(kind==='fish'&&routes.fish.includes(slug))||(kind==='methods'&&routes.methods.includes(slug))||(kind==='guide'&&routes.guides.includes(slug))||(kind==='cooking'&&routes.cooking.includes(slug)))return `/en${p}`;
}
export function languageAlternates(path:string){
 const jp=path.startsWith('/en/')?path.slice(3):path==='/en'?'/':path;
 const en=englishPath(jp);
 return en?{ja:jp,en,'x-default':jp}:undefined;
}
