import {defineFishSpecies} from './define';
import {cookedRecipe} from './cooked-recipes';
// Species reference: https://zukan.com/fish/internal80 (checked 2026-09-15)
const fish={slug:"sayori",name:"サヨリ"};
export default defineFishSpecies({
  representativeRecipes: ["sashimi","tempura","nanban","shioyaki"],
  "base": {
    "slug": "sayori",
    "name": "サヨリ",
    "en": "Japanese halfbeak",
    "scientific": "Hyporhamphus sajori",
    "season": "冬〜春",
    "difficulty": 2,
    "danger": "細く尖った下あごと針先に注意し、魚をつかむ向きを確認します。まき餌や投げ釣りの可否は施設規則を優先。",
    "methods": [
      "サヨリのウキ釣り"
    ],
    "methodSlugs": [
      "sayori-uki"
    ],
    "guideSlugs": [
      "sayori-starting-guide"
    ],
    "relatedSlugs": [
      "katakuchi",
      "akakamas"
    ],
    "areas": [
      "波の穏やかな沿岸・湾内の表層。接岸時期は海域で変わります。"
    ],
    "depth": "沿岸のごく浅い表層",
    "size": "20〜35cm",
    "desc": "細長い銀色の体と、上あごより極端に長い下あごが特徴です。群れが表層を泳いでいても、足元の影や仕掛けの落下で離れることがあります。",
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
    "beginner": true,
    "kids": false
  },
  "detail": {
    "family": "サヨリ科",
    "genus": "サヨリ属",
    "aliases": [
      "針魚"
    ],
    "habitat": "波の穏やかな沿岸・湾内の表層。接岸時期は海域で変わります。",
    "diet": "小さな甲殻類などの動物プランクトン",
    "behavior": "水面近くで群れを作り、小さな餌をついばみます。",
    "lifespan": "海域や研究資料により異なるため、ここでは一律の年数を示していません。",
    "taste": "きめ細かい白身で、開いた身の天ぷらやフライに向きます。",
    "cooking": [
      "天ぷら",
      "南蛮漬け",
      "塩焼き",
      "フライ"
    ],
    "seasonNote": "冬〜春は食味や釣行を考える目安です。実際の釣期・出船期間は海域や施設の情報を確認してください。",
    "beginnerTip": "まず遊泳層を目で確認し、餌が水面下の浅い位置を流れるように調整します。小さな口へ入る量だけ付け餌を付け、ウキが明確に動いてから短く合わせます。",
    "safety": "細く尖った下あごと針先に注意し、魚をつかむ向きを確認します。まき餌や投げ釣りの可否は施設規則を優先。",
    "body": "細長い銀色の体と、上あごより極端に長い下あごが特徴です。群れが表層を泳いでいても、足元の影や仕掛けの落下で離れることがあります。",
    "fishing": "まず遊泳層を目で確認し、餌が水面下の浅い位置を流れるように調整します。小さな口へ入る量だけ付け餌を付け、ウキが明確に動いてから短く合わせます。",
    "trivia": "腹腔の黒い膜は料理の前に取り除きます。体表の銀色とは別の、見分けではなく下処理の確認点です。"
  },
  "media": {
    "image": "/images/fish/sayori-real.png"
  },
  "quest": {
    "fightProfile": "runner",
    "stamina": 38,
    "runPower": 30,
    "fightPower": 30,
    "swimSpeed": 1.25,
    "wariness": 0.16,
    "habitats": [
      "wakayama"
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
    "catchPhrase": "サヨリを見分けて、釣り方から食卓へ",
    "identify": [
      "下あごが細く長く突き出す",
      "上あごは短く、体は細い円筒形",
      "背びれと尻びれが尾に近い位置にある"
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
        "label": "サヨリのウキ釣り",
        "href": "/methods/sayori-uki"
      }
    ],
    "spotFocus": "波の穏やかな沿岸・湾内の表層。接岸時期は海域で変わります。 対象魚・利用できる釣法・最新の開放情報を確認します。"
  },
  "cooking": {
    "prep": [
      "持ち帰る分を速やかに冷やし、調理まで低温を保ちます。",
      "鱗を落とし、頭と内臓を除きます。",
      "腹の黒い膜を流水で短く洗い落とし、水気を拭きます。",
      "細い中骨に沿って開き、腹骨と残った小骨を除きます。",
      "生魚に使った器具を洗い、加熱した料理とは分けます。"
    ],
    "recipes": [...(["tempura","nanban","shioyaki","fry"].map(slug=>cookedRecipe(fish,slug,"骨を除いて開いた身","薄く繊細な身なので小骨を丁寧に除き、加熱しすぎて乾かないよう確認します。"))),{
  "slug": "sashimi",
  "name": "刺身",
  "preparation": "raw",
  "summary": "細長い身を開き、腹の黒い膜と小骨を除くと上品な味わいになります。",
  "ingredients": [
    "2人分：生食用として処理・管理されたサヨリの柵 150〜200g",
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
