import {fishCatalog} from './fish-registry';
import {fishingMapEntries} from './fishing-map-data';
import {methodDetails} from './method-registry';
import {allGuides} from './all-guides';
import {cookingFish} from './cooking-data';
import {gear} from './data';
export const searchCategories={fish:'魚図鑑',spots:'釣り場・船宿',methods:'釣り方',guide:'GUIDE',cooking:'料理',gear:'釣具'} as const;
export type SearchCategory=keyof typeof searchCategories;
type SearchItem={title:string;href:string;description:string;category:SearchCategory;terms?:string;aliases?:string[]};
const entries:SearchItem[]=[
 ...fishCatalog.map(f=>({title:f.name,href:`/fish/${f.slug}`,description:f.desc,category:'fish' as const,terms:[f.en,f.scientific,...f.detail?.aliases??[]].join(' '),aliases:f.detail?.aliases})),
 ...fishingMapEntries.map(s=>({title:s.name,href:`/spots/${s.slug}`,description:[s.prefecture,s.area,s.fish.join('・')].filter(Boolean).join(' / '),category:'spots' as const,terms:[...s.methods,...s.fish].join(' ')})),
 ...Object.values(methodDetails).map(m=>({title:m.name,href:`/methods/${m.slug}`,description:'仕掛け・タックルと釣り方の手順',category:'methods' as const,terms:m.slug})),
 ...allGuides.map(g=>({title:g.title,href:`/guide/${g.slug}`,description:g.summary,category:'guide' as const,terms:g.query+' '+g.category})),
 ...cookingFish.flatMap(f=>f.recipes.map(d=>({title:`${f.name}の${d.name}`,href:`/cooking/${f.slug}/${d.slug}`,description:'魚料理・下処理・レシピ',category:'cooking' as const,terms:f.name}))),
 ...gear.map(g=>({title:g.name,href:'/gear',description:g.desc,category:'gear' as const})),
];
export function normalizeSearch(s:string){return s.normalize('NFKC').toLowerCase().replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x60)).trim()}
export function searchSite(query:string,category?:string){
 const q=normalizeSearch(query.slice(0,100)),terms=q.split(/\s+/).filter(Boolean);if(!terms.length)return [];
 return entries.filter(e=>(!category||e.category===category)&&terms.every(t=>normalizeSearch(e.title+' '+e.description+' '+(e.terms??'')).includes(t))).map(e=>({...e,score:normalizeSearch(e.title)===q?100:e.aliases?.some(a=>normalizeSearch(a)===q)?90:normalizeSearch(e.title).includes(q)?50:10})).sort((a,b)=>b.score-a.score||a.title.localeCompare(b.title,'ja'));
}
