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
