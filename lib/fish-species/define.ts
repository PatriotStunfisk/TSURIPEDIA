import type {Fish,FishSpeciesDefinition,FishTableGuideData} from './types';

export function defineFishSpecies(definition:FishSpeciesDefinition):FishSpeciesDefinition{
  const {base,cooking,tableGuide}=definition;
  if(definition.cookingOmission&&(cooking||tableGuide))throw new Error('Recipes conflict with cooking omission: '+base.slug);
  if(definition.cookingOmission&&(!definition.cookingOmission.note.trim()||!definition.cookingOmission.sources.length))throw new Error('Cooking omission needs a reason and sources: '+base.slug);
  if(definition.hazard){
    const h=definition.hazard;
    if(!h.cookingEnabled&&(cooking||tableGuide))throw new Error('Cooking disabled for hazardous fish: '+base.slug);
    if(h.edible==='professional-only'&&h.cookingEnabled)throw new Error('No home recipes for professional-only fish: '+base.slug);
    if(h.identificationOnly&&definition.quest?.enabled!==false)throw new Error('Identification-only fish must opt out of QUEST: '+base.slug);
  }
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(base.slug))throw new Error('Invalid fish slug: '+base.slug);
  const tilt=definition.media?.modelTilt;
  if(tilt!==undefined&&(!Number.isFinite(tilt)||Math.abs(tilt)>Math.PI*2))throw new Error('Invalid model tilt: '+base.slug);
  const q=definition.quest;
  if(q){
    if(q.fightProfile&&!['balanced','runner','diver','jumper','bottom','jet'].includes(q.fightProfile))throw new Error('Invalid quest fight profile: '+base.slug);
    for(const [key,min,max] of [['rarity',1,5],['fightPower',1,100],['biteRate',0,1],['escapeRate',0,1],['xp',1,10000],['swimSpeed',.1,3],['wariness',0,1],['approachSpeed',5,50],['biteWindowMs',800,10000],['stamina',20,100],['runPower',1,100]] as const){
      const value=q[key];if(value!==undefined&&(!Number.isFinite(value)||value<min||value>max))throw new Error('Invalid quest '+key+': '+base.slug);
    }
    for(const anchor of [q.hook?.mouthAnchor,q.hook?.modelAnchor])if(anchor&&Object.values(anchor).some(v=>!Number.isFinite(v)||v<0||v>1))throw new Error('Invalid quest hook anchor: '+base.slug);
    if(q.sizeRange&&(!q.sizeRange.every(v=>Number.isFinite(v)&&v>0)||q.sizeRange[1]<q.sizeRange[0]))throw new Error('Invalid quest size range: '+base.slug);
  }
  const recipes=cooking?.recipes??[];
  for(const recipe of recipes){
    if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(recipe.slug))throw new Error('Invalid recipe slug: '+base.slug+'/'+recipe.slug);
  }
  const recipeSlugs=new Set(recipes.map(recipe=>recipe.slug));
  if(recipeSlugs.size!==recipes.length)throw new Error('Duplicate recipe slug: '+base.slug);
  if(definition.representativeRecipes&&(definition.representativeRecipes.length>4||new Set(definition.representativeRecipes).size!==definition.representativeRecipes.length||definition.representativeRecipes.some(s=>!recipeSlugs.has(s))))throw new Error('Invalid representative recipes: '+base.slug);
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
  if(species.cookingOmission||species.hazard?.cookingEnabled===false)return undefined;
  if(species.representativeRecipes?.length)return {lead:species.tableGuide?.lead??'',dishes:species.representativeRecipes.map(slug=>{
    const recipe=species.cooking!.recipes.find(r=>r.slug===slug)!;const original=species.tableGuide?.dishes.find(d=>d.recipe===slug);
    return original?{...original,name:recipe.name,src:recipe.image}:{name:recipe.name,src:recipe.image,emoji:'🍽️',desc:recipe.summary,recipe:slug};
  })};
  if(species.tableGuide)return {...species.tableGuide,dishes:species.tableGuide.dishes.slice(0,4).map(dish=>{const recipe=species.cooking?.recipes.find(r=>r.slug===dish.recipe);return recipe?{...dish,name:recipe.name,src:recipe.image}:dish;})};
  if(!species.cooking?.recipes.length)return undefined;
  return {lead:'',dishes:species.cooking.recipes.slice(0,4).map(recipe=>({name:recipe.name,src:recipe.image,emoji:'🍽️',desc:recipe.summary,recipe:recipe.slug}))};
}
