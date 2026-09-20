import {smallQuestionGuides} from './guide-articles-small-questions';
import {observationGuides} from './guide-articles-observation';
import {boatWorkshopGuides} from './guide-articles-boat-workshop';
import {freshwaterWorkshopGuides} from './guide-articles-freshwater-workshop';
import {speciesGrowthGuides} from './guide-articles-species-growth';
import {fieldQuestionGuides} from './guide-articles-field-questions';
import {riverExpansionGuides} from './guide-articles-river-expansion';
import {freshwaterGuides} from './guide-articles-freshwater';
import {quickGuides} from './guide-articles-quick';
import {guideEditorial} from './guide-editorial';
import {guideReadingMinutes,type ClassifiedGuide} from './guide-taxonomy';
import {tripPlanningGuides} from './guide-articles-trip-planning';
import {safetyGuides} from './guide-articles-safety';
import {practicalGuides} from './guide-articles-practical';
import {nationalSpeciesGuides} from './guide-articles-national-species';
import {tackleGuides} from './guide-articles-tackle';
import {canonicalFishSlug} from './fish-aliases';
import {gearBasicsGuides} from './guide-articles-gear-basics';
import {nextSpeciesGuides} from './guide-articles-next-species';
import {coastalGuides} from './guide-articles-coastal';
import {batchGuides} from './guide-articles-batch';
import {expansionGuides} from '@/lib/guide-articles-expansion';
import {guideArticles} from '@/lib/guide-articles';
import {extraGuideArticles} from '@/lib/guide-articles-extra';
import {extraGuideArticles2} from '@/lib/guide-articles-extra2';
import {extraGuideArticles3} from '@/lib/guide-articles-extra3';
import {extraGuideArticles4} from '@/lib/guide-articles-extra4';
import {extraGuideArticles5} from '@/lib/guide-articles-extra5';
import {extraGuideArticles6} from '@/lib/guide-articles-extra6';
import {extraGuideArticles7} from '@/lib/guide-articles-extra7';

const sourceGuides=[
  ...speciesGrowthGuides,
  ...freshwaterGuides,...riverExpansionGuides,
  ...quickGuides,
  ...tripPlanningGuides,
  ...practicalGuides,
  ...safetyGuides,
  ...nationalSpeciesGuides,
  ...tackleGuides,
  ...gearBasicsGuides,
  ...nextSpeciesGuides,
  ...coastalGuides,
  ...batchGuides,
  ...expansionGuides,
  ...guideArticles,
  ...extraGuideArticles,
  ...extraGuideArticles2,
  ...extraGuideArticles3,
  ...extraGuideArticles4,
  ...extraGuideArticles5,
  ...extraGuideArticles6,
  ...extraGuideArticles7,
  ...fieldQuestionGuides,
  ...observationGuides,...boatWorkshopGuides,...freshwaterWorkshopGuides,...smallQuestionGuides,
];

const sourceBySlug=new Map(sourceGuides.map(g=>[g.slug,g]));
const directTags=(guide:typeof sourceGuides[number],kind:'fish'|'methods')=>[...new Set(guide.related.flatMap(link=>{const match=link.href.split(/[?#]/)[0].match(new RegExp(`^/${kind}/([^/]+)$`));return match?[kind==='fish'?canonicalFishSlug(match[1]):match[1]]:[]}))];
export const allGuides:ClassifiedGuide[]=sourceGuides.map(guide=>{
 const editorial=guide.editorial??guideEditorial[guide.slug];
 if(!editorial)throw new Error(`GUIDE editorial classification missing: ${guide.slug}`);
 const parent=editorial.parentGuide?sourceBySlug.get(editorial.parentGuide):undefined;
 const referenced=guide.related.flatMap(r=>{const slug=r.href.match(/^\/guide\/([^/?#]+)$/)?.[1];const found=sourceBySlug.get(slug??'');return found?[found]:[]});
 const context=guide.inheritContext===false?undefined:parent??referenced.find(g=>directTags(g,'methods').length||directTags(g,'fish').length);
 return {...guide,...editorial,fishTags:directTags(guide,'fish').length?directTags(guide,'fish'):context?directTags(context,'fish'):[],methodTags:directTags(guide,'methods').length?directTags(guide,'methods'):context?directTags(context,'methods'):[],readingMinutes:guideReadingMinutes(guide)};
});
const guidesBySlug=new Map(allGuides.map(g=>[g.slug,g]));
export const getGuide=(slug:string)=>guidesBySlug.get(slug);
export function getGuidesForFish(slug:string){return allGuides.filter(g=>g.fishTags.includes(canonicalFishSlug(slug)));}
function relationScore(a:ClassifiedGuide,b:ClassifiedGuide){
 return a.methodTags.filter(s=>b.methodTags.includes(s)).length*4+a.fishTags.filter(s=>b.fishTags.includes(s)).length*3+(a.topic===b.topic?1:0)+(a.related.some(r=>r.href===`/guide/${b.slug}`)?6:0);
}
function findParentGuide(slug:string){
 const current=getGuide(slug);if(!current||current.articleType!=='QUICK GUIDE')return undefined;
 if(current.parentGuide)return getGuide(current.parentGuide);
 return allGuides.filter(g=>g.articleType==='GUIDE'&&g.slug!==slug&&(!current.fishTags.length||!g.fishTags.length||g.fishTags.some(f=>current.fishTags.includes(f))))
 .map(g=>({g,score:relationScore(current,g)})).filter(x=>x.score>=3).sort((a,b)=>b.score-a.score||Number(!!b.g.featured)-Number(!!a.g.featured))[0]?.g;
}
const parentGuideCache=new Map<string,ClassifiedGuide|undefined>();
export function getParentGuide(slug:string){
 if(!parentGuideCache.has(slug))parentGuideCache.set(slug,findParentGuide(slug));
 return parentGuideCache.get(slug);
}
export function getGuideQuestions(slug:string,limit=6){return allGuides.filter(g=>g.articleType==='QUICK GUIDE'&&getParentGuide(g.slug)?.slug===slug).sort((a,b)=>Number(b.parentGuide===slug)-Number(a.parentGuide===slug)).slice(0,limit);}
export function getRelatedGuides(slug:string,limit=4){
 const current=getGuide(slug);if(!current)return [];
 return allGuides.filter(g=>g.slug!==slug).map(g=>({g,score:relationScore(current,g)})).filter(x=>x.score>=3).sort((a,b)=>b.score-a.score||Number(!!b.g.featured)-Number(!!a.g.featured)).slice(0,limit).map(x=>x.g);
}
