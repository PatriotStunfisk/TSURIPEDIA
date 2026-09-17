import {markerKinds} from './spot-markers';
import type {SpotPrimaryType} from './spot-classification';
export const mapSessionKey='uolink-map-filters-v1';
export type MapLayerState={types:SpotPrimaryType[];shops:boolean};
export function readMapLayers(raw:string|null):MapLayerState{
 const fallback={types:Object.keys(markerKinds) as SpotPrimaryType[],shops:false};
 try{const v=JSON.parse(raw??'null');if(!v||!Array.isArray(v.types)||typeof v.shops!=='boolean')return fallback;const migrated=(v.types as unknown[]).flatMap(x=>x==='facility'?['sea-park','sea-pond']:x==='park'?['pier','sea-park']:x==='shore'?['pier','other']:[x]);return {types:[...new Set(migrated.filter((x:unknown):x is SpotPrimaryType=>typeof x==='string'&&Object.hasOwn(markerKinds,x)))],shops:v.shops};}catch{return fallback;}
}
