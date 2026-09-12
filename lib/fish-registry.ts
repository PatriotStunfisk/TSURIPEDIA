import {fish} from '@/lib/data';
import {fishDetails} from '@/lib/fish-details';
import {launchFish,isLaunchFish} from '@/lib/launch-fish';

export const fishCatalog=fish.map(base=>({
  ...base,
  detail:fishDetails[base.slug],
  launch:isLaunchFish(base.slug)?launchFish[base.slug]:undefined,
}));

export type FishProfile=(typeof fishCatalog)[number];

export const fishSlugs=fishCatalog.map(f=>f.slug);

export function getFishProfile(slug:string){
  return fishCatalog.find(f=>f.slug===slug);
}

export function getFishDetail(slug:string){
  return getFishProfile(slug)?.detail;
}

export function getFishLaunch(slug:string){
  return getFishProfile(slug)?.launch;
}
