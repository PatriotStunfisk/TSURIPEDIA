import {allGuides} from './all-guides';
import {fish} from './data';
import {methodDetails} from './method-registry';
import {canonicalFishSlug} from './fish-aliases';
import {filterGuides} from './guide-taxonomy';
import {pageSharing} from './page-sharing';
import {siteUrl} from './site-url';

export type GuideSearchParams=Record<string,string|string[]|undefined>;
const filterKeys=['q','fish','method','gear','type','topic'] as const;
export const guideSorts={recommended:'おすすめ順',short:'短時間で読める順',deep:'じっくり学べる順',title:'記事名順'} as const;
const allowedKeys=[...filterKeys,'page','sort','time'];
// Editorial priority, not invented page-view popularity.
const recommended=['fishing-first-checklist','aji-sabiki-depth','tachiuo-tenya-action','tairaba-bottom-contact','eging-shakuri-count','first-charter-boat-reservation','shore-jigging-jig-weight','kawahagi-hook','saba-sabiki-cooling'];
export function getGuideListing(raw:GuideSearchParams){
 const params=Object.fromEntries(Object.entries(raw).filter(([key,v])=>allowedKeys.includes(key)&&typeof v==='string').map(([k,v])=>[k,(v as string).slice(0,100)]));
 const filters={...params,fish:params.fish?canonicalFishSlug(params.fish):undefined};
 const labels=Object.fromEntries([...fish.map(f=>[f.slug,f.name]),...Object.values(methodDetails).map(m=>[m.slug,m.name])]);
 const sort=Object.hasOwn(guideSorts,params.sort??'')?params.sort as keyof typeof guideSorts:'recommended';
 const results=filterGuides(allGuides,filters,labels).filter(g=>params.time==='short'?g.readingMinutes<=3:params.time==='long'?g.readingMinutes>3:true);
 const priority=(slug:string)=>{const i=recommended.indexOf(slug);return i<0?recommended.length:i};
 results.sort((a,b)=>{
  if(sort==='short')return a.readingMinutes-b.readingMinutes||a.title.localeCompare(b.title,'ja');
  if(sort==='deep')return b.readingMinutes-a.readingMinutes||a.title.localeCompare(b.title,'ja');
  if(sort==='title')return a.title.localeCompare(b.title,'ja');
  const q=(params.q??'').trim();
  return (q?Number(b.title.includes(q))-Number(a.title.includes(q)):0)||priority(a.slug)-priority(b.slug)||Number(b.articleType==='GUIDE')-Number(a.articleType==='GUIDE')||a.title.localeCompare(b.title,'ja');
 });
 const pages=Math.max(1,Math.ceil(results.length/24));
 const page=Math.max(1,Math.min(pages,Number.parseInt(params.page??'1',10)||1));
 const filtered=filterKeys.some(key=>!!params[key])||!!params.sort||!!params.time;
 const pageHref=(n:number)=>{
  const query=new URLSearchParams(Object.entries(params).filter(([k,v])=>k!=='page'&&!!v));
  if(n>1)query.set('page',String(n));
  return `/guide${query.size?'?'+query.toString():''}`;
 };
 return {params,filters,results,pages,page,filtered,pageHref};
}
export function guideListingMetadata(raw:GuideSearchParams){
 const {page,filtered,pageHref}=getGuideListing(raw);
 const title='釣りガイド｜基本から具体的な疑問まで'+(page>1?`｜${page}ページ目`:'');
 const metadata=pageSharing('/guide',title,'GUIDEとQUICK GUIDEを魚・釣法・道具から検索。実際の釣行に役立つ仕掛け、誘い、釣れないときの対処を解説。');
 const canonical=new URL(pageHref(page),siteUrl).href;
 return {...metadata,alternates:{canonical},openGraph:{...metadata.openGraph,url:canonical},
  // Keep search/filter combinations usable without indexing unlimited result variants.
  robots:{index:!filtered,follow:true,googleBot:{index:!filtered,follow:true}}};
}
