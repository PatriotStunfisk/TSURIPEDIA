import {regionForPrefecture} from './japan-regions';
import type {FishingMapEntry,MapEntryType} from './fishing-map-data';
export type SpotFilters={region?:string;prefecture?:string;method?:string;terrain?:string;beginner?:boolean;family?:boolean;showClosed?:boolean;kind?:'all'|MapEntryType;fish?:string;query?:string};
export function matchesSpot(entry:FishingMapEntry,f:SpotFilters){
 const query=f.query?.trim().toLocaleLowerCase('ja');
 return (!!f.showClosed||!entry.closed)&&(!f.kind||f.kind==='all'||entry.type===f.kind)&&(!f.region||regionForPrefecture(entry.prefecture)===f.region)&&(!f.prefecture||entry.prefecture===f.prefecture)&&(!f.method||!!entry.methodSlugs?.includes(f.method))&&(!f.terrain||entry.terrain===f.terrain)&&(!f.beginner||entry.beginner)&&(!f.family||entry.kids)&&(!f.fish||f.fish==='すべて'||entry.fish.includes(f.fish))&&(!query||`${entry.name}${entry.area}${entry.port??''}${entry.prefecture??''}${entry.fish.join('')}${entry.methods.join('')}${entry.bestFor.join('')}`.toLocaleLowerCase('ja').includes(query));
}
