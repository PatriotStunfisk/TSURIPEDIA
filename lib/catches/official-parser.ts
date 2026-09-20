import {getFishByName} from '../fish-registry';
/** Read only structured date/species rows. Article prose and media are never imported. */
export function parseNaruohama(html:string,endpoint:string){
 const records:{id:string;date:string;fishSlug:string;spotSlug:string;summary:string;sourceUrl:string}[]=[];
 const blocks=html.split(/<div\s+id="choka\d+"\s+class="c_anchor"><\/div>/).slice(1);
 if(!blocks.length)throw Error('Official report structure changed');
 for(const block of blocks){
  const date=block.match(/<p class="date">(\d{4})年(\d{1,2})月(\d{1,2})日/);if(!date)continue;
  const day=`${date[1]}-${date[2].padStart(2,'0')}-${date[3].padStart(2,'0')}`;
  for(const list of block.matchAll(/<ul class="data">([\s\S]*?)<\/ul>/g)){
   for(const row of list[1].matchAll(/<span>([^<]+)<\/span>/g)){
    const name=row[1].trim().split(/[\s\d]/)[0],fish=getFishByName(name);if(!fish)continue;
    records.push({id:day+':'+fish.slug,date:day,fishSlug:fish.slug,spotSlug:'naruohama',summary:`${day}の施設公表釣果に${name}の記録があります。施設全体の集計で、個人の釣果ではありません。`,sourceUrl:endpoint});
   }
  }
 }
 return records;
}

/** Facility-selected public report table; omit visitor names, narrative and image URLs. */
export function parseTottopark(html:string,endpoint:string,spotSlug='tottopark-kojima'){
 const records:{id:string;date:string;fishSlug:string;spotSlug:string;summary:string;sourceUrl:string;sizeCm?:number}[]=[];
 const tables=[...html.matchAll(/<table width="100%"[\s\S]*?<\/table>/g)];
 if(!tables.length)throw Error('Official report structure changed');
 for(const [table] of tables){
  const date=table.match(/釣り公園\s+(\d{4}-\d{2}-\d{2})/),id=table.match(/fish_details\.php\?sea_id=(\d+)/);
  const cells=[...table.matchAll(/<td width="(?:40|30)%" class="tp2">([^<]*)<\/td>/g)].map(m=>m[1].trim());
  if(!date||!id||!cells.length||(!cells[1]&&!cells[2]))continue;
  const name=cells[0],explicit=name.match(/（([^）]+)）/),fish=getFishByName(explicit?.[1]??name);if(!fish)continue;
  const size=cells[1]?.match(/^(\d+(?:\.\d+)?)cm$/),sizeCm=size?Number(size[1]):undefined;
  const sourceUrl=new URL(`./fish_details.php?sea_id=${id[1]}`,endpoint).toString();
  records.push({id:id[1]+':'+fish.slug,date:date[1],fishSlug:fish.slug,spotSlug,summary:`${date[1]}の施設公表釣果に${name}の記録があります。詳細は施設の釣果ページで確認できます。`,sourceUrl,...(sizeCm?{sizeCm}:{})});
 }
 return records;
}
