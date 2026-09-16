import {getFishImage} from './fish-images';
import {allGuides,getGuide} from './all-guides';
import {fishCatalog} from './fish-registry';
import {getFishSpecies} from './fish-species';
// An explicit editorial promotion in the species profile, never a fabricated PV ranking.
export function selectHomeFish(month:number,limit=10){
 return fishCatalog.filter(f=>getFishImage(f)&&!f.hazard?.identificationOnly&&getFishSpecies(f.slug)?.featuredOrder!==undefined)
 .sort((a,b)=>(getFishSpecies(a.slug)!.featuredOrder!-getFishSpecies(b.slug)!.featuredOrder!)||Number(b.months.includes(month))-Number(a.months.includes(month)))
 .slice(0,Math.max(0,limit));
}

// Seasonal editorial entry points, not a national catch forecast or traffic ranking.
export function selectHomeGuides(month:number,limit=6){
 const seasonal=month>=9&&month<=11?['eging-shakuri-count','tachiuo-tenya-action','shore-jigging-jig-weight','kawahagi-hook']:
 month>=6&&month<=8?['kisu-retrieve-speed','aji-sabiki-depth','saba-sabiki-cooling','fishing-cooler-plan']:
 month>=3&&month<=5?['tairaba-bottom-contact','eging-shakuri-count','chinu-field-notes','aji-sabiki-depth']:
 ['kasago-ana-rig','tairaba-bottom-contact','kawahagi-hook','fishing-first-checklist'];
 const slugs=[...seasonal,'fishing-map-permission-check','first-charter-boat-reservation',...allGuides.filter(g=>g.featured).map(g=>g.slug)];
 return [...new Set(slugs)].flatMap(slug=>{const guide=getGuide(slug);return guide?[guide]:[]}).slice(0,Math.max(0,limit));
}
