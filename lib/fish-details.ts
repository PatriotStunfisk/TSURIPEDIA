import {fishSpecies} from '@/lib/fish-species';
import type {FishDetail} from '@/lib/fish-species/types';
export type {FishDetail} from '@/lib/fish-species/types';

// Compatibility view. Only unmigrated species are still authored in this file.
export const fishDetails:Record<string,FishDetail>=Object.fromEntries(
 fishSpecies.flatMap(species=>species.detail?[[species.base.slug,species.detail]]:[]),
);
