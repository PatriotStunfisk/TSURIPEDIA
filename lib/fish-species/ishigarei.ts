import {defineFishSpecies} from './define';
import {cookedRecipe} from './cooked-recipes';
// Species reference: https://www.knsk-osaka.jp/zukan/zukan_database/tansui/2550b2c26477834/5850b5aa3293272.html (checked 2026-09-15)
const fish={slug:"ishigarei",name:"イシガレイ"};
export default defineFishSpecies({
  representativeRecipes: ["sashimi","nitsuke","karaage","meuniere"],
  "base": {
    "slug": "ishigarei",
    "name": "イシガレイ",
    "en": "Stone flounder",
    "scientific": "Kareius bicoloratus",
    "season": "夏〜秋",
    "difficulty": 3,
    "danger": "投げる前に後方と左右を確認します。重いオモリは竿の負荷と力糸に合わせ、立入禁止の岸壁から投げません。",
    "methods": [
      "カレイの投げ釣り"
    ],
    "methodSlugs": [
      "nage"
    ],
    "guideSlugs": [
      "ishigarei-starting-guide"
    ],
    "relatedSlugs": [
      "makogarei",
      "hirame"
    ],
    "areas": [
      "沿岸の砂泥底や河口周辺。底質の変化を探ります。"
    ],
    "depth": "沿岸・河口近くの砂泥底",
    "size": "25〜50cm",
    "desc": "平たい体の両目が通常右側に集まり、体表に硬い石状の骨板があります。マコガレイとの比較では、この骨板が大切な手掛かりです。ヒラメとの区別も口や体形を合わせて見ます。",
    "accent": "#438baf",
    "months": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "beginner": false,
    "kids": false
  },
  "detail": {
    "family": "カレイ科",
    "genus": "イシガレイ属",
    "aliases": [],
    "habitat": "沿岸の砂泥底や河口周辺。底質の変化を探ります。",
    "diet": "ゴカイ類・小型の甲殻類・貝類",
    "behavior": "底に身を寄せて待ち、掛かっても底近くで粘ります。",
    "lifespan": "海域や研究資料により異なるため、ここでは一律の年数を示していません。",
    "taste": "白身は煮付けや唐揚げ向き。独特の香りが気になる場合は、皮の扱いと下処理を丁寧にします。",
    "cooking": [
      "煮付け",
      "唐揚げ",
      "ムニエル",
      "酒蒸し"
    ],
    "seasonNote": "夏〜秋は食味や釣行を考える目安です。実際の釣期・出船期間は海域や施設の情報を確認してください。",
    "beginnerTip": "砂泥底の許可区域で、投入後は糸ふけを取って穂先を見ます。動かしすぎず間を置き、反応がなければ位置を少し変えます。海藻や根が続く場所へ引きずり続けないようにします。",
    "safety": "投げる前に後方と左右を確認します。重いオモリは竿の負荷と力糸に合わせ、立入禁止の岸壁から投げません。",
    "body": "平たい体の両目が通常右側に集まり、体表に硬い石状の骨板があります。マコガレイとの比較では、この骨板が大切な手掛かりです。ヒラメとの区別も口や体形を合わせて見ます。",
    "fishing": "砂泥底の許可区域で、投入後は糸ふけを取って穂先を見ます。動かしすぎず間を置き、反応がなければ位置を少し変えます。海藻や根が続く場所へ引きずり続けないようにします。",
    "trivia": "名前の「石」は硬い骨板に由来します。カレイ類全体を一種としてまとめないための識別点です。"
  },
  "media": {
    "image": "/images/fish/ishigarei-real.png"
  },
  "quest": {
    "fightProfile": "bottom",
    "stamina": 63,
    "runPower": 53,
    "fightPower": 53,
    "swimSpeed": 0.8,
    "wariness": 0.24,
    "habitats": [
      "sandy-beach"
    ],
    "hook": {
      "mouthAnchor": {
        "x": 0.07,
        "y": 0.52
      },
      "modelAnchor": {
        "x": 0.07,
        "y": 0.48,
        "z": 0.5
      }
    }
  },
  "launch": {
    "catchPhrase": "イシガレイを見分けて、釣り方から食卓へ",
    "identify": [
      "通常は目が体の右側",
      "体表に硬い石状の骨板がある",
      "マコガレイのような鱗の感触だけで判断しない"
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
        "label": "カレイの投げ釣り",
        "href": "/methods/nage"
      }
    ],
    "spotFocus": "沿岸の砂泥底や河口周辺。底質の変化を探ります。 対象魚・利用できる釣法・最新の開放情報を確認します。"
  },
  "cooking": {
    "prep": [
      "持ち帰る分を速やかに冷やし、調理まで低温を保ちます。",
      "頭・内臓を除き、腹を洗って水気を拭きます。",
      "骨板を避けて五枚おろしにし、必要に応じて皮を引きます。",
      "腹骨と小骨を除きます。骨板を包丁で無理に押し切らず、魚店の下処理も利用します。",
      "生魚に使った器具を洗い、加熱した料理とは分けます。"
    ],
    "recipes": [...(["nitsuke","karaage","meuniere","sakamushi"].map(slug=>cookedRecipe(fish,slug,"骨板・皮・骨を除いた身","骨板が残らないように皮を除いた身を使い、薄い部分の加熱しすぎを防ぎます。"))),{
  "slug": "sashimi",
  "name": "刺身",
  "preparation": "raw",
  "summary": "硬い骨板のある皮を外した柵を薄く切ります。皮の処理と細かな骨の確認は販売店や専門家に任せます。",
  "ingredients": [
    "2人分：生食用として処理・管理されたイシガレイの柵 150〜200g",
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
