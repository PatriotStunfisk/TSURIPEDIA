import {defineFishSpecies} from './define';
export default defineFishSpecies({
  "base": {
    "slug": "hiramasa",
    "name": "ヒラマサ",
    "en": "Yellowtail amberjack",
    "scientific": "Seriola aureovittata",
    "waterTypes": [
      "sea"
    ],
    "season": "4・5・6・9・10・11月が狙いの目安（地域・年により変動）",
    "difficulty": 5,
    "danger": "大型魚の突進で転倒しない足場を確保。磯の単独釣行を避け、ギャフやタモの取り込みは経験者に任せる。",
    "methods": [
      "キャスティング",
      "ジギング",
      "ショアジギング"
    ],
    "methodSlugs": [
      "casting",
      "jigging",
      "shore-jigging"
    ],
    "guideSlugs": [
      "shore-jigging-jig-weight",
      "fish-carry-home"
    ],
    "relatedSlugs": [
      "buri",
      "kanpachi",
      "shiira"
    ],
    "areas": [
      "暖流域の磯・沖の根"
    ],
    "depth": "岩礁際の表層〜底層",
    "size": "60〜120cm、1mを超える大型もいる",
    "desc": "黄色い帯のある細長い体で、上あご後端の角が丸くなります。ブリと似るため、胸びれと腹びれの長さや体の厚みも合わせて確認します。",
    "accent": "#398b98",
    "months": [
      4,
      5,
      6,
      9,
      10,
      11
    ],
    "beginner": false,
    "kids": false
  },
  "detail": {
    "family": "アジ科",
    "genus": "ブリ属",
    "aliases": [
      "ヒラス",
      "ヒラソ"
    ],
    "habitat": "潮通しのよい島周りや岬、沖の根。ブリに比べ岩礁に沿って泳ぐ場面が多い青物です。",
    "diet": "小魚、イカ、甲殻類など",
    "body": "黄色い帯のある細長い体で、上あご後端の角が丸くなります。ブリと似るため、胸びれと腹びれの長さや体の厚みも合わせて確認します。",
    "fishing": "船では魚探反応と水深に合わせてジギング、浮いた魚にはキャスティングを選びます。プラグは水面を飛ばし続けず、水をつかんで泳ぐ速さを保つのが基本。掛かった直後に根へ走られるため、船長の声に合わせて竿の角度と巻きを保ちます。",
    "beginnerTip": "初回は船宿の貸し道具や推奨セットを利用。結束強度とドラグを出船前に確認し、魚が掛かってから締め込み過ぎないこと。",
    "safety": "大型魚の突進で転倒しない足場を確保。磯の単独釣行を避け、ギャフやタモの取り込みは経験者に任せる。",
    "taste": "引き締まった身で、刺身のほか照り焼きに向きます。厚いカマは皮側を香ばしく焼くと食べ応えがあります。",
    "trivia": "日本のヒラマサの学名はSeriola aureovittata。古い資料には南半球の近縁種と同じS. lalandiの名が使われることがあります。",
    "behavior": "岩礁の近くを回遊し、小魚を追います。掛かった直後に根へ向かって走るため、障害物との位置関係がファイトを左右します。",
    "lifespan": "寿命の確実な資料は未確認",
    "cooking": [
      "刺身",
      "照り焼き",
      "カマの塩焼き",
      "竜田揚げ"
    ],
    "seasonNote": "4・5・6・9・10・11月が狙いの目安（地域・年により変動）"
  },
  "media": {
    "image": "/images/fish/hiramasa-profile.png"
  },
  "launch": {
    "catchPhrase": "根へ突っ込む走りを受け止める、磯と船の青物",
    "identify": [
      "上あごの後端が丸みを帯びる。",
      "胸びれは腹びれに比べ短い傾向がある。",
      "ブリより左右に平たい体。黄色い帯だけで判断しない。"
    ],
    "imageNotes": [
      "体形",
      "ひれ",
      "尾の形",
      "模様"
    ],
    "related": [],
    "methodLinks": [
      {
        "label": "キャスティング",
        "href": "/methods/casting"
      },
      {
        "label": "ジギング",
        "href": "/methods/jigging"
      },
      {
        "label": "ショアジギング",
        "href": "/methods/shore-jigging"
      }
    ],
    "spotFocus": "潮通しのよい島周りや岬、沖の根。ブリに比べ岩礁に沿って泳ぐ場面が多い青物です。"
  },
  "cooking": {
    "prep": [
      "大きな魚は滑らない台で作業し、必要なら魚店に下処理を依頼する。",
      "鱗・えら・内臓を除き、背骨沿いの血を洗い落とす。",
      "頭とカマを分けて三枚におろし、腹骨と血合い骨を除く。",
      "刺身用は背と腹の節に分けて皮を引く。加熱用は厚みを揃えて切る。"
    ],
    "recipes": [
      {
        "slug": "sashimi",
        "name": "刺身",
        "preparation": "raw",
        "image": "/images/cooking/hiramasa-sashimi.webp",
        "summary": "ヒラマサの刺身。厚みを変えると歯応えも変わります。端の一切れで切りやすさを確かめます。",
        "ingredients": [
          "ヒラマサ 生食用として適切に処理された身200g",
          "大葉・大根・わさびまたは生姜 適量"
        ],
        "steps": [
          "皮と血合い骨を除いた身を冷蔵しておく。",
          "清潔な包丁を一方向に引き、身の繊維を断つ向きに切る。",
          "冷やした器に盛り、薬味を添えて早めに食べる。"
        ],
        "tips": [
          "厚みを変えると歯応えも変わります。端の一切れで切りやすさを確かめます。"
        ]
      },
      {
        "slug": "teriyaki",
        "name": "照り焼き",
        "preparation": "cooked",
        "image": "/images/cooking/hiramasa-teriyaki.webp",
        "summary": "ヒラマサの照り焼き。タレは魚に火が通ってから加えると焦げにくくなります。",
        "ingredients": [
          "ヒラマサ 切り身2切れ",
          "醤油・みりん・酒各大さじ1",
          "砂糖小さじ1・油小さじ1"
        ],
        "steps": [
          "切り身の水気を拭き、油を引いたフライパンで両面を焼く。",
          "蓋をして厚い部分まで火を通し、余分な脂を拭く。",
          "合わせた調味料を入れて弱火で絡め、焦げる前に取り出す。"
        ],
        "tips": [
          "タレは魚に火が通ってから加えると焦げにくくなります。"
        ]
      },
      {
        "slug": "kama-shioyaki",
        "name": "カマの塩焼き",
        "preparation": "cooked",
        "image": "/images/cooking/hiramasa-kama-shioyaki.webp",
        "summary": "ヒラマサのカマの塩焼き。火通りに時間がかかる部位です。表面の焼き色だけで取り出さないようにします。",
        "ingredients": [
          "ヒラマサ 下処理済みのカマ1〜2個",
          "塩 適量",
          "大根おろし・レモン 適量"
        ],
        "steps": [
          "カマに残る血や鱗を洗い落とし、水気をよく拭く。",
          "塩を振って冷蔵庫で15分置き、余分な水分を拭く。",
          "グリルで皮側を香ばしく焼き、骨際の厚い身まで火を通す。焦げる部分はホイルで覆う。"
        ],
        "tips": [
          "火通りに時間がかかる部位です。表面の焼き色だけで取り出さないようにします。"
        ]
      },
      {
        "slug": "tatsuta",
        "name": "竜田揚げ",
        "preparation": "cooked",
        "image": "/images/cooking/hiramasa-tatsuta.webp",
        "summary": "ヒラマサの竜田揚げ。漬け汁が多く残ると油がはねます。長時間漬け過ぎず、揚げる直前に粉を付けます。",
        "ingredients": [
          "ヒラマサ 骨を除いた身250g",
          "醤油・酒各大さじ1",
          "すりおろし生姜小さじ1",
          "片栗粉・揚げ油 適量"
        ],
        "steps": [
          "身を2〜3cm角に切り、醤油・酒・生姜を絡めて冷蔵庫で10分置く。",
          "汁気を拭き、片栗粉を薄くまぶす。",
          "170℃前後の油で中心まで揚げる。厚い一切れを割り、火通りを確認する。"
        ],
        "tips": [
          "漬け汁が多く残ると油がはねます。長時間漬け過ぎず、揚げる直前に粉を付けます。"
        ]
      }
    ]
  },
  "representativeRecipes": [
    "sashimi",
    "teriyaki",
    "kama-shioyaki",
    "tatsuta"
  ],
  "quest": {
    "fightProfile": "diver",
    "fightPower": 85,
    "stamina": 80,
    "runPower": 80
  }
});
