import {defineFishSpecies} from './define';
// Reviewed 2026-09-25: https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000090748.html
export default defineFishSpecies({
  "base": {
    "slug": "torafugu",
    "name": "トラフグ",
    "en": "Tiger puffer",
    "scientific": "Takifugu rubripes",
    "season": "見かける時期は海域・水温で変わる",
    "difficulty": 5,
    "danger": "てっさ等の料理は専門店・処理済み製品で楽しむ。釣った丸魚から家庭で調理するレシピは掲載しない。",
    "methods": [],
    "methodSlugs": [],
    "guideSlugs": [
      "dangerous-fish-first-check"
    ],
    "relatedSlugs": [
      "shimafugu",
      "komonfugu",
      "kusafugu"
    ],
    "areas": [
      "日本沿岸の湾内・沖合"
    ],
    "depth": "沿岸の浅場など。生息環境は本文参照",
    "size": "30〜60cmほど",
    "desc": "食材としてよく知られる大型のフグだが、丸魚を家庭で扱う魚ではない。胸びれの後ろの黒い斑紋が観察の手掛かりになる。",
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
    "aliases": [
      "虎河豚"
    ],
    "habitat": "日本沿岸の湾内・沖合",
    "diet": "甲殻類・貝類・小魚など",
    "behavior": "海底近くで餌を探す。専門の船釣りでは船宿ごとに仕掛けと持ち帰り方法が決められている。",
    "lifespan": "生育環境・個体群により異なる",
    "taste": "てっさ等の料理は専門店・処理済み製品で楽しむ。釣った丸魚から家庭で調理するレシピは掲載しない。",
    "cooking": [],
    "seasonNote": "見かける時期は海域・水温で変わる",
    "beginnerTip": "採集せず、触らずに見分けるためのページ。写真や模様だけで食用可否を判断しない。",
    "safety": "てっさ等の料理は専門店・処理済み製品で楽しむ。釣った丸魚から家庭で調理するレシピは掲載しない。",
    "body": "食材としてよく知られる大型のフグだが、丸魚を家庭で扱う魚ではない。胸びれの後ろの黒い斑紋が観察の手掛かりになる。",
    "fishing": "トラフグを釣り物にする船でも、釣り人が勝手にさばいてよいわけではない。出船前に資格者による処理の有無と受け取り条件を確認する。",
    "trivia": "観察時は魚体の一部だけでなく全身を確認する。画像は見分けの参考であり、安全な取り扱いや食用可否を保証するものではない。"
  },
  "launch": {
    "catchPhrase": "胸びれ後方の大きな黒い斑紋",
    "identify": [
      "胸びれ後方の大きな黒い斑紋",
      "灰色の背と白い腹",
      "細かな棘と体形も確認するが、触って確かめない"
    ],
    "imageNotes": [
      "体形",
      "ひれ",
      "見分け方",
      "安全"
    ],
    "related": [
      "shimafugu",
      "komonfugu",
      "kusafugu"
    ],
    "methodLinks": [],
    "spotFocus": "日本沿岸の湾内・沖合"
  },
  "media": {
    "image": "/images/fish/torafugu-profile-20260925.webp"
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
        "detail": "てっさ等の料理は専門店・処理済み製品で楽しむ。釣った丸魚から家庭で調理するレシピは掲載しない。"
      }
    ],
    "bareHands": "素手で口元や魚体を握らず、針を外す際は長いプライヤーを使う。",
    "handling": [
      "トラフグを釣り物にする船でも、釣り人が勝手にさばいてよいわけではない。出船前に資格者による処理の有無と受け取り条件を確認する。",
      "処理できない場合は無理に触らず周囲を離し、現地の管理者や経験者に相談する。"
    ],
    "foodAdvice": "てっさ等の料理は専門店・処理済み製品で楽しむ。釣った丸魚から家庭で調理するレシピは掲載しない。",
    "identify": [
      "胸びれ後方の大きな黒い斑紋",
      "灰色の背と白い腹",
      "細かな棘と体形も確認するが、触って確かめない"
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
