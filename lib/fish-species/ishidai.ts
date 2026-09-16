import {defineFishSpecies} from './define';
import {cookedRecipe} from './cooked-recipes';
// Species reference: https://www.daiwa.com/jp/column/fish_field_guide/sea/009 (checked 2026-09-15)
const fish={slug:"ishidai",name:"イシダイ"};
export default defineFishSpecies({
  representativeRecipes: ["sashimi","shioyaki","nitsuke","meuniere"],
  "base": {
    "slug": "ishidai",
    "name": "イシダイ",
    "en": "Striped beakfish",
    "scientific": "Oplegnathus fasciatus",
    "season": "春〜秋",
    "difficulty": 5,
    "danger": "磯では滑落と波に注意。硬い口へ指を入れず、強い針・オモリの扱いは周囲から離れて行います。",
    "methods": [
      "イシダイの底物釣り"
    ],
    "methodSlugs": [
      "ishidai-bottom"
    ],
    "guideSlugs": [
      "ishidai-starting-guide"
    ],
    "relatedSlugs": [
      "kawahagi",
      "chinu",
      "madai"
    ],
    "areas": [
      "潮が当たる岩礁域。足元の深場や根の周りを探ります。"
    ],
    "depth": "潮通しのよい岩礁の底付近",
    "size": "25〜60cm",
    "desc": "若い個体にははっきりした黒い横帯があり、成長に伴って帯が薄れる個体もいます。歯は硬いくちばし状で、貝やウニなど硬い餌をかみ砕きます。",
    "accent": "#438baf",
    "months": [
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
    "family": "イシダイ科",
    "genus": "イシダイ属",
    "aliases": [
      "サンバソウ"
    ],
    "habitat": "潮が当たる岩礁域。足元の深場や根の周りを探ります。",
    "diet": "貝類・ウニ類・甲殻類",
    "behavior": "餌をつついてから深く食い込み、根へ強く突っ込みます。",
    "lifespan": "海域や研究資料により異なるため、ここでは一律の年数を示していません。",
    "taste": "厚い白身で、塩焼きや煮付け、骨を除いたムニエルにも向きます。",
    "cooking": [
      "塩焼き",
      "煮付け",
      "ムニエル",
      "潮汁"
    ],
    "seasonNote": "春〜秋は食味や釣行を考える目安です。実際の釣期・出船期間は海域や施設の情報を確認してください。",
    "beginnerTip": "最初は渡船や経験者の案内を利用し、安全な足場と取り込み位置を先に決めます。餌をつつく小さな動きだけで振り上げず、竿先が深く入る変化を見ます。",
    "safety": "磯では滑落と波に注意。硬い口へ指を入れず、強い針・オモリの扱いは周囲から離れて行います。",
    "body": "若い個体にははっきりした黒い横帯があり、成長に伴って帯が薄れる個体もいます。歯は硬いくちばし状で、貝やウニなど硬い餌をかみ砕きます。",
    "fishing": "最初は渡船や経験者の案内を利用し、安全な足場と取り込み位置を先に決めます。餌をつつく小さな動きだけで振り上げず、竿先が深く入る変化を見ます。",
    "trivia": "サンバソウは幼魚に使われる呼び名です。独立した魚種として重複登録しません。"
  },
  "media": {
    "image": "/images/fish/ishidai-real.png"
  },
  "quest": {
    "fightProfile": "diver",
    "stamina": 88,
    "runPower": 86,
    "fightPower": 86,
    "swimSpeed": 0.8,
    "wariness": 0.4,
    "habitats": [
      "rocky-shore"
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
    "catchPhrase": "イシダイを見分けて、釣り方から食卓へ",
    "identify": [
      "若魚の白っぽい体に太い黒帯",
      "硬いくちばし状の口",
      "成魚は帯が不明瞭でも口と体形を確認"
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
        "label": "イシダイの底物釣り",
        "href": "/methods/ishidai-bottom"
      }
    ],
    "spotFocus": "潮が当たる岩礁域。足元の深場や根の周りを探ります。 対象魚・利用できる釣法・最新の開放情報を確認します。"
  },
  "cooking": {
    "prep": [
      "持ち帰る分を速やかに冷やし、調理まで低温を保ちます。",
      "硬いひれと口を避け、鱗を落とします。",
      "えら・内臓を除き、血合いを洗って水気を拭きます。",
      "大きい個体は無理に骨を断たず、魚店へ下処理を依頼する方法もあります。三枚におろして骨を除きます。",
      "生魚に使った器具を洗い、加熱した料理とは分けます。"
    ],
    "recipes": [...(["shioyaki","nitsuke","meuniere","ushiojiru"].map(slug=>cookedRecipe(fish,slug,"骨を除いた切り身","厚い身は大きさをそろえ、表面だけでなく中心まで火を通します。"))),{
  "slug": "sashimi",
  "name": "刺身・薄造り",
  "preparation": "raw",
  "summary": "弾力の強い身を薄く切ると歯切れがよくなります。厚切りにしすぎないのが食べやすさのポイントです。",
  "ingredients": [
    "2人分：生食用として処理・管理されたイシダイの柵 150〜200g",
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
