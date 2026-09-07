export type Fish = {
  slug:string; name:string; en:string; scientific:string; season:string; difficulty:number;
  danger:string; methods:string[]; areas:string[]; depth:string; size:string; desc:string;
  accent:string; months:number[]; beginner:boolean; kids:boolean;
};
export const fish: Fish[] = [
 {slug:'tachiuo',name:'タチウオ',en:'Largehead hairtail',scientific:'Trichiurus lepturus',season:'8〜12月',difficulty:3,danger:'鋭い歯に注意',methods:['テンヤ','ジギング','ウキ釣り','引き釣り'],areas:['大阪湾','明石','和歌山'],depth:'10〜100m',size:'50〜120cm',desc:'銀色に輝く刀のような体が特徴。夕方から朝にかけて活発になり、大阪湾では夏後半〜冬の人気ターゲットです。',accent:'#d9edf7',months:[8,9,10,11,12],beginner:true,kids:false},
 {slug:'aji',name:'マアジ',en:'Japanese horse mackerel',scientific:'Trachurus japonicus',season:'5〜11月',difficulty:1,danger:'低',methods:['サビキ','アジング','船釣り'],areas:['全国の港','大阪湾'],depth:'5〜100m',size:'15〜40cm',desc:'家族釣りの定番。群れに当たれば数釣りが楽しめ、食味も非常に良い魚です。',accent:'#a7d8de',months:[5,6,7,8,9,10,11],beginner:true,kids:true},
 {slug:'madai',name:'マダイ',en:'Red seabream',scientific:'Pagrus major',season:'春・秋',difficulty:3,danger:'低',methods:['タイラバ','ひとつテンヤ','コマセ'],areas:['明石','瀬戸内','和歌山'],depth:'20〜100m',size:'30〜80cm',desc:'日本を代表する人気魚。タイラバなら初心者でも大型魚とのファイトを楽しめます。',accent:'#f3a7a7',months:[3,4,5,9,10,11],beginner:true,kids:false},
 {slug:'buri',name:'ブリ',en:'Japanese amberjack',scientific:'Seriola quinqueradiata',season:'秋〜冬',difficulty:4,danger:'低',methods:['ノマセ','ジギング'],areas:['明石','紀北','日本海'],depth:'20〜100m',size:'60〜100cm',desc:'強烈な引きが魅力の大型青物。生き餌を使うノマセ釣りやジギングで狙います。',accent:'#99b9cf',months:[10,11,12,1,2],beginner:false,kids:false},
 {slug:'kisu',name:'シロギス',en:'Japanese whiting',scientific:'Sillago japonica',season:'5〜10月',difficulty:1,danger:'低',methods:['ちょい投げ','船キス'],areas:['砂浜','湾内'],depth:'2〜30m',size:'15〜30cm',desc:'砂地に暮らす美しい魚。軽い仕掛けで楽しめ、親子の釣りにもおすすめです。',accent:'#e8dfc7',months:[5,6,7,8,9,10],beginner:true,kids:true},
 {slug:'kasago',name:'カサゴ',en:'Marbled rockfish',scientific:'Sebastiscus marmoratus',season:'通年',difficulty:2,danger:'ヒレに注意',methods:['胴突き','穴釣り'],areas:['堤防','岩礁帯'],depth:'2〜50m',size:'15〜30cm',desc:'岩陰に潜む根魚の代表。足元でも狙いやすく、煮付けや唐揚げも絶品です。',accent:'#c7896e',months:[1,2,3,4,5,6,7,8,9,10,11,12],beginner:true,kids:true}
];
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
