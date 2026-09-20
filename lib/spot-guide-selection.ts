import {allGuides} from './all-guides';
import type {FishingMapEntry} from './fishing-map-data';
import {selectHubGuides} from './guide-selection';
/** A fish match alone must not recommend a method absent from the spot's registered methods. */
export function getSpotGuides(spot:FishingMapEntry){
 const methods=new Set(spot.methodSlugs??[]),fish=new Set(spot.fishSlugs??[]),explicit=new Set(spot.guideSlugs??[]);
 return selectHubGuides(allGuides.filter(g=>{
  const methodMatch=g.methodTags.some(m=>methods.has(m));
  if(g.methodTags.length&&!methodMatch)return false;
  return explicit.has(g.slug)||methodMatch||g.fishTags.some(f=>fish.has(f));
 }));
}
