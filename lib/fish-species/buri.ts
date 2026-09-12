import {defineFishSpecies} from './define';

export default defineFishSpecies({
  "base": {
    "slug": "buri",
    "name": "ブリ",
    "en": "Japanese amberjack",
    "scientific": "Seriola quinqueradiata",
    "season": "秋〜冬",
    "difficulty": 4,
    "danger": "低",
    "methods": [
      "ノマセ",
      "ジギング"
    ],
    "areas": [
      "明石",
      "紀北",
      "日本海"
    ],
    "depth": "20〜100m",
    "size": "60〜100cm",
    "desc": "強烈な引きが魅力の大型青物。生き餌を使うノマセ釣りやジギングで狙います。",
    "accent": "#99b9cf",
    "months": [
      10,
      11,
      12,
      1,
      2
    ],
    "beginner": false,
    "kids": false
  },
  "detail": {
    "family": "アジ科",
    "genus": "ブリ属",
    "aliases": [
      "ハマチ",
      "メジロ",
      "ワラサ",
      "イナダ"
    ],
    "habitat": "沿岸〜沖合の中層・表層",
    "diet": "アジ、イワシ、サバなどの小魚",
    "behavior": "群れで広く回遊し、ベイトを追って活発に移動する",
    "lifespan": "7〜10年前後",
    "taste": "冬の寒ブリは脂が強く、刺身やしゃぶしゃぶで特に人気",
    "cooking": [
      "刺身",
      "ぶりしゃぶ",
      "照り焼き",
      "塩焼き",
      "ぶり大根"
    ],
    "seasonNote": "秋から冬に大型が狙いやすく、冬は食味も最盛期。",
    "beginnerTip": "ノマセ釣りでは生き餌を弱らせないことが大切。ドラグを適切に設定して、最初の強烈な走りに備える。",
    "safety": "大型は非常に力が強い。船上で暴れる魚やフックによる事故に注意。",
    "body": "紡錘形の強い体と黄色い体側線が特徴。成長に伴い呼び名が変わる代表的な出世魚です。",
    "fishing": "ノマセ釣りとジギングが代表的。明石など潮の速いエリアでは底取りとオマツリ対策が重要です。",
    "trivia": "関西ではツバス→ハマチ→メジロ→ブリなど、地域ごとに成長段階の呼び名が異なります。"
  },
  "launch": {
    "catchPhrase": "一度走れば止まらない。青物の王道。",
    "identify": [
      "体側に明瞭な黄色いライン",
      "太く強い紡錘形の体",
      "目から口元へ黄色味が続くことがある",
      "成長段階で呼び名が変わる出世魚"
    ],
    "imageNotes": [
      "全身：黄色い体側線と厚い魚体",
      "頭部：大型青物らしい強い顎",
      "生息：ベイトを追って沿岸〜沖を回遊",
      "食味：寒ブリは脂が強く、しゃぶしゃぶにも"
    ],
    "related": [
      "ハマチ",
      "カンパチ",
      "ヒラマサ"
    ],
    "methodLinks": [
      {
        "label": "ノマセ釣り",
        "href": "/methods/nomase"
      },
      {
        "label": "ジギング",
        "href": "/methods"
      }
    ],
    "spotFocus": "明石海峡・紀北・日本海"
  },
  "tableGuide": {
    "lead": "脂の乗りを生かす刺身から、火を入れて旨味を引き出す料理まで相性が良い。",
    "dishes": [
      {
        "name": "刺身",
        "emoji": "🍣",
        "desc": "脂の乗った身をそのまま味わう定番。腹身は特に濃厚。"
      },
      {
        "name": "ぶりしゃぶ",
        "emoji": "🍲",
        "desc": "薄切りをさっと湯にくぐらせ、脂を軽く落として楽しむ。"
      },
      {
        "name": "照り焼き",
        "emoji": "🍱",
        "desc": "甘辛いタレと脂の強い身がよく合う王道料理。"
      },
      {
        "name": "ぶり大根",
        "emoji": "🥘",
        "desc": "アラの旨味を大根に含ませる冬の定番。"
      }
    ]
  },
  "featuredOrder": 3
});
