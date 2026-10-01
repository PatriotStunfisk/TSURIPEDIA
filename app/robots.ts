import {siteUrl} from '@/lib/site-url';
import type {MetadataRoute} from 'next';

export default function robots():MetadataRoute.Robots{
  return {
    rules:[
      {userAgent:'*',allow:'/',disallow:['/admin']},
      {userAgent:'meta-externalagent',disallow:'/'}
    ],
    sitemap:`${siteUrl}/sitemap.xml`,
    host:siteUrl
  };
}
