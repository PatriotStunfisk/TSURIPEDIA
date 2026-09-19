import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.miegyoren.or.jp/fisheries-in-mie/uopedia/kyusen/
export default defineFishSpecies({
  ecologyVisual:{
  "title": "砂の中で夜を過ごす",
  "description": "キュウセンは夜や水温の低い時期、砂に潜って休みます。昼間の暖かい時間帯に出会いやすいのは、この生活とも関係しています。砂地と岩場が混じる環境が手掛かりです。",
  "image": "/images/ecology/kyusen-20260919.webp",
  "alt": "キュウセンの砂の中で夜を過ごす様子",
  "width": 1200,
  "height": 800,
  "source": {
    "label": "生態の参考資料",
    "url": "https://www.miegyoren.or.jp/fisheries-in-mie/uopedia/kyusen/"
  }
},
  "base": {
    "slug": "kyusen",
    "name": "キュウセン",
    "en": "Multicolorfin rainbowfish",
    "scientific": "Parajulis poecilepterus",
    "season": "春〜秋を中心に、地域・水温で変化",
    "difficulty": 1,
    "danger": "小骨とひれの棘に注意。持ち帰る魚は砂や汚れを落として冷却し、小さな個体を取りすぎないようにします。",
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
      "hoshisasanoha",
      "akasasanoha",
      "kisu"
    ],
    "areas": [
      "日本各地の沿岸。砂底に岩や海藻が点在する場所"
    ],
    "depth": "浅い砂地と岩場の周辺",
    "size": "15〜25cm前後",
    "desc": "体側に細い赤褐色の縦線が並ぶ。大型の雄は緑がかり胸びれ後方に黒斑。小型の個体は赤褐色で雌雄の判断は色だけでは難しい。",
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
    "genus": "キュウセン属",
    "aliases": [
      "アオベラ",
      "アカベラ"
    ],
    "habitat": "日本各地の沿岸。砂底に岩や海藻が点在する場所",
    "diet": "小さな甲殻類・貝・ゴカイ類",
    "behavior": "昼に活動し、夜や低水温時は砂の中で休みます。冬に同じ場所で釣れにくいのは、この生活様式も関係しています。",
    "lifespan": "生息環境や個体により異なる",
    "taste": "塩焼き・煮付け・唐揚げ・南蛮漬けを紹介。",
    "cooking": [
      "塩焼き",
      "煮付け",
      "唐揚げ",
      "南蛮漬け"
    ],
    "seasonNote": "春〜秋を中心に、地域・水温で変化",
    "beginnerTip": "夜より日中の暖かい時間帯を選び、イソメを短く付けると針掛かりしやすくなります。",
    "safety": "小骨とひれの棘に注意。持ち帰る魚は砂や汚れを落として冷却し、小さな個体を取りすぎないようにします。",
    "body": "体側に細い赤褐色の縦線が並ぶ。大型の雄は緑がかり胸びれ後方に黒斑。小型の個体は赤褐色で雌雄の判断は色だけでは難しい。",
    "fishing": "砂と岩が混じる場所をちょい投げで探ります。底を少し動かして止め、餌をついばむアタリの後に聞き合わせます。根掛かりが多い場所は引き続けず、仕掛けを浮かせて回収します。",
    "trivia": "アオベラ・アカベラは別種名ではなく主に色による呼び名。大型の緑色個体は雄です。"
  },
  "launch": {
    "catchPhrase": "体側に細い赤褐色の縦線が並ぶ",
    "identify": [
      "体側に細い赤褐色の縦線が並ぶ",
      "大型の雄は緑がかり胸びれ後方に黒斑",
      "小型の個体は赤褐色で雌雄の判断は色だけでは難しい"
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
    "spotFocus": "日本各地の沿岸。砂底に岩や海藻が点在する場所"
  },
  "media": {
    "image": "/images/fish/kyusen-profile-20260919.webp"
  },
  "representativeRecipes": [
    "shioyaki",
    "nitsuke",
    "karaage",
    "nanban"
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
          "キュウセン 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/kyusen-shioyaki.webp"
      },
      {
        "slug": "nitsuke",
        "name": "煮付け",
        "preparation": "cooked",
        "summary": "しょうがと甘辛い煮汁で、身を崩さず煮ます。",
        "ingredients": [
          "キュウセン 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/kyusen-nitsuke.webp"
      },
      {
        "slug": "karaage",
        "name": "唐揚げ",
        "preparation": "cooked",
        "summary": "薄い衣で揚げ、身と皮の食感を楽しみます。",
        "ingredients": [
          "キュウセン 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/kyusen-karaage.webp"
      },
      {
        "slug": "nanban",
        "name": "南蛮漬け",
        "preparation": "cooked",
        "summary": "揚げた魚を野菜と甘酢に漬ける、さっぱりした料理。",
        "ingredients": [
          "キュウセン 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/kyusen-nanban.webp"
      }
    ]
  },
  "quest": {
    "fightProfile": "balanced",
    "fightPower": 30
  }
});
