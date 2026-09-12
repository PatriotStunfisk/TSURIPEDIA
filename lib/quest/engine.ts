import type {QuestCatch,QuestFish} from './types';
import {questHabitats} from './habitats';

export const jstDay=(at:number)=>new Date(at+9*60*60*1000).toISOString().slice(0,10);
export const jstMonth=(at:number)=>new Date(at+9*60*60*1000).getUTCMonth()+1;
export function eligibleFish(fish:QuestFish[],habitat:string,method:string){return questHabitats.some(h=>h.slug===habitat&&h.methods.includes(method))?fish.filter(f=>f.habitats.includes(habitat)&&f.methods.includes(method)):[]}
export function seasonWeight(fish:QuestFish,month:number){return (fish.months.includes(month)?1.8:.65)/fish.rarity}
export function chooseFish(fish:QuestFish[],month:number,random:()=>number=Math.random){
 if(!fish.length)return undefined;
 const total=fish.reduce((n,f)=>n+seasonWeight(f,month),0);let position=random()*total;
 return fish.find(f=>(position-=seasonWeight(f,month))<0)??fish[fish.length-1];
}
export type Round={phase:'ready'|'waiting'|'bite'|'fight'|'caught'|'miss';fish?:QuestFish;catch?:QuestCatch;biteAt:number;deadline:number;lastAction:number;progress:number;tension:number;willBite:boolean;reason:string};
export const emptyRound=():Round=>({phase:'ready',biteAt:0,deadline:0,lastAction:0,progress:0,tension:20,willBite:true,reason:''});
export function cast(fish:QuestFish[],habitat:string,method:string,id:string,now:number,random:()=>number=Math.random):Round{
 const target=chooseFish(eligibleFish(fish,habitat,method),jstMonth(now),random);
 if(!target)return {...emptyRound(),phase:'miss',reason:'この組み合わせの対象魚はまだ登録されていません。釣り場か釣法を選び直してください。'};
 const rarityRoll=random();const grade=rarityRoll<.03?'record':rarityRoll<.15?'big':'regular';
 const ratio=grade==='record'?.96+random()*.04:grade==='big'?.8+random()*.16:random()*.8;
 const size=Math.round((target.minSize+(target.maxSize-target.minSize)*ratio)*10)/10;
 const biteAt=now+6000+Math.floor(random()*5000);
 return {...emptyRound(),phase:'waiting',fish:target,biteAt,deadline:biteAt+6500,willBite:random()<target.biteRate,
  catch:{id,slug:target.slug,size,grade,method,habitat,at:now,xp:target.xp+(grade==='record'?40:grade==='big'?20:0)}};
}
export function advance(round:Round,now:number):Round{
 if(round.phase==='waiting'&&now>=round.biteAt){
  if(!round.willBite)return {...round,phase:'miss',reason:'今回はアタリがありませんでした。次のキャストで棚や釣法を試そう。'};
  if(now>round.deadline)return {...round,phase:'miss',reason:'アタリを見逃しました。もう一度キャストできます。'};
  return {...round,phase:'bite'};
 }
 if(round.phase==='bite'&&now>round.deadline)return {...round,phase:'miss',reason:'合わせが間に合いませんでした。次のアタリを待とう。'};
 if(round.phase==='fight'&&now>round.deadline)return {...round,phase:'miss',reason:'魚に走られてしまいました。巻く・糸を送るを切り替えて再挑戦。'};
 return round;
}
export function hook(round:Round,now:number,random:()=>number=Math.random):Round{
 const current=advance(round,now);
 if(current.phase==='waiting')return {...current,phase:'miss',reason:'合わせが早すぎました。「アタリ！」を待ってから合わせよう。'};
 if(current.phase!=='bite')return current;
 if(random()<(current.fish?.escapeRate??0))return {...current,phase:'miss',reason:'針に掛かりきりませんでした。もう一度チャレンジ。'};
 return {...current,phase:'fight',deadline:now+45000,lastAction:0};
}
export function fight(round:Round,action:'reel'|'ease',now:number):Round{
 const current=advance(round,now);
 if(current.phase!=='fight'||now-current.lastAction<350)return current;
 const tension=Math.max(0,current.tension+(action==='reel'?14+(current.fish?.fightPower??40)/10:-32));
 const progress=Math.max(0,current.progress+(action==='reel'?14:-3));
 if(tension>=100)return {...current,tension:100,phase:'miss',reason:'糸を張りすぎて逃げられました。テンションが高いときは「糸を送る」。'};
 if(progress>=100)return {...current,tension,progress:100,phase:'caught',catch:current.catch?{...current.catch,at:now}:undefined};
 return {...current,tension,progress,lastAction:now};
}
