import {createHarborEntries,type HarborRecord} from './shore-spot';
// Sources and coordinate review: docs/map-coastal-expansion-20260918.md.
const ports:HarborRecord[]=[
  {
    "slug": "coast-akitakisakatagyokou",
    "name": "象潟漁港",
    "prefecture": "秋田県",
    "lat": 39.201614,
    "lng": 139.896061,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "アイナメ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "砂地の浅い海に面した港。港内の小物釣りと、底を短く探るキス狙いを使い分ける。",
    "caution": [
      "冬の強風や越波時は利用しない。ハタハタ期の規制を確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/akitakisakatagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.201614/139.896061/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-akitakosagawagyokou",
    "name": "小砂川漁港",
    "prefecture": "秋田県",
    "lat": 39.12515,
    "lng": 139.877715,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アイナメ",
      "ウミタナゴ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki"
    ],
    "note": "三崎の北側にある小港。根魚やウミタナゴを足元から探る候補になる。",
    "caution": [
      "波止が波を受けやすいため、うねりのある日は避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/akitakosagawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.12515/139.877715/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukusimahisanohamakou",
    "name": "久之浜港",
    "prefecture": "福島県",
    "lat": 37.148311,
    "lng": 141.002204,
    "fish": [
      "マアジ",
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "港内の分岐した波止が目印。サビキの回遊魚と底付近のカレイ・根魚を狙い分ける。",
    "caution": [
      "外側の消波ブロックに下りず、港内の作業・係留船を優先。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/fukusimahisanohamakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/37.148311/141.002204/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ibarakihitatiousekou",
    "name": "日立会瀬港",
    "prefecture": "茨城県",
    "lat": 36.575904,
    "lng": 140.660191,
    "fish": [
      "クロダイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "赤灯側の波止と港内の短い波止がある。底の変化を探る釣りでカレイや根魚が候補。",
    "caution": [
      "車止め・進入制限を守り、テトラ帯へ入らない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakihitatiousekou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/36.575904/140.660191/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ibarakikujikou",
    "name": "久慈漁港",
    "prefecture": "茨城県",
    "lat": 36.499598,
    "lng": 140.628734,
    "fish": [
      "マアジ",
      "クロダイ",
      "アイナメ",
      "カレイ",
      "ウミタナゴ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "日立港の北に位置する港。港内の岸壁で回遊魚の棚を探り、底釣りとは投入方向を分ける。",
    "caution": [
      "浚渫や荷役作業中の区画を避ける。車の横付けを前提にしない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakikujikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/36.499598/140.628734/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawaootukousinnteibou",
    "name": "大津港新堤防",
    "prefecture": "神奈川県",
    "lat": 35.265051,
    "lng": 139.696333,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "カサゴ",
      "ウミタナゴ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki"
    ],
    "note": "通称ドンキ裏の護岸。回遊魚のサビキや足元の根魚が候補で、周囲の通行にも配慮する。",
    "caution": [
      "手すりを越えず、通路に道具を広げない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawaootukousinnteibou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/35.265051/139.696333/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-kanagawasinnjyukukou",
    "name": "新宿港",
    "prefecture": "神奈川県",
    "lat": 35.203533,
    "lng": 139.606533,
    "fish": [
      "クロダイ"
    ],
    "methodSlugs": [
      "uki"
    ],
    "note": "長井地区の浅い小港。クロダイ狙いでは潮位による水深の変化を先に確かめる。",
    "caution": [
      "沖堤防へ渡らず、足元が冠水する場所には入らない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawasinnjyukukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/35.203533/139.606533/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kanagawasyounanndaiteibou",
    "name": "湘南大堤防",
    "prefecture": "神奈川県",
    "lat": 35.299068,
    "lng": 139.487593,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "江の島の大きな堤防。内側の岸壁で回遊魚を探り、外側は水面までの高さに注意する。",
    "caution": [
      "現地の利用時間・指定区域を確認。航路や混雑した方向へ投げない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawasyounanndaiteibou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/35.299068/139.487593/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-kanagawaenoura",
    "name": "江之浦漁港",
    "prefecture": "神奈川県",
    "lat": 35.191995,
    "lng": 139.139056,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "カサゴ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "江之浦の小港。波止の内側で回遊魚や根魚を探り、エギは係留索を避けて扱う。",
    "caution": [
      "ダイビング利用と漁業作業を優先。港外側の高い足場へ上がらない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawaenoura.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/35.191995/139.139056/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-zznabeta",
    "name": "鍋田避難港",
    "prefecture": "愛知県",
    "lat": 35.036761,
    "lng": 136.7803,
    "fish": [
      "クロダイ",
      "スズキ",
      "ハゼ",
      "アナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "鍋田地区の船溜まり。港内のハゼを短い仕掛けで探る候補で、周辺の大型埠頭とは別の場所。",
    "caution": [
      "路上駐車をせず、岸壁と係留船の間へ仕掛けを入れない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/zznabeta.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/35.036761/136.7803/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-zzrinnkuu",
    "name": "りんくう釣り護岸",
    "prefecture": "愛知県",
    "lat": 34.880844,
    "lng": 136.822894,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "サバ",
      "イワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "空港の対岸に伸びる護岸。小魚の回遊を探る釣りと、砂地を狙うキス釣りが候補になる。",
    "caution": [
      "護岸前の石積みで根掛かりしやすい。通行人への投げ込みに注意。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/zzrinnkuu.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.880844/136.822894/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-tokonametarumi",
    "name": "樽水漁港",
    "prefecture": "愛知県",
    "lat": 34.870651,
    "lng": 136.846175,
    "fish": [
      "シロギス",
      "スズキ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "浅い港内と東側の波止がある小港。ハゼは近距離、キスは底質を確かめながら探る。",
    "caution": [
      "進入路が狭い。私有地や作業場所に駐車しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/tokonametarumi.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.870651/136.846175/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tokonamekosugayaootani",
    "name": "大谷漁港（愛知県）",
    "prefecture": "愛知県",
    "lat": 34.839996,
    "lng": 136.865788,
    "fish": [
      "シロギス",
      "スズキ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "浅い海岸に面した港。キスやハゼ狙いは潮位と海底の見え方を確認して始める。",
    "caution": [
      "隣接する潮干狩り区域を侵さず、消波ブロックへ下りない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/tokonamekosugayaootani.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.839996/136.865788/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tokonamekosugaya",
    "name": "小鈴谷漁港",
    "prefecture": "愛知県",
    "lat": 34.829058,
    "lng": 136.864736,
    "fish": [
      "シロギス",
      "スズキ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "砂地の浅い海に面する港。港内のハゼと波止からのキス狙いを使い分けられる。",
    "caution": [
      "敷石への根掛かりに注意。潮干狩り利用者や漁業作業を優先。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/tokonamekosugaya.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.829058/136.864736/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nisiosuzaki",
    "name": "洲崎港",
    "prefecture": "愛知県",
    "lat": 34.784096,
    "lng": 137.163985,
    "fish": [
      "シロギス",
      "メバル",
      "アイナメ",
      "カレイ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "小規模な港内でハゼ、波止付近でキスやカレイが候補。底を引きずりすぎず探る。",
    "caution": [
      "高い岸壁では取り込み手段を準備。テトラへ乗らない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/nisiosuzaki.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.784096/137.163985/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-gamagooritigara",
    "name": "知柄漁港",
    "prefecture": "愛知県",
    "lat": 34.77798,
    "lng": 137.176645,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "西浦地区の漁港。港内の岸壁や波止で小型回遊魚を探り、ヒイカの情報も確認したい場所。",
    "caution": [
      "荷揚げ・係留船の利用を優先し、車の横付けを前提にしない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/gamagooritigara.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.77798/137.176645/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-gamagoorikuramai",
    "name": "倉舞港（松島突堤）",
    "prefecture": "愛知県",
    "lat": 34.770154,
    "lng": 137.168126,
    "fish": [
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "アイナメ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "倉舞港西側の松島突堤周辺。根魚やクロダイが候補で、底の起伏を短い仕掛けで探る。",
    "caution": [
      "地磯・テトラの濡れた足場に進まず、混雑時は移動する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/gamagoorikuramai.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.770154/137.168126/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-gamagoorikatahara",
    "name": "形原漁港",
    "prefecture": "愛知県",
    "lat": 34.790369,
    "lng": 137.190163,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "カサゴ",
      "スズキ",
      "ハゼ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "南北の波止と港内岸壁がある港。回遊魚のサビキとハゼ狙いを分けて楽しむ候補。",
    "caution": [
      "岸壁は漁業作業優先。駐車できる区画を現地で確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/gamagoorikatahara.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.790369/137.190163/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-gamagoorimituya",
    "name": "三谷漁港",
    "prefecture": "愛知県",
    "lat": 34.811073,
    "lng": 137.248828,
    "fish": [
      "クロダイ",
      "メバル",
      "カサゴ",
      "スズキ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "三河湾奥の浅い漁港。東側岸壁周辺ではハゼを近距離から探る釣りが中心になる。",
    "caution": [
      "底が見える時間は無理に遠投せず、船の出入りを妨げない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/gamagoorimituya.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.811073/137.248828/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-okayamausimadokou",
    "name": "牛窓港",
    "prefecture": "岡山県",
    "lat": 34.615021,
    "lng": 134.164567,
    "fish": [
      "クロダイ",
      "メバル",
      "カサゴ",
      "サヨリ",
      "コウイカ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "前島への定期船が出る港。岸壁の小魚やサヨリ、底付近の根魚が候補になる。",
    "caution": [
      "フェリーの発着区域・船道には仕掛けを入れない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/okayamausimadokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.615021/134.164567/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-okayamakobukarigyokou",
    "name": "子父雁漁港",
    "prefecture": "岡山県",
    "lat": 34.588033,
    "lng": 134.115815,
    "fish": [
      "クロダイ",
      "メバル",
      "スズキ",
      "サヨリ",
      "コウイカ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "東西に波止がある子父雁の港。サヨリやメバル、クロダイを狙う岸釣りの候補。",
    "caution": [
      "沖堤防・筏は岸釣りとは別。渡船を利用する場合は予約と営業確認が必要。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/okayamakobukarigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.588033/134.115815/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-okayamahigasihoudenngyokou",
    "name": "東宝伝漁港",
    "prefecture": "岡山県",
    "lat": 34.589375,
    "lng": 134.108477,
    "fish": [
      "クロダイ",
      "メバル",
      "サヨリ",
      "カワハギ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "uki"
    ],
    "note": "宝伝地区の東側の港。東波止周辺でサヨリやメバル、クロダイを探る候補になる。",
    "caution": [
      "係留船のロープを避け、指定の駐車場所を確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/okayamahigasihoudenngyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.589375/134.108477/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-okayamamukaihibikou",
    "name": "向日比港",
    "prefecture": "岡山県",
    "lat": 34.453227,
    "lng": 133.93055,
    "fish": [
      "クロダイ",
      "メバル",
      "カサゴ",
      "アオリイカ",
      "サヨリ",
      "コウイカ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "向日比の港には中波止と東側の波止がある。根魚と回遊魚では探る棚を変える。",
    "caution": [
      "赤灯側へ車で入れるとは限らない。作業中は場所を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/okayamamukaihibikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.453227/133.93055/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-okayamasibukawakou",
    "name": "渋川港",
    "prefecture": "岡山県",
    "lat": 34.456783,
    "lng": 133.8992,
    "fish": [
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "渋川海岸の西隣にある小港。浅い砂地ではキス、波止際ではメバルやクロダイが候補。",
    "caution": [
      "海水浴利用と競合する方向へ投げない。波が上がる日は避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/okayamasibukawakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.456783/133.8992/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-okayamatanourakou",
    "name": "田之浦港",
    "prefecture": "岡山県",
    "lat": 34.435354,
    "lng": 133.806953,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "サヨリ",
      "イワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "瀬戸大橋の下に位置する港。護岸周辺では潮の速さを見て、回収できる範囲を探る。",
    "caution": [
      "航行船と潮流に注意し、橋下や係留索へ仕掛けを掛けない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/okayamatanourakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.435354/133.806953/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-okayamanatumekou",
    "name": "夏目港（夏目海岸）",
    "prefecture": "岡山県",
    "lat": 34.47083,
    "lng": 133.530128,
    "fish": [
      "クロダイ",
      "カレイ",
      "ハゼ",
      "アナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "夏目海岸に続く小港。ハゼやカレイを底付近で探る釣りが候補になる。",
    "caution": [
      "漁業権対象種や採捕制限を確認。海岸側への無断駐車をしない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba1/okayamanatumekou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.47083/133.530128/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawasinoogyokou",
    "name": "篠尾漁港",
    "prefecture": "香川県",
    "lat": 34.379217,
    "lng": 134.164352,
    "fish": [
      "クロダイ",
      "メバル",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "篠尾集落の先にある小港。石積みの波止周辺でサヨリやメバル、アオリイカが候補。",
    "caution": [
      "石積みは濡れると滑る。暗い時間の初訪問は避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawasinoogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.379217/134.164352/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawaajigyokou",
    "name": "庵治漁港",
    "prefecture": "香川県",
    "lat": 34.390408,
    "lng": 134.123433,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "カレイ",
      "サヨリ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "庵治の港は北側の波止周辺が岸釣りの候補。回遊魚の棚と底付近の根魚を探り分ける。",
    "caution": [
      "消波ブロックへ下りず、漁業作業と船の出入りを優先。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawaajigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.390408/134.123433/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawamokuzaikou",
    "name": "高松市木材港",
    "prefecture": "香川県",
    "lat": 34.35651,
    "lng": 134.015994,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "カサゴ",
      "カレイ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "木材港の波止・岸壁周辺。サヨリや小型回遊魚、メバルなどを狙う候補になる。",
    "caution": [
      "大型車の通行と荷役を優先。食肉センター前など作業動線に駐車しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawamokuzaikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.35651/134.015994/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawasimokasaigyokou",
    "name": "下笠居漁港",
    "prefecture": "香川県",
    "lat": 34.378066,
    "lng": 133.944025,
    "fish": [
      "クロダイ",
      "メバル",
      "スズキ",
      "サヨリ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "uki"
    ],
    "note": "亀水地区の小港。サヨリやメバルを短い距離から探る釣りが候補になる。",
    "caution": [
      "進入路が狭く駐車余地も少ない。住民の通行を妨げない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawasimokasaigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.378066/133.944025/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawatakeuragyokou",
    "name": "竹浦漁港",
    "prefecture": "香川県",
    "lat": 34.358512,
    "lng": 133.855684,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "タチウオ",
      "ブリ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "瀬居島の先端寄りにある港。東側の波止周辺で回遊魚や根魚を探る候補。",
    "caution": [
      "波止の頭上に電線があるため、竿を立てる前に上方を確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawatakeuragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.358512/133.855684/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawamarugamekyouteijyouoku",
    "name": "富士見漁港",
    "prefecture": "香川県",
    "lat": 34.306187,
    "lng": 133.791311,
    "fish": [
      "クロダイ",
      "メバル",
      "スズキ",
      "コウイカ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "丸亀の富士見地区にある船溜まり。夜の根魚狙いは足場を日中に確認してから行う。",
    "caution": [
      "競艇場・港湾の管理区域を尊重し、立入掲示のある岸壁は使わない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawamarugamekyouteijyouoku.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.306187/133.791311/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawasudakou",
    "name": "須田港",
    "prefecture": "香川県",
    "lat": 34.234583,
    "lng": 133.652329,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "カレイ",
      "アナゴ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "粟島への定期船が発着する港。波止周辺ではクロダイやメバルが候補になる。",
    "caution": [
      "波返しは高さがある。定期船の航路・乗降場所を避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawasudakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.234583/133.652329/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawasinnniokou",
    "name": "新仁尾港",
    "prefecture": "香川県",
    "lat": 34.199078,
    "lng": 133.636343,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "仁尾の新港。岸壁で回遊魚の棚を探り、キスや根魚は底質を確かめながら狙う。",
    "caution": [
      "岸壁の作業・係留スペースを空ける。車両進入可とは限らない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawasinnniokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.199078/133.636343/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagawamuromotokou",
    "name": "室本港",
    "prefecture": "香川県",
    "lat": 34.155621,
    "lng": 133.643789,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "室本の港は波止と港内岸壁が広がる。サビキと底釣りで対象魚を切り替えられる。",
    "caution": [
      "港内の出入船と係留索を優先し、道具で通路をふさがない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/kagawamuromotokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.155621/133.643789/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tokusimafurumugigyokou",
    "name": "古牟岐漁港",
    "prefecture": "徳島県",
    "lat": 33.664604,
    "lng": 134.442272,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "古牟岐の港内岸壁と波止が岸釣りの候補。小魚の回遊とクロダイ、アオリイカを探る。",
    "caution": [
      "外側の大きな消波ブロックへ上がらない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimafurumugigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.664604/134.442272/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tokusimatomouragyokou",
    "name": "鞆浦漁港",
    "prefecture": "徳島県",
    "lat": 33.592619,
    "lng": 134.363737,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "鞆浦の港では波止の内側が主な候補。アジやアオリイカは船の作業を避けて探る。",
    "caution": [
      "沖側の巨大なテトラへ下りず、係留索の位置を確かめる。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/tokusimatomouragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.592619/134.363737/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyazakitotorokou",
    "name": "土々呂港",
    "prefecture": "宮崎県",
    "lat": 32.513326,
    "lng": 131.68582,
    "fish": [
      "マアジ",
      "クロダイ",
      "カサゴ",
      "スズキ",
      "カマス",
      "メッキ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki"
    ],
    "note": "土々呂の港内岸壁と波止周辺。アジやカマス、河口寄りの魚を狙う候補になる。",
    "caution": [
      "波止が狭く電線もある。頭上と後方を確認して竿を扱う。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/miyazakitotorokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.513326/131.68582/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyazakikou",
    "name": "宮崎港",
    "prefecture": "宮崎県",
    "lat": 31.904448,
    "lng": 131.458282,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "スズキ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "宮崎港の岸壁から回遊魚や砂地の魚を探る候補。投入方向は船の動線を見て決める。",
    "caution": [
      "埠頭ごとの夜間通行制限・立入区分を確認し、荷役中は利用しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/miyazakikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/31.904448/131.458282/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyazakimeotourakou",
    "name": "夫婦浦港",
    "prefecture": "宮崎県",
    "lat": 31.494061,
    "lng": 131.384082,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "夫婦浦の小港は釣り座が限られる。アジやクロダイ、アオリイカを狙う候補になる。",
    "caution": [
      "高い波返しへ登らず、先行者が多ければ別の場所を選ぶ。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/miyazakimeotourakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/31.494061/131.384082/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyazakioonoukou",
    "name": "大納港",
    "prefecture": "宮崎県",
    "lat": 31.41222,
    "lng": 131.345179,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "都井岬側の大納港。波止周辺ではメジナやシマアジ、アオリイカが候補になる。",
    "caution": [
      "外側の大型テトラに下りない。帰路と波の状況を先に確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/miyazakioonoukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/31.41222/131.345179/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokadainyuugyokou",
    "name": "大入漁港（配崎）",
    "prefecture": "福岡県",
    "lat": 33.5129,
    "lng": 130.103681,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "サヨリ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "大入の石積み波止周辺。アジやカマスなどの回遊を確かめながら狙う候補になる。",
    "caution": [
      "隣接する配崎の地磯へ無理に移動せず、波止の足場を確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokadainyuugyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.5129/130.103681/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokafukaegyokou",
    "name": "深江漁港",
    "prefecture": "福岡県",
    "lat": 33.522166,
    "lng": 130.132413,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "カレイ",
      "スズキ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki",
      "eging"
    ],
    "note": "一貴山川の河口周辺にある港。浅場のハゼ・キスと回遊魚の釣りを使い分ける。",
    "caution": [
      "波止ごとに足場が異なり電線もある。テトラへ乗らない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokafukaegyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.522166/130.132413/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokakafurigyokou",
    "name": "加布里漁港",
    "prefecture": "福岡県",
    "lat": 33.55014,
    "lng": 130.160458,
    "fish": [
      "シロギス",
      "クロダイ",
      "カレイ",
      "スズキ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "泉川河口近くの浅い港。西側の波止周辺でハゼやキス、クロダイが候補になる。",
    "caution": [
      "東側のフェンスを越えない。潮位と船の出入りを確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokakafurigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.55014/130.160458/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokasinnmatigyokou",
    "name": "新町漁港",
    "prefecture": "福岡県",
    "lat": 33.567216,
    "lng": 130.130739,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki",
      "eging"
    ],
    "note": "糸島の湾内にある小港。比較的浅く、キスやサヨリ、アオリイカを探る候補になる。",
    "caution": [
      "小さな港なので漁業作業の邪魔になるときは竿を出さない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokasinnmatigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.567216/130.130739/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokafukunouragyokou",
    "name": "福ノ浦漁港",
    "prefecture": "福岡県",
    "lat": 33.575333,
    "lng": 130.093532,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "カレイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki",
      "eging"
    ],
    "note": "砂地の浅い海に面する福ノ浦の港。港内では小魚、波止周辺ではキスなどが候補。",
    "caution": [
      "周囲の釣り人と投入方向を合わせ、船道への遠投を避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokafukunouragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.575333/130.093532/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokanogitagyokou",
    "name": "野北漁港",
    "prefecture": "福岡県",
    "lat": 33.61453,
    "lng": 130.156338,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "野北の大波止は内側と外側で水面までの高さが異なる。内側から回遊魚を探る候補。",
    "caution": [
      "港内の釣り禁止掲示に従う。高い外向きの波返しへ無理に上がらない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokanogitagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.61453/130.156338/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokainadougyokou",
    "name": "稲童漁港",
    "prefecture": "福岡県",
    "lat": 33.703581,
    "lng": 131.035416,
    "fish": [
      "シロギス",
      "クロダイ",
      "スズキ",
      "サヨリ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "小河川の河口にある稲童の港。ハゼやサヨリ、キスを狙う岸釣りの候補になる。",
    "caution": [
      "干潟へ下りず、潮位による水深変化を確認する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokainadougyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.703581/131.035416/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sagaiidagyokou",
    "name": "飯田漁港",
    "prefecture": "佐賀県",
    "lat": 33.05745,
    "lng": 130.159407,
    "fish": [
      "スズキ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "干潟に囲まれた飯田の港。水位がある時間のハゼやスズキ狙いが候補になる。",
    "caution": [
      "干潮時は釣りが難しい。干潟へ踏み込まず岸壁上で行動する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/sagaiidagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.05745/130.159407/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sagamitigosigyokou",
    "name": "道越漁港",
    "prefecture": "佐賀県",
    "lat": 32.961938,
    "lng": 130.223415,
    "fish": [
      "マアジ",
      "メバル",
      "スズキ",
      "ハゼ",
      "アナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "有明海側の小港。ヒラやスズキは小型ルアー、ハゼは底付近を探る候補になる。",
    "caution": [
      "常夜灯周辺の電線に注意。暗い時間の移動前に足場を確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/sagamitigosigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.961938/130.223415/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kihokuhikimotokou",
    "name": "引本港",
    "prefecture": "三重県",
    "lat": 34.110472,
    "lng": 136.248128,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki",
      "eging"
    ],
    "note": "引本の湾奥に広がる岸壁。回遊魚のサビキ、キスの底釣り、アオリイカが候補。",
    "caution": [
      "作業する岸壁や係留船を優先し、無断の横付け駐車をしない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/kihokuhikimotokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.110472/136.248128/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-mieoozoneura",
    "name": "大曽根浦漁港",
    "prefecture": "三重県",
    "lat": 34.064001,
    "lng": 136.222336,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "カレイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "尾鷲湾の大曽根浦にある漁港。波止周辺ではクロダイやメジナ、アオリイカが候補。",
    "caution": [
      "駐車場所が限られる。漁業者の出入りをふさがない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/mieoozoneura.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.064001/136.222336/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougohayasizaki",
    "name": "林崎漁港",
    "prefecture": "兵庫県",
    "lat": 34.645195,
    "lng": 134.966998,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "アイナメ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "林崎の港内には波止と岸壁がある。サビキの回遊魚とキス・根魚を探り分ける。",
    "caution": [
      "車両規制と立入掲示を確認。消波ブロック側へ下りない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/hyougohayasizaki.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.645195/134.966998/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougoeigasima",
    "name": "江井ヶ島漁港",
    "prefecture": "兵庫県",
    "lat": 34.674564,
    "lng": 134.909148,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "アイナメ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "江井ヶ島の波止周辺。潮の動く時間の小型回遊魚や、底付近の根魚が候補になる。",
    "caution": [
      "港内への一般車両進入制限と釣り禁止区画を守る。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/hyougoeigasima.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.674564/134.909148/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougotakasagokou",
    "name": "高砂港",
    "prefecture": "兵庫県",
    "lat": 34.731614,
    "lng": 134.797461,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "高砂港の波止周辺で小型回遊魚やカレイ、メバルが候補。流れに合わせて仕掛けを回収する。",
    "caution": [
      "工業港の作業・制限区域に入らず、船道を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougotakasagokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.731614/134.797461/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougooosiojyuusanndannhato",
    "name": "大塩十三段波止",
    "prefecture": "兵庫県",
    "lat": 34.758661,
    "lng": 134.758666,
    "fish": [
      "シロギス",
      "クロダイ",
      "カレイ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "天川河口に伸びる波止。汽水域のクロダイやスズキ、砂地のキス・カレイが候補。",
    "caution": [
      "河口の流れと出入船を確認し、波をかぶる日は利用しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougooosiojyuusanndannhato.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.758661/134.758666/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-hyougoiwasihamagyokou",
    "name": "鰯浜漁港",
    "prefecture": "兵庫県",
    "lat": 34.76536,
    "lng": 134.470918,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "鰯浜の波止から南側の護岸に続く釣り場候補。クロダイと小型回遊魚を狙い分ける。",
    "caution": [
      "周辺の牡蠣筏や作業船へ仕掛けを近づけない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougoiwasihamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.76536/134.470918/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougourakou",
    "name": "浦港",
    "prefecture": "兵庫県",
    "lat": 34.541101,
    "lng": 134.995816,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "カレイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "浦の港内側から回遊魚や根魚を探る候補。南の砂浜とは足元の地形が異なる。",
    "caution": [
      "港内の駐車・作業場所を占有せず、外側のテトラへ下りない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba5/hyougourakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.541101/134.995816/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougokamagutigyokou",
    "name": "釜口漁港",
    "prefecture": "兵庫県",
    "lat": 34.49195,
    "lng": 134.963372,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "カレイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "釜口の小港。波止周辺で小型回遊魚、砂地側でキスやカレイが候補になる。",
    "caution": [
      "周辺道路への駐車をしない。波止の幅と波の高さを確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba5/hyougokamagutigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.49195/134.963372/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougosumotokou",
    "name": "洲本港",
    "prefecture": "兵庫県",
    "lat": 34.348468,
    "lng": 134.90005,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "カレイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "洲本川河口に面する港。岸壁際の回遊魚や、河口周辺のスズキが候補になる。",
    "caution": [
      "フェリー・作業船の動線を空け、河口増水時は利用しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba5/hyougosumotokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.348468/134.90005/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougosinnkawaguti",
    "name": "新川口漁港",
    "prefecture": "兵庫県",
    "lat": 34.29876,
    "lng": 134.942601,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "カレイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "由良の新川口にある港。陸続きの波止周辺で小魚や根魚、アオリイカを探る候補。",
    "caution": [
      "前面の一文字は渡船がないため渡らない。駐車余地も限られる。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba5/hyougosinnkawaguti.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.29876/134.942601/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougonigorogyokou",
    "name": "仁頃漁港",
    "prefecture": "兵庫県",
    "lat": 34.191411,
    "lng": 134.74534,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "カサゴ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "灘仁頃の小港。波止内側でアジやメバル、アオリイカを探る候補になる。",
    "caution": [
      "外海側の大型テトラへ入らず、うねりの強い日は避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougonigorogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.191411/134.74534/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougotuigyokou",
    "name": "津井漁港",
    "prefecture": "兵庫県",
    "lat": 34.327773,
    "lng": 134.69146,
    "fish": [
      "シロギス",
      "メバル",
      "カレイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging"
    ],
    "note": "国道から離れた津井の小港。キスやカレイ、メバルを狙う岸釣りの候補。",
    "caution": [
      "駐車余地が少ない。住民・漁業者の通行を妨げない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougotuigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.327773/134.69146/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougominatokou",
    "name": "湊港",
    "prefecture": "兵庫県",
    "lat": 34.330838,
    "lng": 134.723775,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "カレイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "三原川河口にある港。河口のスズキと港内側の回遊魚・根魚を探り分ける。",
    "caution": [
      "増水時は避ける。テトラ側へ下りず航路を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougominatokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.330838/134.723775/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougotorikaigyokou",
    "name": "鳥飼漁港",
    "prefecture": "兵庫県",
    "lat": 34.374293,
    "lng": 134.748302,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "カレイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "鳥飼の港は陸続きの波止が目印。内側で小魚の回遊、底付近で根魚が候補になる。",
    "caution": [
      "外側のテトラへ移らず、港内の作業と船の往来を優先。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougotorikaigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.374293/134.748302/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougoeigyokou",
    "name": "江井漁港",
    "prefecture": "兵庫県",
    "lat": 34.46846,
    "lng": 134.830935,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "江井の東側波止周辺。アジやメバル、アオリイカを近距離から探る候補になる。",
    "caution": [
      "赤灯側は進入路が狭い。駐車場所と歩行経路を先に確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougoeigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.46846/134.830935/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougogunnkekou",
    "name": "郡家港",
    "prefecture": "兵庫県",
    "lat": 34.477163,
    "lng": 134.84499,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "カレイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "郡家川河口にある港。東側の波止・岸壁では回遊魚やキス、メバルが候補になる。",
    "caution": [
      "港内の船道と河口の流れを確認し、外側のテトラへ下りない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougogunnkekou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.477163/134.84499/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimetennmagyokou",
    "name": "天満漁港",
    "prefecture": "愛媛県",
    "lat": 33.987513,
    "lng": 133.413141,
    "fish": [
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "四国中央市西部の浅い小港。キスやカレイを底付近で探る候補になる。",
    "caution": [
      "潮位が下がると探れる水深が限られる。漁船の係留場所を避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba1/ehimetennmagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.987513/133.413141/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimeisogoutigyokou",
    "name": "磯河内漁港",
    "prefecture": "愛媛県",
    "lat": 33.93088,
    "lng": 132.761257,
    "fish": [
      "マアジ",
      "クロダイ",
      "カレイ",
      "アオリイカ",
      "メジナ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki",
      "eging"
    ],
    "note": "磯河内の港には南北に波止がある。小魚の回遊とカレイ・アオリイカを狙い分ける。",
    "caution": [
      "波止に柵があるとは限らない。先端の混雑時は無理に入らない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimeisogoutigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.93088/132.761257/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimesimonadagyokou",
    "name": "下灘漁港",
    "prefecture": "愛媛県",
    "lat": 33.652709,
    "lng": 132.577043,
    "fish": [
      "マアジ",
      "クロダイ",
      "カレイ",
      "スズキ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki",
      "eging"
    ],
    "note": "下灘の港は長い波止と公園前岸壁がある。回遊魚の棚を探る釣りが候補になる。",
    "caution": [
      "公園への道は夜間閉門がある。利用時間を現地で確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimesimonadagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.652709/132.577043/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimeokiuragyokou",
    "name": "沖浦漁港",
    "prefecture": "愛媛県",
    "lat": 33.610384,
    "lng": 132.473724,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "肱川河口の西側にある港。波止周辺でキスやメバル、回遊魚を探る候補になる。",
    "caution": [
      "河川増水と強い流れに注意。港内の係留索を避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimeokiuragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.610384/132.473724/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimeizumigyokou",
    "name": "出海漁港",
    "prefecture": "愛媛県",
    "lat": 33.559117,
    "lng": 132.431881,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "出海の波止周辺ではメバルやアオリイカが候補。根掛かりを避けて足元から探る。",
    "caution": [
      "外側の消波ブロックへ下りず、潮と波の変化を確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/ehimeizumigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.559117/132.431881/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimeasinarugyokou",
    "name": "足成漁港",
    "prefecture": "愛媛県",
    "lat": 33.472959,
    "lng": 132.267494,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "幹線道路から離れた足成の港。東西の波止周辺でアジやメバルを探る候補になる。",
    "caution": [
      "集落内の狭い道と漁業作業を優先。初訪問は明るい時間に。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimeasinarugyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.472959/132.267494/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimeooegyokou",
    "name": "大江漁港（愛媛県）",
    "prefecture": "愛媛県",
    "lat": 33.449687,
    "lng": 132.22533,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "三机の西にある小港。アジやメバル、アオリイカを港内向きから探る候補。",
    "caution": [
      "進入路が狭い。先端の足場が悪いテトラには乗らない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimeooegyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.449687/132.22533/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimekannzakigyokou",
    "name": "神崎漁港（愛媛県）",
    "prefecture": "愛媛県",
    "lat": 33.43171,
    "lng": 132.163768,
    "fish": [
      "マアジ",
      "アオリイカ",
      "メジナ",
      "タチウオ",
      "マダイ",
      "ブリ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "佐田岬半島の神崎にある小港。回遊魚やアオリイカは足場の高さを見て狙い分ける。",
    "caution": [
      "取り込みに必要な道具を用意し、強風時は波止へ進まない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimekannzakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.43171/132.163768/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochisukumosinnkou",
    "name": "宿毛新港",
    "prefecture": "高知県",
    "lat": 32.920106,
    "lng": 132.678494,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "イワシ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "宿毛湾の新港岸壁。回遊するアジやカマスと、港内のクロダイが候補になる。",
    "caution": [
      "荷役・船舶の利用を優先。管理区画と進入制限を現地で確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochisukumosinnkou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.920106/132.678494/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochikomurogyokou",
    "name": "小室漁港",
    "prefecture": "高知県",
    "lat": 33.161427,
    "lng": 133.205924,
    "fish": [
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "choinage",
      "uki",
      "eging"
    ],
    "note": "興津の小室港。砂浜寄りのキスと波止周辺のクロダイ・メジナを狙い分ける。",
    "caution": [
      "市街地から離れるため帰路を先に確認。外海のうねりに注意。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochikomurogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.161427/133.205924/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochiakaokagyokou",
    "name": "赤岡漁港",
    "prefecture": "高知県",
    "lat": 33.536691,
    "lng": 133.722861,
    "fish": [
      "クロダイ",
      "スズキ",
      "メッキ"
    ],
    "methodSlugs": [
      "uki"
    ],
    "note": "烏川河口の赤岡港。汽水域のキビレやスズキ、メッキを狙う候補になる。",
    "caution": [
      "増水時は利用せず、漁船が通るときは仕掛けを回収。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochiakaokagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.536691/133.722861/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochisumiyosigyokou",
    "name": "住吉漁港",
    "prefecture": "高知県",
    "lat": 33.51637,
    "lng": 133.765025,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "住吉の波止周辺でアジやカマス、アオリイカが候補。回遊がないときは棚を変える。",
    "caution": [
      "波を受ける場所では竿を出さず、先端の混雑を避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochisumiyosigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.51637/133.765025/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochiiogigyokou",
    "name": "伊尾木漁港",
    "prefecture": "高知県",
    "lat": 33.469701,
    "lng": 133.941965,
    "fish": [
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "uki",
      "eging"
    ],
    "note": "大山地区の小港。南側の波止周辺でメジナやクロダイ、アオリイカを探る候補。",
    "caution": [
      "アクセス路が分かりづらい。道路横断と波の状況を先に確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochiiogigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.469701/133.941965/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochinaharigyokou",
    "name": "奈半利漁港",
    "prefecture": "高知県",
    "lat": 33.419568,
    "lng": 134.015479,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki",
      "eging"
    ],
    "note": "奈半利川河口にある港。波止内側からカマスやアオリイカを探る候補になる。",
    "caution": [
      "河口の濁り・増水と出入船に注意し、テトラへ下りない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochinaharigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.419568/134.015479/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochihoujigyokou",
    "name": "傍士漁港",
    "prefecture": "高知県",
    "lat": 33.324146,
    "lng": 134.104271,
    "fish": [
      "アオリイカ",
      "メジナ",
      "カマス"
    ],
    "methodSlugs": [
      "uki",
      "eging"
    ],
    "note": "傍士の港には複数の短い波止がある。メジナやカマス、アオリイカが候補。",
    "caution": [
      "限られた先端を占有せず、波が高いときは入らない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochihoujigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.324146/134.104271/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochigyoutougyokou",
    "name": "行当漁港",
    "prefecture": "高知県",
    "lat": 33.293839,
    "lng": 134.11382,
    "fish": [
      "アオリイカ",
      "メジナ",
      "カマス"
    ],
    "methodSlugs": [
      "uki",
      "eging"
    ],
    "note": "行当の港内にある波止でカマスやアオリイカを探る候補。周囲は岩礁が多い。",
    "caution": [
      "外側の小さな先端へ無理に入らず、根掛かりする方向を避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochigyoutougyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.293839/134.11382/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochitakaokagyokou",
    "name": "高岡漁港",
    "prefecture": "高知県",
    "lat": 33.261388,
    "lng": 134.184866,
    "fish": [
      "アオリイカ",
      "メジナ",
      "カマス"
    ],
    "methodSlugs": [
      "uki",
      "eging"
    ],
    "note": "高岡の港は外側の波返しが高い。港内岸壁や波止内側から魚の反応を探る。",
    "caution": [
      "高い波返しへ登らず、取り込み可能な高さの場所を選ぶ。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochitakaokagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.261388/134.184866/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochimitugyokou",
    "name": "三津漁港",
    "prefecture": "高知県",
    "lat": 33.292692,
    "lng": 134.187419,
    "fish": [
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "uki",
      "eging"
    ],
    "note": "三津の小港は浅めで釣り座が限られる。メジナやアオリイカが岸釣りの候補。",
    "caution": [
      "船道へ仕掛けを残さず、通船時はすぐ回収する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochimitugyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.292692/134.187419/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochisiinagyokou",
    "name": "椎名漁港",
    "prefecture": "高知県",
    "lat": 33.327731,
    "lng": 134.198084,
    "fish": [
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "uki",
      "eging"
    ],
    "note": "椎名の波止周辺。メジナやブダイ、アオリイカを狙う候補になる。",
    "caution": [
      "外海の波を受けやすい。先端やテトラ際へ無理に進まない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochisiinagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.327731/134.198084/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kochisakihamakou",
    "name": "佐喜浜港",
    "prefecture": "高知県",
    "lat": 33.395512,
    "lng": 134.211667,
    "fish": [
      "シロギス",
      "スズキ",
      "アオリイカ",
      "メッキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki",
      "eging"
    ],
    "note": "佐喜浜川河口に面する港。キスやメッキ、アオリイカを狙う候補になる。",
    "caution": [
      "河川増水と外海のうねりに注意。北側波止の安全な足場を確認。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba2/kochisakihamakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.395512/134.211667/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-taharamagusa",
    "name": "馬草港",
    "prefecture": "愛知県",
    "lat": 34.669006,
    "lng": 137.197309,
    "fish": [
      "シロギス",
      "クロダイ",
      "カレイ",
      "スズキ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "今池川の河口にある小港。浅場のハゼやシロギスを短い投げ仕掛けで探り、川からの濁りも見て場所を選ぶ。",
    "caution": [
      "進入路が狭い。車のすれ違いと漁業車両の通行を妨げない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/taharamagusa.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.669006/137.197309/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-taharautue",
    "name": "宇津江漁港",
    "prefecture": "愛知県",
    "lat": 34.661911,
    "lng": 137.177482,
    "fish": [
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "アイナメ",
      "カレイ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "砂地の底物と波止際の根魚を狙い分ける小港。根掛かりが増えたら投げる方向を変え、港内の船を避けて探る。",
    "caution": [
      "外側の消波ブロックへは乗らず、平らな岸壁から釣る。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/taharautue.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.661911/137.177482/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-taharaizumi",
    "name": "泉港",
    "prefecture": "愛知県",
    "lat": 34.65471,
    "lng": 137.158577,
    "fish": [
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "アイナメ",
      "カレイ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "砂浜に囲まれた浅い港。ハゼやシロギスを中心に、底の変化を小さく探る釣りに向く。",
    "caution": [
      "夏は水上バイクなど水面利用者にも注意し、近くへ投げない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/taharaizumi.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.65471/137.158577/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-taharafukue",
    "name": "福江港",
    "prefecture": "愛知県",
    "lat": 34.64689,
    "lng": 137.085364,
    "fish": [
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "アイナメ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "河口の浅場と港口のかけ上がりを探れる港。ハゼ・シロギスと、石まわりの根魚を釣り分ける。",
    "caution": [
      "捨て石の周囲は根掛かりに注意。船道を横切る仕掛けは早めに回収する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/taharafukue.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.64689/137.085364/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-taharaakabane",
    "name": "赤羽根漁港",
    "prefecture": "愛知県",
    "lat": 34.604972,
    "lng": 137.188854,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "サバ",
      "イワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "外海に面する渥美半島の漁港。港内でアジなどの回遊を待つ釣りと、砂地のシロギス狙いを考えられる。",
    "caution": [
      "外側の大きな消波ブロックを避け、波の影響が小さい港内側を選ぶ。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba/taharaakabane.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.604972/137.188854/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokaunosimagyokou",
    "name": "宇島漁港",
    "prefecture": "福岡県",
    "lat": 33.62618,
    "lng": 131.144614,
    "fish": [
      "シロギス",
      "クロダイ",
      "メバル",
      "スズキ",
      "サヨリ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "岸壁からハゼ・サヨリなどの小魚を探り、季節によってシロギスやコウイカも候補になる港。",
    "caution": [
      "東側外周の消波ブロックには乗らない。作業場所から離れて釣る。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokaunosimagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.62618/131.144614/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-fukuokayositomikou",
    "name": "吉富港",
    "prefecture": "福岡県",
    "lat": 33.621034,
    "lng": 131.180341,
    "fish": [
      "シロギス",
      "クロダイ",
      "スズキ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "山国川の河口に位置し、干潟に続く浅場が特徴。ハゼやスズキを狙う際は流れと潮位を確認する。",
    "caution": [
      "干潟へ降りず、足場の確かな場所から釣る。増水・濁流時は近づかない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba2/fukuokayositomikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.621034/131.180341/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakikurosakigyokou",
    "name": "黒崎漁港（長崎県）",
    "prefecture": "長崎県",
    "lat": 32.834489,
    "lng": 129.714718,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "波止からアジやクロダイ、アオリイカを探れる港。釣り座を選ぶ際は取り込みまでの足場を確かめたい。",
    "caution": [
      "南側の大きな消波ブロックを避け、港内側の安全な足場を選ぶ。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakikurosakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.834489/129.714718/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakitegumagyokou",
    "name": "手熊漁港",
    "prefecture": "長崎県",
    "lat": 32.775025,
    "lng": 129.800828,
    "fish": [
      "マアジ"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "note": "アジを中心に港内の回遊を待つ釣りが候補。足元から棚を変え、船の出入りに合わせて仕掛けを回収する。",
    "caution": [
      "外側は波返しが高い。無理に外向きへ構えず、内側の岸壁を利用する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakitegumagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.775025/129.800828/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakikoesinnkou",
    "name": "小江新港",
    "prefecture": "長崎県",
    "lat": 32.756657,
    "lng": 129.808316,
    "fish": [
      "マアジ",
      "クロダイ",
      "スズキ",
      "アオリイカ",
      "メジナ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "西側の波止内側などから小魚やカマスを探れる港。回遊狙いと足元の釣りを切り替えて考える。",
    "caution": [
      "係留船とロープを避け、港口や作業用通路を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakikoesinnkou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.756657/129.808316/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakihorikirinisikou",
    "name": "堀切西港",
    "prefecture": "長崎県",
    "lat": 32.684157,
    "lng": 129.819539,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "アジやメバル、アオリイカを候補にできる小港。広く移動する前に波止際と足元の変化を探る。",
    "caution": [
      "駐車できる場所が限られる。路上や作業場へ無断で駐車しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakihorikirinisikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.684157/129.819539/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakinomogyokou",
    "name": "野母漁港",
    "prefecture": "長崎県",
    "lat": 32.583433,
    "lng": 129.7539,
    "fish": [
      "マアジ",
      "クロダイ",
      "スズキ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "波止と岸壁でアジやクロダイを狙い分ける漁港。アオリイカ狙いは船やロープのない方向へ投入する。",
    "caution": [
      "南波止の外側には大きな消波ブロックがある。内側から無理なく釣る。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakinomogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.583433/129.7539/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakiwakimisakikou",
    "name": "脇岬港",
    "prefecture": "長崎県",
    "lat": 32.579474,
    "lng": 129.781258,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "カサゴ",
      "スズキ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "港内岸壁や波止からアジ・アオリイカを探る候補地。底付近を狙う際は係留索の位置を先に確認する。",
    "caution": [
      "赤灯側の消波ブロックを避け、船の航路へ長く仕掛けを流さない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/nagasakiwakimisakikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.579474/129.781258/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakikitugyokou",
    "name": "木津漁港",
    "prefecture": "長崎県",
    "lat": 32.765896,
    "lng": 130.187516,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "波止から小魚、メバル、クロダイなどを探れる港。足元の釣りから始め、根掛かりする場所を把握する。",
    "caution": [
      "先端付近の消波ブロックには乗らず、平らな足場を選ぶ。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/nagasakikitugyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.765896/130.187516/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakikisasigyokou",
    "name": "木指漁港",
    "prefecture": "長崎県",
    "lat": 32.717417,
    "lng": 130.194919,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "波止まわりでアジ・メバルを探り、季節によってタチウオやアオリイカも候補になる港。",
    "caution": [
      "夜釣りの前に明るい時間帯に足場と帰路を確認する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/nagasakikisasigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.717417/130.194919/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakitobikogyokou",
    "name": "飛子漁港",
    "prefecture": "長崎県",
    "lat": 32.69622,
    "lng": 130.167217,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "長い波止でアジやクロダイを狙える港。まず内向きの足場から潮の動きと回遊を確認したい。",
    "caution": [
      "沖側は波返しが高い。越波や強風時は先端へ進まない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/nagasakitobikogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.69622/130.167217/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakisaigoukou",
    "name": "西郷港",
    "prefecture": "長崎県",
    "lat": 32.876145,
    "lng": 130.247276,
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
    "note": "長い西側の波止を持ち、アジ・シロギス・クロダイを狙い分ける港。底の釣りは短い距離から始める。",
    "caution": [
      "暗くなる前に照明のない区間と帰路を確認する。漁船の通航を優先。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/nagasakisaigoukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.876145/130.247276/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakikuyamakou",
    "name": "久山港",
    "prefecture": "長崎県",
    "lat": 32.840673,
    "lng": 130.001349,
    "fish": [
      "クロダイ",
      "メバル",
      "スズキ",
      "サヨリ",
      "コノシロ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki"
    ],
    "note": "大村湾奥の小港。サヨリやコノシロ、メバルなどを候補に、浅い港内の回遊と壁際を探る。",
    "caution": [
      "干潮時の水深を確認し、船や係留索の近くへ仕掛けを入れない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/nagasakikuyamakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.840673/130.001349/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakisisigawagyokou",
    "name": "子々川漁港",
    "prefecture": "長崎県",
    "lat": 32.864485,
    "lng": 129.806471,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "スズキ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "アジやサヨリの回遊狙いに加え、砂地のシロギスや底物を探れる漁港。潮位に合わせて投入距離を調整する。",
    "caution": [
      "係留船がある区画を避け、漁具やロープへ針を掛けない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/nagasakisisigawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.864485/129.806471/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-nagasakisonogikou",
    "name": "彼杵港",
    "prefecture": "長崎県",
    "lat": 33.039392,
    "lng": 129.907515,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "スズキ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki",
      "eging"
    ],
    "note": "西側岸壁などから小魚の回遊やクロダイを探る大村湾の港。コウイカやアオリイカも釣り物の候補。",
    "caution": [
      "駐車場所からの移動経路を確認し、船の乗降・荷揚げ場所を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/nagasakisonogikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.039392/129.907515/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-mieoodomari",
    "name": "松崎港",
    "prefecture": "三重県",
    "lat": 33.895943,
    "lng": 136.118288,
    "fish": [
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "choinage",
      "uki",
      "eging"
    ],
    "note": "大泊海岸に隣接する港。手前の岸壁でシロギスを探り、波止では足場と波を見て釣り座を決める。",
    "caution": [
      "波止は高さがある。外海が荒れた日は岸壁でも波の回り込みに注意。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba3/mieoodomari.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.895943/136.118288/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougoikuhagyokou",
    "name": "育波漁港",
    "prefecture": "兵庫県",
    "lat": 34.530248,
    "lng": 134.89121,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "カレイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "淡路島西岸の港。アジなどの回遊魚と、シロギス・カレイ・根魚を狙い分けられる。",
    "caution": [
      "外側の消波ブロックへ乗らず、港内の作業を妨げない場所を選ぶ。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba5/hyougoikuhagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.530248/134.89121/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougoasanogyokou",
    "name": "浅野漁港",
    "prefecture": "兵庫県",
    "lat": 34.535604,
    "lng": 134.910285,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "カレイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "淡路島西岸の小港。波止際の根魚と、回遊するアジなどを候補に短い仕掛けから探る。",
    "caution": [
      "外側の消波ブロックを避け、強い西風やうねりがある日は利用しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba5/hyougoasanogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.535604/134.910285/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougotosimagyokou",
    "name": "富島漁港",
    "prefecture": "兵庫県",
    "lat": 34.548895,
    "lng": 134.930112,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "カレイ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "波止と岸壁が広がる淡路島の港。回遊魚を待つ釣りと、壁際の根魚狙いを切り替えて楽しむ候補地。",
    "caution": [
      "手すりの有無は区画で異なる。車の乗り入れや横付けを前提にしない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba5/hyougotosimagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.548895/134.930112/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougotaigyokou",
    "name": "田結漁港",
    "prefecture": "兵庫県",
    "lat": 35.644149,
    "lng": 134.842715,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "砂地の浅場を持つ但馬の漁港。シロギス狙いを軸に、アジ・根魚・アオリイカも候補にできる。",
    "caution": [
      "浅い場所では根掛かりと船底への干渉に注意し、港口を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougotaigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/35.644149/134.842715/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hyougokasuminisikou",
    "name": "香住西港",
    "prefecture": "兵庫県",
    "lat": 35.643626,
    "lng": 134.63007,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "但馬の大きな港で、港内岸壁や波止からアジなどを探れる。軽い仕掛けで小魚の反応する棚を見つけたい。",
    "caution": [
      "駐車・立入範囲は区画ごとの掲示を確認。夜間も荷揚げ作業を優先する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba6/hyougokasuminisikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/35.643626/134.63007/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimeyobokorigyokou",
    "name": "与侈漁港",
    "prefecture": "愛媛県",
    "lat": 33.388363,
    "lng": 132.077765,
    "fish": [
      "マアジ",
      "アオリイカ",
      "メジナ",
      "タチウオ",
      "ブリ",
      "イサキ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "佐田岬先端近くの水深がある漁港。アジやアオリイカを候補に、流れと取り込み経路を先に確認する。",
    "caution": [
      "足場が高い場所がある。強風・高波時は利用せず、単独で無理をしない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimeyobokorigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.388363/132.077765/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimeikatakou",
    "name": "伊方港",
    "prefecture": "愛媛県",
    "lat": 33.486167,
    "lng": 132.352595,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "サバ",
      "イワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "岸壁からアジやサバなどの回遊を探れる港。水深を活かし、表層から順に棚を変えて反応を見る。",
    "caution": [
      "船の出入りがある区画を避け、足元へ落とした仕掛けも流されすぎないよう回収する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimeikatakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.486167/132.352595/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimemikamekou",
    "name": "三瓶港",
    "prefecture": "愛媛県",
    "lat": 33.380982,
    "lng": 132.419715,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "カワハギ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "湾奥の岸壁からアジ、メバル、クロダイなどを狙う候補地。港内の明暗や壁際を短い距離で探る。",
    "caution": [
      "係留船・漁具を避け、岸壁の端に荷物を広げすぎない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimemikamekou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.380982/132.419715/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimeoosoudunohato",
    "name": "大早津の波止",
    "prefecture": "愛媛県",
    "lat": 33.311576,
    "lng": 132.44128,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "波止からアジや根魚を探り、投げ釣りでは沖の底物も候補になる場所。取り込みやすい距離から始めたい。",
    "caution": [
      "手すりがある区間でも救命具を着用。周囲を確認せず遠投しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimeoosoudunohato.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.311576/132.44128/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-ehimeasakawagyokou",
    "name": "浅川漁港",
    "prefecture": "愛媛県",
    "lat": 33.262141,
    "lng": 132.526531,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "穏やかな入江の漁港で、アジ・根魚・クロダイを探れる。アオリイカを狙う際は底と係留索を確認する。",
    "caution": [
      "穏やかに見えても強風時は利用を見送り、漁船の作業を優先する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimeasakawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.262141/132.526531/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimeakamatugyokou",
    "name": "赤松漁港",
    "prefecture": "愛媛県",
    "lat": 33.238059,
    "lng": 132.536294,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "九島水道に面した漁港。波止の足元からアジや根魚を探り、潮が動く時間帯の変化を見る。",
    "caution": [
      "流れで仕掛けが船道へ入る前に回収。波止間の移動も作業車両を優先する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimeakamatugyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.238059/132.536294/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimehonnkusimagyokou",
    "name": "九島・本九島港",
    "prefecture": "愛媛県",
    "lat": 33.220864,
    "lng": 132.524471,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "九島の西側にある港。アジやメバル、クロダイに加え、砂地を探るシロギス・カレイも候補になる。",
    "caution": [
      "隣接する港の係留区画と混同せず、釣り座までの通行条件を確認する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimehonnkusimagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.220864/132.524471/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimekokubogyokou",
    "name": "石応漁港",
    "prefecture": "愛媛県",
    "lat": 33.213935,
    "lng": 132.518742,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "九島水道に面し、波止で小魚やクロダイ、アオリイカを探れる港。流れの速さに合わせて仕掛けを調整する。",
    "caution": [
      "船道を横断する投げ方を避け、係留索のある方向へ投入しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimekokubogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.213935/132.518742/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimetunouragyokou",
    "name": "津の浦漁港",
    "prefecture": "愛媛県",
    "lat": 33.200596,
    "lng": 132.446516,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "三浦半島中ほどの漁港。東側の波止などからアジ・根魚を候補に、足元と港内を探り分ける。",
    "caution": [
      "北西風の影響を受けやすい。風が強まる前に安全な場所へ戻る。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimetunouragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.200596/132.446516/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimehiraigyokou",
    "name": "平井漁港",
    "prefecture": "愛媛県",
    "lat": 33.056263,
    "lng": 132.451773,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "由良半島の港で、波止からアジや根魚、アオリイカを探れる。投入前に港内のロープの向きを確認したい。",
    "caution": [
      "西側波止に沿う係留索へ注意。ロープをまたぐ仕掛けの投入は避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimehiraigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.056263/132.451773/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimekasiwazakigyokou",
    "name": "柏崎漁港",
    "prefecture": "愛媛県",
    "lat": 33.011039,
    "lng": 132.49089,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "由良半島の水深がある港。アジ・根魚と、アオリイカなどを候補に足元から棚を探る。",
    "caution": [
      "取り込みに必要な高さを先に確認し、船の作業場所を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimekasiwazakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.011039/132.49089/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ehimehisayosigyokou",
    "name": "久良漁港",
    "prefecture": "愛媛県",
    "lat": 32.9426,
    "lng": 132.55022,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "湾内の波止でアジや根魚、アオリイカを探れる港。足元の釣りから始めて底の変化を確かめる。",
    "caution": [
      "東側への道路は狭い。無理な進入や路上駐車をせず、通行を妨げない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://s.turihiroba.com/turiba3/ehimehisayosigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.9426/132.55022/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateragagyokou",
    "name": "羅賀漁港",
    "prefecture": "岩手県",
    "lat": 39.938698,
    "lng": 141.941857,
    "fish": [
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ",
      "ドンコ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "外側の波止内向きなどでアイナメ・ソイやカレイを探る港。小魚の回遊と底の釣りを分けて考える。",
    "caution": [
      "手すりがあっても荒天時は利用しない。船の航路へ仕掛けを流さない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwateragagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.938698/141.941857/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatehidesimagyokou",
    "name": "日出島漁港",
    "prefecture": "岩手県",
    "lat": 39.672379,
    "lng": 141.980031,
    "fish": [
      "マアジ",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "宮古湾北側の漁港。波止や岸壁で根魚・カレイを探り、回遊があればアジなども候補になる。",
    "caution": [
      "港への道路が狭い。漁業車両の通行と荷揚げ場所を優先する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatehidesimagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.672379/141.980031/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatetakahamagyokou",
    "name": "高浜漁港",
    "prefecture": "岩手県",
    "lat": 39.600282,
    "lng": 141.954002,
    "fish": [
      "マアジ",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "宮古湾奥にある漁港。岸壁から根魚やカレイを探り、小魚が入る時期には棚を変えて回遊を待つ。",
    "caution": [
      "作業中の岸壁には入らず、荷揚げ・係留場所から離れて釣る。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatetakahamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.600282/141.954002/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatetugaruisigyokou",
    "name": "津軽石漁港",
    "prefecture": "岩手県",
    "lat": 39.594677,
    "lng": 141.963422,
    "fish": [
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ",
      "アナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "宮古湾奥の小さな港。根魚やカレイを中心に、短い投げ仕掛けで底の状態を確認しながら探る。",
    "caution": [
      "港内が狭いため、船・ロープの近くへ投げない。出入りがあれば仕掛けを回収。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatetugaruisigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.594677/141.963422/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatesirahamagyokou",
    "name": "白浜漁港",
    "prefecture": "岩手県",
    "lat": 39.609358,
    "lng": 141.975782,
    "fish": [
      "マアジ",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "重茂半島の漁港。港内岸壁で根魚や底物を探る釣りから始め、回遊する小魚の有無も確認する。",
    "caution": [
      "外側の高い波返しへ上がらず、港内側の平らな足場を選ぶ。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatesirahamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.609358/141.975782/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateuranosawagyokou",
    "name": "浦の沢漁港",
    "prefecture": "岩手県",
    "lat": 39.639802,
    "lng": 142.003913,
    "fish": [
      "アイナメ",
      "ソイ",
      "ドンコ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "重茂半島北側の小港。アイナメ・ソイなどを候補に、底の変化を短い範囲で丁寧に探る。",
    "caution": [
      "移動に時間がかかる立地。日没と天候を考慮し、余裕を持って戻る。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwateuranosawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.639802/142.003913/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateotobegyokou",
    "name": "音部漁港",
    "prefecture": "岩手県",
    "lat": 39.599687,
    "lng": 142.029555,
    "fish": [
      "マアジ",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "波止の内側や港内でアイナメ・ソイ・カレイを探れる漁港。底狙いは根掛かりの少ない方向を確かめたい。",
    "caution": [
      "外側の高い波返しを避け、船の係留索と漁具に仕掛けを掛けない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwateotobegyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.599687/142.029555/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateomoegyokou",
    "name": "重茂漁港",
    "prefecture": "岩手県",
    "lat": 39.575478,
    "lng": 142.030563,
    "fish": [
      "マアジ",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "重茂半島の大きな漁港。内向きの波止や岸壁で根魚・カレイを探り、回遊魚は棚を変えて待つ。",
    "caution": [
      "港が広くても作業区画には立ち入らない。通行路を常に空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwateomoegyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.575478/142.030563/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateaneyosigyokou",
    "name": "姉吉漁港",
    "prefecture": "岩手県",
    "lat": 39.532528,
    "lng": 142.053072,
    "fish": [
      "アイナメ",
      "ソイ",
      "ドンコ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "半島東側の小港。アイナメやソイなどの根魚を候補に、足元の底の変化を探る釣りを考える。",
    "caution": [
      "帰路の時間を十分確保。周辺の遊歩道と港内の通行範囲を混同しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwateaneyosigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.532528/142.053072/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatetikeigyokou",
    "name": "千鶏漁港",
    "prefecture": "岩手県",
    "lat": 39.529615,
    "lng": 142.035005,
    "fish": [
      "マアジ",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "港内側で根魚やカレイ、小魚を狙い分ける漁港。海況が穏やかな日に平らな釣り座から探る。",
    "caution": [
      "外側の大きな消波ブロックには乗らない。波が回り込む日は利用しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatetikeigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.529615/142.035005/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatekawasirogyokou",
    "name": "川代漁港",
    "prefecture": "岩手県",
    "lat": 39.499802,
    "lng": 142.011187,
    "fish": [
      "アイナメ",
      "ソイ",
      "ドンコ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "小規模な港で、アイナメ・ソイなどを短い仕掛けで探る候補地。底へ落とし続けず根の位置を確認する。",
    "caution": [
      "港への道に注意。消波ブロックを避け、荒天時は進入しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekawasirogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.499802/142.011187/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateyamadagyokou",
    "name": "山田漁港",
    "prefecture": "岩手県",
    "lat": 39.462455,
    "lng": 141.959023,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "山田湾の港。岸壁から根魚やカレイ、小魚を探り、季節によってイカ類も候補にできる。",
    "caution": [
      "魚市場周辺は漁業作業を最優先。荷揚げ中の区画を釣り座にしない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwateyamadagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.462455/141.959023/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateorikasagyokou",
    "name": "織笠漁港",
    "prefecture": "岩手県",
    "lat": 39.451852,
    "lng": 141.963594,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "山田湾奥の漁港。波止際の根魚と底物、小魚の回遊を分けて探れる。湾内の穏やかな日を選びたい。",
    "caution": [
      "穏やかな水面でも港内の船の動きを確認し、進路を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwateorikasagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.451852/141.963594/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateoouragyokou",
    "name": "大浦漁港（岩手県）",
    "prefecture": "岩手県",
    "lat": 39.444943,
    "lng": 142.003891,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "船越半島北側の入江にある港。岸壁の根魚や底物を候補に、港内の地形変化を短く探る。",
    "caution": [
      "北側の漁業施設・作業場所を避け、荷物で通路をふさがない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwateoouragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.444943/142.003891/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatekoyadorigyokou",
    "name": "小谷鳥漁港",
    "prefecture": "岩手県",
    "lat": 39.425321,
    "lng": 142.014728,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "船越半島南側の港。内側の岸壁で根魚やカレイなどを探り、小魚の回遊も候補にする。",
    "caution": [
      "外側の大きな消波ブロックには乗らず、波の回り込みにも注意する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekoyadorigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.425321/142.014728/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateyamanoutigyokou",
    "name": "山の内漁港",
    "prefecture": "岩手県",
    "lat": 39.426481,
    "lng": 141.975374,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "船越半島付け根の港。アイナメ・ソイやカレイを中心に、底狙いと回遊待ちを切り替えて探る。",
    "caution": [
      "対岸へ向けた遠投でも船道をふさがない。港内作業を優先する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwateyamanoutigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.426481/141.975374/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatenebamagyokou",
    "name": "根浜漁港",
    "prefecture": "岩手県",
    "lat": 39.327476,
    "lng": 141.906495,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "サバ",
      "アナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "大槌湾の漁港。根魚やカレイ、アナゴなどを候補に、足元から底の状態を確かめて探る。",
    "caution": [
      "夜間に初めて訪れず、段差・係留索・帰路を明るいうちに確認する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatenebamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.327476/141.906495/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatehakozakigyokou",
    "name": "箱崎漁港",
    "prefecture": "岩手県",
    "lat": 39.326264,
    "lng": 141.913769,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "大槌湾の波止や岸壁から根魚・底物を探れる港。先端へ進む前に、手前で風と流れを確認したい。",
    "caution": [
      "波止先端でも船の出入りを優先。波や風が強いときは引き返す。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/iwatehakozakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/39.326264/141.913769/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagiyougaigyokouk",
    "name": "要害漁港",
    "prefecture": "宮城県",
    "lat": 38.310531,
    "lng": 141.049433,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "気仙沼大島の小港。港内岸壁で根魚やカレイ、チカを候補に、底と回遊する棚を探り分ける。",
    "caution": [
      "岸壁の作業場所と係留索を避ける。島内移動と帰路の時間にも余裕を持つ。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagiyougaigyokouk.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.310531/141.049433/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagikotakigyokou",
    "name": "小滝漁港",
    "prefecture": "宮城県",
    "lat": 38.626678,
    "lng": 141.528239,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "神割崎に近い小港。アイナメなどの根魚を足元から探り、穏やかな海況で底の釣りを考える。",
    "caution": [
      "外側の消波ブロックへ乗らず、うねりのある日は波止へ進まない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagikotakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.626678/141.528239/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagioozasigyokou",
    "name": "大指漁港",
    "prefecture": "宮城県",
    "lat": 38.608403,
    "lng": 141.52148,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "波止の内側で根魚・カレイやチカを候補にする漁港。底狙いは根掛かりの増える方向を避ける。",
    "caution": [
      "外側は足場が高い。内向きの安全な足場から釣り、港口を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagioozasigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.608403/141.52148/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagikozasigyokou",
    "name": "小指漁港",
    "prefecture": "宮城県",
    "lat": 38.603608,
    "lng": 141.509635,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "小さな港で、根魚やカレイを短い範囲で探る釣りが候補。投入前に船とロープの位置を確認する。",
    "caution": [
      "外向きは足場が悪い場所がある。港内側の平らな場所を選ぶ。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagikozasigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.603608/141.509635/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagiaikawagyokou",
    "name": "相川漁港",
    "prefecture": "宮城県",
    "lat": 38.60235,
    "lng": 141.503692,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "小港の岸壁で根魚や底物を探る候補地。短い仕掛けから始め、根掛かりが続く場所は避けたい。",
    "caution": [
      "外側の消波ブロックを避ける。港が狭いため漁船の動きに注意する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba2/miyagiaikawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.60235/141.503692/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagifunakosigyokou",
    "name": "船越漁港",
    "prefecture": "宮城県",
    "lat": 38.534336,
    "lng": 141.508842,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "西側の波止などから根魚・カレイ・チカを探れる港。底の釣りと小魚の回遊待ちを切り替える。",
    "caution": [
      "釣り座の広さだけで判断せず、係留索と船の通行を確認する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyagifunakosigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.534336/141.508842/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagikuwahamagyokou",
    "name": "桑浜漁港",
    "prefecture": "宮城県",
    "lat": 38.493571,
    "lng": 141.524549,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "波止を持つ小港。根魚やカレイ、アナゴなどを候補に、足元から底質の変わる場所を探る。",
    "caution": [
      "夜釣りの前に帰路を確認。船・漁具の近くへ仕掛けを入れない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyagikuwahamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.493571/141.524549/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyaginamiitagyokou",
    "name": "波板漁港",
    "prefecture": "宮城県",
    "lat": 38.487911,
    "lng": 141.491675,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "ドンコ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "港内や波止付け根側で根魚を探る候補地。釣り座を広げすぎず、短い距離で底を確かめる。",
    "caution": [
      "外側の大きな消波ブロックに乗らない。波が回り込むときは利用しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyaginamiitagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.487911/141.491675/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagikirigasakigyokou",
    "name": "桐ヶ崎漁港",
    "prefecture": "宮城県",
    "lat": 38.439422,
    "lng": 141.479144,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "小港の波止で根魚や底物、小魚を探れる。港内が混む場合は無理に遠投せず、空いた短い範囲を選ぶ。",
    "caution": [
      "船の出入りや荷揚げを優先し、漁具置場から離れて釣る。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyagikirigasakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.439422/141.479144/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagiiigohamagyokou",
    "name": "飯子浜漁港",
    "prefecture": "宮城県",
    "lat": 38.401495,
    "lng": 141.482642,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "波止で根魚やカレイを探る候補地。底狙いは短い距離から始め、引っ掛かる場所を避けて釣る。",
    "caution": [
      "漁業作業が行われる港。作業中の区画は利用せず、通路を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyagiiigohamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.401495/141.482642/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagikoyadorigyokou",
    "name": "小屋取漁港",
    "prefecture": "宮城県",
    "lat": 38.408053,
    "lng": 141.50279,
    "fish": [
      "クロダイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "港内側で根魚やカレイ、回遊する小魚を探れる港。外海の波を避けられる釣り座かを先に確認する。",
    "caution": [
      "外側の不規則な消波ブロックには乗らず、内向きの平らな足場を選ぶ。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyagikoyadorigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.408053/141.50279/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagimaeamigyokou",
    "name": "前網漁港",
    "prefecture": "宮城県",
    "lat": 38.389286,
    "lng": 141.515794,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "寄磯へ向かう途中の漁港。根魚や底物を候補に、波止の手前から港内を短く探る。",
    "caution": [
      "高い波返しへ上がらない。船道と係留索を避けて投入する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyagimaeamigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.389286/141.515794/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyaginiiyamagyokou",
    "name": "新山漁港",
    "prefecture": "宮城県",
    "lat": 38.327939,
    "lng": 141.527617,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "半島沿いの港で、アイナメなどの根魚を探る候補地。足元の変化を確認してから釣り座を選びたい。",
    "caution": [
      "アクセスに時間がかかる。東側外向きは足場が高く、無理な釣りをしない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyaginiiyamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.327939/141.527617/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagiomotehamagyokou",
    "name": "表浜漁港",
    "prefecture": "宮城県",
    "lat": 38.323023,
    "lng": 141.466334,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "港内岸壁から根魚や底物を探る釣りが候補。短い投入で船やロープのない方向を確かめる。",
    "caution": [
      "西側の離岸堤には歩いて渡れない。岸とつながる場所のみを利用する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyagiomotehamagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.323023/141.466334/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagikoamikuragyokou",
    "name": "小網倉漁港",
    "prefecture": "宮城県",
    "lat": 38.351131,
    "lng": 141.459682,
    "fish": [
      "メバル",
      "アイナメ",
      "カレイ",
      "チカ",
      "ウミタナゴ",
      "アナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "湾奥の港で、メバルやアイナメ、カレイなどを狙い分けられる。小魚は底狙いと棚を分けて探る。",
    "caution": [
      "係留区画を避け、湾奥へ流れ込む濁りや風の変化にも注意する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyagikoamikuragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.351131/141.459682/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagikitunezakigyokou",
    "name": "狐崎漁港",
    "prefecture": "宮城県",
    "lat": 38.349347,
    "lng": 141.41917,
    "fish": [
      "クロダイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "潮通しと水深のある港。根魚・底物を軸に、回遊が見られるときは棚を上げて探る。",
    "caution": [
      "高い波返しを避け、流れで仕掛けが船道へ入る前に回収する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyagikitunezakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.349347/141.41917/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagimakinohamatakenohama",
    "name": "牧浜漁港",
    "prefecture": "宮城県",
    "lat": 38.365971,
    "lng": 141.437023,
    "fish": [
      "クロダイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "牧浜の港内と波止で根魚やカレイを探る候補地。短い距離から底の変化を確認して釣り座を決める。",
    "caution": [
      "隣接する竹浜とは別の港内位置を表示。現地の区画ごとの掲示を確認する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyagimakinohamatakenohama.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.365971/141.437023/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagioginohamakozumihama",
    "name": "小積浜漁港",
    "prefecture": "宮城県",
    "lat": 38.372734,
    "lng": 141.454768,
    "fish": [
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "小積浜の波止や港内で根魚・底物を探る候補地。船のいない方向へ短く投入して根掛かりを確かめる。",
    "caution": [
      "隣接する荻浜と位置を混同せず、荷揚げや漁具のある区画を避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyagioginohamakozumihama.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.372734/141.454768/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagimomonouragyokou",
    "name": "桃浦漁港",
    "prefecture": "宮城県",
    "lat": 38.396248,
    "lng": 141.430736,
    "fish": [
      "クロダイ",
      "メバル",
      "アイナメ",
      "ソイ",
      "カレイ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "波止と港内で根魚やカレイを狙う候補地。先端まで進む前に手前の足場と船の動きを確認する。",
    "caution": [
      "港が広くても作業区画に立ち入らない。強風・高波時は利用しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://t.turihiroba.com/turiba1/miyagimomonouragyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/38.396248/141.430736/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibaharakou",
    "name": "原港",
    "prefecture": "千葉県",
    "lat": 34.906065,
    "lng": 139.908743,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "南側の波止などでアジやクロダイ、メジナを探る小港。回遊待ちと壁際の釣りを切り替える。",
    "caution": [
      "釣り座が限られるため、船の出入りと地元の作業を優先する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaharakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.906065/139.908743/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibaotohamakou",
    "name": "乙浜港",
    "prefecture": "千葉県",
    "lat": 34.910675,
    "lng": 139.924707,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "サバ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "南側岸壁を位置の目安とする港。アジやカマスの回遊を探り、港内の作業と釣り座を分けて考える。",
    "caution": [
      "東側小堤防のエギング禁止など区画別の釣法制限を確認。係留船・作業区域を避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaotohamakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.910675/139.924707/&base=std&ls=std&disp=1"
      },
      {
        "label": "東側小堤防の釣法制限の参考情報",
        "url": "https://chiba-tsuri.net/minamiboso/otohamako/"
      }
    ]
  },
  {
    "slug": "coast-tibasenndakou",
    "name": "千田港",
    "prefecture": "千葉県",
    "lat": 34.931911,
    "lng": 139.954555,
    "fish": [
      "クロダイ"
    ],
    "methodSlugs": [
      "uki"
    ],
    "note": "七浦とも呼ばれる浅い港。磯に囲まれた地形を踏まえ、内側の波止からクロダイなどを探る。",
    "caution": [
      "浅い岩場への立ち込みや消波ブロックへの移動は避け、波の影響を確認する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibasenndakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.931911/139.954555/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibaemikou",
    "name": "江見港",
    "prefecture": "千葉県",
    "lat": 35.057911,
    "lng": 140.060985,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "サバ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "左右に波止を持つ小港。アジやサバの回遊待ちと、クロダイ・メジナ狙いを考えられる。",
    "caution": [
      "港口を横切る仕掛けを流さず、船が動くときは早めに回収する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaemikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/35.057911/140.060985/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokakourakou",
    "name": "子浦港",
    "prefecture": "静岡県",
    "lat": 34.667858,
    "lng": 138.786356,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "入江の小港で、アジやクロダイ、アオリイカを候補にできる。穏やかな日に港内の足元から探る。",
    "caution": [
      "先端が混雑している場合は無理に入らず、漁業作業と通行を優先する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba8/sizuokakourakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.667858/138.786356/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokasitarukou",
    "name": "下流港",
    "prefecture": "静岡県",
    "lat": 34.623938,
    "lng": 138.87826,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "浅い港内と波止でアジやクロダイを探る港。アオリイカは底とロープの位置を確かめてから狙う。",
    "caution": [
      "外側の消波ブロックには乗らず、うねりのある日は波止へ進まない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://turihiroba.com/turiba8/sizuokasitarukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.623938/138.87826/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimaogatakoutobiisikou",
    "name": "小方港（大竹港）",
    "prefecture": "広島県",
    "lat": 34.236464,
    "lng": 132.224193,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "スズキ",
      "サヨリ",
      "アナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "小方港の岸壁・波止を対象とする地点。アジやサヨリ、根魚などを候補に回遊と足元を探り分ける。",
    "caution": [
      "フェリーの発着・乗降と荷揚げを優先。隣接する飛石港とは別の位置を表示。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimaogatakoutobiisikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.236464/132.224193/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimatonokonohato",
    "name": "倉橋島・渡子の波止",
    "prefecture": "広島県",
    "lat": 34.069334,
    "lng": 132.53859,
    "fish": [
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "倉橋島の小さな波止。シロギスやカレイ、根魚を短い投げ仕掛けで探り、潮の流れを確認する。",
    "caution": [
      "頭上の電線に注意。竿を立てる前と投入前に上方を確認する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimatonokonohato.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.069334/132.53859/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-hirosimauwaginohato",
    "name": "倉橋島・宇和木の波止",
    "prefecture": "広島県",
    "lat": 34.134222,
    "lng": 132.499452,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "倉橋島の波止で、アジや底物、根魚を探る候補地。狭い足場では短い仕掛けから始める。",
    "caution": [
      "北側の波止付近は頭上の電線に注意し、竿を接近させない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimauwaginohato.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.134222/132.499452/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-hirosimamurookou",
    "name": "倉橋島・室尾港",
    "prefecture": "広島県",
    "lat": 34.096471,
    "lng": 132.541187,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "倉橋島南側の港。港内側でアジなどの回遊を待ち、砂地の底物や壁際の根魚も探れる。",
    "caution": [
      "西波止の外側は高く狭い。内側の平らな足場から無理なく釣る。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimamurookou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.096471/132.541187/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimahatagyokou",
    "name": "能美島・畑漁港",
    "prefecture": "広島県",
    "lat": 34.202539,
    "lng": 132.408257,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "能美島の漁港で、アジ・シロギス・根魚を探る候補地。回遊狙いと底狙いを切り替えて考える。",
    "caution": [
      "先端での釣りは風と船の出入りを確認。取り込みのために縁へ乗り出さない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimahatagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.202539/132.408257/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimafukaegyokou",
    "name": "能美島・深江漁港",
    "prefecture": "広島県",
    "lat": 34.165706,
    "lng": 132.445915,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "能美島の港。南側の波止などでアジや根魚、クロダイを狙い分け、足元から反応を確かめる。",
    "caution": [
      "波止には高さがある。落水対策と取り込み手段を用意し、強風時は利用しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimafukaegyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.165706/132.445915/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimamarutanikou",
    "name": "下蒲刈島・丸谷港",
    "prefecture": "広島県",
    "lat": 34.19512,
    "lng": 132.681005,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "サヨリ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "下蒲刈島の潮が動く港。アジや根魚、クロダイなどを候補に、流れに合わせて仕掛けを回収する。",
    "caution": [
      "潮流が速くなる場合がある。高い波返しに上がらず、船道へ流し込まない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimamarutanikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.19512/132.681005/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimaoojizoukou",
    "name": "下蒲刈島・大地蔵港",
    "prefecture": "広島県",
    "lat": 34.173926,
    "lng": 132.660234,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル",
      "カレイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "下蒲刈島の港で、小魚の回遊待ちや底物、アオリイカを探る候補地。港内の空いた方向を短く探る。",
    "caution": [
      "西側は手すりの有無を確認。東側への道路は狭く、通行を妨げない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimaoojizoukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.173926/132.660234/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimatadanoumikou",
    "name": "忠海港",
    "prefecture": "広島県",
    "lat": 34.336065,
    "lng": 132.994051,
    "fish": [
      "シロギス",
      "クロダイ",
      "カレイ",
      "スズキ",
      "アオリイカ",
      "コウイカ"
    ],
    "methodSlugs": [
      "choinage",
      "uki",
      "eging"
    ],
    "note": "大久野島への船が発着する港。釣りは航路を避け、底物やクロダイを探れる区画を確認して行う。",
    "caution": [
      "フェリーの発着を最優先。波止付近の電線に竿や仕掛けを近づけない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimatadanoumikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/34.336065/132.994051/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitanadatekou",
    "name": "灘手港",
    "prefecture": "大分県",
    "lat": 33.418708,
    "lng": 131.646917,
    "fish": [
      "クロダイ",
      "スズキ",
      "ハゼ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "八坂川河口の浅い港。ハゼやクロダイ、スズキを候補に、潮位と川の流れを見て釣り座を選ぶ。",
    "caution": [
      "干潮時の足元と増水に注意。河口へ降りたり航路へ投げたりしない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitanadatekou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.418708/131.646917/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitaakinoekou",
    "name": "秋ノ江港",
    "prefecture": "大分県",
    "lat": 33.244197,
    "lng": 131.877823,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "佐賀関半島南側の港。波止からアジ・根魚・クロダイを探り、回遊と底の釣りを切り替える。",
    "caution": [
      "複数の波止でも利用条件は区画ごとに確認。作業用の岸壁を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitaakinoekou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.244197/131.877823/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitasirakigyokou",
    "name": "白木漁港",
    "prefecture": "大分県",
    "lat": 33.231562,
    "lng": 131.872888,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki",
      "eging"
    ],
    "note": "砂浜に隣接する佐賀関の漁港。アジの回遊待ちに加え、砂地のシロギスやアオリイカも候補になる。",
    "caution": [
      "砂浜側へ投げる際も人を確認。波が高いときは波止へ進まない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitasirakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.231562/131.872888/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitanakatuurakou",
    "name": "中津浦港",
    "prefecture": "大分県",
    "lat": 33.141863,
    "lng": 131.815639,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "波止でアジや根魚、クロダイを探れる港。港内の係留索を確認し、短い仕掛けで足元から探る。",
    "caution": [
      "近隣の私有地へ駐車しない。道路・荷揚げ場所を空けて利用する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitanakatuurakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.141863/131.815639/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitakazanasikou_",
    "name": "風成港",
    "prefecture": "大分県",
    "lat": 33.117173,
    "lng": 131.845465,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "長目半島の付け根にある港。波止や岸壁でアジ・根魚を狙い、空いた方向へ短く仕掛けを入れる。",
    "caution": [
      "広い港でも漁業作業を優先し、港口へ仕掛けを流さない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakazanasikou_.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.117173/131.845465/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitakakinourakou",
    "name": "柿ノ浦港",
    "prefecture": "大分県",
    "lat": 33.243156,
    "lng": 131.884604,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "長目半島北側の港。波止の内側でアジや根魚、クロダイを候補に足元から探る。",
    "caution": [
      "外側の消波ブロックと高い足場を避け、取り込み可能な場所を選ぶ。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakakinourakou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.243156/131.884604/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitanagamekou",
    "name": "長目港",
    "prefecture": "大分県",
    "lat": 33.109014,
    "lng": 131.881192,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "長目半島南側の港。アジや根魚、アオリイカを探る候補地で、港内の船やロープを避けて釣る。",
    "caution": [
      "東側の波止付近には電線がある。投入前に頭上を必ず確認する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba1/ooitanagamekou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/33.109014/131.881192/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kumamotoinokodagyokou",
    "name": "猪子田漁港",
    "prefecture": "熊本県",
    "lat": 32.400491,
    "lng": 130.291479,
    "fish": [
      "マアジ",
      "メバル",
      "アオリイカ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging"
    ],
    "note": "小港の波止でアジや根魚、コウイカ・アオリイカを探れる。着底を長く待ちすぎず根掛かりを避ける。",
    "caution": [
      "頭上の電線に竿や仕掛けを接近させない。狭い通路を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。",
      "港内と防波堤外縁30m以内は釣りでの土砂使用が禁止。有明海を除く県海面では、ばくだん釣りのアミ団子も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotoinokodagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.400491/130.291479/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：海面での遊漁ルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotosumotogyokou",
    "name": "栖本漁港",
    "prefecture": "熊本県",
    "lat": 32.411831,
    "lng": 130.273519,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "スズキ",
      "コウイカ",
      "メッキ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "河内川の河口にある港。スズキやクロダイを候補に、河口の流れと濁りの境目を確認する。",
    "caution": [
      "増水時は河口へ近づかず、船道を横切る仕掛けは早めに回収する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。",
      "港内と防波堤外縁30m以内は釣りでの土砂使用が禁止。有明海を除く県海面では、ばくだん釣りのアミ団子も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotosumotogyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.411831/130.273519/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：海面での遊漁ルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotosaitugyokou",
    "name": "佐伊津漁港",
    "prefecture": "熊本県",
    "lat": 32.494959,
    "lng": 130.197515,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "スズキ",
      "サヨリ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki",
      "eging"
    ],
    "note": "天草北側の港。アジ・サヨリの回遊と、シロギスやクロダイを狙い分けられる。",
    "caution": [
      "白灯側は足場の幅を確認し、赤灯側の外向き消波ブロックには乗らない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。",
      "港内と防波堤外縁30m以内は釣りでの土砂使用が禁止。有明海を除く県海面では、ばくだん釣りのアミ団子も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba3/kumamotosaitugyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.494959/130.197515/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：海面での遊漁ルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotomiyatugyokou",
    "name": "宮津漁港",
    "prefecture": "熊本県",
    "lat": 32.550937,
    "lng": 130.17698,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "浅い港で、アジや根魚、クロダイなどを候補に波止まわりを探る。干潮時の水深を先に確認したい。",
    "caution": [
      "先端が混んでいる場合は無理に入らず、船の出入りを優先する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。",
      "港内と防波堤外縁30m以内は釣りでの土砂使用が禁止。有明海を除く県海面では、ばくだん釣りのアミ団子も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotomiyatugyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.550937/130.17698/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：海面での遊漁ルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotohikizakagyokou",
    "name": "引坂漁港",
    "prefecture": "熊本県",
    "lat": 32.550973,
    "lng": 130.159171,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "西側の波止などからアジ・根魚やクロダイを探れる港。足元の地形変化から短い範囲を釣る。",
    "caution": [
      "消波ブロックのある区間へ移動せず、平らな釣り座と帰路を確認する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。",
      "港内と防波堤外縁30m以内は釣りでの土砂使用が禁止。有明海を除く県海面では、ばくだん釣りのアミ団子も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotohikizakagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.550973/130.159171/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：海面での遊漁ルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotonisikawatigyokou",
    "name": "西河内漁港",
    "prefecture": "熊本県",
    "lat": 32.540826,
    "lng": 130.110075,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "東側の波止などでアジや根魚、クロダイを探る候補地。外向きへ投げる前に波と船を確認する。",
    "caution": [
      "消波ブロックがない場所でも落水対策は必要。縁へ荷物を置きすぎない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。",
      "港内と防波堤外縁30m以内は釣りでの土砂使用が禁止。有明海を除く県海面では、ばくだん釣りのアミ団子も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotonisikawatigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.540826/130.110075/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：海面での遊漁ルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotosakasegawagyokou",
    "name": "坂瀬川漁港",
    "prefecture": "熊本県",
    "lat": 32.529682,
    "lng": 130.090549,
    "fish": [
      "マアジ",
      "クロダイ",
      "メバル",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki",
      "eging"
    ],
    "note": "坂瀬川の西側の港を位置の目安とする地点。アジや根魚、クロダイを狙う釣りを考えられる。",
    "caution": [
      "西側の港内を目安に、利用区画と駐車条件は現地の掲示を確認する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。",
      "港内と防波堤外縁30m以内は釣りでの土砂使用が禁止。有明海を除く県海面では、ばくだん釣りのアミ団子も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotosakasegawagyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.529682/130.090549/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：海面での遊漁ルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotosikigyokou",
    "name": "志岐漁港",
    "prefecture": "熊本県",
    "lat": 32.516258,
    "lng": 130.053577,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki",
      "eging"
    ],
    "note": "砂地と砂利底が広がる港。シロギスを探る底の釣りに加え、アジやクロダイも候補になる。",
    "caution": [
      "底へ落とし続けず、引っ掛かりが増える場所では投入方向を変える。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。",
      "港内と防波堤外縁30m以内は釣りでの土砂使用が禁止。有明海を除く県海面では、ばくだん釣りのアミ団子も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotosikigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.516258/130.053577/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：海面での遊漁ルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamototomiokanisikou",
    "name": "富岡西港",
    "prefecture": "熊本県",
    "lat": 32.513562,
    "lng": 130.035274,
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
      "uki",
      "eging"
    ],
    "note": "港内側でシロギスやアジを探り、クロダイ・アオリイカも候補になる港。波止の内向きから始めたい。",
    "caution": [
      "外側の消波ブロックと高い足場を避け、うねりのある日は利用しない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。",
      "港内と防波堤外縁30m以内は釣りでの土砂使用が禁止。有明海を除く県海面では、ばくだん釣りのアミ団子も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kumamototomiokanisikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.513562/130.035274/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：海面での遊漁ルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotoooegyokou",
    "name": "大江漁港（熊本県）",
    "prefecture": "熊本県",
    "lat": 32.321338,
    "lng": 129.992058,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "天草西側の漁港。港内側でアジやクロダイ、アオリイカを探り、波の影響が小さい日を選ぶ。",
    "caution": [
      "東西の波止は外側が高く、大きな消波ブロックがある。無理に外向きへ出ない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。",
      "港内と防波堤外縁30m以内は釣りでの土砂使用が禁止。有明海を除く県海面では、ばくだん釣りのアミ団子も禁止。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotoooegyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.321338/129.992058/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：海面での遊漁ルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kagosimaoosukikou",
    "name": "大漉港",
    "prefecture": "鹿児島県",
    "lat": 32.111732,
    "lng": 130.190456,
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
      "uki",
      "eging"
    ],
    "note": "小さな波止からアジやシロギス、クロダイを探れる港。砂地と壁際を釣り分けて反応を確認する。",
    "caution": [
      "アイゴが釣れることがある。背びれなどの毒棘に触れず道具で扱う。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimaoosukikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.111732/130.190456/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimakuratukou",
    "name": "倉津港",
    "prefecture": "鹿児島県",
    "lat": 32.014681,
    "lng": 130.182023,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "波止先端の内向きなどでアジ・クロダイやアオリイカを探れる小港。船のいない短い範囲から始める。",
    "caution": [
      "先端の釣り座を占有せず、漁船の通行時は仕掛けを回収する。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimakuratukou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.014681/130.182023/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimamifunegyokou",
    "name": "三船漁港",
    "prefecture": "鹿児島県",
    "lat": 32.215379,
    "lng": 130.161338,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "入江奥の漁港。アジやクロダイ、アオリイカを候補に、港内の回遊と底の変化を探る。",
    "caution": [
      "係留索の多い方向へ投入せず、漁業作業のある区画を空ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba4/kagosimamifunegyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/32.215379/130.161338/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimatozakigyokou",
    "name": "戸崎漁港",
    "prefecture": "鹿児島県",
    "lat": 31.662167,
    "lng": 130.303409,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "東側の波止周辺でアジ・クロダイ・メジナを探る候補地。港内側から海況を確かめて釣り座を選ぶ。",
    "caution": [
      "外向きへ出る前に足場と波を確認。荒天時は利用を見送る。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimatozakigyokou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/31.662167/130.303409/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimakiiresinnkou",
    "name": "喜入新港",
    "prefecture": "鹿児島県",
    "lat": 31.379123,
    "lng": 130.550044,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "スズキ",
      "メジナ",
      "メッキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "八幡川河口近くの港。アジやシロギスに加え、メッキ・スズキなど河口に寄る魚も候補になる。",
    "caution": [
      "河口の増水と流れに注意し、船の進路へ仕掛けを流し込まない。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimakiiresinnkou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/31.379123/130.550044/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimaniouzakikou",
    "name": "仁王崎港",
    "prefecture": "鹿児島県",
    "lat": 31.414307,
    "lng": 130.186379,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "カマス"
    ],
    "methodSlugs": [
      "sabiki",
      "uki",
      "eging"
    ],
    "note": "河口近くの小港。アジやカマスの回遊と、クロダイ・アオリイカを狙い分ける候補地。",
    "caution": [
      "船やロープのない方向へ投入し、増水や強い濁りのときは河口を避ける。",
      "現地の立入・釣り禁止表示と漁業作業を優先。救命胴衣を着用し、ごみは持ち帰る。"
    ],
    "sources": [
      {
        "label": "釣り広場：岸釣りの対象魚・足場情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimaniouzakikou.html"
      },
      {
        "label": "国土地理院：岸壁・波止の位置を照合",
        "url": "https://maps.gsi.go.jp/#18/31.414307/130.186379/&base=std&ls=std&disp=1"
      }
    ]
  }
];
export const coastalMapExpansion=createHarborEntries(ports);
