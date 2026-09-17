import type {QuestHabitat} from './types';

// Play environments, not permissions or forecasts for an actual fishing location.
// Methods are shared public slugs; adding a compatible fish needs no habitat edit.
export const questHabitats:QuestHabitat[]=[
 {slug:'warm-ocean',name:'暖海・外洋',description:'GTの突進、キハダの長い走り、カジキのジャンプ。実釣は専門船の安全指示と地域規則を優先。',methods:['offshore-casting','marlin-trolling'],mapQuery:'船',fightDepth:25},
 {slug:'lake-pier',name:'湖の桟橋',description:'ワカサギの小さなアタリ、バスの追尾、ウキの沈みを見分ける。実釣は施設規則・外来魚の扱いを確認。',methods:['wakasagi','bass-lure','freshwater-float'],mapQuery:'ワカサギ',fightDepth:8},
 {slug:'osaka-bay-pier',name:'大阪湾・堤防',description:'サビキで群れを探す。小さなアタリを見つける最初のフィールド。',methods:['sabiki','ajing','mebaring','ana','eging','nomase','fukase','douzuki','shore-jigging','seabass-lure','chinning'],mapQuery:'大阪湾'},
 {slug:'osaka-bay-offshore',name:'大阪湾・沖',description:'棚を意識した船釣り。テンヤやジギングで大きな魚に挑む。',methods:['tachiuo-tenya','jigging','nomase','kawahagi','blade-jig','douzuki'],mapQuery:'大阪湾'},
 {slug:'sandy-beach',name:'砂浜',description:'砂地を探るちょい投げとサーフのルアーゲーム。',methods:['choinage','surf-lure','bukkomi','nage'],mapQuery:'砂浜'},
 {slug:'rocky-shore',name:'岩礁帯',description:'根の周りで待つ魚を、穴釣り・メバリングで探す。',methods:['ana','mebaring','eging','fukase','douzuki','rockfish-lure','ishidai-bottom'],mapQuery:'和歌山'},
 {slug:'akashi',name:'明石・沖',description:'タイラバ、ノマセ、タコエギ。釣法の違いを楽しもう。',methods:['tai-rubber','nomase','jigging','tako-egi','hitotsu-tenya'],mapQuery:'明石'},
 {slug:'wakayama',name:'和歌山・沿岸',description:'エギングから船釣りまで、幅広い組み合わせを試す。',methods:['eging','tiprun','sabiki','kawahagi','jigging','boat-kisu','casting','fukase','otoshikomi','isaki-komase','rockfish-lure','ika-sutte','ika-metal','kamasu-lure','sayori-uki'],mapQuery:'和歌山'},
 {slug:'clear-river',name:'清流',description:'流れを読むアマゴ釣りと、おとりを送るアユ友釣り。実際の入川には遊漁規則の確認が必要です。',methods:['ayu-tomozuri','freshwater-bait','trout-lure'],mapQuery:'日高川'},
 {slug:'trout-pond',name:'管理池',description:'スプーンや餌でマスを誘う。深さと速度をそろえて反応を探す。',methods:['trout-lure','freshwater-bait'],mapQuery:'マス'},
 {slug:'northern-coast',name:'北の沿岸',description:'根の際を探り、クロソイの底へ戻る引きに対応する。実際の釣り場と利用規則はMAPで確認。',methods:['rockfish-lure','douzuki'],mapQuery:'北海道',fightDepth:12},
 {slug:'shelf-offshore',name:'砂泥底・沖',description:'天秤仕掛けでアマダイやメダイを狙う船の環境。棚と底取りを意識する。',methods:['amadai-tenbin','medai-komase'],mapQuery:'船',fightDepth:75},
 {slug:'deep-offshore',name:'中深場・深場',description:'キンメダイ・アカムツ・クロムツを深い層から巻き上げる。ゲームの水深と時間は実釣を簡略化しています。',methods:['deepsea-douzuki'],mapQuery:'船',fightDepth:180},
];
