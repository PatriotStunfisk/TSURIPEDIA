import {methodDetails as baseMethodDetails} from '@/lib/method-details';
import {extraMethodDetails} from '@/lib/method-details-extra';
import {extraMethodDetails2} from '@/lib/method-details-extra2';

export const methodDetails={...baseMethodDetails,...extraMethodDetails,...extraMethodDetails2};
export const methodSlugs=Object.keys(methodDetails);
export function getMethod(slug:string){return Object.hasOwn(methodDetails,slug)?methodDetails[slug]:undefined}
