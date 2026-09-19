import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.honda.co.jp/fishing/picture-book/sasanohabera/
export default defineFishSpecies({
  "base": {
    "slug": "akasasanoha",
    "name": "アカササノハベラ",
    "en": "Red bamboo wrasse",
    "scientific": "Pseudolabrus eoethinus",
    "season": "春〜秋を中心に、地域・水温で変化",
    "difficulty": 1,
    "danger": "磯のうねりと転落に注意。小魚でも口へ指を入れず、針外しを使ってください。",
    "methods": [
      "胴突き",
      "ちょい投げ"
    ],
    "methodSlugs": [
      "douzuki",
      "choinage"
    ],
    "guideSlugs": [
      "tackle-spec-reading",
      "tackle-connection-basics"
    ],
    "relatedSlugs": [
      "hoshisasanoha",
      "kyusen",
      "kasago"
    ],
    "areas": [
      "房総半島以南の太平洋側・伊豆諸島など、外海に面した岩礁"
    ],
    "depth": "沿岸の岩場からやや深い岩礁",
    "size": "20〜29cm前後",
    "desc": "背側の目立つ白い斑点が乏しい。目の下の線が下へ曲がり胸びれ側へ向かう。雄は前後で緑褐色と赤みが分かれることがある。",
    "accent": "#7fa9a4",
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
    "beginner": true,
    "kids": true,
    "waterTypes": [
      "sea"
    ]
  },
  "detail": {
    "family": "ベラ科",
    "genus": "ササノハベラ属",
    "aliases": [],
    "habitat": "房総半島以南の太平洋側・伊豆諸島など、外海に面した岩礁",
    "diet": "小さな甲殻類・貝・多毛類",
    "behavior": "岩礁で底の小動物を探します。ホシササノハベラと近縁ですが、外海側で出会いやすく、色だけでなく模様の位置が見分ける手掛かりです。",
    "lifespan": "生息環境や個体により異なる",
    "taste": "塩焼き・煮付け・フライ・酒蒸しを紹介。",
    "cooking": [
      "塩焼き",
      "煮付け",
      "フライ",
      "酒蒸し"
    ],
    "seasonNote": "春〜秋を中心に、地域・水温で変化",
    "beginnerTip": "ホシササノハベラと迷ったら、魚を水で濡らしたまま頬の線と背中の模様が写る写真を残します。",
    "safety": "磯のうねりと転落に注意。小魚でも口へ指を入れず、針外しを使ってください。",
    "body": "背側の目立つ白い斑点が乏しい。目の下の線が下へ曲がり胸びれ側へ向かう。雄は前後で緑褐色と赤みが分かれることがある。",
    "fishing": "胴突き仕掛けを岩の上から少し浮かせ、短いイソメや小さなオキアミを使います。底を引きずらず、着底したら持ち上げて止める操作で探ると根掛かりを減らせます。",
    "trivia": "雌雄や成長段階で色が違うベラの仲間。「赤いからアカ」と決めると誤同定につながります。"
  },
  "launch": {
    "catchPhrase": "背側の目立つ白い斑点が乏しい",
    "identify": [
      "背側の目立つ白い斑点が乏しい",
      "目の下の線が下へ曲がり胸びれ側へ向かう",
      "雄は前後で緑褐色と赤みが分かれることがある"
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
        "label": "胴突き",
        "href": "/methods/douzuki"
      },
      {
        "label": "ちょい投げ",
        "href": "/methods/choinage"
      }
    ],
    "spotFocus": "房総半島以南の太平洋側・伊豆諸島など、外海に面した岩礁"
  },
  "media": {
    "image": "/images/fish/akasasanoha-profile-20260919.webp"
  },
  "representativeRecipes": [
    "shioyaki",
    "nitsuke",
    "fry",
    "sakamushi"
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
        "slug": "shioyaki",
        "name": "塩焼き",
        "preparation": "cooked",
        "summary": "皮を香ばしく焼き、身の風味を味わう食べ方。",
        "ingredients": [
          "アカササノハベラ 約250g（尾数は大きさに合わせる）",
          "塩 小さじ1/3",
          "大根おろし・レモン 適量"
        ],
        "steps": [
          "水分を拭き、厚い部分へ浅く切り目を入れる。",
          "塩を両面へ振って10分ほど置き、出た水分を拭く。",
          "グリルで皮を香ばしく焼き、厚い部分の中心まで火を通す。",
          "皿へ移し、大根おろしやレモンを添える。"
        ],
        "tips": [
          "ひれに塩を少し多く付けると焦げすぎを抑えられます。"
        ],
        "image": "/images/cooking/akasasanoha-shioyaki.webp"
      },
      {
        "slug": "nitsuke",
        "name": "煮付け",
        "preparation": "cooked",
        "summary": "しょうがと甘辛い煮汁で、身を崩さず煮ます。",
        "ingredients": [
          "アカササノハベラ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/akasasanoha-nitsuke.webp"
      },
      {
        "slug": "fry",
        "name": "フライ",
        "preparation": "cooked",
        "summary": "白身の厚みを残し、パン粉の軽い衣で揚げます。",
        "ingredients": [
          "アカササノハベラ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/akasasanoha-fry.webp"
      },
      {
        "slug": "sakamushi",
        "name": "酒蒸し",
        "preparation": "cooked",
        "summary": "酒と昆布の蒸し汁で、淡白な身をしっとり仕上げます。",
        "ingredients": [
          "アカササノハベラ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/akasasanoha-sakamushi.webp"
      }
    ]
  },
  "quest": {
    "fightProfile": "balanced",
    "fightPower": 30
  }
});
