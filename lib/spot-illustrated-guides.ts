import records from './spot-illustrated-guide-data.json';
import {fishingMapEntries} from './fishing-map-data';
import {fishCatalog} from './fish-registry';
import {methodDetails} from './method-registry';
import {illustrationLessons} from './spot-illustration-lessons';
import type {SpotIllustration,SpotIllustrationTopic} from './spot-illustration-types';
import type {SpotFieldGuide} from './spot-planning';
const entries=new Map(fishingMapEntries.map(s=>[s.slug,s]));
const fish=new Map(fishCatalog.map(f=>[f.slug,{slug:f.slug,name:f.name}]));
// Server-only assembly. Reuse researched locality notes; do not duplicate the MAP registry.
export function attachSpotIllustrations(guides:Record<string,SpotFieldGuide>):void{
 for(const record of records){
  const spot=entries.get(record.slug),guide=guides[record.slug],method=methodDetails[record.method];
  if(!spot||!guide||!method||!Object.hasOwn(illustrationLessons,record.topic)||!spot.methodSlugs?.includes(record.method))throw new Error(`Invalid illustrated guide: ${record.slug}`);
  if(spot.closed||guide.sitePlan)continue;
  const illustration:SpotIllustration={slug:spot.slug,name:spot.name,topic:record.topic as SpotIllustrationTopic,
   context:spot.note,localApproach:guide.approach,method:{slug:record.method,name:method.name},
   fish:(spot.fishSlugs??[]).flatMap(slug=>fish.has(slug)?[fish.get(slug)!]:[]),
   sources:guide.sources?.length?guide.sources:spot.sources??[],sourceCheckedAt:guide.reviewedAt??spot.verifiedAt,
  };
  guides[record.slug]={...guide,illustration};
 }
}
