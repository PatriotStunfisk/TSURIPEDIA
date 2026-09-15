import {canonicalFishSlug} from '../fish-aliases';
import type {QuestSave} from './types';
// Preserve earned XP, catch counts and dates; merge only the species identity.
export function canonicalizeQuestSave(save:QuestSave):QuestSave{
 const records:QuestSave['records']={};
 for(const [slug,record] of Object.entries(save.records)){
  const id=canonicalFishSlug(slug),previous=records[id];
  records[id]=previous?{count:previous.count+record.count,best:Math.max(previous.best,record.best),firstAt:Math.min(previous.firstAt,record.firstAt),lastAt:Math.max(previous.lastAt,record.lastAt)}:{...record};
 }
 const ids=(values:string[])=>[...new Set(values.map(canonicalFishSlug))];
 const groups=(values:Record<string,string[]>)=>Object.fromEntries(Object.entries(values).map(([key,value])=>[key,ids(value)]));
 return {...save,records,methodFish:groups(save.methodFish),habitatFish:groups(save.habitatFish),daily:Object.fromEntries(Object.entries(save.daily).map(([day,value])=>[day,{...value,fish:ids(value.fish)}])),recent:save.recent.map(c=>({...c,slug:canonicalFishSlug(c.slug)}))};
}
