import {fishSpecies} from '@/lib/fish-species';
import type {LaunchFishExtra} from '@/lib/fish-species/types';
export type {LaunchFishExtra} from '@/lib/fish-species/types';

// Compatibility view: no second list of featured fish needs to be maintained.
const featured=fishSpecies.filter(species=>species.launch)
  .sort((a,b)=>(a.featuredOrder??Infinity)-(b.featuredOrder??Infinity));
export const launchFishSlugs=featured.map(species=>species.base.slug);
export const launchFish:Record<string,LaunchFishExtra>=Object.fromEntries(
  featured.map(species=>[species.base.slug,species.launch!])
);
export type LaunchFishSlug=keyof typeof launchFish;
export function isLaunchFish(slug:string):slug is LaunchFishSlug{return Object.hasOwn(launchFish,slug)}
