import {defineFishSpecies} from './define';
// Reviewed 2026-09-25: https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syokuchu/poison/animal_det_03.html
export default defineFishSpecies({
  "base": {
    "slug": "hakofugu",
    "name": "ハコフグ",
    "en": "Whitespotted boxfish",
    "scientific": "Ostracion immaculatus",
    "season": "見かける時期は海域・水温で変わる",
    "difficulty": 5,
    "danger": "パリトキシン様毒による中毒原因魚として報告されている。家庭用料理の対象にしない。",
    "methods": [],
    "methodSlugs": [],
    "guideSlugs": [
      "dangerous-fish-first-check"
    ],
    "relatedSlugs": [
      "kitamakura",
      "aobudai",
      "soushihagi"
    ],
    "areas": [
      "暖かい沿岸の岩礁・藻場"
    ],
    "depth": "沿岸の浅場など。生息環境は本文参照",
    "size": "15〜30cmほど",
    "desc": "角張った箱のような体を持つ魚。地方料理の知名度があっても、中毒事例があるため釣った個体を自己判断で食べない。",
    "accent": "#b65b46",
    "months": [],
    "beginner": false,
    "kids": false,
    "waterTypes": [
      "sea"
    ]
  },
  "detail": {
    "family": "ハコフグ科",
    "genus": "ハコフグ属",
    "aliases": [],
    "habitat": "暖かい沿岸の岩礁・藻場",
    "diet": "底生動物や藻類など",
    "behavior": "小さなひれを動かして泳ぎ、海底の餌を探す。追い回したり手で捕まえたりしない。",
    "lifespan": "生育環境・個体群により異なる",
    "taste": "パリトキシン様毒による中毒原因魚として報告されている。家庭用料理の対象にしない。",
    "cooking": [],
    "seasonNote": "見かける時期は海域・水温で変わる",
    "beginnerTip": "採集せず、触らずに見分けるためのページ。写真や模様だけで食用可否を判断しない。",
    "safety": "パリトキシン様毒による中毒原因魚として報告されている。家庭用料理の対象にしない。",
    "body": "角張った箱のような体を持つ魚。地方料理の知名度があっても、中毒事例があるため釣った個体を自己判断で食べない。",
    "fishing": "釣れたら口元と針に注意して扱う。観賞目的で他の魚と同じ小さな容器へ入れることも避ける。",
    "trivia": "観察時は魚体の一部だけでなく全身を確認する。画像は見分けの参考であり、安全な取り扱いや食用可否を保証するものではない。"
  },
  "launch": {
    "catchPhrase": "硬い箱形の体",
    "identify": [
      "硬い箱形の体",
      "小さな口・小さなひれ",
      "幼魚と成魚で色や模様が異なる。ミナミハコフグ等との混同にも注意"
    ],
    "imageNotes": [
      "体形",
      "ひれ",
      "見分け方",
      "安全"
    ],
    "related": [
      "kitamakura",
      "aobudai",
      "soushihagi"
    ],
    "methodLinks": [],
    "spotFocus": "暖かい沿岸の岩礁・藻場"
  },
  "media": {
    "image": "/images/fish/hakofugu-profile-20260925.webp"
  },
  "quest": {
    "enabled": false
  },
  "hazard": {
    "hazardLevel": "critical",
    "edible": "not-recommended",
    "cookingEnabled": false,
    "identificationOnly": true,
    "headline": "食用にしない。見た目や加熱で毒の有無は判断できない。",
    "parts": [
      {
        "name": "体内・内臓等",
        "detail": "パリトキシン様毒による中毒原因魚として報告されている。家庭用料理の対象にしない。"
      }
    ],
    "bareHands": "素手で口元や魚体を握らず、針を外す際は長いプライヤーを使う。",
    "handling": [
      "釣れたら口元と針に注意して扱う。観賞目的で他の魚と同じ小さな容器へ入れることも避ける。",
      "処理できない場合は無理に触らず周囲を離し、現地の管理者や経験者に相談する。"
    ],
    "foodAdvice": "パリトキシン様毒による中毒原因魚として報告されている。家庭用料理の対象にしない。",
    "identify": [
      "硬い箱形の体",
      "小さな口・小さなひれ",
      "幼魚と成魚で色や模様が異なる。ミナミハコフグ等との混同にも注意"
    ],
    "sources": [
      {
        "label": "厚生労働省：自然毒のリスクプロファイル",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syokuchu/poison/animal_det_03.html"
      }
    ],
    "verifiedAt": "2026-09-25"
  }
});
