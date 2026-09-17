import type {FishingMapEntry} from './fishing-map-data';

// 100 distinct facilities, reviewed 2026-09-17. Seasonal closures are never live recommendations.
export const managedMapGrowth:FishingMapEntry[]=[
  {
    "slug": "managed-akashi-kamikawa",
    "type": "spot",
    "primaryType": "fresh",
    "name": "パワーフィールド・つりぼりあかし",
    "prefecture": "北海道",
    "area": "北海道・上川町",
    "terrain": "pond",
    "lat": 43.8432515,
    "lng": 142.765063,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "大型のマス類を扱う上川町のポンド。小物用の細い仕掛けだけで準備せず、放流魚と規則に合う道具を相談します。",
    "googleQuery": "パワーフィールド・つりぼりあかし 上川町",
    "officialUrl": "http://www.turiboriakashi.com",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "上川町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "大型のマス類を扱う上川町のポンド。小物用の細い仕掛けだけで準備せず、放流魚と規則に合う道具を相談します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "入口は公式の菊水橋側の案内を確認。大型魚を扱えるネットを準備する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "http://www.turiboriakashi.com"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/douhoku/akashi/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-taisetsu-tsuribori",
    "type": "spot",
    "primaryType": "fresh",
    "name": "大雪つりぼり",
    "prefecture": "北海道",
    "area": "北海道・上川町",
    "terrain": "pond",
    "lat": 43.832886,
    "lng": 142.754051,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "養魚場に併設された釣り堀で、釣った魚を食事につなげる体験を選べます。釣る量と調理受付の時刻を先に決めます。",
    "googleQuery": "大雪つりぼり 上川町",
    "officialUrl": "https://www.taisetsu.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "上川町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "養魚場に併設された釣り堀で、釣った魚を食事につなげる体験を選べます。釣る量と調理受付の時刻を先に決めます。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "平日と休日で受付時間が異なるため、食事を含めた利用時間を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.taisetsu.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/douhoku/taisetsu/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-irumu-sanso",
    "type": "spot",
    "primaryType": "fresh",
    "name": "イルム山荘",
    "prefecture": "北海道",
    "area": "北海道・芦別市",
    "terrain": "pond",
    "lat": 43.6087658,
    "lng": 142.1680011,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "芦別の観光案内で紹介されているイルム山荘の釣り体験。山荘の利用と釣りの受付条件を分けて問い合わせます。",
    "googleQuery": "イルム山荘 芦別市",
    "officialUrl": "https://go-to-ashibetsu.com/media/2018/02/24/123",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "芦別市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "芦別の観光案内で紹介されているイルム山荘の釣り体験。山荘の利用と釣りの受付条件を分けて問い合わせます。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "営業日と貸道具の用意を訪問前に確認し、山荘の案内する入口から利用する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "fishing-first-checklist",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://go-to-ashibetsu.com/media/2018/02/24/123"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/douhoku/irumu/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-bankei",
    "type": "spot",
    "primaryType": "fresh",
    "name": "ばんけいの釣り堀",
    "prefecture": "北海道",
    "area": "北海道・札幌市",
    "terrain": "pond",
    "lat": 43.0327901,
    "lng": 141.2741496,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "ばんけいスキー場の夏季施設として設けられる釣り堀。冬のスキー場営業と釣り堀の営業期間を混同しないようにします。",
    "googleQuery": "ばんけいの釣り堀 札幌市",
    "officialUrl": "https://www.bankei.co.jp/summer/turibori/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "札幌市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "ばんけいスキー場の夏季施設として設けられる釣り堀。冬のスキー場営業と釣り堀の営業期間を混同しないようにします。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "土日祝と長期休暇の開催案内を確認。釣り堀の受付時間を基準に出発する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "fishing-first-checklist",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.bankei.co.jp/summer/turibori/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/bankei/"
      }
    ]
  },
  {
    "slug": "managed-ten-pound",
    "type": "spot",
    "primaryType": "fresh",
    "name": "10pound",
    "prefecture": "北海道",
    "area": "北海道・恵庭市",
    "terrain": "pond",
    "lat": 42.907327,
    "lng": 141.4892129,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "恵庭のポンド型ルアー・フライフィールド。複数の池の使い方と魚の持ち帰り条件を受付で確認して始めます。",
    "googleQuery": "10pound 恵庭市",
    "officialUrl": "https://10pound.c.ooco.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "恵庭市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "恵庭のポンド型ルアー・フライフィールド。複数の池の使い方と魚の持ち帰り条件を受付で確認して始めます。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "イベント・貸切や各池のレギュレーションを確認し、釣り座の間隔を保つ。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://10pound.c.ooco.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/douou/10pound/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-shikaoi-yamabeen",
    "type": "spot",
    "primaryType": "fresh",
    "name": "鹿追やまべ園",
    "prefecture": "北海道",
    "area": "北海道・鹿追町",
    "terrain": "pond",
    "lat": 43.1768235,
    "lng": 143.1124311,
    "fish": [
      "ヤマメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "川魚料理と釣り堀を組み合わせられる鹿追の施設。釣った魚の精算と調理方法を確認して、必要な量を釣ります。",
    "googleQuery": "鹿追やまべ園 鹿追町",
    "officialUrl": "https://www.yamabe-en.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "鹿追町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "川魚料理と釣り堀を組み合わせられる鹿追の施設。釣った魚の精算と調理方法を確認して、必要な量を釣ります。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "飲食利用と釣り体験の受付を確認。持ち帰る場合は保冷容器を用意する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "yamame"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.yamabe-en.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/shikaoi_yamabeen/"
      }
    ]
  },
  {
    "slug": "managed-iwahime-fishing",
    "type": "spot",
    "primaryType": "fresh",
    "name": "岩姫フィッシング",
    "prefecture": "岩手県",
    "area": "岩手県・八幡平市",
    "terrain": "pond",
    "lat": 39.9189397,
    "lng": 141.030344,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "岩手山周辺の湧水を使う釣り施設。餌釣りとルアー・フライの利用期間を分けて確認します。",
    "googleQuery": "岩姫フィッシング 八幡平市",
    "officialUrl": "https://iwahimefishing.wixsite.com/mysite",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "八幡平市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "岩手山周辺の湧水を使う釣り施設。餌釣りとルアー・フライの利用期間を分けて確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "餌釣り池の季節営業と貸道具の有無を確認。釣法ごとの池を取り違えない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://iwahimefishing.wixsite.com/mysite"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/iwahime_fishing/"
      }
    ]
  },
  {
    "slug": "managed-clover",
    "type": "spot",
    "primaryType": "fresh",
    "name": "釣り堀カフェクローバー",
    "prefecture": "宮城県",
    "area": "宮城県・白石市",
    "terrain": "pond",
    "lat": 38.0777085,
    "lng": 140.564248,
    "fish": [
      "ニジマス",
      "ヤマメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "蔵王周辺で川魚の餌釣りと食事を組み合わせる釣り堀カフェ。短い体験でも魚の扱いと精算方法を最初に聞きます。",
    "googleQuery": "釣り堀カフェクローバー 白石市",
    "officialUrl": "https://outdoor-cafeclover.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "白石市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "蔵王周辺で川魚の餌釣りと食事を組み合わせる釣り堀カフェ。短い体験でも魚の扱いと精算方法を最初に聞きます。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣った魚を食べるか持ち帰るかを受付で決め、調理の待ち時間も見込む。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu",
      "yamame"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://outdoor-cafeclover.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/clover/"
      }
    ]
  },
  {
    "slug": "managed-greenpark-fubou",
    "type": "spot",
    "primaryType": "fresh",
    "name": "グリーンパーク不忘",
    "prefecture": "宮城県",
    "area": "宮城県・白石市",
    "terrain": "pond",
    "lat": 38.040554,
    "lng": 140.508093,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "不忘山の麓にあるアウトドア施設内の釣り場。ルアー・フライと家族向け体験の区分を確認して利用します。",
    "googleQuery": "グリーンパーク不忘 白石市",
    "officialUrl": "https://www.greenpark-fubou.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "白石市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "不忘山の麓にあるアウトドア施設内の釣り場。ルアー・フライと家族向け体験の区分を確認して利用します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "キャンプ等の受付と釣りの受付を区別。放流・貸切の最新案内を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.greenpark-fubou.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/greenpark_fubou/"
      }
    ]
  },
  {
    "slug": "managed-kamafusa-kt",
    "type": "spot",
    "primaryType": "fresh",
    "name": "釜房渓流つり",
    "prefecture": "宮城県",
    "area": "宮城県・川崎町",
    "terrain": "river",
    "lat": 38.2132438,
    "lng": 140.693174,
    "fish": [
      "ニジマス",
      "イワナ"
    ],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "釜房周辺の渓流釣り施設。公式案内では鳥害に伴う営業時間の変更を案内しているため、出発前の連絡が必要です。",
    "googleQuery": "釜房渓流つり 川崎町",
    "officialUrl": "https://www.kamafusa-tsuri.com/main/top.shtml",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "川崎町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "釜房周辺の渓流釣り施設。公式案内では鳥害に伴う営業時間の変更を案内しているため、出発前の連絡が必要です。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "通常の営業時間を決めつけず、当日の営業と利用できる釣法を電話で確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-map-permission-check",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu",
      "iwana"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.kamafusa-tsuri.com/main/top.shtml"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/kamafusa_kt/"
      }
    ]
  },
  {
    "slug": "managed-cgi-bin-miyagi-sakunami-profile-cgi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "作並渓流釣り場",
    "prefecture": "宮城県",
    "area": "宮城県・仙台市",
    "terrain": "river",
    "lat": 38.3495448,
    "lng": 140.6000607,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "作並の渓流型管理釣り場。利用する区画や放流方法を聞いてから入り、自然河川の自由釣りとは区別します。",
    "googleQuery": "作並渓流釣り場 仙台市",
    "officialUrl": "https://sakunamikeiryuturiba.wixsite.com/sakunami",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "仙台市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "作並の渓流型管理釣り場。利用する区画や放流方法を聞いてから入り、自然河川の自由釣りとは区別します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "当日の水量と営業を確認。川へ入れる範囲は係員の案内を優先する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://sakunamikeiryuturiba.wixsite.com/sakunami"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/miyagi/sakunami/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-kamuro-fishermans-rodge",
    "type": "spot",
    "primaryType": "fresh",
    "name": "神室フィッシャーマンズロッジ",
    "prefecture": "山形県",
    "area": "山形県・金山町",
    "terrain": "pond",
    "lat": 38.9071583,
    "lng": 140.4127269,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "神室地域の自然を利用した管理フィールド。積雪時期の営業とアクセス条件を確認してルアー・フライの釣行を組みます。",
    "googleQuery": "神室フィッシャーマンズロッジ 金山町",
    "officialUrl": "https://kamuro-fishermans.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "金山町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "神室地域の自然を利用した管理フィールド。積雪時期の営業とアクセス条件を確認してルアー・フライの釣行を組みます。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "冬季の営業可否と釣り座の使用範囲を確認し、後方に余裕のある場所で投げる。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://kamuro-fishermans.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/kamuro_fishermans_rodge/"
      }
    ]
  },
  {
    "slug": "managed-shirakawa-forest",
    "type": "spot",
    "primaryType": "fresh",
    "name": "那須白河フォレストスプリングス",
    "prefecture": "福島県",
    "area": "福島県・西郷村",
    "terrain": "pond",
    "lat": 37.1045072,
    "lng": 140.1304597,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "那須白河フォレストスプリングスのポンド群。グループの他施設と場所を取り違えず、西郷村のフィールド案内を使います。",
    "googleQuery": "那須白河フォレストスプリングス 西郷村",
    "officialUrl": "https://www.forest-springs.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "西郷村の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "那須白河フォレストスプリングスのポンド群。グループの他施設と場所を取り違えず、西郷村のフィールド案内を使います。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "池ごとの利用条件と持ち帰り規則を確認。大会の日は一般利用できる範囲を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.forest-springs.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/shirakawa_forest/"
      }
    ]
  },
  {
    "slug": "managed-fa-honobono",
    "type": "spot",
    "primaryType": "fresh",
    "name": "フィッシングエリアほのぼの",
    "prefecture": "福島県",
    "area": "福島県・矢祭町",
    "terrain": "pond",
    "lat": 36.820382,
    "lng": 140.4572862,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "福島と茨城の県境近くにあるルアー・フライ専用管理釣り場。季節の休業期間と再開情報を確認して計画します。",
    "googleQuery": "フィッシングエリアほのぼの 矢祭町",
    "officialUrl": "https://sites.google.com/view/fa-honobono",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "矢祭町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "福島と茨城の県境近くにあるルアー・フライ専用管理釣り場。季節の休業期間と再開情報を確認して計画します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "公式に休業表示あり。営業再開の案内を確認するまで釣行先として選ばない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "公式に休業中と表示。再開日を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://sites.google.com/view/fa-honobono"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/fa_honobono/"
      }
    ],
    "closed": true,
    "status": "公式に休業中と表示。再開日を確認。"
  },
  {
    "slug": "managed-aizu-fa",
    "type": "spot",
    "primaryType": "fresh",
    "name": "あいづフィッシングエリア",
    "prefecture": "福島県",
    "area": "福島県・南会津町",
    "terrain": "pond",
    "lat": 37.2177036,
    "lng": 139.7101401,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "旧あいづイワナからルアー専用施設へ移行した釣り場。旧施設の餌釣り案内を流用せず、現在の規則を確認します。",
    "googleQuery": "あいづフィッシングエリア 南会津町",
    "officialUrl": "https://ameblo.jp/aizu2024/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "南会津町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "旧あいづイワナからルアー専用施設へ移行した釣り場。旧施設の餌釣り案内を流用せず、現在の規則を確認します。",
    "bestFor": [
      "ルアーの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "夏季の割引・魚回収に伴う利用条件を公式ブログで確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://ameblo.jp/aizu2024/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/aizu_fa/"
      }
    ]
  },
  {
    "slug": "managed-masunoie",
    "type": "spot",
    "primaryType": "fresh",
    "name": "鱒の家",
    "prefecture": "福島県",
    "area": "福島県・福島市",
    "terrain": "pond",
    "lat": 37.7618815,
    "lng": 140.3689276,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "湧水を利用した渓流型の釣り堀と川魚料理の施設。池の使い方と食事の受付を合わせて確認します。",
    "googleQuery": "鱒の家 福島市",
    "officialUrl": "https://masunoie.amebaownd.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "福島市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "湧水を利用した渓流型の釣り堀と川魚料理の施設。池の使い方と食事の受付を合わせて確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣った魚の調理と持ち帰り方法を確認し、希望する量を先に決める。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://masunoie.amebaownd.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/masunoie/"
      }
    ]
  },
  {
    "slug": "managed-kawauchi-iwana",
    "type": "spot",
    "primaryType": "fresh",
    "name": "川内村いわなの郷",
    "prefecture": "福島県",
    "area": "福島県・川内村",
    "terrain": "pond",
    "lat": 37.3593501,
    "lng": 140.8208482,
    "fish": [
      "イワナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "川内村のいわなの郷にある釣り堀。温泉や宿泊施設の営業日と釣り堀の実施日を分けて調べます。",
    "googleQuery": "川内村いわなの郷 川内村",
    "officialUrl": "https://a-kawauchi.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "川内村の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "川内村のいわなの郷にある釣り堀。温泉や宿泊施設の営業日と釣り堀の実施日を分けて調べます。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "イワナの釣り体験の最終受付と、食事・持ち帰りの対応範囲を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "iwana"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://a-kawauchi.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/kawauchi_iwana/"
      }
    ]
  },
  {
    "slug": "managed-tabimasu-base",
    "type": "spot",
    "primaryType": "fresh",
    "name": "TABIMASU BASE yanagisawa",
    "prefecture": "茨城県",
    "area": "茨城県・北茨城市",
    "terrain": "pond",
    "lat": 36.8607683,
    "lng": 140.5892659,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "旧柳沢ルアーポンドの現施設TABIMASU BASE。現在の名称とカレンダーを使い、平日と休日の釣法条件を確認します。",
    "googleQuery": "TABIMASU BASE yanagisawa 北茨城市",
    "officialUrl": "https://select-type.com/s/tabimasu_base_yanagisawa",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "北茨城市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "旧柳沢ルアーポンドの現施設TABIMASU BASE。現在の名称とカレンダーを使い、平日と休日の釣法条件を確認します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "夏季は不定期営業。フライの利用曜日と予約・入場の手順を公式案内で確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://select-type.com/s/tabimasu_base_yanagisawa"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/tabimasu-base/"
      }
    ]
  },
  {
    "slug": "managed-lake-yuzaki",
    "type": "spot",
    "primaryType": "fresh",
    "name": "レイクユザキ",
    "prefecture": "茨城県",
    "area": "茨城県・笠間市",
    "terrain": "pond",
    "lat": 36.3087014,
    "lng": 140.3261924,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "友部湯崎湖と同じ運営によるトラウト用レイクユザキ。ヘラブナの池とトラウトの営業期間を区別します。",
    "googleQuery": "レイクユザキ 笠間市",
    "officialUrl": "https://yuzakiko.com/lake-yuzaki/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "笠間市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "友部湯崎湖と同じ運営によるトラウト用レイクユザキ。ヘラブナの池とトラウトの営業期間を区別します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "トラウトシーズンの開場日を確認。隣接する別池の営業を根拠に入場しない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "トラウトは季節営業。秋の再開日を要確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://yuzakiko.com/lake-yuzaki/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/lake_yuzaki/"
      }
    ],
    "closed": true,
    "status": "トラウトは季節営業。秋の再開日を要確認。"
  },
  {
    "slug": "managed-lp-kasama",
    "type": "spot",
    "primaryType": "fresh",
    "name": "レジャーパークかさま",
    "prefecture": "茨城県",
    "area": "茨城県・笠間市",
    "terrain": "pond",
    "lat": 36.407502,
    "lng": 140.222575,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "森のレジャー施設にあるトラウトの釣り場。釣法や季節で利用できる池が異なるため、目的の池を受付で確認します。",
    "googleQuery": "レジャーパークかさま 笠間市",
    "officialUrl": "https://www.leisure-park-kasama.jp/index.html",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "笠間市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "森のレジャー施設にあるトラウトの釣り場。釣法や季節で利用できる池が異なるため、目的の池を受付で確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "キャンプ利用とは別に釣り券と使用池を確認し、貸切や季節切替に注意する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.leisure-park-kasama.jp/index.html"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/lp_kasama/"
      }
    ]
  },
  {
    "slug": "managed-kinugawa-fa",
    "type": "spot",
    "primaryType": "fresh",
    "name": "鬼怒川フィッシングエリア",
    "prefecture": "栃木県",
    "area": "栃木県・宇都宮市",
    "terrain": "pond",
    "lat": 36.605157,
    "lng": 139.967766,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "鬼怒川漁協が運営するポンド型管理釣り場。秋の再開時期を公式で確認し、整理券や待機方法に従って入場します。",
    "googleQuery": "鬼怒川フィッシングエリア 宇都宮市",
    "officialUrl": "https://www.kinugawa-gyokyou.com/fa/index.html",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "宇都宮市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "鬼怒川漁協が運営するポンド型管理釣り場。秋の再開時期を公式で確認し、整理券や待機方法に従って入場します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "混雑日の荷物だけによる場所取りなど、入場順の規則を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "夏季休業中。10月10日の再開予定を公式で確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.kinugawa-gyokyou.com/fa/index.html"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/kinugawa_fa/"
      }
    ],
    "closed": true,
    "status": "夏季休業中。10月10日の再開予定を公式で確認。"
  },
  {
    "slug": "managed-kingfisher",
    "type": "spot",
    "primaryType": "fresh",
    "name": "アングラーズパークキングフィッシャー",
    "prefecture": "栃木県",
    "area": "栃木県・大田原市",
    "terrain": "pond",
    "lat": 36.9121329,
    "lng": 140.0718893,
    "fish": [
      "ニジマス",
      "ブラックバス"
    ],
    "methods": [
      "ルアー"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "トラウトとブラックバスのエリアがあるキングフィッシャー。狙う魚に対応する池と道具を選んで入場します。",
    "googleQuery": "アングラーズパークキングフィッシャー 大田原市",
    "officialUrl": "https://kingfisher-tochigi.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "大田原市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "トラウトとブラックバスのエリアがあるキングフィッシャー。狙う魚に対応する池と道具を選んで入場します。",
    "bestFor": [
      "ルアーの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "各エリアの針・ルアーの規則と移動条件を確認。夜間利用は開催日を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://kingfisher-tochigi.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/kingfisher/"
      }
    ]
  },
  {
    "slug": "managed-kaga-fishing-area",
    "type": "spot",
    "primaryType": "fresh",
    "name": "加賀フィッシングエリア",
    "prefecture": "栃木県",
    "area": "栃木県・佐野市",
    "terrain": "pond",
    "lat": 36.374561,
    "lng": 139.546799,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "複数のポンドを持つ加賀フィッシングエリア。広さだけで遠投を優先せず、許可された釣り座から棚を分けて探ります。",
    "googleQuery": "加賀フィッシングエリア 佐野市",
    "officialUrl": "https://kaga-fishingarea.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "佐野市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "複数のポンドを持つ加賀フィッシングエリア。広さだけで遠投を優先せず、許可された釣り座から棚を分けて探ります。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "池の区分と大会・貸切情報を確認。フライは後方の人や通路へ配慮する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://kaga-fishingarea.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/kaga_fishing_area/"
      }
    ]
  },
  {
    "slug": "managed-nasukougen-lf",
    "type": "spot",
    "primaryType": "fresh",
    "name": "那須高原ルアーフィールド",
    "prefecture": "栃木県",
    "area": "栃木県・那須町",
    "terrain": "pond",
    "lat": 37.0070851,
    "lng": 140.105318,
    "fish": [],
    "methods": [
      "ルアー"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "大型魚を対象とする池を設けた那須高原のルアー専用施設。池ごとの対象サイズに合うラインとネットを準備します。",
    "googleQuery": "那須高原ルアーフィールド 那須町",
    "officialUrl": "https://lure-f.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "那須町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "大型魚を対象とする池を設けた那須高原のルアー専用施設。池ごとの対象サイズに合うラインとネットを準備します。",
    "bestFor": [
      "ルアーの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "夏季終了後の再開情報を確認。魚の大きさに対して細すぎる道具で臨まない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "夏季休業中。秋の再開告知を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://lure-f.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/nasukougen_lf/"
      }
    ],
    "closed": true,
    "status": "夏季休業中。秋の再開告知を確認。"
  },
  {
    "slug": "managed-sekine-yougyojo",
    "type": "spot",
    "primaryType": "fresh",
    "name": "関根養魚場",
    "prefecture": "栃木県",
    "area": "栃木県・那須塩原市",
    "terrain": "pond",
    "lat": 36.8500215,
    "lng": 139.9676174,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "養魚場の池を使うルアー・フライ釣り場。季節の再開予定と放流案内を確認してから訪問します。",
    "googleQuery": "関根養魚場 那須塩原市",
    "officialUrl": "http://sekine-fish.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "那須塩原市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "養魚場の池を使うルアー・フライ釣り場。季節の再開予定と放流案内を確認してから訪問します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "養魚業務の場所と釣りの受付を区別し、指定入口と釣り券を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "9月20日の営業再開予定。直前に公式で再確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "http://sekine-fish.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/sekine_yougyojo/"
      }
    ],
    "closed": true,
    "status": "9月20日の営業再開予定。直前に公式で再確認。"
  },
  {
    "slug": "managed-tsuri-tengoku",
    "type": "spot",
    "primaryType": "fresh",
    "name": "釣り天国",
    "prefecture": "栃木県",
    "area": "栃木県・那須町",
    "terrain": "pond",
    "lat": 37.0639302,
    "lng": 140.0395261,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "那須高原つり天国の複数ポンドを使う釣り。魚の持ち帰りと釣り方のルールを確認して池を選びます。",
    "googleQuery": "釣り天国 那須町",
    "officialUrl": "http://tsuritengoku.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "那須町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "那須高原つり天国の複数ポンドを使う釣り。魚の持ち帰りと釣り方のルールを確認して池を選びます。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "池の移動方法と利用条件を確認。魚種・サイズの放流状況は当日の案内を優先する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "http://tsuritengoku.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/tsuri_tengoku/"
      }
    ]
  },
  {
    "slug": "managed-katahira-fa",
    "type": "spot",
    "primaryType": "fresh",
    "name": "片平フィッシングエリア",
    "prefecture": "栃木県",
    "area": "栃木県・さくら市",
    "terrain": "pond",
    "lat": 36.730182,
    "lng": 140.097935,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "片平フィッシングエリアのトラウト管理釣り場。夏季終了や再開の告知を確認し、古い営業期間だけで訪問しません。",
    "googleQuery": "片平フィッシングエリア さくら市",
    "officialUrl": "https://www.katahirafishingarea.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "さくら市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "片平フィッシングエリアのトラウト管理釣り場。夏季終了や再開の告知を確認し、古い営業期間だけで訪問しません。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "今季の営業再開が案内されているか確認し、貸切や放流日も併せて見る。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "今季営業終了の案内あり。次季再開を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.katahirafishingarea.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/katahira_fa/"
      }
    ],
    "closed": true,
    "status": "今季営業終了の案内あり。次季再開を確認。"
  },
  {
    "slug": "managed-nakagawa-suiyuuen",
    "type": "spot",
    "primaryType": "fresh",
    "name": "なかがわ水遊園 つり池",
    "prefecture": "栃木県",
    "area": "栃木県・大田原市",
    "terrain": "pond",
    "lat": 36.790613,
    "lng": 140.128634,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "なかがわ水遊園のつり池。水族館観覧とは別の釣り体験で、季節ごとの体験メニューと受付条件を確認します。",
    "googleQuery": "なかがわ水遊園 つり池 大田原市",
    "officialUrl": "https://www.tnap.jp/park/detail.php?id=120",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "大田原市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "なかがわ水遊園のつり池。水族館観覧とは別の釣り体験で、季節ごとの体験メニューと受付条件を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "五目釣り等の当日のメニューを確認。冬のマス釣りを通年の対象魚として扱わない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "fishing-first-checklist",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.tnap.jp/park/detail.php?id=120"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/nakagawa_suiyuuen/"
      }
    ]
  },
  {
    "slug": "managed-mav",
    "type": "spot",
    "primaryType": "fresh",
    "name": "宮城アングラーズ・ヴィレッジ",
    "prefecture": "群馬県",
    "area": "群馬県・前橋市",
    "terrain": "pond",
    "lat": 36.445391,
    "lng": 139.187431,
    "fish": [],
    "methods": [
      "ルアー"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "トラウト以外の対象魚も扱う宮城アングラーズヴィレッジ。池の季節運用に合わせて狙う魚とルアーを選びます。",
    "googleQuery": "宮城アングラーズ・ヴィレッジ 前橋市",
    "officialUrl": "https://www.anglers-village.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "前橋市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "トラウト以外の対象魚も扱う宮城アングラーズヴィレッジ。池の季節運用に合わせて狙う魚とルアーを選びます。",
    "bestFor": [
      "ルアーの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "夏と冬で対象魚・利用池が変わるため、現在の釣り物と規則を公式で確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.anglers-village.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/mav/"
      }
    ]
  },
  {
    "slug": "managed-cgi-bin-gunma-hook-profile-cgi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "アングラーズエリアHOOK",
    "prefecture": "群馬県",
    "area": "群馬県・前橋市",
    "terrain": "pond",
    "lat": 36.480734,
    "lng": 139.181688,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "赤城山麓のアングラーズエリアHOOK。現場の放流・営業情報を公式ブログで確認してから釣り座を選びます。",
    "googleQuery": "アングラーズエリアHOOK 前橋市",
    "officialUrl": "https://ameblo.jp/anglersareahook/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "前橋市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "赤城山麓のアングラーズエリアHOOK。現場の放流・営業情報を公式ブログで確認してから釣り座を選びます。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "講習やイベントの日程と通常利用の範囲を確認。針を替えた予備ルアーも点検する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://ameblo.jp/anglersareahook/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/gunma/hook/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-gfc-nakanosawa",
    "type": "spot",
    "primaryType": "fresh",
    "name": "群馬フィッシングセンター中之沢",
    "prefecture": "群馬県",
    "area": "群馬県・前橋市",
    "terrain": "pond",
    "lat": 36.4810861,
    "lng": 139.2021952,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "赤城山麓にある群馬フィッシングセンター中之沢。放流と大会に加え、整備による臨時休業の案内も確認します。",
    "googleQuery": "群馬フィッシングセンター中之沢 前橋市",
    "officialUrl": "https://gfc.sakura.ne.jp/index.htm",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "前橋市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "赤城山麓にある群馬フィッシングセンター中之沢。放流と大会に加え、整備による臨時休業の案内も確認します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "構内整備・貸切の日程を確認。通常の曜日だけで営業を判断しない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://gfc.sakura.ne.jp/index.htm"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/gfc_nakanosawa/"
      }
    ]
  },
  {
    "slug": "managed-anglersbase-akagiyama",
    "type": "spot",
    "primaryType": "fresh",
    "name": "アングラーズベース赤城山",
    "prefecture": "群馬県",
    "area": "群馬県・前橋市",
    "terrain": "pond",
    "lat": 36.467906,
    "lng": 139.156599,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "アングラーズベース赤城山の管理釣り場。旧施設名で別地点を探さず、現運営の料金・規則・予約案内を使います。",
    "googleQuery": "アングラーズベース赤城山 前橋市",
    "officialUrl": "https://anglers-base.com/%E9%87%A3%E3%82%8A%E5%A0%B4%EF%BC%9A%E6%96%99%E9%87%91%E6%A1%88%E5%86%85/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "前橋市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "アングラーズベース赤城山の管理釣り場。旧施設名で別地点を探さず、現運営の料金・規則・予約案内を使います。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣り座の予約と会員・一般利用の条件を確認。ショップ利用と釣り券を区別する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://anglers-base.com/%E9%87%A3%E3%82%8A%E5%A0%B4%EF%BC%9A%E6%96%99%E9%87%91%E6%A1%88%E5%86%85/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/anglersbase_akagiyama/"
      }
    ]
  },
  {
    "slug": "managed-cgi-bin-gunma-kuruma-profile-cgi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "川魚グルメ館くるま",
    "prefecture": "群馬県",
    "area": "群馬県・渋川市",
    "terrain": "pond",
    "lat": 36.514669,
    "lng": 139.053301,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "湧水を使う釣り堀と川魚料理の川魚グルメ館くるま。食事と釣り体験をつなげて利用する施設です。",
    "googleQuery": "川魚グルメ館くるま 渋川市",
    "officialUrl": "https://kawazakanagurumekan-kuruma.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "渋川市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "湧水を使う釣り堀と川魚料理の川魚グルメ館くるま。食事と釣り体験をつなげて利用する施設です。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣り体験と調理の受付を確認し、食べる分だけ釣る計画にする。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://kawazakanagurumekan-kuruma.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/gunma/kuruma/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-kkf",
    "type": "spot",
    "primaryType": "fresh",
    "name": "川場キングダムフィッシング",
    "prefecture": "群馬県",
    "area": "群馬県・川場村",
    "terrain": "pond",
    "lat": 36.7082819,
    "lng": 139.1152551,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "ブランドニジマスの頂鱒を放流する川場キングダムフィッシング。ルアー・フライの道具と持ち帰り条件を確認します。",
    "googleQuery": "川場キングダムフィッシング 川場村",
    "officialUrl": "http://kawaba-kingdomfishing.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "川場村の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "ブランドニジマスの頂鱒を放流する川場キングダムフィッシング。ルアー・フライの道具と持ち帰り条件を確認します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "河川敷沿いの進入路は公式案内を確認し、駐車や通行の注意に従う。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "http://kawaba-kingdomfishing.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/kkf/"
      }
    ]
  },
  {
    "slug": "managed-fs-sainokuni",
    "type": "spot",
    "primaryType": "fresh",
    "name": "フィッシングステージ彩の国",
    "prefecture": "埼玉県",
    "area": "埼玉県・羽生市",
    "terrain": "pond",
    "lat": 35.997061,
    "lng": 139.465122,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "フィッシングステージ彩の国の季節型トラウト釣り場。高水温による夏季休業と、秋以降の開場情報を確認します。",
    "googleQuery": "フィッシングステージ彩の国 羽生市",
    "officialUrl": "https://fs-sainokuni.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "羽生市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "フィッシングステージ彩の国の季節型トラウト釣り場。高水温による夏季休業と、秋以降の開場情報を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "入場順と釣り券の掲示方法を確認。営業終了後は敷地へ入らない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "5月28日で今季終了。秋以降の再開案内を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://fs-sainokuni.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/fs_sainokuni/"
      }
    ],
    "closed": true,
    "status": "5月28日で今季終了。秋以降の再開案内を確認。"
  },
  {
    "slug": "managed-wpnagatoro",
    "type": "spot",
    "primaryType": "fresh",
    "name": "ウォーターパーク長瀞フィッシングエリア",
    "prefecture": "埼玉県",
    "area": "埼玉県・皆野町",
    "terrain": "pond",
    "lat": 36.081191,
    "lng": 139.106555,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "ウォーターパーク長瀞の冬季フィッシングエリア。キャンプ場が営業中でも釣りエリアは夏季休止するため区別します。",
    "googleQuery": "ウォーターパーク長瀞フィッシングエリア 皆野町",
    "officialUrl": "https://waterpark.jp/fishing/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "皆野町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "ウォーターパーク長瀞の冬季フィッシングエリア。キャンプ場が営業中でも釣りエリアは夏季休止するため区別します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣りエリアの秋の再開日と、家族向け区画・ルアー区画の違いを確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "夏季休業中。10月下旬の再開予定を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://waterpark.jp/fishing/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/wpnagatoro/"
      }
    ],
    "closed": true,
    "status": "夏季休業中。10月下旬の再開予定を確認。"
  },
  {
    "slug": "managed-tamako-fishingarea",
    "type": "spot",
    "primaryType": "fresh",
    "name": "多摩湖駅前フィッシングエリア",
    "prefecture": "埼玉県",
    "area": "埼玉県・所沢市",
    "terrain": "pond",
    "lat": 35.7679013,
    "lng": 139.4448736,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "西武園のプールを利用する多摩湖駅前フィッシングエリア。遊園地の営業案内ではなく釣り営業の期間を確認します。",
    "googleQuery": "多摩湖駅前フィッシングエリア 所沢市",
    "officialUrl": "https://www.s-fishingarea.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "所沢市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "西武園のプールを利用する多摩湖駅前フィッシングエリア。遊園地の営業案内ではなく釣り営業の期間を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "今季終了の告知あり。次季の開場案内と指定入口を確認して計画する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "今季の釣り営業終了。次季の日程発表を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "pool-trout-winter",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.s-fishingarea.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/tamako_fishingarea/"
      }
    ],
    "closed": true,
    "status": "今季の釣り営業終了。次季の日程発表を確認。"
  },
  {
    "slug": "managed-shirakobato",
    "type": "spot",
    "primaryType": "fresh",
    "name": "しらこばと水上公園 冬季釣り場",
    "prefecture": "埼玉県",
    "area": "埼玉県・越谷市",
    "terrain": "pond",
    "lat": 35.9138166,
    "lng": 139.7491169,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "しらこばと水上公園の冬季釣り営業。夏のプールや公園の開園時間と、釣り池の営業を区別して利用します。",
    "googleQuery": "しらこばと水上公園 冬季釣り場 越谷市",
    "officialUrl": "https://www.parks.or.jp/shirakobatosuijo/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "越谷市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "しらこばと水上公園の冬季釣り営業。夏のプールや公園の開園時間と、釣り池の営業を区別して利用します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "次季の釣り営業発表を確認。利用できるプールと釣法は年度ごとの案内を優先する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "前季の釣り営業終了。次季の開催案内を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "pool-trout-winter",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.parks.or.jp/shirakobatosuijo/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/shirakobato/"
      }
    ],
    "closed": true,
    "status": "前季の釣り営業終了。次季の開催案内を確認。"
  },
  {
    "slug": "managed-kazohanasaki",
    "type": "spot",
    "primaryType": "fresh",
    "name": "加須はなさき公園 マス釣り場",
    "prefecture": "埼玉県",
    "area": "埼玉県・加須市",
    "terrain": "pond",
    "lat": 36.1014335,
    "lng": 139.6328889,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "加須はなさき公園で実施される季節のマス釣り。公園全体の開園とマス釣り営業は同じではありません。",
    "googleQuery": "加須はなさき公園 マス釣り場 加須市",
    "officialUrl": "https://www.parks.or.jp/kazohanasaki/guide/000/000031.html",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "加須市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "加須はなさき公園で実施される季節のマス釣り。公園全体の開園とマス釣り営業は同じではありません。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣り専用の営業案内と券種を確認。今季終了中は池へ仕掛けを入れない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "前季のマス釣り営業終了。次季の案内を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "pool-trout-winter",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.parks.or.jp/kazohanasaki/guide/000/000031.html"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/kazohanasaki/"
      }
    ],
    "closed": true,
    "status": "前季のマス釣り営業終了。次季の案内を確認。"
  },
  {
    "slug": "managed-genda",
    "type": "spot",
    "primaryType": "fresh",
    "name": "元田養鱒場",
    "prefecture": "埼玉県",
    "area": "埼玉県・本庄市",
    "terrain": "pond",
    "lat": 36.167727,
    "lng": 139.111904,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "元田養鱒場では池ごとにトラウトやブラックバスを扱います。トラウト池の再開時期と釣法の切替を確認します。",
    "googleQuery": "元田養鱒場 本庄市",
    "officialUrl": "https://genda.sakura.ne.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "本庄市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "元田養鱒場では池ごとにトラウトやブラックバスを扱います。トラウト池の再開時期と釣法の切替を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "利用池を予約・受付時に指定し、夏季の餌釣りと通常ルアーの条件を混同しない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "トラウト池は9月26日再開予定。利用する池を要確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://genda.sakura.ne.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/genda/"
      }
    ],
    "closed": true,
    "status": "トラウト池は9月26日再開予定。利用する池を要確認。"
  },
  {
    "slug": "managed-troutpond-noike",
    "type": "spot",
    "primaryType": "fresh",
    "name": "トラウトポンドNOIKE",
    "prefecture": "千葉県",
    "area": "千葉県・千葉市",
    "terrain": "pond",
    "lat": 35.5712074,
    "lng": 140.2298347,
    "fish": [],
    "methods": [
      "ルアー"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "トラウトポンドNOIKEのルアー専用池。高水温期の休業と雨天時の営業判断を確認して出発します。",
    "googleQuery": "トラウトポンドNOIKE 千葉市",
    "officialUrl": "https://troutpond1089.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "千葉市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "トラウトポンドNOIKEのルアー専用池。高水温期の休業と雨天時の営業判断を確認して出発します。",
    "bestFor": [
      "ルアーの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "6〜9月の休業案内あり。再開後も当日の天候と営業を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "6〜9月は休業期間。再開案内を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://troutpond1089.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/troutpond_noike/"
      }
    ],
    "closed": true,
    "status": "6〜9月は休業期間。再開案内を確認。"
  },
  {
    "slug": "managed-ys-garden",
    "type": "spot",
    "primaryType": "fresh",
    "name": "Y's GARDEN（ワイズガーデン）",
    "prefecture": "千葉県",
    "area": "千葉県・市原市",
    "terrain": "pond",
    "lat": 35.4481972,
    "lng": 140.1114802,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "農園内のリリース制ルアー池Y's GARDEN。片側に釣り座を設ける構成で、指定された枠と入場順に従います。",
    "googleQuery": "Y's GARDEN（ワイズガーデン） 市原市",
    "officialUrl": "https://sites.google.com/view/yg-ichihara",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "市原市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "農園内のリリース制ルアー池Y's GARDEN。片側に釣り座を設ける構成で、指定された枠と入場順に従います。",
    "bestFor": [
      "ルアーの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "ルアーの大きさ・形状の禁止事項を確認。持ち帰りを前提に釣らない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "11月の次季開場予定。営業再開を公式で確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://sites.google.com/view/yg-ichihara"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/ys_garden/"
      }
    ],
    "closed": true,
    "status": "11月の次季開場予定。営業再開を公式で確認。"
  },
  {
    "slug": "managed-joyv",
    "type": "spot",
    "primaryType": "fresh",
    "name": "フィッシングクラブ ジョイバレー",
    "prefecture": "千葉県",
    "area": "千葉県・芝山町",
    "terrain": "pond",
    "lat": 35.7512491,
    "lng": 140.4120933,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "ジョイバレーのルアー・フライポンド。夏季休業と貸切区画の案内を確認し、使える池へ入場します。",
    "googleQuery": "フィッシングクラブ ジョイバレー 芝山町",
    "officialUrl": "http://www.joyvalley.co.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "芝山町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "ジョイバレーのルアー・フライポンド。夏季休業と貸切区画の案内を確認し、使える池へ入場します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "休業終了日だけで判断せず当日の営業も確認。魚の取り込みにはネットを準備する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "9月25日まで休業の案内あり。再開後の営業を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "http://www.joyvalley.co.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/joyv/"
      }
    ],
    "closed": true,
    "status": "9月25日まで休業の案内あり。再開後の営業を確認。"
  },
  {
    "slug": "managed-walton-garden",
    "type": "spot",
    "primaryType": "fresh",
    "name": "ウォルトンガーデン",
    "prefecture": "千葉県",
    "area": "千葉県・成田市",
    "terrain": "pond",
    "lat": 35.860027,
    "lng": 140.2844978,
    "fish": [
      "ニジマス",
      "イワナ",
      "ヤマメ"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "養魚場を併設するウォルトンガーデン。マス類のルアー・フライ釣りを行う施設で、季節休業の確認が必要です。",
    "googleQuery": "ウォルトンガーデン 成田市",
    "officialUrl": "https://www.waltongarden.net/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "成田市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "養魚場を併設するウォルトンガーデン。マス類のルアー・フライ釣りを行う施設で、季節休業の確認が必要です。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "公式は営業確認を電話・Instagramへ案内。夏季後の営業状況を確認してから訪問する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "夏季休業あり。現在の営業を電話・公式SNSで確認するまで推薦対象外。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu",
      "iwana",
      "yamame"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.waltongarden.net/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/walton_garden/"
      }
    ],
    "closed": true,
    "status": "夏季休業あり。現在の営業を電話・公式SNSで確認するまで推薦対象外。"
  },
  {
    "slug": "managed-akikawa-k",
    "type": "spot",
    "primaryType": "fresh",
    "name": "秋川国際マス釣場",
    "prefecture": "東京都",
    "area": "東京都・あきる野市",
    "terrain": "river",
    "lat": 35.7364255,
    "lng": 139.186629,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "秋川国際マス釣場の管理区画。増水後は利用できる釣り場が制限されるため、通常の場内図だけで判断しません。",
    "googleQuery": "秋川国際マス釣場 あきる野市",
    "officialUrl": "https://akigawagyokyo.or.jp/fish/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "あきる野市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "秋川国際マス釣場の管理区画。増水後は利用できる釣り場が制限されるため、通常の場内図だけで判断しません。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "2026年9月17日時点は仮営業・一部釣り場中止の案内あり。使える区画を必ず確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://akigawagyokyo.or.jp/fish/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/akikawa_k/"
      }
    ],
    "status": "2026年9月17日時点は仮営業・一部釣り場中止の案内あり。使える区画を必ず確認する。"
  },
  {
    "slug": "managed-youzawa-kebari",
    "type": "spot",
    "primaryType": "fresh",
    "name": "養沢毛鉤専用釣場",
    "prefecture": "東京都",
    "area": "東京都・あきる野市",
    "terrain": "river",
    "lat": 35.7425054,
    "lng": 139.1895534,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "養沢川の毛鉤専用管理区間。増水後の再開や河川整備の情報を確認し、指定区間でフライを扱います。",
    "googleQuery": "養沢毛鉤専用釣場 あきる野市",
    "officialUrl": "https://ameblo.jp/yozawafly2022/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "あきる野市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "養沢川の毛鉤専用管理区間。増水後の再開や河川整備の情報を確認し、指定区間でフライを扱います。",
    "bestFor": [
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "再開後も水位・川底が変化しているため、受付で入れる範囲と足場を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "fly-pond-first-steps",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://ameblo.jp/yozawafly2022/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/youzawa_kebari/"
      }
    ]
  },
  {
    "slug": "managed-cgi-bin-tokyo-kanoto-kokusai-profile-cgi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "神戸国際ます釣り場",
    "prefecture": "東京都",
    "area": "東京都・檜原村",
    "terrain": "river",
    "lat": 35.7458234,
    "lng": 139.1228734,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "神戸国際マス釣場の放流型区画。水量と設備状況に応じて利用範囲を制限するため、公式の仮営業案内を確認します。",
    "googleQuery": "神戸国際ます釣り場 檜原村",
    "officialUrl": "https://kanototuriba.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "檜原村の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "神戸国際マス釣場の放流型区画。水量と設備状況に応じて利用範囲を制限するため、公式の仮営業案内を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "2026年9月17日時点は高台からの釣りに制限、川への立入り不可。現地指示を優先する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://kanototuriba.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/tokyo/kanoto-kokusai/profile.cgi"
      }
    ],
    "status": "2026年9月17日時点は高台からの釣りに制限、川への立入り不可。現地指示を優先する。"
  },
  {
    "slug": "managed-cgi-bin-tokyo-akikawa-tc-profile-cgi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "トラウトファーム秋川",
    "prefecture": "東京都",
    "area": "東京都・檜原村",
    "terrain": "river",
    "lat": 35.732619,
    "lng": 139.1103865,
    "fish": [
      "ニジマス",
      "ヤマメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "北秋川の自然を使うトラウトファーム秋川。釣り・つかみ取り・バーベキューを目的ごとに選んで利用します。",
    "googleQuery": "トラウトファーム秋川 檜原村",
    "officialUrl": "https://kitaakigawa.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "檜原村の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "北秋川の自然を使うトラウトファーム秋川。釣り・つかみ取り・バーベキューを目的ごとに選んで利用します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣り区画と川遊びの範囲を確認。子どもだけで水際へ移動させない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu",
      "yamame"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://kitaakigawa.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/tokyo/akikawa-tc/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-okutama-fc",
    "type": "spot",
    "primaryType": "fresh",
    "name": "奥多摩フィッシングセンター",
    "prefecture": "東京都",
    "area": "東京都・青梅市",
    "terrain": "river",
    "lat": 35.8050372,
    "lng": 139.1756592,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "奥多摩フィッシングセンターの管理釣り場。通常営業と期間限定のイブニング利用を分けて確認します。",
    "googleQuery": "奥多摩フィッシングセンター 青梅市",
    "officialUrl": "http://www.okutama-fc.co.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "青梅市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "奥多摩フィッシングセンターの管理釣り場。通常営業と期間限定のイブニング利用を分けて確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "夕方利用は日程とリリース条件を確認。一般河川の遊漁券と施設利用を取り違えない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "http://www.okutama-fc.co.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/okutama_fc/"
      }
    ]
  },
  {
    "slug": "managed-fishing-field-nakatsugawa",
    "type": "spot",
    "primaryType": "fresh",
    "name": "Fishing Field 中津川",
    "prefecture": "神奈川県",
    "area": "神奈川県・愛川町",
    "terrain": "river",
    "lat": 35.5242686,
    "lng": 139.282435,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "中津川漁協のFishing Field 中津川。周辺のマス釣場・ヘラ釣場と、利用するフィールドの規則を区別します。",
    "googleQuery": "Fishing Field 中津川 愛川町",
    "officialUrl": "https://www.nakatugawa-gyokyou.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "愛川町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "中津川漁協のFishing Field 中津川。周辺のマス釣場・ヘラ釣場と、利用するフィールドの規則を区別します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "ダム放流と河川状況、大会の日程を確認。受付の指定位置へ向かう。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.nakatugawa-gyokyou.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/fishing_field_nakatsugawa/"
      }
    ]
  },
  {
    "slug": "managed-berrypark-fishon-ozenji",
    "type": "spot",
    "primaryType": "fresh",
    "name": "ベリーパークin FISH ON!王禅寺",
    "prefecture": "神奈川県",
    "area": "神奈川県・川崎市",
    "terrain": "pond",
    "lat": 35.590572,
    "lng": 139.522877,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "ベリーパークin FISH ON!王禅寺のポンド。都市近郊で貸道具や初回の説明を相談できる管理釣り場です。",
    "googleQuery": "ベリーパークin FISH ON!王禅寺 川崎市",
    "officialUrl": "https://www.fishon-oz.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "川崎市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "ベリーパークin FISH ON!王禅寺のポンド。都市近郊で貸道具や初回の説明を相談できる管理釣り場です。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "池の営業状況・貸切と使用できる針を確認。初心者は受付で道具の組合せを相談する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.fishon-oz.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/berrypark_fishon_ozenji/"
      }
    ]
  },
  {
    "slug": "managed-cgi-bin-kanagawa-kaisei-profile-cgi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "開成フォレストスプリングス",
    "prefecture": "神奈川県",
    "area": "神奈川県・開成町",
    "terrain": "pond",
    "lat": 35.337791,
    "lng": 139.132018,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "開成フォレストスプリングスの管理ポンド。グループ内の他施設と料金・釣り規則を混同せず、開成の案内を使います。",
    "googleQuery": "開成フォレストスプリングス 開成町",
    "officialUrl": "https://www.forest-springs.com/kaisei/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "開成町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "開成フォレストスプリングスの管理ポンド。グループ内の他施設と料金・釣り規則を混同せず、開成の案内を使います。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "フィールド図と持ち帰り条件を確認。フライを振る後方の通路にも注意する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.forest-springs.com/kaisei/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/kanagawa/kaisei/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-hayatogwa-kokusai",
    "type": "spot",
    "primaryType": "fresh",
    "name": "早戸川国際マス釣場",
    "prefecture": "神奈川県",
    "area": "神奈川県・相模原市",
    "terrain": "river",
    "lat": 35.5195734,
    "lng": 139.1972263,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "早戸川国際マス釣場の管理フィールド。餌釣りとルアー・フライの区画を分けて、希望する釣り方で受付します。",
    "googleQuery": "早戸川国際マス釣場 相模原市",
    "officialUrl": "https://www.hayatogawa.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "相模原市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "早戸川国際マス釣場の管理フィールド。餌釣りとルアー・フライの区画を分けて、希望する釣り方で受付します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "団体貸切の案内と当日の水量を確認。食堂での魚調理は対応条件を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.hayatogawa.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/hayatogwa_kokusai/"
      }
    ]
  },
  {
    "slug": "managed-kannogawa-trout",
    "type": "spot",
    "primaryType": "fresh",
    "name": "神之川キャンプ・マス釣り場",
    "prefecture": "神奈川県",
    "area": "神奈川県・相模原市",
    "terrain": "river",
    "lat": 35.528573,
    "lng": 139.107974,
    "fish": [
      "ニジマス",
      "ヤマメ",
      "イワナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "神之川キャンプ・マス釣り場の渓流釣り区画。キャンプの予約とは別に、対象魚と釣り券を確認します。",
    "googleQuery": "神之川キャンプ・マス釣り場 相模原市",
    "officialUrl": "https://kannogawa.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "相模原市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "神之川キャンプ・マス釣り場の渓流釣り区画。キャンプの予約とは別に、対象魚と釣り券を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "旧サイトではなく現公式のアクセスを利用。山間の道路状況と臨時休業を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu",
      "yamame",
      "iwana"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://kannogawa.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/kanagawa/kanomasu/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-cgi-bin-kanagawa-kiyokawa-rl-profile-cgi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "清川リバーランド",
    "prefecture": "神奈川県",
    "area": "神奈川県・清川村",
    "terrain": "pond",
    "lat": 35.4790278,
    "lng": 139.2700318,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "清川リバーランドの釣り堀。キャンプ・日帰り利用と合わせて、釣り堀の営業と受付条件を確認します。",
    "googleQuery": "清川リバーランド 清川村",
    "officialUrl": "https://k-riverland.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "清川村の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "清川リバーランドの釣り堀。キャンプ・日帰り利用と合わせて、釣り堀の営業と受付条件を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "車での進入方法と支払い方法を公式で確認。釣りとつかみ取りの区画を分けて利用する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://k-riverland.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/kanagawa/kiyokawa_rl/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-tamagawa-camp",
    "type": "spot",
    "primaryType": "fresh",
    "name": "玉川キャンプ村釣り場",
    "prefecture": "山梨県",
    "area": "山梨県・小菅村",
    "terrain": "river",
    "lat": 35.7596498,
    "lng": 138.9796906,
    "fish": [
      "ニジマス",
      "ヤマメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "玉川キャンプ村内の渓流釣り。キャンプ場の利用条件と、放流・釣りの受付を合わせて確認します。",
    "googleQuery": "玉川キャンプ村釣り場 小菅村",
    "officialUrl": "https://www.tama-camp.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "小菅村の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "玉川キャンプ村内の渓流釣り。キャンプ場の利用条件と、放流・釣りの受付を合わせて確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "宿泊・日帰りのどちらで釣りが利用できるかを確認し、指定区画内で釣る。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu",
      "yamame"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.tama-camp.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/tamagawa_camp/"
      }
    ]
  },
  {
    "slug": "managed-azumino-fc",
    "type": "spot",
    "primaryType": "fresh",
    "name": "あづみ野フィッシングセンター",
    "prefecture": "長野県",
    "area": "長野県・安曇野市",
    "terrain": "pond",
    "lat": 36.3371149,
    "lng": 137.9057497,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り",
      "ルアー"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "湧水を使うあづみ野フィッシングセンター。ルアーのリリース利用と餌釣りの持ち帰り体験を区別します。",
    "googleQuery": "あづみ野フィッシングセンター 安曇野市",
    "officialUrl": "http://azuminofishing.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "安曇野市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "湧水を使うあづみ野フィッシングセンター。ルアーのリリース利用と餌釣りの持ち帰り体験を区別します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣法ごとの精算方法を確認。餌釣りで交代利用できる人数と竿の条件を聞く。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "http://azuminofishing.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/azumino_fc/"
      }
    ]
  },
  {
    "slug": "managed-cgi-bin-nagano-kashimayari-profile-cgi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "フィッシングランド鹿島槍ガーデン",
    "prefecture": "長野県",
    "area": "長野県・大町市",
    "terrain": "pond",
    "lat": 36.5832507,
    "lng": 137.8039635,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "北アルプス山麓の鹿島槍ガーデン。大型の養殖マスを扱うため、魚に合うネットと仕掛けを準備します。",
    "googleQuery": "フィッシングランド鹿島槍ガーデン 大町市",
    "officialUrl": "https://kashimayari-garden.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "大町市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "北アルプス山麓の鹿島槍ガーデン。大型の養殖マスを扱うため、魚に合うネットと仕掛けを準備します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣りの営業とBBQ等の付帯サービスを別に確認。取り込み場所を先に決める。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://kashimayari-garden.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/nagano/kashimayari/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-gozu-fishingpark",
    "type": "spot",
    "primaryType": "fresh",
    "name": "五頭フィッシングパーク",
    "prefecture": "新潟県",
    "area": "新潟県・阿賀野市",
    "terrain": "pond",
    "lat": 37.79211,
    "lng": 139.276994,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "五頭フィッシングパークのポンド。放流魚のサイズが異なるため、公式の日誌で対象と利用条件を確認します。",
    "googleQuery": "五頭フィッシングパーク 阿賀野市",
    "officialUrl": "https://www.gozu-fp.jp/diary/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "阿賀野市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "五頭フィッシングパークのポンド。放流魚のサイズが異なるため、公式の日誌で対象と利用条件を確認します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "数釣り用と大型魚の放流案内を分けて読み、持ち帰り制限を受付で確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.gozu-fp.jp/diary/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/gozu_fishingpark/"
      }
    ]
  },
  {
    "slug": "managed-higashiyamako-fa",
    "type": "spot",
    "primaryType": "fresh",
    "name": "東山湖フィッシングエリア",
    "prefecture": "静岡県",
    "area": "静岡県・御殿場市",
    "terrain": "pond",
    "lat": 35.2916932,
    "lng": 138.9579733,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "東山湖フィッシングエリアのトラウト釣り。夏季の休業と再開予定を確認し、秋以降の利用を計画します。",
    "googleQuery": "東山湖フィッシングエリア 御殿場市",
    "officialUrl": "https://www.higashiyamako.com",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "御殿場市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "東山湖フィッシングエリアのトラウト釣り。夏季の休業と再開予定を確認し、秋以降の利用を計画します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "受付前の場所取りを避け、営業再開と入場手順の最新案内を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "9月14日時点で夏季休業中。再開日を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.higashiyamako.com"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/higashiyamako_fa/"
      }
    ],
    "closed": true,
    "status": "9月14日時点で夏季休業中。再開日を確認。"
  },
  {
    "slug": "managed-hamanako-fr",
    "type": "spot",
    "primaryType": "fresh",
    "name": "浜名湖フィッシングリゾート",
    "prefecture": "静岡県",
    "area": "静岡県・浜松市",
    "terrain": "pond",
    "lat": 34.7086793,
    "lng": 137.6155398,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "浜名湖フィッシングリゾートは池ごとに釣り物を選ぶ施設。夏の餌釣りと季節のトラウトを区別して調べます。",
    "googleQuery": "浜名湖フィッシングリゾート 浜松市",
    "officialUrl": "https://www.hamanako-fr.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "浜松市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "浜名湖フィッシングリゾートは池ごとに釣り物を選ぶ施設。夏の餌釣りと季節のトラウトを区別して調べます。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "イズミ鯛等の餌釣りとルアーポンドの営業区分を確認。貸切時間に注意する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "fishing-first-checklist",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.hamanako-fr.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/hamanako_fr/"
      }
    ]
  },
  {
    "slug": "managed-cgi-bin-shizuoka-inokashira-profile-cgi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "富士養鱒漁業協同組合直営ニジマス釣り場",
    "prefecture": "静岡県",
    "area": "静岡県・富士宮市",
    "terrain": "pond",
    "lat": 35.3711429,
    "lng": 138.5686503,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "富士養鱒漁業協同組合の直営釣り堀。養鱒場見学や周辺観光とは別に、魚釣りと調理の受付を確認します。",
    "googleQuery": "富士養鱒漁業協同組合直営ニジマス釣り場 富士宮市",
    "officialUrl": "https://fujiyoson.com/asobi.html",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "富士宮市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "富士養鱒漁業協同組合の直営釣り堀。養鱒場見学や周辺観光とは別に、魚釣りと調理の受付を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "焼き場の利用日は限定されるため事前確認。持ち帰り用の保冷を準備する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://fujiyoson.com/asobi.html"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/cgi-bin/shizuoka/inokashira/profile.cgi"
      }
    ]
  },
  {
    "slug": "managed-okazaki-trout-pond",
    "type": "spot",
    "primaryType": "fresh",
    "name": "岡崎トラウトポンド",
    "prefecture": "愛知県",
    "area": "愛知県・岡崎市",
    "terrain": "pond",
    "lat": 34.9136047,
    "lng": 137.2565451,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "岡崎トラウトポンドの冬季管理釣り場。シーズン末の魚回収案内と次季の通常営業を区別して確認します。",
    "googleQuery": "岡崎トラウトポンド 岡崎市",
    "officialUrl": "https://www.okazakitroutpond.com/blog",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "岡崎市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "岡崎トラウトポンドの冬季管理釣り場。シーズン末の魚回収案内と次季の通常営業を区別して確認します。",
    "bestFor": [
      "ルアーの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "次のシーズン開場が発表されているか確認。夏の特別対応を通常営業と解釈しない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "冬季釣り場の次季開場を要確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "pool-trout-winter",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.okazakitroutpond.com/blog"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/okazaki_trout_pond/"
      }
    ],
    "closed": true,
    "status": "冬季釣り場の次季開場を要確認。"
  },
  {
    "slug": "managed-riverbase-sioze",
    "type": "spot",
    "primaryType": "fresh",
    "name": "リバーベース塩瀬",
    "prefecture": "愛知県",
    "area": "愛知県・新城市",
    "terrain": "pond",
    "lat": 34.9906806,
    "lng": 137.4893822,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "リバーベース塩瀬のキャンプ場に併設された釣り堀。夏のつかみ取りと秋からの釣り堀営業を分けて計画します。",
    "googleQuery": "リバーベース塩瀬 新城市",
    "officialUrl": "https://www.riverbase-shioze.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "新城市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "リバーベース塩瀬のキャンプ場に併設された釣り堀。夏のつかみ取りと秋からの釣り堀営業を分けて計画します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣り堀は10月再開予定の案内あり。キャンプ営業中でも釣りができるとは限らない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "釣り堀は10月再開予定。夏季のつかみ取りとは別。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.riverbase-shioze.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/riverbase_sioze/"
      }
    ],
    "closed": true,
    "status": "釣り堀は10月再開予定。夏季のつかみ取りとは別。"
  },
  {
    "slug": "managed-flfa-togami",
    "type": "spot",
    "primaryType": "fresh",
    "name": "F&L.フィッシングエリア戸神の池",
    "prefecture": "愛知県",
    "area": "愛知県・設楽町",
    "terrain": "pond",
    "lat": 35.1236337,
    "lng": 137.555704,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "奥三河の戸神の池。山に囲まれたポンド型フィールドで、夏季休業と特別営業を公式で確認します。",
    "googleQuery": "F&L.フィッシングエリア戸神の池 設楽町",
    "officialUrl": "https://togami-ike.sakura.ne.jp/wp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "設楽町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "奥三河の戸神の池。山に囲まれたポンド型フィールドで、夏季休業と特別営業を公式で確認します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "通常再開日が出るまで釣行を決めず、ゲリラ営業等は個別告知を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "5月31日から夏季休業。通常営業の再開日を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://togami-ike.sakura.ne.jp/wp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/flfa_togami/"
      }
    ],
    "closed": true,
    "status": "5月31日から夏季休業。通常営業の再開日を確認。"
  },
  {
    "slug": "managed-dandoko",
    "type": "spot",
    "primaryType": "fresh",
    "name": "段戸湖",
    "prefecture": "愛知県",
    "area": "愛知県・設楽町",
    "terrain": "lake",
    "lat": 35.1201166,
    "lng": 137.4770262,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "段戸湖のルアー・フライ管理釣り場。湖の釣り座と通行範囲を確認し、管理者の最新水況を参考にします。",
    "googleQuery": "段戸湖 設楽町",
    "officialUrl": "https://dandoko.hamazo.tv/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "設楽町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "段戸湖のルアー・フライ管理釣り場。湖の釣り座と通行範囲を確認し、管理者の最新水況を参考にします。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "測量や作業による制限を確認。岸沿いに移動する際は他人の後方キャストを避ける。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://dandoko.hamazo.tv/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/dandoko/"
      }
    ]
  },
  {
    "slug": "managed-tsugu-gp",
    "type": "spot",
    "primaryType": "fresh",
    "name": "道の駅 つぐ高原グリーンパーク",
    "prefecture": "愛知県",
    "area": "愛知県・設楽町",
    "terrain": "pond",
    "lat": 35.2000588,
    "lng": 137.6051854,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "つぐ高原グリーンパーク内の釣り堀。道の駅・キャンプ場と釣り体験の受付を区別して利用します。",
    "googleQuery": "道の駅 つぐ高原グリーンパーク 設楽町",
    "officialUrl": "https://www.green-park.net/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "設楽町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "つぐ高原グリーンパーク内の釣り堀。道の駅・キャンプ場と釣り体験の受付を区別して利用します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "季節のアクティビティ案内で釣り堀の開催日を確認。つかみ取りと取り違えない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.green-park.net/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/tsugu_gp/"
      }
    ]
  },
  {
    "slug": "managed-kamikoshi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "神越渓谷ます釣り場",
    "prefecture": "愛知県",
    "area": "愛知県・豊田市",
    "terrain": "river",
    "lat": 35.1157302,
    "lng": 137.3862373,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "神越渓谷マス釣り場の餌釣りとルアー・フライ区画。入川受付と放流・調理の流れを確認してから始めます。",
    "googleQuery": "神越渓谷ます釣り場 豊田市",
    "officialUrl": "https://kamikoshi.ina-ka.com",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "豊田市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "神越渓谷マス釣り場の餌釣りとルアー・フライ区画。入川受付と放流・調理の流れを確認してから始めます。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣法別の区画と放流条件を確認。川の増水時は営業判断と現地指示を優先する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-map-permission-check",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://kamikoshi.ina-ka.com"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/kamikoshi/"
      }
    ]
  },
  {
    "slug": "managed-asagiriike",
    "type": "spot",
    "primaryType": "fresh",
    "name": "三河高原キャンプ村 朝霧池",
    "prefecture": "愛知県",
    "area": "愛知県・豊田市",
    "terrain": "pond",
    "lat": 35.0784243,
    "lng": 137.3703117,
    "fish": [
      "イワナ",
      "ヤマメ",
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "三河高原キャンプ村の朝霧池。冬から春のルアー・フライ営業で、キャンプ場の通年案内と区別が必要です。",
    "googleQuery": "三河高原キャンプ村 朝霧池 豊田市",
    "officialUrl": "http://www.mikawakougen.com/fishing/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "豊田市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "三河高原キャンプ村の朝霧池。冬から春のルアー・フライ営業で、キャンプ場の通年案内と区別が必要です。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "例年の釣り期間は11月〜5月。今季の開場日を確認し、餌やワームを持ち込まない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "釣りは11月〜5月の季節営業。今季の再開日を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "iwana",
      "yamame",
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "http://www.mikawakougen.com/fishing/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/asagiriike/"
      }
    ],
    "closed": true,
    "status": "釣りは11月〜5月の季節営業。今季の再開日を確認。"
  },
  {
    "slug": "managed-kamikawa-youmasu",
    "type": "spot",
    "primaryType": "fresh",
    "name": "上川養鱒場",
    "prefecture": "愛知県",
    "area": "愛知県・瀬戸市",
    "terrain": "pond",
    "lat": 35.2696065,
    "lng": 137.1593719,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "上川養鱒場のマス釣り体験。夏のアユつかみ取りからマス釣りへの切替があるため、当日の内容を確認します。",
    "googleQuery": "上川養鱒場 瀬戸市",
    "officialUrl": "https://masuike60.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "瀬戸市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "上川養鱒場のマス釣り体験。夏のアユつかみ取りからマス釣りへの切替があるため、当日の内容を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "9月19日のマス釣り再開案内あり。満員時の入場制限と調理受付を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "マス釣りは9月19日再開予定。再開前はつかみ取りと区別。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://masuike60.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/kamikawa_youmasu/"
      }
    ],
    "closed": true,
    "status": "マス釣りは9月19日再開予定。再開前はつかみ取りと区別。"
  },
  {
    "slug": "managed-hananoki-kouen",
    "type": "spot",
    "primaryType": "fresh",
    "name": "花の木公園 釣り堀センター",
    "prefecture": "愛知県",
    "area": "愛知県・新城市",
    "terrain": "pond",
    "lat": 34.946614,
    "lng": 137.544137,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "花の木公園に併設されたマス釣り堀。食事・宿泊と釣り体験を目的に合わせて組み合わせます。",
    "googleQuery": "花の木公園 釣り堀センター 新城市",
    "officialUrl": "https://hananokikouen.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "新城市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "花の木公園に併設されたマス釣り堀。食事・宿泊と釣り体験を目的に合わせて組み合わせます。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "宿の受付と釣り堀の営業時間を確認。釣った魚の精算と調理を先に聞く。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://hananokikouen.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/hananoki_kouen/"
      }
    ]
  },
  {
    "slug": "managed-mino-fishingarea",
    "type": "spot",
    "primaryType": "fresh",
    "name": "美濃フィッシングエリア",
    "prefecture": "岐阜県",
    "area": "岐阜県・美濃市",
    "terrain": "river",
    "lat": 35.5793544,
    "lng": 136.901686,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "美濃フィッシングエリアはポンドとストリームを備える施設。利用可能な区画と釣法を確認して選びます。",
    "googleQuery": "美濃フィッシングエリア 美濃市",
    "officialUrl": "http://www.mino-fa.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "美濃市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "美濃フィッシングエリアはポンドとストリームを備える施設。利用可能な区画と釣法を確認して選びます。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "川型と池型で足場や糸の扱いが変わるため、初回は受付で扱いやすい区画を相談する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "http://www.mino-fa.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/mino_fishingarea/"
      }
    ]
  },
  {
    "slug": "managed-hichisou-yuen",
    "type": "spot",
    "primaryType": "fresh",
    "name": "七宗遊園マス池",
    "prefecture": "岐阜県",
    "area": "岐阜県・七宗町",
    "terrain": "pond",
    "lat": 35.6001052,
    "lng": 137.1226764,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "七宗遊園のマス釣り体験。期間限定のアユつかみ取りと通常のマス釣りを区別し、希望する体験を選びます。",
    "googleQuery": "七宗遊園マス池 七宗町",
    "officialUrl": "https://hitisou-yuen.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "七宗町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "七宗遊園のマス釣り体験。期間限定のアユつかみ取りと通常のマス釣りを区別し、希望する体験を選びます。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣りと食事の組合せ・受付時刻を確認。季節限定メニューを通年と思わない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://hitisou-yuen.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/hichisou_yuen/"
      }
    ]
  },
  {
    "slug": "managed-daian-trout-lake",
    "type": "spot",
    "primaryType": "fresh",
    "name": "大安トラウトレイク",
    "prefecture": "三重県",
    "area": "三重県・いなべ市",
    "terrain": "pond",
    "lat": 35.0826384,
    "lng": 136.5308602,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "大安トラウトレイクの自然池を使う管理釣り場。中・大型魚に対応する道具を準備し、秋の再開情報を確認します。",
    "googleQuery": "大安トラウトレイク いなべ市",
    "officialUrl": "https://daiantrout.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "いなべ市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "大安トラウトレイクの自然池を使う管理釣り場。中・大型魚に対応する道具を準備し、秋の再開情報を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣法ごとの区画と持ち帰り条件を確認。再開予定は直前に再確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "10月下旬の再開予定。最新の営業告知を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://daiantrout.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/daian_trout_lake/"
      }
    ],
    "closed": true,
    "status": "10月下旬の再開予定。最新の営業告知を確認。"
  },
  {
    "slug": "managed-forestpia",
    "type": "spot",
    "primaryType": "fresh",
    "name": "奥伊勢フォレストピア釣り堀",
    "prefecture": "三重県",
    "area": "三重県・大台町",
    "terrain": "pond",
    "lat": 34.3567449,
    "lng": 136.3483324,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "奥伊勢フォレストピアの釣り堀。宿泊施設の営業とは別に、釣り堀の開催日を確認して訪れます。",
    "googleQuery": "奥伊勢フォレストピア釣り堀 大台町",
    "officialUrl": "https://okuiseforestpia.com/play/186.html",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "大台町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "奥伊勢フォレストピアの釣り堀。宿泊施設の営業とは別に、釣り堀の開催日を確認して訪れます。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "春〜秋の日曜祝日等の開催案内を確認。釣った魚は買い取りとなるため量を決める。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://okuiseforestpia.com/play/186.html"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/forestpia/"
      }
    ]
  },
  {
    "slug": "managed-tenkomori",
    "type": "spot",
    "primaryType": "fresh",
    "name": "割山森林公園 天湖森",
    "prefecture": "富山県",
    "area": "富山県・富山市",
    "terrain": "pond",
    "lat": 36.5430127,
    "lng": 137.2235142,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "割山森林公園天湖森の釣り池。キャンプと合わせて使う場合も、釣り券と放流日を別に確認します。",
    "googleQuery": "割山森林公園 天湖森 富山市",
    "officialUrl": "https://tenkomori.info/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "富山市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "割山森林公園天湖森の釣り池。キャンプと合わせて使う場合も、釣り券と放流日を別に確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "月ごとの放流日変更を確認。公園内でも釣りを許可された池・場所だけを使う。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://tenkomori.info/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/tenkomori/"
      }
    ]
  },
  {
    "slug": "managed-shinjo-keiryuunosato",
    "type": "spot",
    "primaryType": "fresh",
    "name": "新庄渓流の里",
    "prefecture": "福井県",
    "area": "福井県・美浜町",
    "terrain": "river",
    "lat": 35.5299501,
    "lng": 135.9791203,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "新庄の渓流の里で行う放流型の渓流釣り。釣り時間と放流条件を先に確認し、短時間券など目的に合う利用方法を選びます。",
    "googleQuery": "新庄渓流の里 美浜町",
    "officialUrl": "https://keiryunosato.jimdofree.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "美浜町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "新庄の渓流の里で行う放流型の渓流釣り。釣り時間と放流条件を先に確認し、短時間券など目的に合う利用方法を選びます。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "一般券と短時間体験の放流・持ち帰り条件を確認。食事処の営業日も別に見る。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://keiryunosato.jimdofree.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/shinjo_keiryuunosato/"
      }
    ]
  },
  {
    "slug": "managed-kutsuki-kogawa",
    "type": "spot",
    "primaryType": "fresh",
    "name": "朽木こがわ渓流センター",
    "prefecture": "滋賀県",
    "area": "滋賀県・高島市",
    "terrain": "river",
    "lat": 35.292843,
    "lng": 135.844005,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "朽木こがわ渓流センターの餌釣り区画。ルアー・フライフィールドの休業と、渓流釣りの営業を区別します。",
    "googleQuery": "朽木こがわ渓流センター 高島市",
    "officialUrl": "https://www.senlucas.com/kutsuki",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "高島市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "朽木こがわ渓流センターの餌釣り区画。ルアー・フライフィールドの休業と、渓流釣りの営業を区別します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "確認時点でルアーフィールド休業中。餌釣りの利用日を確認し、休止ポンドへ入らない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.senlucas.com/kutsuki"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/kutsuki_kogawa/"
      }
    ],
    "status": "確認時点でルアーフィールド休業中。餌釣りの利用日を確認し、休止ポンドへ入らない。"
  },
  {
    "slug": "managed-arashiyama-fa",
    "type": "spot",
    "primaryType": "fresh",
    "name": "嵐山フィッシングエリア",
    "prefecture": "京都府",
    "area": "京都府・京都市",
    "terrain": "pond",
    "lat": 35.0440512,
    "lng": 135.6732224,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "嵐山フィッシングエリアの季節型トラウト釣り。秋の再開前後は入場・放流・イベントの案内を確認します。",
    "googleQuery": "嵐山フィッシングエリア 京都市",
    "officialUrl": "https://ameblo.jp/arashiyamafa/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "京都市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "嵐山フィッシングエリアの季節型トラウト釣り。秋の再開前後は入場・放流・イベントの案内を確認します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "営業再開日と当日の受付を確認。混雑時は釣り座と投入方向の間隔を保つ。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "9月19日再開予定。営業再開を直前に確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://ameblo.jp/arashiyamafa/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/arashiyama_fa/"
      }
    ],
    "closed": true,
    "status": "9月19日再開予定。営業再開を直前に確認。"
  },
  {
    "slug": "managed-chihayagawa-bffc",
    "type": "spot",
    "primaryType": "fresh",
    "name": "千早川マス釣り場",
    "prefecture": "大阪府",
    "area": "大阪府・千早赤阪村",
    "terrain": "river",
    "lat": 34.4152912,
    "lng": 135.6501016,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "千早川の清流を使うマス釣り場。餌釣り・ルアーの区画と調理対応を確認し、釣る量を決めて利用します。",
    "googleQuery": "千早川マス釣り場 千早赤阪村",
    "officialUrl": "https://chihayagawa.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "千早赤阪村の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "千早川の清流を使うマス釣り場。餌釣り・ルアーの区画と調理対応を確認し、釣る量を決めて利用します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "貸切と一般利用の範囲を確認。食事のみの利用と釣り券を混同しない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-map-permission-check",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://chihayagawa.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/chihayagawa_bffc/"
      }
    ]
  },
  {
    "slug": "managed-arimafuji",
    "type": "spot",
    "primaryType": "fresh",
    "name": "しい茸園有馬富士 ニジマス釣り",
    "prefecture": "兵庫県",
    "area": "兵庫県・三田市",
    "terrain": "pond",
    "lat": 34.917044,
    "lng": 135.229525,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "しい茸園有馬富士の季節のニジマス釣り体験。夏のつかみ取りとは開催時期が異なるため、体験内容を確認します。",
    "googleQuery": "しい茸園有馬富士 ニジマス釣り 三田市",
    "officialUrl": "https://arima-fuji.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "三田市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "しい茸園有馬富士の季節のニジマス釣り体験。夏のつかみ取りとは開催時期が異なるため、体験内容を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "ニジマス釣りの秋季開始日と予約コースを確認。BBQだけの営業を釣り営業と判断しない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "ニジマス釣りは秋〜春の体験。秋の開始日と予約を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://arima-fuji.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/arimafuji/"
      }
    ],
    "closed": true,
    "status": "ニジマス釣りは秋〜春の体験。秋の開始日と予約を確認。"
  },
  {
    "slug": "managed-rakusui-fc",
    "type": "spot",
    "primaryType": "fresh",
    "name": "楽水フィッシングセンター",
    "prefecture": "兵庫県",
    "area": "兵庫県・宍粟市",
    "terrain": "pond",
    "lat": 35.1091311,
    "lng": 134.5073671,
    "fish": [
      "アマゴ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "楽水フィッシングセンターの養魚場にある釣り堀。アマゴ等の釣りと調理を相談できる施設です。",
    "googleQuery": "楽水フィッシングセンター 宍粟市",
    "officialUrl": "https://rakusui1116.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "宍粟市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "楽水フィッシングセンターの養魚場にある釣り堀。アマゴ等の釣りと調理を相談できる施設です。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "同名・類似施設と取り違えず宍粟市の所在地を確認。調理や持ち帰り方法を聞く。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "amago"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://rakusui1116.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/rakusui_fc/"
      }
    ]
  },
  {
    "slug": "managed-hansei-lfa",
    "type": "spot",
    "primaryType": "fresh",
    "name": "繁盛ルアーフライエリア",
    "prefecture": "兵庫県",
    "area": "兵庫県・宍粟市",
    "terrain": "river",
    "lat": 35.2008077,
    "lng": 134.6505694,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "繁盛ルアーフライエリアの自然渓流区画。予約制の利用範囲と季節休業を確認して計画します。",
    "googleQuery": "繁盛ルアーフライエリア 宍粟市",
    "officialUrl": "https://hanselurefly.wixsite.com/hanse-lurefly",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "宍粟市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "繁盛ルアーフライエリアの自然渓流区画。予約制の利用範囲と季節休業を確認して計画します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "一日一組の予約条件を確認。夏季休業中は予約可能日を事前に問い合わせる。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "7月1日〜9月30日は夏季休業。再開後の予約を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://hanselurefly.wixsite.com/hanse-lurefly"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/hansei_lfa/"
      }
    ],
    "closed": true,
    "status": "7月1日〜9月30日は夏季休業。再開後の予約を確認。"
  },
  {
    "slug": "managed-nijimasu-shizentsuriba",
    "type": "spot",
    "primaryType": "fresh",
    "name": "湯原にじます自然釣場",
    "prefecture": "岡山県",
    "area": "岡山県・真庭市",
    "terrain": "river",
    "lat": 35.2058853,
    "lng": 133.7327984,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "湯原のニジマス自然釣場。漁協の管理区間で、ダム放水や工事による水況の案内を確認して利用します。",
    "googleQuery": "湯原にじます自然釣場 真庭市",
    "officialUrl": "https://i-maniwa.com/area/yubara-gyokyo/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "真庭市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "湯原のニジマス自然釣場。漁協の管理区間で、ダム放水や工事による水況の案内を確認して利用します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "汚濁水発生の注意案内あり。当日の利用可否と立入範囲を漁協に確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-map-permission-check",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://i-maniwa.com/area/yubara-gyokyo/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/nijimasu_shizentsuriba/"
      }
    ],
    "status": "汚濁水発生の注意案内あり。当日の利用可否と立入範囲を漁協に確認する。"
  },
  {
    "slug": "managed-horisan",
    "type": "spot",
    "primaryType": "fresh",
    "name": "穂里山",
    "prefecture": "岡山県",
    "area": "岡山県・総社市",
    "terrain": "pond",
    "lat": 34.7052339,
    "lng": 133.670679,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "総社市の釣り堀穂里山。家族での餌釣りと食事を組み合わせる施設で、営業日と受付を確認します。",
    "googleQuery": "穂里山 総社市",
    "officialUrl": "https://r.goope.jp/sr-33-3320820002/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "総社市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "総社市の釣り堀穂里山。家族での餌釣りと食事を組み合わせる施設で、営業日と受付を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣る数と調理・持ち帰りを先に相談。貸道具の範囲も確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://r.goope.jp/sr-33-3320820002/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/horisan/"
      }
    ]
  },
  {
    "slug": "managed-tsuguro-stream",
    "type": "spot",
    "primaryType": "fresh",
    "name": "津黒いきものふれあいの里 渓流釣り",
    "prefecture": "岡山県",
    "area": "岡山県・真庭市",
    "terrain": "river",
    "lat": 35.2641838,
    "lng": 133.794263,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "津黒いきものふれあいの里の渓流釣り体験。自然観察施設の開館日と釣り体験の季節・予約条件を区別します。",
    "googleQuery": "津黒いきものふれあいの里 渓流釣り 真庭市",
    "officialUrl": "https://plus.harenet.ne.jp/~tsuguro/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "真庭市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "津黒いきものふれあいの里の渓流釣り体験。自然観察施設の開館日と釣り体験の季節・予約条件を区別します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "渓流釣りとつかみ取りの開催を確認。体験区画外の採捕は行わない。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://plus.harenet.ne.jp/~tsuguro/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/tsuguro_fureai/"
      }
    ]
  },
  {
    "slug": "managed-ute-yougyo",
    "type": "spot",
    "primaryType": "fresh",
    "name": "右手養魚センター",
    "prefecture": "岡山県",
    "area": "岡山県・美作市",
    "terrain": "river",
    "lat": 35.180478,
    "lng": 134.239289,
    "fish": [
      "アマゴ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "右手養魚センターは石積みで整備した渓流で放流釣りを行う施設。人数と体験内容を伝えて利用します。",
    "googleQuery": "右手養魚センター 美作市",
    "officialUrl": "https://genryunosato-ute.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "美作市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "右手養魚センターは石積みで整備した渓流で放流釣りを行う施設。人数と体験内容を伝えて利用します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣り区画とつかみ取り区画を確認。放流魚の精算と食事の対応を先に聞く。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "amago"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://genryunosato-ute.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/ute_yougyo/"
      }
    ]
  },
  {
    "slug": "managed-hinakura",
    "type": "spot",
    "primaryType": "fresh",
    "name": "日名倉養魚場",
    "prefecture": "岡山県",
    "area": "岡山県・美作市",
    "terrain": "pond",
    "lat": 35.160349,
    "lng": 134.381961,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "日名倉養魚場の釣り・つかみ取り体験。周辺観光と合わせる場合も、釣りの営業と受付を個別に確認します。",
    "googleQuery": "日名倉養魚場 美作市",
    "officialUrl": "https://hinakura.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "美作市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "日名倉養魚場の釣り・つかみ取り体験。周辺観光と合わせる場合も、釣りの営業と受付を個別に確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣りかつかみ取りかを予約・受付で伝え、魚の持ち帰り条件を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://hinakura.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/hinakura/"
      }
    ]
  },
  {
    "slug": "managed-fisher-resort-shoubara",
    "type": "spot",
    "primaryType": "fresh",
    "name": "フィッシャーリゾート庄原",
    "prefecture": "広島県",
    "area": "広島県・庄原市",
    "terrain": "pond",
    "lat": 34.8637189,
    "lng": 133.0805197,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "フィッシャーリゾート庄原のルアー・フライ管理釣り場。季節の放流魚やイベントに合わせて利用条件を確認します。",
    "googleQuery": "フィッシャーリゾート庄原 庄原市",
    "officialUrl": "https://fishing-shobara.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "庄原市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "フィッシャーリゾート庄原のルアー・フライ管理釣り場。季節の放流魚やイベントに合わせて利用条件を確認します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "持ち帰りできる魚とリリース指定魚を確認。大型魚に対応する網を準備する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://fishing-shobara.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/fisher_resort_shoubara/"
      }
    ]
  },
  {
    "slug": "managed-nanasegawa",
    "type": "spot",
    "primaryType": "fresh",
    "name": "七瀬川渓流釣り場",
    "prefecture": "広島県",
    "area": "広島県・廿日市市",
    "terrain": "river",
    "lat": 34.4140339,
    "lng": 132.1576556,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "七瀬川渓流釣り場の管理区画。季節の再開・休止情報を確認して、希望する釣法で利用します。",
    "googleQuery": "七瀬川渓流釣り場 廿日市市",
    "officialUrl": "https://kawausonouta.wixsite.com/nanase",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "廿日市市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "七瀬川渓流釣り場の管理区画。季節の再開・休止情報を確認して、希望する釣法で利用します。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "ルアー区画と餌釣りの営業を確認。水量に応じた現地の利用制限を守る。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-map-permission-check"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://kawausonouta.wixsite.com/nanase"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/nanasegawa/"
      }
    ]
  },
  {
    "slug": "managed-bankokei",
    "type": "spot",
    "primaryType": "fresh",
    "name": "万古渓養魚観光センター",
    "prefecture": "広島県",
    "area": "広島県・廿日市市",
    "terrain": "pond",
    "lat": 34.396845,
    "lng": 132.1584932,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "万古渓養魚観光センターのニジマス釣り堀。つかみ取りや食事とは受付内容を分けて確認します。",
    "googleQuery": "万古渓養魚観光センター 廿日市市",
    "officialUrl": "https://kawausonouta.wixsite.com/bankokeiyougyo",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "廿日市市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "万古渓養魚観光センターのニジマス釣り堀。つかみ取りや食事とは受付内容を分けて確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "釣った魚の調理と持ち帰りを相談。季節イベントの案内を通常営業と区別する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://kawausonouta.wixsite.com/bankokeiyougyo"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/bankokei/"
      }
    ]
  },
  {
    "slug": "managed-nanbarakyou",
    "type": "spot",
    "primaryType": "fresh",
    "name": "南原峡国際つり場",
    "prefecture": "広島県",
    "area": "広島県・広島市",
    "terrain": "pond",
    "lat": 34.575206,
    "lng": 132.518119,
    "fish": [
      "ヤマメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "南原ダム上流側の南原峡国際釣り場。山間の釣り堀で、週末を中心とする営業日を確認して訪れます。",
    "googleQuery": "南原峡国際つり場 広島市",
    "officialUrl": "https://www.tsuriba.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "広島市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "南原ダム上流側の南原峡国際釣り場。山間の釣り堀で、週末を中心とする営業日を確認して訪れます。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "公式の営業日と対象魚を確認。釣り場までの道と帰路の時刻を事前に控える。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "yamame"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.tsuriba.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/nanbarakyou/"
      }
    ]
  },
  {
    "slug": "managed-eco360-migihira",
    "type": "spot",
    "primaryType": "fresh",
    "name": "ECO360 右平養魚場",
    "prefecture": "広島県",
    "area": "広島県・広島市",
    "terrain": "pond",
    "lat": 34.554358,
    "lng": 132.417618,
    "fish": [
      "ヤマメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "ECO360が運営する右平養魚場の釣り堀。旧宮本養魚場の名称だけで探さず、現運営の所在地を確認します。",
    "googleQuery": "ECO360 右平養魚場 広島市",
    "officialUrl": "https://eco360.jimdofree.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "広島市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "ECO360が運営する右平養魚場の釣り堀。旧宮本養魚場の名称だけで探さず、現運営の所在地を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "週末・祝日の営業と冬季時間を確認。山間部なのでアクセス案内を出発前に保存する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "yamame"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://eco360.jimdofree.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/eco360/"
      }
    ]
  },
  {
    "slug": "managed-yuyou",
    "type": "spot",
    "primaryType": "fresh",
    "name": "清流遊ＹＯＵ村フィッシングセンター",
    "prefecture": "鳥取県",
    "area": "鳥取県・倉吉市",
    "terrain": "pond",
    "lat": 35.3628088,
    "lng": 133.6542848,
    "fish": [
      "ニジマス",
      "イワナ",
      "ヤマメ"
    ],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "小泉川養魚場の清流遊YOU村フィッシングセンター。放流魚と釣法の利用条件を確認して管理区画へ入ります。",
    "googleQuery": "清流遊ＹＯＵ村フィッシングセンター 倉吉市",
    "officialUrl": "https://www.koizumigawa.com/tsuriba.html",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "倉吉市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "小泉川養魚場の清流遊YOU村フィッシングセンター。放流魚と釣法の利用条件を確認して管理区画へ入ります。",
    "bestFor": [
      "餌釣りの管理釣り場利用",
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "養魚場の業務区域と釣り受付を区別。持ち帰りと調理の対応を先に確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu",
      "iwana",
      "yamame"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.koizumigawa.com/tsuriba.html"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/yuyou/"
      }
    ]
  },
  {
    "slug": "managed-yamamenomura",
    "type": "spot",
    "primaryType": "fresh",
    "name": "やまめの村",
    "prefecture": "島根県",
    "area": "島根県・雲南市",
    "terrain": "pond",
    "lat": 35.2646545,
    "lng": 133.0456159,
    "fish": [
      "ヤマメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "自家養殖のヤマメを釣るやまめの村。餌釣りを体験し、釣った魚を食事や持ち帰りにつなげる施設です。",
    "googleQuery": "やまめの村 雲南市",
    "officialUrl": "https://yamame1000nin.namaste.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "雲南市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "自家養殖のヤマメを釣るやまめの村。餌釣りを体験し、釣った魚を食事や持ち帰りにつなげる施設です。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "土日祝中心の開催案内と予約条件を確認。釣る量に合わせて保冷を用意する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "yamame"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://yamame1000nin.namaste.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/yamamenomura/"
      }
    ]
  },
  {
    "slug": "managed-fp-hirano",
    "type": "spot",
    "primaryType": "fresh",
    "name": "フィッシングパークひらの",
    "prefecture": "佐賀県",
    "area": "佐賀県・多久市",
    "terrain": "pond",
    "lat": 33.3459696,
    "lng": 130.0761603,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "フィッシングパークひらのの餌釣り体験。プール型の釣り堀が再開しており、ルアー施設とは利用条件を分けます。",
    "googleQuery": "フィッシングパークひらの 多久市",
    "officialUrl": "https://fishingparkhirano.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "多久市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "フィッシングパークひらのの餌釣り体験。プール型の釣り堀が再開しており、ルアー施設とは利用条件を分けます。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "餌釣り池の混雑・人数制限と塩焼きサービスの日程を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://fishingparkhirano.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/fp_hirano/"
      }
    ]
  },
  {
    "slug": "managed-teratoko",
    "type": "spot",
    "primaryType": "fresh",
    "name": "フィッシングてらとこ",
    "prefecture": "大分県",
    "area": "大分県・九重町",
    "terrain": "pond",
    "lat": 33.2010685,
    "lng": 131.2688236,
    "fish": [
      "ニジマス",
      "ヤマメ"
    ],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "フィッシングてらとこのルアー・フライ管理釣り場。設備整備後の再開日と、当面の営業曜日を確認します。",
    "googleQuery": "フィッシングてらとこ 九重町",
    "officialUrl": "https://teratoko.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "九重町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "フィッシングてらとこのルアー・フライ管理釣り場。設備整備後の再開日と、当面の営業曜日を確認します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "再開後は土日祝営業の案内。平日に訪れる前に営業確認を行う。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "9月19日再開予定。当面は土日祝の営業を確認。",
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading",
      "pond-trout-takehome-cook"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [
      "nijimasu",
      "yamame"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://teratoko.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/teratoko/"
      }
    ],
    "closed": true,
    "status": "9月19日再開予定。当面は土日祝の営業を確認。"
  },
  {
    "slug": "managed-jizoubaru-tc",
    "type": "spot",
    "primaryType": "fresh",
    "name": "地蔵原釣堀りセンター",
    "prefecture": "大分県",
    "area": "大分県・九重町",
    "terrain": "pond",
    "lat": 33.1554708,
    "lng": 131.1835853,
    "fish": [
      "ヤマメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "九重高原の地蔵原釣り堀センター。ヤマメ釣りと炭火焼きを組み合わせる体験を選べます。",
    "googleQuery": "地蔵原釣堀りセンター 九重町",
    "officialUrl": "https://www.enoha.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "九重町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "九重高原の地蔵原釣り堀センター。ヤマメ釣りと炭火焼きを組み合わせる体験を選べます。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "冬季の受付時間と調理の終了時刻を確認。食べる分を決めて釣り始める。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "yamame"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.enoha.jp/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/jizoubaru_tc/"
      }
    ]
  },
  {
    "slug": "managed-okuyaba",
    "type": "spot",
    "primaryType": "fresh",
    "name": "奥耶馬エノハ生産組合 釣り堀",
    "prefecture": "大分県",
    "area": "大分県・中津市",
    "terrain": "pond",
    "lat": 33.4542711,
    "lng": 130.9849943,
    "fish": [
      "ヤマメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": true,
    "kids": true,
    "note": "山国町槻木地区の奥耶馬エノハ生産組合の釣り堀。地域の案内で紹介されるエノハ釣りの受付を確認します。",
    "googleQuery": "奥耶馬エノハ生産組合 釣り堀 中津市",
    "officialUrl": "https://www.yamakunistyle.com/portfolio",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "中津市の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "山国町槻木地区の奥耶馬エノハ生産組合の釣り堀。地域の案内で紹介されるエノハ釣りの受付を確認します。",
    "bestFor": [
      "餌釣りの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "同じ地域の温泉・キャンプ場の位置と混同せず、釣り堀の入口を確認する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "yamame"
    ],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.yamakunistyle.com/portfolio"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/okuyaba/"
      }
    ]
  },
  {
    "slug": "managed-river-runs-yamato",
    "type": "spot",
    "primaryType": "fresh",
    "name": "リバーランズ山都",
    "prefecture": "熊本県",
    "area": "熊本県・山都町",
    "terrain": "pond",
    "lat": 32.640687,
    "lng": 130.988324,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "開催期間・釣法ごとの営業は公式で確認",
    "beginner": false,
    "kids": false,
    "note": "リバーランズ山都のエリアトラウト施設。放流魚と大会案内、利用する釣法の規則を確認して準備します。",
    "googleQuery": "リバーランズ山都 山都町",
    "officialUrl": "https://www.river-runs-yamato.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・管理区間を示す参考ピン。入口・受付・釣り可能な区画は公式案内を確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "山都町の施設へ。公式のアクセス案内で入口・受付を確認。",
    "field": "リバーランズ山都のエリアトラウト施設。放流魚と大会案内、利用する釣法の規則を確認して準備します。",
    "bestFor": [
      "ルアーの管理釣り場利用",
      "フライの管理釣り場利用"
    ],
    "timing": "釣りの受付終了と、利用する池・区画の営業日を出発前に確認。",
    "tips": [
      "イベント開催日は一般利用の範囲を確認。持ち帰り条件と魚に合う網を準備する。",
      "釣る前に針・餌・ルアーの規則、魚の持ち帰り・リリース条件を確認する。"
    ],
    "caution": [
      "管理者が許可した釣法・区画だけを利用する。",
      "雨や増水、積雪、貸切等で利用が変わるため当日の案内を確認する。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "features": [
      "管理釣り場"
    ],
    "sources": [
      {
        "label": "公式・地域運営案内：営業と利用条件",
        "url": "https://www.river-runs-yamato.com/"
      },
      {
        "label": "管理釣り場ドットコム：所在地の照合",
        "url": "https://www.kanritsuriba.com/river_runs_yamato/"
      }
    ]
  }
];
