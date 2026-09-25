import {defineFishSpecies} from './define';
// Reviewed 2026-09-25: https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000090748.html
export default defineFishSpecies({
  "base": {
    "slug": "shimafugu",
    "name": "シマフグ",
    "en": "Yellowfin puffer",
    "scientific": "Takifugu xanthopterus",
    "season": "見かける時期は海域・水温で変わる",
    "difficulty": 5,
    "danger": "家庭で調理しない。食用としての利用は適切な資格を持つ専門家の処理が前提。",
    "methods": [],
    "methodSlugs": [],
    "guideSlugs": [
      "dangerous-fish-first-check"
    ],
    "relatedSlugs": [
      "torafugu",
      "komonfugu",
      "kusafugu"
    ],
    "areas": [
      "暖かい沿岸・沖合"
    ],
    "depth": "沿岸の浅場など。生息環境は本文参照",
    "size": "30〜50cmほど",
    "desc": "暗い背側にうねる模様を持ち、黄色いひれが目立つ大型のフグ。ルアーや船の餌釣りで出会うことがある。",
    "accent": "#b65b46",
    "months": [],
    "beginner": false,
    "kids": false,
    "waterTypes": [
      "sea"
    ]
  },
  "detail": {
    "family": "フグ科",
    "genus": "トラフグ属",
    "aliases": [],
    "habitat": "暖かい沿岸・沖合",
    "diet": "甲殻類・貝類・小魚など",
    "behavior": "強い歯で餌をかじる。掛かると仕掛けやルアーを傷つけることもある。",
    "lifespan": "生育環境・個体群により異なる",
    "taste": "家庭で調理しない。食用としての利用は適切な資格を持つ専門家の処理が前提。",
    "cooking": [],
    "seasonNote": "見かける時期は海域・水温で変わる",
    "beginnerTip": "採集せず、触らずに見分けるためのページ。写真や模様だけで食用可否を判断しない。",
    "safety": "家庭で調理しない。食用としての利用は適切な資格を持つ専門家の処理が前提。",
    "body": "暗い背側にうねる模様を持ち、黄色いひれが目立つ大型のフグ。ルアーや船の餌釣りで出会うことがある。",
    "fishing": "針外しの際に指を口へ近づけない。太いハリスでも傷を点検し、処理を頼める専門業者がない場合は持ち帰らない。",
    "trivia": "観察時は魚体の一部だけでなく全身を確認する。画像は見分けの参考であり、安全な取り扱いや食用可否を保証するものではない。"
  },
  "launch": {
    "catchPhrase": "背側の波打つ淡い模様",
    "identify": [
      "背側の波打つ淡い模様",
      "黄色みの強い胸びれ・尻びれ・尾びれ",
      "細長めの体形。模様だけで安全なフグと判断しない"
    ],
    "imageNotes": [
      "体形",
      "ひれ",
      "見分け方",
      "安全"
    ],
    "related": [
      "torafugu",
      "komonfugu",
      "kusafugu"
    ],
    "methodLinks": [],
    "spotFocus": "暖かい沿岸・沖合"
  },
  "media": {
    "image": "/images/fish/shimafugu-profile-20260925.webp"
  },
  "quest": {
    "enabled": false
  },
  "hazard": {
    "hazardLevel": "critical",
    "edible": "professional-only",
    "cookingEnabled": false,
    "identificationOnly": true,
    "headline": "フグの自己調理はしない。種類や部位を自己判断しない。",
    "parts": [
      {
        "name": "体内・内臓等",
        "detail": "家庭で調理しない。食用としての利用は適切な資格を持つ専門家の処理が前提。"
      }
    ],
    "bareHands": "素手で口元や魚体を握らず、針を外す際は長いプライヤーを使う。",
    "handling": [
      "針外しの際に指を口へ近づけない。太いハリスでも傷を点検し、処理を頼める専門業者がない場合は持ち帰らない。",
      "処理できない場合は無理に触らず周囲を離し、現地の管理者や経験者に相談する。"
    ],
    "foodAdvice": "家庭で調理しない。食用としての利用は適切な資格を持つ専門家の処理が前提。",
    "identify": [
      "背側の波打つ淡い模様",
      "黄色みの強い胸びれ・尻びれ・尾びれ",
      "細長めの体形。模様だけで安全なフグと判断しない"
    ],
    "sources": [
      {
        "label": "厚生労働省：フグの素人調理は危険",
        "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000090748.html"
      }
    ],
    "verifiedAt": "2026-09-25"
  }
});
