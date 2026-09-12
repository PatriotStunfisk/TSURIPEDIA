import type {FishingMapEntry} from './fishing-map-data';
export const expansionSpots:FishingMapEntry[]=[
  {
    "slug": "naruohama",
    "lat": 34.69260157292251, "lng": 135.35601867652042,
    "type": "spot",
    "name": "鳴尾浜臨海公園 海づり広場",
    "area": "兵庫・阪神・西宮",
    "fish": [
      "アジ",
      "サバ",
      "タチウオ",
      "クロダイ",
      "スズキ",
      "マダコ"
    ],
    "fishSlugs": [
      "aji",
      "saba",
      "tachiuo",
      "chinu",
      "suzuki",
      "madako"
    ],
    "methods": [
      "サビキ"
    ],
    "methodSlugs": [
      "sabiki"
    ],
    "guideSlugs": [
      "madako-bottom-rules"
    ],
    "season": "対象魚・回遊によって変動",
    "beginner": true,
    "kids": true,
    "parking": false,
    "toilet": false,
    "note": "管理施設の海づり広場。公式の魚こよみと日々の釣果を確認して狙いを決められます。",
    "googleQuery": "鳴尾浜臨海公園 海づり広場",
    "status": "営業日・臨時変更・使用できる仕掛けは公式案内を確認",
    "access": "兵庫県西宮市鳴尾浜3-13。駐車・設備・交通は公式アクセス案内で確認。",
    "field": "護岸の管理釣り場。魚の掲載は当日の釣果や全釣法の使用許可を保証しません。",
    "bestFor": [
      "サビキの入門",
      "公式釣果を見て釣行計画"
    ],
    "timing": "公式の直近釣果と魚こよみを参考に、当日の風・波と営業状況で判断。",
    "tips": [
      "スタッフの利用案内と現地の釣法制限を優先",
      "マダコは採捕ルールと施設内での釣法可否を別途確認"
    ],
    "caution": [
      "入場料・貸竿・営業時間は変更されるため事前確認",
      "周囲の人や仕掛けとの間隔を確保"
    ],
    "verifiedAt": "2026-09-13",
    "sources": [
      {
        "label": "鳴尾浜臨海公園：海づり広場の利用案内・釣果",
        "url": "https://www.naruohama-park.com/umizuri/"
      }
    ]
  },
  {
    "slug": "akashi-offshore-planning",
    "type": "area",
    "name": "明石・沖の船釣りエリア",
    "area": "兵庫・明石・淡路島周辺",
    "fish": [
      "マダコ",
      "サワラ",
      "ヒラメ",
      "ブリ",
      "マダイ"
    ],
    "fishSlugs": [
      "madako",
      "sawara",
      "hirame",
      "buri",
      "madai"
    ],
    "methods": [
      "タコエギ",
      "ジギング",
      "ノマセ",
      "タイラバ"
    ],
    "methodSlugs": [
      "tako-egi",
      "jigging",
      "nomase",
      "tai-rubber",
      "blade-jig"
    ],
    "guideSlugs": [
      "madako-bottom-rules",
      "sawara-blade-range",
      "hirame-livebait-observation"
    ],
    "season": "対象魚・船の釣行海域によって変動",
    "beginner": false,
    "kids": false,
    "parking": false,
    "toilet": false,
    "note": "特定の釣船や釣り可能地点の紹介ではなく、船釣りを計画するためのエリア情報です。対象魚と出船先を船宿へ確認してください。",
    "googleQuery": "明石港",
    "status": "釣行計画用エリア・採捕許可や営業状況を示すものではありません",
    "access": "予約する船宿の集合場所へ。地図検索は明石港周辺の参考位置で、実際の集合場所ではありません。",
    "field": "流れが速く海域ごとの規則が異なります。船長の指定棚・仕掛け・投入合図を優先します。",
    "bestFor": [
      "魚から船の釣法を選ぶ",
      "指定タックルの確認",
      "タコ採捕ルールの確認"
    ],
    "timing": "船宿の直近の対象魚・出船予定と、釣行日に適用される公式ルールで判断。",
    "tips": [
      "ヒラメとブリの泳がせは対象魚に合う針・餌・棚を確認",
      "サワラはジギングとキャスティングの可否を予約前に確認",
      "タコの資料には2026年12月1日適用の規則もあるため適用日を確認"
    ],
    "caution": [
      "マダコは海域・期間・サイズ・数量・仕掛けの規則を確認",
      "船宿の営業や予約をUOLINKは保証しません",
      "地図を根拠に自船で採捕しない"
    ],
    "verifiedAt": "2026-09-13",
    "sources": [
      {
        "label": "明石市漁業組合連合会：2026年版タコ釣りルール（PDF）",
        "url": "https://www.npo-uwh.jp/marine/img/takorule2026.pdf"
      },
      {
        "label": "水産庁：遊漁の部屋",
        "url": "https://www.jfa.maff.go.jp/j/enoki/yugyo/"
      }
    ]
  },
  {
    "slug": "miyazu-sea-fishing",
    "type": "spot",
    "name": "宮津市海洋つり場",
    "area": "京都北部・宮津",
    "fish": [],
    "fishSlugs": [],
    "methods": [],
    "methodSlugs": [],
    "season": "休業中",
    "beginner": false,
    "kids": false,
    "parking": false,
    "toilet": false,
    "note": "宮津市は令和8年度から当面の休業を案内しています。現在の釣行候補として案内しないため、休業情報を掲載しています。",
    "googleQuery": "宮津市海洋つり場",
    "closed": true,
    "status": "令和8年度から当面休業（宮津市の案内）",
    "access": "再開案内が出るまでは釣行対象にしないでください。",
    "field": "市の海洋つり場。運営体制と施設の今後について市の案内を確認。",
    "bestFor": [
      "再開情報の確認"
    ],
    "timing": "再開時期は公式発表を確認。",
    "tips": [
      "検索結果に古い営業日が残っていても最新のお知らせを優先"
    ],
    "caution": [
      "休業中の施設へ釣り目的で立ち入らない"
    ],
    "verifiedAt": "2026-09-13",
    "sources": [
      {
        "label": "宮津市：令和8年度から当面休業のお知らせ",
        "url": "https://www.city.miyazu.kyoto.jp/site/turiba/index.html"
      }
    ]
  }
];
