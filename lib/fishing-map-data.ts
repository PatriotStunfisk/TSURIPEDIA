import {expansionSpots} from './fishing-map-expansion';
export type MapEntryType='spot'|'boat'|'area';

export type FishingMapEntry={
  slug:string;
  type:MapEntryType;
  name:string;
  area:string;
  lat?:number;
  lng?:number;
  fish:string[];
  methods:string[];
  season:string;
  beginner:boolean;
  kids:boolean;
  parking:boolean;
  toilet:boolean;
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

export const fishingMapEntries:FishingMapEntry[]=[
  ...expansionSpots,
  {
    slug:'mukogawa-ichimonji',fishSlugs:['aji','saba','tachiuo','buri'],methodSlugs:['sabiki','shore-jigging','nomase'],type:'spot',name:'武庫川一文字',area:'兵庫・大阪湾',lat:34.699,lng:135.353,
    fish:['アジ','サバ','タチウオ','青物'],methods:['サビキ','ショアジギング','ノマセ','タチウオ'],season:'春〜冬',beginner:false,kids:false,parking:true,toilet:false,
    note:'大阪湾を代表する沖堤防のひとつ。潮通しが良く、回遊魚からタチウオまで季節ごとに狙いが変わる。',googleQuery:'武庫川一文字',
    access:'渡船利用が前提。出船場所・受付方法・始発最終便・欠航情報を釣行前に必ず確認。',
    field:'沖堤防なので足元から水深があり、外向きでは潮が効きやすい。広い範囲を探る釣りと相性が良い。',
    bestFor:['青物のショアジギング','アジ・サバの回遊待ち','タチウオ','ノマセ'],
    timing:'朝夕の回遊タイミングが基本。青物やアジは潮の動き出しも狙い目。',
    tips:['サビキで小アジを確保してノマセへつなぐ組み立ても有効','青物狙いは潮目・鳥・ベイトの動きを優先','帰港時間から逆算して片付けを始める'],
    caution:['沖堤防のためライフジャケット必須','渡船ごとの持込ルール・営業状況を確認','強風や高波時は無理をしない']
  },
  {
    slug:'hira-isoumi',fishSlugs:['aji','madai','buri','kasago','mebaru','kisu'],methodSlugs:['sabiki','douzuki','uki','choinage'],type:'spot',name:'平磯海づり公園',area:'兵庫・神戸',lat:34.6255,lng:135.0679,
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
    slug:'tottopark-kojima',fishSlugs:['aji','tachiuo','madai','buri','saba'],methodSlugs:['sabiki','nomase'],type:'spot',name:'とっとパーク小島',area:'大阪・岬町',lat:34.3064,lng:135.0967,
    fish:['アジ','タチウオ','マダイ','青物','サバ'],methods:['サビキ','ノマセ','カゴ釣り','タチウオ'],season:'通年',beginner:true,kids:true,parking:true,toilet:true,
    note:'大阪湾の出口に近く潮通しの良い海釣り公園。回遊魚・マダイ・タチウオなど幅広い魚種を狙える。',googleQuery:'とっとパーク小島',status:'営業情報は公式サイトで確認',
    access:'大阪府岬町多奈川小島。無料駐車場があり、公共交通では多奈川駅からコミュニティバスを利用できる。',
    field:'海上へ張り出した桟橋型の釣台。潮が速い日もあり、仕掛けの重さと投入位置の調整が重要。',
    bestFor:['サビキ','ノマセ','青物','マダイ','タチウオ'],
    timing:'朝まずめは回遊魚、夕方以降はタチウオが候補。潮が速すぎる時は潮止まり前後も狙い目。',
    tips:['売店で釣具・エサの取り扱いあり','サビキからノマセへ切り替えると一日遊びやすい','潮が速い日はオモリを重くして仕掛けを安定させる'],
    caution:['釣りは指定された桟橋釣台で行う','混雑時は仕掛けを流しすぎない','営業時間・入場ルール・混雑情報を事前確認']
  },
  {
    slug:'nanko-fishing-park',closed:true,fishSlugs:['aji','saba','tachiuo','buri'],methodSlugs:['sabiki'],verifiedAt:'2026-09-13',sources:[{label:'大阪市：閉鎖について',url:'https://www.city.osaka.lg.jp/seisakukikakushitsu/page/0000672627.html'}],type:'spot',name:'大阪南港魚つり園護岸',area:'大阪・南港',lat:34.6156,lng:135.4019,
    fish:['アジ','サバ','タチウオ','青物'],methods:['サビキ（再開情報を確認）'],season:'春〜冬',beginner:true,kids:true,parking:false,toilet:false,
    note:'大阪市内からアクセスしやすい護岸型の釣り場。過去にはサビキやタチウオ、青物狙いで人気が高かった。',googleQuery:'大阪南港魚つり園護岸',status:'当面閉鎖中（2025年12月6日〜。再開情報を要確認）',
    access:'大阪南港エリア。現在は閉鎖情報が出ているため、現地へ向かう前に大阪市・大阪港湾局の最新案内を確認。',
    field:'護岸型の釣り場。再開後も工事・立入範囲・運営体制が変更される可能性があるため最新情報優先。',
    bestFor:['再開後のサビキ候補','タチウオ','青物'],
    timing:'現在は閉鎖中のため釣行対象外。再開後に最新の釣果・営業時間を確認して判断。',
    tips:['再開告知を確認してから計画する','周辺の代替釣り場も候補に入れる'],
    caution:['2025年12月6日から当面閉鎖','立入禁止区域へ入らない','駐車場・管理体制も再開時に変更される可能性あり']
  },
  {
    slug:'kada-port',fishSlugs:['aji','kisu','madai','buri','kasago','mebaru'],methodSlugs:['sabiki','choinage','shore-jigging','uki'],type:'spot',name:'加太港',area:'和歌山・加太',lat:34.2756,lng:135.0714,
    fish:['アジ','キス','マダイ','青物','根魚'],methods:['サビキ','ちょい投げ','ショアジギング','ウキ釣り'],season:'通年',beginner:true,kids:true,parking:true,toilet:true,
    note:'紀淡海峡に面した魚種豊富な港。港内の小物釣りから、潮通しの良い場所での回遊魚狙いまで選択肢が多い。',googleQuery:'加太港 和歌山',
    access:'和歌山市加太。漁港利用者・漁業作業を妨げない場所を選び、駐車場所や立入可否は現地表示を最優先。',
    field:'港内は比較的穏やかな場所があり、外向きほど潮の影響を受けやすい。狙い魚に合わせて場所を変えやすい。',
    bestFor:['ファミリーのサビキ','キスのちょい投げ','アジ','青物','根魚'],
    timing:'朝夕は回遊魚、日中はキスや根魚など狙いを変えると長時間遊びやすい。',
    tips:['港内ではサビキ・ちょい投げから始めやすい','ベイトが見えれば青物用ルアーも準備','根掛かりしやすい場所では胴突きや軽めの仕掛けで探る'],
    caution:['漁船・ロープ・荷揚げ作業を最優先','立入禁止や釣り禁止表示に従う','駐車場所は現地ルールを確認']
  }
];

export const fishingMapFish=['すべて',...new Set(fishingMapEntries.flatMap(e=>e.fish))];
export const getSpotsForFish=(slug:string)=>fishingMapEntries.filter(e=>!e.closed&&e.fishSlugs?.includes(slug));
export const getSpotsForMethod=(slug:string)=>fishingMapEntries.filter(e=>!e.closed&&e.methodSlugs?.includes(slug));
