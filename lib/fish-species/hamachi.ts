import {defineFishSpecies} from './define';

export default defineFishSpecies({
  quest: {methods:['shore-jigging','nomase','jigging']},
  "base": {
    "slug": "hamachi",
    "name": "ハマチ",
    "en": "Young Japanese amberjack",
    "scientific": "Seriola quinqueradiata",
    "season": "夏〜秋",
    "difficulty": 2,
    "danger": "低",
    "methods": [
      "ノマセ",
      "ジギング",
      "サビキ"
    ],
    "areas": [
      "明石",
      "大阪湾",
      "瀬戸内"
    ],
    "depth": "10〜80m",
    "size": "40〜60cm",
    "desc": "ブリの若魚。比較的数が狙いやすく、青物入門にもおすすめです。",
    "accent": "#87a9b9",
    "months": [
      7,
      8,
      9,
      10,
      11
    ],
    "beginner": true,
    "kids": false
  },
  "detail": {
    "family": "アジ科",
    "genus": "ブリ属",
    "aliases": [
      "ツバス",
      "イナダ",
      "ワカシ"
    ],
    "habitat": "沿岸〜沖合の表層・中層",
    "diet": "イワシ、アジなどの小魚",
    "behavior": "群れでベイトを追って回遊し、潮通しの良い場所へ集まりやすい",
    "lifespan": "成長するとブリになる",
    "taste": "ブリよりあっさりした個体が多く、刺身や照り焼きに向く",
    "cooking": [
      "刺身",
      "照り焼き",
      "塩焼き",
      "漬け"
    ],
    "seasonNote": "夏〜秋は若魚の群れが沿岸へ入り、岸・船とも数釣りの好機があります。",
    "beginnerTip": "ノマセでは餌を元気に保つ。ジギングでは群れの棚を外さずテンポよく探る。",
    "safety": "掛かるとよく走るので周囲とのオマツリとフック事故に注意。",
    "body": "ブリの若魚で、紡錘形の体と黄色い側線・尾びれが目立ちます。",
    "fishing": "ノマセ、ジギング、ショアジギングなど。回遊待ちになるため潮とベイトの有無が重要です。",
    "trivia": "「ハマチ」がどの大きさを指すかは地域によって異なります。"
  }
});
