import tachiuo from './tachiuo';
import aji from './aji';
import madai from './madai';
import buri from './buri';
import kisu from './kisu';
import kasago from './kasago';
import saba from './saba';
import {uniqueFishSlugs} from './define';
import type {FishSpeciesDefinition} from './types';

// Add one import and one entry here for a new full species profile.
// Keep this order stable: it is also the encyclopedia order for migrated species.
export const fishSpecies:FishSpeciesDefinition[]=[tachiuo,aji,madai,buri,kisu,kasago,saba];
uniqueFishSlugs(fishSpecies.map(species=>species.base));
const speciesBySlug=new Map(fishSpecies.map(species=>[species.base.slug,species]));
export function getFishSpecies(slug:string){return speciesBySlug.get(slug)}
