/** Small, serializable list records; full tackle and article content stays on the server. */
export type MethodCard={slug:string;name:string;subtitle:string;target:string[];places:string[];difficulty:number;steps:number};
export type MethodPlace='all'|'shore'|'boat'|'freshwater';
export type MethodSort='recommended'|'name'|'easy'|'advanced';
export const featuredMethods=['sabiki','choinage','eging','ajing','tachiuo-tenya','tai-rubber','shore-jigging','herabuna-bottom','carp-bottom','ayuing'];
const normalize=(s:string)=>s.normalize('NFKC').toLowerCase().replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x60));
export function selectMethods(items:MethodCard[],query='',place:MethodPlace='all',sort:MethodSort='recommended'){
 const words=normalize(query).trim().split(/\s+/).filter(Boolean);
 return items.filter(m=>words.every(w=>normalize([m.name,m.subtitle,...m.target,...m.places].join(' ')).includes(w))).filter(m=>{
  const p=m.places.join(' ');return place==='all'||(place==='boat'?/船|ボート/.test(p):place==='freshwater'?/河川|川|湖|池|渓流|淡水/.test(p):/堤防|港|岸壁|磯|砂浜|サーフ|護岸|海釣り公園/.test(p));
 }).sort((a,b)=>{
  const name=a.name.localeCompare(b.name,'ja');
  if(sort==='name')return name;
  if(sort==='easy')return a.difficulty-b.difficulty||name;
  if(sort==='advanced')return b.difficulty-a.difficulty||name;
  const rank=(s:string)=>{const n=featuredMethods.indexOf(s);return n<0?999:n};return rank(a.slug)-rank(b.slug)||name;
 });
}
