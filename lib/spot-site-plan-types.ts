export type SiteShapeKind='land'|'deck'|'reef'|'tetrapods'|'restricted'|'sand';
export type SpotSitePlan={
 slug:string; title:string; orientation:string; caption:string; reviewedAt:string;
 sources:{label:string;url:string}[];
 access:{parking:string;transit:string;arrival:string[];toilet:string};
 shapes:{kind:SiteShapeKind;points:string}[];
 labels:{x:number;y:number;text:string}[];
 points:{id:string;x:number;y:number;title:string;terrain:string;depth?:string;
  fish:{slug:string;name:string}[];methods:{slug:string;name:string}[];
  technique:string;season:string;watch:string}[];
};
