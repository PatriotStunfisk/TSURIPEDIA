/** Shared, date-based activity model. Actor identifiers never leave the server. */
export type CatchSourceType='user'|'official'|'external';
export type CatchSignal={id:string;source:string;sourceType:CatchSourceType;actor:string;date:string;fishSlug:string;spotSlug:string;methodSlug?:string;sizeCm?:number;sourceUrl?:string};
export type SpotActivity={spotSlug:string;level:'recent'|'hot';score:number;count7:number;count30:number;people:number;sources:number;official:boolean;fish:{slug:string;count:number}[]};
export const hotPolicy={fresh:3,new:1.5,reference:.5,threshold:12,minReports:3,minIndependent:2};
export function ageDays(date:string,now=new Date()){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(Date.parse(date))||new Date(date).toISOString().slice(0,10)!==date)return Infinity;
 const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
 return Math.round((Date.parse(today)-Date.parse(date))/86400000);
}
export function canonicalSourceUrl(value:string){const url=new URL(value);if(url.protocol!=='https:'||url.username||url.password)throw Error('HTTPS source URL required');url.hash='';for(const key of [...url.searchParams.keys()])if(key.startsWith('utm_')||['fbclid','gclid'].includes(key))url.searchParams.delete(key);url.searchParams.sort();return url.toString();}
export function deduplicateSignals(rows:CatchSignal[]){const seen=new Set<string>();return rows.filter(r=>{const key=r.sourceType==='user'?`user:${r.id}`:`${r.sourceUrl?canonicalSourceUrl(r.sourceUrl):r.source+':'+r.id}|${r.date}|${r.spotSlug}|${r.fishSlug}`;if(seen.has(key))return false;seen.add(key);return true;});}
export function aggregateActivity(rows:CatchSignal[],now=new Date(),policy=hotPolicy):SpotActivity[]{
 const ages=new Map<string,number>();const ageOf=(date:string)=>{if(!ages.has(date))ages.set(date,ageDays(date,now));return ages.get(date)!;};
 const groups=new Map<string,CatchSignal[]>();for(const row of deduplicateSignals(rows)){const age=ageOf(row.date);if(age<0||age>=30)continue;const group=groups.get(row.spotSlug)??[];group.push(row);groups.set(row.spotSlug,group);}
 return [...groups].map(([spotSlug,group])=>{
  const recentActors=new Set<string>(),actors=new Set<string>(),sources=new Set<string>(),daily=new Map<string,number>(),fish=new Map<string,number>();let count7=0,official=false;
  for(const r of group){const age=ageOf(r.date);const actor=r.sourceType==='user'?`user:${r.actor}`:`source:${r.actor||r.source}`;actors.add(actor);sources.add(r.source);official ||=r.sourceType==='official';if(age<7){count7++;recentActors.add(actor);}fish.set(r.fishSlug,(fish.get(r.fishSlug)??0)+1);const key=actor+':'+r.date;daily.set(key,Math.max(daily.get(key)??0,age<7?policy.fresh:age<14?policy.new:policy.reference));}
  // One actor cannot become HOT, even with daily repeat posts. Score is bounded per actor too.
  const actorScores=new Map<string,number>();for(const [key,value] of daily){const actor=key.slice(0,key.lastIndexOf(':'));actorScores.set(actor,Math.min(6,(actorScores.get(actor)??0)+value));}
  const score=Math.round(([...actorScores.values()].reduce((a,b)=>a+b,0)+Math.min(actors.size,5)+Math.min(sources.size-1,3)*2+(official?2:0)+Math.min(fish.size,3))*10)/10;
  const hot=count7>=policy.minReports&&recentActors.size>=policy.minIndependent&&score>=policy.threshold;
  return {spotSlug,level:hot?'hot' as const:'recent' as const,score,count7,count30:group.length,people:[...actors].filter(a=>a.startsWith('user:')).length,sources:sources.size,official,fish:[...fish].map(([slug,count])=>({slug,count})).sort((a,b)=>b.count-a.count).slice(0,4)};
 }).sort((a,b)=>b.score-a.score||a.spotSlug.localeCompare(b.spotSlug));
}
