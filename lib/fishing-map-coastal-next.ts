import {createHarborEntries,type HarborRecord} from './shore-spot';
// Original descriptions; each location retains its discovery and reviewed map sources.
const places:HarborRecord[]=[
  {
    "slug": "coast-aomorioosukakaigann",
    "name": "大須賀海岸",
    "prefecture": "青森県",
    "lat": 40.528023,
    "lng": 141.583021,
    "primaryType": "beach",
    "fish": [
      "ヒラメ"
    ],
    "methodSlugs": [
      "surf-lure"
    ],
    "note": "八戸の大須賀に広がる砂浜。ヒラメ狙いは浜全体を同じように投げるより、波の崩れ方が変わる筋を探したい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba3/aomorioosukakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.528023/141.583021/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorimomoisikaigann",
    "name": "百石海岸",
    "prefecture": "青森県",
    "lat": 40.654353,
    "lng": 141.442752,
    "primaryType": "beach",
    "fish": [
      "ヒラメ"
    ],
    "methodSlugs": [
      "surf-lure"
    ],
    "note": "百石の広いサーフでは、ヒラメを探して移動する釣りが基本になる。投げた距離だけでなく、反応した波打ち際の形も覚えておきたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba3/aomorimomoisikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.654353/141.442752/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomoridekisimakaigann",
    "name": "出来島海岸",
    "prefecture": "青森県",
    "lat": 40.848262,
    "lng": 140.27775,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "出来島は遠浅の砂浜で、キス・カレイの底釣りとヒラメ・マゴチのルアー釣りを組み立てられる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoridekisimakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.848262/140.27775/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-iwateoohamakaigann",
    "name": "大浜海岸",
    "prefecture": "岩手県",
    "lat": 38.995473,
    "lng": 141.741936,
    "primaryType": "beach",
    "fish": [
      "ヒラメ"
    ],
    "methodSlugs": [
      "surf-lure"
    ],
    "note": "岩手の大浜は流れ込みを伴う砂浜。ヒラメ狙いでは、流れそのものより砂底との境目を陸上から見て探りたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateoohamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.995473/141.741936/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateugekaigann",
    "name": "有家海岸",
    "prefecture": "岩手県",
    "lat": 40.322761,
    "lng": 141.773779,
    "primaryType": "beach",
    "fish": [
      "ヒラメ"
    ],
    "methodSlugs": [
      "surf-lure"
    ],
    "note": "有家の砂浜には流れ込みがあり、ヒラメなどを狙う候補になる。水の色や流れの変化と、安全に回収できる浜幅を合わせて見る。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateugekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.322761/141.773779/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagioisehama",
    "name": "御伊勢浜",
    "prefecture": "宮城県",
    "lat": 38.825232,
    "lng": 141.585617,
    "primaryType": "beach",
    "fish": [
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "surf-lure"
    ],
    "note": "御伊勢浜は砂浜からヒラメ・マゴチを探る候補。隣接する港の釣りとは分け、浜から回収できる範囲を選びたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/miyagioisehama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.825232/141.585617/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagitorinoumikakou",
    "name": "鳥の海河口（大畑浜）",
    "prefecture": "宮城県",
    "lat": 38.029941,
    "lng": 140.920236,
    "primaryType": "beach",
    "fish": [
      "カレイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "鳥の海の南側、大畑浜のサーフを案内する地点。河口側はサーフィンと重なるため、砂浜での投げ釣り・ルアー釣りも人の動きを見て選ぶ。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagitorinoumikakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.029941/140.920236/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukusimahaltutatikaigann",
    "name": "波立海岸",
    "prefecture": "福島県",
    "lat": 37.126347,
    "lng": 140.997677,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "波立海岸は沖側に消波ブロックが並ぶ砂浜。砂底の魚を狙えるが、投げる前に仕掛けが通る切れ目を確かめたい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/fukusimahaltutatikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.126347/140.997677/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukusimasinnmaikokaigann",
    "name": "新舞子海岸（福島県）",
    "prefecture": "福島県",
    "lat": 37.026934,
    "lng": 140.972228,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "新舞子の砂浜では消波ブロックの配置が釣り座選びに関わる。キス・イシモチ狙いとヒラメ狙いを同じ切れ目に集中させない。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/fukusimasinnmaikokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.026934/140.972228/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukusimanumanoutikaigann",
    "name": "沼ノ内海岸（滑津川河口）",
    "prefecture": "福島県",
    "lat": 37.023062,
    "lng": 140.972378,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "滑津川河口に近い沼ノ内の砂浜。消波帯の切れ目と河口周辺では条件が異なり、キスやヒラメを探る方向を分けたい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/fukusimanumanoutikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.023062/140.972378/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukusimausuisokaigann",
    "name": "薄磯海岸",
    "prefecture": "福島県",
    "lat": 37.002793,
    "lng": 140.979717,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "薄磯は開けた砂浜からキス・カレイやヒラメを狙う候補。広さだけを頼りにせず、波の寄せ方で釣り座を絞る。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/fukusimausuisokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.002793/140.979717/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukusimatoyomagoltusokaigann",
    "name": "豊間・合磯海岸",
    "prefecture": "福島県",
    "lat": 36.984403,
    "lng": 140.966992,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "豊間・合磯の砂浜は投げ釣りとサーフルアーの候補。サーフィン利用もあるため、釣る場所より先に安全な共有範囲を確認したい。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/fukusimatoyomagoltusokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.984403/140.966992/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukusimanakosokaigann",
    "name": "勿来海岸",
    "prefecture": "福島県",
    "lat": 36.868841,
    "lng": 140.788765,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "勿来海岸は砂浜からキス・イシモチやヒラメを探る場所。波打ち際の変化を広く見られる一方、海の利用者との距離が必要になる。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/fukusimanakosokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.868841/140.788765/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ibarakiakahamakaigann",
    "name": "赤浜海岸",
    "prefecture": "茨城県",
    "lat": 36.739331,
    "lng": 140.729692,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "赤浜は広いサーフだが、車で海際へ入れることを前提にしない釣行計画が必要。キスの投げ釣りやヒラメのルアー釣りが候補になる。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakiakahamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.739331/140.729692/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ibarakitakadomaehamakaigann",
    "name": "高戸前浜海岸",
    "prefecture": "茨城県",
    "lat": 36.716011,
    "lng": 140.727289,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "高戸前浜の砂浜側を案内する地点。関根川の流れ込みがあり、周囲の高戸突堤とは足場・危険度を分けて考える。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakitakadomaehamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.716011/140.727289/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ibarakitakahamakaigann",
    "name": "高浜海岸（花貫川河口）",
    "prefecture": "茨城県",
    "lat": 36.702146,
    "lng": 140.719457,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "花貫川河口の北に続く高浜の砂浜。沖の消波帯と砂底の間を見て、仕掛けを無理なく回収できる方向を選ぶ。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakitakahamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.702146/140.719457/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ibarakikujihamakoboutibana",
    "name": "久慈浜海岸",
    "prefecture": "茨城県",
    "lat": 36.507636,
    "lng": 140.63103,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "久慈浜の砂浜側を案内する地点。キス・イシモチ・カレイの底釣りが候補で、北側の古坊地鼻の消波帯とは別に扱う。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakikujihamakoboutibana.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.507636/140.63103/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ibarakiajigaurakaigann",
    "name": "阿字ヶ浦海岸",
    "prefecture": "茨城県",
    "lat": 36.385723,
    "lng": 140.616653,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "阿字ヶ浦は投げ釣りとサーフルアーを楽しむ候補だが、海水浴の利用期間は釣行先から外したい砂浜。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakiajigaurakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.385723/140.616653/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ibarakitakihama",
    "name": "滝浜エメラルドビーチ",
    "prefecture": "茨城県",
    "lat": 36.192685,
    "lng": 140.569725,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "滝浜は砂浜からキス・イシモチやヒラメを狙う候補。サーフィン利用と重なることがあり、入浜前の周囲確認が欠かせない。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakitakihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.192685/140.569725/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ibarakiniltukawahama",
    "name": "日川浜",
    "prefecture": "茨城県",
    "lat": 35.872151,
    "lng": 140.739133,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "日川浜は砂浜と防波堤があるが、この地点はサーフ側の釣行候補。海水浴とサーフィンの利用を優先して場所を選びたい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakiniltukawahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.872151/140.739133/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibanunobikikaigann",
    "name": "布引海岸",
    "prefecture": "千葉県",
    "lat": 35.307228,
    "lng": 139.809501,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "富津岬南側の布引海岸は浅い砂浜。キスの投げ釣りを中心に、マゴチをルアーで探る釣りも候補になる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibanunobikikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.307228/139.809501/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibasinnmaikokaigann",
    "name": "新舞子海岸（千葉県）",
    "prefecture": "千葉県",
    "lat": 35.249404,
    "lng": 139.86675,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "富津の新舞子海岸は遠浅のサーフ。キス・イシモチと、ヒラメ・マゴチを狙い分けられるが、海水浴期は利用条件の確認が先になる。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibasinnmaikokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.249404/139.86675/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibamotonakaigann",
    "name": "元名海岸",
    "prefecture": "千葉県",
    "lat": 35.147828,
    "lng": 139.83068,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "元名は港に隣接する小さな砂浜。砂浜でのキス・マゴチ狙いと、港の波止での釣りを一つの釣り座として扱わない。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibamotonakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.147828/139.83068/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibaiwaikaigann",
    "name": "岩井海岸",
    "prefecture": "千葉県",
    "lat": 35.094104,
    "lng": 139.840486,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "岩井の長い砂浜はキス・ヒラメ・マゴチの候補。ボート釣りの情報と岸から届く範囲の情報を分けて計画したい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaiwaikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.094104/139.840486/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibakennbutukaigann",
    "name": "見物海岸",
    "prefecture": "千葉県",
    "lat": 34.973874,
    "lng": 139.79727,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "見物は砂浜に岩場が混じる海岸。隣接する堤防とは別に、砂地のキスやマゴチを岸から探る場所として案内する。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibakennbutukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.973874/139.79727/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibaminamitikurakaigann",
    "name": "南千倉海岸",
    "prefecture": "千葉県",
    "lat": 34.96306,
    "lng": 139.960392,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "南千倉のサーフはキス・イシモチとヒラメ・マゴチの候補。サーフィンが盛んなため、釣り人だけで浜を使えるとは考えない。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaminamitikurakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.96306/139.960392/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibasetohamakaigann",
    "name": "瀬戸浜海岸",
    "prefecture": "千葉県",
    "lat": 34.9779,
    "lng": 139.967172,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "瀬戸浜は砂浜から底の魚を探る場所。海岸への進入路が狭いため、到着後に車を海際まで動かす前提を避けたい。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibasetohamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.9779/139.967172/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibamisimakaigann",
    "name": "三島海岸",
    "prefecture": "千葉県",
    "lat": 35.007784,
    "lng": 139.978073,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "三島海岸は南房総の広いサーフで、キス・イシモチやヒラメ・マゴチが候補。浜への出入口と戻る目印を先に確認する。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibamisimakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.007784/139.978073/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawatukuihama",
    "name": "津久井浜",
    "prefecture": "神奈川県",
    "lat": 35.195064,
    "lng": 139.666142,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "津久井浜は投げ釣りでキス、ルアーでヒラメ・マゴチを探る候補。ウインドサーフィンの出入りと風向きが場所選びに直結する。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawatukuihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.195064/139.666142/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawakanedakaigann",
    "name": "金田海岸",
    "prefecture": "神奈川県",
    "lat": 35.163687,
    "lng": 139.660263,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "金田海岸ではボート釣りと岸釣りで対象範囲が違う。砂浜からはキス・ヒラメ・マゴチを中心に計画したい。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawakanedakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.163687/139.660263/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawaoourakaigann",
    "name": "大浦海岸",
    "prefecture": "神奈川県",
    "lat": 35.148319,
    "lng": 139.67876,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "大浦は小さな砂浜でキス釣りが候補。海水浴期間と狭い進入路があるため、釣行時期と車のアクセスを先に調べたい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawaoourakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.148319/139.67876/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawailtusikikaigann",
    "name": "一色海岸",
    "prefecture": "神奈川県",
    "lat": 35.263352,
    "lng": 139.576793,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "一色は浅い砂底に根が混じる海岸。ボートの発着や海水浴・マリンスポーツと、岸釣りの使う範囲を分ける必要がある。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawailtusikikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.263352/139.576793/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawamoritokaigann",
    "name": "森戸海岸",
    "prefecture": "神奈川県",
    "lat": 35.275282,
    "lng": 139.571128,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "森戸の砂浜は遠浅で根が点在する。岸からのキス・ヒラメ狙いは、ボート釣りの場所や海面利用と切り分けて考えたい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawamoritokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.275282/139.571128/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawazusikaigann",
    "name": "逗子海岸",
    "prefecture": "神奈川県",
    "lat": 35.29187,
    "lng": 139.572394,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "逗子は遠浅の砂浜。キス・イシモチなどの釣行候補になるが、海水浴期やマリンスポーツ利用時は釣りを優先しない。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawazusikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.29187/139.572394/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawazaimokuzakaigann",
    "name": "材木座海岸",
    "prefecture": "神奈川県",
    "lat": 35.304566,
    "lng": 139.550765,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "材木座の浅い砂浜では、キスなどを狙う岸釣りとボート・海水浴の利用が重なる。季節と現地の区画案内を確認したい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawazaimokuzakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.304566/139.550765/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawayuigahama",
    "name": "由比ヶ浜",
    "prefecture": "神奈川県",
    "lat": 35.309242,
    "lng": 139.543769,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "由比ヶ浜は海水浴・マリンスポーツ利用の多い遠浅の砂浜。キスやヒラメの釣りは、利用期間と海面が空いていることの確認が出発点。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawayuigahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.309242/139.543769/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawasitirigahama",
    "name": "七里ヶ浜",
    "prefecture": "神奈川県",
    "lat": 35.304321,
    "lng": 139.513772,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "七里ヶ浜ではサーフィン利用が多く、魚より先に安全な投入方向を見つける必要がある。砂浜からキスやヒラメを探る候補。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawasitirigahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.304321/139.513772/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawatujidoukaigann",
    "name": "辻堂海岸",
    "prefecture": "神奈川県",
    "lat": 35.319152,
    "lng": 139.443605,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "辻堂海岸は投げ釣り・サーフルアーの候補だが、サーフィンと重なる場所。広い砂浜でも釣りの専用区域ではない。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawatujidoukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.319152/139.443605/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawayanagisimakaigann",
    "name": "柳島海岸",
    "prefecture": "神奈川県",
    "lat": 35.316578,
    "lng": 139.385283,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "柳島は砂浜と石積み護岸を持つ海岸。この地点では砂浜側からキス・ヒラメなどを探り、護岸の上り下りを前提にしない。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawayanagisimakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.316578/139.385283/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawahiratukakaigann",
    "name": "平塚海岸",
    "prefecture": "神奈川県",
    "lat": 35.315108,
    "lng": 139.362581,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "平塚のサーフはキス・イシモチやヒラメを狙う候補。海水浴区域と一般の浜を混同せず、出入口の掲示を確認する。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawahiratukakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.315108/139.362581/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawaumezawakaigann",
    "name": "梅沢海岸",
    "prefecture": "神奈川県",
    "lat": 35.291695,
    "lng": 139.246795,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "梅沢は突堤とサーフで釣り方が分かれる海岸。ここでは砂浜側のキス・イシモチやヒラメ狙いを中心に案内する。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawaumezawakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.291695/139.246795/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawasakawakaigann",
    "name": "酒匂海岸",
    "prefecture": "神奈川県",
    "lat": 35.262108,
    "lng": 139.186456,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "酒匂川の河口に近い広い砂浜。キス・イシモチの投げ釣りとヒラメ・マゴチのルアー釣りで、探る距離を分けたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawasakawakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.262108/139.186456/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawamiyukinohama",
    "name": "御幸の浜",
    "prefecture": "神奈川県",
    "lat": 35.245128,
    "lng": 139.159291,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "ヒラメ",
      "ブリ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "御幸の浜は突堤とサーフを選べる海岸。岸からの底釣りでは、隣の突堤や早川方向の流れに仕掛けを寄せないことが大切。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawamiyukinohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.245128/139.159291/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hamanakobenntennjima",
    "name": "弁天島海浜公園",
    "prefecture": "静岡県",
    "lat": 34.689016,
    "lng": 137.602708,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "キビレ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "弁天島海浜公園の護岸は浜名湖の流れに接する場所。キス・カレイやクロダイの候補だが、静かな見た目だけで流速を判断しない。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba4/hamanakobenntennjima.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.689016/137.602708/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hamanakotudukikaigann",
    "name": "都築海岸",
    "prefecture": "静岡県",
    "lat": 34.784096,
    "lng": 137.582324,
    "primaryType": "pier",
    "fish": [
      "キビレ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "都築海岸は浜名湖の岸辺で、ハゼやキビレ・スズキが候補。沖の海のサーフとは異なり、近距離の浅場を丁寧に探りたい。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/hamanakotudukikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.784096/137.582324/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokaookurado",
    "name": "大倉戸海岸",
    "prefecture": "静岡県",
    "lat": 34.678605,
    "lng": 137.534688,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "大倉戸は遠州灘のサーフで、キスの投げ釣りやヒラメ・マゴチ狙いが候補。浜の形と波の寄せ方を見て釣り座を選ぶ。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokaookurado.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.678605/137.534688/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokaaraikaigann",
    "name": "新居海岸",
    "prefecture": "静岡県",
    "lat": 34.679241,
    "lng": 137.586658,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "新居海岸は今切口に近い外海側のサーフ。浜名湖側の新居弁天海釣公園とは別の地点で、波とうねりを直接受ける。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokaaraikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.679241/137.586658/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokamaisakakaigann",
    "name": "舞阪海岸",
    "prefecture": "静岡県",
    "lat": 34.676135,
    "lng": 137.619188,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "舞阪海岸は外海の砂浜からキス・イシモチやヒラメを狙う候補。入浜前に波の高さと戻る経路を確かめたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokamaisakakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.676135/137.619188/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-eeennsyuunada",
    "name": "中田島海岸",
    "prefecture": "静岡県",
    "lat": 34.658787,
    "lng": 137.743342,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "中田島は広いサーフで底の魚を探れるが、サーフィンの利用もある。海岸へ出てすぐ投げず、海面全体を確認したい。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/eeennsyuunada.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.658787/137.743342/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokafukudekaigann",
    "name": "福田海岸",
    "prefecture": "静岡県",
    "lat": 34.662405,
    "lng": 137.879877,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "太田川河口の西に続く福田海岸は、キス狙いの砂浜。河口の強い流れへ寄るのではなく、浜の砂底を探る釣りが候補。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokafukudekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.662405/137.879877/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokaasabakaigann",
    "name": "浅羽海岸",
    "prefecture": "静岡県",
    "lat": 34.668158,
    "lng": 137.923737,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "浅羽は福田漁港の東側へ続くサーフ。砂浜の釣りとT字堤の釣りを分け、浜からキス・ヒラメを探る候補として案内する。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokaasabakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.668158/137.923737/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokadourikaigann",
    "name": "同笠海岸",
    "prefecture": "静岡県",
    "lat": 34.667858,
    "lng": 137.934723,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "同笠は遠州灘の砂浜で、キス・イシモチやヒラメの候補。サーフィンと共有するため、空いている海面を見て釣りを組み立てたい。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokadourikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.667858/137.934723/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokahamaokakaigann",
    "name": "浜岡海岸",
    "prefecture": "静岡県",
    "lat": 34.627929,
    "lng": 138.12222,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "浜岡は遠浅のサーフ。ヒラメ・マゴチは底へ沈めればよいわけではなく、浅い場所を泳がせる重さ選びが重要になる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokahamaokakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.627929/138.12222/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokasagarakaigann",
    "name": "相良海岸",
    "prefecture": "静岡県",
    "lat": 34.682523,
    "lng": 138.204124,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "相良はキスを狙う砂浜で、夏は海水浴利用が中心になる。季節を外してもサーフィンや散歩の人への配慮が必要。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokasagarakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.682523/138.204124/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-aichihinagagawakakou",
    "name": "日長川河口",
    "prefecture": "愛知県",
    "lat": 34.960668,
    "lng": 136.829352,
    "primaryType": "estuary",
    "fish": [
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "日長川河口はハゼ釣りの候補。川筋と隣の砂浜では水深・底質が違うため、潮位と流れを見て短い範囲を探りたい。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba10/aichihinagagawakakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.960668/136.829352/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-aitioonokaigann",
    "name": "大野海岸",
    "prefecture": "愛知県",
    "lat": 34.940302,
    "lng": 136.82579,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "カレイ",
      "メバル"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "大野は護岸から砂底と敷石の周りを探る釣り場。キス・カレイの底釣りと根魚狙いでは、仕掛けを引く方向を分ける。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba10/aitioonokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.940302/136.82579/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-aichikennonourakaigann",
    "name": "小野浦海岸",
    "prefecture": "愛知県",
    "lat": 34.754448,
    "lng": 136.847785,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "小野浦は遠浅の砂浜で、キス・カレイの投げ釣りが候補。海水浴期には釣りを控え、浅さと潮位に合わせて計画する。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/aichikennonourakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.754448/136.847785/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hanndakamesakikaihinn",
    "name": "亀崎海浜緑地",
    "prefecture": "愛知県",
    "lat": 34.917133,
    "lng": 136.971788,
    "primaryType": "beach",
    "fish": [
      "クロダイ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "亀崎海浜緑地の人工砂浜はハゼを短い仕掛けで探る候補。港側のサビキ釣りとは場所を分け、砂底の浅い範囲を中心に案内する。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/hanndakamesakikaihinn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.917133/136.971788/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-aichihigasiuramidorihamaryokuti",
    "name": "東浦みどり浜緑地",
    "prefecture": "愛知県",
    "lat": 34.940882,
    "lng": 136.97726,
    "primaryType": "pier",
    "fish": [
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "東浦みどり浜緑地は護岸からハゼ・スズキを探る候補。砂浜へ降りる釣りではなく、岸壁から届く範囲で組み立てる。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/aichihigasiuramidorihamaryokuti.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.940882/136.97726/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hekinannsuma",
    "name": "須磨海岸緑地",
    "prefecture": "愛知県",
    "lat": 34.891229,
    "lng": 136.976016,
    "primaryType": "pier",
    "fish": [
      "サヨリ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "愛知の須磨海岸緑地は「タコ公園」とも呼ばれる護岸。兵庫の須磨海岸とは別地点で、ハゼ・サヨリやスズキが候補になる。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/hekinannsuma.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.891229/136.976016/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toyohasisihigasiakasawakaigann",
    "name": "東赤沢海岸",
    "prefecture": "愛知県",
    "lat": 34.654127,
    "lng": 137.371759,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "東赤沢は表浜の遠浅サーフ。キスの底釣りとヒラメ・マゴチのルアー釣りで、反応のある砂の筋を探したい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/toyohasisihigasiakasawakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.654127/137.371759/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toyohasisiikobekaigann",
    "name": "伊古部海岸",
    "prefecture": "愛知県",
    "lat": 34.657975,
    "lng": 137.391307,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "伊古部の遠浅サーフは、キス・ヒラメ・マゴチを探す候補。海岸の広さより、当日の波と安全に立てる浜幅を重視する。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/toyohasisiikobekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.657975/137.391307/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toyohasisitakatukakaigann",
    "name": "高塚海岸",
    "prefecture": "愛知県",
    "lat": 34.660128,
    "lng": 137.401521,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "高塚は遠浅の砂浜が続く海岸。キスとヒラメでは餌・ルアーを通す高さが違い、同じ投入位置でも探り方を変えたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/toyohasisitakatukakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.660128/137.401521/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toyohasisinananekaigann",
    "name": "七根海岸",
    "prefecture": "愛知県",
    "lat": 34.664646,
    "lng": 137.423,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "七根のサーフは砂底のキスとヒラメ・マゴチが候補。魚の回遊を待つだけでなく、足元側の底の変化を探る釣りが向く。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/toyohasisinananekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.664646/137.423/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toyohasisikojimacyoukaigann",
    "name": "小島町海岸",
    "prefecture": "愛知県",
    "lat": 34.668511,
    "lng": 137.445552,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "小島町海岸は表浜の砂浜で、進入路を事前に調べたい場所。波のある日はサーフィン利用と釣りの範囲を分ける。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/toyohasisikojimacyoukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.668511/137.445552/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-taharanisinohama",
    "name": "西の浜",
    "prefecture": "愛知県",
    "lat": 34.614844,
    "lng": 137.038093,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "渥美半島西側の西の浜は長い砂浜で、キス・カレイの投げ釣りが候補。太平洋側と風向きが違っても安全確認は省かない。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/taharanisinohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.614844/137.038093/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-zzyosizaki",
    "name": "吉崎海岸",
    "prefecture": "三重県",
    "lat": 34.924047,
    "lng": 136.647112,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "吉崎海岸はキスの砂浜釣りとマゴチのルアー釣りが候補。引いて探る餌と泳がせるルアーを使い分けたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/zzyosizaki.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.924047/136.647112/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-suzukasitiyozakikaigann",
    "name": "千代崎海岸",
    "prefecture": "三重県",
    "lat": 34.852305,
    "lng": 136.614604,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "千代崎漁港の南に続くサーフ。港内の釣りとは分け、砂浜からキス・ヒラメ・マゴチを探る候補として扱う。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/suzukasitiyozakikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.852305/136.614604/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tusikawagekaigann",
    "name": "河芸海岸",
    "prefecture": "三重県",
    "lat": 34.797753,
    "lng": 136.563621,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "河芸の芦原・豊津浦周辺に続く砂浜の代表地点。キス狙いを中心に、ヒラメ・マゴチをルアーで探れる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/tusikawagekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.797753/136.563621/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-simasinannbarikaihinnkouenn",
    "name": "南張海浜公園",
    "prefecture": "三重県",
    "lat": 34.304326,
    "lng": 136.720433,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "南張海浜公園前の砂浜を案内する地点。隣の波止と釣り座を混同せず、海水浴やサーフィンの利用を優先して計画したい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/simasinannbarikaihinnkouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.304326/136.720433/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-niigatamuramatuhama",
    "name": "村松浜",
    "prefecture": "新潟県",
    "lat": 38.057756,
    "lng": 139.324193,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "村松浜はキスを探る投げ釣りの候補。砂浜では同じ距離へ投げ続けるより、反応した底の筋を見つけることが大切。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatamuramatuhama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.057756/139.324193/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-niigatasimamihama",
    "name": "島見浜",
    "prefecture": "新潟県",
    "lat": 37.978507,
    "lng": 139.190598,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "ブリ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "島見浜は砂浜と突堤がある海岸。ここでは砂浜側を案内し、港湾の防波堤や立入禁止区画とは区別する。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatasimamihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.978507/139.190598/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-niigatakobarihama",
    "name": "小針浜",
    "prefecture": "新潟県",
    "lat": 37.896395,
    "lng": 138.978231,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "小針浜はキスの投げ釣りを組み立てる砂浜。夏の海水浴と駐車場の利用時間を確認し、釣る時間帯を決めたい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatakobarihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.896395/138.978231/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-niigatayotugouyahama",
    "name": "四ツ郷屋浜",
    "prefecture": "新潟県",
    "lat": 37.845427,
    "lng": 138.880513,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "四ツ郷屋浜は砂浜からキスを探る候補。広い浜でも底の変化は均一ではなく、投入距離を比べて釣り座を絞る。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatayotugouyahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.845427/138.880513/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-niigataurahama",
    "name": "浦浜",
    "prefecture": "新潟県",
    "lat": 37.780145,
    "lng": 138.81541,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "浦浜は角田周辺の砂浜で、キスの投げ釣りが候補。南北の出入口と戻る場所を確認してから浜を探りたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigataurahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.780145/138.81541/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-niigatatanourakaigann",
    "name": "田ノ浦海岸",
    "prefecture": "新潟県",
    "lat": 37.722715,
    "lng": 138.788931,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "田ノ浦は砂浜からキスを探る場所。北側の白岩周辺の釣りとは分け、夏の海水浴期間を避けて計画する。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatatanourakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.722715/138.788931/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-niigatanozumikaigann",
    "name": "野積海岸",
    "prefecture": "新潟県",
    "lat": 37.69878,
    "lng": 138.784747,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "野積は遠浅の砂浜でキスを探る候補。広く砂底が続いても、距離と潮位を変えて魚のいる範囲を絞りたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatanozumikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.69878/138.784747/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-niigatamatunamikaigann",
    "name": "松波海岸",
    "prefecture": "新潟県",
    "lat": 37.392459,
    "lng": 138.566673,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "松波海岸は柏崎の砂浜で、キスの投げ釣りやヒラメ・スズキのルアー釣りが候補。海岸への入口を先に確認しておく。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatamatunamikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.392459/138.566673/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toyamayaeduhama",
    "name": "八重津浜",
    "prefecture": "富山県",
    "lat": 36.759293,
    "lng": 137.203145,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "八重津浜は砂浜と突堤で釣り方が分かれる海岸。ここでは砂浜側のキス狙いを案内し、沖の消波帯へ渡る釣りは含めない。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/toyamayaeduhama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.759293/137.203145/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toyamanamerikawakaihinnkouenn",
    "name": "滑川海浜公園",
    "prefecture": "富山県",
    "lat": 36.782187,
    "lng": 137.349851,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "滑川海浜公園前は砂浜からキス、時期によってメバル・クロダイを探る候補。ホタルイカの接岸は年・日で変わる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/toyamanamerikawakaihinnkouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.782187/137.349851/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toyamaisidahama",
    "name": "石田浜",
    "prefecture": "富山県",
    "lat": 36.869133,
    "lng": 137.417529,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ブリ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "石田浜の砂浜側を案内する地点。近くの釣り桟橋とは別に、キス・カレイの投げ釣りを計画できる。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/toyamaisidahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.869133/137.417529/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toyamamiyazakikaigann",
    "name": "宮崎・境海岸",
    "prefecture": "富山県",
    "lat": 36.975027,
    "lng": 137.590671,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "サワラ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "宮崎・境海岸は富山県東部の海岸で、宮崎県の海岸とは異なる。砂浜でのキス・カレイやヒラメ狙いが候補になる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/toyamamiyazakikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.975027/137.590671/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuihamajikaisuiyokujyou",
    "name": "浜地海水浴場",
    "prefecture": "福井県",
    "lat": 36.249499,
    "lng": 136.161439,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "浜地は海水浴期以外にキスを狙う砂浜。突堤のエギング情報とは分け、浜からの投げ釣りを中心に計画する。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/fukuihamajikaisuiyokujyou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.249499/136.161439/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuinyuusirahama",
    "name": "丹生白浜海水浴場",
    "prefecture": "福井県",
    "lat": 35.701481,
    "lng": 135.973771,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "丹生白浜は夏に海水浴利用が中心となる砂浜。キス釣りは海水浴期を外し、近くの有料釣り施設とは別の地点として扱う。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/fukuinyuusirahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.701481/135.973771/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-eeninngyo",
    "name": "人魚の浜",
    "prefecture": "福井県",
    "lat": 35.492892,
    "lng": 135.736384,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "小浜新港の南側にある人魚の浜。砂底のキスやコウイカ、クロダイが候補だが、港内と同じ利用条件とは限らない。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/eeninngyo.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.492892/135.736384/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kyoutohakoisikaigann",
    "name": "箱石海岸",
    "prefecture": "京都府",
    "lat": 35.654018,
    "lng": 134.945154,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "箱石は砂浜にシモリが混じる海岸。キスを探るときは砂だけの方向と岩が入る方向を分けたい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/kyoutohakoisikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.654018/134.945154/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougomatuekaigann",
    "name": "林崎松江海岸",
    "prefecture": "兵庫県",
    "lat": 34.649114,
    "lng": 134.96335,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "カレイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "林崎松江海岸は砂浜と石積み突堤が連なる場所。近くの林崎漁港とは別に、キス・カレイの砂底釣りを計画したい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/hyougomatuekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.649114/134.96335/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougooosiokaigann",
    "name": "大塩海岸",
    "prefecture": "兵庫県",
    "lat": 34.766964,
    "lng": 134.751477,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "大塩海岸の砂浜側はキスの投げ釣りが候補。十三段波止の釣りとは分け、浜から届く底を探る地点として案内する。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougooosiokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.766964/134.751477/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougosakosikaigann",
    "name": "坂越海岸",
    "prefecture": "兵庫県",
    "lat": 34.766629,
    "lng": 134.435835,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "マイワシ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "坂越海岸は砂浜と階段状・平坦な護岸が混じる。キス・カレイの底釣りとサヨリの表層狙いを使い分けたい。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougosakosikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.766629/134.435835/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougomaruyamakaigann",
    "name": "丸山海岸",
    "prefecture": "兵庫県",
    "lat": 34.746303,
    "lng": 134.430406,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "丸山海岸は砂利浜からキス・カレイを探る候補。キャンプ利用もあるため、釣り具の置き場と人の通り道を分ける。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougomaruyamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.746303/134.430406/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougoootukakaigann",
    "name": "大塚海岸",
    "prefecture": "兵庫県",
    "lat": 34.731262,
    "lng": 134.415922,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "大塚海岸は手前に浅い岩があるため、砂浜に見えても回収方向の確認が必要。キス・カレイやマゴチを探る候補。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba9/hyougoootukakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.731262/134.415922/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougooohamakaisuiyoku",
    "name": "大浜海水浴場（兵庫県）",
    "prefecture": "兵庫県",
    "lat": 34.341877,
    "lng": 134.902797,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "洲本の大浜海水浴場の砂浜を案内する地点。隣の波止とは釣り方を分け、海水浴期間外のキス狙いを中心に扱う。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/hyougooohamakaisuiyoku.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.341877/134.902797/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougoamannkaigann",
    "name": "阿万海岸",
    "prefecture": "兵庫県",
    "lat": 34.209939,
    "lng": 134.726543,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "阿万は砂浜と突堤を持つ海岸。塩屋川河口の波止へ集中せず、浜からキス・カレイを探れる範囲を見たい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougoamannkaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.209939/134.726543/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougofukiagehama",
    "name": "吹上浜",
    "prefecture": "兵庫県",
    "lat": 34.216948,
    "lng": 134.713562,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "淡路島の吹上浜は鳴門海峡に近い砂浜。潮通しがあっても強い流れや波を軽視せず、底釣りとルアーを選びたい。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougofukiagehama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.216948/134.713562/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougotaganohama",
    "name": "多賀の浜",
    "prefecture": "兵庫県",
    "lat": 34.468778,
    "lng": 134.837201,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "多賀の浜は海水浴場から伸びる波止が釣りの候補。砂浜の利用者と釣りの投入方向を分け、キス・カレイを探りたい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougotaganohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.468778/134.837201/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-oosakamisakikouennura",
    "name": "長松海岸",
    "prefecture": "大阪府",
    "lat": 34.331352,
    "lng": 135.154603,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging"
    ],
    "note": "長松海岸は「みさき公園裏」とも呼ばれる突堤の並ぶ海岸。キス・カレイの底釣りやメバル・アオリイカが候補になる。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://osaka.turihiroba.com/turiba/oosakamisakikouennura.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.331352/135.154603/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-wakayamakirimekaigann",
    "name": "切目海岸",
    "prefecture": "和歌山県",
    "lat": 33.796196,
    "lng": 135.237193,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "切目川河口周辺のサーフ。キスの砂底釣りとマゴチ・スズキのルアー釣りは、流れの強い河道へ寄りすぎない範囲で行う。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamakirimekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.796196/135.237193/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-wakayamasennrihama",
    "name": "千里浜",
    "prefecture": "和歌山県",
    "lat": 33.771799,
    "lng": 135.295172,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "和歌山の千里浜はシモリが混じる砂浜。石川の千里浜とは別地点で、キスを探すときは砂の筋を見つけたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamasennrihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.771799/135.295172/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-wakayamahikioohama",
    "name": "日置大浜・志原海岸",
    "prefecture": "和歌山県",
    "lat": 33.570631,
    "lng": 135.429969,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "日置大浜・志原海岸は砂浜からキスを狙う候補。日中に足場を把握しておけば、波打ち際へ近づきすぎず探りやすい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamahikioohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.570631/135.429969/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-wakayamaoujigahama",
    "name": "王子ヶ浜",
    "prefecture": "和歌山県",
    "lat": 33.713167,
    "lng": 136.001194,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "熊野川河口南側の王子ヶ浜は砂利浜のサーフ。キスやヒラメを探る際は、砂浜より足元が動きやすいことも考慮したい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamaoujigahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.713167/136.001194/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-okayamasamikaigann",
    "name": "沙美海岸",
    "prefecture": "岡山県",
    "lat": 34.502596,
    "lng": 133.632782,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "沙美海岸は砂浜からキスを探る候補。夏は海水浴が中心となるため、釣行時期と浜の利用区画を先に確認する。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/okayamasamikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.502596/133.632782/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-okayamaaosabanakaigann",
    "name": "青佐鼻海岸",
    "prefecture": "岡山県",
    "lat": 34.468584,
    "lng": 133.577335,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "青佐鼻は小さな砂浜で、キスの底釣りが候補。干潟の生き物採りと竿釣りを混同せず、それぞれのルールを確認する。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/okayamaaosabanakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.468584/133.577335/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimaoourazakikaigann",
    "name": "倉橋島・大浦崎海岸",
    "prefecture": "広島県",
    "lat": 34.172755,
    "lng": 132.557602,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "倉橋島の大浦崎は砂浜と波止を持つ海岸。砂浜側でキス・カレイを探る場合も、海水浴期間を避けて計画したい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimaoourazakikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.172755/132.557602/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimakajigahama",
    "name": "下蒲刈島・梶ヶ浜",
    "prefecture": "広島県",
    "lat": 34.172488,
    "lng": 132.671413,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "タチウオ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "下蒲刈島の梶ヶ浜は護岸と敷石の位置で釣りやすさが変わる。キスの底釣りとメバル・アオリイカ狙いを分けたい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimakajigahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.172488/132.671413/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimakoigahama",
    "name": "上蒲刈島・恋ヶ浜",
    "prefecture": "広島県",
    "lat": 34.172613,
    "lng": 132.739778,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "上蒲刈島の恋ヶ浜は砂浜でキス・カレイを探る候補。東側の護岸とは釣り座を分け、砂底へ投入できる範囲を選ぶ。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimakoigahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.172613/132.739778/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutoriiwatokaigann",
    "name": "岩戸海岸",
    "prefecture": "鳥取県",
    "lat": 35.561714,
    "lng": 134.27398,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "鳥取砂丘東側の岩戸海岸はキスの砂浜釣りが候補。ヒラメ・マゴチのルアー釣りでも、砂底の変化が手掛かりになる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutoriiwatokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.561714/134.27398/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutorihakutokaigann",
    "name": "白兎海岸",
    "prefecture": "鳥取県",
    "lat": 35.526097,
    "lng": 134.116073,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "白兎海岸は観光利用の多い砂浜。キス釣りは海水浴期を外し、砂浜へ出る歩道橋・地下道など正規の経路を使いたい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutorihakutokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.526097/134.116073/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutorikozomikaigann",
    "name": "小沢見海岸",
    "prefecture": "鳥取県",
    "lat": 35.525189,
    "lng": 134.108241,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "小沢見は小さな砂浜でキス釣りが候補。サーフィンとの共用が重要で、浜の広さだけで投げる範囲を決めない。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutorikozomikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.525189/134.108241/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutorihamamurakaigann",
    "name": "浜村海岸",
    "prefecture": "鳥取県",
    "lat": 35.519391,
    "lng": 134.06069,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "浜村は広い砂浜でキス・ヒラメ・マゴチが候補。駐車の可否と海岸へ入る経路を事前に確認しておきたい。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutorihamamurakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.519391/134.06069/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutoriaoyakaigann",
    "name": "青谷海岸",
    "prefecture": "鳥取県",
    "lat": 35.526743,
    "lng": 134.001811,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "長尾鼻の西側にある青谷海岸。砂浜からキスを狙い、ヒラメ・マゴチをルアーで探る釣りも候補になる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutoriaoyakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.526743/134.001811/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutoriidegahama",
    "name": "井出ヶ浜",
    "prefecture": "鳥取県",
    "lat": 35.522342,
    "lng": 133.986897,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "井出ヶ浜はキス釣りの候補となる砂浜。サーフィン利用があるため、波の切れ目が良さそうでも人がいれば投げない。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutoriidegahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.522342/133.986897/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutoriyumigahama",
    "name": "弓ヶ浜",
    "prefecture": "鳥取県",
    "lat": 35.4768,
    "lng": 133.295166,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "美保湾沿いの弓ヶ浜は広い砂浜で、キス・カレイやヒラメ・マゴチが候補。長い海岸を一地点の釣果で判断しない。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutoriyumigahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.4768/133.295166/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-simaneinasanohama",
    "name": "稲佐の浜",
    "prefecture": "島根県",
    "lat": 35.400262,
    "lng": 132.672358,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "稲佐の浜は観光利用も多い砂浜。キスを狙う際は、参拝・散策する人の動線と投げる場所を分けたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simaneinasanohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.400262/132.672358/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-simanekotogahama",
    "name": "琴ヶ浜（島根県）",
    "prefecture": "島根県",
    "lat": 35.129122,
    "lng": 132.387164,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "島根の琴ヶ浜は砂浜からキスを探る候補。同名の高知の海岸とは別地点で、海水浴期間の利用を優先する。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simanekotogahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.129122/132.387164/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-simaneasarikaigann",
    "name": "浅利海岸",
    "prefecture": "島根県",
    "lat": 35.037973,
    "lng": 132.260993,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "浅利海岸はキス・カレイの投げ釣りとヒラメ・マゴチのルアー釣りが候補。砂底の変化を手前から確認したい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simaneasarikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.037973/132.260993/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-simanetutidakitahamakaigann",
    "name": "土田北浜海岸",
    "prefecture": "島根県",
    "lat": 34.761746,
    "lng": 131.892414,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "土田北浜は小さな入り江の砂浜。近くの土田漁港とは別にキスを探る候補で、狭いアクセス路を先に確認したい。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simanetutidakitahamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.761746/131.892414/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-simanesannrigahama",
    "name": "三里ヶ浜",
    "prefecture": "島根県",
    "lat": 34.686669,
    "lng": 131.790941,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "三里ヶ浜は砂浜でキス・ヒラメ・マゴチを探る候補。夏の海水浴利用と、それ以外の時期の釣りを分けて計画する。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simanesannrigahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.686669/131.790941/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchiminamiokikaigann",
    "name": "南沖海岸",
    "prefecture": "山口県",
    "lat": 34.037689,
    "lng": 132.219172,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "南沖海岸は手すりのある護岸から釣る候補。キス・カレイの底釣りとアジなどの回遊魚狙いで、探る方向を分けたい。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/yamaguchiminamiokikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.037689/132.219172/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchimaruyamakaihinnpa-ku",
    "name": "丸山海浜パーク",
    "prefecture": "山口県",
    "lat": 33.904652,
    "lng": 132.068582,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "丸山海浜パーク両側の波止が釣りの候補。公園内全体を釣り場とせず、西側の手すりのある波止周辺から条件を確認する。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchimaruyamakaihinnpa-ku.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.904652/132.068582/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchimurodumikaigann",
    "name": "室積海岸",
    "prefecture": "山口県",
    "lat": 33.945799,
    "lng": 131.962173,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "ブリ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "室積海岸は広い砂浜でキス・カレイやヒラメ・マゴチを狙う候補。回遊魚の情報があっても、その日の接岸を保証するものではない。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchimurodumikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.945799/131.962173/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchinijigahama",
    "name": "虹ヶ浜",
    "prefecture": "山口県",
    "lat": 33.970965,
    "lng": 131.915159,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "虹ヶ浜は砂浜のキス・カレイとヒラメ・マゴチが候補。海水浴などの利用状況を確認し、空いている浜で計画したい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchinijigahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.970965/131.915159/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchioohamakaisuiyokujyou",
    "name": "大浜海水浴場（山口県）",
    "prefecture": "山口県",
    "lat": 34.413176,
    "lng": 131.009345,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "長門の大浜海水浴場は砂浜からキスやヒラメを探る候補。海水浴期間は釣りをせず、期間外もサーフィンとの共用に配慮する。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchioohamakaisuiyokujyou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.413176/131.009345/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchikikugahama",
    "name": "菊ヶ浜",
    "prefecture": "山口県",
    "lat": 34.416965,
    "lng": 131.390069,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "萩の菊ヶ浜は砂浜でキス・ヒラメ・マゴチを探る候補。夏の海水浴利用中は釣り場として利用しない。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchikikugahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.416965/131.390069/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchimihagikaihinnkouenn",
    "name": "美萩海浜公園",
    "prefecture": "山口県",
    "lat": 34.43431,
    "lng": 131.414466,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "eging"
    ],
    "note": "美萩海浜公園では西側の護岸・石積み波止が釣りの候補。公園の名前ではなく、実際の護岸の足場を見て判断したい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchimihagikaihinnkouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.43431/131.414466/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawasiogoekaigann",
    "name": "潮越海岸",
    "prefecture": "香川県",
    "lat": 34.25821,
    "lng": 134.381182,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "潮越海岸はキス・カレイの底釣りが候補。山側の進入路もあるため、出入口と車の経路を事前に確かめたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawasiogoekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.25821/134.381182/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawayokoutikaigann",
    "name": "横内海岸",
    "prefecture": "香川県",
    "lat": 34.259238,
    "lng": 134.332795,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "横内海岸は砂浜からキスを探る候補。海岸前へ車を置けると決めつけず、通行を妨げない正規の駐車場所を確認する。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawayokoutikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.259238/134.332795/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawayamadakaigann",
    "name": "山田海岸",
    "prefecture": "香川県",
    "lat": 34.277698,
    "lng": 134.304042,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "山田海岸は小さな砂浜の両端に波止がある。海水浴の海面と釣りの範囲を分け、キスやアオリイカを狙う候補になる。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawayamadakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.277698/134.304042/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawaooyabukaigann",
    "name": "大屋冨海岸",
    "prefecture": "香川県",
    "lat": 34.370255,
    "lng": 133.889995,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "カレイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "eging"
    ],
    "note": "大屋冨海岸は石積みの波止が並ぶ。キス・カレイの底釣りとエギングの候補だが、濡れた石の足場を避けることが先になる。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawaooyabukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.370255/133.889995/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawaariakehama",
    "name": "有明浜",
    "prefecture": "香川県",
    "lat": 34.141415,
    "lng": 133.642094,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "有明浜は長い砂浜でキスを探る候補。大会が行われる浜でも、いつでも釣り専用で使えるわけではない。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawaariakehama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.141415/133.642094/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tokusimaootekaigann",
    "name": "大手海岸（里浦海岸）",
    "prefecture": "徳島県",
    "lat": 34.1705,
    "lng": 134.63685,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "里浦海岸とも呼ばれる大手海岸は、キス・カレイやヒラメ・マゴチが候補。浜へ向かう細い道を事前に確認したい。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimaootekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.1705/134.63685/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tokusimatukimigaoka",
    "name": "月見ヶ丘海浜公園",
    "prefecture": "徳島県",
    "lat": 34.124115,
    "lng": 134.612024,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "タチウオ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "月見ヶ丘海浜公園周辺は護岸と砂浜で釣り方が異なる。ここでは護岸側の代表位置から、キス・カレイや根魚狙いを案内する。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimatukimigaoka.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.124115/134.612024/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tokusimakomatukaigann",
    "name": "小松海岸",
    "prefecture": "徳島県",
    "lat": 34.090323,
    "lng": 134.604299,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "小松海岸は広い砂浜でキス・カレイやヒラメが候補。突堤周辺のサーフィン利用と釣りを重ねないことが重要。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimakomatukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.090323/134.604299/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tokusimaoomikokaigann",
    "name": "大神子海岸",
    "prefecture": "徳島県",
    "lat": 34.030114,
    "lng": 134.588184,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "大神子海岸は公園に接する砂浜。キス・カレイなどの釣りとキャンプ・散策を分け、浜の共用を意識したい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimaoomikokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.030114/134.588184/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tokusimaawasimakaigann",
    "name": "淡島海岸",
    "prefecture": "徳島県",
    "lat": 33.91685,
    "lng": 134.699335,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "淡島海岸の砂浜側はキス釣りの候補。南側の亀崎漁港とは別に扱い、港の作業場所を浜への駐車場とみなさない。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimaawasimakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.91685/134.699335/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tokusimakitanowakikaigann",
    "name": "北の脇海岸",
    "prefecture": "徳島県",
    "lat": 33.900413,
    "lng": 134.687297,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "北の脇海岸は長い遠浅の砂浜。中林漁港の釣りとは分け、キス狙いの砂底を探る場所として案内する。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimakitanowakikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.900413/134.687297/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tokusimatainohama",
    "name": "田井ノ浜",
    "prefecture": "徳島県",
    "lat": 33.772263,
    "lng": 134.584451,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "田井ノ浜は入り江の小さな砂浜で、キス釣りが候補。夏の海水浴利用と釣りの時期を分けて計画したい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimatainohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.772263/134.584451/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tokusimaoosatokaigann",
    "name": "大里海岸",
    "prefecture": "徳島県",
    "lat": 33.607507,
    "lng": 134.369123,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ブリ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "大里海岸は潮通しのある砂利浜。青物などのルアー釣りとキスの底釣りが候補だが、動きやすい足元と波に注意したい。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimaoosatokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.607507/134.369123/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimesakuraikaihinnfureaihiroba",
    "name": "桜井海浜ふれあい広場前",
    "prefecture": "愛媛県",
    "lat": 34.005854,
    "lng": 133.052888,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "桜井海浜ふれあい広場前は砂浜の底釣りが候補。桜井周辺の長い海岸のうち、広場前へ歩いて入る地点として案内する。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/ehimesakuraikaihinnfureaihiroba.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.005854/133.052888/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimesisimagaharakaigann",
    "name": "志島ヶ原海岸",
    "prefecture": "愛媛県",
    "lat": 34.016971,
    "lng": 133.04718,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "志島ヶ原は桜井漁港南側の砂浜。港の岸壁釣りとは別に、キス・カレイやマゴチを砂底で探る候補になる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/ehimesisimagaharakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.016971/133.04718/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimekarakohama",
    "name": "唐子浜",
    "prefecture": "愛媛県",
    "lat": 34.026166,
    "lng": 133.042073,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "唐子浜は桜井漁港北側に続く砂浜。キスを中心に底釣りを組み立て、港の釣り座とは使い分けたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/ehimekarakohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.026166/133.042073/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimeodagahama",
    "name": "織田ヶ浜",
    "prefecture": "愛媛県",
    "lat": 34.04409,
    "lng": 133.030829,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "織田ヶ浜は富田新港の南側の砂浜。港内の回遊魚釣りとは分け、キス・カレイやヒラメの候補として扱う。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/ehimeodagahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.04409/133.030829/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimekamoikekaigann",
    "name": "鴨池海岸",
    "prefecture": "愛媛県",
    "lat": 34.083072,
    "lng": 132.922726,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "鴨池海岸は砂浜でのキス・カレイ狙いが候補。水門前の石積み波止とは足場を分けて考えたい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/ehimekamoikekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.083072/132.922726/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimehosinourakaihinnkouenn",
    "name": "星の浦海浜公園",
    "prefecture": "愛媛県",
    "lat": 34.063006,
    "lng": 132.910044,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "星の浦海浜公園前は砂浜と石積み波止がある。砂浜側でキスを探す釣りを中心に、足場の違いを確認したい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/ehimehosinourakaihinnkouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.063006/132.910044/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimesi-ro-doyawatahama",
    "name": "シーロード八幡浜",
    "prefecture": "愛媛県",
    "lat": 33.457511,
    "lng": 132.390254,
    "primaryType": "sea-park",
    "fish": [
      "マアジ",
      "クロダイ",
      "マサバ",
      "マイワシ",
      "ブリ",
      "メジナ",
      "マダイ",
      "カワハギ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "シーロード八幡浜は外釣りを楽しむ有料の海釣り施設。放流魚を釣る海上釣り堀とは区別し、営業日は市の最新カレンダーで確認する。",
    "caution": [
      "営業日・料金・休園情報は八幡浜市の最新案内で確認。餌・氷の販売はないため事前に準備してください。",
      "桟橋の指定された釣り区画と使用できる仕掛けを確認し、施設係員の指示を優先してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "八幡浜市：営業日・料金・施設の公式案内",
        "url": "https://www.city.yawatahama.ehime.jp/doc/2022102600078/"
      },
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba3/ehimesi-ro-doyawatahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.457511/132.390254/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochiookinohama",
    "name": "大岐の浜",
    "prefecture": "高知県",
    "lat": 32.819811,
    "lng": 132.950642,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "大岐の浜はキス・ヒラメ・マゴチが候補の砂浜。サーフィンの利用が多いため、釣りができる海面を先に確認したい。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochiookinohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.819811/132.950642/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochinasisikaigann",
    "name": "名鹿海岸",
    "prefecture": "高知県",
    "lat": 32.923942,
    "lng": 132.996969,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "名鹿海岸は遠浅の砂浜でキスの投げ釣りが候補。潮位による浅さの変化に合わせ、探る距離を選びたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochinasisikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.923942/132.996969/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochiawakaigann",
    "name": "安和海岸",
    "prefecture": "高知県",
    "lat": 33.36342,
    "lng": 133.258903,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "安和海岸南側の小さな波止が釣りの候補。キス・クロダイ・アオリイカを探れるが、波止が低いことを忘れない。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochiawakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.36342/133.258903/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochifujigahama",
    "name": "富士ヶ浜",
    "prefecture": "高知県",
    "lat": 33.387378,
    "lng": 133.286669,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "富士ヶ浜は湾内の海岸で、キスやクロダイの底釣りが候補。静かな水面でも潮位と足元の水深を確認したい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochifujigahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.387378/133.286669/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochikousogawakakou",
    "name": "赤岡海岸（香宗川河口周辺）",
    "prefecture": "高知県",
    "lat": 33.538944,
    "lng": 133.725972,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "ヒラメ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "香宗川河口に近い赤岡海岸の砂浜側を案内する地点。河口の波止とは分け、キスやヒラメを浜から探る候補になる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochikousogawakakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.538944/133.725972/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochikisimotokaigann",
    "name": "岸本海岸",
    "prefecture": "高知県",
    "lat": 33.538157,
    "lng": 133.739383,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "手結港西側の岸本海岸は砂浜からキスやヒラメを探る候補。港の釣り座と混同せず、浜の幅と波を見て立つ場所を決める。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochikisimotokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.538157/133.739383/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochikotogahama",
    "name": "琴ヶ浜（高知県）",
    "prefecture": "高知県",
    "lat": 33.516513,
    "lng": 133.801975,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "高知の琴ヶ浜は砂利浜が続く海岸。キス・ヒラメや回遊魚が候補だが、足元が崩れやすい場所では立ち位置を優先する。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochikotogahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.516513/133.801975/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochiakikaigann",
    "name": "安芸海岸",
    "prefecture": "高知県",
    "lat": 33.497566,
    "lng": 133.901689,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "安芸海岸は広い砂利浜で、キスやヒラメ・回遊魚を狙う候補。投げる距離より、安定した足場と回収方向を確かめたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochiakikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.497566/133.901689/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokaanegonohama",
    "name": "姉子の浜",
    "prefecture": "福岡県",
    "lat": 33.495455,
    "lng": 130.053749,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "姉子の浜は鳴き砂で知られる海岸。キス釣りの候補だが、散策する人と海岸の保全に配慮して利用したい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokaanegonohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.495455/130.053749/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokaoogutikaigann",
    "name": "大口海岸",
    "prefecture": "福岡県",
    "lat": 33.632862,
    "lng": 130.184748,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "大口海岸は玄界灘に面した砂浜。キスの底釣りとヒラメ・マゴチ・スズキのルアー釣りが候補になる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokaoogutikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.632862/130.184748/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokanagahamakaigann",
    "name": "長浜海岸（福岡県）",
    "prefecture": "福岡県",
    "lat": 33.610706,
    "lng": 130.258391,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "福岡の長浜海岸は砂浜からキスを探る候補。同名の海岸が他県にもあるため、出発前に目的地の県と経路を確認したい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokanagahamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.610706/130.258391/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokamiyajihama",
    "name": "宮地浜",
    "prefecture": "福岡県",
    "lat": 33.77665,
    "lng": 130.470371,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "宮地浜は福津の遠浅サーフ。キス・ヒラメ・マゴチが候補だが、沖へ立ち込むことを前提にせず岸から探りたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokamiyajihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.77665/130.470371/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokasioirigawakakou",
    "name": "汐入川河口（新松原海岸）",
    "prefecture": "福岡県",
    "lat": 33.878326,
    "lng": 130.596757,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "汐入川河口周辺の新松原海岸はキスの砂浜釣りが候補。河口の橋は車の通路として扱わず、両岸のアクセスを別に確認する。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "河口の橋は歩行者・自転車用です。車で渡る経路として案内しないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokasioirigawakakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.878326/130.596757/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitamotosarutakayamakaigann",
    "name": "元猿・高山海岸",
    "prefecture": "大分県",
    "lat": 32.807314,
    "lng": 131.959512,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "元猿・高山の海岸のうち元猿側の砂浜を案内する地点。キス・ヒラメ・マゴチが候補で、海水浴やサーフィンと利用を分けたい。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitamotosarutakayamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.807314/131.959512/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitakazuraharakaigann",
    "name": "葛原海岸",
    "prefecture": "大分県",
    "lat": 32.775368,
    "lng": 131.868768,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "葛原海岸は南側の港とは別に、砂浜からキスを探る候補。車を海岸前へ置けると決めつけず駐車場所を先に確認する。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakazuraharakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.775368/131.868768/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyazakihouzaikaigann",
    "name": "方財海岸",
    "prefecture": "宮崎県",
    "lat": 32.58714,
    "lng": 131.708479,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "方財海岸は五ヶ瀬川と大瀬川の間のサーフ。キスやヒラメ・マゴチを狙う際も、河川の増水と濁りを先に見る。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/miyazakihouzaikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.58714/131.708479/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyazakinagahamakaigann",
    "name": "長浜海岸（宮崎県）",
    "prefecture": "宮崎県",
    "lat": 32.561698,
    "lng": 131.690261,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "延岡の長浜海岸はウミガメの産卵する砂浜としても知られる。キス・ヒラメ狙いは保護区画や夜間利用の案内を優先する。",
    "caution": [
      "ウミガメの保護区画・産卵跡に入らず、夜間の照明や利用に関する現地の案内を守ってください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/miyazakinagahamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.561698/131.690261/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyazakiikurahama",
    "name": "伊倉浜",
    "prefecture": "宮崎県",
    "lat": 32.193882,
    "lng": 131.554456,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "伊倉浜はキス・ヒラメ・マゴチが候補のサーフ。サーフィン利用と重なるため、海面が空いていることを最初に確認する。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/miyazakiikurahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.193882/131.554456/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyazakitoorihamakaigann",
    "name": "通浜海浜公園",
    "prefecture": "宮崎県",
    "lat": 32.165405,
    "lng": 131.546345,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "通浜海浜公園南側に広がるサーフを案内する地点。公園内全域ではなく、砂浜からキス・ヒラメなどを探る候補になる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/miyazakitoorihamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.165405/131.546345/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyazakikagutihama",
    "name": "蚊口浜",
    "prefecture": "宮崎県",
    "lat": 32.118711,
    "lng": 131.534972,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "蚊口浜はキスやヒラメ・スズキなどを探るサーフ。大型魚の情報があっても、サーフィン利用と波の条件を優先したい。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/miyazakikagutihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.118711/131.534972/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyazakitonndahama",
    "name": "富田浜",
    "prefecture": "宮崎県",
    "lat": 32.071011,
    "lng": 131.513536,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "富田浜は広いサーフでキス・ヒラメ・スズキなどが候補。サーフィンとの共用を前提に、釣る場所を絞りたい。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/miyazakitonndahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.071011/131.513536/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyazakikisakihama",
    "name": "木崎浜",
    "prefecture": "宮崎県",
    "lat": 31.827982,
    "lng": 131.452661,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "木崎浜は清武川と加江田川の間のサーフで、サーフィン利用が多い。魚の情報より先に安全な投入範囲があるかを判断する。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba3/miyazakikisakihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.827982/131.452661/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyazakikazedahama",
    "name": "風田浜",
    "prefecture": "宮崎県",
    "lat": 31.610064,
    "lng": 131.4238,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "風田川河口周辺の風田浜はキス・ヒラメ・マゴチが候補。流れ込みとサーフィンの利用状況を見て釣り座を選ぶ。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba3/miyazakikazedahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.610064/131.4238/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sagahamasakikaigann",
    "name": "浜崎海岸",
    "prefecture": "佐賀県",
    "lat": 33.448559,
    "lng": 130.029802,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "浜崎海岸は砂浜からキスを探る候補。長い浜でも、仕掛けを通す距離と砂底の変化を比べると狙いを絞りやすい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/sagahamasakikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.448559/130.029802/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sagaoukanohama",
    "name": "相賀の浜",
    "prefecture": "佐賀県",
    "lat": 33.515029,
    "lng": 129.959099,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "相賀の浜はキスの投げ釣りが候補の砂浜。足元から沖まで同じ底とは限らないため、距離を分けて探りたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/sagaoukanohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.515029/129.959099/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakisennrigahama",
    "name": "千里ヶ浜",
    "prefecture": "長崎県",
    "lat": 33.331855,
    "lng": 129.532177,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "平戸の千里ヶ浜は遠浅の砂浜。キス釣りは海水浴期間を外し、波と潮位を確認して計画する。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakisennrigahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.331855/129.532177/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakiyukinourakaihinnkouenn",
    "name": "雪浦海浜公園",
    "prefecture": "長崎県",
    "lat": 32.919043,
    "lng": 129.660387,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "雪浦海浜公園前の砂浜はキス・ヒラメ・スズキが候補。道路を横断して浜へ向かう際も、針や竿を短くまとめたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakiyukinourakaihinnkouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.919043/129.660387/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kumamotonabematubarakaigann",
    "name": "鍋松原海岸",
    "prefecture": "熊本県",
    "lat": 32.898056,
    "lng": 130.487902,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "鍋松原海岸は浅い砂浜・干潟側でハゼやキスを探る候補。潮位によって岸から届く範囲が変わることを前提に計画する。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotonabematubarakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.898056/130.487902/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimaegutihama",
    "name": "江口浜",
    "prefecture": "鹿児島県",
    "lat": 31.647719,
    "lng": 130.321155,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "江口浜はキス・ヒラメ・マゴチや回遊魚が候補の砂浜。サーフィン利用があるため、海面の空きと波の状態を先に確かめる。",
    "caution": [
      "サーフィンなど他の海面利用がある方向へ投げないでください。人が入った場合は仕掛けを回収して釣りを休みます。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimaegutihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.647719/130.321155/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimamaebarakaigann",
    "name": "前原海岸",
    "prefecture": "鹿児島県",
    "lat": 31.226105,
    "lng": 130.498588,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "前原海岸は砂浜からキス・ヒラメ・マゴチを探る候補。浜の形と波の切れ目を見て釣り座を選びたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimamaebarakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.226105/130.498588/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimatakasuhamadakaigann",
    "name": "高須・浜田海岸",
    "prefecture": "鹿児島県",
    "lat": 31.340223,
    "lng": 130.800905,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "高須・浜田の遠浅な海岸はキスの投げ釣りが候補。広い砂浜でも潮位によって近距離の狙いやすさが変わる。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimatakasuhamadakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.340223/130.800905/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimakisirakaigann",
    "name": "岸良海岸",
    "prefecture": "鹿児島県",
    "lat": 31.21772,
    "lng": 131.006448,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "岸良海岸は砂浜からキスを狙う候補。海岸の広さより当日の波と戻る経路を確認して釣りを始めたい。",
    "caution": [
      "入浜口と帰路を明るいうちに確認。波打ち際へ下がりすぎず、強風・高波の日は釣りを控えてください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimakisirakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.21772/131.006448/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-aomorihorodukigyokou",
    "name": "袰月漁港",
    "prefecture": "青森県",
    "lat": 41.220244,
    "lng": 140.537281,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "袰月の波止はアジや根魚、イカ類を探る候補。外側の消波部へ出ることを前提にせず、港内側から回収できる場所を確認する。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorihorodukigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.220244/140.537281/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomoriminnmayagyokou",
    "name": "三厩漁港",
    "prefecture": "青森県",
    "lat": 41.197208,
    "lng": 140.430872,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "サヨリ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "三厩は大きな港で内側と外側の足場が異なる。アジ・カレイ・根魚を狙う際は、消波部を避けた内側を基点に考えたい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoriminnmayagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.197208/140.430872/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomoriakaisigyokou",
    "name": "赤石漁港",
    "prefecture": "青森県",
    "lat": 40.770467,
    "lng": 140.170441,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "マサバ",
      "マイワシ",
      "ウミタナゴ",
      "ホッケ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "赤石漁港は外側の高い波返しより、港内側と小波止の足場を確認したい場所。キス・カレイや回遊魚が候補になる。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoriakaisigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.770467/140.170441/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-iwatetomarigyokous",
    "name": "泊漁港（岩手県）",
    "prefecture": "岩手県",
    "lat": 39.107819,
    "lng": 141.811202,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マサバ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "越喜来湾奥の泊漁港は、カレイ・アイナメなどの底の魚と回遊魚が候補。波止の内側から足場と投入方向を確認したい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatetomarigyokous.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.107819/141.811202/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatenonomaegyokou",
    "name": "野々前漁港",
    "prefecture": "岩手県",
    "lat": 39.050419,
    "lng": 141.817231,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "アイナメ",
      "クロソイ",
      "ヒラメ",
      "チカ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "野々前は複数の区画を持つ漁港。外側の大きな消波ブロックを避け、港内岸壁からカレイ・アイナメなどを探る候補になる。",
    "caution": [
      "海水浴の期間・区域では釣りを控え、遊泳者がいる海面へ仕掛けを入れないでください。",
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatenonomaegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.050419/141.817231/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatenesakigyokou",
    "name": "根岬漁港",
    "prefecture": "岩手県",
    "lat": 38.942221,
    "lng": 141.705501,
    "primaryType": "port",
    "fish": [
      "アイナメ",
      "クロソイ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "広田半島先端付近の根岬漁港はアイナメ・ソイやヤリイカの候補。外側の消波部ではなく内側の足場を確認する。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatenesakigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.942221/141.705501/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatewakinosawagyokou",
    "name": "脇之沢漁港",
    "prefecture": "岩手県",
    "lat": 39.004178,
    "lng": 141.656148,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "チカ",
      "ウミタナゴ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "脇之沢はカレイ・アイナメの底釣りが候補。隣の沼田地区とは混同せず、東側の港の波止と岸壁を確認したい。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatewakinosawagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.004178/141.656148/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateosabegyokou",
    "name": "長部漁港",
    "prefecture": "岩手県",
    "lat": 38.992205,
    "lng": 141.623855,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "ヒラメ",
      "マゴチ",
      "マサバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "気仙川河口近くの長部漁港は広い港内に複数の釣り方の候補がある。港全体を自由に使えるとせず、作業場所を避けたい。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateosabegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.992205/141.623855/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateyougaigyokou",
    "name": "要谷漁港",
    "prefecture": "岩手県",
    "lat": 38.980179,
    "lng": 141.626794,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "チカ",
      "ウミタナゴ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "県境近くの要谷漁港は底の魚と回遊魚を探る候補。南側の波止周辺でも、内側の回収しやすい場所を先に確認する。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateyougaigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.980179/141.626794/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagiwatanohagyokou",
    "name": "渡波漁港",
    "prefecture": "宮城県",
    "lat": 38.410928,
    "lng": 141.364732,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "渡波は万石浦の水道に接する港。流れのある外側と港内で釣りやすさが異なり、砂底・根魚・スズキを探り分けたい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagiwatanohagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.410928/141.364732/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagioohamagyokou",
    "name": "大浜漁港",
    "prefecture": "宮城県",
    "lat": 38.325969,
    "lng": 141.166635,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "マサバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "宮戸島の大浜漁港は底の魚と回遊魚が候補。車で波止へ横付けできると考えず、歩く距離と荷物量を見込んで計画する。",
    "caution": [
      "港内への車の進入は指定駐車区画まで。波止へは徒歩移動を見込み、現地の案内を優先してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagioohamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.325969/141.166635/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagihamadagyokou",
    "name": "浜田漁港",
    "prefecture": "宮城県",
    "lat": 38.347614,
    "lng": 141.042566,
    "primaryType": "port",
    "fish": [
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "松島湾内の浜田漁港はハゼの近距離釣りが候補。西側岸壁の利用範囲を確認し、船と係留索を避けて竿を出す。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagihamadagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.347614/141.042566/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibahamaogikou",
    "name": "浜荻港",
    "prefecture": "千葉県",
    "lat": 35.117206,
    "lng": 140.145593,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "マイワシ"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "note": "浜荻は港内のアジ・イワシを探る候補。東波止外側の大きな消波部とは危険度を分け、内側の足場を優先したい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibahamaogikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.117206/140.145593/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibaokitukou",
    "name": "興津港",
    "prefecture": "千葉県",
    "lat": 35.128859,
    "lng": 140.249233,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "興津東港側の岸壁・波止を代表位置とする港の釣行候補。西港や海浜公園周辺とは駐車・立入条件を個別に確認する。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaokitukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.128859/140.249233/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-simanekohamagyokou",
    "name": "小浜漁港",
    "prefecture": "島根県",
    "lat": 34.676153,
    "lng": 131.724207,
    "primaryType": "port",
    "fish": [
      "クロダイ",
      "アオリイカ",
      "ヤリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "島根の小浜漁港はクロダイ・メジナやイカ類が候補。外側の高い消波部と地磯へ出ることを前提にせず、港内側を確認する。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simanekohamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.676153/131.724207/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchiyamaguchigyokou",
    "name": "山口漁港",
    "prefecture": "山口県",
    "lat": 34.008469,
    "lng": 131.412857,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "サヨリ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "山口漁港は港内岸壁と波止で足場が異なる。アジ・キス・クロダイなどを狙うなら、消波部を避けた岸壁側から条件を確認したい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiyamaguchigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.008469/131.412857/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchimaruogyokou",
    "name": "丸尾漁港",
    "prefecture": "山口県",
    "lat": 33.968135,
    "lng": 131.354792,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "キジハタ",
      "クロダイ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "丸尾は波止と周辺の磯で釣り方が分かれる港。メバル・クロダイ・アオリイカ狙いは、外向きの消波部を避けて組み立てる。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchimaruogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.968135/131.354792/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchifukuurakou",
    "name": "福浦港",
    "prefecture": "山口県",
    "lat": 33.834597,
    "lng": 132.106025,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "クロダイ",
      "コウイカ",
      "メジナ",
      "カワハギ",
      "サワラ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "上関の福浦側の港はアジ・クロダイ・メジナなどが候補。低い波返しでも外海の波を避けられるとは限らず、内側から確認する。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchifukuurakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.834597/132.106025/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchikoltutoigyokou",
    "name": "特牛漁港",
    "prefecture": "山口県",
    "lat": 34.316307,
    "lng": 130.893087,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "ヤリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "特牛は入り江の港で、岸壁や赤灯側の波止からアジ・クロダイ・イカ類を探る候補。高い外側や裏の磯へ降りる前提を避ける。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchikoltutoigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.316307/130.893087/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchiminatogyokou",
    "name": "湊漁港",
    "prefecture": "山口県",
    "lat": 34.377393,
    "lng": 131.18047,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "長門の湊漁港は白灯側の内向きなどが候補。外側の大きな消波ブロックとは足場を分け、アジ・メバル・アオリイカを探りたい。",
    "caution": [
      "消波ブロック・濡れた石積みへ降りず、安定した足場から回収できる範囲を選んでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiminatogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.377393/131.18047/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchihagisyoukou",
    "name": "萩商港",
    "prefecture": "山口県",
    "lat": 34.421532,
    "lng": 131.397707,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "萩商港は松本川河口にあり定期船が発着する港。釣りの都合より旅客・車両・船の動線を優先して岸壁の利用範囲を確認する。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchihagisyoukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.421532/131.397707/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchiesakikou",
    "name": "江崎港",
    "prefecture": "山口県",
    "lat": 34.645177,
    "lng": 131.639686,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "江崎港は湾内の岸壁と小さな波止が釣りの候補。西側の道は狭いため、車のアクセスと立ち位置を先に決めたい。",
    "caution": [
      "進入路や駐車可能な場所を事前に確認。路肩・出入口・作業場所を駐車場として使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiesakikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.645177/131.639686/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitatukumikou",
    "name": "津久見港",
    "prefecture": "大分県",
    "lat": 33.076961,
    "lng": 131.864755,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki"
    ],
    "note": "津久見港は工業利用と共用する港。港口の波止の情報があっても、岸壁全体を釣りに使えるとは考えず現地の区画を確認する。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitatukumikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.076961/131.864755/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitamoriekou",
    "name": "護江港",
    "prefecture": "大分県",
    "lat": 33.006468,
    "lng": 131.904366,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "護江港は波止からアジ・クロダイ・メジナやアオリイカを探る候補。港の規模に合わせて釣り座と投入方向を小さく使いたい。",
    "caution": [
      "港・護岸では船と係留索を避け、砂浜では高波の届く範囲に近づかず、明るい時間に足場と帰路を確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitamoriekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.006468/131.904366/&base=std&ls=std&disp=1"
      }
    ]
  }
];
export const coastalNextEntries=createHarborEntries(places);
