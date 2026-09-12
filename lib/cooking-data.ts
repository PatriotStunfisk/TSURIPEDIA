import {fishSpecies} from '@/lib/fish-species';
import type {CookingFish} from '@/lib/fish-species/types';
export type {CookingFish,Recipe} from '@/lib/fish-species/types';

// Compatibility view: identity always comes from the species' base information.
export const cookingFish:CookingFish[]=fishSpecies.flatMap(({base,cooking})=>
  cooking?[{...cooking,slug:base.slug,name:base.name}]:[]
);
export const getCookingFish=(slug:string)=>cookingFish.find(x=>x.slug===slug);
export const getRecipe=(fishSlug:string,recipeSlug:string)=>getCookingFish(fishSlug)?.recipes.find(x=>x.slug===recipeSlug);
