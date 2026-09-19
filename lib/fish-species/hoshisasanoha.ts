import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.honda.co.jp/fishing/picture-book/sasanohabera/
export default defineFishSpecies({
  "base": {
    "slug": "hoshisasanoha",
    "name": "ホシササノハベラ",
    "en": "Star-spotted wrasse",
    "scientific": "Pseudolabrus sieboldi",
    "season": "春〜秋を中心に、地域・水温で変化",
    "difficulty": 1,
    "danger": "濡れた岩へ降りず足場のよい釣り可能な場所から狙います。歯とひれの棘に注意して針を外してください。",
    "methods": [
      "ちょい投げ",
      "胴突き"
    ],
    "methodSlugs": [
      "choinage",
      "douzuki"
    ],
    "guideSlugs": [
      "tackle-spec-reading",
      "tackle-connection-basics"
    ],
    "relatedSlugs": [
      "akasasanoha",
      "kyusen",
      "kisu"
    ],
    "areas": [
      "本州から九州の岩礁や石の多い沿岸。瀬戸内海でも見られる"
    ],
    "depth": "浅い岩場と砂地の境",
    "size": "20〜25cm前後",
    "desc": "背側に白い小斑点が散る。目の下の線はおおむねまっすぐ後方へ伸びる。口先がとがり、ベラらしい厚い唇。",
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
    "habitat": "本州から九州の岩礁や石の多い沿岸。瀬戸内海でも見られる",
    "diet": "甲殻類・小さな貝・ゴカイ類",
    "behavior": "日中、岩のすき間や海底をつついて餌を探します。成長や性によって色が変わるため、赤い・青いだけでは種類を決められません。",
    "lifespan": "生息環境や個体により異なる",
    "taste": "煮付け・唐揚げ・塩焼き・ムニエルを紹介。",
    "cooking": [
      "煮付け",
      "唐揚げ",
      "塩焼き",
      "ムニエル"
    ],
    "seasonNote": "春〜秋を中心に、地域・水温で変化",
    "beginnerTip": "足元の石際にもいる魚です。遠投より、根掛かりしにくい砂の筋を見つける方が効率的。",
    "safety": "濡れた岩へ降りず足場のよい釣り可能な場所から狙います。歯とひれの棘に注意して針を外してください。",
    "body": "背側に白い小斑点が散る。目の下の線はおおむねまっすぐ後方へ伸びる。口先がとがり、ベラらしい厚い唇。",
    "fishing": "岩と砂の境を短い投げ仕掛けや胴突きで探ります。イソメは長く垂らさず、底に置いて待ちすぎないようにします。小さな振動のあと竿先へ重みが乗ったら軽く合わせ、根から離します。",
    "trivia": "「ササノハベラ」と呼ばれていた魚はホシ・アカの2種に分けられています。白い斑点と頬の線を合わせて確認します。"
  },
  "launch": {
    "catchPhrase": "背側に白い小斑点が散る",
    "identify": [
      "背側に白い小斑点が散る",
      "目の下の線はおおむねまっすぐ後方へ伸びる",
      "口先がとがり、ベラらしい厚い唇"
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
        "label": "ちょい投げ",
        "href": "/methods/choinage"
      },
      {
        "label": "胴突き",
        "href": "/methods/douzuki"
      }
    ],
    "spotFocus": "本州から九州の岩礁や石の多い沿岸。瀬戸内海でも見られる"
  },
  "media": {
    "image": "/images/fish/hoshisasanoha-profile-20260919.webp"
  },
  "representativeRecipes": [
    "nitsuke",
    "karaage",
    "shioyaki",
    "meuniere"
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
          "ホシササノハベラ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/hoshisasanoha-nitsuke.webp"
      },
      {
        "slug": "karaage",
        "name": "唐揚げ",
        "preparation": "cooked",
        "summary": "薄い衣で揚げ、身と皮の食感を楽しみます。",
        "ingredients": [
          "ホシササノハベラ 約250g（尾数は大きさに合わせる）",
          "酒・醤油 各小さじ2",
          "しょうが 小さじ1",
          "片栗粉・揚げ油 適量"
        ],
        "steps": [
          "下処理した魚の水分をよく拭き、厚さをそろえる。",
          "酒・醤油・しょうがを合わせ、冷蔵で10分ほど下味を付ける。",
          "汁気を取り片栗粉を薄くまぶす。",
          "170℃程度の油で中心まで十分に加熱し、油を切る。"
        ],
        "tips": [
          "小魚でも硬い骨が残る場合は無理に食べず外します。"
        ],
        "image": "/images/cooking/hoshisasanoha-karaage.webp"
      },
      {
        "slug": "shioyaki",
        "name": "塩焼き",
        "preparation": "cooked",
        "summary": "皮を香ばしく焼き、身の風味を味わう食べ方。",
        "ingredients": [
          "ホシササノハベラ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/hoshisasanoha-shioyaki.webp"
      },
      {
        "slug": "meuniere",
        "name": "ムニエル",
        "preparation": "cooked",
        "summary": "薄い小麦粉をまとわせ、バターで香ばしく焼きます。",
        "ingredients": [
          "ホシササノハベラ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/hoshisasanoha-meuniere.webp"
      }
    ]
  },
  "quest": {
    "fightProfile": "balanced",
    "fightPower": 30
  }
});
