import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.honda.co.jp/fishing/picture-book/utsubo/
export default defineFishSpecies({
  "base": {
    "slug": "utsubo",
    "name": "ウツボ",
    "en": "Kidako moray",
    "scientific": "Gymnothorax kidako",
    "season": "春〜秋を中心に、地域・水温で変化",
    "difficulty": 5,
    "danger": "鋭い歯による咬傷に注意。種類・産地が不明なウツボ類を食べず、料理には種類と流通が確認できる専門店の骨処理済み身を使います。熱帯性の一部にはシガテラ毒の危険があり、加熱で解決しません。",
    "methods": [
      "ぶっこみ釣り"
    ],
    "methodSlugs": [
      "bukkomi"
    ],
    "guideSlugs": [
      "tackle-spec-reading",
      "tackle-connection-basics"
    ],
    "relatedSlugs": [
      "anago",
      "unagi",
      "kasago"
    ],
    "areas": [
      "本州中部以南の岩礁・石積みのすき間"
    ],
    "depth": "浅い岩場の穴や割れ目",
    "size": "60〜90cm前後",
    "desc": "長い体に黄褐色と暗褐色のまだら模様。胸びれがなく背びれが尾へ連続。大きな口に鋭い歯。",
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
    "beginner": false,
    "kids": false,
    "waterTypes": [
      "sea"
    ]
  },
  "detail": {
    "family": "ウツボ科",
    "genus": "ウツボ属",
    "aliases": [],
    "habitat": "本州中部以南の岩礁・石積みのすき間",
    "diet": "魚・タコ・甲殻類",
    "behavior": "昼は岩の穴に体を隠し、主に夜に餌を探します。口を開閉する姿は呼吸のためでもあり、いつも威嚇しているとは限りません。",
    "lifespan": "生息環境や個体により異なる",
    "taste": "唐揚げ・煮付け・煮こごり・照り焼きを紹介。",
    "cooking": [
      "唐揚げ",
      "煮付け",
      "煮こごり",
      "照り焼き"
    ],
    "seasonNote": "春〜秋を中心に、地域・水温で変化",
    "beginnerTip": "針を外すために顔へ手を近づけないこと。取り扱いと調理を任せられる経験者がいるか、釣行前に確認します。",
    "safety": "鋭い歯による咬傷に注意。種類・産地が不明なウツボ類を食べず、料理には種類と流通が確認できる専門店の骨処理済み身を使います。熱帯性の一部にはシガテラ毒の危険があり、加熱で解決しません。",
    "body": "長い体に黄褐色と暗褐色のまだら模様。胸びれがなく背びれが尾へ連続。大きな口に鋭い歯。",
    "fishing": "岩のすき間近くへ魚の切り身を使った底釣りで掛かります。根に潜る力が強く、釣り上げた後も体をくねらせるため、長い針外しと魚を隔離できる容器を用意します。扱いに慣れない場合は無理に狙わないでください。",
    "trivia": "和歌山や高知にはウツボ料理の食文化があります。ただし多い小骨の処理には技術が必要で、釣れた魚をそのまま家庭調理する案内ではありません。"
  },
  "launch": {
    "catchPhrase": "長い体に黄褐色と暗褐色のまだら模様",
    "identify": [
      "長い体に黄褐色と暗褐色のまだら模様",
      "胸びれがなく背びれが尾へ連続",
      "大きな口に鋭い歯"
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
      }
    ],
    "spotFocus": "本州中部以南の岩礁・石積みのすき間"
  },
  "media": {
    "image": "/images/fish/utsubo-profile-20260919.webp"
  },
  "representativeRecipes": [
    "karaage",
    "nitsuke",
    "nikogori",
    "teriyaki"
  ],
  "cooking": {
    "prep": [
      "種類と産地が確認できる、専門店の骨処理済みの身を用意する。",
      "冷蔵状態で扱い、骨の残りを目と指で確認する。",
      "皮付きのまま料理に合わせて切り分ける。",
      "自分で釣った個体の同定や骨処理に自信がない場合は、無理に食用にしない。"
    ],
    "recipes": [
      {
        "slug": "karaage",
        "name": "唐揚げ",
        "preparation": "cooked",
        "summary": "薄い衣で揚げ、身と皮の食感を楽しみます。",
        "ingredients": [
          "専門店の骨処理済みウツボ 250g",
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
        "image": "/images/cooking/utsubo-karaage.webp"
      },
      {
        "slug": "nitsuke",
        "name": "煮付け",
        "preparation": "cooked",
        "summary": "しょうがと甘辛い煮汁で、身を崩さず煮ます。",
        "ingredients": [
          "専門店の骨処理済みウツボ 250g",
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
        "image": "/images/cooking/utsubo-nitsuke.webp"
      },
      {
        "slug": "nikogori",
        "name": "煮こごり",
        "preparation": "cooked",
        "summary": "骨処理済みのウツボの皮と身を使い、冷やして固める料理。",
        "ingredients": [
          "専門店の骨処理済みウツボ 250g",
          "水150ml・酒50ml",
          "醤油・みりん 各大さじ1",
          "しょうが10g"
        ],
        "steps": [
          "専門店の骨処理済みウツボを一口大に切る。",
          "水・酒・調味料・しょうがを煮立て、魚を加える。",
          "中心まで加熱し、弱火で皮が柔らかくなるまで煮る。",
          "清潔な容器へ移し、粗熱を取って冷蔵庫で冷やし固める。"
        ],
        "tips": [
          "固まり方は皮の量と水分で変わります。固まりにくい場合は煮汁を減らします。"
        ],
        "image": "/images/cooking/utsubo-nikogori.webp"
      },
      {
        "slug": "teriyaki",
        "name": "照り焼き",
        "preparation": "cooked",
        "summary": "骨処理済みの皮付き身を焼き、甘辛いたれをからめます。",
        "ingredients": [
          "専門店の骨処理済みウツボ 250g",
          "醤油・みりん・酒 各大さじ1",
          "砂糖 小さじ1",
          "油 小さじ1"
        ],
        "steps": [
          "骨処理済みのウツボを同じ厚さに切り、水分を拭く。",
          "フライパンへ油を引き、皮側から焼く。",
          "返して中心まで火を通し、余分な油を拭く。",
          "調味料を加え、焦がさないように煮からめる。"
        ],
        "tips": [
          "身が厚い場合は少量の水を加えてふたをし、先に中まで加熱します。"
        ],
        "image": "/images/cooking/utsubo-teriyaki.webp"
      }
    ]
  },
  "quest": {
    "fightProfile": "bottom",
    "fightPower": 75
  },
  "hazard": {
    "hazardLevel": "high",
    "edible": "processed-only",
    "cookingEnabled": true,
    "identificationOnly": false,
    "headline": "鋭い歯に注意。食用は専門店の骨処理済みの身で",
    "parts": [
      {
        "name": "口・歯",
        "detail": "素早く体を曲げてかみつくため、顔や口の近くへ手を寄せない。"
      }
    ],
    "bareHands": "素手でつかまず、経験者に対応を依頼してください。",
    "handling": [
      "長いプライヤーを使い、顔を近づけない。",
      "手で口を開けようとせず、周囲の人から距離を取る。"
    ],
    "foodAdvice": "鋭い歯による咬傷に注意。種類・産地が不明なウツボ類を食べず、料理には種類と流通が確認できる専門店の骨処理済み身を使います。熱帯性の一部にはシガテラ毒の危険があり、加熱で解決しません。",
    "identify": [
      "長い体に黄褐色と暗褐色のまだら模様",
      "胸びれがなく背びれが尾へ連続",
      "大きな口に鋭い歯"
    ],
    "sources": [
      {
        "label": "Honda釣魚図鑑",
        "url": "https://www.honda.co.jp/fishing/picture-book/utsubo/"
      },
      {
        "label": "厚生労働省：シガテラ毒",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syokuchu/poison/animal_02.html"
      }
    ],
    "verifiedAt": "2026-09-19"
  }
});
