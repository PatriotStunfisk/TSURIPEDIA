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
];

const directTags=(guide:typeof sourceGuides[number],kind:'fish'|'methods')=>[...new Set(guide.related.flatMap(link=>{const match=link.href.split(/[?#]/)[0].match(new RegExp(`^/${kind}/([^/]+)$`));return match?[kind==='fish'?canonicalFishSlug(match[1]):match[1]]:[]}))];
export const allGuides:ClassifiedGuide[]=sourceGuides.map(guide=>{
 const editorial=guide.editorial??guideEditorial[guide.slug];
 if(!editorial)throw new Error(`GUIDE editorial classification missing: ${guide.slug}`);
 const parent=editorial.parentGuide?sourceGuides.find(g=>g.slug===editorial.parentGuide):undefined;
 const referenced=guide.related.flatMap(r=>{const slug=r.href.match(/^\/guide\/([^/?#]+)$/)?.[1];const found=sourceGuides.find(g=>g.slug===slug);return found?[found]:[]});
 const context=parent??referenced.find(g=>directTags(g,'methods').length||directTags(g,'fish').length);
 return {...guide,...editorial,fishTags:directTags(guide,'fish').length?directTags(guide,'fish'):context?directTags(context,'fish'):[],methodTags:directTags(guide,'methods').length?directTags(guide,'methods'):context?directTags(context,'methods'):[],readingMinutes:guideReadingMinutes(guide)};
});
export const getGuide=(slug:string)=>allGuides.find(x=>x.slug===slug);
export function getGuidesForFish(slug:string){return allGuides.filter(g=>g.fishTags.includes(canonicalFishSlug(slug)));}
function relationScore(a:ClassifiedGuide,b:ClassifiedGuide){
 return a.methodTags.filter(s=>b.methodTags.includes(s)).length*4+a.fishTags.filter(s=>b.fishTags.includes(s)).length*3+(a.topic===b.topic?1:0)+(a.related.some(r=>r.href===`/guide/${b.slug}`)?6:0);
}
export function getParentGuide(slug:string){
 const current=getGuide(slug);if(!current||current.articleType!=='QUICK GUIDE')return undefined;
 if(current.parentGuide)return getGuide(current.parentGuide);
 return allGuides.filter(g=>g.articleType==='GUIDE'&&g.slug!==slug&&(!current.fishTags.length||!g.fishTags.length||g.fishTags.some(f=>current.fishTags.includes(f))))
 .map(g=>({g,score:relationScore(current,g)})).filter(x=>x.score>=3).sort((a,b)=>b.score-a.score||Number(!!b.g.featured)-Number(!!a.g.featured))[0]?.g;
}
export function getGuideQuestions(slug:string,limit=6){return allGuides.filter(g=>g.articleType==='QUICK GUIDE'&&getParentGuide(g.slug)?.slug===slug).sort((a,b)=>Number(b.parentGuide===slug)-Number(a.parentGuide===slug)).slice(0,limit);}
export function getRelatedGuides(slug:string,limit=4){
 const current=getGuide(slug);if(!current)return [];
 return allGuides.filter(g=>g.slug!==slug).map(g=>({g,score:relationScore(current,g)})).filter(x=>x.score>=3).sort((a,b)=>b.score-a.score||Number(!!b.g.featured)-Number(!!a.g.featured)).slice(0,limit).map(x=>x.g);
}
