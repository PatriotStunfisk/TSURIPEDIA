import {emptySave} from './progress';
import type {QuestSave} from './types';

export const QUEST_STORAGE_KEY='uolink:quest:v1';
const object=(v:unknown):v is Record<string,unknown>=>!!v&&typeof v==='object'&&!Array.isArray(v);
const number=(v:unknown):v is number=>typeof v==='number'&&Number.isFinite(v)&&v>=0&&v<=1e12;
const timestamp=(v:unknown)=>typeof v==='number'&&Number.isFinite(v)&&v>=0&&v<8e15;
const key=(v:unknown)=>typeof v==='string'&&/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v)&&v.length<100;
const keys=(v:unknown)=>Array.isArray(v)&&v.length<=1000&&v.every(key);
const dict=(v:unknown,valid:(x:unknown)=>boolean)=>object(v)&&Object.keys(v).length<=1000&&Object.entries(v).every(([k,x])=>key(k)&&valid(x));

// Do not silently replace corrupt or newer-format saves. The UI can continue in memory.
export function parseSave(raw:string|null):{save:QuestSave;status:'empty'|'ok'|'invalid'|'future'}{
 if(raw===null)return {save:emptySave(),status:'empty'};
 try{
  if(raw.length>2_000_000)throw new Error('oversize');
  const v:unknown=JSON.parse(raw);
  if(!object(v))throw new Error('object');
  if(typeof v.version==='number'&&v.version>1)return {save:emptySave(),status:'future'};
  const valid=v.version===1&&number(v.xp)&&number(v.total)
   &&dict(v.records,x=>object(x)&&number(x.count)&&x.count>0&&number(x.best)&&timestamp(x.firstAt)&&timestamp(x.lastAt))
   &&dict(v.methods,number)&&dict(v.methodFish,keys)&&dict(v.habitatFish,keys)
   &&object(v.daily)&&Object.keys(v.daily).length<=30&&Object.entries(v.daily).every(([d,x])=>/^\d{4}-\d{2}-\d{2}$/.test(d)&&object(x)&&number(x.count)&&keys(x.fish))
   &&Array.isArray(v.claimed)&&v.claimed.length<=5000&&v.claimed.every(x=>typeof x==='string'&&/^[a-z0-9:-]+$/.test(x)&&x.length<=100)
   &&Array.isArray(v.recent)&&v.recent.length<=200&&v.recent.every(x=>object(x)&&typeof x.id==='string'&&x.id.length<=100&&key(x.slug)&&key(x.method)&&key(x.habitat)&&timestamp(x.at)&&number(x.size)&&number(x.xp)&&['regular','big','record'].includes(String(x.grade)));
  if(!valid)throw new Error('schema');
  return {save:v as unknown as QuestSave,status:'ok'};
 }catch{return {save:emptySave(),status:'invalid'}}
}
