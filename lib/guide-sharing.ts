import {socialDrafts} from './guide-social';
import {getGuide} from './all-guides';
import {getFishProfile} from './fish-registry';
import {getFishImage} from './fish-images';
const base='https://uolink.vercel.app';
export function guideSharing(slug:string){
 const guide=getGuide(slug);if(!guide)return {};
 const draft=socialDrafts.find(d=>d.guideSlug===slug);
 const fishSlug=guide.related.find(r=>r.href.startsWith('/fish/'))?.href.split('/')[2];
 const fish=fishSlug?getFishProfile(fishSlug):undefined;
 const path=draft?.thumbnail??(fish?getFishImage(fish):undefined)??'/social/fishing-first-checklist--points.png';
 const image={url:base+path,alt:draft?.alt??guide.title,...(draft?{width:1200,height:630}:{})};
 return {openGraph:{title:guide.title,description:guide.summary,url:`${base}/guide/${slug}`,type:'article' as const,siteName:'UOLINK',locale:'ja_JP',images:[image]},twitter:{card:'summary_large_image' as const,site:'@UO_LINK',title:guide.title,description:guide.summary,images:[image]}};
}
