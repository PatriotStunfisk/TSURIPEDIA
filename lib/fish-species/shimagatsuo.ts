import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.ifarc.metro.tokyo.lg.jp/archive/27%2C1075%2C55%2C227.html
export default defineFishSpecies({
  "base": {
    "slug": "shimagatsuo",
    "name": "シマガツオ",
    "en": "Pacific pomfret",
    "scientific": "Brama japonica",
    "season": "通年（海域・出船条件で変化）",
    "difficulty": 3,
    "danger": "大型で硬い鱗と骨があります。船上では暴れる魚を素手で押さえず、捌く際は滑りにくい台とよく切れる道具を使います。",
    "methods": [
      "中深場胴突き",
      "ジギング"
    ],
    "methodSlugs": [
      "deepsea-douzuki",
      "jigging"
    ],
    "guideSlugs": [
      "tackle-spec-reading",
      "tackle-connection-basics"
    ],
    "relatedSlugs": [
      "medai",
      "kuromutsu",
      "akamutsu"
    ],
    "areas": [
      "日本周辺の沖合。中深場の船釣りで混じる"
    ],
    "depth": "沖合の中層から深い棚",
    "size": "40〜60cm前後",
    "desc": "横に平たく額が張り出す。目が大きく背びれ・尻びれが長い。硬い鱗と深く二叉した尾。",
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
    "family": "シマガツオ科",
    "genus": "シマガツオ属",
    "aliases": [
      "エチオピア",
      "テツビン"
    ],
    "habitat": "日本周辺の沖合。中深場の船釣りで混じる",
    "diet": "小魚・イカ・甲殻類",
    "behavior": "沖合で小魚などを食べる魚で、中深場の仕掛けに掛かることがあります。群れに当たると同じ流しで続けて掛かることもあります。",
    "lifespan": "生息環境や個体により異なる",
    "taste": "フライ・ムニエル・煮付け・酒蒸しを紹介。",
    "cooking": [
      "フライ",
      "ムニエル",
      "煮付け",
      "酒蒸し"
    ],
    "seasonNote": "通年（海域・出船条件で変化）",
    "beginnerTip": "専門に狙う便は少ないため、中深場便の船長へ混じる可能性と仕掛けを確認してください。",
    "safety": "大型で硬い鱗と骨があります。船上では暴れる魚を素手で押さえず、捌く際は滑りにくい台とよく切れる道具を使います。",
    "body": "横に平たく額が張り出す。目が大きく背びれ・尻びれが長い。硬い鱗と深く二叉した尾。",
    "fishing": "中深場の胴突きやジギングで掛かる魚です。着底から指定棚を探り、巻き上げは電動リール任せにせず竿の曲がりを見て調整。仕掛けを回収する時は隣の人と速度を合わせ、おまつりを防ぎます。",
    "trivia": "名前にカツオと付きますが、カツオの仲間ではありません。生きている時の銀色は死後に黒っぽく変化します。"
  },
  "launch": {
    "catchPhrase": "横に平たく額が張り出す",
    "identify": [
      "横に平たく額が張り出す",
      "目が大きく背びれ・尻びれが長い",
      "硬い鱗と深く二叉した尾"
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
        "label": "中深場胴突き",
        "href": "/methods/deepsea-douzuki"
      },
      {
        "label": "ジギング",
        "href": "/methods/jigging"
      }
    ],
    "spotFocus": "日本周辺の沖合。中深場の船釣りで混じる"
  },
  "media": {
    "image": "/images/fish/shimagatsuo-profile-20260919.webp"
  },
  "representativeRecipes": [
    "fry",
    "meuniere",
    "nitsuke",
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
        "slug": "fry",
        "name": "フライ",
        "preparation": "cooked",
        "summary": "白身の厚みを残し、パン粉の軽い衣で揚げます。",
        "ingredients": [
          "シマガツオの切り身 250g",
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
        "image": "/images/cooking/shimagatsuo-fry.webp"
      },
      {
        "slug": "meuniere",
        "name": "ムニエル",
        "preparation": "cooked",
        "summary": "薄い小麦粉をまとわせ、バターで香ばしく焼きます。",
        "ingredients": [
          "シマガツオの切り身 250g",
          "塩・こしょう 少々",
          "小麦粉 大さじ1",
          "油 小さじ1・バター15g",
          "レモン・パセリ 適量"
        ],
        "steps": [
          "骨を除いた切り身の水分を拭き、塩・こしょうを振る。",
          "小麦粉を薄くまぶし、余分な粉を落とす。",
          "油を引いたフライパンで皮側から焼き、返して中心まで加熱する。",
          "バターを加えてからめ、レモンを添える。"
        ],
        "tips": [
          "最初からバターだけで焼くと焦げやすいため、仕上げに加えます。"
        ],
        "image": "/images/cooking/shimagatsuo-meuniere.webp"
      },
      {
        "slug": "nitsuke",
        "name": "煮付け",
        "preparation": "cooked",
        "summary": "しょうがと甘辛い煮汁で、身を崩さず煮ます。",
        "ingredients": [
          "シマガツオの切り身 250g",
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
        "image": "/images/cooking/shimagatsuo-nitsuke.webp"
      },
      {
        "slug": "sakamushi",
        "name": "酒蒸し",
        "preparation": "cooked",
        "summary": "酒と昆布の蒸し汁で、淡白な身をしっとり仕上げます。",
        "ingredients": [
          "シマガツオの切り身 250g",
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
        "image": "/images/cooking/shimagatsuo-sakamushi.webp"
      }
    ]
  },
  "quest": {
    "fightProfile": "balanced",
    "fightPower": 50
  }
});
