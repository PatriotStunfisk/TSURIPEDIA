import type {FishingMapEntry} from './fishing-map-data';

/** A bounded sample, never another authored fish/method-to-spot registry. */
export function representativeSpots(entries:FishingMapEntry[],limit=4){
 const score=(s:FishingMapEntry)=>Number(s.beginner===true)*4+Number(s.parking===true)+Number(s.toilet===true);
 const ranked=entries.filter(s=>!s.closed&&s.type!=='area').sort((a,b)=>score(b)-score(a)||a.slug.localeCompare(b.slug));
 const chosen:FishingMapEntry[]=[];
 for(const s of ranked)if(!chosen.some(c=>c.prefecture===s.prefecture&&c.type===s.type)&&chosen.length<limit)chosen.push(s);
 for(const s of ranked)if(!chosen.includes(s)&&chosen.length<limit)chosen.push(s);
 return chosen;
}
export function relatedSpotGuideSlugs(entry:FishingMapEntry,index:Record<string,string[]>){
 return [...new Set([...(entry.guideSlugs??[]),...(entry.methodSlugs??[]).flatMap(s=>index[`/methods/${s}`]??[]),...(entry.fishSlugs??[]).flatMap(s=>index[`/fish/${s}`]??[])])].slice(0,6);
}
