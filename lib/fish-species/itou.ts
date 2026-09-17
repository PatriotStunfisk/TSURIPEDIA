import {defineFishSpecies} from './define';
export default defineFishSpecies({
  "base": {
    "slug": "itou",
    "name": "イトウ",
    "en": "Japanese huchen",
    "scientific": "Hucho perryi",
    "waterTypes": [
      "fresh",
      "brackish"
    ],
    "season": "春の産卵期を避け、地域の保護・禁漁情報を優先",
    "difficulty": 5,
    "danger": "北海道の野生イトウは保全を優先。産卵期・禁漁区・立入規制を確認し、釣れた野生魚は手早いリリースを基本にする。増水、低水温、ヒグマの情報を確認し単独の無理な入渓を避ける。",
    "methods": [
      "トラウトルアー"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "native-fish-conservation"
    ],
    "relatedSlugs": [
      "iwana",
      "nijimasu",
      "yamame"
    ],
    "areas": [
      "北海道の限られた水系",
      "イトウを放流する管理釣り場"
    ],
    "depth": "冷たい河川の淵・緩流域・湖",
    "size": "大型は1mを超える",
    "desc": "大きな口と細かな黒点を持つ大型のサケ科魚。北海道の野生個体群は保全が重要です。釣りの可否と時期を確認し、産卵期の魚を狙わず、野生魚の持ち帰りを前提にしません。",
    "accent": "#398b98",
    "months": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "beginner": false,
    "kids": false
  },
  "detail": {
    "family": "サケ科",
    "genus": "イトウ属",
    "aliases": [
      "伊当"
    ],
    "habitat": "北海道の限られた河川・湿原・湖。産卵場所へ移動する経路と、成魚がすむ淵を合わせて守る必要がある。",
    "diet": "成長に伴い小魚などを捕食する。",
    "behavior": "冷水域の大型捕食魚。春の産卵期には浅い支流へ移動するため、追い回さず産卵床へ踏み込まない。",
    "lifespan": "寿命は生息条件や資料により異なるため一律の年数を表示していません。",
    "taste": "養殖イトウの食用流通はありますが、野生魚を料理目的で持ち帰る案内はしません。本ページは生態と保全、適切な扱いを中心に紹介します。",
    "cooking": [],
    "seasonNote": "春の産卵期を避け、地域の保護・禁漁情報を優先",
    "beginnerTip": "釣果写真のために長く陸へ上げない。道具や針外しの準備を投げる前に済ませ、希少な生息地点を細かく公開しない。",
    "safety": "北海道の野生イトウは保全を優先。産卵期・禁漁区・立入規制を確認し、釣れた野生魚は手早いリリースを基本にする。増水、低水温、ヒグマの情報を確認し単独の無理な入渓を避ける。",
    "body": "大きく幅のある頭と大きな口。 頭部から体側上部に小さな黒点が散る。 背びれの後ろに脂びれがあり、ニジマスのような明瞭な赤い帯はない。",
    "fishing": "初回はイトウを放流する管理釣り場で、使用ルアーと針の規則を確認して練習する。野生域では自治体・河川管理者の最新案内を確認し、春の産卵期を避ける。掛かった魚は水中で支え、短時間で針を外せる大きなラバーネットを先に準備する。",
    "trivia": "一度産卵すると一生を終えるシロザケとは異なり、イトウは複数回産卵します。大型親魚と産卵場所の両方を守ることが大切です。"
  },
  "media": {
    "image": "/images/fish/itou-profile.webp"
  },
  "launch": {
    "catchPhrase": "大きな口と細かな黒点を持つ大型のサケ科魚。",
    "identify": [
      "大きく幅のある頭と大きな口。",
      "頭部から体側上部に小さな黒点が散る。",
      "背びれの後ろに脂びれがあり、ニジマスのような明瞭な赤い帯はない。"
    ],
    "imageNotes": [
      "体形",
      "口・頭部",
      "ひれ",
      "見分け方"
    ],
    "related": [],
    "methodLinks": [
      {
        "label": "トラウトルアー",
        "href": "/methods/trout-lure"
      }
    ],
    "spotFocus": "北海道の限られた河川・湿原・湖。産卵場所へ移動する経路と、成魚がすむ淵を合わせて守る必要がある。"
  },
  "quest": {
    "fightProfile": "runner",
    "fightPower": 84,
    "stamina": 84,
    "runPower": 84,
    "enabled": false
  },
  "cookingOmission": {
    "reason": "conservation",
    "note": "イトウは個体群の保全を優先し、UOLINKでは持ち帰り・料理を勧めていません。地域の禁漁・保護措置に従い、産卵期や産卵場所への接近を避けてください。",
    "sources": [
      {
        "label": "北海道：イトウの保護",
        "url": "https://www.pref.hokkaido.lg.jp/ks/skn/sizenhome/itouhogo.html"
      }
    ]
  }
});
