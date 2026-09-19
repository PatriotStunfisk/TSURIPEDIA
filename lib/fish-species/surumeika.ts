import {defineFishSpecies} from './define';
// Reviewed 2026-09-19: https://www.honda.co.jp/fishing/picture-book/surumeika/
export default defineFishSpecies({
  ecologyVisual:{
  "title": "水を噴き出して、素早く移動する",
  "description": "スルメイカは胴に取り込んだ水を漏斗から噴き出し、素早く移動します。小魚などを追い、腕で捕らえる捕食者です。船釣りで感じる断続的な引きにも、イカならではの泳ぎが表れます。",
  "alt": "青い海を泳ぐスルメイカの再現画像",
  "image": "/images/ecology/surumeika-20260919.webp",
  "width": 1200,
  "height": 800,
  "source": {
    "label": "Honda釣り倶楽部：魚種の特徴",
    "url": "https://www.honda.co.jp/fishing/picture-book/surumeika/"
  }
},
  "base": {
    "slug": "surumeika",
    "name": "スルメイカ",
    "en": "Japanese flying squid",
    "scientific": "Todarodes pacificus",
    "season": "夏〜秋を中心に海域で変化",
    "difficulty": 2,
    "danger": "カンナ針と口の硬いカラストンビに注意。アニサキスのリスクがあり、鮮度だけで生食の可否は判断できません。内臓を使った自家製の生の塩辛は本ページでは案内しません。",
    "methods": [
      "船イカヅノ釣り"
    ],
    "methodSlugs": [
      "ika-sutte"
    ],
    "guideSlugs": [
      "tackle-spec-reading",
      "tackle-connection-basics"
    ],
    "relatedSlugs": [
      "yariika",
      "kensakiika",
      "aoriika"
    ],
    "areas": [
      "日本周辺の沖合を回遊。港の常夜灯だけでなく、主に船で群れのいる水深を狙うイカです。"
    ],
    "depth": "外洋の表層〜中層。船長の指示棚を探る",
    "size": "胴長20〜30cm前後",
    "desc": "細長い胴の後ろ寄りに、比較的小さな三角形のひれ。胴全体を大きなひれが囲むアオリイカとは姿が違います。色素胞で赤褐色の濃さが変わります。",
    "accent": "#70b3b4",
    "months": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "beginner": false,
    "kids": false,
    "waterTypes": [
      "sea"
    ]
  },
  "detail": {
    "family": "アカイカ科",
    "genus": "スルメイカ属",
    "aliases": [
      "ムギイカ"
    ],
    "habitat": "日本周辺の沖合を回遊。港の常夜灯だけでなく、主に船で群れのいる水深を狙うイカです。",
    "diet": "小魚・甲殻類・イカ類",
    "behavior": "外套膜内の水を漏斗から噴き出して移動し、小魚を腕で捕らえます。生まれる季節の異なる群れが日本周辺を回遊します。",
    "lifespan": "約1年",
    "taste": "歯応えのある身は刺身のほか、輪切りの煮物・バター焼き・一夜干しに向きます。胴と腕では厚さが違うので加熱を調整します。",
    "cooking": [
      "イカ刺し",
      "煮付け",
      "イカのバター醤油焼き",
      "イカの一夜干し焼き"
    ],
    "seasonNote": "夏〜秋を中心に海域で変化",
    "beginnerTip": "長いイカヅノ仕掛けは投入器を使うと扱いやすくなります。初心者は針数や直結・ブランコ仕掛けの選択を船宿へ相談してください。",
    "safety": "カンナ針と口の硬いカラストンビに注意。アニサキスのリスクがあり、鮮度だけで生食の可否は判断できません。内臓を使った自家製の生の塩辛は本ページでは案内しません。",
    "body": "細長い胴の後ろ寄りに、比較的小さな三角形のひれ。胴全体を大きなひれが囲むアオリイカとは姿が違います。色素胞で赤褐色の濃さが変わります。",
    "fishing": "指示棚の下から竿をしゃくって誘い、重みが乗ったら糸を緩めず巻きます。サバが多い時や潮が速い時は仕掛け選びも変わるため船長の案内を優先。取り込みでは竿を置いてから一段ずつ回収し、カンナを服へ掛けないようにします。",
    "trivia": "「マイカ」は地域によって別のイカも指すため、名前だけで種を決めずひれや胴の形を見ます。寿命はおよそ一年です。"
  },
  "launch": {
    "catchPhrase": "胴の後ろ側に短い三角形のひれ",
    "identify": [
      "胴の後ろ側に短い三角形のひれ",
      "細長い筒状の胴",
      "ヤリイカと比べて腕が太めで力強い"
    ],
    "imageNotes": [
      "体形",
      "ひれ",
      "見分け方",
      "食べ方"
    ],
    "related": [],
    "methodLinks": [
      {
        "label": "船イカヅノ釣り",
        "href": "/methods/ika-sutte"
      }
    ],
    "spotFocus": "日本周辺の沖合を回遊。港の常夜灯だけでなく、主に船で群れのいる水深を狙うイカです。"
  },
  "media": {
    "image": "/images/fish/surumeika-profile-20260919.webp"
  },
  "quest": {
    "fightProfile": "jet",
    "fightPower": 47,
    "stamina": 47,
    "runPower": 35,
    "habitats": [
      "wakayama"
    ]
  },
  "representativeRecipes": [
    "sashimi",
    "nitsuke",
    "butteryaki",
    "ichiyaboshi"
  ],
  "cooking": {
    "prep": [
      "胴へ指を入れて内臓の付け根を外し、腕と内臓を静かに引き抜く。",
      "透明な軟甲を抜き、胴の内側を洗って水気を拭く。",
      "腕は目の下で切り分け、口の硬い部分と吸盤の硬い輪を除く。",
      "料理に応じて皮をむき切り分ける。生食用は寄生虫対策を含む処理条件を確認する。"
    ],
    "recipes": [
      {
        "slug": "sashimi",
        "name": "イカ刺し",
        "preparation": "raw",
        "summary": "生食用に処理された胴を細切りにし、スルメイカの歯応えを楽しみます。",
        "ingredients": [
          "生食用に処理されたスルメイカの身 200g",
          "しょうゆ 適量",
          "しょうが・ねぎ 適量"
        ],
        "steps": [
          "生食用の処理・管理条件を確認し、清潔な道具を準備する。",
          "皮や骨、イカは内側の薄膜を除き、冷たい身の水分を拭く。",
          "胴を開き、繊維を断つ方向を意識して細く切る。",
          "冷えた皿へ盛り、薬味を添えてすぐ食べる。"
        ],
        "tips": [
          "生食の注意は共通案内を確認してください。",
          "切った身を常温で置かず、食べる直前に仕上げます。"
        ],
        "image": "/images/cooking/surumeika-sashimi.webp"
      },
      {
        "slug": "nitsuke",
        "name": "煮付け",
        "image": "/images/cooking/surumeika-nitsuke.webp",
        "summary": "スルメイカの煮付け。胴と腕の厚さをそろえて切り、中心まで火を通します。",
        "ingredients": [
          "2人分：スルメイカ 下処理した胴と腕250g",
          "水150ml・酒100ml",
          "醤油・みりん 各大さじ2",
          "砂糖 大さじ1",
          "しょうが 薄切り4枚"
        ],
        "steps": [
          "下処理した胴と腕を用意し、取り残した骨・鱗・内臓がないか確認する。",
          "身に熱湯をかけ、表面の汚れを落として水気を拭く。",
          "水・酒・調味料・しょうがを煮立て、魚を重ねず入れる。",
          "落とし蓋をして弱めの中火で10〜20分を目安に煮る。厚い部分まで加熱できたら、魚を先に盛り、煮汁を煮詰めてかける。"
        ],
        "tips": [
          "胴と腕の厚さをそろえて切り、中心まで火を通します。",
          "身を箸で動かしすぎず、煮汁を回しかけると崩れにくくなります。",
          "調理前後は低温で管理し、生魚用の器具は洗って加熱済みの料理と分けます。時間だけでなく身の中心まで火が通ったことを確認してください。"
        ],
        "preparation": "cooked"
      },
      {
        "slug": "butteryaki",
        "name": "イカのバター醤油焼き",
        "preparation": "cooked",
        "summary": "胴と腕を分けて切り、バターと醤油で香ばしく炒めます。",
        "ingredients": [
          "下処理したスルメイカ1杯",
          "バター15g",
          "醤油小さじ2・酒大さじ1",
          "青ねぎ適量"
        ],
        "steps": [
          "胴は輪切り、腕は食べやすい長さに切り、水分を拭く。",
          "フライパンに半量のバターを溶かし、イカを重ねず入れる。",
          "返して酒を加え、胴の内側と腕の太い部分まで十分に加熱する。",
          "醤油と残りのバターを加え、ねぎを散らす。"
        ],
        "tips": [
          "長く炒め続けると硬くなるため、切る厚さをそろえます。"
        ],
        "image": "/images/cooking/surumeika-butteryaki.webp"
      },
      {
        "slug": "ichiyaboshi",
        "name": "イカの一夜干し焼き",
        "preparation": "cooked",
        "summary": "冷蔵庫で表面を乾かしたイカを焼き、うま味と歯応えを楽しみます。",
        "ingredients": [
          "下処理して開いたスルメイカ1杯",
          "水500ml・塩15g",
          "レモン適量"
        ],
        "steps": [
          "内臓・軟甲・口を除いた胴を開き、洗って拭く。",
          "冷たい塩水へ冷蔵庫で10〜15分ほど漬け、水分を拭く。",
          "清潔な網付きバットへ広げ、冷蔵庫で6時間ほど表面を乾かす。",
          "グリルで両面を焼き、腕や胴の厚い部分まで火を通して切る。"
        ],
        "tips": [
          "常温保存用ではありません。冷蔵し早めに加熱して食べます。"
        ],
        "image": "/images/cooking/surumeika-ichiyaboshi.webp"
      }
    ]
  }
});
