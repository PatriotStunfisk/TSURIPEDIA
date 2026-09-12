import {jstDay} from './engine';
import type {QuestCatch,QuestSave} from './types';

export const emptySave=():QuestSave=>({version:1,xp:0,total:0,records:{},methods:{},methodFish:{},habitatFish:{},daily:{},claimed:[],recent:[]});
export function recordCatch(save:QuestSave,caught:QuestCatch):QuestSave{
 if(save.recent.some(c=>c.id===caught.id))return save;
 const previous=save.records[caught.slug];const day=jstDay(caught.at);const today=save.daily[day]??{count:0,fish:[]};
 const daily={...save.daily,[day]:{count:today.count+1,fish:[...new Set([...today.fish,caught.slug])]}};
 const xp=caught.xp+(previous?0:30);
 return {...save,xp:save.xp+xp,total:save.total+1,
  records:{...save.records,[caught.slug]:{count:(previous?.count??0)+1,best:Math.max(previous?.best??0,caught.size),firstAt:previous?.firstAt??caught.at,lastAt:caught.at}},
  methods:{...save.methods,[caught.method]:(save.methods[caught.method]??0)+1},
  methodFish:{...save.methodFish,[caught.method]:[...new Set([...(save.methodFish[caught.method]??[]),caught.slug])]},
  habitatFish:{...save.habitatFish,[caught.habitat]:[...new Set([...(save.habitatFish[caught.habitat]??[]),caught.slug])]},
  daily:Object.fromEntries(Object.entries(daily).sort(([a],[b])=>b.localeCompare(a)).slice(0,30)),recent:[{...caught,xp},...save.recent].slice(0,200)};
}
export type Mission={id:string;group:'初心者'|'デイリー'|'チャレンジ';title:string;description:string;goal:number;progress:number;xp:number;claimed:boolean};
export function missions(save:QuestSave,now:number):Mission[]{
 const day=jstDay(now);const daily=save.daily[day]??{count:0,fish:[]};
 const entries=[
  {id:'first',group:'初心者' as const,title:'最初の1匹',description:'どの魚でも1匹釣り上げよう。',goal:1,progress:save.total,xp:40},
  {id:'three-species',group:'初心者' as const,title:'図鑑をひらく',description:'3魚種を捕まえよう。',goal:3,progress:Object.keys(save.records).length,xp:80},
  {id:'aji-three',group:'初心者' as const,title:'アジの群れを探そう',description:'マアジを合計3匹。大阪湾・堤防のサビキを試そう。',goal:3,progress:save.records.aji?.count??0,xp:80},
  {id:`daily-catch:${day}`,group:'デイリー' as const,title:'今日の3匹',description:'日本時間の今日中に3匹釣ろう。',goal:3,progress:daily.count,xp:60},
  {id:`daily-variety:${day}`,group:'デイリー' as const,title:'今日の釣り分け',description:'日本時間の今日中に2魚種釣ろう。',goal:2,progress:daily.fish.length,xp:70},
  {id:'eging-squid',group:'チャレンジ' as const,title:'エギングで出会う',description:'エギングでアオリイカを釣ろう。',goal:1,progress:save.methodFish.eging?.includes('aoriika')?1:0,xp:100},
  {id:'big-buri',group:'チャレンジ' as const,title:'80cmの大物',description:'80cm以上のブリを釣ろう。',goal:80,progress:save.records.buri?.best??0,xp:180},
  {id:'osaka-five',group:'チャレンジ' as const,title:'大阪湾の多様性',description:'大阪湾・堤防と沖で5魚種集めよう。',goal:5,progress:new Set([...(save.habitatFish['osaka-bay-pier']??[]),...(save.habitatFish['osaka-bay-offshore']??[])]).size,xp:150},
 ];
 return entries.map(m=>({...m,progress:Math.min(m.goal,m.progress),claimed:save.claimed.includes(m.id)}));
}
export function claimMission(save:QuestSave,id:string,now:number):QuestSave{
 const mission=missions(save,now).find(m=>m.id===id);
 return !mission||mission.claimed||mission.progress<mission.goal?save:{...save,xp:save.xp+mission.xp,claimed:[...save.claimed,id]};
}
export function levelInfo(xp:number){const level=Math.floor(Math.sqrt(xp/100))+1;const start=100*(level-1)**2;const next=100*level**2;return {level,start,next,progress:xp-start,required:next-start,title:level>=10?'海を知る釣り人':level>=5?'釣り歩く探究者':'はじまりの釣り人'}}
