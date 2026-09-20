import type {CatchSourceType,CatchSignal} from './activity';
export type ExternalCatch=CatchSignal&{sourceType:'official'|'external';summary:string;sourceUrl:string;area?:string;fishName?:string};
export type CatchSource={id:string;name:string;sourceType:Exclude<CatchSourceType,'user'>;format:'json';endpoint:string;allowedHosts:string[];permissionUrl:string;enabled:boolean};
/** Enable only after the publisher has permitted automated retrieval and summary redistribution.
 * Expected JSON: {catches:[{id,date,fishSlug,spotSlug,summary,sourceUrl,methodSlug?,sizeCm?}]}.
 * ANGLERS and other sites are intentionally not scraped without a licensed feed.
 */
export const catchSources:CatchSource[]=[];
