import {defineFishSpecies} from './define';
import {cookedRecipe} from './cooked-recipes';
// Species reference: https://www.pref.kyoto.jp/kaiyo/medai.html (checked 2026-09-15)
const fish={slug:"medai",name:"メダイ"};
export default defineFishSpecies({
  representativeRecipes: ["sashimi","misozuke","teriyaki","meuniere"],
  "base": {
    "slug": "medai",
    "name": "メダイ",
    "en": "Japanese butterfish",
    "scientific": "Hyperoglyphe japonica",
    "season": "冬〜春",
    "difficulty": 4,
    "danger": "体表が滑るため魚を安定させて扱います。大型魚を糸で持ち上げず、タモとプライヤーを用意します。",
    "methods": [
      "メダイの天秤コマセ釣り"
    ],
    "methodSlugs": [
      "medai-komase"
    ],
    "guideSlugs": [
      "medai-starting-guide"
    ],
    "relatedSlugs": [
      "kuromutsu",
      "kinmedai"
    ],
    "areas": [
      "成魚は沖合の深場。若魚は流れ藻などの近くに見られます。"
    ],
    "depth": "成魚は沖合の水深100m以深など",
    "size": "40〜80cm",
    "desc": "大きな目と丸みのある暗褐色の体を持ち、体表に粘液が多い魚です。若魚は流れ藻に付き、成長すると深い場所へ移ります。マダイとは異なる仲間です。",
    "accent": "#438baf",
    "months": [
      1,
      2,
      3,
      4,
      5,
      10,
      11,
      12
    ],
    "beginner": false,
    "kids": false
  },
  "detail": {
    "family": "イボダイ科",
    "genus": "メダイ属",
    "aliases": [],
    "habitat": "成魚は沖合の深場。若魚は流れ藻などの近くに見られます。",
    "diet": "小魚・甲殻類・イカ類",
    "behavior": "掛かると重く強く走り、船上へ寄せるまで一定の張りが必要です。",
    "lifespan": "海域や研究資料により異なるため、ここでは一律の年数を示していません。",
    "taste": "白身は味噌漬けや照り焼きに合い、大きな切り身で料理しやすい魚です。",
    "cooking": [
      "味噌漬け焼き",
      "照り焼き",
      "ムニエル",
      "フライ"
    ],
    "seasonNote": "冬〜春は食味や釣行を考える目安です。実際の釣期・出船期間は海域や施設の情報を確認してください。",
    "beginnerTip": "指示棚とコマセの量をそろえ、仕掛けを隣へ流さないよう糸の角度を見ます。大きい魚は無理に抜き上げず、タモの準備をしてから寄せます。",
    "safety": "体表が滑るため魚を安定させて扱います。大型魚を糸で持ち上げず、タモとプライヤーを用意します。",
    "body": "大きな目と丸みのある暗褐色の体を持ち、体表に粘液が多い魚です。若魚は流れ藻に付き、成長すると深い場所へ移ります。マダイとは異なる仲間です。",
    "fishing": "指示棚とコマセの量をそろえ、仕掛けを隣へ流さないよう糸の角度を見ます。大きい魚は無理に抜き上げず、タモの準備をしてから寄せます。",
    "trivia": "「タイ」と付いてもタイ科ではありません。粘液を取り除いてから下処理すると、包丁と魚を安定させやすくなります。"
  },
  "media": {
    "image": "/images/fish/medai-real.png"
  },
  "quest": {
    "fightProfile": "runner",
    "stamina": 88,
    "runPower": 80,
    "fightPower": 80,
    "swimSpeed": 1.25,
    "wariness": 0.32,
    "habitats": [
      "shelf-offshore"
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
    "catchPhrase": "メダイを見分けて、釣り方から食卓へ",
    "identify": [
      "丸みのある暗褐色の体",
      "大きな目と粘液の多い体表",
      "成魚と流れ藻に付く若魚では姿が異なる"
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
        "label": "メダイの天秤コマセ釣り",
        "href": "/methods/medai-komase"
      }
    ],
    "spotFocus": "成魚は沖合の深場。若魚は流れ藻などの近くに見られます。 対象魚・利用できる釣法・最新の開放情報を確認します。"
  },
  "cooking": {
    "prep": [
      "持ち帰る分を速やかに冷やし、調理まで低温を保ちます。",
      "体表の粘液を流水で落とし、鱗・えら・内臓を除きます。",
      "魚が滑らないよう固定し、三枚におろします。",
      "腹骨・小骨を除いて厚みをそろえた切り身にします。",
      "生魚に使った器具を洗い、加熱した料理とは分けます。"
    ],
    "recipes": [...(["misozuke","teriyaki","meuniere","fry"].map(slug=>cookedRecipe(fish,slug,"粘液・鱗・骨を除いた切り身","身の厚みをそろえ、皮や小骨の残りを確認してから調理します。"))),{
  "slug": "sashimi",
  "name": "刺身",
  "preparation": "raw",
  "summary": "厚い身を切りやすい柵に整え、繊維を断つ方向に切ります。加熱とは違う弾力を楽しめます。",
  "ingredients": [
    "2人分：生食用として処理・管理されたメダイの柵 150〜200g",
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
