import records from './spot-site-plan-data.json';
import {fishCatalog} from './fish-registry';
import {methodDetails} from './method-registry';
import type {SpotSitePlan} from './spot-site-plan-types';
// This registry stays on the server. A selected plan alone is sent to MAP details.
export const spotSitePlans:Record<string,SpotSitePlan>=Object.fromEntries(records.map(record=>{
 const plan:SpotSitePlan={...record,shapes:record.shapes as SpotSitePlan['shapes'],points:record.points.map(({fishSlugs,methodSlugs,...point})=>({...point,
  fish:fishSlugs.map(slug=>{const f=fishCatalog.find(f=>f.slug===slug);if(!f)throw new Error(`Unknown site-plan fish: ${slug}`);return {slug:f.slug,name:f.name};}),
  methods:methodSlugs.map(slug=>{const m=methodDetails[slug];if(!m)throw new Error(`Unknown site-plan method: ${slug}`);return {slug,name:m.name};}),
 }))};return [record.slug,plan];
}));
