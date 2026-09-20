import {getFishByName} from '../fish-registry';
import {ageDays} from './activity';
export type FacilityFormat='fukuoka-html'|'shimonoseki-html'|'hiraiso-html'|'ichihara-html'|'happy-html';
type Row={id:string;date:string;fishSlug:string;spotSlug:string;summary:string;sourceUrl:string;count?:number;countScope:'facility';sizeCm?:number};
const plain=(s:string)=>s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<[^>]+>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/&amp;/g,'&').normalize('NFKC').replace(/\s+/g,' ').trim();
const aliases:Record<string,string>={'バリ':'アイゴ','クロ':'メジナ','アジゴ':'マアジ','タイゴ':'マダイ','チャリコ':'マダイ','サンバソウ':'イシダイ','シマダイ':'イシダイ','マルハギ':'カワハギ','ウマズラハギ':'ウマヅラハギ'};
function dayOf(text:string){const m=plain(text).match(/(20\d{2})[年.\/-](\d{1,2})[月.\/-](\d{1,2})/);if(!m)return '';return `${m[1]}-${m[2].padStart(2,'0')}-${m[3].padStart(2,'0')}`;}
/** Only published catch data rows are recognized, never incidental fish mentions in prose. */
export function parseFacility(html:string,url:string,spotSlug:string,format:FacilityFormat,now=new Date()){
 const rows=new Map<string,Row>();
 function add(date:string,name:string,size:string,quantity:string){
  if(ageDays(date,now)<0||ageDays(date,now)>=30)return;
  const clean=plain(name).replace(/[（(].*$/,'').trim(),fish=getFishByName(aliases[clean]??clean);if(!fish)return;
  const cm=plain(size).match(/^(\d+(?:\.\d+)?)\s*cm$/i),countMatch=plain(quantity).match(/^(?:合計\s*)?(\d+)\s*[匹尾]$/),count=countMatch?Number(countMatch[1]):undefined;
  if(count===0)return;
  const key=date+':'+fish.slug,old=rows.get(key);
  if(old){old.count=old.count!==undefined&&count!==undefined?old.count+count:undefined;delete old.sizeCm;return;}
  rows.set(key,{id:key,date,fishSlug:fish.slug,spotSlug,summary:`${fish.name}の釣果記録。`,sourceUrl:url,countScope:'facility',...(count!==undefined?{count}:{}),...(cm&&count===1?{sizeCm:Number(cm[1])}:{})});
 }
 if(format==='fukuoka-html'){
  const blocks=html.split(/<div id="block184-\d+"/).slice(1);if(!blocks.length)throw Error('Official report structure changed');
  for(const block of blocks){const date=block.match(/data-switch="date">(\d{4}-\d{2}-\d{2})/);if(!date)continue;
   for(const part of block.split(/<br\s*\/?\s*>|<\/div>/i)){const line=plain(part),m=line.match(/^([^/]+)\/([^/]+)\/(\d+尾)\//);if(m)add(date[1],m[1],m[2],m[3]);}
  }
 }else if(format==='hiraiso-html'){
  const date=dayOf(html.match(/<h2[^>]*>[^<]*の釣果情報<\/h2>/)?.[0]??'');if(!date)throw Error('Official report structure changed');
  for(const block of html.split('<div class="fishdata-wrapper">').slice(1)){
   const values=new Map([...block.matchAll(/<p class="fishdata-name">([^<]+)<\/p>\s*<p class="fishdata-content">([^<]*)<\/p>/g)].map(m=>[m[1],m[2]]));
   if(values.has('魚種'))add(date,values.get('魚種')!,values.get('サイズ')??'',values.get('尾数')??'');
  }
 }else if(format==='shimonoseki-html'){
  const date=dayOf(html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]??'');
  const table=html.match(/本日の釣果情報[\s\S]*?<table\b[^>]*>([\s\S]*?)<\/table>/)?.[1];if(!date||!table)throw Error('Official report structure changed');
  for(const [row] of table.matchAll(/<tr\b[^>]*>[\s\S]*?<\/tr>/g)){const cells=[...row.matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/g)].map(m=>plain(m[1]));if(cells.length===3)add(date,...cells as [string,string,string]);}
 }else if(format==='ichihara-html'){
  const date=dayOf(html.match(/<p[^>]*>20\d{2}年\d{1,2}月\d{1,2}日[^<]*<\/p>/)?.[0]??'');if(!date)throw Error('Official report structure changed');
  for(const block of html.split('<div class="flex border-b border-gray-300">').slice(1)){
   const cells=[...block.matchAll(/<div\b[^>]*>([\s\S]*?)<\/div>/g)].slice(0,3).map(m=>plain(m[1]));if(cells.length===3)add(date,...cells as [string,string,string]);
  }
 }else{
  const date=dayOf(html.match(/<p class="date">([^<]+)<\/p>/)?.[1]??'');if(!date)throw Error('Official report structure changed');
  for(const [p] of html.matchAll(/<(?:p|h[3-6])\b[^>]*>[\s\S]*?<\/(?:p|h[3-6])>/g)){
   const line=plain(p).replace(/^[↓\s]*(?:\d+m\s*(?:内側|外側)\s*)/, '');
   const m=line.match(/^([^\s\d]+)\s*([\d.]+(?:[~〜～ー-][\d.]+)?\s*cm)\s+(\d+匹(?:以上|位)?)(?:\s|$)/i);if(m)add(date,m[1],m[2],m[3]);
  }
 }
 return [...rows.values()];
}
/** Restrict discovery to the facility's observed report link format. */
export function facilityLinks(html:string,endpoint:string,format:FacilityFormat){
 const links:string[]=[];for(const [tag,href,content] of html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)){
  const url=new URL(href.replace(/&amp;/g,'&'),endpoint);if(url.origin!==new URL(endpoint).origin)continue;
  if(format==='shimonoseki-html'&&/^\/fishing\/\d{8}\.html$/.test(url.pathname))links.push(url.href);
  if(format==='hiraiso-html'&&/^\/fishresult\/20\d{2}/.test(decodeURI(url.pathname)))links.push(url.href);
  if(format==='ichihara-html'&&/^\/fishing\/\d+$/.test(url.pathname)&&plain(content)==='釣れた魚の詳細を見る')links.push(url.href);
  if(format==='happy-html'&&/^\/\d+\/$/.test(url.pathname)&&/釣果/.test(plain(content)||tag.match(/title="([^"]+)"/)?.[1]||''))links.push(url.href);
 }
 if(!links.length)throw Error('Official listing structure changed');
 return [...new Set(links)].slice(0,3);
}
