import {defineFishSpecies} from './define';
import {cookedRecipe} from './cooked-recipes';
// Species reference: https://www.pref.kyoto.jp/kaiyo/akamutsu.html (checked 2026-09-15)
const fish={slug:"akamutsu",name:"アカムツ"};
export default defineFishSpecies({
  representativeRecipes: ["sashimi","nitsuke","shioyaki","sakamushi"],
  "base": {
    "slug": "akamutsu",
    "name": "アカムツ",
    "en": "Blackthroat seaperch",
    "scientific": "Doederleinia berycoides",
    "season": "秋〜冬を目安に地域差あり",
    "difficulty": 4,
    "danger": "重いオモリと針を整理し、投入・回収時に隣の糸へ交差させないよう船長の合図に従います。",
    "methods": [
      "中深場・深場の胴突き"
    ],
    "methodSlugs": [
      "deepsea-douzuki"
    ],
    "guideSlugs": [
      "akamutsu-starting-guide"
    ],
    "relatedSlugs": [
      "kinmedai",
      "kuromutsu"
    ],
    "areas": [
      "日本海や太平洋の沖合、中深場の砂泥底などに分布します。"
    ],
    "depth": "沖合の中深場・砂泥底",
    "size": "20〜40cm",
    "desc": "赤みのある体、大きな目、口の中が黒いことが特徴です。「のどぐろ」はアカムツの呼び名で、別の魚種ではありません。クロムツとは別の仲間です。",
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
    "family": "ホタルジャコ科",
    "genus": "アカムツ属",
    "aliases": [
      "ノドグロ"
    ],
    "habitat": "日本海や太平洋の沖合、中深場の砂泥底などに分布します。",
    "diet": "小魚・甲殻類など",
    "behavior": "底付近を狙い、アタリの後も口切れを避けて一定の張りで寄せます。",
    "lifespan": "海域や研究資料により異なるため、ここでは一律の年数を示していません。",
    "taste": "脂のある白身で、塩焼きや煮付けは皮の風味も楽しめます。",
    "cooking": [
      "煮付け",
      "塩焼き",
      "酒蒸し",
      "炊き込みご飯"
    ],
    "seasonNote": "秋〜冬を目安に地域差ありは食味や釣行を考える目安です。実際の釣期・出船期間は海域や施設の情報を確認してください。",
    "beginnerTip": "船長の指示した棚と仕掛けを守り、底を取り直したら持ち上げ幅をそろえます。掛かってからは強くあおり続けず、竿の曲がりを保ちます。",
    "safety": "重いオモリと針を整理し、投入・回収時に隣の糸へ交差させないよう船長の合図に従います。",
    "body": "赤みのある体、大きな目、口の中が黒いことが特徴です。「のどぐろ」はアカムツの呼び名で、別の魚種ではありません。クロムツとは別の仲間です。",
    "fishing": "船長の指示した棚と仕掛けを守り、底を取り直したら持ち上げ幅をそろえます。掛かってからは強くあおり続けず、竿の曲がりを保ちます。",
    "trivia": "「のどぐろ」を検索してもこの魚にたどり着けるように、正式名と別名を一つのプロフィールで管理します。"
  },
  "media": {
    "image": "/images/fish/akamutsu-real.png"
  },
  "quest": {
    "fightProfile": "balanced",
    "stamina": 69,
    "runPower": 51,
    "fightPower": 51,
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
    "catchPhrase": "アカムツを見分けて、釣り方から食卓へ",
    "identify": [
      "口の中が黒い",
      "赤みのある体と大きな目",
      "クロムツの暗褐色の体と混同しない"
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
    "spotFocus": "日本海や太平洋の沖合、中深場の砂泥底などに分布します。 対象魚・利用できる釣法・最新の開放情報を確認します。"
  },
  "cooking": {
    "prep": [
      "持ち帰る分を速やかに冷やし、調理まで低温を保ちます。",
      "鱗を落とし、えら・内臓を除きます。",
      "腹を洗って水気を拭き、三枚におろします。",
      "腹骨と小骨を除き、脂のある皮を残して切り分けます。",
      "生魚に使った器具を洗い、加熱した料理とは分けます。"
    ],
    "recipes": [...(["nitsuke","shioyaki","sakamushi","takikomi"].map(slug=>cookedRecipe(fish,slug,"鱗と骨を除いた皮付きの切り身","皮を残して脂を生かし、柔らかい身を崩さないように扱います。"))),{
  "slug": "sashimi",
  "image": "/images/cooking/akamutsu-sashimi.webp",
  "name": "刺身",
  "preparation": "raw",
  "summary": "脂の多い白身を小さめに切り、重くなりすぎないよう薬味を添えます。表面の炙りだけで安全にはなりません。",
  "ingredients": [
    "2人分：生食用として処理・管理されたアカムツの柵 150〜200g",
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
