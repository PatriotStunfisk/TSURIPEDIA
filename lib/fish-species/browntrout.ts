import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.pref.kanagawa.jp/docs/a4y/images/browntrout.html
export default defineFishSpecies({
  "base": {
    "slug": "browntrout",
    "name": "ブラウントラウト",
    "en": "Brown trout",
    "scientific": "Salmo trutta",
    "season": "春・秋を中心に、禁漁期と施設の営業期間を確認",
    "difficulty": 3,
    "danger": "遊漁券・禁漁期・持ち帰り規則を守り、他の水域へ放流しないでください。料理は中心まで加熱し、天然淡水魚の生食を案内しません。",
    "methods": [
      "トラウトルアー"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "tackle-spec-reading",
      "tackle-connection-basics"
    ],
    "relatedSlugs": [
      "nijimasu",
      "iwana",
      "yamame"
    ],
    "areas": [
      "放流・定着している湖や河川、管理釣り場。地域の遊漁規則を確認"
    ],
    "depth": "冷たい湖の岸寄り・かけ上がり、流れの陰",
    "size": "25〜60cm前後、大型はさらに成長",
    "desc": "褐色から金色がかった体側。黒い斑点と淡い縁の赤い斑点。ニジマスの赤紫色の帯がない。",
    "accent": "#7fa9a4",
    "months": [
      3,
      4,
      5,
      6,
      7,
      9,
      10,
      11
    ],
    "beginner": false,
    "kids": false,
    "waterTypes": [
      "fresh"
    ]
  },
  "detail": {
    "family": "サケ科",
    "genus": "タイセイヨウサケ属",
    "aliases": [],
    "habitat": "放流・定着している湖や河川、管理釣り場。地域の遊漁規則を確認",
    "diet": "水生昆虫・陸生昆虫・小魚",
    "behavior": "冷たい水を好み、大きくなると小魚もよく捕食します。石や岸の影から餌へ出るため、同じ場所へ立ち込む前に岸際を静かに探ることが有効です。",
    "lifespan": "生息環境や個体により異なる",
    "taste": "ムニエル・塩焼き・ホイル焼き・フライを紹介。",
    "cooking": [
      "ムニエル",
      "塩焼き",
      "ホイル焼き",
      "フライ"
    ],
    "seasonNote": "春・秋を中心に、禁漁期と施設の営業期間を確認",
    "beginnerTip": "最初は対象魚として放流される管理釣り場を選び、使用ルアー・針・持ち帰りのルールを確認すると準備しやすくなります。",
    "safety": "遊漁券・禁漁期・持ち帰り規則を守り、他の水域へ放流しないでください。料理は中心まで加熱し、天然淡水魚の生食を案内しません。",
    "body": "褐色から金色がかった体側。黒い斑点と淡い縁の赤い斑点。ニジマスの赤紫色の帯がない。",
    "fishing": "小型ミノーやスプーンで岸際・流れの緩む境を探ります。まず上流側や岸から距離を取り、魚の前を自然に通すコースを選択。追うだけなら速度を落とす、深さを変えるなど一つずつ試します。",
    "trivia": "ヨーロッパ原産の外来魚。日本の在来魚への影響があるため、人気の釣魚でも移植してよい魚ではありません。"
  },
  "launch": {
    "catchPhrase": "褐色から金色がかった体側",
    "identify": [
      "褐色から金色がかった体側",
      "黒い斑点と淡い縁の赤い斑点",
      "ニジマスの赤紫色の帯がない"
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
        "label": "トラウトルアー",
        "href": "/methods/trout-lure"
      }
    ],
    "spotFocus": "放流・定着している湖や河川、管理釣り場。地域の遊漁規則を確認"
  },
  "media": {
    "image": "/images/fish/browntrout-profile-20260919.webp"
  },
  "representativeRecipes": [
    "meuniere",
    "shioyaki",
    "foil",
    "fry"
  ],
  "cooking": {
    "prep": [
      "持ち帰りが認められる個体だけを速やかに冷却する。",
      "うろこ・えら・内臓を除き、背骨沿いの血を洗い落として水分を拭く。",
      "三枚におろし、腹骨と小骨を丁寧に除く。",
      "中心まで加熱する料理に使い、生食にはしない。"
    ],
    "recipes": [
      {
        "slug": "meuniere",
        "name": "ムニエル",
        "preparation": "cooked",
        "summary": "薄い小麦粉をまとわせ、バターで香ばしく焼きます。",
        "ingredients": [
          "ブラウントラウトの切り身 250g",
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
        "image": "/images/cooking/browntrout-meuniere.webp"
      },
      {
        "slug": "shioyaki",
        "name": "塩焼き",
        "preparation": "cooked",
        "summary": "皮を香ばしく焼き、身の風味を味わう食べ方。",
        "ingredients": [
          "ブラウントラウトの切り身 250g",
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
        "image": "/images/cooking/browntrout-shioyaki.webp"
      },
      {
        "slug": "foil",
        "name": "ホイル焼き",
        "preparation": "cooked",
        "summary": "ブラウントラウトの切り身を、野菜と包んで蒸し焼きにします。",
        "ingredients": [
          "ブラウントラウトの切り身 250g",
          "玉ねぎ1/4個・きのこ50g",
          "バター10g・酒 大さじ2",
          "塩・こしょう 少々"
        ],
        "steps": [
          "骨を除いた切り身の水分を拭き、塩・こしょうを振る。",
          "アルミホイルへ薄切り玉ねぎ・魚・きのこを置く。",
          "酒とバターを加え、汁が漏れないよう包む。",
          "オーブンやふた付きフライパンで、中心まで十分に加熱する。"
        ],
        "tips": [
          "包みを開けたときの蒸気に注意。淡水魚は中まで加熱します。"
        ],
        "image": "/images/cooking/browntrout-foil.webp"
      },
      {
        "slug": "fry",
        "name": "フライ",
        "preparation": "cooked",
        "summary": "白身の厚みを残し、パン粉の軽い衣で揚げます。",
        "ingredients": [
          "ブラウントラウトの切り身 250g",
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
        "image": "/images/cooking/browntrout-fry.webp"
      }
    ]
  },
  "quest": {
    "fightProfile": "jumper",
    "fightPower": 50
  }
});
