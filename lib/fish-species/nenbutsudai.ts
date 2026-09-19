import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.tokyo-zoo.net/topics/news/kasai/4350_23064_2015-07-24.html
export default defineFishSpecies({
  ecologyVisual:{
  "title": "口の中で卵を守る",
  "description": "ネンブツダイの雄は、卵の塊を口に含んで守ります。繁殖期には下あごが少しふくらんだ姿が見られます。釣れた魚は長く陸上に置かず、観察したら速やかに扱いましょう。",
  "image": "/images/ecology/nenbutsudai-20260919.webp",
  "alt": "ネンブツダイの口の中で卵を守る様子",
  "width": 1200,
  "height": 800,
  "source": {
    "label": "生態の参考資料",
    "url": "https://www.tokyo-zoo.net/topics/news/kasai/4350_23064_2015-07-24.html"
  }
},
  "base": {
    "slug": "nenbutsudai",
    "name": "ネンブツダイ",
    "en": "Half-lined cardinalfish",
    "scientific": "Ostorhinchus semilineatus",
    "season": "春〜秋を中心に、地域・水温で変化",
    "difficulty": 1,
    "danger": "小さな背びれの棘に注意。食用には種類の確認できた魚を使い、内臓とえらを除いて十分に加熱します。",
    "methods": [
      "サビキ",
      "胴突き"
    ],
    "methodSlugs": [
      "sabiki",
      "douzuki"
    ],
    "guideSlugs": [
      "tackle-spec-reading",
      "tackle-connection-basics"
    ],
    "relatedSlugs": [
      "suzumedai",
      "aji",
      "kasago"
    ],
    "areas": [
      "本州中部以南の岩礁・港の岩場周辺"
    ],
    "depth": "足元の岩陰から沿岸の海底近く",
    "size": "5〜12cmほど",
    "desc": "淡い橙色で目と口が大きい。頭から背側へ黒い線が伸びる。尾の付け根に黒い点。",
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
    "family": "テンジクダイ科",
    "genus": "スジイシモチ属",
    "aliases": [
      "ゲンナイ"
    ],
    "habitat": "本州中部以南の岩礁・港の岩場周辺",
    "diet": "小さな甲殻類など",
    "behavior": "岩場の周囲に群れを作ります。繁殖期の雄は卵を口に含んで守り、下あごがふくらんで見えることがあります。小魚でも子育ての観察ができる魚です。",
    "lifespan": "生息環境や個体により異なる",
    "taste": "唐揚げ・南蛮漬け・天ぷら・つみれ汁を紹介。",
    "cooking": [
      "唐揚げ",
      "南蛮漬け",
      "天ぷら",
      "つみれ汁"
    ],
    "seasonNote": "春〜秋を中心に、地域・水温で変化",
    "beginnerTip": "クロホシイシモチは目の後ろ上側の黒点、ネンブツダイは頭から続く線が手掛かり。横から写真を撮ると見比べやすくなります。",
    "safety": "小さな背びれの棘に注意。食用には種類の確認できた魚を使い、内臓とえらを除いて十分に加熱します。",
    "body": "淡い橙色で目と口が大きい。頭から背側へ黒い線が伸びる。尾の付け根に黒い点。",
    "fishing": "小針のサビキや胴突きで岩の周りを探ると掛かります。口は大きいものの体が小さいため、強く引き抜かず針を早めに外します。狙った魚と違っても陸上へ放置せず、持ち帰らない分は速やかに戻します。",
    "trivia": "口を動かす様子を念仏に見立てた名前ともいわれます。口内保育中の雄を長く観察のために持ち歩かないようにします。"
  },
  "launch": {
    "catchPhrase": "淡い橙色で目と口が大きい",
    "identify": [
      "淡い橙色で目と口が大きい",
      "頭から背側へ黒い線が伸びる",
      "尾の付け根に黒い点"
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
      },
      {
        "label": "胴突き",
        "href": "/methods/douzuki"
      }
    ],
    "spotFocus": "本州中部以南の岩礁・港の岩場周辺"
  },
  "media": {
    "image": "/images/fish/nenbutsudai-profile-20260919.webp"
  },
  "representativeRecipes": [
    "karaage",
    "nanban",
    "tempura",
    "tsumire"
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
        "slug": "karaage",
        "name": "唐揚げ",
        "preparation": "cooked",
        "summary": "薄い衣で揚げ、身と皮の食感を楽しみます。",
        "ingredients": [
          "ネンブツダイ 約250g（尾数は大きさに合わせる）",
          "酒・醤油 各小さじ2",
          "しょうが 小さじ1",
          "片栗粉・揚げ油 適量"
        ],
        "steps": [
          "うろこ・えら・内臓を除いて洗い、水分をよく拭く。大きいものは開いて中骨を外す。",
          "酒・醤油・しょうがを合わせ、冷蔵で10分ほど下味を付ける。",
          "汁気を取り片栗粉を薄くまぶす。",
          "170℃程度の油で中心まで十分に加熱し、油を切る。"
        ],
        "tips": [
          "小魚でも硬い骨が残る場合は無理に食べず外します。"
        ],
        "image": "/images/cooking/nenbutsudai-karaage.webp"
      },
      {
        "slug": "nanban",
        "name": "南蛮漬け",
        "preparation": "cooked",
        "summary": "揚げた魚を野菜と甘酢に漬ける、さっぱりした料理。",
        "ingredients": [
          "ネンブツダイ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/nenbutsudai-nanban.webp"
      },
      {
        "slug": "tempura",
        "name": "天ぷら",
        "preparation": "cooked",
        "summary": "小さな身を開き、薄い衣でふんわり揚げます。",
        "ingredients": [
          "ネンブツダイ 約250g（尾数は大きさに合わせる）",
          "天ぷら粉・冷水 適量",
          "揚げ油・塩 適量"
        ],
        "steps": [
          "小魚の頭・内臓を除き、開いて中骨を外す。",
          "水分を拭き、天ぷら粉を薄くまぶす。",
          "粉と冷水で衣を作り、魚をくぐらせる。",
          "170℃程度の油で中心まで加熱し、油を切る。"
        ],
        "tips": [
          "小骨の残りを指で確かめ、子どもに出す際はさらに確認します。"
        ],
        "image": "/images/cooking/nenbutsudai-tempura.webp"
      },
      {
        "slug": "tsumire",
        "name": "つみれ汁",
        "preparation": "cooked",
        "summary": "小魚の骨を除いた身をたたき、しょうがを利かせた汁にします。",
        "ingredients": [
          "ネンブツダイの身 150g（頭・内臓・骨を除いた重量）",
          "しょうが 小さじ1・味噌 小さじ1",
          "片栗粉 小さじ2",
          "だし400ml・ねぎ適量",
          "醤油 少々"
        ],
        "steps": [
          "魚の頭・内臓・骨を取り、身だけを細かくたたく。",
          "しょうが・味噌・片栗粉を混ぜる。",
          "だしを煮立て、小さく丸めた身を入れる。",
          "中心まで火を通し、醤油で整えてねぎを添える。"
        ],
        "tips": [
          "骨ごとすりつぶす作り方ではありません。少量ずつ丁寧に骨を除きます。"
        ],
        "image": "/images/cooking/nenbutsudai-tsumire.webp"
      }
    ]
  },
  "quest": {
    "fightProfile": "balanced",
    "fightPower": 30
  }
});
