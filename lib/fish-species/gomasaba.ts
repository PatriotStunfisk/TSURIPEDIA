import {defineFishSpecies} from './define';
import {cookedRecipe} from './cooked-recipes';
// Species reference: https://www.pref.kanagawa.jp/docs/mx7/cnt/f430693/zukan-gomasaba.html (checked 2026-09-15)
const fish={slug:"gomasaba",name:"ゴマサバ"};
export default defineFishSpecies({
  representativeRecipes: ["misoni","tatsuta","shioyaki","tomato"],
  "base": {
    "slug": "gomasaba",
    "name": "ゴマサバ",
    "en": "Blue mackerel",
    "scientific": "Scomber australasicus",
    "season": "夏〜秋",
    "difficulty": 2,
    "danger": "常温放置を避け、釣り場から低温を保ちます。ヒスタミンは加熱しても除けないため、傷んだ魚を料理で救済しません。",
    "methods": [
      "サビキ",
      "ジギング"
    ],
    "methodSlugs": [
      "sabiki",
      "jigging"
    ],
    "guideSlugs": [
      "gomasaba-starting-guide"
    ],
    "relatedSlugs": [
      "saba",
      "sawara"
    ],
    "areas": [
      "黒潮の影響を受ける暖かい沿岸から沖合。群れで移動します。"
    ],
    "depth": "暖かい沿岸〜沖の表層・中層",
    "size": "25〜45cm",
    "desc": "背に波状の模様があり、体側の下半分にも暗色の小斑点が散るサバです。マサバとは別種で、体が丸みを帯びる傾向がありますが、体形や模様の一項目だけで判断しません。",
    "accent": "#438baf",
    "months": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "beginner": true,
    "kids": false
  },
  "detail": {
    "family": "サバ科",
    "genus": "サバ属",
    "aliases": [
      "マルサバ"
    ],
    "habitat": "黒潮の影響を受ける暖かい沿岸から沖合。群れで移動します。",
    "diet": "小魚や浮遊性の甲殻類",
    "behavior": "群れで広く回遊し、掛かると横方向へ走ります。",
    "lifespan": "海域や研究資料により異なるため、ここでは一律の年数を示していません。",
    "taste": "脂の量は個体差があり、味噌煮や竜田揚げなどの加熱料理に合います。",
    "cooking": [
      "味噌煮",
      "竜田揚げ",
      "塩焼き",
      "トマト煮"
    ],
    "seasonNote": "夏〜秋は食味や釣行を考える目安です。実際の釣期・出船期間は海域や施設の情報を確認してください。",
    "beginnerTip": "群れが来たら一度に多く掛けるより、仕掛けを短時間で回収して絡みを防ぎます。魚は堤防へ放置せず、針を外したら速やかに冷やします。",
    "safety": "常温放置を避け、釣り場から低温を保ちます。ヒスタミンは加熱しても除けないため、傷んだ魚を料理で救済しません。",
    "body": "背に波状の模様があり、体側の下半分にも暗色の小斑点が散るサバです。マサバとは別種で、体が丸みを帯びる傾向がありますが、体形や模様の一項目だけで判断しません。",
    "fishing": "群れが来たら一度に多く掛けるより、仕掛けを短時間で回収して絡みを防ぎます。魚は堤防へ放置せず、針を外したら速やかに冷やします。",
    "trivia": "マルサバはゴマサバの呼び名の一つです。マサバの写真をゴマサバへ流用して区別を曖昧にしません。"
  },
  "media": {
    "image": "/images/fish/gomasaba-real.png"
  },
  "quest": {
    "fightProfile": "runner",
    "stamina": 61,
    "runPower": 56,
    "fightPower": 56,
    "swimSpeed": 1.25,
    "wariness": 0.16,
    "habitats": [
      "wakayama",
      "osaka-bay-offshore"
    ],
    "hook": {
      "mouthAnchor": {
        "x": 0.035,
        "y": 0.52
      },
      "modelAnchor": {
        "x": 0.035,
        "y": 0.48,
        "z": 0.5
      }
    }
  },
  "launch": {
    "catchPhrase": "ゴマサバを見分けて、釣り方から食卓へ",
    "identify": [
      "体側下部にゴマ状の小斑点",
      "背には波状の暗色模様",
      "マサバと迷う個体は全身と腹側を合わせて確認"
    ],
    "imageNotes": [
      "全身の形",
      "ひれの配置",
      "口と目",
      "安全な扱い"
    ],
    "related": [],
    "methodLinks": [
      {
        "label": "サビキ",
        "href": "/methods/sabiki"
      },
      {
        "label": "ジギング",
        "href": "/methods/jigging"
      }
    ],
    "spotFocus": "黒潮の影響を受ける暖かい沿岸から沖合。群れで移動します。 対象魚・利用できる釣法・最新の開放情報を確認します。"
  },
  "cooking": {
    "prep": [
      "持ち帰る分を速やかに冷やし、調理まで低温を保ちます。",
      "低温で持ち帰り、えらと内臓を速やかに除きます。",
      "血合いを洗って水気を取り、三枚におろします。",
      "腹骨・血合い骨を除き、調理する分以外は冷蔵庫へ戻します。",
      "生魚に使った器具を洗い、加熱した料理とは分けます。"
    ],
    "recipes": ["misoni","tatsuta","shioyaki","tomato"].map(slug=>cookedRecipe(fish,slug,"骨を除いた皮付きの切り身","冷蔵管理を保ち、しょうがや味噌を使っても鮮度管理の代わりにしません。"))
  }
});
