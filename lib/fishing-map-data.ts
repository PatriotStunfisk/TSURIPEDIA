export type MapEntryType='spot'|'boat';

export type FishingMapEntry={
  slug:string;
  type:MapEntryType;
  name:string;
  area:string;
  lat:number;
  lng:number;
  fish:string[];
  methods:string[];
  season:string;
  beginner:boolean;
  kids:boolean;
  parking:boolean;
  toilet:boolean;
  note:string;
  googleQuery:string;
};

export const fishingMapEntries:FishingMapEntry[]=[
  {slug:'mukogawa-ichimonji',type:'spot',name:'武庫川一文字',area:'兵庫・大阪湾',lat:34.699,lng:135.353,fish:['アジ','サバ','タチウオ','青物'],methods:['サビキ','ショアジギング','ノマセ','タチウオ'],season:'春〜冬',beginner:false,kids:false,parking:true,toilet:false,note:'沖堤防。渡船の営業状況・ルールを確認してから釣行。',googleQuery:'武庫川一文字'},
  {slug:'hira-isoumi',type:'spot',name:'平磯海づり公園',area:'兵庫・神戸',lat:34.6255,lng:135.0679,fish:['アジ','マダイ','青物','根魚'],methods:['サビキ','胴突き','ウキ釣り'],season:'通年',beginner:true,kids:true,parking:true,toilet:true,note:'管理された海釣り公園。初めての海釣りや家族釣行にも向く。',googleQuery:'平磯海づり公園'},
  {slug:'tottopark-kojima',type:'spot',name:'とっとパーク小島',area:'大阪・岬町',lat:34.3064,lng:135.0967,fish:['アジ','タチウオ','マダイ','青物'],methods:['サビキ','ノマセ','カゴ釣り','タチウオ'],season:'通年',beginner:true,kids:true,parking:true,toilet:true,note:'潮通しの良い海釣り施設。混雑時のルールや営業時間を事前確認。',googleQuery:'とっとパーク小島'},
  {slug:'nanko-fishing-park',type:'spot',name:'大阪南港魚つり園護岸',area:'大阪・南港',lat:34.6156,lng:135.4019,fish:['アジ','サバ','タチウオ','青物'],methods:['サビキ','ショアジギング','タチウオ'],season:'春〜冬',beginner:true,kids:true,parking:true,toilet:true,note:'大阪市内から行きやすい釣り場。立入可能範囲と開園情報を確認。',googleQuery:'大阪南港魚つり園護岸'},
  {slug:'kada-port',type:'spot',name:'加太港',area:'和歌山・加太',lat:34.2756,lng:135.0714,fish:['アジ','キス','マダイ','青物'],methods:['サビキ','ちょい投げ','ショアジギング'],season:'通年',beginner:true,kids:true,parking:true,toilet:true,note:'港内外で魚種が豊富。漁業作業や立入禁止区域を最優先する。',googleQuery:'加太港 和歌山'}
];

export const fishingMapFish=['すべて','アジ','サバ','タチウオ','青物','マダイ','キス','根魚'];
