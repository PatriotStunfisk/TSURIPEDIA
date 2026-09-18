import type {FishingMapEntry} from './fishing-map-data';
import type {Prefecture} from './japan-regions';
// Public fishing reports identify candidates; they do not override posted access restrictions.
// Map positions were reviewed against GSI shorelines, not accepted as address-search results.
type HarborRecord={slug:string;name:string;prefecture:Prefecture;lat:number;lng:number;fish:string[];methodSlugs:string[];note:string;caution:string[];sources:NonNullable<FishingMapEntry['sources']>;primaryType?:'port'|'pier'};
const methodHelp:Record<string,{name:string;tip:string}>={
  "sabiki": {
    "name": "サビキ",
    "tip": "サビキは短い仕掛けから始め、足元の船・ロープを避けて回遊する棚を探す。"
  },
  "choinage": {
    "name": "ちょい投げ",
    "tip": "底を探る釣りは短い距離から始め、根掛かりした位置へ繰り返し投入しない。"
  },
  "eging": {
    "name": "エギング",
    "tip": "エギは着底を確かめてから動かし、係留索や藻に掛けない投入方向を選ぶ。"
  },
  "uki": {
    "name": "ウキ釣り",
    "tip": "ウキ仕掛けは流れに任せすぎず、船道や隣の仕掛けへ近づく前に回収する。"
  },
  "rockfish-lure": {
    "name": "ロックフィッシュ",
    "tip": "軽い仕掛けで表層から順に探り、底に落とし続けて根掛かりを増やさない。"
  }
};
const harbors:HarborRecord[]=[
  {
    "slug": "harbor-toyamaoozakai",
    "name": "大境漁港",
    "prefecture": "富山県",
    "lat": 36.922295,
    "lng": 137.029831,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "大境洞窟近くの小港。根魚とアオリイカが候補ですが、外側は消波ブロック帯です。港内へ一般車両では入れません。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。",
      "漁港内は一般車両進入禁止。徒歩での利用範囲も現地の案内を確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba4/toyamaoozakai.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.922295/137.029831/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-toyamaunamigyokou",
    "name": "宇波漁港",
    "prefecture": "富山県",
    "lat": 36.912465,
    "lng": 137.020669,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "氷見北部の赤灯側の波止を持つ港。クロダイのウキ釣りや根魚狙いが紹介されています。一般車進入禁止のため、釣り座より先に徒歩でのアクセスを確認してください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "漁港内は一般車両進入禁止。徒歩での利用範囲も現地の案内を確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba4/toyamaunamigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.912465/137.020669/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-toyamakosugigyokou",
    "name": "小杉漁港",
    "prefecture": "富山県",
    "lat": 36.895204,
    "lng": 137.007022,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "北側の波止内向きと外側の消波帯では足場が大きく異なります。アジや根魚、アオリイカを狙う際も内向きを起点に判断し、一般車の港内乗り入れは避けてください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。",
      "漁港内は一般車両進入禁止。徒歩での利用範囲も現地の案内を確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba4/toyamakosugigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.895204/137.007022/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-toyamayabutagyokou",
    "name": "薮田漁港",
    "prefecture": "富山県",
    "lat": 36.889764,
    "lng": 137.001722,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "赤灯側の内向きでアジ、根周りでメバル・キジハタが候補になる氷見の港。港内の一般車通行制限を守り、係留船の間へ仕掛けを入れないようにします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。",
      "漁港内は一般車両進入禁止。徒歩での利用範囲も現地の案内を確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba4/toyamayabutagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.889764/137.001722/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-toyamahimigyokou",
    "name": "氷見漁港",
    "prefecture": "富山県",
    "lat": 36.859313,
    "lng": 136.990457,
    "fish": [
      "マアジ",
      "サヨリ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "note": "上庄川と湊川の間の大きな港。南波止外側の消波ブロック帯は立入禁止で、釣り情報は港内側・展望台付近と区別して読む必要があります。",
    "caution": [
      "上庄川と湊川の間の大きな港。南波止外側の消波ブロック帯は立入禁止で、釣り情報は港内側・展望台付近と区別して読む必要があります。",
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba4/toyamahimigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.859313/136.990457/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-toyamayokatagyokou",
    "name": "四方漁港",
    "prefecture": "富山県",
    "lat": 36.75986,
    "lng": 137.192609,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "四方の港内側はアジ・サヨリの小物狙い、外側は根魚狙いと釣り座の性格が異なります。外側の消波ブロックへ降りる釣りを初心者向けとは扱いません。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/toyamayokatagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.75986/137.192609/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-toyamaiwasegyokou",
    "name": "岩瀬漁港",
    "prefecture": "富山県",
    "lat": 36.7639,
    "lng": 137.232735,
    "fish": [
      "マアジ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "note": "岩瀬の港内でアジやサヨリを狙う岸釣りの候補。白灯先端と大波止は立入禁止の情報があるため、外海側の大物狙いとは分けて掲載しています。",
    "caution": [
      "岩瀬の港内でアジやサヨリを狙う岸釣りの候補。白灯先端と大波止は立入禁止の情報があるため、外海側の大物狙いとは分けて掲載しています。",
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/toyamaiwasegyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.7639/137.232735/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-toyamamizuhasi",
    "name": "水橋漁港",
    "prefecture": "富山県",
    "lat": 36.75649,
    "lng": 137.301636,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "白岩川河口の港内岸壁でアジのサビキ釣りが紹介されています。水橋フィッシャリーナの親水防波堤は別の利用区画で、係留施設へ自由に入れるわけではありません。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/toyamamizuhasi.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.75649/137.301636/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-toyamakamiitigawakakou",
    "name": "上市川河口（高月漁港）",
    "prefecture": "富山県",
    "lat": 36.759103,
    "lng": 137.320197,
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "ヒラメ"
    ],
    "methodSlugs": [
      "choinage",
      "uki",
      "rockfish-lure"
    ],
    "note": "上市川右岸の高月漁港側。砂地を探るキス・カレイ狙いと、河口のスズキ狙いが候補です。河川の増水時は近づかず、船の通り道を横切る投入を避けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/toyamakamiitigawakakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.759103/137.320197/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-toyamauoduminami",
    "name": "魚津補助港（魚津南港）",
    "prefecture": "富山県",
    "lat": 36.809233,
    "lng": 137.393003,
    "fish": [
      "マアジ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "note": "魚津南港の港内側でサビキのアジ・サヨリが紹介されています。外側の消波帯や制限された防波堤へ誘導せず、作業のない港内岸壁を確認するための地点です。",
    "caution": [
      "魚津南港の港内側でサビキのアジ・サヨリが紹介されています。外側の消波帯や制限された防波堤へ誘導せず、作業のない港内岸壁を確認するための地点です。",
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/toyamauoduminami.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.809233/137.393003/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-toyamauodu",
    "name": "魚津漁港",
    "prefecture": "富山県",
    "lat": 36.823388,
    "lng": 137.393496,
    "fish": [
      "マアジ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "note": "海の駅蜃気楼に隣接する魚津の港。大突堤の立入制限を前提に、港内側の小物釣り情報を掲載します。観光施設の駐車場と釣りの利用条件は別に確認してください。",
    "caution": [
      "海の駅蜃気楼に隣接する魚津の港。大突堤の立入制限を前提に、港内側の小物釣り情報を掲載します。観光施設の駐車場と釣りの利用条件は別に確認してください。",
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/toyamauodu.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.823388/137.393496/&base=std&ls=std&disp=1"
      },
      {
        "label": "魚津大突堤の立入制限を区別",
        "url": "https://mobila-carlife.jp/outdoor/327229/"
      }
    ]
  },
  {
    "slug": "harbor-toyamakurobegyokou",
    "name": "黒部漁港（生地港）",
    "prefecture": "富山県",
    "lat": 36.891257,
    "lng": 137.414181,
    "fish": [
      "マアジ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "note": "生地の港内南側に手すりのある岸壁があり、アジ・サヨリの回遊を待つ釣りが紹介されています。北側の外海向き堤防や海岸とは足場が異なります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/toyamakurobegyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.891257/137.414181/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-toyamanyuuzenngyokou",
    "name": "入善漁港",
    "prefecture": "富山県",
    "lat": 36.925812,
    "lng": 137.428215,
    "fish": [
      "マアジ",
      "メバル",
      "キジハタ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "入善の港内側はアジや根魚、アオリイカが候補。高い外向き堤防と巨大な消波ブロック帯へは降りず、近隣の放水路側の立入禁止突堤も区別してください。",
    "caution": [
      "外側の堤防は立入禁止。放水路側の突堤も除外し、港内の利用できる区画だけを確認する。",
      "入善の港内側はアジや根魚、アオリイカが候補。高い外向き堤防と巨大な消波ブロック帯へは降りず、近隣の放水路側の立入禁止突堤も区別してください。",
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/toyamanyuuzenngyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.925812/137.428215/&base=std&ls=std&disp=1"
      },
      {
        "label": "魚速報：外側堤防の立入制限",
        "url": "https://uosoku.com/home/hokuriku/toyama/newzen/"
      }
    ]
  },
  {
    "slug": "harbor-fukuitakasugyokou",
    "name": "鷹巣漁港",
    "prefecture": "福井県",
    "lat": 36.129331,
    "lng": 136.05973,
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
    "note": "鷹巣の港内岸壁では夏から秋のアジのサビキ釣りが紹介されています。県の立入制限図を優先し、防波堤上・消波ブロック・漁業作業区画には入りません。",
    "caution": [
      "鷹巣の港内岸壁では夏から秋のアジのサビキ釣りが紹介されています。県の立入制限図を優先し、防波堤上・消波ブロック・漁業作業区画には入りません。",
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/fukuitakasugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.129331/136.05973/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用のルール",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      },
      {
        "label": "福井県：鷹巣漁港等の立入禁止区域",
        "url": "https://www.pref.fukui.lg.jp/doc/etizen/tachiirikinshi.html"
      }
    ]
  },
  {
    "slug": "harbor-fukuinagahasigyokou",
    "name": "長橋漁港",
    "prefecture": "福井県",
    "lat": 36.112639,
    "lng": 136.048787,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "長橋の小港は、港内と高い外海向きで足場の差が大きい場所です。港内側のアジ・根魚狙いを中心に考え、外側の消波帯へ無理に出ないようにします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/fukuinagahasigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.112639/136.048787/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用のルール",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "harbor-fukuihirugagyokou",
    "name": "日向漁港",
    "prefecture": "福井県",
    "lat": 35.613157,
    "lng": 135.895236,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "スズキ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "日向湖と海を結ぶ水道の出口。アジ・クロダイ・スズキ・アオリイカが候補で、流れと船の通行を見て短い仕掛けから始めます。海上釣り堀の利用とは別です。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba2/fukuihirugagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.613157/135.895236/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用のルール",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "harbor-tunegamiogawa",
    "name": "小川漁港",
    "prefecture": "福井県",
    "lat": 35.607208,
    "lng": 135.838931,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "小川の港内と西側岸壁の岸釣り情報。アジ・根魚・アオリイカが候補ですが、生簀のロープに注意が必要です。隣接する有料釣り堀を港の一般釣り場と混同しないでください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/tunegamiogawa.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.607208/135.838931/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用のルール",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "harbor-tunegamimiko",
    "name": "神子漁港",
    "prefecture": "福井県",
    "lat": 35.623187,
    "lng": 135.834832,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "若狭湾に面した神子の港。アジのサビキ、チヌ・グレのウキ釣り、アオリイカ狙いが紹介され、対象によって仕掛けを替えて探る場所です。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/tunegamimiko.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.623187/135.834832/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用のルール",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "harbor-fukuisekumi",
    "name": "世久見漁港",
    "prefecture": "福井県",
    "lat": 35.572257,
    "lng": 135.849187,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "世久見の港はアジ・カマスや秋のアオリイカが候補。沖側の足場の悪い消波帯を避け、利用できる港内区画と清掃協力金の案内を現地で確認してください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba2/fukuisekumi.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.572257/135.849187/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用のルール",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "harbor-fukuitagarasu",
    "name": "田烏漁港",
    "prefecture": "福井県",
    "lat": 35.538111,
    "lng": 135.834167,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "カサゴ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "田烏の港はアジ・キスやアオリイカの釣り情報があります。消波ブロック帯が多いため足場を先に確認し、有料駐車の受付・利用範囲に従います。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba2/fukuitagarasu.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.538111/135.834167/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用のルール",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "harbor-fukuiyasiro",
    "name": "矢代漁港",
    "prefecture": "福井県",
    "lat": 35.528839,
    "lng": 135.806744,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "夏の小アジと秋のアオリイカが紹介されている矢代の小港。港の規模に合わせて短い仕掛けを使い、清掃協力金と作業区画の案内を確認して利用します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba2/fukuiyasiro.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.528839/135.806744/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用のルール",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "harbor-fukuisitumi",
    "name": "志積漁港",
    "prefecture": "福井県",
    "lat": 35.525748,
    "lng": 135.800328,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "志積の集落にある小港。小アジのサビキやアオリイカが候補ですが、入れる人数が限られる場所です。清掃協力金と地元の利用案内を優先してください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba2/fukuisitumi.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.525748/135.800328/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用のルール",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "harbor-niigatanakahamakou",
    "name": "中浜港",
    "prefecture": "新潟県",
    "lat": 38.551992,
    "lng": 139.548748,
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
    "note": "新潟・山形県境近くの中浜港。アジやクロダイ、アオリイカの岸釣り情報があります。近接する山形県側の港湾施設とは管理区域が異なります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatanakahamakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.551992/139.548748/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-niigatafuyakou",
    "name": "府屋漁港",
    "prefecture": "新潟県",
    "lat": 38.50808,
    "lng": 139.5242,
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
    "note": "府屋の小さな港でアジ・クロダイ・アオリイカを狙う候補。釣り座の数が少ないため、先行者の仕掛けと係留船の位置を見て入れる場所を決めます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatafuyakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.50808/139.5242/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-niigatakuwagawakou",
    "name": "桑川漁港",
    "prefecture": "新潟県",
    "lat": 38.382978,
    "lng": 139.45899,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "アイナメ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "笹川流れの遊覧船が発着する桑川の港。東側の小物釣りと外海側の根魚狙いを区別し、遊覧船の乗降・出入りを最優先にします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatakuwagawakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.382978/139.45899/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-niigatamaorosikou",
    "name": "馬下港",
    "prefecture": "新潟県",
    "lat": 38.349229,
    "lng": 139.452059,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "馬下の小波止はアジ・サヨリ・クロダイなどの候補。大きな駐車場を前提にせず、道路や集落の通行を妨げないアクセスを確認してから向かいます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatamaorosikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/38.349229/139.452059/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-akitawakamigyokou",
    "name": "若美漁港",
    "prefecture": "秋田県",
    "lat": 40.029537,
    "lng": 139.913335,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "若美の砂浜に囲まれた港。キス・カレイを砂地で狙う釣りとアジの回遊待ちが候補で、外海の波が入り始めたら内向きでも撤収します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/akitawakamigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.029537/139.913335/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-akitairiaigyokou",
    "name": "五里合漁港",
    "prefecture": "秋田県",
    "lat": 39.98641,
    "lng": 139.869497,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "五里合の砂浜沿いの港。キス・カレイ・ヒラメなど砂地の魚が候補です。外側の消波ブロックは大きいため、港内から届く砂地を探す考え方が基本です。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/akitairiaigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/39.98641/139.869497/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-akitatogagyokou",
    "name": "戸賀漁港",
    "prefecture": "秋田県",
    "lat": 39.959524,
    "lng": 139.712341,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "サヨリ",
      "アイナメ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "戸賀湾の内側に位置する港。アジ・サヨリの小物釣りとクロダイ・メバル狙いが紹介されています。漁協前の作業や船の出入りを妨げない区画を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/akitatogagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/39.959524/139.712341/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-akitakamogyokou",
    "name": "加茂漁港",
    "prefecture": "秋田県",
    "lat": 39.90972,
    "lng": 139.729078,
    "fish": [
      "マアジ"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "note": "男鹿の磯渡しの拠点にもなる加茂の港。ここでは港内のアジ狙いを掲載し、外側の巨大な消波ブロック帯や渡船先の磯とは区別しています。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/akitakamogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/39.90972/139.729078/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-akitamonnzenngyokou",
    "name": "門前漁港",
    "prefecture": "秋田県",
    "lat": 39.863915,
    "lng": 139.752059,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "門前の西側波止は高い波返しがあるため内向きが中心。アジ・ウミタナゴ・メバルなどを小さな仕掛けで探り、波返しをよじ登る利用は避けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/akitamonnzenngyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/39.863915/139.752059/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-akitawakimotogyokou",
    "name": "脇本漁港",
    "prefecture": "秋田県",
    "lat": 39.901572,
    "lng": 139.893486,
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
    "note": "男鹿半島の付け根にある脇本の小港。浅い砂地に面し、キス・アジとクロダイが候補です。船道へ投げ込まず、底を引きずりすぎないよう探ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/akitawakimotogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/39.901572/139.893486/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomorioojyagyokou",
    "name": "大蛇漁港",
    "prefecture": "青森県",
    "lat": 40.471274,
    "lng": 141.649003,
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
    "note": "大蛇の港内岸壁はチカ・ウミタナゴなどの小物狙いが候補。外海側は大きな消波ブロックと高い堤防があるため、港内の足場と区別します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorioojyagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/40.471274/141.649003/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomoritomarigyokou",
    "name": "泊漁港",
    "prefecture": "青森県",
    "lat": 41.102736,
    "lng": 141.394601,
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
    "note": "泊の港はアイナメ・ソイなど根魚とカレイ、小物釣りの情報があります。赤灯側でも先端は高さがあるため、取り込み用の道具と足元を先に確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomoritomarigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.102736/141.394601/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomoriniwatorizawagyokou",
    "name": "鶏沢漁港",
    "prefecture": "青森県",
    "lat": 41.126177,
    "lng": 141.26152,
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
    "note": "鶏沢の港はチカ、アイナメ・ソイ、カレイやヤリイカが候補。外側の消波帯を避け、内向きから底の変化を探る釣りを考えます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomoriniwatorizawagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.126177/141.26152/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomorigennjigauragyokou",
    "name": "源氏ヶ浦漁港",
    "prefecture": "青森県",
    "lat": 41.113843,
    "lng": 141.253431,
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
    "note": "源氏ヶ浦は東側の波止を中心に根魚・カレイ・ヤリイカの情報がある港。消波ブロックの切れ間でも足場を確認し、無理な移動をしないでください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorigennjigauragyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.113843/141.253431/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomoridomekigyokou",
    "name": "百目木漁港",
    "prefecture": "青森県",
    "lat": 41.037121,
    "lng": 141.23914,
    "fish": [
      "カレイ",
      "アイナメ",
      "ソイ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "百目木の港は砂浜に面し、カレイとアイナメ・ソイが候補です。南側波止と港内で底質が異なるため、まず軽い仕掛けで根掛かりの有無を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomoridomekigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.037121/141.23914/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-simanekaizakigyokou",
    "name": "海崎漁港",
    "prefecture": "島根県",
    "lat": 35.558101,
    "lng": 133.298643,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "美保湾側の海崎の小港。アジ・キス・カレイを狙う岸釣りとアオリイカの情報があります。小さな港なので投げる方向を絞って船の出入りを避けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanekaizakigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.558101/133.298643/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanemihonosekigyokou",
    "name": "美保関漁港",
    "prefecture": "島根県",
    "lat": 35.560335,
    "lng": 133.310938,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヒラメ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "美保関の赤灯側はアジ・チヌからヒラメ・マゴチまで対象が広い港。長い波止へ向かう前に風と波、帰路の状況を確認してください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanemihonosekigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.560335/133.310938/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanesaikou",
    "name": "才港",
    "prefecture": "島根県",
    "lat": 35.571925,
    "lng": 133.303964,
    "fish": [
      "メバル",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "rockfish-lure"
    ],
    "note": "才港はメバルとアオリイカ狙いで紹介される小港。人気の外向きは消波ブロック帯で人数も限られるため、初心者向けの平坦な岸壁とは扱いません。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanesaikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.571925/133.303964/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanekarubikou",
    "name": "軽尾港",
    "prefecture": "島根県",
    "lat": 35.571803,
    "lng": 133.298278,
    "fish": [
      "メバル",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "rockfish-lure"
    ],
    "note": "軽尾の小港では外向きの消波帯を狙うメバル・アオリイカの情報があります。足場の難しい場所のため、明るいうちに状態を見て無理なら移動します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanekarubikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.571803/133.298278/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanemorokuikou",
    "name": "諸喰港",
    "prefecture": "島根県",
    "lat": 35.572536,
    "lng": 133.265641,
    "fish": [],
    "methodSlugs": [],
    "note": "諸喰の湾奥にある小港。東側の波止周辺は浅いと紹介されており、深場を想定した重い仕掛けより底を確認しながらの小物狙いに向きます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanemorokuikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.572536/133.265641/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanesoudukou",
    "name": "惣津港",
    "prefecture": "島根県",
    "lat": 35.573827,
    "lng": 133.214679,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "惣津の波止はメバル・アジとアオリイカ・ヤリイカが候補。消波ブロックのない部分でも水面まで高さがあるため、抜き上げだけに頼らず取り込みを準備します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanesoudukou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.573827/133.214679/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanetamayuikou",
    "name": "玉結港",
    "prefecture": "島根県",
    "lat": 35.569429,
    "lng": 133.198736,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "玉結の港は潮が当たる波止からチヌ・グレ、アジ、イカ類が候補。高さのある岸壁では仕掛け回収と取り込みの距離も考えて釣り座を選びます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanetamayuikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.569429/133.198736/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanekataegyokou",
    "name": "片江漁港",
    "prefecture": "島根県",
    "lat": 35.561784,
    "lng": 133.190002,
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
      "eging"
    ],
    "note": "片江は港内のアジ・キス狙いと外側の根魚・イカ狙いが紹介されています。赤灯外側の高い消波帯は避け、港内の利用可能区画を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanekataegyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.561784/133.190002/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanesugeurakou",
    "name": "菅浦港",
    "prefecture": "島根県",
    "lat": 35.564402,
    "lng": 133.170154,
    "fish": [
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging"
    ],
    "note": "菅浦の港を囲む波止ではアオリイカの釣り情報があります。周辺の地磯とは別に、港の波止から届く範囲を探るための地点です。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanesugeurakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.564402/133.170154/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simaneinadumigyokou",
    "name": "稲積漁港",
    "prefecture": "島根県",
    "lat": 35.562308,
    "lng": 133.159103,
    "fish": [
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging"
    ],
    "note": "稲積の小港は波止からアオリイカを狙う候補。近隣の地磯へ移る必要はなく、係留ロープと船の動きを避けながら投入範囲を決めます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simaneinadumigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.562308/133.159103/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanekitaurakou",
    "name": "北浦港",
    "prefecture": "島根県",
    "lat": 35.561609,
    "lng": 133.154447,
    "fish": [
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki",
      "rockfish-lure"
    ],
    "note": "北浦の西側波止は内向きの一段低い部分が釣り座として紹介されています。外側の高い消波帯を避け、メバル・チヌ・アオリイカを探ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanekitaurakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.561609/133.154447/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanekasauragyokou",
    "name": "笠浦漁港",
    "prefecture": "島根県",
    "lat": 35.577091,
    "lng": 133.130007,
    "fish": [
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "笠浦の白灯側はキス・メバル・チヌ・アオリイカが候補。先端と消波帯で足場が変わるため、港全体を同じ歩きやすさと考えないでください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanekasauragyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.577091/133.130007/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanenoigyokou",
    "name": "野井漁港",
    "prefecture": "島根県",
    "lat": 35.58292,
    "lng": 133.118291,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "野井の港は砂地に岩が混じるため、アジに加えてヒラメ・マゴチやイカ類も候補。底を探るときは根掛かりする位置を見つけたら投入角度を替えます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanenoigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.58292/133.118291/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanesezakigyokou",
    "name": "瀬崎漁港",
    "prefecture": "島根県",
    "lat": 35.590389,
    "lng": 133.112969,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "瀬崎の赤灯側は内向きでアジ・メバル、アオリイカ・ヤリイカが候補。沖向きの消波ブロック側と区別し、平坦な側から探る計画にします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanesezakigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.590389/133.112969/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simaneokidomarigyokou",
    "name": "沖泊漁港",
    "prefecture": "島根県",
    "lat": 35.09974,
    "lng": 132.342124,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "温泉津の沖泊は東側波止周辺にアジ・メバル・チヌやイカ類の情報があります。低い部分は波をかぶりやすいため、うねりがある日は利用を控えます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simaneokidomarigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.09974/132.342124/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanenireginohato",
    "name": "大芦漁港（ニレギの波止）",
    "prefecture": "島根県",
    "lat": 35.556914,
    "lng": 133.040357,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "大芦の北側にあるニレギの波止。アジ・メバル・チヌやイカ類が候補ですが、潮が当たる場所では仕掛けを流しすぎないよう周囲と調整します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanenireginohato.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.556914/133.040357/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanemitugyokou",
    "name": "御津漁港",
    "prefecture": "島根県",
    "lat": 35.538931,
    "lng": 133.026989,
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
    "note": "御津の港内ではサビキのアジが候補。外向きの大きな消波ブロック帯での釣りとは分け、港内の船とロープのない範囲を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanemitugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.538931/133.026989/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanekatakukou",
    "name": "片句港",
    "prefecture": "島根県",
    "lat": 35.544588,
    "lng": 132.984288,
    "fish": [
      "メバル",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "rockfish-lure"
    ],
    "note": "片句の小さな入り江にある港。メバルとアオリイカの情報があります。広い釣り座を前提にせず、先行者や係留作業を優先します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanekatakukou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.544588/132.984288/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanetaekou",
    "name": "手結港",
    "prefecture": "島根県",
    "lat": 35.541254,
    "lng": 132.968581,
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
    "note": "手結の波止はアジ・メバル・チヌ・アオリイカが候補。奥の犬堀鼻の磯とは別の地点で、磯歩きを岸壁へのアクセスとして案内しません。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanetaekou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.541254/132.968581/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simaneetomokou",
    "name": "恵曇港",
    "prefecture": "島根県",
    "lat": 35.52821,
    "lng": 132.970426,
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
    "note": "恵曇の港内岸壁と波止内向きはアジ・キス・チヌなどの候補。港が広いため、釣り区画と荷役・係留区画を現地で確認してから竿を出します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simaneetomokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.52821/132.970426/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-yamaguchikoujirogyokou",
    "name": "神代漁港",
    "prefecture": "山口県",
    "lat": 33.997173,
    "lng": 132.209537,
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
    "note": "神代の港はキス・カレイ、アジ・メバルなどが候補。波止と隣接する砂浜を混同せず、港内の駐車利用条件を確認して徒歩で移動します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/yamaguchikoujirogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.997173/132.209537/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-tokusimaoouragyokou",
    "name": "大浦漁港",
    "prefecture": "徳島県",
    "lat": 34.225447,
    "lng": 134.52379,
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
    "note": "北灘の大浦は港内のアジ・イワシ狙いが候補。内向きにもロープがあるため、遠投より足元の短いサビキから投入できる場所を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimaoouragyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.225447/134.52379/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-tokusimaawatagyokou",
    "name": "粟田漁港",
    "prefecture": "徳島県",
    "lat": 34.223761,
    "lng": 134.546599,
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
    "note": "粟田の港内はアジ・イワシ、外側は消波ブロック帯という違いがあります。港内の小物釣りを起点に、駐車と漁業作業の場所を塞がないようにします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimaawatagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.223761/134.546599/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-tokusimakitadomarisinnhato",
    "name": "北泊新波止",
    "prefecture": "徳島県",
    "lat": 34.239249,
    "lng": 134.588335,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "北泊の新波止は潮通しのある場所ですが、主な釣り座は消波ブロック帯です。アジ・チヌ・タチウオなどの情報を載せつつ、足場に慣れない方には勧めません。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimakitadomarisinnhato.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.239249/134.588335/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "harbor-tokusimamurogyokou",
    "name": "室漁港",
    "prefecture": "徳島県",
    "lat": 34.243293,
    "lng": 134.617367,
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
    "note": "鳴門の室漁港ではアジ・メバル・タチウオ・アオリイカが候補。集落の道が狭いため、釣り座だけでなく通行・駐車の条件を先に確認してください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimamurogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.243293/134.617367/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-tokusimamusa",
    "name": "撫佐漁港",
    "prefecture": "徳島県",
    "lat": 34.231993,
    "lng": 134.607861,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "ウチノ海の撫佐は波止と護岸からアジ・サヨリ、キス・カレイなどが候補。内湾でも係留ロープや養殖関連設備に仕掛けを掛けないようにします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimamusa.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.231993/134.607861/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-tokusimaimadugyokou",
    "name": "今津漁港",
    "prefecture": "徳島県",
    "lat": 33.970912,
    "lng": 134.661484,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "小河川が流れ込む今津の港。アジ・チヌに加えてスズキのルアー釣りが候補です。船道を横断する遠投と、外側の足場の悪い消波帯は避けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimaimadugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.970912/134.661484/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-tokusimakamesakigyokou",
    "name": "亀崎漁港",
    "prefecture": "徳島県",
    "lat": 33.91555,
    "lng": 134.700022,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "亀崎の港はアジ・キス・チヌ・タチウオが候補。北側と東側ではアクセス条件が異なるため、車を岸壁へ直接入れられるとは考えず確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimakamesakigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.91555/134.700022/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-tokusimanakabayasigyokou",
    "name": "中林漁港",
    "prefecture": "徳島県",
    "lat": 33.902194,
    "lng": 134.690795,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "サバ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "中林は東西の波止で水面までの高さが違います。サビキの小物釣りなら内向きの足場を先に確認し、外側の大きな消波帯とは区別します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimanakabayasigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.902194/134.690795/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kagawaaioigyokou",
    "name": "相生漁港",
    "prefecture": "香川県",
    "lat": 34.21331,
    "lng": 134.425793,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "相生の海岸沿いにある港。アジ・メバル・チヌなどの岸釣りを、係留場所と船道を避けながら探す候補です。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawaaioigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.21331/134.425793/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kagawakomokou",
    "name": "薦港",
    "prefecture": "香川県",
    "lat": 34.254875,
    "lng": 134.376698,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "小さな湾に面した蕪港。短い波止周りを探る際は、港内の船やロープを確認して投入範囲を絞ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawakomokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.254875/134.376698/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kagawasannbonnmatukou",
    "name": "三本松港",
    "prefecture": "香川県",
    "lat": 34.256117,
    "lng": 134.34155,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "三本松は高さのある西側と内向きの岸壁で釣り方が変わります。アジ・イワシのサビキをする場合も、取り込みやすい足場から判断してください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawasannbonnmatukou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.256117/134.34155/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kagawakoisogyokou",
    "name": "小磯漁港",
    "prefecture": "香川県",
    "lat": 34.26752,
    "lng": 134.321766,
    "fish": [
      "メバル",
      "クロダイ",
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki",
      "rockfish-lure"
    ],
    "note": "小磯は波止側のメバル・チヌと番屋川河口のハゼが候補。駐車場所が限られるため、空いている作業用地を駐車場代わりにしないでください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawakoisogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.26752/134.321766/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kagawaumasinogyokou",
    "name": "馬篠漁港",
    "prefecture": "香川県",
    "lat": 34.274028,
    "lng": 134.293871,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "馬篠の東西の波止はサビキの回遊魚やキス・カレイが候補。仕掛けを投げる釣りと足元の釣りを分け、混雑時は投入方向を合わせます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawaumasinogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.274028/134.293871/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kagawawakimotogyokou",
    "name": "脇元漁港",
    "prefecture": "香川県",
    "lat": 34.284755,
    "lng": 134.275246,
    "fish": [
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki",
      "rockfish-lure"
    ],
    "note": "脇元の赤灯側はメバル・チヌ・アオリイカの候補。港までの道や駐車が分かりにくいため、夜に初めて訪れる計画は避けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawawakimotogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.284755/134.275246/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kagawatudakou",
    "name": "津田港",
    "prefecture": "香川県",
    "lat": 34.297483,
    "lng": 134.24808,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "サバ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "津田は港の岸壁と津田川河口で対象が変わり、港内のアジや河口のハゼが候補。船の出入りがあるときは仕掛けを回収します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawatudakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.297483/134.24808/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kagawaedomarigyokou",
    "name": "江泊漁港",
    "prefecture": "香川県",
    "lat": 34.318948,
    "lng": 134.262693,
    "fish": [
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki",
      "rockfish-lure"
    ],
    "note": "江泊の赤灯側はメバル・チヌ、秋のアオリイカが候補。外側の消波帯へ移る前に、港の波止から届く範囲を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawaedomarigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.318948/134.262693/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kagawaodauragyokou",
    "name": "小田浦漁港",
    "prefecture": "香川県",
    "lat": 34.337784,
    "lng": 134.236729,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "小田浦は西側の小波止付近と港内岸壁にアジ・イワシなどの情報があります。小物釣りでも係留船と作業車の動線を塞がないようにします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawaodauragyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.337784/134.236729/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kagawamurookigyokou",
    "name": "室沖漁港",
    "prefecture": "香川県",
    "lat": 34.337501,
    "lng": 134.185832,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "室沖の小港はアジ・イワシ・メバル・チヌが候補。集落への道が狭く駐車余地も少ないため、車で岸壁まで入る前提では計画しないでください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawamurookigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.337501/134.185832/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kagawasidokou",
    "name": "志度港",
    "prefecture": "香川県",
    "lat": 34.324743,
    "lng": 134.174073,
    "fish": [
      "メバル",
      "クロダイ",
      "スズキ"
    ],
    "methodSlugs": [
      "uki",
      "rockfish-lure"
    ],
    "note": "志度の市役所裏側の港。メバル・チヌ・スズキが候補ですが、市役所の駐車場が釣り用に使えるとは限らないため別途確認が必要です。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawasidokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.324743/134.174073/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kagawamurekou",
    "name": "牟礼港",
    "prefecture": "香川県",
    "lat": 34.340849,
    "lng": 134.155533,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "牟礼の赤灯側はアジ・サヨリ・メバルなどが候補。先端は人数が限られるため、空いていない場合に無理に割り込まず港内の利用条件を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawamurekou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.340849/134.155533/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-ehimesetokou",
    "name": "大三島・上浦港（瀬戸港）",
    "prefecture": "愛媛県",
    "lat": 34.22479,
    "lng": 133.055441,
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
    "note": "大三島と伯方島の間の水道に面する上浦港。流れが速い場所なので、アジ・メバル・チヌ狙いでも仕掛けの流され方を確認して投入します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimesetokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.22479/133.055441/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-ehimeamazakikou",
    "name": "大三島・甘崎港",
    "prefecture": "愛媛県",
    "lat": 34.24191,
    "lng": 133.052287,
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
    "note": "大三島の甘崎にある小港。アジ・メバルとキス・カレイが候補で、同じ岸壁でも底狙いと回遊待ちで仕掛けを使い分けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimeamazakikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.24191/133.052287/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-ehimeinokutikou",
    "name": "大三島・井ノ口港",
    "prefecture": "愛媛県",
    "lat": 34.265888,
    "lng": 133.042846,
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
      "eging"
    ],
    "note": "井ノ口の港は北側の赤灯方向に釣り情報があります。アジ・メバル・キス・チヌなどを狙う際も、大型船の利用岸壁とは区別してください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimeinokutikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.265888/133.042846/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-ehimekumagokou",
    "name": "伯方島・熊口港",
    "prefecture": "愛媛県",
    "lat": 34.221189,
    "lng": 133.065248,
    "fish": [
      "マアジ",
      "シロギス",
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
    "note": "伯方島の熊口は水道に面する小港。アジ・サヨリ・メバルなどが候補で、流れが速いときは仕掛けを長く流さず周囲との間隔を取ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimekumagokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.221189/133.065248/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-ehimeedagoekou",
    "name": "伯方島・枝越港",
    "prefecture": "愛媛県",
    "lat": 34.206851,
    "lng": 133.073165,
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
      "eging"
    ],
    "note": "伯方島の枝越は両側の波止に釣り情報のある港。アジ・キス・メバル・チヌなどを、船の通行を避ける向きで探ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimeedagoekou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.206851/133.073165/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-ehimemukunagyokou",
    "name": "大島・椋名漁港",
    "prefecture": "愛媛県",
    "lat": 34.137827,
    "lng": 133.019135,
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
      "eging"
    ],
    "note": "大島の椋名は港内岸壁でアジ・メバル・キスなどが候補。波止付近の頭上の電線に注意し、竿を高く立てたり振りかぶったりする前に確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimemukunagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.137827/133.019135/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-ehimetoyookagyokou",
    "name": "豊岡漁港",
    "prefecture": "愛媛県",
    "lat": 33.9723,
    "lng": 133.480282,
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
    "note": "豊岡は浅い砂地に面する小港。キス・カレイとチヌ・スズキが候補で、重い仕掛けを遠投する前に底の状態を探ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/ehimetoyookagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.9723/133.480282/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-ehimenagatugyokou",
    "name": "長津漁港",
    "prefecture": "愛媛県",
    "lat": 33.974364,
    "lng": 133.471227,
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
    "note": "長津の小港は浅場のキス・カレイ狙いが候補。干潮時は届く水深が変わるため、潮位を見て無理のない場所から探ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/ehimenagatugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.974364/133.471227/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kochiikesimagyokou",
    "name": "池島漁港",
    "prefecture": "高知県",
    "lat": 32.921115,
    "lng": 132.688987,
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
    "note": "池島は狭い道の先の小港。港内岸壁でアジ・チヌ・アオリイカが候補ですが、車の横付けを前提にせず作業のない場所を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochiikesimagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.921115/132.688987/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kochikatasimakou",
    "name": "片島港",
    "prefecture": "高知県",
    "lat": 32.920826,
    "lng": 132.697463,
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
    "note": "沖ノ島・鵜来島方面の船が発着する片島港。岸釣りのアジ・チヌ・アオリイカ情報を掲載し、渡船受付・定期船岸壁の利用とは分けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochikatasimakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.920826/132.697463/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kochisukumowannkou",
    "name": "田ノ浦漁港（高知・宿毛）",
    "prefecture": "高知県",
    "lat": 32.908325,
    "lng": 132.714908,
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
    "note": "田ノ浦の南北の波止にはアジ・カマス・チヌ・イカの情報があります。北側は駐車余地が少ないため、地元の通行と漁業作業を妨げないアクセスが必要です。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochisukumowannkou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.908325/132.714908/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kochisakakigyokou",
    "name": "栄喜漁港",
    "prefecture": "高知県",
    "lat": 32.881768,
    "lng": 132.709029,
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
    "note": "宿毛湾の入り江にある栄喜の港。アジ・チヌ・アオリイカが候補です。湾内でも養殖設備と係留索に近づけすぎないように探ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochisakakigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.881768/132.709029/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kochitomariuragyokou",
    "name": "泊浦漁港",
    "prefecture": "高知県",
    "lat": 32.841051,
    "lng": 132.668924,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "泊浦は赤灯側にアジ・チヌ・グレやイカの釣り情報があります。カゴ釣りと足元のサビキを同時に行う場合は投入方向を合わせ、船道を空けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochitomariuragyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.841051/132.668924/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kochitatibanauragyokou",
    "name": "橘浦漁港",
    "prefecture": "高知県",
    "lat": 32.827204,
    "lng": 132.654397,
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
    "note": "橘浦の東西の波止はアジ・チヌ・グレ・アオリイカが候補。幹線道路から離れた集落なので、夜間の騒音と駐車場所にも配慮します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochitatibanauragyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.827204/132.654397/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kochiamajigyokou",
    "name": "安満地漁港",
    "prefecture": "高知県",
    "lat": 32.801921,
    "lng": 132.655814,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "安満地は波止と南側岸壁でアジ・チヌ・グレなどが候補。港内の漁具や養殖作業が多いため、空いて見える岸壁でも作業予定を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochiamajigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.801921/132.655814/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kochiiltusaigyokou",
    "name": "一切漁港",
    "prefecture": "高知県",
    "lat": 32.78318,
    "lng": 132.642446,
    "fish": [
      "メジナ",
      "アオリイカ",
      "マダイ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "大月半島の一切はカゴ釣りのグレ・マダイなどが紹介されています。有料の駐車案内を確認し、深さのある岸壁では取り込み用のタモを準備します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochiiltusaigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.78318/132.642446/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kochikomamegyokou",
    "name": "古満目漁港",
    "prefecture": "高知県",
    "lat": 32.789565,
    "lng": 132.690082,
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
    "note": "古満目の湾奥は岸と平行な波止に釣り情報があります。アジ・チヌ・グレ・アオリイカを候補に、湾奥の船の出入りを避けて竿を出します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochikomamegyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.789565/132.690082/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kochisimokawagutigyokou",
    "name": "下川口漁港",
    "prefecture": "高知県",
    "lat": 32.781231,
    "lng": 132.843182,
    "fish": [
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "スズキ",
      "カマス"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "宗呂川河口の下川口。カマス・チヌ・スズキやアオリイカが候補で、川の濁りと潮を見て探ります。西側外海向きの大きな消波帯は避けてください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochisimokawagutigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.781231/132.843182/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kochitatukusigyokou",
    "name": "竜串漁港",
    "prefecture": "高知県",
    "lat": 32.787455,
    "lng": 132.867815,
    "fish": [
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "スズキ",
      "カマス"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "竜串はグラスボートが発着する港。カマス・メッキ・チヌなどが候補ですが、白灯側の船着き場を塞がず、乗降時間は仕掛けを回収します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochitatukusigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/32.787455/132.867815/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakihibigyokou",
    "name": "日比漁港",
    "prefecture": "長崎県",
    "lat": 33.444334,
    "lng": 129.769435,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "鷹島の日比はアジ・チヌ・クロ、イカ類が候補。防風フェンスのある波止で、網干場への駐車は避け、環境美化協力金の現地案内に従います。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakihibigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.444334/129.769435/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakifunatoudugyokou",
    "name": "船唐津漁港",
    "prefecture": "長崎県",
    "lat": 33.411831,
    "lng": 129.725447,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "船唐津は南側波止と港内の小波止で釣り方を選ぶ港。アジや根魚、アオリイカが候補です。環境美化協力金の受付と漁業作業を確認してください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakifunatoudugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.411831/129.725447/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakitokonamigyokou",
    "name": "床浪漁港",
    "prefecture": "長崎県",
    "lat": 33.407585,
    "lng": 129.737613,
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
    "note": "床浪は港内岸壁のアジ・キス・チヌと、外向きの回遊魚狙いが紹介されています。ここでは港内側を案内し、別の沖波止への移動経路は含めません。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakitokonamigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.407585/129.737613/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakifukusimakou",
    "name": "福島港",
    "prefecture": "長崎県",
    "lat": 33.365284,
    "lng": 129.820397,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "福島港は東側波止と岸壁にアジ・イワシ、キス・チヌなどの情報があります。小物狙いのサビキと投げ釣りの動線を分けて利用します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakifukusimakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.365284/129.820397/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakinabekusigyokou",
    "name": "鍋串漁港",
    "prefecture": "長崎県",
    "lat": 33.401334,
    "lng": 129.812071,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "鍋串の波止はアジ・根魚・アオリイカに加えて秋の回遊魚が候補。ショアジギングでは周囲の釣り人との距離を取り、環境美化協力金の案内を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakinabekusigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.401334/129.812071/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakiimabukugyokou",
    "name": "今福漁港",
    "prefecture": "長崎県",
    "lat": 33.35566,
    "lng": 129.765058,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "コウイカ",
      "マゴチ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "今福の赤灯側は足元に敷石があるため、岸壁直下とその先で水深が変わります。アジ・キス・チヌ・イカ類を狙う際は根掛かりに注意します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakiimabukugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.35566/129.765058/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakitukinokawakou",
    "name": "調川港",
    "prefecture": "長崎県",
    "lat": 33.354889,
    "lng": 129.726949,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "コウイカ",
      "マゴチ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "調川は東側波止周辺の岸壁にサビキ・投げ釣りの情報があります。つきの島公園周辺と漁業用岸壁を区別し、船の接岸時は場所を空けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakitukinokawakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.354889/129.726949/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakikurosiokou",
    "name": "黒潮港",
    "prefecture": "長崎県",
    "lat": 33.351824,
    "lng": 129.695685,
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
    "note": "黒潮港の護岸は足元に敷石があるため、サビキでも底まで落とす前に確認が必要。アジ・メッキ・チヌなどが候補で、広場の利用時間に従います。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakikurosiokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.351824/129.695685/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakimikuriyakou",
    "name": "御厨港",
    "prefecture": "長崎県",
    "lat": 33.36756,
    "lng": 129.669421,
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
    "note": "御厨の岸壁と波止はアジ・チヌ・アオリイカが候補。フェリー乗り場を釣り座にせず、有料駐車や狭い進入路の条件を確認して向かいます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakimikuriyakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.36756/129.669421/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagakodomogyokou",
    "name": "小友漁港",
    "prefecture": "佐賀県",
    "lat": 33.546617,
    "lng": 129.906142,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "小友の港はアジ・カマス・メバルやイカ類が候補。大波止外側の高い波返し・消波帯と内向きの足場を分けて判断します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/sagakodomogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.546617/129.906142/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagayobukokou",
    "name": "呼子港",
    "prefecture": "佐賀県",
    "lat": 33.546778,
    "lng": 129.891486,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "呼子は港内の小波止・岸壁にアジ・カマス・イカ類などの情報があります。市場・定期船・遊覧船の作業区画では釣りをせず、空いている区画を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/sagayobukokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.546778/129.891486/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagakabejimanikennyahato",
    "name": "加部島・二軒屋波止",
    "prefecture": "佐賀県",
    "lat": 33.544685,
    "lng": 129.877582,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "加部島の二軒屋は呼子大橋付近の岸壁と波止の釣り情報。アジ・カマスやイカ類が候補ですが、大橋周辺の潮流と船の通行に注意します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/sagakabejimanikennyahato.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.544685/129.877582/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "harbor-sagakabejimagyokou",
    "name": "加部島漁港",
    "prefecture": "佐賀県",
    "lat": 33.554342,
    "lng": 129.891722,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "加部島漁港の北側波止はアジ・カマス・イカ類が候補。清掃費・駐車料金の案内があるため、現地の受付と最新の条件を確認して利用します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/sagakabejimagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.554342/129.891722/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-kyoutosirasugigyokou",
    "name": "白杉漁港",
    "prefecture": "京都府",
    "lat": 35.504038,
    "lng": 135.334053,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "白杉の港内側はアジ・メバル・キジハタなどが候補。短い堤防や外側先端の立入制限情報があるため、昔の釣り座紹介をそのまま使わず現地の区画を確認します。",
    "caution": [
      "白杉の港内側はアジ・メバル・キジハタなどが候補。短い堤防や外側先端の立入制限情報があるため、昔の釣り座紹介をそのまま使わず現地の区画を確認します。",
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。",
      "タコ・貝類など漁業権対象の採捕は行わない。港ごとの利用条件を確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba5/kyoutosirasugigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.504038/135.334053/&base=std&ls=std&disp=1"
      },
      {
        "label": "京都府：漁港利用のルール",
        "url": "https://www.pref.kyoto.jp/suiji/12400024.html"
      },
      {
        "label": "魚速報：堤防の一部立入制限",
        "url": "https://uosoku.com/home/kinki/kyoto/sira/"
      }
    ]
  },
  {
    "slug": "harbor-kyoutosimakagegyokou",
    "name": "島陰漁港",
    "prefecture": "京都府",
    "lat": 35.575433,
    "lng": 135.251055,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "島陰の港内岸壁ではアジ、波止側ではチヌ・メバル・アオリイカが候補。有料駐車の利用条件を確認し、岸壁を車で占有しないようにします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。",
      "タコ・貝類など漁業権対象の採捕は行わない。港ごとの利用条件を確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/kyoutosimakagegyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.575433/135.251055/&base=std&ls=std&disp=1"
      },
      {
        "label": "京都府：漁港利用のルール",
        "url": "https://www.pref.kyoto.jp/suiji/12400024.html"
      }
    ]
  },
  {
    "slug": "harbor-kyoutoejirigyokou",
    "name": "江尻漁港",
    "prefecture": "京都府",
    "lat": 35.580547,
    "lng": 135.202088,
    "fish": [
      "シロギス",
      "カレイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "天橋立北側の江尻の港。キス・カレイの投げ釣り情報がありますが、道路が狭く駐車余地も限られます。観光船や漁船の航路を避けてください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "タコ・貝類など漁業権対象の採捕は行わない。港ごとの利用条件を確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/kyoutoejirigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.580547/135.202088/&base=std&ls=std&disp=1"
      },
      {
        "label": "京都府：漁港利用のルール",
        "url": "https://www.pref.kyoto.jp/suiji/12400024.html"
      }
    ]
  },
  {
    "slug": "harbor-kyoutosatonami",
    "name": "里波見漁港",
    "prefecture": "京都府",
    "lat": 35.62678,
    "lng": 135.24627,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "里波見は浅めの小港でアジ・サヨリ・キス・メバルなどが候補。大物の遠投狙いより、内向きの小物釣りと足元の地形確認から考えます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "タコ・貝類など漁業権対象の採捕は行わない。港ごとの利用条件を確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/kyoutosatonami.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.62678/135.24627/&base=std&ls=std&disp=1"
      },
      {
        "label": "京都府：漁港利用のルール",
        "url": "https://www.pref.kyoto.jp/suiji/12400024.html"
      }
    ]
  },
  {
    "slug": "harbor-kyoutoniizakigyokou",
    "name": "新井崎漁港",
    "prefecture": "京都府",
    "lat": 35.693186,
    "lng": 135.305171,
    "fish": [
      "メバル",
      "キジハタ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ",
      "アイナメ"
    ],
    "methodSlugs": [
      "eging",
      "uki",
      "rockfish-lure"
    ],
    "note": "新井崎は根魚とアオリイカ・ヤリイカが候補の港。港内は漁業作業場で駐車余地が乏しいため、舟屋前や神社周辺への無断駐車・通行は避けてください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "タコ・貝類など漁業権対象の採捕は行わない。港ごとの利用条件を確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/kyoutoniizakigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.693186/135.305171/&base=std&ls=std&disp=1"
      },
      {
        "label": "京都府：漁港利用のルール",
        "url": "https://www.pref.kyoto.jp/suiji/12400024.html"
      }
    ]
  },
  {
    "slug": "harbor-hyougoiwamigyokou",
    "name": "岩見漁港",
    "prefecture": "兵庫県",
    "lat": 34.78251,
    "lng": 134.530313,
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage",
      "uki",
      "rockfish-lure"
    ],
    "note": "岩見は秋冬の港内のヒイカ、岸壁周辺のメバル・カサゴなどが候補。マリーナの駐車場を釣り用と考えず、港へのアクセスを確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougoiwamigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.78251/134.530313/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-hyougomurotugyokou",
    "name": "室津漁港",
    "prefecture": "兵庫県",
    "lat": 34.768586,
    "lng": 134.502718,
    "fish": [
      "メバル",
      "カサゴ",
      "クロダイ"
    ],
    "methodSlugs": [
      "uki",
      "rockfish-lure"
    ],
    "note": "室津は港内のヒイカと波止周りのメバル・カサゴが候補。岸壁は荷揚げの作業場でもあるため、作業が始まったら速やかに場所を空けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougomurotugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.768586/134.502718/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-hashidate-kaga",
    "name": "橋立漁港",
    "prefecture": "石川県",
    "lat": 36.352601,
    "lng": 136.31263,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "キジハタ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "加賀市の橋立港。港内のアジのサビキ・アジングを中心に、キスや根魚、アオリイカの情報があります。外側の工事区画や消波ブロックとは分け、漁船の作業を優先します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/eehasidate.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.352601/136.31263/&base=std&ls=std&disp=1"
      },
      {
        "label": "カンパリ：橋立の陸釣り情報（許可の証明ではありません）",
        "url": "https://fishing.ne.jp/fishingpost/area/ishikawa-daishoji-negamigreenbeach03"
      }
    ]
  },
  {
    "slug": "harbor-aomorisiltukarigyokou",
    "name": "尻労漁港",
    "prefecture": "青森県",
    "lat": 41.374216,
    "lng": 141.453395,
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
    "note": "尻労は高い波返しがあるため内向きが中心。チカ・ウミタナゴや根魚が候補で、外側へ登るより港内側の足場を確認して探ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorisiltukarigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.374216/141.453395/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomoriiwayagyokou",
    "name": "岩屋漁港",
    "prefecture": "青森県",
    "lat": 41.39191,
    "lng": 141.412325,
    "fish": [
      "カレイ",
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
    "note": "岩屋は港内岸壁と波止内側でチカ・アイナメ・ソイ・カレイなどが候補。外側の大きな消波ブロック帯に降りる釣りは避けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomoriiwayagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.39191/141.412325/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomoriisimotigyokou",
    "name": "石持漁港",
    "prefecture": "青森県",
    "lat": 41.35088,
    "lng": 141.294222,
    "fish": [
      "マアジ",
      "カレイ",
      "ヒラメ",
      "アイナメ",
      "ソイ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "石持は砂浜に囲まれた港で、カレイを短い投げ仕掛けで探る釣りが紹介されています。内向きでも係留索を確認し、回収できる範囲から投入します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomoriisimotigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.35088/141.294222/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomorisimofurogyokou",
    "name": "下風呂漁港",
    "prefecture": "青森県",
    "lat": 41.468875,
    "lng": 141.092777,
    "fish": [
      "マアジ",
      "カレイ",
      "ヤリイカ",
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
    "note": "下風呂の港内はサビキの小物釣り、波止側は根魚・カレイ・ヤリイカなどが候補。外側の大きな消波帯と岸壁を区別して選びます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorisimofurogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.468875/141.092777/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomoriikokumagyokou",
    "name": "易国間漁港",
    "prefecture": "青森県",
    "lat": 41.487813,
    "lng": 140.99817,
    "fish": [
      "カレイ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "uki",
      "rockfish-lure"
    ],
    "note": "易国間の波止は高い波返しがあるため内向きの釣りが基本。ウミタナゴ・アイナメ・ソイ・カレイなどを小さな仕掛けから探ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomoriikokumagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.487813/140.99817/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomorihebiuragyokou",
    "name": "蛇浦漁港",
    "prefecture": "青森県",
    "lat": 41.504865,
    "lng": 140.969224,
    "fish": [
      "カレイ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "uki",
      "rockfish-lure"
    ],
    "note": "蛇浦は東側の小波止と西側の高い波返しで足場が違います。根魚とカレイが候補で、初めてなら明るい時間に港内側を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorihebiuragyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.504865/140.969224/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomorisitatehamagyokou",
    "name": "下手浜漁港",
    "prefecture": "青森県",
    "lat": 41.540787,
    "lng": 140.920086,
    "fish": [
      "マアジ",
      "カレイ",
      "ヤリイカ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "ホッケ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "大間崎近くの下手浜はアジ・根魚・カレイ・ヤリイカなどが候補。大きな港でも漁業作業を優先し、長い波止の先端まで無理に歩かない計画にします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorisitatehamagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.540787/140.920086/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomorioomagyokou",
    "name": "大間漁港",
    "prefecture": "青森県",
    "lat": 41.528708,
    "lng": 140.905344,
    "fish": [
      "マアジ",
      "カレイ",
      "ヤリイカ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "ホッケ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "大間の赤灯側ではアジ・根魚・カレイなどの岸釣り情報があります。外側の大きな消波ブロック帯には降りず、漁船と荷揚げ作業を避けて利用します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorioomagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.528708/140.905344/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomoriokoltupegyokou",
    "name": "奥戸漁港",
    "prefecture": "青森県",
    "lat": 41.492137,
    "lng": 140.905774,
    "fish": [
      "マアジ",
      "カレイ",
      "ヤリイカ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "ホッケ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "奥戸の赤灯側の波止はアジ・根魚・カレイなどが候補。先端だけでなく帰り道の波も確認し、風が強い日は港内でも釣行を見合わせます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomoriokoltupegyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.492137/140.905774/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomorizaimokugyokou",
    "name": "材木漁港",
    "prefecture": "青森県",
    "lat": 41.469808,
    "lng": 140.889874,
    "fish": [
      "マアジ",
      "カレイ",
      "ヤリイカ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ",
      "ホッケ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "材木の西側波止はアイナメ・ソイ・カレイなどが候補。外側に消波ブロックのない部分でも転落防止柵があるとは限らず、足元を確認してください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorizaimokugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.469808/140.889874/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomorisaigyokou",
    "name": "佐井漁港",
    "prefecture": "青森県",
    "lat": 41.432753,
    "lng": 140.85758,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "ヤリイカ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "佐井はアルサス周辺の港内岸壁と波止で釣り条件が異なります。アジ・根魚・カレイなどが候補ですが、観光船・定期船の乗降場所を空けて利用します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorisaigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.432753/140.85758/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomoriyagosigyokou",
    "name": "矢越漁港",
    "prefecture": "青森県",
    "lat": 41.419495,
    "lng": 140.841036,
    "fish": [
      "マアジ",
      "メバル",
      "アイナメ",
      "ソイ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "矢越の小波止ではアジ・ウミタナゴ・メバル・アイナメなどの情報があります。釣り座が限られるため、先行者と漁業作業を優先します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomoriyagosigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.419495/140.841036/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomoriisoyagyokou",
    "name": "磯谷漁港",
    "prefecture": "青森県",
    "lat": 41.398848,
    "lng": 140.831037,
    "fish": [
      "マアジ",
      "ヤリイカ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "磯谷は波返しが高く、内向きの根魚・アジ・ヤリイカ狙いが候補。波返しを越えず、港内の仕掛けを回収しやすい向きから探ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomoriisoyagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.398848/140.831037/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomoricyougogyokou",
    "name": "長後漁港",
    "prefecture": "青森県",
    "lat": 41.371366,
    "lng": 140.827346,
    "fish": [
      "マアジ",
      "ヤリイカ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "長後の波止は外側に大きな消波ブロックがあるため内向きが中心。アジ・ウミタナゴ・アイナメ・ソイなどが候補です。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomoricyougogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.371366/140.827346/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-aomorifukuuragyokou",
    "name": "福浦漁港（青森・佐井）",
    "prefecture": "青森県",
    "lat": 41.328519,
    "lng": 140.806875,
    "fish": [
      "メバル",
      "クロダイ",
      "アオリイカ",
      "アイナメ",
      "ソイ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "eging",
      "uki",
      "rockfish-lure"
    ],
    "note": "青森の福浦は北側波止の内向きに釣り情報があります。高い波返しの外側へ出ず、メバル・アイナメ・ソイなどを足元から探ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba3/aomorifukuuragyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/41.328519/140.806875/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-simaneonozegyokou",
    "name": "魚瀬漁港",
    "prefecture": "島根県",
    "lat": 35.518517,
    "lng": 132.920344,
    "fish": [
      "マアジ",
      "メバル",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "rockfish-lure"
    ],
    "note": "魚瀬は幹線道路から離れた港。大きな波止の内側でアジ・メバル・アオリイカが候補で、集落の狭い道と駐車条件を先に確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simaneonozegyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.518517/132.920344/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanesiotugyokou",
    "name": "塩津漁港（島根・出雲）",
    "prefecture": "島根県",
    "lat": 35.479509,
    "lng": 132.77765,
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
    "note": "塩津の港は波止内側の低い部分にアジ・アオリイカの情報があります。外向きの巨大な消波ブロックを避け、うねりがある日は低い釣り座にも入りません。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanesiotugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.479509/132.77765/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanekamauragyokou",
    "name": "釜浦漁港",
    "prefecture": "島根県",
    "lat": 35.475839,
    "lng": 132.755592,
    "fish": [
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "マダイ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "釜浦の波止はチヌ・グレ・アオリイカなどが候補。潮が当たる場所なので、軽い仕掛けが流される方向を確認して周囲と間隔を取ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanekamauragyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.475839/132.755592/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanekawasimokou",
    "name": "河下港",
    "prefecture": "島根県",
    "lat": 35.449518,
    "lng": 132.749434,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "河下は複数の波止と岸壁を持つ港。港内側のチヌ・アジ・コウイカを候補に、外側の大きな消波帯とは分けて釣り座を選びます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanekawasimokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.449518/132.749434/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanehinomisakigyokou",
    "name": "日御碕漁港",
    "prefecture": "島根県",
    "lat": 35.429327,
    "lng": 132.627919,
    "fish": [
      "マアジ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging"
    ],
    "note": "日御碕神社の奥にある小港。岸壁のアジのサビキとアオリイカが候補です。観光の通行と漁業作業を妨げない場所を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanehinomisakigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.429327/132.627919/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanetaisyagyokou",
    "name": "大社漁港",
    "prefecture": "島根県",
    "lat": 35.401049,
    "lng": 132.665663,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage"
    ],
    "note": "大社の港内は夏秋のアジ、砂地に向けてキス・カレイなどが候補。広い岸壁でも荷役区画を避け、投げる釣りは周囲との間隔を取ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanetaisyagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.401049/132.665663/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simaneodahigasikou",
    "name": "小田東港",
    "prefecture": "島根県",
    "lat": 35.281063,
    "lng": 132.615967,
    "fish": [
      "メバル",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki",
      "rockfish-lure"
    ],
    "note": "小田東はメバル・チヌ・アオリイカが候補の小港。東側の波止手前は網干場なので、駐車や道具の置き場として使わないでください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simaneodahigasikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.281063/132.615967/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanehanekou",
    "name": "波根港",
    "prefecture": "島根県",
    "lat": 35.245111,
    "lng": 132.528441,
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
    "note": "波根はアジ・キス・チヌ・アオリイカの情報がある港。白灯先端へは消波ブロックを渡る経路が紹介されているため、無理に先端へ向かわないでください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanehanekou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.245111/132.528441/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanekutekou",
    "name": "久手港",
    "prefecture": "島根県",
    "lat": 35.231125,
    "lng": 132.504365,
    "fish": [
      "シロギス",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "久手はキスやチヌを狙う候補。港内の浅い砂地では潮位で条件が変わるため、底を確認しながら仕掛けを入れます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanekutekou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.231125/132.504365/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simaneisotakegyokou",
    "name": "五十猛漁港",
    "prefecture": "島根県",
    "lat": 35.186909,
    "lng": 132.419543,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "五十猛は港内岸壁でアジ・アオリイカが候補。北側の地磯や沖向きの釣りとは区別し、港内の利用できる範囲から探ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simaneisotakegyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.186909/132.419543/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanefukuuragyokou",
    "name": "福浦漁港（島根・三隅）",
    "prefecture": "島根県",
    "lat": 34.805329,
    "lng": 131.95344,
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
    "note": "島根の福浦はメバル・チヌ・アオリイカが候補の小港。波止手前の駐車余地が限られるため、集落や漁業作業の動線を塞がないでください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanefukuuragyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.805329/131.95344/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      },
      {
        "label": "浜田市観光協会：釣り場案内",
        "url": "https://kankou-hamada.or.jp/content/fishing/"
      }
    ]
  },
  {
    "slug": "harbor-simanemisumikou",
    "name": "三隅港",
    "prefecture": "島根県",
    "lat": 34.783532,
    "lng": 131.928935,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "ヒラメ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "三隅港の公共岸壁にはアジ・キス・チヌ・ヒラメの釣り情報があります。発電所側や立入制限区画と区別し、大型船の接岸・荷役がある場合は利用しません。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanemisumikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.783532/131.928935/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      },
      {
        "label": "浜田市観光協会：釣り場案内",
        "url": "https://kankou-hamada.or.jp/content/fishing/"
      }
    ]
  },
  {
    "slug": "harbor-yamaguchimitumatukou",
    "name": "周防大島・三ツ松港",
    "prefecture": "山口県",
    "lat": 33.942327,
    "lng": 132.188144,
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
    "note": "周防大島の三ツ松は東西の波止で小物・キス・カレイなどが候補。隣接する小松港と混同せず、集落側の小波止から利用条件を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/yamaguchimitumatukou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.942327/132.188144/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-yamaguchitunougi",
    "name": "周防大島・津海木の波止",
    "prefecture": "山口県",
    "lat": 33.883973,
    "lng": 132.363045,
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
      "eging"
    ],
    "note": "周防大島の津海木は石積みの波止からメバル・チヌなどを狙う候補。平坦なコンクリート岸壁とは足場が違うため、濡れた石の上を移動しないでください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/yamaguchitunougi.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.883973/132.363045/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "harbor-yamaguchikamaikou",
    "name": "長島・蒲井港",
    "prefecture": "山口県",
    "lat": 33.814097,
    "lng": 132.075469,
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
    "note": "長島の蒲井は波止と砂利浜にキス・カレイ・メバルなどの情報があります。有料駐車場の案内を確認し、歩く区間も含めて明るいうちに下見します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchikamaikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.814097/132.075469/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-yamaguchiuomikou",
    "name": "魚見港",
    "prefecture": "山口県",
    "lat": 34.397721,
    "lng": 131.328914,
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
    "note": "魚見の小港ではアジ・メバル・チヌ・アオリイカが候補。東側の小波止でも係留船とロープがある場所を避けて利用します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiuomikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.397721/131.328914/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-yamaguchitokuyamakou",
    "name": "徳山港",
    "prefecture": "山口県",
    "lat": 34.049548,
    "lng": 131.799438,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "コウイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "徳山は北側の港内岸壁にアジ・チヌ・スズキ・コウイカなどの情報があります。フェリーや荷役の区域を避け、作業中は釣り座を空けることが前提です。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchitokuyamakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.049548/131.799438/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-yamaguchihetagyokou",
    "name": "戸田漁港",
    "prefecture": "山口県",
    "lat": 34.053797,
    "lng": 131.689939,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "戸田の湾奥の港は波止からアジ・サヨリ・キス・メバルなどが候補。穏やかな湾でも船の出入りと係留設備を避けて投入します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchihetagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.053797/131.689939/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-yamaguchitonomikaigann",
    "name": "富海海岸（富海漁港）",
    "prefecture": "山口県",
    "lat": 34.048268,
    "lng": 131.643591,
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "富海は砂浜と港の波止でキス・カレイ・サヨリなどが候補。ここでは港側を掲載し、海水浴の利用や海岸の立入条件と区別します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchitonomikaigann.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.048268/131.643591/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-yamaguchikodagyokou",
    "name": "小田漁港",
    "prefecture": "山口県",
    "lat": 34.198226,
    "lng": 132.417934,
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
      "eging"
    ],
    "note": "小田の港はアジ・サヨリ・キス・カレイなどが候補。港までの道と駐車余地が狭いため、漁業用地や民家前を塞がないアクセスを確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchikodagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.198226/132.417934/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakinisikobahato",
    "name": "西木場波止",
    "prefecture": "長崎県",
    "lat": 33.366324,
    "lng": 129.630733,
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
    "note": "西木場の波止はキスとアオリイカが紹介される場所。足元の根を確認し、投げ釣りとエギングの投入範囲が重ならないようにします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakinisikobahato.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.366324/129.630733/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "harbor-nagasakiitirokugyokou",
    "name": "一六漁港",
    "prefecture": "長崎県",
    "lat": 33.364997,
    "lng": 129.624295,
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
    "note": "一六海水浴場に隣接する港。浅めの水域と藻場があり、キスとアオリイカが候補です。藻を引き抜くような探り方を避け、海水浴利用も確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakiitirokugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.364997/129.624295/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakikamatakou",
    "name": "釜田港",
    "prefecture": "長崎県",
    "lat": 33.373545,
    "lng": 129.597731,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "釜田は東側の波止と湾内岸壁でアジ・チヌ・アオリイカなどが候補。西側はフェンスのある区画なので、同じように入れる場所とは扱いません。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakikamatakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.373545/129.597731/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakisinnookubogyokou",
    "name": "新大久保漁港（須草港）",
    "prefecture": "長崎県",
    "lat": 33.394061,
    "lng": 129.52647,
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
    "note": "須草港とも呼ばれる新大久保の小港。アジ・メバル・チヌ・アオリイカが候補ですが、進入路が狭いため大型車で岸壁まで入る前提では計画しません。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakisinnookubogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.394061/129.52647/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakisionourakou",
    "name": "潮の浦港",
    "prefecture": "長崎県",
    "lat": 33.388919,
    "lng": 129.541233,
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
    "note": "潮の浦の湾内の波止はチヌのウキ釣りとアオリイカが候補。内湾でも係留船の動きを見て、仕掛けを流す範囲を絞ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakisionourakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.388919/129.541233/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakiusukagyokou",
    "name": "薄香漁港",
    "prefecture": "長崎県",
    "lat": 33.373151,
    "lng": 129.542027,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "薄香は東側の小波止と赤灯側で足場が違い、アジ・メバル・イカ類が候補。常夜灯周りでも作業・係留区画を優先してください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakiusukagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.373151/129.542027/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakifuruekou",
    "name": "古江港",
    "prefecture": "長崎県",
    "lat": 33.365983,
    "lng": 129.518037,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "古江の波止はアジ・チヌ・クロとアオリイカが候補。カゴ釣りやウキ釣りを行う際は流す方向を周囲と合わせ、エギングと交差しないようにします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakifuruekou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.365983/129.518037/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakisimonakanogyokou",
    "name": "下中野漁港",
    "prefecture": "長崎県",
    "lat": 33.359155,
    "lng": 129.501622,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "下中野は北側波止にアジ・カマス・イカ類の情報があります。岸壁が高いため、長めのタモなど取り込み方法を準備してから釣り座を選びます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakisimonakanogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.359155/129.501622/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakitakagoegyokou",
    "name": "高越漁港",
    "prefecture": "長崎県",
    "lat": 33.325831,
    "lng": 129.442785,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "高越は波止側にアジ・チヌ・クロなどの情報があります。地磯のカマサキとは別に掲載し、防風フェンスと港の駐車協力金の案内に従います。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakitakagoegyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.325831/129.442785/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakikotagyokou",
    "name": "古田漁港",
    "prefecture": "長崎県",
    "lat": 33.22756,
    "lng": 129.423988,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "古田川河口の港はチヌ・スズキ・アオリイカが候補。港内の常夜灯周りを狙う場合も、係留船と川の流れを確認してから投入します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakikotagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.22756/129.423988/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-nagasakikougetugyokou",
    "name": "向月漁港",
    "prefecture": "長崎県",
    "lat": 33.184183,
    "lng": 129.392037,
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
    "note": "向月の西側波止はチヌ・クロのウキ釣りとアオリイカが候補。小さな波止なので先端の釣り座を無理に共有せず、先行者を優先します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/nagasakikougetugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.184183/129.392037/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagahosikagyokou",
    "name": "星賀漁港",
    "prefecture": "佐賀県",
    "lat": 33.448953,
    "lng": 129.790678,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "鷹島との水道に面した星賀。南側岸壁はアジ・サヨリ・チヌ・イカ類が候補ですが、大型船が接岸する際は釣りを中止して場所を空けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/sagahosikagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.448953/129.790678/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagaharukigyokou",
    "name": "晴気漁港",
    "prefecture": "佐賀県",
    "lat": 33.434539,
    "lng": 129.810698,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "コウイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "晴気の波止と岸壁はアジ・サヨリ・メバル・コウイカなどが候補。外側の消波ブロックへ降りず、港内側の足場から探る計画にします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/sagaharukigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.434539/129.810698/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagatakagusigyokou",
    "name": "高串漁港",
    "prefecture": "佐賀県",
    "lat": 33.421986,
    "lng": 129.826126,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "高串は港北側の小波止にアジ・メバル・チヌ・イカ類の情報があります。常夜灯がある場所でも夜間の騒音を避け、係留索へ仕掛けを掛けないようにします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/sagatakagusigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.421986/129.826126/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagahatatugyokou",
    "name": "波多津漁港",
    "prefecture": "佐賀県",
    "lat": 33.376018,
    "lng": 129.866617,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "コウイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "波多津は東側の長い波止からキス・メバル・チヌ・コウイカなどが候補。低い足場は波をかぶる可能性があるため、風と潮位を先に確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/sagahatatugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.376018/129.866617/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagatogarigyokousanngennya",
    "name": "戸ヶ里漁港（三軒屋地区）",
    "prefecture": "佐賀県",
    "lat": 33.175078,
    "lng": 130.348277,
    "fish": [
      "スズキ",
      "マハゼ",
      "ウナギ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "筑後川河口側の戸ヶ里漁港・三軒屋地区。ハゼ・ウナギ・スズキが候補ですが、沖に係留船があるため投げる方向を限定して探ります。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/sagatogarigyokousanngennya.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.175078/130.348277/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagatogarigyokouoodakuma",
    "name": "戸ヶ里漁港（大詫間地区）",
    "prefecture": "佐賀県",
    "lat": 33.182046,
    "lng": 130.338879,
    "fish": [
      "スズキ",
      "マハゼ",
      "ウナギ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "早津江川側の戸ヶ里漁港・大詫間地区。ハゼ・ウナギ・スズキが候補で、河口の流れに仕掛けを流されすぎないようにします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/sagatogarigyokouoodakuma.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.182046/130.338879/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagahiroegyokou",
    "name": "広江漁港",
    "prefecture": "佐賀県",
    "lat": 33.181489,
    "lng": 130.288453,
    "fish": [
      "スズキ",
      "マハゼ",
      "ウナギ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "八田江川河口の広江漁港。ハゼ・ウナギ・スズキが候補で、潮位による水面の変化と係留船の位置を確認してから投入します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/sagahiroegyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.181489/130.288453/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagasuminoekou",
    "name": "住之江港",
    "prefecture": "佐賀県",
    "lat": 33.194975,
    "lng": 130.211506,
    "fish": [
      "スズキ",
      "マハゼ",
      "ウナギ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "六角川河口の住之江港。ハゼやスズキなどが候補ですが、スロープは船の揚げ降ろしを優先し、作業があるときは離れます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/sagasuminoekou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.194975/130.211506/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-fukuikunimisirahama",
    "name": "国見白浜漁港",
    "prefecture": "福井県",
    "lat": 36.083303,
    "lng": 136.028574,
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
    "note": "国見白浜の港は岩場に面し、アジ・クロダイ・アオリイカが候補。外側の消波ブロックを避けて港内側の利用区画を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba2/fukuikunimisirahama.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/36.083303/136.028574/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用のルール",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "harbor-fukuiturube",
    "name": "釣姫漁港",
    "prefecture": "福井県",
    "lat": 35.542458,
    "lng": 135.830605,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "カサゴ",
      "クロダイ",
      "メジナ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "釣姫はアジ・メバル・アオリイカなどが候補の港。港内の常夜灯周りと外海側で条件が異なるため、清掃協力金と利用できる足場を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。",
      "駐車・清掃協力金等の案内がある場所。金額と受付・利用時間は現地の最新表示で確認。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba2/fukuiturube.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.542458/135.830605/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用のルール",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "harbor-simanehoudakou",
    "name": "法田港",
    "prefecture": "島根県",
    "lat": 35.570197,
    "lng": 133.250663,
    "fish": [
      "メバル",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "rockfish-lure"
    ],
    "note": "法田の石積み波止にはメバル・アオリイカの釣り情報があります。小港のため、係留場所を避け、濡れた石の上では無理に移動しません。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/simanehoudakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.570197/133.250663/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-tokusimasiwagigyokou",
    "name": "志和岐漁港",
    "prefecture": "徳島県",
    "lat": 33.779593,
    "lng": 134.60887,
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
    "note": "志和岐は高い波止の内向きが中心で、アジ・チヌ・グレ・アオリイカが候補。外側の巨大な消波ブロック帯には降りないでください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimasiwagigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.779593/134.60887/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-ehimesakarikou",
    "name": "大三島・盛港",
    "prefecture": "愛媛県",
    "lat": 34.293477,
    "lng": 133.028319,
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
      "eging"
    ],
    "note": "大三島の盛港は東側波止にアジ・メバル・キスなどの情報があります。定期船の岸壁とは分け、船の運航を最優先にします。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimesakarikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.293477/133.028319/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-ehimekawanoekou",
    "name": "川之江港",
    "prefecture": "愛媛県",
    "lat": 34.020582,
    "lng": 133.572378,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "川之江は港内の埠頭岸壁と中波止にアジ・キス・メバルなどの情報があります。荷役岸壁やフェンス区画を避け、作業予定を確認して利用します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/ehimekawanoekou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.020582/133.572378/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagaminatohamagyokou",
    "name": "湊浜漁港（湊漁港）",
    "prefecture": "佐賀県",
    "lat": 33.524474,
    "lng": 129.958692,
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
    "note": "湊浜の港はキス・カレイ・アジ・イカ類などが候補。北側外海向きの大きな消波帯と内向きの足場を区別し、駐車料金の現地案内に従います。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/sagaminatohamagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.524474/129.958692/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-simanekoidugyokou",
    "name": "小伊津漁港",
    "prefecture": "島根県",
    "lat": 35.5025,
    "lng": 132.837882,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "スズキ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "小伊津は港内岸壁でアジのサビキとアオリイカが候補。赤灯側の大きな消波帯や外海向きの大物狙いとは区別して計画します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanekoidugyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.5025/132.837882/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simaneultupuruigyokou",
    "name": "十六島漁港",
    "prefecture": "島根県",
    "lat": 35.457332,
    "lng": 132.748189,
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
    "note": "十六島の長い波止はアジ・チヌ・アオリイカや回遊魚が候補。駐車余地が少ないため路上を塞がず、風と波を確認してから歩きます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simaneultupuruigyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.457332/132.748189/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanesagiuragyokou",
    "name": "鷺浦漁港",
    "prefecture": "島根県",
    "lat": 35.441093,
    "lng": 132.687571,
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
    "note": "鷺浦の白灯側にはアジ・メバル・チヌ・アオリイカの情報があります。小さな集落の港なので、民家前や作業用地への無断駐車をしないでください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanesagiuragyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.441093/132.687571/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanewaegyokou",
    "name": "和江漁港",
    "prefecture": "島根県",
    "lat": 35.21179,
    "lng": 132.467673,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "note": "和江の港内側はアジ・キス・チヌ・イカ類が候補。沖波止への渡船とは別に掲載し、赤灯内側の岸壁でも作業の妨げにならない範囲を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanewaegyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.21179/132.467673/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simaneyusatogyokou",
    "name": "湯里漁港（湯里海岸）",
    "prefecture": "島根県",
    "lat": 35.112572,
    "lng": 132.361414,
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
    "note": "湯里の港は外側の消波帯にチヌ・グレ・アオリイカの情報があります。大きなブロックのため初心者向けとは扱わず、隣の砂浜とは足場を区別します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simaneyusatogyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/35.112572/132.361414/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      }
    ]
  },
  {
    "slug": "harbor-simanematubarakou",
    "name": "松原港",
    "prefecture": "島根県",
    "lat": 34.905097,
    "lng": 132.073603,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "浜田川河口の松原港。アジのサビキとスズキのルアー釣りが候補で、河口の流れと船の通行を見て釣り座を決めます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanematubarakou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.905097/132.073603/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      },
      {
        "label": "浜田市観光協会：釣り場案内",
        "url": "https://kankou-hamada.or.jp/content/fishing/"
      }
    ]
  },
  {
    "slug": "harbor-simaneobasenohato",
    "name": "オバセの波止",
    "prefecture": "島根県",
    "lat": 34.903038,
    "lng": 132.058067,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "アオリイカ",
      "ヤリイカ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "瀬戸ヶ島のオバセの波止はアジ・チヌ・グレ・イカ類などが候補。長い波止なので帰りの風と波も考え、船の発着場所を空けて利用します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simaneobasenohato.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.903038/132.058067/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      },
      {
        "label": "浜田市観光協会：釣り場案内",
        "url": "https://kankou-hamada.or.jp/content/fishing/"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "harbor-simanetumagyokou",
    "name": "津摩漁港",
    "prefecture": "島根県",
    "lat": 34.860458,
    "lng": 132.014294,
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
    "note": "津摩は南北の波止にアジ・メバル・チヌ・アオリイカの情報があります。南側と外海側で足場が異なるため、明るいうちに利用区画を確認します。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。",
      "消波ブロックや高い波返しは転落の危険がある。夜間や荒天時に進入せず、平坦な釣り座が確保できなければ利用を控える。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/simanetumagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.860458/132.014294/&base=std&ls=std&disp=1"
      },
      {
        "label": "島根県：漁港利用のルール",
        "url": "https://www1.pref.shimane.lg.jp/industry/suisan/gyokou/kannri/kanri.html"
      },
      {
        "label": "浜田市観光協会：釣り場案内",
        "url": "https://kankou-hamada.or.jp/content/fishing/"
      }
    ]
  },
  {
    "slug": "harbor-yamaguchiimorikou",
    "name": "居守港",
    "prefecture": "山口県",
    "lat": 34.008718,
    "lng": 131.83053,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "rockfish-lure"
    ],
    "note": "居守の西側波止はアジ・メバル・チヌ・コウイカが候補。渡船で向かう沖波止は別の利用となるため、港内の岸釣りと混同しないでください。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiimorikou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/34.008718/131.83053/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "harbor-sagaoourahamagyokou",
    "name": "大浦浜漁港",
    "prefecture": "佐賀県",
    "lat": 33.41072,
    "lng": 129.864428,
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
    "note": "大浦浜の湾奥ではアジ・キス・チヌ・コウイカが候補。港へ向かう道と駐車余地が狭いため、作業車が通れる幅を必ず空けます。",
    "caution": [
      "ライフジャケットを着用。立入禁止・釣り禁止・工事中の区画には入らず、現地掲示と管理者の案内を優先。",
      "漁船の出入り・係留索・荷揚げ作業を優先。通路への駐車や漁具の上への荷物置き、ゴミの放置はしない。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/sagaoourahamagyokou.html"
      },
      {
        "label": "国土地理院：港・岸壁の位置を照合",
        "url": "https://maps.gsi.go.jp/#16/33.41072/129.864428/&base=std&ls=std&disp=1"
      }
    ]
  }
];
export const harborMapGrowth:FishingMapEntry[]=harbors.map(h=>({...h,
 type:'spot',terrain:h.primaryType==='pier'?'pier':'port',primaryType:h.primaryType??'port',
 area:`${h.prefecture}・${h.name}`,googleQuery:`${h.prefecture} ${h.name}`,
 methods:h.methodSlugs.map(id=>methodHelp[id].name),
 season:'対象魚・回遊・天候により変動。出発前に直近の岸釣り情報と利用条件を確認。',
 beginner:false,kids:false,verifiedAt:'2026-09-18',
 positionNote:'港内岸壁・波止の代表位置を地理院地図で照合。ピンは釣り許可範囲や駐車位置ではありません。',
 access:`${h.prefecture}の${h.name}。駐車・進入路・立入範囲は現地の案内を確認。`,
 field:h.note,bestFor:h.fish.slice(0,3).map(f=>`${f}の岸釣り候補`),
 timing:'初めてなら明るい時間に足場と帰路を確認。作業中や風・波が強い場合は利用しない。',
 tips:h.methodSlugs.length?h.methodSlugs.map(id=>methodHelp[id].tip):['底の状態と係留索を確認してから、回収できる短い範囲を探る。'],
}));
