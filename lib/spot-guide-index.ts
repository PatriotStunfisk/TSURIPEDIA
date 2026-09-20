import {allGuides} from './all-guides';
import {selectHubGuides} from './guide-selection';
import type {ClassifiedGuide} from './guide-taxonomy';
// Built on the server; a maximum of six IDs per relationship travels to the map.
const candidates=new Map<string,ClassifiedGuide[]>();
for(const guide of allGuides){
 const paths=new Set([...guide.fishTags.map(slug=>`/fish/${slug}`),...guide.methodTags.map(slug=>`/methods/${slug}`)]);
 for(const path of paths){const list=candidates.get(path)??[];list.push(guide);candidates.set(path,list);}
}
export const spotGuideIndex:Record<string,string[]>=Object.fromEntries([...candidates].map(([path,guides])=>[path,selectHubGuides(guides).map(g=>g.slug)]));
