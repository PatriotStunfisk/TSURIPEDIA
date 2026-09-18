import {createHarborEntries,type HarborRecord} from './shore-spot';
// Independently written summaries; discovery sources and reviewed map positions accompany every record.
const places:HarborRecord[]=[
  {
    "slug": "coast-aomoriusirogatagyokou",
    "name": "後潟漁港",
    "prefecture": "青森県",
    "lat": 40.934054,
    "lng": 140.66519,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "サヨリ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "後潟の港内側を中心に、アジなどの回遊魚と底のキス・カレイを狙い分ける釣り場。北側の外向きは消波ブロックが多く、初めてなら平らな内向き岸壁から状況を見たい。",
    "caution": [
      "北側の駐車余地は限られるため、作業場所への駐車や道路上の待機をしない。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoriusirogatagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.934054/140.66519/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomoritairadategyokou",
    "name": "平舘漁港",
    "prefecture": "青森県",
    "lat": 41.159206,
    "lng": 140.640686,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
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
    "note": "平舘の北側の波止周辺は、カレイ・アイナメなどの底物と季節の回遊魚を狙える候補。沖向きの消波ブロックへ渡らず、港内の使える岸壁を確認して釣り座を選ぶ。",
    "caution": [
      "東寄りの風では波を受けやすい。港内が静かでも外側へ回り込まない。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoritairadategyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.159206/140.640686/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorisunagamorigyokou",
    "name": "砂ヶ森漁港",
    "prefecture": "青森県",
    "lat": 40.983381,
    "lng": 140.951672,
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
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "砂ヶ森は漁港と地磯が隣り合う地形。港の小魚狙いと岩礁周辺の根魚狙いを分けて考え、釣り座は波止の内側を優先する。周囲の磯まで同じ条件で歩ける場所ではない。",
    "caution": [
      "波止外側のブロックや低い磯は足場条件が異なる。満潮・うねり時は近づかない。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorisunagamorigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.983381/140.951672/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorioodomarigyokou",
    "name": "大泊漁港",
    "prefecture": "青森県",
    "lat": 41.215144,
    "lng": 140.522046,
    "fish": [
      "マアジ",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "ウミタナゴ",
      "ホッケ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "大泊は港と低い岩礁帯が接するポイント。アジやウミタナゴのほか、アイナメ・ソイなどを狙う候補になる。まず港内で回収しやすい範囲を見つけ、周囲の磯への移動は別に判断する。",
    "caution": [
      "北側への車の進入には制約がある。南側でも駐車できると決めつけず、現地表示を確認する。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorioodomarigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.215144/140.522046/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomoriimabetugyokou",
    "name": "今別漁港",
    "prefecture": "青森県",
    "lat": 41.183208,
    "lng": 140.479667,
    "fish": [
      "マアジ",
      "カレイ",
      "クロダイ",
      "サヨリ",
      "ウミタナゴ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "今別の漁港では、カレイの底釣りやウミタナゴなどの岸釣りが候補。東側の小波止周辺も含め、当日の作業と立入条件を見て港内側の釣り座を選ぶ。",
    "caution": [
      "今別地区にはまき餌釣りの規制区域がある。最新の県の区域図を確認し、規制区域ではまき餌を使わない。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoriimabetugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.183208/140.479667/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorisitamaegyokou",
    "name": "下前漁港",
    "prefecture": "青森県",
    "lat": 41.121069,
    "lng": 140.270133,
    "fish": [
      "マアジ",
      "カレイ",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "マイワシ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "下前は規模の大きい港で、回遊魚・根魚・季節のイカなど対象が幅広い。外向きには大型の消波ブロックが並ぶため、港内側で足元の釣りと底物狙いを組み立てる。",
    "caution": [
      "広い港でも漁船と作業車が優先。外側のブロックには上がらず、通行する幅を空ける。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorisitamaegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.121069/140.270133/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorisyarikigyokou",
    "name": "車力漁港（車力サーフ）",
    "prefecture": "青森県",
    "lat": 40.972997,
    "lng": 140.313993,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage"
    ],
    "note": "車力は砂浜に囲まれた漁港。港内の小魚釣りと砂地のキス・カレイ狙いを使い分けられ、周囲のサーフとは風波の受け方が異なる。港の釣り座と海岸を混同しないで計画する。",
    "caution": [
      "南波止でも外向きの足場は別条件。高波時は内側なら安全と考えず中止する。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorisyarikigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.972997/140.313993/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorikitakanegasawagyokou",
    "name": "北金ヶ沢漁港",
    "prefecture": "青森県",
    "lat": 40.753028,
    "lng": 140.090253,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "アイナメ",
      "クロソイ",
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
    "note": "北金ヶ沢は大小の波止がある大きな港。アジなどの回遊魚と底物を狙う候補で、外向きの大型ブロックではなく内側の岸壁を中心に釣り座を検討する。",
    "caution": [
      "広い岸壁にも作業区画がある。釣り具や車で荷さばき・係留作業を妨げない。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorikitakanegasawagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.753028/140.090253/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomoritanosawagyokou",
    "name": "田野沢漁港",
    "prefecture": "青森県",
    "lat": 40.764031,
    "lng": 140.041201,
    "fish": [
      "マアジ",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "マサバ",
      "ウミタナゴ",
      "ホッケ",
      "ブリ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki"
    ],
    "note": "田野沢は外側の波返しが高く、内向きで釣りを考えたい港。アジ・サバの回遊やアイナメ・ソイなどの根魚が候補になり、先端まで行くことより安全に回収できる足場を優先する。",
    "caution": [
      "波返しには登らない。沖向きへ仕掛けを入れても回収できない位置を避ける。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoritanosawagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.764031/140.041201/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorikasosegyokou",
    "name": "風合瀬漁港",
    "prefecture": "青森県",
    "lat": 40.745111,
    "lng": 140.001569,
    "fish": [
      "マアジ",
      "クロダイ",
      "ウミタナゴ",
      "ホッケ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "風合瀬は道の駅に隣接する港で、港内側の小魚釣りと弁天島周辺の岩礁狙いを分けて考える場所。初めての釣行は港内の利用できる岸壁に絞り、磯へ無理に広げない。",
    "caution": [
      "道の駅の設備や駐車を釣り利用できるかは現地案内を確認。外向きブロックへは立ち入らない。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorikasosegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.745111/140.001569/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomoritodorokigyokou",
    "name": "驫木漁港",
    "prefecture": "青森県",
    "lat": 40.702065,
    "lng": 139.973116,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "ウミタナゴ",
      "ホッケ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "驫木は外側を高い波返しに囲まれた漁港。内向きの岸壁からウミタナゴなどを狙う計画に向き、外海側へ出ることを前提にしない。海況によっては港内にも波が回る。",
    "caution": [
      "波返しの上や外側へ移らない。荒天時は港内での釣りも見合わせる。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoritodorokigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.702065/139.973116/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorihirotogyokou",
    "name": "広戸漁港",
    "prefecture": "青森県",
    "lat": 40.669165,
    "lng": 139.940865,
    "fish": [
      "マアジ",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "ウミタナゴ",
      "ホッケ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "広戸は行合崎の付け根にある小規模な港。周囲の岩礁を意識し、港内の利用可能な岸壁からアイナメ・ソイやウミタナゴを狙う候補になる。",
    "caution": [
      "深浦地区のまき餌規制を確認する。路肩を駐車場として案内しないため、駐車先は別に確保する。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorihirotogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.669165/139.940865/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomoriyokoisogyokou",
    "name": "横磯漁港",
    "prefecture": "青森県",
    "lat": 40.632226,
    "lng": 139.892671,
    "fish": [
      "マアジ",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "アオリイカ",
      "ウミタナゴ",
      "ホッケ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "横磯は岩礁に囲まれた漁港で、根魚や秋のアオリイカが候補。港内でも砂地一様ではないため、仕掛けを入れる方向と回収できる範囲を明るいうちに確認したい。",
    "caution": [
      "横磯地区にはまき餌釣りの規制がある。釣法を決める前に県の最新区域図を確認する。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoriyokoisogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.632226/139.892671/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomoriiwasakigyokou",
    "name": "岩崎漁港",
    "prefecture": "青森県",
    "lat": 40.585995,
    "lng": 139.911768,
    "fish": [
      "マアジ",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "アオリイカ",
      "ウミタナゴ",
      "ホッケ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "岩崎は港と弁天島周辺の岩礁が接する地形。アイナメ・ソイなどの根魚と季節の回遊魚を狙う候補で、港内と磯では足場の難しさが変わる。",
    "caution": [
      "駐車できる余地は限られる。住民・漁業者の出入りを妨げず、低い磯へは無理に降りない。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoriiwasakigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.585995/139.911768/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-iwatehakozakisirahamagyokou",
    "name": "箱崎白浜漁港",
    "prefecture": "岩手県",
    "lat": 39.329584,
    "lng": 141.944175,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マサバ",
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
    "note": "箱崎白浜は大槌湾側の入り江にある漁港。岸壁の底物狙いとチカ・サバなどの回遊待ちを使い分ける。幹線道路から離れるため、到着前に進入路と帰路を確認しておきたい。",
    "caution": [
      "東側の外向きには不安定な消波ブロックがある。港内で使える区画を確認して釣る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatehakozakisirahamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.329584/141.944175/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatekariyadogyokou",
    "name": "仮宿漁港",
    "prefecture": "岩手県",
    "lat": 39.31491,
    "lng": 141.946857,
    "fish": [
      "マアジ",
      "カレイ",
      "アイナメ",
      "クロソイ",
      "マサバ",
      "ブリ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "仮宿は箱崎白浜側からアクセスする港で、湾奥の港とは潮の動きが異なる。サバなどの回遊に加え、アイナメやソイを岸壁沿いで狙う候補になる。",
    "caution": [
      "道順は明るいうちに確認する。潮通しのよさだけで先端へ進まず、当日の波と立入表示を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekariyadogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.31491/141.946857/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatekuwanohamagyokou",
    "name": "桑ノ浜漁港",
    "prefecture": "岩手県",
    "lat": 39.308701,
    "lng": 141.908169,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マサバ",
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
    "note": "桑ノ浜は両石湾の内側にある漁港。カレイ・アイナメなどの底物とチカ・サバの回遊狙いが候補で、湾内の作業船の動きを見ながら港内の釣り座を選ぶ。",
    "caution": [
      "湾奥でも係留索が水面下へ延びる。船の係留場所に仕掛けを通さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekuwanohamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.308701/141.908169/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatehiratagyokou",
    "name": "平田漁港（岩手県）",
    "prefecture": "岩手県",
    "lat": 39.24731,
    "lng": 141.890702,
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
    "note": "平田湾の奥にある港で、外海向きとは異なる穏やかな水面を選びやすい地形。カレイ・根魚のほかチカやアジなども候補だが、荒天時の安全な避難釣り場を意味するものではない。",
    "caution": [
      "外海が荒れている日は港内にも突風やうねりが入る。警報や作業中の区画を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatehiratagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.24731/141.890702/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateozakisirahamagyokou",
    "name": "尾崎白浜漁港",
    "prefecture": "岩手県",
    "lat": 39.238419,
    "lng": 141.923125,
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
    "note": "尾崎白浜は釜石湾に面した漁港。岸壁からの投げ釣りや根魚狙いを組み立てる候補で、幹線道路から離れた入り江のため道順も含めて釣行を準備したい。",
    "caution": [
      "夜間に初めて進入しない。荷揚げ場と係留船の間を釣り座にしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateozakisirahamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.238419/141.923125/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatetounigyokou",
    "name": "唐丹漁港",
    "prefecture": "岩手県",
    "lat": 39.209047,
    "lng": 141.887977,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マサバ",
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
    "note": "唐丹は花露辺側と本郷側に港の施設が広がる。岸壁ごとに船の作業と底の状態が異なるため、一帯を同じ釣り座として扱わず、利用できる区画を現地で選ぶ。",
    "caution": [
      "岸壁に車を置けるとは限らない。作業車の旋回範囲と通行路を必ず空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatetounigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.209047/141.887977/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatekojirahamagyokou",
    "name": "小白浜漁港",
    "prefecture": "岩手県",
    "lat": 39.206802,
    "lng": 141.868858,
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
    "note": "小白浜は唐丹湾の比較的大きな漁港。複数の波止と岸壁があり、底物・根魚と季節の回遊魚を狙い分ける。赤灯付近と南側では風の当たり方も変わる。",
    "caution": [
      "広い場所でも作業優先。車を横付けする前提にせず、荷さばきの妨げにならない利用を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekojirahamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.206802/141.868858/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatearakawagyokou",
    "name": "荒川漁港",
    "prefecture": "岩手県",
    "lat": 39.191637,
    "lng": 141.869545,
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
    "note": "荒川は唐丹湾にある小さな漁港。カレイやアイナメなどを港内側で探る候補で、広い釣り場を歩くより短い岸壁を丁寧に釣る計画に向く。",
    "caution": [
      "外向きの消波ブロックは足場が悪い。内側でも船の出入りとロープを確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatearakawagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.191637/141.869545/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateooisigyokou",
    "name": "大石漁港",
    "prefecture": "岩手県",
    "lat": 39.182672,
    "lng": 141.893728,
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
    "note": "大石は唐丹湾の入り江にある港。岸壁沿いの根魚と、カレイなどの底物やサバの回遊狙いが候補になる。港内と外向きでは足場・風波の条件を分けて考える。",
    "caution": [
      "夜間照明の稼働や夜釣り可否は未確認。初回は日中に進入路と帰路を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateooisigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.182672/141.893728/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatesennzaigyokou",
    "name": "千歳漁港",
    "prefecture": "岩手県",
    "lat": 39.162777,
    "lng": 141.895895,
    "fish": [
      "メバル",
      "アイナメ",
      "クロソイ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "千歳は吉浜湾側の小さな港で、周囲に岩礁がある。アイナメ・ソイなどを短い範囲で探る釣りを考えやすく、砂浜の投げ釣りとは根掛かりへの対応が異なる。",
    "caution": [
      "駐車余地は限られる。港内作業に支障が出る場合は釣りを見送る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatesennzaigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.162777/141.895895/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateyosihamagyokou",
    "name": "吉浜漁港",
    "prefecture": "岩手県",
    "lat": 39.143675,
    "lng": 141.840856,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "ヒラメ",
      "マサバ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "吉浜は湾奥の港で、北側に砂浜と河口がある。港内の根魚・小魚狙いと砂地の底物狙いを地形で分け、外側の大型ブロックへ出ない釣行計画を立てる。",
    "caution": [
      "河口や砂浜へ出る場合は増水・遊泳者にも注意。港内から海岸へ無断で横断しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateyosihamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.143675/141.840856/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatesakihamagyokou",
    "name": "崎浜漁港",
    "prefecture": "岩手県",
    "lat": 39.101258,
    "lng": 141.861262,
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
    "note": "崎浜は越喜来湾の大きな漁港。港内側に岸壁が広がり、アイナメ・ソイ・カレイや季節の小魚を狙う候補になる。船宿の乗船場所とは別に、岸釣りできる区画を確認する。",
    "caution": [
      "沖向きのブロックへは上がらない。出船・帰港の時間帯は乗船客と作業を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatesakihamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.101258/141.861262/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateokiraigyokou",
    "name": "越喜来漁港",
    "prefecture": "岩手県",
    "lat": 39.113646,
    "lng": 141.819592,
    "fish": [
      "マアジ",
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "ヒラメ",
      "マサバ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "越喜来は湾奥の浦浜川河口に近い港。港内の根魚と底物を狙う候補で、雨後は河川からの濁りや流木によって状況が変わる。",
    "caution": [
      "河川増水後は水位と流木に注意。駐車や岸壁利用は現地の案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateokiraigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.113646/141.819592/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateonizawagyokou",
    "name": "鬼沢漁港",
    "prefecture": "岩手県",
    "lat": 39.087536,
    "lng": 141.811287,
    "fish": [
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
    "note": "鬼沢は越喜来湾の漁港。波止と港内岸壁でアイナメ・ソイなどの根魚やカレイを狙う候補で、低い部分があっても足場の安全性を一律には判断しない。",
    "caution": [
      "波返しの高さが変わる部分でも登らない。船の作業と係留索を避ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateonizawagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.087536/141.811287/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatekoisihamagyokou",
    "name": "小石浜漁港",
    "prefecture": "岩手県",
    "lat": 39.076459,
    "lng": 141.822252,
    "fish": [
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
    "note": "小石浜は越喜来湾の小さな港。港内岸壁から根魚やチカなどを狙う候補で、遠投よりも足元の変化を丁寧に探る釣りを組み立てたい。",
    "caution": [
      "ブロックが少ない場所でも転落の危険はある。救命具を着用し、作業区画を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekoisihamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.076459/141.822252/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatesunagohamagyokou",
    "name": "砂子浜漁港",
    "prefecture": "岩手県",
    "lat": 39.074211,
    "lng": 141.840448,
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
    "note": "砂子浜は幹線道路から少し離れた越喜来湾の港。港内岸壁の根魚や小魚のほか季節のイカも候補で、出入口と釣り座を日中に確認しておきたい。",
    "caution": [
      "夜釣りや照明の条件は確認が必要。人の少ない時間帯も単独で危険な場所へ進まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatesunagohamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.074211/141.840448/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatealtutarigyokou",
    "name": "合足漁港",
    "prefecture": "岩手県",
    "lat": 39.034303,
    "lng": 141.768351,
    "fish": [
      "カレイ",
      "アイナメ",
      "クロソイ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "合足は砂地と岩場が混じる入り江の港。カレイの底釣りとアイナメ・ソイの根魚狙いを、底質に合わせて分けることが大切になる。",
    "caution": [
      "外向きの消波ブロックへは上がらず、港内の利用できる足場を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatealtutarigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.034303/141.768351/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatesotogutigyokou",
    "name": "外口漁港",
    "prefecture": "岩手県",
    "lat": 39.019417,
    "lng": 141.760197,
    "fish": [
      "メバル",
      "アイナメ",
      "クロソイ",
      "マサバ",
      "チカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure"
    ],
    "note": "外口は周囲に岩礁がある小規模な漁港。港内岸壁を中心に根魚や季節の小魚を探る候補で、港外へ出るほど条件が変わることを意識したい。",
    "caution": [
      "潮通しのよい先端ほど安全とは限らない。風波と当日の立入表示を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatesotogutigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.019417/141.760197/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatenagasakigyokou",
    "name": "長崎漁港（岩手県）",
    "prefecture": "岩手県",
    "lat": 39.020384,
    "lng": 141.753566,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マサバ",
      "チカ",
      "ヤリイカ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "岩手の長崎漁港は岩礁に囲まれた港。岸壁沿いのアイナメ・ソイと底のカレイ、季節の回遊魚を狙う候補で、魚種ごとに探る深さを変える釣行を組み立てる。",
    "caution": [
      "波止先端や外側へ無理に進まない。同名の港が各地にあるため目的地の県を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatenagasakigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.020384/141.753566/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatetakonouragyokou",
    "name": "蛸ノ浦漁港",
    "prefecture": "岩手県",
    "lat": 39.030703,
    "lng": 141.738374,
    "fish": [
      "マアジ",
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
    "note": "蛸ノ浦は大船渡湾東側の港。複数の岸壁・波止があるため、船の利用を見ながら岸壁際の根魚と小魚狙いを使い分けたい。",
    "caution": [
      "年によって回遊する魚は変わる。イカなど特定魚の釣果を前提にせず直近情報を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatetakonouragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.030703/141.738374/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatesimofunatogyokou",
    "name": "下船渡漁港",
    "prefecture": "岩手県",
    "lat": 39.038603,
    "lng": 141.723225,
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
    "note": "下船渡は大船渡湾西側の漁港。港を囲む低い波止と岸壁があり、カレイ・根魚・季節の小魚を狙う候補になる。高さが低い足場ほど波の変化にも注意したい。",
    "caution": [
      "低い波止ではうねりの回り込みに注意。水面が穏やかでも突風時は撤収する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatesimofunatogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.038603/141.723225/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateakadokuragyokou",
    "name": "赤土倉漁港",
    "prefecture": "岩手県",
    "lat": 39.001343,
    "lng": 141.737752,
    "fish": [
      "メバル",
      "アイナメ",
      "クロソイ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "赤土倉は港内岸壁の根魚狙いを考えたい漁港。外側には大きな消波ブロックがあるため、魚を追って外向きへ移る計画にはしない。",
    "caution": [
      "港内作業が多い場所。漁業者の動線を最優先し、大型ブロックには立ち入らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateakadokuragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.001343/141.737752/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatetomarigyokou",
    "name": "泊里漁港",
    "prefecture": "岩手県",
    "lat": 38.991187,
    "lng": 141.728911,
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
    "note": "泊里は外側の波返しが非常に高く、港内側を中心に考える漁港。周囲の岩礁を意識した根魚狙いとカレイなどの底物が候補になる。",
    "caution": [
      "高い波返しには登らず、港外へ投げ越さない。内側でも取り込み経路を先に確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatetomarigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.991187/141.728911/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatekadonohamagyokou",
    "name": "門之浜漁港",
    "prefecture": "岩手県",
    "lat": 38.996874,
    "lng": 141.718891,
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
    "note": "門之浜は複数の波止がある大きな漁港。カレイ・根魚から季節の小魚まで候補が幅広く、釣り方より先に使える岸壁と作業のない時間を確認したい。",
    "caution": [
      "波止手前の駐車余地は大きくない。港の広さを駐車可能台数と混同しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekadonohamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.996874/141.718891/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatetadaidegyokou",
    "name": "只出漁港",
    "prefecture": "岩手県",
    "lat": 38.984332,
    "lng": 141.711102,
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
    "note": "只出は外側を大型の消波ブロックに囲まれた港。港内岸壁からカレイやアイナメ・ソイ、回遊する小魚を狙う計画を立てる。",
    "caution": [
      "外側のブロックには上がらない。内側の広い場所も作業優先で利用する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatetadaidegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.984332/141.711102/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatemutugauragyokou",
    "name": "六ヶ浦漁港",
    "prefecture": "岩手県",
    "lat": 38.965499,
    "lng": 141.705887,
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
    "note": "六ヶ浦は広田半島の比較的大きな漁港。岸壁の根魚、底のカレイ、回遊するアジ・サバなど対象が分かれるため、当日の水色と小魚の有無で釣り方を選ぶ。",
    "caution": [
      "白灯側の駐車余地は限られる。広い港でも漁業者の通路をふさがない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatemutugauragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.965499/141.705887/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatehirotagyokou",
    "name": "広田漁港",
    "prefecture": "岩手県",
    "lat": 38.952851,
    "lng": 141.691511,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "チカ",
      "ウミタナゴ",
      "ヤリイカ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "広田は広田半島の大規模な漁港。複数の岸壁があるが、釣りに使える場所と作業場所を分けて考える必要がある。根魚やカレイなどの底物が釣行の候補。",
    "caution": [
      "岸壁を移るたびに立入表示と作業状況を確認する。港全体が釣り専用施設ではない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatehirotagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.952851/141.691511/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateooyougyokou",
    "name": "大陽漁港",
    "prefecture": "岩手県",
    "lat": 38.970704,
    "lng": 141.677434,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "大陽は広田半島の小さな港。外側には大きく高い消波ブロックがあるため、港内側の岸壁でアイナメ・ソイなどを探る釣行を考える。",
    "caution": [
      "波返しや外側のブロックには上がらない。利用可能な港内区画がなければ移動する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateooyougyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.970704/141.677434/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateryougaegyokou",
    "name": "両替漁港",
    "prefecture": "岩手県",
    "lat": 38.999776,
    "lng": 141.678293,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "チカ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure"
    ],
    "note": "両替は岸壁・波止から根魚やカレイ、チカなどを狙う候補。西側の波止手前には漁業施設があるため、釣り座だけでなく通行する経路も確認したい。",
    "caution": [
      "漁業施設の出入口や荷物を置く場所を空け、作業開始時は速やかに片付ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateryougaegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.999776/141.678293/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagimurohamagyokou",
    "name": "室浜漁港",
    "prefecture": "宮城県",
    "lat": 38.338071,
    "lng": 141.168201,
    "fish": [
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "マサバ",
      "マイワシ",
      "サヨリ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "uki"
    ],
    "note": "室浜は宮戸島にある漁港。根魚と回遊魚の両方が候補で、港の内向きと外海側で風波の条件が変わる。初回は港内の平らな岸壁を中心に計画する。",
    "caution": [
      "山越えの経路や不明な踏み跡を近道に使わない。港内から確認できる正規の通路を利用する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagimurohamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.338071/141.168201/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagitukihamagyokou",
    "name": "月浜漁港",
    "prefecture": "宮城県",
    "lat": 38.324387,
    "lng": 141.157258,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "月浜は砂浜に隣接する宮戸島の港。岩礁沿いの根魚と砂地のカレイ・ヒラメなどで狙う方向が変わるため、底の状態を確かめながら釣りを組み立てる。",
    "caution": [
      "隣の海岸に遊泳者がいる場合は投げない。低い足場と波の回り込みにも注意する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagitukihamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.324387/141.157258/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-miyagitounagyokou",
    "name": "東名浜漁港",
    "prefecture": "宮城県",
    "lat": 38.3602,
    "lng": 141.135585,
    "fish": [
      "マハゼ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "東名浜は松島湾内にある港で、ハゼ狙いを考えたい場所。沖の大物狙いよりも、岸壁周りの底を短い距離で探る釣行に向く地形を確認する。",
    "caution": [
      "係留船やロープの間へ投げ込まない。干潮時は足元の水深と回収経路を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagitounagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.3602/141.135585/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibafutomikou",
    "name": "太海港",
    "prefecture": "千葉県",
    "lat": 35.076721,
    "lng": 140.100703,
    "fish": [
      "マアジ",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "太海は仁右衛門島との水道に面した小さな港。アジやクロダイが候補になる一方、釣り座は限られる。乗船場所・漁業作業と岸釣りの利用を分けて考えたい。",
    "caution": [
      "駐車は有料利用の案内があるが、最新料金と利用条件は現地で確認。島への渡船動線を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibafutomikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.076721/140.100703/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibahamanamekawakou",
    "name": "浜行川港",
    "prefecture": "千葉県",
    "lat": 35.121734,
    "lng": 140.234385,
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
    "note": "浜行川は小規模で釣り座が限られる港。アジ・クロダイ・メジナや季節のアオリイカが候補で、波止へ進む前に港内の利用条件と混雑を確認したい。",
    "caution": [
      "駐車条件は変動するため現地で確認。満員の釣り座へ無理に割り込まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibahamanamekawakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.121734/140.234385/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibayosiokou",
    "name": "吉尾港",
    "prefecture": "千葉県",
    "lat": 35.137335,
    "lng": 140.287342,
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
    "note": "吉尾は小さな港で、アジ・クロダイ・メジナなどを狙う候補。東側の波止周辺と港内側を、当日の波・作業・立入表示に合わせて選ぶ。",
    "caution": [
      "小さな港のため釣り具を広げすぎない。係留・荷さばきが始まったら場所を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibayosiokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.137335/140.287342/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibakawadukou",
    "name": "川津港",
    "prefecture": "千葉県",
    "lat": 35.144547,
    "lng": 140.326395,
    "fish": [
      "マアジ",
      "クロダイ",
      "ヒラメ",
      "サヨリ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "川津はアジやサヨリなどの回遊とクロダイ・メジナ狙いが候補。先端に人が集まっていても、港内の利用できる足場と取り込み経路を先に確認したい。",
    "caution": [
      "外側のテトラへは移らない。駐車料金と利用時間は最新の案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibakawadukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.144547/140.326395/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibaiwawadakou",
    "name": "岩和田港",
    "prefecture": "千葉県",
    "lat": 35.180333,
    "lng": 140.365598,
    "fish": [
      "マアジ",
      "クロダイ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "岩和田は港内のアジ・サヨリ・クロダイ狙いを考えたい漁港。外側のテトラ帯とは分け、港内で足場と船の出入りを確認して釣り座を選ぶ。",
    "caution": [
      "車を止められそうな場所でも作業区画の場合がある。駐車と釣りの可否をそれぞれ確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaiwawadakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.180333/140.365598/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibaiwafunekou",
    "name": "岩船港",
    "prefecture": "千葉県",
    "lat": 35.209055,
    "lng": 140.392699,
    "fish": [
      "マアジ",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "千葉の岩船港は小規模で、アジやクロダイを狙う候補。波止先端へ集中しやすいため、釣り座の余裕と回収方向を確認してから竿を出す。",
    "caution": [
      "狭い足場で荷物を広げない。同名の港があるため、千葉県の目的地であることを確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibaiwafunekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.209055/140.392699/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokausamigyokou",
    "name": "宇佐美漁港",
    "prefecture": "静岡県",
    "lat": 35.007661,
    "lng": 139.091506,
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
    "note": "宇佐美は港内の小魚狙いと隣接する砂浜のキス狙いを分けて考える場所。赤灯側の外向きにはブロックが多く、港内側を中心に釣行を組み立てる。",
    "caution": [
      "波止手前の駐車余地は少ない。路上駐車を避け、海岸利用者と距離を取る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba8/sizuokausamigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.007661/139.091506/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokaitoukou",
    "name": "伊東港",
    "prefecture": "静岡県",
    "lat": 34.970656,
    "lng": 139.106569,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "ヒラメ",
      "マゴチ",
      "マサバ",
      "マイワシ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "伊東港は複数の波止・岸壁を持つ大きな港。港内の小魚釣りと底のキス・カレイ狙いを中心に、当日の作業と立入条件で釣り座を選ぶ。周囲のテトラ帯を一括して釣り場とは扱わない。",
    "caution": [
      "釣り座ごとに駐車・立入条件を確認。松川河口周辺は増水と流木にも注意する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba8/sizuokaitoukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.970656/139.106569/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-sizuokaatagawateibou",
    "name": "熱川堤防",
    "prefecture": "静岡県",
    "lat": 34.813698,
    "lng": 139.072237,
    "fish": [
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "ヒラメ",
      "マゴチ",
      "ブリ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "熱川の海岸に隣接する堤防。砂地のキスなどと季節のアオリイカが候補だが、砂浜側は海水浴やサーフィンとの利用調整が欠かせない。",
    "caution": [
      "海水浴期間の区画と釣り制限を確認する。遊泳者・サーファーがいる範囲では竿を出さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba8/sizuokaatagawateibou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.813698/139.072237/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-eeinukuma",
    "name": "犬熊漁港",
    "prefecture": "福井県",
    "lat": 35.529886,
    "lng": 135.792153,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "アオリイカ",
      "アカカマス"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "犬熊は若狭の入り江にある港。小アジやアオリイカなどの釣り情報があるが、県の注意に従い、防波堤・消波ブロックではなく港内の利用可能区画を確認して計画する。",
    "caution": [
      "清掃協力金等の最新条件を確認。防波堤や立入禁止区画には進まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/eeinukuma.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.529886/135.792153/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用と立入・釣りの注意",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "coast-eeanou",
    "name": "阿納漁港",
    "prefecture": "福井県",
    "lat": 35.536242,
    "lng": 135.785909,
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "アカカマス"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "阿納は海上釣り堀と岸釣りの利用を区別したい港。アジやイカの釣り情報がある一方、釣り堀の施設利用が周辺岸壁の許可を意味するわけではない。",
    "caution": [
      "防波堤へは入らず、釣り堀と駐車・岸釣りの条件をそれぞれ確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/eeanou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.536242/135.785909/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用と立入・釣りの注意",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "coast-fukuiukugyokou",
    "name": "宇久漁港",
    "prefecture": "福井県",
    "lat": 35.546771,
    "lng": 135.754173,
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
    "note": "宇久は小魚・キス・季節のイカが候補になる若狭の港。県の注意に従い、港内岸壁の利用条件を確認してから釣行を組み立てる。",
    "caution": [
      "防波堤・消波ブロックへは進まない。清掃協力金などの扱いは現地の最新案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/fukuiukugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.546771/135.754173/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用と立入・釣りの注意",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "coast-eenisizu",
    "name": "西津漁港",
    "prefecture": "福井県",
    "lat": 35.518203,
    "lng": 135.75074,
    "fish": [
      "マアジ",
      "クロダイ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "西津はアジやコウイカなどの釣り情報がある小浜の港。船宿の乗船動線もあるため、港内岸壁の岸釣りと出船準備を分けて考えたい。",
    "caution": [
      "防波堤には立ち入らない。清掃協力金・駐車・利用可能岸壁は現地で確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/eenisizu.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.518203/135.75074/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用と立入・釣りの注意",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "coast-eeobama",
    "name": "小浜新港",
    "prefecture": "福井県",
    "lat": 35.500998,
    "lng": 135.736063,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "小浜新港は広い港内に岸壁と乗船施設がある。小アジ、キス、季節のイカなどを候補に、漁業・船宿の利用区画を避けて岸釣りできる場所を確認する。",
    "caution": [
      "防波堤や作業岸壁には進まない。周辺施設の駐車場は釣り専用ではないため利用条件を守る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/eeobama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.500998/135.736063/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用と立入・釣りの注意",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "coast-fukuiokodu",
    "name": "岡津漁港",
    "prefecture": "福井県",
    "lat": 35.482671,
    "lng": 135.655746,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "カサゴ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging"
    ],
    "note": "岡津は小規模な港で、アジ・キス・根魚などの釣り情報がある。駐車余地が乏しく、現地へ着いてから車を置く場所を探す計画は避けたい。",
    "caution": [
      "駐車先を確保できない場合は利用しない。防波堤・消波ブロックへは立ち入らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/fukuiokodu.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.482671/135.655746/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用と立入・釣りの注意",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "coast-eewada",
    "name": "和田漁港",
    "prefecture": "福井県",
    "lat": 35.494849,
    "lng": 135.57646,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
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
    "note": "和田は若狭和田の港で、港内の小魚やキス狙いが候補。外側の大きなテトラ帯とは区別し、港内岸壁の利用条件を確認したい。",
    "caution": [
      "防波堤へは進まない。岸壁に駐車できると考えず、正規の駐車先と利用時間を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba/eewada.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.494849/135.57646/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用と立入・釣りの注意",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "coast-fukuihibikigyokou",
    "name": "日引漁港",
    "prefecture": "福井県",
    "lat": 35.542912,
    "lng": 135.47591,
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
    "note": "日引は市街地から離れた入り江の港。アジや季節のイカの釣り情報があるが、港内岸壁を利用できるかを先に確認し、日中に進入路を把握したい。",
    "caution": [
      "過去の手すり・駐車料金情報を現在の安全保証にしない。防波堤へは入らず最新条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/fukuihibikigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.542912/135.47591/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用と立入・釣りの注意",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "coast-fukuiuwasegyokou",
    "name": "上瀬漁港",
    "prefecture": "福井県",
    "lat": 35.55131,
    "lng": 135.479386,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "カサゴ",
      "キジハタ",
      "クロダイ",
      "アオリイカ",
      "マゴチ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "上瀬は市街地から離れた港で、アオリイカやメジナの釣り情報がある。岸釣り可能な港内区画と駐車先を確認してから向かいたい。",
    "caution": [
      "防波堤へは立ち入らない。過去の料金・釣果に頼らず、現地の利用条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/fukuiuwasegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.55131/135.479386/&base=std&ls=std&disp=1"
      },
      {
        "label": "福井県：漁港利用と立入・釣りの注意",
        "url": "https://www.pref.fukui.lg.jp/doc/suisan/gyokousenyou/fishingport.html"
      }
    ]
  },
  {
    "slug": "coast-oosakatajiri",
    "name": "田尻漁港",
    "prefecture": "大阪府",
    "lat": 34.398518,
    "lng": 135.287082,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
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
    "note": "田尻は海上釣り堀と通常の漁港利用が共存する港。岸釣りではアジなどの小魚や底物が候補だが、釣り堀の駐車・施設とは別の利用条件になる。",
    "caution": [
      "釣り堀客用の駐車場を岸釣りに流用しない。りんくう側を含め正規の駐車条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://osaka.turihiroba.com/turiba/oosakatajiri.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.398518/135.287082/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-oosakaokadaura",
    "name": "岡田浦漁港",
    "prefecture": "大阪府",
    "lat": 34.390054,
    "lng": 135.273671,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "カサゴ",
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
    "note": "岡田浦は港内の小魚狙いと外側の釣り場条件が大きく異なる港。初回はテトラ帯へ出ず、港内で利用できる岸壁からアジなどを探る計画にしたい。",
    "caution": [
      "並んだテトラでも安全な足場とは限らない。港内の立入表示と漁業作業を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://osaka.turihiroba.com/turiba/oosakaokadaura.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.390054/135.273671/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-oosakatanigawagyokou",
    "name": "谷川港",
    "prefecture": "大阪府",
    "lat": 34.321358,
    "lng": 135.121386,
    "fish": [
      "マアジ",
      "メバル",
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
    "note": "谷川は両側の波止と東側の砂利浜がある港。港内の海上釣り堀とは区別し、岸釣りできる区画を確認して小魚や根魚を狙う。",
    "caution": [
      "波止へ向かう道は狭い。駐車料金・利用時間は最新案内を確認し、釣り堀専用区画を使わない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://osaka.turihiroba.com/turiba/oosakatanigawagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.321358/135.121386/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimanyougakou",
    "name": "生口島・名荷港",
    "prefecture": "広島県",
    "lat": 34.314074,
    "lng": 133.123226,
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サヨリ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "名荷は生口島・因島・佐木島の水道に面した港。キス・カレイなどの底物や小魚が候補だが、潮が速く複雑に動く時間帯は仕掛けの管理が難しい。",
    "caution": [
      "先端を目指すより潮と船の動きを優先。海へ張り出す仕掛けで航行を妨げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/hirosimanyougakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.314074/133.123226/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimayanaidukou",
    "name": "柳津港",
    "prefecture": "広島県",
    "lat": 34.43316,
    "lng": 133.266671,
    "fish": [
      "クロダイ",
      "サヨリ",
      "マハゼ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage",
      "uki"
    ],
    "note": "柳津は松永湾の奥にある浅い港。ハゼやサヨリ、クロダイなどを候補に、潮位によって変わる水深を見て釣り座を考える。",
    "caution": [
      "干潮時に干出部へ降りない。水深が足りない場合は無理に沖へ出ず時間を変える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/hirosimayanaidukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.43316/133.266671/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimasikina",
    "name": "敷名の波止",
    "prefecture": "広島県",
    "lat": 34.376755,
    "lng": 133.322268,
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ",
      "コウイカ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "敷名は内海大橋の本土側にある小さな波止。キス・カレイの投げ釣りが候補だが、釣り座と駐車余地は限られるため、少人数で短い範囲を探る計画にしたい。",
    "caution": [
      "満員時に無理に竿を出さない。橋周辺の通行・駐車を妨げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/hirosimasikina.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.376755/133.322268/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-hirosimaiwafunegyokou",
    "name": "岩船漁港",
    "prefecture": "広島県",
    "lat": 34.379589,
    "lng": 133.333447,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "広島の岩船は小規模な港で、アジ・サヨリ・メバルや季節のイカが候補。先端に集中せず、港内側で回収できる釣り座を選ぶ。",
    "caution": [
      "同名の港があるため広島県の位置を確認。係留・荷さばきの区画を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/hirosimaiwafunegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.379589/133.333447/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimanotoharakou",
    "name": "能登原港（阿伏兎港）",
    "prefecture": "広島県",
    "lat": 34.377074,
    "lng": 133.345807,
    "fish": [
      "メバル",
      "カサゴ",
      "クロダイ",
      "アオリイカ",
      "コウイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "能登原・阿伏兎は東側の波止途中にフェンスがある港。掲載位置はその手前側で、先端へは進まない。港内では根魚や季節のイカが候補になる。",
    "caution": [
      "フェンスの先には立ち入らない。手前側も新たな表示・作業があれば利用を控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/hirosimanotoharakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.377074/133.345807/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimatajirikou",
    "name": "田尻港",
    "prefecture": "広島県",
    "lat": 34.420576,
    "lng": 133.38634,
    "fish": [
      "マアジ",
      "クロダイ",
      "マイワシ",
      "サヨリ",
      "コウイカ",
      "マハゼ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "福山の田尻は港内岸壁と波止がある漁港。アジ・サヨリの回遊とハゼなどの底釣りを、水面の様子と潮位で使い分けたい。",
    "caution": [
      "大阪の田尻漁港とは別地点。駐車・立入条件はこの港の現地表示を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/hirosimatajirikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.420576/133.38634/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutoriousakagyokou",
    "name": "逢坂漁港",
    "prefecture": "鳥取県",
    "lat": 35.529258,
    "lng": 133.565383,
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
    "note": "逢坂は複数の波止がある港で、アジやメバル、季節のアオリイカが候補。外側のテトラ帯は高さがあるため、港内側で釣りを組み立てる。",
    "caution": [
      "白灯側・赤灯側ともブロックへ上がらない。外海のうねりが強い日は利用を見送る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutoriousakagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.529258/133.565383/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutorimikuriyagyokou",
    "name": "御来屋漁港",
    "prefecture": "鳥取県",
    "lat": 35.513068,
    "lng": 133.495517,
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
    "note": "御来屋は沖へ伸びる波止と港内岸壁がある港。アジ・メバルやイカの釣り情報があるが、外海の波を受けるため穏やかな日の港内側を中心に考える。",
    "caution": [
      "波をかぶる状態では釣らない。先端へ行けることを前提にせず立入表示を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutorimikuriyagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.513068/133.495517/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutorihiratagyokou",
    "name": "平田漁港（鳥取県）",
    "prefecture": "鳥取県",
    "lat": 35.480924,
    "lng": 133.431895,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "鳥取の平田は小さな港で、アジやメバル、季節のイカが候補。沖へ伸びる波止が目立つが、アクセス道路と足場を先に確認したい。",
    "caution": [
      "進入路は狭い。すれ違いや漁業車両の通行を妨げず、荒天時は利用しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutorihiratagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.480924/133.431895/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutoriyodoegyokou",
    "name": "淀江漁港",
    "prefecture": "鳥取県",
    "lat": 35.463938,
    "lng": 133.427153,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ",
      "スズキ",
      "サワラ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "淀江は浅めの海域に面した港。アジなどの回遊魚と砂地のキス・カレイを狙い分ける候補で、港内側から底質と潮位を確認する。",
    "caution": [
      "平らな波止でも転落防止は必要。先端の立入条件と波の回り込みを確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutoriyodoegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.463938/133.427153/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutorihiedugyokou",
    "name": "日吉津漁港",
    "prefecture": "鳥取県",
    "lat": 35.454273,
    "lng": 133.387585,
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
    "note": "日吉津は日野川と佐陀川の河口の間にある小さな港。港内のアジやキス狙いと河口の釣りは、流れ・増水・足場を分けて判断したい。",
    "caution": [
      "河川増水後は港周辺にも流木が来る。テトラへ渡らず安全な岸壁から利用する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutorihiedugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.454273/133.387585/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-toltutorinakanokou",
    "name": "中野港",
    "prefecture": "鳥取県",
    "lat": 35.535544,
    "lng": 133.246157,
    "fish": [
      "マアジ",
      "クロダイ",
      "コウイカ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "中野は岸壁からアジや季節のコウイカを狙う候補。港湾作業と共用する場所のため、車の横付けを前提にせず当日の利用できる範囲を確認する。",
    "caution": [
      "荷役・車両の通行を優先する。岸壁の縁に車を寄せず正規の駐車条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutorinakanokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.535544/133.246157/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-simanesudugyokou",
    "name": "須津漁港",
    "prefecture": "島根県",
    "lat": 34.77405,
    "lng": 131.914086,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "須津は赤灯側の波止が目立つ港。アジや季節のアオリイカなどが候補で、先端の釣果だけを頼りにせず港内で利用できる足場を確認する。",
    "caution": [
      "波止先端の立入・波況を確認。風やうねりが強ければ港内でも釣りを見送る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simanesudugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.77405/131.914086/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchinakanouragyokou",
    "name": "中浦漁港",
    "prefecture": "山口県",
    "lat": 34.006815,
    "lng": 131.525252,
    "fish": [
      "メバル",
      "カサゴ",
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "中浦は西側の波止と港内側を中心に、カサゴ・メバルや季節のイカを狙う候補。足元の根を確かめながら釣り座を選びたい。",
    "caution": [
      "係留船・ロープを避け、作業中の岸壁へ仕掛けを入れない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchinakanouragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.006815/131.525252/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchiaratakou",
    "name": "荒田港",
    "prefecture": "山口県",
    "lat": 33.926518,
    "lng": 130.89901,
    "fish": [
      "マアジ",
      "クロダイ",
      "コウイカ",
      "カワハギ",
      "サワラ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "荒田は白灯側の波返しが高く狭い港。港内岸壁のアジや季節のコウイカを中心に、無理なく回収できる釣り座を選ぶ。",
    "caution": [
      "波返しには登らない。先端が混んでいても狭い外側へ回り込まない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiaratakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.926518/130.89901/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchikozukunohato",
    "name": "古宿の波止",
    "prefecture": "山口県",
    "lat": 34.063379,
    "lng": 130.905232,
    "fish": [
      "クロダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging",
      "uki"
    ],
    "note": "古宿は下関フィッシングパーク東側の小さな波止。クロダイや季節のアオリイカが候補だが、公園施設とは別の釣り場として利用条件を確認する。",
    "caution": [
      "フィッシングパーク利用者専用駐車場は使わない。路肩駐車を前提にせず駐車先がなければ利用しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchikozukunohato.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.063379/130.905232/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-yamaguchiawanogyokou",
    "name": "粟野漁港",
    "prefecture": "山口県",
    "lat": 34.360266,
    "lng": 130.972695,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "粟野は粟野川の河口にある港。河川の流れと海の潮が重なるため、アジ・サヨリの回遊とクロダイなどで狙う棚を変える。",
    "caution": [
      "増水時や流木が多い日は釣りを控える。岸壁の作業区画を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiawanogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.360266/130.972695/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchiigamigyokou",
    "name": "伊上漁港",
    "prefecture": "山口県",
    "lat": 34.373107,
    "lng": 131.022155,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "伊上は北側の波止と岸壁がある港。小魚、メバル、キスや季節のイカを狙う候補で、港内側の足場から当日の状況を確認する。",
    "caution": [
      "低い波返しでも安全保証にはならない。波の回り込みと係留作業を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiigamigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.373107/131.022155/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchikakebutigyokou",
    "name": "掛渕漁港",
    "prefecture": "山口県",
    "lat": 34.377959,
    "lng": 131.037412,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "掛渕は掛渕川河口の港。川からの流れや濁りが入り、アジ・サヨリ、底のキス・カレイなどを状況に応じて狙い分ける。",
    "caution": [
      "大雨後の増水・流木に注意。河口へ近づく前に潮位と帰路を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchikakebutigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.377959/131.037412/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchikuharagyokou",
    "name": "久原漁港",
    "prefecture": "山口県",
    "lat": 34.399031,
    "lng": 131.002629,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ブリ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "久原は西側の波止と港内側が釣行の候補。アジ・メバル、キス・カレイなど対象が分かれるため、足元の様子と底質で釣り方を選びたい。",
    "caution": [
      "照明の稼働や夜間利用は未確認。初回は明るいうちに足場と駐車条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchikuharagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.399031/131.002629/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchioohibigyokou",
    "name": "大日比漁港",
    "prefecture": "山口県",
    "lat": 34.410096,
    "lng": 131.208515,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "大日比は南側の白灯付近と港内側を中心に考える港。アジやメバル、季節のイカが候補になるが、外向きのブロックには立ち入らない計画にする。",
    "caution": [
      "整然と並ぶブロックでも滑落の危険がある。平らな内側の利用条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchioohibigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.410096/131.208515/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchinobasegyokou",
    "name": "野波瀬漁港",
    "prefecture": "山口県",
    "lat": 34.381501,
    "lng": 131.248684,
    "fish": [
      "マアジ",
      "シロギス",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "野波瀬は港の両側の波止と周辺護岸がある。アジ・サヨリ、キスや季節のイカを候補に、港内の作業と護岸の足場を分けて確認したい。",
    "caution": [
      "港の東側護岸も立入条件を別に確認。隣接しているだけで自由に移動できるとは限らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchinobasegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.381501/131.248684/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchiyomenakigyokou",
    "name": "嫁泣漁港",
    "prefecture": "山口県",
    "lat": 34.449051,
    "lng": 131.413951,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "嫁泣は赤灯側と白灯側で足場・進入条件が異なる港。アジやキスなどを狙う場合も、大きなブロックのある外向きではなく内側の足場を選ぶ。",
    "caution": [
      "赤灯側は駐車余地が限られる。トイレ・駐車の利用可否は最新の現地案内で確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiyomenakigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.449051/131.413951/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchiooiuragyokou",
    "name": "大井浦漁港",
    "prefecture": "山口県",
    "lat": 34.470547,
    "lng": 131.439464,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "大井浦は波止から小魚・底物・季節のイカを狙う候補。釣り座を決める前に、港内作業と駐車先を確認しておきたい。",
    "caution": [
      "西側には釣り人向けの大きな駐車余地がない。路上駐車や出入口の占有をしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiooiuragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.470547/131.439464/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitaarajirokou",
    "name": "荒代港",
    "prefecture": "大分県",
    "lat": 33.07002,
    "lng": 131.942689,
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
    "note": "荒代は四浦半島北側の小さな港。アジやメバル、キスなどが候補で、少人数で釣り座を譲り合う計画に向く。",
    "caution": [
      "駐車場には利用時間の制限情報がある。最新の開閉時間を確認し、夜通し利用を前提にしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitaarajirokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.07002/131.942689/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitanisidomarikou",
    "name": "西泊港",
    "prefecture": "大分県",
    "lat": 33.093142,
    "lng": 131.995926,
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
    "note": "西泊は四浦半島先端側の小さな港。アジ・メバルや季節のアオリイカを港内側から探る候補になる。",
    "caution": [
      "波止先端から外側のブロックは足場が悪い。内側の利用できる区画にとどまる。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitanisidomarikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.093142/131.995926/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitamamotokou",
    "name": "間元港",
    "prefecture": "大分県",
    "lat": 33.095892,
    "lng": 132.001162,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "ブリ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "間元は四浦半島先端付近の港。アジやメジナ、季節のイカが候補で、港内と外海側の潮・波を分けて釣り座を判断したい。",
    "caution": [
      "先端の釣果を安全性の目安にしない。作業と立入表示を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitamamotokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.095892/132.001162/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitakamadokou",
    "name": "蒲戸港",
    "prefecture": "大分県",
    "lat": 33.055742,
    "lng": 131.997428,
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
    "note": "蒲戸は四浦半島南側の港。外向きには大型の消波ブロックがあるため、港内のアジ・メバル・季節のイカ狙いを中心に考える。",
    "caution": [
      "沖向きのブロックには上がらない。港内も係留索と作業船の動きを確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakamadokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.055742/131.997428/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitanatuikou",
    "name": "夏井港",
    "prefecture": "大分県",
    "lat": 33.052558,
    "lng": 131.945586,
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
    "note": "夏井は四浦半島の付け根側にある港。アジ・メバルやアオリイカを狙う候補で、半島先端まで足を延ばさず港内の状況を確認する釣行を考えられる。",
    "caution": [
      "波止先端の利用条件と風波を確認。平らな場所でも救命具を着用する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitanatuikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.052558/131.945586/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitanabutokou",
    "name": "浪太港",
    "prefecture": "大分県",
    "lat": 33.028167,
    "lng": 131.920416,
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
    "note": "浪太は外側に大きなテトラがある港。アジ・メバルや季節のイカを、港内側で無理なく回収できる範囲から探る。",
    "caution": [
      "先端が混雑していても外側のブロックへ移らない。荷物で通路をふさがない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitanabutokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.028167/131.920416/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitakazanasikou",
    "name": "風無港",
    "prefecture": "大分県",
    "lat": 33.016311,
    "lng": 131.908357,
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
    "note": "風無は西側の波止がある小さな港。アジ・メバル、クロダイや季節のイカを候補に、限られた釣り座で短い範囲を探る計画にしたい。",
    "caution": [
      "漁船の出入りと作業を優先。人数が多いときは無理に竿を出さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakazanasikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.016311/131.908357/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitafukiuragyokou",
    "name": "吹浦漁港",
    "prefecture": "大分県",
    "lat": 32.952324,
    "lng": 131.938891,
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
    "note": "吹浦は鶴見半島の付け根にある漁港。港内の護岸から小魚やメバル、季節のアオリイカを狙う候補になる。",
    "caution": [
      "護岸上の通行・作業を妨げない。車の横付けや夜間利用は現地案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitafukiuragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.952324/131.938891/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitaoosakikou",
    "name": "大崎港",
    "prefecture": "大分県",
    "lat": 32.956825,
    "lng": 131.961164,
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
    "note": "大崎は鶴見半島付け根側の港。アジ・クロダイ・メジナや季節のイカを、当日の潮と風に合わせて狙い分ける候補。",
    "caution": [
      "波止と港内岸壁の利用条件を別に確認。漁具の周りへ釣り具を置かない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitaoosakikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.956825/131.961164/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitahinourakou",
    "name": "日の浦港",
    "prefecture": "大分県",
    "lat": 32.940601,
    "lng": 131.984875,
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
    "note": "日の浦は鶴見半島中程の小さな港。小魚やメジナ、季節のアオリイカが候補で、足元の状況を確認しながら釣りを組み立てる。",
    "caution": [
      "小さな港では船と人の動線を空ける。荒天時は内側でも釣りを見送る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitahinourakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.940601/131.984875/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitahobaurakou",
    "name": "帆波浦港",
    "prefecture": "大分県",
    "lat": 32.943176,
    "lng": 131.989317,
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
    "note": "帆波浦は鶴見半島の小さな港で、波止と岸壁がある。アジやメジナ、アオリイカを候補に、作業のない利用可能区画を選ぶ。",
    "caution": [
      "係留索と船の下へ仕掛けを入れない。港の出入口を荷物や車でふさがない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitahobaurakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.943176/131.989317/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitahaidekou",
    "name": "羽出港",
    "prefecture": "大分県",
    "lat": 32.938855,
    "lng": 131.997235,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "ブリ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "羽出は鶴見半島中程の港。アジなどの回遊を狙う釣り情報があるが、波止は大きくないため釣り座の余裕を先に確認したい。",
    "caution": [
      "混雑時は仕掛けの投入方向を合わせる。漁業作業が始まったら場所を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitahaidekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.938855/131.997235/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitasarudokou",
    "name": "猿戸港",
    "prefecture": "大分県",
    "lat": 32.94829,
    "lng": 132.033219,
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
    "note": "猿戸は鶴見半島中程の港。アジ・クロダイ・メジナや季節のイカを、港内側から探る釣行の候補になる。",
    "caution": [
      "波止の足場だけで安全と判断せず、うねり・強風・立入表示を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitasarudokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.94829/132.033219/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitakajiyosekou",
    "name": "梶寄港",
    "prefecture": "大分県",
    "lat": 32.946148,
    "lng": 132.068002,
    "fish": [
      "マアジ",
      "アオリイカ",
      "メジナ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "梶寄は鶴見半島先端近くの港。アジやイカなど対象が幅広い一方、釣り座付近の駐車余地は限られるため、駐車を含めた計画が必要。",
    "caution": [
      "白灯付近へ無理に車を入れない。作業の邪魔になる場所には駐車しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitakajiyosekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.946148/132.068002/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitahazakokou",
    "name": "間越港",
    "prefecture": "大分県",
    "lat": 32.933452,
    "lng": 132.040751,
    "fish": [
      "アオリイカ"
    ],
    "methodSlugs": [
      "eging"
    ],
    "note": "間越は鶴見半島南側の漁港。季節のアオリイカが候補だが、外側に高さのあるブロックがあるため港内側の利用を確認して計画する。",
    "caution": [
      "外向きテトラには上がらない。釣り可能な岸壁が確認できなければ利用を見送る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitahazakokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.933452/132.040751/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitatazunekou",
    "name": "田鶴音港",
    "prefecture": "大分県",
    "lat": 32.91526,
    "lng": 131.982944,
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
    "note": "田鶴音は波止と港内側でアジ・メジナ・季節のイカを狙う候補。広い足場があっても作業場所と釣り座を分け、港の利用を優先したい。",
    "caution": [
      "釣り専用施設ではないため、子ども連れも岸壁の縁から距離を取って利用する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitatazunekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.91526/131.982944/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitaourakou",
    "name": "尾浦港",
    "prefecture": "大分県",
    "lat": 32.866936,
    "lng": 131.97567,
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
    "note": "尾浦は入津湾入口の入り江にある港。周囲を山に囲まれる地形だが、アジやキス、季節のイカを狙う場合も風波の予報を確認する。",
    "caution": [
      "山に囲まれていても荒天時の安全な釣り場とは限らない。船の出入りと突風に注意する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitaourakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.866936/131.97567/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitasagarimatuhananohato",
    "name": "下り松鼻の波止",
    "prefecture": "大分県",
    "lat": 32.842583,
    "lng": 131.956036,
    "fish": [
      "マアジ",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "下り松鼻は入津湾内の岬付近にある小さな波止。アジ・クロダイ・メジナを狙う候補で、足場と進入路を確認して短い範囲を探りたい。",
    "caution": [
      "岬周辺の不明な通路へ進まない。波止の利用条件と帰路を日中に確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitasagarimatuhananohato.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.842583/131.956036/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-ooitanisinourakou",
    "name": "西野浦港",
    "prefecture": "大分県",
    "lat": 32.82688,
    "lng": 131.983845,
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
    "note": "西野浦は湾内の港で、アジ・クロダイ・メジナや季節のイカを狙う候補。港内の作業場所を避けて、足元から状況を確かめる。",
    "caution": [
      "穏やかな水面でも係留索に注意。夜間利用や駐車は現地表示を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitanisinourakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.82688/131.983845/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitahatoudukou",
    "name": "波当津港",
    "prefecture": "大分県",
    "lat": 32.754906,
    "lng": 131.876235,
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
    "note": "波当津は宮崎県境近くの港。アジ・キスや季節のアオリイカが候補だが、水面まで高さがある場所では取り込み準備が重要になる。",
    "caution": [
      "干潮時はさらに落差が増える。大型魚を無理に抜き上げず、安全な足場を選ぶ。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitahatoudukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.754906/131.876235/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kumamotoikusagauragyokou",
    "name": "軍ヶ浦漁港",
    "prefecture": "熊本県",
    "lat": 32.315227,
    "lng": 130.004954,
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
    "note": "軍ヶ浦は東西の波止がある天草の港。アジ・カマス・季節のイカが候補で、釣り座は多くないため少人数での利用を考えたい。",
    "caution": [
      "竿を出せる人数は限られる。作業と通行を優先し、満員時は別の場所へ移る。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotoikusagauragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.315227/130.004954/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotosakitugyokou",
    "name": "崎津漁港",
    "prefecture": "熊本県",
    "lat": 32.313667,
    "lng": 130.024803,
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
    "note": "崎津は集落と観光の動線が近い漁港。アジ・メジナ・季節のイカを候補に、観光利用と漁業作業を妨げない釣行計画が必要になる。",
    "caution": [
      "波止手前の観光客用駐車場を釣り目的で使わない。釣行用の駐車先を事前に確認する。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotosakitugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.313667/130.024803/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotoonikikou",
    "name": "魚貫港",
    "prefecture": "熊本県",
    "lat": 32.238849,
    "lng": 130.011134,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "サワラ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "魚貫は湾内の波止・護岸がある港。アジ・クロダイ・メジナ、季節のイカなどを狙う候補で、港内の水面と作業状況を見て釣り座を選ぶ。",
    "caution": [
      "湾内でも強風時は釣りを控える。係留索・養殖や漁業設備に仕掛けを近づけない。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotoonikikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.238849/130.011134/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotomogusikou",
    "name": "茂串港",
    "prefecture": "熊本県",
    "lat": 32.216958,
    "lng": 130.008967,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "サワラ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "茂串は湾内に波止がある港で、季節のアオリイカやアジを狙う候補。広い足場があっても港内作業と釣りの利用を分ける。",
    "caution": [
      "波止に荷物を広げすぎない。利用時間・駐車・立入条件は現地案内を確認する。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotomogusikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.216958/130.008967/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotousibukagyokou",
    "name": "牛深漁港",
    "prefecture": "熊本県",
    "lat": 32.195298,
    "lng": 130.030317,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "牛深は下須島との水道に面した大きな漁港。アジや季節のイカを狙う候補で、潮の流れと港内の船の動きを見ながら岸壁を選ぶ必要がある。",
    "caution": [
      "岸壁への車の横付けを前提にしない。広い港も作業区画・航路・立入制限を優先する。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotousibukagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.195298/130.030317/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotokutamaurakou",
    "name": "久玉浦港",
    "prefecture": "熊本県",
    "lat": 32.209333,
    "lng": 130.029395,
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
    "note": "久玉浦は湾内の岸壁と東側の波止がある港。アジ・メジナや季節のイカを、港内側から探る釣行の候補になる。",
    "caution": [
      "小さなブロックでも上がらない。トイレなどの設備は最新の現地案内を確認する。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotokutamaurakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.209333/130.029395/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotofukamigyokou",
    "name": "深海漁港",
    "prefecture": "熊本県",
    "lat": 32.254166,
    "lng": 130.09763,
    "fish": [
      "マアジ",
      "メバル",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "マダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "深海は複数の波止が並ぶ天草の港。アジ・メバル・季節のイカなどが候補で、岸壁ごとの水深と作業状況を確認して釣り座を選ぶ。",
    "caution": [
      "東側の駐車余地は少ない。西側も自由駐車とは限らないため正規の駐車先を確認する。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotofukamigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.254166/130.09763/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotokamihirakou",
    "name": "上平港",
    "prefecture": "熊本県",
    "lat": 32.28521,
    "lng": 130.132692,
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
    "note": "上平は波止と北側岸壁がある港。アジや季節のアオリイカを候補に、荷役・係留作業のない区画を確認して釣る。",
    "caution": [
      "埠頭は作業優先。釣り具を通行路に置かず、利用可能な岸壁を現地で確認する。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotokamihirakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.28521/130.132692/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotomiyanokawatikou",
    "name": "船津漁港",
    "prefecture": "熊本県",
    "lat": 32.302478,
    "lng": 130.140932,
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
    "note": "船津は宮野河内港とも呼ばれる湾内の港。アジ・メバルや季節のイカが候補で、波止上の漁具と人の作業動線を避けて利用する。",
    "caution": [
      "置かれている網や道具に触れない。利用できる空間がなければ別の釣り場へ移る。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotomiyanokawatikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.302478/130.140932/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamototurugiyamakou",
    "name": "鶴木山港",
    "prefecture": "熊本県",
    "lat": 32.311727,
    "lng": 130.471036,
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "アオリイカ",
      "コウイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "eging",
      "uki"
    ],
    "note": "鶴木山はアジ・コノシロ、キスや季節のイカが候補になる港。波止手前の駐車余地が少なく、釣り座より先に駐車と進入条件を確認したい。",
    "caution": [
      "住民や漁業者の出入口に駐車しない。駐車先が確保できなければ利用を見送る。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamototurugiyamakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.311727/130.471036/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotosinnmarusimagyokou",
    "name": "新丸島漁港",
    "prefecture": "熊本県",
    "lat": 32.217358,
    "lng": 130.38718,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "コウイカ",
      "メジナ",
      "スズキ",
      "タチウオ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "新丸島は小魚や季節のタチウオ・イカなどの釣り情報がある港。東側波止の外向きは足場が悪いため、港内側の利用を中心に考える。",
    "caution": [
      "季節の回遊は年により変わる。外側のブロックへ上がらず、夜間利用は現地条件を確認する。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotosinnmarusimagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.217358/130.38718/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotoyudoukou",
    "name": "湯堂港",
    "prefecture": "熊本県",
    "lat": 32.183567,
    "lng": 130.375721,
    "fish": [
      "マアジ",
      "クロダイ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "湯堂は入り江の中にある港。アジやクロダイが候補で、港内の流れと船の位置を見て釣り座を選ぶ。",
    "caution": [
      "まき餌を使う場合は熊本県の遊漁ルールを確認。作業場所を汚さず釣り座を片付ける。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotoyudoukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.183567/130.375721/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kagosimaootoukou",
    "name": "大当港",
    "prefecture": "鹿児島県",
    "lat": 31.422255,
    "lng": 130.170801,
    "fish": [
      "マアジ",
      "アオリイカ",
      "ブリ",
      "メジナ",
      "アカカマス"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "大当は潮が動く海域に面した港。アジ・カマスや季節のイカが候補だが、岸壁には高さがあるため取り込み位置を先に決める必要がある。",
    "caution": [
      "高い波止と強い風の組み合わせに注意。外側へ身を乗り出さない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimaootoukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.422255/130.170801/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimanomaikegyokou",
    "name": "野間池漁港",
    "prefecture": "鹿児島県",
    "lat": 31.413373,
    "lng": 130.135417,
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
    "note": "野間池は複数の波止がある港で、西側は網干しなどの作業が多い。東側の利用条件を確認し、アジや季節のイカを狙う計画を立てたい。",
    "caution": [
      "網干し場へ釣り具を置かない。みなと広場の駐車・設備も最新案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimanomaikegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.413373/130.135417/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimaurajirikou",
    "name": "浦尻港",
    "prefecture": "鹿児島県",
    "lat": 31.258945,
    "lng": 130.236697,
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
    "note": "浦尻は幹線道路から少し離れた小さな港。アジ・メジナや季節のアオリイカを、港内側から探る候補になる。",
    "caution": [
      "狭い港の通路を空ける。日中に進入路と帰路を確認しておく。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimaurajirikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.258945/130.236697/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimamatugaurakou",
    "name": "松ヶ浦港",
    "prefecture": "鹿児島県",
    "lat": 31.254799,
    "lng": 130.394561,
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
    "note": "松ヶ浦は外向きの大型テトラ帯と港内岸壁の条件が大きく違う港。港内側でアジ・カマスや季節のイカを探る計画にしたい。",
    "caution": [
      "大型ブロックには立ち入らない。広い岸壁も漁業作業と車両通行を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimamatugaurakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.254799/130.394561/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimaookawagyokou",
    "name": "大川漁港（頴娃漁港）",
    "prefecture": "鹿児島県",
    "lat": 30.417832,
    "lng": 130.864935,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "アカカマス",
      "スズキ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "大川・頴娃は港と岩礁が接する漁港。アジ・カマスや季節のイカが候補だが、外向きの大型ブロックや地磯へ出ない計画で利用可能区画を確認する。",
    "caution": [
      "足場が確保できない場合は利用しない。磯側は波の打ち上げと潮位変化が別条件になる。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimaookawagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/30.417832/130.864935/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimacyogamizugyokou",
    "name": "児ヶ水漁港",
    "prefecture": "鹿児島県",
    "lat": 31.165497,
    "lng": 130.5918,
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
    "note": "児ヶ水は波止の途中まで外側にテトラがある港。アジ・カマスや季節のアオリイカが候補で、港内側の利用可能な釣り座を確認する。",
    "caution": [
      "先端が混雑していてもブロックへ移らない。風波が強い日は釣りを見送る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimacyogamizugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.165497/130.5918/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimayamakawakou",
    "name": "山川港",
    "prefecture": "鹿児島県",
    "lat": 31.201184,
    "lng": 130.634437,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "ブリ",
      "メジナ",
      "マダイ",
      "サワラ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "山川は波止と岸壁がある大きな港。アジや季節のイカなどを候補に、漁業・航行の利用を妨げない港内岸壁を確認して釣る。",
    "caution": [
      "外側の足場の悪いブロックには上がらない。港全域が岸釣り可能とは限らないため区画ごとに確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimayamakawakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.201184/130.634437/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimauomikou",
    "name": "魚見港（鹿児島県）",
    "prefecture": "鹿児島県",
    "lat": 31.270261,
    "lng": 130.658748,
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
    "note": "魚見は浅い海域に面した港。アジやキス、季節のイカが候補だが、潮位によって足元の水深が大きく変わることを考えて釣行を組む。",
    "caution": [
      "干出した場所へ降りない。潮が上がったときの帰路を確保する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimauomikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.270261/130.658748/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimakokubugyokou",
    "name": "国分漁港",
    "prefecture": "鹿児島県",
    "lat": 31.702886,
    "lng": 130.791314,
    "fish": [
      "マアジ",
      "シロギス",
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
    "note": "国分は波止の内側と港内側で小魚やキス、季節のイカを狙う候補。車で港内へ入れない条件を踏まえ、徒歩で運べる道具量にまとめたい。",
    "caution": [
      "港内への車の進入をしない。手前の駐車可能区画と通行条件を現地で確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimakokubugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.702886/130.791314/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimanakahamagyokou",
    "name": "中浜漁港（二川漁港）",
    "prefecture": "鹿児島県",
    "lat": 31.574952,
    "lng": 130.778697,
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
    "note": "中浜・二川は国道沿いにある小さな港。アジ・クロダイや季節のアオリイカを候補に、少人数で港内側を短く探る釣行を考えたい。",
    "caution": [
      "小さな波止に荷物を広げすぎない。国道沿いの駐車や出入口の占有をしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimanakahamagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.574952/130.778697/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimakaigatagyokou",
    "name": "海潟漁港",
    "prefecture": "鹿児島県",
    "lat": 31.529605,
    "lng": 130.702178,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "マイワシ",
      "ブリ",
      "カワハギ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "海潟は沖合に養殖施設がある漁港。東側の緑地公園前を含め、アジなどの回遊魚を狙う候補になるが、養殖作業・船の航行と岸釣りを明確に分ける必要がある。",
    "caution": [
      "養殖設備の周辺へ投げない。公園側の駐車・岸壁利用も最新の案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimakaigatagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.529605/130.702178/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimatarumizukyuukou",
    "name": "垂水旧港",
    "prefecture": "鹿児島県",
    "lat": 31.495561,
    "lng": 130.696878,
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
    "note": "垂水旧港は南北の波止と岸壁がある港。アジ・クロダイや季節のイカを候補に、限られた釣り座を譲り合って利用したい。",
    "caution": [
      "大きな駐車余地はない。生活道路や漁業者の出入口へ駐車しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimatarumizukyuukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.495561/130.696878/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimakunugibarugyokou",
    "name": "柊原漁港",
    "prefecture": "鹿児島県",
    "lat": 31.459528,
    "lng": 130.703466,
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
    "note": "柊原は港を囲む波止がある漁港。アジ・メジナ・季節のイカを狙う候補だが、外向きのテトラ帯ではなく港内側の釣り座を確認する。",
    "caution": [
      "外側のブロックには上がらない。アイゴが掛かった場合は毒のあるひれを素手で触らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimakunugibarugyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.459528/130.703466/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimasinnjyoukou",
    "name": "新城港",
    "prefecture": "鹿児島県",
    "lat": 31.444683,
    "lng": 130.736253,
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
    "note": "新城は二つの波止と港内岸壁がある港。アジやキス、季節のイカなどを、足元の回遊と砂底の方向を見て狙い分けたい。",
    "caution": [
      "広い港内も自由駐車とは限らない。作業区画と車両の通行を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimasinnjyoukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.444683/130.736253/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimasimadomarikou",
    "name": "島泊港",
    "prefecture": "鹿児島県",
    "lat": 31.060176,
    "lng": 130.67673,
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
    "note": "島泊は大隅半島先端側の小さな港。外側の波返しが高いため、アジや季節のイカを港内側から探る計画にしたい。",
    "caution": [
      "進入路が狭いので明るいうちに確認する。高い波返しへ登らず内側で利用条件を守る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimasimadomarikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.060176/130.67673/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimamadomarikou",
    "name": "間泊港",
    "prefecture": "鹿児島県",
    "lat": 31.037877,
    "lng": 130.715139,
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
    "note": "間泊は大隅半島先端側で岩礁に囲まれた小さな港。アジ・メジナや季節のイカを候補に、港内の平らな足場で釣りを組み立てる。",
    "caution": [
      "周囲の磯へ無理に移動しない。潮位と波を見て帰路を確保する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimamadomarikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.037877/130.715139/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimautinouragyokou",
    "name": "内之浦漁港",
    "prefecture": "鹿児島県",
    "lat": 31.276919,
    "lng": 131.080027,
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
    "note": "内之浦は大きな漁港で、アジ・メジナ・季節のイカなどが候補。外側へ登る釣りではなく、港内岸壁で利用できる区画を確認して釣行を組む。",
    "caution": [
      "脚立で波返しを越えない。東側の駐車余地も限られるため駐車先を事前に確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimautinouragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.276919/131.080027/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimakotidomarigyokou",
    "name": "東風泊漁港",
    "prefecture": "鹿児島県",
    "lat": 31.340571,
    "lng": 131.069298,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "メジナ",
      "アカカマス",
      "カワハギ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "東風泊はアジ・カマス・カワハギや季節のイカを狙う候補。港内側の釣り座を中心に、狭い進入路と取り込み経路を確認したい。",
    "caution": [
      "脚立で外向きへ登らない。道路上に駐車せず、漁業車両の通行を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimakotidomarigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.340571/131.069298/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-aomoriyomogitagyokou",
    "name": "蓬田漁港",
    "prefecture": "青森県",
    "lat": 40.985649,
    "lng": 140.655534,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "サヨリ",
      "チカ",
      "ブリ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "uki"
    ],
    "note": "蓬田は港内の埠頭と波止がある漁港。アジ・チカなどの小魚狙いとキス・カレイの底釣りを、岸壁の水深と底質で使い分ける。",
    "caution": [
      "北側の外向きテトラには立ち入らない。埠頭の荷役・係留作業を優先する。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomoriyomogitagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.985649/140.655534/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorikanitagyokou",
    "name": "蟹田漁港",
    "prefecture": "青森県",
    "lat": 41.048984,
    "lng": 140.64487,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
      "アイナメ",
      "クロダイ",
      "サヨリ",
      "チカ"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "蟹田は港内側の岸壁と北側の波止がある港。小魚やカレイ・アイナメを候補に、漁船と作業の動きを見て釣り座を選ぶ。",
    "caution": [
      "波止の広さを安全保証にしない。先端の立入表示と波況を確認する。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorikanitagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.048984/140.64487/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorijyuusannminatogyokou",
    "name": "十三湊漁港",
    "prefecture": "青森県",
    "lat": 41.02312,
    "lng": 140.321052,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "ヒラメ",
      "マゴチ",
      "ブリ",
      "スズキ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "十三湊は砂浜に囲まれた港。キス・カレイなど砂地の底物が候補で、港内と南側サーフの釣りは風波・流れを別に判断する。",
    "caution": [
      "十三地区のまき餌規制区域を確認する。河口・サーフ側へ不用意に立ち込まない。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorijyuusannminatogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/41.02312/140.321052/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorifukaurakou",
    "name": "深浦港",
    "prefecture": "青森県",
    "lat": 40.64224,
    "lng": 139.927239,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "サヨリ",
      "ウミタナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "深浦は入り江の岸壁がある大きな港。キス・カレイや根魚などを候補に、港内作業と岸釣りの場所を分けて釣行を考える。",
    "caution": [
      "深浦地区のまき餌規制を確認する。岸壁への車の横付けを前提にしない。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorifukaurakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.64224/139.927239/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorihenasigyokou",
    "name": "舮作漁港",
    "prefecture": "青森県",
    "lat": 40.608121,
    "lng": 139.862051,
    "fish": [
      "マアジ",
      "アイナメ",
      "クロソイ",
      "クロダイ",
      "アオリイカ",
      "マサバ",
      "ウミタナゴ",
      "ホッケ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure",
      "eging",
      "uki"
    ],
    "note": "舮作は不老ふ死温泉の先にある港。ホッケや根魚などの釣り情報があるが、西側先端は高さがあるため、取り込み可能な港内側から考えたい。",
    "caution": [
      "高い先端で身を乗り出さない。温泉施設の駐車場を釣り利用できるとは限らない。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorihenasigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.608121/139.862051/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-aomorisawabegyokou",
    "name": "沢辺漁港",
    "prefecture": "青森県",
    "lat": 40.583909,
    "lng": 139.881234,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "ホッケ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "沢辺は高い波返しに囲まれた港。港内の小魚や季節のイカを候補に、外側の地磯とは切り離して釣行を組み立てる。",
    "caution": [
      "磯へ渡るためのテトラ移動や立ち込みをしない。波返しにも登らない。",
      "まき餌釣りには区域規制があります。県の最新の委員会指示・区域図を確認し、規制区域ではまき餌を使わないでください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/aomorisawabegyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.583909/139.881234/&base=std&ls=std&disp=1"
      },
      {
        "label": "青森県：まき餌釣りの区域図・委員会指示を確認",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kaiku/r7-kaiku-iinnkaishiji.html"
      }
    ]
  },
  {
    "slug": "coast-iwatemasudategyokou",
    "name": "増舘漁港",
    "prefecture": "岩手県",
    "lat": 39.135753,
    "lng": 141.853194,
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
    "note": "増舘は吉浜湾の漁港。アイナメ・ソイやカレイ、小魚を狙う候補で、幹線道路から離れた進入路を明るいうちに確認したい。",
    "caution": [
      "ブロックのない波止でも救命具を着用。係留索と漁業車両の動線を空ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatemasudategyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.135753/141.853194/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatenamiitagyokou",
    "name": "浪板漁港",
    "prefecture": "岩手県",
    "lat": 39.107952,
    "lng": 141.829762,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "浪板は越喜来湾の港で、北側に砂浜がある一方、周辺には根も多い。カレイの底釣りとアイナメ・ソイの探り釣りを底質に合わせて分ける。",
    "caution": [
      "隣接する海水浴場の利用者へ投げない。港内も作業区画を優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatenamiitagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.107952/141.829762/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateryourigyokou",
    "name": "綾里漁港",
    "prefecture": "岩手県",
    "lat": 39.04317,
    "lng": 141.796052,
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
    "note": "綾里は湾内の大きな漁港。複数の岸壁があり、カレイ・根魚と小魚狙いを使い分けられる候補。公園前も釣り専用施設とは区別して利用条件を確認する。",
    "caution": [
      "夜間照明の稼働は保証しない。岸壁の作業・駐車条件を現地で確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateryourigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.04317/141.796052/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwategoisigyokou",
    "name": "碁石漁港",
    "prefecture": "岩手県",
    "lat": 38.988836,
    "lng": 141.737216,
    "fish": [
      "マアジ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マサバ",
      "マイワシ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "rockfish-lure"
    ],
    "note": "碁石は小さな港で、根魚や季節のヤリイカの釣り情報がある。港内の駐車余地が乏しいため、移動・駐車を含めて計画したい。",
    "caution": [
      "穴通船利用者の駐車場を無断で使わない。正規の駐車先がなければ釣りを見送る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwategoisigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.988836/141.737216/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwatekoedagyokou",
    "name": "越田漁港",
    "prefecture": "岩手県",
    "lat": 38.966833,
    "lng": 141.685138,
    "fish": [
      "アイナメ",
      "クロソイ"
    ],
    "methodSlugs": [
      "rockfish-lure"
    ],
    "note": "越田は大陽漁港の越田地区に当たる小さな港。アイナメ・ソイなどを、港内の利用できる足場から短く探る候補になる。",
    "caution": [
      "駐車余地はほとんどない。作業車や住民の出入口を妨げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwatekoedagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.966833/141.685138/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateusozawagyokou",
    "name": "獺沢漁港",
    "prefecture": "岩手県",
    "lat": 38.983015,
    "lng": 141.667714,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "獺沢は広田半島の小さな港。港内岸壁から根魚やカレイなどを探る候補で、遠投より足元の底質と回収方向を確認したい。",
    "caution": [
      "小さな港のため漁業作業を優先し、釣り具を広げすぎない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateusozawagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.983015/141.667714/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-iwateyanouragyokou",
    "name": "矢の浦漁港",
    "prefecture": "岩手県",
    "lat": 38.989336,
    "lng": 141.669881,
    "fish": [
      "カレイ",
      "メバル",
      "アイナメ",
      "クロソイ",
      "マアナゴ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure"
    ],
    "note": "矢の浦は広田半島付け根側の小さな港。根魚・カレイなどを波止や岸壁から探る候補で、底の状態と作業のない区画を確認する。",
    "caution": [
      "設備の現在の利用可否は現地で確認。駐車場所と釣り座を混同しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba2/iwateyanouragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.989336/141.669881/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-tibamoriyakou",
    "name": "守谷港",
    "prefecture": "千葉県",
    "lat": 35.136703,
    "lng": 140.256722,
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ],
    "note": "守谷は周辺が浅い小さな港。クロダイを狙う候補だが、南側の荒熊の磯とは足場条件が異なるため、港内側の計画として利用条件を確認する。",
    "caution": [
      "低い磯へは移動しない。駐車料金や海岸の利用制限は最新の案内を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibamoriyakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.136703/140.256722/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimahisiogyokou",
    "name": "向島・干汐漁港",
    "prefecture": "広島県",
    "lat": 34.377977,
    "lng": 133.218412,
    "fish": [
      "シロギス",
      "カレイ",
      "クロダイ",
      "アオリイカ",
      "サヨリ",
      "コウイカ",
      "タチウオ",
      "マダイ"
    ],
    "methodSlugs": [
      "choinage",
      "eging",
      "uki"
    ],
    "note": "干汐は向島の南北に波止がある港。キス・カレイの底釣りや小魚、季節のイカが候補だが、南側の頭上には電線があるため竿の扱いに注意が必要。",
    "caution": [
      "電線の近くでは竿を立てたり振りかぶったりしない。十分な距離が取れなければ釣らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/hirosimahisiogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.377977/133.218412/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-hirosimaisidazousennnohato",
    "name": "因島・石田造船の波止",
    "prefecture": "広島県",
    "lat": 34.297678,
    "lng": 133.197384,
    "fish": [
      "シロギス",
      "カレイ",
      "メバル",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage",
      "rockfish-lure",
      "uki"
    ],
    "note": "因島の石田造船付近の波止は湾奥にある。キス・カレイ、メバルやクロダイを狙う候補だが、造船・港湾作業と生活の動線を優先したい。",
    "caution": [
      "大きな駐車余地はない。造船所の敷地・作業場所へ入らず、駐車先を確保できない場合は利用しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/hirosimaisidazousennnohato.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.297678/133.197384/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-simanetutidagyokou",
    "name": "土田漁港",
    "prefecture": "島根県",
    "lat": 34.757833,
    "lng": 131.889389,
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
    "note": "土田は東側に砂浜が隣接する小さな港。キス・クロダイや季節のイカが候補で、港内の釣りと海岸利用を分けて考えたい。",
    "caution": [
      "夏の土田浜は海水浴利用を優先する。遊泳者のいる範囲では釣らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simanetutidagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.757833/131.889389/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-simaneiiuragyokou",
    "name": "飯浦漁港",
    "prefecture": "島根県",
    "lat": 34.674088,
    "lng": 131.701441,
    "fish": [
      "マアジ",
      "クロダイ",
      "アオリイカ",
      "ヤリイカ"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "uki"
    ],
    "note": "飯浦は赤灯側の波止がある港。アジ・メジナや季節のイカが候補だが、沖向きの大きなテトラ帯ではなく港内側の足場を選ぶ。",
    "caution": [
      "外側のブロックへは上がらない。先端の混雑・立入表示・波を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simaneiiuragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.674088/131.701441/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchiutakou",
    "name": "宇田港",
    "prefecture": "山口県",
    "lat": 34.567185,
    "lng": 131.540337,
    "fish": [
      "マアジ",
      "メバル",
      "キジハタ",
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
    "note": "宇田は港を囲む波止がある漁港。メバル・キジハタや季節のイカを狙う候補だが、先端のテトラ帯とは分けて内向きの利用を確認する。",
    "caution": [
      "ブロックでできた先端には進まない。平らな岸壁で利用できる範囲だけを選ぶ。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchiutakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.567185/131.540337/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-yamaguchisusagyokou",
    "name": "須佐漁港",
    "prefecture": "山口県",
    "lat": 34.622932,
    "lng": 131.602092,
    "fish": [
      "マアジ",
      "シロギス",
      "カレイ",
      "メバル",
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
    "note": "須佐は東西の波止と港内側に岸壁がある漁港。小魚、キス・カレイ、季節のイカを、底質と潮に合わせて狙い分ける候補になる。",
    "caution": [
      "柵があっても安全を保証しない。作業区画と立入表示を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba3/yamaguchisusagyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.622932/131.602092/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitafukudomarikou",
    "name": "福泊港",
    "prefecture": "大分県",
    "lat": 33.053368,
    "lng": 131.989961,
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
    "note": "福泊は四浦半島南側の港で、公園前の岸壁がある。アジ・メバルや季節のイカを候補に、外向きの大型テトラ帯へ出ない計画にする。",
    "caution": [
      "公園の設備・駐車条件は現地で確認。沖向きブロックには上がらない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitafukudomarikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/33.053368/131.989961/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitaogamaekou",
    "name": "小蒲江港",
    "prefecture": "大分県",
    "lat": 32.793714,
    "lng": 131.907434,
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
    "note": "小蒲江は山に囲まれた入り江の港。東西の波止と港内側で、アジ・クロダイや季節のイカを狙う候補になる。",
    "caution": [
      "湾内でも荒天時の安全な避難釣り場とは考えない。強風・船の出入りを優先する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitaogamaekou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.793714/131.907434/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-ooitamorisakikou",
    "name": "森崎港",
    "prefecture": "大分県",
    "lat": 32.805204,
    "lng": 131.890268,
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
    "note": "森崎は湾内の港で、季節のアオリイカやアジ狙いが候補。西側へ向かう場合も港内の正規の通路と利用できる区画を確認したい。",
    "caution": [
      "漁業作業の動線を横切らず、波止への通路を荷物でふさがない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba1/ooitamorisakikou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.805204/131.890268/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kumamotosukutiurakou",
    "name": "須口浦港",
    "prefecture": "熊本県",
    "lat": 32.202035,
    "lng": 130.010383,
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
    "note": "須口浦は湾内に複数の波止・岸壁がある港。アジ・メジナや季節のイカを候補に、岸壁ごとの作業と係留状況を見て釣り座を選ぶ。",
    "caution": [
      "広い港でも自由に駐車・釣りができるとは限らない。現地の区画表示を優先する。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotosukutiurakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.202035/130.010383/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotoyamanouragyokou",
    "name": "山之浦漁港",
    "prefecture": "熊本県",
    "lat": 32.224782,
    "lng": 130.07422,
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
    "note": "山之浦は天草の湾内にある小さな港。アジ・メバルや季節のイカを、港内側の利用できる足場から探る候補になる。",
    "caution": [
      "同名地点と取り違えないよう熊本県の位置を確認。住民と漁業者の通行を優先する。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotoyamanouragyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.224782/130.07422/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kumamotonakatakou",
    "name": "中田港",
    "prefecture": "熊本県",
    "lat": 32.330332,
    "lng": 130.164664,
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
    "note": "中田は天草の湾内にある港。アジ・メバル・メジナや季節のイカを候補に、穏やかな日の港内側を短く探る釣行を考える。",
    "caution": [
      "係留・荷さばきの区画を避ける。湾内でも突風時は釣りを中断する。",
      "港内・防波堤周辺のまき餌には県の制限があります。土砂や禁止される団子餌を使わず、最新の遊漁ルールを確認してください。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba4/kumamotonakatakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/32.330332/130.164664/&base=std&ls=std&disp=1"
      },
      {
        "label": "熊本県：遊漁のルール",
        "url": "https://www.pref.kumamoto.jp/soshiki/94/122478.html"
      }
    ]
  },
  {
    "slug": "coast-kagosimaiwamotogyokou",
    "name": "岩本漁港",
    "prefecture": "鹿児島県",
    "lat": 31.292249,
    "lng": 130.603688,
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
    "note": "岩本は今和泉側の波止と護岸がある港。アジ・メジナや季節のイカが候補で、護岸と波止の利用条件を確認して釣り座を選ぶ。",
    "caution": [
      "手すりを越えたり、竿を固定して通路をふさいだりしない。強風時は利用を控える。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimaiwamotogyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.292249/130.603688/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimahiroseteibou",
    "name": "広瀬堤防",
    "prefecture": "鹿児島県",
    "lat": 31.603229,
    "lng": 130.571158,
    "fish": [
      "クロダイ"
    ],
    "methodSlugs": [
      "uki"
    ],
    "note": "広瀬はクロダイ狙いの釣り情報がある小さな堤防。外側のブロックへ出るのではなく、内側で利用できる足場を確認する。",
    "caution": [
      "小さなテトラでも立ち入らない。狭い場所で荷物や竿を広げすぎない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimahiroseteibou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.603229/130.571158/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "pier"
  },
  {
    "slug": "coast-kagosimasakaigyokou",
    "name": "境漁港（牛根堺港）",
    "prefecture": "鹿児島県",
    "lat": 31.615637,
    "lng": 130.79582,
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
    "note": "境・牛根堺は波止と港内側の岸壁がある漁港。アジ・メジナや季節のイカを候補に、高くなった外側へ登らず釣り座を選ぶ。",
    "caution": [
      "波返しを越えない。駐車できそうな広場も作業区画かどうか確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimasakaigyokou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.615637/130.79582/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimakanoyakou",
    "name": "鹿屋港（古江港）",
    "prefecture": "鹿児島県",
    "lat": 31.403246,
    "lng": 130.763011,
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
    "note": "鹿屋・古江は複数の波止と岸壁がある港。港内のアジや季節のイカを候補に、川の流れ込みと船の動きを見ながら釣り座を選ぶ。",
    "caution": [
      "赤灯側の外向きブロックへは上がらない。岸壁への車の横付けは現地条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimakanoyakou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.403246/130.763011/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-kagosimatakasukou",
    "name": "高須港",
    "prefecture": "鹿児島県",
    "lat": 31.350302,
    "lng": 130.792902,
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
      "eging",
      "uki"
    ],
    "note": "高須は南北の波止がある港。アジ・キスや季節のイカを候補に、港内側から水深と底を確かめたい。",
    "caution": [
      "波止手前の駐車余地は限られる。漁業者の出入口・通行を妨げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://k.turihiroba.com/turiba5/kagosimatakasukou.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/31.350302/130.792902/&base=std&ls=std&disp=1"
      }
    ]
  },
  {
    "slug": "coast-akitakamayahama",
    "name": "釜谷浜",
    "prefecture": "秋田県",
    "lat": 40.097902,
    "lng": 139.959726,
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
    "note": "釜谷浜は長く続く砂浜で、キスの投げ釣りとヒラメ・マゴチ狙いを考えたい海岸。港の釣りとは異なり、波打ち際と底の変化を見ながら場所を選ぶ。",
    "caution": [
      "海水浴の開設期間・遊泳区画では釣らない。波打ち際へ立ち込まず高波時は中止する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/akitakamayahama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/40.097902/139.959726/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-akitadetohama",
    "name": "出戸浜",
    "prefecture": "秋田県",
    "lat": 39.8396,
    "lng": 140.012555,
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
    "note": "出戸浜は砂浜からキス・カレイやヒラメ・マゴチを狙う候補。遠投の距離だけでなく、砂底の変化と波の寄せ方を見て釣り座を選びたい。",
    "caution": [
      "夏の海水浴利用を優先し、遊泳者のいる範囲では釣らない。強い波や横風の日は避ける。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/akitadetohama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/39.8396/140.012555/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-miyaginobirukaigann",
    "name": "野蒜海岸",
    "prefecture": "宮城県",
    "lat": 38.36974,
    "lng": 141.164768,
    "fish": [
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
    "note": "野蒜は広いサーフが続く海岸。イシモチ・カレイやヒラメ・マゴチを候補に、波と底の変化を見ながら釣り座を選ぶ。",
    "caution": [
      "路肩を駐車場として利用できるとは限らない。海岸への正規の通路と避難経路を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyaginobirukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.36974/141.164768/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-miyagiiwanumakaigann",
    "name": "岩沼海岸",
    "prefecture": "宮城県",
    "lat": 38.129729,
    "lng": 140.940213,
    "fish": [
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
    "note": "岩沼は長い砂浜が続く海岸。イシモチ・カレイ、ヒラメ・マゴチなどを狙う候補で、同じ浜でも波の立つ位置や流れ込みによって状況が変わる。",
    "caution": [
      "高波・離岸流を避けて立ち込まない。工事中の海岸や閉じた通路へ入らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://t.turihiroba.com/turiba1/miyagiiwanumakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.129729/140.940213/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-ibarakinagahamakaigann",
    "name": "長浜海岸",
    "prefecture": "茨城県",
    "lat": 36.845869,
    "lng": 140.796897,
    "fish": [
      "シロギス",
      "カレイ",
      "アイナメ",
      "クロダイ",
      "ウミタナゴ",
      "シログチ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "茨城の長浜は砂浜と人工岬がある海岸。キス・カレイ・イシモチなどの底物を、砂浜側から狙う計画にしたい。",
    "caution": [
      "ヘッドランドへ上がらず、周囲の強い流れにも近づかない。遊泳者・散策者の後方確認を徹底する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakinagahamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.845869/140.796897/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-ibarakikitahamakaigann",
    "name": "北浜海岸",
    "prefecture": "茨城県",
    "lat": 36.791141,
    "lng": 140.752501,
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
    "note": "北浜は大北川河口付近に広がる砂浜。キスやイシモチ、ヒラメ・マゴチを狙う候補で、河川の流れと海の波を合わせて判断する。",
    "caution": [
      "海岸への車両乗り入れを前提にしない。正規の駐車先と徒歩経路を確保し、増水時は近づかない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://ibaraki.turihiroba.com/turiba/ibarakikitahamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.791141/140.752501/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-tibahotakaigann",
    "name": "保田海岸",
    "prefecture": "千葉県",
    "lat": 35.141213,
    "lng": 139.834886,
    "fish": [
      "シロギス",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "保田は砂浜からキスの投げ釣りやマゴチ狙いを考えられる海岸。広さだけで場所を決めず、遊泳・散策利用と波の当たり方を確認する。",
    "caution": [
      "海水浴の区画・期間では釣らない。周囲に人がいる場合は投げず、利用区分を守る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibahotakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.141213/139.834886/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-tibanamuyakaigann",
    "name": "南無谷海岸",
    "prefecture": "千葉県",
    "lat": 35.060195,
    "lng": 139.826002,
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "南無谷は小さな砂浜からキスやヒラメ・マゴチを狙う候補。海岸へ向かう道が狭く、釣り座より先に進入路と駐車先を確認したい。",
    "caution": [
      "狭い道で無理にすれ違わない。駐車先がない場合は利用を見送り、遊泳者がいる範囲では釣らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://chiba.turihiroba.com/turiba/tibanamuyakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.060195/139.826002/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-kanagawamiurakaigann",
    "name": "三浦海岸",
    "prefecture": "神奈川県",
    "lat": 35.184507,
    "lng": 139.6558,
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "三浦海岸は駅からも計画しやすい広い砂浜。キスの投げ釣りやヒラメ・マゴチ狙いが候補だが、海水浴・ボートなど多様な利用がある。",
    "caution": [
      "海水浴シーズンの区画では釣らない。駐車料金・利用時間は最新情報を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawamiurakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.184507/139.6558/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-kanagawawadanagahamakaigann",
    "name": "和田長浜海岸",
    "prefecture": "神奈川県",
    "lat": 35.190662,
    "lng": 139.614837,
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "和田長浜は砂浜からキスやヒラメ・マゴチを狙う候補。カヤックやサーフィンの利用もあるため、釣りだけで浜を占有しない計画が必要。",
    "caution": [
      "出艇・着艇場所を空ける。海水浴利用と駐車場の開閉・料金を最新案内で確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawawadanagahamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.190662/139.614837/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-kanagawaakiyakaigann",
    "name": "秋谷海岸",
    "prefecture": "神奈川県",
    "lat": 35.238749,
    "lng": 139.600224,
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
    "note": "秋谷は砂浜からキス・イシモチやヒラメ・マゴチを狙う候補。北側の立石公園とは利用区画を分け、砂浜の釣り座を選ぶ。",
    "caution": [
      "公園駐車場の条件は変わるため現地案内を確認。遊泳者や散策者のいる方向へ投げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://kanagawa.turihiroba.com/turiba/kanagawaakiyakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.238749/139.600224/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-sizuokasamejimakaigann",
    "name": "鮫島海岸",
    "prefecture": "静岡県",
    "lat": 34.658434,
    "lng": 137.848141,
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
    "note": "鮫島は遠州灘の砂浜で、キス・イシモチやヒラメ・マゴチを狙う候補。外海の波を受けるため、浜の広さより海況を優先して釣行を決めたい。",
    "caution": [
      "車両の浜への乗り入れを案内しない。高波・強風時は中止し、海岸の保護区画を守る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba5/sizuokasamejimakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.658434/137.848141/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-tusimatiyakaigann",
    "name": "町屋海岸",
    "prefecture": "三重県",
    "lat": 34.751521,
    "lng": 136.532979,
    "fish": [
      "シロギス",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "町屋は遠浅の砂浜。キスの投げ釣りやマゴチ狙いを候補に、潮位で変わる水深と底の変化を見ながら釣り座を選ぶ。",
    "caution": [
      "干潟・浅瀬へ不用意に立ち込まない。遊泳や散策の利用者がいる範囲では投げない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/tusimatiyakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.751521/136.532979/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-tusigotennbakaigann",
    "name": "御殿場海岸",
    "prefecture": "三重県",
    "lat": 34.695403,
    "lng": 136.520898,
    "fish": [
      "シロギス",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "御殿場は砂浜と階段状護岸がある海岸。キスやマゴチ狙いを、潮位と海岸利用者の動きに合わせて組み立てたい。",
    "caution": [
      "駐車場によって開設期間が異なる。潮干狩り・海水浴など他の利用者がいる範囲では釣らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/tusigotennbakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.695403/136.520898/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-tusikarasu",
    "name": "香良洲海岸",
    "prefecture": "三重県",
    "lat": 34.64117,
    "lng": 136.548665,
    "fish": [
      "シロギス",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "香良洲は雲出川と雲出古川に挟まれた三角州の海岸。キスの投げ釣りやマゴチ狙いが候補で、雨後は河川からの濁りや漂流物を確認したい。",
    "caution": [
      "増水後は河口へ近づかない。海水浴の区画・期間と駐車場の利用条件を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/tusikarasu.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.64117/136.548665/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-isesikouzakikaigann",
    "name": "神前海岸",
    "prefecture": "三重県",
    "lat": 34.50668,
    "lng": 136.797681,
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "神前は砂浜からキスなどを狙う候補。西側に五十鈴川派川の河口があり、潮位と河川の流れによって釣り座の条件が変わる。",
    "caution": [
      "河口付近へ車を置けると決めつけない。増水・流木・遊泳者を確認して利用する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/isesikouzakikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/34.50668/136.797681/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-niigatafuyakaigann",
    "name": "府屋海岸",
    "prefecture": "新潟県",
    "lat": 38.51446,
    "lng": 139.53038,
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "府屋は砂浜からキスを狙う候補。港の足元釣りとは異なり、砂底を探りながらアタリのある距離を見つける釣行を考えたい。",
    "caution": [
      "駐車場所からの徒歩経路を確認。高波・強風時や遊泳者がいる範囲では釣らない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatafuyakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.51446/139.53038/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-niigatakanngawakaigann",
    "name": "寒川海岸",
    "prefecture": "新潟県",
    "lat": 38.453874,
    "lng": 139.494739,
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "寒川は海岸道路に沿う砂浜で、キスの投げ釣りが候補。道路横断を含めたアクセスと海岸利用の区分を確認して向かいたい。",
    "caution": [
      "海水浴シーズンは遊泳を優先。道路は安全な横断箇所を使い、駐車条件を最新案内で確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatakanngawakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.453874/139.494739/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-niigatasenamikaigann",
    "name": "瀬波海岸",
    "prefecture": "新潟県",
    "lat": 38.215727,
    "lng": 139.437017,
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "瀬波は温泉街に近い砂浜で、キスの投げ釣りが候補。観光・海水浴利用が多いため、人のいない時間だけでなく釣り可能な区画を確認する。",
    "caution": [
      "夏の海水浴区画では釣らない。北側へ移れば常に可能と決めつけず、現地の区分を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://niigata.turihiroba.com/turiba/niigatasenamikaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/38.215727/139.437017/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-toyamasimaokaigann",
    "name": "島尾海岸",
    "prefecture": "富山県",
    "lat": 36.831048,
    "lng": 137.01406,
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "島尾は富山湾側の広い砂浜。キスの投げ釣りやヒラメ・マゴチ狙いを候補に、潮と砂底の変化を見て立ち位置を決める。",
    "caution": [
      "海水浴の期間・区画では釣らない。釣り大会などの利用があっても当日の許可を意味しない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba4/toyamasimaokaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.831048/137.01406/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-toyamaiwasehama",
    "name": "岩瀬浜",
    "prefecture": "富山県",
    "lat": 36.764776,
    "lng": 137.235439,
    "fish": [
      "シロギス",
      "メバル",
      "カサゴ",
      "クロダイ"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "岩瀬浜は漁港東側の砂浜で、キスの投げ釣りが候補。隣の岩瀬漁港や沖の消波ブロックとは別の釣り場として砂浜だけを利用する計画にしたい。",
    "caution": [
      "海水浴期間・区画では釣らない。沖のテトラへ渡らず、緑地・砂浜の禁止行為も守る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba3/toyamaiwasehama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.764776/137.235439/&base=std&ls=std&disp=1"
      },
      {
        "label": "富山市観光協会：海水浴場の利用案内",
        "url": "https://www.toyamashi-kankoukyoukai.jp/experience/iwasehama/"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-fukuinamimatukaigann",
    "name": "波松海岸",
    "prefecture": "福井県",
    "lat": 36.266335,
    "lng": 136.200664,
    "fish": [
      "シロギス",
      "カレイ",
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
    "note": "波松は日本海に面した広い砂浜。キス・カレイの投げ釣りとヒラメ・マゴチ狙いが候補で、波と風の影響を受けやすい海岸として計画する。",
    "caution": [
      "離岸流や高波を避けて立ち込まない。海岸工事・立入区画と他の利用者を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/fukuinamimatukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.266335/136.200664/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-fukuisannrihama",
    "name": "三里浜",
    "prefecture": "福井県",
    "lat": 36.142398,
    "lng": 136.081359,
    "fish": [
      "シロギス",
      "カレイ",
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
    "note": "三里浜は長いサーフで、キス・カレイやヒラメ・マゴチを狙う候補。サーフィンの利用も多いため、波のよい場所を釣り座として独占しない。",
    "caution": [
      "サーファーのいる範囲では釣らない。隣接する港の防波堤へ移動せず、砂浜の利用条件を守る。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/fukuisannrihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/36.142398/136.081359/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-fukuisuisyouhama",
    "name": "水晶浜",
    "prefecture": "福井県",
    "lat": 35.686163,
    "lng": 135.977654,
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "水晶浜は隣接するダイヤ浜と続く砂浜で、海水浴期以外のキス釣りが候補。浜が空いていても釣りの利用条件と駐車場の開閉を確認したい。",
    "caution": [
      "海水浴期・遊泳区画では釣らない。季節外に閉まる駐車場もあるため事前に確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba2/fukuisuisyouhama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.686163/135.977654/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-kyoutokotobikihama",
    "name": "琴引浜",
    "prefecture": "京都府",
    "lat": 35.70237,
    "lng": 135.048494,
    "fish": [
      "シロギス"
    ],
    "methodSlugs": [
      "choinage"
    ],
    "note": "琴引浜は鳴き砂を守る取り組みがある海岸。キスの投げ釣りが候補だが、通常の砂浜以上に環境保全と海水浴利用のルールを意識したい。",
    "caution": [
      "喫煙・花火・キャンプ・炊飯などの禁止行為を守る。海水浴期間の釣りと駐車条件は現地で確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://turihiroba.com/turiba6/kyoutokotobikihama.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.70237/135.048494/&base=std&ls=std&disp=1"
      },
      {
        "label": "琴引浜鳴き砂文化館：浜の保護と禁止行為",
        "url": "https://nakisuna.jp/kinen/"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-toltutorihigasihamakaigann",
    "name": "東浜海岸",
    "prefecture": "鳥取県",
    "lat": 35.600683,
    "lng": 134.361699,
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "東浜は砂浜からキスやヒラメ・マゴチを狙う候補。海水浴のほかサーフィン利用もあるため、空いた区画と穏やかな海況を確認して釣行を決める。",
    "caution": [
      "海水浴期・サーファーのいる範囲では釣らない。駐車場所と浜への正規の通路を確認する。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutorihigasihamakaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.600683/134.361699/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-toltutoriuradomekaigann",
    "name": "浦富海岸",
    "prefecture": "鳥取県",
    "lat": 35.590441,
    "lng": 134.325049,
    "fish": [
      "シロギス",
      "ヒラメ",
      "マゴチ"
    ],
    "methodSlugs": [
      "choinage",
      "surf-lure"
    ],
    "note": "浦富は砂浜からキスやヒラメ・マゴチを狙う候補。観光・海水浴と共用する海岸のため、釣り可能な時期と区画を確認したい。",
    "caution": [
      "海水浴期間の遊泳区画では釣らない。高波時や人の多い場所で投げ釣りをしない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba1/toltutoriuradomekaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.590441/134.325049/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  },
  {
    "slug": "coast-simanekuromatukaigann",
    "name": "黒松海岸",
    "prefecture": "島根県",
    "lat": 35.057613,
    "lng": 132.311268,
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
    "note": "黒松は砂浜からキス・カレイやヒラメ・マゴチを狙う候補。隣接する港や岩場とは別に、砂底の方向を確かめて釣りを組み立てる。",
    "caution": [
      "海水浴の区画・期間を確認し、人がいる方向へ投げない。波の高い日は浜へ近づかない。",
      "釣り情報は利用許可を保証するものではありません。現地の掲示・漁業作業・工事を優先し、禁止区画へ入らないでください。"
    ],
    "sources": [
      {
        "label": "釣り広場.com：地形・岸釣りの参考情報",
        "url": "https://c.turihiroba.com/turiba2/simanekuromatukaigann.html"
      },
      {
        "label": "国土地理院：マーカー付近の地形",
        "url": "https://maps.gsi.go.jp/#18/35.057613/132.311268/&base=std&ls=std&disp=1"
      }
    ],
    "primaryType": "beach"
  }
];
export const shoreMapGrowth=createHarborEntries(places);
