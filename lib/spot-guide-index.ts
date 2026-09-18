import {allGuides} from './all-guides';
/** Derived once on the server; clients receive IDs, never article bodies. */
export const spotGuideIndex:Record<string,string[]>={};
for(const guide of allGuides){
 const paths=new Set([...guide.fishTags.map(slug=>`/fish/${slug}`),...guide.related.map(r=>r.href.split(/[?#]/)[0]).filter(p=>p.startsWith('/fish/')||p.startsWith('/methods/'))]);
 for(const path of paths){const list=spotGuideIndex[path]??=[];if(list.length<6)list.push(guide.slug);}
}
