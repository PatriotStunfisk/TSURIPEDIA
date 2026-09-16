import type {Metadata} from 'next';
import cards from './sharing-images.json';
export const siteUrl='https://uolink.vercel.app';
export function pageSharing(path:string,title:string,description:string,type:'website'|'article'='website'):Metadata{
 const imagePath=(cards as Record<string,string>)[path]??cards['/'];
 const image={url:new URL(imagePath,siteUrl).href,width:1200,height:630,type:'image/jpeg',alt:title};
 return {title,description,alternates:{canonical:new URL(path,siteUrl).href},openGraph:{title,description,url:new URL(path,siteUrl).href,type,siteName:'UOLINK',locale:'ja_JP',images:[image]},twitter:{card:'summary_large_image',site:'@uo_link',title,description,images:[{url:image.url,alt:title}]}};
}
