// Public tracking ID only. No account credentials or product API secrets belong here.
export const amazonStoreId='uolink-22';
export const affiliateDisclosure='Amazonのアソシエイトとして、UOLINKは適格販売により収入を得ています。';
export type AffiliateProduct={asin:string;name:string;methods:readonly string[];reason:string;check:string;checkedAt:string};
// Selected variants checked on Amazon.co.jp; prices, ratings and availability are intentionally not copied.
export const affiliateProducts:readonly AffiliateProduct[]=[
 {asin:'B00HVKLXA8',name:'第一精工 ガーグリップMCカスタム ブラック',methods:['sabiki','ajing','mebaring','choinage','ana'],reason:'小型魚をつかんで針を外すときの補助具。素手で魚体を強く握る場面を減らせます。',check:'針外し用プライヤーも併用してください。大型魚の吊り上げや、毒のある魚を安全に扱える保証にはなりません。',checkedAt:'2026-09-15'},
 {asin:'B0C7FF2SDP',name:'エコギア バグアンツ',methods:['rockfish-lure','chinning'],reason:'甲殻類を意識したワーム。根の周りで小さく持ち上げて落とすリグの候補です。',check:'販売ページでサイズと色を選択します。ワームの大きさに合うフック・シンカーを別途用意し、竿の対応重量を確認してください。',checkedAt:'2026-09-15'},
 {asin:'B007SQ76QK',name:'ハヤブサ 小アジ専科 HS100 ケイムラサバ皮レインボー 6号・ハリス1号',methods:['sabiki'],reason:'堤防でアジやイワシの群れを狙うサビキ仕掛けの候補。針の大きさを比べる基準に。',check:'小さな魚には針が大きい場合があります。カゴ・オモリは別途、竿の負荷に合わせて選びます。',checkedAt:'2026-09-15'},
 {asin:'B078ZW65R7',name:'ヤマシタ エギ王 K 3.5号 006 軍艦グリーン',methods:['eging'],reason:'岸からのエギングで使うベーシックタイプ。底を確認してから誘う練習に。',check:'22gの3.5号に対応した竿を使用。深場のティップラン専用品ではありません。',checkedAt:'2026-09-15'},
 {asin:'B0DCKBP14Z',name:'ダイワ 24 レブロス LT2500D',methods:['sabiki','choinage','eging'],reason:'堤防の小物釣りやエギングで検討できる2500番スピニング。釣法に合わせた糸を組み合わせます。',check:'深溝スプールです。細いPEでは下巻きが必要になる場合があります。ラインは別途確認してください。',checkedAt:'2026-09-15'},
 {asin:'B0BT1N3919',name:'ダイワ 紅牙ベイラバーフリーβ 60g 紅牙レッド',methods:['tai-rubber'],reason:'ヘッドとネクタイ・フックを組み合わせたタイラバ。一定速度で巻く釣りの道具候補です。',check:'60gで底を取れるかは潮と水深次第。船長の指定重量と竿の対応負荷を優先します。',checkedAt:'2026-09-15'},
 {asin:'B00JRT8U5W',name:'メジャークラフト ジグパラ ショート 40g #04 ブルーピンク',methods:['shore-jigging'],reason:'岸から青物を狙うメタルジグの候補。飛距離と沈み方を確かめながら使います。',check:'40gを投げられる竿を使用し、針の周囲に人がいないことを確認。船の深場用重量とは分けて考えます。',checkedAt:'2026-09-15'},
];
export function amazonProductUrl(asin:string){
 if(!/^[A-Z0-9]{10}$/.test(asin))throw new Error('Invalid Amazon ASIN');
 return `https://www.amazon.co.jp/dp/${asin}/ref=nosim?tag=${amazonStoreId}`;
}
export function productsForMethods(methods:readonly string[]){return affiliateProducts.filter(p=>p.methods.some(m=>methods.includes(m)));}

// Category searches complement checked products; never pretend a search result is a verified SKU.
export const tackleCategories=[['rod','ロッド'],['reel','リール'],['line','ライン'],['leader','リーダー'],['rig','仕掛け'],['bait','餌・ルアー']] as const;
export function amazonSearchUrl(query:string){return `https://www.amazon.co.jp/s?k=${encodeURIComponent(query)}&tag=${amazonStoreId}`;}

export const tackleSearchTerms:Readonly<Record<string,Partial<Record<typeof tackleCategories[number][0],string>>>>={
 'sayori-uki':{rig:'サヨリ ウキ 仕掛け',bait:'サヨリ オキアミ'},
 'ishidai-bottom':{rod:'イシダイ 専用竿',reel:'イシダイ 両軸リール',rig:'イシダイ 底物 仕掛け'},
 'nage':{rod:'カレイ 投げ竿',reel:'投げ釣り リール',line:'投げ釣り 道糸 力糸',rig:'カレイ 天秤 仕掛け'},
 'amadai-tenbin':{rod:'アマダイ 船竿',rig:'アマダイ 天秤 仕掛け',bait:'アマダイ オキアミ'},
 'deepsea-douzuki':{rod:'中深場 深場 竿',reel:'深場 電動リール',rig:'中深場 胴突き 仕掛け'},
 'medai-komase':{rod:'メダイ 船竿',rig:'メダイ 天秤 ビシ 仕掛け',bait:'メダイ オキアミ'},
 'eging':{line:'エギング PE 0.6 0.8号',rig:'エギング スナップ',bait:'エギ 2.5号 3.5号'},
 'sabiki':{rig:'サビキ仕掛け カゴ オモリ',bait:'サビキ アミエビ'},
 'ika-metal':{rig:'イカメタル リーダー ドロッパー',bait:'イカメタル 鉛スッテ'},
 'kamasu-lure':{bait:'カマス 小型ミノー'},
 'tachiuo-tenya':{rig:'船 タチウオ テンヤ',bait:'タチウオ テンヤ イワシ'},
 'choinage':{rig:'キス 天秤 仕掛け オモリ',bait:'キス 釣り 餌'}
};
export const tachiuoRodSearch=amazonSearchUrl('船 タチウオ テンヤ ロッド');
