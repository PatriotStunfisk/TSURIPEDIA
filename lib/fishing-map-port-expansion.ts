import {createHarborEntries,type HarborRecord} from './shore-spot';
// Individually researched shoreline candidates; see docs/map-port-expansion-20260918.md.
const ports:HarborRecord[]=[
  {
    "slug": "port-iwatekawatunaigyokou",
    "name": "川津内漁港",
    "prefecture": "岩手県",
    "lat": 40.269736,
    "lng": 141.81545,
    "fish": [
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "岩場が入り組む久慈の小港。港内の根魚やチカを中心に考え、根の多い外側へ仕掛けを落とし続けない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekawatunaigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.269736/141.81545/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatehonnnamigyokou",
    "name": "本波漁港",
    "prefecture": "岩手県",
    "lat": 40.241569,
    "lng": 141.826479,
    "fish": [
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "侍浜の入り江にある港。根魚の情報がある一方で波止に波が乗りやすく、うねりが残る日は候補から外したい。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatehonnnamigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.241569/141.826479/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatemugyougyokou",
    "name": "麦生漁港",
    "prefecture": "岩手県",
    "lat": 40.223451,
    "lng": 141.831951,
    "fish": [
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "侍浜の岩礁に囲まれた小港。港内でアイナメやソイを探る釣りが候補になるが、外海の波が入る日は利用を控える。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatemugyougyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.223451/141.831951/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatemisakigyokou",
    "name": "三崎漁港",
    "prefecture": "岩手県",
    "lat": 40.152391,
    "lng": 141.867979,
    "fish": [
      "マアジ",
      "サバ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "久慈市宇部町の港。内側の釣り座と高さのある外向きを区別し、チカ・ウミタナゴや根魚を探る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatemisakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.152391/141.867979/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatetamagawagyokou",
    "name": "玉川漁港",
    "prefecture": "岩手県",
    "lat": 40.080025,
    "lng": 141.832058,
    "fish": [
      "マアジ",
      "カレイ",
      "サバ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "野田村の比較的大きな港。外側の巨大な消波ブロックへ進まず、港内側で小魚やカレイ、根魚を狙う組み立てがしやすい。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatetamagawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.080025/141.832058/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatesimoaltukagyokou",
    "name": "下安家漁港",
    "prefecture": "岩手県",
    "lat": 40.055295,
    "lng": 141.85225,
    "fish": [
      "カレイ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "安家川が海へ注ぐ場所にある港。カレイやアイナメの情報があり、河川の濁りと波を確認してから釣り座を選ぶ。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatesimoaltukagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.055295/141.85225/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatesawagyokou",
    "name": "沢漁港",
    "prefecture": "岩手県",
    "lat": 40.050022,
    "lng": 141.870189,
    "fish": [
      "アイナメ",
      "ソイ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "普代村の小さな港。アイナメなどの根魚が対象で、段差の大きい先端や外側ブロックへ無理に降りない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatesawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.050022/141.870189/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatekurosakigyokou",
    "name": "黒崎漁港",
    "prefecture": "岩手県",
    "lat": 40.007763,
    "lng": 141.923425,
    "fish": [
      "アイナメ",
      "ソイ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "普代の黒崎側にある港。波止には上がりにくい高低差があるため、岸壁側で出せる竿の範囲を確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekurosakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.007763/141.923425/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatehiraigagyokou",
    "name": "平井賀漁港",
    "prefecture": "岩手県",
    "lat": 39.933812,
    "lng": 141.939411,
    "fish": [
      "カレイ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "田野畑の港。外側の消波帯と港内の岸壁を区別し、チカ・ウミタナゴや根魚を狙う候補にする。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatehiraigagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/39.933812/141.939411/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatesimanokosigyokou",
    "name": "島の越漁港",
    "prefecture": "岩手県",
    "lat": 39.913143,
    "lng": 141.947844,
    "fish": [
      "カレイ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "島越駅側の港。大きな消波ブロックの外向きより港内側を確認し、カレイや根魚を探る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatesimanokosigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/39.913143/141.947844/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatemosigyokou",
    "name": "茂師漁港",
    "prefecture": "岩手県",
    "lat": 39.829681,
    "lng": 141.979043,
    "fish": [
      "マアジ",
      "カレイ",
      "サバ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "小本の南側にある港。外海側の大型テトラへ立ち入らず、内側で小魚やカレイ、根魚の釣り座を探す。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatemosigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/39.829681/141.979043/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatemasakigyokou",
    "name": "小港漁港（真崎漁港）",
    "prefecture": "岩手県",
    "lat": 39.751364,
    "lng": 141.99739,
    "fish": [
      "マアジ",
      "カレイ",
      "サバ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "真崎漁港の名でも紹介される小港漁港。高い波返しの外側ではなく、幅のある港内側を中心に考える。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatemasakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/39.751364/141.99739/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatetarougyokou",
    "name": "田老漁港",
    "prefecture": "岩手県",
    "lat": 39.735459,
    "lng": 141.975031,
    "fish": [
      "マアジ",
      "カレイ",
      "サバ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "田老川が流れ込む港。岸壁や西側・中央の波止に釣り情報があり、テトラを渡る必要がある東側とは分けて確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatetarougyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/39.735459/141.975031/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwatekasinaigyokou",
    "name": "樫内漁港",
    "prefecture": "岩手県",
    "lat": 39.706708,
    "lng": 141.977134,
    "fish": [
      "マアジ",
      "カレイ",
      "サバ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "田老の南にある小港。高い波返しの向こうへ無理に出ず、港内側で根魚や回遊する小魚を探る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekasinaigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/39.706708/141.977134/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-iwateyadogyokou",
    "name": "宿漁港",
    "prefecture": "岩手県",
    "lat": 39.687358,
    "lng": 141.973486,
    "fish": [
      "マアジ",
      "カレイ",
      "サバ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "宮古市崎山の港。内側の幅のある釣り座が候補で、外側の大型テトラを使う青物釣りとは難易度が違う。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwateyadogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/39.687358/141.973486/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-miyagioosawakarakuwagyokou",
    "name": "大沢（唐桑）漁港",
    "prefecture": "宮城県",
    "lat": 38.965215,
    "lng": 141.634583,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "唐桑の県境寄りにある大沢漁港。港内の岸壁からカレイや根魚を狙う候補で、津谷の同名港とは別地点。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagioosawakarakuwagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.965215/141.634583/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagitadakosigyokou",
    "name": "只越漁港",
    "prefecture": "宮城県",
    "lat": 38.929536,
    "lng": 141.634347,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "唐桑の只越にある港。道路からの高低差と帰路を先に確認し、港内側でカレイや根魚を探る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagitadakosigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.929536/141.634347/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagiosakikannkoukou",
    "name": "御崎観光港",
    "prefecture": "宮城県",
    "lat": 38.861983,
    "lng": 141.668916,
    "fish": [
      "カレイ",
      "メバル",
      "ヤリイカ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "唐桑半島の御崎側にある港。岸壁から小魚・根魚を探る釣りが候補で、イカ狙いも船の出入りを避けて行う。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagiosakikannkoukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.861983/141.668916/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyaginagasakigyokou",
    "name": "長崎漁港",
    "prefecture": "宮城県",
    "lat": 38.854748,
    "lng": 141.625228,
    "fish": [
      "カレイ",
      "メバル",
      "ヒラメ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "気仙沼大島の小田の浜に隣接する港。砂底のカレイ・ヒラメと岸壁際の根魚で、探る場所を分けて考えたい。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyaginagasakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.854748/141.625228/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagiuranohamagyokou",
    "name": "浦の浜漁港",
    "prefecture": "宮城県",
    "lat": 38.865575,
    "lng": 141.612847,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "気仙沼大島の入り江にある港。港内側でカレイや根魚を探る釣りが候補になるが、係留船と荷揚げの動線を優先する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagiuranohamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.865575/141.612847/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagikawaragyokou",
    "name": "川原漁港",
    "prefecture": "宮城県",
    "lat": 38.857388,
    "lng": 141.584415,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "岩月地区の小さな港。岸壁と波止で根魚・カレイの情報があるが、駐車余地が限られるため車を置けるか先に確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagikawaragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.857388/141.584415/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagisuginositagyokou",
    "name": "杉ノ下漁港",
    "prefecture": "宮城県",
    "lat": 38.823594,
    "lng": 141.589565,
    "fish": [
      "カレイ",
      "アイナメ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "御伊勢浜の東側にある港。砂底を狙うカレイ釣りが候補で、南側の波止と岩礁の位置を確認して投入する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagisuginositagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.823594/141.589565/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagiooyagyokou",
    "name": "大谷漁港",
    "prefecture": "宮城県",
    "lat": 38.81592,
    "lng": 141.574974,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "大谷海岸側の港。港内も係留船が多く釣り座が限られるため、空いて見える岸壁でも作業予定を確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagiooyagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.81592/141.574974/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagimisimagyokou",
    "name": "三島漁港",
    "prefecture": "宮城県",
    "lat": 38.810219,
    "lng": 141.571026,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "大谷海岸東側の浅い港。港内ではチカを中心に考え、外側テトラの根魚釣りと同じ足場条件だと思わない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagimisimagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.810219/141.571026/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagihikadogyokou",
    "name": "日門漁港",
    "prefecture": "宮城県",
    "lat": 38.806774,
    "lng": 141.556928,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "ヒラメ",
      "マゴチ",
      "サバ",
      "アイナメ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "大谷海岸西側の港。内側から小魚やカレイを探り、波止の外側にある大きな消波ブロックへは無理に出ない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagihikadogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.806774/141.556928/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagimaehamagyokou",
    "name": "前浜漁港",
    "prefecture": "宮城県",
    "lat": 38.801992,
    "lng": 141.552229,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "ヤリイカ",
      "サバ",
      "アイナメ",
      "ソイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "本吉町前浜の港。内向きと先端側に釣り情報があり、沖向きの不安定なテトラ帯は別に考える。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagimaehamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.801992/141.552229/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagiakausigyokou",
    "name": "赤牛漁港",
    "prefecture": "宮城県",
    "lat": 38.796724,
    "lng": 141.538153,
    "fish": [
      "カレイ",
      "メバル",
      "ヤリイカ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "本吉町赤牛の港。南側の波止で根魚やカレイの情報がある。段差を越えなければ立てない場所は選ばない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagiakausigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.796724/141.538153/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagioosawagyokou",
    "name": "大沢（津谷）漁港",
    "prefecture": "宮城県",
    "lat": 38.793313,
    "lng": 141.529183,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "本吉町大沢の港。唐桑の大沢漁港とは別地点で、高い北波止の外側より港内や岸壁際を確認したい。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagioosawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.793313/141.529183/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyaginijyuuitihamagyokou",
    "name": "二十一浜漁港",
    "prefecture": "宮城県",
    "lat": 38.759772,
    "lng": 141.520193,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "砂底と岩礁が混じる本吉の港。投げ釣りでカレイを探る場合は、短い距離で根掛かりの有無を確かめてから範囲を広げる。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyaginijyuuitihamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.759772/141.520193/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagikurautigyokou",
    "name": "蔵内漁港",
    "prefecture": "宮城県",
    "lat": 38.753113,
    "lng": 141.528475,
    "fish": [
      "カレイ",
      "メバル",
      "ヤリイカ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "本吉町蔵内の港。砂地のカレイと根周りのアイナメを狙い分け、同じ方向へ繰り返し投入して根掛かりを増やさない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagikurautigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.753113/141.528475/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyaginatarigyokou",
    "name": "名足漁港",
    "prefecture": "宮城県",
    "lat": 38.72255,
    "lng": 141.558516,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "歌津の港。南波止外側の大きなテトラを避け、内側で小魚やカレイ、根魚を探る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyaginatarigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.72255/141.558516/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyaginakayamagyokou",
    "name": "中山漁港",
    "prefecture": "宮城県",
    "lat": 38.72024,
    "lng": 141.557486,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "歌津中山の小港。波止への進入を阻むブロックがあるため波止は対象外とし、利用できる港内岸壁を現地で確認する。",
    "caution": [
      "波止は立入制限があるため対象外。港内側も利用可能な区画を現地確認し、柵を越えない。",
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyaginakayamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.72024/141.557486/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagiisatomaegyokou",
    "name": "伊里前漁港",
    "prefecture": "宮城県",
    "lat": 38.713878,
    "lng": 141.52354,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "サバ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "歌津の湾奥にある港。港内側の岸壁で小魚やカレイを探る候補にし、外側の大型テトラとは足場を区別する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagiisatomaegyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.713878/141.52354/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagiyorikigyokou",
    "name": "寄木漁港",
    "prefecture": "宮城県",
    "lat": 38.707432,
    "lng": 141.521115,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "歌津寄木の小港。沖向きには頭上の電線があるため、竿を立てる前に線の位置を確認。カレイや根魚が対象になる。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "頭上の電線に竿や仕掛けを近づけない。振りかぶれる空間がない区画では釣りをしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagiyorikigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.707432/141.521115/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagihiraisogyokou",
    "name": "平磯漁港",
    "prefecture": "宮城県",
    "lat": 38.677687,
    "lng": 141.473243,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "志津川湾の平磯漁港。カレイの投げ釣りの情報があり、漁具の置き場や作業車両の通路を空けて利用する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagihiraisogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.677687/141.473243/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagisodehamagyokou",
    "name": "袖浜漁港",
    "prefecture": "宮城県",
    "lat": 38.673985,
    "lng": 141.467257,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "サバ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "志津川漁港に隣接する港。小魚の回遊待ちと底のカレイ・根魚で仕掛けを分け、隣の釣り人との間隔を取る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagisodehamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.673985/141.467257/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagihayasigyokou",
    "name": "林漁港",
    "prefecture": "宮城県",
    "lat": 38.668155,
    "lng": 141.446593,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "志津川湾内の小港。外側テトラと駐車余地の少なさに注意し、港内で出せる竿の範囲を確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagihayasigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.668155/141.446593/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagioritategyokou",
    "name": "折立漁港",
    "prefecture": "宮城県",
    "lat": 38.646925,
    "lng": 141.441679,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ",
      "マハゼ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "志津川湾奥の港。ハゼやカレイを探る候補で、外側の高い波返しを越える場所は釣り座にしない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagioritategyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.646925/141.441679/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagihadennyagyokou",
    "name": "波伝谷漁港",
    "prefecture": "宮城県",
    "lat": 38.642048,
    "lng": 141.459188,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ",
      "マハゼ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "水戸辺川河口にある港。ハゼ・カレイなどを狙う候補だが、港内の漁具と駐車場所を先に確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagihadennyagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.642048/141.459188/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagitunomiyagyokou",
    "name": "津の宮漁港",
    "prefecture": "宮城県",
    "lat": 38.642534,
    "lng": 141.486311,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "戸倉地区の港。手前に漁業施設があるため作業を妨げず、岸壁から届く範囲で小魚や根魚を探る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagitunomiyagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.642534/141.486311/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagifujihamagyokou",
    "name": "藤浜漁港",
    "prefecture": "宮城県",
    "lat": 38.639165,
    "lng": 141.504035,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "戸倉地区の小港。周囲の砂底を使うカレイ釣りが候補で、車を停める場所が確保できない日は無理に利用しない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagifujihamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.639165/141.504035/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyaginagasizugyokou",
    "name": "長清水漁港",
    "prefecture": "宮城県",
    "lat": 38.636383,
    "lng": 141.510987,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "戸倉の長清水漁港。小魚や根魚の情報がある一方、駐車余地が少ないため入口や作業場所を塞がない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyaginagasizugyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.636383/141.510987/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-miyagiterahamagyokou",
    "name": "寺浜漁港",
    "prefecture": "宮城県",
    "lat": 38.637322,
    "lng": 141.519399,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "戸倉の寺浜漁港。港内岸壁でチカやウミタナゴを狙う候補になり、足元から短い仕掛けで探りやすい。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagiterahamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.637322/141.519399/&base=std&ls=std&disp=1"
      },
      {
        "label": "宮城県：遊漁・港利用のルール",
        "url": "https://www.pref.miyagi.jp/soshiki/suishin/umiduri.html"
      }
    ]
  },
  {
    "slug": "port-tibatomiurakou",
    "name": "富浦旧港",
    "prefecture": "千葉県",
    "lat": 35.048742,
    "lng": 139.831924,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "豊岡海岸側にある富浦の旧港。港内のアジと周辺の砂底・岩場を区別し、まず係留索のない内向きを確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibatomiurakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.048742/139.831924/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-tibatomiurasinnkou",
    "name": "富浦新港",
    "prefecture": "千葉県",
    "lat": 35.038922,
    "lng": 139.822097,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "多田良側の富浦新港。港内のアジと砂浜側のキスで狙う向きが異なり、手前の敷石を避けて仕掛けを回収する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibatomiurasinnkou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.038922/139.822097/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-tibafunakatakou",
    "name": "船形港",
    "prefecture": "千葉県",
    "lat": 35.024251,
    "lng": 139.84585,
    "fish": [
      "マアジ",
      "クロダイ",
      "サバ",
      "イワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "館山市船形の港。港内のアジ・イワシなどを狙う候補で、岸壁の作業と船の動きを優先する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibafunakatakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.024251/139.84585/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-tibaokinosimagogann",
    "name": "沖ノ島護岸",
    "prefecture": "千葉県",
    "lat": 34.99091,
    "lng": 139.83068,
    "fish": [
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "スズキ",
      "サヨリ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "館山の沖ノ島へ向かう石積み護岸。キスやサヨリの情報があり、滑りやすい石や波を被る位置を避ける。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaokinosimagogann.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.99091/139.83068/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "port-tibakouyagyokou",
    "name": "香谷堤防",
    "prefecture": "千葉県",
    "lat": 34.979324,
    "lng": 139.816604,
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
      "eging"
    ],
    "note": "香谷漁港とも呼ばれる小さな波止。アジ・サヨリ・キスやアオリイカが候補で、狭い釣り座を譲り合う。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibakouyagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.979324/139.816604/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-tibasunosakikitakou",
    "name": "洲崎北港",
    "prefecture": "千葉県",
    "lat": 34.969496,
    "lng": 139.755471,
    "fish": [
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "栄の浦漁港とも呼ばれる洲崎北港。釣船の利用が中心のため出船準備を優先し、岸釣り可能な場所だけを確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibasunosakikitakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.969496/139.755471/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-sizuokakisyouteibou",
    "name": "木負堤防",
    "prefecture": "静岡県",
    "lat": 35.02541,
    "lng": 138.876586,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "西浦木負の長い堤防。アジやクロダイ、アオリイカが候補で、混雑時は投入方向と回収経路を合わせて選ぶ。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/sizuokakisyouteibou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.02541/138.876586/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "port-sizuokaisibukou",
    "name": "石部港",
    "prefecture": "静岡県",
    "lat": 34.734259,
    "lng": 138.756509,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "松崎町石部の小港。北側の波止でアオリイカの情報があり、駐車余地と高低差を確認してから利用する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba8/sizuokaisibukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.734259/138.756509/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-sizuokaihamakou",
    "name": "伊浜港",
    "prefecture": "静岡県",
    "lat": 34.685893,
    "lng": 138.764062,
    "fish": [
      "マアジ"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "note": "伊浜の小港。外側の波返しには登らず、港内でアジを探る候補にする。集落内の細い道ではすれ違いに注意。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba8/sizuokaihamakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.685893/138.764062/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-yoltukaititomisuhara",
    "name": "富洲原漁港",
    "prefecture": "三重県",
    "lat": 35.001298,
    "lng": 136.660931,
    "fish": [
      "マアジ",
      "クロダイ",
      "サバ",
      "マハゼ",
      "イワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "四日市の富洲原漁港。港内のサビキとハゼ釣りが候補で、夜のルアーも係留船へ近づけない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba2/yoltukaititomisuhara.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.001298/136.660931/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-suzukasiwakamatu",
    "name": "若松漁港",
    "prefecture": "三重県",
    "lat": 34.868644,
    "lng": 136.625462,
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "鈴鹿市の港。砂底のキス・カレイと港内のハゼを狙い分け、白灯側でも波と足元を確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba2/suzukasiwakamatu.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.868644/136.625462/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-suzukasisiroko",
    "name": "白子漁港",
    "prefecture": "三重県",
    "lat": 34.830855,
    "lng": 136.59349,
    "fish": [
      "マアジ",
      "シロギス",
      "マゴチ",
      "サバ",
      "マハゼ",
      "イワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage"
    ],
    "note": "白子の港内には釣り用の桟橋がある。サビキの小魚と港内のハゼを中心に考え、周囲の船道を避ける。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba2/suzukasisiroko.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.830855/136.59349/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-tobaijika",
    "name": "石鏡漁港",
    "prefecture": "三重県",
    "lat": 34.447052,
    "lng": 136.919582,
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "鳥羽市石鏡の港。船釣りの出入りを優先し、赤灯側の内向きで根魚やキスを探る。外側の大きなテトラには進まない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/tobaijika.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.447052/136.919582/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-tobakuzaki",
    "name": "国崎漁港",
    "prefecture": "三重県",
    "lat": 34.412451,
    "lng": 136.92205,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "鳥羽市国崎の港。クロダイ・メジナや小型ルアーの情報がある。岩礁やテトラへ無理に乗らず岸壁側から確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/tobakuzaki.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.412451/136.92205/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-tobaadako",
    "name": "畔蛸漁港",
    "prefecture": "三重県",
    "lat": 34.389328,
    "lng": 136.896214,
    "fish": [
      "メバル",
      "クロダイ"
    ],
    "methodSlugs": [
      "uki",
      "rockfish-lure"
    ],
    "note": "鳥羽市畔蛸の入り江にある港。メバルや小型クロダイを足元から探る候補で、大きな回遊を前提にせず静かに釣る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/tobaadako.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.389328/136.896214/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-tobamomotorikou",
    "name": "桃取港（答志島）",
    "prefecture": "三重県",
    "lat": 34.513948,
    "lng": 136.85214,
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "スズキ",
      "アイナメ",
      "マダイ"
    ],
    "methodSlugs": [
      "choinage",
      "uki",
      "rockfish-lure"
    ],
    "note": "答志島の桃取港。水道の流れが速いため潮の緩む時間を選び、キスやカレイの仕掛けを流しすぎない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/tobamomotorikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.513948/136.85214/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-simasikatada",
    "name": "片田漁港",
    "prefecture": "三重県",
    "lat": 34.251027,
    "lng": 136.844351,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "志摩市片田の港。アジ・クロダイ・メジナやアオリイカの情報があり、船の作業を避けて内向きから探る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/simasikatada.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.251027/136.844351/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-simasikosikagyokou",
    "name": "越賀漁港",
    "prefecture": "三重県",
    "lat": 34.256223,
    "lng": 136.794312,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "志摩の和具西側にある港。高い波返しで釣り座が限られるため、先客がいるときは無理に割り込まない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/simasikosikagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.256223/136.794312/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-simasihamajima",
    "name": "浜島港",
    "prefecture": "三重県",
    "lat": 34.297678,
    "lng": 136.759744,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "浜島の港。岸壁側からアジやクロダイを探る候補で、夜の釣りも作業灯と船の出入りを妨げない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/simasihamajima.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.297678/136.759744/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-minamiisesyukutaso",
    "name": "宿田曽漁港",
    "prefecture": "三重県",
    "lat": 34.294984,
    "lng": 136.689556,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "宿浦・田曽浦にまたがる港。港内の岸壁でサビキやキス、クロダイ釣りの情報があり、田曽大突堤とは利用区画を分けて確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/minamiisesyukutaso.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.294984/136.689556/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-wakayamaookawagyokou",
    "name": "大川漁港",
    "prefecture": "和歌山県",
    "lat": 34.308721,
    "lng": 135.088084,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
      "アオリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "加太北側の大川漁港。港内の小魚やキスを探る候補で、駐車料金と受付は最新案内を確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "駐車料金・協力金・受付時間は現地の最新表示を確認。料金の支払いは港全体への立入許可を意味しない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamaookawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.308721/135.088084/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamanennkinnhato",
    "name": "年金波止",
    "prefecture": "和歌山県",
    "lat": 33.963384,
    "lng": 135.102525,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "由良湾の年金波止。アジ・クロダイや秋のタチウオの情報がある。港内の作業と回収できる足元を確認して釣り座を選ぶ。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamanennkinnhato.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.963384/135.102525/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "port-wakayamakataguigyokou",
    "name": "方杭漁港",
    "prefecture": "和歌山県",
    "lat": 33.939871,
    "lng": 135.084972,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "日高町方杭の港。入口のチェーンを越えて車を入れず、徒歩利用の範囲と駐車場所を先に確かめる。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamakataguigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.939871/135.084972/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamaouragyokou",
    "name": "小浦漁港",
    "prefecture": "和歌山県",
    "lat": 33.925646,
    "lng": 135.073214,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "日高町小浦の港。アジやアオリイカが候補で、外側の足場が悪いテトラと内側の釣り座を区別する。清掃協力金等は現地確認。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。",
      "駐車料金・協力金・受付時間は現地の最新表示を確認。料金の支払いは港全体への立入許可を意味しない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamaouragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.925646/135.073214/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamatakuigyokou",
    "name": "田杭漁港",
    "prefecture": "和歌山県",
    "lat": 33.894963,
    "lng": 135.064974,
    "fish": [
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "日高町田杭の浅い港。秋のアオリイカの情報があり、外側ブロックへ無理に乗らず内向きから探る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamatakuigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.894963/135.064974/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamanojimagyokou",
    "name": "野島漁港",
    "prefecture": "和歌山県",
    "lat": 33.842992,
    "lng": 135.168228,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "御坊市灘町の小港。アジ・クロダイ・アオリイカの候補で、集落内の進入路と作業場所を妨げないようにする。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamanojimagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.842992/135.168228/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamauenogyokou",
    "name": "上野漁港",
    "prefecture": "和歌山県",
    "lat": 33.826808,
    "lng": 135.184987,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "カマス",
      "メッキ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "御坊市灘町の港。波止内側を中心にアジやクロダイ、アオリイカを探り、流れ込み周辺も係留索を確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamauenogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.826808/135.184987/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamakusuigyokou",
    "name": "下楠井漁港",
    "prefecture": "和歌山県",
    "lat": 33.816112,
    "lng": 135.193505,
    "fish": [
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "下楠井の小港。アオリイカやクロダイを狙う候補で、波止へ至る道と駐車可能な場所を先に確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamakusuigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.816112/135.193505/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamaiwasirogyokou",
    "name": "岩代漁港",
    "prefecture": "和歌山県",
    "lat": 33.777382,
    "lng": 135.281675,
    "fish": [
      "シロギス",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "みなべ町岩代の港。西側の波止でアオリイカ、砂浜側でキスの情報があり、狙う方向によって仕掛けを選ぶ。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamaiwasirogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.777382/135.281675/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamailtuponnmatugyokou",
    "name": "一本松漁港",
    "prefecture": "和歌山県",
    "lat": 33.749107,
    "lng": 135.326843,
    "fish": [
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "みなべ町埴田の小港。裏手の地磯は満潮で水没するため釣り座には選ばず、波止内側の利用範囲を確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamailtuponnmatugyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.749107/135.326843/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamasinnhayagyokou",
    "name": "新芳養漁港",
    "prefecture": "和歌山県",
    "lat": 33.74297,
    "lng": 135.353515,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "ヒラメ",
      "マゴチ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "田辺の芳養地区にある港。港内のアジ・イワシ・カマスを中心に考え、外側の青物狙いとは足場や道具を分ける。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamasinnhayagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.74297/135.353515/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamatanabeminato",
    "name": "磯間漁港（湊浦漁港）",
    "prefecture": "和歌山県",
    "lat": 33.718164,
    "lng": 135.38244,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "扇ヶ浜に隣接する磯間漁港。湊浦漁港・田辺湊漁港とも呼ばれ、港内や砂底のキス釣りが候補になる。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamatanabeminato.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.718164/135.38244/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamasinnmorikou",
    "name": "新文里港",
    "prefecture": "和歌山県",
    "lat": 33.714898,
    "lng": 135.386217,
    "fish": [
      "マアジ",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "田辺市文里の新港側。港内の岸壁でアジやクロダイを狙う候補で、係留船と作業車のために移動できる場所を選ぶ。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamasinnmorikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.714898/135.386217/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamaitiekou",
    "name": "市江港（市江崎）",
    "prefecture": "和歌山県",
    "lat": 33.586131,
    "lng": 135.403812,
    "fish": [
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "市江の入り江にある港。波止内側でアオリイカを狙う候補とし、離れた市江崎の磯とは別の足場として扱う。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamaitiekou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.586131/135.403812/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamaoosimagyokou",
    "name": "大島漁港（田代漁港）",
    "prefecture": "和歌山県",
    "lat": 33.473639,
    "lng": 135.803268,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "紀伊大島の田代漁港。アジ・クロダイやアオリイカを探る候補で、前方の養殖筏へ向けた遠投を避ける。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamaoosimagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.473639/135.803268/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-hirosimaajinagogann",
    "name": "阿品護岸",
    "prefecture": "広島県",
    "lat": 34.319036,
    "lng": 132.314529,
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "コウイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "choinage",
      "uki",
      "rockfish-lure"
    ],
    "note": "廿日市の阿品護岸。サヨリやキス、メバルを狙う候補だが、潮位で足元の状態が変わる石積みへ安易に降りない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimaajinagogann.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.319036/132.314529/&base=std&ls=std&disp=1"
      },
      {
        "label": "広島県：遊漁・港利用のルール",
        "url": "https://www.pref.hiroshima.lg.jp/soshiki/88/1181277903054.html"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "port-hirosimahayasegyokou",
    "name": "倉橋島・早瀬漁港",
    "prefecture": "広島県",
    "lat": 34.153277,
    "lng": 132.494001,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "早瀬の瀬戸に面した港。流れが速いため仕掛けを軽くしすぎず、港内岸壁側と高い波返しの外側を区別する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimahayasegyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.153277/132.494001/&base=std&ls=std&disp=1"
      },
      {
        "label": "広島県：遊漁・港利用のルール",
        "url": "https://www.pref.hiroshima.lg.jp/soshiki/88/1181277903054.html"
      }
    ]
  },
  {
    "slug": "port-hirosimaakidukikou",
    "name": "江田島・秋月港",
    "prefecture": "広島県",
    "lat": 34.229172,
    "lng": 132.491856,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "サヨリ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "江田島東側の秋月港。小魚のサビキと砂底のキス・カレイが候補で、秋の回遊魚だけを前提にしない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimaakidukikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.229172/132.491856/&base=std&ls=std&disp=1"
      },
      {
        "label": "広島県：遊漁・港利用のルール",
        "url": "https://www.pref.hiroshima.lg.jp/soshiki/88/1181277903054.html"
      }
    ]
  },
  {
    "slug": "port-hirosimakoyoukou",
    "name": "江田島・小用港",
    "prefecture": "広島県",
    "lat": 34.248206,
    "lng": 132.492907,
    "fish": [
      "メバル",
      "クロダイ",
      "タチウオ",
      "マダイ"
    ],
    "methodSlugs": [
      "uki",
      "rockfish-lure"
    ],
    "note": "江田島のフェリー港。発着岸壁と釣り情報のある北側の波止を区別し、船の航路に仕掛けを流さない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimakoyoukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.248206/132.492907/&base=std&ls=std&disp=1"
      },
      {
        "label": "広島県：遊漁・港利用のルール",
        "url": "https://www.pref.hiroshima.lg.jp/soshiki/88/1181277903054.html"
      }
    ]
  },
  {
    "slug": "port-hirosimaoosukou",
    "name": "江田島・大須港",
    "prefecture": "広島県",
    "lat": 34.285854,
    "lng": 132.438533,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "江田島北端側の大須港。アジやキス・カレイを探る候補で、港内の駐車可能範囲と作業予定を確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimaoosukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.285854/132.438533/&base=std&ls=std&disp=1"
      },
      {
        "label": "広島県：遊漁・港利用のルール",
        "url": "https://www.pref.hiroshima.lg.jp/soshiki/88/1181277903054.html"
      }
    ]
  },
  {
    "slug": "port-hirosimasotominougyokou",
    "name": "能美島・外美能漁港",
    "prefecture": "広島県",
    "lat": 34.25319,
    "lng": 132.380319,
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "能美島先端側の港。キス・カレイと根魚が候補で、外側テトラを歩き回らず回収しやすい内向きから探る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimasotominougyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.25319/132.380319/&base=std&ls=std&disp=1"
      },
      {
        "label": "広島県：遊漁・港利用のルール",
        "url": "https://www.pref.hiroshima.lg.jp/soshiki/88/1181277903054.html"
      }
    ]
  },
  {
    "slug": "port-hirosimakorenagagyokou",
    "name": "能美島・是長漁港",
    "prefecture": "広島県",
    "lat": 34.214659,
    "lng": 132.395768,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "能美島の是長漁港。陸続きの波止に釣り情報があり、キス・カレイやクロダイを狙う。南端の足場は別に確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimakorenagagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.214659/132.395768/&base=std&ls=std&disp=1"
      },
      {
        "label": "広島県：遊漁・港利用のルール",
        "url": "https://www.pref.hiroshima.lg.jp/soshiki/88/1181277903054.html"
      }
    ]
  },
  {
    "slug": "port-ooitamatamakou",
    "name": "真玉港",
    "prefecture": "大分県",
    "lat": 33.615191,
    "lng": 131.469355,
    "fish": [
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "uki"
    ],
    "note": "真玉川河口の港。防風フェンスと幅の狭い導流堤で釣り座が限られるため、立てる場所と回収経路を優先する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitamatamakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.615191/131.469355/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-ooitakakadisinnhato",
    "name": "香々地新波止",
    "prefecture": "大分県",
    "lat": 33.675211,
    "lng": 131.521883,
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
      "eging"
    ],
    "note": "香々地の新波止。アジやキスの情報があるが、外側のテトラへ無理に乗らず先端の少ない釣り座を譲り合う。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakakadisinnhato.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.675211/131.521883/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-ooitataketadukou",
    "name": "竹田津港",
    "prefecture": "大分県",
    "lat": 33.678783,
    "lng": 131.565399,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "国見町の竹田津港。フェリーの発着と岸釣りの場所を分け、赤灯側でキスやアジを探る候補にする。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitataketadukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.678783/131.565399/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-ooitakusikukou",
    "name": "櫛来港",
    "prefecture": "大分県",
    "lat": 33.68355,
    "lng": 131.607735,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "国見町櫛来の浅い港。キスやアジを探る候補だが、北側の頭上電線へ竿や仕掛けを近づけない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "頭上の電線に竿や仕掛けを近づけない。振りかぶれる空間がない区画では釣りをしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakusikukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.68355/131.607735/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-ooitakumagekou",
    "name": "熊毛港",
    "prefecture": "大分県",
    "lat": 33.671301,
    "lng": 131.64947,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "国見町の熊毛港。港内岸壁で小魚やキスを探る候補。広く見えても船の作業や車両の通路を優先する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakumagekou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.671301/131.64947/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-ooitautisakogyokou",
    "name": "内迫漁港",
    "prefecture": "大分県",
    "lat": 33.6643,
    "lng": 131.665778,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "国見町奥熊毛の小港。アジ・キス・カレイの情報があり、東側の電線の位置を確認してから投入する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "頭上の電線に竿や仕掛けを近づけない。振りかぶれる空間がない区画では釣りをしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitautisakogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.6643/131.665778/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-ooitatomikukou",
    "name": "富来港",
    "prefecture": "大分県",
    "lat": 33.604719,
    "lng": 131.707964,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "国東町の富来港。アジやキス・カレイを狙う候補で、テトラの外向きと岸壁側の釣り座を区別する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitatomikukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.604719/131.707964/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-ooitamusasikou",
    "name": "武蔵港",
    "prefecture": "大分県",
    "lat": 33.500769,
    "lng": 131.730688,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "武蔵町の港。内向きからアジやキスを狙う候補で、波止の広さだけで安全を判断せず船と波を確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitamusasikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.500769/131.730688/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-ooitanayakou",
    "name": "納屋港",
    "prefecture": "大分県",
    "lat": 33.407173,
    "lng": 131.63415,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "スズキ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "八坂川河口側の納屋港。周囲が浅いため潮位を見て、キスやクロダイ、スズキを狙う向きを選ぶ。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitanayakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.407173/131.63415/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-ooitakanukikou",
    "name": "加貫港",
    "prefecture": "大分県",
    "lat": 33.376233,
    "lng": 131.639428,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "杵築市の加貫港。外側のテトラで無理をせず、港内のアジをサビキで探る候補にする。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakanukikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.376233/131.639428/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-ooitasumiyosihakuti",
    "name": "大分港・住吉泊地",
    "prefecture": "大分県",
    "lat": 33.250532,
    "lng": 131.602306,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "大分港住吉泊地。新しい波止側でメバルやクロダイの情報があり、テトラだけの赤灯側とは足場を分けて考える。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitasumiyosihakuti.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.250532/131.602306/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-ooitakouzakigyokou",
    "name": "神崎漁港",
    "prefecture": "大分県",
    "lat": 33.243928,
    "lng": 131.787701,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "カマス",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "佐賀関半島の神崎漁港。港内岸壁でアジやクロダイを探る候補とし、段差を降りる必要がある外波止へ無理に進まない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakouzakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.243928/131.787701/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-ooitakanayamakou",
    "name": "金山港",
    "prefecture": "大分県",
    "lat": 33.249347,
    "lng": 131.872137,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "カマス",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "佐賀関の金山港。港内のアジとカマス、クロダイが候補で、温排水の流れや船の出入りを避けて仕掛けを入れる。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakanayamakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.249347/131.872137/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-kumamotosinnkawagyokou",
    "name": "新川漁港",
    "prefecture": "熊本県",
    "lat": 32.904506,
    "lng": 130.47786,
    "fish": [
      "クロダイ",
      "スズキ",
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "行末川河口の小港。外側の波返しを越えず、内向きのハゼや河口のスズキを探る候補にする。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotosinnkawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.904506/130.47786/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotosioyagyokou",
    "name": "塩屋漁港",
    "prefecture": "熊本県",
    "lat": 32.818837,
    "lng": 130.593474,
    "fish": [
      "クロダイ",
      "コウイカ",
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "河内地区の塩屋漁港。セイゴやハゼの情報があり、有明海の大きな潮位差を見ながら釣り座を選ぶ。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotosioyagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.818837/130.593474/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamoto4banngyokou",
    "name": "４番漁港",
    "prefecture": "熊本県",
    "lat": 32.754221,
    "lng": 130.604889,
    "fish": [
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "沖新町の４番漁港。防風フェンスと係留船で釣り座が限られるため、先端の利用状況を確認しハゼなどを探る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamoto4banngyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.754221/130.604889/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotokooriuragyokou",
    "name": "郡浦漁港",
    "prefecture": "熊本県",
    "lat": 32.619732,
    "lng": 130.530775,
    "fish": [
      "クロダイ"
    ],
    "methodSlugs": [
      "uki"
    ],
    "note": "宇土半島の八代海側にある郡浦漁港。コノシロやクロダイ、キビレを狙う候補で、潮位の変化を見て投入する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotokooriuragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.619732/130.530775/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotonanatuwarigyokou",
    "name": "七つ割漁港",
    "prefecture": "熊本県",
    "lat": 32.591226,
    "lng": 130.396085,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "大矢野島の七つ割漁港。砂底のキスとクロダイが候補で、波止直前に車を置こうとせず正規の駐車場所から歩く。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotonanatuwarigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.591226/130.396085/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotoebitokou",
    "name": "江樋戸港",
    "prefecture": "熊本県",
    "lat": 32.582023,
    "lng": 130.415161,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "湯島便が発着する江樋戸港。船の発着を避け、砂底のキスや港内のアジを探る候補にする。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotoebitokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.582023/130.415161/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotoyanagikou",
    "name": "柳港",
    "prefecture": "熊本県",
    "lat": 32.550322,
    "lng": 130.439773,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "コウイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "大矢野島の柳港。砂底が広がる浅い港で、キスやサヨリを狙う向きと潮位を合わせて考える。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotoyanagikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.550322/130.439773/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotozouzougyokou",
    "name": "蔵々漁港",
    "prefecture": "熊本県",
    "lat": 32.576436,
    "lng": 130.482345,
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
    "note": "維和島の蔵々漁港。クロダイやキスの情報があり、高い波返しの上へ無理に上がらず内側から確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotozouzougyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.576436/130.482345/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotosujigyokou",
    "name": "須子漁港",
    "prefecture": "熊本県",
    "lat": 32.517977,
    "lng": 130.34066,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "コウイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "有明町の須子漁港。秋のサヨリやキスが候補で、波返しの高さと係留索を見て投入方向を選ぶ。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotosujigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.517977/130.34066/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotosimagogyokou",
    "name": "島子漁港",
    "prefecture": "熊本県",
    "lat": 32.476225,
    "lng": 130.254507,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "有明町の島子漁港。キス釣りの情報がある小港。集落内の狭い進入路と作業車の通行に配慮する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotosimagogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.476225/130.254507/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotohigiregyokou",
    "name": "干切漁港",
    "prefecture": "熊本県",
    "lat": 32.514883,
    "lng": 130.457432,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "松島町阿村の干切漁港。クロダイやキスを探る候補で、幅のある波止でも荷揚げの動線を空けて釣る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotohigiregyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.514883/130.457432/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotomutagyokou",
    "name": "牟田漁港",
    "prefecture": "熊本県",
    "lat": 32.47246,
    "lng": 130.437305,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "スズキ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "姫戸町の牟田漁港。コノシロやクロダイ、スズキの情報があり、長い波止では先客の投入方向と回収経路を確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotomutagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.47246/130.437305/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotohimedokou",
    "name": "姫戸港（小島公園）",
    "prefecture": "熊本県",
    "lat": 32.440521,
    "lng": 130.414431,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "コウイカ",
      "スズキ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "小島公園に接する姫戸港。公園そのものと波止を区別し、頭上の電線へ竿や仕掛けを近づけない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "頭上の電線に竿や仕掛けを近づけない。振りかぶれる空間がない区画では釣りをしない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotohimedokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.440521/130.414431/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotofutamadokou",
    "name": "二間戸港",
    "prefecture": "熊本県",
    "lat": 32.42145,
    "lng": 130.40411,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "コウイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "姫戸町の二間戸港。小さな波止と東側の護岸でキス・メバルなどの情報があり、足元から届く範囲を順に探る。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotofutamadokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.42145/130.40411/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotokotidomarikou",
    "name": "東風留港",
    "prefecture": "熊本県",
    "lat": 32.399983,
    "lng": 130.40102,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "コウイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "龍ヶ岳町高戸の港。赤灯側の内向きでアジやカワハギを探る候補で、外側の足場とは分けて確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotokotidomarikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.399983/130.40102/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotosimookegawagyokou",
    "name": "下桶川漁港",
    "prefecture": "熊本県",
    "lat": 32.379182,
    "lng": 130.419817,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "コウイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "樋島の下桶川漁港。南側は防風フェンスで外向きが限られるため、港内側でアジやキスを探る候補にする。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotosimookegawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.379182/130.419817/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kumamotokoyakawatikou",
    "name": "小屋河内港",
    "prefecture": "熊本県",
    "lat": 32.392899,
    "lng": 130.389068,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "コウイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "龍ヶ岳町の小屋河内港。港内のアジやメバルを狙う候補で、白灯側の外側テトラと係留索に注意する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。",
      "港湾・漁港と周囲30mでは土砂まき餌を使用しない。集魚・探索目的の光を使う遊漁も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotokoyakawatikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.392899/130.389068/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁・港利用のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "port-kagosimanagokou",
    "name": "名護港",
    "prefecture": "鹿児島県",
    "lat": 32.123926,
    "lng": 130.329802,
    "fish": [
      "マアジ",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "米ノ津川河口側の名護港。港内のアジ・コノシロと河口のスズキを狙い分け、狭い通路を塞がない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimanagokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.123926/130.329802/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimahatigoukou",
    "name": "八郷港",
    "prefecture": "鹿児島県",
    "lat": 32.124363,
    "lng": 130.215776,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "スズキ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "阿久根市脇本の小港。キスやクロダイ、アオリイカが候補で、幹線道路から港へ入る道を先に確かめる。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimahatigoukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.124363/130.215776/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimasagatakou",
    "name": "佐潟港",
    "prefecture": "鹿児島県",
    "lat": 31.994119,
    "lng": 130.186787,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "阿久根市西目の佐潟港。高い波返しの外側へ出ず、港内側でアジやアオリイカを探る候補にする。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimasagatakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/31.994119/130.186787/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimatakanokutikou",
    "name": "高之口港",
    "prefecture": "鹿児島県",
    "lat": 31.990097,
    "lng": 130.197859,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "スズキ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "阿久根市西目の高之口港。港内側のアジやキスと岩場の釣りを区別し、岸壁から安全に戻れる範囲を選ぶ。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimatakanokutikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/31.990097/130.197859/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimausinohamagyokou",
    "name": "牛ノ浜漁港",
    "prefecture": "鹿児島県",
    "lat": 31.975773,
    "lng": 130.204146,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "阿久根の牛ノ浜漁港。浅い港内でアジやアオリイカを探る候補。外側の大きなテトラや作業車の駐車場所を避ける。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimausinohamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/31.975773/130.204146/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimasiomigyokou",
    "name": "汐見漁港",
    "prefecture": "鹿児島県",
    "lat": 32.107879,
    "lng": 130.13973,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "長島町の汐見川河口にある港。砂底のキスや港内のアジを中心に考え、外側の大型テトラへは進まない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimasiomigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.107879/130.13973/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimaholtupouzakikou",
    "name": "北方崎港",
    "prefecture": "鹿児島県",
    "lat": 32.209261,
    "lng": 130.110784,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "長島町平尾の入り江にある港。南側の岸壁でアジやアオリイカの情報があり、係留船に仕掛けを近づけない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimaholtupouzakikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.209261/130.110784/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimausuigyokou",
    "name": "薄井漁港",
    "prefecture": "鹿児島県",
    "lat": 32.227705,
    "lng": 130.176294,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "スズキ",
      "カワハギ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "長島・竹島・伊唐島の水道に近い薄井漁港。流れが速く、アジやカワハギを狙うときも仕掛けを流しすぎない。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimausuigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.227705/130.176294/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimakannnonnkou",
    "name": "観音港",
    "prefecture": "鹿児島県",
    "lat": 32.148365,
    "lng": 130.201185,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "長島町川床の観音港。アジやアオリイカの情報があるが、東側の波止では電線の位置を確認してから竿を出す。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "頭上の電線に竿や仕掛けを近づけない。振りかぶれる空間がない区画では釣りをしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimakannnonnkou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.148365/130.201185/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimakojimakou",
    "name": "小島港",
    "prefecture": "鹿児島県",
    "lat": 32.117366,
    "lng": 130.175886,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "黒之瀬戸に近い小島港。港内のアジやクロダイを探る候補で、岩場側と岸壁側の足場を区別する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimakojimakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.117366/130.175886/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimakarahamagyokou",
    "name": "唐浜漁港",
    "prefecture": "鹿児島県",
    "lat": 31.868173,
    "lng": 130.203974,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "唐浜海岸南端の港。高い外波止の青物狙いとは分け、内向きでアジやキスを探る候補にする。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimakarahamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/31.868173/130.203974/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimatutikawagyokou",
    "name": "土川漁港",
    "prefecture": "鹿児島県",
    "lat": 31.777814,
    "lng": 130.180113,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "スズキ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "市街地から離れた土川漁港。アオリイカやアジの情報があり、集落と港の作業を妨げない場所を確認する。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimatutikawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/31.777814/130.180113/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimahasimagyokou",
    "name": "羽島漁港",
    "prefecture": "鹿児島県",
    "lat": 31.753222,
    "lng": 130.198138,
    "fish": [
      "マアジ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging"
    ],
    "note": "いちき串木野の羽島漁港。高い白灯側の大物釣りとは分け、赤灯側のアジやアオリイカを探る候補にする。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimahasimagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/31.753222/130.198138/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-aomorikozawagyokou",
    "name": "小沢漁港",
    "prefecture": "青森県",
    "lat": 41.165765,
    "lng": 140.873523,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "小沢の小港ではチカと根魚、カレイが候補。港の余地は漁具置き場として使われるため、車を置ける場所がなければ無理に入らないでください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorikozawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.165765/140.873523/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：遊漁・港利用のルール",
        "url": "https://www.pref.aomori.lg.jp/soshiki/nourin/sshinko/suisan_yugyo_umituri.html"
      }
    ]
  },
  {
    "slug": "port-aomorikakizakigyokou",
    "name": "蛎崎漁港",
    "prefecture": "青森県",
    "lat": 41.166443,
    "lng": 140.899079,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "蛎崎の西側波止と港内が候補です。チカを狙うサビキと、底を探るアイナメ・カレイ狙いで投入方向を分け、航路を空けます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorikakizakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.166443/140.899079/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：遊漁・港利用のルール",
        "url": "https://www.pref.aomori.lg.jp/soshiki/nourin/sshinko/suisan_yugyo_umituri.html"
      }
    ]
  },
  {
    "slug": "port-aomorisumitigaigyokou",
    "name": "角違漁港",
    "prefecture": "青森県",
    "lat": 41.209074,
    "lng": 141.092112,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "角違の西側波止ではチカや根魚が紹介されています。漁具の周りを避けて短い仕掛けから探り、荷揚げ中は釣り座を譲ってください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorisumitigaigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.209074/141.092112/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：遊漁・港利用のルール",
        "url": "https://www.pref.aomori.lg.jp/soshiki/nourin/sshinko/suisan_yugyo_umituri.html"
      }
    ]
  },
  {
    "slug": "port-aomorihamaokunaigyokou",
    "name": "浜奥内漁港",
    "prefecture": "青森県",
    "lat": 41.20076,
    "lng": 141.261477,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "浜奥内の港内ではチカ、底付近ではアイナメ・カレイが候補。波止先端は海面まで高さがあるため、取り込み方法を先に確認します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorihamaokunaigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.20076/141.261477/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：遊漁・港利用のルール",
        "url": "https://www.pref.aomori.lg.jp/soshiki/nourin/sshinko/suisan_yugyo_umituri.html"
      }
    ]
  },
  {
    "slug": "port-aomorikaribasawagyokou",
    "name": "狩場沢漁港",
    "prefecture": "青森県",
    "lat": 40.896371,
    "lng": 141.079516,
    "fish": [
      "カレイ",
      "メバル",
      "ヤリイカ",
      "アイナメ",
      "ソイ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "狩場沢は長い波止を持つ港で、チカ・根魚・ヤリイカが候補。消波ブロックがない区間でも海側に柵があるとは限らず、足元の確認が必要です。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/aomorikaribasawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.896371/141.079516/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：遊漁・港利用のルール",
        "url": "https://www.pref.aomori.lg.jp/soshiki/nourin/sshinko/suisan_yugyo_umituri.html"
      }
    ]
  },
  {
    "slug": "port-aomorihigasitazawagyokou",
    "name": "東田沢漁港",
    "prefecture": "青森県",
    "lat": 40.997796,
    "lng": 140.915043,
    "fish": [
      "カレイ",
      "メバル",
      "クロダイ",
      "ヤリイカ",
      "アイナメ",
      "ソイ"
    ],
    "methodSlugs": [
      "choinage",
      "uki",
      "rockfish-lure"
    ],
    "note": "夏泊半島の東田沢ではカレイ・根魚・ヤリイカが候補。波止の付け根に駐車余地が乏しいため、釣り座へ向かう前にアクセスを確認してください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/aomorihigasitazawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.997796/140.915043/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：遊漁・港利用のルール",
        "url": "https://www.pref.aomori.lg.jp/soshiki/nourin/sshinko/suisan_yugyo_umituri.html"
      }
    ]
  },
  {
    "slug": "port-aomoriinougyokou",
    "name": "稲生漁港",
    "prefecture": "青森県",
    "lat": 40.983429,
    "lng": 140.868781,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "クロダイ",
      "ヤリイカ",
      "サヨリ",
      "アイナメ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "稲生の赤灯側ではチカや根魚、ヤリイカの岸釣りが紹介されています。先端へ人が集まる場合は詰め込まず、港内の作業を優先します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/aomoriinougyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.983429/140.868781/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：遊漁・港利用のルール",
        "url": "https://www.pref.aomori.lg.jp/soshiki/nourin/sshinko/suisan_yugyo_umituri.html"
      }
    ]
  },
  {
    "slug": "port-aomoriuratagyokou",
    "name": "浦田漁港",
    "prefecture": "青森県",
    "lat": 40.962708,
    "lng": 140.860326,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "クロダイ",
      "ヤリイカ",
      "サヨリ",
      "アイナメ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "浦田は港内の埠頭と外側波止で足場が異なります。チカのサビキなら港内から探し、外側の高い波返しへ無理に上がらないでください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/aomoriuratagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.962708/140.860326/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：遊漁・港利用のルール",
        "url": "https://www.pref.aomori.lg.jp/soshiki/nourin/sshinko/suisan_yugyo_umituri.html"
      }
    ]
  },
  {
    "slug": "port-aomorimouragyokou",
    "name": "茂浦漁港",
    "prefecture": "青森県",
    "lat": 40.944542,
    "lng": 140.870819,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "クロダイ",
      "サヨリ",
      "アイナメ",
      "ソイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "茂浦ではチカや根魚が候補ですが、南北の波止の外側は消波ブロック帯です。先端も狭いため、港内側で安全に立てる場所を選びます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/aomorimouragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.944542/140.870819/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：遊漁・港利用のルール",
        "url": "https://www.pref.aomori.lg.jp/soshiki/nourin/sshinko/suisan_yugyo_umituri.html"
      }
    ]
  },
  {
    "slug": "port-aomorinamiutigyokou",
    "name": "浪打漁港",
    "prefecture": "青森県",
    "lat": 40.924441,
    "lng": 140.867901,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "クロダイ",
      "サヨリ",
      "アイナメ",
      "ソイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "浪打は港へ入る道が分かりにくい小港。明るいうちに帰路を確認し、チカの回遊やカレイの底釣りを港の作業と干渉しない範囲で探ります。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/aomorinamiutigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.924441/140.867901/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：遊漁・港利用のルール",
        "url": "https://www.pref.aomori.lg.jp/soshiki/nourin/sshinko/suisan_yugyo_umituri.html"
      }
    ]
  },
  {
    "slug": "port-yamaguchinisiuragyokou",
    "name": "西浦漁港",
    "prefecture": "山口県",
    "lat": 34.010906,
    "lng": 131.51051,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "キジハタ",
      "クロダイ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "西浦は波止と砂浜が接する港で、アジ・キス・根魚が候補。砂地を探る投げ釣りと波止際の釣りを区別し、消波ブロックへの移動は避けます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchinisiuragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.010906/131.51051/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-yamaguchioomigyokou",
    "name": "大海漁港",
    "prefecture": "山口県",
    "lat": 34.032692,
    "lng": 131.467016,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "マハゼ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "大海は南北の波止と港内岸壁でキス・ハゼ・アジを狙う候補。直売所への来訪や漁業作業と釣りの動線が重なるため、通路を空けます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchioomigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.032692/131.467016/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-yamaguchitokonamigyokou",
    "name": "床波漁港",
    "prefecture": "山口県",
    "lat": 33.949715,
    "lng": 131.307521,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "コウイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "床波では東側の石積み波止と赤灯側の内向きが紹介されています。アジ・キス・コウイカなど、狙う魚に合わせて足元と底の状態を確かめます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchitokonamigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.949715/131.307521/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-ehimesaijyoukou",
    "name": "西条港",
    "prefecture": "愛媛県",
    "lat": 33.927889,
    "lng": 133.157473,
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "スズキ",
      "サヨリ",
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "西条港は本陣川を挟んだ岸壁でハゼ・チヌ・スズキが候補。河口の流れや排水で仕掛けが動くため、係留船へ流れる前に回収してください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/ehimesaijyoukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.927889/133.157473/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-ehimesakuraigyokou",
    "name": "桜井漁港",
    "prefecture": "愛媛県",
    "lat": 34.023801,
    "lng": 133.045077,
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "タチウオ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "桜井は砂浜に囲まれた港で、キス・カレイの底釣りやヒラメが候補。波止からの投げ方向が海岸利用者と重ならないことを確認します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimesakuraigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.023801/133.045077/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-ehimetomitasinnkou",
    "name": "富田新港",
    "prefecture": "愛媛県",
    "lat": 34.051628,
    "lng": 133.029757,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "キジハタ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "富田新港は岸壁と親水防波堤でアジ・キス・カワハギなどが候補。手すりの高さは区間で異なるため、子どもから目を離さず救命具を着用します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimetomitasinnkou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.051628/133.029757/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-ehimenamikatakou",
    "name": "波方港",
    "prefecture": "愛媛県",
    "lat": 34.121451,
    "lng": 132.956607,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "波方では波止と東側岸壁でチヌ・アオリイカが候補。潮が動く日は仕掛けを流しすぎず、船道に入る前に回収する釣りが基本です。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimenamikatakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.121451/132.956607/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-ehimekameokagyokou",
    "name": "亀岡漁港",
    "prefecture": "愛媛県",
    "lat": 34.056571,
    "lng": 132.869253,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "亀岡はメバル・チヌ・アオリイカが候補ですが、波止の幅と頭上の電線に注意が必要です。竿を振れる空間がなければ釣りを控えます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。",
      "頭上の電線に竿や仕掛けを近づけない。振りかぶれる空間がない区画では釣りをしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimekameokagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.056571/132.869253/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-ehimetanosirigyokou",
    "name": "田之尻漁港",
    "prefecture": "愛媛県",
    "lat": 34.02204,
    "lng": 132.816682,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "田之尻の波止は先端以外が消波ブロックに囲まれています。入口の車止めを越えて進入せず、徒歩の利用範囲も現地で確認してください。",
    "caution": [
      "田之尻の波止は先端以外が消波ブロックに囲まれています。入口の車止めを越えて進入せず、徒歩の利用範囲も現地で確認してください。",
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimetanosirigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.02204/132.816682/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-ehimedoteutikou",
    "name": "土手内港",
    "prefecture": "愛媛県",
    "lat": 33.970787,
    "lng": 132.770698,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "サヨリ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "土手内は鹿島との水道に面し、アジ・チヌ・アオリイカが候補。流れと船の往来を見ながら、仕掛けを短い範囲で管理します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimedoteutikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.970787/132.770698/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-ehimeimadukou",
    "name": "今出港",
    "prefecture": "愛媛県",
    "lat": 33.813777,
    "lng": 132.685704,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ",
      "コウイカ",
      "サヨリ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "今出は木材団地側の波止と港内岸壁が岸釣りの候補。アジ・サヨリ・チヌを狙う場合も、荷役区画と係留索を避けて釣り座を選びます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimeimadukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.813777/132.685704/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-ehimemorigyokou",
    "name": "森漁港",
    "prefecture": "愛媛県",
    "lat": 33.744558,
    "lng": 132.678087,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "森漁港は小波止の内向きでアジ・キス、外側で回遊魚が候補。西側の消波ブロック帯と港内の平坦な釣り座を区別して選んでください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimemorigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.744558/132.678087/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-ehimekitagyokou",
    "name": "喜多漁港",
    "prefecture": "愛媛県",
    "lat": 33.634399,
    "lng": 132.525415,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "喜多は小波止とL字波止を持つ港で、アジ・メバル・アオリイカが候補。夜間に閉まる進入路があるため、利用時間と帰路を先に確認します。",
    "caution": [
      "喜多は小波止とL字波止を持つ港で、アジ・メバル・アオリイカが候補。夜間に閉まる進入路があるため、利用時間と帰路を先に確認します。",
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimekitagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.634399/132.525415/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-kochikubotugyokou",
    "name": "窪津漁港",
    "prefecture": "高知県",
    "lat": 32.786607,
    "lng": 132.997227,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "窪津では外側の高い波返しを避け、港内の小波止や岸壁が候補です。アジ・カマスの回遊とアオリイカを、係留船から離れた範囲で探ります。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochikubotugyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.786607/132.997227/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-kochiiburigyokou",
    "name": "以布利漁港",
    "prefecture": "高知県",
    "lat": 32.799649,
    "lng": 132.965341,
    "fish": [
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "以布利は波止と岸壁でチヌ・メジナ・アオリイカが候補。エギを沈める際は船のロープを先に確認し、底を引きずり続けないようにします。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochiiburigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.799649/132.965341/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-kochihatuzakigyokou",
    "name": "初崎漁港",
    "prefecture": "高知県",
    "lat": 32.932714,
    "lng": 132.987013,
    "fish": [
      "クロダイ",
      "スズキ",
      "サヨリ",
      "メッキ"
    ],
    "methodSlugs": [
      "uki"
    ],
    "note": "初崎は四万十川河口の南岸に位置する小港。サヨリ・チヌ・スズキが候補ですが、増水時の流れや高い波返しに注意してください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochihatuzakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.932714/132.987013/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-kochiidagyokou",
    "name": "伊田漁港",
    "prefecture": "高知県",
    "lat": 33.034625,
    "lng": 133.075333,
    "fish": [
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "伊田ではチヌ・メジナ・アオリイカが候補。白灯側の周辺は広くないため、漁業者の通行と荷揚げの余地を残して竿を出します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochiidagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.034625/133.075333/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-kochisiwagyokou",
    "name": "志和漁港",
    "prefecture": "高知県",
    "lat": 33.23018,
    "lng": 133.250535,
    "fish": [
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "志和は市街地から離れた港で、東側波止のメジナ・アオリイカが候補。帰路が暗くなる前に道路と足場を確認しておきます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochisiwagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.23018/133.250535/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-kochiyaigagyokou",
    "name": "矢井賀漁港",
    "prefecture": "高知県",
    "lat": 33.242026,
    "lng": 133.247616,
    "fish": [
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "カマス",
      "メッキ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "矢井賀では北側波止のチヌ・カマス・アオリイカが候補。周囲は消波ブロックがあるため、港内側から安全な釣り座を確認してください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochiyaigagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.242026/133.247616/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-kochinakanosimagyokou",
    "name": "中ノ島漁港",
    "prefecture": "高知県",
    "lat": 33.358492,
    "lng": 133.308921,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "イワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "中ノ島は入り江の島側にある漁港で、西側波止からアジ・チヌ・アオリイカが候補。養殖施設や係留設備へ仕掛けを近づけないようにします。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochinakanosimagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.358492/133.308921/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-kochiusafukusimakou",
    "name": "宇佐福島港",
    "prefecture": "高知県",
    "lat": 33.442078,
    "lng": 133.438482,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "スズキ",
      "サバ",
      "イワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "宇佐福島は浦ノ内湾の入口、宇佐大橋北側の港です。内向きのサビキと外向きの釣りを分け、速い潮に仕掛けを流されすぎないようにします。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochiusafukusimakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.442078/133.438482/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-kochiusagyokou",
    "name": "宇佐漁港",
    "prefecture": "高知県",
    "lat": 33.451048,
    "lng": 133.446915,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "サバ",
      "イワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "宇佐漁港では東側波止や港内でアジ・キス・アオリイカが候補。公園前だけでなく漁港としての作業区域があるため、利用できる区画を確認します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochiusagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.451048/133.446915/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-kochikifunegyokou",
    "name": "貴船漁港",
    "prefecture": "高知県",
    "lat": 33.501503,
    "lng": 133.566113,
    "fish": [
      "クロダイ",
      "サヨリ"
    ],
    "methodSlugs": [
      "uki"
    ],
    "note": "貴船は浦戸大橋北側の小港で、サヨリ・チヌが候補。波止は小さく釣り座が限られるため、先行者と投入方向を分けて利用します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochikifunegyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.501503/133.566113/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-nagasakiainourakou",
    "name": "相浦港",
    "prefecture": "長崎県",
    "lat": 33.193862,
    "lng": 129.654357,
    "fish": [
      "マアジ",
      "クロダイ",
      "コウイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "相浦港の岸壁ではアジ・チヌ・コウイカが候補。荷役や船の発着が優先される港のため、使える岸壁と通路を現地で確認してください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakiainourakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.193862/129.654357/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-nagasakihigasihamakou",
    "name": "東浜港",
    "prefecture": "長崎県",
    "lat": 33.133383,
    "lng": 129.742484,
    "fish": [
      "マアジ",
      "クロダイ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "東浜港では波止からアジ・チヌ・コウイカが候補。釣り人用の駐車余地が乏しいため、路上や作業場所への駐車を前提にしないでください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakihigasihamakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.133383/129.742484/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-nagasakiyorifunekou",
    "name": "寄船港",
    "prefecture": "長崎県",
    "lat": 33.097312,
    "lng": 129.682896,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "マダイ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "寄船は佐世保湾の入口に近い港で、チヌ・メジナ・アオリイカが候補。水深と流れを確かめ、岸際だけでなく回収経路も確認して投入します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakiyorifunekou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.097312/129.682896/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-nagasakioosimagyokou",
    "name": "大島漁港",
    "prefecture": "長崎県",
    "lat": 33.05736,
    "lng": 129.607301,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "大島漁港ではアジ・メバル・アオリイカが候補。エギングとサビキの投入範囲が重ならないよう、波止の周囲と作業中の場所を確認します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakioosimagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.05736/129.607301/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-nagasakiootaogyokou",
    "name": "太田尾漁港",
    "prefecture": "長崎県",
    "lat": 33.039536,
    "lng": 129.590435,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "スズキ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "太田尾は内側波止と外側波止で足場が異なります。アジ・メバル・アオリイカを狙う場合も、外側の消波ブロックを避けて釣り座を選びます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakiootaogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.039536/129.590435/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-nagasakisakitokou",
    "name": "崎戸港",
    "prefecture": "長崎県",
    "lat": 33.020341,
    "lng": 129.566574,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "スズキ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "崎戸港は西側岸壁と波止でチヌ・スズキ・アオリイカが候補。入り江の奥と出入口では潮の動きが違うため、仕掛けを短い範囲から探ります。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakisakitokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.020341/129.566574/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-tibamitatekou",
    "name": "見立港",
    "prefecture": "千葉県",
    "lat": 35.427316,
    "lng": 139.903185,
    "fish": [
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "見立橋を挟む護岸は夏から秋のハゼ釣り候補。橋の周辺を狙う際も道路へ竿を出さず、船の通り道を横切る投入を避けます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibamitatekou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.427316/139.903185/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "port-tibatakeokakou",
    "name": "竹岡港",
    "prefecture": "千葉県",
    "lat": 35.208985,
    "lng": 139.844992,
    "fish": [
      "シロギス",
      "クロダイ",
      "スズキ",
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "竹岡は浅い港と白狐川河口が接し、キス・ハゼが候補。駐車余地が限られるため、車を止められる場所の確認を先に行ってください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibatakeokakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.208985/139.844992/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-tibaookateibou",
    "name": "大賀堤防",
    "prefecture": "千葉県",
    "lat": 34.981839,
    "lng": 139.823577,
    "fish": [
      "シロギス",
      "クロダイ",
      "スズキ",
      "サヨリ",
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "大賀海岸の小さな波止はキス・ハゼ・サヨリが候補。進入路が狭いため、明るいうちに道を確認して周辺住民の通行を妨げないようにします。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaookateibou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.981839/139.823577/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "port-tibakennbututeibou",
    "name": "見物堤防",
    "prefecture": "千葉県",
    "lat": 34.973909,
    "lng": 139.793386,
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
      "eging"
    ],
    "note": "見物のL字波止ではアジ・キス・アオリイカが候補。海岸側の風と波を確認し、混雑時は隣の仕掛けと回収方向を分けてください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibakennbututeibou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.973909/139.793386/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "port-tibabanndateibou",
    "name": "坂田堤防",
    "prefecture": "千葉県",
    "lat": 34.976916,
    "lng": 139.77416,
    "fish": [
      "シロギス",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "坂田の短い波止ではキス・クロダイ・アオリイカが候補。釣り座と駐車余地が少ないため、人数が多い場合は別の候補も用意します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibabanndateibou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.976916/139.77416/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "port-sizuokakudurakou",
    "name": "久連港",
    "prefecture": "静岡県",
    "lat": 35.021439,
    "lng": 138.869505,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "久連は小さな港で、アジ・キス・アオリイカが候補。有料駐車場の利用時間を確認し、閉場時刻に余裕を持って片付けます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "駐車料金・協力金・受付時間は現地の最新表示を確認。料金の支払いは港全体への立入許可を意味しない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/sizuokakudurakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.021439/138.869505/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-sizuokaitakou",
    "name": "井田港",
    "prefecture": "静岡県",
    "lat": 35.000437,
    "lng": 138.778739,
    "fish": [
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "井田は短い突堤からメジナやアオリイカ、回遊魚を狙う候補。先端に入れる人数が少ないため、場所がなければ無理に割り込まないでください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "駐車料金・協力金・受付時間は現地の最新表示を確認。料金の支払いは港全体への立入許可を意味しない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/sizuokaitakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.000437/138.778739/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-yoltukaitisikusu",
    "name": "楠漁港",
    "prefecture": "三重県",
    "lat": 34.904516,
    "lng": 136.645632,
    "fish": [
      "シロギス",
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "楠はキスの投げ釣りと港内のハゼが候補。先端の釣り座が少ないため、投入方向を確保できる人数で利用します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba2/yoltukaitisikusu.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.904516/136.645632/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-wakayamakasiwagyokou",
    "name": "柏漁港",
    "prefecture": "和歌山県",
    "lat": 33.948362,
    "lng": 135.09495,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "柏はチヌの紀州釣りやアオリイカ狙いが紹介される港。駐車の受付・料金を確認し、波止の先行者と釣り方が干渉しない場所を選びます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamakasiwagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.948362/135.09495/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamaminamisioya",
    "name": "南塩屋漁港",
    "prefecture": "和歌山県",
    "lat": 33.862861,
    "lng": 135.159323,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "南塩屋は日高港の南側にある港で、アジ・サヨリ・根魚が候補。長い赤灯側波止と港内岸壁の作業状況を見て釣り座を選びます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamaminamisioya.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.862861/135.159323/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamahanetagyokou",
    "name": "埴田漁港（南部漁港）",
    "prefecture": "和歌山県",
    "lat": 33.759259,
    "lng": 135.324912,
    "fish": [
      "シロギス",
      "クロダイ",
      "メジナ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "埴田は南部海岸に接し、波止内側でキス・チヌ・メジナが候補。砂浜へ向けて投げる際は海岸の利用者を必ず確認します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamahanetagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.759259/135.324912/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-wakayamautinouragyokou",
    "name": "内の浦漁港",
    "prefecture": "和歌山県",
    "lat": 33.696691,
    "lng": 135.387053,
    "fish": [
      "マアジ",
      "クロダイ",
      "サバ",
      "イワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "内の浦は湾内の岸壁でアジ・イワシのサビキ釣りが候補。静かな港内でも係留索が多いため、足元を確認してから仕掛けを下ろします。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamautinouragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.696691/135.387053/&base=std&ls=std&disp=1"
      },
      {
        "label": "和歌山県：遊漁・港利用のルール",
        "url": "https://www.pref.wakayama.lg.jp/prefg/071500/yuugyo/sensuiki/ru-ru.html"
      }
    ]
  },
  {
    "slug": "port-hirosimamiyanokutikou",
    "name": "鹿島・宮ノ口港",
    "prefecture": "広島県",
    "lat": 34.052908,
    "lng": 132.521832,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "鹿島の宮ノ口ではアジ・メバル・アオリイカが候補。西側波止の頭上電線とバス転回場に注意し、転回場には駐車しないでください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "頭上の電線に竿や仕掛けを近づけない。振りかぶれる空間がない区画では釣りをしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimamiyanokutikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.052908/132.521832/&base=std&ls=std&disp=1"
      },
      {
        "label": "広島県：遊漁・港利用のルール",
        "url": "https://www.pref.hiroshima.lg.jp/soshiki/88/1181277903054.html"
      }
    ]
  },
  {
    "slug": "port-ooitaimikou",
    "name": "伊美港",
    "prefecture": "大分県",
    "lat": 33.687157,
    "lng": 131.600268,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "伊美は姫島航路のフェリー港で、アジ・キス・カレイが候補。乗船客・車両・航路を最優先とし、駐車と赤灯側の利用条件を確認します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。",
      "駐車料金・協力金・受付時間は現地の最新表示を確認。料金の支払いは港全体への立入許可を意味しない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitaimikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.687157/131.600268/&base=std&ls=std&disp=1"
      },
      {
        "label": "大分県：遊漁・港利用のルール",
        "url": "https://www.pref.oita.jp/soshiki/16600/fishing-at-a-prefecturally-managed-fishing-port.html"
      }
    ]
  },
  {
    "slug": "port-kagosimakarakumakou",
    "name": "唐隈港",
    "prefecture": "鹿児島県",
    "lat": 32.117947,
    "lng": 130.121577,
    "fish": [
      "マアジ",
      "アオリイカ",
      "スズキ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "唐隈は港内の小アジと、外側のメジナ・アオリイカが候補。西側は高い波返しと大型消波ブロックがあるため、港内側を優先して確認します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimakarakumakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.117947/130.121577/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimajyoukawautikou",
    "name": "城川内港",
    "prefecture": "鹿児島県",
    "lat": 32.14524,
    "lng": 130.114882,
    "fish": [
      "マアジ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "城川内では港内の小アジが候補。外側のメジナ・アオリイカ狙いは消波ブロックの足場となるため、気軽な釣り座として扱わないでください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimajyoukawautikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.14524/130.114882/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-kagosimanisikatagyokou",
    "name": "西方漁港",
    "prefecture": "鹿児島県",
    "lat": 31.912791,
    "lng": 130.222213,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "西方は砂浜に隣接する港で、港内の小アジやキスが候補。外側は大型消波ブロックと梯子のある区間なので、港内岸壁から釣り座を探します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimanisikatagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/31.912791/130.222213/&base=std&ls=std&disp=1"
      },
      {
        "label": "鹿児島県：遊漁・港利用のルール",
        "url": "https://www.pref.kagoshima.jp/af05/suisan/gyochou/kisoku.html"
      }
    ]
  },
  {
    "slug": "port-aomoritakodagyokou",
    "name": "蛸田漁港",
    "prefecture": "青森県",
    "lat": 41.132577,
    "lng": 140.790396,
    "fish": [
      "カレイ",
      "メバル",
      "ヤリイカ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "蛸田の小港ではチカ・アイナメ・カレイが候補。波返しの上へ上がる前に港内側の釣り座を確認し、漁業作業の余地を残します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomoritakodagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.132577/140.790396/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：遊漁・港利用のルール",
        "url": "https://www.pref.aomori.lg.jp/soshiki/nourin/sshinko/suisan_yugyo_umituri.html"
      }
    ]
  },
  {
    "slug": "port-aomorisimizugawagyokou",
    "name": "清水川漁港",
    "prefecture": "青森県",
    "lat": 40.921036,
    "lng": 141.031559,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "清水川はチカのサビキや根魚・カレイが候補。岸釣りと渡船で向かう沖堤防は別の利用です。港内の漁具や作業車の動線を避けてください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/aomorisimizugawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.921036/141.031559/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：遊漁・港利用のルール",
        "url": "https://www.pref.aomori.lg.jp/soshiki/nourin/sshinko/suisan_yugyo_umituri.html"
      }
    ]
  },
  {
    "slug": "port-kochiasizurikou",
    "name": "あしずり港",
    "prefecture": "高知県",
    "lat": 32.781015,
    "lng": 132.933261,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "カマス",
      "メッキ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "あしずり港は深い岸壁と外側波止でアジ・カマス・アオリイカが候補。大きな港でも荷役場所は釣り座ではないため、利用可能な岸壁を確認します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochiasizurikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.781015/132.933261/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-kochiirinogyokou",
    "name": "入野漁港",
    "prefecture": "高知県",
    "lat": 33.011794,
    "lng": 133.010724,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "スズキ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "入野は蛎瀬川河口に接する港で、アジ・チヌ・アオリイカが候補。波止は海面から高いため、取り込み道具と足場を確認してから始めます。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochiirinogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.011794/133.010724/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-kochikaminokaekou",
    "name": "上ノ加江港",
    "prefecture": "高知県",
    "lat": 33.274431,
    "lng": 133.246286,
    "fish": [
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "スズキ",
      "カマス",
      "メッキ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "上ノ加江は河口に接する港でカマス・チヌ・アオリイカが候補。外側波止の消波ブロックを避け、河口側も増水時には利用を控えてください。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochikaminokaekou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.274431/133.246286/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "port-nagasakimaetuyosigyokou",
    "name": "前津吉漁港",
    "prefecture": "長崎県",
    "lat": 33.209375,
    "lng": 129.452076,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "前津吉は港内岸壁でアジ・チヌ・アオリイカが候補。東側波止の外向きは消波ブロック、西側は防風フェンスがあるため、内向きの利用範囲を確認します。",
    "caution": [
      "立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。救命具を着用する。",
      "漁船・荷揚げ・漁具置場・通路を優先し、係留索や船の近くには仕掛けを入れない。",
      "消波ブロックや高い波返しに無理に上がらない。平坦な釣り座が確保できない場合や荒天時は利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakimaetuyosigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.209375/129.452076/&base=std&ls=std&disp=1"
      }
    ]
  }
];
export const portMapExpansion=createHarborEntries(ports);
