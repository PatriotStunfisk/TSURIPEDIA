import data from './guide-buying-data.json';
import type {GuideArticle} from './guide-articles';
import type {GearKind} from './gear-catalog';
import type {GuideEditorial} from './guide-taxonomy';

const tags:Record<GearKind,NonNullable<GuideEditorial['gearTags']>[number]>={rod:'rod',reel:'reel',lure:'lure',egi:'lure',line:'line',cooler:'cooler',tool:'tools',rig:'rig',storage:'tools',net:'tools'};

// Each record contains a separately authored purchasing question, comparison and checks.
// Only presentation is shared; existing full-method guides remain the practical reference.
export const buyingGuides:GuideArticle[]=data.map(item=>({
 slug:item.slug,title:item.title,query:item.title,summary:item.answer,answer:item.answer,
 category:'購入前の道具選び',inheritContext:false,
 editorial:{articleType:'QUICK GUIDE',topic:'tackle',gearTags:[tags[item.kind as GearKind]],parentGuide:item.parentGuide},
 buying:{query:item.amazonQuery,kind:item.kind as GearKind,method:item.method},
 ...(item.sources?{sources:item.sources,verifiedAt:'2026-09-26'}:{}),
 sections:[
  {heading:'選ぶ前に整理すること',body:item.context},
  {heading:'自分の用途ならどれを選ぶ？',body:'使う場面に近い行から候補を絞る。',table:{caption:item.title,headers:['使う場面・困りごと','選ぶ基準'],rows:item.choices}},
  {heading:'注文前のチェック',body:item.finish,points:item.checks},
 ],
 related:item.related,
}));
