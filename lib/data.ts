import {fishSpecies} from '@/lib/fish-species';
import {uniqueFishSlugs} from '@/lib/fish-species/define';
import type {Fish} from '@/lib/fish-species/types';
export type {Fish} from '@/lib/fish-species/types';

export const fish:Fish[]=uniqueFishSlugs(fishSpecies.map(species=>species.base));
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
