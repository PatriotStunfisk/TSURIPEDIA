import type {FishingMapEntry} from './fishing-map-data';
export const batchSpots:FishingMapEntry[]=[
  {
    "season": "営業期間・解禁期間は公式案内を確認",
    "beginner": false,
    "kids": false,
    "parking": false,
    "toilet": false,
    "verifiedAt": "2026-09-14",
    "slug": "hidakagawa-planning",
    "type": "area",
    "name": "日高川水系・アユとアマゴの釣行計画",
    "prefecture": "和歌山県", "terrain": "river", "area": "和歌山・日高川",
    "fish": [
      "アユ",
      "アマゴ"
    ],
    "fishSlugs": [
      "ayu",
      "amago"
    ],
    "methods": [
      "友釣り",
      "渓流の餌釣り"
    ],
    "methodSlugs": [
      "ayu-tomozuri",
      "freshwater-bait"
    ],
    "guideSlugs": [
      "ayu-field-notes",
      "amago-field-notes"
    ],
    "googleQuery": "日高川漁業協同組合",
    "note": "漁協が案内するアユ・アマゴの河川情報から釣行を計画するためのエリア。釣り可能地点を示すピンではありません。",
    "status": "区域・期間・釣法と遊漁券を漁協で確認",
    "access": "地図検索は漁協周辺の参考位置。入川地点と駐車場所は漁協・おとり店で確認します。",
    "field": "本支流ごとに入川条件が異なります。河川状況と上流の天候を確認して計画してください。",
    "bestFor": [
      "おとり店と遊漁券の確認",
      "アユ・アマゴの情報収集"
    ],
    "timing": "漁協の解禁・河川情報を釣行前に確認。",
    "tips": [
      "友釣りの初回は経験者や講習でおとりの扱いを習う",
      "同じ川でも対象魚で規則が異なる"
    ],
    "caution": [
      "増水時には入川しない",
      "遊漁券だけで全域の採捕が許可されるわけではありません"
    ],
    "sources": [
      {
        "label": "日高川漁業協同組合：アユ・アマゴ、遊漁券、河川情報",
        "url": "https://www.zb.ztv.ne.jp/hidagyo/"
      }
    ]
  },
  {
    "season": "営業期間・解禁期間は公式案内を確認",
    "beginner": true,
    "kids": true,
    "parking": false,
    "toilet": false,
    "verifiedAt": "2026-09-14",
    "slug": "akutagawa-trout",
    "type": "spot",
    "name": "芥川 清・渓流魚釣り場",
    "prefecture": "大阪府", "terrain": "pond", "area": "大阪・高槻",
    "fish": [
      "ニジマス",
      "アユ"
    ],
    "fishSlugs": [
      "nijimasu",
      "ayu"
    ],
    "methods": [
      "マスの餌釣り",
      "友釣り"
    ],
    "methodSlugs": [
      "freshwater-bait",
      "ayu-tomozuri"
    ],
    "guideSlugs": [
      "nijimasu-field-notes",
      "ayu-field-notes"
    ],
    "googleQuery": "芥川 清 渓流魚釣り場",
    "note": "高槻市観光協会が案内する、季節で対象魚が変わる釣り場。秋から春のマス釣りと夏のアユ釣りを紹介しています。",
    "status": "今季の営業開始日・対象魚・区画を芥川漁協へ確認",
    "access": "高槻市大字原2154-2（観光協会案内）。受付と利用区画は当日の案内を優先。",
    "field": "河川を利用した釣り場。魚や釣法は季節・区画で異なるため、予約時に確認します。",
    "bestFor": [
      "マスの餌釣り入門",
      "季節に合わせた淡水釣り"
    ],
    "timing": "観光協会はマスを秋〜春、アユを夏の釣りとして紹介。当年の開始・終了日は漁協へ確認。",
    "tips": [
      "貸竿と餌の有無を事前確認",
      "ルアーを使う場合は対応する区画・針の条件を別途確認"
    ],
    "caution": [
      "川の増水・営業変更に注意",
      "料金と設備は最新の受付案内を確認"
    ],
    "sources": [
      {
        "label": "高槻市観光協会：摂津峡のスポット案内",
        "url": "https://www.takatsuki-kankou.org/settsukyo/html/spots.html"
      }
    ]
  },
  {
    "season": "営業期間・解禁期間は公式案内を確認",
    "beginner": true,
    "kids": false,
    "parking": false,
    "toilet": false,
    "verifiedAt": "2026-09-14",
    "slug": "saikazaki-seapark",
    "type": "spot",
    "name": "雑賀崎シーパーク",
    "prefecture": "和歌山県", "terrain": "pier", "area": "和歌山・和歌山市",
    "fish": [
      "カンパチ",
      "マダイ"
    ],
    "fishSlugs": [
      "kanpachi",
      "madai"
    ],
    "methods": [
      "施設指定の餌釣り"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "kanpachi-field-notes"
    ],
    "googleQuery": "雑賀崎シーパーク",
    "note": "予約制の海上釣り堀。季節の放流魚を公式案内で確認して選びます。沖のジギングとは異なる施設の餌釣りです。",
    "status": "予約・営業日・放流対象魚は公式サイトを確認",
    "access": "和歌山市田野101-3。集合場所と受付方法は公式案内を確認。",
    "field": "海上の生簀。図鑑の関連釣法がすべて使用できる施設ではありません。",
    "bestFor": [
      "大きな魚の餌釣り",
      "施設のルールに沿った海上釣り堀"
    ],
    "timing": "希望日の予約状況と放流魚を施設へ確認。",
    "tips": [
      "カンパチの有無とサイズを予約時に確認",
      "タックルと取り込みは施設の指定を優先"
    ],
    "caution": [
      "ルアーや泳がせなどの可否を自己判断しない",
      "船ジギングの道具をそのまま持ち込まず施設に相談"
    ],
    "sources": [
      {
        "label": "雑賀崎シーパーク公式：利用案内・予約・釣果",
        "url": "https://saikazaki-seapark.com/"
      }
    ]
  }
];
