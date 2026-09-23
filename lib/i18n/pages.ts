import {fishCatalog,getFishProfile} from '../fish-registry';
import {fishingMapEntries} from '../fishing-map-data';
import {methodDetails} from '../method-registry';
import {getGuide} from '../all-guides';
import {englishFish} from './fish';
import {englishGuides} from './guides';
import {englishMethods} from './methods';
import {englishCookingFish} from './cooking';
import {prefectureNames,englishSpotTypes} from './common';
import {spotPrimaryType} from '../spot-classification';
export const englishStaticPages=['','fish','guide','methods','spots','cooking'];
export function englishPagePaths(){return [...englishStaticPages,...fishCatalog.filter(f=>englishFish[f.slug]).map(f=>`fish/${f.slug}`),...Object.keys(englishGuides).filter(getGuide).map(slug=>`guide/${slug}`),...Object.keys(englishMethods).filter(slug=>methodDetails[slug]).map(slug=>`methods/${slug}`),...fishingMapEntries.map(s=>`spots/${s.slug}`),...englishCookingFish.filter(slug=>getFishProfile(slug)?.cooking).map(slug=>`cooking/${slug}`)];}
export function englishPageInfo(path:string){
 const [kind,slug]=path.split('/');
 if(slug){
  if(kind==='fish'){const f=getFishProfile(slug),t=englishFish[slug];if(f&&t)return {title:`${f.en} (${slug}) — fish species in Japan`,description:t.overview};}
  if(kind==='guide'&&englishGuides[slug]&&getGuide(slug))return {title:englishGuides[slug].title,description:englishGuides[slug].summary};
  if(kind==='methods'&&englishMethods[slug]&&methodDetails[slug])return {title:englishMethods[slug].name,description:englishMethods[slug].summary};
  if(kind==='cooking'&&englishCookingFish.includes(slug)){const f=getFishProfile(slug);if(f?.cooking&&!f.cookingOmission&&f.hazard?.cookingEnabled!==false)return {title:`Cooking ${f.en}: Japanese dishes and preparation`,description:`Ways to prepare ${f.en.toLowerCase()}, with matching dish photographs and food-handling notes.`};}
  if(kind==='spots'){const s=fishingMapEntries.find(s=>s.slug===slug);if(s)return {title:`${s.name} — fishing in ${prefectureNames[s.prefecture??'']??'Japan'}`,description:`${englishSpotTypes[spotPrimaryType(s)]} in ${prefectureNames[s.prefecture??'']??'Japan'}. Explore recorded target fish, fishing methods, facilities, location references and community catches.`};}
  return;
 }
 const texts:Record<string,[string,string]>={'':['UOLINK – Fishing Guide & Fishing Map for Japan','Know the fish, learn Japanese fishing techniques and find places to fish across Japan. Plan a shore or boat trip with practical English guidance.'],fish:['Fish species in Japan','Search Japanese fish by English name, Japanese name or scientific name. Learn habitats, fishing methods, seasons and handling risks.'],guide:['Japan fishing guides','Practical English guides to shore and boat fishing in Japan, from a first sabiki trip to squid jigs, hairtail tenya and regional trip planning.'],methods:['Japanese fishing methods explained','Understand sabiki, tai-raba, tenya, eging and other Japanese fishing methods, with tackle choices and practical steps.'],spots:['Fishing spots in Japan — interactive map','Explore fishing spots and charters across Japan. Filter by prefecture, fish, method and shoreline type, then check access and facilities.'],cooking:['Cooking your catch in Japan','Explore Japanese fish dishes, preparation steps and food-handling notes, starting with ten familiar species.']};
 const t=texts[path];return t?{title:t[0],description:t[1]}:undefined;
}
