import type {MetadataRoute} from 'next';
import {fish} from '@/lib/data';
import {methodDetails as baseMethodDetails} from '@/lib/method-details';
import {extraMethodDetails} from '@/lib/method-details-extra';
import {extraMethodDetails2} from '@/lib/method-details-extra2';
import {guideArticles} from '@/lib/guide-articles';
import {extraGuideArticles} from '@/lib/guide-articles-extra';
import {extraGuideArticles2} from '@/lib/guide-articles-extra2';

const methodDetails={...baseMethodDetails,...extraMethodDetails,...extraMethodDetails2};
const allGuides=[...guideArticles,...extraGuideArticles,...extraGuideArticles2];

export default function sitemap():MetadataRoute.Sitemap{
  const base='https://uolink.vercel.app';
  const now=new Date();
  const staticPages=[
    {path:'',priority:1,changeFrequency:'weekly' as const},
    {path:'/fish',priority:.95,changeFrequency:'weekly' as const},
    {path:'/methods',priority:.9,changeFrequency:'weekly' as const},
    {path:'/guide',priority:.92,changeFrequency:'weekly' as const},
    {path:'/spots',priority:.8,changeFrequency:'weekly' as const},
    {path:'/gear',priority:.85,changeFrequency:'weekly' as const},
    {path:'/game',priority:.5,changeFrequency:'monthly' as const}
  ];
  const staticEntries=staticPages.map(x=>({url:base+x.path,lastModified:now,changeFrequency:x.changeFrequency,priority:x.priority}));
  const fishEntries=fish.map(f=>({url:`${base}/fish/${f.slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:.9}));
  const methodEntries=Object.keys(methodDetails).map(slug=>({url:`${base}/methods/${slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:.85}));
  const guideEntries=allGuides.map(a=>({url:`${base}/guide/${a.slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:.88}));
  return [...staticEntries,...fishEntries,...methodEntries,...guideEntries];
}
