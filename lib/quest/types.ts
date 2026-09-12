export type QuestParameters={
 enabled?:boolean;rarity?:number;fightPower?:number;biteRate?:number;escapeRate?:number;xp?:number;
 habitats?:string[];methods?:string[];sizeRange?:[number,number];
 swimSpeed?:number;wariness?:number;approachSpeed?:number;biteWindowMs?:number;stamina?:number;runPower?:number;
};
export type QuestFish={
 slug:string;name:string;months:number[];season:string;sizeLabel:string;minSize:number;maxSize:number;
 rarity:number;fightPower:number;biteRate:number;escapeRate:number;xp:number;habitats:string[];methods:string[];
 image?:string;modelSrc?:string;cooking:boolean;guideHref?:string;
 sizeUnit?:'cm'|'kg';swimSpeed?:number;wariness?:number;approachSpeed?:number;biteWindowMs?:number;stamina?:number;runPower?:number;
};
export type QuestMethod={slug:string;name:string;rod:string;reel:string;line:string;leader:string;rig:string;bait:string;tip:string};
export type QuestHabitat={slug:string;name:string;description:string;methods:string[];mapQuery:string};
export type QuestCatch={id:string;slug:string;size:number;grade:'regular'|'big'|'record';method:string;habitat:string;at:number;xp:number};
export type FishRecord={count:number;best:number;firstAt:number;lastAt:number};
export type QuestSave={
 version:1;xp:number;total:number;records:Record<string,FishRecord>;methods:Record<string,number>;
 methodFish:Record<string,string[]>;habitatFish:Record<string,string[]>;daily:Record<string,{count:number;fish:string[]}>;
 claimed:string[];recent:QuestCatch[];
};
