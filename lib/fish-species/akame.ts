import {defineFishSpecies} from './define';
export default defineFishSpecies({
  "base": {
    "slug": "akame",
    "name": "アカメ",
    "en": "Japanese lates",
    "scientific": "Lates japonicus",
    "waterTypes": [
      "brackish",
      "sea"
    ],
    "season": "暖かい時期が目安。ただし宮崎県では捕獲等禁止",
    "difficulty": 5,
    "danger": "宮崎県では指定希少野生動植物のため捕獲等は禁止。高知県でも資源保護のためリリースを推奨。夜の河口へ単独で立ち込まず、エイ・流れ・潮位上昇にも注意する。",
    "methods": [
      "アカメのルアーと保全"
    ],
    "methodSlugs": [
      "akame-lure"
    ],
    "guideSlugs": [
      "native-fish-conservation"
    ],
    "relatedSlugs": [
      "suzuki",
      "rouninaji"
    ],
    "areas": [
      "主に高知県・宮崎県の沿岸域"
    ],
    "depth": "河口・内湾の浅場と深みの境",
    "size": "大型は1mを超える",
    "desc": "光を受けて赤く見える目と、大きな口・厚い体が特徴。限られた地域にすむ魚で、宮崎県では捕獲等が禁止されています。釣りの紹介より先に地域の保護制度と魚への負担を確認します。",
    "accent": "#398b98",
    "months": [
      6,
      7,
      8,
      9,
      10
    ],
    "beginner": false,
    "kids": false
  },
  "detail": {
    "family": "アカメ科",
    "genus": "アカメ属",
    "aliases": [
      "赤目"
    ],
    "habitat": "河口の汽水域や内湾。幼魚が隠れる水草帯なども重要な生息場所となる。",
    "diet": "小魚や甲殻類など。",
    "behavior": "障害物や深浅の境を利用して餌を待つ。大型魚は強く走るため、弱い道具で長時間やり取りさせない。",
    "lifespan": "寿命は生息条件や資料により異なるため一律の年数を表示していません。",
    "taste": "食用の説明よりも希少魚の保全を優先し、家庭向け料理や持ち帰りを勧めるレシピは掲載しません。",
    "cooking": [],
    "seasonNote": "暖かい時期が目安。ただし宮崎県では捕獲等禁止",
    "beginnerTip": "まず保護情報を読み、釣り場へ入る可否を確認する。写真やサイズより魚の回復と安全なリリースを優先する。",
    "safety": "宮崎県では指定希少野生動植物のため捕獲等は禁止。高知県でも資源保護のためリリースを推奨。夜の河口へ単独で立ち込まず、エイ・流れ・潮位上昇にも注意する。",
    "body": "目が光を反射して赤く見えることがある。 口が大きく斜めに開き、体に厚みがある。 尾びれは丸みがあり、スズキの尾や細身の体と異なる。",
    "fishing": "宮崎県では狙わない。その他の地域でも最新の条例・管理者案内を確認し、経験者と安全な足場から行う。河口の流れの変化へルアーを通し、足場や取り込み経路が確保できない場所では投げない。掛かった魚は大きなネットで支え、陸へ引きずらず短時間で放す。",
    "trivia": "赤い目は照明や角度で見え方が変わります。目の色だけでなく口・体形・尾を合わせて見ます。"
  },
  "media": {
    "image": "/images/fish/akame-profile.webp"
  },
  "launch": {
    "catchPhrase": "光を受けて赤く見える目と、大きな口・厚い体が特徴。",
    "identify": [
      "目が光を反射して赤く見えることがある。",
      "口が大きく斜めに開き、体に厚みがある。",
      "尾びれは丸みがあり、スズキの尾や細身の体と異なる。"
    ],
    "imageNotes": [
      "体形",
      "口・頭部",
      "ひれ",
      "見分け方"
    ],
    "related": [],
    "methodLinks": [
      {
        "label": "アカメのルアーと保全",
        "href": "/methods/akame-lure"
      }
    ],
    "spotFocus": "河口の汽水域や内湾。幼魚が隠れる水草帯なども重要な生息場所となる。"
  },
  "quest": {
    "fightProfile": "diver",
    "fightPower": 90,
    "stamina": 90,
    "runPower": 90,
    "enabled": false
  },
  "cookingOmission": {
    "reason": "conservation",
    "note": "アカメは保全を優先する魚です。宮崎県では捕獲が禁止されており、高知県でも再放流への協力が呼びかけられています。UOLINKでは料理を掲載しません。",
    "sources": [
      {
        "label": "宮崎県：アカメの捕獲禁止",
        "url": "https://www.pref.miyazaki.lg.jp/shizen/kurashi/shizen/akame.html"
      }
    ]
  }
});
