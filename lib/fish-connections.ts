import {fishCatalog,getFishProfile,getFishByName,type FishProfile} from '@/lib/fish-registry';
import {getFishMethodSlugs} from '@/lib/fish-methods';
import {getMethod} from '@/lib/method-registry';
import {getGuide,getGuidesForFish} from '@/lib/all-guides';

export function getFishConnections(slug:string){
  const fish=getFishProfile(slug);
  if(!fish)return undefined;
  const methods=getFishMethodSlugs(fish).flatMap(id=>{const method=getMethod(id);return method?[method]:[]});
  const guides=[...new Map([
    ...(fish.guideSlugs??[]).flatMap(id=>{const guide=getGuide(id);return guide?[guide]:[]}),
    ...getGuidesForFish(slug),
  ].map(guide=>[guide.slug,guide])).values()];
  const hasEditorialRelated=fish.relatedSlugs!==undefined||fish.launch!==undefined;
  const candidates:FishProfile[]=fish.relatedSlugs!==undefined
    ? fish.relatedSlugs.flatMap(id=>{const related=getFishProfile(id);return related?[related]:[]})
    : fish.launch
      ? fish.launch.related.flatMap(name=>{const related=getFishByName(name);return related?[related]:[]})
      : fishCatalog.filter(other=>other.slug!==slug&&getFishMethodSlugs(other).some(id=>methods.some(method=>method.slug===id)));
  const related=[...new Map(candidates.filter(other=>other.slug!==slug).map(other=>[other.slug,other])).values()];
  return {methods,guides,cooking:fish.cooking,related,hasEditorialRelated};
}
