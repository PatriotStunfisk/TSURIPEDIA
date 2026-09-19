import {siteUrl} from './site-url';
import {getFishImage} from './fish-images';
import {getGuide} from './all-guides';
import {getFishProfile} from './fish-registry';
// Editorial choices only. Tips and source links stay in the canonical GUIDE.
const topics=[
 ['aji-sabiki-depth','アジが釣れない？まず棚を変える'],
 ['dangerous-fish-first-check','知らない魚は触る前に確認'],
 ['tachiuo-tenya-action','タチウオの前アタリで慌てない'],
 ['saba-sabiki-cooling','サバは釣る前から保冷の準備'],
 ['eging-shakuri-count','イカが抱くのは止めた後'],
 ['tairaba-bottom-contact','タイラバは着底からが勝負'],
 ['kisu-retrieve-speed','キスのアタリが出た距離を覚える'],
 ['shore-jigging-jig-weight','青物が釣れないときの泳層'],
 ['hirame-livebait-observation','ヒラメの合わせは変化を読む'],
 ['kasago-ana-rig','カサゴを掛けたら底から離す'],
 ['chinu-field-notes','クロダイは餌と撒き餌を同じ流れへ'],
 ['suzuki-field-notes','シーバスは投げる前に流れを見る'],
 ['aji-sabiki-hook-size','サビキ針は数字だけで選ばない'],
 ['tairaba-pe','タイラバの糸は長さも大事'],
 ['tairaba-leader','リーダーは傷と結び目を確認'],
 ['tachiuo-tenya-40-vs-50','テンヤの重さは船宿指定で'],
 ['kawahagi-hook','餌だけ取られるときの確認'],
 ['eging-leader','エギングの糸、先端は大丈夫？'],
 ['fishing-first-checklist','初めての釣りは準備から'],
 ['fishing-cooler-plan','釣る前に持ち帰りを計画'],
 ['fishing-map-permission-check','地図のピンは釣り許可ではない'],
 ['first-charter-boat-reservation','初めての釣り船、予約で聞くこと'],
] as const;
export const socialCampaign='guide-launch-202609';
export function socialGuideUrl(guideSlug:string,topic:string,thumbnail='fish-v1'){
 const url=new URL(`/guide/${guideSlug}`,siteUrl);
 url.search=new URLSearchParams({utm_source:'x',utm_medium:'social',utm_campaign:socialCampaign,utm_content:`${topic}--${thumbnail}`}).toString();return url.toString();
}
export function createSocialDraft(slug:string,headline:string,index=0,variant?:{topic:string;points:string[]}){
 const guide=getGuide(slug);if(!guide)throw new Error(`Unknown social GUIDE: ${slug}`);
 const section=guide.sections.find(s=>s.points?.length);if(!section?.points)throw new Error(`GUIDE has no reusable points: ${slug}`);
 const fishSlug=guide.related.find(x=>x.href.startsWith('/fish/'))?.href.split('/')[2]??'';
 const fish=getFishProfile(fishSlug);const image=fish?getFishImage(fish):'/social/tackle-illustration.svg';if(!image)throw new Error(`Missing social image: ${fishSlug}`);
 const topic=variant?.topic??'points';
 const id=`${slug}--${topic}`,url=socialGuideUrl(slug,topic);
 const selectedPoints:Record<string,number[]>={'tachiuo-tenya-action':[1,2],'saba-sabiki-cooling':[2,1],'kisu-retrieve-speed':[0,2],'hirame-livebait-observation':[0,2],'kasago-ana-rig':[0,2]};
 let tips=variant?.points.slice(0,2)??(selectedPoints[slug]??[0,1]).map(i=>section.points![i]);
 if(tips.some(t=>!t))throw new Error(`Social source points changed: ${slug}`);
 const compose=()=>`${headline}\n\n${tips.map(t=>`・${t}`).join('\n')}\n\n詳しい手順・注意点はこちら\n${url}\n#釣り`;
 // Conservative bound: every code point counts as 2, URL as X's 23 characters.
 let text=compose();let maxWeightedLength=Array.from(text.replace(url,'')).length*2+23;
 if(maxWeightedLength>280){tips=tips.slice(0,1);text=compose();maxWeightedLength=Array.from(text.replace(url,'')).length*2+23;}
 if(maxWeightedLength>280)throw new Error(`Social draft is too long: ${slug} (${maxWeightedLength})`);
 return {id,guideSlug:slug,guideTitle:guide.title,headline,topic,tips,text,url,image,fishName:fish?.name??'釣行準備',thumbnail:`/social/${id}.jpg`,thumbnailVariant:'fish-v1',alt:`UOLINK GUIDE：${headline}。${fish?fish.name+'のイラスト':'釣り竿とクーラーの図'}。`,sources:guide.sources??[],status:'draft' as const,dayOffset:Math.floor(index/3),suggestedTime:['07:30','15:00','20:30'][index%3],timezone:'Asia/Tokyo',maxWeightedLength};
}
const primaryDrafts=topics.map(([slug,title],i)=>createSocialDraft(slug,title,i));
const followups=topics.flatMap(([slug])=>{
 const guide=getGuide(slug)!;const section=guide.sections.filter(s=>(s.points?.length??0)>=2).slice(1).at(-1);
 return section?[createSocialDraft(slug,section.heading,primaryDrafts.length,{topic:'checklist',points:section.points!})]:[];
});
export const socialDrafts=[...primaryDrafts,...followups].map((d,i)=>({...d,dayOffset:Math.floor(i/3),suggestedTime:['07:30','15:00','20:30'][i%3]}));
