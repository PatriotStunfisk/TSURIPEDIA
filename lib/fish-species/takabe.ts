import {defineFishSpecies} from './define';
export default defineFishSpecies({
  "base": {
    "slug": "takabe",
    "name": "タカベ",
    "en": "Yellowstriped butterfish",
    "scientific": "Labracoglossa argentiventris",
    "waterTypes": [
      "sea"
    ],
    "season": "5・6・7・8・9・10月が狙いの目安（地域・年により変動）",
    "difficulty": 2,
    "danger": "群れを追って濡れた磯先端へ移動しない。小魚でも背びれの棘と針を避け、足場の安定を優先します。",
    "methods": [
      "ウキ釣り",
      "サビキ釣り"
    ],
    "methodSlugs": [
      "uki",
      "sabiki"
    ],
    "guideSlugs": [
      "aji-sabiki-depth",
      "fish-carry-home"
    ],
    "relatedSlugs": [
      "isaki",
      "mejina",
      "aji"
    ],
    "areas": [
      "伊豆諸島など暖流の岩礁沿岸"
    ],
    "depth": "磯周りの表層〜中層",
    "size": "15〜25cm前後",
    "desc": "青灰色の体の背側から尾へ鮮やかな黄色い帯が続きます。小さな口と細い体が特徴で、ウメイロ類と混同しないようひれと体形も確認します。",
    "accent": "#398b98",
    "months": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "beginner": true,
    "kids": false
  },
  "detail": {
    "family": "イスズミ科",
    "genus": "タカベ属",
    "aliases": [],
    "habitat": "伊豆諸島など暖流域の磯周りで群れを作ります。潮通しのよい港に入ることもあります。",
    "diet": "動物プランクトンなど",
    "body": "青灰色の体の背側から尾へ鮮やかな黄色い帯が続きます。小さな口と細い体が特徴で、ウメイロ類と混同しないようひれと体形も確認します。",
    "fishing": "小さな口に合う針と付け餌を使い、浅い棚から群れの層を探ります。コマセを一度に大量に撒かず少量ずつ同調。餌だけ取られるときは餌を小さく付け直し、ウキの動きが止まるほど沈めず短く合わせます。",
    "beginnerTip": "群れが見えても大きな針では掛かりにくい魚です。細い仕掛けを使う場合は足場から抜き上げる高さにも注意します。",
    "safety": "群れを追って濡れた磯先端へ移動しない。小魚でも背びれの棘と針を避け、足場の安定を優先します。",
    "taste": "脂が乗る時期の塩焼きが定番。小型魚は煮付け、身を外した唐揚げやつみれ汁にも使えます。",
    "trivia": "東京都の島しょ部で親しまれる魚です。回遊状況と脂の乗りには地域差があり、同じ月でも釣れ方は変わります。",
    "behavior": "岩礁近くの中層で群れを作り、流れてくる動物プランクトンを食べます。群れの位置に合わせた浅い棚から探ります。",
    "lifespan": "寿命の確実な資料は未確認",
    "cooking": [
      "塩焼き",
      "煮付け",
      "唐揚げ",
      "つみれ汁"
    ],
    "seasonNote": "5・6・7・8・9・10月が狙いの目安（地域・年により変動）"
  },
  "media": {
    "image": "/images/fish/takabe-profile.png"
  },
  "launch": {
    "catchPhrase": "黄色い尾を見分け、磯際の群れを小針で狙う",
    "identify": [
      "青緑色の背と銀色の腹、背側を走る黄色い帯。",
      "口は小さく、尾びれは深く二叉する。",
      "小型のイサキの幼魚とは帯の本数や位置を比較する。"
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
        "label": "ウキ釣り",
        "href": "/methods/uki"
      },
      {
        "label": "サビキ釣り",
        "href": "/methods/sabiki"
      }
    ],
    "spotFocus": "伊豆諸島など暖流域の磯周りで群れを作ります。潮通しのよい港に入ることもあります。"
  },
  "cooking": {
    "prep": [
      "細かな鱗を軽く落とし、えら・内臓を除く。",
      "腹腔を洗い、水気を拭いて冷蔵する。",
      "塩焼きは丸のまま、唐揚げやつみれは三枚におろす。",
      "小骨を丁寧に除き、子どもへは焼いた後も骨を確認して取り分ける。"
    ],
    "recipes": [
      {
        "slug": "shioyaki",
        "name": "塩焼き",
        "preparation": "cooked",
        "image": "/images/cooking/takabe-shioyaki.webp",
        "summary": "タカベの塩焼き。尾やひれが焦げやすい場合はアルミホイルで保護します。",
        "ingredients": [
          "タカベ 切り身2切れ（小型は下処理済み2尾）",
          "塩 魚重量の約1％",
          "大根おろし・柑橘 適量"
        ],
        "steps": [
          "魚に塩を振って冷蔵庫で15分ほど置き、出た水分を拭く。",
          "予熱したグリルで皮を香ばしく焼き、厚い部分まで火を通す。",
          "身が骨から外れることを確認し、大根おろしを添える。"
        ],
        "tips": [
          "尾やひれが焦げやすい場合はアルミホイルで保護します。"
        ]
      },
      {
        "slug": "nitsuke",
        "name": "煮付け",
        "preparation": "cooked",
        "image": "/images/cooking/takabe-nitsuke.webp",
        "summary": "タカベの煮付け。途中で何度も裏返さず、煮汁を上から掛けると身崩れを防げます。",
        "ingredients": [
          "タカベ 切り身250g（小型は下処理済み2尾）",
          "水100ml・酒100ml",
          "醤油大さじ2・みりん大さじ2・砂糖大さじ1",
          "生姜薄切り3枚"
        ],
        "steps": [
          "魚の水気を拭く。丸魚は皮に浅い切れ目を入れる。",
          "煮汁を沸かして魚と生姜を入れ、落とし蓋をする。",
          "中弱火で10〜15分を目安に中心まで煮る。魚を先に取り出し、煮汁を好みの濃さへ詰める。"
        ],
        "tips": [
          "途中で何度も裏返さず、煮汁を上から掛けると身崩れを防げます。"
        ]
      },
      {
        "slug": "karaage",
        "name": "唐揚げ",
        "preparation": "cooked",
        "image": "/images/cooking/takabe-karaage.webp",
        "summary": "タカベの唐揚げ。骨付きでは食べにくいため、家庭向けには骨を取り除いた身で作ります。",
        "ingredients": [
          "タカベ 骨を除いた身250g",
          "塩少々・酒小さじ2",
          "片栗粉・揚げ油 適量"
        ],
        "steps": [
          "身を一口大に切り、塩と酒をなじませる。",
          "水気を拭き、片栗粉を薄くまぶす。",
          "170℃前後の油で少量ずつ中心まで揚げ、油を切る。"
        ],
        "tips": [
          "骨付きでは食べにくいため、家庭向けには骨を取り除いた身で作ります。"
        ]
      },
      {
        "slug": "tsumire",
        "name": "つみれ汁",
        "preparation": "cooked",
        "image": "/images/cooking/takabe-tsumire.webp",
        "summary": "タカベのつみれ汁。細かな骨が残らないよう、たたく前に指で確認します。",
        "ingredients": [
          "タカベ 骨・皮を除いた身200g",
          "生姜小さじ1・味噌小さじ1・片栗粉小さじ2",
          "だし600ml・塩少々・ねぎ適量"
        ],
        "steps": [
          "身を包丁で細かくたたき、生姜・味噌・片栗粉を混ぜる。",
          "沸いただしへスプーン2本で小さく丸めて落とす。",
          "弱く煮立つ火加減で中心まで火を通し、塩とねぎで仕上げる。"
        ],
        "tips": [
          "細かな骨が残らないよう、たたく前に指で確認します。"
        ]
      }
    ]
  },
  "representativeRecipes": [
    "shioyaki",
    "nitsuke",
    "karaage",
    "tsumire"
  ],
  "quest": {
    "fightProfile": "balanced",
    "fightPower": 49,
    "stamina": 50,
    "runPower": 50
  }
});
