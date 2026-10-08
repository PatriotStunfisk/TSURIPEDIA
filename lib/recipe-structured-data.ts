import type {CookingFish,Recipe} from './fish-species/types';
import {siteUrl} from './site-url';

// Only explicit editorial measurements/sources qualify; never parse minutes from steps.
export function getRecipeTiming(recipe:Recipe){
  const timing=recipe.timing;
  if(!timing||!timing.source.trim()||![timing.prepMinutes,timing.cookMinutes].every(value=>Number.isSafeInteger(value)&&value>=0)||timing.prepMinutes+timing.cookMinutes<=0)return undefined;
  return timing;
}

function imageUrl(src:string|undefined){
  if(!src?.trim())return undefined;
  try{const url=new URL(src,siteUrl);return ['http:','https:'].includes(url.protocol)?url.href:undefined;}catch{return undefined;}
}

export function buildRecipeStructuredData(fish:Pick<CookingFish,'slug'|'name'>,recipe:Recipe){
  const image=imageUrl(recipe.image),timing=getRecipeTiming(recipe);
  const keywords=[...new Set([fish.name,`${fish.name}の${recipe.name}`].map(value=>value.trim()).filter(Boolean))].join(', ');
  return {
    '@context':'https://schema.org','@type':'Recipe',
    name:`${fish.name}の${recipe.name}`,description:recipe.summary,
    ...(image?{image:[image]}:{}),keywords,recipeIngredient:recipe.ingredients,
    recipeInstructions:recipe.steps.map((text,index)=>{
      const images=[...new Set((recipe.stepImages??[]).filter(image=>image.step===index+1).map(image=>imageUrl(image.src)).filter((src):src is string=>!!src))];
      return {'@type':'HowToStep',text,...(images.length?{image:images}:{})};
    }),
    ...(timing?{prepTime:`PT${timing.prepMinutes}M`,cookTime:`PT${timing.cookMinutes}M`}:{}),
    url:`${siteUrl}/cooking/${fish.slug}/${recipe.slug}`,
  };
}
