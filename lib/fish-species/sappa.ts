import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.honda.co.jp/fishing/picture-book/sappa/
export default defineFishSpecies({
  "base": {
    "slug": "sappa",
    "name": "サッパ",
    "en": "Japanese sardinella",
    "scientific": "Sardinella zunasi",
    "season": "春〜秋を中心に、地域・水温で変化",
    "difficulty": 1,
    "danger": "腹側の硬い鱗で手を擦らないよう魚ばさみを使用。酢漬けも生食料理であり、酢だけを寄生虫対策にしないでください。",
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
      "konoshiro",
      "iwashi",
      "katakuchi"
    ],
    "areas": [
      "内湾・河口近くの穏やかな沿岸。瀬戸内海など"
    ],
    "depth": "群れが回る表層〜中層",
    "size": "10〜20cmほど",
    "desc": "平たく体高のある銀色の体。腹の縁が硬くぎざぎざする。マイワシのような体側の黒点列がない。",
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
    "family": "ニシン科",
    "genus": "サッパ属",
    "aliases": [
      "ママカリ"
    ],
    "habitat": "内湾・河口近くの穏やかな沿岸。瀬戸内海など",
    "diet": "動物プランクトンなど",
    "behavior": "湾内を群れで移動し、細かな餌を食べます。群れが離れるとアタリが途切れるため、同じ棚に固執せず周囲の釣れ方も見ます。",
    "lifespan": "生息環境や個体により異なる",
    "taste": "ままかりの酢漬け・塩焼き・唐揚げ・南蛮漬けを紹介。",
    "cooking": [
      "ままかりの酢漬け",
      "塩焼き",
      "唐揚げ",
      "南蛮漬け"
    ],
    "seasonNote": "春〜秋を中心に、地域・水温で変化",
    "beginnerTip": "アタリがあるのに掛からない場合は針の大きさと仕掛けの動かしすぎを見直します。",
    "safety": "腹側の硬い鱗で手を擦らないよう魚ばさみを使用。酢漬けも生食料理であり、酢だけを寄生虫対策にしないでください。",
    "body": "平たく体高のある銀色の体。腹の縁が硬くぎざぎざする。マイワシのような体側の黒点列がない。",
    "fishing": "小針サビキを使い、まき餌と仕掛けが同じ層に漂うようにします。まず足元の中層から探り、群れの高さが変わったら仕掛けの位置も調整。強く合わせず、一定の速さで巻き上げます。",
    "trivia": "「ままかり」はご飯を借りに行くほどおいしいという名の由来で知られ、岡山の郷土料理にも使われます。"
  },
  "launch": {
    "catchPhrase": "平たく体高のある銀色の体",
    "identify": [
      "平たく体高のある銀色の体",
      "腹の縁が硬くぎざぎざする",
      "マイワシのような体側の黒点列がない"
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
    "spotFocus": "内湾・河口近くの穏やかな沿岸。瀬戸内海など"
  },
  "media": {
    "image": "/images/fish/sappa-profile-20260919.webp"
  },
  "representativeRecipes": [
    "sunomono",
    "shioyaki",
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
        "slug": "sunomono",
        "stepImages": [
  {
    "step": 1,
    "src": "/images/cooking/steps/sappa-sunomono-1.svg",
    "alt": "サッパのままかりの酢漬け：三枚おろしの小骨を取る",
    "caption": "生食用に処理された身を使います。腹骨をすき取り、身の中央に残る小骨も確かめます。"
  },
  {
    "step": 2,
    "src": "/images/cooking/steps/sappa-sunomono-2.svg",
    "alt": "サッパのままかりの酢漬け：冷蔵で塩をなじませる",
    "caption": "時間を置く間も冷蔵します。出た水分を拭いてから合わせ酢へ移します。"
  },
  {
    "step": 3,
    "src": "/images/cooking/steps/sappa-sunomono-3.svg",
    "alt": "サッパのままかりの酢漬け：浅い容器で酢に浸す",
    "caption": "身を厚く重ねず、合わせ酢が全体に行き渡るようにします。塩や酢は寄生虫対策にはなりません。"
  },
  {
    "step": 4,
    "src": "/images/cooking/steps/sappa-sunomono-4.svg",
    "alt": "サッパのままかりの酢漬け：銀皮を上にして盛る",
    "caption": "食べる直前に汁気を切り、身を崩さないように取り出します。"
  }
],
        "detail": {
  "intro": "サッパは岡山で「ままかり」と呼ばれる小魚。酢漬けには開いた魚を使う作り方もありますが、ここでは食べやすさを優先して三枚おろしにします。焼いてから酢に漬ける料理とは下処理が異なります。",
  "checkpoints": [
    {
      "title": "小骨を先に確認する",
      "body": "腹骨をすき取り、指の腹で身の中央をなぞって残った骨を探します。銀皮を残して盛ると見た目もきれいです。骨が気になる場合は無理に丸ごと食べず、取り除きます。"
    },
    {
      "title": "塩をした後の水分を持ち込まない",
      "body": "塩を振って出た水分はペーパーで拭きます。水分が多いまま漬けると合わせ酢が薄まりやすいため、身を重ねすぎず浅い容器で浸します。"
    },
    {
      "title": "酢漬けと焼き酢漬けを選び分ける",
      "body": "このページは生食用の身を使う作り方です。生食向けに処理されたものを用意できない場合は、中心まで加熱してから甘酢を合わせる焼き酢漬けに切り替えます。"
    }
  ],
  "troubleshooting": [
    {
      "problem": "身が崩れて盛りにくい",
      "solution": "漬けた身を箸で何度もつかまず、平たい道具で下から支えます。盛り付ける直前まで冷蔵し、汁気を切って取り出します。"
    },
    {
      "problem": "酢が強すぎる",
      "solution": "合わせ酢は魚を入れる前に味を調整します。取り出した魚に、薄切りしょうがやきゅうりを少量添えると食べやすくなります。"
    },
    {
      "problem": "骨がまだ硬い",
      "solution": "酢に漬ければすべての骨が食べられるとは限りません。漬け時間を延ばすことで解決しようとせず、骨を取り除いてください。"
    }
  ],
  "sources": [
    {
      "label": "農林水産省：ママカリの酢漬け",
      "url": "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/41_3_okayama.html"
    },
    {
      "label": "岡山県：焼きママカリの酢漬け",
      "url": "https://www.pref.okayama.jp/page/detail-30245.html"
    }
  ]
},
        "name": "ままかりの酢漬け",
        "preparation": "raw",
        "summary": "サッパの銀皮を生かす郷土料理。生食用の処理が確認できる身を使います。",
        "ingredients": [
          "生食用サッパの柵 200g",
          "塩 小さじ1/2",
          "酢100ml・砂糖 大さじ1",
          "しょうが10g"
        ],
        "steps": [
          "生食用に管理されたサッパを三枚におろし、小骨を丁寧に除く。",
          "塩を振って冷蔵で20分ほど置き、出た水分を拭く。",
          "酢・砂糖・しょうがを合わせ、身を浸して冷蔵する。",
          "食べる直前に取り出し、食べやすく盛る。"
        ],
        "tips": [
          "酢や塩ではアニサキス対策になりません。生食に適した処理が前提です。"
        ],
        "image": "/images/cooking/sappa-sunomono.webp"
      },
      {
        "slug": "shioyaki",
        "name": "塩焼き",
        "preparation": "cooked",
        "summary": "皮を香ばしく焼き、身の風味を味わう食べ方。",
        "ingredients": [
          "サッパ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/sappa-shioyaki.webp"
      },
      {
        "slug": "karaage",
        "name": "唐揚げ",
        "preparation": "cooked",
        "summary": "薄い衣で揚げ、身と皮の食感を楽しみます。",
        "ingredients": [
          "サッパ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/sappa-karaage.webp"
      },
      {
        "slug": "nanban",
        "name": "南蛮漬け",
        "preparation": "cooked",
        "summary": "揚げた魚を野菜と甘酢に漬ける、さっぱりした料理。",
        "ingredients": [
          "サッパ 約250g（尾数は大きさに合わせる）",
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
        "image": "/images/cooking/sappa-nanban.webp"
      }
    ]
  },
  "quest": {
    "fightProfile": "balanced",
    "fightPower": 30
  }
});
