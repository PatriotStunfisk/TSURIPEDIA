import type {FishProfile} from './fish-registry';
export const fishSortOptions=[
 {value:'default',label:'基本の順番'},
 {value:'name',label:'名前（五十音順）'},
 {value:'beginner',label:'初心者向けから'},
 {value:'season',label:'今月がシーズンの魚から'},
] as const;
export type FishSort=typeof fishSortOptions[number]['value'];
export function parseFishSort(value?:string):FishSort{return fishSortOptions.some(option=>option.value===value)?value as FishSort:'default'}
export function sortFishCatalog<T extends Pick<FishProfile,'name'|'beginner'|'difficulty'|'months'>>(items:readonly T[],sort:FishSort,month=Number(new Intl.DateTimeFormat('en-US',{month:'numeric',timeZone:'Asia/Tokyo'}).format(new Date()))):T[]{
 const result=[...items];
 if(sort==='name')return result.sort((a,b)=>a.name.localeCompare(b.name,'ja'));
 if(sort==='beginner')return result.sort((a,b)=>Number(b.beginner)-Number(a.beginner)||a.difficulty-b.difficulty);
 if(sort==='season')return result.sort((a,b)=>Number(b.months.includes(month))-Number(a.months.includes(month)));
 return result;
}
