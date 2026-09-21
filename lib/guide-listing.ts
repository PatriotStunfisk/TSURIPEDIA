import {allGuides} from './all-guides';
import {fish} from './data';
import {methodDetails} from './method-registry';
import {canonicalFishSlug} from './fish-aliases';
import {filterGuides} from './guide-taxonomy';
import {pageSharing} from './page-sharing';
import {siteUrl} from './site-url';

export type GuideSearchParams=Record<string,string|string[]|undefined>;
const filterKeys=['q','fish','method','gear','type','topic'] as const;
const allowedKeys=[...filterKeys,'page'];
export function getGuideListing(raw:GuideSearchParams){
 const params=Object.fromEntries(Object.entries(raw).filter(([key,v])=>allowedKeys.includes(key)&&typeof v==='string').map(([k,v])=>[k,(v as string).slice(0,100)]));
 const filters={...params,fish:params.fish?canonicalFishSlug(params.fish):undefined};
 const labels=Object.fromEntries([...fish.map(f=>[f.slug,f.name]),...Object.values(methodDetails).map(m=>[m.slug,m.name])]);
 const results=filterGuides(allGuides,filters,labels);
 const pages=Math.max(1,Math.ceil(results.length/24));
 const page=Math.max(1,Math.min(pages,Number.parseInt(params.page??'1',10)||1));
 const filtered=filterKeys.some(key=>!!params[key]);
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
