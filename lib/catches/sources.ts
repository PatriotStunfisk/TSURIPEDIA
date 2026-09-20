import type {CatchSourceType,CatchSignal} from './activity';
export type ExternalCatch=CatchSignal&{sourceType:'official'|'external';summary:string;sourceUrl:string;area?:string;fishName?:string;sourceName?:string};
export type CatchSource={id:string;name:string;sourceType:Exclude<CatchSourceType,'user'>;format:'json'|'naruohama-html'|'tottopark-html';endpoint:string;allowedHosts:string[];permissionUrl:string;enabled:boolean};
/** Each enabled source is reviewed for retrieval restrictions. Import facts only, never prose/images.
 * JSON partners use {catches:[{id,date,fishSlug,spotSlug,summary,sourceUrl,methodSlug?,sizeCm?}]}.
 */
export const catchSources:CatchSource[]=[
 {id:'tottopark-official',name:'とっとパーク小島',sourceType:'official',format:'tottopark-html',endpoint:'https://minnaga.com/system/totopark/contents/fish/fish_listup.php',allowedHosts:['minnaga.com'],permissionUrl:'https://minnaga.com/robots.txt',enabled:true},
 {id:'naruohama-official',name:'鳴尾浜海づり広場',sourceType:'official',format:'naruohama-html',endpoint:'https://www.naruohama-park.com/choka/',allowedHosts:['www.naruohama-park.com'],permissionUrl:'https://www.naruohama-park.com/robots.txt',enabled:true},
];
