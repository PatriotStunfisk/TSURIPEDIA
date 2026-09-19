import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.chiba-muse.or.jp/UMIHAKU/files/1521849666827/simple/note9.pdf
export default defineFishSpecies({
  ecologyVisual:{
  "title": "雄が岩の卵を守る",
  "description": "繁殖期のスズメダイの雄は、岩などに付いた卵を守ります。普段は群れている小魚にも、産卵場所を守る生活があります。岩場の小魚を観察すると、泳ぎ方の違いも見えてきます。",
  "image": "/images/ecology/suzumedai-20260919.webp",
  "alt": "スズメダイの雄が岩の卵を守る様子",
  "width": 1200,
  "height": 800,
  "source": {
    "label": "生態の参考資料",
    "url": "https://www.chiba-muse.or.jp/UMIHAKU/files/1521849666827/simple/note9.pdf"
  }
},
  "base": {
    "slug": "suzumedai",
    "name": "スズメダイ",
    "en": "Pearl-spot chromis",
    "scientific": "Chromis notata",
    "season": "春〜秋を中心に、地域・水温で変化",
    "difficulty": 1,
    "danger": "背びれの棘に注意し、魚ばさみで保持して針を外します。食べる分だけ持ち帰り、速やかに冷やします。",
    "methods": [
      "サビキ"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "guideSlugs": [
      "tackle-spec-reading",
      "tackle-connection-basics"
    ],
    "relatedSlugs": [
      "takabe",
      "aji",
      "nenbutsudai"
    ],
    "areas": [
      "本州中部以南の岩礁や港の岩場周辺"
    ],
    "depth": "岩の上の中層から浅い沿岸",
    "size": "10〜15cmほど",
    "desc": "灰褐色で体高のある小魚。背側の後方に小さな白い点。小さい口と二叉した尾びれ。",
    "accent": "#7fa9a4",
    "months": [
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
    "family": "スズメダイ科",
    "genus": "スズメダイ属",
    "aliases": [
      "アブッテカモ"
    ],
    "habitat": "本州中部以南の岩礁や港の岩場周辺",
    "diet": "動物プランクトンなど",
    "behavior": "岩場の上で群れを作り、流れてくる餌を拾います。繁殖期の雄は岩などに産み付けられた卵を守ります。",
    "lifespan": "生息環境や個体により異なる",
    "taste": "あぶってかも風の塩焼き・唐揚げ・南蛮漬け・煮付けを紹介。",
    "cooking": [
      "あぶってかも風の塩焼き",
      "唐揚げ",
      "南蛮漬け",
      "煮付け"
    ],
    "seasonNote": "春〜秋を中心に、地域・水温で変化",
    "beginnerTip": "魚の大きさに比べて口が小さいため、掛からない時は針を小さくし、餌を多く詰めすぎないこと。",
    "safety": "背びれの棘に注意し、魚ばさみで保持して針を外します。食べる分だけ持ち帰り、速やかに冷やします。",
    "body": "灰褐色で体高のある小魚。背側の後方に小さな白い点。小さい口と二叉した尾びれ。",
    "fishing": "小針のサビキを群れの高さへ合わせます。上下へ大きく振り続けるより、まき餌が漂う層で短く止めると小さな口に入りやすくなります。アジと同じ場所でも、底に落とし切ると別の魚へ変わることがあります。",
    "trivia": "福岡の「あぶってかも」はスズメダイを焼く郷土料理の呼び名。青い熱帯性スズメダイ類とは別種です。"
  },
  "launch": {
    "catchPhrase": "灰褐色で体高のある小魚",
    "identify": [
      "灰褐色で体高のある小魚",
      "背側の後方に小さな白い点",
      "小さい口と二叉した尾びれ"
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
        "label": "サビキ",
        "href": "/methods/sabiki"
      }
    ],
    "spotFocus": "本州中部以南の岩礁や港の岩場周辺"
  },
  "media": {
    "image": "/images/fish/suzumedai-profile-20260919.webp"
  },
  "representativeRecipes": [
    "shioyaki",
    "karaage",
    "nanban",
    "nitsuke"
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
        "name": "あぶってかも風の塩焼き",
        "preparation": "cooked",
        "summary": "福岡の食文化を家庭向けに紹介。えら・内臓を処理したスズメダイを、皮まで香ばしく焼きます。",
        "ingredients": [
          "スズメダイ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/suzumedai-shioyaki.webp"
      },
      {
        "slug": "karaage",
        "name": "唐揚げ",
        "preparation": "cooked",
        "summary": "薄い衣で揚げ、身と皮の食感を楽しみます。",
        "ingredients": [
          "スズメダイ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/suzumedai-karaage.webp"
      },
      {
        "slug": "nanban",
        "name": "南蛮漬け",
        "preparation": "cooked",
        "summary": "揚げた魚を野菜と甘酢に漬ける、さっぱりした料理。",
        "ingredients": [
          "スズメダイ 約250g（尾数は大きさに合わせる）",
          "玉ねぎ1/4個・にんじん30g",
          "酢・水 各大さじ3",
          "醤油・砂糖 各大さじ1",
          "片栗粉・揚げ油 適量"
        ],
        "steps": [
          "野菜を細切りにし、酢・水・醤油・砂糖を合わせる。",
          "下処理した魚の水気を拭き、片栗粉をまぶす。",
          "170℃程度の油で魚の中心までしっかり加熱する。",
          "油を切って甘酢と野菜へ合わせ、粗熱を取って冷蔵する。"
        ],
        "tips": [
          "甘酢に漬けても硬い骨が必ず柔らかくなるわけではありません。"
        ],
        "image": "/images/cooking/suzumedai-nanban.webp"
      },
      {
        "slug": "nitsuke",
        "name": "煮付け",
        "preparation": "cooked",
        "summary": "しょうがと甘辛い煮汁で、身を崩さず煮ます。",
        "ingredients": [
          "スズメダイ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/suzumedai-nitsuke.webp"
      }
    ]
  },
  "quest": {
    "fightProfile": "balanced",
    "fightPower": 30
  }
});
