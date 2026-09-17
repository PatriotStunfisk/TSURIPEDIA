export const unknownFishNames={other:'その他',unknown:'魚種不明'} as const;
export const catchTimes={morning:'朝',day:'昼',evening:'夕方',night:'夜',unknown:'時間帯不明'} as const;
export type CatchReport={id:string;source:'real';spotSlug:string;fishSlug:string;count:number;sizeCm?:number;sizeLabel?:string;bait?:string;date:string;time:keyof typeof catchTimes;methodSlug?:string;rig:string;comment:string;photo?:string;createdAt:string};
export type LocalCatch=CatchReport&{deleteToken:string;publicStatus?:'pending'|'approved';};
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export function parseCatch(value:unknown,allowed:{fish:Set<string>;spots:Set<string>;methods:Set<string>},now=new Date()):CatchReport{
 if(!value||typeof value!=='object')throw Error('記録の形式が不正です。');const v=value as Record<string,unknown>;
 const text=(key:string,max:number)=>{const x=v[key]??'';if(typeof x!=='string'||x.length>max)throw Error(`${key}が長すぎるか形式が不正です。`);return x.trim()};
 const id=text('id',36),spotSlug=text('spotSlug',100),fishSlug=text('fishSlug',100),date=text('date',10),time=text('time',10),methodSlug=text('methodSlug',100);
 if(!uuid.test(id)||v.source!=='real')throw Error('実釣記録のIDが不正です。');
 if(!allowed.spots.has(spotSlug)||(!allowed.fish.has(fishSlug)&&!Object.hasOwn(unknownFishNames,fishSlug))||(methodSlug&&!allowed.methods.has(methodSlug)))throw Error('釣り場・魚・釣法を選び直してください。');
 const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(Date.parse(date))||new Date(date).toISOString().slice(0,10)!==date||date<'2000-01-01'||date>today)throw Error('釣行日は2000年以降、今日までの日付にしてください。');
 if(!Object.hasOwn(catchTimes,time))throw Error('時間帯を選んでください。');
 if(typeof v.count!=='number'||!Number.isInteger(v.count)||v.count<1||v.count>999)throw Error('匹数は1〜999の整数にしてください。');
 if(v.sizeCm!==undefined&&(typeof v.sizeCm!=='number'||!Number.isFinite(v.sizeCm)||v.sizeCm<=0||v.sizeCm>500))throw Error('サイズは0より大きく500cm以下にしてください。');
 const photo=text('photo',700000);if(photo&&!/^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/.test(photo))throw Error('写真はJPEG形式にしてください。');
 return {id,source:'real',spotSlug,fishSlug,count:v.count,sizeCm:v.sizeCm as number|undefined,date,time:time as keyof typeof catchTimes,methodSlug:methodSlug||undefined,rig:text('rig',100),bait:text('bait',100),sizeLabel:text('sizeLabel',30),comment:text('comment',500),photo:photo||undefined,createdAt:now.toISOString()};
}
export function validDeleteToken(value:unknown):value is string{return typeof value==='string'&&uuid.test(value);}
