import type {FishingMapEntry} from './fishing-map-data';

// Verified facilities and booking bases; map pins do not authorize fishing outside designated areas.
export const coastalMapGrowth: FishingMapEntry[] = [
  {
    "slug": "setomarine-uno",
    "name": "セトマリン",
    "prefecture": "岡山県",
    "area": "岡山・玉野・新田井港",
    "lat": 34.50689,
    "lng": 133.95678,
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "fish": [
      "マダイ",
      "キジハタ",
      "アオリイカ",
      "タチウオ"
    ],
    "methods": [
      "タイラバ",
      "ひとつテンヤ",
      "ティップラン"
    ],
    "officialUrl": "https://www.setomarine.com/",
    "sources": [
      {
        "label": "運営者・自治体の利用案内",
        "url": "https://www.setomarine.com/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式サイトのYahoo地図に指定された乗船拠点の位置。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": false,
    "note": "新田井港から出る遊漁船。マダイのタイラバを軸に、季節ごとの釣り物を選んで予約できます。",
    "googleQuery": "セトマリン 岡山県",
    "access": "玉野市の新田井港。車は船宿指定の位置に駐車し、乗船便の集合案内に従う。",
    "field": "瀬戸内海の船釣り。港のマーカーは乗船拠点であり、岸釣りの許可を示すものではありません。",
    "bestFor": [
      "マダイを狙う釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "予約時に希望魚と貸道具の有無を相談",
      "タイラバの重さは当日の潮と船長指定に合わせる"
    ],
    "caution": [
      "乗船中は適合するライフジャケットを着用",
      "駐車・荷降ろしで漁業作業を妨げない"
    ],
    "guideSlugs": [
      "tairaba-bottom-contact",
      "boat-fishing-seasick"
    ],
    "toilet": true,
    "methodSlugs": [
      "tai-rubber",
      "hitotsu-tenya",
      "tiprun"
    ]
  },
  {
    "slug": "kozakuramaru-aki",
    "name": "こざくら丸",
    "prefecture": "大分県",
    "area": "大分・国東・安岐港",
    "lat": 33.46459,
    "lng": 131.725071,
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "fish": [
      "カワハギ",
      "マダイ",
      "タチウオ",
      "ヒラメ"
    ],
    "methods": [
      "カワハギ釣り",
      "タイラバ"
    ],
    "officialUrl": "https://www.kozakuramaru.com/",
    "sources": [
      {
        "label": "運営者・自治体の利用案内",
        "url": "https://www.kozakuramaru.com/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式サイトの事業者位置情報と出船住所を照合。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": false,
    "note": "国東半島の安岐港を拠点にする釣り船。カワハギやマダイなど、その日の募集便に合う釣り物を選びます。",
    "googleQuery": "こざくら丸 大分県",
    "access": "国東市安岐町下原3172-5付近。集合位置は予約時に船宿へ確認。",
    "field": "国東沖を中心とした船釣り。魚種別に道具や餌が異なります。",
    "bestFor": [
      "カワハギを狙う釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "初めての魚種なら餌・仕掛けの準備範囲を予約時に相談",
      "針を外す道具と持ち帰り用の氷を準備"
    ],
    "caution": [
      "便ごとの釣り物を確認してから仕掛けを購入",
      "欠航判断と集合時刻は船宿案内を優先"
    ],
    "guideSlugs": [
      "boat-fishing-seasick",
      "tairaba-bottom-contact"
    ],
    "methodSlugs": [
      "kawahagi",
      "tai-rubber"
    ]
  },
  {
    "slug": "notojima-seafishing",
    "name": "のとじま臨海公園 海づりセンター",
    "prefecture": "石川県",
    "area": "石川・七尾・能登島",
    "lat": 37.1492,
    "lng": 136.982099,
    "type": "spot",
    "primaryType": "facility",
    "terrain": "sea-pond",
    "fish": [
      "マダイ"
    ],
    "methods": [
      "餌釣り"
    ],
    "officialUrl": "https://www.notoaqua.jp/",
    "sources": [
      {
        "label": "運営者：海づりセンター再開案内",
        "url": "https://www.notoaqua.jp/news/1029"
      },
      {
        "label": "石川県観光公式：施設・位置情報",
        "url": "https://www.hot-ishikawa.jp/notohaku/spot/detail_6113.html"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "石川県観光公式ページに指定された地図位置。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": true,
    "note": "のとじま水族館に隣接する海釣り施設。桟橋釣りと大物釣りのコースがあり、貸竿・餌を利用した体験を計画できます。",
    "googleQuery": "のとじま臨海公園 海づりセンター 石川県",
    "access": "七尾市能登島曲町。水族館側の案内に従って海づりセンターへ。",
    "field": "海上の桟橋と、コース別の釣り区画。対象魚や持ち帰り条件はコースで確認。",
    "bestFor": [
      "マダイを狙う釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "桟橋釣りと大物釣りを混同せず希望コースを選ぶ",
      "営業期間・貸竿受付終了時刻を確認してから来場"
    ],
    "caution": [
      "震災後の施設営業・通行情報を最新案内で確認",
      "水族館入館と釣り利用の料金・受付条件は別に確認"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": true
  },
  {
    "slug": "benya-hazamaura",
    "name": "海上釣堀 辨屋",
    "prefecture": "三重県",
    "area": "三重・南伊勢・礫浦",
    "lat": 34.3144569,
    "lng": 136.6734008,
    "type": "spot",
    "primaryType": "facility",
    "terrain": "sea-pond",
    "fish": [],
    "methods": [
      "ウキ釣り"
    ],
    "officialUrl": "https://www.benya.tv/",
    "sources": [
      {
        "label": "辨屋：利用案内",
        "url": "https://www.benya.tv/"
      },
      {
        "label": "辨屋：アクセス・集合位置",
        "url": "https://www.benya.tv/access/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式アクセス地図の目的地座標。筏の位置ではなく陸側の集合拠点。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": true,
    "note": "礫浦から渡船で向かう予約制の海上釣堀。放流魚は季節で変わるため、魚種カレンダーと当日の案内を見て仕掛けを用意します。",
    "googleQuery": "海上釣堀 辨屋 三重県",
    "access": "南伊勢町礫浦132。指定駐車場から受付し、案内された渡船で筏へ。",
    "field": "筏に設けられた管理釣り区画。一般岸壁の自由釣りとは異なります。",
    "bestFor": [
      "現地案内付きの釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "貸竿・餌の販売内容を予約時に確認",
      "釣堀の深さを聞き、棚を合わせてから誘う"
    ],
    "caution": [
      "集合時刻と渡船の手順を守る",
      "早朝は近隣で大声・アイドリングを避ける"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": true,
    "methodSlugs": [
      "uki"
    ]
  },
  {
    "slug": "oujibaru-fishing",
    "name": "皇子原公園 釣堀",
    "prefecture": "宮崎県",
    "area": "宮崎・高原・奥霧島",
    "lat": 31.90718,
    "lng": 130.96038,
    "type": "spot",
    "primaryType": "fresh",
    "terrain": "pond",
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "officialUrl": "https://oujibaru-koen.com/free/fishing/",
    "sources": [
      {
        "label": "運営者：釣り体験",
        "url": "https://oujibaru-koen.com/free/fishing/"
      },
      {
        "label": "公園所在地・地図の照合",
        "url": "https://www.pmiyazaki.com/flower/oujibaru/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公園の代表位置。釣堀そのもののピンではありません。園内で受付を確認。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": true,
    "note": "皇子原公園内でニジマスを釣る体験型の釣堀。公園の釣り受付を利用し、釣った魚の精算・調理条件を確認してから始めます。",
    "googleQuery": "皇子原公園 釣堀 宮崎県",
    "access": "高原町蒲牟田3-251の公園へ。マーカーは公園の代表位置で、釣堀の受付は園内案内を確認。",
    "field": "公園内の管理釣堀。周辺河川の自由な釣りを案内する地点ではありません。",
    "bestFor": [
      "ニジマスを狙う釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "釣った魚の扱いと支払い方法を先に確認",
      "子どもは針を外すときも保護者が付き添う"
    ],
    "caution": [
      "園内の指定区画以外で釣らない",
      "天候や施設都合による営業変更を確認"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ]
  },
  {
    "slug": "tenkawa-winter-trout",
    "name": "天川村 冬季ニジマス管理釣り場",
    "prefecture": "奈良県",
    "area": "奈良・天川村",
    "lat": 34.24291295,
    "lng": 135.85477126,
    "type": "spot",
    "primaryType": "fresh",
    "terrain": "river",
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "officialUrl": "https://tenkawagyokyou.jimdofree.com/",
    "sources": [
      {
        "label": "天川村漁協：冬季営業・釣り規則",
        "url": "https://tenkawagyokyou.jimdofree.com/"
      },
      {
        "label": "天川村：漁協案内",
        "url": "https://www.vill.tenkawa.nara.jp/tourism/spot/5567/"
      },
      {
        "label": "漁協受付位置照合",
        "url": "https://map.yahoo.co.jp/v3/place/Z2vX-1hPr7E"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "天川村漁協の受付位置。指定河川区間は公式エリア図を参照。",
    "season": "2026年10月1日〜2027年2月25日予定",
    "beginner": false,
    "kids": false,
    "note": "天川村漁協が案内する冬季のニジマス釣り。2026年度は10月1日開始予定で、キャッチ＆リリース専用の指定河川区間を利用します。",
    "googleQuery": "天川村 冬季ニジマス管理釣り場 奈良県",
    "access": "天川村沢谷48-3の漁協受付を代表位置として表示。釣り区間は漁協のエリアマップで確認。",
    "field": "自然河川の指定管理区間。受付位置そのものが釣りポイントではありません。",
    "bestFor": [
      "ニジマスを狙う釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "専用遊漁券と当年度のエリア図を確認",
      "バーブレスのシングルフックで魚への負担を抑える"
    ],
    "caution": [
      "餌釣り不可・全魚キャッチ＆リリース",
      "増水・濁り・足場不良時は入川しない"
    ],
    "guideSlugs": [
      "nijimasu-field-notes",
      "fishing-map-permission-check"
    ],
    "status": "冬季限定：2026年10月1日開始予定。開始・終了日は漁協で確認",
    "methodSlugs": [
      "trout-lure"
    ]
  },
  {
    "slug": "fishing-park-hikari",
    "name": "フィッシングパーク光",
    "prefecture": "山口県",
    "area": "山口・光・室積",
    "lat": 33.928003,
    "lng": 131.963781,
    "type": "spot",
    "primaryType": "facility",
    "terrain": "sea-pond",
    "fish": [
      "マアジ",
      "クロダイ",
      "メジナ",
      "ウマヅラハギ"
    ],
    "methods": [
      "サビキ",
      "ウキ釣り"
    ],
    "officialUrl": "https://www.city.hikari.lg.jp/kanko_bunka/fishingpark/guide/15801.html",
    "sources": [
      {
        "label": "光市：施設利用案内",
        "url": "https://www.city.hikari.lg.jp/kanko_bunka/fishingpark/guide/15801.html"
      },
      {
        "label": "釣具のポイント：地図・釣果照合",
        "url": "https://www.point-i.jp/fishing_spots/18196"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "施設名と住所を市の案内で確認し、釣具店の地点マーカーで座標を照合。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": true,
    "note": "室積の海へ伸びる桟橋型の釣り施設。貸竿や餌の案内があり、初めてなら足元から探るサビキを相談して始められます。",
    "googleQuery": "フィッシングパーク光 山口県",
    "access": "光市室積6丁目17-1。管理施設の受付と利用時間を確認して入場。",
    "field": "管理された海上桟橋。狙う魚と当日の流れに合わせて棚を変えます。",
    "bestFor": [
      "マアジを狙う釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "足元の水深を確認し、仕掛けを底に置きっぱなしにしない",
      "釣れた魚の危険な棘は係員に確認"
    ],
    "caution": [
      "釣法・竿数・撒き餌などの施設ルールを優先",
      "強風時の休園や受付終了時刻を確認"
    ],
    "guideSlugs": [
      "aji-sabiki-depth",
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "sabiki",
      "uki"
    ]
  },
  {
    "slug": "hirayako-trout",
    "name": "平谷湖フィッシングスポット",
    "prefecture": "長野県",
    "area": "長野・平谷村",
    "lat": 35.30508388,
    "lng": 137.64224043,
    "type": "spot",
    "primaryType": "fresh",
    "terrain": "pond",
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "officialUrl": "https://hirayako.com/",
    "sources": [
      {
        "label": "平谷湖：公式営業・施設案内",
        "url": "https://hirayako.com/"
      },
      {
        "label": "所在地座標照合",
        "url": "https://www.mapion.co.jp/phonebook/M04018/20409/22030273039/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付の代表位置。実際の利用区画・集合場所は予約時の案内を優先。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": true,
    "note": "南信州・平谷村の管理釣り場。池ごとの利用区分を確認し、スプーンの深さと速度をそろえてニジマスを狙えます。",
    "googleQuery": "平谷湖フィッシングスポット 長野県",
    "access": "平谷村の施設受付へ。営業カレンダーと道路状況を確認してから来場。",
    "field": "複数の管理池。釣法やエリアごとの利用条件は現地掲示を優先。",
    "bestFor": [
      "ニジマスを狙う釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "魚がいる深さを先に探り、色変更だけを繰り返さない",
      "持ち帰り可能尾数とフック規定を受付で確認"
    ],
    "caution": [
      "貸道具の利用範囲と禁止ルアーを確認",
      "冬季営業・積雪による道路状況に注意"
    ],
    "guideSlugs": [
      "nijimasu-field-notes",
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "trout-lure"
    ]
  },
  {
    "slug": "forest-park-hirakawa",
    "name": "フォレストパークひらかわ",
    "prefecture": "青森県",
    "area": "青森・平川",
    "lat": 40.50247095,
    "lng": 140.74481306,
    "type": "spot",
    "primaryType": "fresh",
    "terrain": "pond",
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "エリアトラウト"
    ],
    "officialUrl": "https://fishingareauk.naturum.ne.jp/",
    "sources": [
      {
        "label": "運営スタッフによるひらかわ営業・イベント案内",
        "url": "https://fishingareauk.naturum.ne.jp/"
      },
      {
        "label": "施設所在地照合",
        "url": "https://map.yahoo.co.jp/v3/place/MCZxf_b8aJ-"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付の代表位置。実際の利用区画・集合場所は予約時の案内を優先。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": false,
    "note": "平川市のエリアトラウト施設。運営スタッフの案内で営業やイベントを確認し、池のルールに合うルアーでニジマスを狙います。",
    "googleQuery": "フォレストパークひらかわ 青森県",
    "access": "平川市の管理釣り場へ。雪やイベントによる利用変更は運営ブログで確認。",
    "field": "池を使う管理釣り場。天然河川とは遊漁・持ち帰り条件が異なります。",
    "bestFor": [
      "ニジマスを狙う釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "スプーンのカウントダウンをそろえて深さを探る",
      "当日の使用可能ルアーとフック数を受付で確認"
    ],
    "caution": [
      "施設の定休日と貸切・大会開催日を確認",
      "リリースする魚は濡らしたネットで扱う"
    ],
    "guideSlugs": [
      "nijimasu-field-notes"
    ],
    "methodSlugs": [
      "trout-lure"
    ]
  },
  {
    "slug": "shineimaru-miyazaki",
    "name": "新鋭丸",
    "prefecture": "宮崎県",
    "area": "宮崎・宮崎港",
    "lat": 31.8982474,
    "lng": 131.4586256,
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "fish": [],
    "methods": [
      "タイラバ",
      "ジギング",
      "餌釣り"
    ],
    "officialUrl": "https://www.shineimaru8.com/",
    "sources": [
      {
        "label": "新鋭丸：釣り方・乗船案内",
        "url": "https://www.shineimaru8.com/"
      },
      {
        "label": "新鋭丸：出港場所",
        "url": "https://www.shineimaru8.com/ccbt"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式サイトの事業者位置情報。正確な係留・乗船位置は船宿案内を優先。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": false,
    "note": "宮崎港からタイラバ・ジギング・餌釣りへ出る遊漁船。初心者向けの案内もあるため、経験と希望する釣り方を予約時に伝えます。",
    "googleQuery": "新鋭丸 宮崎県",
    "access": "宮崎市港東1丁目6番地付近。公式案内では水門を越えて岸壁沿いに進む乗船所を指定。",
    "field": "宮崎沖の船釣り。募集便によって水深・対象魚・必要な道具が変わります。",
    "bestFor": [
      "現地案内付きの釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "釣り物が未定なら便の内容を問い合わせてから予約",
      "タイラバやジグの重さは船長指定を優先"
    ],
    "caution": [
      "岸壁で釣りをする場所として扱わない",
      "集合場所が分からないときは港内へむやみに進まず船宿へ連絡"
    ],
    "guideSlugs": [
      "boat-fishing-seasick",
      "tairaba-bottom-contact"
    ],
    "parking": true,
    "methodSlugs": [
      "tai-rubber",
      "jigging"
    ]
  },
  {
    "slug": "amago-no-sato-ozu",
    "name": "あまごの里",
    "prefecture": "愛媛県",
    "area": "愛媛・大洲・河辺",
    "lat": 33.514247,
    "lng": 132.804641,
    "type": "spot",
    "primaryType": "fresh",
    "terrain": "pond",
    "fish": [
      "アマゴ",
      "ニジマス",
      "イワナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "officialUrl": "https://en.ehime-gtnavi.jp/archives/2132",
    "sources": [
      {
        "label": "愛媛グリーン・ツーリズム：施設・体験案内",
        "url": "https://en.ehime-gtnavi.jp/archives/2132"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "観光案内に掲載されたGoogle地図の施設マーカー位置。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": true,
    "note": "大洲市河辺の釣堀と食事の体験施設。アマゴなどを釣り、その場で料理してもらう流れで、釣りと食を一緒に楽しめます。",
    "googleQuery": "あまごの里 愛媛県",
    "access": "大洲市河辺町北平4293。山道の移動時間を見込み、予約・営業を確認。",
    "field": "釣堀での体験。周辺の川で自由に釣れるという意味ではありません。",
    "bestFor": [
      "アマゴを狙う釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "釣る尾数と料理内容を先に施設と相談",
      "食事までの所要時間を見込んで予定を組む"
    ],
    "caution": [
      "釣り上げた魚を自己判断で放流し直さない",
      "河川増水や山道の通行状況を確認"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ]
  },
  {
    "slug": "toreta-fujii-wakasagi",
    "name": "とれた小屋ふじい ワカサギ釣り",
    "prefecture": "北海道",
    "area": "北海道・札幌・茨戸川",
    "lat": 43.1675625,
    "lng": 141.3834642,
    "type": "spot",
    "primaryType": "fresh",
    "terrain": "pond",
    "fish": [
      "ワカサギ"
    ],
    "methods": [
      "ワカサギ釣り"
    ],
    "officialUrl": "https://toreta-fujii.com/wakasagifishing/",
    "sources": [
      {
        "label": "運営者・自治体の利用案内",
        "url": "https://toreta-fujii.com/wakasagifishing/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式サイトが案内する農場・受付拠点の位置。氷上の穴や釣り区画の座標ではありません。",
    "season": "冬季の結氷期のみ",
    "beginner": true,
    "kids": true,
    "note": "札幌市北区の農場を受付拠点にした冬のワカサギ釣り。送迎や貸道具、釣り方説明付きのプランを選んで氷上釣りを体験できます。",
    "googleQuery": "とれた小屋ふじい ワカサギ釣り 北海道",
    "access": "札幌市北区のとれた小屋ふじい農場へ。送迎利用は予約時に集合場所を確認。",
    "field": "冬季の茨戸川氷上。受付マーカーは農場側で、入場可能な氷上区画は運営者が案内します。",
    "bestFor": [
      "ワカサギを狙う釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "防寒靴・手袋を準備し、貸道具に含まれるものを確認",
      "氷の穴へ近づくときも子どもから目を離さない"
    ],
    "caution": [
      "運営者が開放する氷上区画以外へ進入しない",
      "結氷状況で営業開始・終了や中止が変わる"
    ],
    "guideSlugs": [
      "wakasagi-first-trip"
    ],
    "status": "冬季限定。今季の営業期間・予約開始は公式案内を確認",
    "methodSlugs": [
      "wakasagi"
    ]
  },
  {
    "slug": "syoutokumaru-fishing",
    "name": "海上釣堀 正徳丸",
    "prefecture": "三重県",
    "area": "三重・紀北・紀伊長島",
    "lat": 34.19948679,
    "lng": 136.35636445,
    "type": "spot",
    "primaryType": "facility",
    "terrain": "sea-pond",
    "fish": [
      "マダイ",
      "ブリ",
      "シマアジ"
    ],
    "methods": [
      "ウキ釣り"
    ],
    "officialUrl": "https://syoutokumaru.com/sp/index.html",
    "sources": [
      {
        "label": "正徳丸：営業・放流案内",
        "url": "https://syoutokumaru.com/sp/index.html"
      },
      {
        "label": "正徳丸：公式アクセス地図",
        "url": "https://syoutokumaru.com/sp/access/map/map_google01.html"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式アクセス地図の正徳丸マーカー座標。他のキャンプ場・ホテルのマーカーとは区別。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": true,
    "note": "紀伊長島の海上釣堀。マダイや青物などの放流魚を対象とし、一般入場と貸切枠で予約・受付条件が異なります。",
    "googleQuery": "海上釣堀 正徳丸 三重県",
    "access": "紀北町東長島3043-27。公式アクセス案内に沿って施設へ。",
    "field": "管理生簀の海上釣堀。放流魚・持ち帰り条件は最新の施設案内を確認。",
    "bestFor": [
      "マダイを狙う釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "狙う魚に合わせて餌を用意し、活きアジの現地販売を前提にしない",
      "受付時間は季節変更があるため予約内容で確認"
    ],
    "caution": [
      "施設指定の釣法と竿の取り扱いルールを守る",
      "針の付いた仕掛けを通路に放置しない"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "toilet": true,
    "methodSlugs": [
      "uki"
    ]
  },
  {
    "slug": "asaka-garden",
    "name": "朝霞ガーデン",
    "prefecture": "埼玉県",
    "area": "埼玉・朝霞",
    "lat": 35.817302,
    "lng": 139.608516,
    "type": "spot",
    "primaryType": "fresh",
    "terrain": "pond",
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "officialUrl": "https://www.a-garden.com/top.html",
    "sources": [
      {
        "label": "朝霞ガーデン：公式利用案内",
        "url": "https://www.a-garden.com/time.html"
      },
      {
        "label": "施設所在地座標照合",
        "url": "https://mapfan.com/spots/S3C3A%2CJ%2C1JE2Y"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付の代表位置。実際の利用区画・集合場所は予約時の案内を優先。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": false,
    "note": "朝霞市の管理釣り場。ルアー・フライの区画と利用時間を確認し、釣り券の条件に合わせてニジマスを狙います。",
    "googleQuery": "朝霞ガーデン 埼玉県",
    "access": "朝霞市田島2丁目8-1。利用区分・休業日は施設へ確認。",
    "field": "都市近郊の管理池。水面や周囲の釣り人を見ながら安全にキャストすることが大切です。",
    "bestFor": [
      "ニジマスを狙う釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "小型スプーンで深さと速度を変え、反応のある層を探る",
      "利用池とフック規定を入場時に確認"
    ],
    "caution": [
      "後方に人がいないことを確かめてから投げる",
      "持ち帰り制限とリリース時の扱いを守る"
    ],
    "guideSlugs": [
      "nijimasu-field-notes"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "status": "営業・利用条件は施設に確認（公式サイトへ接続できない場合あり）"
  },
  {
    "slug": "yomitan-uminchu-club",
    "name": "読谷海人倶楽部",
    "prefecture": "沖縄県",
    "area": "沖縄・読谷・都屋漁港",
    "lat": 26.42236,
    "lng": 127.726122,
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "officialUrl": "https://uminchu-club.jp/turi/",
    "sources": [
      {
        "label": "運営者・自治体の利用案内",
        "url": "https://uminchu-club.jp/turi/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "公式コース案内のGoogle地図リンクが示す海人倶楽部の集合位置。",
    "season": "対象魚・営業日・休業日は公式案内を確認",
    "beginner": true,
    "kids": true,
    "note": "読谷村の都屋漁港を集合場所とする釣り船体験。短時間の体験と本格的なコースを区別し、年齢・経験に合うプランを相談できます。",
    "googleQuery": "読谷海人倶楽部 沖縄県",
    "access": "都屋漁港の海人倶楽部集合拠点へ。受付位置は予約時に確認。",
    "field": "読谷沖の船釣り。対象魚はコースや海況で変わります。",
    "bestFor": [
      "現地案内付きの釣り"
    ],
    "timing": "釣行前に営業・出船状況を確認。",
    "tips": [
      "貸道具・餌・持ち帰りや調理の条件をプランごとに確認",
      "初めてなら船酔い対策と日差し対策を準備"
    ],
    "caution": [
      "コースの参加年齢と同乗条件を予約時に確認",
      "港内の一般釣りを許可するマーカーではありません"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ]
  },
  {
    "slug": "grace-shimotsui",
    "name": "遊漁船GRACE",
    "prefecture": "岡山県",
    "area": "岡山・倉敷・下津井漁港",
    "lat": 34.4359753,
    "lng": 133.7964599,
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "fish": [
      "マダイ",
      "キジハタ",
      "ブリ"
    ],
    "methods": [
      "ひとつテンヤ",
      "タイラバ",
      "ノマセ"
    ],
    "officialUrl": "https://www.fishing-grace.com/",
    "sources": [
      {
        "label": "GRACE：公式案内・駐車位置",
        "url": "https://www.fishing-grace.com/"
      },
      {
        "label": "乗船所の所在地と座標照合",
        "url": "https://tsurimaru.jp/boat/10927/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "下津井の乗船所位置を公式住所・駐車案内と照合。公式サイト内の事業者情報には別の児島側位置もあるため、集合は予約案内を優先。",
    "season": "営業日・募集便は公式案内を確認",
    "beginner": true,
    "kids": true,
    "note": "下津井を拠点に瀬戸内海へ出る遊漁船。ひとつテンヤやタイラバでマダイ、アコウなどを狙う便が案内されています。",
    "googleQuery": "遊漁船GRACE 岡山県",
    "access": "倉敷市下津井1丁目の指定駐車場・乗船所。公式の駐車位置写真を予約時に照合。",
    "field": "下津井沖を中心とする船釣り。受付や駐車場所と実際の釣り場は別です。",
    "bestFor": [
      "マダイを狙う釣り"
    ],
    "timing": "予約便・体験の開始時刻と天候を事前確認。",
    "tips": [
      "テンヤとタイラバのどちらの便か確認してから道具を揃える",
      "釣った魚の調理相談は事前に船宿へ確認"
    ],
    "caution": [
      "他船や漁業用の駐車区画を使わない",
      "使用する重さと集合時刻は船長案内を優先"
    ],
    "guideSlugs": [
      "tairaba-bottom-contact",
      "boat-fishing-seasick"
    ],
    "parking": true,
    "methodSlugs": [
      "hitotsu-tenya",
      "tai-rubber",
      "nomase"
    ]
  },
  {
    "slug": "ashidani-yamame",
    "name": "芦谷峡やまめの里",
    "prefecture": "島根県",
    "area": "島根・雲南・吉田",
    "lat": 35.13357346,
    "lng": 132.8988286,
    "type": "spot",
    "primaryType": "fresh",
    "terrain": "pond",
    "fish": [
      "ヤマメ",
      "ニジマス",
      "イワナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "officialUrl": "https://yamamenosato.net/",
    "sources": [
      {
        "label": "やまめの里：公式案内",
        "url": "https://yamamenosato.net/"
      },
      {
        "label": "雲南市：釣堀・対象魚の案内",
        "url": "https://www.city.unnan.shimane.jp/unnan/kankou/spot/leisure/leisure08.html"
      },
      {
        "label": "島根県観光公式：施設位置",
        "url": "https://www.kankou-shimane.com/destination/21915"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "島根県観光公式の施設座標。運営者の住所と照合。",
    "season": "営業日・募集便は公式案内を確認",
    "beginner": true,
    "kids": true,
    "note": "雲南市吉田町の清流を利用した釣堀。貸竿でヤマメなどを釣り、その場で料理してもらえるため、道具を持たない家族でも計画できます。",
    "googleQuery": "芦谷峡やまめの里 島根県",
    "access": "雲南市吉田町吉田37-1。山道の経路と営業を事前確認。",
    "field": "渓谷の水を引いた管理釣堀。天然河川の遊漁許可を示す地点ではありません。",
    "bestFor": [
      "ヤマメを狙う釣り"
    ],
    "timing": "予約便・体験の開始時刻と天候を事前確認。",
    "tips": [
      "釣りと食事を組み合わせる場合は開始時間を予約時に相談",
      "魚の尾数・持ち帰り条件を先に施設へ確認"
    ],
    "caution": [
      "周辺河川へ自己判断で釣りの範囲を広げない",
      "増水・大雨時の営業と道路規制を確認"
    ],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ]
  },
  {
    "slug": "saigo-guided-fishing",
    "name": "西郷港 岸壁釣り体験",
    "prefecture": "島根県",
    "area": "島根・隠岐の島・西郷港",
    "lat": 36.20274797,
    "lng": 133.33426237,
    "type": "spot",
    "primaryType": "port",
    "terrain": "port",
    "fish": [],
    "methods": [
      "サビキ"
    ],
    "officialUrl": "https://www.kankou-shimane.com/experience/60163",
    "sources": [
      {
        "label": "島根県観光公式：2026年の岸壁釣り体験",
        "url": "https://www.kankou-shimane.com/experience/60163"
      },
      {
        "label": "隠岐旅公式：隠岐旅工舎の集合拠点位置",
        "url": "https://www.e-oki.net/experience/7977/"
      }
    ],
    "verifiedAt": "2026-09-17",
    "positionNote": "観光公式に掲載された隠岐旅工舎の集合拠点。岸壁の釣り区画はガイドが指定。",
    "season": "2026年4月1日〜11月30日の案内。実施可否は予約時に確認",
    "beginner": true,
    "kids": true,
    "note": "隠岐旅工舎が案内する西郷港のガイド付き釣り体験。貸竿・餌・ライフジャケット付きの案内があり、初心者はガイドに習って岸壁釣りを始められます。",
    "googleQuery": "西郷港 岸壁釣り体験 島根県",
    "access": "西郷港近くの隠岐旅工舎で受付。集合場所・受付建物は予約の案内を確認。",
    "field": "ガイドが案内する岸壁の体験区画。港全域での自由な釣りを案内するものではありません。",
    "bestFor": [
      "ガイド付き釣り体験"
    ],
    "timing": "予約便・体験の開始時刻と天候を事前確認。",
    "tips": [
      "船の到着・出発時刻と体験時間を合わせて計画",
      "サビキの仕掛けを下ろす深さをガイドに教わる"
    ],
    "caution": [
      "釣り可能な岸壁と漁業作業の動線をガイドに確認",
      "船の係留索・作業場所へ近づかない"
    ],
    "guideSlugs": [
      "aji-sabiki-depth",
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "sabiki"
    ]
  }
];
