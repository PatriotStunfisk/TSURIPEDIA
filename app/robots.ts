import type {MetadataRoute} from 'next';

export default function robots():MetadataRoute.Robots{
  return {
    rules:{userAgent:'*',allow:'/',disallow:['/admin']},
    sitemap:'https://uolink.vercel.app/sitemap.xml',
    host:'https://uolink.vercel.app'
  };
}
