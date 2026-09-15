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
export type Style='sabiki'|'eging'|'kawahagi'|'ayu'|'standard';
export type Round={phase:'ready'|'waiting'|'bite'|'fight'|'landing'|'caught'|'miss';fish?:QuestFish;catch?:QuestCatch;biteAt:number;deadline:number;lastAction:number;progress:number;tension:number;willBite:boolean;reason:string;style:Style;started:number;lastTick:number;attraction:number;depth:number;targetDepth:number;lastLure:number;stamina:number;running:boolean;drag:'soft'|'normal';fishDepth:number;distance:number;initialDepth:number;initialDistance:number;finalRunUntil:number;finalRunDone:boolean;landingMode:'lift'|'net';};
export const emptyRound=():Round=>({phase:'ready',biteAt:0,deadline:0,lastAction:0,progress:0,tension:20,willBite:true,reason:'',style:'standard',started:0,lastTick:0,attraction:0,depth:1,targetDepth:1,lastLure:0,stamina:75,running:false,drag:'normal',fishDepth:0,distance:0,initialDepth:1,initialDistance:1,finalRunUntil:0,finalRunDone:false,landingMode:'lift'});
export function cast(fish:QuestFish[],habitat:string,method:string,id:string,now:number,random:()=>number=Math.random):Round{
 const target=chooseFish(eligibleFish(fish,habitat,method),jstMonth(now),random);
 if(!target)return {...emptyRound(),phase:'miss',reason:'この組み合わせの対象魚はまだ登録されていません。釣り場か釣法を選び直してください。'};
 const rarityRoll=random();const grade=rarityRoll<.03?'record':rarityRoll<.15?'big':'regular';
 const ratio=grade==='record'?.96+random()*.04:grade==='big'?.8+random()*.16:random()*.8;
 const precision=target.sizeUnit==='kg'?100:10;
 const size=Math.round((target.minSize+(target.maxSize-target.minSize)*ratio)*precision)/precision;
 const style:Style=method==='ayu-tomozuri'?'ayu':['sabiki','eging','kawahagi'].includes(method)?method as Style:'standard';
 const biteAt=now+6000+Math.floor(random()*5000);
 return {...emptyRound(),phase:'waiting',fish:target,biteAt,deadline:now+35000,started:now,lastTick:now,style,targetDepth:Math.floor(random()*3),stamina:target.stamina??75,willBite:random()<target.biteRate,
  catch:{id,slug:target.slug,size,grade,method,habitat,at:now,xp:target.xp+(grade==='record'?40:grade==='big'?20:0)}};
}
export function advance(round:Round,now:number):Round{
 if(round.phase==='landing')return now>=round.deadline?{...round,phase:'caught',catch:round.catch?{...round.catch,at:now}:undefined}:round;
 if(!['waiting','bite','fight'].includes(round.phase))return round;
 if(now>round.deadline)return {...round,phase:'miss',reason:round.phase==='waiting'?'魚が離れていきました。棚や誘い方を変えて再挑戦。':round.phase==='bite'?'魚が離れました。魚とラインの動きを見て次の合わせへ。':'魚に走られてしまいました。ドラグと巻くタイミングを変えて再挑戦。'};
 const dt=Math.max(0,now-round.lastTick)/1000;
 let current={...round,lastTick:now};
 if(current.phase==='waiting'){
  const approach=current.fish?.approachSpeed??18;
  let attraction=current.attraction;
  if(current.style==='sabiki')attraction+=dt*(current.depth===current.targetDepth?approach:-12);
  if((current.style==='standard'||current.style==='ayu'))attraction=100*(now-current.started)/(current.biteAt-current.started);
  current={...current,attraction:Math.max(0,Math.min(100,attraction))};
  const settled=now-current.lastLure;
  const canBite=(current.style==='standard'||current.style==='ayu')?now>=current.biteAt:current.style==='sabiki'?current.attraction>=100:current.style==='eging'?current.attraction>=65&&settled>=2200:current.attraction>=65&&settled>=1800;
  if(canBite){
   if(!current.willBite)return {...current,phase:'miss',reason:'魚が見切って離れました。次のキャストで誘い直そう。'};
   const window=Math.min(current.fish?.biteWindowMs??4500,current.style==='kawahagi'?1800:5000);
   return {...current,phase:'bite',attraction:100,biteAt:now,deadline:now+window};
  }
 }
 if(current.phase==='fight'){
  // A visible, deterministic run/rest rhythm; every tick advances the same physics as a button action.
  const profile=current.fish?.fightProfile??'balanced';
  const rhythm=profile==='jet'?1100:profile==='runner'?1300:1700;
  const running=now<current.finalRunUntil||(Math.sin((now-current.started)/rhythm)>0.3&&current.stamina>12);
  const power=current.fish?.runPower??50;
  const tension=Math.max(0,Math.min(100,current.tension+dt*(running?(power/13)*(current.drag==='soft'?.35:1):-2)));
  const stamina=Math.max(0,current.stamina-dt*(tension>8?3+power/40:1));
  if(tension>=100)return {...current,phase:'miss',tension,reason:'走りを止めすぎてラインブレイク。次は走っている間にドラグを緩めよう。'};
  const retreat=running?dt*(profile==='diver'?1.4:profile==='runner'?.9:.45):0;
  const progress=Math.max(0,current.progress-retreat);
  current={...current,running,tension,stamina,progress,...position(current,progress)};
 }
 return current;
}
export function lure(round:Round,action:'up'|'down'|'invite',now:number):Round{
 const current=advance(round,now);
 if(current.phase!=='waiting'||now-current.lastAction<550)return current;
 if(action==='up'||action==='down')return {...current,depth:Math.max(0,Math.min(2,current.depth+(action==='up'?-1:1))),lastAction:now};
 const impatient=current.lastLure>0&&now-current.lastLure<900;
 const attraction=Math.max(0,Math.min(100,current.attraction+(impatient?-25*(current.fish?.wariness??.3):38)));
 return {...current,attraction,lastLure:now,lastAction:now};
}
export function hook(round:Round,now:number,random:()=>number=Math.random):Round{
 const current=advance(round,now);
 if(current.phase==='waiting')return {...current,phase:'miss',reason:current.style==='eging'?'まだ抱いていません。しゃくった後のフォールで腕が伸びるのを待とう。':current.style==='kawahagi'?'まだ餌をつついています。誘いを止め、持ち込む動きで合わせよう。':current.style==='ayu'?'まだ追い払っていません。おとりへ突進する動きを待とう。':'魚がまだ餌を食べていません。食い込みとラインの動きを待とう。'};
 if(current.phase!=='bite')return current;
 if(random()<(current.fish?.escapeRate??0))return {...current,phase:'miss',reason:'針に掛かりきりませんでした。もう一度チャレンジ。'};
 const initialDepth=questHabitats.find(h=>h.slug===current.catch?.habitat)?.fightDepth??(current.catch?.habitat==='clear-river'?1.5:current.catch?.habitat==='trout-pond'?3.5:current.catch?.habitat.includes('offshore')?28:current.catch?.habitat==='akashi'?24:6+current.targetDepth*5);
 const initialDistance=initialDepth*1.3+10;
 return {...current,phase:'fight',deadline:now+100000,started:now,lastTick:now,lastAction:0,initialDepth,initialDistance,fishDepth:initialDepth,distance:initialDistance,landingMode:(current.catch?.size??0)>45||current.fish?.sizeUnit==='kg'?'net':'lift'};
}
export function setDrag(round:Round,drag:Round['drag'],now:number):Round{const current=advance(round,now);return current.phase==='fight'?{...current,drag}:current}
export function fight(round:Round,action:'reel'|'ease',now:number):Round{
 const current=advance(round,now);
 if(current.phase!=='fight'||now-current.lastAction<350)return current;
 const tension=Math.max(0,current.tension+(action==='reel'?(current.running?23:12)+(current.fish?.fightPower??40)/15:-28));
 const sizeRatio=current.fish&&current.catch?Math.max(0,Math.min(1,(current.catch.size-current.fish.minSize)/Math.max(1,current.fish.maxSize-current.fish.minSize))):.5;
 const sizeFactor=.85+sizeRatio*.8;
 const bottom=current.fish?.fightProfile==='bottom'&&current.progress<60?.75:1;
 const gain=bottom*(current.running?2.5:current.drag==='soft'?8:12)/sizeFactor;
 let progress=Math.max(0,Math.min(current.stamina>20?94:100,current.progress+(action==='reel'?gain:-2)));
 let finalRunDone=current.finalRunDone,finalRunUntil=current.finalRunUntil;
 if(progress>=85&&!finalRunDone){finalRunDone=true;finalRunUntil=now+2800;progress=Math.max(0,progress-9);}
 const stamina=Math.max(0,current.stamina-(action==='reel'?3:1));
 if(tension>=100)return {...current,tension:100,phase:'miss',reason:'走っている魚を無理に巻いてラインブレイク。走りが収まるまで糸を送ろう。'};
 return {...current,tension,progress,stamina,finalRunDone,finalRunUntil,running:current.running||now<finalRunUntil,...position(current,progress),lastAction:now};
}

// Physical position is derived from reel progress, so resting alone never brings a fish to shore.
function position(round:Round,progress:number){
 const remaining=Math.max(0,1-progress/100);
 return {fishDepth:round.initialDepth*remaining,distance:round.initialDistance*remaining};
}
export function canLand(round:Round){return round.phase==='fight'&&round.finalRunDone&&!round.running&&round.fishDepth<=.8&&round.distance<=1.5&&round.stamina<=20&&round.tension<=55}
export function land(round:Round,now:number):Round{
 const current=advance(round,now);
 if(!canLand(current))return current;
 return {...current,phase:'landing',fishDepth:0,distance:0,progress:100,deadline:now+1800,lastTick:now};
}
