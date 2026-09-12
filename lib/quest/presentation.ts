import type {QuestFish} from './types';
export const measure=(size:number,fish?:QuestFish)=>`${size}${fish?.sizeUnit??'cm'}`;
