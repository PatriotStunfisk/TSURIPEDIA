import {defineFishSpecies} from './define';
import {cookedRecipe} from './cooked-recipes';
// Species reference: https://www.honda.co.jp/fishing/picture-book/kuromutsu/ (checked 2026-09-15)
const fish={slug:"kuromutsu",name:"クロムツ"};
export default defineFishSpecies({
  "base": {
    "slug": "kuromutsu",
    "name": "クロムツ",
    "en": "Japanese bluefish",
    "scientific": "Scombrops gilberti",
    "season": "冬を中心に地域差あり",
    "difficulty": 4,
    "danger": "鋭い歯を避けてプライヤーを使います。深場仕掛けの針数やオモリは乗船先へ合わせます。",
    "methods": [
      "中深場・深場の胴突き"
    ],
    "methodSlugs": [
      "deepsea-douzuki"
    ],
    "guideSlugs": [
      "kuromutsu-starting-guide"
    ],
    "relatedSlugs": [
      "akamutsu",
      "kinmedai",
      "medai"
    ],
    "areas": [
      "沖合の岩礁域や中深場。船の対象魚表示と海域を確認します。"
    ],
    "depth": "沖合の岩礁・中深場",
    "size": "30〜50cm",
    "desc": "暗い褐色の体と大きな目、鋭い歯を持つ魚です。アカムツの色違いや別名ではありません。また、よく似たムツとの厳密な識別は体色だけでは難しく、各部の特徴を確認する必要があります。",
    "accent": "#438baf",
    "months": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "beginner": false,
    "kids": false
  },
  "detail": {
    "family": "ムツ科",
    "genus": "ムツ属",
    "aliases": [],
    "habitat": "沖合の岩礁域や中深場。船の対象魚表示と海域を確認します。",
    "diet": "小魚・イカ類・甲殻類",
    "behavior": "餌を捕らえると引き込み、巻き上げ途中にも抵抗します。",
    "lifespan": "海域や研究資料により異なるため、ここでは一律の年数を示していません。",
    "taste": "脂のある白身と皮を生かした煮付けや塩焼きが向きます。",
    "cooking": [
      "煮付け",
      "塩焼き",
      "唐揚げ",
      "潮汁"
    ],
    "seasonNote": "冬を中心に地域差ありは食味や釣行を考える目安です。実際の釣期・出船期間は海域や施設の情報を確認してください。",
    "beginnerTip": "餌をまっすぐ付けて回転を減らし、指示された棚で待ちます。歯に触れたハリスは毎回見て、ざらつく部分があれば交換します。",
    "safety": "鋭い歯を避けてプライヤーを使います。深場仕掛けの針数やオモリは乗船先へ合わせます。",
    "body": "暗い褐色の体と大きな目、鋭い歯を持つ魚です。アカムツの色違いや別名ではありません。また、よく似たムツとの厳密な識別は体色だけでは難しく、各部の特徴を確認する必要があります。",
    "fishing": "餌をまっすぐ付けて回転を減らし、指示された棚で待ちます。歯に触れたハリスは毎回見て、ざらつく部分があれば交換します。",
    "trivia": "市場でムツ類をまとめて扱うこともありますが、このページは学名Scombrops gilbertiを対象にします。"
  },
  "media": {
    "image": "/images/fish/kuromutsu-real.png"
  },
  "quest": {
    "fightProfile": "diver",
    "stamina": 75,
    "runPower": 67,
    "fightPower": 67,
    "swimSpeed": 0.8,
    "wariness": 0.32,
    "habitats": [
      "deep-offshore"
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
    "catchPhrase": "クロムツを見分けて、釣り方から食卓へ",
    "identify": [
      "暗褐色の体と大きな目",
      "口に鋭い歯が並ぶ",
      "ムツとの区別は体色だけで断定しない"
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
        "label": "中深場・深場の胴突き",
        "href": "/methods/deepsea-douzuki"
      }
    ],
    "spotFocus": "沖合の岩礁域や中深場。船の対象魚表示と海域を確認します。 対象魚・利用できる釣法・最新の開放情報を確認します。"
  },
  "cooking": {
    "prep": [
      "持ち帰る分を速やかに冷やし、調理まで低温を保ちます。",
      "魚つかみで保持し、歯を避けて鱗・えら・内臓を除きます。",
      "三枚におろし、腹骨と血合い骨を取り除きます。",
      "皮を残して切り分け、表面の水分を拭きます。",
      "生魚に使った器具を洗い、加熱した料理とは分けます。"
    ],
    "recipes": ["nitsuke","shioyaki","karaage","ushiojiru"].map(slug=>cookedRecipe(fish,slug,"骨を除いた皮付きの身","歯と頭部を避けて下処理し、骨を除いた皮付きの身を使います。"))
  }
});
