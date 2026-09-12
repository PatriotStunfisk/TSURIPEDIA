import {fish} from '@/lib/data';
import {fishDetails,type FishDetail} from '@/lib/fish-details';
import {launchFish,isLaunchFish} from '@/lib/launch-fish';
import {getCookingFish} from '@/lib/cooking-data';
import {getFishSpecies} from '@/lib/fish-species';
import {getSpeciesTableGuide} from '@/lib/fish-species/define';

export const fishCatalog=fish.map(base=>{
  const species=getFishSpecies(base.slug);
  return {
    ...base,
    detail:(Object.hasOwn(fishDetails,base.slug)?fishDetails[base.slug]:undefined) as FishDetail|undefined,
    launch:isLaunchFish(base.slug)?launchFish[base.slug]:undefined,
    cooking:getCookingFish(base.slug),
    tableGuide:species?getSpeciesTableGuide(species):undefined,
  };
});

export type FishProfile=(typeof fishCatalog)[number];

export const fishSlugs=fishCatalog.map(f=>f.slug);

const fishBySlug=new Map(fishCatalog.map(f=>[f.slug,f]));

export function getFishProfile(slug:string){return fishBySlug.get(slug)}

// Prefer an exact public name; ambiguous aliases must not create a wrong link.
export function getFishByName(name:string){
  const exact=fishCatalog.find(f=>f.name===name);
  if(exact)return exact;
  const matches=fishCatalog.filter(f=>f.detail?.aliases.includes(name));
  return matches.length===1?matches[0]:undefined;
}

export function getFishDetail(slug:string){
  return getFishProfile(slug)?.detail;
}

export function getFishLaunch(slug:string){
  return getFishProfile(slug)?.launch;
}
