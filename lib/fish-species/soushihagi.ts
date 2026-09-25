import {defineFishSpecies} from './define';
// Reviewed 2026-09-25: https://www.pref.osaka.lg.jp/o120130/suisan/ichiran.html
export default defineFishSpecies({
  "base": {
    "slug": "soushihagi",
    "name": "ソウシハギ",
    "en": "Scrawled filefish",
    "scientific": "Aluterus scriptus",
    "season": "見かける時期は海域・水温で変わる",
    "difficulty": 5,
    "danger": "強い毒を持つおそれがあるため食べない。肝を含めて家庭で料理しない。",
    "methods": [],
    "methodSlugs": [],
    "guideSlugs": [
      "dangerous-fish-first-check"
    ],
    "relatedSlugs": [
      "usubahagi",
      "kawahagi",
      "umazurahagi"
    ],
    "areas": [
      "暖かい海の沿岸・流れ藻周辺"
    ],
    "depth": "沿岸の浅場など。生息環境は本文参照",
    "size": "30〜80cmほど、大型は1m前後",
    "desc": "青い落書きのような線と長い尾びれが特徴のカワハギの仲間。ウスバハギ等と間違えて持ち帰らないことが重要。",
    "accent": "#b65b46",
    "months": [],
    "beginner": false,
    "kids": false,
    "waterTypes": [
      "sea"
    ]
  },
  "detail": {
    "family": "カワハギ科",
    "genus": "ウスバハギ属",
    "aliases": [],
    "habitat": "暖かい海の沿岸・流れ藻周辺",
    "diet": "付着生物や小動物など",
    "behavior": "沿岸や流れ藻の周囲に現れる。幼魚は大型魚とは印象が違うため、大きさだけで判断しない。",
    "lifespan": "生育環境・個体群により異なる",
    "taste": "強い毒を持つおそれがあるため食べない。肝を含めて家庭で料理しない。",
    "cooking": [],
    "seasonNote": "見かける時期は海域・水温で変わる",
    "beginnerTip": "採集せず、触らずに見分けるためのページ。写真や模様だけで食用可否を判断しない。",
    "safety": "強い毒を持つおそれがあるため食べない。肝を含めて家庭で料理しない。",
    "body": "青い落書きのような線と長い尾びれが特徴のカワハギの仲間。ウスバハギ等と間違えて持ち帰らないことが重要。",
    "fishing": "食用のカワハギやウスバハギとは分ける。魚体を握って針を外さず、写真に残す場合も触らず全身を撮る。",
    "trivia": "観察時は魚体の一部だけでなく全身を確認する。画像は見分けの参考であり、安全な取り扱いや食用可否を保証するものではない。"
  },
  "launch": {
    "catchPhrase": "体に走る青い不規則な線と黒い斑点",
    "identify": [
      "体に走る青い不規則な線と黒い斑点",
      "細長く平たい体",
      "長く大きな尾びれと小さな口"
    ],
    "imageNotes": [
      "体形",
      "ひれ",
      "見分け方",
      "安全"
    ],
    "related": [
      "usubahagi",
      "kawahagi",
      "umazurahagi"
    ],
    "methodLinks": [],
    "spotFocus": "暖かい海の沿岸・流れ藻周辺"
  },
  "media": {
    "image": "/images/fish/soushihagi-profile-20260925.webp"
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
        "detail": "強い毒を持つおそれがあるため食べない。肝を含めて家庭で料理しない。"
      }
    ],
    "bareHands": "素手で口元や魚体を握らず、針を外す際は長いプライヤーを使う。",
    "handling": [
      "食用のカワハギやウスバハギとは分ける。魚体を握って針を外さず、写真に残す場合も触らず全身を撮る。",
      "処理できない場合は無理に触らず周囲を離し、現地の管理者や経験者に相談する。"
    ],
    "foodAdvice": "強い毒を持つおそれがあるため食べない。肝を含めて家庭で料理しない。",
    "identify": [
      "体に走る青い不規則な線と黒い斑点",
      "細長く平たい体",
      "長く大きな尾びれと小さな口"
    ],
    "sources": [
      {
        "label": "大阪府：水産情報",
        "url": "https://www.pref.osaka.lg.jp/o120130/suisan/ichiran.html"
      }
    ],
    "verifiedAt": "2026-09-25"
  }
});
