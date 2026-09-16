import {defineFishSpecies} from './define';
import {cookedRecipe} from './cooked-recipes';
// Species reference: https://www.hro.or.jp/fisheries/h3mfcd0000000gsj/o7u1kr000000019q/o7u1kr000000d4fu/o7u1kr000000bq9o.html (checked 2026-09-15)
const fish={slug:"kurosoi",name:"クロソイ"};
export default defineFishSpecies({
  representativeRecipes: ["sashimi","nitsuke","karaage","sakamushi"],
  "base": {
    "slug": "kurosoi",
    "name": "クロソイ",
    "en": "Black rockfish",
    "scientific": "Sebastes schlegelii",
    "season": "冬〜春",
    "difficulty": 3,
    "danger": "背びれや頭部の棘を避け、魚つかみを使います。夜釣りは許可と足場を確認し、救命胴衣を着用します。",
    "methods": [
      "ロックフィッシュのルアー",
      "胴突き"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "douzuki"
    ],
    "guideSlugs": [
      "kurosoi-starting-guide"
    ],
    "relatedSlugs": [
      "mebaru",
      "kasago",
      "ainame"
    ],
    "areas": [
      "北日本を中心に、岩礁や港の根周りに暮らします。"
    ],
    "depth": "北日本を中心とする沿岸の岩礁・根周り",
    "size": "20〜45cm",
    "desc": "暗い灰褐色の体、大きな口、張り出す頭部を持つ根魚です。目の下から頬にかけた棘も見分けの手掛かりになります。黒っぽいソイ類をすべてクロソイと呼ばず、形も確認します。",
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
    "family": "メバル科",
    "genus": "メバル属",
    "aliases": [],
    "habitat": "北日本を中心に、岩礁や港の根周りに暮らします。",
    "diet": "小魚・甲殻類",
    "behavior": "障害物の近くで餌を待ち、掛かると根へ戻ろうとします。",
    "lifespan": "海域や研究資料により異なるため、ここでは一律の年数を示していません。",
    "taste": "白身は煮付けでふっくらし、酒蒸しや潮汁にも向きます。",
    "cooking": [
      "煮付け",
      "唐揚げ",
      "酒蒸し",
      "潮汁"
    ],
    "seasonNote": "冬〜春は食味や釣行を考える目安です。実際の釣期・出船期間は海域や施設の情報を確認してください。",
    "beginnerTip": "底を引きずり続けず、着底したら短く持ち上げて根掛かりを避けます。掛けた直後は障害物から離し、その後は竿を曲げて一定の張りで寄せます。",
    "safety": "背びれや頭部の棘を避け、魚つかみを使います。夜釣りは許可と足場を確認し、救命胴衣を着用します。",
    "body": "暗い灰褐色の体、大きな口、張り出す頭部を持つ根魚です。目の下から頬にかけた棘も見分けの手掛かりになります。黒っぽいソイ類をすべてクロソイと呼ばず、形も確認します。",
    "fishing": "底を引きずり続けず、着底したら短く持ち上げて根掛かりを避けます。掛けた直後は障害物から離し、その後は竿を曲げて一定の張りで寄せます。",
    "trivia": "根魚は同じ場所で釣れ続けても持ち帰りを増やしすぎず、小型魚や抱卵した個体の扱いを考えます。"
  },
  "media": {
    "image": "/images/fish/kurosoi-real.png"
  },
  "quest": {
    "fightProfile": "bottom",
    "stamina": 66,
    "runPower": 62,
    "fightPower": 62,
    "swimSpeed": 0.8,
    "wariness": 0.24,
    "habitats": [
      "northern-coast"
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
    "catchPhrase": "クロソイを見分けて、釣り方から食卓へ",
    "identify": [
      "黒〜灰褐色でがっしりした体",
      "目の下付近に後方へ向く棘",
      "大きな口と背びれの鋭い棘"
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
        "label": "ロックフィッシュのルアー",
        "href": "/methods/rockfish-lure"
      },
      {
        "label": "胴突き",
        "href": "/methods/douzuki"
      }
    ],
    "spotFocus": "北日本を中心に、岩礁や港の根周りに暮らします。 対象魚・利用できる釣法・最新の開放情報を確認します。"
  },
  "cooking": {
    "prep": [
      "持ち帰る分を速やかに冷やし、調理まで低温を保ちます。",
      "棘をタオルや魚つかみで避けながら鱗を落とします。",
      "えら・内臓を除き、腹の中を洗って水気を拭きます。",
      "三枚におろし、腹骨・小骨を除いて切り分けます。",
      "生魚に使った器具を洗い、加熱した料理とは分けます。"
    ],
    "recipes": [...(["nitsuke","karaage","sakamushi","ushiojiru"].map(slug=>cookedRecipe(fish,slug,"骨を除いた皮付きの身","頭やひれの棘を避けて下処理し、骨のない身で食べやすく仕上げます。"))),{
  "slug": "sashimi",
  "name": "刺身",
  "preparation": "raw",
  "summary": "大きめの個体の身を薄造りにし、歯応えを楽しみます。皮と小骨を除いて切ります。",
  "ingredients": [
    "2人分：生食用として処理・管理されたクロソイの柵 150〜200g",
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
