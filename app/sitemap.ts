import type {MetadataRoute} from 'next';
import {fish} from '@/lib/data';

export default function sitemap():MetadataRoute.Sitemap{
  const base='https://uolink.vercel.app';
  const staticPages=['','/fish','/methods','/spots','/gear','/game'];
  return [...staticPages,...fish.map(f=>`/fish/${f.slug}`)].map(url=>({
    url:base+url,
    lastModified:new Date(),
    changeFrequency:url.startsWith('/fish/')?'monthly':'weekly',
    priority:url===''?1:url==='/fish'?0.9:0.8
  }));
}
