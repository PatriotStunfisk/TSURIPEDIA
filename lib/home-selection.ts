import {fishCatalog} from './fish-registry';
import {getFishSpecies} from './fish-species';
export function selectHomeFish(month:number,limit=8){
 const eligible=fishCatalog.filter(f=>f.media&&!f.hazard?.identificationOnly);
 const ordered=[...eligible].sort((a,b)=>(getFishSpecies(a.slug)?.featuredOrder??999)-(getFishSpecies(b.slug)?.featuredOrder??999));
 const fixed=ordered.slice(0,Math.min(4,limit));
 const seasonal=eligible.filter(f=>f.months.includes(month)&&!fixed.some(x=>x.slug===f.slug));
 const offset=seasonal.length?(month-1)%seasonal.length:0;
 return [...new Map([...fixed,...seasonal.slice(offset),...seasonal.slice(0,offset),...ordered].map(f=>[f.slug,f])).values()].slice(0,limit);
}
