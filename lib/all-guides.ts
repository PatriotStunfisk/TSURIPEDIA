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
  const href=`/fish/${slug}`;
  return allGuides.filter(guide=>guide.related.some(link=>link.href.split(/[?#]/)[0]===href));
}
