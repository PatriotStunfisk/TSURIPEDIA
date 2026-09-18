import {defineFishSpecies} from './define';
export default defineFishSpecies({
  "base": {
    "slug": "herabuna",
    "name": "ヘラブナ",
    "en": "Herabuna",
    "scientific": "Carassius cuvieri",
    "season": "通年。春〜秋は始めやすく、冬は底付近を丁寧に探る",
    "difficulty": 3,
    "size": "20〜40cm前後。大型は50cmに達する",
    "methods": [
      "ヘラブナの底釣り"
    ],
    "methodSlugs": [
      "herabuna-bottom"
    ],
    "relatedSlugs": [
      "koi",
      "oikawa"
    ],
    "areas": [
      "全国のヘラブナ管理池",
      "湖沼・河川の緩流域"
    ],
    "depth": "管理池の中層〜底。棚の規定と水深に合わせる",
    "desc": "体高が高く、横から見ると丸みのあるフナ。琵琶湖のゲンゴロウブナをもとに育成された釣りの対象で、専用の練り餌と細いウキを使い、小さな食い込みを掛けます。",
    "accent": "#819b97",
    "months": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "beginner": true,
    "kids": true,
    "waterTypes": [
      "fresh"
    ],
    "danger": "桟橋で後ろへ歩きながら取り込まず、玉網を先に用意。濡れた手と網で扱い、地面へ置かない。別の池や川へ魚を移さない。",
    "guideSlugs": [
      "native-fish-conservation"
    ]
  },
  "detail": {
    "family": "コイ科",
    "genus": "フナ属",
    "aliases": [
      "ヘラ",
      "河内ブナ"
    ],
    "habitat": "管理池の桟橋、湖沼、流れの緩い川。魚がいつも底にいるとは限らず、餌や水温によって泳ぐ層が変わる。",
    "diet": "植物プランクトンなどを濾し取って食べる。釣りでは専用の練り餌を用いる。",
    "behavior": "群れで回遊し、餌がほどけて沈む層に集まる。ウキの動きには魚の接触や餌落ちも混じるので、すべてを食いアタリと決めつけない。",
    "taste": "フナ類には食文化がありますが、ここでは管理池のヘラブナ釣りとリリースを中心に紹介します。ニゴロブナのふなずしと同一視せず、池の持ち帰り規則を守ります。",
    "beginnerTip": "最初は管理人に初心者であることを伝え、使える竿の長さ・釣り座・底釣りの可否を確認。底を測ってから餌を付け、毎回ほぼ同じ位置へ振り込む。",
    "safety": "桟橋で後ろへ歩きながら取り込まず、玉網を先に用意。濡れた手と網で扱い、地面へ置かない。別の池や川へ魚を移さない。",
    "body": "高い体高、銀灰色の大きな鱗、長い背びれが目印。コイのような口ひげはない。フナ類の厳密な種判別は写真だけでは難しい場合がある。",
    "fishing": "底取り用オモリで水深を測り、両針の餌が底へ届くようウキ位置を調整。餌を付けたときに沈む目盛りと、餌が落ちて戻る目盛りを覚える。なじんだ後の短い沈みに手首で合わせ、竿の弾力で寄せる。",
    "trivia": "「ヘラブナ」は釣りで使う呼び名。野生のゲンゴロウブナと放流された釣り用の系統を区別して考えることが大切です。",
    "lifespan": "寿命は水域・飼育条件で異なります。",
    "seasonNote": "通年。春〜秋は始めやすく、冬は底付近を丁寧に探る",
    "cooking": []
  },
  "media": {
    "image": "/images/fish/herabuna-profile.webp"
  },
  "launch": {
    "catchPhrase": "体高が高く、横から見ると丸みのあるフナ。",
    "identify": [
      "体高が高く横に薄い体。",
      "口の両脇にひげがない。",
      "背びれの基底が長く、尾びれは二股。"
    ],
    "imageNotes": [
      "体形",
      "口元",
      "ひれ",
      "体色"
    ],
    "related": [],
    "methodLinks": [
      {
        "label": "ヘラブナの底釣り",
        "href": "/methods/herabuna-bottom"
      }
    ],
    "spotFocus": "管理池の桟橋、湖沼、流れの緩い川。魚がいつも底にいるとは限らず、餌や水温によって泳ぐ層が変わる。"
  },
  "quest": {
    "fightProfile": "balanced",
    "fightPower": 32,
    "stamina": 40,
    "runPower": 28
  },
  "cookingOmission": {
    "reason": "conservation",
    "note": "このページは管理池での釣りとリリースを中心に紹介します。ヘラブナを持ち帰れない施設があるため、管理人の規則を守ってください。食用不可という意味ではありません。",
    "sources": [
      {
        "label": "長谷大池釣り池センター：ヘラブナの持ち帰り禁止",
        "url": "https://nagataniooike.com/herabuna-fishing/"
      }
    ]
  }
});
