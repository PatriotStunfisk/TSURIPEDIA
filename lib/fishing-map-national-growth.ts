import type {FishingMapEntry} from './fishing-map-data';

// Authoritative access sources and verified map positions; unknown facilities stay omitted.
export const nationalMapGrowth: FishingMapEntry[] = [
  {
    "slug": "sendai-port-uminhiroba",
    "name": "NX仙台港パーク 海の広場",
    "prefecture": "宮城県",
    "area": "宮城・仙台港",
    "terrain": "park",
    "type": "spot",
    "primaryType": "park",
    "lat": 38.27158489,
    "lng": 140.99856659,
    "officialUrl": "https://www.pref.miyagi.jp/soshiki/sdsgkown/fishing.html",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.pref.miyagi.jp/soshiki/sdsgkown/fishing.html"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式案内の地図位置。釣り可能区画・受付は現地表示と運営者の最新案内を優先。",
    "fish": [
      "カレイ類",
      "ヒラメ",
      "コウイカ"
    ],
    "methods": [],
    "season": "営業期間・休業日・開放時間は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "仙台塩釜港で釣りが認められている「海の広場」。周辺の岸壁まで自由に釣れるという意味ではありません。",
    "googleQuery": "NX仙台港パーク 海の広場",
    "access": "仙台市宮城野区港2丁目5。公園の指定入口から。",
    "field": "公園内の指定釣り区画",
    "bestFor": [
      "カレイ類を狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "港内の他の岸壁・立入禁止区域では釣りをしない",
      "開放時間と荒天時の閉鎖を確認"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": true
  },
  {
    "slug": "hachirogata-fishing-park",
    "name": "八郎潟町 釣り公園",
    "prefecture": "秋田県",
    "area": "秋田・八郎潟",
    "terrain": "lake",
    "type": "spot",
    "primaryType": "fresh",
    "lat": 39.94139455,
    "lng": 140.05160653,
    "officialUrl": "https://www.town.hachirogata.akita.jp/shisetsu/1002922/1002931.html",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.town.hachirogata.akita.jp/shisetsu/1002922/1002931.html"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式案内の地図位置。釣り可能区画・受付は現地表示と運営者の最新案内を優先。",
    "fish": [
      "ブラックバス",
      "コイ"
    ],
    "methods": [],
    "season": "営業期間・休業日・開放時間は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "八郎潟町川口地内の釣り公園。湖岸の利用場所を確認してから竿を出す拠点です。",
    "googleQuery": "八郎潟町 釣り公園",
    "access": "八郎潟町川口地内。町の施設地図を参照。",
    "field": "湖の指定釣り区画",
    "bestFor": [
      "ブラックバスを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "魚の持ち出し・再放流は現地の最新ルールを確認",
      "増水・強風時は水際へ近づかない"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": true
  },
  {
    "slug": "tase-fishing-park",
    "name": "田瀬釣り公園",
    "prefecture": "岩手県",
    "area": "岩手・花巻",
    "terrain": "lake",
    "type": "spot",
    "primaryType": "fresh",
    "lat": 39.3273226,
    "lng": 141.3012818,
    "officialUrl": "https://iwatetabi.jp/spots/4409/",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://iwatetabi.jp/spots/4409/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式案内の地図位置。釣り可能区画・受付は現地表示と運営者の最新案内を優先。",
    "fish": [
      "コイ",
      "ヘラブナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "通常の営業期間は春〜秋。開催日を事前確認",
    "beginner": true,
    "kids": true,
    "note": "田瀬湖の釣り公園。2026年度は放流しない旨の案内があるため、例年の釣果を前提にせず営業状況を確認してください。",
    "googleQuery": "田瀬釣り公園",
    "access": "花巻市東和町田瀬10区138。受付で貸道具と利用区画を確認。",
    "field": "湖の指定釣り区画",
    "bestFor": [
      "コイを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "2026年度の放流・料金変更に注意",
      "冬季のワカサギ体験は別途開催確認。氷上へ自己判断で入らない"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "status": "2026年度は放流なしの案内あり"
  },
  {
    "slug": "akaguri-sea-park",
    "name": "あかぐり海釣公園",
    "prefecture": "福井県",
    "area": "福井・おおい町",
    "terrain": "pier",
    "type": "spot",
    "primaryType": "facility",
    "lat": 35.5259673,
    "lng": 135.6618213,
    "officialUrl": "https://www.fuku-e.com/spot/detail_1448.html",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.fuku-e.com/spot/detail_1448.html"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式案内の地図位置。釣り可能区画・受付は現地表示と運営者の最新案内を優先。",
    "fish": [],
    "methods": [],
    "season": "春〜秋中心。冬季休園期間は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "橋で渡る円形の釣り桟橋。貸竿の案内があり、道具を持たない場合も受付で利用条件を相談できます。",
    "googleQuery": "あかぐり海釣公園",
    "access": "おおい町大島21-110。駐車後、受付へ。",
    "field": "指定された釣り桟橋",
    "bestFor": [
      "管理・開放情報を確認した釣行"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "冬季休園あり。営業日を確認",
      "橋と釣台では救命具を着用し、強風時は無理をしない"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": true
  },
  {
    "slug": "ariake-west-pier-park",
    "name": "有明西ふ頭公園",
    "prefecture": "東京都",
    "area": "東京・有明",
    "terrain": "park",
    "type": "spot",
    "primaryType": "park",
    "lat": 35.6271301,
    "lng": 139.7944792,
    "officialUrl": "https://www.tptc.co.jp/park/02_05",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.tptc.co.jp/park/02_05"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "管理者サイトに埋め込まれた地図の「有明西ふ頭公園」地点。釣座の指定ではありません。",
    "fish": [
      "マハゼ",
      "スズキ"
    ],
    "methods": [],
    "season": "営業期間・休業日・開放時間は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "東京ビッグサイトに近い水辺の公園。園内案内図で釣り可能な場所を確認し、散策する人との距離を確保します。",
    "googleQuery": "有明西ふ頭公園",
    "access": "東京ビッグサイト駅から徒歩圏。公園駐車場はありません。",
    "field": "公園内の指定釣り区画",
    "bestFor": [
      "マハゼを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "公園内の禁止行為と釣り可能範囲を確認",
      "歩行者の近くで仕掛けを振り回さない"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": false
  },
  {
    "slug": "zao-forest-springs",
    "name": "蔵王フォレストスプリングス",
    "prefecture": "宮城県",
    "area": "宮城・蔵王",
    "terrain": "pond",
    "type": "spot",
    "primaryType": "fresh",
    "lat": 38.1225591,
    "lng": 140.5630373,
    "officialUrl": "https://zao.forest-springs.com/",
    "sources": [
      {
        "label": "公式：釣り場・対象魚",
        "url": "https://zao.forest-springs.com/target.html"
      },
      {
        "label": "公式：アクセス",
        "url": "https://zao.forest-springs.com/accsess.html"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式案内の地図位置。釣り可能区画・受付は現地表示と運営者の最新案内を優先。",
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "管理釣り場ルアー",
      "フライ"
    ],
    "season": "営業期間・休業日・開放時間は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "複数の池でトラウトを狙う管理釣り場。池ごとの使用条件を確認してから、ルアーやフライの場所を選べます。",
    "googleQuery": "蔵王フォレストスプリングス",
    "access": "蔵王町遠刈田温泉字七日原1-121。受付で池の利用条件を確認。",
    "field": "管理された淡水釣り池",
    "bestFor": [
      "ニジマスを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "池ごとのルールと使用可能なフックを確認",
      "釣った魚の扱い・持ち帰り数は施設規定を優先"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": true,
    "toilet": true,
    "methodSlugs": [
      "trout-lure"
    ]
  },
  {
    "slug": "kariyawan-fishing-center",
    "name": "仮屋湾遊漁センター",
    "prefecture": "佐賀県",
    "area": "佐賀・玄海",
    "terrain": "sea-pond",
    "type": "spot",
    "primaryType": "facility",
    "lat": 33.46080556,
    "lng": 129.85555556,
    "officialUrl": "https://www.town.genkai.lg.jp/site/kankou/1239.html",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.town.genkai.lg.jp/site/kankou/1239.html"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "町の埋込地図が示す33°27′38.9″N、129°51′20.0″Eを換算。",
    "fish": [
      "マダイ",
      "ブリ"
    ],
    "methods": [
      "海上釣堀の餌釣り"
    ],
    "season": "営業期間・休業日・開放時間は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "自然の湾を利用した釣り施設。タイやハマチを狙う利用コースが紹介されています。コースごとの持ち帰り条件は予約時に確認してください。",
    "googleQuery": "仮屋湾遊漁センター",
    "access": "玄海町牟形1825-2。町の案内地図から受付へ。",
    "field": "管理された海上釣堀",
    "bestFor": [
      "マダイを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "町の掲載情報には更新から時間が経った項目あり。料金・休業日は直接確認",
      "釣堀外の湾内での釣り許可を示すものではない"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ]
  },
  {
    "slug": "samegai-trout-farm",
    "name": "醒井養鱒場 餌釣り体験",
    "prefecture": "滋賀県",
    "area": "滋賀・米原",
    "terrain": "pond",
    "type": "spot",
    "primaryType": "fresh",
    "lat": 35.3001244304,
    "lng": 136.338648344,
    "officialUrl": "https://www.biwako-visitors.jp/spot/detail/1174/",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.biwako-visitors.jp/spot/detail/1174/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式案内の地図位置。釣り可能区画・受付は現地表示と運営者の最新案内を優先。",
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "営業期間・休業日・開放時間は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "養鱒場の指定区画でニジマスの餌釣りを体験。釣れた魚は買い取りになるため、食べられる量を考えて楽しみます。",
    "googleQuery": "醒井養鱒場 餌釣り体験",
    "access": "米原市上丹生1570。場内受付で体験の開催を確認。",
    "field": "管理された淡水釣り池",
    "bestFor": [
      "ニジマスを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "釣れた魚は全量買い取り。勝手に戻さない",
      "養殖・展示区画では釣りをしない"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": true
  },
  {
    "slug": "atada-tairyoumaru",
    "name": "阿多田島 大漁丸 海上釣堀",
    "prefecture": "広島県",
    "area": "広島・大竹阿多田島",
    "terrain": "sea-pond",
    "type": "spot",
    "primaryType": "facility",
    "lat": 34.18333333,
    "lng": 132.3,
    "officialUrl": "https://tairyoumaru.jp/about",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://tairyoumaru.jp/about"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式掲載の北緯34度11分・東経132度18分による施設付近の概略位置。乗船場所は予約先へ確認。",
    "fish": [
      "マダイ"
    ],
    "methods": [
      "海上釣堀の餌釣り"
    ],
    "season": "営業期間・休業日・開放時間は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "阿多田島から渡船で向かう予約制の海上釣堀。フェリーと渡船の時刻を合わせ、帰りの便まで確認して計画します。",
    "googleQuery": "阿多田島 大漁丸 海上釣堀",
    "access": "小方港から阿多田島へ。島からの渡船集合場所は予約時に確認。",
    "field": "管理された海上釣堀",
    "bestFor": [
      "マダイを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "フェリー・渡船の欠航と帰港時刻に注意",
      "貸道具・処理サービス・持ち帰り条件は予約先へ確認"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "toilet": true
  },
  {
    "slug": "adogaike-fishhook",
    "name": "安戸池 フィッシュフック",
    "prefecture": "香川県",
    "area": "香川・東かがわ",
    "terrain": "sea-pond",
    "type": "spot",
    "primaryType": "facility",
    "lat": 34.2396609,
    "lng": 134.3966597,
    "officialUrl": "https://saltlake-hiketa.co.jp/fishhook/",
    "sources": [
      {
        "label": "公式：区画別の利用条件",
        "url": "https://saltlake-hiketa.co.jp/fishhook/"
      },
      {
        "label": "MapFan：施設位置",
        "url": "https://mapfan.com/spots/S3C3A%2CJ%2CV7J01"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "MapFan掲載施設位置を公式住所と照合。",
    "fish": [
      "ブリ",
      "カンパチ",
      "ヒラマサ",
      "マダイ"
    ],
    "methods": [
      "生簀の餌釣り",
      "指定区画のルアー釣り"
    ],
    "season": "営業期間・休業日・開放時間は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "安戸池の釣り施設。生簀の餌釣りとルアー区画で条件が異なるため、受付で利用するコースを選びます。",
    "googleQuery": "安戸池 フィッシュフック",
    "access": "東かがわ市引田4373。指定の受付へ。",
    "field": "管理された海上釣堀",
    "bestFor": [
      "ブリを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "生簀ではサビキ禁止などの規定あり",
      "子どもは保護者同伴。竿数と魚の取り扱いは施設規定に従う"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ]
  },
  {
    "slug": "kawaba-fishing-plaza",
    "name": "川場フィッシングプラザ",
    "prefecture": "群馬県",
    "area": "群馬・川場",
    "terrain": "pond",
    "type": "spot",
    "primaryType": "fresh",
    "lat": 36.692071,
    "lng": 139.107767,
    "officialUrl": "https://www.kawaba-fp.jp/",
    "sources": [
      {
        "label": "公式：営業・池の案内",
        "url": "https://www.kawaba-fp.jp/"
      },
      {
        "label": "地域施設案内：地図",
        "url": "https://www.dan-b.com/shops/map/fi_kawabafishing/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "地域施設情報の地図座標を公式住所と照合。",
    "fish": [
      "ニジマス",
      "イワナ",
      "ヤマメ"
    ],
    "methods": [
      "餌釣り",
      "管理釣り場ルアー",
      "フライ"
    ],
    "season": "営業期間・休業日・開放時間は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "餌釣りとルアー・フライの池がある釣り施設。餌釣りは釣れた魚を買い取る方式。改修中の池がないかも確認します。",
    "googleQuery": "川場フィッシングプラザ",
    "access": "川場村荻室63。池ごとの受付と釣り券を確認。",
    "field": "管理された淡水釣り池",
    "bestFor": [
      "ニジマスを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "餌釣りの魚はリリースせず買い取り",
      "ビギナー池の改修案内あり。利用できる池を事前確認"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "trout-lure"
    ]
  },
  {
    "slug": "fishing-lake-takamiya",
    "name": "フィッシングレイクたかみや",
    "prefecture": "広島県",
    "area": "広島・安芸高田",
    "terrain": "lake",
    "type": "spot",
    "primaryType": "fresh",
    "lat": 34.785506,
    "lng": 132.679574,
    "officialUrl": "https://www.artfishing.co.jp/takamiya/",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.artfishing.co.jp/takamiya/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式案内の地図位置。釣り可能区画・受付は現地表示と運営者の最新案内を優先。",
    "fish": [
      "ニジマス",
      "ヤマメ",
      "イワナ"
    ],
    "methods": [
      "管理釣り場ルアー",
      "フライ"
    ],
    "season": "営業期間・休業日・開放時間は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "ルアー・フライ専用の管理釣り場。餌釣りでは利用できません。レンタルやボートの利用条件は受付で相談してください。",
    "googleQuery": "フィッシングレイクたかみや",
    "access": "安芸高田市高宮町羽佐竹1431-1。管理棟で受付。",
    "field": "湖の指定釣り区画",
    "bestFor": [
      "ニジマスを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "使用できるルアーの大きさとフックを事前確認",
      "魚を陸上に長く置かず、施設指定のネットで扱う"
    ],
    "caution": [
      "シングル・バーブレスフックなど施設指定を優先",
      "小型ルアーのサイズ制限あり。ワーム・トリプルフック等の禁止事項を確認"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "trout-lure"
    ]
  },
  {
    "slug": "shinotsuko-tappu",
    "name": "しのつ湖 たっぷ釣り場",
    "prefecture": "北海道",
    "area": "北海道・新篠津",
    "terrain": "lake",
    "type": "spot",
    "primaryType": "fresh",
    "lat": 43.2140729,
    "lng": 141.6425563,
    "officialUrl": "https://tappunoyuonsen.com/activity/",
    "sources": [
      {
        "label": "運営者：営業状況",
        "url": "https://tappunoyuonsen.com/activity/"
      },
      {
        "label": "北海道公式観光：所在地",
        "url": "https://www.visit-hokkaido.jp/spot/detail_12124.html"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "北海道公式観光サイトの施設案内位置。氷上の釣座は開催時の指定に従う。",
    "fish": [
      "ワカサギ"
    ],
    "methods": [
      "ワカサギ釣り"
    ],
    "season": "冬季限定。2026年冬の営業は終了",
    "beginner": true,
    "kids": true,
    "note": "冬季に開設されるワカサギ釣り場。2026年冬の営業は終了しており、次の冬の開催案内を確認してから予約します。",
    "googleQuery": "しのつ湖 たっぷ釣り場",
    "access": "新篠津村第45線北2・たっぷの湯側。受付場所は開催案内を確認。",
    "field": "湖の指定釣り区画",
    "bestFor": [
      "ワカサギを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "開催前・終了後に氷上へ入らない",
      "氷の厚さは自己判断せず、管理者が開放した範囲だけ利用"
    ],
    "guideSlugs": [
      "wakasagi-first-trip"
    ],
    "parking": true,
    "toilet": true,
    "status": "冬季営業・次期開催日を要確認",
    "methodSlugs": [
      "wakasagi"
    ]
  },
  {
    "slug": "wakasa-takahama-sea-park",
    "name": "若狭高浜海釣り公園",
    "prefecture": "福井県",
    "area": "福井・高浜",
    "terrain": "pier",
    "type": "spot",
    "primaryType": "facility",
    "lat": 35.49420242,
    "lng": 135.54656982,
    "officialUrl": "https://www.fuku-e.com/spot/detail_1458.html",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.fuku-e.com/spot/detail_1458.html"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式案内の地図位置。釣り可能区画・受付は現地表示と運営者の最新案内を優先。",
    "fish": [],
    "methods": [],
    "season": "春〜秋中心。冬季は営業確認",
    "beginner": true,
    "kids": true,
    "note": "高浜漁港内の海釣り公園。貸竿の利用も含め、指定区画と受付条件を確認して釣りを始めます。",
    "googleQuery": "若狭高浜海釣り公園",
    "access": "高浜町塩土・高浜漁港内。公園の案内表示から受付へ。",
    "field": "指定された釣り桟橋",
    "bestFor": [
      "管理・開放情報を確認した釣行"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "公園外の漁港設備へ立ち入らない",
      "冬季の営業状況と臨時休園を確認"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": true
  },
  {
    "slug": "hiruga-sea-pond",
    "name": "ひるが海上釣堀",
    "prefecture": "福井県",
    "area": "福井・美浜日向",
    "terrain": "sea-pond",
    "type": "spot",
    "primaryType": "facility",
    "lat": 35.6138245,
    "lng": 135.8957253,
    "officialUrl": "https://www.fuku-e.com/spot/detail_1452.html",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.fuku-e.com/spot/detail_1452.html"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式案内の地図位置。釣り可能区画・受付は現地表示と運営者の最新案内を優先。",
    "fish": [
      "マダイ",
      "ヒラメ",
      "ブリ"
    ],
    "methods": [
      "海上釣堀の餌釣り"
    ],
    "season": "営業期間・休業日・開放時間は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "日向の海上釣堀。タイ・ヒラメ・ハマチを放流する施設として案内されています。貸切筏とは利用条件を分けて確認してください。",
    "googleQuery": "ひるが海上釣堀",
    "access": "美浜町日向2-55。予約と当日の受付場所を確認。",
    "field": "管理された海上釣堀",
    "bestFor": [
      "マダイを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "冬季営業・休業日は釣行前に確認",
      "放流魚でも釣果の保証はない。持ち帰り用の保冷用品を準備"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": true
  },
  {
    "slug": "hiai-new-port",
    "name": "樋合新港",
    "prefecture": "熊本県",
    "area": "熊本・上天草",
    "terrain": "port",
    "type": "spot",
    "primaryType": "port",
    "lat": 32.5365797,
    "lng": 130.4035896,
    "officialUrl": "https://kamiamakusa-bt.com/port/",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://kamiamakusa-bt.com/port/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "上天草公式釣りガイドの港別Googleマップリンクを照合。個別の釣座・駐車場所を示すものではありません。",
    "fish": [
      "マアジ",
      "クロダイ",
      "スズキ",
      "メバル"
    ],
    "methods": [
      "サビキ",
      "ウキ釣り"
    ],
    "season": "狙う魚の季節と当日の港の利用状況による",
    "beginner": true,
    "kids": false,
    "note": "上天草の公式釣りガイドに掲載された港。港内の船や係留ロープから離れ、作業の妨げにならない区画を選びます。",
    "googleQuery": "樋合新港",
    "access": "公式ガイドの地図を参照。釣り可否と駐車場所は当日の現地表示を優先。",
    "field": "漁港の釣り可能区画",
    "bestFor": [
      "マアジを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "魚の回遊や足元の状況を見て釣り方を選ぶ",
      "撒き餌・糸くずを残さず、通路を空ける"
    ],
    "caution": [
      "港全域で釣りが許可されているわけではない",
      "係留ロープ・漁具に触れず、作業中は移動する",
      "立入禁止表示・臨時規制・荒天時の閉鎖を優先"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ]
  },
  {
    "slug": "hatonokama-port",
    "name": "鳩之釜漁港",
    "prefecture": "熊本県",
    "area": "熊本・上天草",
    "terrain": "port",
    "type": "spot",
    "primaryType": "port",
    "lat": 32.5826487,
    "lng": 130.4022804,
    "officialUrl": "https://kamiamakusa-bt.com/port/",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://kamiamakusa-bt.com/port/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "上天草公式釣りガイドの港別Googleマップリンクを照合。個別の釣座・駐車場所を示すものではありません。",
    "fish": [
      "マアジ",
      "シロギス",
      "クロダイ",
      "メバル"
    ],
    "methods": [
      "サビキ",
      "ちょい投げ"
    ],
    "season": "狙う魚の季節と当日の港の利用状況による",
    "beginner": true,
    "kids": false,
    "note": "上天草の公式釣りガイドに掲載された港。近投で狙う魚と足元の回遊魚で仕掛けを分け、船の出入り時は回収します。",
    "googleQuery": "鳩之釜漁港",
    "access": "公式ガイドの地図を参照。釣り可否と駐車場所は当日の現地表示を優先。",
    "field": "漁港の釣り可能区画",
    "bestFor": [
      "マアジを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "魚の回遊や足元の状況を見て釣り方を選ぶ",
      "撒き餌・糸くずを残さず、通路を空ける"
    ],
    "caution": [
      "港全域で釣りが許可されているわけではない",
      "係留ロープ・漁具に触れず、作業中は移動する",
      "立入禁止表示・臨時規制・荒天時の閉鎖を優先"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "sabiki",
      "choinage"
    ]
  },
  {
    "slug": "aitsu-port",
    "name": "合津港",
    "prefecture": "熊本県",
    "area": "熊本・上天草",
    "terrain": "port",
    "type": "spot",
    "primaryType": "port",
    "lat": 32.5184581,
    "lng": 130.4268105,
    "officialUrl": "https://kamiamakusa-bt.com/port/",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://kamiamakusa-bt.com/port/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "上天草公式釣りガイドの港別Googleマップリンクを照合。個別の釣座・駐車場所を示すものではありません。",
    "fish": [
      "クロダイ",
      "メジナ",
      "マアジ",
      "メバル"
    ],
    "methods": [
      "ウキ釣り",
      "サビキ"
    ],
    "season": "狙う魚の季節と当日の港の利用状況による",
    "beginner": true,
    "kids": false,
    "note": "上天草の公式釣りガイドに掲載された港。水路の流れと船の往来に注意し、仕掛けを長く流しすぎないようにします。",
    "googleQuery": "合津港",
    "access": "公式ガイドの地図を参照。釣り可否と駐車場所は当日の現地表示を優先。",
    "field": "漁港の釣り可能区画",
    "bestFor": [
      "クロダイを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "魚の回遊や足元の状況を見て釣り方を選ぶ",
      "撒き餌・糸くずを残さず、通路を空ける"
    ],
    "caution": [
      "港全域で釣りが許可されているわけではない",
      "係留ロープ・漁具に触れず、作業中は移動する",
      "立入禁止表示・臨時規制・荒天時の閉鎖を優先"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "uki",
      "sabiki"
    ]
  },
  {
    "slug": "iwatani-port",
    "name": "岩谷港",
    "prefecture": "熊本県",
    "area": "熊本・上天草",
    "terrain": "port",
    "type": "spot",
    "primaryType": "port",
    "lat": 32.61822,
    "lng": 130.444174,
    "officialUrl": "https://kamiamakusa-bt.com/port/",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://kamiamakusa-bt.com/port/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "上天草公式釣りガイドの港別Googleマップリンクを照合。個別の釣座・駐車場所を示すものではありません。",
    "fish": [
      "マアジ",
      "スズキ",
      "クロダイ",
      "メジナ",
      "カサゴ",
      "アオリイカ"
    ],
    "methods": [
      "ウキ釣り",
      "エギング"
    ],
    "season": "狙う魚の季節と当日の港の利用状況による",
    "beginner": true,
    "kids": false,
    "note": "上天草の公式釣りガイドに掲載された港。港内外で潮の流れが変わります。渡船利用者・漁業者の動線を空けてください。",
    "googleQuery": "岩谷港",
    "access": "公式ガイドの地図を参照。釣り可否と駐車場所は当日の現地表示を優先。",
    "field": "漁港の釣り可能区画",
    "bestFor": [
      "マアジを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "魚の回遊や足元の状況を見て釣り方を選ぶ",
      "撒き餌・糸くずを残さず、通路を空ける"
    ],
    "caution": [
      "港全域で釣りが許可されているわけではない",
      "係留ロープ・漁具に触れず、作業中は移動する",
      "立入禁止表示・臨時規制・荒天時の閉鎖を優先"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "uki",
      "eging"
    ]
  },
  {
    "slug": "boat-hamaeimaru-hinoshima",
    "name": "浜栄丸 瀬渡し・筏",
    "prefecture": "熊本県",
    "area": "熊本・上天草樋島",
    "terrain": "port",
    "type": "boat",
    "primaryType": "boat",
    "lat": 32.3788832,
    "lng": 130.4206216,
    "officialUrl": "https://hamaeimaru.com/",
    "sources": [
      {
        "label": "公式：瀬渡し・筏と釣果案内",
        "url": "https://hamaeimaru.com/"
      },
      {
        "label": "公式：出船場所",
        "url": "https://hamaeimaru.com/access.php"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式アクセス地図の「出船場所」ポイント。駐車場ポイントとは区別しています。",
    "fish": [
      "クロダイ",
      "メジナ",
      "マアジ"
    ],
    "methods": [
      "ウキ釣り",
      "サビキ"
    ],
    "season": "営業期間・休業日・開放時間は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "樋島周辺の瀬渡し・筏を案内する事業者。陸から自由に入れる釣り場とは異なり、予約と渡船利用が前提です。",
    "googleQuery": "浜栄丸 瀬渡し・筏",
    "access": "下桶川漁港の指定乗船場所へ。集合時刻・駐車場所は予約先へ確認。",
    "field": "予約して渡る磯・筏",
    "bestFor": [
      "クロダイを狙う釣り"
    ],
    "timing": "釣行前に営業・開放状況と天候を確認。",
    "tips": [
      "受付・現地表示で釣り可能区画を確認",
      "釣り方と持ち帰り条件を確認してから道具を準備"
    ],
    "caution": [
      "渡る磯・筏で設備が違うため、トイレ等は予約時に確認",
      "救命具を着用し、帰港時間と船長の指示を守る"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation",
      "fishing-map-permission-check"
    ],
    "port": "下桶川漁港",
    "methodSlugs": [
      "uki",
      "sabiki"
    ]
  }
];
