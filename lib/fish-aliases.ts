import {fishSearchTags} from './fish-discovery';
// Legacy URLs remain reachable; biological species are counted only once.
export const fishSlugAliases:Readonly<Record<string,string>>={hamachi:'buri',gashira:'kasago',kurodai:'chinu'};
export function canonicalFishSlug(slug:string){return Object.hasOwn(fishSlugAliases,slug)?fishSlugAliases[slug]:slug;}
export const additionalFishNames:Readonly<Record<string,readonly string[]>>={buri:['ツバス','ワカシ','ハマチ','イナダ','メジロ','ワラサ'],kasago:['ガシラ','アラカブ'],chinu:['チヌ','クロダイ']};
export function normalizeFishSearch(value:string){return value.normalize('NFKC').toLowerCase().replace(/[ぁ-ゖ]/g,c=>String.fromCharCode(c.charCodeAt(0)+0x60)).replace(/\s+/g,'').trim();}
export function fishMatchesSearch(fish:{name:string;en:string;scientific:string;slug:string;waterTypes?:readonly string[];detail?:{aliases:readonly string[];family?:string}},query:string){
 const words=[fish.name,fish.en,fish.scientific,...fishSearchTags(fish),...(fish.detail?.aliases??[]),...(additionalFishNames[fish.slug]??[])].map(normalizeFishSearch);
 return words.some(word=>word.includes(normalizeFishSearch(query)));
}
