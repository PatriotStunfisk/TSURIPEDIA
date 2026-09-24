import {markerKinds} from './spot-markers';
import type {SpotPrimaryType} from './spot-classification';
export const mapSessionKey='uolink-map-filters-v1';
export type MapLayerState={types:SpotPrimaryType[];shops:boolean};
export function readMapLayers(raw:string|null):MapLayerState{
 const fallback={types:Object.keys(markerKinds) as SpotPrimaryType[],shops:false};
 try{const v=JSON.parse(raw??'null');if(!v||!Array.isArray(v.types)||typeof v.shops!=='boolean')return fallback;const migrated=(v.types as unknown[]).flatMap(x=>x==='facility'?['sea-park','sea-pond']:x==='park'?['pier','sea-park']:x==='shore'?['pier','other']:[x]);return {types:[...new Set(migrated.filter((x:unknown):x is SpotPrimaryType=>typeof x==='string'&&Object.hasOwn(markerKinds,x)))],shops:v.shops};}catch{return fallback;}
}

// A search/bookmark entry starts nationwide; reload/back and internal navigation keep layers.
export function isFreshMapEntry(input:{referrer:string;origin:string;navigationType:string;documentUrl:string;currentPath:string}):boolean{
 if(input.navigationType!=='navigate')return false;
 try{
  const landing=new URL(input.documentUrl);
  if(landing.pathname!==input.currentPath||!['/spots','/en/spots'].includes(landing.pathname))return false;
  return !input.referrer||new URL(input.referrer).origin!==input.origin;
 }catch{return false;}
}
export function prepareMapSession():void{
 try{
  const navigation=performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming|undefined;
  if(!navigation)return;
  const visit=String(performance.timeOrigin);
  if(sessionStorage.getItem('uolink-map-entry-v1')===visit)return;
  sessionStorage.setItem('uolink-map-entry-v1',visit);
  if(isFreshMapEntry({referrer:document.referrer,origin:location.origin,navigationType:navigation.type,documentUrl:navigation.name,currentPath:location.pathname})){
   sessionStorage.removeItem(mapSessionKey);
   sessionStorage.removeItem('uolink-map-view-v1');
  }
 }catch{/* Storage may be unavailable in private browsing. */}
}
