import {defineFishSpecies} from './define';
// Reviewed 2026-09-25: https://aquarium.co.jp/picturebook/hapalochlaena-fasciata.html
export default defineFishSpecies({
  "base": {
    "slug": "hyoumondako",
    "name": "ヒョウモンダコ",
    "en": "Blue-lined octopus",
    "scientific": "Hapalochlaena fasciata",
    "season": "見かける時期は海域・水温で変わる",
    "difficulty": 5,
    "danger": "唾液や体内に毒がある。食用にせず、噛まれた場合は小さな傷でも直ちに119番へ連絡する。",
    "methods": [],
    "methodSlugs": [],
    "guideSlugs": [
      "dangerous-fish-first-check"
    ],
    "relatedSlugs": [
      "madako",
      "aoriika",
      "minokasago"
    ],
    "areas": [
      "暖かい浅海の岩場・潮だまり。分布の報告は各地にある"
    ],
    "depth": "沿岸の浅場など。生息環境は本文参照",
    "size": "腕を広げて10cm前後の小型個体もいる",
    "desc": "小さなタコでも手で触れてはいけない代表例。刺激すると青い線や輪が目立つが、普段は模様が見えにくいことがある。",
    "accent": "#b65b46",
    "months": [],
    "beginner": false,
    "kids": false,
    "waterTypes": [
      "sea"
    ]
  },
  "detail": {
    "family": "マダコ科",
    "genus": "ヒョウモンダコ属",
    "aliases": [],
    "habitat": "暖かい浅海の岩場・潮だまり。分布の報告は各地にある",
    "diet": "小さな甲殻類など",
    "behavior": "岩の隙間や貝殻に潜む。磯遊びで拾った貝殻や石の裏に隠れていることがある。",
    "lifespan": "生育環境・個体群により異なる",
    "taste": "唾液や体内に毒がある。食用にせず、噛まれた場合は小さな傷でも直ちに119番へ連絡する。",
    "cooking": [],
    "seasonNote": "見かける時期は海域・水温で変わる",
    "beginnerTip": "採集せず、触らずに見分けるためのページ。写真や模様だけで食用可否を判断しない。",
    "safety": "唾液や体内に毒がある。食用にせず、噛まれた場合は小さな傷でも直ちに119番へ連絡する。",
    "body": "小さなタコでも手で触れてはいけない代表例。刺激すると青い線や輪が目立つが、普段は模様が見えにくいことがある。",
    "fishing": "釣りの対象として扱わない。素手・軍手で捕まえず、子どもや周囲の人を近づけない。容器に入れて持ち帰らない。",
    "trivia": "観察時は魚体の一部だけでなく全身を確認する。画像は見分けの参考であり、安全な取り扱いや食用可否を保証するものではない。"
  },
  "launch": {
    "catchPhrase": "刺激を受けると目立つ青い線・輪",
    "identify": [
      "刺激を受けると目立つ青い線・輪",
      "小型で黄褐色の体色",
      "青い模様が見えなくても安全とは判断しない"
    ],
    "imageNotes": [
      "体形",
      "ひれ",
      "見分け方",
      "安全"
    ],
    "related": [
      "madako",
      "aoriika",
      "minokasago"
    ],
    "methodLinks": [],
    "spotFocus": "暖かい浅海の岩場・潮だまり。分布の報告は各地にある"
  },
  "media": {
    "image": "/images/fish/hyoumondako-profile-20260925.webp"
  },
  "quest": {
    "enabled": false
  },
  "hazard": {
    "hazardLevel": "critical",
    "edible": "not-recommended",
    "cookingEnabled": false,
    "identificationOnly": true,
    "headline": "小さくても触らない。噛まれたら直ちに119番へ。",
    "parts": [
      {
        "name": "口・唾液・体内",
        "detail": "唾液や体内に毒がある。食用にせず、噛まれた場合は小さな傷でも直ちに119番へ連絡する。"
      }
    ],
    "bareHands": "素手・軍手でつかまない。青い模様を出すために刺激しない。",
    "handling": [
      "釣りの対象として扱わない。素手・軍手で捕まえず、子どもや周囲の人を近づけない。容器に入れて持ち帰らない。",
      "処理できない場合は無理に触らず周囲を離し、現地の管理者や経験者に相談する。"
    ],
    "foodAdvice": "唾液や体内に毒がある。食用にせず、噛まれた場合は小さな傷でも直ちに119番へ連絡する。",
    "identify": [
      "刺激を受けると目立つ青い線・輪",
      "小型で黄褐色の体色",
      "青い模様が見えなくても安全とは判断しない"
    ],
    "sources": [
      {
        "label": "鳥羽水族館：ヒョウモンダコ",
        "url": "https://aquarium.co.jp/picturebook/hapalochlaena-fasciata.html"
      }
    ],
    "verifiedAt": "2026-09-25"
  }
});
