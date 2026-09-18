import type {FishingMapEntry} from './fishing-map-data';
import type {Prefecture} from './japan-regions';
// Public fishing reports identify candidates; they do not override posted access restrictions.
// Map positions were reviewed against GSI shorelines, not accepted as address-search results.
export type HarborRecord={slug:string;name:string;prefecture:Prefecture;lat:number;lng:number;fish:string[];methodSlugs:string[];note:string;caution:string[];sources:NonNullable<FishingMapEntry['sources']>;primaryType?:'port'|'pier'|'beach'|'estuary'|'sea-park'};
const methodHelp:Record<string,{name:string;tip:string}>={
  'surf-lure':{name:'サーフルアー',tip:'手前の底の変化から探り、底をこすり続けず少し浮かせて巻く。人のいる方向へ投げない。'},
  "sabiki": {
    "name": "サビキ",
    "tip": "サビキは短い仕掛けから始め、足元の船・ロープを避けて回遊する棚を探す。"
  },
  "choinage": {
    "name": "ちょい投げ",
    "tip": "底を探る釣りは短い距離から始め、根掛かりした位置へ繰り返し投入しない。"
  },
  "eging": {
    "name": "エギング",
    "tip": "エギは着底を確かめてから動かし、係留索や藻に掛けない投入方向を選ぶ。"
  },
  "uki": {
    "name": "ウキ釣り",
    "tip": "ウキ仕掛けは流れに任せすぎず、船道や隣の仕掛けへ近づく前に回収する。"
  },
  "rockfish-lure": {
    "name": "ロックフィッシュ",
    "tip": "軽い仕掛けで表層から順に探り、底に落とし続けて根掛かりを増やさない。"
  }
};
export const createHarborEntries=(harbors:readonly HarborRecord[]):FishingMapEntry[]=>harbors.map(h=>({...h,
 type:'spot',terrain:h.primaryType==='sea-park'?'park':h.primaryType??'port',primaryType:h.primaryType??'port',
 area:`${h.prefecture}・${h.name}`,googleQuery:`${h.prefecture} ${h.name}`,
 methods:h.methodSlugs.map(id=>methodHelp[id].name),
 season:'対象魚・回遊・天候により変動。出発前に直近の岸釣り情報と利用条件を確認。',
 beginner:false,kids:false,verifiedAt:'2026-09-18',
 positionNote:h.primaryType==='sea-park'?'釣り桟橋の代表位置を地理院地図で照合。施設内の利用区画は係員の案内を確認してください。':h.primaryType==='estuary'?'河口の陸上側を地理院地図で照合。ピンは釣り許可範囲・駐車位置・入水位置ではありません。':h.primaryType==='beach'?'砂浜の代表位置を地理院地図で照合。ピンは釣り許可範囲・駐車位置・入水位置ではありません。':'港内岸壁・波止の代表位置を地理院地図で照合。ピンは釣り許可範囲や駐車位置ではありません。',
 access:`${h.prefecture}の${h.name}。駐車・進入路・立入範囲は現地の案内を確認。`,
 field:h.note,bestFor:h.fish.slice(0,3).map(f=>`${f}の岸釣り候補`),
 timing:'初めてなら明るい時間に足場と帰路を確認。作業中や風・波が強い場合は利用しない。',
 tips:h.methodSlugs.length?h.methodSlugs.map(id=>methodHelp[id].tip):['底の状態と係留索を確認してから、回収できる短い範囲を探る。'],
}));
