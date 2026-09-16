import type {FishingMapEntry} from './fishing-map-data';
// Town-area reference coordinates; exact entrances and boarding points require operator directions.
export const verifiedMapExpansion:FishingMapEntry[]=[
  {
    "slug": "abashiri-yobito-wakasagi",
    "name": "網走湖 呼人浦ワカサギ釣り会場",
    "type": "spot",
    "prefecture": "北海道",
    "area": "北海道・網走",
    "terrain": "lake",
    "lng": 144.205658,
    "lat": 43.965076,
    "fish": [
      "ワカサギ"
    ],
    "fishSlugs": [],
    "methods": [
      "氷上ワカサギ釣り"
    ],
    "methodSlugs": [],
    "note": "観光協会が案内する冬の氷上釣り会場。2026年の営業は終了しており、次季の開催は公式告知待ちです。",
    "access": "網走市呼人823-2周辺。開設された会場の受付を利用。",
    "field": "管理された冬季氷上釣り会場",
    "googleQuery": "網走湖 呼人浦ワカサギ釣り会場",
    "verifiedAt": "2026-09-16",
    "season": "冬季・管理者が開放した期間のみ",
    "beginner": true,
    "kids": true,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "網走市観光協会：会場案内",
        "url": "https://visit-abashiri.jp/play/f862280e62c9e298c6a293df59a7202507fa8fb3.html"
      },
      {
        "label": "観光協会：2026年営業終了",
        "url": "https://visit-abashiri.jp/news/news/c1f05fc94d8d98504eadd50c27f80ac404529d69.html"
      }
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "bestFor": [
      "管理された冬季氷上釣り会場"
    ],
    "timing": "開場時間と天候を確認し、明るいうちに足場と帰路を確認する。",
    "tips": [
      "出発前に公式案内で開放範囲と使用できる仕掛けを確認する"
    ],
    "caution": [
      "会場外や未開放の氷上には立ち入らない",
      "氷の厚さを自己判断して入らず、開催告知と受付指示に従う"
    ],
    "parking": true,
    "closed": true,
    "status": "2026年の営業終了。次季の営業・結氷状況は未確定。"
  },
  {
    "slug": "yura-yamagata-fishing",
    "name": "由良海洋釣り堀",
    "type": "spot",
    "prefecture": "山形県",
    "area": "山形・鶴岡・由良",
    "terrain": "sea-pond",
    "lng": 139.699219,
    "lat": 38.720642,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "施設指定の餌釣り"
    ],
    "methodSlugs": [],
    "note": "由良地区の海洋釣り堀。運営地域の公式サイトに2026年4月18日のシーズン開始が案内されています。",
    "access": "鶴岡市由良・白山島方面。営業日と受付場所を公式案内で確認。",
    "field": "海辺の管理釣り堀",
    "googleQuery": "由良海洋釣り堀",
    "verifiedAt": "2026-09-16",
    "season": "開園期間・当日の利用状況は公式情報で確認",
    "beginner": false,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.yura-yamagata.jp/"
      }
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "bestFor": [
      "海辺の管理釣り堀"
    ],
    "timing": "開場時間と天候を確認し、明るいうちに足場と帰路を確認する。",
    "tips": [
      "出発前に公式案内で開放範囲と使用できる仕掛けを確認する"
    ],
    "caution": [
      "海況による変更とシーズン終了日を確認",
      "釣り堀の利用条件は周辺の海岸・港とは別に確認"
    ]
  },
  {
    "slug": "oi-nagisa-fishing",
    "name": "大井ふ頭中央海浜公園 なぎさの森",
    "type": "spot",
    "prefecture": "東京都",
    "area": "東京・品川・京浜運河",
    "terrain": "shore",
    "lng": 139.751282,
    "lat": 35.592236,
    "fish": [],
    "fishSlugs": [],
    "methods": [],
    "methodSlugs": [],
    "note": "人工のなぎさで釣りを楽しめる都立公園。保護区域を含むため、現地案内図で釣り可能な範囲を選びます。",
    "access": "品川区八潮4丁目。なぎさの森の入口・園内案内図を確認。",
    "field": "運河に沿う人工のなぎさ",
    "googleQuery": "大井ふ頭中央海浜公園 なぎさの森",
    "verifiedAt": "2026-09-16",
    "season": "開園期間・当日の利用状況は公式情報で確認",
    "beginner": false,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://tokyo-south-seaside-parks.com/oi-park/"
      }
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "bestFor": [
      "運河に沿う人工のなぎさ"
    ],
    "timing": "開場時間と天候を確認し、明るいうちに足場と帰路を確認する。",
    "tips": [
      "出発前に公式案内で開放範囲と使用できる仕掛けを確認する"
    ],
    "caution": [
      "保護区域や立入禁止の干潟へ入らない",
      "散策者・野鳥・周囲の利用者に向けて仕掛けを振らない"
    ]
  },
  {
    "slug": "yokosuka-umibe",
    "name": "横須賀市 海辺つり公園",
    "type": "spot",
    "prefecture": "神奈川県",
    "area": "神奈川・横須賀・東京湾",
    "terrain": "park",
    "lng": 139.684723,
    "lat": 35.27277,
    "fish": [],
    "fishSlugs": [],
    "methods": [],
    "methodSlugs": [],
    "note": "海釣り広場とボードウォークを備える公園。公式の当日釣果・釣場情報と、イベントによる利用規制を確認できます。",
    "access": "横須賀市平成町3-1。公式交通アクセスを確認。",
    "field": "海釣り広場の指定区間",
    "googleQuery": "横須賀市 海辺つり公園",
    "verifiedAt": "2026-09-16",
    "season": "開園期間・当日の利用状況は公式情報で確認",
    "beginner": true,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.kanagawaparks.com/umibeturi/"
      }
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "bestFor": [
      "海釣り広場の指定区間"
    ],
    "timing": "開場時間と天候を確認し、明るいうちに足場と帰路を確認する。",
    "tips": [
      "出発前に公式案内で開放範囲と使用できる仕掛けを確認する"
    ],
    "caution": [
      "花火大会などの利用規制を公式お知らせで確認",
      "投げ方・釣具の使用制限は園内ルールに従う"
    ]
  },
  {
    "slug": "shimizu-port-park",
    "name": "清水港海づり公園",
    "type": "spot",
    "prefecture": "静岡県",
    "area": "静岡・清水港・新興津",
    "terrain": "pier",
    "lng": 138.507874,
    "lat": 35.05125,
    "fish": [],
    "fishSlugs": [],
    "methods": [],
    "methodSlugs": [],
    "note": "2026年度に桟橋部分を暫定供用する海づり公園。通年毎日営業ではなく、年度の開園日を確認して計画します。",
    "access": "静岡市清水区興津清見寺町。市の詳細マップで新興津地区の入口を確認。",
    "field": "暫定供用中の釣り桟橋",
    "googleQuery": "清水港海づり公園",
    "verifiedAt": "2026-09-16",
    "season": "開園期間・当日の利用状況は公式情報で確認",
    "beginner": false,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.city.shizuoka.lg.jp/s7524/s013047.html"
      }
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "bestFor": [
      "暫定供用中の釣り桟橋"
    ],
    "timing": "開場時間と天候を確認し、明るいうちに足場と帰路を確認する。",
    "tips": [
      "出発前に公式案内で開放範囲と使用できる仕掛けを確認する"
    ],
    "caution": [
      "平日は暫定供用の対象外",
      "港の他の岸壁・工事区域へ立ち入らない"
    ],
    "status": "2026年度は土日祝のみ（1月1〜3日を除く）。臨時変更は管理者告知を優先。",
    "sourceUpdatedAt": "2026-04-28"
  },
  {
    "slug": "tainai-fishing-park",
    "name": "胎内フィッシングパーク",
    "type": "spot",
    "prefecture": "新潟県",
    "area": "新潟・胎内",
    "terrain": "pond",
    "lng": 139.479675,
    "lat": 38.027847,
    "fish": [
      "ヤマメ",
      "ニジマス",
      "イワナ"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "methods": [
      "管理池の餌釣り"
    ],
    "methodSlugs": [],
    "note": "胎内川沿いの管理釣り堀。道具と餌を施設で用意し、放流魚を狙う体験型の釣り場です。",
    "access": "胎内市熱田坂631。今季の営業は胎内リゾートへ確認。",
    "field": "放流魚を釣る管理池",
    "googleQuery": "胎内フィッシングパーク",
    "verifiedAt": "2026-09-16",
    "season": "開園期間・当日の利用状況は公式情報で確認",
    "beginner": true,
    "kids": true,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.city.tainai.niigata.jp/sangyo/kanko/fishingpark.html"
      }
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "bestFor": [
      "放流魚を釣る管理池"
    ],
    "timing": "開場時間と天候を確認し、明るいうちに足場と帰路を確認する。",
    "tips": [
      "出発前に公式案内で開放範囲と使用できる仕掛けを確認する"
    ],
    "caution": [
      "市の紹介記事は2023年更新。今季の営業は運営者へ確認",
      "一般河川での釣りとは異なるため、施設の道具・持ち帰りルールに従う"
    ],
    "sourceUpdatedAt": "2023-04-21"
  },
  {
    "slug": "mikata-sea-fishing",
    "name": "海釣り公園みかた",
    "type": "spot",
    "prefecture": "福井県",
    "area": "福井・若狭町小川",
    "terrain": "sea-pond",
    "lng": 135.845078,
    "lat": 35.608406,
    "fish": [
      "マダイ",
      "ブリ",
      "シマアジ"
    ],
    "fishSlugs": [
      "madai",
      "buri"
    ],
    "methods": [
      "海上釣り堀の餌釣り"
    ],
    "methodSlugs": [],
    "note": "若狭町小川の海上釣り堀。自由な岸釣りとは異なり、コースごとの予約・釣果の扱い・餌の条件を確認して利用します。",
    "access": "若狭町小川17-36。予約時に集合・受付場所を確認。",
    "field": "コースを選んで利用する海上釣り堀",
    "googleQuery": "海釣り公園みかた",
    "verifiedAt": "2026-09-16",
    "season": "開園期間・当日の利用状況は公式情報で確認",
    "beginner": true,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.umitsurikouen.com/sp/"
      }
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "bestFor": [
      "コースを選んで利用する海上釣り堀"
    ],
    "timing": "開場時間と天候を確認し、明るいうちに足場と帰路を確認する。",
    "tips": [
      "出発前に公式案内で開放範囲と使用できる仕掛けを確認する"
    ],
    "caution": [
      "餌の持込条件・現地購入の指定を確認",
      "釣った魚の持ち帰り条件は予約コースの規定を優先"
    ]
  },
  {
    "slug": "yura-wakayama-park",
    "name": "由良海つり公園＆釣堀ランド",
    "type": "spot",
    "prefecture": "和歌山県",
    "area": "和歌山・由良町",
    "terrain": "raft",
    "lng": 135.084076,
    "lat": 33.959763,
    "fish": [
      "アジ",
      "サバ",
      "カサゴ",
      "クロダイ",
      "カワハギ",
      "マダイ",
      "ブリ"
    ],
    "fishSlugs": [
      "aji",
      "saba",
      "kasago",
      "chinu",
      "kawahagi",
      "madai",
      "buri"
    ],
    "methods": [
      "筏釣り",
      "釣り堀の餌釣り"
    ],
    "methodSlugs": [],
    "note": "自然の魚を狙う筏と、予約制の釣堀ランドを区別して利用する施設。区画によって釣り方のルールが異なります。",
    "access": "日高郡由良町神谷465-1。利用する区画を伝えて確認。",
    "field": "海上筏・予約制の釣り堀",
    "googleQuery": "由良海つり公園＆釣堀ランド",
    "verifiedAt": "2026-09-16",
    "season": "開園期間・当日の利用状況は公式情報で確認",
    "beginner": true,
    "kids": true,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://yura-wakayama-kanko.jp/tsurikouen"
      }
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "bestFor": [
      "海上筏・予約制の釣り堀"
    ],
    "timing": "開場時間と天候を確認し、明るいうちに足場と帰路を確認する。",
    "tips": [
      "出発前に公式案内で開放範囲と使用できる仕掛けを確認する"
    ],
    "caution": [
      "釣堀ランドは予約制・ルアー禁止・撒き餌禁止",
      "筏と釣堀で竿数・針数・撒き餌のルールが異なる"
    ]
  },
  {
    "slug": "meda-forest-pond",
    "name": "目田森林公園 目田池",
    "type": "spot",
    "prefecture": "島根県",
    "area": "島根・出雲・佐田",
    "terrain": "pond",
    "lng": 132.711639,
    "lat": 35.244701,
    "fish": [],
    "fishSlugs": [],
    "methods": [],
    "methodSlugs": [],
    "note": "森林公園内の目田池で釣りを楽しめます。キャンプなどと合わせる場合も、池で使える釣具や利用時間を管理棟で確認します。",
    "access": "出雲市佐田町反辺2612-3。公園管理棟で受付・利用条件を確認。",
    "field": "森林公園内の池",
    "googleQuery": "目田森林公園 目田池",
    "verifiedAt": "2026-09-16",
    "season": "運営公式の営業期間は4〜11月。臨時変更は公式案内を確認。",
    "beginner": false,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "島根県観光連盟：施設・設備",
        "url": "https://www.kankou-shimane.com/destination/20422"
      },
      {
        "label": "公園公式：営業期間",
        "url": "https://www.meda-park.com/"
      }
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "bestFor": [
      "森林公園内の池"
    ],
    "timing": "開場時間と天候を確認し、明るいうちに足場と帰路を確認する。",
    "tips": [
      "出発前に公式案内で開放範囲と使用できる仕掛けを確認する"
    ],
    "caution": [
      "現地の立入禁止表示・管理者の指示を優先する",
      "荒天時は無理に入場しない"
    ],
    "parking": true,
    "toilet": true
  },
  {
    "slug": "waita-fishing-pier",
    "name": "脇田海釣り桟橋",
    "type": "spot",
    "prefecture": "福岡県",
    "area": "福岡・北九州・若松",
    "terrain": "pier",
    "lng": 130.71936,
    "lat": 33.92767,
    "fish": [
      "アジ",
      "シロギス"
    ],
    "fishSlugs": [
      "aji",
      "kisu"
    ],
    "methods": [],
    "methodSlugs": [],
    "note": "ひびき海の公園から沖へ延びる釣り桟橋。アジやキスが紹介され、駐車場と公園内トイレの案内があります。",
    "access": "北九州市若松区安屋。海水浴場ではなく海釣り桟橋の入口へ。",
    "field": "沖へ延びる管理桟橋",
    "googleQuery": "脇田海釣り桟橋",
    "verifiedAt": "2026-09-16",
    "season": "開園期間・当日の利用状況は公式情報で確認",
    "beginner": false,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.crossroadfukuoka.jp/spot/13136"
      }
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "bestFor": [
      "沖へ延びる管理桟橋"
    ],
    "timing": "開場時間と天候を確認し、明るいうちに足場と帰路を確認する。",
    "tips": [
      "出発前に公式案内で開放範囲と使用できる仕掛けを確認する"
    ],
    "caution": [
      "休業日と天候による休止を施設へ確認",
      "海水浴エリアへ仕掛けを投げない。釣法は桟橋の規定を優先"
    ],
    "parking": true,
    "toilet": true
  },
  {
    "slug": "sakurajima-umizuri",
    "name": "桜島海づり公園",
    "type": "spot",
    "prefecture": "鹿児島県",
    "area": "鹿児島・桜島・錦江湾",
    "terrain": "pier",
    "lng": 130.595276,
    "lat": 31.584061,
    "fish": [
      "アジ",
      "カサゴ",
      "メジナ",
      "カワハギ"
    ],
    "fishSlugs": [
      "aji",
      "kasago",
      "mejina",
      "kawahagi"
    ],
    "methods": [
      "サビキ",
      "胴突き"
    ],
    "methodSlugs": [
      "sabiki",
      "douzuki"
    ],
    "note": "桜島港から徒歩で向かえる海づり施設。溶岩地形と速い潮が特徴で、足元のサビキや胴突きを組み立てます。",
    "access": "鹿児島市桜島横山町1722-3。桜島フェリーターミナルから徒歩約10分の案内。",
    "field": "溶岩地形に面した釣り台",
    "googleQuery": "桜島海づり公園",
    "verifiedAt": "2026-09-16",
    "season": "開園期間・当日の利用状況は公式情報で確認",
    "beginner": true,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.city.kagoshima.lg.jp/seisanryutu/shisetsu/kanko/018.html"
      }
    ],
    "guideSlugs": [
      "aji-sabiki-depth",
      "dangerous-fish-first-check"
    ],
    "bestFor": [
      "溶岩地形に面した釣り台"
    ],
    "timing": "開場時間と天候を確認し、明るいうちに足場と帰路を確認する。",
    "tips": [
      "出発前に公式案内で開放範囲と使用できる仕掛けを確認する"
    ],
    "caution": [
      "投げ釣り禁止。アミカゴ以外の撒き餌禁止",
      "糸は1人2本まで。知らない魚は触らず係員へ相談"
    ],
    "parking": true,
    "waterDepth": "6〜9m（市の施設案内）"
  },
  {
    "slug": "takashima-tobishima",
    "name": "高島飛島磯釣り公園",
    "type": "spot",
    "prefecture": "長崎県",
    "area": "長崎・高島",
    "terrain": "rock",
    "lng": 129.752884,
    "lat": 32.657909,
    "fish": [],
    "fishSlugs": [],
    "methods": [],
    "methodSlugs": [],
    "note": "長崎市の高島地区に整備された磯釣り公園。島への交通と公園の開放状況を一緒に確認して計画します。",
    "access": "長崎市高島町。高島への航路と公園への移動方法は観光・運営案内を確認。",
    "field": "島の磯釣り公園",
    "googleQuery": "高島飛島磯釣り公園",
    "verifiedAt": "2026-09-16",
    "season": "開園期間・当日の利用状況は公式情報で確認",
    "beginner": false,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.city.nagasaki.lg.jp/page/1693.html"
      }
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "bestFor": [
      "島の磯釣り公園"
    ],
    "timing": "開場時間と天候を確認し、明るいうちに足場と帰路を確認する。",
    "tips": [
      "出発前に公式案内で開放範囲と使用できる仕掛けを確認する"
    ],
    "caution": [
      "往復の船便と最終便を確認して計画する",
      "磯の波・風と立入範囲は管理者の指示を優先"
    ]
  },
  {
    "slug": "iioka-sachimaru",
    "name": "幸丸（飯岡）",
    "type": "boat",
    "prefecture": "千葉県",
    "area": "千葉・飯岡・外房",
    "terrain": "boat",
    "lng": 140.728485,
    "lat": 35.70068,
    "fish": [
      "ヒラメ",
      "マダイ",
      "ヤリイカ"
    ],
    "fishSlugs": [
      "hirame",
      "madai",
      "yariika"
    ],
    "methods": [
      "活き餌のヒラメ釣り",
      "ひとつテンヤ"
    ],
    "methodSlugs": [
      "nomase",
      "hitotsu-tenya"
    ],
    "note": "飯岡の船宿。活き餌のヒラメ、ひとつテンヤマダイなど、乗る便により必要な仕掛けが変わります。",
    "access": "飯岡港の集合場所は予約時に公式案内で確認。",
    "field": "予約した船での沖釣り",
    "googleQuery": "幸丸（飯岡）",
    "verifiedAt": "2026-09-16",
    "season": "釣り物・出船予定は公式案内で確認",
    "beginner": false,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://cb-sachimaru.com/"
      }
    ],
    "guideSlugs": [
      "first-charter-boat-reservation",
      "fishing-cooler-plan"
    ],
    "bestFor": [
      "希望魚・釣法を指定して乗船相談"
    ],
    "timing": "出船決定・集合時刻・帰港予定は予約先へ確認。",
    "tips": [
      "初心者は貸竿と仕掛け・餌・氷の範囲を予約時に確認",
      "竿の負荷と糸・オモリは船宿指定を優先"
    ],
    "caution": [
      "掲載港付近の岸釣り許可を意味しない",
      "料金・出船時間・最少人数・キャンセル条件は公式の最新情報で確認"
    ],
    "port": "飯岡港",
    "officialUrl": "https://cb-sachimaru.com/"
  },
  {
    "slug": "takasu-sachimaru",
    "name": "幸丸（鷹巣）",
    "type": "boat",
    "prefecture": "福井県",
    "area": "福井・鷹巣・日本海",
    "terrain": "boat",
    "lng": 136.072861,
    "lat": 36.116268,
    "fish": [
      "マダイ",
      "青物"
    ],
    "fishSlugs": [
      "madai",
      "buri"
    ],
    "methods": [
      "完全ふかせ"
    ],
    "methodSlugs": [],
    "note": "鷹巣から完全ふかせなどを案内する船宿。岸のウキフカセとは道具が異なるため、予約便のタックルを確認します。",
    "access": "鷹巣港の集合場所は予約時に公式案内で確認。",
    "field": "予約した船での沖釣り",
    "googleQuery": "幸丸（鷹巣）",
    "verifiedAt": "2026-09-16",
    "season": "釣り物・出船予定は公式案内で確認",
    "beginner": false,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://sachimaru.net/"
      }
    ],
    "guideSlugs": [
      "first-charter-boat-reservation",
      "fishing-cooler-plan"
    ],
    "bestFor": [
      "希望魚・釣法を指定して乗船相談"
    ],
    "timing": "出船決定・集合時刻・帰港予定は予約先へ確認。",
    "tips": [
      "初心者は貸竿と仕掛け・餌・氷の範囲を予約時に確認",
      "竿の負荷と糸・オモリは船宿指定を優先"
    ],
    "caution": [
      "掲載港付近の岸釣り許可を意味しない",
      "料金・出船時間・最少人数・キャンセル条件は公式の最新情報で確認"
    ],
    "port": "鷹巣港",
    "officialUrl": "https://sachimaru.net/",
    "toilet": true
  },
  {
    "slug": "numazu-koshomaru",
    "name": "第八幸松丸",
    "type": "boat",
    "prefecture": "静岡県",
    "area": "静岡・沼津・駿河湾",
    "terrain": "boat",
    "lng": 138.886215,
    "lat": 35.053623,
    "fish": [
      "タチウオ",
      "アカハタ"
    ],
    "fishSlugs": [
      "tachiuo",
      "akahata"
    ],
    "methods": [],
    "methodSlugs": [],
    "note": "静浦港から出船する釣船。タチウオやアカハタなど、募集便ごとの釣り物と準備品を公式予定で確認できます。",
    "access": "静浦港の集合場所は予約時に公式案内で確認。",
    "field": "予約した船での沖釣り",
    "googleQuery": "第八幸松丸",
    "verifiedAt": "2026-09-16",
    "season": "釣り物・出船予定は公式案内で確認",
    "beginner": false,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://numazu-koshomaru.com/"
      }
    ],
    "guideSlugs": [
      "first-charter-boat-reservation",
      "fishing-cooler-plan"
    ],
    "bestFor": [
      "希望魚・釣法を指定して乗船相談"
    ],
    "timing": "出船決定・集合時刻・帰港予定は予約先へ確認。",
    "tips": [
      "初心者は貸竿と仕掛け・餌・氷の範囲を予約時に確認",
      "竿の負荷と糸・オモリは船宿指定を優先"
    ],
    "caution": [
      "掲載港付近の岸釣り許可を意味しない",
      "料金・出船時間・最少人数・キャンセル条件は公式の最新情報で確認"
    ],
    "port": "静浦港",
    "officialUrl": "https://numazu-koshomaru.com/"
  },
  {
    "slug": "toba-nakasamaru",
    "name": "仲佐丸",
    "type": "boat",
    "prefecture": "三重県",
    "area": "三重・鳥羽・伊勢湾口",
    "terrain": "boat",
    "lng": 136.845383,
    "lat": 34.474655,
    "fish": [
      "マダイ",
      "ブリ",
      "アジ",
      "イサキ",
      "メバル",
      "シロギス"
    ],
    "fishSlugs": [
      "madai",
      "buri",
      "aji",
      "isaki",
      "mebaru",
      "kisu"
    ],
    "methods": [
      "タイラバ",
      "鯛サビキ"
    ],
    "methodSlugs": [
      "tai-rubber"
    ],
    "note": "鳥羽の船宿。事務所は菅島ですが、乗船は中之郷桟橋の案内です。古い集合場所と取り違えないよう予約時に確認します。",
    "access": "鳥羽・中之郷桟橋の集合場所は予約時に公式案内で確認。",
    "field": "予約した船での沖釣り",
    "googleQuery": "仲佐丸",
    "verifiedAt": "2026-09-16",
    "season": "釣り物・出船予定は公式案内で確認",
    "beginner": true,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.nakasa-maru.com/"
      }
    ],
    "guideSlugs": [
      "first-charter-boat-reservation",
      "fishing-cooler-plan"
    ],
    "bestFor": [
      "希望魚・釣法を指定して乗船相談"
    ],
    "timing": "出船決定・集合時刻・帰港予定は予約先へ確認。",
    "tips": [
      "初心者は貸竿と仕掛け・餌・氷の範囲を予約時に確認",
      "竿の負荷と糸・オモリは船宿指定を優先"
    ],
    "caution": [
      "掲載港付近の岸釣り許可を意味しない",
      "料金・出船時間・最少人数・キャンセル条件は公式の最新情報で確認"
    ],
    "port": "鳥羽・中之郷桟橋",
    "officialUrl": "https://www.nakasa-maru.com/",
    "parking": true,
    "toilet": true
  },
  {
    "slug": "miyazu-issinmaru",
    "name": "一心丸",
    "type": "boat",
    "prefecture": "京都府",
    "area": "京都・宮津・丹後半島沖",
    "terrain": "boat",
    "lng": 135.239395,
    "lat": 35.631248,
    "fish": [
      "ヒラメ",
      "キジハタ"
    ],
    "fishSlugs": [
      "hirame",
      "kijihata"
    ],
    "methods": [],
    "methodSlugs": [],
    "note": "里波見港から根魚を中心に狙う船宿。電動リールを含む貸道具の案内があり、深さや仕掛けは予約する便に合わせます。",
    "access": "里波見港の集合場所は予約時に公式案内で確認。",
    "field": "予約した船での沖釣り",
    "googleQuery": "一心丸",
    "verifiedAt": "2026-09-16",
    "season": "釣り物・出船予定は公式案内で確認",
    "beginner": false,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.issinmaru.com/"
      }
    ],
    "guideSlugs": [
      "first-charter-boat-reservation",
      "fishing-cooler-plan"
    ],
    "bestFor": [
      "希望魚・釣法を指定して乗船相談"
    ],
    "timing": "出船決定・集合時刻・帰港予定は予約先へ確認。",
    "tips": [
      "初心者は貸竿と仕掛け・餌・氷の範囲を予約時に確認",
      "竿の負荷と糸・オモリは船宿指定を優先"
    ],
    "caution": [
      "掲載港付近の岸釣り許可を意味しない",
      "料金・出船時間・最少人数・キャンセル条件は公式の最新情報で確認"
    ],
    "port": "里波見港",
    "officialUrl": "https://www.issinmaru.com/",
    "parking": true,
    "toilet": true
  },
  {
    "slug": "naha-fishing-cooperative",
    "name": "那覇新港釣船協同組合",
    "type": "boat",
    "prefecture": "沖縄県",
    "area": "沖縄・那覇",
    "terrain": "boat",
    "lng": 127.677574,
    "lat": 26.236647,
    "fish": [],
    "fishSlugs": [],
    "methods": [],
    "methodSlugs": [],
    "note": "那覇新港の複数の釣船を案内する協同組合です。1隻の船名ではなく相談窓口として掲載し、釣り物に合う船と集合場所を確認します。",
    "access": "那覇新港の集合場所は予約時に公式案内で確認。",
    "field": "予約した船での沖釣り",
    "googleQuery": "那覇新港釣船協同組合",
    "verifiedAt": "2026-09-16",
    "season": "釣り物・出船予定は公式案内で確認",
    "beginner": false,
    "kids": false,
    "positionNote": "地図は所在地の町域代表点です（国土地理院住所検索）。釣座・入口の正確な位置は公式案内とGoogleマップで確認してください。",
    "sources": [
      {
        "label": "運営者・自治体・観光協会の施設案内",
        "url": "https://www.okinawatsuribune.com/"
      }
    ],
    "guideSlugs": [
      "first-charter-boat-reservation",
      "fishing-cooler-plan"
    ],
    "bestFor": [
      "希望魚・釣法を指定して乗船相談"
    ],
    "timing": "出船決定・集合時刻・帰港予定は予約先へ確認。",
    "tips": [
      "初心者は貸竿と仕掛け・餌・氷の範囲を予約時に確認",
      "竿の負荷と糸・オモリは船宿指定を優先"
    ],
    "caution": [
      "掲載港付近の岸釣り許可を意味しない",
      "料金・出船時間・最少人数・キャンセル条件は公式の最新情報で確認"
    ],
    "port": "那覇新港",
    "officialUrl": "https://www.okinawatsuribune.com/",
    "parking": true
  }
];
