import {fishSpecies} from '@/lib/fish-species';
import {uniqueFishSlugs} from '@/lib/fish-species/define';
import type {Fish} from '@/lib/fish-species/types';
export type {Fish} from '@/lib/fish-species/types';

export const fish:Fish[]=uniqueFishSlugs([
 ...fishSpecies.map(species=>species.base),
 {slug:'iwashi',name:'マイワシ',en:'Japanese sardine',scientific:'Sardinops melanostictus',season:'春〜秋',difficulty:1,danger:'低',methods:['サビキ'],areas:['全国の港','大阪湾'],depth:'表層〜50m',size:'10〜25cm',desc:'群れで接岸すると初心者でも数釣りが楽しめます。ノマセ釣りのエサにも使われます。',accent:'#a9ccd9',months:[4,5,6,7,8,9,10],beginner:true,kids:true},
 {slug:'suzuki',name:'スズキ',en:'Japanese seabass',scientific:'Lateolabrax japonicus',season:'春〜秋',difficulty:3,danger:'エラぶたに注意',methods:['ルアー','泳がせ','ウキ釣り'],areas:['河口','港湾','大阪湾'],depth:'1〜30m',size:'40〜90cm',desc:'シーバスの名でも親しまれる大型魚。河口や港湾部でルアー釣りが盛んです。',accent:'#a9bec5',months:[4,5,6,7,8,9,10],beginner:false,kids:false},
 {slug:'chinu',name:'クロダイ',en:'Black seabream',scientific:'Acanthopagrus schlegelii',season:'春〜秋',difficulty:3,danger:'背びれに注意',methods:['フカセ','落とし込み','ダンゴ'],areas:['堤防','河口','湾奥'],depth:'1〜30m',size:'30〜55cm',desc:'都市近郊でも大型が狙える人気魚。警戒心が強く、さまざまな釣法が発達しています。',accent:'#778b91',months:[3,4,5,6,7,8,9,10],beginner:false,kids:false},
 {slug:'kawahagi',name:'カワハギ',en:'Thread-sail filefish',scientific:'Stephanolepis cirrhifer',season:'秋〜冬',difficulty:3,danger:'低',methods:['胴突き','船釣り'],areas:['瀬戸内','和歌山','相模湾'],depth:'10〜50m',size:'15〜30cm',desc:'エサ取り名人として知られるゲーム性の高い魚。肝が大きくなる秋冬は食味も抜群です。',accent:'#d5c7a3',months:[9,10,11,12,1],beginner:false,kids:true},
 {slug:'hirame',name:'ヒラメ',en:'Olive flounder',scientific:'Paralichthys olivaceus',season:'秋〜冬',difficulty:4,danger:'歯に注意',methods:['ノマセ','ルアー','泳がせ'],areas:['砂地','サーフ','船'],depth:'5〜100m',size:'40〜90cm',desc:'砂底に潜む大型フィッシュイーター。泳がせ釣りやルアーで人気があります。',accent:'#b6a98c',months:[10,11,12,1,2,3],beginner:false,kids:false},
 {slug:'mebaru',name:'メバル',en:'Japanese rockfish',scientific:'Sebastes inermis',season:'冬〜春',difficulty:2,danger:'背びれに注意',methods:['メバリング','胴突き','ウキ釣り'],areas:['堤防','岩礁帯','瀬戸内'],depth:'2〜40m',size:'15〜30cm',desc:'春告魚とも呼ばれる人気根魚。夜のライトゲームで手軽に狙えます。',accent:'#a97b63',months:[12,1,2,3,4,5],beginner:true,kids:true},
 {slug:'aoriika',name:'アオリイカ',en:'Bigfin reef squid',scientific:'Sepioteuthis lessoniana',season:'春・秋',difficulty:3,danger:'低',methods:['エギング','ヤエン','ティップラン'],areas:['和歌山','日本海','瀬戸内'],depth:'1〜50m',size:'胴長15〜40cm',desc:'エギングの代表ターゲット。秋は数釣り、春は大型狙いが人気です。',accent:'#c6d5ce',months:[3,4,5,9,10,11],beginner:true,kids:false},
 {slug:'madako',name:'マダコ',en:'Common octopus',scientific:'Octopus sinensis',season:'初夏〜夏',difficulty:2,danger:'低',methods:['タコエギ','テンヤ'],areas:['明石','大阪湾','瀬戸内'],depth:'5〜50m',size:'0.3〜3kg',desc:'岩礁や障害物周りに潜む人気ターゲット。明石のタコは特に有名です。',accent:'#bd7d73',months:[5,6,7,8],beginner:true,kids:true},
 {slug:'kanpachi',name:'カンパチ',en:'Greater amberjack',scientific:'Seriola dumerili',season:'夏〜秋',difficulty:4,danger:'低',methods:['ジギング','泳がせ'],areas:['南紀','日本海','離島'],depth:'20〜150m',size:'50〜120cm',desc:'強烈な引きで人気の青物。大型は船からのジギングや泳がせ釣りで狙います。',accent:'#7d9fa7',months:[6,7,8,9,10],beginner:false,kids:false},
 {slug:'sawara',name:'サワラ',en:'Japanese Spanish mackerel',scientific:'Scomberomorus niphonius',season:'秋〜春',difficulty:4,danger:'鋭い歯に注意',methods:['ジギング','キャスティング','ブレードジグ'],areas:['大阪湾','瀬戸内','伊勢湾'],depth:'5〜100m',size:'50〜100cm',desc:'高速で泳ぐ大型回遊魚。鋭い歯によるラインブレイクにも注意が必要です。',accent:'#9fbcc8',months:[10,11,12,1,2,3,4],beginner:false,kids:false},
 {slug:'hamachi',name:'ハマチ',en:'Young Japanese amberjack',scientific:'Seriola quinqueradiata',season:'夏〜秋',difficulty:2,danger:'低',methods:['ノマセ','ジギング','サビキ'],areas:['明石','大阪湾','瀬戸内'],depth:'10〜80m',size:'40〜60cm',desc:'ブリの若魚。比較的数が狙いやすく、青物入門にもおすすめです。',accent:'#87a9b9',months:[7,8,9,10,11],beginner:true,kids:false},
 {slug:'gashira',name:'ガシラ',en:'Marbled rockfish',scientific:'Sebastiscus marmoratus',season:'通年',difficulty:1,danger:'ヒレに注意',methods:['穴釣り','胴突き'],areas:['大阪湾','明石','堤防'],depth:'2〜50m',size:'15〜30cm',desc:'関西でカサゴを指す呼び名。根魚入門の定番で、足元からでも狙えます。',accent:'#b57a61',months:[1,2,3,4,5,6,7,8,9,10,11,12],beginner:true,kids:true},
 {slug:'amago',name:'アマゴ',en:'Red-spotted masu salmon',scientific:'Oncorhynchus masou ishikawae',season:'春〜夏',difficulty:3,danger:'低',methods:['エサ釣り','ルアー','テンカラ'],areas:['関西の渓流','四国','中部'],depth:'渓流',size:'15〜35cm',desc:'清流に生息する美しい渓流魚。禁漁期や遊漁規則の確認が必要です。',accent:'#c7a78d',months:[3,4,5,6,7,8],beginner:false,kids:false},
 {slug:'nijimasu',name:'ニジマス',en:'Rainbow trout',scientific:'Oncorhynchus mykiss',season:'通年',difficulty:1,danger:'低',methods:['エサ釣り','ルアー','フライ'],areas:['管理釣り場','河川','湖'],depth:'表層〜中層',size:'20〜60cm',desc:'管理釣り場でも親しまれる淡水魚。釣り初心者や家族連れにも人気です。',accent:'#cfa0a8',months:[1,2,3,4,5,6,7,8,9,10,11,12],beginner:true,kids:true},
 {slug:'ayu',name:'アユ',en:'Ayu sweetfish',scientific:'Plecoglossus altivelis',season:'初夏〜秋',difficulty:4,danger:'低',methods:['友釣り','毛バリ','コロガシ'],areas:['紀ノ川','吉野川','全国の清流'],depth:'河川',size:'15〜30cm',desc:'香魚とも呼ばれる夏の川釣りの代表魚。友釣りは独特で奥深い釣法です。',accent:'#b3c9b0',months:[6,7,8,9],beginner:false,kids:false},
 {slug:'unagi',name:'ニホンウナギ',en:'Japanese eel',scientific:'Anguilla japonica',season:'夏',difficulty:2,danger:'低',methods:['ぶっこみ釣り'],areas:['河口','汽水域','河川'],depth:'浅場',size:'40〜80cm',desc:'夜に活発になる魚。地域ごとの採捕ルールや禁漁期間の確認が重要です。',accent:'#786b59',months:[6,7,8,9],beginner:false,kids:false},
 {slug:'anago',name:'マアナゴ',en:'Whitespotted conger',scientific:'Conger myriaster',season:'夏',difficulty:2,danger:'歯に注意',methods:['胴突き','ぶっこみ','船釣り'],areas:['大阪湾','東京湾','瀬戸内'],depth:'5〜100m',size:'30〜80cm',desc:'夜釣りや船釣りで人気。天ぷらや煮穴子など食味にも優れます。',accent:'#8b7766',months:[5,6,7,8,9],beginner:true,kids:false},
 {slug:'isaki',name:'イサキ',en:'Chicken grunt',scientific:'Parapristipoma trilineatum',season:'初夏',difficulty:2,danger:'低',methods:['コマセ','船釣り','フカセ'],areas:['和歌山','伊豆','九州'],depth:'20〜80m',size:'25〜45cm',desc:'梅雨時期に旬を迎える人気魚。船からのコマセ釣りで数釣りが楽しめます。',accent:'#9ea487',months:[5,6,7],beginner:true,kids:false}
]);
export const methods=[
 {slug:'sabiki',name:'サビキ釣り',level:'はじめて向け',emoji:'🪝',target:'アジ・サバ・イワシ',place:'堤防',desc:'コマセで魚を寄せ、疑似餌のついた複数針で狙う家族釣りの王道。'},
 {slug:'tachiuo-tenya',name:'タチウオテンヤ',level:'初〜中級',emoji:'🌙',target:'タチウオ',place:'船',desc:'イワシなどをテンヤに固定し、誘いと止めを繰り返してタチウオを狙います。'},
 {slug:'tai-rubber',name:'タイラバ',level:'初〜中級',emoji:'🎣',target:'マダイ',place:'船',desc:'底まで落として一定速度で巻くのが基本。初めての船釣りにも人気です。'},
 {slug:'nomase',name:'ノマセ釣り',level:'中級',emoji:'🐟',target:'ブリ・ヒラメ',place:'船・堤防',desc:'生きた小魚を泳がせて大型魚を狙う、ドキドキ感の大きい釣り。'}
];
export const spots=[
 {name:'大阪湾',area:'大阪・兵庫',type:'堤防・船',fish:'タチウオ / アジ / 青物',kids:true,toilet:true,parking:true,desc:'都市部から行きやすく、サビキからタチウオ、船の青物まで幅広い。'},
 {name:'明石海峡周辺',area:'兵庫',type:'船',fish:'マダイ / 青物 / タコ',kids:false,toilet:true,parking:true,desc:'速い潮で育つ魚が魅力。タイラバ、ジギング、ノマセの人気エリア。'},
 {name:'和歌山・紀北',area:'和歌山',type:'堤防・船',fish:'タチウオ / アジ / 青物',kids:true,toilet:true,parking:true,desc:'大阪からもアクセスしやすく、季節ごとに多彩な魚を狙えます。'},
 {name:'宮津・栗田湾',area:'京都',type:'ボート・堤防',fish:'キス / 根魚 / アジ',kids:true,toilet:false,parking:true,desc:'比較的穏やかな湾内。キスや根魚をのんびり楽しみやすいエリア。'}
];
export const gear=[
 {name:'ロッド',emoji:'🎣',desc:'釣り方・魚の大きさ・オモリ負荷から選ぶ。',cta:'ロッドの選び方'},
 {name:'リール',emoji:'⚙️',desc:'スピニング、ベイト、電動を用途別に整理。',cta:'リールを比較'},
 {name:'ライン',emoji:'🧵',desc:'PE・ナイロン・フロロの太さと使い分け。',cta:'ライン早見表'},
 {name:'仕掛け',emoji:'🪝',desc:'サビキ、テンヤ、タイラバ、胴突きを魚種から逆引き。',cta:'仕掛けを探す'},
 {name:'クーラー',emoji:'🧊',desc:'魚のサイズ・釣行時間から必要容量を選ぶ。',cta:'容量を選ぶ'},
 {name:'安全用品',emoji:'🦺',desc:'ライフジャケット、手袋、魚つかみなど。',cta:'安全装備を見る'}
];
export function getFish(slug:string){return fish.find(f=>f.slug===slug)}
