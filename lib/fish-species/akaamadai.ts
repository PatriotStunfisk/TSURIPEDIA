import {defineFishSpecies} from './define';
import {cookedRecipe} from './cooked-recipes';
// Species reference: https://www.pref.kyoto.jp/kaiyo2/69-amadai-2.html (checked 2026-09-15)
const fish={slug:"akaamadai",name:"アカアマダイ"};
export default defineFishSpecies({
  representativeRecipes: ["sashimi","shioyaki","sakamushi","tempura"],
  "base": {
    "slug": "akaamadai",
    "name": "アカアマダイ",
    "en": "Red tilefish",
    "scientific": "Branchiostegus japonicus",
    "season": "秋〜冬",
    "difficulty": 3,
    "danger": "指定オモリと投入順を守り、船上で重い仕掛けを振り回しません。取り込み時は針の位置を確認します。",
    "methods": [
      "アマダイの天秤釣り"
    ],
    "methodSlugs": [
      "amadai-tenbin"
    ],
    "guideSlugs": [
      "akaamadai-starting-guide"
    ],
    "relatedSlugs": [
      "kidai",
      "itoyoridai"
    ],
    "areas": [
      "沖合の砂泥底に巣穴を作る魚です。船長が案内する底質と水深を狙います。"
    ],
    "depth": "沖の砂泥底、数十〜100m台が目安",
    "size": "25〜45cm",
    "desc": "赤みのある体と角ばった頭を持ち、眼の下の銀白色の三角斑が目印です。キアマダイやシロアマダイとは別種で、色だけでなく頭の模様を確認します。",
    "accent": "#438baf",
    "months": [
      1,
      2,
      3,
      9,
      10,
      11,
      12
    ],
    "beginner": false,
    "kids": false
  },
  "detail": {
    "family": "アマダイ科",
    "genus": "アマダイ属",
    "aliases": [
      "グジ"
    ],
    "habitat": "沖合の砂泥底に巣穴を作る魚です。船長が案内する底質と水深を狙います。",
    "diet": "底生の甲殻類・ゴカイ類など",
    "behavior": "巣穴の周辺で餌を取り、底付近から持ち上げた餌へ反応します。",
    "lifespan": "海域や研究資料により異なるため、ここでは一律の年数を示していません。",
    "taste": "水分が多く柔らかい白身。軽く塩をして水分を拭くと焼き物や蒸し物に扱いやすくなります。",
    "cooking": [
      "塩焼き",
      "酒蒸し",
      "天ぷら",
      "炊き込みご飯"
    ],
    "seasonNote": "秋〜冬は食味や釣行を考える目安です。実際の釣期・出船期間は海域や施設の情報を確認してください。",
    "beginnerTip": "指定オモリで底を取り、少し持ち上げて仕掛けを漂わせます。底を引きずり続けず、流されて水深が変わるたびに底を取り直します。",
    "safety": "指定オモリと投入順を守り、船上で重い仕掛けを振り回しません。取り込み時は針の位置を確認します。",
    "body": "赤みのある体と角ばった頭を持ち、眼の下の銀白色の三角斑が目印です。キアマダイやシロアマダイとは別種で、色だけでなく頭の模様を確認します。",
    "fishing": "指定オモリで底を取り、少し持ち上げて仕掛けを漂わせます。底を引きずり続けず、流されて水深が変わるたびに底を取り直します。",
    "trivia": "アマダイは名前にタイが付いてもマダイと同じ科ではありません。白・黄・赤の各種は別々に見分けます。"
  },
  "media": {
    "image": "/images/fish/akaamadai-real.png"
  },
  "quest": {
    "fightProfile": "bottom",
    "stamina": 62,
    "runPower": 48,
    "fightPower": 48,
    "swimSpeed": 0.8,
    "wariness": 0.24,
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
    "catchPhrase": "アカアマダイを見分けて、釣り方から食卓へ",
    "identify": [
      "眼の下に銀白色の三角斑",
      "赤みのある体と角ばった額",
      "キアマダイの白い帯との違いを確認"
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
        "label": "アマダイの天秤釣り",
        "href": "/methods/amadai-tenbin"
      }
    ],
    "spotFocus": "沖合の砂泥底に巣穴を作る魚です。船長が案内する底質と水深を狙います。 対象魚・利用できる釣法・最新の開放情報を確認します。"
  },
  "cooking": {
    "prep": [
      "持ち帰る分を速やかに冷やし、調理まで低温を保ちます。",
      "鱗を丁寧に落とし、えら・内臓を除きます。",
      "身を崩さないよう三枚におろし、骨を抜きます。",
      "軽く塩をして出た水分を拭きます。このレシピでは松笠揚げ用の鱗は残しません。",
      "生魚に使った器具を洗い、加熱した料理とは分けます。"
    ],
    "recipes": [...(["shioyaki","sakamushi","tempura","takikomi"].map(slug=>cookedRecipe(fish,slug,"鱗と骨を除いた皮付きの身","柔らかい身は強く押さえず、水分を拭いてから調理します。"))),{
  "slug": "sashimi",
  "image": "/images/cooking/akaamadai-sashimi.webp",
  "name": "刺身",
  "preparation": "raw",
  "summary": "水分が多くやわらかい身を冷たい状態で切ります。昆布締めもありますが、昆布や塩は寄生虫対策ではありません。",
  "ingredients": [
    "2人分：生食用として処理・管理されたアカアマダイの柵 150〜200g",
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
    "器を冷やしておき、切り身は食べる直前に盛り付けます。",
    "包丁を前後にこすらず、長く引いて切ると断面が整います。",
    "薬味と醤油は別に添え、身の味を見ながら少量ずつ合わせます。"
  ]
}]
  }
});
