import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.ugui-vc.jp/zukan/detail/740/
export default defineFishSpecies({
  ecologyVisual:{
  "title": "成長すると姿も変わる",
  "description": "コブダイの大きなこぶは、主に成長した雄で目立ちます。若い個体には同じようなこぶがなく、色や姿も変化します。小さな個体と大きな雄を見比べると、同じ魚とは思えない違いがあります。",
  "image": "/images/ecology/kobudai-20260919.webp",
  "alt": "コブダイの成長すると姿も変わる様子",
  "width": 1200,
  "height": 800,
  "source": {
    "label": "生態の参考資料",
    "url": "https://www.ugui-vc.jp/zukan/detail/740/"
  }
},
  "base": {
    "slug": "kobudai",
    "name": "コブダイ",
    "en": "Asian sheepshead wrasse",
    "scientific": "Semicossyphus reticulatus",
    "season": "通年（海域・出船条件で変化）",
    "difficulty": 5,
    "danger": "強い歯でかみます。口の中へ指を入れず、長いプライヤーを使用。テトラへ降りず安全な足場から取り込みます。",
    "methods": [
      "ぶっこみ釣り",
      "石鯛・底物釣り"
    ],
    "methodSlugs": [
      "bukkomi",
      "ishidai-bottom"
    ],
    "guideSlugs": [
      "tackle-spec-reading",
      "tackle-connection-basics"
    ],
    "relatedSlugs": [
      "ishidai",
      "kyusen",
      "chinu"
    ],
    "areas": [
      "本州から九州の岩礁・石積み・防波堤周辺"
    ],
    "depth": "浅場から沿岸の岩礁底",
    "size": "40〜80cm、大型は1mほど",
    "desc": "大型雄は額と下あごが大きく張り出す。厚い唇と丈夫な歯。成魚は赤褐色、幼魚は白い横帯がある。",
    "accent": "#7fa9a4",
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
    "kids": false,
    "waterTypes": [
      "sea"
    ]
  },
  "detail": {
    "family": "ベラ科",
    "genus": "コブダイ属",
    "aliases": [
      "カンダイ"
    ],
    "habitat": "本州から九州の岩礁・石積み・防波堤周辺",
    "diet": "貝類・甲殻類・ウニ類など",
    "behavior": "岩や構造物の周辺で貝や甲殻類をかみ砕きます。成長に伴って性や姿が変わり、若い個体には雄のような大きなこぶがありません。",
    "lifespan": "生息環境や個体により異なる",
    "taste": "煮付け・フライ・酒蒸し・鍋を紹介。",
    "cooking": [
      "煮付け",
      "フライ",
      "酒蒸し",
      "鍋"
    ],
    "seasonNote": "通年（海域・出船条件で変化）",
    "beginnerTip": "大物用でも糸を手に巻くのは危険です。最初は経験者と同行し、根に切られない太さとドラグを現場で合わせてください。",
    "safety": "強い歯でかみます。口の中へ指を入れず、長いプライヤーを使用。テトラへ降りず安全な足場から取り込みます。",
    "body": "大型雄は額と下あごが大きく張り出す。厚い唇と丈夫な歯。成魚は赤褐色、幼魚は白い横帯がある。",
    "fishing": "丈夫な磯竿や底物用タックルで、貝やエビを根際へ落とします。道糸を張りすぎず食い込ませ、重みが乗ったら根から離します。掛かってから足場を移動しないよう、大型タモと立ち位置を先に準備します。",
    "trivia": "「カンダイ」は地方名で、マダイの仲間ではなくベラ科。こぶは大型雄で目立ちます。"
  },
  "launch": {
    "catchPhrase": "大型雄は額と下あごが大きく張り出す",
    "identify": [
      "大型雄は額と下あごが大きく張り出す",
      "厚い唇と丈夫な歯",
      "成魚は赤褐色、幼魚は白い横帯がある"
    ],
    "imageNotes": [
      "体形",
      "模様",
      "見分け方",
      "食べ方"
    ],
    "related": [],
    "methodLinks": [
      {
        "label": "ぶっこみ釣り",
        "href": "/methods/bukkomi"
      },
      {
        "label": "石鯛・底物釣り",
        "href": "/methods/ishidai-bottom"
      }
    ],
    "spotFocus": "本州から九州の岩礁・石積み・防波堤周辺"
  },
  "media": {
    "image": "/images/fish/kobudai-profile-20260919.webp"
  },
  "representativeRecipes": [
    "nitsuke",
    "fry",
    "sakamushi",
    "nabe"
  ],
  "cooking": {
    "prep": [
      "持ち帰る分は速やかに冷却する。",
      "うろこ・えら・内臓を取り、腹の中を洗って水分を拭く。",
      "丸ごと調理する小魚は硬いひれを処理し、大きな魚は三枚におろして腹骨・血合い骨を外す。",
      "料理に合わせて切り分け、調理まで冷蔵する。"
    ],
    "recipes": [
      {
        "slug": "nitsuke",
        "name": "煮付け",
        "preparation": "cooked",
        "summary": "しょうがと甘辛い煮汁で、身を崩さず煮ます。",
        "ingredients": [
          "コブダイの切り身 250g",
          "しょうが10g",
          "水100ml・酒50ml",
          "醤油・みりん 各大さじ2",
          "砂糖 小さじ2"
        ],
        "steps": [
          "魚の水分を拭き、厚い部分に浅い切り目を入れる。",
          "鍋に調味料と水・酒・しょうがを入れて煮立てる。",
          "魚を入れ、落としぶたをして中心まで火を通す。",
          "魚を皿へ移し、煮汁を少し煮詰めてかける。"
        ],
        "tips": [
          "途中で何度も裏返さず、煮汁を上からかけて仕上げます。"
        ],
        "image": "/images/cooking/kobudai-nitsuke.webp"
      },
      {
        "slug": "fry",
        "name": "フライ",
        "preparation": "cooked",
        "summary": "白身の厚みを残し、パン粉の軽い衣で揚げます。",
        "ingredients": [
          "コブダイの切り身 250g",
          "塩・こしょう 少々",
          "小麦粉・溶き卵・パン粉 適量",
          "揚げ油・レモン 適量"
        ],
        "steps": [
          "皮と骨を処理した切り身を食べやすく切り、水分を拭く。",
          "塩・こしょうを振り、小麦粉・卵・パン粉の順に付ける。",
          "170℃程度の油で、厚い部分の中心まで火を通す。",
          "油を切り、キャベツやレモンと盛り付ける。"
        ],
        "tips": [
          "厚さをそろえ、衣が色付いただけで引き上げないようにします。"
        ],
        "image": "/images/cooking/kobudai-fry.webp"
      },
      {
        "slug": "sakamushi",
        "name": "酒蒸し",
        "preparation": "cooked",
        "summary": "酒と昆布の蒸し汁で、淡白な身をしっとり仕上げます。",
        "ingredients": [
          "コブダイの切り身 250g",
          "昆布5cm・ねぎ1/2本",
          "きのこ50g",
          "酒 大さじ3・水 大さじ2",
          "塩 少々・ポン酢 適量"
        ],
        "steps": [
          "骨を除いた魚へ軽く塩を振り、水気を拭く。",
          "耐熱皿へ昆布・野菜・魚を順に置き、酒と水を加える。",
          "蒸し器やふた付きフライパンで蒸し、中心まで十分に加熱する。",
          "蒸し汁とともに盛り、好みでポン酢を添える。"
        ],
        "tips": [
          "ふたを開ける際は蒸気によるやけどに注意してください。"
        ],
        "image": "/images/cooking/kobudai-sakamushi.webp"
      },
      {
        "slug": "nabe",
        "name": "鍋",
        "preparation": "cooked",
        "summary": "骨を処理した身を野菜と煮て、だしまで味わいます。",
        "ingredients": [
          "コブダイの切り身 250g",
          "白菜2枚・ねぎ1本",
          "豆腐1/2丁・きのこ50g",
          "だし500ml・酒 大さじ2",
          "塩・醤油 適量"
        ],
        "steps": [
          "魚は骨を除いて一口大にし、野菜と豆腐を切る。",
          "だしと酒を温め、火の通りにくい野菜から加える。",
          "魚と豆腐を入れ、あくを取りながら中心まで加熱する。",
          "塩・醤油で薄く調味し、温かいうちに取り分ける。"
        ],
        "tips": [
          "魚を長く煮続けず、火が通った分から取り分けます。"
        ],
        "image": "/images/cooking/kobudai-nabe.webp"
      }
    ]
  },
  "quest": {
    "fightProfile": "bottom",
    "fightPower": 75
  }
});
