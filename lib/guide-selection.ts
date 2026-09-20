import type {ClassifiedGuide} from './guide-taxonomy';
/** Stable, bounded and topic-diverse recommendations; never send full article bodies to MAP clients. */
export function selectHubGuides(guides:ClassifiedGuide[],limit=6):ClassifiedGuide[]{
 const candidates=[...new Map(guides.map(g=>[g.slug,g])).values()];
 const selected:ClassifiedGuide[]=[];
 while(selected.length<limit&&candidates.length){
  const score=(g:ClassifiedGuide)=>(g.featured?8:0)+(g.articleType==='GUIDE'?4:0)+(selected.some(x=>x.topic===g.topic)?0:5);
  candidates.sort((a,b)=>score(b)-score(a));
  selected.push(candidates.shift()!);
 }
 return selected;
}
