import iwashi from './iwashi';
import suzuki from './suzuki';
import chinu from './chinu';
import kawahagi from './kawahagi';
import hirame from './hirame';
import mebaru from './mebaru';
import aoriika from './aoriika';
import madako from './madako';
import kanpachi from './kanpachi';
import sawara from './sawara';
import hamachi from './hamachi';
import gashira from './gashira';
import amago from './amago';
import nijimasu from './nijimasu';
import ayu from './ayu';
import unagi from './unagi';
import anago from './anago';
import isaki from './isaki';
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
// Keep this order stable: it is also the encyclopedia order for all species.
export const fishSpecies:FishSpeciesDefinition[]=[tachiuo,aji,madai,buri,kisu,kasago,saba,iwashi,suzuki,chinu,kawahagi,hirame,mebaru,aoriika,madako,kanpachi,sawara,hamachi,gashira,amago,nijimasu,ayu,unagi,anago,isaki];
uniqueFishSlugs(fishSpecies.map(species=>species.base));
const speciesBySlug=new Map(fishSpecies.map(species=>[species.base.slug,species]));
export function getFishSpecies(slug:string){return speciesBySlug.get(slug)}
