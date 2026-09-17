import type {FishingMapEntry} from './fishing-map-data';
export type SpotPrimaryType='boat'|'sea-park'|'sea-pond'|'port'|'pier'|'beach'|'rock'|'estuary'|'fresh'|'area'|'other';
export type LegacySpotPrimaryType='facility'|'park'|'shore';
// Explicit facility exceptions keep managed fishing parks separate from ordinary shorelines.
const facilities=new Set(['tomakomai-ippon','asamushi-umizuri','honmoku-fishing','niigata-happyfishing','atami-port-fishing','shimonoseki-fishing','kamoike-umizuri','motobu-ikada','yura-yamagata-fishing','shimizu-port-park','mikata-sea-fishing','yura-wakayama-park','waita-fishing-pier','sakurajima-umizuri','takashima-tobishima','akita-north','shinchi-park','kashima-fishing','wakasu-fishing','daikoku-fishing','isogo-fishing','ichihara-fishing','ishida-fisherina','shinmaiko-fishing','toyohama-pier','arai-benten','suma-fishing','fukuoka-fishing','amagasaki-uoturi','minamiawaji-megafloat','saikazaki-seapark','naruohama','miyazu-sea-fishing','hira-isoumi','tottopark-kojima','nanko-fishing-park']);
const parks=new Set(['oi-nagisa-fishing','yokosuka-umibe','yumeminato-park','maizuru-shinkai']);
const seaPonds=new Set(['saikazaki-seapark']);
const seaParks=new Set(['regional-marinacity-fishing-park','yokosuka-umibe','maizuru-shinkai','notojima-seafishing','fishing-park-hikari']);
export function spotPrimaryType(e:Pick<FishingMapEntry,'slug'|'type'|'terrain'|'primaryType'>):SpotPrimaryType{
 if(e.type==='boat')return 'boat';if(e.type==='area')return 'area';
 if(seaPonds.has(e.slug))return 'sea-pond';if(seaParks.has(e.slug))return 'sea-park';
 if(e.terrain==='sea-pond')return 'sea-pond';
 if(e.primaryType&&!['facility','park','shore'].includes(e.primaryType))return e.primaryType as SpotPrimaryType;
 if(e.terrain==='pond'||e.terrain==='river'||e.terrain==='lake')return 'fresh';
 if((e.primaryType==='facility'||facilities.has(e.slug))&&e.terrain!=='raft')return 'sea-park';
 if(e.slug==='kada-port')return 'port';
 switch(e.terrain){case 'port':return 'port';case 'pier':case 'park':return 'pier';case 'beach':return 'beach';case 'rock':return 'rock';case 'estuary':return 'estuary';case 'shore':return e.primaryType==='park'||parks.has(e.slug)?'pier':'other';default:return 'other';}
}
export function classifySpot(e:FishingMapEntry):FishingMapEntry{return {...e,primaryType:spotPrimaryType(e),features:[...new Set([...(e.features??[]),...(({pier:['堤防・桟橋'],shore:['護岸・海岸'],park:['公園'],port:['港'],raft:['イカダ'],rock:['磯']} as Record<string,string[]>)[e.terrain??'']??[]),...(e.parking?['駐車場']:[]),...(e.toilet?['トイレ']:[])])]};}
