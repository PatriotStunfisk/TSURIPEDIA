export const launchFishSlugs=['tachiuo','aji','saba','buri','kisu','kasago','madai'] as const;
export type LaunchFishSlug=typeof launchFishSlugs[number];

type LaunchFishExtra={
  catchPhrase:string;
  identify:string[];
  imageNotes:[string,string,string,string];
  related:string[];
  methodLinks:{label:string;href:string}[];
  spotFocus:string;
};

export const launchFish:Record<LaunchFishSlug,LaunchFishExtra>={
  tachiuo:{catchPhrase:'銀の刀、海を駆ける。',identify:['鏡のように銀白色で鱗がほとんどない','非常に細長く、尾びれ・腹びれが退化','口が大きく、鋭い犬歯状の歯が並ぶ','長い背びれが頭の後ろから尾端近くまで続く'],imageNotes:['全身：細長い銀色の体型を確認','頭部：鋭い歯と大きな目に注目','生息：夕方〜夜に中層へ浮上しやすい','食味：皮目を活かした炙りや塩焼きが定番'],related:['サワラ','カマス','アナゴ'],methodLinks:[{label:'船タチウオテンヤ',href:'/methods/tachiuo-tenya'},{label:'ジギング',href:'/methods'},{label:'ウキ釣り',href:'/methods'}],spotFocus:'大阪湾・明石・和歌山の船釣り'},
  aji:{catchPhrase:'身近で、奥深い。海釣りの入口。',identify:['尾の付け根に硬いゼイゴが並ぶ','体側に黄色味のある線が見えることがある','胸びれが比較的長い','細身でよく泳ぐ回遊魚らしい体型'],imageNotes:['全身：ゼイゴと体側線を確認','尾部：マアジ特有のゼイゴを拡大','生息：港湾から沖の中層を群れで回遊','食味：刺身・たたき・フライまで万能'],related:['マサバ','マイワシ','メバル'],methodLinks:[{label:'サビキ釣り',href:'/methods/sabiki'},{label:'アジング',href:'/methods'},{label:'船の胴突き',href:'/methods'}],spotFocus:'大阪湾・和歌山・全国の港'},
  saba:{catchPhrase:'速い、強い、うまい。群れを当てる快感。',identify:['背中に青緑色の波状模様','腹側は銀白色で比較的すっきり','尾びれが深く二叉する','細長い紡錘形で高速遊泳向き'],imageNotes:['全身：波状模様と紡錘形を確認','背部：マサバ特有の縞模様を拡大','生息：表層〜中層を大群で回遊','食味：鮮度管理して塩焼き・しめ鯖へ'],related:['マアジ','ゴマサバ','ブリ'],methodLinks:[{label:'サビキ釣り',href:'/methods/sabiki'},{label:'ライトジギング',href:'/methods'},{label:'船釣り',href:'/methods'}],spotFocus:'大阪湾・紀北・全国沿岸'},
  buri:{catchPhrase:'一度走れば止まらない。青物の王道。',identify:['体側に明瞭な黄色いライン','太く強い紡錘形の体','目から口元へ黄色味が続くことがある','成長段階で呼び名が変わる出世魚'],imageNotes:['全身：黄色い体側線と厚い魚体','頭部：大型青物らしい強い顎','生息：ベイトを追って沿岸〜沖を回遊','食味：寒ブリは脂が強く、しゃぶしゃぶにも'],related:['ハマチ','カンパチ','ヒラマサ'],methodLinks:[{label:'ノマセ釣り',href:'/methods/nomase'},{label:'ジギング',href:'/methods'}],spotFocus:'明石海峡・紀北・日本海'},
  kisu:{catchPhrase:'砂浜の女王。軽い仕掛けで楽しむ。',identify:['細長くスマートな体型','体色は淡い黄褐色〜銀白色','口が小さく、砂底の小動物を食べる','透明感のある上品な魚体'],imageNotes:['全身：細身で淡い体色を確認','口元：小さな口と砂底適応を確認','生息：砂底の浅場を群れで移動','食味：天ぷらの代表魚'],related:['メゴチ','ハゼ','カレイ'],methodLinks:[{label:'ちょい投げ',href:'/methods'},{label:'船キス',href:'/methods'}],spotFocus:'砂浜・湾内・ボート釣り'},
  kasago:{catchPhrase:'足元の岩陰に潜む、根魚の定番。',identify:['大きな口と頭部','赤褐色〜茶色のまだら模様','背びれに鋭い棘','岩に紛れる凹凸のある体表'],imageNotes:['全身：大きな頭と根魚体型','背びれ：鋭い棘を確認','生息：岩礁・テトラ・根周りに定位','食味：煮付け・唐揚げ・汁物が絶品'],related:['メバル','ソイ','ハタ類'],methodLinks:[{label:'胴突き釣り',href:'/methods'},{label:'穴釣り',href:'/methods'}],spotFocus:'堤防・テトラ・岩礁帯'},
  madai:{catchPhrase:'桜色の王様。巻くだけでも出会える。',identify:['桜色〜赤色の高い体高','体側に青い小斑点','尾びれ後縁が黒っぽく見える','大型ほど頭部が張り出す'],imageNotes:['全身：高い体高と桜色の魚体','体側：青い小斑点を拡大','生息：岩礁・砂礫底・瀬周り','食味：刺身・塩焼き・鯛めしまで万能'],related:['チダイ','キダイ','クロダイ'],methodLinks:[{label:'タイラバ',href:'/methods/tai-rubber'},{label:'ひとつテンヤ',href:'/methods'},{label:'コマセ釣り',href:'/methods'}],spotFocus:'明石・瀬戸内・和歌山'}
};

export function isLaunchFish(slug:string):slug is LaunchFishSlug{return (launchFishSlugs as readonly string[]).includes(slug)}
