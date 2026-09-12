import type {Fish,FishSpeciesDefinition,FishTableGuideData} from './types';

export function defineFishSpecies(definition:FishSpeciesDefinition):FishSpeciesDefinition{
  const {base,cooking,tableGuide}=definition;
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(base.slug))throw new Error('Invalid fish slug: '+base.slug);
  const recipes=cooking?.recipes??[];
  for(const recipe of recipes){
    if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(recipe.slug))throw new Error('Invalid recipe slug: '+base.slug+'/'+recipe.slug);
  }
  const recipeSlugs=new Set(recipes.map(recipe=>recipe.slug));
  if(recipeSlugs.size!==recipes.length)throw new Error('Duplicate recipe slug: '+base.slug);
  for(const dish of tableGuide?.dishes??[]){
    if(dish.recipe&&!recipeSlugs.has(dish.recipe))throw new Error('Unknown recipe '+dish.recipe+' for '+base.slug);
  }
  return definition;
}

export function uniqueFishSlugs<T extends Fish>(fish:T[]):T[]{
  const seen=new Set<string>();
  for(const entry of fish){
    if(seen.has(entry.slug))throw new Error('Duplicate fish slug: '+entry.slug);
    seen.add(entry.slug);
  }
  return fish;
}

// Existing editorial cards take precedence. New recipes need no second card list.
export function getSpeciesTableGuide(species:FishSpeciesDefinition):FishTableGuideData|undefined{
  if(species.tableGuide)return {...species.tableGuide,dishes:species.tableGuide.dishes.map(dish=>{
    const recipe=species.cooking?.recipes.find(recipe=>recipe.slug===dish.recipe);
    return recipe?{...dish,name:recipe.name,src:recipe.image}:dish;
  })};
  if(!species.cooking?.recipes.length)return undefined;
  return {lead:'',dishes:species.cooking.recipes.map(recipe=>({
    name:recipe.name,src:recipe.image,emoji:'🍽️',desc:recipe.summary,recipe:recipe.slug,
  }))};
}
