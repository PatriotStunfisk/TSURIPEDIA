import {defineFishSpecies} from './define';
// Reviewed 2026-09-25: https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000090748.html
export default defineFishSpecies({
  "base": {
    "slug": "komonfugu",
    "name": "コモンフグ",
    "en": "Finepatterned puffer",
    "scientific": "Takifugu flavipterus",
    "season": "見かける時期は海域・水温で変わる",
    "difficulty": 5,
    "danger": "専門資格・設備に基づく処理が必要なフグ。家庭での下処理や部位別の食べ方は案内しない。",
    "methods": [],
    "methodSlugs": [],
    "guideSlugs": [
      "dangerous-fish-first-check"
    ],
    "relatedSlugs": [
      "kusafugu",
      "shimafugu",
      "torafugu"
    ],
    "areas": [
      "日本沿岸の砂底・岩礁周辺"
    ],
    "depth": "沿岸の浅場など。生息環境は本文参照",
    "size": "15〜30cmほど",
    "desc": "背側の細かな淡色斑が目に付くフグ。似たフグが多く、斑点だけで食用可否を判断できない。",
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
    "habitat": "日本沿岸の砂底・岩礁周辺",
    "diet": "甲殻類・貝類・小動物など",
    "behavior": "海底近くで餌を探し、投げ釣りや胴突き仕掛けに掛かることがある。",
    "lifespan": "生育環境・個体群により異なる",
    "taste": "専門資格・設備に基づく処理が必要なフグ。家庭での下処理や部位別の食べ方は案内しない。",
    "cooking": [],
    "seasonNote": "見かける時期は海域・水温で変わる",
    "beginnerTip": "採集せず、触らずに見分けるためのページ。写真や模様だけで食用可否を判断しない。",
    "safety": "専門資格・設備に基づく処理が必要なフグ。家庭での下処理や部位別の食べ方は案内しない。",
    "body": "背側の細かな淡色斑が目に付くフグ。似たフグが多く、斑点だけで食用可否を判断できない。",
    "fishing": "歯でハリスを切ることがある。釣れた場合は長いプライヤーを用い、魚を握り込んだり腹を押したりしない。",
    "trivia": "観察時は魚体の一部だけでなく全身を確認する。画像は見分けの参考であり、安全な取り扱いや食用可否を保証するものではない。"
  },
  "launch": {
    "catchPhrase": "暗い背側に散らばる細かな淡色斑",
    "identify": [
      "暗い背側に散らばる細かな淡色斑",
      "白い腹側との境目",
      "クサフグやヒガンフグ等との混同に注意。全身を観察する"
    ],
    "imageNotes": [
      "体形",
      "ひれ",
      "見分け方",
      "安全"
    ],
    "related": [
      "kusafugu",
      "shimafugu",
      "torafugu"
    ],
    "methodLinks": [],
    "spotFocus": "日本沿岸の砂底・岩礁周辺"
  },
  "media": {
    "image": "/images/fish/komonfugu-profile-20260925.webp"
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
        "detail": "専門資格・設備に基づく処理が必要なフグ。家庭での下処理や部位別の食べ方は案内しない。"
      }
    ],
    "bareHands": "素手で口元や魚体を握らず、針を外す際は長いプライヤーを使う。",
    "handling": [
      "歯でハリスを切ることがある。釣れた場合は長いプライヤーを用い、魚を握り込んだり腹を押したりしない。",
      "処理できない場合は無理に触らず周囲を離し、現地の管理者や経験者に相談する。"
    ],
    "foodAdvice": "専門資格・設備に基づく処理が必要なフグ。家庭での下処理や部位別の食べ方は案内しない。",
    "identify": [
      "暗い背側に散らばる細かな淡色斑",
      "白い腹側との境目",
      "クサフグやヒガンフグ等との混同に注意。全身を観察する"
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
