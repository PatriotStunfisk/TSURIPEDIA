import type {MetadataRoute} from 'next';
import {fishCatalog} from '@/lib/fish-registry';
import {methodDetails} from '@/lib/method-registry';
import {allGuides} from '@/lib/all-guides';
import {cookingFish} from '@/lib/cooking-data';


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
    {path:'/cooking',priority:.88,changeFrequency:'weekly' as const},
    {path:'/quest',priority:.7,changeFrequency:'monthly' as const},
    {path:'/quest/play',priority:.6,changeFrequency:'monthly' as const},
    {path:'/quest/missions',priority:.5,changeFrequency:'monthly' as const}
  ];
  const staticEntries=staticPages.map(x=>({url:base+x.path,lastModified:now,changeFrequency:x.changeFrequency,priority:x.priority}));
  const fishEntries=fishCatalog.map(f=>({url:`${base}/fish/${f.slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:.9}));
  const methodEntries=Object.keys(methodDetails).map(slug=>({url:`${base}/methods/${slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:.85}));
  const guideEntries=allGuides.map(a=>({url:`${base}/guide/${a.slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:.88}));
  const cookingEntries=cookingFish.flatMap(f=>[
    {url:`${base}/cooking/${f.slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:.84},
    ...f.recipes.map(r=>({url:`${base}/cooking/${f.slug}/${r.slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:.82}))
  ]);
  return [...staticEntries,...fishEntries,...methodEntries,...guideEntries,...cookingEntries];
}
