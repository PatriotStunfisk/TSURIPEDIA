import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.jfa.maff.go.jp/j/yugyo/y_kuromaguro/kyouryokuirai.html
export default defineFishSpecies({
  "base": {
    "slug": "kuromaguro",
    "name": "クロマグロ",
    "en": "Pacific bluefin tuna",
    "scientific": "Thunnus orientalis",
    "season": "遊漁可能な期間・条件を水産庁の最新案内で確認",
    "difficulty": 5,
    "danger": "小型魚の採捕禁止や大型魚の数量・期間・報告などの規制があります。採捕停止中は狙うこと自体を避け、最新の水産庁案内と船長の指示に従ってください。ラインを手や体へ巻き付けないでください。",
    "methods": [
      "オフショアキャスティング",
      "ジギング"
    ],
    "methodSlugs": [
      "offshore-casting",
      "jigging"
    ],
    "guideSlugs": [
      "tackle-spec-reading",
      "tackle-connection-basics"
    ],
    "relatedSlugs": [
      "kihada",
      "katsuo",
      "suma"
    ],
    "areas": [
      "日本周辺の外洋・沿岸沖。回遊と遊漁規制を確認"
    ],
    "depth": "沖合の表層〜中層",
    "size": "幼魚から2mを超える大型まで",
    "desc": "太い紡錘形と濃紺の背。胸びれが比較的短い。尾に向かって小離鰭が並ぶ。",
    "accent": "#7fa9a4",
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
    "beginner": false,
    "kids": false,
    "waterTypes": [
      "sea"
    ]
  },
  "detail": {
    "family": "サバ科",
    "genus": "マグロ属",
    "aliases": [
      "ホンマグロ",
      "メジ",
      "ヨコワ"
    ],
    "habitat": "日本周辺の外洋・沿岸沖。回遊と遊漁規制を確認",
    "diet": "小魚・イカなど",
    "behavior": "広い海域を回遊する大型の捕食魚です。水面の鳥や小魚の動きは手掛かりですが、姿が見えても操船や投げる方向は船長の判断を優先します。",
    "lifespan": "生息環境や個体により異なる",
    "taste": "刺身・赤身の漬け丼・ねぎま鍋・竜田揚げを紹介。",
    "cooking": [
      "刺身",
      "赤身の漬け丼",
      "ねぎま鍋",
      "竜田揚げ"
    ],
    "seasonNote": "遊漁可能な期間・条件を水産庁の最新案内で確認",
    "beginnerTip": "予約前に水産庁の最新情報と船の登録・対応状況を確認。釣行直前にも採捕停止情報を再確認します。",
    "safety": "小型魚の採捕禁止や大型魚の数量・期間・報告などの規制があります。採捕停止中は狙うこと自体を避け、最新の水産庁案内と船長の指示に従ってください。ラインを手や体へ巻き付けないでください。",
    "body": "太い紡錘形と濃紺の背。胸びれが比較的短い。尾に向かって小離鰭が並ぶ。",
    "fishing": "遊漁が認められる期間・条件で、対応する遊漁船と専用タックルを利用します。キャスト前に周囲を確認し、掛かったらドラグで走りを受けます。取り込みや放流は船長の指示に従い、初挑戦で単独判断しないでください。",
    "trivia": "キハダとは別種です。「メジ」「ヨコワ」は幼魚の呼び名で、名前が違ってもクロマグロの規制対象になります。"
  },
  "launch": {
    "catchPhrase": "太い紡錘形と濃紺の背",
    "identify": [
      "太い紡錘形と濃紺の背",
      "胸びれが比較的短い",
      "尾に向かって小離鰭が並ぶ"
    ],
    "imageNotes": [
      "体形",
      "模様",
      "見分け方",
      "食べ方"
    ],
    "related": [],
    "methodLinks": [
      {
        "label": "オフショアキャスティング",
        "href": "/methods/offshore-casting"
      },
      {
        "label": "ジギング",
        "href": "/methods/jigging"
      }
    ],
    "spotFocus": "日本周辺の外洋・沿岸沖。回遊と遊漁規制を確認"
  },
  "media": {
    "image": "/images/fish/kuromaguro-profile-20260919.webp"
  },
  "representativeRecipes": [
    "sashimi",
    "zuke",
    "negima",
    "tatsuta"
  ],
  "cooking": {
    "prep": [
      "適法に入手し低温管理された切り身や柵を使用する。",
      "皮・血合い骨の残りを確認し、清潔な道具で整える。",
      "生食用と加熱用の処理条件を区別する。",
      "必要な分だけ切り分け、調理直前まで冷蔵する。"
    ],
    "recipes": [
      {
        "slug": "sashimi",
        "name": "刺身",
        "preparation": "raw",
        "summary": "生食用に処理された身を、包丁で長く引いて切ります。",
        "ingredients": [
          "生食用クロマグロの柵 200g",
          "しょうゆ・わさび 適量",
          "大葉・大根のつま 適量"
        ],
        "steps": [
          "生食に適した処理・管理が確認できる柵を準備する。",
          "清潔な包丁とまな板を用意し、骨や皮の残りを確認する。",
          "冷たい柵の水分を拭き、繊維を断つ方向に切る。",
          "冷えた皿に盛り、薬味を添えてすぐ食べる。"
        ],
        "tips": [
          "常温で置かず、食べる直前に切ります。生食の注意は共通案内を確認してください。"
        ],
        "image": "/images/cooking/kuromaguro-sashimi.webp"
      },
      {
        "slug": "zuke",
        "name": "赤身の漬け丼",
        "preparation": "raw",
        "summary": "クロマグロの赤身を短時間たれになじませ、ご飯へ盛ります。",
        "ingredients": [
          "生食用クロマグロの柵 200g",
          "醤油 大さじ2",
          "みりん 大さじ1",
          "ご飯2膳・大葉・ごま 適量"
        ],
        "steps": [
          "みりんを加熱して煮切り、冷まして醤油と合わせる。",
          "生食用の赤身を薄めに切る。",
          "冷めたたれに入れ、冷蔵庫で10〜15分なじませる。",
          "熱すぎないご飯へ盛り、大葉やごまを添える。"
        ],
        "tips": [
          "醤油へ漬けても生食用の管理・処理は必要です。"
        ],
        "image": "/images/cooking/kuromaguro-zuke.webp"
      },
      {
        "slug": "negima",
        "name": "ねぎま鍋",
        "preparation": "cooked",
        "summary": "クロマグロの切り身と長ねぎを、だしでしっかり加熱します。",
        "ingredients": [
          "クロマグロの切り身 250g",
          "長ねぎ1本・豆腐1/2丁",
          "だし400ml",
          "酒 大さじ2・醤油 大さじ1",
          "塩 少々"
        ],
        "steps": [
          "マグロを一口大に切り、ねぎを3cmほどに切る。",
          "鍋でねぎを軽く焼き、だし・調味料を加える。",
          "マグロと豆腐を入れ、あくを取りながら中心まで加熱する。",
          "味を整えて温かいうちに取り分ける。"
        ],
        "tips": [
          "赤身は煮すぎると硬くなるため、火が通った分から食べます。"
        ],
        "image": "/images/cooking/kuromaguro-negima.webp"
      },
      {
        "slug": "tatsuta",
        "name": "竜田揚げ",
        "preparation": "cooked",
        "summary": "しょうが醤油の下味で、赤身を香ばしく揚げます。",
        "ingredients": [
          "クロマグロの切り身 250g",
          "醤油・酒 各大さじ1",
          "しょうが 小さじ1",
          "片栗粉・油 適量"
        ],
        "steps": [
          "魚を厚さのそろった一口大に切る。",
          "醤油・酒・しょうがを合わせ、冷蔵で15分ほど下味を付ける。",
          "汁気を拭いて片栗粉を薄くまぶす。",
          "170℃程度の油で中心まで十分に加熱し、油を切る。"
        ],
        "tips": [
          "衣が早く色付くため、厚すぎる塊は避けます。"
        ],
        "image": "/images/cooking/kuromaguro-tatsuta.webp"
      }
    ]
  },
  "quest": {
    "fightProfile": "runner",
    "fightPower": 95
  }
});
