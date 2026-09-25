import {defineFishSpecies} from './define';
// Reviewed 2026-09-25: https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000090748.html
export default defineFishSpecies({
  "base": {
    "slug": "kitamakura",
    "name": "キタマクラ",
    "en": "Brown-lined puffer",
    "scientific": "Canthigaster rivulata",
    "season": "見かける時期は海域・水温で変わる",
    "difficulty": 5,
    "danger": "食用にしない。小型でも毒があるため、種類や部位を自己判断して料理しない。",
    "methods": [],
    "methodSlugs": [],
    "guideSlugs": [
      "dangerous-fish-first-check"
    ],
    "relatedSlugs": [
      "kusafugu",
      "komonfugu",
      "kawahagi"
    ],
    "areas": [
      "暖かい沿岸の岩礁・藻場"
    ],
    "depth": "沿岸の浅場など。生息環境は本文参照",
    "size": "10〜15cmほど",
    "desc": "尖った口先と目を通る褐色の線が特徴の小型フグ。カワハギ釣りなどで餌を取る魚としても知られる。小さくても食用にしない。",
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
    "genus": "キタマクラ属",
    "aliases": [],
    "habitat": "暖かい沿岸の岩礁・藻場",
    "diet": "小さな底生動物や付着生物など",
    "behavior": "岩礁の周りで餌をついばみ、仕掛けの餌を少しずつかじる。",
    "lifespan": "生育環境・個体群により異なる",
    "taste": "食用にしない。小型でも毒があるため、種類や部位を自己判断して料理しない。",
    "cooking": [],
    "seasonNote": "見かける時期は海域・水温で変わる",
    "beginnerTip": "採集せず、触らずに見分けるためのページ。写真や模様だけで食用可否を判断しない。",
    "safety": "食用にしない。小型でも毒があるため、種類や部位を自己判断して料理しない。",
    "body": "尖った口先と目を通る褐色の線が特徴の小型フグ。カワハギ釣りなどで餌を取る魚としても知られる。小さくても食用にしない。",
    "fishing": "餌取りが続いたときは、針がなくなっていないか点検する。毒のあるフグとして扱い、素手で口元へ触れない。",
    "trivia": "観察時は魚体の一部だけでなく全身を確認する。画像は見分けの参考であり、安全な取り扱いや食用可否を保証するものではない。"
  },
  "launch": {
    "catchPhrase": "尖った口先と目を通る線",
    "identify": [
      "尖った口先と目を通る線",
      "体側の曲がった褐色の縦線",
      "小さな口とひれ。膨らませて確認しない"
    ],
    "imageNotes": [
      "体形",
      "ひれ",
      "見分け方",
      "安全"
    ],
    "related": [
      "kusafugu",
      "komonfugu",
      "kawahagi"
    ],
    "methodLinks": [],
    "spotFocus": "暖かい沿岸の岩礁・藻場"
  },
  "media": {
    "image": "/images/fish/kitamakura-profile-20260925.webp"
  },
  "quest": {
    "enabled": false
  },
  "hazard": {
    "hazardLevel": "critical",
    "edible": "not-recommended",
    "cookingEnabled": false,
    "identificationOnly": true,
    "headline": "フグの自己調理はしない。種類や部位を自己判断しない。",
    "parts": [
      {
        "name": "体内・内臓等",
        "detail": "食用にしない。小型でも毒があるため、種類や部位を自己判断して料理しない。"
      }
    ],
    "bareHands": "素手で口元や魚体を握らず、針を外す際は長いプライヤーを使う。",
    "handling": [
      "餌取りが続いたときは、針がなくなっていないか点検する。毒のあるフグとして扱い、素手で口元へ触れない。",
      "処理できない場合は無理に触らず周囲を離し、現地の管理者や経験者に相談する。"
    ],
    "foodAdvice": "食用にしない。小型でも毒があるため、種類や部位を自己判断して料理しない。",
    "identify": [
      "尖った口先と目を通る線",
      "体側の曲がった褐色の縦線",
      "小さな口とひれ。膨らませて確認しない"
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
