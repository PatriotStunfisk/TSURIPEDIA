import {defineFishSpecies} from './define';
import {cookedRecipe} from './cooked-recipes';
// Species reference: https://www.pref.kanagawa.jp/docs/mx7/cnt/f430693/zukan-kinmedai.html (checked 2026-09-15)
const fish={slug:"kinmedai",name:"キンメダイ"};
export default defineFishSpecies({
  representativeRecipes: ["sashimi","nitsuke","shioyaki","sakamushi"],
  "base": {
    "slug": "kinmedai",
    "name": "キンメダイ",
    "en": "Splendid alfonsino",
    "scientific": "Beryx splendens",
    "season": "冬を中心に地域差あり",
    "difficulty": 5,
    "danger": "多点針と重いオモリを足へ絡ませないよう並べ、投入中は糸に手を巻き付けません。資源管理の期間・尾数等も確認します。",
    "methods": [
      "中深場・深場の胴突き"
    ],
    "methodSlugs": [
      "deepsea-douzuki"
    ],
    "guideSlugs": [
      "kinmedai-starting-guide"
    ],
    "relatedSlugs": [
      "akamutsu",
      "kuromutsu"
    ],
    "areas": [
      "水深100m以深の岩礁域など。釣る深さは海域・船で大きく変わります。"
    ],
    "depth": "水深100m以深の沖合",
    "size": "25〜45cm",
    "desc": "鮮やかな赤い体と大きな目が特徴です。体は側扁し、目は光の当たり方で金色に見えます。マダイとは別の仲間で、沖の深場で群れを作ります。",
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
    "family": "キンメダイ科",
    "genus": "キンメダイ属",
    "aliases": [
      "キンメ"
    ],
    "habitat": "水深100m以深の岩礁域など。釣る深さは海域・船で大きく変わります。",
    "diet": "小魚・甲殻類・イカ類",
    "behavior": "深場で群れを作り、仕掛けを一定の棚に保つことが重要です。",
    "lifespan": "海域や研究資料により異なるため、ここでは一律の年数を示していません。",
    "taste": "皮と身の間の脂を生かす煮付けが定番。皮付きの焼き物や蒸し物にも向きます。",
    "cooking": [
      "煮付け",
      "塩焼き",
      "酒蒸し",
      "炊き込みご飯"
    ],
    "seasonNote": "冬を中心に地域差ありは食味や釣行を考える目安です。実際の釣期・出船期間は海域や施設の情報を確認してください。",
    "beginnerTip": "最初はレンタルのある専門船で糸巻量・針数・オモリを確認します。投入順を守り、アタリが出ても独断で高速巻きせず船長の指示を待ちます。",
    "safety": "多点針と重いオモリを足へ絡ませないよう並べ、投入中は糸に手を巻き付けません。資源管理の期間・尾数等も確認します。",
    "body": "鮮やかな赤い体と大きな目が特徴です。体は側扁し、目は光の当たり方で金色に見えます。マダイとは別の仲間で、沖の深場で群れを作ります。",
    "fishing": "最初はレンタルのある専門船で糸巻量・針数・オモリを確認します。投入順を守り、アタリが出ても独断で高速巻きせず船長の指示を待ちます。",
    "trivia": "神奈川県の資料では長い寿命も報告されています。深場の魚は釣れた数だけ持ち帰る前提にせず、地域の資源管理を確認します。"
  },
  "media": {
    "image": "/images/fish/kinmedai-real.png"
  },
  "quest": {
    "fightProfile": "balanced",
    "stamina": 78,
    "runPower": 58,
    "fightPower": 58,
    "swimSpeed": 0.8,
    "wariness": 0.4,
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
    "catchPhrase": "キンメダイを見分けて、釣り方から食卓へ",
    "identify": [
      "赤い体と非常に大きな目",
      "側扁した体と二又の尾",
      "名前のタイではなく体形とひれを確認"
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
    "spotFocus": "水深100m以深の岩礁域など。釣る深さは海域・船で大きく変わります。 対象魚・利用できる釣法・最新の開放情報を確認します。"
  },
  "cooking": {
    "prep": [
      "持ち帰る分を速やかに冷やし、調理まで低温を保ちます。",
      "鱗・えら・内臓を除き、腹の中を洗います。",
      "三枚におろし、腹骨・血合い骨を取り除きます。",
      "皮を残して切り分け、煮付け用は表面に熱湯をかけて汚れを取ります。",
      "生魚に使った器具を洗い、加熱した料理とは分けます。"
    ],
    "recipes": [...(["nitsuke","shioyaki","sakamushi","takikomi"].map(slug=>cookedRecipe(fish,slug,"鱗と骨を除いた皮付きの切り身","赤い皮を残す切り身で作り、煮ている間は箸で動かしすぎないようにします。"))),{
  "slug": "sashimi",
  "name": "刺身",
  "preparation": "raw",
  "summary": "脂のある白身を皮なしの刺身で味わいます。皮を炙るだけでは内部の寄生虫対策になりません。",
  "ingredients": [
    "2人分：生食用として処理・管理されたキンメダイの柵 150〜200g",
    "大葉・薬味 適量",
"しょうゆ 適量"
  ],
  "steps": [
    "生食用の表示・処理条件と消費期限を確認。不明なら加熱料理へ変更する。",
    "清潔な包丁・まな板を用意し、調理直前まで冷蔵する。",
    "皮・骨を確認し、冷たい身を一方向に引いて食べやすい厚さに切る。",
    "冷やした皿に盛り、薬味を添えてすぐに食べる。"
  ],
  "tips": [
    "釣った直後・見た目・匂いだけで安全は判断できません。内臓を生で添えません。",
    "酢・塩・わさび・表面の炙りは寄生虫対策になりません。",
    "寄生虫対策済みでも衛生管理は必要です。購入先に処理条件を確認してください。"
  ]
}]
  }
});
