import type {QuestHabitat} from './types';

// Play environments, not permissions or forecasts for an actual fishing location.
// Methods are shared public slugs; adding a compatible fish needs no habitat edit.
export const questHabitats:QuestHabitat[]=[
 {slug:'osaka-bay-pier',name:'大阪湾・堤防',description:'サビキで群れを探す。小さなアタリを見つける最初のフィールド。',methods:['sabiki','ajing','mebaring','ana','eging','nomase','fukase','douzuki','shore-jigging'],mapQuery:'大阪湾'},
 {slug:'osaka-bay-offshore',name:'大阪湾・沖',description:'棚を意識した船釣り。テンヤやジギングで大きな魚に挑む。',methods:['tachiuo-tenya','jigging','nomase','kawahagi','blade-jig','douzuki'],mapQuery:'大阪湾'},
 {slug:'sandy-beach',name:'砂浜',description:'砂地を探るちょい投げとサーフのルアーゲーム。',methods:['choinage','surf-lure','bukkomi'],mapQuery:'砂浜'},
 {slug:'rocky-shore',name:'岩礁帯',description:'根の周りで待つ魚を、穴釣り・メバリングで探す。',methods:['ana','mebaring','eging','fukase','douzuki'],mapQuery:'和歌山'},
 {slug:'akashi',name:'明石・沖',description:'タイラバ、ノマセ、タコエギ。釣法の違いを楽しもう。',methods:['tai-rubber','nomase','jigging','tako-egi','hitotsu-tenya'],mapQuery:'明石'},
 {slug:'wakayama',name:'和歌山・沿岸',description:'エギングから船釣りまで、幅広い組み合わせを試す。',methods:['eging','tiprun','sabiki','kawahagi','jigging','boat-kisu','casting','fukase','otoshikomi'],mapQuery:'和歌山'},
];
