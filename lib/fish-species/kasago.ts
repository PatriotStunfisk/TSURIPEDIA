import {defineFishSpecies} from './define';

export default defineFishSpecies({
  "base": {
    "slug": "kasago",
    "name": "カサゴ",
    "en": "Marbled rockfish",
    "scientific": "Sebastiscus marmoratus",
    "season": "通年",
    "difficulty": 2,
    "danger": "ヒレに注意",
    "methods": [
      "胴突き",
      "穴釣り"
    ],
    "areas": [
      "堤防",
      "岩礁帯"
    ],
    "depth": "2〜50m",
    "size": "15〜30cm",
    "desc": "岩陰に潜む根魚の代表。足元でも狙いやすく、煮付けや唐揚げも絶品です。",
    "accent": "#c7896e",
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
    "beginner": true,
    "kids": true
  },
  "detail": {
    "family": "メバル科",
    "genus": "カサゴ属",
    "aliases": [
      "ガシラ",
      "アラカブ"
    ],
    "habitat": "岩礁・テトラ・堤防際・根周り",
    "diet": "小魚、エビ、カニなど",
    "behavior": "障害物の近くで待ち伏せし、目の前のエサに素早く反応する",
    "lifespan": "10年前後になる個体もいる",
    "taste": "白身で旨味が強く、煮付けや汁物に向く",
    "cooking": [
      "煮付け",
      "唐揚げ",
      "味噌汁",
      "刺身",
      "塩焼き"
    ],
    "seasonNote": "一年中狙えるが、冬〜春も安定したターゲット。",
    "beginnerTip": "仕掛けを底から離しすぎず、根掛かりしない範囲で障害物の際を丁寧に探る。",
    "safety": "背びれやエラ周りの棘が鋭いので、素手で強く握らない。",
    "body": "大きな口とまだら模様の体色が特徴。岩や海藻に紛れやすい保護色を持ちます。",
    "fishing": "穴釣り、胴突き、ブラクリなどで足元から狙えるため、根魚入門として人気があります。",
    "trivia": "関西では「ガシラ」、九州の一部では「アラカブ」と呼ばれるなど地方名が豊富です。"
  },
  "launch": {
    "catchPhrase": "足元の岩陰に潜む、根魚の定番。",
    "identify": [
      "大きな口と頭部",
      "赤褐色〜茶色のまだら模様",
      "背びれに鋭い棘",
      "岩に紛れる凹凸のある体表"
    ],
    "imageNotes": [
      "全身：大きな頭と根魚体型",
      "背びれ：鋭い棘を確認",
      "生息：岩礁・テトラ・根周りに定位",
      "食味：煮付け・唐揚げ・汁物が絶品"
    ],
    "related": [
      "メバル",
      "ソイ",
      "ハタ類"
    ],
    "methodLinks": [
      {
        "label": "胴突き釣り",
        "href": "/methods"
      },
      {
        "label": "穴釣り",
        "href": "/methods"
      }
    ],
    "spotFocus": "堤防・テトラ・岩礁帯"
  },
  "tableGuide": {
    "lead": "旨味の濃い白身と良い出汁が魅力。身だけでなくアラまで使いやすい。",
    "dishes": [
      {
        "name": "煮付け",
        "emoji": "🥘",
        "desc": "甘辛く煮ると身離れがよく、濃い旨味を楽しめる。"
      },
      {
        "name": "唐揚げ",
        "emoji": "🍗",
        "desc": "小〜中型は香ばしく揚げるとヒレ周りまで楽しめる。"
      },
      {
        "name": "刺身",
        "emoji": "🍣",
        "desc": "良型の新鮮な個体は締まった白身と甘みが魅力。"
      },
      {
        "name": "味噌汁",
        "emoji": "🍲",
        "desc": "アラから濃い出汁が出るため汁物との相性が抜群。"
      }
    ]
  },
  "featuredOrder": 5
});
