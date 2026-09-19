import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.honda.co.jp/fishing/picture-book/katsuo/
export default defineFishSpecies({
  "base": {
    "slug": "katsuo",
    "name": "カツオ",
    "en": "Skipjack tuna",
    "scientific": "Katsuwonus pelamis",
    "season": "夏〜秋の船釣り（海域・回遊で変化）",
    "difficulty": 4,
    "danger": "高速で走る魚のため、糸を手へ巻かずドラグで対応。取り込みは船長の指示に従います。釣った後は速やかに冷却し、生食用は適切な処理条件が確認できるものを使います。",
    "methods": [
      "キャスティング",
      "ジギング"
    ],
    "methodSlugs": [
      "offshore-casting",
      "jigging"
    ],
    "guideSlugs": [
      "tackle-spec-reading",
      "tackle-connection-basics"
    ],
    "relatedSlugs": [
      "suma",
      "hirasouda",
      "kihada"
    ],
    "areas": [
      "黒潮の影響を受ける太平洋側の沖合。鳥や小魚の群れだけでなく船長の魚探情報も手掛かり。"
    ],
    "depth": "暖かい沖合の表層〜中層",
    "size": "40〜70cm前後、大型は1m近く",
    "desc": "厚みのある紡錘形の体に三日月形の尾。腹側の濃い縦筋が特徴ですが、体色や筋の見え方は状態で変化します。ソウダガツオ類とは体形・背びれの間隔なども合わせて見分けます。",
    "accent": "#70b3b4",
    "months": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "beginner": false,
    "kids": false,
    "waterTypes": [
      "sea"
    ]
  },
  "detail": {
    "family": "サバ科",
    "genus": "カツオ属",
    "aliases": [
      "ホンガツオ"
    ],
    "habitat": "黒潮の影響を受ける太平洋側の沖合。鳥や小魚の群れだけでなく船長の魚探情報も手掛かり。",
    "diet": "小魚・オキアミ・イカ類",
    "behavior": "群れで広く移動し、餌の群れを追います。水面に姿が見えなくても、船下の中層で反応が出ることがあります。",
    "lifespan": "海域・個体群によって異なる",
    "taste": "赤身の香りを生かす刺身とたたき、しょうが煮、竜田揚げを紹介。たたきは中が生なので、加熱料理とは分けて考えます。",
    "cooking": [
      "刺身",
      "たたき",
      "しょうが煮",
      "竜田揚げ"
    ],
    "seasonNote": "夏〜秋の船釣り（海域・回遊で変化）",
    "beginnerTip": "最初はレンタルのある船を選び、指定のオモリ・ハリス・針を予約時に確認。コマセ船とルアー船では準備が違います。",
    "safety": "高速で走る魚のため、糸を手へ巻かずドラグで対応。取り込みは船長の指示に従います。釣った後は速やかに冷却し、生食用は適切な処理条件が確認できるものを使います。",
    "body": "厚みのある紡錘形の体に三日月形の尾。腹側の濃い縦筋が特徴ですが、体色や筋の見え方は状態で変化します。ソウダガツオ類とは体形・背びれの間隔なども合わせて見分けます。",
    "fishing": "ルアーでは船長が指定する方向と距離へ投げ、群れの進路を横切るように引きます。小魚が小さければルアーも小さく。掛かった直後は走らせる余裕を残し、周囲と声を掛け合っておまつりを防ぎます。",
    "trivia": "初ガツオ・戻りガツオは別種ではありません。季節と回遊に伴う呼び方で、脂の乗りにも個体差があります。"
  },
  "launch": {
    "catchPhrase": "腹側に複数の濃い縦筋",
    "identify": [
      "腹側に複数の濃い縦筋",
      "短い胸びれと力強い紡錘形",
      "尾の前に小離鰭が並ぶ"
    ],
    "imageNotes": [
      "体形",
      "ひれ",
      "見分け方",
      "食べ方"
    ],
    "related": [],
    "methodLinks": [
      {
        "label": "キャスティング",
        "href": "/methods/offshore-casting"
      },
      {
        "label": "ジギング",
        "href": "/methods/jigging"
      }
    ],
    "spotFocus": "黒潮の影響を受ける太平洋側の沖合。鳥や小魚の群れだけでなく船長の魚探情報も手掛かり。"
  },
  "media": {
    "image": "/images/fish/katsuo-profile-20260919.webp"
  },
  "quest": {
    "fightProfile": "runner",
    "fightPower": 80,
    "stamina": 80,
    "runPower": 90,
    "habitats": [
      "warm-ocean"
    ]
  },
  "representativeRecipes": [
    "sashimi",
    "tataki",
    "shogani",
    "tatsuta"
  ],
  "cooking": {
    "prep": [
      "冷却用の氷と魚が入るクーラーを先に用意する。",
      "血や内臓を処理し、海水氷等で速やかに冷やして持ち帰る。",
      "頭・内臓を除き三枚おろしにして、血合い骨を外し背側・腹側の柵に分ける。",
      "料理に合わせて皮を引く。生食に適する処理が確認できない身は加熱する。"
    ],
    "recipes": [
      {
        "slug": "sashimi",
        "name": "刺身",
        "preparation": "raw",
        "summary": "生食用に処理された赤身を厚めに引き、しょうがやねぎを添えます。",
        "ingredients": [
          "生食用に処理されたカツオの身 200g",
          "しょうゆ 適量",
          "しょうが・ねぎ 適量"
        ],
        "steps": [
          "生食用の処理・管理条件を確認し、清潔な道具を準備する。",
          "皮と血合い骨を除き、冷たい柵の水分を拭く。",
          "柵を包丁で長く引き、食べやすい厚さに切る。",
          "冷えた皿へ盛り、薬味を添えてすぐ食べる。"
        ],
        "tips": [
          "生食の注意は共通案内を確認してください。",
          "切った身を常温で置かず、食べる直前に仕上げます。"
        ],
        "image": "/images/cooking/katsuo-sashimi.webp"
      },
      {
        "slug": "tataki",
        "name": "たたき",
        "preparation": "raw",
        "summary": "表面だけを香ばしく焼き、薬味とポン酢を合わせる定番。中心は生の料理です。",
        "ingredients": [
          "生食用カツオの柵 250g",
          "塩 少々・油 小さじ1",
          "薄切り玉ねぎ・ねぎ・にんにく 適量",
          "ポン酢 適量"
        ],
        "steps": [
          "生食用に管理された柵の水分を拭き、塩を軽く振る。",
          "フライパンへ油を入れ、表面を短時間ずつ焼いて香ばしくする。",
          "清潔なバットへ取り、速やかに冷まして冷蔵する。",
          "食べる直前に切り、薬味とポン酢を添える。"
        ],
        "tips": [
          "表面を焼いても内部の寄生虫対策にはなりません。生食に適した処理が前提です。"
        ],
        "image": "/images/cooking/katsuo-tataki.webp"
      },
      {
        "slug": "shogani",
        "name": "しょうが煮",
        "preparation": "cooked",
        "summary": "カツオの赤身をしょうがと甘辛く煮ます。刺身とは違う、ご飯に合う食べ方。",
        "ingredients": [
          "カツオの切り身 250g",
          "しょうが 20g",
          "酒100ml・水100ml",
          "醤油・みりん 各大さじ2・砂糖大さじ1"
        ],
        "steps": [
          "カツオを一口大に切り、水気を拭く。しょうがは千切りにする。",
          "鍋へ水・酒・調味料・しょうがを入れ煮立てる。",
          "魚を加え、あくを取りながら中心まで十分に加熱する。",
          "魚を取り出し煮汁を好みの濃さまで煮詰めてかける。"
        ],
        "tips": [
          "強く煮立て続けず、身がぱさつく前に取り出します。"
        ],
        "image": "/images/cooking/katsuo-shogani.webp"
      },
      {
        "slug": "tatsuta",
        "name": "竜田揚げ",
        "preparation": "cooked",
        "summary": "しょうが醤油で下味を付けたカツオを片栗粉で揚げます。",
        "ingredients": [
          "カツオ 250g",
          "醤油・酒 各大さじ1",
          "おろししょうが 小さじ1",
          "片栗粉・油 適量"
        ],
        "steps": [
          "魚を厚さをそろえた一口大に切る。",
          "醤油・酒・しょうがを合わせ、冷蔵庫で15分ほど下味を付ける。",
          "汁気を拭き片栗粉を薄くまぶす。",
          "170℃程度の油で中心まで十分に加熱し、油を切る。"
        ],
        "tips": [
          "厚い塊を避け、衣だけ先に色付かないようにします。"
        ],
        "image": "/images/cooking/katsuo-tatsuta.webp"
      }
    ]
  }
});
