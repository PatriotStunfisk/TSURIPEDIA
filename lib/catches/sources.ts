import type {FacilityFormat} from './facility-parser';
import type {CatchSourceType,CatchSignal} from './activity';
export type ExternalCatch=CatchSignal&{sourceType:'official'|'external';summary:string;sourceUrl:string;area?:string;fishName?:string;sourceName?:string;count?:number;countScope?:'facility'};
export type CatchSource={id:string;name:string;sourceType:Exclude<CatchSourceType,'user'>;format:FacilityFormat|'json'|'naruohama-html'|'tottopark-html'|'anglers-html';endpoint:string;allowedHosts:string[];permissionUrl:string;enabled:boolean;spotSlug?:string;areaId?:string};
/** Each enabled source is reviewed for retrieval restrictions. Import facts only, never prose/images.
 * JSON partners use {catches:[{id,date,fishSlug,spotSlug,summary,sourceUrl,methodSlug?,sizeCm?}]}.
 */
export const catchSources:CatchSource[]=[
 {id:'naoetsu-official',name:'直江津港ハッピーフィッシング',sourceType:'official',format:'happy-html',endpoint:'https://happyfishing-n.jp/',allowedHosts:['happyfishing-n.jp'],permissionUrl:'https://happyfishing-n.jp/robots.txt',spotSlug:'naoetsu-happyfishing',enabled:true},
 {id:'yura-official',name:'由良海つり公園',sourceType:'official',format:'tottopark-html',endpoint:'https://minnaga.com/system/yurakouen/contents/fish/fish_listup.php',allowedHosts:['minnaga.com'],permissionUrl:'https://minnaga.com/robots.txt',spotSlug:'yura-wakayama-park',enabled:true},
 {id:'niigata-official',name:'新潟東港ハッピーフィッシング',sourceType:'official',format:'happy-html',endpoint:'https://happyfishing.jp/',allowedHosts:['happyfishing.jp'],permissionUrl:'https://happyfishing.jp/robots.txt',spotSlug:'niigata-happyfishing',enabled:true},
 {id:'ichihara-official',name:'オリジナルメーカー海づり公園',sourceType:'official',format:'ichihara-html',endpoint:'https://ichihara-umizuri.com/fishing/',allowedHosts:['ichihara-umizuri.com'],permissionUrl:'https://ichihara-umizuri.com/robots.txt',spotSlug:'ichihara-fishing',enabled:true},
 {id:'hiraiso-official',name:'平磯海づり公園',sourceType:'official',format:'hiraiso-html',endpoint:'https://kobeumiduri.jp/fishresult/',allowedHosts:['kobeumiduri.jp'],permissionUrl:'https://kobeumiduri.jp/robots.txt',spotSlug:'hira-isoumi',enabled:true},
 {id:'shimonoseki-official',name:'下関フィッシングパーク',sourceType:'official',format:'shimonoseki-html',endpoint:'https://shimonoseki-fishingpark.com/fishing/index.html',allowedHosts:['shimonoseki-fishingpark.com'],permissionUrl:'https://shimonoseki-fishingpark.com/robots.txt',spotSlug:'shimonoseki-fishing',enabled:true},
 {id:'fukuoka-official',name:'福岡市海づり公園',sourceType:'official',format:'fukuoka-html',endpoint:'https://umizuri.com/pages/30',allowedHosts:['umizuri.com'],permissionUrl:'https://umizuri.com/robots.txt',spotSlug:'fukuoka-fishing',enabled:true},
 {id:'anglers-amagasaki',name:'ANGLERS',sourceType:'external',format:'anglers-html',endpoint:'https://anglers.jp/areas/874',allowedHosts:['anglers.jp'],permissionUrl:'https://anglers.jp/terms/free',spotSlug:'amagasaki-uoturi',areaId:'874',enabled:true},
 {id:'anglers-mukogawa',name:'ANGLERS',sourceType:'external',format:'anglers-html',endpoint:'https://anglers.jp/areas/877',allowedHosts:['anglers.jp'],permissionUrl:'https://anglers.jp/terms/free',spotSlug:'mukogawa-ichimonji',areaId:'877',enabled:true},
 {id:'anglers-naruohama',name:'ANGLERS',sourceType:'external',format:'anglers-html',endpoint:'https://anglers.jp/areas/2335',allowedHosts:['anglers.jp'],permissionUrl:'https://anglers.jp/terms/free',spotSlug:'naruohama',areaId:'2335',enabled:true},
 {id:'tottopark-official',name:'とっとパーク小島',sourceType:'official',format:'tottopark-html',endpoint:'https://minnaga.com/system/totopark/contents/fish/fish_listup.php',allowedHosts:['minnaga.com'],permissionUrl:'https://minnaga.com/robots.txt',enabled:true},
 {id:'naruohama-official',name:'鳴尾浜海づり広場',sourceType:'official',format:'naruohama-html',endpoint:'https://www.naruohama-park.com/choka/',allowedHosts:['www.naruohama-park.com'],permissionUrl:'https://www.naruohama-park.com/robots.txt',enabled:true},
];
