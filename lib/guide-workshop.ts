import type {GuideArticle} from './guide-articles';
import type {GuideEditorial} from './guide-taxonomy';

/** Authoring format only. Every diagnosis, action and comparison is written for its question. */
export type WorkshopQuestion={
 methods?:string[];
 slug:string; title:string; answer:string; context:string;
 sources?:GuideArticle['sources'];
 steps:[string,string,string]; choices:[string,string][]; finish:string;
};
export function workshopGuides(context:{parent:string;topic:GuideEditorial['topic'];fish?:string[];methods?:string[]},questions:WorkshopQuestion[]):GuideArticle[]{
 return questions.map(q=>({inheritContext:false,slug:q.slug,title:q.title,query:q.title,
  sources:q.sources,verifiedAt:q.sources?'2026-09-20':undefined,
  summary:q.answer,answer:q.answer,category:'現場で判断する',
  editorial:{articleType:'QUICK GUIDE',topic:context.topic,parentGuide:context.parent},
  sections:[
   {heading:'状況を見分ける',body:q.context},
   {heading:'試す順番',body:'条件を一つずつ変え、反応の違いを比べます。',steps:q.steps.map((body,i)=>({title:`STEP ${i+1}`,body}))},
   {heading:'迷ったときの判断',body:'釣り場や道具の違いも含めて、次の行動を選びましょう。',table:{caption:q.title,headers:['状況','次の行動'],rows:q.choices}},
   {heading:'続ける前に',body:q.finish},
  ],
  related:[{label:'釣り方の全体を確認する',href:`/guide/${context.parent}`},...(context.fish??[]).map(slug=>({label:'関連する魚図鑑',href:`/fish/${slug}`})),...(q.methods??context.methods??[]).map(slug=>({label:'仕掛け・道具と釣り方',href:`/methods/${slug}`}))],
 }));
}
