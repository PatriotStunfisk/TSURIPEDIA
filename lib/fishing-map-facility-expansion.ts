import type {FishingMapEntry} from './fishing-map-data';

// Reviewed against operator/municipal sources on 2026-09-17. See docs/map-facility-expansion.md.
export const facilityMapExpansion:FishingMapEntry[]=[
  {
    "slug": "field-izumozaki-bridge",
    "type": "spot",
    "primaryType": "facility",
    "name": "いずもざき海遊広場 フィッシングブリッジ",
    "prefecture": "新潟県",
    "area": "新潟県",
    "terrain": "pier",
    "lat": 37.5455152,
    "lng": 138.6914096,
    "fish": [],
    "methods": [],
    "season": "春〜秋。フィッシングブリッジは11月〜3月閉鎖",
    "beginner": false,
    "kids": false,
    "note": "海へ伸びる橋から釣りができる出雲崎の広場。海岸の散策施設と釣り位置を区別して利用します。",
    "googleQuery": "いずもざき海遊広場 フィッシングブリッジ 新潟県",
    "officialUrl": "https://www.izumozaki.net/outdoor/sea/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "海へ伸びる橋から釣りができる出雲崎の広場。海岸の散策施設と釣り位置を区別して利用します。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "冬季は閉鎖。11月〜3月を避け、開放状況と波の高さを確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.izumozaki.net/outdoor/sea/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/niigata/izumozaki/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-fishing-rainbow",
    "type": "spot",
    "primaryType": "facility",
    "name": "海上釣堀フィッシングレインボー",
    "prefecture": "福井県",
    "area": "福井県",
    "terrain": "sea-pond",
    "lat": 35.6036477,
    "lng": 135.8855818,
    "fish": [
      "マダイ",
      "ブリ",
      "カンパチ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "日向湖の海上釣り堀。放流対象にマダイや青物があり、狙う魚に合わせて仕掛けを準備します。",
    "googleQuery": "海上釣堀フィッシングレインボー 福井県",
    "officialUrl": "https://fishing-r.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "日向湖の海上釣り堀。放流対象にマダイや青物があり、狙う魚に合わせて仕掛けを準備します。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "受付時に使用できる餌と青物用の仕掛けを確認。一般岸壁のサビキ釣りとは準備を分ける。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "madai",
      "buri",
      "kanpachi"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://fishing-r.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/fukui/rainbow/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-fishing-land-hiruga",
    "type": "spot",
    "primaryType": "facility",
    "name": "フィッシングランド日向",
    "prefecture": "福井県",
    "area": "福井県",
    "terrain": "sea-pond",
    "lat": 35.599713,
    "lng": 135.886953,
    "fish": [
      "マダイ",
      "ブリ",
      "カンパチ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "若狭の海上釣り堀で、マダイと青物の放流池を利用できます。釣果に合わせた餌・タナ調整を相談してから始めましょう。",
    "googleQuery": "フィッシングランド日向 福井県",
    "officialUrl": "https://fl-hiruga.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "若狭の海上釣り堀で、マダイと青物の放流池を利用できます。釣果に合わせた餌・タナ調整を相談してから始めましょう。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "池外への竿出し・サビキは禁止。釣り堀の外側を自由な釣り場として利用しない。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "madai",
      "buri",
      "kanpachi"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://fl-hiruga.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/fukui/hiruga/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-bluepark-ano",
    "type": "spot",
    "primaryType": "facility",
    "name": "ブルーパーク阿納",
    "prefecture": "福井県",
    "area": "福井県",
    "terrain": "sea-pond",
    "lat": 35.537008,
    "lng": 135.786846,
    "fish": [
      "マダイ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "阿納の漁村にある小ダイの海上釣り堀。魚を釣る体験に加え、教育旅行向けには捌き体験も案内されています。",
    "googleQuery": "ブルーパーク阿納 福井県",
    "officialUrl": "https://bluepark-ano.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "阿納の漁村にある小ダイの海上釣り堀。魚を釣る体験に加え、教育旅行向けには捌き体験も案内されています。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "大鯛コースは休止案内があります。小ダイコースの実施と貸切状況を確認。捌き体験は教育旅行向けの条件を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "madai"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://bluepark-ano.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/fukui/bluepark_ano/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-seapark-nyu",
    "type": "spot",
    "primaryType": "facility",
    "name": "シーパーク丹生",
    "prefecture": "福井県",
    "area": "福井県",
    "terrain": "sea-pond",
    "lat": 35.7072747,
    "lng": 135.9709892,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "美浜町丹生の海上釣り堀。営業カレンダーに沿って利用する施設で、自然の岸壁からの釣りとは受付が異なります。",
    "googleQuery": "シーパーク丹生 福井県",
    "officialUrl": "http://www1.kl.mmnet-ai.ne.jp/~nyu/seapark.html",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "美浜町丹生の海上釣り堀。営業カレンダーに沿って利用する施設で、自然の岸壁からの釣りとは受付が異なります。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "2026年は4月25日〜11月29日の営業案内。天候による変更と放流魚を公式で確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://www1.kl.mmnet-ai.ne.jp/~nyu/seapark.html"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/fukui/sp_nyuu/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-tokai-ikada",
    "type": "spot",
    "primaryType": "facility",
    "name": "筏釣りの東海 海上釣り堀",
    "prefecture": "静岡県",
    "area": "静岡県",
    "terrain": "sea-pond",
    "lat": 35.04541,
    "lng": 139.087495,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "熱海・網代の筏へ渡って釣る海上釣り堀。陸上受付から乗船するため、集合時刻を含めて予定を組みます。",
    "googleQuery": "筏釣りの東海 海上釣り堀 静岡県",
    "officialUrl": "https://tokai-ikadatsuri.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "熱海・網代の筏へ渡って釣る海上釣り堀。陸上受付から乗船するため、集合時刻を含めて予定を組みます。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "ルアー・集魚器は使用禁止。乗船前に荷物をまとめ、指定の餌釣り用具を利用する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://tokai-ikadatsuri.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/shizuoka/tokai/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-maruya-heda",
    "type": "spot",
    "primaryType": "facility",
    "name": "海上釣り堀まるや",
    "prefecture": "静岡県",
    "area": "静岡県",
    "terrain": "sea-pond",
    "lat": 35.0190129,
    "lng": 138.8367169,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "沼津・戸田の海上釣り堀。日々の釣果案内で放流魚と利用コースを確認してから予約できます。",
    "googleQuery": "海上釣り堀まるや 静岡県",
    "officialUrl": "https://maruya-maruya.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "沼津・戸田の海上釣り堀。日々の釣果案内で放流魚と利用コースを確認してから予約できます。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "池ごとの利用条件と餌の持込条件を予約時に相談する。乗船・集合の案内を優先する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://maruya-maruya.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/shizuoka/maruya/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-matsunase-fishing",
    "type": "spot",
    "primaryType": "facility",
    "name": "松名瀬フィッシングパーク",
    "prefecture": "三重県",
    "area": "三重県",
    "terrain": "sea-pond",
    "lat": 34.602385,
    "lng": 136.5766923,
    "fish": [
      "マダイ",
      "ヒラメ",
      "ブリ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "松阪にある陸上の海水釣り堀。船に乗らず、マダイやヒラメなどの釣りに挑戦できる施設です。",
    "googleQuery": "松名瀬フィッシングパーク 三重県",
    "officialUrl": "https://fishing-park.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "松阪にある陸上の海水釣り堀。船に乗らず、マダイやヒラメなどの釣りに挑戦できる施設です。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "竿1本・針1本。5m以上の竿、ルアー、サビキ、撒き餌は禁止されているため道具を絞って準備する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "madai",
      "hirame",
      "buri"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://fishing-park.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/mie/matsunase/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-toba-triton",
    "type": "spot",
    "primaryType": "facility",
    "name": "フィッシングパークトリトン",
    "prefecture": "三重県",
    "area": "三重県",
    "terrain": "sea-pond",
    "lat": 34.3873145,
    "lng": 136.8828333,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "鳥羽・千賀町の海上釣り堀。旧称の千賀フィッシングパークとは同じ施設なので、現在の名称で受付を確認します。",
    "googleQuery": "フィッシングパークトリトン 三重県",
    "officialUrl": "https://toba-triton.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "鳥羽・千賀町の海上釣り堀。旧称の千賀フィッシングパークとは同じ施設なので、現在の名称で受付を確認します。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "貸し道具を使う場合は予約時に相談。対象魚や放流内容は当日の案内を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://toba-triton.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/mie/triton/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-ugatahama-ikada",
    "type": "spot",
    "primaryType": "facility",
    "name": "鵜方浜釣センター 筏・カセ釣り",
    "prefecture": "三重県",
    "area": "三重県",
    "terrain": "raft",
    "lat": 34.328584,
    "lng": 136.806554,
    "fish": [
      "クロダイ"
    ],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "英虞湾で筏・カセからチヌを狙う施設。ピンは受付・出発地の目安で、釣る筏は当日の案内に従います。",
    "googleQuery": "鵜方浜釣センター 筏・カセ釣り 三重県",
    "officialUrl": "https://nishiotosen.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "英虞湾で筏・カセからチヌを狙う施設。ピンは受付・出発地の目安で、釣る筏は当日の案内に従います。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "渡船を伴うため救命胴衣を着用。岸から自由に入れる筏ではなく、予約・帰港時刻を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "chinu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://nishiotosen.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/mie/ugatahama/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-hasamaura",
    "type": "spot",
    "primaryType": "facility",
    "name": "はさま浦釣り堀センター",
    "prefecture": "三重県",
    "area": "三重県",
    "terrain": "sea-pond",
    "lat": 34.3167395,
    "lng": 136.646938,
    "fish": [
      "マダイ",
      "ヒラメ",
      "ブリ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "南伊勢町の海上釣り堀。陸続きの釣り座を利用でき、マダイを軸に季節の放流魚を狙います。",
    "googleQuery": "はさま浦釣り堀センター 三重県",
    "officialUrl": "https://www.hasamaura.com",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "南伊勢町の海上釣り堀。陸続きの釣り座を利用でき、マダイを軸に季節の放流魚を狙います。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "青物の放流や必要な道具は季節で変わるため、予約時に狙いたい魚を伝える。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "madai",
      "hirame",
      "buri"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.hasamaura.com"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/mie/hasama/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-tajiri-seapond",
    "type": "spot",
    "primaryType": "facility",
    "name": "海釣ぽ〜と田尻",
    "prefecture": "大阪府",
    "area": "大阪府",
    "terrain": "sea-pond",
    "lat": 34.3998484,
    "lng": 135.2863805,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "田尻の橋下周辺に設けられた海上釣り堀。貸し道具やタモの利用を確認すれば荷物を整理して出かけられます。",
    "googleQuery": "海釣ぽ〜と田尻 大阪府",
    "officialUrl": "https://www.osaka-tajiri.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "田尻の橋下周辺に設けられた海上釣り堀。貸し道具やタモの利用を確認すれば荷物を整理して出かけられます。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "日陰でも水面の照り返しや暑さに備える。竿・餌・タモのレンタル条件は予約時に確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.osaka-tajiri.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/osaka/tajiri/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-kojima-yogyoba",
    "type": "spot",
    "primaryType": "facility",
    "name": "小島養漁場",
    "prefecture": "大阪府",
    "area": "大阪府",
    "terrain": "sea-pond",
    "lat": 34.311882,
    "lng": 135.093356,
    "fish": [
      "マダイ",
      "ブリ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "岬町の入り江を区切った海水釣り場。一般の港の釣りではなく、養漁場のルールに従って放流魚を狙います。",
    "googleQuery": "小島養漁場 大阪府",
    "officialUrl": "http://kojima-fm.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "岬町の入り江を区切った海水釣り場。一般の港の釣りではなく、養漁場のルールに従って放流魚を狙います。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "SEA TERRACE KOJIMAの現行案内で釣りの営業日と使える道具を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "madai",
      "buri"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://kojima-fm.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/osaka/kojima/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-tsuribori-opa",
    "type": "spot",
    "primaryType": "facility",
    "name": "海上釣り堀オーパ",
    "prefecture": "大阪府",
    "area": "大阪府",
    "terrain": "sea-pond",
    "lat": 34.321344,
    "lng": 135.119047,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "大阪・岬町谷川から渡る海上釣り堀。到着後すぐ竿を出す形式ではなく、乗船受付から始まります。",
    "googleQuery": "海上釣り堀オーパ 大阪府",
    "officialUrl": "https://tsuribori-opa.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "大阪・岬町谷川から渡る海上釣り堀。到着後すぐ竿を出す形式ではなく、乗船受付から始まります。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "乗船名簿など受付手続きを済ませ、指定便と帰港時刻を守る。貸切・乗合条件を予約時に確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://tsuribori-opa.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/osaka/opa/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-torinosu-ikada",
    "type": "spot",
    "primaryType": "facility",
    "name": "鳥の巣釣り場",
    "prefecture": "和歌山県",
    "area": "和歌山県",
    "terrain": "raft",
    "lat": 33.701917,
    "lng": 135.384556,
    "fish": [
      "クロダイ",
      "アイゴ",
      "アオリイカ",
      "マアジ",
      "メジナ"
    ],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "田辺の新庄漁協が案内する陸続きの筏釣り場。養殖筏周辺で季節の魚を狙えます。",
    "googleQuery": "鳥の巣釣り場 和歌山県",
    "officialUrl": "https://www.sinjyo-gyokyou.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "田辺の新庄漁協が案内する陸続きの筏釣り場。養殖筏周辺で季節の魚を狙えます。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣り可能な筏と養殖施設を区別する。アイゴが釣れた場合は毒棘を素手で触らない。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "chinu",
      "aigo",
      "aoriika",
      "aji",
      "mejina"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.sinjyo-gyokyou.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/wakayama/torinosu/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-wakayama-hokko",
    "type": "spot",
    "primaryType": "facility",
    "name": "和歌山北港海つり公園",
    "prefecture": "和歌山県",
    "area": "和歌山県",
    "terrain": "pier",
    "lat": 34.2294341,
    "lng": 135.1063389,
    "fish": [],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "2026年4月に再開した北港の海釣り施設。入場人数や受付方法が以前と異なるため現行案内を確認します。",
    "googleQuery": "和歌山北港海つり公園 和歌山県",
    "officialUrl": "https://wakayama-fising.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "2026年4月に再開した北港の海釣り施設。入場人数や受付方法が以前と異なるため現行案内を確認します。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "誓約書の準備・キャッシュレス決済・再入場不可のルールに注意。旧来の利用方法を前提にしない。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://wakayama-fising.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/wakayama/wakayama_kitakou/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-suiho-seapond",
    "type": "spot",
    "primaryType": "facility",
    "name": "釣り堀 水宝",
    "prefecture": "兵庫県",
    "area": "兵庫県",
    "terrain": "sea-pond",
    "lat": 34.6602606,
    "lng": 134.4807552,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "坊勢島の海上釣り堀。釣り場と本土側の乗船場所は別なので、予約した便の集合先を確認します。",
    "googleQuery": "釣り堀 水宝 兵庫県",
    "officialUrl": "https://www.suihoh.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "坊勢島の海上釣り堀。釣り場と本土側の乗船場所は別なので、予約した便の集合先を確認します。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "ピンは釣り堀施設の目安。車で直接向かう前に、利用する港と乗船便を公式で確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.suihoh.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/hyogo/suiho/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-janohire-fishing",
    "type": "spot",
    "primaryType": "facility",
    "name": "淡路じゃのひれフィッシングパーク",
    "prefecture": "兵庫県",
    "area": "兵庫県",
    "terrain": "sea-pond",
    "lat": 34.2393769,
    "lng": 134.711924,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "南あわじの複合施設にある海上釣り堀。キャンプや他の体験とは別に釣りの受付・利用枠を確認しましょう。",
    "googleQuery": "淡路じゃのひれフィッシングパーク 兵庫県",
    "officialUrl": "https://janohire.co.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "南あわじの複合施設にある海上釣り堀。キャンプや他の体験とは別に釣りの受付・利用枠を確認しましょう。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣り堀のコースと貸切条件を事前確認。周囲の海へ自由に竿を出せる施設ではありません。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://janohire.co.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/hyogo/janohire/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-amakusa-tsuriland",
    "type": "spot",
    "primaryType": "facility",
    "name": "天草釣堀レジャーランド",
    "prefecture": "熊本県",
    "area": "熊本県",
    "terrain": "sea-pond",
    "lat": 32.566113,
    "lng": 130.4531766,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "天草の島に設けられた海の釣り堀。施設への移動を含む釣行となるため、集合と帰路まで余裕を持たせます。",
    "googleQuery": "天草釣堀レジャーランド 熊本県",
    "officialUrl": "https://turiland.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "天草の島に設けられた海の釣り堀。施設への移動を含む釣行となるため、集合と帰路まで余裕を持たせます。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "渡しの方法と営業状況を予約時に確認。釣り堀以外の周辺海岸に入れることを意味しません。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://turiland.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/kumamoto/leisure/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-jumbo-fishing",
    "type": "spot",
    "primaryType": "facility",
    "name": "ジャンボフィッシング村",
    "prefecture": "長崎県",
    "area": "長崎県",
    "terrain": "sea-pond",
    "lat": 33.268535,
    "lng": 129.570167,
    "fish": [
      "マダイ",
      "イサキ",
      "ブリ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "佐世保・鹿町町の海上釣り堀。タイ類や青物の放流魚を対象に、池のルールに合わせて釣ります。",
    "googleQuery": "ジャンボフィッシング村 長崎県",
    "officialUrl": "https://jumbofishing.jimdofree.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "佐世保・鹿町町の海上釣り堀。タイ類や青物の放流魚を対象に、池のルールに合わせて釣ります。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣り座の予約は受け付けない案内。場所の確保方法と駐車の指示を現地で確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "madai",
      "isaki",
      "buri"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://jumbofishing.jimdofree.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/nagasaki/jumbo/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-hamakatsu",
    "type": "spot",
    "primaryType": "facility",
    "name": "釣り堀 浜活",
    "prefecture": "長崎県",
    "area": "長崎県",
    "terrain": "sea-pond",
    "lat": 33.3636281,
    "lng": 129.6708594,
    "fish": [
      "マダイ",
      "ブリ",
      "イサキ",
      "スズキ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "松浦の陸続きの海上釣り堀。乗船の負担を避けて海の放流魚を狙いたいときの候補です。",
    "googleQuery": "釣り堀 浜活 長崎県",
    "officialUrl": "https://www.hamakatu.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "松浦の陸続きの海上釣り堀。乗船の負担を避けて海の放流魚を狙いたいときの候補です。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "事前予約が必要。営業時間内に連絡し、放流魚・餌・貸し道具の条件を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "madai",
      "buri",
      "isaki",
      "suzuki"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.hamakatu.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://www.kanritsuriba.com/cgi-bin/nagasaki/hamakatsu/sea.cgi"
      }
    ]
  },
  {
    "slug": "field-ukiuki-land",
    "type": "spot",
    "primaryType": "fresh",
    "name": "フィッシングエリア ウキウキランド",
    "prefecture": "青森県",
    "area": "青森県・三戸郡新郷村",
    "terrain": "pond",
    "lat": 40.4387946,
    "lng": 141.107502,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "南部町の管理釣り場で、ルアー・フライと家族向け餌釣りを選べます。コースで持ち帰り条件が異なります。",
    "googleQuery": "フィッシングエリア ウキウキランド 青森県",
    "officialUrl": "http://ukiukiland.g2.xrea.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "南部町の管理釣り場で、ルアー・フライと家族向け餌釣りを選べます。コースで持ち帰り条件が異なります。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "シングルバーブレスを使用。ソフトルアーやトレーラーなどの禁止品と、持ち帰れない魚を事前に確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://ukiukiland.g2.xrea.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=34002"
      }
    ]
  },
  {
    "slug": "field-kuji-seaside",
    "type": "spot",
    "primaryType": "park",
    "name": "久慈港シーサイドパーク",
    "prefecture": "岩手県",
    "area": "岩手県・久慈市",
    "terrain": "park",
    "lat": 40.1910584,
    "lng": 141.7995564,
    "fish": [],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "久慈市の観光案内で釣り利用が紹介されている海辺の公園。足元には消波ブロックがあるため取り込み位置を先に確認します。",
    "googleQuery": "久慈港シーサイドパーク 岩手県",
    "officialUrl": "https://iwate-kuji.com/kujikoshisaidopaku/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "久慈市の観光案内で釣り利用が紹介されている海辺の公園。足元には消波ブロックがあるため取り込み位置を先に確認します。",
    "bestFor": [
      "利用範囲を確認して楽しむ海釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "対岸のすわ緑地や港の防波堤は別の区域。禁止表示・柵を越えず、公園内でも当日の規制を優先する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "map-pin-entrance",
      "map-offline-trip-notes"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://iwate-kuji.com/kujikoshisaidopaku/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=135644"
      }
    ]
  },
  {
    "slug": "field-ezuriko-fishing",
    "type": "spot",
    "primaryType": "fresh",
    "name": "フィッシングパーク江釣子",
    "prefecture": "岩手県",
    "area": "岩手県・北上市",
    "terrain": "pond",
    "lat": 39.290508,
    "lng": 141.09219,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "北上市街で釣りと魚の塩焼きを体験できる釣り堀。貸し道具を使った短時間の釣行にも向いています。",
    "googleQuery": "フィッシングパーク江釣子 岩手県",
    "officialUrl": "https://www.fp-ezuriko.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "北上市街で釣りと魚の塩焼きを体験できる釣り堀。貸し道具を使った短時間の釣行にも向いています。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣った魚を食べる場合は調理受付の終了前に釣りを切り上げる。BBQ利用は釣りとは別に確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.fp-ezuriko.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=34000"
      }
    ]
  },
  {
    "slug": "field-zao-tsuribori",
    "type": "spot",
    "primaryType": "fresh",
    "name": "蔵王釣堀",
    "prefecture": "山形県",
    "area": "山形県・山形市",
    "terrain": "pond",
    "lat": 38.1662896,
    "lng": 140.3866682,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "蔵王温泉街の手前にあるニジマスの釣り堀。釣った魚を食事につなげられ、温泉旅行と組み合わせやすい施設です。",
    "googleQuery": "蔵王釣堀 山形県",
    "officialUrl": "https://www.zao-minsyuku.com/tsuribori/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "蔵王温泉街の手前にあるニジマスの釣り堀。釣った魚を食事につなげられ、温泉旅行と組み合わせやすい施設です。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣り堀は冬季休業。宿泊営業と釣り堀営業を混同せず、春〜秋の営業状況を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.zao-minsyuku.com/tsuribori/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=46018"
      }
    ]
  },
  {
    "slug": "field-choja-yashiki",
    "type": "spot",
    "primaryType": "fresh",
    "name": "長者屋敷 釣り場",
    "prefecture": "山形県",
    "area": "山形県・南陽市",
    "terrain": "pond",
    "lat": 38.0702482,
    "lng": 140.1564252,
    "fish": [
      "ニジマス",
      "コイ",
      "ヘラブナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "南陽市の釣り宿に、鯉池・ヘラ釣り池・ニジマスの渓流釣りなどがまとまっています。経験に合った池を選べます。",
    "googleQuery": "長者屋敷 釣り場 山形県",
    "officialUrl": "https://chouja.fishing/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "南陽市の釣り宿に、鯉池・ヘラ釣り池・ニジマスの渓流釣りなどがまとまっています。経験に合った池を選べます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "客室専用のプライベートリバーと通常の釣り場を区別。日帰り利用の可否と受付方法を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-facility-rental-check"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://chouja.fishing/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=46017"
      }
    ]
  },
  {
    "slug": "field-chokai-ryokomura",
    "type": "spot",
    "primaryType": "fresh",
    "name": "鳥海高原家族旅行村 渓流釣り場",
    "prefecture": "山形県",
    "area": "山形県・酒田市",
    "terrain": "river",
    "lat": 39.034226,
    "lng": 140.035436,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "鳥海高原の滞在施設に併設された渓流釣り場。キャンプの予約と釣り体験の実施日を合わせて確認すると計画しやすくなります。",
    "googleQuery": "鳥海高原家族旅行村 渓流釣り場 山形県",
    "officialUrl": "https://www.choukai.jp/ryokomura/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "鳥海高原の滞在施設に併設された渓流釣り場。キャンプの予約と釣り体験の実施日を合わせて確認すると計画しやすくなります。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "施設の休村日には注意。宿泊できる日でも釣り体験を行っているか、事前に問い合わせる。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.choukai.jp/ryokomura/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=35269"
      }
    ]
  },
  {
    "slug": "field-oda-yogyoba",
    "type": "spot",
    "primaryType": "fresh",
    "name": "小田養魚場",
    "prefecture": "福島県",
    "area": "福島県・耶麻郡猪苗代町",
    "terrain": "pond",
    "lat": 37.6004529,
    "lng": 140.1626889,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "猪苗代町の湧水を使ったニジマス釣り堀。釣った魚の持ち帰りを前提に、氷とクーラーを準備して出かけます。",
    "googleQuery": "小田養魚場 福島県",
    "officialUrl": "https://tsuribori.bandaisan.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "猪苗代町の湧水を使ったニジマス釣り堀。釣った魚の持ち帰りを前提に、氷とクーラーを準備して出かけます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "主に土日祝営業。練り餌・川虫・毛針・ルアーは不可で、施設指定の餌釣りを利用する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://tsuribori.bandaisan.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=132959"
      }
    ]
  },
  {
    "slug": "field-lost-lures",
    "type": "spot",
    "primaryType": "fresh",
    "name": "会津高原アングラーズエリア ロストルアーズ",
    "prefecture": "福島県",
    "area": "福島県・南会津郡南会津町",
    "terrain": "pond",
    "lat": 37.076223,
    "lng": 139.683698,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "会津高原でルアーとフライを楽しむ管理釣り場。餌釣り体験とは道具が異なり、針の規則を確認して準備します。",
    "googleQuery": "会津高原アングラーズエリア ロストルアーズ 福島県",
    "officialUrl": "https://www.lost-lures.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "会津高原でルアーとフライを楽しむ管理釣り場。餌釣り体験とは道具が異なり、針の規則を確認して準備します。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "放流や池の状態は公式の近況を確認。魚を扱うネットとリリース手順も用意しておく。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.lost-lures.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=86405"
      }
    ]
  },
  {
    "slug": "field-tohoku-tsuriborien",
    "type": "spot",
    "primaryType": "fresh",
    "name": "幻の岩魚 東北釣堀苑",
    "prefecture": "福島県",
    "area": "福島県・南会津郡下郷町",
    "terrain": "pond",
    "lat": 37.286954,
    "lng": 139.9637715,
    "fish": [
      "イワナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "下郷町の湧水で育てたイワナを釣る施設。炭火焼きの食事と組み合わせられます。",
    "googleQuery": "幻の岩魚 東北釣堀苑 福島県",
    "officialUrl": "https://iwana.ne.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "下郷町の湧水で育てたイワナを釣る施設。炭火焼きの食事と組み合わせられます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "冬季は休業、平日も不定休。食事や魚の調理まで希望する場合は営業を電話で確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
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
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://iwana.ne.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=86404"
      }
    ]
  },
  {
    "slug": "field-kawasemi-tsuribori",
    "type": "spot",
    "primaryType": "fresh",
    "name": "アクアマリンいなわしろ 釣り体験",
    "prefecture": "福島県",
    "area": "福島県・耶麻郡猪苗代町",
    "terrain": "pond",
    "lat": 37.5614387,
    "lng": 140.0745716,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "2026年4月25日〜10月31日。メンテナンス日を除く",
    "beginner": true,
    "kids": true,
    "note": "カワセミ水族館に設けられた釣り体験コーナー。水族館の見学とは別に釣り堀の実施期間を確認して訪れます。",
    "googleQuery": "アクアマリンいなわしろ 釣り体験 福島県",
    "officialUrl": "https://www.aquamarine.or.jp/kawasemi/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "カワセミ水族館に設けられた釣り体験コーナー。水族館の見学とは別に釣り堀の実施期間を確認して訪れます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "2026年の釣り堀は4月25日〜10月31日の案内。メンテナンス休止の最新情報を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.aquamarine.or.jp/kawasemi/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=86403"
      }
    ]
  },
  {
    "slug": "field-urabandai-fs",
    "type": "spot",
    "primaryType": "fresh",
    "name": "裏磐梯フォレストスプリングス",
    "prefecture": "福島県",
    "area": "福島県・耶麻郡北塩原村",
    "terrain": "lake",
    "lat": 37.6826295,
    "lng": 140.0841217,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "裏磐梯の水辺を利用したトラウトの管理釣り場。フィールド案内で釣り座と利用ライセンスを確認して入場します。",
    "googleQuery": "裏磐梯フォレストスプリングス 福島県",
    "officialUrl": "https://urabandai.forest-springs.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "裏磐梯の水辺を利用したトラウトの管理釣り場。フィールド案内で釣り座と利用ライセンスを確認して入場します。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "自然湖のどこでも釣れる許可ではありません。管理区画・持ち帰り条件・使用ルアーの規則を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://urabandai.forest-springs.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=65332"
      }
    ]
  },
  {
    "slug": "field-jinnai-tsuribori",
    "type": "spot",
    "primaryType": "fresh",
    "name": "陣内つりぼり園",
    "prefecture": "長野県",
    "area": "長野県・北佐久郡立科町",
    "terrain": "pond",
    "lat": 36.2074859,
    "lng": 138.2912626,
    "fish": [
      "ヤマメ",
      "イワナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "立科町で蓼科山の水を利用する釣り堀。ヤマメやイワナを釣り、併設の食事・BBQと組み合わせられます。",
    "googleQuery": "陣内つりぼり園 長野県",
    "officialUrl": "https://shirakabakogen.jp/spot/jinnaitsuribori",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "立科町で蓼科山の水を利用する釣り堀。ヤマメやイワナを釣り、併設の食事・BBQと組み合わせられます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "貸し竿と餌を利用する場合は受付で申込み。釣りと調理の受付終了は別に確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "yamame",
      "iwana"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://shirakabakogen.jp/spot/jinnaitsuribori"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=116061"
      }
    ]
  },
  {
    "slug": "field-fuppu-nijimasu",
    "type": "spot",
    "primaryType": "fresh",
    "name": "風布にじます釣り堀センター",
    "prefecture": "埼玉県",
    "area": "埼玉県・大里郡寄居町",
    "terrain": "pond",
    "lat": 36.097886,
    "lng": 139.148916,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "寄居町の里山にあるニジマス釣り堀。釣った魚の炭火焼きまで楽しめるため、初めての持ち帰り釣行にも向いています。",
    "googleQuery": "風布にじます釣り堀センター 埼玉県",
    "officialUrl": "https://nijimasuya.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "寄居町の里山にあるニジマス釣り堀。釣った魚の炭火焼きまで楽しめるため、初めての持ち帰り釣行にも向いています。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "当面は基本的に土日営業との案内があります。平日の来場を前提にせず最新の営業を確認し、魚の調理を待つ時間も予定に入れる。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://nijimasuya.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=126728"
      }
    ],
    "status": "当面は基本的に土日営業。公式の最新案内を確認"
  },
  {
    "slug": "field-nakatsugawa-keiryu",
    "type": "spot",
    "primaryType": "fresh",
    "name": "奥秩父源流 中津川渓流釣場",
    "prefecture": "埼玉県",
    "area": "埼玉県・秩父市",
    "terrain": "river",
    "lat": 35.9942971,
    "lng": 138.8013133,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "奥秩父の渓流を使った管理釣り場。餌釣りとルアー・フライの利用区画を選び、川遊びの区域とは分けて楽しみます。",
    "googleQuery": "奥秩父源流 中津川渓流釣場 埼玉県",
    "officialUrl": "https://www.nakatsu-tsuri.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "奥秩父の渓流を使った管理釣り場。餌釣りとルアー・フライの利用区画を選び、川遊びの区域とは分けて楽しみます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "増水や道路状況を出発前に確認。釣り専用区画へ川遊びの人が入らないよう同行者と場所を共有する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.nakatsu-tsuri.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=65440"
      }
    ]
  },
  {
    "slug": "field-kentoku-fish",
    "type": "spot",
    "primaryType": "fresh",
    "name": "Mt.Kentoku Fish & Lodge 釣り堀",
    "prefecture": "山梨県",
    "area": "山梨県・山梨市",
    "terrain": "pond",
    "lat": 35.793964,
    "lng": 138.7218298,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "乾徳山の登山口に近い施設で、宿泊だけでなく日帰りの釣りも案内されています。山間部の釣りと滞在を組み合わせられます。",
    "googleQuery": "Mt.Kentoku Fish & Lodge 釣り堀 山梨県",
    "officialUrl": "https://www.mt-kentoku-fandl.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "乾徳山の登山口に近い施設で、宿泊だけでなく日帰りの釣りも案内されています。山間部の釣りと滞在を組み合わせられます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "デイフィッシングの予約条件を確認。登山口と釣りの受付場所を混同しないよう公式アクセスを見る。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.mt-kentoku-fandl.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=133064"
      }
    ]
  },
  {
    "slug": "field-oshino-fishing-area",
    "type": "spot",
    "primaryType": "fresh",
    "name": "忍野フィッシングエリア",
    "prefecture": "山梨県",
    "area": "山梨県・南都留郡忍野村",
    "terrain": "pond",
    "lat": 35.4607158,
    "lng": 138.850371,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "忍野の釣り場で、ニジマスの餌釣り体験とルアー・フライが選べます。初心者と経験者が別のコースを選ぶ計画もできます。",
    "googleQuery": "忍野フィッシングエリア 山梨県",
    "officialUrl": "https://www.mfi.or.jp/~bass/oshino.html",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "忍野の釣り場で、ニジマスの餌釣り体験とルアー・フライが選べます。初心者と経験者が別のコースを選ぶ計画もできます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "持ち帰りにはサイズや匹数の条件があります。釣った魚をキープする前にコースの条件を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.mfi.or.jp/~bass/oshino.html"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98559"
      }
    ]
  },
  {
    "slug": "field-okutone-fishing",
    "type": "spot",
    "primaryType": "fresh",
    "name": "おくとねフィッシングパーク",
    "prefecture": "群馬県",
    "area": "群馬県・沼田市",
    "terrain": "pond",
    "lat": 36.6663118,
    "lng": 139.1540361,
    "fish": [],
    "methods": [
      "ルアー"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "沼田の管理池でマス類のルアーフィッシングを楽しめます。放流池や魚の大きさに合わせて仕掛けを選びます。",
    "googleQuery": "おくとねフィッシングパーク 群馬県",
    "officialUrl": "http://www7.wind.ne.jp/okutone/index_o.htm",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "沼田の管理池でマス類のルアーフィッシングを楽しめます。放流池や魚の大きさに合わせて仕掛けを選びます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "受付を終えてから釣りを開始。捌き場の利用終了を確認し、持ち帰る魚の処理時間を確保する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://www7.wind.ne.jp/okutone/index_o.htm"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=61061"
      }
    ]
  },
  {
    "slug": "field-nihon-iwana-center",
    "type": "spot",
    "primaryType": "fresh",
    "name": "日本イワナセンター",
    "prefecture": "群馬県",
    "area": "群馬県・沼田市",
    "terrain": "pond",
    "lat": 36.610988,
    "lng": 139.194015,
    "fish": [],
    "methods": [
      "ルアー"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "複数のポンドを使うマス類のルアー釣り施設。魚種やサイズだけでなく、池ごとの利用規則を確認して回ります。",
    "googleQuery": "日本イワナセンター 群馬県",
    "officialUrl": "http://www7.wind.ne.jp/okutone/center/index.htm",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "複数のポンドを使うマス類のルアー釣り施設。魚種やサイズだけでなく、池ごとの利用規則を確認して回ります。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "餌釣りは終了案内があるためルアー利用として計画。小型ルアーやフェザーの制限を公式で確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://www7.wind.ne.jp/okutone/center/index.htm"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=51623"
      }
    ]
  },
  {
    "slug": "field-navelpark-pond",
    "type": "spot",
    "primaryType": "fresh",
    "name": "サンワ設計ネーブルパーク 釣り堀",
    "prefecture": "茨城県",
    "area": "茨城県・古河市",
    "terrain": "pond",
    "lat": 36.1664449,
    "lng": 139.7535143,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "古河市の公園内にある釣り堀。園内の遊びと釣りを組み合わせられ、家族の短時間の体験にも利用できます。",
    "googleQuery": "サンワ設計ネーブルパーク 釣り堀 茨城県",
    "officialUrl": "https://navelpark.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "古河市の公園内にある釣り堀。園内の遊びと釣りを組み合わせられ、家族の短時間の体験にも利用できます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "ポニー牧場など他施設とは営業が異なります。釣り堀そのものの受付状況を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://navelpark.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=113346"
      }
    ]
  },
  {
    "slug": "field-midcreek",
    "type": "spot",
    "primaryType": "fresh",
    "name": "ミッドクリークフィッシングエリア",
    "prefecture": "茨城県",
    "area": "茨城県・石岡市",
    "terrain": "pond",
    "lat": 36.1884656,
    "lng": 140.1574651,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "筑波山のふもとの管理釣り場。沢の水を使った池で、ルアー・フライを選んで楽しめます。",
    "googleQuery": "ミッドクリークフィッシングエリア 茨城県",
    "officialUrl": "https://midcreek.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "筑波山のふもとの管理釣り場。沢の水を使った池で、ルアー・フライを選んで楽しめます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "初回は公式のレギュレーションを読み、許可された針・ルアーと持ち帰り条件を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://midcreek.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=46751"
      }
    ]
  },
  {
    "slug": "field-kairakuen-pier",
    "type": "spot",
    "primaryType": "facility",
    "name": "海楽園 宿泊者向け釣り施設",
    "prefecture": "三重県",
    "area": "三重県・鳥羽市",
    "terrain": "pier",
    "lat": 34.4902548,
    "lng": 136.8362482,
    "fish": [
      "メジナ",
      "カサゴ",
      "メバル"
    ],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "鳥羽の宿で客室からの釣りや専用桟橋を利用できます。一般開放の岸壁ではなく、宿のプランとして検討する場所です。",
    "googleQuery": "海楽園 宿泊者向け釣り施設 三重県",
    "officialUrl": "https://www.kairakuen.net/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "鳥羽の宿で客室からの釣りや専用桟橋を利用できます。一般開放の岸壁ではなく、宿のプランとして検討する場所です。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "宿泊・施設利用の条件を事前確認。釣れた魚でも大きさや衛生上の理由で調理できない場合があります。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "mejina",
      "kasago",
      "mebaru"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.kairakuen.net/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=137115"
      }
    ]
  },
  {
    "slug": "field-daikichi-amago",
    "type": "spot",
    "primaryType": "fresh",
    "name": "大吉アマゴセンター",
    "prefecture": "三重県",
    "area": "三重県・津市",
    "terrain": "pond",
    "lat": 34.4755712,
    "lng": 136.2384778,
    "fish": [
      "アマゴ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "津市美杉町川上のアマゴ体験施設。釣り堀と人工渓流のつかみ取りがあり、子どもの年齢に合わせて選べます。",
    "googleQuery": "大吉アマゴセンター 三重県",
    "officialUrl": "https://tsukanko.jp/spot/s1356/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "津市美杉町川上のアマゴ体験施設。釣り堀と人工渓流のつかみ取りがあり、子どもの年齢に合わせて選べます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣り堀とつかみ取りは別の体験。人数と希望する体験を伝えて受付を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
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
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://tsukanko.jp/spot/s1356/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=131252"
      }
    ]
  },
  {
    "slug": "field-hyakurakuso-pier",
    "type": "spot",
    "primaryType": "facility",
    "name": "百楽荘 宿泊者専用釣り桟橋",
    "prefecture": "石川県",
    "area": "石川県・鳳珠郡能登町",
    "terrain": "pier",
    "lat": 37.3102909,
    "lng": 137.2325242,
    "fish": [
      "マアジ",
      "スズキ",
      "クロダイ",
      "アオリイカ"
    ],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "能登・九十九湾の宿にある宿泊者専用の釣り桟橋。貸し道具を使い、宿で過ごす時間に釣りを組み込めます。",
    "googleQuery": "百楽荘 宿泊者専用釣り桟橋 石川県",
    "officialUrl": "https://www.100raku.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "能登・九十九湾の宿にある宿泊者専用の釣り桟橋。貸し道具を使い、宿で過ごす時間に釣りを組み込めます。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "一般開放の公園ではありません。宿泊プラン・釣り用具・現地までの道路状況を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "aji",
      "suzuki",
      "chinu",
      "aoriika"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.100raku.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=24828"
      }
    ]
  },
  {
    "slug": "field-hachigamine-fishing",
    "type": "spot",
    "primaryType": "fresh",
    "name": "八ヶ峰家族旅行村 釣り堀",
    "prefecture": "福井県",
    "area": "福井県・大飯郡おおい町",
    "terrain": "pond",
    "lat": 35.359638,
    "lng": 135.6837553,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "おおい町の山間施設にある釣り堀。宿泊や魚つかみなどの体験と合わせ、釣りができる日を問い合わせて利用します。",
    "googleQuery": "八ヶ峰家族旅行村 釣り堀 福井県",
    "officialUrl": "https://hachigamine.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "おおい町の山間施設にある釣り堀。宿泊や魚つかみなどの体験と合わせ、釣りができる日を問い合わせて利用します。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "宿泊予約だけで釣りの手配まで済んだと思わず、体験の人数と用具を事前に相談する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://hachigamine.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98550"
      }
    ]
  },
  {
    "slug": "field-ikeda-iwanaya",
    "type": "spot",
    "primaryType": "fresh",
    "name": "池田養魚場 渓流釣り",
    "prefecture": "滋賀県",
    "area": "滋賀県・東近江市",
    "terrain": "river",
    "lat": 35.093866,
    "lng": 136.3786638,
    "fish": [
      "イワナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "奥永源寺の養魚場で、放流したイワナを渓流で釣る体験ができます。魚料理やBBQにつながる釣行先です。",
    "googleQuery": "池田養魚場 渓流釣り 滋賀県",
    "officialUrl": "https://iwanaya.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "奥永源寺の養魚場で、放流したイワナを渓流で釣る体験ができます。魚料理やBBQにつながる釣行先です。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣りの区画・放流・食事を受付で確認。愛知川の一般河川区間へ自由に入れる許可とは区別する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "iwana"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://iwanaya.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=102424"
      }
    ]
  },
  {
    "slug": "field-sennan-sazan",
    "type": "spot",
    "primaryType": "facility",
    "name": "泉南フィッシング・パークSAZAN",
    "prefecture": "大阪府",
    "area": "大阪府・泉南市",
    "terrain": "sea-pond",
    "lat": 34.3812065,
    "lng": 135.2570063,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "泉南の海上釣り堀。初心者の利用も案内されており、当日の放流内容に合わせて道具を準備できます。",
    "googleQuery": "泉南フィッシング・パークSAZAN 大阪府",
    "officialUrl": "https://www.sazanfisher.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "泉南の海上釣り堀。初心者の利用も案内されており、当日の放流内容に合わせて道具を準備できます。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "2本竿や撒き餌などのルールを公式で確認。釣り堀専用のコースとして予約する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.sazanfisher.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=106730"
      }
    ]
  },
  {
    "slug": "field-wani-shinike",
    "type": "spot",
    "primaryType": "fresh",
    "name": "王仁新池釣センター",
    "prefecture": "大阪府",
    "area": "大阪府・枚方市",
    "terrain": "pond",
    "lat": 34.815351,
    "lng": 135.704397,
    "fish": [
      "ヘラブナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "枚方・藤阪駅近くにあるヘラブナの釣り池。教室や大会も行われ、専用の浮き釣りを学びたい人の候補です。",
    "googleQuery": "王仁新池釣センター 大阪府",
    "officialUrl": "https://wanitsuri.wixsite.com/wani-tsuri",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "枚方・藤阪駅近くにあるヘラブナの釣り池。教室や大会も行われ、専用の浮き釣りを学びたい人の候補です。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "餌や竿の持込み条件を確認。教室や貸し竿を希望する初心者は、事前に利用方法を相談する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-facility-rental-check"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://wanitsuri.wixsite.com/wani-tsuri"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=102292"
      }
    ]
  },
  {
    "slug": "field-kitaimanishi-amago",
    "type": "spot",
    "primaryType": "fresh",
    "name": "北今西あまご放流釣り場",
    "prefecture": "奈良県",
    "area": "奈良県・吉野郡野迫川村",
    "terrain": "river",
    "lat": 34.1095661,
    "lng": 135.6228643,
    "fish": [
      "アマゴ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "野迫川村のかわらび荘が案内する放流釣り場。天然河川の区画でアマゴを狙えます。",
    "googleQuery": "北今西あまご放流釣り場 奈良県",
    "officialUrl": "https://kawarabisou.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "野迫川村のかわらび荘が案内する放流釣り場。天然河川の区画でアマゴを狙えます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "餌釣り・ルアー・フライ・テンカラの券種が異なります。放流の有無と利用区画を予約時に確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
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
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://kawarabisou.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=127554"
      }
    ]
  },
  {
    "slug": "field-ainomi-pond",
    "type": "spot",
    "primaryType": "fresh",
    "name": "釣り堀 相ノ見の里",
    "prefecture": "山口県",
    "area": "山口県・岩国市",
    "terrain": "pond",
    "lat": 34.063018,
    "lng": 132.046518,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "岩国市玖珂町にある予約制の釣り堀・BBQ施設。貸し道具を利用して体験できるため、家族での計画にも向きます。",
    "googleQuery": "釣り堀 相ノ見の里 山口県",
    "officialUrl": "https://kuga.iwakuni.city/shop/159",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "岩国市玖珂町にある予約制の釣り堀・BBQ施設。貸し道具を利用して体験できるため、家族での計画にも向きます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "事前予約が必要。BBQを組み合わせる場合は釣りの人数と食事の人数を伝える。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://kuga.iwakuni.city/shop/159"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=135436"
      }
    ]
  },
  {
    "slug": "field-mine-trout",
    "type": "spot",
    "primaryType": "fresh",
    "name": "美祢市養鱒場釣り堀",
    "prefecture": "山口県",
    "area": "山口県・美祢市",
    "terrain": "pond",
    "lat": 34.2549818,
    "lng": 131.2461841,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "別府弁天池近くのニジマス釣り堀。貸し竿で釣り、隣接の食事処で調理を頼む利用もできます。",
    "googleQuery": "美祢市養鱒場釣り堀 山口県",
    "officialUrl": "https://karusuto.com/spot/tsuribori/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "別府弁天池近くのニジマス釣り堀。貸し竿で釣り、隣接の食事処で調理を頼む利用もできます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣った魚は重量に応じた精算となるため、持ち帰れる量を考えて釣る。観光池そのものでは釣らない。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://karusuto.com/spot/tsuribori/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=135435"
      }
    ]
  },
  {
    "slug": "field-kawashiri-misaki",
    "type": "spot",
    "primaryType": "rock",
    "name": "川尻岬",
    "prefecture": "山口県",
    "area": "山口県・長門市",
    "terrain": "rock",
    "lat": 34.4381126,
    "lng": 130.9756409,
    "fish": [],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "長門の観光案内で磯釣りが紹介される岬。高台のキャンプ場と海際の釣り座では足場や危険度が大きく異なります。",
    "googleQuery": "川尻岬 山口県",
    "officialUrl": "https://nanavi.jp/activities/kawasirimisaki-camp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "長門の観光案内で磯釣りが紹介される岬。高台のキャンプ場と海際の釣り座では足場や危険度が大きく異なります。",
    "bestFor": [
      "利用範囲を確認して楽しむ海釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "参考ピンはキャンプ場周辺。海際への移動は足場・波・退路を確認し、荒天や暗い時間は無理に降りない。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "map-pin-entrance",
      "map-offline-trip-notes"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://nanavi.jp/activities/kawasirimisaki-camp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=131423"
      }
    ]
  },
  {
    "slug": "field-hiruzen-shiogama",
    "type": "spot",
    "primaryType": "fresh",
    "name": "蒜山塩釜養魚センター",
    "prefecture": "岡山県",
    "area": "岡山県・真庭市",
    "terrain": "pond",
    "lat": 35.2994089,
    "lng": 133.6794546,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "蒜山の塩釜冷泉に近い養魚センターの釣り堀。複数種の魚を扱い、釣りとつかみ取りのコースを選べます。",
    "googleQuery": "蒜山塩釜養魚センター 岡山県",
    "officialUrl": "https://siogama.sakura.ne.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "蒜山の塩釜冷泉に近い養魚センターの釣り堀。複数種の魚を扱い、釣りとつかみ取りのコースを選べます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "冬季営業や休業日を公式で確認。魚の種類と精算方法を釣る前に聞いておく。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://siogama.sakura.ne.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=120644"
      }
    ]
  },
  {
    "slug": "field-hanami-yogyo",
    "type": "spot",
    "primaryType": "fresh",
    "name": "花見養魚センター",
    "prefecture": "岡山県",
    "area": "岡山県・新見市",
    "terrain": "pond",
    "lat": 35.1710249,
    "lng": 133.4084171,
    "fish": [
      "アマゴ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "新見市千屋の屋内釣り堀。アマゴを釣り、その場での調理も相談できます。",
    "googleQuery": "花見養魚センター 岡山県",
    "officialUrl": "https://niimi.gr.jp/member/member_detail/index/68.html",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "新見市千屋の屋内釣り堀。アマゴを釣り、その場での調理も相談できます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "竿・餌の持込みは不可。調理は必要匹数など条件があるため、少人数なら注文方法を先に確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
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
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://niimi.gr.jp/member/member_detail/index/68.html"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98579"
      }
    ]
  },
  {
    "slug": "field-shimanami-tsuribori",
    "type": "spot",
    "primaryType": "facility",
    "name": "しまなみ海道 つり堀公園",
    "prefecture": "広島県",
    "area": "広島県・尾道市",
    "terrain": "sea-pond",
    "lat": 34.2757848,
    "lng": 133.1170421,
    "fish": [
      "スズキ",
      "クロダイ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "生口島の塩田跡を利用した海水釣り堀。海上の筏と異なり陸上の池で釣りを楽しめます。",
    "googleQuery": "しまなみ海道 つり堀公園 広島県",
    "officialUrl": "https://shimanami.main.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "生口島の塩田跡を利用した海水釣り堀。海上の筏と異なり陸上の池で釣りを楽しめます。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "放流魚は季節で変わります。利用人数を事前に連絡し、持ち帰りと調理の条件を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "suzuki",
      "chinu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://shimanami.main.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=135523"
      }
    ]
  },
  {
    "slug": "field-marinepark-osaki",
    "type": "spot",
    "primaryType": "facility",
    "name": "マリンパークおおさき",
    "prefecture": "広島県",
    "area": "広島県・豊田郡大崎上島町",
    "terrain": "pier",
    "lat": 34.2554539,
    "lng": 132.8748863,
    "fish": [
      "メバル",
      "カサゴ"
    ],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "大崎上島から長島大橋を渡った先の海釣り公園。漁協が案内する桟橋を利用して瀬戸内の魚を狙います。",
    "googleQuery": "マリンパークおおさき 広島県",
    "officialUrl": "https://osakiuchiura-gyokyo.jp/marine-park/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "大崎上島から長島大橋を渡った先の海釣り公園。漁協が案内する桟橋を利用して瀬戸内の魚を狙います。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "受付・釣りの利用時間を確認。管理人が常時いる前提で予定を組まず、必要な道具を準備する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "mebaru",
      "kasago"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://osakiuchiura-gyokyo.jp/marine-park/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=135522"
      }
    ]
  },
  {
    "slug": "field-yuki-tsuribori",
    "type": "spot",
    "primaryType": "fresh",
    "name": "湯来つり堀",
    "prefecture": "広島県",
    "area": "広島県・広島市",
    "terrain": "pond",
    "lat": 34.4842159,
    "lng": 132.2693073,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "湯来温泉近くの釣り堀。貸し道具を使った体験と食事ができ、BBQは別に予約して組み合わせられます。",
    "googleQuery": "湯来つり堀 広島県",
    "officialUrl": "https://morishitakashi.wixsite.com/mysite-3",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "湯来温泉近くの釣り堀。貸し道具を使った体験と食事ができ、BBQは別に予約して組み合わせられます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣りとBBQで予約条件が異なります。季節のアユ体験などは開催期間を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://morishitakashi.wixsite.com/mysite-3"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=135464"
      }
    ]
  },
  {
    "slug": "field-keiryu-chaen",
    "type": "spot",
    "primaryType": "fresh",
    "name": "渓流茶園",
    "prefecture": "広島県",
    "area": "広島県・山県郡安芸太田町",
    "terrain": "pond",
    "lat": 34.655902,
    "lng": 132.2265908,
    "fish": [
      "ヤマメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "深入山のふもとで自然石の池を使うヤマメ釣り堀。釣った魚の調理まで楽しめる施設です。",
    "googleQuery": "渓流茶園 広島県",
    "officialUrl": "https://tsuribori191.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "深入山のふもとで自然石の池を使うヤマメ釣り堀。釣った魚の調理まで楽しめる施設です。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "持込品の制限を確認。大雨や土砂災害の警報時は、営業だけでなく往復道路の安全も確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
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
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://tsuribori191.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=135462"
      }
    ]
  },
  {
    "slug": "field-suka-park",
    "type": "spot",
    "primaryType": "park",
    "name": "須賀公園",
    "prefecture": "愛媛県",
    "area": "愛媛県・西宇和郡伊方町",
    "terrain": "park",
    "lat": 33.4603119,
    "lng": 132.2482054,
    "fish": [],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "伊方町三机湾の公園。県の観光案内で釣り利用が紹介されていますが、海水浴などと共用する場所です。",
    "googleQuery": "須賀公園 愛媛県",
    "officialUrl": "https://www.iyokannet.jp/spot/644",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "伊方町三机湾の公園。県の観光案内で釣り利用が紹介されていますが、海水浴などと共用する場所です。",
    "bestFor": [
      "利用範囲を確認して楽しむ海釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "遊泳者がいる区間へ仕掛けを投げない。釣り可能な範囲と季節の駐車条件を現地表示で確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "map-pin-entrance",
      "map-offline-trip-notes"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.iyokannet.jp/spot/644"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=122849"
      }
    ]
  },
  {
    "slug": "field-osumi-kaihin",
    "type": "spot",
    "primaryType": "park",
    "name": "大角海浜公園",
    "prefecture": "愛媛県",
    "area": "愛媛県・今治市",
    "terrain": "park",
    "lat": 34.1414491,
    "lng": 132.9414338,
    "fish": [],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "今治市波方町の海浜公園。キャンプ・海水浴とともに釣りが案内される水辺です。",
    "googleQuery": "大角海浜公園 愛媛県",
    "officialUrl": "https://www.city.imabari.ehime.jp/kanko/spot/?a=160",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "今治市波方町の海浜公園。キャンプ・海水浴とともに釣りが案内される水辺です。",
    "bestFor": [
      "利用範囲を確認して楽しむ海釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣り専用施設ではないため、歩行者・遊泳者と十分離れる。海際の足場と潮位を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "map-pin-entrance",
      "map-offline-trip-notes"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.city.imabari.ehime.jp/kanko/spot/?a=160"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=122834"
      }
    ]
  },
  {
    "slug": "field-amakusa-nagisatei",
    "type": "spot",
    "primaryType": "facility",
    "name": "天草渚亭 宿泊者向け釣り施設",
    "prefecture": "熊本県",
    "area": "熊本県・上天草市",
    "terrain": "pier",
    "lat": 32.527471,
    "lng": 130.438168,
    "fish": [],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "上天草の宿で、離れの客室や浮き桟橋から釣りを楽しむプランがあります。宿泊と一体で利用を相談する場所です。",
    "googleQuery": "天草渚亭 宿泊者向け釣り施設 熊本県",
    "officialUrl": "https://www.amakusanagisatei.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "上天草の宿で、離れの客室や浮き桟橋から釣りを楽しむプランがあります。宿泊と一体で利用を相談する場所です。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "桟橋は一般開放の岸壁ではありません。利用可能な部屋・釣り具・魚の調理条件を宿へ確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.amakusanagisatei.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=137119"
      }
    ]
  },
  {
    "slug": "field-otemizu-pond",
    "type": "spot",
    "primaryType": "fresh",
    "name": "お手水の森 釣り堀",
    "prefecture": "熊本県",
    "area": "熊本県・熊本市",
    "terrain": "pond",
    "lat": 32.8310334,
    "lng": 130.6865902,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "熊本市の湧水を使う施設で、釣り堀と食事処を利用できます。市街から出かける短時間の釣り体験にも向きます。",
    "googleQuery": "お手水の森 釣り堀 熊本県",
    "officialUrl": "https://nijimasu.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "熊本市の湧水を使う施設で、釣り堀と食事処を利用できます。市街から出かける短時間の釣り体験にも向きます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣り堀と食事処の営業時間は別。コイの池など希望コースの営業を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://nijimasu.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=134753"
      }
    ]
  },
  {
    "slug": "field-amakusa-rakutsuri",
    "type": "spot",
    "primaryType": "facility",
    "name": "天草海上釣り堀 楽つり",
    "prefecture": "熊本県",
    "area": "熊本県・天草市",
    "terrain": "sea-pond",
    "lat": 32.5471075,
    "lng": 130.1244408,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "天草の観光海上釣り堀で、餌と釣り具のレンタルを含む体験が案内されています。船上の本格釣行とは別の体験です。",
    "googleQuery": "天草海上釣り堀 楽つり 熊本県",
    "officialUrl": "https://rakutsuri.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "天草の観光海上釣り堀で、餌と釣り具のレンタルを含む体験が案内されています。船上の本格釣行とは別の体験です。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "集合場所・利用時間・荒天時の扱いを予約時に確認。同行する子どもの救命胴衣も相談する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://rakutsuri.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=134752"
      }
    ]
  },
  {
    "slug": "field-hayashi-masutsuri",
    "type": "spot",
    "primaryType": "fresh",
    "name": "林養魚場 ますつり公園",
    "prefecture": "福島県",
    "area": "福島県・西白河郡西郷村",
    "terrain": "pond",
    "lat": 37.1333376,
    "lng": 140.1631991,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "西郷村の湧水を使った複数の釣り池。ニジマスを釣る体験から食事までつなげやすい施設です。",
    "googleQuery": "林養魚場 ますつり公園 福島県",
    "officialUrl": "https://www.hayashitrout.com/masutsuri/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "西郷村の湧水を使った複数の釣り池。ニジマスを釣る体験から食事までつなげやすい施設です。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "魚を食べる予定に合わせて釣る量を決める。調理の受付終了と混雑状況を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.hayashitrout.com/masutsuri/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=33994"
      }
    ]
  },
  {
    "slug": "field-bonten-pond",
    "type": "spot",
    "primaryType": "fresh",
    "name": "渓流釣り堀 ぼん天",
    "prefecture": "福島県",
    "area": "福島県・耶麻郡猪苗代町",
    "terrain": "pond",
    "lat": 37.6478174,
    "lng": 140.2257287,
    "fish": [
      "イワナ",
      "ヤマメ",
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "猪苗代の湧水を使った釣り堀。水中の魚を見ながら餌を食うタイミングを観察でき、釣った魚の調理も相談できます。",
    "googleQuery": "渓流釣り堀 ぼん天 福島県",
    "officialUrl": "http://takamori-bonten.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "猪苗代の湧水を使った釣り堀。水中の魚を見ながら餌を食うタイミングを観察でき、釣った魚の調理も相談できます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "山間の道路状況と営業日を確認。魚を見つけても大きな影を落とさず静かに近づく。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "iwana",
      "yamame",
      "nijimasu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://takamori-bonten.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=33993"
      }
    ]
  },
  {
    "slug": "field-kitagawa-yugyo",
    "type": "spot",
    "primaryType": "fresh",
    "name": "北川遊魚",
    "prefecture": "長野県",
    "area": "長野県・上水内郡信濃町",
    "terrain": "pond",
    "lat": 36.7870696,
    "lng": 138.1932466,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "信濃町の全天候型釣り池。雨や雪を避けられる施設でも、現地までの交通状況は別に確認して向かいます。",
    "googleQuery": "北川遊魚 長野県",
    "officialUrl": "https://www.fc-kitagawa.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "信濃町の全天候型釣り池。雨や雪を避けられる施設でも、現地までの交通状況は別に確認して向かいます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "屋内外の池や対象魚に合わせたコースを受付で選ぶ。冬の道路には積雪への備えが必要。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.fc-kitagawa.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98503"
      }
    ]
  },
  {
    "slug": "field-hanaoka-fishing",
    "type": "spot",
    "primaryType": "fresh",
    "name": "フィッシングランドはなおか",
    "prefecture": "長野県",
    "area": "長野県・上水内郡信濃町",
    "terrain": "river",
    "lat": 36.7849715,
    "lng": 138.1820682,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "鳥居川の水を引いた区画でニジマスを釣る施設。釣りと子どもの水遊びは、それぞれ指定の場所で楽しめます。",
    "googleQuery": "フィッシングランドはなおか 長野県",
    "officialUrl": "https://fishinglandhanaoka.jimdofree.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "鳥居川の水を引いた区画でニジマスを釣る施設。釣りと子どもの水遊びは、それぞれ指定の場所で楽しめます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣り区画とじゃぶじゃぶ池を混同しない。放流・貸し竿・BBQの受付を事前に確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://fishinglandhanaoka.jimdofree.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98489"
      }
    ]
  },
  {
    "slug": "field-fishon-shishidome",
    "type": "spot",
    "primaryType": "fresh",
    "name": "FISH ON！鹿留",
    "prefecture": "山梨県",
    "area": "山梨県・都留市",
    "terrain": "lake",
    "lat": 35.5077211,
    "lng": 138.8911993,
    "fish": [],
    "methods": [
      "ルアー",
      "フライ"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "都留市のトラウト管理釣り場で、湖と河川エリアがあります。釣法や目的に合う券種を選んでから入場します。",
    "googleQuery": "FISH ON！鹿留 山梨県",
    "officialUrl": "https://www.sisidome.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "都留市のトラウト管理釣り場で、湖と河川エリアがあります。釣法や目的に合う券種を選んでから入場します。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "パインレイクなど区画ごとの利用条件を確認。2026年更新のレギュレーションを準備の基準にする。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-trout-first-trip",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.sisidome.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=65442"
      }
    ]
  },
  {
    "slug": "field-hakushu-shylph",
    "type": "spot",
    "primaryType": "fresh",
    "name": "白州トラウトフィッシングエリア シルフ",
    "prefecture": "山梨県",
    "area": "山梨県・北杜市",
    "terrain": "pond",
    "lat": 35.7671405,
    "lng": 138.3132999,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "白州の山麓にある管理釣り場。餌釣り・ルアーとつかみ取りが案内され、経験に合わせて選べます。",
    "googleQuery": "白州トラウトフィッシングエリア シルフ 山梨県",
    "officialUrl": "https://shylph.boy.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "白州の山麓にある管理釣り場。餌釣り・ルアーとつかみ取りが案内され、経験に合わせて選べます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣法ごとの区画と営業を確認。キャンプ場の受付と釣りの受付を取り違えないよう公式アクセスを見る。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://shylph.boy.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=34064"
      }
    ]
  },
  {
    "slug": "field-osakana-toto",
    "type": "spot",
    "primaryType": "fresh",
    "name": "おさかなつり とと",
    "prefecture": "山梨県",
    "area": "山梨県・中巨摩郡昭和町",
    "terrain": "pond",
    "lat": 35.6222789,
    "lng": 138.5422578,
    "fish": [
      "コイ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "昭和町の管理釣り堀で、餌釣りやルアー利用を案内しています。コイなどを狙う身近な体験施設です。",
    "googleQuery": "おさかなつり とと 山梨県",
    "officialUrl": "https://www.toto-yamanashi.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "昭和町の管理釣り堀で、餌釣りやルアー利用を案内しています。コイなどを狙う身近な体験施設です。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "コースごとに使える道具が異なります。ルアーを持ち込む場合は対象池と規則を先に確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-facility-rental-check"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.toto-yamanashi.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=34063"
      }
    ]
  },
  {
    "slug": "field-westriver-fishing",
    "type": "spot",
    "primaryType": "fresh",
    "name": "ウエストリバーキャンプ場 管理釣り場",
    "prefecture": "山梨県",
    "area": "山梨県・南アルプス市",
    "terrain": "river",
    "lat": 35.652797,
    "lng": 138.40589,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "南アルプス市のキャンプ場に併設された管理釣り場。流れのある場所でニジマス釣りを体験できます。",
    "googleQuery": "ウエストリバーキャンプ場 管理釣り場 山梨県",
    "officialUrl": "https://westriver-camp.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "南アルプス市のキャンプ場に併設された管理釣り場。流れのある場所でニジマス釣りを体験できます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣りのみの日帰り利用と宿泊者利用の条件を確認。川遊びの人がいる方向へは投げない。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://westriver-camp.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=33596"
      }
    ]
  },
  {
    "slug": "field-shirane-gyoen",
    "type": "spot",
    "primaryType": "fresh",
    "name": "白根魚苑",
    "prefecture": "群馬県",
    "area": "群馬県・利根郡片品村",
    "terrain": "pond",
    "lat": 36.805679,
    "lng": 139.302128,
    "fish": [
      "ニジマス",
      "ヤマメ",
      "イワナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "片品村の釣り堀と体験施設。餌釣りでマス類を狙い、釣った魚の塩焼きやBBQを組み合わせられます。",
    "googleQuery": "白根魚苑 群馬県",
    "officialUrl": "https://www.shiranegyoen.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "片品村の釣り堀と体験施設。餌釣りでマス類を狙い、釣った魚の塩焼きやBBQを組み合わせられます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "冬季の営業期間を確認。餌釣りエリアを利用し、持ち帰り・調理の受付条件を先に聞く。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu",
      "yamame",
      "iwana"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.shiranegyoen.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=34726"
      }
    ]
  },
  {
    "slug": "field-agowan-ikada",
    "type": "spot",
    "primaryType": "facility",
    "name": "あご湾釣りセンター 筏釣り",
    "prefecture": "三重県",
    "area": "三重県・志摩市",
    "terrain": "raft",
    "lat": 34.314671,
    "lng": 136.765318,
    "fish": [],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "英虞湾の貸切型の筏釣り。屋根やトイレのある筏の案内があり、初心者向けの道具相談もできます。",
    "googleQuery": "あご湾釣りセンター 筏釣り 三重県",
    "officialUrl": "https://www.shima.mctv.ne.jp/~agowan/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "英虞湾の貸切型の筏釣り。屋根やトイレのある筏の案内があり、初心者向けの道具相談もできます。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "筏は予約制。出発地のピンを確認し、貸し竿・餌・救命胴衣の準備を予約時に相談する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.shima.mctv.ne.jp/~agowan/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98611"
      }
    ]
  },
  {
    "slug": "field-akuda-keiryuen",
    "type": "spot",
    "primaryType": "fresh",
    "name": "あくだ渓流苑",
    "prefecture": "岐阜県",
    "area": "岐阜県・郡上市",
    "terrain": "pond",
    "lat": 35.7309762,
    "lng": 136.9729405,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "郡上市の庭園釣り堀。自然石を使った池で釣り、炭焼き場で釣った魚を食べる体験につなげられます。",
    "googleQuery": "あくだ渓流苑 岐阜県",
    "officialUrl": "http://www.gujo-tv.ne.jp/~keiryuen/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "郡上市の庭園釣り堀。自然石を使った池で釣り、炭焼き場で釣った魚を食べる体験につなげられます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣りだけかBBQも利用するかを伝える。調理や片付けの時間を残して納竿する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://www.gujo-tv.ne.jp/~keiryuen/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98603"
      }
    ]
  },
  {
    "slug": "field-sakananosato-sugishima",
    "type": "spot",
    "primaryType": "fresh",
    "name": "さかなのさと すぎしま",
    "prefecture": "岐阜県",
    "area": "岐阜県・関市",
    "terrain": "river",
    "lat": 35.7538299,
    "lng": 136.7867723,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー",
      "フライ"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "板取川沿いの施設で、ルアー・フライ・渓流釣り・釣り堀を選べます。初心者と経験者で利用区画を相談できます。",
    "googleQuery": "さかなのさと すぎしま 岐阜県",
    "officialUrl": "https://sakananosato.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "板取川沿いの施設で、ルアー・フライ・渓流釣り・釣り堀を選べます。初心者と経験者で利用区画を相談できます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "一般河川の遊漁と施設内の釣りは別。使いたい釣法の区画と券種を受付で確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://sakananosato.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98602"
      }
    ]
  },
  {
    "slug": "field-kisuien",
    "type": "spot",
    "primaryType": "fresh",
    "name": "つりぼり喜水園",
    "prefecture": "岐阜県",
    "area": "岐阜県・各務原市",
    "terrain": "pond",
    "lat": 35.3882771,
    "lng": 136.8265854,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "大池・小池・室内のコースがある釣り堀。天候や同行者に合わせて浮き釣りのコースを選べます。",
    "googleQuery": "つりぼり喜水園 岐阜県",
    "officialUrl": "http://www.kisuien.info/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "大池・小池・室内のコースがある釣り堀。天候や同行者に合わせて浮き釣りのコースを選べます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "魚の持ち帰りはありません。初回はコースごとの釣り方を受付で確認し、支払い用の現金を用意する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://www.kisuien.info/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98594"
      }
    ]
  },
  {
    "slug": "field-aomi-camp-fishing",
    "type": "spot",
    "primaryType": "fresh",
    "name": "アオミキャンプ場 マス釣り",
    "prefecture": "岐阜県",
    "area": "岐阜県・中津川市",
    "terrain": "pond",
    "lat": 35.696236,
    "lng": 137.4253392,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "付知町観光協会直営のキャンプ場にあるマス釣り体験。キャンプの滞在中に釣りと調理を組み合わせられます。",
    "googleQuery": "アオミキャンプ場 マス釣り 岐阜県",
    "officialUrl": "https://www.tsukechi.jp/camp_aomi/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "付知町観光協会直営のキャンプ場にあるマス釣り体験。キャンプの滞在中に釣りと調理を組み合わせられます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "キャンプ場利用者に限る案内。日帰りで釣りだけできる施設とは考えず、管理棟で申込む。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.tsukechi.jp/camp_aomi/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98590"
      }
    ]
  },
  {
    "slug": "field-meiho-tsuriboriya",
    "type": "spot",
    "primaryType": "fresh",
    "name": "明宝 つりぼりや",
    "prefecture": "岐阜県",
    "area": "岐阜県・郡上市",
    "terrain": "pond",
    "lat": 35.8559006,
    "lng": 137.0290378,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "郡上市明宝の庭園釣り堀。貸し道具を使う釣りと食事を組み合わせ、里山で過ごす計画を立てられます。",
    "googleQuery": "明宝 つりぼりや 岐阜県",
    "officialUrl": "https://m-i-service.net/tsuriboriya/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "郡上市明宝の庭園釣り堀。貸し道具を使う釣りと食事を組み合わせ、里山で過ごす計画を立てられます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "冬季休業。繁忙期と通常期で営業日が異なるため、来場前に営業カレンダーを確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://m-i-service.net/tsuriboriya/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98589"
      }
    ]
  },
  {
    "slug": "field-yattane-pond",
    "type": "spot",
    "primaryType": "fresh",
    "name": "やったね！釣り堀",
    "prefecture": "岐阜県",
    "area": "岐阜県・大垣市",
    "terrain": "pond",
    "lat": 35.371988,
    "lng": 136.5571307,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "釣り堀やつかみ取りとBBQを楽しむ体験施設。施設の貸し竿で釣り、食事までつなげる利用ができます。",
    "googleQuery": "やったね！釣り堀 岐阜県",
    "officialUrl": "https://hwju3.hp.peraichi.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "釣り堀やつかみ取りとBBQを楽しむ体験施設。施設の貸し竿で釣り、食事までつなげる利用ができます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "釣り具の持込みは不可。食材の準備とBBQ用具のレンタル範囲を予約時に確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://hwju3.hp.peraichi.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98586"
      }
    ]
  },
  {
    "slug": "field-nagaragawa-ayupark",
    "type": "spot",
    "primaryType": "fresh",
    "name": "清流長良川あゆパーク 釣り体験",
    "prefecture": "岐阜県",
    "area": "岐阜県・郡上市",
    "terrain": "pond",
    "lat": 35.9216779,
    "lng": 136.8322448,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "郡上市の川魚体験施設。アユのつかみ取りとマス釣りは別の体験なので、釣りを希望する場合はマス釣りを確認します。",
    "googleQuery": "清流長良川あゆパーク 釣り体験 岐阜県",
    "officialUrl": "https://ayupark.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "郡上市の川魚体験施設。アユのつかみ取りとマス釣りは別の体験なので、釣りを希望する場合はマス釣りを確認します。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "9月以降のマス釣り体験は土日祝の案内。名前だけでアユの友釣りが常時できる施設と思わない。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://ayupark.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98585"
      }
    ]
  },
  {
    "slug": "field-omi-amagonosato",
    "type": "spot",
    "primaryType": "fresh",
    "name": "近江あまごの里",
    "prefecture": "滋賀県",
    "area": "滋賀県・高島市",
    "terrain": "pond",
    "lat": 35.2778528,
    "lng": 135.9327462,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "高島市鹿ケ瀬の渓流魚の体験施設。釣りを中心に、釣った魚を調理して食べる体験を組み合わせられます。",
    "googleQuery": "近江あまごの里 滋賀県",
    "officialUrl": "https://oumiamago.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "高島市鹿ケ瀬の渓流魚の体験施設。釣りを中心に、釣った魚を調理して食べる体験を組み合わせられます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "魚のつかみ取りだけの利用は実施していない案内。平日と土日祝で営業が異なるため、体験内容と人数を予約時に伝える。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://oumiamago.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=102419"
      }
    ]
  },
  {
    "slug": "field-kurotaki-yugyo",
    "type": "spot",
    "primaryType": "fresh",
    "name": "黒滝遊漁場",
    "prefecture": "滋賀県",
    "area": "滋賀県・甲賀市",
    "terrain": "river",
    "lat": 34.9359056,
    "lng": 136.3488917,
    "fish": [
      "アマゴ",
      "イワナ",
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "土山漁協が案内する渓流の遊漁場。魚のつかみ取りと釣り、BBQの場所を分けて利用できます。",
    "googleQuery": "黒滝遊漁場 滋賀県",
    "officialUrl": "https://tsuchiyama-gyokyou.jimdofree.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "土山漁協が案内する渓流の遊漁場。魚のつかみ取りと釣り、BBQの場所を分けて利用できます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "浅い区画でも増水時は入らない。放流・利用区画・用具を管理者に確認してから釣る。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "amago",
      "iwana",
      "nijimasu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://tsuchiyama-gyokyou.jimdofree.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=102384"
      }
    ]
  },
  {
    "slug": "field-suikei-hera",
    "type": "spot",
    "primaryType": "fresh",
    "name": "へらぶな釣り水茎",
    "prefecture": "滋賀県",
    "area": "滋賀県・近江八幡市",
    "terrain": "pond",
    "lat": 35.1330535,
    "lng": 136.0470931,
    "fish": [
      "ヘラブナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "近江八幡のヘラブナ釣り池。管理者が日々の釣果やタナの傾向を発信しており、池の状況を確認して準備できます。",
    "googleQuery": "へらぶな釣り水茎 滋賀県",
    "officialUrl": "https://ameblo.jp/suikei1002/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "近江八幡のヘラブナ釣り池。管理者が日々の釣果やタナの傾向を発信しており、池の状況を確認して準備できます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "餌・竿長・釣り座の規則は現地で確認。釣果記事のタナを固定せず、その日の魚の反応で調整する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-facility-rental-check"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://ameblo.jp/suikei1002/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=102383"
      }
    ]
  },
  {
    "slug": "field-takashimanoizumi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "フィッシングパーク高島の泉",
    "prefecture": "滋賀県",
    "area": "滋賀県・高島市",
    "terrain": "pond",
    "lat": 35.3536965,
    "lng": 136.0501533,
    "fish": [],
    "methods": [
      "餌釣り",
      "ルアー"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "高島の湧水を使う釣り場。ルアーエリアと餌釣り・つかみ取りがあり、魚のサイズに合わせてコースを選べます。",
    "googleQuery": "フィッシングパーク高島の泉 滋賀県",
    "officialUrl": "https://www.takashimanoizumi.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "高島の湧水を使う釣り場。ルアーエリアと餌釣り・つかみ取りがあり、魚のサイズに合わせてコースを選べます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "予約不要の案内ですが、BBQ食材やペットなど持込み制限があります。利用前に施設規則を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
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
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.takashimanoizumi.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=60199"
      }
    ]
  },
  {
    "slug": "field-eigenji-greenland",
    "type": "spot",
    "primaryType": "fresh",
    "name": "岩魚の里 永源寺グリーンランド",
    "prefecture": "滋賀県",
    "area": "滋賀県・東近江市",
    "terrain": "river",
    "lat": 35.049465,
    "lng": 136.331248,
    "fish": [
      "イワナ",
      "アマゴ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "東近江の渓流釣り施設で、自然渓流と人工区画を選べます。イワナ・アマゴの釣りと炭火焼きを組み合わせられます。",
    "googleQuery": "岩魚の里 永源寺グリーンランド 滋賀県",
    "officialUrl": "https://eigenjigreenland.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "東近江の渓流釣り施設で、自然渓流と人工区画を選べます。イワナ・アマゴの釣りと炭火焼きを組み合わせられます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "川遊び・石投げ・ペット同伴は禁止。初心者は貸し竿と餌を相談し、足場に合う区画を選ぶ。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "iwana",
      "amago"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://eigenjigreenland.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=40398"
      }
    ]
  },
  {
    "slug": "field-nango-suisan",
    "type": "spot",
    "primaryType": "fresh",
    "name": "南郷水産センター 釣り場",
    "prefecture": "滋賀県",
    "area": "滋賀県・大津市",
    "terrain": "pond",
    "lat": 34.9393134,
    "lng": 135.9120897,
    "fish": [
      "コイ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "大津市の水産体験施設で、コイ釣りなど池ごとの体験を選べます。展示や魚とのふれあいと釣りの受付を区別して利用します。",
    "googleQuery": "南郷水産センター 釣り場 滋賀県",
    "officialUrl": "http://www.suisan-center.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "大津市の水産体験施設で、コイ釣りなど池ごとの体験を選べます。展示や魚とのふれあいと釣りの受付を区別して利用します。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "対象魚・用具・持ち帰り条件はコーナーで異なります。利用する池のルールを確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-facility-rental-check"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://www.suisan-center.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=25899"
      }
    ]
  },
  {
    "slug": "field-benkei-ike",
    "type": "spot",
    "primaryType": "fresh",
    "name": "つり池 弁慶",
    "prefecture": "京都府",
    "area": "京都府・京都市",
    "terrain": "pond",
    "lat": 35.0267979,
    "lng": 135.6969546,
    "fish": [
      "コイ",
      "ヘラブナ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "京都市の釣り池。手軽なコイ釣りと本格的なヘラブナ釣りで料金や道具の扱いが異なります。",
    "googleQuery": "つり池 弁慶 京都府",
    "officialUrl": "https://benkeiike.web.fc2.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "京都市の釣り池。手軽なコイ釣りと本格的なヘラブナ釣りで料金や道具の扱いが異なります。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "初回はコイ釣りかヘラブナ釣りかを受付で伝える。貸し道具と持込道具の条件を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-facility-rental-check"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://benkeiike.web.fc2.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98569"
      }
    ]
  },
  {
    "slug": "field-chiisana-tsuribori",
    "type": "spot",
    "primaryType": "fresh",
    "name": "小さな釣り堀屋",
    "prefecture": "大阪府",
    "area": "大阪府",
    "terrain": "pond",
    "lat": 34.6876953,
    "lng": 135.4604108,
    "fish": [
      "コイ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "大阪市此花区の室内釣り堀。竿・餌が用意され、天候を気にせず短い時間でもコイ釣りを体験できます。",
    "googleQuery": "小さな釣り堀屋 大阪府",
    "officialUrl": "https://tiisanaturibori.jimdofree.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "大阪市此花区の室内釣り堀。竿・餌が用意され、天候を気にせず短い時間でもコイ釣りを体験できます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "貸切時間を確認。車では近隣の有料駐車場を利用し、釣りと金魚すくいのコースを区別する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-fishing-rule-reading",
      "fishing-facility-rental-check"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://tiisanaturibori.jimdofree.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=101346"
      }
    ]
  },
  {
    "slug": "field-wasamata-keiryu",
    "type": "spot",
    "primaryType": "fresh",
    "name": "和佐又渓流釣り場",
    "prefecture": "奈良県",
    "area": "奈良県・吉野郡上北山村",
    "terrain": "river",
    "lat": 34.2186586,
    "lng": 135.99598,
    "fish": [
      "アマゴ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "3月〜9月。営業日・増水時の扱いは公式で確認",
    "beginner": true,
    "kids": true,
    "note": "上北山村の自然渓流を使った管理釣り場。放流する魚の量に合わせた利用で、貸し竿や餌も相談できます。",
    "googleQuery": "和佐又渓流釣り場 奈良県",
    "officialUrl": "https://r.goope.jp/wasamatakeiryu/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "上北山村の自然渓流を使った管理釣り場。放流する魚の量に合わせた利用で、貸し竿や餌も相談できます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "例年3月〜9月の案内。渓流の増水・道路状況と、営業期間の終わりを確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
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
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://r.goope.jp/wasamatakeiryu/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=115964"
      }
    ]
  },
  {
    "slug": "field-ikarinosato",
    "type": "spot",
    "primaryType": "fresh",
    "name": "井氷鹿の里・もりもり館",
    "prefecture": "奈良県",
    "area": "奈良県・吉野郡川上村",
    "terrain": "river",
    "lat": 34.327445,
    "lng": 136.0085337,
    "fish": [
      "アマゴ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "川上村の井光川でアマゴの放流釣りを楽しむ施設。釣りとつかみ取りは別の区画で行います。",
    "googleQuery": "井氷鹿の里・もりもり館 奈良県",
    "officialUrl": "https://g-tourism.jp/kanko/morimorikan/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "川上村の井光川でアマゴの放流釣りを楽しむ施設。釣りとつかみ取りは別の区画で行います。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "平日は不定休、冬季は要予約。放流量と人数を相談し、釣り針を使う区画に子どもが入らないよう見守る。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
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
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://g-tourism.jp/kanko/morimorikan/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98576"
      }
    ]
  },
  {
    "slug": "field-nakai-keikoku",
    "type": "spot",
    "primaryType": "fresh",
    "name": "中井渓谷自然塾",
    "prefecture": "奈良県",
    "area": "奈良県・吉野郡川上村",
    "terrain": "river",
    "lat": 34.3713226,
    "lng": 135.9539794,
    "fish": [
      "アマゴ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "川上村の渓流区画へ魚を放流して釣る施設。レンタル道具とBBQを組み合わせて利用できます。",
    "googleQuery": "中井渓谷自然塾 奈良県",
    "officialUrl": "https://g-tourism.jp/kanko/nakaikeikoku/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "川上村の渓流区画へ魚を放流して釣る施設。レンタル道具とBBQを組み合わせて利用できます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "12月〜2月は冬季休館。放流する魚と量を受付で確認し、支払い用の現金を準備する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
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
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://g-tourism.jp/kanko/nakaikeikoku/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98575"
      }
    ]
  },
  {
    "slug": "field-tsuburoko-pier",
    "type": "spot",
    "primaryType": "fresh",
    "name": "津風呂湖観光 釣り桟橋・貸しボート",
    "prefecture": "奈良県",
    "area": "奈良県・吉野郡吉野町",
    "terrain": "lake",
    "lat": 34.3982379,
    "lng": 135.8927096,
    "fish": [
      "ワカサギ",
      "ブラックバス"
    ],
    "methods": [
      "ワカサギ釣り",
      "バスのルアー釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "吉野町の湖で、釣り桟橋と貸しボートを利用する施設。ワカサギとバスでは道具・季節・利用方法が異なります。",
    "googleQuery": "津風呂湖観光 釣り桟橋・貸しボート 奈良県",
    "officialUrl": "http://tuburoko.net/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "吉野町の湖で、釣り桟橋と貸しボートを利用する施設。ワカサギとバスでは道具・季節・利用方法が異なります。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "ピンは管理施設の目安。湖岸全域の立入りを意味せず、桟橋・ドームの営業期と帰着時刻を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "map-pin-entrance",
      "map-offline-trip-notes"
    ],
    "methodSlugs": [
      "wakasagi"
    ],
    "fishSlugs": [
      "wakasagi"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://tuburoko.net/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=21444"
      }
    ]
  },
  {
    "slug": "field-omishima-fishing",
    "type": "spot",
    "primaryType": "facility",
    "name": "フィッシングパーク大三島",
    "prefecture": "愛媛県",
    "area": "愛媛県・今治市",
    "terrain": "pier",
    "lat": 34.270696,
    "lng": 133.0396164,
    "fish": [],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "大三島漁協が案内する釣り桟橋。入園時に受付を済ませ、海の状況に応じて釣り座と仕掛けを選びます。",
    "googleQuery": "フィッシングパーク大三島 愛媛県",
    "officialUrl": "http://jf-omishima.or.jp/publics/index/20/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "大三島漁協が案内する釣り桟橋。入園時に受付を済ませ、海の状況に応じて釣り座と仕掛けを選びます。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "定休日だけでなく臨時休業日を確認。釣り堀と桟橋では利用条件が異なるため、希望コースを伝える。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://jf-omishima.or.jp/publics/index/20/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=34084"
      }
    ]
  },
  {
    "slug": "field-gokase-yamame",
    "type": "spot",
    "primaryType": "fresh",
    "name": "五ヶ瀬 やまめの里",
    "prefecture": "宮崎県",
    "area": "宮崎県・西臼杵郡五ヶ瀬町",
    "terrain": "pond",
    "lat": 32.593659,
    "lng": 131.148747,
    "fish": [
      "ヤマメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "五ヶ瀬のやまめ養殖・滞在施設にある釣り場。貸し竿で釣った魚の腹出しや塩焼きも案内されています。",
    "googleQuery": "五ヶ瀬 やまめの里 宮崎県",
    "officialUrl": "http://www.yamame.co.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "五ヶ瀬のやまめ養殖・滞在施設にある釣り場。貸し竿で釣った魚の腹出しや塩焼きも案内されています。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "持ち帰りの重量上限と超過時の精算を釣る前に確認。料理旅館の予約と釣り体験を区別する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
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
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://www.yamame.co.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=84647"
      }
    ]
  },
  {
    "slug": "field-funanokuchi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "舟の口養魚場",
    "prefecture": "熊本県",
    "area": "熊本県・上益城郡山都町",
    "terrain": "pond",
    "lat": 32.7083079,
    "lng": 131.1782997,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "山都町の湧水を使ったマス釣り堀。貸し竿と餌があり、魚の持ち帰りや食事を組み合わせられます。",
    "googleQuery": "舟の口養魚場 熊本県",
    "officialUrl": "https://www.funanokuchiyougyojou.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "山都町の湧水を使ったマス釣り堀。貸し竿と餌があり、魚の持ち帰りや食事を組み合わせられます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "持ち帰りは重さで精算。帰路が長い場合は氷とクーラーを準備し、釣る量を決めておく。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "managed-bait-pond-family",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.funanokuchiyougyojou.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=84650"
      }
    ]
  },
  {
    "slug": "field-yunoko-fishing",
    "type": "spot",
    "primaryType": "facility",
    "name": "湯の児フィッシングパーク",
    "prefecture": "熊本県",
    "area": "熊本県・水俣市",
    "terrain": "pier",
    "lat": 32.2337527,
    "lng": 130.4109872,
    "fish": [
      "スズキ",
      "マアジ",
      "クロダイ",
      "メバル"
    ],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "水俣・湯の児温泉の海岸から伸びる釣り桟橋。道具や救命胴衣のレンタル、餌の販売が案内されています。",
    "googleQuery": "湯の児フィッシングパーク 熊本県",
    "officialUrl": "https://www.go-minamata.jp/infodtl.html?ds=2024031506062430465085110012",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "水俣・湯の児温泉の海岸から伸びる釣り桟橋。道具や救命胴衣のレンタル、餌の販売が案内されています。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "12歳未満は保護者または引率者の同伴が必要。子ども用救命胴衣のサイズと営業日を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [
      "suzuki",
      "aji",
      "chinu",
      "mebaru"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.go-minamata.jp/infodtl.html?ds=2024031506062430465085110012"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=38277"
      }
    ]
  },
  {
    "slug": "field-kigotaki",
    "type": "spot",
    "primaryType": "fresh",
    "name": "木郷滝自然つりセンター",
    "prefecture": "熊本県",
    "area": "熊本県・阿蘇郡高森町",
    "terrain": "river",
    "lat": 32.8053833,
    "lng": 131.1957612,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "高森町の渓谷を使う釣り場。魚を狙う区画と、食事処への移動を分けて計画すると迷いにくくなります。",
    "googleQuery": "木郷滝自然つりセンター 熊本県",
    "officialUrl": "https://www.kigo.co.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "高森町の渓谷を使う釣り場。魚を狙う区画と、食事処への移動を分けて計画すると迷いにくくなります。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "川魚料理うまやは別の場所。釣り場を目的地に設定し、冬季の不定休と雨後の増水を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.kigo.co.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=24860"
      }
    ]
  },
  {
    "slug": "field-ukiha-seseragi",
    "type": "spot",
    "primaryType": "fresh",
    "name": "ヤマメ釣り堀 細流",
    "prefecture": "福岡県",
    "area": "福岡県・うきは市",
    "terrain": "pond",
    "lat": 33.2677087,
    "lng": 130.8443042,
    "fish": [
      "ヤマメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "うきは市田篭のヤマメ釣り堀。山間の水辺で釣りとつかみ取りを選んで楽しめます。",
    "googleQuery": "ヤマメ釣り堀 細流 福岡県",
    "officialUrl": "https://seseragi.jp/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "うきは市田篭のヤマメ釣り堀。山間の水辺で釣りとつかみ取りを選んで楽しめます。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "狭い山道のすれ違いに余裕を持つ。釣りと食事の利用条件を確認し、調理時間を残す。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
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
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://seseragi.jp/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=30833"
      }
    ]
  },
  {
    "slug": "field-fukuma-kaihin",
    "type": "spot",
    "primaryType": "park",
    "name": "福間漁港海浜公園",
    "prefecture": "福岡県",
    "area": "福岡県・福津市",
    "terrain": "park",
    "lat": 33.7640953,
    "lng": 130.4692507,
    "fish": [],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "福津市が案内する海浜公園の南防波堤。港全域の釣りを案内する地点ではなく、許可範囲を確認して利用します。",
    "googleQuery": "福間漁港海浜公園 福岡県",
    "officialUrl": "https://www.city.fukutsu.lg.jp/shisei/shisetsu/4/4146.html",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "福津市が案内する海浜公園の南防波堤。港全域の釣りを案内する地点ではなく、許可範囲を確認して利用します。",
    "bestFor": [
      "利用範囲を確認して楽しむ海釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "南防波堤の港内側は釣り禁止。海側でも現地表示を確認し、遊歩道の通行人に仕掛けを近づけない。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "map-pin-entrance",
      "map-offline-trip-notes"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://www.city.fukutsu.lg.jp/shisei/shisetsu/4/4146.html"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=21373"
      }
    ]
  },
  {
    "slug": "field-uming-oshima",
    "type": "spot",
    "primaryType": "facility",
    "name": "うみんぐ大島",
    "prefecture": "福岡県",
    "area": "福岡県・宗像市",
    "terrain": "pier",
    "lat": 33.8939561,
    "lng": 130.4322541,
    "fish": [],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "宗像・大島の海洋体験施設。釣り施設と島への交通を合わせて計画し、帰りの船まで余裕を持って利用します。",
    "googleQuery": "うみんぐ大島 福岡県",
    "officialUrl": "https://umi-ing.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "宗像・大島の海洋体験施設。釣り施設と島への交通を合わせて計画し、帰りの船まで余裕を持って利用します。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "フェリー等の時刻変更と、釣り堀・防波堤の利用条件を確認。大島の港全域が釣り可能という意味ではありません。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://umi-ing.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=21289"
      }
    ]
  },
  {
    "slug": "field-mukae-pearl-raft",
    "type": "spot",
    "primaryType": "facility",
    "name": "迎パールマリン 釣りイカダ",
    "prefecture": "長崎県",
    "area": "長崎県・佐世保市",
    "terrain": "raft",
    "lat": 33.3003953,
    "lng": 129.5981144,
    "fish": [],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "佐世保の移動式イカダを利用する釣り施設。チヌ釣りなど当日の釣り物に合わせた案内を確認できます。",
    "googleQuery": "迎パールマリン 釣りイカダ 長崎県",
    "officialUrl": "https://reonreon.ti-da.net/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "佐世保の移動式イカダを利用する釣り施設。チヌ釣りなど当日の釣り物に合わせた案内を確認できます。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "ピンは事業者の受付側の目安。移動式イカダの場所を示すものではなく、集合港と乗船方法を予約時に確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://reonreon.ti-da.net/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=32088"
      }
    ]
  },
  {
    "slug": "field-okuhanase",
    "type": "spot",
    "primaryType": "fresh",
    "name": "奥花瀬ニジマス釣場",
    "prefecture": "鹿児島県",
    "area": "鹿児島県・肝属郡錦江町",
    "terrain": "river",
    "lat": 31.173891,
    "lng": 130.900576,
    "fish": [
      "ニジマス"
    ],
    "methods": [
      "餌釣り"
    ],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": true,
    "kids": true,
    "note": "錦江町の花瀬の水辺にあるニジマス釣り場。釣った魚の塩焼きまで希望する場合は食事の営業も確認します。",
    "googleQuery": "奥花瀬ニジマス釣場 鹿児島県",
    "officialUrl": "https://okuhanaze.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "錦江町の花瀬の水辺にあるニジマス釣り場。釣った魚の塩焼きまで希望する場合は食事の営業も確認します。",
    "bestFor": [
      "区画を確認して楽しむ淡水釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "月ごとに休業案内があります。釣り場と農園レストランの営業を分けて確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "stream-managed-bait",
      "managed-fishing-rule-reading"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "fishSlugs": [
      "nijimasu"
    ],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "https://okuhanaze.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=84646"
      }
    ]
  },
  {
    "slug": "field-uken-ikada",
    "type": "spot",
    "primaryType": "facility",
    "name": "釣りイカダ宇検",
    "prefecture": "鹿児島県",
    "area": "鹿児島県・大島郡宇検村",
    "terrain": "raft",
    "lat": 28.2953085,
    "lng": 129.2288768,
    "fish": [],
    "methods": [],
    "season": "利用期間・臨時休業は公式案内で確認",
    "beginner": false,
    "kids": false,
    "note": "奄美大島・宇検村で渡しを利用する釣りイカダ。複数の筏を一つの施設として案内し、使用する場所は運営者に確認します。",
    "googleQuery": "釣りイカダ宇検 鹿児島県",
    "officialUrl": "http://www.tsuriikada-uken.com/",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設・受付周辺を示す参考ピンです。釣り座・乗船場所は公式案内で確認してください。周辺全域の釣り許可を示すものではありません。",
    "access": "公式のアクセス案内で入口・受付を確認。予約や宿泊者限定などの条件がある場合は、利用手続き後に入場します。",
    "field": "奄美大島・宇検村で渡しを利用する釣りイカダ。複数の筏を一つの施設として案内し、使用する場所は運営者に確認します。",
    "bestFor": [
      "管理者の案内を確認して利用する釣り"
    ],
    "timing": "季節・天候・貸切で利用が変わります。釣りの受付終了と帰路の交通を確認して計画してください。",
    "tips": [
      "参考ピンは受付・出発地側。救命胴衣と貸し竿を相談し、風や波による中止条件を確認する。"
    ],
    "caution": [
      "現地の禁止表示・管理者の指示を優先し、閉鎖区画や作業区域には入らない。",
      "水辺の足場と天候を確認。釣り針や仕掛けを周囲の人に近づけない。"
    ],
    "guideSlugs": [
      "fishing-facility-rental-check",
      "map-pin-entrance"
    ],
    "methodSlugs": [],
    "fishSlugs": [],
    "sources": [
      {
        "label": "運営者・自治体等の案内：利用条件",
        "url": "http://www.tsuriikada-uken.com/"
      },
      {
        "label": "所在地・施設名の照合資料",
        "url": "https://heat-hayabusa.com/activityspot/?sid=84644"
      }
    ]
  }
];
