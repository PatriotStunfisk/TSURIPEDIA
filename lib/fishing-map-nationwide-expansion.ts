import type {FishingMapEntry} from './fishing-map-data';
const defaults={verifiedAt:'2026-09-16',season:'利用期間・釣期・当日の営業は公式案内を確認',beginner:false,kids:false,bestFor:['出典の案内から釣行を計画'],timing:'当日の気象・水位・波と管理者の告知を確認。',tips:['魚種や便に合う仕掛けを管理者・船宿へ確認'],caution:['立入禁止・採捕制限と現地掲示を優先','救命胴衣を着用し、荒天・増水時は釣行しない'],guideSlugs:['fishing-first-checklist']};
type Addition=Omit<FishingMapEntry,keyof typeof defaults>&Partial<Pick<FishingMapEntry,keyof typeof defaults>>;
const additions:Addition[]=
[
  {
    "slug": "akita-north",
    "type": "spot",
    "name": "秋田港北防波堤",
    "prefecture": "秋田県",
    "area": "秋田県・秋田港北防波堤",
    "terrain": "pier",
    "fish": [],
    "methods": [],
    "note": "指定された北防波堤の開放釣り場。未就学児は入場できません。開放日と当日の中止告知を確認して受付へ。",
    "access": "秋田県秋田市土崎港西一丁目。詳細な経路と受付は出典の公式案内を確認。",
    "field": "指定された北防波堤の開放釣り場。未就学児は入場できません。開放日と当日の中止告知を確認して受付へ。",
    "googleQuery": "秋田港北防波堤",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.pa.thr.mlit.go.jp/akita/100/20200101002000.html"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%A7%8B%E7%94%B0%E7%9C%8C%E7%A7%8B%E7%94%B0%E5%B8%82%E5%9C%9F%E5%B4%8E%E6%B8%AF%E8%A5%BF%E4%B8%80%E4%B8%81%E7%9B%AE"
      }
    ],
    "lat": 39.752254,
    "lng": 140.061172,
    "positionNote": "ピンは国土地理院の住所検索による秋田県秋田市土崎港西一丁目の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。"
  },
  {
    "slug": "shinchi-park",
    "type": "spot",
    "name": "新地町海釣り公園",
    "prefecture": "福島県",
    "area": "福島県・新地町海釣り公園",
    "terrain": "park",
    "fish": [],
    "methods": [],
    "note": "相馬港5号埠頭の管理釣り場。予約制のため、空き状況と受付を公式サイトで確認します。周辺港湾の立入禁止区域へは入らないでください。",
    "access": "福島県相馬郡新地町今泉。詳細な経路と受付は出典の公式案内を確認。",
    "field": "相馬港5号埠頭の管理釣り場。予約制のため、空き状況と受付を公式サイトで確認します。周辺港湾の立入禁止区域へは入らないでください。",
    "googleQuery": "新地町海釣り公園",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.shinchi-fishing.com/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%A6%8F%E5%B3%B6%E7%9C%8C%E6%96%B0%E5%9C%B0%E7%94%BA%E4%BB%8A%E6%B3%89"
      }
    ],
    "lat": 37.854523,
    "lng": 140.933273,
    "positionNote": "ピンは福島県新地町今泉の町域代表点です。受付・釣座ではありません。公式アクセス図を確認してください。"
  },
  {
    "slug": "kashima-fishing",
    "type": "spot",
    "name": "鹿島港魚釣園",
    "prefecture": "茨城県",
    "area": "茨城県・鹿島港魚釣園",
    "terrain": "park",
    "fish": [],
    "methods": [],
    "note": "鹿島港の指定区間で釣りをする県営施設。貸竿・餌販売があり、入園時の同意書と救命胴衣着用が必要です。",
    "access": "茨城県鹿嶋市新浜。詳細な経路と受付は出典の公式案内を確認。",
    "field": "鹿島港の指定区間で釣りをする県営施設。貸竿・餌販売があり、入園時の同意書と救命胴衣着用が必要です。",
    "googleQuery": "鹿島港魚釣園",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://kashima-fa.com/access/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E9%B9%BF%E5%B6%8B%E5%B8%82%E6%96%B0%E6%B5%9C"
      }
    ],
    "lat": 35.93799166959721,
    "lng": 140.70115323994554,
    "positionNote": "公式アクセスページ掲載の参考位置。入口と開放区間は当日の案内を優先。",
    "parking": true,
    "toilet": true,
    "beginner": true,
    "kids": true
  },
  {
    "slug": "wakasu-fishing",
    "type": "spot",
    "name": "若洲海浜公園 海釣り施設",
    "prefecture": "東京都",
    "area": "東京都・若洲海浜公園 海釣り施設",
    "terrain": "park",
    "fish": [
      "スズキ",
      "カサゴ",
      "メバル",
      "クロダイ"
    ],
    "methods": [],
    "note": "防波堤・護岸・人工磯の釣り施設。振りかぶる・横から投げる投げ釣りとルアー釣り、撒き餌は禁止。売店は営業終了のため釣具・餌を持参します。",
    "access": "東京都江東区若洲三丁目。詳細な経路と受付は出典の公式案内を確認。",
    "field": "防波堤・護岸・人工磯の釣り施設。振りかぶる・横から投げる投げ釣りとルアー釣り、撒き餌は禁止。売店は営業終了のため釣具・餌を持参します。",
    "googleQuery": "若洲海浜公園 海釣り施設",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.tptc.co.jp/park/03_10/fishing"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B1%9F%E6%9D%B1%E5%8C%BA%E8%8B%A5%E6%B4%B2%E4%B8%89%E4%B8%81%E7%9B%AE"
      }
    ],
    "lat": 35.622387,
    "lng": 139.836166,
    "positionNote": "ピンは国土地理院の住所検索による東京都江東区若洲三丁目の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "fishSlugs": [
      "suzuki",
      "kasago",
      "mebaru",
      "chinu"
    ]
  },
  {
    "slug": "daikoku-fishing",
    "type": "spot",
    "name": "大黒海づり施設",
    "prefecture": "神奈川県",
    "area": "神奈川県・大黒海づり施設",
    "terrain": "park",
    "fish": [],
    "methods": [],
    "note": "大黒ふ頭の海づり施設。途中の港湾関係者専用区域には入れません。予約・入場制限を運営者の案内で確認します。",
    "access": "神奈川県横浜市鶴見区大黒ふ頭。詳細な経路と受付は出典の公式案内を確認。",
    "field": "大黒ふ頭の海づり施設。途中の港湾関係者専用区域には入れません。予約・入場制限を運営者の案内で確認します。",
    "googleQuery": "大黒海づり施設",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://yokohama-fishingpiers.jp/daikoku/facility-guide/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%A4%A7%E9%BB%92%E3%81%B5%E9%A0%AD"
      }
    ],
    "lat": 35.459953,
    "lng": 139.680527,
    "positionNote": "ピンは国土地理院の住所検索による神奈川県横浜市鶴見区大黒ふ頭の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。"
  },
  {
    "slug": "isogo-fishing",
    "type": "spot",
    "name": "磯子海づり施設",
    "prefecture": "神奈川県",
    "area": "神奈川県・磯子海づり施設",
    "terrain": "park",
    "fish": [],
    "methods": [],
    "note": "横浜市の海づり施設。磯子駅から施設方面のバスを利用できます。周囲のふ頭・防波堤が自由な釣り場という意味ではありません。",
    "access": "神奈川県横浜市磯子区新磯子町。詳細な経路と受付は出典の公式案内を確認。",
    "field": "横浜市の海づり施設。磯子駅から施設方面のバスを利用できます。周囲のふ頭・防波堤が自由な釣り場という意味ではありません。",
    "googleQuery": "磯子海づり施設",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.city.yokohama.lg.jp/kanko-bunka/minato/taikan/asobu/spot/umizuri.html"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E7%A3%AF%E5%AD%90%E5%8C%BA%E6%96%B0%E7%A3%AF%E5%AD%90%E7%94%BA"
      }
    ],
    "lat": 35.404591,
    "lng": 139.63353,
    "positionNote": "ピンは国土地理院の住所検索による神奈川県横浜市磯子区新磯子町の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。"
  },
  {
    "slug": "ichihara-fishing",
    "type": "spot",
    "name": "オリジナルメーカー海づり公園",
    "prefecture": "千葉県",
    "area": "千葉県・オリジナルメーカー海づり公園",
    "terrain": "park",
    "fish": [],
    "methods": [],
    "note": "養老川河口近くにある市原市の桟橋型釣り施設。釣座・利用できる道具・当日の風による閉鎖を公式案内で確認します。",
    "access": "千葉県市原市五井南海岸。詳細な経路と受付は出典の公式案内を確認。",
    "field": "養老川河口近くにある市原市の桟橋型釣り施設。釣座・利用できる道具・当日の風による閉鎖を公式案内で確認します。",
    "googleQuery": "オリジナルメーカー海づり公園",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://ichihara-umizuri.com/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%8D%83%E8%91%89%E7%9C%8C%E5%B8%82%E5%8E%9F%E5%B8%82%E4%BA%94%E4%BA%95%E5%8D%97%E6%B5%B7%E5%B2%B8"
      }
    ],
    "lat": 35.54235433758962,
    "lng": 140.05780907625373,
    "positionNote": "公式サイトの埋込地図中心を参考表示。受付は施設の案内へ。"
  },
  {
    "slug": "ishida-fisherina",
    "type": "spot",
    "name": "石田フィッシャリーナ つり桟橋",
    "prefecture": "富山県",
    "area": "富山県・石田フィッシャリーナ つり桟橋",
    "terrain": "pier",
    "fish": [],
    "methods": [
      "サビキ"
    ],
    "note": "漁港のボート区域と分離して設けられたつり桟橋。サビキの貸竿が案内され、季節で閉門時間が変わります。",
    "access": "富山県黒部市浜石田。詳細な経路と受付は出典の公式案内を確認。",
    "field": "漁港のボート区域と分離して設けられたつり桟橋。サビキの貸竿が案内され、季節で閉門時間が変わります。",
    "googleQuery": "石田フィッシャリーナ つり桟橋",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://fisyarina.webes.jp/sanbashi_jyouhou.php"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%AF%8C%E5%B1%B1%E7%9C%8C%E9%BB%92%E9%83%A8%E5%B8%82%E6%B5%9C%E7%9F%B3%E7%94%B0"
      }
    ],
    "lat": 36.863701,
    "lng": 137.416626,
    "positionNote": "ピンは国土地理院の住所検索による富山県黒部市浜石田の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "methodSlugs": [
      "sabiki"
    ]
  },
  {
    "slug": "shinmaiko-fishing",
    "type": "spot",
    "name": "新舞子マリンパーク 魚釣り施設",
    "prefecture": "愛知県",
    "area": "愛知県・新舞子マリンパーク 魚釣り施設",
    "terrain": "park",
    "fish": [],
    "methods": [],
    "note": "公園内の指定魚釣り施設。竿・救命胴衣の貸出窓口は釣り施設から離れた管理事務所にあります。浜全域での釣り案内ではありません。",
    "access": "愛知県知多市緑浜町。詳細な経路と受付は出典の公式案内を確認。",
    "field": "公園内の指定魚釣り施設。竿・救命胴衣の貸出窓口は釣り施設から離れた管理事務所にあります。浜全域での釣り案内ではありません。",
    "googleQuery": "新舞子マリンパーク 魚釣り施設",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.port-of-nagoya.jp/kanko/kankoshisetsu/1000895.html"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E7%9F%A5%E7%9C%8C%E7%9F%A5%E5%A4%9A%E5%B8%82%E7%B7%91%E6%B5%9C%E7%94%BA"
      }
    ],
    "lat": 34.95768,
    "lng": 136.819,
    "positionNote": "ピンは国土地理院の住所検索による愛知県知多市緑浜町の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "parking": true,
    "toilet": true,
    "beginner": true
  },
  {
    "slug": "toyohama-pier",
    "type": "spot",
    "name": "豊浜漁港 釣桟橋",
    "prefecture": "愛知県",
    "area": "愛知県・豊浜漁港 釣桟橋",
    "terrain": "pier",
    "fish": [],
    "methods": [],
    "note": "豊浜地区の緑地とともに整備された釣桟橋。水揚げや工事の区域を避け、桟橋の利用条件と現地掲示を確認します。",
    "access": "愛知県知多郡南知多町豊浜。詳細な経路と受付は出典の公式案内を確認。",
    "field": "豊浜地区の緑地とともに整備された釣桟橋。水揚げや工事の区域を避け、桟橋の利用条件と現地掲示を確認します。",
    "googleQuery": "豊浜漁港 釣桟橋",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.pref.aichi.jp/soshiki/kowan/0000039903.html"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E7%9F%A5%E7%9C%8C%E5%8D%97%E7%9F%A5%E5%A4%9A%E7%94%BA%E8%B1%8A%E6%B5%9C"
      }
    ],
    "lat": 34.716042,
    "lng": 136.904388,
    "positionNote": "ピンは愛知県南知多町大字豊浜の町域代表点です。受付・釣座ではありません。公式アクセス図を確認してください。"
  },
  {
    "slug": "arai-benten",
    "type": "spot",
    "name": "新居弁天海釣公園",
    "prefecture": "静岡県",
    "area": "静岡県・新居弁天海釣公園",
    "terrain": "park",
    "fish": [],
    "methods": [],
    "note": "浜名湖の今切口近くにT字型堤防が並ぶ海釣公園。釣具レンタルのある店舗と公衆トイレがあります。今切口の流れと通航船に注意します。",
    "access": "静岡県湖西市新居町新居。詳細な経路と受付は出典の公式案内を確認。",
    "field": "浜名湖の今切口近くにT字型堤防が並ぶ海釣公園。釣具レンタルのある店舗と公衆トイレがあります。今切口の流れと通航船に注意します。",
    "googleQuery": "新居弁天海釣公園",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://hamanako-kosai.jp/location/2330/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%9D%99%E5%B2%A1%E7%9C%8C%E6%B9%96%E8%A5%BF%E5%B8%82%E6%96%B0%E5%B1%85%E7%94%BA%E6%96%B0%E5%B1%85"
      }
    ],
    "lat": 34.6817317,
    "lng": 137.589509,
    "positionNote": "観光協会の埋込地図中心を参考表示。釣座は現地掲示を確認。",
    "parking": true,
    "toilet": true,
    "beginner": true
  },
  {
    "slug": "suma-fishing",
    "type": "spot",
    "name": "須磨海づり公園",
    "prefecture": "兵庫県",
    "area": "兵庫県・須磨海づり公園",
    "terrain": "park",
    "fish": [],
    "methods": [],
    "note": "須磨浦公園駅からアクセスできる海づり公園。季節で開園時間が変わるため最新案内を確認。車は須磨浦公園駐車場を利用します。",
    "access": "兵庫県神戸市須磨区一ノ谷町五丁目。詳細な経路と受付は出典の公式案内を確認。",
    "field": "須磨浦公園駅からアクセスできる海づり公園。季節で開園時間が変わるため最新案内を確認。車は須磨浦公園駐車場を利用します。",
    "googleQuery": "須磨海づり公園",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://sumasakana-park.com/guide/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%85%B5%E5%BA%AB%E7%9C%8C%E7%A5%9E%E6%88%B8%E5%B8%82%E9%A0%88%E7%A3%A8%E5%8C%BA%E4%B8%80%E3%83%8E%E8%B0%B7%E7%94%BA%E4%BA%94%E4%B8%81%E7%9B%AE"
      }
    ],
    "lat": 34.637539,
    "lng": 135.101196,
    "positionNote": "ピンは国土地理院の住所検索による兵庫県神戸市須磨区一ノ谷町五丁目の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "parking": true
  },
  {
    "slug": "yumeminato-park",
    "type": "spot",
    "name": "夢みなと公園",
    "prefecture": "鳥取県",
    "area": "鳥取県・夢みなと公園",
    "terrain": "shore",
    "fish": [],
    "methods": [],
    "note": "夢みなとタワー周辺の公園。運営者が周辺の釣り利用を紹介しています。ボードウォークの歩行者と港の作業を優先し、禁止区間は現地で確認します。",
    "access": "鳥取県境港市竹内団地。詳細な経路と受付は出典の公式案内を確認。",
    "field": "夢みなとタワー周辺の公園。運営者が周辺の釣り利用を紹介しています。ボードウォークの歩行者と港の作業を優先し、禁止区間は現地で確認します。",
    "googleQuery": "夢みなと公園",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.yumeminatotower.gr.jp/access/area/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%B3%A5%E5%8F%96%E7%9C%8C%E5%A2%83%E6%B8%AF%E5%B8%82%E7%AB%B9%E5%86%85%E5%9B%A3%E5%9C%B0"
      }
    ],
    "lat": 35.522263,
    "lng": 133.253662,
    "positionNote": "ピンは国土地理院の住所検索による鳥取県境港市竹内団地の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "toilet": true
  },
  {
    "slug": "fukuoka-fishing",
    "type": "spot",
    "name": "福岡市海づり公園",
    "prefecture": "福岡県",
    "area": "福岡県・福岡市海づり公園",
    "terrain": "park",
    "fish": [],
    "methods": [],
    "note": "博多湾へ突き出たT字型桟橋と海洋釣堀。初心者向けの釣り指導と貸竿が案内されています。釣台と釣堀では利用方法が異なります。",
    "access": "福岡県福岡市西区小田。詳細な経路と受付は出典の公式案内を確認。",
    "field": "博多湾へ突き出たT字型桟橋と海洋釣堀。初心者向けの釣り指導と貸竿が案内されています。釣台と釣堀では利用方法が異なります。",
    "googleQuery": "福岡市海づり公園",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://yokanavi.com/spots/77822"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E8%A5%BF%E5%8C%BA%E5%B0%8F%E7%94%B0"
      },
      {
        "label": "管理者：最新の開園案内",
        "url": "https://umizuri.com/"
      }
    ],
    "lat": 33.629471,
    "lng": 130.215942,
    "positionNote": "ピンは国土地理院の住所検索による福岡県福岡市西区小田の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "parking": true,
    "toilet": true,
    "beginner": true
  },
  {
    "slug": "kehi-beach",
    "type": "spot",
    "name": "気比の浜・河口周辺",
    "prefecture": "兵庫県",
    "area": "兵庫県・気比の浜・河口周辺",
    "terrain": "estuary",
    "fish": [],
    "methods": [],
    "note": "市観光サイトが紹介する釣りスポットはビーチ端の防波堤。アジ・キス・カレイ・スズキ・サゴシの紹介があります。遊泳区域・河口の流れ・通航船を避けて利用します。",
    "access": "兵庫県豊岡市気比。詳細な経路と受付は出典の公式案内を確認。",
    "field": "市観光サイトが紹介する釣りスポットはビーチ端の防波堤。アジ・キス・カレイ・スズキ・サゴシの紹介があります。遊泳区域・河口の流れ・通航船を避けて利用します。",
    "googleQuery": "気比の浜・河口周辺",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://toyooka-tourism.com/spot/kehi-beach/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%85%B5%E5%BA%AB%E7%9C%8C%E8%B1%8A%E5%B2%A1%E5%B8%82%E6%B0%97%E6%AF%94"
      }
    ],
    "lat": 35.630508,
    "lng": 134.842743,
    "positionNote": "ピンは国土地理院の住所検索による兵庫県豊岡市気比の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。"
  },
  {
    "slug": "yamanaka-lake",
    "type": "area",
    "name": "山中湖・釣行計画",
    "prefecture": "山梨県",
    "area": "山梨県・山中湖・釣行計画",
    "terrain": "lake",
    "fish": [],
    "methods": [],
    "note": "漁協のフィッシングポイントと貸ボート案内から釣行を計画します。遊漁券に加え、禁漁区域・保安区域・対象魚別ルールの確認が必要です。",
    "access": "山梨県南都留郡山中湖村平野。詳細な経路と受付は出典の公式案内を確認。",
    "field": "漁協のフィッシングポイントと貸ボート案内から釣行を計画します。遊漁券に加え、禁漁区域・保安区域・対象魚別ルールの確認が必要です。",
    "googleQuery": "山中湖・釣行計画",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.lake-yamanaka.net/fishing-info"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%B1%B1%E6%A2%A8%E7%9C%8C%E5%B1%B1%E4%B8%AD%E6%B9%96%E6%9D%91%E5%B9%B3%E9%87%8E"
      }
    ],
    "lat": 35.424641,
    "lng": 138.891769,
    "positionNote": "ピンは山梨県山中湖村平野の町域代表点です。受付・釣座ではありません。公式アクセス図を確認してください。"
  },
  {
    "slug": "chuzenji-lake",
    "type": "area",
    "name": "中禅寺湖・釣行計画",
    "prefecture": "栃木県",
    "area": "栃木県・中禅寺湖・釣行計画",
    "terrain": "lake",
    "fish": [],
    "methods": [],
    "note": "漁協が湖のフィッシングマップを公開しています。岸釣り・船釣りの解禁、券の販売場所、持ち帰り条件は当年の公式案内を確認します。",
    "access": "栃木県日光市中宮祠。詳細な経路と受付は出典の公式案内を確認。",
    "field": "漁協が湖のフィッシングマップを公開しています。岸釣り・船釣りの解禁、券の販売場所、持ち帰り条件は当年の公式案内を確認します。",
    "googleQuery": "中禅寺湖・釣行計画",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.chuzenjiko.or.jp/fishing_map.html"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%A0%83%E6%9C%A8%E7%9C%8C%E6%97%A5%E5%85%89%E5%B8%82%E4%B8%AD%E5%AE%AE%E7%A5%A0"
      }
    ],
    "lat": 36.766666,
    "lng": 139.430939,
    "positionNote": "ピンは国土地理院の住所検索による栃木県日光市中宮祠の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。"
  },
  {
    "slug": "kizaki-lake",
    "type": "area",
    "name": "木崎湖・釣行計画",
    "prefecture": "長野県",
    "area": "長野県・木崎湖・釣行計画",
    "terrain": "lake",
    "fish": [],
    "methods": [],
    "note": "遊漁券は貸ボート取扱店へ。キャンプ場桟橋での釣りは禁止されているため、湖面利用のローカルルールを確認して釣座を選びます。",
    "access": "長野県大町市平。詳細な経路と受付は出典の公式案内を確認。",
    "field": "遊漁券は貸ボート取扱店へ。キャンプ場桟橋での釣りは禁止されているため、湖面利用のローカルルールを確認して釣座を選びます。",
    "googleQuery": "木崎湖・釣行計画",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.city.omachi.nagano.jp/shisei/shokai/sonota/lmrm0ok3bqgclr2s5wzss0i6"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%95%B7%E9%87%8E%E7%9C%8C%E5%A4%A7%E7%94%BA%E5%B8%82%E5%B9%B3"
      }
    ],
    "lat": 36.498711,
    "lng": 137.734756,
    "positionNote": "ピンは国土地理院の住所検索による長野県大町市平の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。"
  },
  {
    "slug": "gujo-nagara",
    "type": "area",
    "name": "長良川・郡上漁協管内",
    "prefecture": "岐阜県",
    "area": "岐阜県・長良川・郡上漁協管内",
    "terrain": "river",
    "fish": [
      "アユ",
      "アマゴ"
    ],
    "methods": [
      "友釣り",
      "渓流の餌釣り"
    ],
    "note": "アユとアマゴの釣行計画。漁協の釣り場MAP・河川情報・解禁案内を一緒に確認します。支流や魚種で条件が異なります。",
    "access": "岐阜県郡上市八幡町稲成。詳細な経路と受付は出典の公式案内を確認。",
    "field": "アユとアマゴの釣行計画。漁協の釣り場MAP・河川情報・解禁案内を一緒に確認します。支流や魚種で条件が異なります。",
    "googleQuery": "長良川・郡上漁協管内",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.gujo-fc.or.jp/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%B2%90%E9%98%9C%E7%9C%8C%E9%83%A1%E4%B8%8A%E5%B8%82%E5%85%AB%E5%B9%A1%E7%94%BA%E7%A8%B2%E6%88%90"
      }
    ],
    "lat": 35.734066,
    "lng": 136.955994,
    "positionNote": "ピンは国土地理院の住所検索による岐阜県郡上市八幡町稲成の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "fishSlugs": [
      "ayu",
      "amago"
    ],
    "methodSlugs": [
      "ayu-tomozuri",
      "freshwater-bait"
    ]
  },
  {
    "slug": "shimanto-river",
    "type": "area",
    "name": "四万十川・釣行計画",
    "prefecture": "高知県",
    "area": "高知県・四万十川・釣行計画",
    "terrain": "river",
    "fish": [],
    "methods": [],
    "note": "四万十川漁連の遊漁ルールを起点に、釣る区間・魚種・漁法を選びます。同じ水系でも区域ごとに解禁や利用条件が異なります。",
    "access": "高知県四万十市西土佐江川崎。詳細な経路と受付は出典の公式案内を確認。",
    "field": "四万十川漁連の遊漁ルールを起点に、釣る区間・魚種・漁法を選びます。同じ水系でも区域ごとに解禁や利用条件が異なります。",
    "googleQuery": "四万十川・釣行計画",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.shimantogawa-gyoren.com/get-involved"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%AB%98%E7%9F%A5%E7%9C%8C%E5%9B%9B%E4%B8%87%E5%8D%81%E5%B8%82%E8%A5%BF%E5%9C%9F%E4%BD%90%E6%B1%9F%E5%B7%9D%E5%B4%8E"
      }
    ],
    "lat": 33.178207,
    "lng": 132.769867,
    "positionNote": "ピンは国土地理院の住所検索による高知県四万十市西土佐江川崎の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。"
  },
  {
    "slug": "yumigahama-surf",
    "type": "area",
    "name": "弓ヶ浜（鳥取）・サーフ釣行計画",
    "prefecture": "鳥取県",
    "area": "鳥取県・弓ヶ浜（鳥取）・サーフ釣行計画",
    "terrain": "beach",
    "fish": [
      "シロギス"
    ],
    "methods": [
      "投げ釣り"
    ],
    "note": "シマノのキス投げ釣り大会が開催された鳥取の弓ヶ浜。砂浜のどこでも釣れるという案内ではなく、遊泳客・海況・規制を確認して釣行を計画するエリアです。",
    "access": "鳥取県米子市富益町。詳細な経路と受付は出典の公式案内を確認。",
    "field": "シマノのキス投げ釣り大会が開催された鳥取の弓ヶ浜。砂浜のどこでも釣れるという案内ではなく、遊泳客・海況・規制を確認して釣行を計画するエリアです。",
    "googleQuery": "弓ヶ浜（鳥取）・サーフ釣行計画",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://fishingeventjp.shimano.com/2026/japan_cup/nage/1153/result/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%B3%A5%E5%8F%96%E7%9C%8C%E7%B1%B3%E5%AD%90%E5%B8%82%E5%AF%8C%E7%9B%8A%E7%94%BA"
      }
    ],
    "lat": 35.474098,
    "lng": 133.28183,
    "positionNote": "ピンは国土地理院の住所検索による鳥取県米子市富益町の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "fishSlugs": [
      "kisu"
    ],
    "methodSlugs": [
      "choinage"
    ]
  },
  {
    "slug": "aburatsubo-rock",
    "type": "area",
    "name": "油壺湾・磯釣り計画",
    "prefecture": "神奈川県",
    "area": "神奈川県・油壺湾・磯釣り計画",
    "terrain": "rock",
    "fish": [],
    "methods": [],
    "note": "三浦市の観光マップが磯釣りスポットとして紹介する湾。岩場の通行可否・潮位・波を確認し、私有地や自然保護区域へ踏み込まない計画が必要です。",
    "access": "神奈川県三浦市三崎町小網代。詳細な経路と受付は出典の公式案内を確認。",
    "field": "三浦市の観光マップが磯釣りスポットとして紹介する湾。岩場の通行可否・潮位・波を確認し、私有地や自然保護区域へ踏み込まない計画が必要です。",
    "googleQuery": "油壺湾・磯釣り計画",
    "sources": [
      {
        "label": "公式・運営者の利用案内",
        "url": "https://www.city.miura.kanagawa.jp/material/files/group/27/miurakankoumapR4.pdf"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E4%B8%89%E6%B5%A6%E5%B8%82%E4%B8%89%E5%B4%8E%E7%94%BA%E5%B0%8F%E7%B6%B2%E4%BB%A3"
      }
    ],
    "lat": 35.161861,
    "lng": 139.629852,
    "positionNote": "ピンは国土地理院の住所検索による神奈川県三浦市三崎町小網代の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。"
  },
  {
    "slug": "boat-kamimaru",
    "type": "boat",
    "name": "釣船 上丸",
    "prefecture": "大阪府",
    "area": "大阪湾",
    "terrain": "boat",
    "port": "北中通漁港",
    "officialUrl": "https://www.kamimaru.jp/",
    "fish": [
      "タチウオ"
    ],
    "fishSlugs": [
      "tachiuo"
    ],
    "methods": [],
    "methodSlugs": [
      "tachiuo-tenya"
    ],
    "note": "北中通漁港からの船釣り。対象便・釣り物を公式案内で選び、指定タックルと集合場所を確認して予約します。",
    "access": "大阪府泉佐野市住吉町周辺。正式な集合場所は船宿のアクセス案内を確認。",
    "field": "大阪湾の船釣り。出船日と海況により対象魚・釣行先が変わります。",
    "googleQuery": "釣船 上丸 北中通漁港",
    "sources": [
      {
        "label": "船宿公式：利用・アクセス・釣果",
        "url": "https://www.kamimaru.jp/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E6%B3%89%E4%BD%90%E9%87%8E%E5%B8%82%E4%BD%8F%E5%90%89%E7%94%BA"
      }
    ],
    "lat": 34.426704,
    "lng": 135.326782,
    "positionNote": "ピンは国土地理院の住所検索による大阪府泉佐野市住吉町の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "season": "釣り物ごとの出船予定は船宿公式サイトへ",
    "tips": [
      "予約時に希望魚・経験・貸竿の必要数を伝える",
      "指定の仕掛け・集合港・出船可否・キャンセル条件を確認"
    ],
    "caution": [
      "桟橋や船へ無断で入らない",
      "船長の指定タックルと救命胴衣の案内を優先",
      "料金・出船時間は最新の公式案内を確認"
    ]
  },
  {
    "slug": "boat-uoe",
    "type": "boat",
    "name": "釣り船 魚英",
    "prefecture": "兵庫県",
    "area": "明石海峡",
    "terrain": "boat",
    "port": "明石港",
    "officialUrl": "https://uoe.jp/syoukai",
    "fish": [
      "サワラ",
      "ブリ",
      "マダイ"
    ],
    "fishSlugs": [
      "sawara",
      "buri",
      "madai"
    ],
    "methods": [],
    "methodSlugs": [
      "jigging",
      "tai-rubber"
    ],
    "note": "明石港からの船釣り。対象便・釣り物を公式案内で選び、指定タックルと集合場所を確認して予約します。",
    "access": "兵庫県明石市港町周辺。正式な集合場所は船宿のアクセス案内を確認。",
    "field": "明石海峡の船釣り。出船日と海況により対象魚・釣行先が変わります。",
    "googleQuery": "釣り船 魚英 明石港",
    "sources": [
      {
        "label": "船宿公式：利用・アクセス・釣果",
        "url": "https://uoe.jp/syoukai"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%85%B5%E5%BA%AB%E7%9C%8C%E6%98%8E%E7%9F%B3%E5%B8%82%E6%B8%AF%E7%94%BA"
      }
    ],
    "lat": 34.642384,
    "lng": 134.987808,
    "positionNote": "ピンは国土地理院の住所検索による兵庫県明石市港町の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "season": "釣り物ごとの出船予定は船宿公式サイトへ",
    "tips": [
      "予約時に希望魚・経験・貸竿の必要数を伝える",
      "指定の仕掛け・集合港・出船可否・キャンセル条件を確認"
    ],
    "caution": [
      "桟橋や船へ無断で入らない",
      "船長の指定タックルと救命胴衣の案内を優先",
      "料金・出船時間は最新の公式案内を確認"
    ]
  },
  {
    "slug": "boat-sanpomaru",
    "type": "boat",
    "name": "三邦丸",
    "prefecture": "和歌山県",
    "area": "加太・友ヶ島",
    "terrain": "boat",
    "port": "加太港（便により別港）",
    "officialUrl": "https://sanpomaru.com/",
    "fish": [
      "カサゴ",
      "アジ",
      "マダイ",
      "タチウオ"
    ],
    "fishSlugs": [
      "kasago",
      "aji",
      "madai",
      "tachiuo"
    ],
    "methods": [],
    "methodSlugs": [
      "douzuki"
    ],
    "note": "加太港（便により別港）からの船釣り。対象便・釣り物を公式案内で選び、指定タックルと集合場所を確認して予約します。",
    "access": "和歌山県和歌山市加太周辺。正式な集合場所は船宿のアクセス案内を確認。",
    "field": "加太・友ヶ島の船釣り。出船日と海況により対象魚・釣行先が変わります。",
    "googleQuery": "三邦丸 加太港（便により別港）",
    "sources": [
      {
        "label": "船宿公式：利用・アクセス・釣果",
        "url": "https://sanpomaru.com/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%92%8C%E6%AD%8C%E5%B1%B1%E7%9C%8C%E5%92%8C%E6%AD%8C%E5%B1%B1%E5%B8%82%E5%8A%A0%E5%A4%AA"
      },
      {
        "label": "公式アクセス",
        "url": "https://sanpomaru.com/access/"
      },
      {
        "label": "和歌山県観光：対象魚と初心者の乗船体験",
        "url": "https://www.wakayama-kanko.or.jp/features/detail_685.html"
      }
    ],
    "lat": 34.274644,
    "lng": 135.072457,
    "positionNote": "加太の公式アクセス地図の参考位置。西脇漁港発の便もあるため便名と集合港を必ず確認。",
    "beginner": true,
    "season": "釣り物ごとの出船予定は船宿公式サイトへ",
    "tips": [
      "予約時に希望魚・経験・貸竿の必要数を伝える",
      "指定の仕掛け・集合港・出船可否・キャンセル条件を確認"
    ],
    "caution": [
      "桟橋や船へ無断で入らない",
      "船長の指定タックルと救命胴衣の案内を優先",
      "料金・出船時間は最新の公式案内を確認"
    ]
  },
  {
    "slug": "boat-niraikanai",
    "type": "boat",
    "name": "ニライカナイ",
    "prefecture": "愛媛県",
    "area": "瀬戸内・松山沖",
    "terrain": "boat",
    "port": "北吉田港",
    "officialUrl": "https://www.niraikanai.net/infomation/index.html",
    "fish": [
      "マダイ",
      "タチウオ"
    ],
    "fishSlugs": [
      "madai",
      "tachiuo"
    ],
    "methods": [],
    "methodSlugs": [
      "tai-rubber",
      "jigging"
    ],
    "note": "北吉田港からの船釣り。対象便・釣り物を公式案内で選び、指定タックルと集合場所を確認して予約します。",
    "access": "愛媛県松山市北吉田町周辺。正式な集合場所は船宿のアクセス案内を確認。",
    "field": "瀬戸内・松山沖の船釣り。出船日と海況により対象魚・釣行先が変わります。",
    "googleQuery": "ニライカナイ 北吉田港",
    "sources": [
      {
        "label": "船宿公式：利用・アクセス・釣果",
        "url": "https://www.niraikanai.net/infomation/index.html"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E6%9D%BE%E5%B1%B1%E5%B8%82%E5%8C%97%E5%90%89%E7%94%B0%E7%94%BA"
      },
      {
        "label": "DAIWA船宿情報：北吉田港・対象釣法",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190781_4178"
      }
    ],
    "lat": 33.837799,
    "lng": 132.70459,
    "positionNote": "ピンは国土地理院の住所検索による愛媛県松山市北吉田町の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "parking": true,
    "toilet": true,
    "season": "釣り物ごとの出船予定は船宿公式サイトへ",
    "tips": [
      "予約時に希望魚・経験・貸竿の必要数を伝える",
      "指定の仕掛け・集合港・出船可否・キャンセル条件を確認"
    ],
    "caution": [
      "桟橋や船へ無断で入らない",
      "船長の指定タックルと救命胴衣の案内を優先",
      "料金・出船時間は最新の公式案内を確認"
    ]
  },
  {
    "slug": "boat-happiness2",
    "type": "boat",
    "name": "ハピネス2",
    "prefecture": "京都府",
    "area": "日本海・丹後",
    "terrain": "boat",
    "port": "養老漁港",
    "officialUrl": "https://happiness2.jp/access",
    "fish": [
      "ケンサキイカ"
    ],
    "fishSlugs": [
      "kensakiika"
    ],
    "methods": [],
    "methodSlugs": [
      "jigging",
      "ika-metal"
    ],
    "note": "養老漁港からの船釣り。対象便・釣り物を公式案内で選び、指定タックルと集合場所を確認して予約します。 養老漁港荷揚場への利用客の車の乗り入れは禁止です。",
    "access": "京都府宮津市岩ケ鼻周辺。正式な集合場所は船宿のアクセス案内を確認。",
    "field": "日本海・丹後の船釣り。出船日と海況により対象魚・釣行先が変わります。",
    "googleQuery": "ハピネス2 養老漁港",
    "sources": [
      {
        "label": "船宿公式：利用・アクセス・釣果",
        "url": "https://happiness2.jp/access"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E4%BA%AC%E9%83%BD%E5%BA%9C%E5%AE%AE%E6%B4%A5%E5%B8%82%E5%B2%A9%E3%82%B1%E9%BC%BB"
      },
      {
        "label": "公式：イカメタル釣果",
        "url": "https://happiness2.jp/blog/54596"
      }
    ],
    "lat": 35.660454,
    "lng": 135.259766,
    "positionNote": "ピンは国土地理院の住所検索による京都府宮津市岩ケ鼻の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "season": "釣り物ごとの出船予定は船宿公式サイトへ",
    "tips": [
      "予約時に希望魚・経験・貸竿の必要数を伝える",
      "指定の仕掛け・集合港・出船可否・キャンセル条件を確認"
    ],
    "caution": [
      "桟橋や船へ無断で入らない",
      "船長の指定タックルと救命胴衣の案内を優先",
      "料金・出船時間は最新の公式案内を確認"
    ]
  },
  {
    "slug": "boat-cyueimaru",
    "type": "boat",
    "name": "忠栄丸",
    "prefecture": "愛知県",
    "area": "伊勢湾・伊良湖沖",
    "terrain": "boat",
    "port": "片名漁港",
    "officialUrl": "https://cyueimaru.com/",
    "fish": [
      "タチウオ",
      "マダイ"
    ],
    "fishSlugs": [
      "tachiuo",
      "madai"
    ],
    "methods": [],
    "methodSlugs": [
      "tachiuo-tenya"
    ],
    "note": "片名漁港からの船釣り。対象便・釣り物を公式案内で選び、指定タックルと集合場所を確認して予約します。",
    "access": "愛知県知多郡南知多町片名周辺。正式な集合場所は船宿のアクセス案内を確認。",
    "field": "伊勢湾・伊良湖沖の船釣り。出船日と海況により対象魚・釣行先が変わります。",
    "googleQuery": "忠栄丸 片名漁港",
    "sources": [
      {
        "label": "船宿公式：利用・アクセス・釣果",
        "url": "https://cyueimaru.com/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E7%9F%A5%E7%9C%8C%E5%8D%97%E7%9F%A5%E5%A4%9A%E7%94%BA%E7%89%87%E5%90%8D"
      }
    ],
    "parking": true,
    "season": "釣り物ごとの出船予定は船宿公式サイトへ",
    "tips": [
      "予約時に希望魚・経験・貸竿の必要数を伝える",
      "指定の仕掛け・集合港・出船可否・キャンセル条件を確認"
    ],
    "caution": [
      "桟橋や船へ無断で入らない",
      "船長の指定タックルと救命胴衣の案内を優先",
      "料金・出船時間は最新の公式案内を確認"
    ],
    "lat": 34.715866,
    "lng": 136.959534,
    "positionNote": "ピンは愛知県南知多町大字片名の町域代表点です。受付・釣座ではありません。公式アクセス図を確認してください。"
  },
  {
    "slug": "boat-tsurikou",
    "type": "boat",
    "name": "つり幸",
    "prefecture": "神奈川県",
    "area": "東京湾",
    "terrain": "boat",
    "port": "川崎",
    "officialUrl": "https://www.tsurikou.com/",
    "fish": [
      "アジ",
      "タチウオ",
      "シロギス",
      "マダコ",
      "サワラ"
    ],
    "fishSlugs": [
      "aji",
      "tachiuo",
      "kisu",
      "madako",
      "sawara"
    ],
    "methods": [],
    "methodSlugs": [
      "blade-jig"
    ],
    "note": "川崎からの船釣り。対象便・釣り物を公式案内で選び、指定タックルと集合場所を確認して予約します。",
    "access": "神奈川県川崎市川崎区池上町周辺。正式な集合場所は船宿のアクセス案内を確認。",
    "field": "東京湾の船釣り。出船日と海況により対象魚・釣行先が変わります。",
    "googleQuery": "つり幸 川崎",
    "sources": [
      {
        "label": "船宿公式：利用・アクセス・釣果",
        "url": "https://www.tsurikou.com/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%B7%9D%E5%B4%8E%E5%B8%82%E5%B7%9D%E5%B4%8E%E5%8C%BA%E6%B1%A0%E4%B8%8A%E7%94%BA"
      },
      {
        "label": "公式アクセス・集合場所",
        "url": "https://www.tsurikou.com/page/Detail/map/"
      }
    ],
    "lat": 35.517269,
    "lng": 139.730209,
    "positionNote": "ピンは国土地理院の住所検索による神奈川県川崎市川崎区池上町の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "parking": true,
    "season": "釣り物ごとの出船予定は船宿公式サイトへ",
    "tips": [
      "予約時に希望魚・経験・貸竿の必要数を伝える",
      "指定の仕掛け・集合港・出船可否・キャンセル条件を確認"
    ],
    "caution": [
      "桟橋や船へ無断で入らない",
      "船長の指定タックルと救命胴衣の案内を優先",
      "料金・出船時間は最新の公式案内を確認"
    ]
  },
  {
    "slug": "boat-shouzaburo",
    "type": "boat",
    "name": "庄三郎丸",
    "prefecture": "神奈川県",
    "area": "相模湾",
    "terrain": "boat",
    "port": "平塚港",
    "officialUrl": "https://www.shouzaburo.com/",
    "fish": [
      "ブリ（イナダ）",
      "シイラ",
      "カンパチ"
    ],
    "fishSlugs": [
      "buri",
      "shiira",
      "kanpachi"
    ],
    "methods": [],
    "methodSlugs": [
      "jigging"
    ],
    "note": "平塚港からの船釣り。対象便・釣り物を公式案内で選び、指定タックルと集合場所を確認して予約します。",
    "access": "神奈川県平塚市千石河岸周辺。正式な集合場所は船宿のアクセス案内を確認。",
    "field": "相模湾の船釣り。出船日と海況により対象魚・釣行先が変わります。",
    "googleQuery": "庄三郎丸 平塚港",
    "sources": [
      {
        "label": "船宿公式：利用・アクセス・釣果",
        "url": "https://www.shouzaburo.com/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E5%B9%B3%E5%A1%9A%E5%B8%82%E5%8D%83%E7%9F%B3%E6%B2%B3%E5%B2%B8"
      }
    ],
    "lat": 35.316624,
    "lng": 139.364761,
    "positionNote": "ピンは国土地理院の住所検索による神奈川県平塚市千石河岸の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "season": "釣り物ごとの出船予定は船宿公式サイトへ",
    "tips": [
      "予約時に希望魚・経験・貸竿の必要数を伝える",
      "指定の仕掛け・集合港・出船可否・キャンセル条件を確認"
    ],
    "caution": [
      "桟橋や船へ無断で入らない",
      "船長の指定タックルと救命胴衣の案内を優先",
      "料金・出船時間は最新の公式案内を確認"
    ]
  },
  {
    "slug": "boat-voyager",
    "type": "boat",
    "name": "VOYAGER",
    "prefecture": "福岡県",
    "area": "玄界灘・博多湾",
    "terrain": "boat",
    "port": "姪浜漁港",
    "officialUrl": "https://www.voyager789.com/",
    "fish": [
      "マダイ",
      "タチウオ",
      "スズキ",
      "シロギス"
    ],
    "fishSlugs": [
      "madai",
      "tachiuo",
      "suzuki",
      "kisu"
    ],
    "methods": [],
    "methodSlugs": [
      "tai-rubber",
      "jigging"
    ],
    "note": "姪浜漁港からの船釣り。対象便・釣り物を公式案内で選び、指定タックルと集合場所を確認して予約します。",
    "access": "福岡県福岡市西区愛宕浜周辺。正式な集合場所は船宿のアクセス案内を確認。",
    "field": "玄界灘・博多湾の船釣り。出船日と海況により対象魚・釣行先が変わります。",
    "googleQuery": "VOYAGER 姪浜漁港",
    "sources": [
      {
        "label": "船宿公式：利用・アクセス・釣果",
        "url": "https://www.voyager789.com/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E8%A5%BF%E5%8C%BA%E6%84%9B%E5%AE%95%E6%B5%9C"
      }
    ],
    "lat": 33.592567,
    "lng": 130.334778,
    "positionNote": "ピンは国土地理院の住所検索による福岡県福岡市西区愛宕浜の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "season": "釣り物ごとの出船予定は船宿公式サイトへ",
    "tips": [
      "予約時に希望魚・経験・貸竿の必要数を伝える",
      "指定の仕掛け・集合港・出船可否・キャンセル条件を確認"
    ],
    "caution": [
      "桟橋や船へ無断で入らない",
      "船長の指定タックルと救命胴衣の案内を優先",
      "料金・出船時間は最新の公式案内を確認"
    ]
  },
  {
    "slug": "boat-northstar",
    "type": "boat",
    "name": "Northstar",
    "prefecture": "北海道",
    "area": "北海道・留萌ほか",
    "terrain": "boat",
    "port": "留萌港ほか（季節で移動）",
    "officialUrl": "https://northstar2.jp/",
    "fish": [
      "ヒラメ",
      "マダラ",
      "サケ"
    ],
    "fishSlugs": [
      "hirame"
    ],
    "methods": [],
    "methodSlugs": [],
    "note": "留萌を拠点とし、季節により枝幸などへ出船港が変わる遊漁船。地図は留萌港周辺の参考位置で、当日の集合港を示しません。",
    "access": "予約便の出船港と集合場所を直接確認。季節移動のため事務所住所へ向かわないでください。",
    "field": "北海道・留萌ほかの船釣り。出船日と海況により対象魚・釣行先が変わります。",
    "googleQuery": "Northstar 留萌港ほか（季節で移動）",
    "sources": [
      {
        "label": "船宿公式：利用・アクセス・釣果",
        "url": "https://northstar2.jp/"
      },
      {
        "label": "位置の出典：国土地理院住所検索（町域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%8C%97%E6%B5%B7%E9%81%93%E7%95%99%E8%90%8C%E5%B8%82%E6%B8%AF%E7%94%BA"
      }
    ],
    "lat": 43.944107,
    "lng": 141.635864,
    "positionNote": "ピンは国土地理院の住所検索による北海道留萌市港町の参考位置です。入場口・乗船場・釣り可能区間は公式地図で確認してください。",
    "season": "釣り物ごとの出船予定は船宿公式サイトへ",
    "tips": [
      "予約時に希望魚・経験・貸竿の必要数を伝える",
      "指定の仕掛け・集合港・出船可否・キャンセル条件を確認"
    ],
    "caution": [
      "桟橋や船へ無断で入らない",
      "船長の指定タックルと救命胴衣の案内を優先",
      "料金・出船時間は最新の公式案内を確認"
    ]
  }
];
export const nationwideExpansion:FishingMapEntry[]=additions.map(entry=>({...defaults,...entry}));
