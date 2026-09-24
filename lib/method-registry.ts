import {kansaiGrowthMethods} from './method-details-kansai-growth';
import {pondMethods} from './method-details-pond';
import {largeFishMethods} from './method-details-large-fish';
import {ayuingMethods} from './method-details-ayuing';
import {freshwaterMethods} from './method-details-freshwater';
import {nationalMethodDetails} from './method-details-national';
import {nextMethodDetails} from './method-details-next';
import {coastalMethodDetails} from './method-details-coastal';
import {batchMethodDetails} from './method-details-batch';
import {methodDetails as baseMethodDetails} from '@/lib/method-details';
import {extraMethodDetails} from '@/lib/method-details-extra';
import {extraMethodDetails2} from '@/lib/method-details-extra2';

export const methodDetails={...kansaiGrowthMethods,...pondMethods,...largeFishMethods,...ayuingMethods,...freshwaterMethods,...baseMethodDetails,...extraMethodDetails,...extraMethodDetails2,...batchMethodDetails,...coastalMethodDetails,...nextMethodDetails,...nationalMethodDetails};
export const methodSlugs=Object.keys(methodDetails);
export function getMethod(slug:string){return Object.hasOwn(methodDetails,slug)?methodDetails[slug]:undefined}
