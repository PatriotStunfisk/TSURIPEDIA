import {kansaiBoatSeptemberEntries} from './fishing-map-kansai-boats-20260924';
import {coastReviewEntries} from './fishing-map-coast-review-20260921';
import {rockReviewEntries} from './fishing-map-rock-review-20260924';
import {septemberBoatEntries} from './fishing-map-boat-september';
import {kansaiReopeningEntries} from './fishing-map-kansai-reopening';
import {freshIslandEntries} from './fishing-map-fresh-islands';
import {kansaiNationalEntries} from './fishing-map-kansai-national';
import {coastalNextEntries} from './fishing-map-coastal-next';
import {coastalMapExpansion} from './fishing-map-coastal-expansion';
import {shoreMapGrowth} from './fishing-map-shore-growth';
import {portMapExpansion} from './fishing-map-port-expansion';
import {harborMapGrowth} from './fishing-map-harbor-growth';
import {autumnMapGrowth} from './fishing-map-autumn-growth';
import {northMapGrowth} from './fishing-map-north-growth';
import {favoritesMapGrowth} from './fishing-map-favorites-growth';
import {shoreReviewExpansion} from './fishing-map-shore-review';
import {regionalMapGrowth} from './fishing-map-regional-growth';
import {facilityMapExpansion} from './fishing-map-facility-expansion';
import {managedMapGrowth} from './fishing-map-managed-growth';
import {boatMapGrowth} from './fishing-map-boat-growth';
import {accessMapGrowth} from './fishing-map-access-growth';
import {coastalMapGrowth} from './fishing-map-coastal-growth';
import {nationalMapGrowth} from './fishing-map-national-growth';
import {riverMapExpansion} from './fishing-map-river-expansion';
import {getFishByName} from './fish-registry';
import {platformMapExpansion} from './fishing-map-20260917';
import {classifySpot,type SpotPrimaryType,type LegacySpotPrimaryType} from './spot-classification';
import {verifiedMapExpansion} from './fishing-map-20260916';
import {nationwideExpansion} from './fishing-map-nationwide-expansion';
import {nationalSpots} from './fishing-map-national';
import type {Prefecture} from './japan-regions';
import {kansaiSpots} from './fishing-map-kansai';
import {batchSpots} from './fishing-map-batch';
import {expansionSpots} from './fishing-map-expansion';
export type MapEntryType='spot'|'boat'|'area';

export type FishingMapEntry={
  primaryType?:SpotPrimaryType|LegacySpotPrimaryType;
  features?:string[];
  slug:string;
  type:MapEntryType;
  name:string;
  area:string;
  prefecture?:Prefecture;
  terrain?:'pier'|'shore'|'beach'|'rock'|'boat'|'river'|'pond'|'raft'|'park'|'estuary'|'lake'|'port'|'sea-pond';
  port?:string;
  officialUrl?:string;
  positionNote?:string;
  sourceUpdatedAt?:string;
  waterDepth?:string;
  nightFishing?:string;
  lat?:number;
  lng?:number;
  fish:string[];
  methods:string[];
  season:string;
  beginner:boolean;
  kids:boolean;
  parking?:boolean;
  toilet?:boolean;
  note:string;
  googleQuery:string;
  status?:string;
  closed?:boolean;
  fishSlugs?:string[];
  methodSlugs?:string[];
  guideSlugs?:string[];
  verifiedAt?:string;
  sources?:{label:string;url:string}[];
  access:string;
  field:string;
  bestFor:string[];
  timing:string;
  tips:string[];
  caution:string[];
};

