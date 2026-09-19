import type {FishingMapEntry} from './fishing-map-data';

// Boarding locations checked against operator access information on 2026-09-19.
export const septemberBoatEntries: FishingMapEntry[] = [
  {
    "slug": "umibozu-five-unami",
    "type": "boat",
    "name": "海坊主Ⅴ",
    "area": "氷見市・宇波漁港",
    "prefecture": "富山県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "宇波漁港",
    "officialUrl": "https://www.umibouzu-5.com/company/",
    "lat": 36.912371,
    "lng": 137.020687,
    "fish": [
      "アオリイカ",
      "ヤリイカ",
      "マダイ",
      "マアジ",
      "アマダイ",
      "メダイ"
    ],
    "methodSlugs": [
      "tiprun",
      "ika-sutte",
      "amadai-tenbin",
      "medai-komase"
    ],
    "methods": [
      "ティップラン",
      "船イカヅノ釣り",
      "アマダイの天秤釣り",
      "メダイの天秤コマセ釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "parking": true,
    "note": "宇波漁港から富山湾へ出る乗合・チャーター船。秋のアオリイカからヤリイカ、マダイ、アマダイなどへ季節で釣り物を替えられ、初めての船釣りも相談できます。",
    "googleQuery": "海坊主Ⅴ 宇波漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.umibouzu-5.com/company/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.912371,137.020687"
      }
    ],
    "access": "宇波漁協を目印に港の突き当たり右側へ。漁協裏の案内された空きスペースを利用し、白線の漁協専用枠には駐車しない。",
    "field": "宇波漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ティップランの船釣り",
      "船イカヅノ釣りの船釣り",
      "アマダイの天秤釣りの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "アオリイカ便はティップランのエギ重量と予備の用意を予約時に確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "yueimaru-wakayama",
    "type": "boat",
    "name": "勇栄丸",
    "area": "和歌山市・紀の川河口",
    "prefecture": "和歌山県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "和歌山港",
    "officialUrl": "https://wakayama.tsurisoku.com/yueimaru/access/",
    "lat": 34.225916,
    "lng": 135.155198,
    "fish": [
      "ブリ",
      "マダイ",
      "タチウオ"
    ],
    "methodSlugs": [
      "jigging",
      "tai-rubber",
      "tachiuo-tenya"
    ],
    "methods": [
      "ジギング",
      "タイラバ",
      "タチウオテンヤ"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "parking": true,
    "toilet": true,
    "note": "和歌山港から紀北の船釣りへ出る船宿。ジギングなどの募集内容を出船カレンダーで選び、必要な竿と仕掛けを揃えて乗船します。船には洋式トイレと竿受けがあります。",
    "googleQuery": "勇栄丸 和歌山港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://wakayama.tsurisoku.com/yueimaru/access/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=34.225916,135.155198"
      }
    ],
    "access": "公式アクセス図の船着き場へ。入口のカード式ゲートは船長が開けるため、到着時に連絡する。駐車台数が限られるのでグループは乗り合わせる。",
    "field": "和歌山港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ジギングの船釣り",
      "タイラバの船釣り",
      "タチウオテンヤの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "貸出竿受けのクランプ適合と、当日の釣り物に合うタックルを事前に確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "mcl-wakayama-minato",
    "type": "boat",
    "name": "MCL（Marin Club Lotus）",
    "area": "和歌山市・紀の川河口",
    "prefecture": "和歌山県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "湊第一小型船舶係留施設",
    "officialUrl": "https://www.mclosaka.com/お問い合わせ",
    "lat": 34.2262862,
    "lng": 135.1558719,
    "fish": [
      "マダイ",
      "ブリ",
      "タチウオ",
      "マアジ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "otoshikomi",
      "nomase"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "落とし込み釣り",
      "ノマセ釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "parking": true,
    "note": "湊第一小型船舶係留施設を乗船場所とする遊漁船。タイラバ・ジギング・落とし込みなど、紀北の釣り物に合わせて便を選びます。公式サイトでは餌釣り便とタイラバ便の予約導線も分かれています。",
    "googleQuery": "MCL（Marin Club Lotus） 湊第一小型船舶係留施設",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.mclosaka.com/お問い合わせ"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps/search/?api=1&query=34.2262862,135.1558719"
      }
    ],
    "access": "和歌山県湊第一小型船舶係留施設へ。荷物を降ろした後の駐車位置は船長の案内に従い、他船の利用場所をふさがない。",
    "field": "湊第一小型船舶係留施設を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "ジギングの船釣り",
      "落とし込み釣りの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "予約する便名を確認し、タイラバと餌釣りの仕掛けを取り違えないように準備する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "retackle-akashi",
    "type": "boat",
    "name": "リタックル",
    "area": "明石市・明石港",
    "prefecture": "兵庫県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "明石港",
    "officialUrl": "https://ameblo.jp/akashiretackle/",
    "lat": 34.64207,
    "lng": 134.993621,
    "fish": [
      "マダイ",
      "マダコ",
      "アオリイカ",
      "ブリ",
      "カサゴ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "tako-egi",
      "tiprun",
      "jigging",
      "douzuki"
    ],
    "methods": [
      "タイラバ",
      "タコエギ",
      "ティップラン",
      "ジギング",
      "胴突き釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "parking": true,
    "note": "明石港を拠点に、タイラバ、ジギング、タコ、アオリイカなどの便を組む釣り船。朝便・昼便などがあるため、釣り物だけでなく出船する便を選んで予約します。",
    "googleQuery": "リタックル 明石港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://ameblo.jp/akashiretackle/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps/search/?api=1&query=34.64207,134.993621"
      }
    ],
    "access": "地図は明石港側の船の位置。街中の釣具買取店舗とは別です。受付・集合場所は予約案内で確認し、直接船へ向かう前に指定場所へ集合する。",
    "field": "明石港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "タコエギの船釣り",
      "ティップランの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "明石海峡は潮が速いため、ジグ・オモリの重さは予約便の指定を確認し、軽いものだけで揃えない。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "daiyuumaru-suma",
    "type": "boat",
    "name": "大雄丸（須磨）",
    "area": "神戸市須磨区・明石沖",
    "prefecture": "兵庫県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "須磨",
    "officialUrl": "https://daiyuumaru.com/reserve.html",
    "lat": 34.6419773,
    "lng": 135.1346553,
    "fish": [
      "マダイ",
      "ブリ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging"
    ],
    "methods": [
      "タイラバ",
      "ジギング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "parking": true,
    "note": "神戸・明石沖のタイラバとジギングを案内する須磨発の乗合船。明石を釣る便でも出発地点は明石港ではありません。初回はレンタルやタックルの相談を予約時に済ませると準備しやすくなります。",
    "googleQuery": "大雄丸（須磨） 須磨",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://daiyuumaru.com/reserve.html"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps/search/?api=1&query=34.6419773,135.1346553"
      }
    ],
    "access": "須磨ヨットハーバー駐車場内に集合し、案内に沿って乗船場へ徒歩移動。集合時間は前日に船長へ確認する。地図は乗船場側です。",
    "field": "須磨を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "タイラバ便かジギング便かを確認し、潮に対応する重さを船長に相談して持参する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "rdr-sakata",
    "type": "boat",
    "name": "RDR（酒田）",
    "area": "酒田市・酒田港",
    "prefecture": "山形県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "酒田港",
    "officialUrl": "https://www.rdr-sakata.com/access/",
    "lat": 38.9293625,
    "lng": 139.8182777,
    "fish": [
      "マダイ",
      "アマダイ",
      "ケンサキイカ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "amadai-tenbin",
      "ika-metal"
    ],
    "methods": [
      "タイラバ",
      "アマダイの天秤釣り",
      "イカメタル"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "note": "酒田近海のタイラバやアマダイ、飛島方面の根魚、夜のイカを案内する遊漁船。初めての人や家族の乗船相談も受け付けており、狙いと日程を合わせて便を選べます。",
    "googleQuery": "RDR（酒田） 酒田港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.rdr-sakata.com/access/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=38.9293625,139.8182777"
      }
    ],
    "access": "酒田港大浜2丁目の係留岸壁へ。公式アクセス図で船の位置を確認し、当日の集合案内に合わせて訪れる。",
    "field": "酒田港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "アマダイの天秤釣りの船釣り",
      "イカメタルの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "近海便と飛島方面の便では準備する重さが異なるため、予約時に狙いと仕掛けを確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "empress-sakata",
    "type": "boat",
    "name": "EMPRESS（酒田）",
    "area": "酒田市・酒田港",
    "prefecture": "山形県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "酒田港",
    "officialUrl": "https://www.sakata-empress.com/access/",
    "lat": 38.9293161,
    "lng": 139.8182441,
    "fish": [
      "マダイ",
      "アカムツ",
      "マアジ",
      "ケンサキイカ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "deepsea-douzuki",
      "ika-metal"
    ],
    "methods": [
      "タイラバ",
      "中深場・深場の胴突き",
      "イカメタル"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "酒田港からタイラバ五目、中深海のアカムツ、夜焚きのバチコンやイカメタルへ出る船。釣り物ごとに水深や必要な道具が大きく変わるので、希望の便の装備を確認して準備します。",
    "googleQuery": "EMPRESS（酒田） 酒田港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.sakata-empress.com/access/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=38.9293161,139.8182441"
      }
    ],
    "access": "酒田港大浜2丁目の係留場所へ。近くに他船も並ぶため、船名と予約した便を照合して乗船する。",
    "field": "酒田港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "中深場・深場の胴突きの船釣り",
      "イカメタルの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "中深海便では電動リール・仕掛け・オモリの指定を確認し、夜焚き便と道具を分ける。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "ogakimaru-mikuni",
    "type": "boat",
    "name": "一海丸",
    "area": "坂井市三国町・福井新港",
    "prefecture": "福井県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "福井新港",
    "officialUrl": "https://ogakimaru.jimdofree.com/",
    "lat": 36.203365,
    "lng": 136.129424,
    "fish": [
      "マダイ",
      "ブリ",
      "ヒラマサ",
      "ケンサキイカ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "ika-metal"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "イカメタル"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "toilet": true,
    "note": "福井新港を出て三国沖・鷹巣沖へ向かう遊漁船。ジギング、タイラバ、イカメタルなどのプランがあり、初心者や家族連れの相談にも対応しています。個室トイレを備えます。",
    "googleQuery": "一海丸 福井新港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://ogakimaru.jimdofree.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.203365,136.129424"
      }
    ],
    "access": "公式サイトの出航場所の地図で福井新港内の船着き場を確認。事務局の住所と出航場所は区別する。",
    "field": "福井新港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "ジギングの船釣り",
      "イカメタルの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "三国沖・鷹巣沖の便ごとにジグやメタルの号数を合わせ、予備も用意する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "aigis-uoze",
    "type": "boat",
    "name": "Aigis（エイジス）",
    "area": "松江市・魚瀬漁港",
    "prefecture": "島根県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "魚瀬漁港",
    "officialUrl": "https://fishing-aigis.com/",
    "lat": 35.5189386,
    "lng": 132.9207844,
    "fish": [
      "ケンサキイカ",
      "ブリ",
      "ヒラマサ"
    ],
    "methodSlugs": [
      "ika-metal",
      "jigging",
      "deepsea-douzuki"
    ],
    "methods": [
      "イカメタル",
      "ジギング",
      "中深場・深場の胴突き"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "魚瀬漁港を拠点に、山陰の近海から隠岐方面、中深海、イカメタルまで案内する船。以前の船宿一覧にある鹿島マリーナではなく、更新された公式案内の乗船港を確認して向かいます。",
    "googleQuery": "Aigis（エイジス） 魚瀬漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://fishing-aigis.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=35.5189386,132.9207844"
      }
    ],
    "access": "魚瀬漁港の公式地図で示された岸壁へ。レンタルタックルを使う場合は予約時に申し込む。",
    "field": "魚瀬漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "イカメタルの船釣り",
      "ジギングの船釣り",
      "中深場・深場の胴突きの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "近海・中深海・イカメタルでタックルが異なるため、プラン名と必要な仕掛けを先に決める。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "kaisei-naruto",
    "type": "boat",
    "name": "海誠（鳴門）",
    "area": "鳴門市・亀浦北港",
    "prefecture": "徳島県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "亀浦北港",
    "officialUrl": "http://narutokaisei.com/gaiyo.html",
    "lat": 34.2350574,
    "lng": 134.6371656,
    "fish": [
      "マダイ",
      "ブリ",
      "タチウオ",
      "メバル"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "tachiuo-tenya",
      "douzuki"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "タチウオテンヤ",
      "胴突き釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "parking": true,
    "toilet": true,
    "note": "鳴門海峡でタイラバ、青物ジギング、タチウオ、メバルなどを案内する釣り船。個室トイレがあり、初心者の乗船相談にも対応。潮に合わせて同じ釣り物でも必要な重さが変わります。",
    "googleQuery": "海誠（鳴門） 亀浦北港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://narutokaisei.com/gaiyo.html"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=34.2350574,134.6371656"
      }
    ],
    "access": "亀浦北港の桟橋へ。道路上で荷下ろしせず指定の駐車区画へ入り、1〜3月はワカメ作業のため駐車場所が変わる点に注意。",
    "field": "亀浦北港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "ジギングの船釣り",
      "タチウオテンヤの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "鳴門の速い潮では底を取り直せる重さを優先し、船長の指示棚と仕掛け重量を守る。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "kohomaru-misumi",
    "type": "boat",
    "name": "幸豊丸（三隅）",
    "area": "浜田市三隅町・三隅港",
    "prefecture": "島根県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "三隅港",
    "officialUrl": "https://www.kouhoumaru.com/",
    "lat": 34.7814722,
    "lng": 131.9274722,
    "fish": [
      "ケンサキイカ",
      "アオリイカ",
      "ブリ",
      "ヒラマサ"
    ],
    "methodSlugs": [
      "ika-metal",
      "tiprun",
      "jigging",
      "nomase",
      "casting"
    ],
    "methods": [
      "イカメタル",
      "ティップラン",
      "ジギング",
      "ノマセ釣り",
      "キャスティング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "parking": true,
    "toilet": true,
    "note": "三隅港から山陰の海へ出る遊漁船。イカ釣り、ジギング、泳がせ、ティップランなどに対応します。浜田港と書かれた古い一覧ではなく、現在の三隅港の乗船案内を利用してください。",
    "googleQuery": "幸豊丸（三隅） 三隅港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.kouhoumaru.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=34.7814722,131.9274722"
      }
    ],
    "access": "公式サイトの乗船案内にある三隅港の船着き場へ。駐車場と水洗トイレあり。氷や仕掛けの用意は予約時に確認する。",
    "field": "三隅港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "イカメタルの船釣り",
      "ティップランの船釣り",
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "夜イカ・青物・アオリイカでは釣り方が異なるので、当日の便に合う道具を予約時に相談する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "blackfin-noshiro",
    "type": "boat",
    "name": "ブラックフィン",
    "area": "能代市・能代港",
    "prefecture": "秋田県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "能代港大森山",
    "officialUrl": "https://superblackfin.com/",
    "lat": 40.198611,
    "lng": 139.999472,
    "fish": [
      "ブリ",
      "マダイ"
    ],
    "methodSlugs": [
      "jigging",
      "tai-rubber"
    ],
    "methods": [
      "ジギング",
      "タイラバ"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "能代港大森山から出船する遊漁船。ジギングとタイラバの乗合募集があり、能代沖の青物やマダイを狙う便を相談できます。",
    "googleQuery": "ブラックフィン 能代港大森山",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://superblackfin.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=40.198611,139.999472"
      }
    ],
    "access": "公式の「船乗り場」は大森山の岸壁。西通町の事務所とは場所が異なるため、船長の集合案内と照合する。",
    "field": "能代港大森山を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ジギングの船釣り",
      "タイラバの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "久六島方面など遠い海域では帰港まで長くなるので、飲料と防寒・防水着を十分に準備する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "fukukaimaru-mikuni",
    "type": "boat",
    "name": "第十八福海丸",
    "area": "坂井市・福井港",
    "prefecture": "福井県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "福井港九頭竜川ボートパーク",
    "officialUrl": "https://zekkouchou.com/fukukai/",
    "lat": 36.216528,
    "lng": 136.134639,
    "fish": [
      "マダイ",
      "ケンサキイカ",
      "ヒラマサ",
      "マアジ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "ika-metal",
      "tiprun"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "イカメタル",
      "ティップラン"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "九頭竜川河口のボートパークから三国沖・鷹巣沖へ。タイラバやジギング、夜のイカメタルなど、季節と狙いに合わせた釣りを案内しています。",
    "googleQuery": "第十八福海丸 福井港九頭竜川ボートパーク",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://zekkouchou.com/fukukai/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.216528,136.134639"
      }
    ],
    "access": "三国町新保のボートパーク内、公式地図の係留桟橋へ。港の管理区画に入るため、予約時に集合方法を確認する。",
    "field": "福井港九頭竜川ボートパークを出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "ジギングの船釣り",
      "イカメタルの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "マダイとイカでは仕掛けと時間帯が変わる。予約した便に合う重さとレンタルの有無を確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "starline-sanban",
    "type": "boat",
    "name": "STAR LINE（三蟠港）",
    "area": "岡山市・児島湾",
    "prefecture": "岡山県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "三蟠港",
    "officialUrl": "https://yuugyo-starline.amebaownd.com/",
    "lat": 34.60268,
    "lng": 133.97487,
    "fish": [
      "マダイ",
      "カサゴ",
      "スズキ",
      "ヒラメ",
      "マダコ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "hitotsu-tenya",
      "douzuki",
      "seabass-lure",
      "tako-egi"
    ],
    "methods": [
      "タイラバ",
      "ひとつテンヤ",
      "胴突き釣り",
      "シーバスルアー",
      "タコエギ"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "parking": true,
    "toilet": true,
    "note": "三蟠港発の瀬戸内乗合船。タイラバ、ひとつテンヤ、カサゴ便のほか、児島湾のボートシーバスや船からのヒラメルアーも案内しています。",
    "googleQuery": "STAR LINE（三蟠港） 三蟠港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://yuugyo-starline.amebaownd.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=34.60268,133.97487"
      }
    ],
    "access": "基本の出船場所は三蟠港の岸壁。半夜便は宇野港になる場合があるため、予約した便の集合港を確認する。",
    "field": "三蟠港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "ひとつテンヤの船釣り",
      "胴突き釣りの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "初めてなら対象魚を一つに絞ってレンタルを相談。マダコ便は岡山県側の案内に従い、海域のルールを守る。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "koimaru-sukumo",
    "type": "boat",
    "name": "恋丸",
    "area": "宿毛市・宿毛湾",
    "prefecture": "高知県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "宿毛港丸島",
    "officialUrl": "https://koimaru-fishing.com/",
    "lat": 32.92323,
    "lng": 132.69398,
    "fish": [
      "カンパチ",
      "マハタ",
      "マダイ",
      "アオリイカ",
      "ケンサキイカ"
    ],
    "methodSlugs": [
      "nomase",
      "jigging",
      "tai-rubber",
      "tiprun",
      "ika-metal"
    ],
    "methods": [
      "ノマセ釣り",
      "ジギング",
      "タイラバ",
      "ティップラン",
      "イカメタル"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "parking": true,
    "toilet": true,
    "note": "宿毛湾から柏島・沖ノ島、六ノ瀬方面へ案内する乗合船。泳がせの大物狙いからタイラバ、ティップラン、イカメタルまで便を選べます。",
    "googleQuery": "恋丸 宿毛港丸島",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://koimaru-fishing.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=32.92323,132.69398"
      }
    ],
    "access": "宿毛市丸島の公式乗船地点へ。無料の駐車スペースがあり、岸壁で集合して乗船する。",
    "field": "宿毛港丸島を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ノマセ釣りの船釣り",
      "ジギングの船釣り",
      "タイラバの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "大物泳がせと湾内タイラバでは道具が大きく異なる。海域と対象魚を伝え、電動リールや餌の手配まで相談する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "katsumaru-shioya",
    "type": "boat",
    "name": "勝丸（塩屋港）",
    "area": "加賀市・塩屋港",
    "prefecture": "石川県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "塩屋港",
    "officialUrl": "http://www2.kagacable.ne.jp/~katumaru11/",
    "lat": 36.294489,
    "lng": 136.248228,
    "fish": [
      "マダイ",
      "ヒラマサ",
      "マアジ",
      "ケンサキイカ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "jigging",
      "otoshikomi",
      "ika-metal"
    ],
    "methods": [
      "ジギング",
      "落とし込み釣り",
      "イカメタル"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "note": "加賀の塩屋港から出る釣り船。ジギング、たて釣り、イカメタルのほか餌五目を受け付けており、初心者は道具や餌の準備も相談できます。",
    "googleQuery": "勝丸（塩屋港） 塩屋港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://www2.kagacable.ne.jp/~katumaru11/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.294489,136.248228"
      }
    ],
    "access": "塩屋港の川沿いにある公式アクセス図の乗船場所へ。北陸道加賀ICから港へ向かい、集合は予約時の案内に従う。",
    "field": "塩屋港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ジギングの船釣り",
      "落とし込み釣りの船釣り",
      "イカメタルの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "出船前日に最終確認の連絡が必要。ジグや仕掛けの有料準備を頼む場合も事前に伝える。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "jerk-fukui",
    "type": "boat",
    "name": "JERK",
    "area": "坂井市・福井新港",
    "prefecture": "福井県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "福井新港",
    "officialUrl": "http://cfo-jerk.com/",
    "lat": 36.203525,
    "lng": 136.129189,
    "fish": [
      "ブリ",
      "ヒラマサ"
    ],
    "methodSlugs": [
      "jigging"
    ],
    "methods": [
      "ジギング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "福井新港を拠点とするジギング専用船。三国沖や玄達瀬方面の青物を狙い、潮と水深に合わせてジグを動かす釣りを楽しめます。",
    "googleQuery": "JERK 福井新港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://cfo-jerk.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.203525,136.129189"
      }
    ],
    "access": "福井新港の公式アクセス図にある集合岸壁へ。工業港の立入禁止区画へ進まず、案内された経路で入る。",
    "field": "福井新港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "速い潮に備えてジグ重量を複数用意し、当日の指示に合わせて底を取れる重さに替える。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "sunline-sakaiminato",
    "type": "boat",
    "name": "SUNLINE",
    "area": "境港市・中野港",
    "prefecture": "鳥取県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "中野港",
    "officialUrl": "https://www.sunline-soj.com/",
    "lat": 35.5351317,
    "lng": 133.2472817,
    "fish": [
      "ケンサキイカ",
      "ブリ"
    ],
    "methodSlugs": [
      "ika-metal",
      "jigging"
    ],
    "methods": [
      "イカメタル",
      "ジギング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "境港の中野港から出船し、山陰の白イカとジギングを案内する遊漁船。夜のイカ釣りと日中のルアー便を目的に合わせて選べます。",
    "googleQuery": "SUNLINE 中野港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.sunline-soj.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=35.5351317,133.2472817"
      }
    ],
    "access": "昭和町の中野港、船が並ぶ係留岸壁へ。公式の地図と当日の集合案内を確認し、漁業車両の通路を空ける。",
    "field": "中野港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "イカメタルの船釣り",
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "白イカ便では指定されたオモリ号数をそろえ、夜に冷えない服装とライトを用意する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "zeel2-daimon",
    "type": "boat",
    "name": "ZEELⅡ",
    "area": "福山市・大門港",
    "prefecture": "広島県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "大門港",
    "officialUrl": "http://www.zeel2.com/",
    "lat": 34.4857898,
    "lng": 133.444014,
    "fish": [
      "マダイ",
      "ブリ",
      "タチウオ",
      "メバル",
      "アオリイカ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "tiprun",
      "mebaring"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "ティップラン",
      "メバリング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "大門港を拠点とするルアーガイド船。タイラバ、青物のジギング、メバリングやエギングなど、福山沖を中心に季節のターゲットを案内します。",
    "googleQuery": "ZEELⅡ 大門港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://www.zeel2.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=34.4857898,133.444014"
      }
    ],
    "access": "公式アクセス図にある大門港の係留岸壁へ。乗船前日に集合時刻を確認する。",
    "field": "大門港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "ジギングの船釣り",
      "ティップランの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "遠征のタチウオやメバル便は帰港が遅くなることがあるため、午後の予定に余裕を持たせる。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "shojinmaru-akita",
    "type": "boat",
    "name": "第三勝仁丸",
    "area": "秋田市・秋田港",
    "prefecture": "秋田県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "秋田港土崎",
    "officialUrl": "https://shojinmaru.com/",
    "lat": 39.7489092,
    "lng": 140.0650737,
    "fish": [
      "マアジ",
      "シロギス",
      "マダイ",
      "アマダイ",
      "マダラ",
      "ウスメバル"
    ],
    "methodSlugs": [
      "boat-kisu",
      "amadai-tenbin",
      "deepsea-douzuki"
    ],
    "methods": [
      "船キス",
      "アマダイの天秤釣り",
      "中深場・深場の胴突き"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "秋田港から港周辺、近場、深場、飛島方面へ出船。アジやキスの身近な釣りからアマダイ、深場のマダラ・ウスメバルまで、狙う海域ごとに便を選べます。",
    "googleQuery": "第三勝仁丸 秋田港土崎",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://shojinmaru.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=39.7489092,140.0650737"
      }
    ],
    "access": "土崎港西の船着き岸壁を表示。公式の乗船案内と予約便の集合位置を確認して乗船する。",
    "field": "秋田港土崎を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "船キスの船釣り",
      "アマダイの天秤釣りの船釣り",
      "中深場・深場の胴突きの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "港周辺の短い便と深場の一日便では負荷が異なる。電動リールや貸し竿の利用を予約時に相談する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "kaisho-donoura",
    "type": "boat",
    "name": "海匠",
    "area": "鳴門市・堂浦",
    "prefecture": "徳島県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "瀬戸漁港",
    "officialUrl": "https://kaisho1531.jp/",
    "lat": 34.2220382,
    "lng": 134.5886653,
    "fish": [
      "マダイ",
      "ブリ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging"
    ],
    "methods": [
      "タイラバ",
      "ジギング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "note": "堂浦の瀬戸漁港を拠点に鳴門海峡へ出る遊漁船。タイラバを中心に青物ジギングも案内し、初心者から経験者まで季節の釣りを相談できます。",
    "googleQuery": "海匠 瀬戸漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://kaisho1531.jp/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=34.2220382,134.5886653"
      }
    ],
    "access": "瀬戸漁港の北側岸壁、公式案内の奥の係留場所へ。早朝の準備は近隣に配慮し、静かに行う。",
    "field": "瀬戸漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "潮の速い海峡なので軽いヘッドだけにせず、船長指定の重さで底取りを優先する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "taisyomaru-naruto",
    "type": "boat",
    "name": "大翔丸（鳴門）",
    "area": "鳴門市・堂浦",
    "prefecture": "徳島県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "瀬戸漁港",
    "officialUrl": "https://fishing-taisyomaru.net/",
    "lat": 34.221136,
    "lng": 134.5884,
    "fish": [
      "マダイ",
      "ブリ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging"
    ],
    "methods": [
      "タイラバ",
      "ジギング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "note": "堂浦発で鳴門海峡のタイラバ・ジギングを案内する船。流れが変わる海峡で、魚の反応に合わせた巻き方や底取りを試せます。",
    "googleQuery": "大翔丸（鳴門） 瀬戸漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://fishing-taisyomaru.net/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=34.221136,134.5884"
      }
    ],
    "access": "堂浦の瀬戸漁港内、公式アクセス案内の係留場所に集合。近隣の渡船や他船と間違えないよう船名を確認する。",
    "field": "瀬戸漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "速い潮で糸が斜めに出続ける時は投入し直す。重量やラインの指定を予約時に聞いておく。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "seahawk-kawauchi",
    "type": "boat",
    "name": "SEAHAWK",
    "area": "徳島市・川内",
    "prefecture": "徳島県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "川内漁港",
    "officialUrl": "https://seahowk0210.com/",
    "lat": 34.0979826,
    "lng": 134.6038344,
    "fish": [
      "マダイ",
      "ブリ",
      "タチウオ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "tachiuo-tenya"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "タチウオテンヤ"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "toilet": true,
    "note": "川内漁港からタイラバやジギングを案内する遊漁船。タチウオの時期は大阪湾方面の便もあり、希望の釣り物に合わせて出船内容を相談できます。",
    "googleQuery": "SEAHAWK 川内漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://seahowk0210.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=34.0979826,134.6038344"
      }
    ],
    "access": "川内町旭野の川内漁協前の船着き場へ。公式乗船案内と当日の集合時刻を確認する。",
    "field": "川内漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "ジギングの船釣り",
      "タチウオテンヤの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "タチウオ遠征と近海タイラバでは帰港予定や装備が異なる。電動リールの電源も事前に相談する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "rumimaru-shioya",
    "type": "boat",
    "name": "流魅丸",
    "area": "加賀市・塩屋",
    "prefecture": "石川県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "塩屋港",
    "officialUrl": "http://rumimaru.amsstudio.jp/plan.html",
    "lat": 36.2940145,
    "lng": 136.2526225,
    "fish": [
      "ケンサキイカ"
    ],
    "methodSlugs": [
      "ika-metal",
      "otoshikomi"
    ],
    "methods": [
      "イカメタル",
      "落とし込み釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "toilet": true,
    "note": "塩屋港を拠点とする遊漁船。夜のイカメタルと、ベイトを掛けて大型魚を待つたて釣りを案内しています。半日便・一日便で船上の過ごし方も変わります。",
    "googleQuery": "流魅丸 塩屋港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://rumimaru.amsstudio.jp/plan.html"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.2940145,136.2526225"
      }
    ],
    "access": "塩屋港の流魅丸乗船場へ。出船確認は前日の指定時間帯に行い、予約した便の集合に合わせる。",
    "field": "塩屋港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "イカメタルの船釣り",
      "落とし込み釣りの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "イカとたて釣りの道具は別に準備。餌や氷、仕掛けを船で用意してもらう場合は事前に相談する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "sealine-sakaiminato",
    "type": "boat",
    "name": "SEA LINE（境港）",
    "area": "境港市・中野港",
    "prefecture": "鳥取県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "中野港",
    "officialUrl": "https://www.sea-line.net/",
    "lat": 35.5158889,
    "lng": 133.2525039,
    "fish": [
      "ケンサキイカ",
      "アオリイカ",
      "ヤリイカ",
      "ブリ",
      "ヒラマサ",
      "マダイ",
      "イサキ",
      "マアジ",
      "シロギス"
    ],
    "methodSlugs": [
      "ika-metal",
      "tai-rubber",
      "jigging"
    ],
    "methods": [
      "イカメタル",
      "タイラバ",
      "ジギング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "toilet": true,
    "note": "境港から日本海へ出る遊漁船。白イカの夜便に加え、青物ジギングやタイラバなど、季節の釣り物を幅広く案内しています。",
    "googleQuery": "SEA LINE（境港） 中野港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.sea-line.net/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=35.5158889,133.2525039"
      }
    ],
    "access": "中野港の公式集合案内とSEA LINEの係留場所を確認して乗船。事務所の住所ではなく港へ向かう。",
    "field": "中野港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "イカメタルの船釣り",
      "タイラバの船釣り",
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "白イカ便は潮に合わせたオモリを用意。昼のジギング便と出船時間が異なるので予約内容を確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "bigboy-akita",
    "type": "boat",
    "name": "BIG BOY（秋田港）",
    "area": "秋田市・秋田港",
    "prefecture": "秋田県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "秋田港土崎",
    "officialUrl": "http://bigboy-fishing.com/",
    "lat": 39.7486656,
    "lng": 140.0652917,
    "fish": [
      "ブリ",
      "マダラ",
      "オニカサゴ"
    ],
    "methodSlugs": [
      "jigging",
      "deepsea-douzuki"
    ],
    "methods": [
      "ジギング",
      "中深場・深場の胴突き"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "秋田港の船溜まりから出船する遊漁船。マダラ釣りやオニカサゴ、夜の電気ブリ便など、季節ごとに異なる沖釣りを案内しています。",
    "googleQuery": "BIG BOY（秋田港） 秋田港土崎",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://bigboy-fishing.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=39.7486656,140.0652917"
      }
    ],
    "access": "土崎港西の秋田県漁業協同組合に隣接する船溜まりへ。道の駅あきた港・セリオンの近く。",
    "field": "秋田港土崎を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ジギングの船釣り",
      "中深場・深場の胴突きの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "深場の餌釣りと夜のブリ便は仕掛けが異なる。オモリと電動リールの用意を船長へ確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "koshomaru-eight-onahama",
    "type": "boat",
    "name": "第八光勝丸",
    "area": "いわき市・小名浜",
    "prefecture": "福島県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "小名浜港",
    "officialUrl": "https://zekkouchou.com/no8koshomaru/",
    "lat": 36.9425152,
    "lng": 140.9136606,
    "fish": [
      "アカムツ",
      "ウケグチメバル"
    ],
    "methodSlugs": [
      "deepsea-douzuki"
    ],
    "methods": [
      "中深場・深場の胴突き"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "小名浜港から中深場・深場を中心に出船。アカムツ、アブラボウズ、小メヌケ、ウケグチメバルなど、水深に合わせた専用仕掛けで狙います。",
    "googleQuery": "第八光勝丸 小名浜港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://zekkouchou.com/no8koshomaru/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.9425152,140.9136606"
      }
    ],
    "access": "公式アクセスから確認できる小名浜港東側の係留岸壁へ。予約時に集合場所を確認し、前日に出船確認の連絡をする。",
    "field": "小名浜港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "中深場・深場の胴突きの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "超深海便は通常の五目仕掛けでは対応できない。糸巻き量・オモリ・針数を船宿指定に合わせる。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "seiryumaru-noshiro",
    "type": "boat",
    "name": "盛竜丸",
    "area": "能代市・能代港",
    "prefecture": "秋田県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "能代港浅内漁港",
    "officialUrl": "https://seiryumaru.net/",
    "lat": 40.2108323,
    "lng": 140.0003437,
    "fish": [
      "ヒラメ",
      "マダイ",
      "アカムツ",
      "マダラ",
      "ブリ"
    ],
    "methodSlugs": [
      "nomase",
      "tai-rubber",
      "deepsea-douzuki",
      "jigging"
    ],
    "methods": [
      "ノマセ釣り",
      "タイラバ",
      "中深場・深場の胴突き",
      "ジギング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": true,
    "parking": true,
    "toilet": true,
    "note": "能代沖の泳がせヒラメやタイラバ、深場釣り、冬のブリジギングを案内する遊漁船。釣具店も営み、初めての船釣りの仕掛けや餌の準備を相談できます。",
    "googleQuery": "盛竜丸 能代港浅内漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://seiryumaru.net/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=40.2108323,140.0003437"
      }
    ],
    "access": "MAPは出船する浅内漁港の位置。乗船前に川反町の「つり具屋 盛竜」で座席抽選・名簿記入を済ませる案内があるため、予約時に集合順を確認する。",
    "field": "能代港浅内漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ノマセ釣りの船釣り",
      "タイラバの船釣り",
      "中深場・深場の胴突きの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "電動リール用バッテリーは持参が基本。レンタルと氷は数に限りがあるため事前予約する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "yuseimaru-kotsubo",
    "type": "boat",
    "name": "make LINE 優星丸",
    "area": "呉市・広小坪",
    "prefecture": "広島県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "小坪新波止場",
    "officialUrl": "https://www.make-line.com/",
    "lat": 34.2032063,
    "lng": 132.6345579,
    "fish": [
      "マダイ",
      "キジハタ",
      "ブリ",
      "ケンサキイカ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "hitotsu-tenya",
      "jigging",
      "ika-metal"
    ],
    "methods": [
      "ひとつテンヤ",
      "ジギング",
      "イカメタル"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "広小坪から瀬戸内へ出る遊漁船。エビを使うマダイ・アコウ狙い、青物ジギング、季節のイカ便を案内し、釣り物別のタックル目安も公開しています。",
    "googleQuery": "make LINE 優星丸 小坪新波止場",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.make-line.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=34.2032063,132.6345579"
      }
    ],
    "access": "公式アクセスの広小坪新波止場の乗船位置へ。住宅地を通るため早朝は静かに移動する。",
    "field": "小坪新波止場を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ひとつテンヤの船釣り",
      "ジギングの船釣り",
      "イカメタルの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "船中で糸の太さやオモリが大きく違うとオマツリの原因になる。掲載目安に加え当日の船長指定を確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "tatsumaru-eight-karo",
    "type": "boat",
    "name": "第八達丸",
    "area": "鳥取市・賀露",
    "prefecture": "鳥取県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "鳥取港（賀露港）",
    "officialUrl": "http://www.daihachitatsumaru.com/",
    "lat": 35.5353568,
    "lng": 134.1955633,
    "fish": [
      "ケンサキイカ",
      "マダイ",
      "ヒラマサ",
      "ブリ",
      "マアジ",
      "カサゴ",
      "メダイ"
    ],
    "methodSlugs": [
      "ika-metal",
      "jigging",
      "tai-rubber"
    ],
    "methods": [
      "イカメタル",
      "ジギング",
      "タイラバ"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": true,
    "toilet": true,
    "note": "賀露港発の遊漁船。シロイカとマダイを中心に青物ジギングなどを案内しています。家族や初心者にも対応し、シロイカの貸し道具を相談できます。",
    "googleQuery": "第八達丸 鳥取港（賀露港）",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://www.daihachitatsumaru.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=35.5353568,134.1955633"
      }
    ],
    "access": "MAPは賀露港の第八達丸乗船岸壁。美萩野の事務所住所とは異なるため、公式アクセスと予約時の案内で集合する。",
    "field": "鳥取港（賀露港）を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "イカメタルの船釣り",
      "ジギングの船釣り",
      "タイラバの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "イカのレンタルを利用する場合は予約時に伝える。昼便と夜便では服装や食事の準備も分ける。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "hokuyumaru-karo",
    "type": "boat",
    "name": "北祐丸",
    "area": "鳥取市・賀露",
    "prefecture": "鳥取県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "鳥取港（賀露港）",
    "officialUrl": "http://hokuyuumaru.web.fc2.com/",
    "lat": 35.5349969,
    "lng": 134.1958402,
    "fish": [
      "ケンサキイカ"
    ],
    "methodSlugs": [
      "ika-metal",
      "jigging"
    ],
    "methods": [
      "イカメタル",
      "ジギング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": true,
    "note": "賀露港から白イカ便とジギングを案内する遊漁船。半夜・深夜・ロング便などを選べ、初心者や家族での乗船も相談できます。",
    "googleQuery": "北祐丸 鳥取港（賀露港）",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://hokuyuumaru.web.fc2.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=35.5349969,134.1958402"
      }
    ],
    "access": "賀露港の係留岸壁へ。北祐丸と同系列の幸徳丸があり、予約した船と集合時間を確認する。",
    "field": "鳥取港（賀露港）を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "イカメタルの船釣り",
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "夜便は帰港時刻を含めて予定を組む。イカ用のオモリの重さとレンタルの有無を出船前に相談する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "uchihamamaru-kojima",
    "type": "boat",
    "name": "内浜丸",
    "area": "倉敷市・児島",
    "prefecture": "岡山県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "元浜港",
    "officialUrl": "http://www.uchihama.com/info/index.html",
    "lat": 34.4590317,
    "lng": 133.808097,
    "fish": [
      "マダイ",
      "シロギス",
      "マゴチ",
      "アオリイカ",
      "タチウオ",
      "カワハギ",
      "カサゴ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "boat-kisu",
      "nomase",
      "tiprun",
      "tachiuo-tenya",
      "kawahagi"
    ],
    "methods": [
      "タイラバ",
      "船キス",
      "ノマセ釣り",
      "ティップラン",
      "タチウオテンヤ",
      "カワハギ釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "toilet": true,
    "note": "児島の元浜港から出る釣り船。タイラバや船キス、ティップラン、カワハギなど、瀬戸内の季節ごとの釣りを選べます。マゴチの泳がせ便も案内しています。",
    "googleQuery": "内浜丸 元浜港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://www.uchihama.com/info/index.html"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=34.4590317,133.808097"
      }
    ],
    "access": "元浜港の桟橋、公式案内のローソン寄りの端に係留する船へ。釣り座は抽選で決めるため、指定された集合時間に合わせる。",
    "field": "元浜港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "船キスの船釣り",
      "ノマセ釣りの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "カワハギの餌や貸し竿は事前予約。スパイク長靴は使用できないので滑りにくい船用の履物で乗船する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "kouyuumaru-nonohama",
    "type": "boat",
    "name": "幸友丸（野々浜港）",
    "area": "玉野市・田井",
    "prefecture": "岡山県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "野々浜港",
    "officialUrl": "http://kouyuumaru.info/",
    "lat": 34.5231463,
    "lng": 133.9604546,
    "fish": [
      "マダイ",
      "シロギス",
      "アオリイカ",
      "カワハギ"
    ],
    "methodSlugs": [
      "hitotsu-tenya",
      "tai-rubber",
      "boat-kisu",
      "tiprun",
      "kawahagi"
    ],
    "methods": [
      "ひとつテンヤ",
      "タイラバ",
      "船キス",
      "ティップラン",
      "カワハギ釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "parking": true,
    "toilet": true,
    "note": "野々浜港から宇野沖を中心に案内する遊漁船。ひとつテンヤとタイラバのほか、キスや秋のアオリイカ・カワハギを狙う便があります。初めての乗船は貸し道具も相談できます。",
    "googleQuery": "幸友丸（野々浜港） 野々浜港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://kouyuumaru.info/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=34.5231463,133.9604546"
      }
    ],
    "access": "田井の野々浜港へ。車はたまの漁協横の有料駐車場の指定区画に置き、他船や漁協の作業を妨げない。",
    "field": "野々浜港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ひとつテンヤの船釣り",
      "タイラバの船釣り",
      "船キスの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "同じマダイでもテンヤとタイラバでは餌や道具が変わる。予約した便の釣法を確認して準備する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "chisatomaru-akaoka",
    "type": "boat",
    "name": "ちさと丸",
    "area": "香南市・赤岡",
    "prefecture": "高知県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "赤岡漁港",
    "officialUrl": "https://chisatomaru.com/",
    "lat": 33.538426,
    "lng": 133.7224729,
    "fish": [
      "カンパチ",
      "ブリ",
      "マダイ",
      "マハタ",
      "ヒラメ",
      "アカムツ",
      "スルメイカ"
    ],
    "methodSlugs": [
      "jigging",
      "deepsea-douzuki",
      "ika-sutte"
    ],
    "methods": [
      "ジギング",
      "中深場・深場の胴突き",
      "船イカヅノ釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": true,
    "toilet": true,
    "note": "赤岡漁港から土佐湾の餌釣りやジギング、中深場・深海釣りへ出船する船。ネイリ（カンパチ）やマハタ、ヒラメなど、時季に応じた釣り物と仕掛けを公式で案内しています。",
    "googleQuery": "ちさと丸 赤岡漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://chisatomaru.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=33.538426,133.7224729"
      }
    ],
    "access": "赤岡漁港のちさと丸乗船場所へ。赤岡町の事務所住所とは区別し、予約便の集合時刻に合わせる。",
    "field": "赤岡漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ジギングの船釣り",
      "中深場・深場の胴突きの船釣り",
      "船イカヅノ釣りの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "レンタルの竿・リール・バッテリーや餌・氷は事前申込み。初めてなら対象魚を伝えて必要な一式を相談する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "rise-kanazawa-ono",
    "type": "boat",
    "name": "RISE金沢",
    "area": "金沢市・大野",
    "prefecture": "石川県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "金沢港大野",
    "officialUrl": "https://www.rise-kanazawa.com/",
    "lat": 36.6166654,
    "lng": 136.6043354,
    "fish": [
      "マダイ",
      "アカムツ",
      "アオリイカ",
      "ケンサキイカ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "deepsea-douzuki",
      "tiprun",
      "ika-metal"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "中深場・深場の胴突き",
      "ティップラン",
      "イカメタル"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "parking": true,
    "toilet": true,
    "note": "金沢港大野を出船拠点とする遊漁船。SLJ・タイラバ、イカメタル、ティップラン、ノドグロ釣りなどのタックル案内を公開し、季節の便を相談できます。",
    "googleQuery": "RISE金沢 金沢港大野",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.rise-kanazawa.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.6166654,136.6043354"
      }
    ],
    "access": "金沢便はウォーターフロントパーク金沢の係留場所へ。一般駐車場を利用する。富山便とは集合港が異なるため、予約便を確認する。",
    "field": "金沢港大野を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "ジギングの船釣り",
      "中深場・深場の胴突きの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "同じ船宿でも金沢便と富山便がある。対象魚だけでなく出港地と必要なオモリの重さまで予約時に確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "senshomaru-nakaminato",
    "type": "boat",
    "name": "仙昇丸",
    "area": "ひたちなか市・那珂湊",
    "prefecture": "茨城県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "那珂湊港",
    "officialUrl": "https://senshomaru1.com/",
    "lat": 36.3409748,
    "lng": 140.5981635,
    "fish": [
      "マダイ",
      "タチウオ",
      "マダコ",
      "スルメイカ",
      "ヤリイカ",
      "ヒラメ"
    ],
    "methodSlugs": [
      "hitotsu-tenya",
      "tachiuo-tenya",
      "tako-egi",
      "ika-sutte",
      "nomase"
    ],
    "methods": [
      "ひとつテンヤ",
      "タチウオテンヤ",
      "タコエギ",
      "船イカヅノ釣り",
      "ノマセ釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "parking": true,
    "note": "那珂湊港発の乗合船。季節のイカ・マダコのほか、ひとつテンヤのマダイ、タチウオ、ヒラメなどを案内しています。初めての人は竿とリールのレンタルを相談できます。",
    "googleQuery": "仙昇丸 那珂湊港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://senshomaru1.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.3409748,140.5981635"
      }
    ],
    "access": "和田町の那珂湊直売所付近から、仙昇丸の乗船岸壁へ。駐車区画は他船と共用するため当日の指示に従う。",
    "field": "那珂湊港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ひとつテンヤの船釣り",
      "タチウオテンヤの船釣り",
      "タコエギの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "イカ用の投入器や餌・仕掛けの準備を頼む場合は予約時に伝える。前日に出船可否を確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "nashirera-star-niigata",
    "type": "boat",
    "name": "ナシレラスター",
    "area": "新潟市・信濃川",
    "prefecture": "新潟県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "新潟西港・川岸町",
    "officialUrl": "https://nashirera-star.jp/",
    "lat": 37.9097574,
    "lng": 139.0353153,
    "fish": [
      "マダイ",
      "アマダイ",
      "マサバ",
      "ブリ"
    ],
    "methodSlugs": [],
    "methods": [],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": true,
    "parking": true,
    "note": "新潟市の信濃川沿いから出船する釣り船。マダイやアマダイ、サバ、イナダなど季節の魚を狙うプランがあり、初心者・子ども向けのレクチャーや道具のレンタルを案内しています。",
    "googleQuery": "ナシレラスター 新潟西港・川岸町",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://nashirera-star.jp/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=37.9097574,139.0353153"
      }
    ],
    "access": "川岸町の信濃川沿いの係留場所へ。近隣の有料駐車場から乗船する。集合位置と予約プランを事前に確認する。",
    "field": "新潟西港・川岸町を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "初めての船釣り体験",
      "家族で季節の魚を狙う釣行"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "道具を持っていない場合はレンタルを予約。釣法と対象魚は希望のプランに合わせて相談する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "taiga-minamihama",
    "type": "boat",
    "name": "たいが（南浜港）",
    "area": "新潟市・南浜",
    "prefecture": "新潟県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "南浜港",
    "officialUrl": "https://www.niigata-taiga.com/",
    "lat": 37.9729814,
    "lng": 139.1697004,
    "fish": [
      "ヒラメ",
      "マサバ"
    ],
    "methodSlugs": [
      "jigging",
      "tai-rubber",
      "casting",
      "deepsea-douzuki"
    ],
    "methods": [
      "ジギング",
      "タイラバ",
      "キャスティング",
      "中深場・深場の胴突き"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "note": "南浜港から新潟近海、佐渡、粟島方面を案内する釣り船。ジギングやタイラバ、キャスティング、中深場の便を相談でき、初めての乗船や仲間での貸切にも対応しています。",
    "googleQuery": "たいが（南浜港） 南浜港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.niigata-taiga.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=37.9729814,139.1697004"
      }
    ],
    "access": "南浜港内の船着き場へ。港では最徐行し、出入口の戸締まりも公式乗船案内に従う。",
    "field": "南浜港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ジギングの船釣り",
      "タイラバの船釣り",
      "キャスティングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "近海と佐渡・粟島方面では移動時間やタックルが変わる。希望の釣り物と経験を伝えて便を選ぶ。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "tekkaimaru-hayase",
    "type": "boat",
    "name": "徹海丸",
    "area": "美浜町・早瀬",
    "prefecture": "福井県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "早瀬漁港",
    "officialUrl": "https://zekkouchou.com/tekkaimaru/",
    "lat": 35.6185439,
    "lng": 135.9082841,
    "fish": [
      "ケンサキイカ",
      "アオリイカ",
      "ヤリイカ",
      "マダイ",
      "ヒラマサ"
    ],
    "methodSlugs": [
      "ika-metal",
      "tiprun",
      "ika-sutte"
    ],
    "methods": [
      "イカメタル",
      "ティップラン",
      "船イカヅノ釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "早瀬漁港から若狭湾へ出船。イカメタル・オモリグの半夜便を中心に、アオリイカのティップランやマダイ・ヒラマサの船フカセも案内しています。",
    "googleQuery": "徹海丸 早瀬漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://zekkouchou.com/tekkaimaru/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=35.6185439,135.9082841"
      }
    ],
    "access": "マリンポート美浜の先、公式案内の早瀬港堤防の乗船場所へ。ナビの建物住所で止まらず、予約時の集合位置を確認する。",
    "field": "早瀬漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "イカメタルの船釣り",
      "ティップランの船釣り",
      "船イカヅノ釣りの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "イカメタルとオモリグでは仕掛けが異なる。潮に対応するオモリとレンタルの有無を船長に相談する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "yusyomaru-dream",
    "type": "boat",
    "name": "勇正丸DREAM",
    "area": "宗像市・玄界灘",
    "prefecture": "福岡県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "神湊港",
    "officialUrl": "http://yusyomaru-dream.com/",
    "lat": 33.855049,
    "lng": 130.4820503,
    "fish": [
      "クエ"
    ],
    "methodSlugs": [
      "otoshikomi",
      "nomase"
    ],
    "methods": [
      "落とし込み釣り",
      "ノマセ釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "parking": true,
    "note": "神湊港から宗像大島・沖ノ島方面へ出船する二隻体制の船宿。落とし込み、泳がせ、沖五目、夜焚きイカなど、餌釣りを中心に便を選べます。",
    "googleQuery": "勇正丸DREAM 神湊港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://yusyomaru-dream.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=33.855049,130.4820503"
      }
    ],
    "access": "神湊有料第3駐車場に面した岸壁へ。勇正丸とDREAMでは連絡先が異なるため、予約した船を確認する。",
    "field": "神湊港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "落とし込み釣りの船釣り",
      "ノマセ釣りの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "アラ（クエ）狙いは普段の五目釣りと道具が異なる。必要な仕掛けと餌の準備を予約時に相談する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "gagamaru-takahama",
    "type": "boat",
    "name": "雅々丸",
    "area": "北九州市・小倉",
    "prefecture": "福岡県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "高浜港",
    "officialUrl": "https://www.gagamaru.net/price",
    "lat": 33.8907327,
    "lng": 130.8997657,
    "fish": [
      "マダイ",
      "カサゴ"
    ],
    "methodSlugs": [
      "otoshikomi",
      "nomase",
      "tai-rubber",
      "jigging",
      "hitotsu-tenya"
    ],
    "methods": [
      "落とし込み釣り",
      "ノマセ釣り",
      "タイラバ",
      "ジギング",
      "ひとつテンヤ"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "parking": true,
    "note": "高浜港発の遊漁船。落とし込み、泳がせ、タイラバ、ジギングを扱い、チャーターでは関門のひとつテンヤやアラカブ釣りも相談できます。",
    "googleQuery": "雅々丸 高浜港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.gagamaru.net/price"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=33.8907327,130.8997657"
      }
    ],
    "access": "小倉北区末広町の高浜港岸壁へ。駐車場の空きには限りがあるため、乗り合わせと船長の駐車指示に従う。",
    "field": "高浜港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "落とし込み釣りの船釣り",
      "ノマセ釣りの船釣り",
      "タイラバの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "竿・リールや救命具のレンタルは要予約。クーラーは持参し、初めてなら経験と希望の釣法を伝える。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "suehiromaru-koseto",
    "type": "boat",
    "name": "末広丸Ⅲ",
    "area": "上天草市・大矢野",
    "prefecture": "熊本県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "小瀬戸港",
    "officialUrl": "https://www.suehiromaruhp.com/about",
    "lat": 32.5560535,
    "lng": 130.4503861,
    "fish": [
      "マダイ",
      "シロギス"
    ],
    "methodSlugs": [
      "tai-rubber",
      "hitotsu-tenya",
      "jigging",
      "ika-metal",
      "boat-kisu"
    ],
    "methods": [
      "タイラバ",
      "ひとつテンヤ",
      "ジギング",
      "イカメタル",
      "船キス"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "toilet": true,
    "note": "大矢野の小瀬戸港から出る遊漁船。マダイを中心にタイラバ・テンヤ、ライトジギング、イカメタル、キス釣りを相談できます。",
    "googleQuery": "末広丸Ⅲ 小瀬戸港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.suehiromaruhp.com/about"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=32.5560535,130.4503861"
      }
    ],
    "access": "公式案内の大矢野町中7366、塩田造船所隣の係留岸壁へ。造船所の作業範囲に入らず、集合の指示に従う。",
    "field": "小瀬戸港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "ひとつテンヤの船釣り",
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "初めての船釣りは釣法を絞って相談。タイラバとテンヤでは餌の準備も異なるため、便に合う道具を確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "taishimaru-goto",
    "type": "boat",
    "name": "それいけ大志丸",
    "area": "五島市・福江島",
    "prefecture": "長崎県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "福江港大津地区",
    "officialUrl": "https://soreike-taishimaru.com/",
    "lat": 32.6891852,
    "lng": 128.8509396,
    "fish": [
      "カンパチ",
      "マダイ",
      "オオモンハタ",
      "キジハタ"
    ],
    "methodSlugs": [
      "jigging"
    ],
    "methods": [
      "ジギング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": true,
    "note": "福江島の船釣り体験とチャーターを案内する遊漁船。初めての釣りや家族での体験から、ジギングで青物・マダイ・ハタ類を狙う便まで相談できます。",
    "googleQuery": "それいけ大志丸 福江港大津地区",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://soreike-taishimaru.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=32.6891852,128.8509396"
      }
    ],
    "access": "公式アクセスにあるドゥイングオサダ裏の船着き場へ。フェリーの発着場所とは異なるため、福江港到着後の移動時間を見込む。",
    "field": "福江港大津地区を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "旅行の釣り体験と本格ジギングでは貸し道具や時間が異なる。釣り経験、同行人数、希望魚を伝えて便を選ぶ。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "eishinmaru-miyako",
    "type": "boat",
    "name": "栄真丸（宮古島）",
    "area": "宮古島市・荷川取",
    "prefecture": "沖縄県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "荷川取漁港",
    "officialUrl": "https://www.eishinmaru.net/",
    "lat": 24.8184524,
    "lng": 125.279987,
    "fish": [
      "マグロ類",
      "カンパチ"
    ],
    "methodSlugs": [
      "nomase",
      "jigging"
    ],
    "methods": [
      "ノマセ釣り",
      "ジギング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": true,
    "toilet": true,
    "note": "荷川取漁港からパヤオのマグロやカンパチの大物釣りを案内。泳がせ・ルアーの遠征便に加え、道具を借りて参加する五目体験もあります。",
    "googleQuery": "栄真丸（宮古島） 荷川取漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の荷川取漁港乗船案内と地図上の係留エリアを照合。利用する浮桟橋は当日の案内で確認。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://www.eishinmaru.net/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=24.8184524,125.279987"
      }
    ],
    "access": "宮古島漁協建物のさらに奥にある浮桟橋が集合場所。レンタカーは船長が指定する駐車区画に置き、集合連絡を確認する。",
    "field": "荷川取漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ノマセ釣りの船釣り",
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "大物便と近場の体験は別プラン。遠征は滞在日程に余裕を持ち、貸し道具と餌の手配を予約時に確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "ginrin-makurazaki",
    "type": "boat",
    "name": "銀鱗（枕崎）",
    "area": "枕崎市・南薩",
    "prefecture": "鹿児島県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "枕崎港",
    "officialUrl": "https://ginrin.netlify.app/",
    "lat": 31.2680629,
    "lng": 130.2954948,
    "fish": [
      "マダイ",
      "イサキ",
      "アマダイ類"
    ],
    "methodSlugs": [],
    "methods": [],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "toilet": true,
    "note": "枕崎港から南薩近海へ出船する遊漁船。マダイ、イサキ、アマダイ類や根魚など、季節に合わせた対象魚を案内しています。",
    "googleQuery": "銀鱗（枕崎） 枕崎港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://ginrin.netlify.app/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=31.2680629,130.2954948"
      }
    ],
    "access": "枕崎市折口町の港沿い、公式案内の係留岸壁へ。港は漁業施設が並ぶため、集合と駐車は予約時の指示に従う。",
    "field": "枕崎港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "季節のマダイ・イサキ狙い",
      "南薩近海の船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "釣法と必要な重さは狙う魚で変わる。初めてなら道具のレンタルを相談し、餌や仕掛けの準備を確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "houseimaru-dairi",
    "type": "boat",
    "name": "宝生丸（大里）",
    "area": "北九州市・門司",
    "prefecture": "福岡県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "大里港",
    "officialUrl": "http://www.houseimaru.net/",
    "lat": 33.9085785,
    "lng": 130.9325018,
    "fish": [
      "マダイ"
    ],
    "methodSlugs": [
      "tai-rubber",
      "otoshikomi",
      "ika-metal"
    ],
    "methods": [
      "タイラバ",
      "落とし込み釣り",
      "イカメタル"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "大里港を拠点に、タイラバ・落とし込み・沖五目・夜イカの便を案内する釣船。季節の釣り物に合わせて乗合と貸切を相談できます。",
    "googleQuery": "宝生丸（大里） 大里港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://www.houseimaru.net/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=33.9085785,130.9325018"
      }
    ],
    "access": "大里本町2丁目11-33、公式の出船場所に面した船着き場へ。店舗や別の係留区画と間違えないよう船名を確認する。",
    "field": "大里港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "タイラバの船釣り",
      "落とし込み釣りの船釣り",
      "イカメタルの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "貸し竿は釣法別の用意になるため事前に申し込む。集合時間は季節で変わるので、予約便の連絡を確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "mays-sendai",
    "type": "boat",
    "name": "May’s Guide Service",
    "area": "薩摩川内市・川内港",
    "prefecture": "鹿児島県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "川内港",
    "officialUrl": "https://mays-guide-service.info/",
    "lat": 31.8485239,
    "lng": 130.2068503,
    "fish": [
      "アオリイカ",
      "マアジ",
      "マダイ"
    ],
    "methodSlugs": [
      "jigging",
      "tiprun",
      "ajing",
      "ika-metal",
      "rockfish-lure",
      "tai-rubber"
    ],
    "methods": [
      "ジギング",
      "ティップラン",
      "アジング",
      "イカメタル",
      "ロックフィッシュルアー",
      "タイラバ"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "toilet": true,
    "note": "川内港から近海・甑島方面へ出るルアー船。ジギングやSLJ、ティップラン、ボートアジング、イカメタルなど、季節に合わせた釣りを案内しています。",
    "googleQuery": "May’s Guide Service 川内港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://mays-guide-service.info/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=31.8485239,130.2068503"
      }
    ],
    "access": "港町6131-23、川内港北岸の船着き場へ。高速船甑島のりばと区別し、船長の集合案内を確認する。",
    "field": "川内港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ジギングの船釣り",
      "ティップランの船釣り",
      "アジングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "近くにコンビニや氷販売がないため、飲み物や氷は到着前に準備する。初心者はレンタルタックルを予約時に相談。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "ayamimaru-shigetomi",
    "type": "boat",
    "name": "絢美丸",
    "area": "姶良市・錦江湾",
    "prefecture": "鹿児島県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "重富漁港",
    "officialUrl": "https://ayamimaru.com/",
    "lat": 31.7013649,
    "lng": 130.6165523,
    "fish": [
      "マダイ",
      "マアジ",
      "コロダイ",
      "オオモンハタ",
      "タチウオ"
    ],
    "methodSlugs": [
      "hitotsu-tenya",
      "tai-rubber",
      "jigging"
    ],
    "methods": [
      "ひとつテンヤ",
      "タイラバ",
      "ジギング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "note": "重富漁港から錦江湾の船釣りを案内。湾奥から佐多岬方面まで、ひとつテンヤ、タイラバ、ジギングや餌釣りなど、対象魚と便を選べます。",
    "googleQuery": "絢美丸 重富漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://ayamimaru.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=31.7013649,130.6165523"
      }
    ],
    "access": "重富漁港の南側の係留岸壁へ。干潟の散策場所や公園駐車場とは区別し、乗船と駐車の案内に従う。",
    "field": "重富漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ひとつテンヤの船釣り",
      "タイラバの船釣り",
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "テンヤ便と夜のタチウオ便では道具が変わる。予約した釣り物、餌、仕掛けの重さを確認して用意する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "yukamaru-izashiki",
    "type": "boat",
    "name": "由香丸（伊座敷）",
    "area": "南大隅町・佐多",
    "prefecture": "鹿児島県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "伊座敷港",
    "officialUrl": "https://yugyo-yukamaru.com/",
    "lat": 31.0958256,
    "lng": 130.690124,
    "fish": [
      "マダイ",
      "アオリイカ"
    ],
    "methodSlugs": [
      "jigging",
      "tai-rubber",
      "rockfish-lure",
      "tiprun"
    ],
    "methods": [
      "ジギング",
      "タイラバ",
      "ロックフィッシュルアー",
      "ティップラン"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "toilet": true,
    "note": "佐多伊座敷から錦江湾口・佐多岬へ案内するルアー船。ジギング、タイラバ、ロックフィッシュ、ティップランなど、海況と季節に応じた便があります。",
    "googleQuery": "由香丸（伊座敷） 伊座敷港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://yugyo-yukamaru.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=31.0958256,130.690124"
      }
    ],
    "access": "伊座敷港の公式乗船地点に面した岸壁へ。天候による集合変更がないか、予約便の連絡を確認する。",
    "field": "伊座敷港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ジギングの船釣り",
      "タイラバの船釣り",
      "ロックフィッシュルアーの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "貸しタックルはないため道具を持参。湾口・離島方面に合わせたラインやルアーを船長に相談して準備する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "bentenmaru-ouse",
    "type": "boat",
    "name": "弁天丸（会瀬）",
    "area": "日立市・会瀬",
    "prefecture": "茨城県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "会瀬漁港",
    "officialUrl": "https://bentenmaru.net/",
    "lat": 36.5780725,
    "lng": 140.6588676,
    "fish": [
      "マダイ"
    ],
    "methodSlugs": [
      "hitotsu-tenya",
      "tai-rubber",
      "jigging"
    ],
    "methods": [
      "ひとつテンヤ",
      "タイラバ",
      "ジギング"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "parking": true,
    "note": "会瀬漁港から日立沖・会瀬沖のマダイを狙う船宿。ひとつテンヤを中心に、希望に応じてタイラバやジギングも相談できます。",
    "googleQuery": "弁天丸（会瀬） 会瀬漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://bentenmaru.net/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.5780725,140.6588676"
      }
    ],
    "access": "会瀬町1-1-8の会瀬漁港内、船が係留する岸壁へ。車は港内の指定された無料駐車区画を利用する。",
    "field": "会瀬漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ひとつテンヤの船釣り",
      "タイラバの船釣り",
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "テンヤ用の貸し竿とリールがあるため、初挑戦は予約時に相談。潮に合うテンヤの重さを船長に確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "kotobukimaru-ouse",
    "type": "boat",
    "name": "ことぶき丸（会瀬）",
    "area": "日立市・会瀬",
    "prefecture": "茨城県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "会瀬漁港",
    "officialUrl": "https://kotobuki-maru.net/",
    "lat": 36.5781446,
    "lng": 140.6589009,
    "fish": [
      "マダイ"
    ],
    "methodSlugs": [
      "hitotsu-tenya"
    ],
    "methods": [
      "ひとつテンヤ"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": true,
    "parking": true,
    "note": "会瀬漁港を拠点にひとつテンヤのマダイを案内する船宿。女性や子供、船釣りが初めての人の利用も受け付け、道具のレンタルを相談できます。",
    "googleQuery": "ことぶき丸（会瀬） 会瀬漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://kotobuki-maru.net/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.5781446,140.6589009"
      }
    ],
    "access": "集合は幸町の事務所ではなく会瀬漁港の岸壁。港内駐車場と船名を確認し、電車利用時の送迎は予約時に依頼する。",
    "field": "会瀬漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ひとつテンヤの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "餌を付けたテンヤを着底させる操作から覚える釣り。道具を揃える前に貸し竿と必要な仕掛けを確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "kouryoumaru-kuji",
    "type": "boat",
    "name": "弘漁丸",
    "area": "日立市・久慈",
    "prefecture": "茨城県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "久慈漁港",
    "officialUrl": "http://www.kouryoumaru.com/",
    "lat": 36.5004202,
    "lng": 140.6275491,
    "fish": [
      "マダイ",
      "タチウオ",
      "ヒラメ"
    ],
    "methodSlugs": [
      "hitotsu-tenya",
      "nomase"
    ],
    "methods": [
      "ひとつテンヤ",
      "ノマセ釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "note": "久慈漁港からひとつテンヤのマダイや季節のヒラメ・タチウオを案内。釣り座は抽選で決まり、初めての利用は専用貸し竿も相談できます。",
    "googleQuery": "弘漁丸 久慈漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://www.kouryoumaru.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.5004202,140.6275491"
      }
    ],
    "access": "久慈漁港内の船前へ直接集合。二隻で運航するため、当日の船と集合時刻を予約時の案内で確認する。",
    "field": "久慈漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ひとつテンヤの船釣り",
      "ノマセ釣りの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "テンヤ用の貸し竿を希望する場合は予約時に依頼。出船中止や変更は直前の公式案内も確認する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "naojumaru-kuji",
    "type": "boat",
    "name": "第三直重丸",
    "area": "日立市・久慈",
    "prefecture": "茨城県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "久慈漁港",
    "officialUrl": "https://dai3-naojumaru.com/index.html",
    "lat": 36.5021135,
    "lng": 140.6288771,
    "fish": [
      "マダイ",
      "ヒラメ",
      "ショウサイフグ"
    ],
    "methodSlugs": [
      "hitotsu-tenya",
      "tai-rubber",
      "jigging",
      "nomase"
    ],
    "methods": [
      "ひとつテンヤ",
      "タイラバ",
      "ジギング",
      "ノマセ釣り"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": true,
    "kids": false,
    "parking": true,
    "toilet": true,
    "note": "久慈漁港発の釣り船。ひとつテンヤ、タイラバ、SLJのマダイ狙いに加え、ヒラメやショウサイフグの便を扱います。",
    "googleQuery": "第三直重丸 久慈漁港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://dai3-naojumaru.com/index.html"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=36.5021135,140.6288771"
      }
    ],
    "access": "久慈町1-1-2の港内、第三直重丸の船着き場へ。無料駐車場は指定場所を利用する。",
    "field": "久慈漁港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "ひとつテンヤの船釣り",
      "タイラバの船釣り",
      "ジギングの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "レンタルタックルは要予約。フグ便は船宿の処理・持ち帰り案内に従い、自分で無資格調理しない。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "jintokumaru-hasaki",
    "type": "boat",
    "name": "仁徳丸",
    "area": "神栖市・波崎",
    "prefecture": "茨城県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "波崎・利根川河口",
    "officialUrl": "https://jintokumaru.com/",
    "lat": 35.7426517,
    "lng": 140.8331947,
    "fish": [
      "アカムツ",
      "アラ",
      "ヒラメ",
      "ヤリイカ",
      "マダイ"
    ],
    "methodSlugs": [
      "deepsea-douzuki",
      "jigging",
      "nomase",
      "ika-sutte",
      "hitotsu-tenya"
    ],
    "methods": [
      "中深場・深場の胴突き",
      "ジギング",
      "ノマセ釣り",
      "船イカヅノ釣り",
      "ひとつテンヤ"
    ],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "利根川河口の波崎側から、アカムツやアラ、メヌケ類など深場の魚を狙う船宿。スロージギングや季節のヒラメ・ヤリイカ便も案内しています。",
    "googleQuery": "仁徳丸 波崎・利根川河口",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "https://jintokumaru.com/"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=35.7426517,140.8331947"
      }
    ],
    "access": "銚子大橋から河口側へ進み、青木屋旅館手前の川沿い船着き場へ。船宿住所と乗船場は異なる。",
    "field": "波崎・利根川河口を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "中深場・深場の胴突きの船釣り",
      "ジギングの船釣り",
      "ノマセ釣りの船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "深場便はオモリ・針数・電源が決まるため、自己判断で揃えず予約便の指定を確認する。貸し竿も事前に相談。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  },
  {
    "slug": "ottertail-hiyoshibaru",
    "type": "boat",
    "name": "オッターテイル",
    "area": "大分市・日吉原",
    "prefecture": "大分県",
    "primaryType": "boat",
    "terrain": "boat",
    "port": "日吉原港",
    "officialUrl": "http://ottertails.net/home/index.html",
    "lat": 33.2402601,
    "lng": 131.758346,
    "fish": [
      "マダイ",
      "マアジ",
      "マサバ"
    ],
    "methodSlugs": [],
    "methods": [],
    "season": "釣り物と出船海域は季節・海況で変わります。予約便の案内を確認。",
    "beginner": false,
    "kids": false,
    "note": "日吉原港を拠点に別府湾内外のマダイ、アジ、サバを狙う遊漁船。アジ・サバからマダイへ切り替えるリレー便など、季節と海況に応じた釣りを案内します。",
    "googleQuery": "オッターテイル 日吉原港",
    "verifiedAt": "2026-09-19",
    "positionNote": "公式の乗船案内と地図を照合した係留・乗船場所。集合場所は予約便の案内に従ってください。",
    "sources": [
      {
        "label": "船宿公式：釣り物・乗船案内",
        "url": "http://ottertails.net/home/index.html"
      },
      {
        "label": "地図：公式案内と乗船位置を照合",
        "url": "https://www.google.com/maps?q=33.2402601,131.758346"
      }
    ],
    "access": "公式アクセスが案内する日吉原港へ。港内南側の船着き場で、集合時刻と船名を確認する。",
    "field": "日吉原港を出船拠点とする遊漁船。釣りは予約した便で船長が案内する海域で行います。",
    "bestFor": [
      "アジ・サバとマダイのリレー釣り",
      "別府湾周辺の船釣り"
    ],
    "timing": "集合時刻と出船可否は予約後の連絡で確認。岸壁への到着は案内された時間に合わせる。",
    "tips": [
      "同じ便で対象魚を変える場合があるため、使用する仕掛けを予約時に確認し、ライフジャケットを用意する。"
    ],
    "caution": [
      "乗船時は指定されたライフジャケットを着用。荷物・針・仕掛けの扱いは船長の指示に従う。",
      "港内の駐車と立入りは船宿の指定区画に限り、漁業作業を妨げない。"
    ]
  }
];
