import {getFishByName} from '../fish-registry';
import {ageDays} from './activity';
/** Only links from recent cards; never use the post-count badge as a fish count. */
export function anglersCandidates(html:string,now=new Date()){
 const urls:string[]=[];
 for(const block of html.split(/<a\s+href="\/catches\//).slice(1)){
  const id=block.match(/^(\d+)"/),date=block.match(/>(\d{4})\.(\d{2})\.(\d{2})</);if(!id||!date)continue;
  const day=`${date[1]}-${date[2]}-${date[3]}`;if(ageDays(day,now)<0||ageDays(day,now)>=30)continue;
  urls.push('https://anglers.jp/catches/'+id[1]);
 }
 return [...new Set(urls)];
}
/** Extract the visible definition list, not article text, photos, GPS or author profiles. */
export function parseAnglersCatch(html:string,url:string,areaId:string,spotSlug:string){
 const table=[...html.matchAll(/<dl\b[^>]*>[\s\S]*?<\/dl>/g)].map(m=>m[0]).find(s=>s.includes('釣れた日'));if(!table)throw Error('Catch data structure changed');
 const fields=new Map([...table.matchAll(/<dt\b[^>]*>([^<]+)<\/dt>\s*<dd\b[^>]*>([\s\S]*?)<\/dd>/g)].map(m=>[m[1].trim(),m[2]]));
 const plain=(key:string)=>(fields.get(key)??'').replace(/<[^>]*>/g,'').trim();
 const fishLabels=[...(fields.get('魚種')??'').matchAll(/<a\b[^>]*>([^<]+)<\/a>/g)].map(m=>m[1].trim());
 const fishName=fishLabels.at(-1)??plain('魚種');
 const date=plain('釣れた日').match(/(\d{4})年(\d{2})月(\d{2})日/),fish=getFishByName(fishName);
 if(!date||!fish||!new RegExp(`href="/areas/${areaId}"`).test(fields.get('エリア')??''))return null;
 const count=plain('匹数').match(/^(\d+)匹$/),size=plain('サイズ').match(/^(\d+(?:\.\d+)?)cm$/),id=new URL(url).pathname.split('/').pop()!;
 return {id,date:`${date[1]}-${date[2]}-${date[3]}`,fishSlug:fish.slug,spotSlug,sourceUrl:url,summary:`${fish.name}の釣果記録。`,...(count?{count:Number(count[1])}:{}),...(size?{sizeCm:Number(size[1])}:{})};
}
