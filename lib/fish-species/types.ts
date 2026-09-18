export type Fish = {
  slug:string; waterTypes?:('sea'|'brackish'|'fresh')[]; name:string; en:string; scientific:string; season:string; difficulty:number;
  danger:string; methods:string[]; areas:string[]; depth:string; size:string; desc:string;
  accent:string; months:number[]; beginner:boolean; kids:boolean;
  methodSlugs?:string[]; guideSlugs?:string[]; relatedSlugs?:string[];
};

export type FishDetail = {
  family:string; genus:string; aliases:string[]; habitat:string; diet:string; behavior:string;
  lifespan:string; taste:string; cooking:string[]; seasonNote:string; beginnerTip:string; safety:string;
  body:string; fishing:string; trivia:string;
};


export type LaunchFishExtra={
  catchPhrase:string;
  identify:string[];
  imageNotes:[string,string,string,string];
  related:string[];
  methodLinks:{label:string;href:string}[];
  spotFocus:string;
};

export type Recipe={preparation?:'raw'|'cooked';slug:string;name:string;image?:string;summary:string;ingredients:string[];steps:string[];tips:string[]};
export type CookingFish={slug:string;name:string;prep:string[];prepImages?:{step:number;src:string;alt:string}[];recipes:Recipe[]};


export type FishDish={name:string;src?:string;emoji?:string;desc:string;recipe?:string};
export type FishTableGuideData={lead:string;dishes:FishDish[]};

// A species has one authoritative base record; recipes inherit its slug/name.
export type FishEcologyVisual={
  title:string; description:string; image:string; alt:string;
  width:number; height:number; source:{label:string;url:string};
};

export type FishSpeciesDefinition={
  ecologyVisual?:FishEcologyVisual;
  base:Fish;
  representativeRecipes?:string[];
  hazard?:FishHazard;
  cookingOmission?:{reason:'conservation'|'food-safety';note:string;sources:{label:string;url:string}[]};
  quest?:import('../quest/types').QuestParameters;
  media?:{image:string;modelTilt?:number};
  detail?:FishDetail;
  launch?:LaunchFishExtra;
  cooking?:Omit<CookingFish,'slug'|'name'>;
  tableGuide?:FishTableGuideData;
  // Preserve the existing home-page selection order independently of catalog order.
  featuredOrder?:number;
};

// Edibility and display policy are separate: an edible species can require expert handling.
export type FishHazard={
 hazardLevel:'high'|'critical'; edible:'professional-only'|'processed-only'|'not-recommended';
 cookingEnabled:boolean; identificationOnly:boolean; headline:string;
 parts:{name:string;detail:string}[]; bareHands:string; handling:string[];
 foodAdvice:string; identify:string[]; sources:{label:string;url:string}[];verifiedAt:string;
};
