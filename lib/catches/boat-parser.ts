import {getFishByName} from '../fish-registry';
import {ageDays} from './activity';
const plain=(html:string)=>html.replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/g,' ').normalize('NFKC').replace(/\s+/g,' ').trim();
/** Public table facts only. A per-angler range is never converted to a boat total. */
export function parseFishingVision(html:string,sourceUrl:string,spotSlug:string,now=new Date()){
 const blocks=html.split(/<div class="choka_box">/).slice(1);if(!blocks.length)throw Error('Catch data structure changed');
 const rows=new Map<string,{id:string;date:string;fishSlug:string;spotSlug:string;sourceUrl:string;summary:string;count?:number;countScope?:'boat';sizeCm?:number}>();
 for(const block of blocks){
  const d=block.match(/<li class="date">(\d{4})年(\d{1,2})月(\d{1,2})日/);if(!d)continue;
  const date=`${d[1]}-${d[2].padStart(2,'0')}-${d[3].padStart(2,'0')}`;if(ageDays(date,now)<0||ageDays(date,now)>=30)continue;
  const table=block.match(/<table\b[^>]*>([\s\S]*?)<\/table>/)?.[1];if(!table)continue;
  for(const [tr] of table.matchAll(/<tr\b[^>]*>[\s\S]*?<\/tr>/g)){
   const cells=[...tr.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/g)].map(m=>plain(m[1]));if(cells.length<4)continue;
   const names=cells[1].replace(/\([^)]*\)/g,'').split('・');
   if(names.some(n=>['フグ','フグ類','イカ','青物','根魚','オコゼ','オニカサゴ','アコウ'].includes(n.trim())))continue;
   const fishes=names.map(n=>getFishByName(n.trim()));if(fishes.some(f=>!f)||new Set(fishes.map(f=>f?.slug)).size!==1)continue;
   const fish=fishes[0]!;
   const boat=cells[2].match(/(?:^|\s)船中\s*(\d+)\s*[匹尾杯本枚](?:\s|$)/);
   const zero=/^(?:船中\s*)?0\s*[匹尾杯本枚]$/.test(cells[2]);if(zero)continue;
   const count=boat?Number(boat[1]):undefined;
   // Unspecified scope, ranges, weights, and finger-width sizes remain unspecified.
   const cm=cells[3].match(/^(\d+(?:\.\d+)?)\s*cm$/i);
   const key=date+':'+fish.slug,old=rows.get(key);
   if(old){old.count=old.count!==undefined&&count!==undefined?old.count+count:undefined;if(old.count===undefined)delete old.countScope;delete old.sizeCm;continue;}
   rows.set(key,{id:key,date,fishSlug:fish.slug,spotSlug,sourceUrl,summary:`${fish.name}の釣果記録。`,...(count!==undefined?{count,countScope:'boat' as const}:{}),...(cm&&count===1?{sizeCm:Number(cm[1])}:{})});
  }
 }
 return [...rows.values()];
}