const sourceEntries:FishingMapEntry[]=[
  ...rockReviewEntries,
  ...coastReviewEntries,
  ...septemberBoatEntries,
  ...kansaiReopeningEntries,
  ...freshIslandEntries,
  ...kansaiNationalEntries,
  ...shoreMapGrowth,
  ...coastalNextEntries,
  ...coastalMapExpansion,
  ...portMapExpansion,
  ...harborMapGrowth,
  ...autumnMapGrowth,
  ...northMapGrowth,
  ...favoritesMapGrowth,
  ...shoreReviewExpansion,
  ...regionalMapGrowth,
  ...facilityMapExpansion,
  ...managedMapGrowth,
  ...boatMapGrowth,
  ...accessMapGrowth,
  ...platformMapExpansion,...riverMapExpansion,...nationalMapGrowth,...coastalMapGrowth,
  ...nationalSpots,
  ...verifiedMapExpansion,
  ...nationwideExpansion,
  ...kansaiSpots,
  ...batchSpots,
  ...expansionSpots,
  {
    slug:'mukogawa-ichimonji',fishSlugs:['aji','saba','tachiuo','buri','sawara'],methodSlugs:['sabiki','shore-jigging','nomase'],type:'spot',name:'武庫川一文字',prefecture:'兵庫県',terrain:'pier',area:'兵庫・大阪湾',lat:34.6762,lng:135.355,
    officialUrl:'https://www.amagyo.com/index-tosentop.html',verifiedAt:'2026-09-25',positionNote:'地理院地図で沖堤防の東側屈曲部を確認した代表点。陸上の渡船受付・乗り場とは異なります。',sources:[{label:'武庫川渡船：日別釣果',url:'https://www.amagyo.com/choukax.php'},{label:'武庫川渡船：運航・利用条件',url:'https://www.amagyo.com/index-tosentop.html'},{label:'地理院地図：沖堤防上の位置',url:'https://maps.gsi.go.jp/#16/34.6762/135.3550/&base=std&ls=std&disp=1'}],
    fish:['アジ','サバ','タチウオ','青物','サワラ'],methods:['サビキ','ショアジギング','ノマセ','タチウオ'],season:'春〜冬',beginner:false,kids:false,parking:true,toilet:false,
    note:'大阪湾を代表する沖堤防のひとつ。潮通しが良く、回遊魚からタチウオまで季節ごとに狙いが変わる。',googleQuery:'武庫川一文字',
    access:'渡船利用が前提。出船場所・受付方法・始発最終便・欠航情報を釣行前に必ず確認。',
    field:'沖堤防なので足元から水深があり、外向きでは潮が効きやすい。広い範囲を探る釣りと相性が良い。',
    bestFor:['青物のショアジギング','アジ・サバの回遊待ち','タチウオ','ノマセ'],
    timing:'朝夕の回遊タイミングが基本。青物やアジは潮の動き出しも狙い目。',
    tips:['サビキで小アジを確保してノマセへつなぐ組み立ても有効','青物狙いは潮目・鳥・ベイトの動きを優先','帰港時間から逆算して片付けを始める'],
    caution:['沖堤防のためライフジャケット必須','渡船ごとの持込ルール・営業状況を確認','強風や高波時は無理をしない']
  },
  {positionNote:"地理院地図・航空写真と施設案内を照合した釣りエリアの代表位置。ピンは駐車場や入口ではありません。利用区画は現地の案内で確認してください。",
    slug:'hira-isoumi',fishSlugs:['aji','madai','buri','kasago','mebaru','kisu'],methodSlugs:['sabiki','douzuki','uki','choinage'],type:'spot',name:'平磯海づり公園',prefecture:'兵庫県',terrain:'pier',area:'兵庫・神戸',lat:34.626428,lng:135.06403,
    fish:['アジ','マダイ','青物','根魚','キス'],methods:['サビキ','胴突き','ウキ釣り','投げ釣り'],season:'通年',beginner:true,kids:true,parking:true,toilet:true,
    note:'東西約1.4kmの釣台を備える管理釣り場。足場と設備が整っており、家族釣行から大物狙いまで対応しやすい。',googleQuery:'平磯海づり公園',status:'営業中（営業時間・休園日は公式情報を確認）',
    access:'神戸市垂水区。管理釣り場なので受付後に入園。駐車場・トイレ・スロープ等の施設あり。',
    field:'長い護岸状の釣台。足元の探り釣り、サビキ、投げ釣りなど幅広い釣りが成立する。',
    bestFor:['初めての海釣り','ファミリーのサビキ','カサゴ・メバルなど根魚','キス','回遊魚'],
    timing:'朝夕に加え、潮が動く時間帯を意識。根魚は足元を丁寧に探ると日中でも狙いやすい。',
    tips:['初めてならサビキか胴突きから始める','足元の壁際も有望なポイント','釣果情報を見て当日の狙い魚を絞る'],
    caution:['小学校3年生以下はライフジャケット着用ルールあり','竿数や集魚剤など園内ルールを確認','混雑時の投げ釣り・ルアーは周囲を十分確認']
  },
  {
    slug:'tottopark-kojima',fishSlugs:['aji','tachiuo','madai','buri','saba'],methodSlugs:['sabiki','nomase'],type:'spot',name:'とっとパーク小島',prefecture:'大阪府',terrain:'pier',area:'大阪・岬町',lat:34.317149,lng:135.097901,
    verifiedAt:'2026-09-18',positionNote:'国土地理院の地図・空中写真で海上の釣りデッキを照合。道の駅の駐車場ではなく桟橋上を表示しています。',sources:[{label:'岬町：とっとパーク小島の公式案内',url:'https://www.town.misaki.osaka.jp/soshiki/toshi_seibi/sangyo/kannkou/leisure/fishing/203.html'},{label:'国土地理院：釣りデッキの位置',url:'https://maps.gsi.go.jp/#18/34.317149/135.097901/&base=std&ls=std&disp=1'}],
    fish:['アジ','タチウオ','マダイ','青物','サバ'],methods:['サビキ','ノマセ','カゴ釣り','タチウオ'],season:'通年',beginner:true,kids:true,parking:true,toilet:true,
    note:'大阪湾の出口に近く潮通しの良い海釣り公園。回遊魚・マダイ・タチウオなど幅広い魚種を狙える。',googleQuery:'とっとパーク小島',status:'営業情報は公式サイトで確認',
    access:'大阪府岬町多奈川小島。無料駐車場があり、公共交通では多奈川駅からコミュニティバスを利用できる。',
    field:'海上へ張り出した桟橋型の釣台。潮が速い日もあり、仕掛けの重さと投入位置の調整が重要。',
    bestFor:['サビキ','ノマセ','青物','マダイ','タチウオ'],
    timing:'朝まずめは回遊魚、夕方以降はタチウオが候補。潮が速すぎる時は潮止まり前後も狙い目。',
    tips:['売店で釣具・エサの取り扱いあり','サビキからノマセへ切り替えると一日遊びやすい','潮が速い日はオモリを重くして仕掛けを安定させる'],
    caution:['釣りは指定された桟橋釣台で行う','混雑時は仕掛けを流しすぎない','営業時間・入場ルール・混雑情報を事前確認']
  },
  {positionNote:"運営案内と地理院地図を照合し、西側の釣り護岸上に配置。利用区画は園内の掲示に従ってください。",
    slug:'nanko-fishing-park',fishSlugs:['aji','saba','tachiuo','buri'],methodSlugs:['sabiki'],verifiedAt:'2026-09-18',officialUrl:'https://nankou-uotsuri-en.com/',sources:[{label:'運営公式：営業・利用ルール・設備',url:'https://nankou-uotsuri-en.com/guide/'},{"label":"国土地理院：釣りエリアの位置を照合（2026-09-18）","url":"https://maps.gsi.go.jp/#18/34.614491/135.401795/&base=std&ls=std&disp=1"}],type:'spot',name:'大阪南港魚つり園護岸',prefecture:'大阪府',terrain:'pier',area:'大阪・南港',lat:34.614491,lng:135.401795,
    fish:['アジ','サバ','タチウオ','青物'],methods:['サビキ'],season:'対象魚の回遊により変動。直近の公式釣果を確認。',beginner:true,kids:true,parking:true,toilet:true,
    note:'大阪市内から訪れやすい護岸の釣り場。柵のある釣り護岸に売店・トイレが揃い、短い仕掛けでも始めやすい。足元のサビキから始め、回遊する棚を探る。',googleQuery:'大阪南港魚つり園護岸',status:'営業案内を確認済み。当日の開園・休園は運営公式で確認。',
    access:'大阪市住之江区南港南6丁目9-3。有料駐車場・トイレ・売店がある。営業日・開園時間と駐車料金は公式の最新案内を確認。',
    field:'護岸の指定区画から釣る。混雑時は左右の仕掛けと距離を取り、係員の案内や悪天候による閉園を優先する。',
    bestFor:['足元のサビキ','回遊魚を待つ釣り','設備のある釣り場を探す人'],
    timing:'開園時間内に利用。狙い魚は公式の直近釣果を参考にし、水曜日などの休園日と当日の気象情報を確認する。',
    tips:['短いサビキで棚を変え、アタリの出た深さを覚える','レンタル竿・餌の取扱いは売店案内を確認。活き虫餌は販売対象外','竿出しは1人1本。ルアーと投げ釣りの扱いは公式規則に従う'],
    caution:['投げ釣りは禁止（ルアーは利用可）。禁止対象の定義は公式案内を確認','施設内は禁煙・ペット同伴不可','強風・波・雷等で閉園する場合あり。現地掲示と係員の指示を優先']
  },
  {
    slug:'kada-port',fishSlugs:['aji','kisu','madai','buri','kasago','mebaru'],methodSlugs:['sabiki','choinage','shore-jigging','uki'],type:'spot',name:'加太港',prefecture:'和歌山県',terrain:'pier',area:'和歌山・加太',lat:34.2756,lng:135.0714,
    fish:['アジ','キス','マダイ','青物','根魚'],methods:['サビキ','ちょい投げ','ショアジギング','ウキ釣り'],season:'通年',beginner:true,kids:true,parking:true,toilet:true,
    note:'紀淡海峡に面した魚種豊富な港。港内の小物釣りから、潮通しの良い場所での回遊魚狙いまで選択肢が多い。',googleQuery:'加太港 和歌山',
    access:'和歌山市加太。漁港利用者・漁業作業を妨げない場所を選び、駐車場所や立入可否は現地表示を最優先。',
    field:'港内は比較的穏やかな場所があり、外向きほど潮の影響を受けやすい。狙い魚に合わせて場所を変えやすい。',
    bestFor:['ファミリーのサビキ','キスのちょい投げ','アジ','青物','根魚'],
    timing:'朝夕は回遊魚、日中はキスや根魚など狙いを変えると長時間遊びやすい。',
    tips:['港内ではサビキ・ちょい投げから始めやすい','ベイトが見えれば青物用ルアーも準備','根掛かりしやすい場所では胴突きや軽めの仕掛けで探る'],
    caution:['漁船・ロープ・荷揚げ作業を最優先','立入禁止や釣り禁止表示に従う','駐車場所は現地ルールを確認']
  }
  ,...kansaiBoatSeptemberEntries
];

// Resolve known aliases (e.g. アジ) without guessing ambiguous groups such as 青物.
const exactFishNames=new Map([...new Set(sourceEntries.flatMap(e=>e.fish))].flatMap(name=>{const fish=getFishByName(name);return fish?[[name,fish.slug] as const]:[];}));
export const fishingMapEntries:FishingMapEntry[]=sourceEntries.map(e=>classifySpot({...e,fishSlugs:[...new Set([...(e.fishSlugs??[]),...e.fish.flatMap(name=>exactFishNames.has(name)?[exactFishNames.get(name)!]:[])])]}));

export const fishingMapFish=['すべて',...new Set(fishingMapEntries.flatMap(e=>e.fish))];
export const getSpotsForFish=(slug:string)=>fishingMapEntries.filter(e=>!e.closed&&e.fishSlugs?.includes(slug));
export const getSpotsForMethod=(slug:string)=>fishingMapEntries.filter(e=>!e.closed&&e.methodSlugs?.includes(slug));
