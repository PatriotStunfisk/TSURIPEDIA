import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.honda.co.jp/fishing/picture-book/kosyoudai/
export default defineFishSpecies({
  "base": {
    "slug": "koshoudai",
    "name": "コショウダイ",
    "en": "Crescent sweetlips",
    "scientific": "Plectorhinchus cinctus",
    "season": "春〜秋を中心に、地域・水温で変化",
    "difficulty": 3,
    "danger": "大型は強く引くので竿を放置せず、ひれの棘を避けてタモで取り込みます。生食用は適切な処理が確認できる身を使用。",
    "methods": [
      "ぶっこみ釣り",
      "ウキ釣り"
    ],
    "methodSlugs": [
      "bukkomi",
      "uki"
    ],
    "guideSlugs": [
      "tackle-spec-reading",
      "tackle-connection-basics"
    ],
    "relatedSlugs": [
      "isaki",
      "chinu",
      "ishidai"
    ],
    "areas": [
      "西日本を中心とする沿岸。相模湾・東京湾でも見られる"
    ],
    "depth": "浅い岩礁と砂底が接する場所",
    "size": "30〜60cm前後",
    "desc": "体の前側に太い斜めの暗色帯。後半の体やひれに細かい黒点。厚い唇と体高のある銀色の体。",
    "accent": "#7fa9a4",
    "months": [
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
    "beginner": false,
    "kids": false,
    "waterTypes": [
      "sea"
    ]
  },
  "detail": {
    "family": "イサキ科",
    "genus": "コショウダイ属",
    "aliases": [
      "エゴダイ"
    ],
    "habitat": "西日本を中心とする沿岸。相模湾・東京湾でも見られる",
    "diet": "甲殻類・ゴカイ類・小魚",
    "behavior": "海底の甲殻類やゴカイを探し、大型は小魚も食べます。岩と砂の境や構造物の周囲が狙い所になり、夜の底釣りで出会うこともあります。",
    "lifespan": "生息環境や個体により異なる",
    "taste": "刺身・ムニエル・塩焼き・煮付けを紹介。",
    "cooking": [
      "刺身",
      "ムニエル",
      "塩焼き",
      "煮付け"
    ],
    "seasonNote": "春〜秋を中心に、地域・水温で変化",
    "beginnerTip": "チヌ狙いに混じることもあります。斜めの帯と黒点を確認し、コロダイと混同しないようにしてください。",
    "safety": "大型は強く引くので竿を放置せず、ひれの棘を避けてタモで取り込みます。生食用は適切な処理が確認できる身を使用。",
    "body": "体の前側に太い斜めの暗色帯。後半の体やひれに細かい黒点。厚い唇と体高のある銀色の体。",
    "fishing": "投げ釣りやぶっこみ釣りで底を狙います。小型にはイソメ、大型にはエビや貝などを使い、根際へ仕掛けを置きます。穂先を大きく引き込んだら重みを確認して合わせ、最初の走りを根から離します。",
    "trivia": "「コショウ」のような黒点が名前の手掛かり。タイに似た姿ですがイサキ科で、標準和名コロダイとは別種です。"
  },
  "launch": {
    "catchPhrase": "体の前側に太い斜めの暗色帯",
    "identify": [
      "体の前側に太い斜めの暗色帯",
      "後半の体やひれに細かい黒点",
      "厚い唇と体高のある銀色の体"
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
        "label": "ぶっこみ釣り",
        "href": "/methods/bukkomi"
      },
      {
        "label": "ウキ釣り",
        "href": "/methods/uki"
      }
    ],
    "spotFocus": "西日本を中心とする沿岸。相模湾・東京湾でも見られる"
  },
  "media": {
    "image": "/images/fish/koshoudai-profile-20260919.webp"
  },
  "representativeRecipes": [
    "sashimi",
    "meuniere",
    "shioyaki",
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
        "slug": "sashimi",
        "name": "刺身",
        "preparation": "raw",
        "summary": "生食用に処理された身を、包丁で長く引いて切ります。",
        "ingredients": [
          "生食用コショウダイの柵 200g",
          "しょうゆ・わさび 適量",
          "大葉・大根のつま 適量"
        ],
        "steps": [
          "生食に適した処理・管理が確認できる柵を準備する。",
          "清潔な包丁とまな板を用意し、骨や皮の残りを確認する。",
          "冷たい柵の水分を拭き、繊維を断つ方向に切る。",
          "冷えた皿に盛り、薬味を添えてすぐ食べる。"
        ],
        "tips": [
          "常温で置かず、食べる直前に切ります。生食の注意は共通案内を確認してください。"
        ],
        "image": "/images/cooking/koshoudai-sashimi.webp"
      },
      {
        "slug": "meuniere",
        "name": "ムニエル",
        "preparation": "cooked",
        "summary": "薄い小麦粉をまとわせ、バターで香ばしく焼きます。",
        "ingredients": [
          "コショウダイの切り身 250g",
          "塩・こしょう 少々",
          "小麦粉 大さじ1",
          "油 小さじ1・バター15g",
          "レモン・パセリ 適量"
        ],
        "steps": [
          "骨を除いた切り身の水分を拭き、塩・こしょうを振る。",
          "小麦粉を薄くまぶし、余分な粉を落とす。",
          "油を引いたフライパンで片面を焼き、返して中心まで加熱する。",
          "バターを加えてからめ、レモンを添える。"
        ],
        "tips": [
          "最初からバターだけで焼くと焦げやすいため、仕上げに加えます。"
        ],
        "image": "/images/cooking/koshoudai-meuniere.webp"
      },
      {
        "slug": "shioyaki",
        "name": "塩焼き",
        "preparation": "cooked",
        "summary": "皮を香ばしく焼き、身の風味を味わう食べ方。",
        "ingredients": [
          "コショウダイの切り身 250g",
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
        "image": "/images/cooking/koshoudai-shioyaki.webp"
      },
      {
        "slug": "nitsuke",
        "name": "煮付け",
        "preparation": "cooked",
        "summary": "しょうがと甘辛い煮汁で、身を崩さず煮ます。",
        "ingredients": [
          "コショウダイの切り身 250g",
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
        "image": "/images/cooking/koshoudai-nitsuke.webp"
      }
    ]
  },
  "quest": {
    "fightProfile": "bottom",
    "fightPower": 50
  }
});
