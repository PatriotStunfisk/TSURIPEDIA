import {defineFishSpecies} from './define';
import {cookedRecipe} from './cooked-recipes';
export default defineFishSpecies({
  representativeRecipes: ["shioyaki","nitsuke","fry","meuniere"],
  "base": {
    "slug": "aigo",
    "name": "アイゴ",
    "en": "Mottled spinefoot",
    "scientific": "Siganus fuscescens",
    "season": "見かける時期は地域・水温で変動",
    "difficulty": 5,
    "danger": "背ビレ・腹ビレ・尻ビレの毒棘に注意。素手で触らない。",
    "methods": [],
    "methodSlugs": [],
    "guideSlugs": [
      "dangerous-fish-first-check"
    ],
    "relatedSlugs": [
      "mejina",
      "chinu"
    ],
    "areas": [
      "暖かい沿岸の岩礁・藻場・堤防周辺"
    ],
    "depth": "浅い沿岸域（生息場所は本文参照）",
    "size": "20〜35cmほど",
    "desc": "平たい楕円形の体と小さな口を持ち、体色や斑紋は状態で変わります。背・腹・尻ビレの棘に毒があり、食用になる魚でも触り方には注意が必要です。",
    "accent": "#be623f",
    "months": [],
    "beginner": false,
    "kids": false
  },
  "hazard": {
    "hazardLevel": "high",
    "edible": "processed-only",
    "cookingEnabled": true,
    "identificationOnly": true,
    "headline": "背ビレ・腹ビレ・尻ビレの毒棘に注意。素手で触らない。",
    "parts": [
      {
        "name": "背ビレ・腹ビレ・尻ビレ",
        "detail": "毒のある棘。死んだ魚や切り離したヒレも安全とは限りません。"
      }
    ],
    "bareHands": "素手で触らないでください。手袋だけでも毒棘や歯を完全には防げません。",
    "handling": [
      "素手で握らず、魚体とヒレを人へ向けない",
      "自分で毒棘を切り落とす作業を始めず、経験者に依頼",
      "専門的な処理を頼めなければ食用に持ち帰らない"
    ],
    "foodAdvice": "食用になる魚ですが、毒棘の処理は経験のある専門家へ。料理は安全に処理済みの骨なし切り身を購入・入手してから行います。",
    "identify": [
      "左右に平たい楕円形の体と小さな口",
      "背ビレが長く連続し、腹・尻ビレにも鋭い棘",
      "色が変わるため体色だけで判定しない"
    ],
    "sources": [
      {
        "label": "沖縄美ら海水族館：アイゴ",
        "url": "https://churaumi.okinawa/sp/fishbook/1772264812/"
      },
      {
        "label": "シマノ：危険な魚の扱い",
        "url": "https://fish.shimano.com/ja-JP/content/beginners/fishing/poison/index.html"
      }
    ],
    "verifiedAt": "2026-09-16"
  },
  "quest": {
    "enabled": false
  },
  "media": {
    "image": "/images/fish/aigo.png"
  },
  "detail": {
    "family": "アイゴ科",
    "genus": "アイゴ属",
    "aliases": [
      "バリ"
    ],
    "habitat": "暖かい沿岸の岩礁・藻場・堤防周辺",
    "diet": "海藻など",
    "behavior": "藻場で海藻を食べ、磯のウキ釣りにも掛かります。",
    "lifespan": "本ページでは未掲載",
    "taste": "食用になる魚ですが、毒棘の処理は経験のある専門家へ。料理は安全に処理済みの骨なし切り身を購入・入手してから行います。",
    "cooking": [],
    "seasonNote": "出会いやすさは地域・釣り場で異なります。釣期や安全な時期を示すものではありません。",
    "beginnerTip": "素手で握らず、魚体とヒレを人へ向けない",
    "safety": "素手で触らないでください。手袋だけでも毒棘や歯を完全には防げません。",
    "body": "見分け方の図は参考です。実物の同定や食用可否を画像だけで決めないでください。",
    "fishing": "素手で握らず、魚体とヒレを人へ向けない。自分で毒棘を切り落とす作業を始めず、経験者に依頼。専門的な処理を頼めなければ食用に持ち帰らない。",
    "trivia": "藻場で海藻を食べ、磯のウキ釣りにも掛かります。"
  },
  "cooking": {
    "prep": [
      "毒棘・内臓の処理は魚店など経験のある専門家に依頼します。丸魚の自己処理手順は案内しません。",
      "専門家が安全に処理した骨なし切り身を用意します。処理状態が分からない魚は使いません。",
      "切り身は冷蔵で保管し、水分を拭いて骨の残りを確認します。",
      "生魚用の器具と加熱済み料理を分け、中心まで十分加熱します。"
    ],
    "recipes": ['shioyaki','nitsuke','fry','meuniere'].map(slug=>cookedRecipe({slug:'aigo',name:'アイゴ'},slug,'専門家が毒棘・内臓を除去した骨なし切り身','丸魚からの自己処理は行わず、専門家による処理済みの身を使ってください。'))
  }
});
