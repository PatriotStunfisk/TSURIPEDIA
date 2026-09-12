import {getFishImage} from '@/lib/fish-images';
import {fishCatalog} from '@/lib/fish-registry';
import {getFishSpecies} from '@/lib/fish-species';
import {getFishConnections} from '@/lib/fish-connections';
import {getFishMethodSlugs} from '@/lib/fish-methods';
import {methodDetails} from '@/lib/method-registry';
import {getSpeciesModelSrc} from '@/lib/fish-media';
import {questHabitats} from './habitats';
import type {QuestFish,QuestMethod} from './types';

// Server-only assembly: do not send full recipe/guide collections to the game.
export const questFish:QuestFish[]=fishCatalog.flatMap(f=>{
 const q=getFishSpecies(f.slug)?.quest;
 if(q?.enabled===false)return [];
 if(q?.methods?.some(id=>!Object.hasOwn(methodDetails,id)))throw new Error('Unknown QUEST method: '+f.slug);
 if(q?.habitats?.some(id=>!questHabitats.some(h=>h.slug===id)))throw new Error('Unknown QUEST habitat: '+f.slug);
 const methods=(q?.methods??getFishMethodSlugs(f)).filter(id=>Object.hasOwn(methodDetails,id)&&questHabitats.some(h=>h.methods.includes(id)));
 const habitats=questHabitats.filter(h=>(!q?.habitats||q.habitats.includes(h.slug))&&h.methods.some(id=>methods.includes(id))).map(h=>h.slug);
 if(!habitats.length)return [];
 const numbers=f.size.match(/\d+(?:\.\d+)?/g)?.map(Number)??[10,30];
 const [minSize,maxSize]=q?.sizeRange??[numbers[0],numbers[1]??numbers[0]*1.5];
 return [{slug:f.slug,name:f.name,months:f.months,season:f.season,sizeLabel:f.size.includes('kg')?'重量':f.size.includes('胴長')?'胴長':'全長',sizeUnit:f.size.includes('kg')?'kg':'cm',minSize,maxSize,
  rarity:q?.rarity??Math.min(5,Math.max(1,f.difficulty)),fightPower:q?.fightPower??20+f.difficulty*10,
  biteRate:q?.biteRate??.9,escapeRate:q?.escapeRate??.05,xp:q?.xp??20+f.difficulty*10,habitats,methods,
  swimSpeed:q?.swimSpeed??(.6+f.difficulty*.2),wariness:q?.wariness??.2,approachSpeed:q?.approachSpeed??18,biteWindowMs:q?.biteWindowMs??4500,stamina:q?.stamina??(45+f.difficulty*8),runPower:q?.runPower??(15+f.difficulty*12),
  image:getFishImage(f),modelSrc:getSpeciesModelSrc(f.slug),cooking:!!f.cooking,guideHref:getFishConnections(f.slug)?.guides[0]?`/guide/${getFishConnections(f.slug)!.guides[0].slug}`:undefined}];
});
const usedMethods=new Set(questFish.flatMap(f=>f.methods));
export const questMethods:QuestMethod[]=Object.values(methodDetails).filter(m=>usedMethods.has(m.slug)&&questHabitats.some(h=>h.methods.includes(m.slug))).map(m=>({slug:m.slug,name:m.name,rod:m.rod,reel:m.reel,line:m.line,leader:m.leader,rig:m.rig,bait:m.bait,tip:m.tips[0]??m.overview}));
