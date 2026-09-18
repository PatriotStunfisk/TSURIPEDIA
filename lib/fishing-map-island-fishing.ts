import type {FishingMapEntry} from './fishing-map-data';

// Sources and field limitations were reviewed on 2026-09-19.
export const islandFishingEntries:FishingMapEntry[]=[
  {
    "slug": "goto-fukue-port",
    "type": "spot",
    "name": "福江港（岸釣り案内エリア）",
    "area": "五島市・福江島",
    "prefecture": "長崎県",
    "primaryType": "port",
    "terrain": "port",
    "lat": 32.695804,
    "lng": 128.851889,
    "fish": [
      "マアジ",
      "クロダイ"
    ],
    "methods": [
      "サビキ釣り",
      "ウキ釣り"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "season": "回遊・潮位・天候により変動",
    "beginner": false,
    "kids": false,
    "note": "福江港ターミナル近くで、市の観光案内が紹介する岸釣りの候補。船の発着と乗客の通行を優先し、フェリーの接岸場所へ仕掛けを入れない。",
    "googleQuery": "長崎県 五島市 福江港（岸釣り案内エリア）",
    "officialUrl": "https://goto.nagasaki-tabinet.com/model/fishing_spot",
    "verifiedAt": "2026-09-19",
    "field": "観光案内に示された岸釣りポイント。港や公園全域の釣り許可を意味しない。",
    "access": "福江港を起点に移動。釣り道具は通行の妨げにならないようまとめる。",
    "bestFor": [
      "福江島での岸釣り計画"
    ],
    "timing": "明るく穏やかな時間に足場を下見する。",
    "tips": [
      "到着後はまず通路・船の動線と取り込み場所を確認する。",
      "風や波が上がる場合は場所の変更より中止を優先する。"
    ],
    "caution": [
      "立入禁止区域・船の接岸場所へ入らない。漁業作業と通行を優先。",
      "駐車位置と利用範囲は現地案内で確認する。"
    ],
    "positionNote": "五島市観光案内の釣りポイント座標を地形図と照合。",
    "sources": [
      {
        "label": "五島市観光案内：福江港周辺の岸釣りポイント",
        "url": "https://goto.nagasaki-tabinet.com/model/fishing_spot"
      },
      {
        "label": "国土地理院：地形・位置照合",
        "url": "https://maps.gsi.go.jp/#18/32.695804/128.851889/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "goto-maruki",
    "type": "spot",
    "name": "丸木緑地公園防波堤",
    "area": "五島市・福江島",
    "prefecture": "長崎県",
    "primaryType": "pier",
    "terrain": "pier",
    "lat": 32.700986,
    "lng": 128.850379,
    "fish": [
      "マアジ",
      "クロダイ"
    ],
    "methods": [
      "サビキ釣り",
      "ウキ釣り"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "season": "回遊・潮位・天候により変動",
    "beginner": false,
    "kids": false,
    "note": "福江港の北側にある公園沿いの防波堤。市の釣りポイント案内に掲載されており、短時間の岸釣りを計画する候補。公園利用者と仕掛けの距離を十分に取る。",
    "googleQuery": "長崎県 五島市 丸木緑地公園防波堤",
    "officialUrl": "https://goto.nagasaki-tabinet.com/model/fishing_spot",
    "verifiedAt": "2026-09-19",
    "field": "観光案内に示された岸釣りポイント。港や公園全域の釣り許可を意味しない。",
    "access": "福江港を起点に移動。釣り道具は通行の妨げにならないようまとめる。",
    "bestFor": [
      "福江島での岸釣り計画"
    ],
    "timing": "明るく穏やかな時間に足場を下見する。",
    "tips": [
      "到着後はまず通路・船の動線と取り込み場所を確認する。",
      "風や波が上がる場合は場所の変更より中止を優先する。"
    ],
    "caution": [
      "立入禁止区域・船の接岸場所へ入らない。漁業作業と通行を優先。",
      "駐車位置と利用範囲は現地案内で確認する。"
    ],
    "positionNote": "五島市観光案内の釣りポイント座標を地形図と照合。",
    "sources": [
      {
        "label": "五島市観光案内：福江港周辺の岸釣りポイント",
        "url": "https://goto.nagasaki-tabinet.com/model/fishing_spot"
      },
      {
        "label": "国土地理院：地形・位置照合",
        "url": "https://maps.gsi.go.jp/#18/32.700986/128.850379/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "goto-otsu-coast",
    "type": "spot",
    "name": "大津みなと公園海岸",
    "area": "五島市・福江島",
    "prefecture": "長崎県",
    "primaryType": "other",
    "terrain": "shore",
    "lat": 32.687181,
    "lng": 128.857546,
    "fish": [],
    "methods": [],
    "methodSlugs": [],
    "season": "回遊・潮位・天候により変動",
    "beginner": false,
    "kids": false,
    "note": "福江港から南東側へ移動した公園沿いの海岸。市の岸釣り案内に掲載。港の釣りと同じ足場とは限らないため、潮位と波を見て安全に戻れる範囲を選ぶ。",
    "googleQuery": "長崎県 五島市 大津みなと公園海岸",
    "officialUrl": "https://goto.nagasaki-tabinet.com/model/fishing_spot",
    "verifiedAt": "2026-09-19",
    "field": "観光案内に示された岸釣りポイント。港や公園全域の釣り許可を意味しない。",
    "access": "福江港を起点に移動。釣り道具は通行の妨げにならないようまとめる。",
    "bestFor": [
      "福江島での岸釣り計画"
    ],
    "timing": "明るく穏やかな時間に足場を下見する。",
    "tips": [
      "到着後はまず通路・船の動線と取り込み場所を確認する。",
      "風や波が上がる場合は場所の変更より中止を優先する。"
    ],
    "caution": [
      "立入禁止区域・船の接岸場所へ入らない。漁業作業と通行を優先。",
      "駐車位置と利用範囲は現地案内で確認する。"
    ],
    "positionNote": "五島市観光案内の釣りポイント座標を地形図と照合。",
    "sources": [
      {
        "label": "五島市観光案内：福江港周辺の岸釣りポイント",
        "url": "https://goto.nagasaki-tabinet.com/model/fishing_spot"
      },
      {
        "label": "国土地理院：地形・位置照合",
        "url": "https://maps.gsi.go.jp/#18/32.687181/128.857546/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "goto-toraku",
    "type": "spot",
    "name": "戸楽漁港",
    "area": "五島市・福江島",
    "prefecture": "長崎県",
    "primaryType": "port",
    "terrain": "port",
    "lat": 32.705395,
    "lng": 128.843982,
    "fish": [
      "マアジ",
      "クロダイ"
    ],
    "methods": [
      "サビキ釣り",
      "ウキ釣り"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "season": "回遊・潮位・天候により変動",
    "beginner": false,
    "kids": false,
    "note": "福江港の北西、松山町にある漁港。市の観光案内に掲載された岸釣りポイント。係留船や漁具のある作業場所を避け、利用できる岸を現地で確認する。",
    "googleQuery": "長崎県 五島市 戸楽漁港",
    "officialUrl": "https://goto.nagasaki-tabinet.com/model/fishing_spot",
    "verifiedAt": "2026-09-19",
    "field": "観光案内に示された岸釣りポイント。港や公園全域の釣り許可を意味しない。",
    "access": "福江港を起点に移動。釣り道具は通行の妨げにならないようまとめる。",
    "bestFor": [
      "福江島での岸釣り計画"
    ],
    "timing": "明るく穏やかな時間に足場を下見する。",
    "tips": [
      "到着後はまず通路・船の動線と取り込み場所を確認する。",
      "風や波が上がる場合は場所の変更より中止を優先する。"
    ],
    "caution": [
      "立入禁止区域・船の接岸場所へ入らない。漁業作業と通行を優先。",
      "駐車位置と利用範囲は現地案内で確認する。"
    ],
    "positionNote": "五島市観光案内の釣りポイント座標を地形図と照合。",
    "sources": [
      {
        "label": "五島市観光案内：福江港周辺の岸釣りポイント",
        "url": "https://goto.nagasaki-tabinet.com/model/fishing_spot"
      },
      {
        "label": "国土地理院：地形・位置照合",
        "url": "https://maps.gsi.go.jp/#18/32.705395/128.843982/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "hachijo-asagiku",
    "type": "boat",
    "name": "八丈島総合釣りセンター アサギク",
    "area": "八丈町・八丈島",
    "prefecture": "東京都",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "神湊港・八重根港など。利用船により異なる",
    "lat": 33.128796,
    "lng": 139.804124,
    "fish": [
      "カンパチ",
      "キハダ"
    ],
    "methods": [
      "ジギング",
      "ノマセ釣り"
    ],
    "methodSlugs": [
      "jigging",
      "nomase"
    ],
    "season": "釣り物・出船条件を予約時に確認",
    "beginner": true,
    "kids": false,
    "note": "八丈島で釣宿・釣船手配・渡船を扱う総合釣りセンター。島の船釣りを相談する窓口として利用し、狙う魚と経験を伝えて船・タックルを決めます。マーカーは釣宿側の受付地点です。",
    "googleQuery": "八丈島 アサギク",
    "officialUrl": "https://asagiku.co.jp/",
    "verifiedAt": "2026-09-19",
    "access": "東京都八丈町三根810。集合港・時刻・受付順は予約時に指定を受ける。",
    "field": "八丈島周辺の船釣り。港と釣り場は当日の船・海況により変わる。",
    "bestFor": [
      "八丈島の船釣り相談",
      "宿泊を伴う釣行"
    ],
    "timing": "欠航や交通機関の変更を見込んだ日程を組む。",
    "tips": [
      "レンタルの有無と対応する釣り物を予約時に確認。",
      "大型魚を想定した道具は自己判断で揃えず、船の指定号数を先に聞く。"
    ],
    "caution": [
      "予約した船の救命具・仕掛け・集合場所の指定を優先。",
      "周辺港の堤防へ自由に入れるという案内ではない。渡船も当日の利用可否を確認。"
    ],
    "positionNote": "観光協会の住所とGoogle Mapsの施設ピンを照合した釣宿の受付地点。出船桟橋の位置ではない。",
    "sources": [
      {
        "label": "八丈島観光協会：釣船・渡船・レンタルの案内",
        "url": "https://www.hachijo.gr.jp/guide/asagiku-fishing/"
      },
      {
        "label": "アサギク：船釣りの案内と釣行状況",
        "url": "https://asagiku.co.jp/tyouka.htm"
      },
      {
        "label": "Google Maps：施設所在地",
        "url": "https://www.google.com/maps/search/?api=1&query=33.1287956,139.8041236"
      },
      {
        "label": "国土地理院：地形・位置照合",
        "url": "https://maps.gsi.go.jp/#18/33.128796/139.804124/&base=std&ls=std&disp=1"
      }
    ]
  }
];
