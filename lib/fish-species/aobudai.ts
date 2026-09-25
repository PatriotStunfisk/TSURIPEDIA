import {defineFishSpecies} from './define';
// Reviewed 2026-09-25: https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syokuchu/poison/animal_det_03.html
export default defineFishSpecies({
  "base": {
    "slug": "aobudai",
    "name": "アオブダイ",
    "en": "Knobsnout parrotfish",
    "scientific": "Scarus ovifrons",
    "season": "見かける時期は海域・水温で変わる",
    "difficulty": 5,
    "danger": "パリトキシン様毒による重い食中毒の原因魚。加熱で安全になると考えず、食べない。",
    "methods": [],
    "methodSlugs": [],
    "guideSlugs": [
      "dangerous-fish-first-check"
    ],
    "relatedSlugs": [
      "nizadai",
      "hakofugu",
      "soushihagi"
    ],
    "areas": [
      "本州中部以南の暖かい岩礁域"
    ],
    "depth": "沿岸の浅場など。生息環境は本文参照",
    "size": "50〜80cmほど",
    "desc": "青緑色の大きな体と、くちばしのように合わさった歯を持つ。食用のブダイ類と一括して扱わず、アオブダイの中毒リスクを覚えておきたい。",
    "accent": "#b65b46",
    "months": [],
    "beginner": false,
    "kids": false,
    "waterTypes": [
      "sea"
    ]
  },
  "detail": {
    "family": "ブダイ科",
    "genus": "アオブダイ属",
    "aliases": [],
    "habitat": "本州中部以南の暖かい岩礁域",
    "diet": "岩上の付着物など",
    "behavior": "硬い歯で岩の表面をかじりながら餌を取る。大きな体と尾で強く泳ぐ。",
    "lifespan": "生育環境・個体群により異なる",
    "taste": "パリトキシン様毒による重い食中毒の原因魚。加熱で安全になると考えず、食べない。",
    "cooking": [],
    "seasonNote": "見かける時期は海域・水温で変わる",
    "beginnerTip": "採集せず、触らずに見分けるためのページ。写真や模様だけで食用可否を判断しない。",
    "safety": "パリトキシン様毒による重い食中毒の原因魚。加熱で安全になると考えず、食べない。",
    "body": "青緑色の大きな体と、くちばしのように合わさった歯を持つ。食用のブダイ類と一括して扱わず、アオブダイの中毒リスクを覚えておきたい。",
    "fishing": "磯釣りで掛かっても食用目的で持ち帰らない。鋭い歯に手を入れず、無理な取り込みで足場の先へ出ない。",
    "trivia": "観察時は魚体の一部だけでなく全身を確認する。画像は見分けの参考であり、安全な取り扱いや食用可否を保証するものではない。"
  },
  "launch": {
    "catchPhrase": "青緑色の大きなうろこ",
    "identify": [
      "青緑色の大きなうろこ",
      "成魚では額が盛り上がる",
      "上下の歯がくちばし状に見える"
    ],
    "imageNotes": [
      "体形",
      "ひれ",
      "見分け方",
      "安全"
    ],
    "related": [
      "nizadai",
      "hakofugu",
      "soushihagi"
    ],
    "methodLinks": [],
    "spotFocus": "本州中部以南の暖かい岩礁域"
  },
  "media": {
    "image": "/images/fish/aobudai-profile-20260925.webp"
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
        "detail": "パリトキシン様毒による重い食中毒の原因魚。加熱で安全になると考えず、食べない。"
      }
    ],
    "bareHands": "素手で口元や魚体を握らず、針を外す際は長いプライヤーを使う。",
    "handling": [
      "磯釣りで掛かっても食用目的で持ち帰らない。鋭い歯に手を入れず、無理な取り込みで足場の先へ出ない。",
      "処理できない場合は無理に触らず周囲を離し、現地の管理者や経験者に相談する。"
    ],
    "foodAdvice": "パリトキシン様毒による重い食中毒の原因魚。加熱で安全になると考えず、食べない。",
    "identify": [
      "青緑色の大きなうろこ",
      "成魚では額が盛り上がる",
      "上下の歯がくちばし状に見える"
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
