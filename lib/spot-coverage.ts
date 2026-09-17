import {prefectures,regionForPrefecture} from './japan-regions';
import type {FishingMapEntry} from './fishing-map-data';

// Count usable fishing places separately from boats, planning areas and closed facilities.
export function getSpotCoverage(entries:readonly FishingMapEntry[],target=20){
 return prefectures.map(prefecture=>{
  const rows=entries.filter(e=>e.prefecture===prefecture);
  const spots=rows.filter(e=>e.type==='spot'&&!e.closed).length;
  return {prefecture,region:regionForPrefecture(prefecture),total:rows.length,spots,
   boats:rows.filter(e=>e.type==='boat'&&!e.closed).length,
   areas:rows.filter(e=>e.type==='area'&&!e.closed).length,
   closed:rows.filter(e=>e.closed).length,target,remaining:Math.max(0,target-spots)};
 });
}
