import type {FishingMapEntry} from './fishing-map-data';
import {hasCoordinates,distanceKm} from './spot-distance';
export type MapIssue={level:'error'|'warning';code:string;slugs:string[];message:string};
const normalized=(s:string)=>s.normalize('NFKC').replace(/[\s・（）()]/g,'');
export function validateFishingMap(entries:readonly FishingMapEntry[]):MapIssue[]{
 const issues:MapIssue[]=[],ids=new Set<string>(),names=new Map<string,string>();
 for(const e of entries){
  if(ids.has(e.slug))issues.push({level:'error',code:'duplicate-id',slugs:[e.slug],message:'IDが重複'});ids.add(e.slug);
  if(!e.primaryType)issues.push({level:'error',code:'missing-type',slugs:[e.slug],message:'primaryTypeが未設定'});
  if(!e.prefecture)issues.push({level:'error',code:'missing-prefecture',slugs:[e.slug],message:'都道府県が未設定'});
  if(e.lat===undefined&&e.lng===undefined)issues.push({level:'warning',code:'missing-coordinate',slugs:[e.slug],message:'位置未登録（確認後に追加）'});
  else if(!hasCoordinates(e)||e.lat<20||e.lat>46||e.lng<122||e.lng>154)issues.push({level:'error',code:'invalid-coordinate',slugs:[e.slug],message:'日本国内の座標として不正または未設定'});
  const name=normalized(e.name),previous=names.get(name);if(previous)issues.push({level:'warning',code:'same-name',slugs:[previous,e.slug],message:'表記を正規化すると同名'});names.set(name,e.slug);
 }
 // Editorial audit only, never used in the render path.
 for(let i=0;i<entries.length;i++)for(let j=i+1;j<entries.length;j++){
  const a=entries[i],b=entries[j];if(!hasCoordinates(a)||!hasCoordinates(b))continue;
  const d=distanceKm(a,b),na=normalized(a.name),nb=normalized(b.name);
  if(d<0.015)issues.push({level:'warning',code:'same-coordinate',slugs:[a.slug,b.slug],message:'15m以内：同一施設か集合場所の共有か確認'});
  else if(d<0.3&&(na.includes(nb)||nb.includes(na)))issues.push({level:'warning',code:'near-similar-name',slugs:[a.slug,b.slug],message:'近距離に似た名称の地点'});
 }
 return issues;
}
