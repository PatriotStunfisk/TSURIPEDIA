import {getGuide} from './all-guides';
import {pageSharing} from './page-sharing';
export function guideSharing(slug:string){const guide=getGuide(slug);return guide?pageSharing(`/guide/${slug}`,guide.title,guide.summary,'article'):{};}
