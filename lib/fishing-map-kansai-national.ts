import {createHarborEntries,type HarborRecord} from './shore-spot';
import type {FishingMapEntry} from './fishing-map-data';
// Independently described locations, checked against map shorelines on 2026-09-18.
// A fishing report is not permission to enter a working port. Unknown facilities stay unset.
const places:HarborRecord[]=[
  {
    "slug": "shore-aomoritatehanagyokou",
    "name": "館鼻漁港",
    "prefecture": "青森県",
    "lat": 40.528153,
    "lng": 141.529398,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "アイナメ",
      "クロソイ",
      "マサバ",
      "マイワシ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "八戸の館鼻漁港。回遊するアジ・サバ・チカと、底付近のアイナメ・カレイを狙い分ける岸釣りの候補。釣りより先に岸壁の作業状況を確認する。",
    "caution": [
      "朝市や荷揚げの利用を優先し、車を岸壁へ横付けできると決めつけない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba3/aomoritatehanagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.528153/141.529398/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "shore-aomorisiranukagyokou",
    "name": "白糠漁港",
    "prefecture": "青森県",
    "lat": 41.134937,
    "lng": 141.394451,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "アイナメ",
      "クロソイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "下北半島東側の白糠漁港。チカ・ウミタナゴの回遊と、アイナメ・ソイ・ドンコなどの底周りを探る釣りが候補になる。",
    "caution": [
      "沖側の高い波返しへ上がらず、内向きの平らな足場を利用する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba3/aomorisiranukagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.134937/141.394451/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "shore-aomorisyukunohegyokou",
    "name": "宿野辺漁港",
    "prefecture": "青森県",
    "lat": 41.174293,
    "lng": 140.933475,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "チカ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "むつ市の宿野辺にある小港。チカの群れを探す釣りと、アイナメ・ソイ・カレイを底で狙う釣りを、係留船の位置に合わせて選ぶ。",
    "caution": [
      "狭い港の作業余地を空け、駐車可否は現地の案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba3/aomorisyukunohegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.174293/140.933475/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "shore-aomorikawautigyokou",
    "name": "川内漁港",
    "prefecture": "青森県",
    "lat": 41.198112,
    "lng": 140.986261,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "アイナメ",
      "チカ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "川内港の岸壁。波止より手前の港内側でチカのサビキ、カレイやアイナメの底釣りを考えたい。係留索が張られた場所は投入先から外す。",
    "caution": [
      "沖向きのブロック帯へ移らず、ロープと漁具を避けて釣座を選ぶ。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba3/aomorikawautigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.198112/140.986261/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "shore-aomorikominatogyokou",
    "name": "小湊漁港",
    "prefecture": "青森県",
    "lat": 40.941932,
    "lng": 140.977507,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "マサバ",
      "マイワシ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "夏泊半島の小湊漁港。チカ・アジなどの回遊と、メバル・アイナメ・カレイの釣りが候補になる。岸壁ごとの水深と作業状況を見て釣り方を選ぶ。",
    "caution": [
      "桟橋跡を含め、現在の開放範囲と立入表示を確認してから入る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorikominatogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.941932/140.977507/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "shore-aomorihigasitakigyokou",
    "name": "東滝漁港",
    "prefecture": "青森県",
    "lat": 40.95835,
    "lng": 140.982356,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "マサバ",
      "マイワシ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "夏泊半島の東滝漁港。波止でアジ・チカや根魚を探れる候補だが、漁具の多い港なので先に通行・作業の場所を把握したい。",
    "caution": [
      "港内の空き地を駐車場と判断せず、漁具の周囲で竿を振らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorihigasitakigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.95835/140.982356/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "shore-aomoritutiyagyokou",
    "name": "土屋漁港",
    "prefecture": "青森県",
    "lat": 40.908632,
    "lng": 140.867579,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "アイナメ",
      "クロダイ",
      "サヨリ",
      "チカ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "平内町の土屋漁港。サヨリ・チカの回遊を見つける釣りと、カレイ・アイナメなどを底で探る釣りを選べる港。",
    "caution": [
      "船道へ仕掛けを放置せず、風で流される場合は短い距離から探る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoritutiyagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.908632/140.867579/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "shore-aomoriokutairahegyokou",
    "name": "奥平部漁港",
    "prefecture": "青森県",
    "lat": 41.222794,
    "lng": 140.576892,
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
    "note": "奥平部の岩礁沿いにある港。波止内側でメバル・アイナメなどを探り、潮の動きがあるときはウミタナゴやクロダイも候補になる。外向きのブロック帯より、回収経路を確保できる内側を選びたい。",
    "caution": [
      "先端の段差や梯子を釣り座への通常経路として使わず、港内の作業を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoriokutairahegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.222794/140.576892/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "shore-aomoriyositunekaihinnkouenn",
    "name": "義経海浜公園",
    "prefecture": "青森県",
    "lat": 41.202245,
    "lng": 140.430593,
    "primaryType": "pier",
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
    "note": "義経海浜公園の海に張り出す護岸・波止で、カレイの底釣りとアイナメ・ソイの探り釣りを組み立てられる。公園の散策路と釣り座が近いため、仕掛けは足元から短く入れる。",
    "caution": [
      "公園利用者の通行を妨げず、柵のある場所でも救命胴衣を着用する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoriyositunekaihinnkouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.202245/140.430593/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "shore-iwatekuwahatagyokou",
    "name": "桑畑漁港",
    "prefecture": "岩手県",
    "lat": 40.293259,
    "lng": 141.796739,
    "primaryType": "port",
    "fish": [
      "アイナメ",
      "クロソイ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "久慈市北部の岩礁に囲まれた小港。アイナメやソイを狙うなら港内側の底の変化から探り、根掛かりが増える場所では仕掛けを浮かせて回収する。",
    "caution": [
      "外海のうねりが入る日は波止先端へ進まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekuwahatagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.293259/141.796739/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-iwatefudaihama",
    "name": "普代浜",
    "prefecture": "岩手県",
    "lat": 40.014485,
    "lng": 141.89965,
    "primaryType": "beach",
    "fish": [],
    "methodSlugs": [],
    "note": "普代川が海へ出る場所に広がる砂浜。港の釣りとは足場が異なるため、まず波の到達範囲と川の流れを陸側から確認して釣行場所を判断したい。",
    "caution": [
      "河口の増水時と海水浴利用中は釣りを避ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatefudaihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.014485/141.89965/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-iwatetukuegyokou",
    "name": "机漁港",
    "prefecture": "岩手県",
    "lat": 39.951415,
    "lng": 141.959302,
    "primaryType": "port",
    "fish": [],
    "methodSlugs": [],
    "note": "机浜番屋群やサッパ船の乗り場がある港。観光・漁業の動線と釣りの場所を分けて考え、波止へ入る前に利用可能な区画を確認する。",
    "caution": [
      "番屋前や乗船動線に荷物・車を置かない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatetukuegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.951415/141.959302/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-iwateomotokou",
    "name": "小本港",
    "prefecture": "岩手県",
    "lat": 39.848612,
    "lng": 141.976018,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
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
    "note": "小本川河口にある港。アジ・サバ・チカの回遊と、アイナメ・ソイ・カレイを狙う岸釣りの候補。川からの濁りや流れの変化も確認する。",
    "caution": [
      "沖向きの大型ブロックへ進まず、増水した河口へ近づかない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateomotokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.848612/141.976018/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-iwatenakagumigyokou",
    "name": "仲組漁港",
    "prefecture": "岩手県",
    "lat": 39.62592,
    "lng": 142.02168,
    "primaryType": "port",
    "fish": [],
    "methodSlugs": [],
    "note": "重茂半島の仲組地区にある小港。波返しが高い外向きより、港内側で回収経路を確保できる場所を先に確認したい。",
    "caution": [
      "幹線道路から離れるため、明るいうちに進入路と帰路を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatenakagumigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.62592/142.02168/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-iwateisihamagyokou",
    "name": "石浜漁港（岩手県）",
    "prefecture": "岩手県",
    "lat": 39.522863,
    "lng": 142.029448,
    "primaryType": "port",
    "fish": [
      "アイナメ",
      "クロソイ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "重茂半島の石浜にある港。アイナメ・ソイ・ドンコを探る岸釣り候補で、底付近を短く探って根の位置を把握する釣りが向く。",
    "caution": [
      "外側の大きな消波ブロックへ無理に移らず、平らな足場から探る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateisihamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.522863/142.029448/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-iwatefunakosigyokou",
    "name": "船越漁港（岩手県）",
    "prefecture": "岩手県",
    "lat": 39.420994,
    "lng": 141.98252,
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
    "note": "船越漁港しもかわ公園に隣接する波止のある港。チカやウミタナゴの回遊と、底付近のアイナメ・カレイを狙い分けられる。",
    "caution": [
      "手すりの有無だけで安全と判断せず、開放範囲と波の状況を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatefunakosigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.420994/141.98252/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-iwatekirikirigyokou",
    "name": "吉里吉里漁港",
    "prefecture": "岩手県",
    "lat": 39.372343,
    "lng": 141.953101,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マサバ",
      "チカ",
      "ウミタナゴ",
      "ブリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "吉里吉里の漁港側。メバル・アイナメ・カレイや回遊するチカ・サバ、季節のイカを探る候補。西側のフィッシャリーナとは利用区画を分けて確認する。",
    "caution": [
      "波止沖側のブロックへ無理に上がらず、乗船・係留作業を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekirikirigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.372343/141.953101/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-iwatehosouragyokou",
    "name": "細浦漁港",
    "prefecture": "岩手県",
    "lat": 39.018367,
    "lng": 141.716166,
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
    "note": "大船渡湾南側の細浦漁港。チカ・アジ・サバなどを探る釣りと、カレイ・アナゴ・根魚の底釣りが候補になる。",
    "caution": [
      "港内の荷揚げ・係留場所を空け、夜釣りの前に帰路を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatehosouragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.018367/141.716166/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-akitanisikurosawabunnkou",
    "name": "西黒沢分港",
    "prefecture": "秋田県",
    "lat": 39.981987,
    "lng": 139.732511,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "アイナメ",
      "クロダイ",
      "アオリイカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "男鹿の西黒沢分港。アジやメバル、クロダイ、季節のアオリイカを狙う小港。狭い波止では仕掛けを広げすぎず短く探る。",
    "caution": [
      "波をかぶる日は先端へ進まない。漁業利用と住民の通行を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/akitanisikurosawabunnkou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.981987/139.732511/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-akitahadategyokou",
    "name": "羽立漁港",
    "prefecture": "秋田県",
    "lat": 39.897638,
    "lng": 139.865441,
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
    "note": "船川港手前の羽立漁港。浅い砂底と比詰川の流れがあり、キスの底釣り、アジの回遊、クロダイ・スズキが候補になる。",
    "caution": [
      "浅い場所で船や係留索に仕掛けを掛けないよう、投入方向を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/akitahadategyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.897638/139.865441/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagiisihamagyokou",
    "name": "石浜漁港（宮城県）",
    "prefecture": "宮城県",
    "lat": 38.443455,
    "lng": 141.4626,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "チカ",
      "ウミタナゴ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "女川の石浜漁港。メバル・アイナメ・カレイなどを探る岸釣りの候補。波止には高さがあるため、魚を掛ける前に取り込み方法を考えたい。",
    "caution": [
      "小さな港の駐車余地は限られる。漁業車両の切り返し場所を塞がない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/miyagiisihamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.443455/141.4626/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagitomarihamagyokou",
    "name": "泊浜漁港",
    "prefecture": "宮城県",
    "lat": 38.356801,
    "lng": 141.52281,
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
    "note": "泊浜漁港は砂底と沈みブロックを狙い分ける港。カレイは砂底、アイナメやソイは障害物周辺を短い距離から探る。",
    "caution": [
      "沈みブロックに掛かった仕掛けを無理に引かず、周囲を確認して回収する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/miyagitomarihamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.356801/141.52281/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagisizugyokou",
    "name": "清水漁港",
    "prefecture": "宮城県",
    "lat": 38.690066,
    "lng": 141.493285,
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
    "note": "清水漁港の岸壁・波止。メバル・アイナメ・カレイ・チカなどを探る候補で、外側のブロックがある場所とない場所を見分けて釣座を選ぶ。",
    "caution": [
      "小港なので船の出入りが始まったら仕掛けを上げ、作業を妨げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/miyagisizugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.690066/141.493285/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagisizukawagyokou",
    "name": "志津川漁港",
    "prefecture": "宮城県",
    "lat": 38.672327,
    "lng": 141.456141,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マサバ",
      "マイワシ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "志津川湾の漁業拠点にある港。アジ・イワシの回遊とカレイ・アイナメなどを狙える候補だが、岸壁ごとの利用条件を確認する必要がある。",
    "caution": [
      "新港・旧港の作業区画を混同せず、荷揚げ場所では釣りをしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/miyagisizukawagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.672327/141.456141/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagiogatukou",
    "name": "雄勝港",
    "prefecture": "宮城県",
    "lat": 38.515501,
    "lng": 141.466699,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "アイナメ",
      "マサバ",
      "マイワシ",
      "チカ",
      "ウミタナゴ",
      "マハゼ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "雄勝湾奥の岸壁。チカや小型回遊魚を探る釣りと、ハゼ・カレイ・アイナメの底釣りを、水の濁りや風に合わせて選ぶ。",
    "caution": [
      "係留船に近づきすぎず、岸壁から海へ身を乗り出さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagiogatukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.515501/141.466699/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagionagawakou",
    "name": "女川港",
    "prefecture": "宮城県",
    "lat": 38.443002,
    "lng": 141.448331,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マサバ",
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
    "note": "女川湾内の広い港。回遊魚を狙う岸壁と、メバル・アイナメなどを探る底周りで釣り方が変わる。船の往来がある場所では流した仕掛けを早めに回収する。",
    "caution": [
      "港全体が釣り可能なわけではない。漁業・復旧作業の区画と立入表示を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagionagawakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.443002/141.448331/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagiyokouragyokou",
    "name": "横浦漁港",
    "prefecture": "宮城県",
    "lat": 38.406506,
    "lng": 141.470711,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
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
    "note": "横浦漁港の波止周り。カレイやアイナメ、メバル・ソイ、回遊するチカ・サバが候補になる。水深がある場所は取り込み道具も準備する。",
    "caution": [
      "広い波止でも通路を空け、荒天時は先端へ進まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagiyokouragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.406506/141.470711/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagiyoriisogyokou",
    "name": "寄磯漁港",
    "prefecture": "宮城県",
    "lat": 38.389134,
    "lng": 141.525578,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
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
    "note": "寄磯漁港。水深のある波止周りで根魚やカレイ、サバなどの回遊を探る候補。速い潮では底を取れる範囲に投入を絞る。",
    "caution": [
      "波止の縁へ荷物を置かず、取り込み中も船と周囲の釣り人を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagiyoriisogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.389134/141.525578/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagikugunarihamagyokou",
    "name": "十八成浜漁港",
    "prefecture": "宮城県",
    "lat": 38.30846,
    "lng": 141.489251,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "十八成浜の砂浜に隣接する漁港。港では根魚やカレイ、砂浜側ではヒラメ・マゴチを狙う釣りが候補になる。",
    "caution": [
      "高い波返しを越えず、砂浜の利用者に向けて投げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagikugunarihamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.30846/141.489251/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagiooharakyuubunn",
    "name": "大原漁港・給分漁港",
    "prefecture": "宮城県",
    "lat": 38.328528,
    "lng": 141.472943,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
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
    "note": "牡鹿半島の大原・給分地区の港。根魚やカレイ、チカ・ウミタナゴを探る岸釣り候補で、陸続きの通行可能な波止から状況を見る。",
    "caution": [
      "両港の作業区画を確認し、波返しの上を通路にしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagiooharakyuubunn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.328528/141.472943/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagisamuraihamagyokou",
    "name": "侍浜漁港",
    "prefecture": "宮城県",
    "lat": 38.382743,
    "lng": 141.434083,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
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
    "note": "侍浜の小さな港。アイナメやソイなどの根魚、カレイを狙う岸釣り候補。陸路で安全に入れる港内側から、底質を確認して短く探りたい。",
    "caution": [
      "東側へ崖を下る経路は利用しない。作業スペースを駐車場所にしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagisamuraihamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.382743/141.434083/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagitukinouragyokou",
    "name": "月浦漁港",
    "prefecture": "宮城県",
    "lat": 38.382205,
    "lng": 141.427882,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
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
    "note": "月浦の湾内で、波止の内側からカレイやアイナメを探る候補地。メバルやウミタナゴを狙うときも、係留船に近づけず岸壁の際と少し離れた底を分けて探りたい。",
    "caution": [
      "漁船の出入りがあれば仕掛けを回収し、船道を横切る投入を避ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagitukinouragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.382205/141.427882/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagiyosidahanabutikou",
    "name": "吉田花渕港・花渕小浜港",
    "prefecture": "宮城県",
    "lat": 38.303409,
    "lng": 141.086555,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マハゼ",
      "シログチ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "花渕浜で隣り合う港をまとめた釣り場。波止の内側からカレイやハゼを探り、底の変化がある場所ではアイナメ・メバルも候補になる。港ごとの出入口を塞がない釣り座選びが必要。",
    "caution": [
      "波止先端へ荷物を広げすぎず、船の出入りを常に確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagiyosidahanabutikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.303409/141.086555/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagisyoubutagyokou",
    "name": "菖蒲田漁港",
    "prefecture": "宮城県",
    "lat": 38.282812,
    "lng": 141.061556,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "マサバ",
      "マイワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "菖蒲田浜の東側にある港で、アジ・サバなどの回遊魚とメバル・アイナメを狙い分ける。初めてなら平らな港内側から始め、反応がないときは仕掛けを落とす深さを変える。",
    "caution": [
      "西側の駐車余地は限られる。路上や漁業作業区画への駐車はしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagisyoubutagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.282812/141.061556/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagimatugahamagyokou",
    "name": "松ヶ浜漁港",
    "prefecture": "宮城県",
    "lat": 38.277809,
    "lng": 141.051857,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "松ヶ浜の赤灯側の波止周辺が岸釣りの候補。メバル・アイナメは足元の変化、カレイは回収できる砂地を探る。沖向きの大きな消波ブロックへ降りて釣り座を広げない。",
    "caution": [
      "航路へ仕掛けを残さず、船が近づいたら速やかに回収する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagimatugahamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.277809/141.051857/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyagiarahamagyokou",
    "name": "荒浜漁港",
    "prefecture": "宮城県",
    "lat": 38.039388,
    "lng": 140.914056,
    "primaryType": "sea-park",
    "fish": [
      "カレイ",
      "マハゼ",
      "スズキ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "鳥の海に面する荒浜漁港の釣りデッキ周辺。ハゼやカレイを短い底仕掛けで狙いやすい構成で、港内の潮の動きと船の往来を見ながら投入方向を決める。",
    "caution": [
      "公園の釣りデッキと市場・荷揚げ岸壁を区別し、作業場所へ広がらない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagiarahamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.039388/140.914056/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamagatafukurakou",
    "name": "吹浦港",
    "prefecture": "山形県",
    "lat": 39.070079,
    "lng": 139.872737,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "ブリ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage"
    ],
    "note": "月光川と西浜の間にある吹浦港。港内のアジ、砂底のキス、回遊時の青物やスズキで釣りを組み立てられる。",
    "caution": [
      "河川に遡上するサケを狙わず、河口周辺の最新の採捕規制を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/yamagatafukurakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.070079/139.872737/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamagatasakatakitakouonnhaisui",
    "name": "酒田北港・温排水",
    "prefecture": "山形県",
    "lat": 38.959225,
    "lng": 139.823341,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "クロダイ",
      "マイワシ",
      "サヨリ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "酒田北港の温排水周辺。流れの境目に寄る小魚と、それを追うスズキなどが釣りの手掛かりになる。アジやサヨリ狙いは流される仕掛けを管理する。",
    "caution": [
      "排水施設へ近づかず、作業区域や柵内へ入らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/yamagatasakatakitakouonnhaisui.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.959225/139.823341/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamagatasakatakouoohamafutou",
    "name": "酒田港・大浜埠頭",
    "prefecture": "山形県",
    "lat": 38.953819,
    "lng": 139.827096,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "クロダイ",
      "マイワシ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "酒田港の大浜埠頭。アジ・イワシの回遊やハゼ、クロダイ・スズキを狙う候補になる岸壁。入港船と荷役の予定で利用状況が変わる。",
    "caution": [
      "埠頭の全域を釣り場と考えず、保安区域・作業中の岸壁へ入らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/yamagatasakatakouoohamafutou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.953819/139.827096/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamagatamiyanourakaigann",
    "name": "宮野浦海岸",
    "prefecture": "山形県",
    "lat": 38.935812,
    "lng": 139.815552,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "最上川河口南側の宮野浦海岸。砂浜のキスや河口周辺のスズキを狙う候補。流れの強い河口より、波の穏やかな浜側から観察する。",
    "caution": [
      "河口周辺には魚種・時期による採捕規制があるため、県の最新案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/yamagatamiyanourakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.935812/139.815552/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamagatayunohamakaigann",
    "name": "湯野浜海岸",
    "prefecture": "山形県",
    "lat": 38.784281,
    "lng": 139.752724,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "湯野浜温泉の前に続く砂浜。キスの投げ釣りでは遠投だけに頼らず、手前の底の変化を短い距離から探る。",
    "caution": [
      "海水浴客・散策者がいる範囲では投げない。波打ち際へ入り込まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/yamagatayunohamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.784281/139.752724/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamagatakamokou",
    "name": "加茂港",
    "prefecture": "山形県",
    "lat": 38.762098,
    "lng": 139.733326,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "マイワシ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "note": "鶴岡の加茂港。アジ・イワシ・サヨリの群れを探す岸釣りの候補。最初は港内で潮と群れの動きを見て、棚を少しずつ変えたい。",
    "caution": [
      "港内の通路と駐車可否を事前確認し、漁業作業の場所を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/yamagatakamokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.762098/139.733326/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamagataimaizumikou",
    "name": "今泉港",
    "prefecture": "山形県",
    "lat": 38.76009,
    "lng": 139.723306,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "アイナメ",
      "クロダイ",
      "マイワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki"
    ],
    "note": "加茂水族館の南側にある今泉港。アジ・イワシの回遊を港内で見ながら、メバルやクロダイを狙う釣りへ切り替えられる小港。",
    "caution": [
      "水族館利用者や漁業車両の通行を妨げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/yamagataimaizumikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.76009/139.723306/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamagatayurakou",
    "name": "由良港",
    "prefecture": "山形県",
    "lat": 38.717612,
    "lng": 139.68112,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "マイワシ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "note": "庄内の由良港。港内岸壁でアジ・イワシ・サヨリを探る釣りが候補になる。回遊が見えないときは撒き餌を増やす前に棚を変える。",
    "caution": [
      "作業車両や係留船の周囲を避け、岸壁に長く仕掛けを広げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/yamagatayurakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.717612/139.68112/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamagatakobatakou",
    "name": "小波渡港",
    "prefecture": "山形県",
    "lat": 38.691925,
    "lng": 139.644256,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "マイワシ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "小波渡の集落前にある港。港内のアジ・イワシ・サヨリを狙う釣りと、波止周りのクロダイ・アオリイカ狙いを分けて考えると探しやすい。",
    "caution": [
      "係留船やロープの近くへ仕掛けを投入しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/yamagatakobatakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.691925/139.644256/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamagatakatanorizawakou",
    "name": "堅苔沢港",
    "prefecture": "山形県",
    "lat": 38.686866,
    "lng": 139.627669,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "マイワシ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "堅苔沢の波止と港内岸壁で、アジ・サヨリの回遊やクロダイ、季節のアオリイカを狙う候補地。潮が速い外向きに固執せず、港内で仕掛けを扱いやすい場所から確かめる。",
    "caution": [
      "駐車可能な区画を先に確認し、狭い出入口や岸壁作業の動線を塞がない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/yamagatakatanorizawakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.686866/139.627669/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamagatayonagokou",
    "name": "米子港",
    "prefecture": "山形県",
    "lat": 38.638143,
    "lng": 139.593294,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "マイワシ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "温海沿岸の米子港。港内のアジ・イワシ・サヨリと、波止周辺のクロダイ・アオリイカを狙い分けられる。回遊魚が見えないときは遠投を増やすより棚を変えて様子を見る。",
    "caution": [
      "波止の外向きは風と波の影響を受けるため、無理に先端へ進まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/yamagatayonagokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.638143/139.593294/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamagatanezumigasekikou",
    "name": "鼠ヶ関港",
    "prefecture": "山形県",
    "lat": 38.558771,
    "lng": 139.543533,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "ブリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "鼠ヶ関の広い港には岸壁・波止・岩場が混在する。初めてなら港内の平らな岸壁でアジやシロギスを候補にし、岩場の釣りとは装備と釣り方を分けて考えたい。",
    "caution": [
      "広い港全域が釣り可能とは限らない。荷揚げ岸壁・係留区画・規制された波止は避ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/yamagatanezumigasekikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.558771/139.543533/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukusimakabaniwakaigann",
    "name": "蒲庭海岸",
    "prefecture": "福島県",
    "lat": 37.75275,
    "lng": 141.003664,
    "primaryType": "beach",
    "fish": [
      "カレイ",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "ヒラメ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure",
      "rockfish-lure"
    ],
    "note": "蒲庭の海岸は消波ブロックの多い地形。カレイやイシモチの底釣り、回遊するスズキ・ヒラメが候補になるが、足場の確認を先に行いたい。",
    "caution": [
      "ブロックに乗ることを前提にせず、安全な陸側から竿を出せる範囲を選ぶ。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/fukusimakabaniwakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.75275/141.003664/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukusimasuetugikaigann",
    "name": "末続海岸",
    "prefecture": "福島県",
    "lat": 37.171123,
    "lng": 140.999243,
    "primaryType": "pier",
    "fish": [
      "カレイ",
      "アイナメ",
      "クロダイ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "末続川が海へ出る小さな海岸。ブロックの切れ目から底を探る釣りが紹介され、カレイ・イシモチ・アイナメが対象になる。",
    "caution": [
      "増水時は河口へ近づかず、波をかぶる足場では釣りをしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/fukusimasuetugikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.171123/140.999243/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ibarakikokaigahama",
    "name": "小貝ヶ浜",
    "prefecture": "茨城県",
    "lat": 36.65711,
    "lng": 140.710402,
    "primaryType": "beach",
    "fish": [
      "アイナメ",
      "クロダイ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "日立の小貝ヶ浜は小さな砂浜と石積みの護岸がある海岸。アイナメ・クロダイを探る釣りでは、回収できる足場を先に確認する。",
    "caution": [
      "断崖を下る経路や濡れた岩場は使わず、安全な通路から利用する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakikokaigahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.65711/140.710402/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ibarakiogituhama",
    "name": "小木津浜",
    "prefecture": "茨城県",
    "lat": 36.64079,
    "lng": 140.692077,
    "primaryType": "pier",
    "fish": [
      "アイナメ",
      "ヒラメ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "小木津浜は消波ブロックに囲まれた海岸。イシモチ・アイナメ、スズキ・ヒラメを探る候補だが、波と足場の確認を優先したい。",
    "caution": [
      "集落内の道が狭い。路上駐車や住民の出入口を塞ぐ行為をしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakiogituhama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.64079/140.692077/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ibarakimuramatukaigann",
    "name": "村松海岸",
    "prefecture": "茨城県",
    "lat": 36.448783,
    "lng": 140.607812,
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
    "note": "村松の砂浜はキス・イシモチの投げ釣りと、ヒラメ・マゴチのルアー釣りの候補。沖へ立ち込まず、陸側から底や波の変化を探す。",
    "caution": [
      "砂浜への進入路と駐車可否を事前確認。車で砂浜へ入る前提で計画しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakimuramatukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.448783/140.607812/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ibarakitaiyoukaigann",
    "name": "大洋海岸",
    "prefecture": "茨城県",
    "lat": 36.126853,
    "lng": 140.591033,
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
    "note": "大洋海岸は砂浜からキス・カレイを探り、ルアーでヒラメ・マゴチを狙う場所。砂の深浅で波の崩れ方が変わる部分を陸から観察したい。",
    "caution": [
      "ヘッドランド周辺は流れが強い。突堤へ進入したり海へ立ち込んだりしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakitaiyoukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.126853/140.591033/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ibarakibuyogamakaigann",
    "name": "武与釜海岸",
    "prefecture": "茨城県",
    "lat": 36.118152,
    "lng": 140.594316,
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
    "note": "武与釜海岸はヘッドランド間に続く砂浜。キスの底釣りとヒラメ・マゴチのルアー釣りを、波の穏やかな日に狙い分ける。",
    "caution": [
      "サーファーの利用が多い。人のいる方向へ投げず、混雑時は場所を譲る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakibuyogamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.118152/140.594316/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ibarakikamizawakaigann",
    "name": "上沢海岸",
    "prefecture": "茨城県",
    "lat": 36.244567,
    "lng": 140.560863,
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
    "note": "上沢海岸の砂浜。キス・イシモチ・カレイの底釣りと、ヒラメ・マゴチのルアー釣りを、ヘッドランドから距離を取って行いたい。",
    "caution": [
      "突堤周辺の強い流れを避け、ウェーディングを前提にしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakikamizawakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.244567/140.560863/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ibarakiaodukakaigann",
    "name": "青塚海岸",
    "prefecture": "茨城県",
    "lat": 36.047486,
    "lng": 140.628905,
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
    "note": "青塚海岸は砂浜のキス・イシモチと、ヒラメ・マゴチを狙うサーフ。まず手前の底を確認し、根掛かりや横流れが強ければ投入方向を変える。",
    "caution": [
      "ヘッドランドの離岸流に注意し、水中へ入らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakiaodukakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.047486/140.628905/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ibarakiakasikaigann",
    "name": "明石海岸",
    "prefecture": "茨城県",
    "lat": 35.996237,
    "lng": 140.656221,
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
    "note": "鹿嶋の明石海岸は砂浜からの投げ釣り・ルアー釣りの候補。キスやカレイは底を探り、ヒラメやマゴチは底をこすり続けない巻き方で探る。",
    "caution": [
      "波が高い日やヘッドランドへ吸い寄せられる流れのある日は釣りを控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakiakasikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.996237/140.656221/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ibarakisudahamakaigann",
    "name": "須田浜海岸",
    "prefecture": "茨城県",
    "lat": 35.840064,
    "lng": 140.760827,
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
    "note": "須田浜はキス・イシモチ・カレイの投げ釣りと、ヒラメ・マゴチのルアー釣りが対象になる海岸。広く探る前に手前の地形変化を確かめる。",
    "caution": [
      "駐車余地は限られる。路上駐車や砂浜への無理な乗り入れをしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakisudahamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.840064/140.760827/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibakisaradunaikoukouenn",
    "name": "木更津内港公園",
    "prefecture": "千葉県",
    "lat": 35.386758,
    "lng": 139.915481,
    "primaryType": "pier",
    "fish": [
      "マイワシ",
      "サヨリ",
      "マハゼ",
      "スズキ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage"
    ],
    "note": "木更津内港公園周囲の護岸。ハゼ・アナゴの底釣り、イワシ・サッパ・サヨリの回遊を探る釣りが候補になる。",
    "caution": [
      "大型船の進路へ仕掛けを流さず、公園の散策者と作業車両を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibakisaradunaikoukouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.386758/139.915481/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibakisaradusiohamakouenn",
    "name": "木更津潮浜公園",
    "prefecture": "千葉県",
    "lat": 35.379358,
    "lng": 139.908099,
    "primaryType": "pier",
    "fish": [
      "マハゼ",
      "スズキ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "木更津潮浜公園に沿う護岸。ハゼやアナゴを狙う底の釣り、スズキを狙う釣りを、散策者の動線を避けて組み立てる。",
    "caution": [
      "公園の利用規則と釣り可能な護岸を確認。頭上・背後の歩行者を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibakisaradusiohamakouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.379358/139.908099/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibakazusaminatokoukaihinnkouenn",
    "name": "上総湊港海浜公園",
    "prefecture": "千葉県",
    "lat": 35.224044,
    "lng": 139.86939,
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
    "note": "上総湊港海浜公園の砂浜。キスの投げ釣り、ヒラメ・マゴチのルアー釣りの候補で、河口周辺の流れと波の変化を見ながら探る。",
    "caution": [
      "海水浴場として利用される時期は釣りを控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibakazusaminatokoukaihinnkouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.224044/139.86939/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibaogiukou",
    "name": "荻生港",
    "prefecture": "千葉県",
    "lat": 35.199886,
    "lng": 139.827161,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "内房の荻生港。浅い水深の小港で、キス・クロダイを狙う波止釣りの候補。潮位が低い時間は足元の障害物を確認してから投入する。",
    "caution": [
      "釣り人向けの大きな駐車場がある前提で訪れない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaogiukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.199886/139.827161/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibatateyamakousunaageba",
    "name": "館山港・砂上げ場",
    "prefecture": "千葉県",
    "lat": 34.986111,
    "lng": 139.847245,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "マサバ",
      "マイワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "館山港奥の砂上げ場周辺。アジ・イワシなどを探る岸壁釣りの候補だが、荷役がある港の作業場であることを忘れずに釣座を判断する。",
    "caution": [
      "作業が始まったら速やかに退き、車の横付けや長時間の場所取りを前提にしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibatateyamakousunaageba.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.986111/139.847245/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibatoujyoukaigann",
    "name": "東条海岸",
    "prefecture": "千葉県",
    "lat": 35.117258,
    "lng": 140.124156,
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
    "note": "鴨川の東条海岸は、砂地のシロギスやイシモチ、ヒラメ・マゴチを探るサーフ。沖の一点だけを狙わず、波が崩れる位置の違いや手前の溝を少しずつ探る。",
    "caution": [
      "サーフィン利用が多いため、海に人が入っている方向へのキャストはしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibatoujyoukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.117258/140.124156/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibafutamakaigann",
    "name": "二夕間海岸",
    "prefecture": "千葉県",
    "lat": 35.121488,
    "lng": 140.152245,
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
    "note": "二夕間川の出口にある小さな砂浜。シロギスやイシモチの底釣り、ヒラメ・マゴチのルアー釣りを、河川からの濁りと波の向きに応じて組み立てる。",
    "caution": [
      "河口の流れに入水せず、サーファーが入った場合は釣りを休む。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibafutamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.121488/140.152245/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibasirosakikaigann",
    "name": "城崎海岸",
    "prefecture": "千葉県",
    "lat": 35.123594,
    "lng": 140.168703,
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
    "note": "城崎の湾奥にある砂浜で、シロギスやイシモチを短い距離から探る候補。砂地を広く引き続けるより、反応のあった距離を覚えて投入を揃えると探りやすい。",
    "caution": [
      "海水浴場の開設中や遊泳者がいる時間は釣りを控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibasirosakikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.123594/140.168703/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibautiurakaigann",
    "name": "内浦海岸",
    "prefecture": "千葉県",
    "lat": 35.127368,
    "lng": 140.190911,
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
    "note": "内浦湾の奥に広がる海岸。シロギス・イシモチの底釣りを軸に、波と濁りの条件が合えばヒラメやマゴチも候補になる。湾内でもうねりが入る日は無理をしない。",
    "caution": [
      "夏の遊泳区画では竿を出さず、海岸への出入口を荷物で塞がない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibautiurakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.127368/140.190911/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibaubarakaigann",
    "name": "鵜原海岸",
    "prefecture": "千葉県",
    "lat": 35.137002,
    "lng": 140.274918,
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
    "note": "鵜原の入り江にある砂浜。投げ釣りのシロギスと、底近くを探るヒラメ・マゴチのルアー釣りが候補になる。岩場に近い端では根掛かりを確かめてから投入範囲を広げる。",
    "caution": [
      "海水浴期間は釣りをしない。海岸への道路が狭いため車の進入先を事前に確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaubarakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.137002/140.274918/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibahebarakaigann",
    "name": "部原海岸",
    "prefecture": "千葉県",
    "lat": 35.168108,
    "lng": 140.336587,
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
    "note": "部原の砂浜で、シロギスやイシモチ、ヒラメ・マゴチを狙う候補地。釣り座の選択では魚の気配だけでなく、サーファーの入水位置と移動方向を先に確認する。",
    "caution": [
      "海面を共有する人との距離が取れなければ釣りを見送り、場所取りはしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibahebarakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.168108/140.336587/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibaonnjyukukaigann",
    "name": "御宿海岸",
    "prefecture": "千葉県",
    "lat": 35.1827,
    "lng": 140.354333,
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
    "note": "御宿の広い海岸は、砂地のシロギスとヒラメ・マゴチを探るサーフ。波打ち際に立ち込みすぎず、波が切れる筋と払い出しを陸から観察して投入方向を絞る。",
    "caution": [
      "遊泳・サーフィン区域を避け、駐車場の営業期間や料金は最新案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaonnjyukukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.1827/140.354333/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibakourakaigann",
    "name": "小浦海岸",
    "prefecture": "千葉県",
    "lat": 35.186664,
    "lng": 140.381606,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "御宿町小浦の岩が混じる海岸。砂地ではシロギス、地形の切り替わりではヒラメやスズキが候補になる。底を引き続けず、根掛かりする位置を覚えて探る範囲を調整する。",
    "caution": [
      "駐車場の開閉時刻を確認し、閉門前に余裕を持って戻る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibakourakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.186664/140.381606/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibahitotumatukaigann",
    "name": "一松海岸",
    "prefecture": "千葉県",
    "lat": 35.412417,
    "lng": 140.395145,
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
    "note": "一松海岸はシロギスの底釣りとヒラメ・マゴチのルアー釣りを組み立てる砂浜。海岸侵食で足元の広さが変わるため、満潮まで残る場所と帰路を先に確かめる。",
    "caution": [
      "駐車場前でも常に安全に浜へ下りられるとは限らない。崖状の段差を降りない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibahitotumatukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.412417/140.395145/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibanakazatokaigann",
    "name": "中里海岸",
    "prefecture": "千葉県",
    "lat": 35.431337,
    "lng": 140.400209,
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
    "note": "中里のサーフで、シロギス・イシモチとヒラメ・マゴチを狙い分ける。波の切れ目を陸上から探し、底釣りは短い距離、ルアーは底を擦りすぎない高さから始める。",
    "caution": [
      "侵食された砂浜や高い段差を避け、潮が上げた場合の戻り道を確保する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibanakazatokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.431337/140.400209/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibasirasatokaigann",
    "name": "白里海岸",
    "prefecture": "千葉県",
    "lat": 35.484681,
    "lng": 140.422482,
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
    "note": "白里の広い砂浜。投げ釣りのシロギスとサーフルアーのヒラメ・マゴチが候補で、横へ移動する際は先行者の投入方向を確認して間隔を取る。",
    "caution": [
      "サーファーと遊泳者を優先し、駐車場の利用時間は当日の案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibasirasatokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.484681/140.422482/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibafudoudoukaigann",
    "name": "不動堂海岸",
    "prefecture": "千葉県",
    "lat": 35.507374,
    "lng": 140.436516,
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
    "note": "不動堂海岸は、シロギス・イシモチとヒラメ・マゴチを探る九十九里の砂浜。見渡せる範囲でも海底は一様ではないため、同じ場所へ投げ続けず反応のある距離を探す。",
    "caution": [
      "入水者がいる方向へ投げず、海水浴期間の区域規制を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibafudoudoukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.507374/140.436516/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibakatagaikaigann",
    "name": "片貝海岸",
    "prefecture": "千葉県",
    "lat": 35.527564,
    "lng": 140.452223,
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
    "note": "片貝港の南に延びる砂浜。シロギスの引き釣りやヒラメ・マゴチのルアー釣りでは、港からの流れと波の筋を目安に、船道を避けた浜側を探る。",
    "caution": [
      "港寄りはサーフィン利用が多い。十分な間隔が取れない場合は竿を出さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibakatagaikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.527564/140.452223/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibamotosukakaigann",
    "name": "本須賀海岸",
    "prefecture": "千葉県",
    "lat": 35.550036,
    "lng": 140.470698,
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
    "note": "本須賀の広いサーフで、シロギスやヒラメ・マゴチを狙う候補地。広さに任せた遠投だけでなく、手前の溝と波の崩れ方を確かめて投入距離を変える。",
    "caution": [
      "海水浴・サーフィンとの共用に注意し、駐車場の閉門時刻までに戻る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibamotosukakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.550036/140.470698/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibakidohamakaigann",
    "name": "木戸浜海岸",
    "prefecture": "千葉県",
    "lat": 35.615913,
    "lng": 140.543354,
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
    "note": "木戸浜の砂浜で、シロギスやイシモチを底仕掛け、ヒラメ・マゴチをルアーで探る。流れが強く仕掛けが横へ流される場合は、重さだけで解決せず釣りを休む判断も必要。",
    "caution": [
      "浜への出入口を明るいうちに確認し、高波の日は波打ち際へ近づかない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibakidohamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.615913/140.543354/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibahorikawahama",
    "name": "堀川浜",
    "prefecture": "千葉県",
    "lat": 35.634959,
    "lng": 140.568674,
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
    "note": "堀川浜は、砂浜と突堤周りの地形変化を見ながらシロギスやヒラメを探る釣り場。突堤の際は根掛かりしやすいため、まず開けた砂地で底の状態を確認する。",
    "caution": [
      "突堤周辺のサーファーに注意し、投げる前には背後の歩行者も確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibahorikawahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.634959/140.568674/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tibayosizakihama",
    "name": "吉崎浜",
    "prefecture": "千葉県",
    "lat": 35.669709,
    "lng": 140.620065,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "吉崎浜は護岸が続き、砂浜の残る範囲が限られる海岸。シロギスやイシモチの底釣りを考える際も、竿を振れる場所と魚を回収できる経路を先に選ぶ。",
    "caution": [
      "護岸下の狭い浜へ無理に降りず、波が護岸に当たる日は利用しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibayosizakihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.669709/140.620065/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kanagawaooiso",
    "name": "大磯港",
    "prefecture": "神奈川県",
    "lat": 35.305915,
    "lng": 139.318528,
    "primaryType": "sea-park",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "マサバ",
      "マイワシ",
      "メジナ",
      "アカカマス",
      "シログチ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "大磯港で釣り場として開放される西防波堤。サビキで小型回遊魚、短い底釣りでキスなどを探る候補になる。",
    "caution": [
      "開放時間と当日の利用可否を確認し、閉鎖された柵内へ入らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawaooiso.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.305915/139.318528/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kanagawafukuura",
    "name": "福浦港（神奈川県）",
    "prefecture": "神奈川県",
    "lat": 35.15067,
    "lng": 139.131954,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ウミタナゴ",
      "メジナ",
      "アカカマス"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "真鶴の福浦港。アジ・カマスの回遊と、メバル・メジナ・アオリイカ狙いが知られる。港内側の安全な足場と回収できる位置を先に確認する。",
    "caution": [
      "沖向きの消波ブロックは足場が悪い。遊漁船・漁船の出入りを優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawafukuura.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.15067/139.131954/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kanagawayugawara",
    "name": "湯河原海浜公園",
    "prefecture": "神奈川県",
    "lat": 35.142389,
    "lng": 139.112771,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ウミタナゴ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "湯河原海浜公園前の護岸。浅い手前と沖の障害物を意識し、ウキ釣りでメバル・ウミタナゴ、エギでアオリイカを探る釣りの候補。",
    "caution": [
      "手すりを越えず、回収時に沖のブロックへ仕掛けを掛けないよう注意する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawayugawara.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.142389/139.112771/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokatihamakaigann",
    "name": "千浜海岸",
    "prefecture": "静岡県",
    "lat": 34.646254,
    "lng": 138.066709,
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
    "note": "菊川河口東側の千浜海岸。遠浅の砂底を探るキス釣りや、ヒラメ・マゴチのルアー釣りが候補。波の崩れる位置の変化を陸から観察したい。",
    "caution": [
      "砂浜の利用者と車両進入規制を確認し、沖へ立ち込まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokatihamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.646254/138.066709/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokaomaezakikaigann",
    "name": "坂下海岸",
    "prefecture": "静岡県",
    "lat": 34.599691,
    "lng": 138.209617,
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
    "note": "御前崎近くの坂下海岸。砂底に根が点在するため、ルアーは底へ沈め続けず、浮かせて回収する探り方も用意する。",
    "caution": [
      "サーフィン・ウインドサーフィンの利用者を優先し、進路へ投げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokaomaezakikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.599691/138.209617/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokajitougata",
    "name": "地頭方港",
    "prefecture": "静岡県",
    "lat": 34.633331,
    "lng": 138.199232,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "マイワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "地頭方港の岸壁・波止。アジなどの回遊魚とクロダイ、根魚やイカを狙い分ける候補。底付近は根掛かりする位置を覚えて投入を調整する。",
    "caution": [
      "漁港の立入表示と作業状況を確認し、アイゴなど危険な魚は素手で触らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokajitougata.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.633331/138.199232/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokasizunamikaigann",
    "name": "静波海岸（勝間田川河口）",
    "prefecture": "静岡県",
    "lat": 34.727788,
    "lng": 138.227277,
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
    "note": "勝間田川河口に近い静波の海岸。砂底のキスやヒラメ・マゴチを探れるが、海水浴・サーフィンの利用が多いため空いているだけで釣座と決めない。",
    "caution": [
      "河口の波止は波をかぶりやすい。利用者と波の状況を見て中止を判断する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokasizunamikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.727788/138.227277/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokatakasinndennkaigann",
    "name": "高新田海岸",
    "prefecture": "静岡県",
    "lat": 34.793717,
    "lng": 138.310146,
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
    "note": "高新田海岸では、砂地のシロギス・イシモチと、ヒラメ・マゴチのルアー釣りを狙い分ける。底釣りは根掛かりの有無を短い距離で確かめ、釣れた距離を次の投入へ生かす。",
    "caution": [
      "濁りが強い日やうねりのある日は波打ち際へ近づかない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokatakasinndennkaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.793717/138.310146/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-eeisiduhama",
    "name": "石津浜",
    "prefecture": "静岡県",
    "lat": 34.841704,
    "lng": 138.336303,
    "primaryType": "beach",
    "fish": [
      "アオリイカ",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "スズキ",
      "タチウオ",
      "マダイ"
    ],
    "methodSlugs": [
      "surf-lure",
      "eging"
    ],
    "note": "石津浜は水深の変化が大きいサーフで、ヒラメ・マゴチのほか回遊次第で青物やタチウオも候補。狙う魚に合わせて底付近と中層を分け、むやみに仕掛けを重くしない。",
    "caution": [
      "混雑時の斜め投げを避け、急な波に備えて波打ち際から距離を取る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/eeisiduhama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.841704/138.336303/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokamotimunekou",
    "name": "用宗港",
    "prefecture": "静岡県",
    "lat": 34.924768,
    "lng": 138.367696,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "マイワシ",
      "サヨリ",
      "ブリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "用宗港では、港内の小型回遊魚と波止周りのクロダイ・メジナなどを狙い分ける。隣接する砂浜のシロギス釣りとは足場も回収方法も異なるため、港の作業状況を見て釣り座を決める。",
    "caution": [
      "荷揚げ・係留区画を空け、船が通る方向へ仕掛けを残さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokamotimunekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.924768/138.367696/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokahironokaigann",
    "name": "広野海岸公園",
    "prefecture": "静岡県",
    "lat": 34.92373,
    "lng": 138.376129,
    "primaryType": "sea-park",
    "fish": [
      "メバル",
      "カサゴ",
      "クロダイ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "uki"
    ],
    "note": "広野海岸公園の柵付き釣り護岸。沖の消波ブロックとの間を意識し、クロダイやメバル・カサゴを狙う仕掛けは回収できる距離から入れる。",
    "caution": [
      "柵を越えず、根掛かりした仕掛けを回収するためにブロックへ渡らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokahironokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.92373/138.376129/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokaoohamakaigann",
    "name": "大浜海岸（静岡県）",
    "prefecture": "静岡県",
    "lat": 34.935658,
    "lng": 138.405161,
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
    "note": "静岡の大浜海岸は、消波ブロックの間にある砂地でシロギスやイシモチを狙う候補地。ルアーではヒラメ・マゴチも候補だが、投入より先に魚を寄せる経路を確かめる。",
    "caution": [
      "ブロックへ乗らず、狭い隙間へ無理に遠投しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokaoohamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.935658/138.405161/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokamasakikaigann",
    "name": "三保真崎海岸（離岸堤前）",
    "prefecture": "静岡県",
    "lat": 35.020367,
    "lng": 138.519509,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "アオリイカ",
      "マゴチ",
      "ブリ",
      "タチウオ",
      "マダイ",
      "カワハギ",
      "カンパチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure",
      "eging"
    ],
    "note": "三保真崎の離岸堤前にあるサーフ。投げ釣りのシロギス、季節のアオリイカ、回遊次第の青物など釣り方の選択肢が広い。浜から届く範囲の潮と底を見て一つの狙いに絞る。",
    "caution": [
      "離岸堤へ渡る案内ではありません。急深な波打ち際で立ち込みをしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokamasakikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.020367/138.519509/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokaimazawakaigann",
    "name": "今沢海岸",
    "prefecture": "静岡県",
    "lat": 35.113467,
    "lng": 138.816075,
    "primaryType": "beach",
    "fish": [
      "マアジ",
      "ブリ",
      "カンパチ",
      "シイラ"
    ],
    "methodSlugs": [
      "shore-jigging"
    ],
    "note": "今沢の急深な海岸で、回遊するブリの若魚やソウダガツオなどを待つ釣りが候補。群れが来ない時間に遠投を続けるより、潮目や小魚の動きを観察して投入を絞る。",
    "caution": [
      "堤防上や路肩を駐車区画とみなさず、認められた場所に駐車する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokaimazawakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.113467/138.816075/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-eesennbonnhama",
    "name": "千本浜",
    "prefecture": "静岡県",
    "lat": 35.089592,
    "lng": 138.849313,
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
    "note": "千本浜は、砂地のシロギス釣りを軸にヒラメ・マゴチも候補になる海岸。青物の回遊は日によって変わるため、足元から底の変化を探る釣りと分けて計画する。",
    "caution": [
      "遊泳区画では釣りを控え、公園利用者や海岸の歩行者の背後へ仕掛けを振らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/eesennbonnhama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.089592/138.849313/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokaganyuudou",
    "name": "我入道浜",
    "prefecture": "静岡県",
    "lat": 35.076528,
    "lng": 138.85839,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "我入道浜はシロギスの底釣りを組み立てやすい砂浜。まず短い距離で底の感触を確かめ、反応のあった距離や方向を覚えて少しずつ探る範囲を変える。",
    "caution": [
      "カヤックなどの出入りを妨げず、狭い海岸進入路へ車を無理に入れない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokaganyuudou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.076528/138.85839/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokaasibokou",
    "name": "足保港",
    "prefecture": "静岡県",
    "lat": 35.018223,
    "lng": 138.837168,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "マイワシ",
      "ブリ",
      "ヤリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "足保港は内浦湾の回遊魚とクロダイ・メジナ、季節のイカ類を狙う候補地。波止の規模に対して釣り人が集まりやすいため、港内側で仕掛けを短く扱う準備が役立つ。",
    "caution": [
      "駐車・利用条件は現地の管理者に確認し、隣接する海上釣り堀の区画と混同しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/sizuokaasibokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.018223/138.837168/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokaotoikaigann",
    "name": "小土肥海岸",
    "prefecture": "静岡県",
    "lat": 34.920229,
    "lng": 138.785434,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "eging"
    ],
    "note": "小土肥の小さな砂浜で、シロギスを探る底釣りが候補。浜の両端は構造物が近いため、回収できる中央の砂地から始め、底の変化に合わせて投入方向を変える。",
    "caution": [
      "海水浴場の開設中は釣りを控え、駐車料金・利用時間は最新案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/sizuokaotoikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.920229/138.785434/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokaootagokaigann",
    "name": "大田子海岸",
    "prefecture": "静岡県",
    "lat": 34.808589,
    "lng": 138.765993,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "大田子の海岸では、砂地を探るシロギス釣りを組み立てられる。夕景を見に来る人も多いため、竿を出す場所と撮影・散策の動線を分けて使いたい。",
    "caution": [
      "夕方は背後の人の動きを確認し、見通しが悪くなれば無理に釣りを続けない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/sizuokaootagokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.808589/138.765993/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokakoinakou",
    "name": "小稲港",
    "prefecture": "静岡県",
    "lat": 34.626569,
    "lng": 138.885469,
    "primaryType": "port",
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
    "note": "小稲の入り江にある小さな港。アジやクロダイ、季節のアオリイカを候補に、港内の船とロープを避けて仕掛けを入れる。少人数でも釣り座を占有しすぎない配慮が必要。",
    "caution": [
      "係留索の上へエギを投げず、漁船の出入りと作業を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba8/sizuokakoinakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.626569/138.885469/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokakisamioohama",
    "name": "吉佐美大浜",
    "prefecture": "静岡県",
    "lat": 34.652397,
    "lng": 138.917913,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "吉佐美大浜は砂浜からシロギスを探る候補地。波打ち際の変化を見て短い距離から投入し、魚の反応があった筋を次の投入へつなげる。",
    "caution": [
      "サーフィンと海水浴を優先し、人がいる海面へ仕掛けを入れない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba8/sizuokakisamioohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.652397/138.917913/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokainubasiriteibou",
    "name": "犬走堤防",
    "prefecture": "静岡県",
    "lat": 34.669217,
    "lng": 138.950465,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "マイワシ",
      "ブリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "下田港の犬走島へ延びる堤防。アジ・イワシなどの回遊魚と、シロギス・クロダイ・アオリイカを足場に応じて狙い分ける。長い堤防でも船の通り道へ仕掛けを残さない。",
    "caution": [
      "駐車台数には限りがあるため、満車時は周辺道路へ駐車せず別の計画へ切り替える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba8/sizuokainubasiriteibou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.669217/138.950465/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokamadogahamakaiyuukouenn",
    "name": "まどが浜海遊公園",
    "prefecture": "静岡県",
    "lat": 34.675623,
    "lng": 138.955615,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "マサバ",
      "マイワシ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "まどが浜海遊公園の海沿い護岸。足元のサビキでアジなど、開けた砂地へ短く入れる仕掛けでシロギスが候補になる。歩行者と釣り人が共用する場所として竿を扱う。",
    "caution": [
      "柵を乗り越えず、散策路へ仕掛けや荷物を広げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba8/sizuokamadogahamakaiyuukouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.675623/138.955615/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sizuokanagahamakaihinnkouenn",
    "name": "長浜海浜公園",
    "prefecture": "静岡県",
    "lat": 35.05619,
    "lng": 139.069598,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "choinage",
      "eging"
    ],
    "note": "長浜海浜公園に接する海岸。浜のシロギス釣りと、周辺のクロダイ・アオリイカ狙いを候補にできるが、浜と波止では足場が異なるため釣り座を分けて計画する。",
    "caution": [
      "海水浴の区域・期間は釣りを控え、沖向きの消波ブロックへ降りない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba8/sizuokanagahamakaihinnkouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.05619/139.069598/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tokonamekariya",
    "name": "苅屋漁港",
    "prefecture": "愛知県",
    "lat": 34.854506,
    "lng": 136.857784,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "苅屋漁港は浅い水深の港。南側の波止でキス、港内でハゼを探る釣りが候補になり、秋は小型のスズキも対象になる。",
    "caution": [
      "北側の高い波返しへ上がらず、港内の船とロープを避ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/tokonamekariya.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.854506/136.857784/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-titautumi",
    "name": "内海港",
    "prefecture": "愛知県",
    "lat": 34.738033,
    "lng": 136.86111,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "アイナメ",
      "カサゴ",
      "クロダイ",
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "内海川河口の小港。キス・カレイの底釣りやカサゴ・アイナメを探る釣りが候補で、水門周辺ではハゼも対象になる。",
    "caution": [
      "海水浴利用が多い地域。遊泳者の近くで竿を出さず、駐車条件は季節ごとに確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/titautumi.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.738033/136.86111/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-titaoza",
    "name": "小佐漁港",
    "prefecture": "愛知県",
    "lat": 34.701507,
    "lng": 136.946661,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "アイナメ",
      "クロダイ",
      "アオリイカ",
      "マゴチ",
      "カワハギ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "豊浜の東側にある小佐漁港。岸からはメバル・アイナメ・クロダイなどが候補。貸しボートの釣りと岸釣りを混同せず、利用する場所に合った仕掛けを選ぶ。",
    "caution": [
      "外側のブロックへ無理に上がらない。貸しボートは別途予約・利用条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/titaoza.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.701507/136.946661/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-himakajimanisikou",
    "name": "日間賀島・西港",
    "prefecture": "愛知県",
    "lat": 34.703024,
    "lng": 136.997237,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "マイワシ",
      "カワハギ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "日間賀島の玄関口となる西港。アジ・サバなどのサビキやカワハギ・根魚狙いが候補になる。定期船の時間を先に確認して釣行を組み立てる。",
    "caution": [
      "高速船の発着桟橋を釣座にせず、乗降客と船の航路を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/himakajimanisikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.703024/136.997237/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-himakajimahigasikou",
    "name": "日間賀島・東港",
    "prefecture": "愛知県",
    "lat": 34.703659,
    "lng": 137.010283,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "メジナ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "日間賀島の東港。比較的浅い周囲でキス・カレイを探り、障害物周辺では根魚やクロダイを狙う候補になる。",
    "caution": [
      "消波ブロックへ無理に乗らず、船の発着時は仕掛けを回収する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/himakajimahigasikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.703659/137.010283/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-himakajimakitakubusi",
    "name": "日間賀島・北港",
    "prefecture": "愛知県",
    "lat": 34.706905,
    "lng": 137.001615,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "アイナメ",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "日間賀島北側の久渕・新井浜の港。根魚やクロダイ、秋の小魚を追うスズキが候補になる。島への往復便と現地の移動時間を含めて計画したい。",
    "caution": [
      "フェリーと漁船の発着を妨げない。消波ブロック上の釣りを初心者向けと考えない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/himakajimakitakubusi.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.706905/137.001615/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-nisionisihazu",
    "name": "西幡豆漁港",
    "prefecture": "愛知県",
    "lat": 34.78644,
    "lng": 137.161603,
    "primaryType": "port",
    "fish": [
      "メバル",
      "アイナメ",
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "西幡豆漁港では、港内のハゼを短い仕掛けで狙う釣りが組み立てやすい。季節によって小型回遊魚やヒイカも候補になるが、スロープと船溜まりは作業状況を先に確認する。",
    "caution": [
      "途切れた波止や沖向きのブロック帯へ進まず、平らな港内側から探る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/nisionisihazu.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.78644/137.161603/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-toyohasisikomatubarakaigann",
    "name": "小松原海岸（寺沢海岸）",
    "prefecture": "愛知県",
    "lat": 34.6674,
    "lng": 137.439115,
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
    "note": "小松原・寺沢の遠浅なサーフ。シロギスの底釣りとヒラメ・マゴチのルアー釣りを基本に、小魚の回遊がある時期は青物の気配も観察する。",
    "caution": [
      "サーファーの入水場所を避け、施設の敷地や路肩を駐車場として使わない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/toyohasisikomatubarakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.6674/137.439115/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-taharakou",
    "name": "田原港",
    "prefecture": "愛知県",
    "lat": 34.69662,
    "lng": 137.258785,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "マサバ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage"
    ],
    "note": "田原港の港内側で、小型回遊魚やサヨリを候補に棚を変えて探る。砂地のシロギスや季節のヒイカも狙いの一つだが、暗くなる前に係留索と足元を確認したい。",
    "caution": [
      "夜間の照明・騒音で周囲へ迷惑を掛けず、発電機等の使用可否は管理者に確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/taharakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.69662/137.258785/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-taharairako",
    "name": "伊良湖岬・恋路ヶ浜",
    "prefecture": "愛知県",
    "lat": 34.580825,
    "lng": 137.028587,
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
    "note": "伊良湖岬の恋路ヶ浜は、シロギスやヒラメ・マゴチを探る砂浜。観光客が多い場所なので、釣りを始める前に散策の動線と周囲の安全な間隔を確かめる。",
    "caution": [
      "遊歩道から人の上を越えて投げず、強い流れや波がある日は入水しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/taharairako.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.580825/137.028587/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-aichikennirakosa-fu",
    "name": "堀切海岸",
    "prefecture": "愛知県",
    "lat": 34.582927,
    "lng": 137.054915,
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
    "note": "堀切海岸は、表浜のシロギス釣りとヒラメ・マゴチのルアー釣りが候補。時期によって青物の回遊もあるが、毎回の釣果を前提にせず波と小魚の様子から狙いを決める。",
    "caution": [
      "高波の届く位置に荷物を置かず、背後の釣り人を確認して投げる。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/aichikennirakosa-fu.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.582927/137.054915/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-taharakosiozukaigann",
    "name": "小塩津海岸",
    "prefecture": "愛知県",
    "lat": 34.590418,
    "lng": 137.088497,
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
    "note": "小塩津海岸では、シロギスやイシモチの底釣りとヒラメ・マゴチのルアー釣りを組み立てる。青物を狙う場合も浜の起伏を観察し、周囲と投入方向を揃えたい。",
    "caution": [
      "回遊魚が見えても波打ち際へ踏み込まず、魚を寄せるときほど波を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/taharakosiozukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.590418/137.088497/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-taharatakamatu",
    "name": "高松一色海岸",
    "prefecture": "愛知県",
    "lat": 34.61352,
    "lng": 137.221384,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "アイナメ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "シログチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure",
      "rockfish-lure"
    ],
    "note": "高松一色の海岸は、砂地に岩が混じるためシロギスとヒラメ・スズキで探り方を変えたい。底を引き続けて根掛かりする場所では、少し浮かせて回収する。",
    "caution": [
      "サーフィン利用の多い海岸。十分に距離が取れない場合は釣りを見送る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/taharatakamatu.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.61352/137.221384/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-taharaookusakaigann",
    "name": "大草海岸",
    "prefecture": "愛知県",
    "lat": 34.626781,
    "lng": 137.261531,
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
    "note": "大草海岸の遠浅な砂浜で、シロギスやヒラメ・マゴチを探る釣りが候補。遠投一辺倒にせず、波の切れ目と手前の溝を観察しながら投入距離を調整する。",
    "caution": [
      "入浜口と満潮時の帰路を確認し、波が高い日は浜へ近づかない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/taharaookusakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.626781/137.261531/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-taharahoubekaigann",
    "name": "ほうべ海岸",
    "prefecture": "愛知県",
    "lat": 34.63402,
    "lng": 137.287045,
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
    "note": "ほうべ海岸は、シロギスの底釣りとヒラメ・マゴチのルアー釣りを楽しむ候補地。遠浅の浜では波が崩れる筋を手掛かりに、短い距離から広く探りたい。",
    "caution": [
      "海岸設備の利用可否は現地で確認し、砂浜への車の進入は案内に従う。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/taharahoubekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.63402/137.287045/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-taharadoudoukaigann",
    "name": "百々海岸",
    "prefecture": "愛知県",
    "lat": 34.641117,
    "lng": 137.314596,
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
    "note": "百々海岸の遠浅なサーフ。シロギスをゆっくり底で探る釣りと、ヒラメ・マゴチへ底近くを通す釣りを、波と風の状態に合わせて選ぶ。",
    "caution": [
      "駐車余地は限られるため、満車時は道路を塞がず別の釣り場へ移動する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/taharadoudoukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.641117/137.314596/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-taharahamadakaigann",
    "name": "浜田海岸",
    "prefecture": "愛知県",
    "lat": 34.643589,
    "lng": 137.325218,
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
    "note": "浜田海岸は、シロギスとヒラメ・マゴチを候補にできる遠浅の浜。侵食で釣り座が狭くなるため、魚の反応より先に潮が上げた際の足場を確かめたい。",
    "caution": [
      "満潮時に浜が狭くなる場所へ入らず、サーファーと投入方向を重ねない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/taharahamadakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.643589/137.325218/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-taharanisikaigann",
    "name": "西海岸",
    "prefecture": "愛知県",
    "lat": 34.647402,
    "lng": 137.336547,
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
    "note": "西海岸・久美原海岸の砂浜で、シロギスの底釣りやヒラメ・マゴチのルアー釣りを組み立てる。侵食箇所では満潮まで残る足場と帰路を優先して釣り座を選ぶ。",
    "caution": [
      "高い段差の下へ降りず、潮が上がる前に余裕を持って戻る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/taharanisikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.647402/137.336547/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yoltukaitikasumiturikouenn",
    "name": "霞釣り公園（霞埠頭）",
    "prefecture": "三重県",
    "lat": 34.982559,
    "lng": 136.672776,
    "primaryType": "sea-park",
    "fish": [
      "マアジ",
      "カレイ",
      "クロダイ",
      "マサバ",
      "マイワシ",
      "ウミタナゴ",
      "スズキ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "霞埠頭の釣り公園として整えられた護岸。アジなどの小型回遊魚を足元で探り、底のカレイやクロダイを狙う場合も利用区画内で扱える仕掛けを選ぶ。",
    "caution": [
      "工業港の岸壁全体へ広がらず、公園の柵内と現地の指定範囲を守る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/yoltukaitikasumiturikouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.982559/136.672776/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-isesimuramatu",
    "name": "村松漁港",
    "prefecture": "三重県",
    "lat": 34.548436,
    "lng": 136.688783,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "伊勢の村松漁港。砂浜へ伸びる突堤周辺でキス・カレイ、港内でメバルや小型のスズキを探る候補になる。",
    "caution": [
      "河口の流れと波を確認し、夜間も漁業利用を妨げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/isesimuramatu.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.548436/136.688783/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tobasugajima",
    "name": "菅島港（菅島）",
    "prefecture": "三重県",
    "lat": 34.499253,
    "lng": 136.898789,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "アイナメ",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "鳥羽の菅島港。キス・カレイ・アイナメの底釣りや、メバル・クロダイを探る釣りが候補。根掛かりが多い場所は投入距離を短くして探る。",
    "caution": [
      "船便の往復時刻を確認。ブロックへ移らず、内向きで回収できる釣座を選ぶ。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/tobasugajima.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.499253/136.898789/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tobakamisima",
    "name": "神島港（神島）",
    "prefecture": "三重県",
    "lat": 34.550256,
    "lng": 136.980414,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "アイナメ",
      "カサゴ",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "伊良湖水道に面した神島の港。アジやメバル、カレイ・クロダイなどを狙う候補で、速い潮に仕掛けを流されすぎない工夫が必要になる。",
    "caution": [
      "沖側の大型ブロックを避け、定期船の運航・帰りの便を事前確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/tobakamisima.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.550256/136.980414/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kihokufurusatokaigann",
    "name": "古里海岸",
    "prefecture": "三重県",
    "lat": 34.180903,
    "lng": 136.3063,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "紀北町の古里海岸。砂浜からキスを探る投げ釣りの候補で、遠投より先に手前の砂底に反応がないか確認したい。",
    "caution": [
      "夏の海水浴利用中は釣りを控え、遊泳者と仕掛けが交わらないようにする。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/kihokufurusatokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.180903/136.3063/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kihokufunakosikaigann",
    "name": "船越海岸",
    "prefecture": "三重県",
    "lat": 34.120794,
    "lng": 136.282954,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "船越の砂浜で、砂地のシロギスを探る釣りが候補。浜の端は地形が変わるため、中央の短い距離から底の感触を確かめて投入を広げる。",
    "caution": [
      "周辺の駐車余地は限られる。通行路や私有地への駐車はしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/kihokufunakosikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.120794/136.282954/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miepa-kusitirimihamamae",
    "name": "道の駅パーク七里御浜前",
    "prefecture": "三重県",
    "lat": 33.803828,
    "lng": 136.044688,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "メジナ",
      "シログチ",
      "マダイ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "阿田和の道の駅付近に広がる七里御浜。砂地のシロギスに加え、沖の人工リーフ周辺を意識したメジナ・マダイなどが候補になる。浜から回収できる範囲を見極めたい。",
    "caution": [
      "沖の構造物へ渡る釣り場ではありません。急なうねりに備え波打ち際から距離を取る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/miepa-kusitirimihamamae.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.803828/136.044688/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-niigataizumosakigyokou",
    "name": "出雲崎漁港",
    "prefecture": "新潟県",
    "lat": 37.54143,
    "lng": 138.684111,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "出雲崎の漁港。アジのサビキとメバル・クロダイ、季節のアオリイカを港内側から探る候補になる。",
    "caution": [
      "外側の高いブロックへ上がらず、漁船とロープの位置を見て投入する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigataizumosakigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.54143/138.684111/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-niigataagewakaigann",
    "name": "上輪海岸",
    "prefecture": "新潟県",
    "lat": 37.327564,
    "lng": 138.450286,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "山間の集落前にある上輪海岸。キスやクロダイを狙う投げ釣りの候補だが、砂浜の幅は侵食や季節で変わるため現地の足場を見て判断する。",
    "caution": [
      "砂浜が狭い場合は無理に竿を出さない。海水浴の利用を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigataagewakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.327564/138.450286/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-niigatayoneyamakaigann",
    "name": "米山海岸（聖ヶ鼻）",
    "prefecture": "新潟県",
    "lat": 37.324646,
    "lng": 138.437519,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "スズキ",
      "サワラ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "米山海岸はキスやヒラメ・マゴチを狙う砂浜。海岸の背後に鉄道が通るため、正式な通路で入れる範囲を釣行先として選ぶ。",
    "caution": [
      "線路を横断しない。聖ヶ鼻の岩場と砂浜では必要な装備が異なる。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatayoneyamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.324646/138.437519/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-niigatakakizakicyuuoukaigann",
    "name": "柿崎中央海岸",
    "prefecture": "新潟県",
    "lat": 37.282026,
    "lng": 138.388853,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "スズキ",
      "サワラ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "柿崎中央の広い砂浜。キスを狙う底の釣りと、ヒラメ・マゴチや回遊する青物のルアー釣りを、風と波に合わせて選ぶ。",
    "caution": [
      "人の通行を確認してから投げ、強風時は飛距離より安全な回収を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatakakizakicyuuoukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.282026/138.388853/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-niigatajyougehama",
    "name": "上下浜",
    "prefecture": "新潟県",
    "lat": 37.251066,
    "lng": 138.351066,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "サワラ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "上下浜はシロギスの投げ釣りを軸に、ヒラメ・マゴチも候補になる海岸。回遊魚を狙う場合は小魚や潮の筋を観察し、釣れていない時間に無理な遠投を続けない。",
    "caution": [
      "遊泳者やほかの海面利用者がいる区域を避け、波の高い日は近づかない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatajyougehama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.251066/138.351066/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-niigataunohama",
    "name": "鵜の浜",
    "prefecture": "新潟県",
    "lat": 37.241501,
    "lng": 138.336046,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "サワラ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "鵜の浜の砂浜で、シロギスやヒラメ・マゴチを狙う候補地。沖の消波ブロックの配置を確認し、仕掛けを引っ掛けずに回収できる筋から探る。",
    "caution": [
      "海水浴場の開設期間は利用区画を確認し、消波ブロックへ渡らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigataunohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.241501/138.336046/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-niigatatanihama",
    "name": "谷浜",
    "prefecture": "新潟県",
    "lat": 37.163634,
    "lng": 138.174362,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ブリ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "谷浜の砂浜ではシロギスの底釣りが候補になる。沖の構造物が近い場所は根掛かりと波に注意し、砂地の回収経路を先に確かめてから投入する。",
    "caution": [
      "砂がつながって見える消波ブロックへ歩いて渡らず、浜側で釣りをする。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatatanihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.163634/138.174362/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-niigatamomokawakaigann",
    "name": "百川海岸",
    "prefecture": "新潟県",
    "lat": 37.114387,
    "lng": 138.02139,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "百川海岸は、砂地のシロギスを短い距離から探る釣り場。反応のあった位置を覚えながら距離を変え、底の重さが急に増す場所では無理に引き続けない。",
    "caution": [
      "海岸への出入口を塞がず、駐車できる範囲は現地の案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatamomokawakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.114387/138.02139/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-niigataosiagekaigann",
    "name": "押上海岸",
    "prefecture": "新潟県",
    "lat": 37.051324,
    "lng": 137.879148,
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
    "note": "押上海岸のサーフでは、シロギスの底釣りとヒラメ・マゴチのルアー釣りが候補になる。流れの筋や小魚を目安に、手前から段階的に探る。",
    "caution": [
      "波の打ち上げが強い日は釣りを控え、道路からの横断にも注意する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigataosiagekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/37.051324/137.879148/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-toyamakozakai",
    "name": "小境海岸",
    "prefecture": "富山県",
    "lat": 36.916669,
    "lng": 137.025733,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging"
    ],
    "note": "氷見の小境海岸。砂底のキスと障害物周辺の根魚・クロダイ・アオリイカで狙い方が変わる海岸。",
    "caution": [
      "小さなブロックでも転落の危険がある。遊泳利用中は釣りを控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba4/toyamakozakai.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.916669/137.025733/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-toyamaikedahama",
    "name": "池田浜",
    "prefecture": "富山県",
    "lat": 36.867193,
    "lng": 136.983654,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "高岡の池田浜は整備された護岸沿いの岸釣り候補。キスを砂底で、メバル・キジハタ・クロダイを敷石周辺で探り分ける。",
    "caution": [
      "手前の石に掛けないよう回収し、護岸の通行者を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba4/toyamaikedahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.867193/136.983654/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-toyamasinnminatonisi",
    "name": "新湊西漁港",
    "prefecture": "富山県",
    "lat": 36.787532,
    "lng": 137.080257,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "カサゴ",
      "キジハタ",
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
    "note": "新湊西漁港。港内側のアジ・サヨリ・キスと、障害物周辺の根魚・クロダイを狙い分ける候補。船道へ仕掛けを流さないよう注意する。",
    "caution": [
      "外側のブロックへ無理に移らず、最新の開放範囲を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba4/toyamasinnminatonisi.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.787532/137.080257/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-toyamaebiekaihinn",
    "name": "海老江海浜公園",
    "prefecture": "富山県",
    "lat": 36.769074,
    "lng": 137.142527,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "メバル",
      "カサゴ",
      "キジハタ",
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
    "note": "海老江海浜公園の周囲にある波止・護岸。キジハタ・クロダイなどを探る釣りと、砂浜側のキス狙いで仕掛けを分けたい。",
    "caution": [
      "公園のゲート閉鎖時刻を確認し、消波ブロックへ無理に上がらない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/toyamaebiekaihinn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.769074/137.142527/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-toyamakyoudenngyokou",
    "name": "経田漁港",
    "prefecture": "富山県",
    "lat": 36.856497,
    "lng": 137.410297,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "ブリ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "経田漁港外側の砂浜周辺。キス・カレイの投げ釣りと、ヒラメ・マゴチ・回遊する青物を狙うルアー釣りが候補になる。",
    "caution": [
      "漁港の作業区画を通り道にせず、波の高い日は砂浜へ降りない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/toyamakyoudenngyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.856497/137.410297/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-toyamamiyazakigyokou",
    "name": "宮崎漁港",
    "prefecture": "富山県",
    "lat": 36.973878,
    "lng": 137.589426,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "ブリ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "富山県東端の宮崎漁港。アジやサヨリの回遊、クロダイ・メバル・キジハタを候補に、港内の足場から探る。高い白灯側の波止や外向きの巨大なブロック帯とは分けて考えたい。",
    "caution": [
      "少人数しか入れない区画を無理に使わず、ブロックに降りて場所を広げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/toyamamiyazakigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.973878/137.589426/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-isikawautinadakaigann",
    "name": "内灘海岸",
    "prefecture": "石川県",
    "lat": 36.64425,
    "lng": 136.62559,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "内灘の砂浜ではシロギスの投げ釣りが候補になる。広い浜でもサーフィンや遊泳の利用を先に確認し、人のいない方向で短い距離から探る。",
    "caution": [
      "砂浜への車の進入可否を確認し、海水浴期間・区域では釣りを控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba7/isikawautinadakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.64425/136.62559/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-isikawakomaikokaigann",
    "name": "小舞子海岸",
    "prefecture": "石川県",
    "lat": 36.480156,
    "lng": 136.472104,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "小舞子海岸は、浜からシロギスを探る投げ釣りの候補。沖の消波ブロックへ渡る釣りとは分け、砂浜から回収できる範囲で底の変化を探りたい。",
    "caution": [
      "海水浴期間は釣りを控え、沖堤や消波ブロックへ渡らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba7/isikawakomaikokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.480156/136.472104/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-isikawaatakakaigann",
    "name": "安宅海岸",
    "prefecture": "石川県",
    "lat": 36.420057,
    "lng": 136.41685,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "梯川河口の安宅海岸で、シロギスや河口周辺のスズキ・クロダイを狙い分ける。河川からの濁りと海の波を見ながら、足場の残る浜側を選ぶ。",
    "caution": [
      "河口へ立ち込まず、増水時と強い流れのある日は釣りをしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba7/isikawaatakakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.420057/136.41685/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-eekatayamadu",
    "name": "片山津海岸",
    "prefecture": "石川県",
    "lat": 36.345913,
    "lng": 136.293125,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ブリ",
      "スズキ",
      "サワラ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "片山津の砂利混じりの海岸。シロギスの底釣りを軸に、小魚の接岸時にはスズキや回遊魚のルアー釣りも候補になる。波の崩れる筋と回収時の足元を確認したい。",
    "caution": [
      "波が砂利浜へ強く駆け上がる日は近づかず、背後に退ける余地を確保する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/eekatayamadu.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.345913/136.293125/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-isikawasioyakaigann",
    "name": "塩屋海岸",
    "prefecture": "石川県",
    "lat": 36.29977,
    "lng": 136.250725,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "スズキ",
      "サワラ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "加賀の塩屋海岸は、広い砂地でシロギスを探る候補地。ヒラメ・マゴチのルアー釣りでは、底を擦り続けず手前の地形変化を順番に通して反応を見たい。",
    "caution": [
      "海水浴・散策の利用を避け、強風や高波で仕掛けを制御できないときは釣りを控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/isikawasioyakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.29977/136.250725/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuioomigyokou",
    "name": "大味漁港",
    "prefecture": "福井県",
    "lat": 36.049203,
    "lng": 136.016407,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "大味川が流れ込む小さな大味漁港。アジ・メバル・クロダイやアオリイカ、河川の影響を受けるスズキを探る候補。",
    "caution": [
      "浅い港内の係留索に注意し、川の増水時は釣りを控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/fukuioomigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.049203/136.016407/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuikokonogi",
    "name": "小樟漁港",
    "prefecture": "福井県",
    "lat": 35.938666,
    "lng": 135.991237,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "越前漁港の小樟地区。アジ・メバルなどを港内側で探り、季節に応じてアオリイカやヤリイカを狙う。外海の波が強い日は波止先端へ進まない。",
    "caution": [
      "外向きの大きな消波ブロックを避け、通行可能な平らな足場を使う。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/fukuikokonogi.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.938666/135.991237/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuikuriyakou",
    "name": "厨漁港",
    "prefecture": "福井県",
    "lat": 35.929423,
    "lng": 135.997374,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "越前漁港の厨地区。高い外側の防波堤を越えず、内向きの釣座でアジや根魚を探る。イカ狙いは船・係留索から離れて投入する。",
    "caution": [
      "遊漁船の乗船場・漁業作業場を空ける。冬季は波と凍結を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/fukuikuriyakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.929423/135.997374/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kyoutokuritagyokou",
    "name": "栗田漁港",
    "prefecture": "京都府",
    "lat": 35.55213,
    "lng": 135.237923,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ",
      "ヒラメ",
      "マゴチ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "栗田湾奥の漁港。アジやキス、クロダイを探り、季節に応じてアオリイカを狙う候補になる。比較的風を避けやすい湾内でも当日の海況を確認したい。",
    "caution": [
      "駐車・開放区画は現地の最新案内を確認し、古い料金表を前提にしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/kyoutokuritagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.55213/135.237923/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kyoutokumihamahamakouenn",
    "name": "久美浜浜公園",
    "prefecture": "京都府",
    "lat": 35.609179,
    "lng": 134.897132,
    "primaryType": "pier",
    "fish": [
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "サヨリ",
      "コウイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "uki"
    ],
    "note": "久美浜湾の奥にある公園前の水辺。スズキやクロダイをルアーで探る場所として知られ、外海の波止とは違う湾内の流れを読む釣りになる。",
    "caution": [
      "公園の通行者を優先し、キャスト前は背後を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/kyoutokumihamahamakouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.609179/134.897132/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougokoubekuukou",
    "name": "神戸空港ベランダ",
    "prefecture": "兵庫県",
    "lat": 34.641011,
    "lng": 135.226228,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "メバル",
      "アイナメ",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "マイワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "神戸空港北側のベランダ。港内の小魚の回遊を見ながらサビキや根魚狙いを組み立て、足元が浅い区画は棚を調整する。",
    "caution": [
      "空港施設の立入範囲と釣りの利用規則を確認し、手すりを越えない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。",
      "黄色い通路部分では釣りをしないでください。近くにトイレはないため出発前に確認。空港島の他の護岸が開放されているわけではありません。"
    ],
    "sources": [
      {
        "label": "神戸市：空港島西緑地の釣りルール",
        "url": "https://www.city.kobe.lg.jp/a42810/business/kowanjigyo/kobekukonishiryokuchi-tsuri.html"
      },
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/hyougokoubekuukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.641011/135.226228/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougoakasiberannda",
    "name": "明石海浜ベランダ",
    "prefecture": "兵庫県",
    "lat": 34.642282,
    "lng": 135.009055,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "アイナメ",
      "カサゴ",
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
    "note": "明石市役所南側の海浜ベランダ。足元から沖へ変わる底と速い潮が特徴で、流れが緩む時間にサビキや根魚・カレイ狙いを組み立てる。",
    "caution": [
      "満潮時の波しぶきと速い潮に注意。隣の仕掛けへ流れる前に回収する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/hyougoakasiberannda.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.642282/135.009055/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougoakasikouakatouhato",
    "name": "明石港・赤灯波止",
    "prefecture": "兵庫県",
    "lat": 34.640676,
    "lng": 134.980431,
    "primaryType": "pier",
    "fish": [
      "メバル",
      "アイナメ",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "スズキ",
      "タチウオ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "明石海浜ベランダ西側に伸びる波止。メバル・カサゴ・クロダイやアオリイカを狙う候補で、潮が速い時間は短い投入から状況を見る。",
    "caution": [
      "外側のブロックは足場が悪い。無理に先端へ進まず、取り込み場所を先に確保する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/hyougoakasikouakatouhato.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.640676/134.980431/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougofukudomarinisihato",
    "name": "福泊漁港",
    "prefecture": "兵庫県",
    "lat": 34.769273,
    "lng": 134.739525,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "サヨリ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "福泊漁港西側の波止周辺。キス・カレイ、メバル・サヨリなどを狙う候補。徒歩移動と駐車の計画を先に立てたい。",
    "caution": [
      "車止めより先へ車両で入らない。駐車場所が確保できない場合は別の施設を選ぶ。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougofukudomarinisihato.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.769273/134.739525/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougotubasakou",
    "name": "翼港",
    "prefecture": "兵庫県",
    "lat": 34.557343,
    "lng": 135.012467,
    "primaryType": "sea-park",
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "マイワシ",
      "ブリ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "淡路夢舞台前にある淡路交流の翼港。内向きのサビキと潮が当たる護岸の回遊魚狙いを、当日の開放区画に合わせて選ぶ管理された釣り場。",
    "caution": [
      "営業時間・清掃協力金・立入範囲は運営公式の最新案内を確認。船の桟橋を釣座にしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。",
      "2026年の護岸工事による一部制限は8月27日に解除との運営案内。釣り・係船では利用条件が異なるため、当日の最新情報を確認してください。"
    ],
    "sources": [
      {
        "label": "淡路夢舞台：翼港の最新のお知らせ・利用案内",
        "url": "https://www.yumebutai.co.jp/"
      },
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba4/hyougotubasakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.557343/135.012467/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougosiotagyokou",
    "name": "塩田漁港",
    "prefecture": "兵庫県",
    "lat": 34.418487,
    "lng": 134.901059,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "塩田の波止からアジやキス、メバル・クロダイ、アオリイカを探る岸釣りの候補。浅い場所と船道を見分けて仕掛けを投入する。",
    "caution": [
      "周囲の駐車余地は限られる。集落の通路や住宅前へ駐車しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/hyougosiotagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.418487/134.901059/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougotakenokuti",
    "name": "炬口漁港",
    "prefecture": "兵庫県",
    "lat": 34.35279,
    "lng": 134.893656,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "マイワシ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "洲本の炬口漁港。陸続きの波止でアジ・イワシの回遊やクロダイ・根魚、季節のタチウオなどを探る候補になる。",
    "caution": [
      "波止の高さを確認し、取り込みに必要な道具を用意する。開放範囲は現地案内を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba4/hyougotakenokuti.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.35279/134.893656/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougoanagakou",
    "name": "阿那賀漁港",
    "prefecture": "兵庫県",
    "lat": 34.270393,
    "lng": 134.668071,
    "primaryType": "port",
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
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "淡路島南西部の阿那賀漁港。アジやキス、メバル・クロダイ・アオリイカが候補になるが、外側は消波ブロックの多い釣り場。",
    "caution": [
      "ブロックの大きさだけで安全と判断せず、波をかぶらない平らな足場を選ぶ。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/hyougoanagakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.270393/134.668071/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougomaruyamasinnkou",
    "name": "丸山新港",
    "prefecture": "兵庫県",
    "lat": 34.293548,
    "lng": 134.658952,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
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
    "note": "淡路島の丸山新港。アジの回遊と、メバル・クロダイ・アオリイカを探る候補。内向きの釣りでは係留索を避けて短く投入する。",
    "caution": [
      "波止外側のブロックへ無理に上がらず、漁業作業の場所を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/hyougomaruyamasinnkou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.293548/134.658952/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougokehinohama",
    "name": "気比堤防・気比の浜",
    "prefecture": "兵庫県",
    "lat": 35.643347,
    "lng": 134.838102,
    "primaryType": "beach",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "スズキ",
      "サワラ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "円山川河口近くの気比の浜。キスの投げ釣り、ヒラメ・マゴチやスズキのルアー釣りを、砂浜側から考えたい。",
    "caution": [
      "気比堤防には頭上の電線がある。竿・仕掛けを近づけず、海水浴利用中は浜で釣りをしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougokehinohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.643347/134.838102/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougokirihamagyokou",
    "name": "切浜",
    "prefecture": "兵庫県",
    "lat": 35.660208,
    "lng": 134.744525,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "eging"
    ],
    "note": "切浜海水浴場の砂浜。キスの投げ釣りを短い距離から試せる候補で、北側の漁港とは足場と利用条件が異なる。",
    "caution": [
      "遊泳者がいる時期は竿を出さず、隣接する港のブロックへ無理に移らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougokirihamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.660208/134.744525/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougosazuhama",
    "name": "佐津浜",
    "prefecture": "兵庫県",
    "lat": 35.639441,
    "lng": 134.620264,
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
    "note": "但馬の佐津浜。砂浜からキスを探る釣りや、ヒラメ・マゴチを狙うルアー釣りの候補。湾内でもうねりが入る日は無理をしない。",
    "caution": [
      "海水浴の季節は遊泳利用を優先し、釣りを控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougosazuhama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.639441/134.620264/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougosimonohamakou",
    "name": "下浜港",
    "prefecture": "兵庫県",
    "lat": 35.645945,
    "lng": 134.614427,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging"
    ],
    "note": "香住の下浜港。アジ・メバル・アオリイカを狙う小港で、まず波止と港内側の利用可能な足場を確認する。",
    "caution": [
      "周辺に大きな駐車場がある前提で訪れず、住民の通行を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougosimonohamakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.645945/134.614427/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougomitahama",
    "name": "三田浜",
    "prefecture": "兵庫県",
    "lat": 35.651856,
    "lng": 134.605136,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "香美町の入り江にある三田浜。キスの投げ釣りを短い距離から試し、底の感触が変わる部分を探る砂浜。",
    "caution": [
      "海水浴・カヤック利用者の進路へ仕掛けを投げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougomitahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.651856/134.605136/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hyougokisidagawakakou",
    "name": "岸田川河口",
    "prefecture": "兵庫県",
    "lat": 35.62896,
    "lng": 134.451928,
    "primaryType": "estuary",
    "fish": [
      "シロギス",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "浜坂の岸田川河口。スズキを狙うルアー釣りと、隣接する砂浜のキス狙いで投入する方向が変わる。",
    "caution": [
      "増水時は利用しない。浜坂県民サンビーチの遊泳期間・利用範囲を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/hyougokisidagawakakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.62896/134.451928/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-oosakaturuhama",
    "name": "鶴浜緑地",
    "prefecture": "大阪府",
    "lat": 34.640482,
    "lng": 135.447328,
    "primaryType": "sea-park",
    "fish": [
      "マアジ",
      "クロダイ",
      "マサバ",
      "マイワシ",
      "スズキ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "鶴浜緑地西側の魚釣り開放区域。護岸でサビキやチヌ・ハネ狙いを楽しむ場所として大阪市が案内している。",
    "caution": [
      "緑地北側の工事区域や運動場とは利用範囲が異なる。再整備に伴う最新の案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。",
      "公園の整備工事と釣り可能区画を分けて確認し、工事柵や作業動線に入らないでください。"
    ],
    "sources": [
      {
        "label": "大阪市：鶴浜緑地の整備・利用について",
        "url": "https://www.city.osaka.lg.jp/seisakukikakushitsu/page/0000666980.html"
      },
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://osaka.turihiroba.com/turiba/oosakaturuhama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.640482/135.447328/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-oosakasiohamafutou",
    "name": "塩浜埠頭",
    "prefecture": "大阪府",
    "lat": 34.590471,
    "lng": 135.462863,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "クロダイ",
      "マサバ",
      "マイワシ",
      "スズキ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "堺の塩浜埠頭はハネ・チヌや季節の回遊魚を狙う岸壁の候補。船や係留索から離れ、足元から探れる区画を先に確認する。",
    "caution": [
      "車の横付けを保証する場所ではない。港湾作業を優先し、釣り可能な区画を現地で確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://osaka.turihiroba.com/turiba/oosakasiohamafutou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.590471/135.462863/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-oosakakyuusakaikou",
    "name": "旧堺港",
    "prefecture": "大阪府",
    "lat": 34.583245,
    "lng": 135.46428,
    "primaryType": "pier",
    "fish": [
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "uki"
    ],
    "note": "旧堺港周囲の護岸。チヌやハネを狙い、岸壁沿いの変化を探るルアー釣りや餌釣りの候補になる。",
    "caution": [
      "大浜公園・港の利用者を優先し、航路へ長く仕掛けを流さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://osaka.turihiroba.com/turiba/oosakakyuusakaikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.583245/135.46428/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-oosakahamadera",
    "name": "浜寺運河",
    "prefecture": "大阪府",
    "lat": 34.53419,
    "lng": 135.430677,
    "primaryType": "pier",
    "fish": [
      "クロダイ",
      "キビレ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "浜寺運河の護岸。ハゼを短い仕掛けで探る釣りと、クロダイ・キビレ・スズキをルアーで狙う釣りが候補になる。",
    "caution": [
      "漕艇など水面利用者を優先し、対岸まで届く投入や航行を妨げる置き竿をしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://osaka.turihiroba.com/turiba/oosakahamadera.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.53419/135.430677/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-oosakatarui",
    "name": "樽井漁港",
    "prefecture": "大阪府",
    "lat": 34.381182,
    "lng": 135.258307,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "マサバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "樽井漁港の岸釣り候補。回遊するアジ・イワシと、メバル・クロダイなどを狙い分けられる。港内の海上釣り堀とは別の場所として計画する。",
    "caution": [
      "消波ブロックへの移動を前提にしない。路肩への駐車や漁業車両の妨害を避ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://osaka.turihiroba.com/turiba/oosakatarui.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.381182/135.258307/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-oosakaonosatogawakakou",
    "name": "男里川河口",
    "prefecture": "大阪府",
    "lat": 34.374223,
    "lng": 135.250647,
    "primaryType": "estuary",
    "fish": [
      "シロギス",
      "カレイ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "男里川が大阪湾へ出る河口。干潟が広がり、ハゼやキス、スズキを狙う候補になる。潮位で水際が大きく変わるため陸側から足場を判断する。",
    "caution": [
      "干潟へ無理に入らず、増水と満ち潮による帰路の水没に注意する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://osaka.turihiroba.com/turiba/oosakaonosatogawakakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.374223/135.250647/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-oosakasimosou",
    "name": "下荘漁港",
    "prefecture": "大阪府",
    "lat": 34.342834,
    "lng": 135.206316,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "マサバ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "箱作駅側から徒歩で向かえる下荘漁港。キス・カレイの底釣りと、小型回遊魚・根魚を狙う釣りが候補になる。",
    "caution": [
      "道幅と駐車台数に余裕がある場所ではない。ブロック上へ無理に移動しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://osaka.turihiroba.com/turiba/oosakasimosou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.342834/135.206316/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-wwwakaura",
    "name": "和歌浦漁港",
    "prefecture": "和歌山県",
    "lat": 34.187488,
    "lng": 135.161941,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "マサバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "和歌浦漁港は砂底のキス・カレイと、アジなどの回遊を狙い分ける港。根魚・クロダイやイカは障害物の位置を確認して探る。",
    "caution": [
      "漁港の作業・観光利用を優先し、波止の開放範囲を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣具店マルニシ：2026年の和歌浦実釣情報",
        "url": "https://f-marunishi.com/fishing/91908/"
      },
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://wakayama.turihiroba.com/turiba/wwwakaura.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.187488/135.161941/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-wakayamawakagawakakou",
    "name": "和歌川河口（片男波）",
    "prefecture": "和歌山県",
    "lat": 34.184222,
    "lng": 135.169408,
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
    "note": "片男波の砂浜から和歌川河口へ続く海岸。キスの底釣りと、ヒラメ・マゴチ・スズキを探るルアー釣りが候補になる。",
    "caution": [
      "河口までの徒歩距離と帰路を確認し、海水浴の利用範囲では釣りを控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamawakagawakakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.184222/135.169408/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-wakayamatidagyokou",
    "name": "千田漁港",
    "prefecture": "和歌山県",
    "lat": 34.064499,
    "lng": 135.136085,
    "primaryType": "port",
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
    "note": "有田の千田漁港。アジ・クロダイ・アオリイカを内向きから探る候補。大波止の外側より、平らな港内側で回収経路を確認したい。",
    "caution": [
      "網干場を駐車場所にしない。高い外壁・ブロックへ上がらない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamatidagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.064499/135.136085/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-wakayamaegawagyokou",
    "name": "江川漁港",
    "prefecture": "和歌山県",
    "lat": 33.730389,
    "lng": 135.36094,
    "primaryType": "port",
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
    "note": "田辺の江川漁港。アジの回遊やクロダイ、アオリイカを探る岸釣りの候補。波止は内向きを中心に、係留索を避けて投入する。",
    "caution": [
      "外側の大きなブロックと、漁業関係者の作業スペースを避ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://wakayama.turihiroba.com/turiba/wakayamaegawagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.730389/135.36094/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-okayamahinasekou",
    "name": "日生港",
    "prefecture": "岡山県",
    "lat": 34.731509,
    "lng": 134.26928,
    "primaryType": "port",
    "fish": [
      "カレイ",
      "クロダイ",
      "サヨリ",
      "コウイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "牡蠣養殖の拠点でもある日生港。ママカリ・サヨリ、カレイ・クロダイなどを岸から探る候補だが、荷揚げや養殖作業を優先する。",
    "caution": [
      "漁具・養殖設備へ仕掛けを投げず、岸壁ごとの立入条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/okayamahinasekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.731509/134.26928/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-okayamamusiroekaigann",
    "name": "むしろえ海岸",
    "prefecture": "岡山県",
    "lat": 34.618976,
    "lng": 134.172807,
    "primaryType": "beach",
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "牛窓第二海水浴場とも呼ばれるむしろえ海岸。砂浜でキスやイイダコを探る候補だが、遊泳期間以外でも利用者を見て釣座を選ぶ。",
    "caution": [
      "海水浴・水辺遊びの利用中は釣りを控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/okayamamusiroekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.618976/134.172807/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-okayamakogusikou",
    "name": "小串港",
    "prefecture": "岡山県",
    "lat": 34.597483,
    "lng": 134.029276,
    "primaryType": "port",
    "fish": [
      "クロダイ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "児島湾南側の小串港。ハゼや小型のスズキ、クロダイ、ママカリを探る候補。湾内の流れに仕掛けを乗せすぎないよう短く管理する。",
    "caution": [
      "小さな港なので係留船の出入りが始まったら速やかに回収する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/okayamakogusikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.597483/134.029276/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-okayamasinntaikou",
    "name": "新田井港",
    "prefecture": "岡山県",
    "lat": 34.501128,
    "lng": 133.959947,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "コウイカ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "玉野の新田井港。岸壁でママカリ・サヨリ・アジの回遊を探り、メバル・クロダイやイカ狙いへ切り替えられる。",
    "caution": [
      "岸壁の車両横付け可否は現地確認。作業用の岸壁や船道を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/okayamasinntaikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.501128/133.959947/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-okayamaunokou",
    "name": "宇野港",
    "prefecture": "岡山県",
    "lat": 34.492745,
    "lng": 133.951643,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "ブリ",
      "コウイカ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "宇野港は旅客船・漁船が行き交う港。ママカリやサヨリの回遊を探す岸釣りでは、利用できる区画と船の進路を分けて把握したい。",
    "caution": [
      "フェリーターミナルや乗船桟橋では竿を出さない。駐車場満車時は路上待機しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/okayamaunokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.492745/133.951643/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-okayamaobatakekouenn",
    "name": "大畠釣り公園",
    "prefecture": "岡山県",
    "lat": 34.440664,
    "lng": 133.815193,
    "primaryType": "sea-park",
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
    "note": "大畠の柵付き護岸で、サヨリ・小型回遊魚とシロギス・カレイを狙い分ける。潮の向きを見て仕掛けが隣へ流れない距離に収めると、釣り座を共有しやすい。",
    "caution": [
      "釣り場への道路は狭い。駐車場所と転回できる経路を事前に確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/okayamaobatakekouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.440664/133.815193/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-okayamaoomurokou",
    "name": "大室港（大室新港）",
    "prefecture": "岡山県",
    "lat": 34.444769,
    "lng": 133.780797,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "サヨリ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "下津井の大室地区。キス・カレイやクロダイ、ママカリ・サヨリの回遊を探る港で、北側と新港側の利用条件を確認したい。",
    "caution": [
      "釣り客向けの駐車余地が限られるため、周辺道路へ無理に駐車しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/okayamaoomurokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.444769/133.780797/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-okayamatakamurosinnkou",
    "name": "高室新港（高室港）",
    "prefecture": "岡山県",
    "lat": 34.452006,
    "lng": 133.775218,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "サヨリ",
      "ブリ",
      "コウイカ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "高室地区の新港側にある波止・岸壁。サヨリやママカリ、底のキス・カレイ、季節のコウイカなどを狙い分ける釣り場。",
    "caution": [
      "漁港作業を優先し、狭い波止で複数の竿を広げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/okayamatakamurosinnkou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.452006/133.775218/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-okayamasinnkasaokakou",
    "name": "新笠岡港",
    "prefecture": "岡山県",
    "lat": 34.503197,
    "lng": 133.503435,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "クロダイ",
      "マイワシ",
      "サヨリ",
      "コウイカ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "新笠岡港の岸壁。ママカリ・サヨリ・アジなどを探す釣りと、クロダイやコウイカなどを狙う釣りの候補になる。",
    "caution": [
      "車の横付けを前提にせず、荷役・船の発着・漁業車両の動線を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/okayamasinnkasaokakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.503197/133.503435/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hirosimainokutikou",
    "name": "井口港",
    "prefecture": "広島県",
    "lat": 34.360832,
    "lng": 132.380555,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "メバル",
      "クロダイ",
      "マイワシ",
      "サヨリ",
      "コウイカ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "八幡川河口東側の井口港。ハゼ・キスの底釣りと、サヨリ・コノシロなどの回遊、クロダイ・スズキを狙う釣りが候補になる。",
    "caution": [
      "増水や強い流れの日は利用を控え、河口の船道へ仕掛けを流さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimainokutikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.360832/132.380555/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hirosimayosijimaturikouenn",
    "name": "吉島釣り公園",
    "prefecture": "広島県",
    "lat": 34.357307,
    "lng": 132.440722,
    "primaryType": "sea-park",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "マイワシ",
      "サヨリ",
      "ブリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "広島の吉島地区にある柵付きの海沿い護岸。アジなどの回遊魚を足元で探り、ハゼ・シロギスの底釣りは船の動線を避けて短く入れる。",
    "caution": [
      "駐車場の開閉と利用区画を確認し、夜間に柵の外へ降りない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimayosijimaturikouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.357307/132.440722/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hirosimakaigosigyokou",
    "name": "倉橋島・海越漁港",
    "prefecture": "広島県",
    "lat": 34.095068,
    "lng": 132.544749,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "マイワシ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "倉橋島の海越漁港。アジ・メバル、クロダイ・タチウオ・アオリイカを探る波止釣りの候補。まず平らな内向きの足場を確認する。",
    "caution": [
      "高さがあり幅の狭い波返しの上を通行しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimakaigosigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.095068/132.544749/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hirosimatainoutikou",
    "name": "倉橋島・袋の内港",
    "prefecture": "広島県",
    "lat": 34.138165,
    "lng": 132.54771,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "倉橋島の袋の内港。東側の波止からアジ・メバル、砂底のキス・カレイ、季節のイカを探る候補になる。",
    "caution": [
      "波止の縁に荷物を広げず、船の出入りと係留索を確認して投入する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimatainoutikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.138165/132.54771/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hirosimaoosakokou",
    "name": "倉橋島・大迫港",
    "prefecture": "広島県",
    "lat": 34.123067,
    "lng": 132.569232,
    "primaryType": "port",
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
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "倉橋島奥の大迫港。小さな港のアジ・メバル・クロダイ、キス・カレイを探り、季節に合わせてアオリイカも候補になる。",
    "caution": [
      "港内の空き地を自由な駐車場と考えず、住民と漁業利用を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimaoosakokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.123067/132.569232/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hirosimamiyanoharagyokou",
    "name": "江田島・宮ノ原漁港",
    "prefecture": "広島県",
    "lat": 34.249767,
    "lng": 132.46351,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "江田島湾に面した宮ノ原漁港。キス・カレイの投げ釣りやクロダイのウキ釣りを、波止ごとの底と流れに合わせて組み立てる。",
    "caution": [
      "湾内でも風波を確認し、船の航路を横切る投入をしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimamiyanoharagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.249767/132.46351/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hirosimanakamatikou",
    "name": "能美島・中町港",
    "prefecture": "広島県",
    "lat": 34.223903,
    "lng": 132.444177,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "能美島の中町港は旅客船が出入りする港。釣りを検討する場合は船着き場を外し、周辺の岸壁でシロギス・カレイやメバルを探る構成を考える。",
    "caution": [
      "旅客船の桟橋・乗降場で釣りをせず、係員の指示と運航を最優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimanakamatikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.223903/132.444177/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hirosimamitosirokou",
    "name": "下蒲刈島・見戸代港",
    "prefecture": "広島県",
    "lat": 34.198688,
    "lng": 132.676649,
    "primaryType": "port",
    "fish": [
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "下蒲刈島の見戸代港。小さな波止周りでメバル・クロダイ、季節のアオリイカを候補に、底へ落としすぎない軽い仕掛けから探る。",
    "caution": [
      "旧船着き場も自由に利用できるとは限らない。係留設備と規制表示を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimamitosirokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.198688/132.676649/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hirosimatadokou",
    "name": "上蒲刈島・田戸港",
    "prefecture": "広島県",
    "lat": 34.19741,
    "lng": 132.722547,
    "primaryType": "port",
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
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "上蒲刈島の田戸港は、小さな波止からシロギス・カレイとメバル・クロダイを狙い分ける候補地。釣り座が限られるので荷物をまとめ、投入方向を周囲と揃えたい。",
    "caution": [
      "船の接岸場所と係留索の周囲には竿を出さず、作業時は釣りを休む。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimatadokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.19741/132.722547/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hirosimaharagyokou",
    "name": "上蒲刈島・原漁港",
    "prefecture": "広島県",
    "lat": 34.173767,
    "lng": 132.663002,
    "primaryType": "port",
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
    "note": "上蒲刈島の原漁港では、砂地のシロギス・カレイと波止際のメバル・クロダイを狙い分ける。エギングをする場合も、船のロープがない回収経路を確保してから投入する。",
    "caution": [
      "小さな港を占有せず、漁業作業や住民の通行を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimaharagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.173767/132.663002/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hirosimasunamikaihinnkouenn",
    "name": "すなみ海浜公園",
    "prefecture": "広島県",
    "lat": 34.352896,
    "lng": 133.082092,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "コウイカ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "すなみ海浜公園に面する護岸。シロギスやサヨリ、メバル・クロダイを候補にできるが、波返しの高さによって釣りやすさが変わる。安全に仕掛けを入れ回収できる場所を選ぶ。",
    "caution": [
      "散歩の人が多い場所。柵や波返しを越えず、階段を荷物で塞がない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimasunamikaihinnkouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.352896/133.082092/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-hirosimasunamikou",
    "name": "須波港",
    "prefecture": "広島県",
    "lat": 34.360266,
    "lng": 133.083615,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "マイワシ",
      "サヨリ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "須波港は、波止周りの小型回遊魚とメバル・クロダイ、季節のイカ類を狙う候補地。サビキはまず短い仕掛けから始め、反応がなければ棚を変える。",
    "caution": [
      "旅客船や作業船の動線から離れ、荷揚げ場所を駐車・釣り座に使わない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimasunamikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.360266/133.083615/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-toltutorihoukikaigann",
    "name": "宝木海岸",
    "prefecture": "鳥取県",
    "lat": 35.519251,
    "lng": 133.529484,
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
    "note": "鳥取の宝木海岸。河内川が流れ込む東側を含む長い砂浜で、キスやヒラメ・マゴチ・スズキを探る候補になる。",
    "caution": [
      "車の砂浜への乗り入れを前提にせず、正式な通路と駐車条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutorihoukikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.519251/133.529484/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-toltutorifunaisokou",
    "name": "船磯港",
    "prefecture": "鳥取県",
    "lat": 35.522098,
    "lng": 134.01844,
    "primaryType": "port",
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
    "note": "長尾鼻の東側にある船磯港。アジのサビキを港内で試し、クロダイやアオリイカは潮の動きと係留索の位置を見て探る。",
    "caution": [
      "高い波返しへ上がらず、通行できる内向きの足場を使う。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutorifunaisokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.522098/134.01844/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-simanekumodukou",
    "name": "雲津港",
    "prefecture": "島根県",
    "lat": 35.571524,
    "lng": 133.280768,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "島根半島東部の雲津港。アジ・メバル・クロダイ、季節のアオリイカやヤリイカを探る候補。地磯より先に港の平らな足場を確認したい。",
    "caution": [
      "小港の作業場所を空け、波が高い日は外側へ移動しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/simanekumodukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.571524/133.280768/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-simanetikumikou",
    "name": "千酌港",
    "prefecture": "島根県",
    "lat": 35.565484,
    "lng": 133.139534,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "島根半島の千酌港。キス・メバル・クロダイやアオリイカを狙う波止釣りの候補で、内向きでも底の変化を探せる。",
    "caution": [
      "沖向きの高い消波ブロックへ無理に移らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/simanetikumikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.565484/133.139534/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-simanesanamikou",
    "name": "佐波港",
    "prefecture": "島根県",
    "lat": 35.576114,
    "lng": 133.067393,
    "primaryType": "port",
    "fish": [
      "メバル",
      "アオリイカ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "eging"
    ],
    "note": "佐波港はメバルやアオリイカを狙う釣りの候補になる小港。エギや軽い仕掛けを使う場合も、係留索から離れた回収しやすい方向を選ぶ。",
    "caution": [
      "集落内の通行と夜間の静けさに配慮する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/simanesanamikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.576114/133.067393/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-simanekagagyokou",
    "name": "加賀漁港",
    "prefecture": "島根県",
    "lat": 35.564577,
    "lng": 133.055055,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "コウイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "加賀漁港北側の岸壁。アジのサビキ、キス・カレイの底釣り、イカ狙いを選べる候補。桂島の地磯とは別の足場として計画する。",
    "caution": [
      "観光船や漁船の乗り場・航路を空け、岸壁の立入表示を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/simanekagagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.564577/133.055055/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-simaneaikakitakou",
    "name": "秋鹿北港",
    "prefecture": "島根県",
    "lat": 35.516771,
    "lng": 132.933991,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging"
    ],
    "note": "幹線道路から離れた秋鹿北港。小さな港のアジ・メバル・アオリイカを探る候補。初回は明るい時間に通路と釣座の広さを確認したい。",
    "caution": [
      "漁業車両が通れる幅を確保し、集落内で夜間に騒がない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/simaneaikakitakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.516771/132.933991/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-simanesakauragyokou",
    "name": "坂浦漁港",
    "prefecture": "島根県",
    "lat": 35.507269,
    "lng": 132.860155,
    "primaryType": "port",
    "fish": [
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "坂浦の集落前にある漁港。メバル・クロダイ・アオリイカを狙う候補で、沖側のブロック帯と港内側では回収の難しさが異なる。",
    "caution": [
      "ブロック上へ無理に上がらず、漁業作業に支障のない足場を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simanesakauragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.507269/132.860155/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-simanesasimigawakakou",
    "name": "差海川河口（長浜海岸）",
    "prefecture": "島根県",
    "lat": 35.355141,
    "lng": 132.671692,
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
    "note": "差海川河口の北に続く長浜海岸。キスの投げ釣りと、ヒラメ・マゴチ・スズキのルアー釣りを、河口の流れと波に合わせて探る。",
    "caution": [
      "河口が増水した日や高波の日は浜へ降りない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simanesasimigawakakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.355141/132.671692/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-simanetagikou",
    "name": "田儀港",
    "prefecture": "島根県",
    "lat": 35.271778,
    "lng": 132.582064,
    "primaryType": "port",
    "fish": [
      "メバル",
      "クロダイ",
      "アオリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "田儀川が流れ込む田儀港。メバル・クロダイ・アオリイカに加え、川の流れ周辺ではスズキを探る候補になる。",
    "caution": [
      "大きな消波ブロックへ無理に乗らず、川が増水した日は近づかない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simanetagikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.271778/132.582064/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-simaneiinasigawakakou",
    "name": "飯梨川河口",
    "prefecture": "島根県",
    "lat": 35.453993,
    "lng": 133.218992,
    "primaryType": "estuary",
    "fish": [
      "スズキ"
    ],
    "methodSlugs": [
      "surf-lure"
    ],
    "note": "中海へ注ぐ飯梨川の河口。スズキのルアー釣りで知られ、川の流れと湖側の水が接する変化を陸側から観察したい。",
    "caution": [
      "ウェーディングを前提にせず、ぬかるみ・増水・潮位変化を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/simaneiinasigawakakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.453993/133.218992/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-simaneyunotukou",
    "name": "温泉津港",
    "prefecture": "島根県",
    "lat": 35.093086,
    "lng": 132.343926,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "温泉津の入り江にある港。港内の足場でアジやシロギス、クロダイを候補にし、季節のアオリイカ・ヤリイカは係留索を避けた方向から探る。",
    "caution": [
      "岸壁へ車を横付けできるとは限らない。作業区画と通行路を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simaneyunotukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.093086/132.343926/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamaguchiihotakou",
    "name": "周防大島・伊保田港",
    "prefecture": "山口県",
    "lat": 33.944019,
    "lng": 132.439156,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ブリ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "周防大島先端側の伊保田港。アジ・メバル・クロダイなどを探り、潮と季節に応じてイカ・タチウオも候補になる。",
    "caution": [
      "高い波返しに上がる前提にせず、通行できる内側の足場を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/yamaguchiihotakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.944019/132.439156/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamaguchikatazoekou",
    "name": "周防大島・片添港",
    "prefecture": "山口県",
    "lat": 33.900253,
    "lng": 132.364225,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "タチウオ",
      "ケンサキイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "片添ヶ浜に隣接する港。アジ・メバルの岸釣り、砂底のキス、季節のイカを探る候補になる。",
    "caution": [
      "海水浴客のいる方向へ投げず、駐車・施設の利用条件は当日の案内を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/yamaguchikatazoekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.900253/132.364225/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamaguchiootumikou",
    "name": "周防大島・大積港",
    "prefecture": "山口県",
    "lat": 33.879555,
    "lng": 132.36474,
    "primaryType": "port",
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
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "周防大島の大積港。浅めの周囲でキス・カレイ、メバル・クロダイやアオリイカを狙う波止釣りの候補。",
    "caution": [
      "潮位が低い時間は底の障害物を確認し、船と係留索を避けて投入する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/yamaguchiootumikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.879555/132.36474/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamaguchiagenosyoukou",
    "name": "周防大島・安下庄港",
    "prefecture": "山口県",
    "lat": 33.89336,
    "lng": 132.289789,
    "primaryType": "port",
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
    "note": "安下庄港西側の波止・岸壁。アジ・サヨリの回遊と、キス・カレイ、メバルやアオリイカを探る候補になる。",
    "caution": [
      "近くの公園利用者と漁業作業を優先し、港全体を釣り可能と判断しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiagenosyoukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.89336/132.289789/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamaguchiyanaikou",
    "name": "柳井港",
    "prefecture": "山口県",
    "lat": 33.957012,
    "lng": 132.133384,
    "primaryType": "port",
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
    "note": "柳井港の周辺岸壁で、アジやシロギス・クロダイを探る候補地。旅客船と港湾作業のある港なので、船着き場から離れた利用可能な区画を確認してから仕掛けを準備する。",
    "caution": [
      "フェリー乗降場や作業岸壁では竿を出さず、管理者の指示を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiyanaikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.957012/132.133384/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamaguchiihonosyoukou",
    "name": "伊保庄港",
    "prefecture": "山口県",
    "lat": 33.914215,
    "lng": 132.128491,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "メバル",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "伊保庄の小さな港で、シロギスの底釣りとメバル・クロダイの探り釣りを狙い分ける。岸壁際と少し離れた砂地を短い仕掛けで順に確かめたい。",
    "caution": [
      "波止を荷物で塞がず、船と係留索を避けて回収できる方向に投入する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiihonosyoukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.914215/132.128491/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-yamaguchisirahamagyokou",
    "name": "白浜漁港（山口県）",
    "prefecture": "山口県",
    "lat": 33.833385,
    "lng": 132.119801,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "上関海峡の東側にある白浜漁港。アジ・メバル・クロダイと季節のアオリイカが候補になるが、外向きの消波ブロック帯とは切り分けて港内側の足場を選ぶ。",
    "caution": [
      "船の往来と流れに注意し、足場の悪いブロックへ降りない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchisirahamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.833385/132.119801/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kagawahiketagyokou",
    "name": "引田漁港",
    "prefecture": "香川県",
    "lat": 34.225731,
    "lng": 134.407125,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "マサバ",
      "マイワシ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki"
    ],
    "note": "引田漁港。アジ・イワシ・サバの回遊とクロダイ、季節のタチウオを狙う候補。荷揚げの始まる場所では竿を出さない。",
    "caution": [
      "作業中の波止・岸壁を空け、狭い入口や外側のブロックへ無理に進まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawahiketagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.225731/134.407125/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kagawakamanogyokou",
    "name": "鎌野漁港",
    "prefecture": "香川県",
    "lat": 34.392108,
    "lng": 134.153259,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "マイワシ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "庵治半島の鎌野漁港。アジなどのサビキや、メバル・クロダイ・カレイを探る釣りの候補。潮が速い時は投入距離と重さを調整する。",
    "caution": [
      "漁具・船の周囲を避け、先端の場所取りや通路への荷物放置をしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawakamanogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.392108/134.153259/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kagawatateisikou",
    "name": "立石港",
    "prefecture": "香川県",
    "lat": 34.360443,
    "lng": 134.116867,
    "primaryType": "port",
    "fish": [
      "メバル",
      "クロダイ",
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "屋島と庵治半島の間の湾奥にある立石港。ハゼ・メバル・クロダイを探る候補で、回遊魚だけに絞らず底と岸壁沿いを観察したい。",
    "caution": [
      "船の係留場所を避け、湾奥でも増水・強風時は利用を控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawatateisikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.360443/134.116867/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kagawahouraikaihinnkouenn",
    "name": "蓬莱海浜公園",
    "prefecture": "香川県",
    "lat": 34.309058,
    "lng": 133.778415,
    "primaryType": "pier",
    "fish": [
      "カレイ",
      "クロダイ",
      "サヨリ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "丸亀の蓬莱海浜公園沿いの護岸。サヨリ・カレイ・クロダイ・スズキが候補になるが、高い波返しの区画は無理に釣座にしない。",
    "caution": [
      "脚立で壁を越える利用を避け、通行路や作業車両の動線を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawahouraikaihinnkouenn.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.309058/133.778415/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kagawagomajiri",
    "name": "高谷漁港（ゴマジリ）",
    "prefecture": "香川県",
    "lat": 34.240065,
    "lng": 133.670225,
    "primaryType": "port",
    "fish": [
      "マアジ",
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
    "note": "ゴマジリとも呼ばれる高谷漁港。アジ・サヨリ、メバル・クロダイなどを狙う候補。足元の敷石を意識して仕掛けを回収する。",
    "caution": [
      "幅の狭い波返しへ上がらず、平らな場所から竿を出す。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawagomajiri.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.240065/133.670225/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kagawamurohamagyokou",
    "name": "室浜漁港（香川県）",
    "prefecture": "香川県",
    "lat": 34.232206,
    "lng": 133.606496,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "荘内半島先端側の室浜漁港。アジ・メバル・クロダイ、季節のタチウオやアオリイカを狙う小港。",
    "caution": [
      "集落内の駐車余地は限られる。住民の出入口や作業場所を塞がない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawamurohamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.232206/133.606496/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kagawakannonnjikou",
    "name": "観音寺港（財田川河口）",
    "prefecture": "香川県",
    "lat": 34.12559,
    "lng": 133.633854,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "クロダイ",
      "マサバ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "財田川河口の観音寺港。スズキのルアー釣りに加え、アジ・サバの回遊やハゼを探る候補になる。",
    "caution": [
      "河口の強い流れと船道を避け、港内の荷役・通行を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawakannonnjikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.12559/133.633854/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kagawahanainagyokou",
    "name": "花稲漁港",
    "prefecture": "香川県",
    "lat": 34.092473,
    "lng": 133.638017,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "花稲漁港は石積みの長い波止がある港。キス・カレイを底で探る釣りと、クロダイ・スズキを狙う釣りが候補になる。",
    "caution": [
      "石積みの隙間・濡れた足場に注意し、暗くなる前に帰路を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawahanainagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.092473/133.638017/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kagawatoyohamakou",
    "name": "豊浜港",
    "prefecture": "香川県",
    "lat": 34.081349,
    "lng": 133.630636,
    "primaryType": "port",
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
    "note": "観音寺の豊浜港。波止周りのクロダイやアオリイカ、砂底のキスを狙う候補で、同名の愛知県の港とは異なる。",
    "caution": [
      "先端の混雑時は無理に割り込まず、港内の船の出入りを優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawatoyohamakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.081349/133.630636/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kagawaminouragyokou",
    "name": "箕浦漁港",
    "prefecture": "香川県",
    "lat": 34.046686,
    "lng": 133.614264,
    "primaryType": "port",
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
    "note": "箕浦の港で、シロギス・クロダイと季節のアオリイカを狙う候補。東西の波止で風の受け方が変わるため、先端へ急がず仕掛けを扱いやすい内側から様子を見る。",
    "caution": [
      "漁業作業の場所を空け、駐車できる区画は現地で確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/kagawaminouragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.046686/133.614264/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tokusimaoonotoltutei",
    "name": "大野突堤（那賀川河口）",
    "prefecture": "徳島県",
    "lat": 33.948718,
    "lng": 134.68925,
    "primaryType": "pier",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "キビレ",
      "ブリ",
      "スズキ",
      "タチウオ",
      "サワラ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "那賀川河口北側の大野突堤。クロダイ・キビレや回遊魚を狙う候補で、長い波止を歩く前に風向きと帰路を確認する。",
    "caution": [
      "先端と川側のブロック帯へ無理に入らず、増水時は利用しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimaoonotoltutei.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.948718/134.68925/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tokusimayukigyokou",
    "name": "由岐漁港",
    "prefecture": "徳島県",
    "lat": 33.771763,
    "lng": 134.592776,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "マイワシ",
      "サヨリ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "由岐の入り江にある漁港。アジ・イワシ・サヨリの回遊を見ながら、クロダイ・メジナやアオリイカを狙う釣りへ切り替えられる。",
    "caution": [
      "住宅・宿泊施設の通路を塞がず、外側のブロックへ無理に上がらない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimayukigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.771763/134.592776/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tokusimaebisuhamagannpeki",
    "name": "恵比寿浜岸壁",
    "prefecture": "徳島県",
    "lat": 33.735279,
    "lng": 134.555848,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "マイワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "美波町の恵比寿浜岸壁。アジ・イワシを探る釣りに加え、クロダイやアオリイカが候補になる湾内の岸壁。",
    "caution": [
      "生き餌を泳がせる仕掛けは船・係留索の近くへ流さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimaebisuhamagannpeki.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.735279/134.555848/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tokusimamugigyokou",
    "name": "牟岐漁港",
    "prefecture": "徳島県",
    "lat": 33.667711,
    "lng": 134.421608,
    "primaryType": "port",
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
    "note": "牟岐漁港の岸釣り候補。アジ・キス・クロダイを港内側から探り、白灯側・赤灯側の通行条件を分けて確認する。",
    "caution": [
      "沖側の非常に高いブロックへ上がらない。狭い集落道に駐車しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimamugigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.667711/134.421608/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tokusimaasakawakou",
    "name": "浅川港",
    "prefecture": "徳島県",
    "lat": 33.62911,
    "lng": 134.363244,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "浅川湾奥にある港。アジ・サヨリを回遊する棚で探り、キス・クロダイは底や岸壁沿いの変化を意識して狙う。",
    "caution": [
      "穏やかな湾でも強風・増水の影響を確認し、係留作業を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimaasakawakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.62911/134.363244/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-tokusimatakegasimagyokou",
    "name": "竹ヶ島漁港",
    "prefecture": "徳島県",
    "lat": 33.54524,
    "lng": 134.318633,
    "primaryType": "port",
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
    "note": "徳島県南端の竹ヶ島にある漁港。アジの回遊とクロダイ・メジナ、アオリイカを狙い分ける。港内の流れを確かめ、船やロープへ仕掛けが流れない位置を選びたい。",
    "caution": [
      "磯や外海側へ無理に移動せず、港内の係留・作業区画を避ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimatakegasimagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.54524/134.318633/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ehimetoragahanakaigann",
    "name": "虎ヶ鼻海岸",
    "prefecture": "愛媛県",
    "lat": 33.994576,
    "lng": 133.058896,
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
    "note": "桜井海岸の一部にあたる虎ヶ鼻海岸。キス・カレイの底釣り、ヒラメ・マゴチを狙う釣りの候補となる砂浜。",
    "caution": [
      "砂浜の散策者や水面利用者を確認し、投げる方向を共有しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/ehimetoragahanakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.994576/133.058896/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ehimehoujyoukou",
    "name": "北条港・砂置き場",
    "prefecture": "愛媛県",
    "lat": 33.975983,
    "lng": 132.769947,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "カレイ",
      "クロダイ",
      "サヨリ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "北条港の砂置き場周辺。アジ・サヨリを探す釣り、クロダイ・カレイや季節のタチウオが候補になる岸壁。",
    "caution": [
      "砂の積み下ろしを優先し、作業車両が入る場合は釣りを中断して退く。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/ehimehoujyoukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.975983/132.769947/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ehimehoriegyokou",
    "name": "堀江港",
    "prefecture": "愛媛県",
    "lat": 33.907359,
    "lng": 132.749841,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "サヨリ",
      "カワハギ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "堀江港の岸壁・波止。アジ・サヨリの回遊と、キス・カレイ・カワハギを探る底釣りを状況に合わせて選ぶ。",
    "caution": [
      "海の駅の利用者と港の作業を優先し、狭い進入路で停車しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/ehimehoriegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.907359/132.749841/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ehimemasakikou",
    "name": "松前港",
    "prefecture": "愛媛県",
    "lat": 33.785425,
    "lng": 132.693064,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "ブリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "松前港の赤灯側。アジ・サヨリやメバル・クロダイを探り、季節に合わせてイカや回遊魚も候補になる。",
    "caution": [
      "車の転回場所を空ける。南西側のブロックへ無理に移動しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/ehimemasakikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.785425/132.693064/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ehimeoonarugyokou",
    "name": "大成漁港",
    "prefecture": "愛媛県",
    "lat": 33.438747,
    "lng": 132.254705,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "佐田岬半島の大成漁港。アジ・メバル・クロダイ、アオリイカや季節のタチウオを探る岸釣りの候補。",
    "caution": [
      "幹線道路からの道幅と帰路を明るいうちに確認し、港の作業場所を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba3/ehimeoonarugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.438747/132.254705/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ehimemitukuekou",
    "name": "三机港",
    "prefecture": "愛媛県",
    "lat": 33.456598,
    "lng": 132.246745,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ブリ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "佐田岬半島の三机港。アジ・メバルの岸釣りからアオリイカ、回遊する青物まで候補がある。須賀公園側からの歩行距離を含めて計画する。",
    "caution": [
      "波止先端にこだわらず、風が強い日は港内の利用条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba3/ehimemitukuekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.456598/132.246745/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ehimesitugyokou",
    "name": "志津漁港",
    "prefecture": "愛媛県",
    "lat": 33.444602,
    "lng": 132.214622,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "志津の小さな漁港で、アジやメバル、クロダイを探る候補地。季節のイカやタチウオも候補になるが、暗くなる前に足場と回収経路を確認しておく。",
    "caution": [
      "幹線道路から離れた港のため、道幅・転回場所・駐車場所を事前に確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba3/ehimesitugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.444602/132.214622/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ehimemyoujinngyokou",
    "name": "明神漁港",
    "prefecture": "愛媛県",
    "lat": 33.410415,
    "lng": 132.127483,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "アオリイカ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging"
    ],
    "note": "明神漁港の南北の波止周辺で、アジや季節のアオリイカ・タチウオを狙う候補。小規模な港なので、回遊待ちでも複数の竿で広い範囲を占有しないようにしたい。",
    "caution": [
      "係留船や作業場所を避け、夜間の会話や照明は周囲に配慮する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba3/ehimemyoujinngyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.410415/132.127483/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ehimenagahamagyokou",
    "name": "長浜漁港",
    "prefecture": "愛媛県",
    "lat": 33.348634,
    "lng": 132.024186,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "アオリイカ",
      "ブリ",
      "メジナ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "佐田岬の先端側にある長浜漁港。アジやメジナ、マダイなどを候補に潮の動きを見ながら仕掛けを入れる。流れが速いときは隣の釣り座へ流す前に回収する。",
    "caution": [
      "外海からのうねりを確認し、波をかぶる先端へ進まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba3/ehimenagahamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.348634/132.024186/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ehimenatorigyokou",
    "name": "名取漁港",
    "prefecture": "愛媛県",
    "lat": 33.388166,
    "lng": 132.153232,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "アオリイカ",
      "ブリ",
      "タチウオ",
      "シイラ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging"
    ],
    "note": "名取漁港は潮通しのある小さな港。アジやアオリイカ、回遊魚を候補にできるが、高い外向きより安全に魚を寄せられる港内側から探りたい。",
    "caution": [
      "進入路は細い坂道。大きな消波ブロックへ登らず、満車時は無理に進入しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba3/ehimenatorigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.388166/132.153232/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kochitosasimizukou",
    "name": "土佐清水港",
    "prefecture": "高知県",
    "lat": 32.780113,
    "lng": 132.945127,
    "primaryType": "port",
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
    "note": "土佐清水港の湾内。アジやムロアジ、クロダイ・アオリイカを探る候補で、船の出入りと釣り場の区画を分けて把握する。",
    "caution": [
      "漁業拠点の港なので、荷揚げ場・給油場所・乗船桟橋で竿を出さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochitosasimizukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.780113/132.945127/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kochinadagyokou",
    "name": "灘漁港",
    "prefecture": "高知県",
    "lat": 33.526066,
    "lng": 133.549504,
    "primaryType": "port",
    "fish": [
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging"
    ],
    "note": "灘公園に隣接する小さな灘漁港。アオリイカを探る波止釣りの候補で、着底の確認と係留索を避けた回収が大切になる。",
    "caution": [
      "公園利用者と漁業作業を優先し、港全体を自由な釣座と考えない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochinadagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.526066/133.549504/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kochihatigasirigyokou",
    "name": "蜂ヶ尻漁港",
    "prefecture": "高知県",
    "lat": 33.468699,
    "lng": 133.504615,
    "primaryType": "port",
    "fish": [
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "須崎の蜂ヶ尻漁港。市街地から離れた小港で、クロダイやアオリイカを探る波止釣りの候補になる。",
    "caution": [
      "波止の足場と帰路を明るいうちに確認し、集落内の駐車・通行を妨げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochihatigasirigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.468699/133.504615/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kochifukauragyokou",
    "name": "深浦漁港",
    "prefecture": "高知県",
    "lat": 33.444173,
    "lng": 133.413935,
    "primaryType": "port",
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
    "note": "浦ノ内湾の深浦漁港。低い波止からキス・クロダイやアオリイカを探る候補。湾内の筏釣りは岸釣りとは別に予約・利用条件を確認する。",
    "caution": [
      "低い足場は満潮時や船の引き波に注意し、漁具から距離を取る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochifukauragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.444173/133.413935/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kochimimasegyokou",
    "name": "御畳瀬漁港",
    "prefecture": "高知県",
    "lat": 33.50297,
    "lng": 133.557551,
    "primaryType": "port",
    "fish": [
      "クロダイ",
      "サヨリ",
      "スズキ"
    ],
    "methodSlugs": [
      "uki"
    ],
    "note": "浦戸湾の御畳瀬漁港。サヨリやクロダイ・スズキを探る候補だが、釣座と通路に余裕のある大規模施設ではない。",
    "caution": [
      "狭い波止や進入路を塞がず、混雑時は別の場所を選ぶ。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochimimasegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.50297/133.557551/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kochinisibunngyokou",
    "name": "西分漁港",
    "prefecture": "高知県",
    "lat": 33.515243,
    "lng": 133.771527,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "アカカマス"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "西分漁港の波止周辺で、アジ・カマス、クロダイ・メジナなどを狙い分ける。水面まで高さがあるため、仕掛けだけでなく取り込み方法を先に考えて釣り座を選ぶ。",
    "caution": [
      "狭い波返しを渡る経路は使わず、地面から安全に歩ける範囲に留まる。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochinisibunngyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.515243/133.771527/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kochimurotukou",
    "name": "室津港",
    "prefecture": "高知県",
    "lat": 33.286324,
    "lng": 134.148924,
    "primaryType": "port",
    "fish": [
      "アオリイカ",
      "メジナ",
      "アカカマス"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "室津港の港内岸壁や波止周辺では、メジナ・カマスや季節のアオリイカが候補になる。港内の船と係留索を避け、軽い仕掛けで流れを確認してから探る。",
    "caution": [
      "過去の車横付け情報を前提にせず、駐車区画・荷揚げ・通行の案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochimurotukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.286324/134.148924/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kochinonegyokou",
    "name": "野根漁港",
    "prefecture": "高知県",
    "lat": 33.496886,
    "lng": 134.268765,
    "primaryType": "port",
    "fish": [
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "野根漁港は外向きの高い波返しと消波ブロックが特徴。クロダイ・メジナやアオリイカを考える場合も、港内の安定した足場から回収できる範囲を選びたい。",
    "caution": [
      "波返しや外向きの岩場へ登らず、作業中の岸壁では竿を出さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://s.turihiroba.com/turiba2/kochinonegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.496886/134.268765/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuokafunakosigyokou",
    "name": "船越漁港（福岡県）",
    "prefecture": "福岡県",
    "lat": 33.555826,
    "lng": 130.1278,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "コウイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "糸島の船越漁港。クロダイのウキ釣りやアジ・サヨリの回遊、キス・カレイの底釣りが候補。東西の波止で潮と風の当たり方を確認する。",
    "caution": [
      "漁業作業と岸壁の利用表示を優先し、撒き餌や釣り糸を残さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokafunakosigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.555826/130.1278/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuokakisigyokou",
    "name": "岐志漁港",
    "prefecture": "福岡県",
    "lat": 33.574386,
    "lng": 130.120203,
    "primaryType": "port",
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
    "note": "姫島への定期船が発着する岐志漁港。アジ・サヨリ、キス・カレイやアオリイカを狙う候補になる。",
    "caution": [
      "乗船桟橋と船道を空ける。防風フェンスのある場所を無理に越えない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokakisigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.574386/130.120203/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuokanisinouragyokou",
    "name": "西浦漁港（福岡県）",
    "prefecture": "福岡県",
    "lat": 33.649797,
    "lng": 130.20833,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "福岡の西浦漁港。アジやカマスの回遊、キス・根魚・クロダイなどを探る候補で、初めは波止内向きの足場から状況を見たい。",
    "caution": [
      "外側の高い消波ブロックへ上がらず、船の発着時は仕掛けを回収する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokanisinouragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.649797/130.20833/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuokameinohamagyokou",
    "name": "姪浜漁港",
    "prefecture": "福岡県",
    "lat": 33.593406,
    "lng": 130.327227,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "サヨリ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "能古島便の発着港でもある姪浜漁港。アジ・サヨリ・コノシロの回遊と、ハゼ・キスやクロダイ・スズキを探る候補。",
    "caution": [
      "フェリーの乗降場・航路は釣りの対象にせず、白灯側の利用条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokameinohamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.593406/130.327227/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuokasikanosimahirogyokou",
    "name": "弘漁港",
    "prefecture": "福岡県",
    "lat": 33.668122,
    "lng": 130.291393,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "アカカマス",
      "サワラ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "志賀島の弘漁港。アジ・カマスの回遊とメバル・クロダイ、アオリイカを狙う候補。外海側と港内では風波の当たり方が変わる。",
    "caution": [
      "沖向きの消波ブロックは慣れていても危険。無理な移動や単独釣行を避ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokasikanosimahirogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.668122/130.291393/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuokatuyazakigyokou",
    "name": "津屋崎漁港",
    "prefecture": "福岡県",
    "lat": 33.790098,
    "lng": 130.458999,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "ヒラメ",
      "マゴチ",
      "マサバ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "津屋崎漁港ではアジ・カマスなどの回遊と、キス・ヒラメ・マゴチの底周りを狙い分けられる。赤灯側は船道へ仕掛けを出さないよう注意したい。",
    "caution": [
      "消波ブロックの上ではなく、利用できる平らな足場を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokatuyazakigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.790098/130.458999/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuokakatuuragyokou",
    "name": "勝浦漁港（勝浦浜）",
    "prefecture": "福岡県",
    "lat": 33.850405,
    "lng": 130.482345,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "福津の勝浦浜に隣接する港。周囲が浅く、キス・カレイの底釣りとクロダイ・アオリイカを探る候補になる。",
    "caution": [
      "隣接する砂浜の利用者を確認し、浅い敷石へ仕掛けを掛けないよう回収する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokakatuuragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.850405/130.482345/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuokaturikawakakou",
    "name": "釣川河口（さつき松原）",
    "prefecture": "福岡県",
    "lat": 33.867351,
    "lng": 130.524659,
    "primaryType": "beach",
    "fish": [
      "シロギス",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "釣川河口からさつき松原へ続く海岸。ハゼ・キスの底釣りと、スズキ・ヒラメ・マゴチを探るルアー釣りの候補。",
    "caution": [
      "河口の増水・離岸流を避け、陸側から波の変化を観察する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokaturikawakakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.867351/130.524659/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuokaakasakakaigann",
    "name": "赤坂海岸",
    "prefecture": "福岡県",
    "lat": 33.894055,
    "lng": 130.909996,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ",
      "ブリ",
      "コウイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "延命寺臨海公園前から続く赤坂海岸の護岸。アジの回遊を探る釣りと、カレイ・クロダイ・イカ狙いを潮の速さに合わせて選ぶ。",
    "caution": [
      "遊歩道は歩行者優先。仕掛けを通路に置かず、手すりを越えない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokaakasakakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.894055/130.909996/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuokahesakinohato",
    "name": "部崎の波止",
    "prefecture": "福岡県",
    "lat": 33.941402,
    "lng": 131.01398,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "クロダイ",
      "サヨリ",
      "ブリ",
      "コウイカ",
      "スズキ",
      "サワラ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "部崎の波止は関門海峡の出入口に面し、アジ・サヨリとクロダイ・スズキ、回遊魚を候補にできる。潮の向きが変わることを見込み、仕掛けが流れる範囲を確かめながら探る。",
    "caution": [
      "船の航路へ投げず、速い流れを制御できないときは釣りを休む。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokahesakinohato.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.941402/131.01398/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-fukuokakutuogyokou",
    "name": "沓尾漁港",
    "prefecture": "福岡県",
    "lat": 33.728998,
    "lng": 131.0287,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "クロダイ",
      "マゴチ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "干潟に囲まれた沓尾漁港。ハゼ・シロギスの底釣りやマゴチ・スズキを候補に、潮位で変わる水深を見て投入方向を選ぶ。満潮と干潮では狙える範囲が大きく変わる。",
    "caution": [
      "干潟へ降りず、港へ通じる道と漁業車両の動線を塞がない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokakutuogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.728998/131.0287/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ooitanagasugyokou",
    "name": "長洲漁港",
    "prefecture": "大分県",
    "lat": 33.578104,
    "lng": 131.374834,
    "primaryType": "port",
    "fish": [
      "クロダイ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "駅館川河口の長洲漁港。干潟が広がる浅い水域でハゼ・クロダイ・スズキを探る候補。潮位によって釣りやすい位置が変わる。",
    "caution": [
      "干潟へ無理に降りず、河口の流れと満ち潮による水位変化に注意する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitanagasugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.578104/131.374834/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ooitakunourakou",
    "name": "来浦港",
    "prefecture": "大分県",
    "lat": 33.641187,
    "lng": 131.689789,
    "primaryType": "port",
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
    "note": "国東半島の来浦港。アジを探る釣りや、キス・カレイ・クロダイを狙う波止釣りの候補。夜釣りを考える場合も明るいうちに足場を確認する。",
    "caution": [
      "照明があっても波止全体が明るいとは限らない。係留船の作業を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakunourakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.641187/131.689789/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ooitakitaekou",
    "name": "北江港",
    "prefecture": "大分県",
    "lat": 33.581876,
    "lng": 131.73219,
    "primaryType": "port",
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
    "note": "北江港の二本の波止周辺。アジの回遊を見ながら、キス・カレイなどを底で探る釣りへ切り替える候補になる。",
    "caution": [
      "狭い先端で竿を広げすぎず、外海の波が入る日は釣りを控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakitaekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.581876/131.73219/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ooitakunisakikou",
    "name": "国東港",
    "prefecture": "大分県",
    "lat": 33.568271,
    "lng": 131.735516,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "国東港の岸壁・波止。アジのサビキやキス・カレイ、根魚・クロダイを探る候補。港内の平らな足場から利用条件を確認したい。",
    "caution": [
      "南側のブロック帯へ無理に進まず、荷役・船の往来を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakunisakikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.568271/131.735516/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ooitamanaikou",
    "name": "真那井港",
    "prefecture": "大分県",
    "lat": 33.370499,
    "lng": 131.606362,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "真那井港は周囲が浅い小港。アジ・サヨリやキス・クロダイを、潮位によって変わる水深に合わせて探る。",
    "caution": [
      "浅い港内で底を引き続けず、係留索と敷石への根掛かりに注意する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitamanaikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.370499/131.606362/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ooitafukaekou",
    "name": "深江港",
    "prefecture": "大分県",
    "lat": 33.125386,
    "lng": 131.865957,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "国東半島の深江港。入り江の波止でアジ・メバル・キスやクロダイ・アオリイカを探る候補になる。",
    "caution": [
      "波止途中のブロックと先端の足場を区別し、波がある日は外側へ出ない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitafukaekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.125386/131.865957/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ooitakamegawagyokou",
    "name": "亀川漁港",
    "prefecture": "大分県",
    "lat": 33.331335,
    "lng": 131.495962,
    "primaryType": "port",
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
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "別府の亀川漁港。港内向きの波止でアジのサビキや軽いルアー釣り、メバル狙いを組み立てる候補になる。",
    "caution": [
      "白灯側のブロックへ無理に降りない。夜間は照明のない通路も確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakamegawagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.331335/131.495962/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ooitakurogahama",
    "name": "黒ヶ浜",
    "prefecture": "大分県",
    "lat": 33.259414,
    "lng": 131.89883,
    "primaryType": "beach",
    "fish": [
      "マアジ",
      "メバル",
      "アオリイカ",
      "ケンサキイカ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "eging"
    ],
    "note": "佐賀関半島の黒ヶ浜は、砂利浜からメバルや季節のアオリイカを狙う候補地。砂浜のシロギス釣りと同じ感覚で底を引かず、岩や藻の位置を短い距離で確かめる。",
    "caution": [
      "濡れた石や急な波に注意し、波打ち際へ立ち込まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakurogahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.259414/131.89883/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ooitailtusyakuyasitaurakou",
    "name": "一尺屋下浦港",
    "prefecture": "大分県",
    "lat": 33.204204,
    "lng": 131.861022,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "アカカマス",
      "カワハギ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "一尺屋下浦港は、港内のアジと波止際のメバル・クロダイ、季節のアオリイカを狙い分ける港。広い港でも係留区画ごとにロープの位置が異なるため、投入前に回収経路を確かめる。",
    "caution": [
      "漁業作業を優先し、波止や岸壁の駐車可否は現地の案内に従う。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitailtusyakuyasitaurakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.204204/131.861022/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-ooitaoohamakou_",
    "name": "大浜港",
    "prefecture": "大分県",
    "lat": 33.137964,
    "lng": 131.809974,
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
    "note": "大分の大浜港で、アジ・メバル・クロダイなどを探る候補地。アオリイカを狙うときも、沖向きのブロック帯へ降りず港内側から回収できる方向を選ぶ。",
    "caution": [
      "地元の駐車区画を使わず、荷揚げや住民の通行を妨げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitaoohamakou_.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.137964/131.809974/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyazakikumanoekou",
    "name": "熊野江港",
    "prefecture": "宮崎県",
    "lat": 32.675271,
    "lng": 131.782529,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "ヒラメ",
      "マゴチ",
      "アカカマス"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "熊野江海水浴場に隣接する港。アジ・カマス・クロダイ・アオリイカを港で、キスなどを砂浜側で探り分ける候補。",
    "caution": [
      "遊泳者のいる砂浜へ投げず、港内の漁業作業を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/miyazakikumanoekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.675271/131.782529/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyazakinobeokakou",
    "name": "延岡港",
    "prefecture": "宮崎県",
    "lat": 32.593106,
    "lng": 131.703651,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "クロダイ",
      "キビレ",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "北川と五ヶ瀬川の河口の間にある延岡港。クロダイ・キビレ・スズキや、ヒラメ・マゴチを探る岸釣りの候補になる。",
    "caution": [
      "増水した河口と作業中の埠頭を避け、車の横付けは現地の案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/miyazakinobeokakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.593106/131.703651/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyazakimukaigahama",
    "name": "向ヶ浜",
    "prefecture": "宮崎県",
    "lat": 32.461597,
    "lng": 131.650457,
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
    "note": "日向の向ヶ浜。キスの投げ釣りと、ヒラメ・マゴチ・スズキのルアー釣りが候補になる砂浜。",
    "caution": [
      "浜へ降りる通路の状態を確認し、波が高い場合や安全に戻れない場合は利用しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/miyazakimukaigahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.461597/131.650457/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyazakihososimasyougyoukou",
    "name": "細島商業港",
    "prefecture": "宮崎県",
    "lat": 32.436881,
    "lng": 131.646488,
    "primaryType": "pier",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "細島商業港の岸壁。アジ・キス・クロダイやアオリイカを探る候補だが、商業港なので入港・荷役によって使える場所が変わる。",
    "caution": [
      "保安区域や作業中の岸壁へ入らず、係員の指示があれば速やかに退く。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/miyazakihososimasyougyoukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.436881/131.646488/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyazakisiginohama",
    "name": "鴫野浜",
    "prefecture": "宮崎県",
    "lat": 32.135483,
    "lng": 131.539328,
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
    "note": "小丸川河口北側の鴫野浜。キスの投げ釣りとヒラメ・マゴチ、スズキやオオニベを探るサーフの候補。",
    "caution": [
      "正式な踏切と通路を使い、線路を横断しない。増水・高波の日は釣りを避ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/miyazakisiginohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.135483/131.539328/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyazakioosagyokou",
    "name": "鶯巣（おおさ）漁港",
    "prefecture": "宮崎県",
    "lat": 31.718767,
    "lng": 131.460772,
    "primaryType": "port",
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
    "note": "日南市北部の鶯巣漁港。小さな波止周辺でアジ・クロダイ・メジナやアオリイカを候補に、短い仕掛けから探る。入港前にゲートの運用を確かめる必要がある。",
    "caution": [
      "入口の施錠時刻をその日に確認し、閉門前に余裕を持って戻る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba3/miyazakioosagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.718767/131.460772/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-miyazakioodoutukou",
    "name": "大堂津港",
    "prefecture": "宮崎県",
    "lat": 31.558589,
    "lng": 131.384597,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "アカカマス"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "大堂津港は砂地が広がり、港内側の短い底仕掛けでシロギスを探る釣りが候補。アジ・カマスやアオリイカを狙う場合は、船の動線と沖の構造物を確認して投入方向を選ぶ。",
    "caution": [
      "波止周囲の沈んだブロックに注意し、荷揚げ岸壁や係留船の間では釣りをしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba3/miyazakioodoutukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.558589/131.384597/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sagahigasikaratugyokou",
    "name": "東唐津漁港",
    "prefecture": "佐賀県",
    "lat": 33.469379,
    "lng": 129.964335,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "キビレ",
      "ヒラメ",
      "マゴチ",
      "ブリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "松浦川河口の東唐津漁港。ハゼ・キスの底釣り、クロダイ・キビレやスズキを探る釣りが候補になる。",
    "caution": [
      "河口の流れと船道を確認し、浅瀬へ無理に立ち込まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/sagahigasikaratugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.469379/129.964335/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sagatoubougyokou",
    "name": "唐房漁港",
    "prefecture": "佐賀県",
    "lat": 33.483321,
    "lng": 129.942791,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "コウイカ",
      "マハゼ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "唐房の二つの港。港内のアジ・サヨリ、ハゼ・キスを探る釣りと、クロダイ・イカ狙いを足場に合わせて選ぶ。",
    "caution": [
      "河口側の波止には頭上の電線がある。竿・仕掛けを近づけない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba2/sagatoubougyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.483321/129.942791/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sagahamagyokou",
    "name": "浜漁港",
    "prefecture": "佐賀県",
    "lat": 33.097078,
    "lng": 130.137155,
    "primaryType": "port",
    "fish": [
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "鹿島の浜川河口にある浜漁港。ハゼ・ハゼクチや小型のスズキを底付近で探る候補。潮位で変わる水深と流れを見て投入する。",
    "caution": [
      "船が係留する桟橋を避け、干潟へ降りずに利用可能な足場を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba3/sagahamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.097078/130.137155/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-saganozakikou",
    "name": "野崎港",
    "prefecture": "佐賀県",
    "lat": 32.972902,
    "lng": 130.222642,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "マハゼ",
      "スズキ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "太良の野崎港。有明海のヒラを軽いルアーで狙う釣りや、ハゼ・アナゴ・メバルを探る釣りが候補になる。",
    "caution": [
      "灯り周辺は頭上の電線に注意し、夜間も漁業作業を妨げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba3/saganozakikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.972902/130.222642/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-sagatakezakigyokou",
    "name": "竹崎漁港",
    "prefecture": "佐賀県",
    "lat": 32.95443,
    "lng": 130.219939,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "マハゼ",
      "スズキ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "竹崎の波止周辺。ハゼ・アナゴ・メバルに加え、有明海のヒラを軽いルアーで探る候補になる。",
    "caution": [
      "常夜灯付近の電線へ竿を近づけず、暗くなる前に足場を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba3/sagatakezakigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.95443/130.219939/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-nagasakisyuusigyokou",
    "name": "主師漁港",
    "prefecture": "長崎県",
    "lat": 33.352093,
    "lng": 129.474349,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "平戸の主師漁港。浅い砂底が多く、キスやアジ、クロダイ・イカを探る候補。潮位が低い時は底と係留索を確認したい。",
    "caution": [
      "港の作業場所を空け、砂地でも船道へ長く仕掛けを流さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakisyuusigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.352093/129.474349/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-nagasakisiraisigyokou",
    "name": "白石漁港",
    "prefecture": "長崎県",
    "lat": 33.129609,
    "lng": 130.168784,
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
    "note": "生月大橋近くの白石漁港。アジやメバル・カサゴ、クロダイ・メジナ、季節のイカを探る波止釣りの候補。",
    "caution": [
      "橋周辺の潮流と風を確認し、船の出入りを優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakisiraisigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.129609/130.168784/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-nagasakimisakiuragyokou",
    "name": "御崎浦漁港",
    "prefecture": "長崎県",
    "lat": 33.426857,
    "lng": 129.429309,
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
    "note": "生月島の御崎浦漁港。アジ・メバル・クロダイ・メジナを狙う波止釣りの候補で、イカ狙いには季節の資源保護ルールの確認が必要。",
    "caution": [
      "アオリイカの禁漁期間・区域は現地と管理者の最新案内を確認。大きなブロックへ上がらない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakimisakiuragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.426857/129.429309/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-nagasakiiiragyokou",
    "name": "飯良漁港",
    "prefecture": "長崎県",
    "lat": 33.283831,
    "lng": 129.421713,
    "primaryType": "port",
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
      "eging",
      "uki"
    ],
    "note": "平戸島の飯良漁港。砂浜に隣接し、キス・アジやクロダイ、季節のイカを探る候補になる。",
    "caution": [
      "狭い進入路と駐車条件を確認。脚立で波返しを越える利用をしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakiiiragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.283831/129.421713/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-nagasakisijikiuragyokou",
    "name": "志々伎浦漁港",
    "prefecture": "長崎県",
    "lat": 33.198746,
    "lng": 129.403775,
    "primaryType": "port",
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
    "note": "志々伎浦の港。アジ・クロダイ・メジナやアオリイカを探る候補で、東西の港の通行・係留条件を分けて確認する。",
    "caution": [
      "夜間も漁業車両の動線を空け、港内の空き地を駐車場と判断しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakisijikiuragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.198746/129.403775/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-nagasakifunakosigyokou",
    "name": "船越漁港（長崎県）",
    "prefecture": "長崎県",
    "lat": 33.181489,
    "lng": 129.396093,
    "primaryType": "port",
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
    "note": "平戸島の船越漁港。アジ・クロダイ・メジナとアオリイカを探る候補。防風フェンスのある側を避け、回収できる足場を先に確認する。",
    "caution": [
      "フェンスを越えず、狭い先端では荷物と仕掛けを広げすぎない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakifunakosigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.181489/129.396093/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-nagasakifukuragyokou",
    "name": "福良漁港",
    "prefecture": "長崎県",
    "lat": 33.188296,
    "lng": 129.368606,
    "primaryType": "port",
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
      "eging",
      "uki"
    ],
    "note": "平戸島南部の福良漁港。アジ・キス・クロダイ・メジナやアオリイカが候補になる。先端でも係留ロープの位置を確認してから投入する。",
    "caution": [
      "防風フェンスの外へ出ず、船につながるロープへ仕掛けを掛けない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakifukuragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.188296/129.368606/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-nagasakikawatikou",
    "name": "川内港",
    "prefecture": "長崎県",
    "lat": 33.33008,
    "lng": 129.516771,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "平戸の川内港。アジ・キス・クロダイやアオリイカを探る候補で、港内の岸壁と波止で流れの強さを見比べて釣座を選ぶ。",
    "caution": [
      "車の横付けを保証する場所ではない。作業用の岸壁と通路を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakikawatikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.33008/129.516771/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-nagasakiyokosekou",
    "name": "横瀬港",
    "prefecture": "長崎県",
    "lat": 33.084099,
    "lng": 129.704332,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "コウイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "西海の横瀬港。アジのサビキとメバル・カサゴ、クロダイやイカを探る候補。係留索のない回収しやすい方向へ投入する。",
    "caution": [
      "アイゴなど危険な魚を素手で触らず、漁業車両の通行を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakiyokosekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.084099/129.704332/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-nagasakiootawakou",
    "name": "太田和港",
    "prefecture": "長崎県",
    "lat": 33.043637,
    "lng": 129.660065,
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
    "note": "太田和港の波止周辺で、アジのサビキとメバル・カサゴの探り釣り、クロダイやアオリイカを狙い分ける。流れの向きを見て、隣の仕掛けへ近づく前に回収したい。",
    "caution": [
      "地元の係留・作業を優先し、小さな港の出入口を荷物や車で塞がない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakiootawakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.043637/129.660065/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-nagasakikurosegyokou",
    "name": "黒瀬漁港",
    "prefecture": "長崎県",
    "lat": 33.061191,
    "lng": 129.636548,
    "primaryType": "port",
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "西海の黒瀬漁港は、小さな波止でアジ・クロダイ・メジナやアオリイカを候補にできる。地磯の釣りとは分け、港内側で足場と回収経路を確保してから仕掛けを入れる。",
    "caution": [
      "周辺の岩場へ無理に降りず、港の通行・作業区画を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakikurosegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.061191/129.636548/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "shore-kumamotonagasukou",
    "name": "長洲港",
    "prefecture": "熊本県",
    "lat": 32.928301,
    "lng": 130.442905,
    "primaryType": "port",
    "fish": [
      "シロギス",
      "クロダイ",
      "キビレ",
      "ヒラメ",
      "マゴチ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "熊本の長洲港。ハゼ・キスの短い底釣りと、スズキ・マゴチ・クロダイなどを探る釣りが候補になる。",
    "caution": [
      "フェリーや漁船の航路へ仕掛けを出さず、浅い干潟へ無理に降りない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotonagasukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.928301/130.442905/&base=std&ls=std&disp=1"
      }
    ]
  }
];
const yodogawa:HarborRecord={
  "slug": "yodogawa-yagura-ryokuchi",
  "name": "淀川河口・矢倉緑地",
  "prefecture": "大阪府",
  "lat": 34.686969,
  "lng": 135.418468,
  "primaryType": "estuary",
  "fish": [
    "スズキ",
    "クロダイ",
    "キビレ"
  ],
  "methodSlugs": [
    "seabass-lure",
    "chinning"
  ],
  "note": "淀川と神崎川の河口に面する緑地。河口の流れと石積み沿いの変化を探るシーバス・チヌの候補地で、野鳥観察や散策の利用者も多い。駐車場はなく、徒歩での往復を見込んで荷物を絞りたい。",
  "caution": [
    "石積みや藻の付いた場所は滑りやすい。河口へ立ち込まず、安全な陸上の足場から釣る。",
    "観察・散策をする人に向けて投げず、潮だまりの観察場所と釣りの場所を分ける。",
    "現地の禁止表示・工事区画を優先し、増水・強風時は利用を控える。"
  ],
  "sources": [
    {
      "label": "大阪市公園情報：矢倉緑地・設備・アクセス",
      "url": "https://parksgreenery.city.osaka.lg.jp/article/parks-yagura/"
    },
    {
      "label": "魚速報：矢倉緑地の釣り情報",
      "url": "https://uosoku.com/home/kinki/oosaka/yagurar/"
    },
    {
      "label": "国土地理院：河口護岸の位置",
      "url": "https://maps.gsi.go.jp/#18/34.686969/135.418468/&base=std&ls=std&disp=1"
    }
  ]
};
export const kansaiNationalEntries:FishingMapEntry[]=[...createHarborEntries(places),...createHarborEntries([yodogawa]).map(e=>({...e,parking:false,toilet:true})),{
  "slug": "wakayama-kousuimaru",
  "name": "幸翠丸",
  "type": "boat",
  "primaryType": "boat",
  "terrain": "boat",
  "prefecture": "和歌山県",
  "port": "紀ノ川河口・湊第一小型船舶係留施設",
  "area": "和歌山市・紀ノ川河口",
  "lat": 34.2233064,
  "lng": 135.1488304,
  "fish": [
    "マアジ",
    "タチウオ",
    "ブリ",
    "アカアマダイ"
  ],
  "methods": [
    "船サビキ",
    "ノマセ",
    "船の落とし込み",
    "餌釣り"
  ],
  "methodSlugs": [
    "nomase"
  ],
  "season": "釣り物は募集便ごとに変わるため、公式釣果と予約時の案内を確認。",
  "beginner": false,
  "kids": false,
  "parking": true,
  "note": "紀ノ川河口から紀北・中紀へ出船する船宿。大アジ、タチウオ、ノマセ、アマダイなどの募集を確認でき、狙う魚によって仕掛けやオモリが変わる。希望の釣り物と貸道具の要否を予約時に相談したい。",
  "googleQuery": "和歌山 幸翠丸",
  "officialUrl": "https://turibunekousuimaru.amebaownd.com/",
  "verifiedAt": "2026-09-18",
  "positionNote": "公式アクセス案内と地理院地図で乗船施設付近を照合。停泊位置・集合場所は予約した便の案内を優先。岸壁での釣り許可とは異なります。",
  "access": "和歌山市築港1丁目20、湊第一小型船舶係留施設。公式案内では無料駐車場あり。車の停め方と乗船する桟橋は予約時に確認。",
  "field": "紀ノ川河口を拠点に、狙い魚・潮・海況に応じて沖のポイントへ向かう。港の岸釣りとは異なり、船長の指示棚・投入合図に合わせる。",
  "bestFor": [
    "大アジの船釣り",
    "タチウオ狙い",
    "活き餌のノマセ"
  ],
  "timing": "出船時刻・集合時刻・出船可否は前日の船宿案内で確認。",
  "tips": [
    "同じ船でも釣り物が変わると必要な仕掛けは異なる。オモリ・ライン・餌の準備範囲を予約時に確認する。",
    "ノマセやリレー便の料金体系は更新されるため、人数・釣り物・貸道具を伝えて最新条件を確認する。"
  ],
  "caution": [
    "救命胴衣を着用し、移動中や取り込み時は船長の指示を優先。",
    "船の落とし込み釣りと、岸壁のチヌ落とし込みは別の釣法です。仕掛けを取り違えないよう予約時に確認。"
  ],
  "sources": [
    {
      "label": "船宿公式：最新釣果・募集・お知らせ",
      "url": "https://turibunekousuimaru.amebaownd.com/"
    },
    {
      "label": "2026年9月16日の公式釣果・募集魚種",
      "url": "https://turibunekousuimaru.amebaownd.com/posts/59239869"
    },
    {
      "label": "公式アクセス：乗船場所・駐車場",
      "url": "https://turibunekousuimaru.amebaownd.com/pages/7225544/page_202308252131"
    },
    {
      "label": "国土地理院：乗船施設付近",
      "url": "https://maps.gsi.go.jp/#18/34.2233064/135.1488304/&base=std&ls=std&disp=1"
    }
  ]
}];

