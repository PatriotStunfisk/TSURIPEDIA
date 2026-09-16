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

export const allGuides=[
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

export const getGuide=(slug:string)=>allGuides.find(x=>x.slug===slug);

// Existing article → fish links also supply the fish → article direction.
export function getGuidesForFish(slug:string){
  return allGuides.filter(guide=>guide.related.some(link=>{const match=link.href.split(/[?#]/)[0].match(/^\/fish\/([^/]+)$/);return match&&canonicalFishSlug(match[1])===canonicalFishSlug(slug);}));
}

// Shared, exact fish/method relationships; unrelated category matches do not qualify.
export function getRelatedGuides(slug:string,limit=4){
 const current=getGuide(slug);if(!current)return [];
 const targets=new Set(current.related.map(x=>x.href.split(/[?#]/)[0]).filter(x=>/^\/(fish|methods)\/[^/]+$/.test(x)));
 return allGuides.filter(a=>a.slug!==slug).map(a=>({a,score:a.related.filter(x=>targets.has(x.href.split(/[?#]/)[0])).length})).filter(x=>x.score>0).sort((a,b)=>Number(!!b.a.featured)-Number(!!a.a.featured)||b.score-a.score).slice(0,limit).map(x=>x.a);
}
