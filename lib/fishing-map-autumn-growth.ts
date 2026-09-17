import type {FishingMapEntry} from './fishing-map-data';

// Verified shore areas and operator access points; boat markers do not imply public shore access.
export const autumnMapGrowth:FishingMapEntry[]=[
  {
    "slug": "toyama-taiseimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "泰誠丸",
    "prefecture": "富山県",
    "area": "富山県・新湊マリーナ",
    "port": "新湊マリーナ",
    "lat": 36.7702754,
    "lng": 137.1370811,
    "fish": [
      "アカムツ",
      "アマダイ",
      "アジ",
      "アオリイカ"
    ],
    "methods": [
      "船釣り",
      "ティップラン"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": true,
    "kids": false,
    "note": "新湊マリーナから富山湾へ。アカムツやアマダイ、アジなど、予約時に決めた魚に合わせて出船する。",
    "googleQuery": "富山県 泰誠丸",
    "officialUrl": "https://www.fishing-taiseimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://www.fishing-taiseimaru.com/"
      }
    ],
    "positionNote": "海の駅サザン共有駐車場を利用し、公式案内の乗船場へ集合する。",
    "access": "海の駅サザン共有駐車場を利用し、公式案内の乗船場へ集合する。",
    "field": "新湊マリーナを拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "船釣り",
      "ティップラン"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "tiprun"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "toyama-zinryumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "仁琉丸",
    "prefecture": "富山県",
    "area": "富山県・富山新港",
    "port": "富山新港",
    "lat": 36.779255,
    "lng": 137.1219143,
    "fish": [
      "アカムツ",
      "アジ",
      "マダイ",
      "キジハタ"
    ],
    "methods": [
      "タイラバ",
      "船釣り"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": true,
    "kids": false,
    "note": "富山新港を拠点にアカムツ、アジ、根魚の便を案内。タイラバと餌釣りでは用意する道具が異なる。",
    "googleQuery": "富山県 仁琉丸",
    "officialUrl": "https://zinryumaru-toyama.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://zinryumaru-toyama.com/"
      }
    ],
    "positionNote": "海竜町の公式地図掲載地点。レンタルは予約時に申込み、集合時刻と使用船を確認する。",
    "access": "海竜町の公式地図掲載地点。レンタルは予約時に申込み、集合時刻と使用船を確認する。",
    "field": "富山新港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "タイラバ",
      "船釣り"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "tai-rubber"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "toyama-orca",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "ORCA",
    "prefecture": "富山県",
    "area": "富山県・岩瀬",
    "port": "岩瀬",
    "lat": 36.758088,
    "lng": 137.237685,
    "fish": [
      "ブリ",
      "アカムツ",
      "ケンサキイカ"
    ],
    "methods": [
      "ジギング",
      "キャスティング",
      "イカメタル"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "ブリのジギング・キャスティングやアカムツを狙う富山湾の遊漁船。ORCAとARCの2艇を運航する。",
    "googleQuery": "富山県 ORCA",
    "officialUrl": "https://orca.seastyle.co.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://orca.seastyle.co.jp/"
      }
    ],
    "positionNote": "マーカーはORCA側の公式案内地点。ARCは集合場所が異なるため予約船名を照合する。",
    "access": "マーカーはORCA側の公式案内地点。ARCは集合場所が異なるため予約船名を照合する。",
    "field": "岩瀬を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ジギング",
      "キャスティング",
      "イカメタル"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "jigging",
      "casting",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "toyama-daina",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "Daina",
    "prefecture": "富山県",
    "area": "富山県・新湊海竜マリーナ",
    "port": "新湊海竜マリーナ",
    "lat": 36.7734094,
    "lng": 137.1362877,
    "fish": [
      "アジ",
      "アマダイ",
      "アカムツ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "大アジ・アマダイ・アカムツなどを狙う富山湾の船。釣り物と便の長さを予約時に相談する。",
    "googleQuery": "富山県 Daina",
    "officialUrl": "https://toyamabay-daina.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://toyamabay-daina.com/"
      },
      {
        "label": "公式：アクセス・集合案内",
        "url": "https://toyamabay-daina.com/%e3%82%a2%e3%82%af%e3%82%bb%e3%82%b9%e3%83%9e%e3%83%83%e3%83%97/"
      }
    ],
    "positionNote": "公式指定の集合場所は海の駅サザン共有駐車場。マーカーは集合地点を示し、船の係留位置は当日案内に従う。",
    "access": "公式指定の集合場所は海の駅サザン共有駐車場。マーカーは集合地点を示し、船の係留位置は当日案内に従う。",
    "field": "新湊海竜マリーナを拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kanazawa-usagimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "うさぎ丸",
    "prefecture": "石川県",
    "area": "石川県・金沢港",
    "port": "金沢港",
    "lat": 36.6171031,
    "lng": 136.6042292,
    "fish": [
      "スズキ",
      "ブリ",
      "マダイ",
      "アジ",
      "ケンサキイカ"
    ],
    "methods": [
      "ジギング",
      "タイラバ",
      "イカメタル",
      "サビキ"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": true,
    "kids": false,
    "note": "金沢港近海のボートシーバスから沖のタイラバまで相談できるガイド船。夜のイカ・アジ便も案内している。",
    "googleQuery": "石川県 うさぎ丸",
    "officialUrl": "https://usagi-maru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://usagi-maru.com/"
      }
    ],
    "positionNote": "ウォーターフロントパーク金沢のD6係留。マーカーは公式集合施設で、受付後に指定船へ向かう。",
    "access": "ウォーターフロントパーク金沢のD6係留。マーカーは公式集合施設で、受付後に指定船へ向かう。",
    "field": "金沢港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ジギング",
      "タイラバ",
      "イカメタル",
      "サビキ"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "jigging",
      "tai-rubber",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "noto-gorituri",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "GORITURI",
    "prefecture": "石川県",
    "area": "石川県・鹿波漁港",
    "port": "鹿波漁港",
    "lat": 37.2001237,
    "lng": 136.9867165,
    "fish": [
      "アジ",
      "マダイ",
      "キジハタ",
      "アオリイカ"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "ティップラン"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": true,
    "kids": false,
    "note": "穴水町の鹿波漁港から出船。アジ便とタイラバ・スーパーライトジギングなど、内浦の釣りを案内する。",
    "googleQuery": "石川県 GORITURI",
    "officialUrl": "https://www.gorituri.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://www.gorituri.com/"
      }
    ],
    "positionNote": "港の共同駐車場を利用。公式アクセス写真の進入経路を確認し、他船の作業を妨げない位置に駐車する。",
    "access": "港の共同駐車場を利用。公式アクセス写真の進入経路を確認し、他船の作業を妨げない位置に駐車する。",
    "field": "鹿波漁港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "タイラバ",
      "ジギング",
      "ティップラン"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "tiprun"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kanazawa-kairyumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "海龍丸（金沢港・大野）",
    "prefecture": "石川県",
    "area": "石川県・金沢港・大野",
    "port": "金沢港・大野",
    "lat": 36.61547729999999,
    "lng": 136.6042175,
    "fish": [
      "ケンサキイカ",
      "アオリイカ",
      "ブリ"
    ],
    "methods": [
      "イカメタル",
      "ジギング",
      "落とし込み"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "金沢港大野から出るイカメタルの船。イカ便の季節終了後はタテ釣り・ジギング・夜アオリなどへ切り替わる。",
    "googleQuery": "石川県 海龍丸",
    "officialUrl": "https://kairyu-kanazawa.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://kairyu-kanazawa.jp/"
      },
      {
        "label": "公式：アクセス・集合案内",
        "url": "https://kairyu-kanazawa.jp/access.html"
      }
    ],
    "positionNote": "公式の乗船場所地図を掲載。船長指定の集合時間までは車内で待機する案内がある。",
    "access": "公式の乗船場所地図を掲載。船長指定の集合時間までは車内で待機する案内がある。",
    "field": "金沢港・大野を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "イカメタル",
      "ジギング",
      "落とし込み"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "ika-metal",
      "jigging",
      "otoshikomi"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kanazawa-soyumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "双雄丸",
    "prefecture": "石川県",
    "area": "石川県・金沢港・みなと橋",
    "port": "金沢港・みなと橋",
    "lat": 36.613468,
    "lng": 136.6059831,
    "fish": [
      "ケンサキイカ",
      "アジ",
      "メバル"
    ],
    "methods": [
      "イカメタル",
      "船釣り",
      "落とし込み"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "イカ便を中心に、アジ・ハチメやタテ釣りも案内。イカ便は主に初夏から初秋で、便の有無を先に確認する。",
    "googleQuery": "石川県 双雄丸",
    "officialUrl": "https://www.soyumaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://www.soyumaru.com/"
      }
    ],
    "positionNote": "大野町みなと橋付近の公式乗船地点。予約便の集合時刻と当日の出船判断を確認する。",
    "access": "大野町みなと橋付近の公式乗船地点。予約便の集合時刻と当日の出船判断を確認する。",
    "field": "金沢港・みなと橋を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "イカメタル",
      "船釣り",
      "落とし込み"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "ika-metal",
      "otoshikomi"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kaga-yuomaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "遊王丸",
    "prefecture": "石川県",
    "area": "石川県・塩屋港",
    "port": "塩屋港",
    "lat": 36.2932384,
    "lng": 136.2528088,
    "fish": [
      "ブリ",
      "マダイ",
      "アオリイカ",
      "ケンサキイカ"
    ],
    "methods": [
      "ジギング",
      "イカメタル",
      "ティップラン"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": true,
    "kids": false,
    "note": "塩屋港から加賀沖・小松沖へ。ジギング、イカメタル、ティップラン、タテ釣りを季節に応じて案内する。",
    "googleQuery": "石川県 遊王丸",
    "officialUrl": "https://yuomaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://yuomaru.com/"
      }
    ],
    "positionNote": "公式アクセス地図の塩屋港内。船長指定の駐車場所と集合時刻を予約時に確認する。",
    "access": "公式アクセス地図の塩屋港内。船長指定の駐車場所と集合時刻を予約時に確認する。",
    "field": "塩屋港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ジギング",
      "イカメタル",
      "ティップラン"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "jigging",
      "ika-metal",
      "tiprun"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "noto-yushinmaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "遊心丸",
    "prefecture": "石川県",
    "area": "石川県・西海漁港",
    "port": "西海漁港",
    "lat": 37.1484805,
    "lng": 136.7009368,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "志賀町の西海漁港を拠点とする遊漁船。公式の予約状況と直近の海況記事を確認して釣行を組む。",
    "googleQuery": "石川県 遊心丸",
    "officialUrl": "http://shintokumaru.blog31.fc2.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "http://shintokumaru.blog31.fc2.com/"
      }
    ],
    "positionNote": "公式ブログ掲載の停留所を使用。連絡がつながりにくい時間もあるため、予約を済ませてから訪れる。",
    "access": "公式ブログ掲載の停留所を使用。連絡がつながりにくい時間もあるため、予約を済ませてから訪れる。",
    "field": "西海漁港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "maze-koukaimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "光海丸",
    "prefecture": "新潟県",
    "area": "新潟県・間瀬港",
    "port": "間瀬港",
    "lat": 37.7401051,
    "lng": 138.7983622,
    "fish": [
      "マダラ",
      "アオリイカ",
      "マダイ"
    ],
    "methods": [
      "ジギング",
      "タイラバ",
      "ティップラン"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "間瀬港から佐渡方面のジギング・タイラバやマダラ、夜アオリなどへ出船する。便ごとに水深とタックルが変わる。",
    "googleQuery": "新潟県 光海丸",
    "officialUrl": "https://koukaimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://koukaimaru.com/"
      },
      {
        "label": "公式：アクセス・集合案内",
        "url": "https://koukaimaru.com/access/"
      }
    ],
    "positionNote": "公式アクセスページが示す間瀬港の案内地点。受付と乗船手順を船宿に確認する。",
    "access": "公式アクセスページが示す間瀬港の案内地点。受付と乗船手順を船宿に確認する。",
    "field": "間瀬港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ジギング",
      "タイラバ",
      "ティップラン"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "jigging",
      "tai-rubber",
      "tiprun"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "naoetsu-rikimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "里輝丸",
    "prefecture": "新潟県",
    "area": "新潟県・直江津港",
    "port": "直江津港",
    "lat": 37.1942885,
    "lng": 138.2661768,
    "fish": [
      "マダイ",
      "ヒラメ",
      "アジ",
      "ブリ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "直江津港黒井を拠点にマダイを通年案内し、ヒラメ・アジ・イカ・青物なども季節便で狙う。",
    "googleQuery": "新潟県 里輝丸",
    "officialUrl": "https://rikimarufishing.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://rikimarufishing.com/"
      },
      {
        "label": "公式：アクセス・集合案内",
        "url": "https://www.rikimaru.jp.net/"
      }
    ],
    "positionNote": "上越市漁業協同組合向かいの公式乗船地点。2025年10月に移転した新公式サイトで予約状況を確認する。",
    "access": "上越市漁業協同組合向かいの公式乗船地点。2025年10月に移転した新公式サイトで予約状況を確認する。",
    "field": "直江津港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "arimagawa-hakkaimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "八海丸",
    "prefecture": "新潟県",
    "area": "新潟県・有間川漁港",
    "port": "有間川漁港",
    "lat": 37.1643886,
    "lng": 138.1396991,
    "fish": [
      "ブリ",
      "ヒラマサ"
    ],
    "methods": [
      "ジギング",
      "キャスティング"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "上越沖のジギングを主軸とする船。ブリ・ワラサ・ヒラマサなど、募集便に合ったジグとラインを用意する。",
    "googleQuery": "新潟県 八海丸",
    "officialUrl": "https://hakkaimaru.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://hakkaimaru.net/"
      }
    ],
    "positionNote": "公式に案内された有間川漁港の出船地点。予約時に集合時刻と必要タックルを確認する。",
    "access": "公式に案内された有間川漁港の出船地点。予約時に集合時刻と必要タックルを確認する。",
    "field": "有間川漁港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ジギング",
      "キャスティング"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "jigging",
      "casting"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "fukui-kaiyumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "海祐丸",
    "prefecture": "福井県",
    "area": "福井県・福井新港",
    "port": "福井新港",
    "lat": 36.204189,
    "lng": 136.133873,
    "fish": [
      "ヒラマサ",
      "ブリ",
      "マダイ",
      "アマダイ"
    ],
    "methods": [
      "ジギング",
      "タイラバ"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "三国沖・玄達瀬などへ出るルアー専門船。ジギングとタイラバの便を案内している。",
    "googleQuery": "福井県 海祐丸",
    "officialUrl": "https://kaiyu-maru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://kaiyu-maru.com/"
      },
      {
        "label": "公式：アクセス・集合案内",
        "url": "https://kaiyu-maru.com/access.htm"
      }
    ],
    "positionNote": "公式アクセスの福井新港出船地点。古い三国港の案内と混同せず、予約時の指定場所を優先する。",
    "access": "公式アクセスの福井新港出船地点。古い三国港の案内と混同せず、予約時の指定場所を優先する。",
    "field": "福井新港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ジギング",
      "タイラバ"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "jigging",
      "tai-rubber"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "takasu-blues",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "Blues",
    "prefecture": "福井県",
    "area": "福井県・鷹巣港",
    "port": "鷹巣港",
    "lat": 36.1294388,
    "lng": 136.0578194,
    "fish": [
      "ブリ",
      "マダイ",
      "アジ",
      "ケンサキイカ"
    ],
    "methods": [
      "ジギング",
      "タイラバ",
      "イカメタル"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "近海・玄達瀬のジギング、タイラバ、夜のイカ・アジ便を案内するブルーズ。",
    "googleQuery": "福井県 Blues",
    "officialUrl": "https://blues-maru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://blues-maru.com/"
      }
    ],
    "positionNote": "現行公式サイトの鷹巣港を掲載。旧来の三国方面の集合案内ではなく、現在のアクセスページを確認する。",
    "access": "現行公式サイトの鷹巣港を掲載。旧来の三国方面の集合案内ではなく、現在のアクセスページを確認する。",
    "field": "鷹巣港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ジギング",
      "タイラバ",
      "イカメタル"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "jigging",
      "tai-rubber",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "mikuni-hiryu",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "飛龍",
    "prefecture": "福井県",
    "area": "福井県・三国",
    "port": "三国",
    "lat": 36.2160161,
    "lng": 136.1346825,
    "fish": [
      "マダイ",
      "ケンサキイカ",
      "ブリ"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "イカメタル"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "タイラバ・タイジグ・SLJとイカメタル、ジギングを案内。昼夜のリレー便は持ち物も分けて準備したい。",
    "googleQuery": "福井県 飛龍",
    "officialUrl": "https://hiryu.fishing/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://hiryu.fishing/"
      },
      {
        "label": "公式：アクセス・集合案内",
        "url": "https://hiryu.fishing/access.html"
      }
    ],
    "positionNote": "公式共有地図の「乗船場」を採用。周辺コンビニや駐車案内のピンとは区別している。",
    "access": "公式共有地図の「乗船場」を採用。周辺コンビニや駐車案内のピンとは区別している。",
    "field": "三国を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "タイラバ",
      "ジギング",
      "イカメタル"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "mikuni-vertical",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "VERTICAL",
    "prefecture": "福井県",
    "area": "福井県・三国",
    "port": "三国",
    "lat": 36.2168611,
    "lng": 136.1356389,
    "fish": [
      "ブリ",
      "ヒラマサ"
    ],
    "methods": [
      "ジギング",
      "キャスティング"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "三国沖・玄達瀬のルアー船。SLJからジギング、キャスティングまで募集便に応じた釣りを行う。",
    "googleQuery": "福井県 VERTICAL",
    "officialUrl": "https://vertical-jp.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://vertical-jp.com/"
      }
    ],
    "positionNote": "公式案内に埋め込まれた座標ピンの集合地点。使用船と駐車位置は予約時に確認する。",
    "access": "公式案内に埋め込まれた座標ピンの集合地点。使用船と駐車位置は予約時に確認する。",
    "field": "三国を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ジギング",
      "キャスティング"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "jigging",
      "casting"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "mikuni-shinkaimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "神海丸",
    "prefecture": "福井県",
    "area": "福井県・三国港",
    "port": "三国港",
    "lat": 36.2136389,
    "lng": 136.1474167,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "三国港を拠点とする神海丸。最新の沖の状況と募集便は公式釣果ブログ・予約案内から確認できる。",
    "googleQuery": "福井県 神海丸",
    "officialUrl": "https://www.shinkaimaru.apdw.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://www.shinkaimaru.apdw.jp/"
      }
    ],
    "positionNote": "公式アクセス地図の位置を使用。狙う魚、釣法、集合時刻は予約の際に船長と確認する。",
    "access": "公式アクセス地図の位置を使用。狙う魚、釣法、集合時刻は予約の際に船長と確認する。",
    "field": "三国港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "gumizaki-yoneshomaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "米翔丸",
    "prefecture": "福井県",
    "area": "福井県・茱崎港",
    "port": "茱崎港",
    "lat": 36.040003,
    "lng": 136.0110506,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "福井市茱崎港の釣船。公式釣果ブログと料金案内を照合し、希望する便を予約して利用する。",
    "googleQuery": "福井県 米翔丸",
    "officialUrl": "https://yoneshoumaru.web.fc2.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://yoneshoumaru.web.fc2.com/"
      },
      {
        "label": "公式：アクセス・集合案内",
        "url": "https://yoneshoumaru.web.fc2.com/access.html"
      }
    ],
    "positionNote": "公式アクセス掲載の米翔丸地点。港内の駐車場所と乗船手順は予約時の案内に従う。",
    "access": "公式アクセス掲載の米翔丸地点。港内の駐車場所と乗船手順は予約時の案内に従う。",
    "field": "茱崎港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "gumizaki-deepocean",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "ディープオーシャン",
    "prefecture": "福井県",
    "area": "福井県・茱崎港",
    "port": "茱崎港",
    "lat": 36.0435471,
    "lng": 136.011225,
    "fish": [
      "マダイ",
      "マダラ",
      "イサキ",
      "アジ",
      "ケンサキイカ"
    ],
    "methods": [
      "タイラバ",
      "イカメタル",
      "船釣り"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "イカメタル、タイラバ、タテ釣り、タラ釣りなどを案内。ライトイサキやバチコンの仕掛け解説も公式にある。",
    "googleQuery": "福井県 ディープオーシャン",
    "officialUrl": "https://www.deep-ocean.biz/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://www.deep-ocean.biz/"
      }
    ],
    "positionNote": "公式集合地図と港内道順を併用する。乗船名簿の記入を済ませ、指定岸壁へ向かう。",
    "access": "公式集合地図と港内道順を併用する。乗船名簿の記入を済ませ、指定岸壁へ向かう。",
    "field": "茱崎港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "タイラバ",
      "イカメタル",
      "船釣り"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "gumizaki-maruichi",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "まるいち",
    "prefecture": "福井県",
    "area": "福井県・茱崎港",
    "port": "茱崎港",
    "lat": 36.042966,
    "lng": 136.012164,
    "fish": [
      "マダイ",
      "ケンサキイカ"
    ],
    "methods": [
      "ひとつテンヤ",
      "イカメタル"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": true,
    "kids": false,
    "note": "茱崎港の遊漁船まるいち。ひとつテンヤやイカメタルなど、予約便の釣法に合わせて参加する。",
    "googleQuery": "福井県 まるいち",
    "officialUrl": "https://maruiti-gumizaki.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://maruiti-gumizaki.com/"
      }
    ],
    "positionNote": "公式地図は越廼漁協を案内しているため、マーカーは案内拠点。実際の船付けと駐車位置は船長に確認する。",
    "access": "公式地図は越廼漁協を案内しているため、マーカーは案内拠点。実際の船付けと駐車位置は船長に確認する。",
    "field": "茱崎港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ひとつテンヤ",
      "イカメタル"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "hitotsu-tenya",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "gumizaki-hozan",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "HOZAN",
    "prefecture": "福井県",
    "area": "福井県・茱崎港",
    "port": "茱崎港",
    "lat": 36.0393516,
    "lng": 136.0112051,
    "fish": [
      "ヒラマサ",
      "ブリ",
      "アオリイカ",
      "ケンサキイカ"
    ],
    "methods": [
      "ジギング",
      "ティップラン",
      "イカメタル"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "茱崎港のHOZANⅡ。青物のジギングから夜のイカメタル、秋のティップランまで季節便を案内する。",
    "googleQuery": "福井県 HOZAN",
    "officialUrl": "https://hozan130.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://hozan130.jp/"
      },
      {
        "label": "公式：アクセス・集合案内",
        "url": "https://hozan130.jp/new-access/"
      }
    ],
    "positionNote": "現行公式アクセスのHOZANⅡ地点。船名と便を確認して指定時刻に集合する。",
    "access": "現行公式アクセスのHOZANⅡ地点。船名と便を確認して指定時刻に集合する。",
    "field": "茱崎港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ジギング",
      "ティップラン",
      "イカメタル"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "jigging",
      "tiprun",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "echizen-kinsyomaru17",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "第17金松丸",
    "prefecture": "福井県",
    "area": "福井県・越前港・宿",
    "port": "越前港・宿",
    "lat": 35.9515315,
    "lng": 135.9852754,
    "fish": [
      "マダイ",
      "アオリイカ",
      "ケンサキイカ"
    ],
    "methods": [
      "タイラバ",
      "ティップラン",
      "イカメタル"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "越前港を拠点にイカメタルとタイラバを中心に出船する第17金松丸。秋はティップラン便も案内する。",
    "googleQuery": "福井県 第17金松丸",
    "officialUrl": "https://17kinsyou.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://17kinsyou.com/"
      }
    ],
    "positionNote": "公式の「金松丸出船場所」を採用。オンライン乗船名簿は予約フォームとは別なので予約を先に済ませる。",
    "access": "公式の「金松丸出船場所」を採用。オンライン乗船名簿は予約フォームとは別なので予約を先に済ませる。",
    "field": "越前港・宿を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "タイラバ",
      "ティップラン",
      "イカメタル"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "tiprun",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "echizen-fukumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "福丸越前",
    "prefecture": "福井県",
    "area": "福井県・厨・白浜",
    "port": "厨・白浜",
    "lat": 35.9294246047287,
    "lng": 135.99743056427917,
    "fish": [
      "ケンサキイカ"
    ],
    "methods": [
      "イカメタル",
      "船釣り"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "越前の釣船福丸。複数船でイカ便を案内し、船や季節によって出港場所・便の長さが異なる。",
    "googleQuery": "福井県 福丸越前",
    "officialUrl": "https://fish-fukumaru.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://fish-fukumaru.net/"
      }
    ],
    "positionNote": "マーカーは公式掲載の厨側案内地点。白浜側の出港案内もあるため、予約船の集合場所を必ず照合する。",
    "access": "マーカーは公式掲載の厨側案内地点。白浜側の出港案内もあるため、予約船の集合場所を必ず照合する。",
    "field": "厨・白浜を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "イカメタル",
      "船釣り"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "tsuruga-seamonkey",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "シーモンキー",
    "prefecture": "福井県",
    "area": "福井県・敦賀港",
    "port": "敦賀港",
    "lat": 35.659986,
    "lng": 136.0618574,
    "fish": [
      "マダイ",
      "ヒラマサ",
      "サワラ",
      "ケンサキイカ"
    ],
    "methods": [
      "ジギング",
      "タイラバ",
      "イカメタル"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "敦賀港のルアー船シーモンキー。ジギング・タイラバと夏場のイカメタルを案内している。",
    "googleQuery": "福井県 シーモンキー",
    "officialUrl": "https://seamonkey2011.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://seamonkey2011.net/"
      }
    ],
    "positionNote": "公式サイトの乗船場所地図を採用。川崎町の港内で指定された駐車・集合位置に従う。",
    "access": "公式サイトの乗船場所地図を採用。川崎町の港内で指定された駐車・集合位置に従う。",
    "field": "敦賀港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ジギング",
      "タイラバ",
      "イカメタル"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "jigging",
      "tai-rubber",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "tsuruga-taimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "泰丸",
    "prefecture": "福井県",
    "area": "福井県・色浜",
    "port": "色浜",
    "lat": 35.7297175,
    "lng": 136.0355498,
    "fish": [
      "アオリイカ",
      "ケンサキイカ",
      "サワラ"
    ],
    "methods": [
      "ティップラン",
      "イカメタル",
      "ジギング"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "敦賀・色浜の泰丸。複数船でイカ・ティップラン・魚便を運航し、便ごとに集合時間や釣法が異なる。",
    "googleQuery": "福井県 泰丸",
    "officialUrl": "https://www.taimaru.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://www.taimaru.jp/"
      },
      {
        "label": "公式：アクセス・集合案内",
        "url": "https://www.taimaru.jp/access/"
      }
    ],
    "positionNote": "公式案内の旅館伊呂波側受付拠点。先に受付を行い、予約した船の乗船案内に従う。",
    "access": "公式案内の旅館伊呂波側受付拠点。先に受付を行い、予約した船の乗船案内に従う。",
    "field": "色浜を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ティップラン",
      "イカメタル",
      "ジギング"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "tiprun",
      "ika-metal",
      "jigging"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "tsuruga-hiyoshimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "日吉丸",
    "prefecture": "福井県",
    "area": "福井県・色浜",
    "port": "色浜",
    "lat": 35.729557,
    "lng": 136.035995,
    "fish": [
      "アジ",
      "マダイ",
      "ケンサキイカ",
      "ヤリイカ"
    ],
    "methods": [
      "船釣り",
      "イカ釣り"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "遊三閣裏の桟橋から出る日吉丸。季節によりイカ・アジ・マダイ・根魚などを案内する。",
    "googleQuery": "福井県 日吉丸",
    "officialUrl": "https://www.yuuzankaku.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://www.yuuzankaku.com/"
      }
    ],
    "positionNote": "公式地図の遊三閣受付地点。船は建物裏の桟橋から出るため、受付後に案内を受ける。",
    "access": "公式地図の遊三閣受付地点。船は建物裏の桟橋から出るため、受付後に案内を受ける。",
    "field": "色浜を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "船釣り",
      "イカ釣り"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "tsuruga-zuishomaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "瑞祥丸",
    "prefecture": "福井県",
    "area": "福井県・浦底",
    "port": "浦底",
    "lat": 35.736584,
    "lng": 136.02829,
    "fish": [
      "アオリイカ",
      "ケンサキイカ"
    ],
    "methods": [
      "ティップラン",
      "イカメタル"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "浦底の瑞祥丸。マイカ半夜便に加え、秋はアオリイカのティップランも募集する。",
    "googleQuery": "福井県 瑞祥丸",
    "officialUrl": "https://zuishomaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://zuishomaru.com/"
      }
    ],
    "positionNote": "公式の浦底乗船案内地点。民宿の休業情報と遊漁船の運航情報は別なので、船の最新予定で確認する。",
    "access": "公式の浦底乗船案内地点。民宿の休業情報と遊漁船の運航情報は別なので、船の最新予定で確認する。",
    "field": "浦底を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "ティップラン",
      "イカメタル"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "tiprun",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "mihama-yoneharumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "米春丸",
    "prefecture": "福井県",
    "area": "福井県・早瀬",
    "port": "早瀬",
    "lat": 35.611162,
    "lng": 135.891736,
    "fish": [
      "ケンサキイカ",
      "ヤリイカ",
      "スルメイカ"
    ],
    "methods": [
      "イカメタル"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "美浜・早瀬の米春丸。イカメタルを主軸に季節のイカを狙い、秋から春には魚便も案内する。",
    "googleQuery": "福井県 米春丸",
    "officialUrl": "https://yoneharumaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://yoneharumaru.com/"
      }
    ],
    "positionNote": "公式アクセスの店舗受付。店前の指定駐車場を利用し、店内で受付してから乗船する。",
    "access": "公式アクセスの店舗受付。店前の指定駐車場を利用し、店内で受付してから乗船する。",
    "field": "早瀬を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "イカメタル"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "obama-fcloud",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "F-cloud",
    "prefecture": "福井県",
    "area": "福井県・小浜新港",
    "port": "小浜新港",
    "lat": 35.500801,
    "lng": 135.7358312,
    "fish": [
      "アジ",
      "アオリイカ",
      "ケンサキイカ"
    ],
    "methods": [
      "バチコン",
      "ティップラン",
      "イカメタル"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "イカメタル・バチコン・ティップランを案内するF-CLOUD。便や船で集合港が異なる。",
    "googleQuery": "福井県 F-cloud",
    "officialUrl": "https://kumomaru.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://kumomaru.net/"
      },
      {
        "label": "公式：アクセス・集合案内",
        "url": "https://kumomaru.net/meeting/"
      }
    ],
    "positionNote": "ここでは公式掲載の小浜新港地点を採用。大島・うみんぴあ発の案内もあるため予約便の集合港を優先する。",
    "access": "ここでは公式掲載の小浜新港地点を採用。大島・うみんぴあ発の案内もあるため予約便の集合港を優先する。",
    "field": "小浜新港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "バチコン",
      "ティップラン",
      "イカメタル"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "tiprun",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "obama-fukumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "福丸小浜",
    "prefecture": "福井県",
    "area": "福井県・小浜新港",
    "port": "小浜新港",
    "lat": 35.4991268,
    "lng": 135.738797,
    "fish": [
      "アマダイ",
      "アオリイカ",
      "ケンサキイカ",
      "ヤリイカ"
    ],
    "methods": [
      "イカメタル",
      "ティップラン",
      "船釣り"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "小浜新港の釣り船福丸。イカ便に加えてアマダイなどの昼便も案内する。",
    "googleQuery": "福井県 福丸小浜",
    "officialUrl": "https://www.e-fukumaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://www.e-fukumaru.com/"
      },
      {
        "label": "公式：アクセス・集合案内",
        "url": "https://www.e-fukumaru.com/access"
      }
    ],
    "positionNote": "フィッシャーマンズワーフ向かいから港に入り、公式道順が示す奥の乗船場へ。船前の指定場所に駐車する。",
    "access": "フィッシャーマンズワーフ向かいから港に入り、公式道順が示す奥の乗船場へ。船前の指定場所に駐車する。",
    "field": "小浜新港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "イカメタル",
      "ティップラン",
      "船釣り"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "ika-metal",
      "tiprun"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "obama-superviking",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "スーパーバイキング",
    "prefecture": "福井県",
    "area": "福井県・小浜新港",
    "port": "小浜新港",
    "lat": 35.4997974,
    "lng": 135.7398519,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "小浜釣り船センターのスーパーバイキング。公式の釣り物・予約状況を確認して参加する。",
    "googleQuery": "福井県 スーパーバイキング",
    "officialUrl": "https://www.baikin-man.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://www.baikin-man.com/"
      },
      {
        "label": "公式：アクセス・集合案内",
        "url": "https://www.baikin-man.com/access.html"
      }
    ],
    "positionNote": "公式アクセス地図が示す小浜新港の乗船位置。集合時刻、道具、駐車場所は予約時に確認する。",
    "access": "公式アクセス地図が示す小浜新港の乗船位置。集合時刻、道具、駐車場所は予約時に確認する。",
    "field": "小浜新港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "obama-naoyukimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "直幸丸",
    "prefecture": "福井県",
    "area": "福井県・西津漁港",
    "port": "西津漁港",
    "lat": 35.5165703,
    "lng": 135.7500077,
    "fish": [
      "マダイ",
      "ケンサキイカ"
    ],
    "methods": [
      "タイラバ",
      "イカメタル"
    ],
    "season": "募集便・季節による。最新の出船予定を確認",
    "beginner": false,
    "kids": false,
    "note": "小浜・西津港の直幸丸。マイカ便を中心に、タイラバなどの募集便も公式に案内する。",
    "googleQuery": "福井県 直幸丸",
    "officialUrl": "https://naoyukimaru.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "公式：釣行プラン・利用条件",
        "url": "https://naoyukimaru.net/"
      }
    ],
    "positionNote": "公式掲載の西津漁港乗船地点。第一・第二の船名と便を照合して集合する。",
    "access": "公式掲載の西津漁港乗船地点。第一・第二の船名と便を照合して集合する。",
    "field": "西津漁港を拠点とする遊漁船。マーカーは船宿の案内地点で、周辺岸壁の一般開放を示すものではない。",
    "bestFor": [
      "タイラバ",
      "イカメタル"
    ],
    "timing": "予約した便の集合時刻・出船判断は船宿の最新連絡を優先。",
    "tips": [
      "狙う魚と便を決め、船宿指定の仕掛け・ラインを確認する",
      "レンタルの有無と貸出品は予約時に確認する"
    ],
    "caution": [
      "予約が必要。天候・海況で中止や行程変更がある",
      "指定されたライフジャケットを着用し、港の作業区域へ無断で入らない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hiranai-kitajimatosen",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "北島渡船",
    "prefecture": "青森県",
    "area": "青森県・清水川漁港",
    "port": "清水川漁港",
    "lat": 40.922147,
    "lng": 141.027932,
    "fish": [
      "マダイ",
      "カレイ",
      "アイナメ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "清水川沖などの乗合・仕立と沖防波堤への渡船を別日程で案内する。渡船先の消波ブロックには上がれない。",
    "googleQuery": "青森県 北島渡船",
    "officialUrl": "http://kitajimatosen.sunnyday.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://kitajimatosen.sunnyday.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190604_4172"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "清水川漁港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "清水川漁港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "sakata-satoya",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "佐藤屋",
    "prefecture": "山形県",
    "area": "山形県・酒田港",
    "port": "酒田港",
    "lat": 38.954937,
    "lng": 139.83422,
    "fish": [
      "マダイ",
      "ヒラメ",
      "アジ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "酒田港からマダイ・ヒラメや夜釣りを募集。予約時に対象魚と昼夜の便を確認する。",
    "googleQuery": "山形県 佐藤屋",
    "officialUrl": "http://www.satouya-sakatakou.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.satouya-sakatakou.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190591_4172"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "酒田港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "酒田港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "tomioka-choeimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "長栄丸",
    "prefecture": "福島県",
    "area": "福島県・富岡漁港",
    "port": "富岡漁港",
    "lat": 37.338125,
    "lng": 141.027417,
    "fish": [
      "マダイ",
      "ヒラメ"
    ],
    "methods": [
      "ジギング",
      "ひとつテンヤ"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "富岡漁港のルアー・テンヤ船。SLJ・スロージギング・ひとつテンヤなどで狙う便を案内する。",
    "googleQuery": "福島県 長栄丸",
    "officialUrl": "http://choeimaru.sakura.ne.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://choeimaru.sakura.ne.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190590_4172"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "富岡漁港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "富岡漁港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "ジギング",
      "ひとつテンヤ"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [
      "jigging",
      "hitotsu-tenya"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "teradomari-fujimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "ふじ丸",
    "prefecture": "新潟県",
    "area": "新潟県・寺泊港",
    "port": "寺泊港",
    "lat": 37.643117,
    "lng": 138.765939,
    "fish": [
      "マダイ",
      "アジ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "寺泊港の釣船。マダイなどの沖釣りを案内し、海況に応じて沖のポイントへ向かう。",
    "googleQuery": "新潟県 ふじ丸",
    "officialUrl": "http://www.teradomari-fujimaru.jp/index.html",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.teradomari-fujimaru.jp/index.html"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190730_4174"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "寺泊港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "寺泊港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "teradomari-katsueimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "克栄丸",
    "prefecture": "新潟県",
    "area": "新潟県・寺泊港",
    "port": "寺泊港",
    "lat": 37.643036,
    "lng": 138.765779,
    "fish": [
      "マダイ",
      "アジ",
      "アマダイ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "寺泊港から沖釣り・夜釣りを案内。乗船前日に海況と出船判断を確認して訪れる。",
    "googleQuery": "新潟県 克栄丸",
    "officialUrl": "https://www.katsueimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.katsueimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190731_4174"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "寺泊港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "寺泊港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "niigata-kaimeimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "魁明丸",
    "prefecture": "新潟県",
    "area": "新潟県・新潟西港",
    "port": "新潟西港",
    "lat": 37.936802,
    "lng": 139.067109,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "新潟西港を起点に、新潟近海・佐渡・粟島方面の釣りを案内する。行先と必要道具は募集便で確認する。",
    "googleQuery": "新潟県 魁明丸",
    "officialUrl": "https://kaimeimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://kaimeimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190728_4174"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "新潟西港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "新潟西港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kurihama-mutsuroku",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "ムツ六釣船店",
    "prefecture": "神奈川県",
    "area": "神奈川県・久里浜港",
    "port": "久里浜港",
    "lat": 35.220744,
    "lng": 139.713339,
    "fish": [
      "マダイ",
      "カワハギ",
      "イサキ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "久里浜港のムツ六釣船店。マダイを含む季節の釣り物と乗合船の予定を公式で案内する。",
    "googleQuery": "神奈川県 ムツ六釣船店",
    "officialUrl": "http://www.mutsuroku.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.mutsuroku.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190621_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "久里浜港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "久里浜港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kubiri-yamashitamaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "山下丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・久比里",
    "port": "久比里",
    "lat": 35.23145,
    "lng": 139.705732,
    "fish": [
      "カワハギ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "久比里の船宿。カワハギを中心とした船釣りを案内し、アサリ餌の準備も予約時に相談できる。",
    "googleQuery": "神奈川県 山下丸",
    "officialUrl": "https://www.yamashitamaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.yamashitamaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190624_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "久比里の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "久比里を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "sajima-tsunemaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "つね丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・佐島港",
    "port": "佐島港",
    "lat": 35.222162,
    "lng": 139.613306,
    "fish": [
      "マダイ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "佐島港の乗合・仕立船。ボート釣りも別メニューで扱うため、希望する利用形態を伝えて予約する。",
    "googleQuery": "神奈川県 つね丸",
    "officialUrl": "https://www.tunemaru.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.tunemaru.net/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190615_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "佐島港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "佐島港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kurihama-kurokawahonke",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "久里浜黒川本家",
    "prefecture": "神奈川県",
    "area": "神奈川県・久里浜港",
    "port": "久里浜港",
    "lat": 35.2265928,
    "lng": 139.7139453,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "久里浜黒川本家の現行公式サイトへ接続。釣行プラン、レンタル、乗船までの流れを事前に確認できる。",
    "googleQuery": "神奈川県 久里浜黒川本家",
    "officialUrl": "http://kurokawa-maru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://kurokawa-maru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190623_4173"
      }
    ],
    "positionNote": "現行公式アクセス地図の店舗受付位置。船着場と駐車場は別のため、受付後に案内を受ける。",
    "access": "現行公式アクセス地図の店舗受付位置。船着場と駐車場は別のため、受付後に案内を受ける。",
    "field": "久里浜港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "sajima-kairakuen",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "海楽園",
    "prefecture": "神奈川県",
    "area": "神奈川県・佐島港",
    "port": "佐島港",
    "lat": 35.220179,
    "lng": 139.614762,
    "fish": [
      "イサキ",
      "マダイ",
      "カワハギ",
      "メバル"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "佐島沖のLT五目、カワハギ、イワシメバルなどを案内。季節で釣り物が替わるため募集便を確認する。",
    "googleQuery": "神奈川県 海楽園",
    "officialUrl": "http://www.sajima-kairakuen.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.sajima-kairakuen.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190626_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "佐島港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "佐島港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "sajima-shiheimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "志平丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・佐島漁港",
    "port": "佐島漁港",
    "lat": 35.222122,
    "lng": 139.615156,
    "fish": [
      "カワハギ",
      "マダイ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "佐島漁港の志平丸。乗合・仕立プランを案内し、貸し竿や仕掛けは予約時に確認できる。",
    "googleQuery": "神奈川県 志平丸",
    "officialUrl": "https://sajima-shiheimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://sajima-shiheimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190629_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "佐島漁港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "佐島漁港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "honmoku-nagasakiya",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "長崎屋",
    "prefecture": "神奈川県",
    "area": "神奈川県・本牧漁港",
    "port": "本牧漁港",
    "lat": 35.427069,
    "lng": 139.680455,
    "fish": [
      "マゴチ",
      "アジ",
      "シロギス"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "本牧漁港から東京湾へ。マゴチ、アジ、シロギスなど季節の魚を狙う船を案内する。",
    "googleQuery": "神奈川県 長崎屋",
    "officialUrl": "http://nagasakimaru.web.fc2.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://nagasakimaru.web.fc2.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190645_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "本牧漁港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "本牧漁港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hayakawa-sakaguchimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "坂口丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・小田原早川港",
    "port": "小田原早川港",
    "lat": 35.240772,
    "lng": 139.147562,
    "fish": [
      "アマダイ",
      "オニカサゴ",
      "キハダ",
      "カツオ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "早川港から相模湾の沖釣りへ。魚種別の仕掛け図・釣り物案内があり、レンタルも相談できる。",
    "googleQuery": "神奈川県 坂口丸",
    "officialUrl": "https://sakaguchimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://sakaguchimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190639_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "小田原早川港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "小田原早川港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "matsuwa-kazuyoshimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "一義丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・松輪江奈港",
    "port": "松輪江奈港",
    "lat": 35.143440718476,
    "lng": 139.667665958405,
    "fish": [
      "マダイ",
      "アジ",
      "キハダ",
      "カツオ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "松輪江奈港の一義丸。剣崎沖を含む相模湾・東京湾口の季節魚を案内する。",
    "googleQuery": "神奈川県 一義丸",
    "officialUrl": "https://kazuyoshimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://kazuyoshimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190616_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "松輪江奈港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "松輪江奈港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "matsuwa-naruginmaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "成銀丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・松輪江奈港",
    "port": "松輪江奈港",
    "lat": 35.143529,
    "lng": 139.667435,
    "fish": [
      "カワハギ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "松輪江奈港から剣崎・城ヶ島沖方面へ出船。カワハギなどの募集便と必要な餌を確認する。",
    "googleQuery": "神奈川県 成銀丸",
    "officialUrl": "https://narugin.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://narugin.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190637_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "松輪江奈港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "松輪江奈港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "yokohama-watanabe",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "渡辺釣船店",
    "prefecture": "神奈川県",
    "area": "神奈川県・新山下",
    "port": "新山下",
    "lat": 35.442614,
    "lng": 139.655435,
    "fish": [
      "アジ",
      "タチウオ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "新山下の渡辺釣船店。アジの餌釣りやタチウオのルアー船など、便ごとに釣法を選ぶ。",
    "googleQuery": "神奈川県 渡辺釣船店",
    "officialUrl": "http://blog.watanabetsuribuneten.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://blog.watanabetsuribuneten.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190614_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "新山下の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "新山下を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "koshigoe-akitaya",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "船宿 秋田屋",
    "prefecture": "神奈川県",
    "area": "神奈川県・腰越港",
    "port": "腰越港",
    "lat": 35.306055,
    "lng": 139.491981,
    "fish": [
      "アマダイ",
      "アジ",
      "マダイ",
      "クロムツ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "腰越の船宿秋田屋。季節の釣り物カレンダーと仕掛け解説を用意し、前泊も相談できる。",
    "googleQuery": "神奈川県 船宿 秋田屋",
    "officialUrl": "http://akitaya1091.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://akitaya1091.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190627_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "腰越港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "腰越港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "chigasaki-kazutoshimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "一俊丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・茅ヶ崎港",
    "port": "茅ヶ崎港",
    "lat": 35.314399,
    "lng": 139.39775,
    "fish": [
      "カワハギ",
      "アマダイ",
      "キハダ",
      "カツオ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "茅ヶ崎の一俊丸。相模湾の季節便が多く、釣り物ごとの集合・乗船手順を確認して参加する。",
    "googleQuery": "神奈川県 一俊丸",
    "officialUrl": "https://kazutoshimaru.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://kazutoshimaru.net/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190609_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "茅ヶ崎港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "茅ヶ崎港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "fukuura-kaitomaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "海斗丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・福浦港",
    "port": "福浦港",
    "lat": 35.150598,
    "lng": 139.131374,
    "fish": [
      "カワハギ",
      "イサキ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "湯河原・福浦港の海斗丸。複数船で季節の釣りを案内し、当日の魚種は予約時に相談する。",
    "googleQuery": "神奈川県 海斗丸",
    "officialUrl": "http://fukuurakaitomaru.web.fc2.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://fukuurakaitomaru.web.fc2.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190657_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "福浦港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "福浦港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "matsuwa-boumenmaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "棒面丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・松輪江奈港",
    "port": "松輪江奈港",
    "lat": 35.1434148020688,
    "lng": 139.667700827122,
    "fish": [
      "マダイ",
      "カワハギ",
      "アジ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "松輪の棒面丸。マダイやカワハギなどの船釣りを案内し、釣り物別の仕掛け図も掲載する。",
    "googleQuery": "神奈川県 棒面丸",
    "officialUrl": "https://boumenmaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://boumenmaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190641_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "松輪江奈港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "松輪江奈港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "chigasaki-okiemonmaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "沖右ヱ門丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・茅ヶ崎港",
    "port": "茅ヶ崎港",
    "lat": 35.315834,
    "lng": 139.397321,
    "fish": [
      "カワハギ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "茅ヶ崎の沖右ヱ門丸。複数船で乗合・仕立を運航するため、予約した釣り物と船を照合する。",
    "googleQuery": "神奈川県 沖右ヱ門丸",
    "officialUrl": "https://www.okiemonmaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.okiemonmaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190612_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "茅ヶ崎港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "茅ヶ崎港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hayama-goemumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "五エム丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・葉山芝崎",
    "port": "葉山芝崎",
    "lat": 35.269405,
    "lng": 139.569073,
    "fish": [
      "カワハギ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "葉山芝崎の五エム丸。初参加向けの乗船手順と仕掛け図を公開し、季節の乗合・仕立船を案内する。",
    "googleQuery": "神奈川県 五エム丸",
    "officialUrl": "http://www.goemumaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.goemumaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190658_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "葉山芝崎の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "葉山芝崎を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hayama-chozaburomaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "長三朗丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・葉山鐙摺港",
    "port": "葉山鐙摺港",
    "lat": 35.28468,
    "lng": 139.568499,
    "fish": [
      "スルメイカ",
      "キハダ",
      "カツオ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "葉山鐙摺港の長三朗丸。コマセのカツオ・キハダ便とイカ便などでは道具が異なるので募集便を確認する。",
    "googleQuery": "神奈川県 長三朗丸",
    "officialUrl": "https://www.chozaburomaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.chozaburomaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190659_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "葉山鐙摺港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "葉山鐙摺港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hayama-hidekichimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "秀吉丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・葉山鐙摺港",
    "port": "葉山鐙摺港",
    "lat": 35.284886,
    "lng": 139.568389,
    "fish": [
      "マダイ",
      "アマダイ",
      "キハダ",
      "カツオ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "葉山鐙摺港の秀吉丸。相模湾の季節魚を案内し、釣り物別のレンタルも予約時に相談できる。",
    "googleQuery": "神奈川県 秀吉丸",
    "officialUrl": "https://www.hidekichimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.hidekichimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190663_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "葉山鐙摺港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "葉山鐙摺港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hayama-aishomaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "愛正丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・葉山鐙摺港",
    "port": "葉山鐙摺港",
    "lat": 35.284426,
    "lng": 139.568618,
    "fish": [
      "アジ",
      "マダイ",
      "キハダ",
      "カツオ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "葉山鐙摺港の愛正丸。複数船で季節便を運航し、アジ五目などのプランも案内する。",
    "googleQuery": "神奈川県 愛正丸",
    "officialUrl": "https://aisho-maru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://aisho-maru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190655_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "葉山鐙摺港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "葉山鐙摺港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hayama-taizoumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "たいぞう丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・葉山鐙摺港",
    "port": "葉山鐙摺港",
    "lat": 35.28461,
    "lng": 139.568542,
    "fish": [
      "アマダイ",
      "マダイ",
      "オニカサゴ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "葉山鐙摺港のたいぞう丸。アマダイなどを狙う便を案内し、水深に合うオモリと仕掛けを確認したい。",
    "googleQuery": "神奈川県 たいぞう丸",
    "officialUrl": "https://taizoumaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://taizoumaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190662_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "葉山鐙摺港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "葉山鐙摺港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "matsuwa-daimatsumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "大松丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・松輪江奈港",
    "port": "松輪江奈港",
    "lat": 35.143288,
    "lng": 139.667387,
    "fish": [
      "マダイ",
      "イサキ",
      "カワハギ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "松輪の大松丸。マダイ・イサキ・カワハギなどの季節便を案内。船宿と船着場は別地点にある。",
    "googleQuery": "神奈川県 大松丸",
    "officialUrl": "http://www5e.biglobe.ne.jp/~daimatsu/daim_joho.htm",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www5e.biglobe.ne.jp/~daimatsu/daim_joho.htm"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190635_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "松輪江奈港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "松輪江奈港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hashirimizu-yoshiakimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "吉明丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・走水港",
    "port": "走水港",
    "lat": 35.264201,
    "lng": 139.731535,
    "fish": [
      "アジ",
      "タチウオ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "走水港の吉明丸。アジを中心とした乗合や季節便を案内し、東京湾口の潮に合う仕掛けを確認する。",
    "googleQuery": "神奈川県 吉明丸",
    "officialUrl": "http://www.yoshiakimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.yoshiakimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190650_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "走水港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "走水港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hakkei-daisanasanagi",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "第三あさなぎ丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・金沢八景",
    "port": "金沢八景",
    "lat": 35.330742,
    "lng": 139.633063,
    "fish": [
      "マダイ",
      "イサキ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "第三あさなぎ丸として運航する金沢八景の船宿。マダイ・イサキの乗合と各種仕立船を案内する。",
    "googleQuery": "神奈川県 第三あさなぎ丸",
    "officialUrl": "https://dai3-asanagimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://dai3-asanagimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190620_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "金沢八景の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "金沢八景を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "koshigoe-takeshimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "多希志丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・腰越漁港",
    "port": "腰越漁港",
    "lat": 35.304918,
    "lng": 139.490701,
    "fish": [
      "カワハギ",
      "アマダイ",
      "マルイカ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "腰越港の多希志丸。カワハギ・アマダイ・マルイカを中心に、アタリを捉える船釣りを案内する。",
    "googleQuery": "神奈川県 多希志丸",
    "officialUrl": "https://takeshimaru.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://takeshimaru.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190630_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "腰越漁港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "腰越漁港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hakkei-kurokawamaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "金沢八景 黒川丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・金沢八景・平潟湾",
    "port": "金沢八景・平潟湾",
    "lat": 35.330886,
    "lng": 139.626164,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "金沢八景黒川丸の乗合・貸切船。レンタルの範囲はプランで異なるため、必要品を予約時に確認する。",
    "googleQuery": "神奈川県 金沢八景 黒川丸",
    "officialUrl": "https://kurokawamaru.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://kurokawamaru.net/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190632_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "金沢八景・平潟湾の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "金沢八景・平潟湾を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hakkei-bentenya",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "弁天屋",
    "prefecture": "神奈川県",
    "area": "神奈川県・金沢八景",
    "port": "金沢八景",
    "lat": 35.332326,
    "lng": 139.623345,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "金沢八景の弁天屋。東京湾の季節魚を案内し、釣り物カレンダーと実際の募集便を分けて掲載している。",
    "googleQuery": "神奈川県 弁天屋",
    "officialUrl": "https://bentenya.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://bentenya.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190618_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "金沢八景の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "金沢八景を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kamoi-goromaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "五郎丸（鴨居大室港）",
    "prefecture": "神奈川県",
    "area": "神奈川県・鴨居大室港",
    "port": "鴨居大室港",
    "lat": 35.241588,
    "lng": 139.727286,
    "fish": [
      "アジ",
      "タチウオ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鴨居の五郎丸。アジ・タチウオのショート便などを案内。タチウオは予約時に希望の釣法を伝える。",
    "googleQuery": "神奈川県 五郎丸",
    "officialUrl": "https://www.gorou.co.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.gorou.co.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190610_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "鴨居大室港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "鴨居大室港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "katsuyama-hoseimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "宝生丸",
    "prefecture": "千葉県",
    "area": "千葉県・勝山漁港",
    "port": "勝山漁港",
    "lat": 35.109485,
    "lng": 139.826614,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "内房・勝山の宝生丸。乗合・仕立とレンタルを案内し、初参加向けに予約から乗船までの流れを公開する。",
    "googleQuery": "千葉県 宝生丸",
    "officialUrl": "https://houseimaru-chiba.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://houseimaru-chiba.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190702_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "勝山漁港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "勝山漁港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hakkei-ichinosemaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "一之瀬丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・金沢八景",
    "port": "金沢八景",
    "lat": 35.331915,
    "lng": 139.623903,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "金沢八景の一之瀬丸。東京湾の乗合・仕立船を案内。釣り物と集合時間は当日の募集内容を確認する。",
    "googleQuery": "神奈川県 一之瀬丸",
    "officialUrl": "https://www.ichinosemaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.ichinosemaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190619_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "金沢八景の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "金沢八景を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "matsuwa-kiheijimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "喜平治丸",
    "prefecture": "神奈川県",
    "area": "神奈川県・松輪港",
    "port": "松輪港",
    "lat": 35.14467,
    "lng": 139.676603,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "松輪の喜平治丸。釣り物・料金・仕掛け図をまとめて案内し、季節の便に合わせた道具を準備できる。",
    "googleQuery": "神奈川県 喜平治丸",
    "officialUrl": "https://kiheijimaru.co/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://kiheijimaru.co/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190608_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "松輪港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "松輪港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "katsuyama-rihachimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "利八丸",
    "prefecture": "千葉県",
    "area": "千葉県・勝山漁港",
    "port": "勝山漁港",
    "lat": 35.109495,
    "lng": 139.826842,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "内房勝山港の利八丸。予約した釣り物に合わせて集合場所と使用する仕掛けを確認して参加する。",
    "googleQuery": "千葉県 利八丸",
    "officialUrl": "https://rihachi.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://rihachi.net/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190703_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "勝山漁港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "勝山漁港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "matsube-shinshomaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "信照丸",
    "prefecture": "千葉県",
    "area": "千葉県・松部港",
    "port": "松部港",
    "lat": 35.143205,
    "lng": 140.290217,
    "fish": [
      "ヒラマサ",
      "ブリ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "勝浦・松部港の信照丸。外房の季節魚や青物を案内し、午前・午後の予約状況を公開している。",
    "googleQuery": "千葉県 信照丸",
    "officialUrl": "http://www2.bii.ne.jp/~sinsho/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www2.bii.ne.jp/~sinsho/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190700_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "松部港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "松部港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "katsuyama-maneimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "萬栄丸",
    "prefecture": "千葉県",
    "area": "千葉県・勝山港",
    "port": "勝山港",
    "lat": 35.109869,
    "lng": 139.827118,
    "fish": [
      "クロムツ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "内房勝山港の萬栄丸。乗合・仕立を案内し、夜ムツ便などでは昼の集合とは時間が異なる。",
    "googleQuery": "千葉県 萬栄丸",
    "officialUrl": "http://www.maneimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.maneimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190697_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "勝山港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "勝山港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "senda-oguramaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "小倉丸",
    "prefecture": "千葉県",
    "area": "千葉県・千田港",
    "port": "千田港",
    "lat": 34.931247,
    "lng": 139.953589,
    "fish": [
      "マダイ",
      "イサキ",
      "ヒラメ",
      "オニカサゴ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "南房総千田港の小倉丸。コマセ・テンヤ・イカ・深場など釣り物別の仕掛けを掲載する。",
    "googleQuery": "千葉県 小倉丸",
    "officialUrl": "http://www.oguramaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.oguramaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190690_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "千田港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "千田港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "ohara-suzueimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "鈴栄丸",
    "prefecture": "千葉県",
    "area": "千葉県・大原港",
    "port": "大原港",
    "lat": 35.252734,
    "lng": 140.40302,
    "fish": [
      "ショウサイフグ",
      "ヒラメ",
      "マダイ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "大原港の鈴栄丸。ショウサイフグを含む季節魚を案内し、フグは船宿の有資格者による処理を利用する。",
    "googleQuery": "千葉県 鈴栄丸",
    "officialUrl": "https://suzueimaru.sakura.ne.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://suzueimaru.sakura.ne.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190679_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "大原港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "大原港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない",
      "フグの自己調理はしない。有資格者による処理を利用する"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "futomi-satoshimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "聡丸",
    "prefecture": "千葉県",
    "area": "千葉県・太海港",
    "port": "太海港",
    "lat": 35.076756,
    "lng": 140.100929,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鴨川太海港の聡丸。自宅住所と集合駐車場が異なるため、公式の集合場所案内を確認する。",
    "googleQuery": "千葉県 聡丸",
    "officialUrl": "https://satoshimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://satoshimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190696_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "太海港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "太海港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kominato-ozawamaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "小沢丸",
    "prefecture": "千葉県",
    "area": "千葉県・小湊港",
    "port": "小湊港",
    "lat": 35.12305,
    "lng": 140.185204,
    "fish": [
      "マダイ",
      "アマダイ",
      "ヒラメ",
      "シマアジ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "小湊港の小沢丸。マダイ・アマダイのリレーなど季節の釣りを案内し、船長ブログで状況を確認できる。",
    "googleQuery": "千葉県 小沢丸",
    "officialUrl": "https://ameblo.jp/tairou-manzoku-4649/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://ameblo.jp/tairou-manzoku-4649/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190705_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "小湊港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "小湊港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "ohara-shikishimamaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "敷嶋丸",
    "prefecture": "千葉県",
    "area": "千葉県・大原港",
    "port": "大原港",
    "lat": 35.2519253609208,
    "lng": 140.405447781086,
    "fish": [
      "ショウサイフグ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "大原港の敷嶋丸。ショウサイフグ便を案内。食用にするフグの処理は有資格者へ任せる。",
    "googleQuery": "千葉県 敷嶋丸",
    "officialUrl": "https://shikishimamaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://shikishimamaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190672_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "大原港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "大原港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない",
      "フグの自己調理はしない。有資格者による処理を利用する"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kominato-suzukimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "寿々木丸",
    "prefecture": "千葉県",
    "area": "千葉県・小湊港",
    "port": "小湊港",
    "lat": 35.118785,
    "lng": 140.194688,
    "fish": [
      "イサキ",
      "マダイ",
      "シマアジ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "小湊港の寿々木丸。イサキやマダイなどの季節魚を案内し、狙う魚に合わせて募集便を確認する。",
    "googleQuery": "千葉県 寿々木丸",
    "officialUrl": "http://www.awa.or.jp/home/suzukim/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.awa.or.jp/home/suzukim/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190691_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "小湊港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "小湊港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kawazu-fudomaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "不動丸",
    "prefecture": "千葉県",
    "area": "千葉県・川津港",
    "port": "川津港",
    "lat": 35.144959,
    "lng": 140.326545,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "勝浦・川津港の不動丸。外房の季節便を案内し、乗合・レンタルなどの利用条件を公式で確認できる。",
    "googleQuery": "千葉県 不動丸",
    "officialUrl": "https://fudoumaru.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://fudoumaru.net/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190704_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "川津港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "川津港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "emi-shineimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "新栄丸",
    "prefecture": "千葉県",
    "area": "千葉県・江見港",
    "port": "江見港",
    "lat": 35.05879,
    "lng": 140.061339,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "江見港の新栄丸。釣り物カレンダーと予約・乗船案内を公開し、季節に合う沖釣りを選べる。",
    "googleQuery": "千葉県 新栄丸",
    "officialUrl": "http://www5b.biglobe.ne.jp/~shinei/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www5b.biglobe.ne.jp/~shinei/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190708_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "江見港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "江見港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "matsube-wahachimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "和八丸",
    "prefecture": "千葉県",
    "area": "千葉県・松部港",
    "port": "松部港",
    "lat": 35.142854,
    "lng": 140.29055,
    "fish": [
      "イサキ",
      "ヒラマサ",
      "マダイ"
    ],
    "methods": [
      "かもし釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "勝浦松部港の和八丸。外房のかもし釣りとルアー釣りなど、釣法が異なる便を案内する。",
    "googleQuery": "千葉県 和八丸",
    "officialUrl": "https://www.gyo.ne.jp/wahachi/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.gyo.ne.jp/wahachi/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190692_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "松部港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "松部港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "かもし釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "urayasu-yoshikyu",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "吉久",
    "prefecture": "千葉県",
    "area": "千葉県・浦安",
    "port": "浦安",
    "lat": 35.664324,
    "lng": 139.887384,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "浦安の吉久。東京湾の季節便を運航し、釣り物カレンダーと料金表で計画できる。",
    "googleQuery": "千葉県 吉久",
    "officialUrl": "https://www.gyo.ne.jp/yoshikyu/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.gyo.ne.jp/yoshikyu/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190711_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "浦安の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "浦安を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "katakai-daiichishoichi",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "第一正一丸",
    "prefecture": "千葉県",
    "area": "千葉県・片貝港",
    "port": "片貝港",
    "lat": 35.539634,
    "lng": 140.45513,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "片貝の第一正一丸。第三正一丸とは営業状況が異なるため、第一の運航日と予約を確認する。",
    "googleQuery": "千葉県 第一正一丸",
    "officialUrl": "http://shouichimaru.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://shouichimaru.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190684_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "片貝港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "片貝港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "urayasu-yoshinoya",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "吉野屋",
    "prefecture": "千葉県",
    "area": "千葉県・浦安",
    "port": "浦安",
    "lat": 35.663712,
    "lng": 139.887301,
    "fish": [
      "アジ",
      "タチウオ",
      "シロギス",
      "カワハギ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "浦安の吉野屋。東京湾の釣船と屋形船は別プラン。船釣りの魚種別予定を選んで予約する。",
    "googleQuery": "千葉県 吉野屋",
    "officialUrl": "https://www.funayado-yoshinoya.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.funayado-yoshinoya.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190709_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "浦安の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "浦安を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "funakata-masumimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "真澄丸",
    "prefecture": "千葉県",
    "area": "千葉県・船形港",
    "port": "船形港",
    "lat": 35.023618,
    "lng": 139.848565,
    "fish": [
      "オニカサゴ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "館山船形港の真澄丸。オニカサゴを狙う深場の釣りを案内し、仕掛けとオモリは船宿指定を確認する。",
    "googleQuery": "千葉県 真澄丸",
    "officialUrl": "http://www.masumimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.masumimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190693_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "船形港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "船形港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kanaya-koshinmaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "光進丸",
    "prefecture": "千葉県",
    "area": "千葉県・金谷港",
    "port": "金谷港",
    "lat": 35.163534,
    "lng": 139.820504,
    "fish": [
      "カワハギ",
      "アジ",
      "アオリイカ",
      "マルイカ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "金谷港の光進丸。金谷沖のカワハギ・アジ・イカなどを案内し、釣具店と釣船の情報を掲載する。",
    "googleQuery": "千葉県 光進丸",
    "officialUrl": "http://www.koushin-group.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.koushin-group.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190706_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "金谷港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "金谷港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "katakai-kotatsumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "幸辰丸",
    "prefecture": "千葉県",
    "area": "千葉県・片貝港",
    "port": "片貝港",
    "lat": 35.539612,
    "lng": 140.455806,
    "fish": [
      "ヒラメ",
      "イサキ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "片貝港の幸辰丸。ヒラメやイサキなど季節便を案内し、貸道具は予約時に申し込む。",
    "googleQuery": "千葉県 幸辰丸",
    "officialUrl": "https://koutatsumaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://koutatsumaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190682_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "片貝港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "片貝港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "iioka-sanjiroumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "三次郎丸",
    "prefecture": "千葉県",
    "area": "千葉県・飯岡港",
    "port": "飯岡港",
    "lat": 35.693465,
    "lng": 140.736153,
    "fish": [
      "マダイ",
      "ヒラメ",
      "ヤリイカ"
    ],
    "methods": [
      "タイラバ"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "飯岡港の三次郎丸。季節魚の餌釣りやタイラバなどの釣行プランを案内する。",
    "googleQuery": "千葉県 三次郎丸",
    "officialUrl": "https://sanjirou.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://sanjirou.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190671_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "飯岡港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "飯岡港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "タイラバ"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [
      "tai-rubber"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "katakai-kimimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "喜美丸",
    "prefecture": "千葉県",
    "area": "千葉県・片貝港",
    "port": "片貝港",
    "lat": 35.539979,
    "lng": 140.456214,
    "fish": [
      "ハナダイ",
      "ヒラメ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "九十九里・片貝の喜美丸。ハナダイ・ヒラメなどの船釣りを案内し、乗船前の流れも公式で確認できる。",
    "googleQuery": "千葉県 喜美丸",
    "officialUrl": "http://www.kimimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.kimimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190686_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "片貝港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "片貝港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hasaki-hamanasumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "浜茄子丸",
    "prefecture": "茨城県",
    "area": "茨城県・波崎港",
    "port": "波崎港",
    "lat": 35.742289,
    "lng": 140.833848,
    "fish": [
      "マダイ",
      "ヤリイカ",
      "アマダイ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "波崎港のはまなす丸。沖の季節魚を案内し、釣り物と使用道具を予約時に確認する。",
    "googleQuery": "茨城県 浜茄子丸",
    "officialUrl": "http://www.portland.ne.jp/~hamanasu/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.portland.ne.jp/~hamanasu/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190717_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "波崎港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "波崎港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hasaki-shoeimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "庄栄丸",
    "prefecture": "茨城県",
    "area": "茨城県・波崎港",
    "port": "波崎港",
    "lat": 35.743482,
    "lng": 140.829588,
    "fish": [
      "アカムツ",
      "ヒラメ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "波崎の庄栄丸。ヒラメの時期以外は職漁と遊漁を分け、募集日を限定する場合がある。",
    "googleQuery": "茨城県 庄栄丸",
    "officialUrl": "http://h-syoueimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://h-syoueimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190720_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "波崎港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "波崎港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kashima-yutakamaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "豊丸",
    "prefecture": "茨城県",
    "area": "茨城県・鹿嶋旧港",
    "port": "鹿嶋旧港",
    "lat": 35.937599,
    "lng": 140.70051,
    "fish": [
      "マダイ",
      "ヒラメ",
      "ヤリイカ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鹿嶋旧港の豊丸。季節の乗合・仕立を案内し、初心者も釣り方を相談できる。",
    "googleQuery": "茨城県 豊丸",
    "officialUrl": "https://yutakamaru-kashima.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://yutakamaru-kashima.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190714_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "鹿嶋旧港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "鹿嶋旧港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kuzaki-kokuseimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "国盛丸",
    "prefecture": "三重県",
    "area": "三重県・国崎港",
    "port": "国崎港",
    "lat": 34.411982,
    "lng": 136.923541,
    "fish": [
      "カワハギ",
      "ヒラメ",
      "マダイ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鳥羽・国崎の国盛丸。季節の魚に合わせた船釣りを案内し、魚種別の釣り暦を掲載する。",
    "googleQuery": "三重県 国盛丸",
    "officialUrl": "http://www.kokuseimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.kokuseimaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190738_4175"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "国崎港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "国崎港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kashima-koueimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "幸栄丸",
    "prefecture": "茨城県",
    "area": "茨城県・鹿嶋旧港",
    "port": "鹿嶋旧港",
    "lat": 35.938067,
    "lng": 140.699437,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鹿嶋旧港の幸栄丸。外洋の季節魚を狙うプランを案内し、初心者向けの利用手順も掲載する。",
    "googleQuery": "茨城県 幸栄丸",
    "officialUrl": "https://koueimaru-f.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://koueimaru-f.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190605_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "鹿嶋旧港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "鹿嶋旧港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kashima-nagaokamaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "長岡丸",
    "prefecture": "茨城県",
    "area": "茨城県・鹿嶋旧港",
    "port": "鹿嶋旧港",
    "lat": 35.9368794,
    "lng": 140.6986964,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鹿嶋旧港の長岡丸。現行公式の乗船位置を掲載し、古い港内位置情報とは区別している。",
    "googleQuery": "茨城県 長岡丸",
    "officialUrl": "https://nagaokamaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://nagaokamaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190713_4173"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "現行公式サイトの乗船地点を採用。古い船宿一覧とは位置が異なるため公式アクセスを優先する。",
    "field": "鹿嶋旧港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kuzaki-katsumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "勝丸",
    "prefecture": "三重県",
    "area": "三重県・国崎港",
    "port": "国崎港",
    "lat": 34.411796,
    "lng": 136.921459,
    "fish": [
      "マダイ",
      "ヒラメ",
      "タチウオ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鳥羽・国崎の勝丸。季節の釣果・予約状況を掲載し、魚種ごとの船釣りを案内する。",
    "googleQuery": "三重県 勝丸",
    "officialUrl": "http://www.katsumaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.katsumaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190735_4175"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "国崎港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "国崎港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kuzaki-asahimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "朝日丸（国崎港）",
    "prefecture": "三重県",
    "area": "三重県・国崎港",
    "port": "国崎港",
    "lat": 34.41176,
    "lng": 136.921374,
    "fish": [
      "マダイ",
      "ヒラメ",
      "アジ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "国崎の朝日丸。季節の船釣りを案内し、最新の釣果と出船予定は船宿の更新情報で確認する。",
    "googleQuery": "三重県 朝日丸",
    "officialUrl": "http://www.turinet.com/mkz-asahimaru.php",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.turinet.com/mkz-asahimaru.php"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190740_4175"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "国崎港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "国崎港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kasaoka-akou",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "遊漁船あこう",
    "prefecture": "岡山県",
    "area": "岡山県・笠岡港",
    "port": "笠岡港",
    "lat": 34.502826,
    "lng": 133.503349,
    "fish": [
      "キジハタ",
      "メバル",
      "タチウオ",
      "カワハギ"
    ],
    "methods": [
      "タイラバ",
      "ジギング"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "笠岡港から瀬戸内の島々へ向かう遊漁船あこう。タイラバやジギングなど便ごとの釣法を案内する。",
    "googleQuery": "岡山県 遊漁船あこう",
    "officialUrl": "http://akou.ninja-x.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://akou.ninja-x.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190757_4177"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "笠岡港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "笠岡港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "タイラバ",
      "ジギング"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "suhara-karumomaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "かるも丸",
    "prefecture": "和歌山県",
    "area": "和歌山県・栖原港",
    "port": "栖原港",
    "lat": 34.041512,
    "lng": 135.162241,
    "fish": [
      "カワハギ",
      "アジ",
      "タチウオ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "湯浅・栖原のかるも丸。船釣りと磯渡し・筏釣りは利用形態が異なるため予約時に希望を伝える。",
    "googleQuery": "和歌山県 かるも丸",
    "officialUrl": "https://minnaga.com/karumomaru/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://minnaga.com/karumomaru/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190752_4176"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "栖原港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "栖原港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "yanai-goromaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "五郎丸（柳井港）",
    "prefecture": "山口県",
    "area": "山口県・柳井港",
    "port": "柳井港",
    "lat": 33.956478,
    "lng": 132.129039,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "柳井の五郎丸。近場から沖の釣り場まで案内し、行先・釣り物・出船条件を予約時に確認する。",
    "googleQuery": "山口県 五郎丸",
    "officialUrl": "http://goroumaru.sakura.ne.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://goroumaru.sakura.ne.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190763_4177"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "柳井港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "柳井港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "yanai-ryuhomaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "柳邦丸",
    "prefecture": "山口県",
    "area": "山口県・柳井港",
    "port": "柳井港",
    "lat": 33.956492,
    "lng": 132.128974,
    "fish": [
      "カワハギ",
      "メバル",
      "マダイ",
      "アジ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "柳井港の柳邦丸。カワハギ便やメバルなどの季節魚を案内し、餌の準備は予約時に相談する。",
    "googleQuery": "山口県 柳邦丸",
    "officialUrl": "https://ryuuhoumaru.sakura.ne.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://ryuuhoumaru.sakura.ne.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190762_4177"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "柳井港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "柳井港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "yanai-sakura",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "さくら",
    "prefecture": "山口県",
    "area": "山口県・柳井漁港",
    "port": "柳井漁港",
    "lat": 33.956291,
    "lng": 132.12972,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "柳井漁港から伊予灘・周防灘方面の釣りを案内するさくら。港内の道順を公式地図で確認する。",
    "googleQuery": "山口県 さくら",
    "officialUrl": "https://enjoyfishing.sakura.ne.jp/tizu.html",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://enjoyfishing.sakura.ne.jp/tizu.html"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190761_4177"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "柳井漁港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "柳井漁港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "anan-seiwamaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "フィッシングボート 清和丸",
    "prefecture": "徳島県",
    "area": "徳島県・橘港",
    "port": "橘港",
    "lat": 33.86877040422438,
    "lng": 134.6365168896881,
    "fish": [
      "ブリ",
      "アジ",
      "イサキ",
      "カワハギ",
      "アオリイカ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "阿南・橘の清和丸。乗合・チャーターで青物やイカ、季節の餌釣りを案内する。",
    "googleQuery": "徳島県 フィッシングボート 清和丸",
    "officialUrl": "https://seiwamaru.jimdofree.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://seiwamaru.jimdofree.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190766_4178"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "橘港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "橘港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "takuma-shichiumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "遊漁船 七侑丸",
    "prefecture": "香川県",
    "area": "香川県・詫間港",
    "port": "詫間港",
    "lat": 34.234174114366205,
    "lng": 133.65353175144196,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "七侑丸は荘内半島・塩飽諸島周辺を案内。瀬戸内の季節魚と募集する釣法を予約前に確認する。",
    "googleQuery": "香川県 遊漁船 七侑丸",
    "officialUrl": "https://sitiumaru.sakura.ne.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://sitiumaru.sakura.ne.jp/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190771_4178"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "詫間港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "詫間港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "takamatsu-senshumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "釣船 千秀丸",
    "prefecture": "香川県",
    "area": "香川県・浦生漁港",
    "port": "浦生漁港",
    "lat": 34.363359681068815,
    "lng": 134.0909732196808,
    "fish": [
      "マダイ",
      "タチウオ"
    ],
    "methods": [
      "タイラバ"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "高松の千秀丸。タイラバを中心に瀬戸内の季節魚を案内し、釣り物に応じたレンタルを相談できる。",
    "googleQuery": "香川県 釣船 千秀丸",
    "officialUrl": "https://1000syumaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://1000syumaru.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190768_4178"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "浦生漁港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "浦生漁港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "タイラバ"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [
      "tai-rubber"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "takuma-risky",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "Fishing RISKY",
    "prefecture": "香川県",
    "area": "香川県・詫間港",
    "port": "詫間港",
    "lat": 34.234174114366205,
    "lng": 133.65353175144196,
    "fish": [
      "キジハタ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "詫間を拠点とするFishing RISKY。キジハタなど瀬戸内のルアー釣りを案内する。",
    "googleQuery": "香川県 Fishing RISKY",
    "officialUrl": "http://www.fishingrisky.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "http://www.fishingrisky.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190769_4178"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "詫間港の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "詫間港を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "tokushima-dexter",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "Dexter fishing boat",
    "prefecture": "徳島県",
    "area": "徳島県・松茂",
    "port": "松茂",
    "lat": 34.114799065336285,
    "lng": 134.59902652244568,
    "fish": [
      "マダイ",
      "アオリイカ"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "ティップラン"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鳴門・徳島沖・伊島方面のルアー船。タイラバ、ジギング、ティップランなどを案内する。",
    "googleQuery": "徳島県 Dexter fishing boat",
    "officialUrl": "https://www.dexter-fb.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.dexter-fb.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190782_4178"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "松茂の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "松茂を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "タイラバ",
      "ジギング",
      "ティップラン"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "tiprun"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "takamatsu-kei",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "遊漁船 京kei",
    "prefecture": "香川県",
    "area": "香川県・高松・北浜",
    "port": "高松・北浜",
    "lat": 34.34960237679261,
    "lng": 134.05652829151154,
    "fish": [
      "マダイ",
      "ヒラメ",
      "タチウオ"
    ],
    "methods": [
      "タイラバ",
      "ジギング"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "高松北浜の京kei。タイラバやジギングなど瀬戸内の便を案内し、仕掛け解説も掲載する。",
    "googleQuery": "香川県 遊漁船 京kei",
    "officialUrl": "https://kei-t.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://kei-t.net/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190783_4178"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "高松・北浜の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "高松・北浜を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "タイラバ",
      "ジギング"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "takamatsu-onepiece",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "ファミリーフィッシング ワンピース",
    "prefecture": "香川県",
    "area": "香川県・高松・朝日町",
    "port": "高松・朝日町",
    "lat": 34.348796309868796,
    "lng": 134.07609232406617,
    "fish": [
      "マダイ",
      "カワハギ",
      "ヒラメ"
    ],
    "methods": [
      "タイラバ"
    ],
    "season": "釣り物・募集便による。最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "高松のONE PIECE。タイラバなどの釣りを案内し、初心者向けのレンタルと釣り方説明を用意する。",
    "googleQuery": "香川県 ファミリーフィッシング ワンピース",
    "officialUrl": "https://www.tai-raba.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：運航・釣り物・利用案内",
        "url": "https://www.tai-raba.com/"
      },
      {
        "label": "DAIWA：船宿と乗船地点の案内",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190776_4178"
      }
    ],
    "positionNote": "DAIWAの地図データの乗船マーカーを使用し、現行船宿案内と照合。公式が明示した乗船位置に更新。船宿の利用地点であり、周辺岸壁の一般開放を意味しない。",
    "access": "高松・朝日町の船宿案内位置。予約時に受付・乗船の順序と指定駐車場を確認する。",
    "field": "高松・朝日町を拠点に予約便で沖へ向かう遊漁船。",
    "bestFor": [
      "タイラバ"
    ],
    "timing": "予約した便の集合・出船時刻を船宿へ確認。",
    "tips": [
      "釣り物を決め、船宿指定のオモリ・仕掛けを用意する",
      "貸道具が必要なら予約時に申し込む"
    ],
    "caution": [
      "出船可否は前日の船宿連絡を確認する",
      "指定の救命胴衣を着用し、漁業作業や船の出入りを妨げない"
    ],
    "methodSlugs": [
      "tai-rubber"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "munakata-daikokumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "大黒丸",
    "prefecture": "福岡県",
    "area": "福岡県・鐘崎・地島",
    "port": "鐘崎・地島",
    "lat": 33.8843055556,
    "lng": 130.5284444444,
    "fish": [
      "クエ"
    ],
    "methods": [
      "泳がせ釣り",
      "落とし込み"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "宗像の大黒丸。泳がせや落とし込みなどの餌釣りを案内し、使用港と集合場所は便ごとに確認する。",
    "googleQuery": "福岡県 大黒丸",
    "officialUrl": "https://www.daikokumaru.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://www.daikokumaru.net/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "鐘崎・地島の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "泳がせ釣り",
      "落とし込み"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "nomase",
      "otoshikomi"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "ashiya-kairyumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "海龍丸（芦屋）",
    "prefecture": "福岡県",
    "area": "福岡県・芦屋",
    "port": "芦屋",
    "lat": 33.9091659,
    "lng": 130.6643134,
    "fish": [],
    "methods": [
      "タイラバ",
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "玄界灘の餌釣りとルアー釣りを案内。公式の現行乗船場所は芦屋側の地図を使用している。",
    "googleQuery": "福岡県 海龍丸",
    "officialUrl": "https://kairyumaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://kairyumaru.com/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "https://kairyumaru.com/noriire/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "芦屋の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "タイラバ",
      "船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "tai-rubber"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "konominato-ys",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "Y’s ワイズ",
    "prefecture": "福岡県",
    "area": "福岡県・神湊",
    "port": "神湊",
    "lat": 33.8544768,
    "lng": 130.4821093,
    "fish": [
      "ヒラマサ",
      "クエ"
    ],
    "methods": [
      "ジギング",
      "キャスティング",
      "タイラバ",
      "イカメタル"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "神湊のY’sワイズ。キャスティング・ジギング・アラ釣りなどはそれぞれ予約便と道具を分けて選ぶ。",
    "googleQuery": "福岡県 Ys",
    "officialUrl": "https://ys-ship.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://ys-ship.net/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "https://ys-ship.net/access.html"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "神湊の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "ジギング",
      "キャスティング",
      "タイラバ",
      "イカメタル"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "jigging",
      "casting",
      "tai-rubber",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "wakamatsu-pontos",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "PONTOS",
    "prefecture": "福岡県",
    "area": "福岡県・若松",
    "port": "若松",
    "lat": 33.9049492,
    "lng": 130.8145555,
    "fish": [
      "ヒラマサ",
      "クエ",
      "ケンサキイカ"
    ],
    "methods": [
      "ジギング",
      "落とし込み",
      "イカメタル"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "響灘のPONTOS幸雅丸。青物やアラ、夜焚きイカなどの便を案内。公式料金・アクセスの若松拠点を掲載する。",
    "googleQuery": "福岡県 PONTOS",
    "officialUrl": "https://www.pontos.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://www.pontos.jp/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "若松の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "ジギング",
      "落とし込み",
      "イカメタル"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "jigging",
      "otoshikomi",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kokura-komomo",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "胡百",
    "prefecture": "福岡県",
    "area": "福岡県・小倉・末広",
    "port": "小倉・末広",
    "lat": 33.8906824,
    "lng": 130.9002284,
    "fish": [],
    "methods": [
      "落とし込み"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "響灘・玄界灘の落とし込みを専門に案内する胡百。小倉側の乗船場・駐車場案内を確認して利用する。",
    "googleQuery": "福岡県 胡百",
    "officialUrl": "https://komomo.fishing/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://komomo.fishing/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "https://komomo.fishing/access/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "小倉・末広の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "落とし込み"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "otoshikomi"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "moji-miyabi",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "雅",
    "prefecture": "福岡県",
    "area": "福岡県・門司港",
    "port": "門司港",
    "lat": 33.956767,
    "lng": 130.963505,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "門司港発の遊漁船雅。公式で案内されたノーフォーク広場側の乗船地点から利用する。",
    "googleQuery": "福岡県 雅",
    "officialUrl": "https://www.ship-miyabi.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://www.ship-miyabi.com/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "https://www.ship-miyabi.com/access/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "門司港の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "fukuoka-hiensakura",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "飛燕さくら丸",
    "prefecture": "福岡県",
    "area": "福岡県・福岡・中央区港",
    "port": "福岡・中央区港",
    "lat": 33.5966111111,
    "lng": 130.3815,
    "fish": [
      "マダイ"
    ],
    "methods": [
      "タイラバ"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "福岡市中央区から出る飛燕さくら丸。タイラバ・鯛カブラを主軸にした釣行を案内する。",
    "googleQuery": "福岡県 飛燕さくら丸",
    "officialUrl": "https://www.hiensakuramaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://www.hiensakuramaru.com/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "https://www.hiensakuramaru.com/access.html"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "福岡・中央区港の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "タイラバ"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "tai-rubber"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "fukuoka-kairiki",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "海力",
    "prefecture": "福岡県",
    "area": "福岡県・カモメ広場",
    "port": "カモメ広場",
    "lat": 33.5954276,
    "lng": 130.3801874,
    "fish": [
      "タチウオ"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "イカメタル",
      "落とし込み"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "中央区港の海力。近海から玄界灘方面までの季節便を案内し、釣法ごとのプランを選べる。",
    "googleQuery": "福岡県 海力",
    "officialUrl": "https://kairiki.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://kairiki.net/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "https://kairiki.net/access.php"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "カモメ広場の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "タイラバ",
      "ジギング",
      "イカメタル",
      "落とし込み"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "ika-metal",
      "otoshikomi"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "meinohama-donald",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "DONALD",
    "prefecture": "福岡県",
    "area": "福岡県・姪浜港",
    "port": "姪浜港",
    "lat": 33.5940289,
    "lng": 130.326515,
    "fish": [
      "タチウオ",
      "ケンサキイカ"
    ],
    "methods": [
      "船釣り",
      "イカメタル"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "姪浜港のDONALD。博多湾などの季節の船釣りを案内。観光で参加する場合も募集便と道具を確認する。",
    "googleQuery": "福岡県 DONALD",
    "officialUrl": "https://donald-fishing.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://donald-fishing.com/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "https://donald-fishing.com/#access"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "姪浜港の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "船釣り",
      "イカメタル"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "meinohama-kaiki",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "海輝",
    "prefecture": "福岡県",
    "area": "福岡県・姪浜港",
    "port": "姪浜港",
    "lat": 33.597608,
    "lng": 130.327015,
    "fish": [
      "マダイ",
      "タチウオ",
      "ケンサキイカ"
    ],
    "methods": [
      "タイラバ",
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "姪浜のマリンエクスプレス海輝。公式共有地図の「乗船場所」を採用し、夜焚き用駐車場とは区別する。",
    "googleQuery": "福岡県 海輝",
    "officialUrl": "https://kaiki-1.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://kaiki-1.com/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "https://kaiki-1.com/access.php"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "姪浜港の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "タイラバ",
      "船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "tai-rubber"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kishi-kyokusei",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "旭星釣りセンター",
    "prefecture": "福岡県",
    "area": "福岡県・岐志漁港",
    "port": "岐志漁港",
    "lat": 33.5752636,
    "lng": 130.1208773,
    "fish": [
      "マダイ"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "筏釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "糸島・岐志の旭星釣りセンター。筏釣りとジギング・タイラバ船は別プラン。ここは公式の受付案内拠点。",
    "googleQuery": "福岡県 旭星釣りセンター",
    "officialUrl": "https://kyokusei.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://kyokusei.net/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "岐志漁港の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "タイラバ",
      "ジギング",
      "筏釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "karatsu-takeru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "武尊",
    "prefecture": "佐賀県",
    "area": "佐賀県・唐津・二タ子",
    "port": "唐津・二タ子",
    "lat": 33.4676874,
    "lng": 129.9607942,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "唐津の遊漁船武尊。公式アクセス掲載の二タ子側から利用し、募集便の釣り物と集合時刻を確認する。",
    "googleQuery": "佐賀県 武尊",
    "officialUrl": "https://www.takeru-ship.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://www.takeru-ship.com/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "https://www.takeru-ship.com/access.html"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "唐津・二タ子の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "yobuko-sunrise",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "サンライズ",
    "prefecture": "佐賀県",
    "area": "佐賀県・呼子",
    "port": "呼子",
    "lat": 33.5379583,
    "lng": 129.8937073,
    "fish": [
      "ヒラマサ"
    ],
    "methods": [
      "キャスティング",
      "ジギング"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "呼子のSUNRISE。玄界灘のルアー釣りを案内し、遠征便の行程と必要装備は船長へ相談する。",
    "googleQuery": "佐賀県 サンライズ",
    "officialUrl": "https://sunrise.genkainada.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://sunrise.genkainada.jp/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "https://sunrise.genkainada.jp/guide/access/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "呼子の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "キャスティング",
      "ジギング"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "casting",
      "jigging"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "imari-yoshihiro",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "寿裕",
    "prefecture": "佐賀県",
    "area": "佐賀県・伊万里",
    "port": "伊万里",
    "lat": 33.310946,
    "lng": 129.81338,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "伊万里の寿裕。古い一覧の名称ではなく現行公式の船名を使用し、公式地図の行先座標を掲載する。",
    "googleQuery": "佐賀県 寿風",
    "officialUrl": "http://yoshihiro1173.web.fc2.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "http://yoshihiro1173.web.fc2.com/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "http://yoshihiro1173.web.fc2.com/map.html"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "伊万里の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "imari-nolimit",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "NO LIMIT",
    "prefecture": "佐賀県",
    "area": "佐賀県・伊万里・瀬戸",
    "port": "伊万里・瀬戸",
    "lat": 33.3170298,
    "lng": 129.8389571,
    "fish": [],
    "methods": [
      "ルアー釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "伊万里のNO LIMIT。公式共有地図にある乗船場所を採用し、コンビニ・駐車場のピンと分けて案内する。",
    "googleQuery": "佐賀県 NOLimit",
    "officialUrl": "https://no-limit2020.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://no-limit2020.com/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "伊万里・瀬戸の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "ルアー釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "haifuku-sekishomaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "関勝丸",
    "prefecture": "長崎県",
    "area": "長崎県・早福港",
    "port": "早福港",
    "lat": 33.2263873,
    "lng": 129.3860194,
    "fish": [],
    "methods": [
      "ジギング",
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "平戸・早福の関勝丸。釣り船の利用料金・船体・最新釣果を公式に掲載し、経験に応じた釣行を相談できる。",
    "googleQuery": "長崎県 関勝丸",
    "officialUrl": "https://www.sekishomaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://www.sekishomaru.com/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "早福港の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "ジギング",
      "船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "jigging"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "oseto-keiseimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "けいせい丸",
    "prefecture": "長崎県",
    "area": "長崎県・大瀬戸・江切",
    "port": "大瀬戸・江切",
    "lat": 32.9463818,
    "lng": 129.6376372,
    "fish": [
      "ヒラマサ",
      "マダイ"
    ],
    "methods": [
      "落とし込み",
      "ジギング",
      "タイラバ"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "大瀬戸のけいせい丸。落とし込みなどの季節便を案内。電動リールの電源・バッテリーも事前に確認する。",
    "googleQuery": "長崎県 けいせい丸",
    "officialUrl": "https://www.keiseimaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://www.keiseimaru.com/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "大瀬戸・江切の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "落とし込み",
      "ジギング",
      "タイラバ"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "otoshikomi",
      "jigging",
      "tai-rubber"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "noboritate-tenjo",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "天城",
    "prefecture": "熊本県",
    "area": "熊本県・登立港",
    "port": "登立港",
    "lat": 32.5988752,
    "lng": 130.4449892,
    "fish": [
      "マダイ",
      "タチウオ"
    ],
    "methods": [
      "タイラバ",
      "ジギング"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "上天草・登立港の遊漁船天城。魚種や釣法に応じたプランを案内し、公式アクセスから集合地点を確認できる。",
    "googleQuery": "熊本県 天城",
    "officialUrl": "https://www.amakusa-tenjo.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://www.amakusa-tenjo.com/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "登立港の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "タイラバ",
      "ジギング"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "amakusa-kanamaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "奏丸",
    "prefecture": "熊本県",
    "area": "熊本県・天草・三角周辺",
    "port": "天草・三角周辺",
    "lat": 32.6090555556,
    "lng": 130.4736111111,
    "fish": [],
    "methods": [
      "タイラバ",
      "ジギング"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "天草の奏丸。タイラバやジギングを案内。住所検索の位置ではなく、公式が示す座標の乗船案内地点を掲載する。",
    "googleQuery": "熊本県 奏丸",
    "officialUrl": "https://turifune-kanamaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://turifune-kanamaru.com/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "https://turifune-kanamaru.com/access/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "天草・三角周辺の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "タイラバ",
      "ジギング"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hatonokama-hoyomaru18",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "十八宝洋丸",
    "prefecture": "熊本県",
    "area": "熊本県・鳩の釜港",
    "port": "鳩の釜港",
    "lat": 32.5825789,
    "lng": 130.4036939,
    "fish": [
      "マダイ",
      "タチウオ",
      "ヒラメ",
      "マダコ"
    ],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鳩の釜の十八宝洋丸。有明海・天草の季節魚を案内。レンタルボートは遊漁船と別サービスとして確認する。",
    "googleQuery": "熊本県 十八宝洋丸",
    "officialUrl": "https://18hoyomaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://18hoyomaru.com/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "鳩の釜港の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "hatonokama-shounmaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "翔運丸",
    "prefecture": "熊本県",
    "area": "熊本県・鳩の釜港",
    "port": "鳩の釜港",
    "lat": 32.5826111111,
    "lng": 130.3998333333,
    "fish": [
      "マダイ"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "泳がせ釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "天草の翔運丸。マダイや泳がせなどを案内し、公式出港場所の座標を採用する。",
    "googleQuery": "熊本県 翔運丸",
    "officialUrl": "https://syounmaru.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://syounmaru.jp/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "鳩の釜港の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "タイラバ",
      "ジギング",
      "泳がせ釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "nomase"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "shinwa-urashimataro",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "浦島太郎",
    "prefecture": "熊本県",
    "area": "熊本県・新和・大多尾",
    "port": "新和・大多尾",
    "lat": 32.3584408,
    "lng": 130.2132042,
    "fish": [
      "マダイ",
      "アオリイカ",
      "タチウオ"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "ティップラン",
      "イカメタル"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "天草・新和の浦島太郎。御所浦周辺から八代海・長島方面を案内。公式の新和アクセスの行先地点を掲載する。",
    "googleQuery": "熊本県 浦島太郎",
    "officialUrl": "https://amakusa.asia/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "https://amakusa.asia/"
      },
      {
        "label": "公式：集合・乗船場所",
        "url": "https://amakusa.asia/free/access_sinwa"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "新和・大多尾の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "タイラバ",
      "ジギング",
      "ティップラン",
      "イカメタル"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "tai-rubber",
      "jigging",
      "tiprun",
      "ika-metal"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "oniike-luzplaya",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "ルスプラージャ",
    "prefecture": "熊本県",
    "area": "熊本県・鬼池",
    "port": "鬼池",
    "lat": 32.5471762,
    "lng": 130.1863711,
    "fish": [
      "マダイ"
    ],
    "methods": [
      "タイラバ"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鬼池のルスプラージャ。タイラバの釣りに加えて食事・宿泊も案内。マーカーは公式の民宿光浜荘受付拠点。",
    "googleQuery": "熊本県 ルスプラージャ",
    "officialUrl": "http://luzplaya.yokaa.net/pc/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行プラン・アクセス",
        "url": "http://luzplaya.yokaa.net/pc/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "鬼池の公式案内地点。受付、集合、駐車の詳細は予約時の案内を優先する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "タイラバ"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [
      "tai-rubber"
    ],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "okayama-shiromaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "城丸",
    "prefecture": "岡山県",
    "area": "岡山県・新築港",
    "port": "新築港",
    "lat": 34.6068764,
    "lng": 133.983363,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "岡山市の城丸。公式の乗船場所は新築港6-7。募集している釣り物・仕掛けを確認して予約する。",
    "googleQuery": "岡山県 城丸",
    "officialUrl": "https://shiromaru.main.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "https://shiromaru.main.jp/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "新築港の公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "uno-setouchi-tours",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "瀬戸内フィッシングツアーズ",
    "prefecture": "岡山県",
    "area": "岡山県・宇野港",
    "port": "宇野港",
    "lat": 34.4931111,
    "lng": 133.9558333,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "宇野港の瀬戸内フィッシングツアーズ。タイラバ・一つテンヤやアオリイカ便を案内。半日便と一日便の違いを確認して選ぶ。",
    "googleQuery": "岡山県 瀬戸内フィッシングツアーズ",
    "officialUrl": "https://setouchi-fishing-tours.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "https://setouchi-fishing-tours.com/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "宇野港の公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kotoura-kaimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "凱丸",
    "prefecture": "岡山県",
    "area": "岡山県・琴浦港",
    "port": "琴浦港",
    "lat": 34.47168752,
    "lng": 133.8336816,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "琴浦港の凱丸。鯛サビキ・タイラバ・泳がせ釣りなどを案内。乗船は公式で示すオーシャンビュー倉敷東側の浮き桟橋。",
    "googleQuery": "岡山県 凱丸",
    "officialUrl": "https://kaimaru059.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "https://kaimaru059.com/"
      },
      {
        "label": "公式アクセス",
        "url": "https://kaimaru059.com/access.php"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "琴浦港の公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kojima-matsumoto2",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "松本釣船2",
    "prefecture": "岡山県",
    "area": "岡山県・児島",
    "port": "児島",
    "lat": 34.4588269,
    "lng": 133.8080963,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "児島の松本釣船2。タイラバやカワハギ、季節のタチウオなどを案内。釣り物ごとに竿やオモリが違うため募集便を確認する。",
    "googleQuery": "岡山県 松本釣船2",
    "officialUrl": "https://artemis.cx/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "https://artemis.cx/"
      },
      {
        "label": "公式アクセス",
        "url": "https://artemis.cx/access.html"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "児島の公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "higashionomichi-ofree",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "オーフリー",
    "prefecture": "広島県",
    "area": "広島県・東尾道",
    "port": "東尾道",
    "lat": 34.4167985,
    "lng": 133.2355117,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "東尾道のオーフリー。公式アクセスのケンスイ前桟橋から利用する。乗船予約と駐車方法を確認して集合する。",
    "googleQuery": "広島県 オーフリー",
    "officialUrl": "https://ofree.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "https://ofree.jp/"
      },
      {
        "label": "公式アクセス",
        "url": "https://ofree.jp/access/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "東尾道の公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "onomichi-fishing-matsumoto",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "フィッシングまつもと",
    "prefecture": "広島県",
    "area": "広島県・東尾道",
    "port": "東尾道",
    "lat": 34.416053,
    "lng": 133.235922,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "フィッシングまつもとの遊漁船。店舗所在地とは分け、公式共有地図の乗船場所にマーカーを置いている。",
    "googleQuery": "広島県 フィッシングまつもと",
    "officialUrl": "https://fsmatsumoto.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "https://fsmatsumoto.com/"
      },
      {
        "label": "公式アクセス",
        "url": "https://fsmatsumoto.com/shop-access.html"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "東尾道の公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "mihara-samurai",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "武士Samurai",
    "prefecture": "広島県",
    "area": "広島県・三原",
    "port": "三原",
    "lat": 34.333583333,
    "lng": 133.0353889,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "三原の遊漁船武士。2024年3月に移転した公式乗船場所を掲載。古い住所ではなく現行アクセスを確認して集合する。",
    "googleQuery": "広島県 武士Samurai",
    "officialUrl": "https://www.samurai-yugyo.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "https://www.samurai-yugyo.com/"
      },
      {
        "label": "公式アクセス",
        "url": "https://www.samurai-yugyo.com/access.html"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "三原の公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "takehara-kotobuki",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "ことぶき",
    "prefecture": "広島県",
    "area": "広島県・竹原・明神港",
    "port": "竹原・明神港",
    "lat": 34.3276838,
    "lng": 132.9106332,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "竹原・明神港のことぶき。船で沖へ出る釣行サービス。予約時に対象魚と仕掛け、レンタルの可否を確認する。",
    "googleQuery": "広島県 ことぶき",
    "officialUrl": "https://www.kotobuki-yugyo.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "https://www.kotobuki-yugyo.com/"
      },
      {
        "label": "公式アクセス",
        "url": "https://www.kotobuki-yugyo.com/access.html"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "竹原・明神港の公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "iwakuni-asahimaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "朝日丸（岩国・黒磯）",
    "prefecture": "山口県",
    "area": "山口県・岩国・黒磯",
    "port": "岩国・黒磯",
    "lat": 34.103173,
    "lng": 132.202053,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "岩国・黒磯の朝日丸。イサキ・アジ・タチウオなど季節ごとの釣行を案内。釣り物を決めてから必要な道具を揃える。",
    "googleQuery": "山口県 朝日丸",
    "officialUrl": "http://daini2asahimaru.web.fc2.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "http://daini2asahimaru.web.fc2.com/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "岩国・黒磯の公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "tajiri-goyumaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "剛遊丸",
    "prefecture": "鳥取県",
    "area": "鳥取県・田後港",
    "port": "田後港",
    "lat": 35.593738,
    "lng": 134.313027,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鳥取・田後港の剛遊丸。沖でのイカ釣りを案内する遊漁船。集合場所・夜間の駐車方法は予約時に確認する。",
    "googleQuery": "鳥取県 剛遊丸",
    "officialUrl": "https://go-yu-maru.jp/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "https://go-yu-maru.jp/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "田後港の公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "karo-kaishinmaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "海伸丸",
    "prefecture": "鳥取県",
    "area": "鳥取県・鳥取港",
    "port": "鳥取港",
    "lat": 35.5352448,
    "lng": 134.1956271,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鳥取港の海伸丸。ジギングやエギングなどを案内。岸壁での釣り場ではなく、予約して乗船する拠点。",
    "googleQuery": "鳥取県 海伸丸",
    "officialUrl": "https://kaishinmaru.net/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "https://kaishinmaru.net/"
      },
      {
        "label": "公式アクセス",
        "url": "https://kaishinmaru.net/access"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "鳥取港の公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "karo-kyukomaru",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "久幸丸",
    "prefecture": "鳥取県",
    "area": "鳥取県・鳥取港",
    "port": "鳥取港",
    "lat": 35.5348234555,
    "lng": 134.1957323669,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "鳥取港の久幸丸。シロイカのほか夜焚きアオリイカ・アジ便などを案内。集合と出船可否は公式予約情報を確認する。",
    "googleQuery": "鳥取県 久幸丸",
    "officialUrl": "https://kyuukoumaru.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "https://kyuukoumaru.com/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "鳥取港の公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "sakaiminato-kohaku2",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "name": "第二虎白",
    "prefecture": "鳥取県",
    "area": "鳥取県・境港公共マリーナ",
    "port": "境港公共マリーナ",
    "lat": 35.5159248,
    "lng": 133.2517352,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "season": "季節・募集便による。公式の最新予定を確認",
    "beginner": false,
    "kids": false,
    "note": "境港の第二虎白。シロイカ・アオリイカ・ヤリイカを季節ごとに案内。マーカーは公式指定の公共マリーナで、係留位置は予約時に確認する。",
    "googleQuery": "鳥取県 虎白",
    "officialUrl": "https://www.dainikohaku.com/",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "船宿公式：釣行・乗船案内",
        "url": "https://www.dainikohaku.com/"
      }
    ],
    "positionNote": "公式アクセス地図の目的地ピンを使用。受付施設を示す場合は紹介文に明記。周辺岸壁の一般開放を意味しない。",
    "access": "境港公共マリーナの公式案内地点。集合・乗船位置と駐車方法は予約時に確認する。",
    "field": "予約した遊漁船で沖へ向かう利用形態。",
    "bestFor": [
      "予約して利用する船釣り"
    ],
    "timing": "集合時刻と出船判断は予約便の案内を確認。",
    "tips": [
      "船宿指定のオモリ・ライン・仕掛けを確認する",
      "レンタル希望は予約時に伝える"
    ],
    "caution": [
      "荒天では出船中止や釣り場変更がある",
      "救命胴衣を着用し、指定外の岸壁や作業区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "first-charter-boat-reservation"
    ]
  },
  {
    "slug": "kanazawa-ono-fishing-quay",
    "type": "spot",
    "primaryType": "pier",
    "terrain": "pier",
    "name": "大野釣り護岸",
    "prefecture": "石川県",
    "area": "石川県・金沢港",
    "lat": 36.6173821,
    "lng": 136.6066036,
    "fish": [],
    "methods": [],
    "season": "海況と現地の利用案内による",
    "beginner": false,
    "kids": false,
    "note": "金沢港の大野地区に整備された釣り護岸。県の施設位置図が示す護岸区間内で利用し、港内の他の岸壁と区別する。",
    "googleQuery": "大野釣り護岸",
    "officialUrl": "https://www.pref.ishikawa.lg.jp/kanazawakouwan/p05b.html",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "県公式：開放範囲・利用条件",
        "url": "https://www.pref.ishikawa.lg.jp/kanazawakouwan/p05b.html"
      },
      {
        "label": "地理院地図：実際の護岸・突堤位置",
        "url": "https://maps.gsi.go.jp/#17/36.6173821/136.6066036/&base=std&ls=std&disp=1"
      }
    ],
    "positionNote": "県の開放箇所図と地理院地図を照合した釣り護岸上の代表点。駐車場や公園中央の座標ではない。",
    "access": "県が案内する開放区間から利用する。工事・気象による現地規制と閉鎖表示を優先。",
    "field": "金沢港内に整備された釣り用護岸。柵の内側の利用可能区間に限る。",
    "bestFor": [
      "開放区間での岸釣り"
    ],
    "timing": "明るい時間帯かつ穏やかな海況を選ぶ。",
    "tips": [
      "現地の利用案内を確認してから竿を出す",
      "周囲の人の動きを確認して仕掛けを投入する"
    ],
    "caution": [
      "防護柵の外側は立入禁止",
      "港の作業区域・立入禁止箇所へ入らない",
      "強風・高波時は利用を控える"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check"
    ]
  },
  {
    "slug": "kanazawa-ohama-fishing-quay",
    "type": "spot",
    "primaryType": "pier",
    "terrain": "pier",
    "name": "大浜地区ふれあい広場",
    "prefecture": "石川県",
    "area": "石川県・金沢港",
    "lat": 36.6390637,
    "lng": 136.6133982,
    "fish": [],
    "methods": [],
    "season": "4〜10月",
    "beginner": false,
    "kids": false,
    "note": "金沢港大浜地区の釣り施設。利用期間は4〜10月に限られ、冬期は安全確保のため立入禁止。防護柵の内側で利用する。",
    "googleQuery": "大浜地区ふれあい広場",
    "officialUrl": "https://www.pref.ishikawa.lg.jp/kanazawakouwan/p05b.html",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "県公式：開放範囲・利用条件",
        "url": "https://www.pref.ishikawa.lg.jp/kanazawakouwan/p05b.html"
      },
      {
        "label": "地理院地図：実際の護岸・突堤位置",
        "url": "https://maps.gsi.go.jp/#17/36.6390637/136.6133982/&base=std&ls=std&disp=1"
      }
    ],
    "positionNote": "県の開放箇所図と地理院地図を照合した釣り護岸上の代表点。駐車場や公園中央の座標ではない。",
    "access": "県が案内する開放区間から利用する。工事・気象による現地規制と閉鎖表示を優先。",
    "field": "金沢港内に整備された釣り用護岸。柵の内側の利用可能区間に限る。",
    "bestFor": [
      "開放区間での岸釣り"
    ],
    "timing": "明るい時間帯かつ穏やかな海況を選ぶ。",
    "tips": [
      "現地の利用案内を確認してから竿を出す",
      "周囲の人の動きを確認して仕掛けを投入する"
    ],
    "caution": [
      "11〜3月は立入禁止",
      "防護柵の外側は立入禁止",
      "港の作業区域・立入禁止箇所へ入らない",
      "強風・高波時は利用を控える"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check"
    ]
  },
  {
    "slug": "niigata-west-pier-1",
    "type": "spot",
    "primaryType": "pier",
    "terrain": "pier",
    "name": "新潟港 海岸第1突堤",
    "prefecture": "新潟県",
    "area": "新潟県・新潟市西海岸",
    "lat": 37.9414733,
    "lng": 139.0497835,
    "fish": [],
    "methods": [],
    "season": "2026年4月22日〜11月末予定（日中のみ）",
    "beginner": false,
    "kids": false,
    "note": "新潟西海岸に並ぶ5本のうち第1突堤。県が2026年の期間開放を案内している。沖へ張り出した部分は波を受けるため、穏やかな日の日中に限って利用する。",
    "googleQuery": "新潟港 海岸第1突堤",
    "officialUrl": "https://www.pref.niigata.lg.jp/site/niigata-kouwan/westbeach-2024open.html",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "県公式：開放範囲・利用条件",
        "url": "https://www.pref.niigata.lg.jp/site/niigata-kouwan/westbeach-2024open.html"
      },
      {
        "label": "地理院地図：実際の護岸・突堤位置",
        "url": "https://maps.gsi.go.jp/#17/37.9414733/139.0497835/&base=std&ls=std&disp=1"
      }
    ],
    "positionNote": "県の開放箇所図と地理院地図を照合した突堤上の代表点。隣の突堤とは数百m離れた独立施設。",
    "access": "県が案内する開放区間から利用する。工事・気象による現地規制と閉鎖表示を優先。",
    "field": "海へ張り出した突堤。足元だけでなく波・風・帰路の状況を確認する。",
    "bestFor": [
      "開放区間での岸釣り"
    ],
    "timing": "明るい時間帯かつ穏やかな海況を選ぶ。",
    "tips": [
      "現地の利用案内を確認してから竿を出す",
      "周囲の人の動きを確認して仕掛けを投入する"
    ],
    "caution": [
      "夜間は立入禁止",
      "開放中でも波が突堤を越えることがある。荒天・うねり時は近づかない",
      "近隣の常時立入禁止区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check"
    ]
  },
  {
    "slug": "niigata-west-pier-2",
    "type": "spot",
    "primaryType": "pier",
    "terrain": "pier",
    "name": "新潟港 海岸第2突堤",
    "prefecture": "新潟県",
    "area": "新潟県・新潟市西海岸",
    "lat": 37.9392136,
    "lng": 139.0454129,
    "fish": [],
    "methods": [],
    "season": "2026年4月22日〜11月末予定（日中のみ）",
    "beginner": false,
    "kids": false,
    "note": "新潟西海岸に並ぶ5本のうち第2突堤。県が2026年の期間開放を案内している。沖へ張り出した部分は波を受けるため、穏やかな日の日中に限って利用する。",
    "googleQuery": "新潟港 海岸第2突堤",
    "officialUrl": "https://www.pref.niigata.lg.jp/site/niigata-kouwan/westbeach-2024open.html",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "県公式：開放範囲・利用条件",
        "url": "https://www.pref.niigata.lg.jp/site/niigata-kouwan/westbeach-2024open.html"
      },
      {
        "label": "地理院地図：実際の護岸・突堤位置",
        "url": "https://maps.gsi.go.jp/#17/37.9392136/139.0454129/&base=std&ls=std&disp=1"
      }
    ],
    "positionNote": "県の開放箇所図と地理院地図を照合した突堤上の代表点。隣の突堤とは数百m離れた独立施設。",
    "access": "県が案内する開放区間から利用する。工事・気象による現地規制と閉鎖表示を優先。",
    "field": "海へ張り出した突堤。足元だけでなく波・風・帰路の状況を確認する。",
    "bestFor": [
      "開放区間での岸釣り"
    ],
    "timing": "明るい時間帯かつ穏やかな海況を選ぶ。",
    "tips": [
      "現地の利用案内を確認してから竿を出す",
      "周囲の人の動きを確認して仕掛けを投入する"
    ],
    "caution": [
      "夜間は立入禁止",
      "開放中でも波が突堤を越えることがある。荒天・うねり時は近づかない",
      "近隣の常時立入禁止区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check"
    ]
  },
  {
    "slug": "niigata-west-pier-3",
    "type": "spot",
    "primaryType": "pier",
    "terrain": "pier",
    "name": "新潟港 海岸第3突堤",
    "prefecture": "新潟県",
    "area": "新潟県・新潟市西海岸",
    "lat": 37.9367587,
    "lng": 139.0410372,
    "fish": [],
    "methods": [],
    "season": "2026年4月22日〜11月末予定（日中のみ）",
    "beginner": false,
    "kids": false,
    "note": "新潟西海岸に並ぶ5本のうち第3突堤。県が2026年の期間開放を案内している。沖へ張り出した部分は波を受けるため、穏やかな日の日中に限って利用する。",
    "googleQuery": "新潟港 海岸第3突堤",
    "officialUrl": "https://www.pref.niigata.lg.jp/site/niigata-kouwan/westbeach-2024open.html",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "県公式：開放範囲・利用条件",
        "url": "https://www.pref.niigata.lg.jp/site/niigata-kouwan/westbeach-2024open.html"
      },
      {
        "label": "地理院地図：実際の護岸・突堤位置",
        "url": "https://maps.gsi.go.jp/#17/37.9367587/139.0410372/&base=std&ls=std&disp=1"
      }
    ],
    "positionNote": "県の開放箇所図と地理院地図を照合した突堤上の代表点。隣の突堤とは数百m離れた独立施設。",
    "access": "県が案内する開放区間から利用する。工事・気象による現地規制と閉鎖表示を優先。",
    "field": "海へ張り出した突堤。足元だけでなく波・風・帰路の状況を確認する。",
    "bestFor": [
      "開放区間での岸釣り"
    ],
    "timing": "明るい時間帯かつ穏やかな海況を選ぶ。",
    "tips": [
      "現地の利用案内を確認してから竿を出す",
      "周囲の人の動きを確認して仕掛けを投入する"
    ],
    "caution": [
      "夜間は立入禁止",
      "開放中でも波が突堤を越えることがある。荒天・うねり時は近づかない",
      "近隣の常時立入禁止区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check"
    ]
  },
  {
    "slug": "niigata-west-pier-4",
    "type": "spot",
    "primaryType": "pier",
    "terrain": "pier",
    "name": "新潟港 海岸第4突堤",
    "prefecture": "新潟県",
    "area": "新潟県・新潟市西海岸",
    "lat": 37.9344425,
    "lng": 139.0368798,
    "fish": [],
    "methods": [],
    "season": "2026年4月22日〜11月末予定（日中のみ）",
    "beginner": false,
    "kids": false,
    "note": "新潟西海岸に並ぶ5本のうち第4突堤。県が2026年の期間開放を案内している。沖へ張り出した部分は波を受けるため、穏やかな日の日中に限って利用する。",
    "googleQuery": "新潟港 海岸第4突堤",
    "officialUrl": "https://www.pref.niigata.lg.jp/site/niigata-kouwan/westbeach-2024open.html",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "県公式：開放範囲・利用条件",
        "url": "https://www.pref.niigata.lg.jp/site/niigata-kouwan/westbeach-2024open.html"
      },
      {
        "label": "地理院地図：実際の護岸・突堤位置",
        "url": "https://maps.gsi.go.jp/#17/37.9344425/139.0368798/&base=std&ls=std&disp=1"
      }
    ],
    "positionNote": "県の開放箇所図と地理院地図を照合した突堤上の代表点。隣の突堤とは数百m離れた独立施設。",
    "access": "県が案内する開放区間から利用する。工事・気象による現地規制と閉鎖表示を優先。",
    "field": "海へ張り出した突堤。足元だけでなく波・風・帰路の状況を確認する。",
    "bestFor": [
      "開放区間での岸釣り"
    ],
    "timing": "明るい時間帯かつ穏やかな海況を選ぶ。",
    "tips": [
      "現地の利用案内を確認してから竿を出す",
      "周囲の人の動きを確認して仕掛けを投入する"
    ],
    "caution": [
      "夜間は立入禁止",
      "開放中でも波が突堤を越えることがある。荒天・うねり時は近づかない",
      "近隣の常時立入禁止区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check"
    ]
  },
  {
    "slug": "niigata-west-pier-5",
    "type": "spot",
    "primaryType": "pier",
    "terrain": "pier",
    "name": "新潟港 海岸第5突堤",
    "prefecture": "新潟県",
    "area": "新潟県・新潟市西海岸",
    "lat": 37.9316445,
    "lng": 139.0331109,
    "fish": [],
    "methods": [],
    "season": "2026年4月22日〜11月末予定（日中のみ）",
    "beginner": false,
    "kids": false,
    "note": "新潟西海岸に並ぶ5本のうち第5突堤。県が2026年の期間開放を案内している。沖へ張り出した部分は波を受けるため、穏やかな日の日中に限って利用する。",
    "googleQuery": "新潟港 海岸第5突堤",
    "officialUrl": "https://www.pref.niigata.lg.jp/site/niigata-kouwan/westbeach-2024open.html",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "県公式：開放範囲・利用条件",
        "url": "https://www.pref.niigata.lg.jp/site/niigata-kouwan/westbeach-2024open.html"
      },
      {
        "label": "地理院地図：実際の護岸・突堤位置",
        "url": "https://maps.gsi.go.jp/#17/37.9316445/139.0331109/&base=std&ls=std&disp=1"
      }
    ],
    "positionNote": "県の開放箇所図と地理院地図を照合した突堤上の代表点。隣の突堤とは数百m離れた独立施設。",
    "access": "県が案内する開放区間から利用する。工事・気象による現地規制と閉鎖表示を優先。",
    "field": "海へ張り出した突堤。足元だけでなく波・風・帰路の状況を確認する。",
    "bestFor": [
      "開放区間での岸釣り"
    ],
    "timing": "明るい時間帯かつ穏やかな海況を選ぶ。",
    "tips": [
      "現地の利用案内を確認してから竿を出す",
      "周囲の人の動きを確認して仕掛けを投入する"
    ],
    "caution": [
      "夜間は立入禁止",
      "開放中でも波が突堤を越えることがある。荒天・うねり時は近づかない",
      "近隣の常時立入禁止区域へ入らない"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check"
    ]
  },
  {
    "slug": "shinminato-memorial-quay",
    "type": "spot",
    "primaryType": "pier",
    "terrain": "pier",
    "name": "開港記念碑緑地広場",
    "prefecture": "富山県",
    "area": "富山県・射水市",
    "lat": 36.7750034,
    "lng": 137.1136665,
    "fish": [],
    "methods": [],
    "season": "海況・工事と現地の開放案内を確認",
    "beginner": false,
    "kids": false,
    "note": "海王丸パーク側にある釣り可能護岸。公園全体や近隣の業務岸壁が釣り場ではないため、市の開放区域図と現地表示を確認する。",
    "googleQuery": "富山新港 開港記念碑緑地広場",
    "officialUrl": "https://www.city.imizu.toyama.jp/guide/svGuideDtl.aspx?servno=39346",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "射水市：釣り可能区域と施設情報",
        "url": "https://www.city.imizu.toyama.jp/guide/svGuideDtl.aspx?servno=39346"
      },
      {
        "label": "公式の釣り可能区域図",
        "url": "https://www.city.imizu.toyama.jp/appupload/EDIT/137/137300.pdf"
      },
      {
        "label": "富山県観光公式：対象魚・釣り場情報",
        "url": "https://www.info-toyama.com/stories/tsuri_map"
      }
    ],
    "positionNote": "市の釣り可能区域図と地理院地図を照合し、緑地の中心ではなく開放護岸上に配置。",
    "access": "市が示す駐車場と開放護岸を利用する。現地の閉鎖表示を優先。",
    "field": "富山新港で岸釣りが開放されている護岸区間。",
    "bestFor": [
      "開放区間での岸釣り"
    ],
    "timing": "明るい時間帯かつ穏やかな海況を選ぶ。",
    "tips": [
      "現地の利用案内を確認してから竿を出す",
      "周囲の人の動きを確認して仕掛けを投入する"
    ],
    "caution": [
      "隣接する港湾作業区域・釣り禁止区域へ入らない",
      "救命胴衣を着用し、強風・高波時は利用しない",
      "路上駐車をせず、ごみは持ち帰る"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check"
    ]
  },
  {
    "slug": "shinminato-south-waterway",
    "type": "spot",
    "primaryType": "pier",
    "terrain": "pier",
    "name": "南水路緑地",
    "prefecture": "富山県",
    "area": "富山県・射水市",
    "lat": 36.7636847,
    "lng": 137.1124542,
    "fish": [],
    "methods": [],
    "season": "海況・工事と現地の開放案内を確認",
    "beginner": false,
    "kids": false,
    "note": "富山新港の南水路に面する開放護岸。南水路緑地公園の駐車場から徒歩で向かい、港湾作業区域には入らない。",
    "googleQuery": "富山新港 南水路緑地",
    "officialUrl": "https://www.city.imizu.toyama.jp/guide/svGuideDtl.aspx?servno=39346",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "射水市：釣り可能区域と施設情報",
        "url": "https://www.city.imizu.toyama.jp/guide/svGuideDtl.aspx?servno=39346"
      },
      {
        "label": "公式の釣り可能区域図",
        "url": "https://www.city.imizu.toyama.jp/appupload/EDIT/137/137300.pdf"
      },
      {
        "label": "富山県観光公式：対象魚・釣り場情報",
        "url": "https://www.info-toyama.com/stories/tsuri_map"
      }
    ],
    "positionNote": "市の釣り可能区域図と地理院地図を照合し、緑地の中心ではなく開放護岸上に配置。",
    "access": "市が示す駐車場と開放護岸を利用する。現地の閉鎖表示を優先。",
    "field": "富山新港で岸釣りが開放されている護岸区間。",
    "bestFor": [
      "開放区間での岸釣り"
    ],
    "timing": "明るい時間帯かつ穏やかな海況を選ぶ。",
    "tips": [
      "現地の利用案内を確認してから竿を出す",
      "周囲の人の動きを確認して仕掛けを投入する"
    ],
    "caution": [
      "隣接する港湾作業区域・釣り禁止区域へ入らない",
      "救命胴衣を着用し、強風・高波時は利用しない",
      "路上駐車をせず、ごみは持ち帰る"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": true,
    "toilet": true
  },
  {
    "slug": "shinminato-east-waterway",
    "type": "spot",
    "primaryType": "pier",
    "terrain": "pier",
    "name": "東水路先端緑地",
    "prefecture": "富山県",
    "area": "富山県・射水市",
    "lat": 36.7585447,
    "lng": 137.1338904,
    "fish": [
      "マハゼ",
      "クロダイ"
    ],
    "methods": [],
    "season": "海況・工事と現地の開放案内を確認",
    "beginner": false,
    "kids": false,
    "note": "東水路の東端にある開放護岸。ハゼやクロダイが対象になる。トイレはないため、現地へ向かう前に済ませておく。",
    "googleQuery": "富山新港 東水路先端緑地",
    "officialUrl": "https://www.city.imizu.toyama.jp/guide/svGuideDtl.aspx?servno=39346",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "射水市：釣り可能区域と施設情報",
        "url": "https://www.city.imizu.toyama.jp/guide/svGuideDtl.aspx?servno=39346"
      },
      {
        "label": "公式の釣り可能区域図",
        "url": "https://www.city.imizu.toyama.jp/appupload/EDIT/137/137300.pdf"
      },
      {
        "label": "富山県観光公式：対象魚・釣り場情報",
        "url": "https://www.info-toyama.com/stories/tsuri_map"
      }
    ],
    "positionNote": "市の釣り可能区域図と地理院地図を照合し、緑地の中心ではなく開放護岸上に配置。",
    "access": "市が示す駐車場と開放護岸を利用する。現地の閉鎖表示を優先。",
    "field": "富山新港で岸釣りが開放されている護岸区間。",
    "bestFor": [
      "開放区間での岸釣り"
    ],
    "timing": "明るい時間帯かつ穏やかな海況を選ぶ。",
    "tips": [
      "現地の利用案内を確認してから竿を出す",
      "周囲の人の動きを確認して仕掛けを投入する"
    ],
    "caution": [
      "隣接する港湾作業区域・釣り禁止区域へ入らない",
      "救命胴衣を着用し、強風・高波時は利用しない",
      "路上駐車をせず、ごみは持ち帰る"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": true,
    "toilet": false
  },
  {
    "slug": "shinminato-east-entrance",
    "type": "spot",
    "primaryType": "pier",
    "terrain": "pier",
    "name": "東港口護岸",
    "prefecture": "富山県",
    "area": "富山県・射水市",
    "lat": 36.7743417,
    "lng": 137.1171963,
    "fish": [
      "マアジ",
      "アカカマス",
      "クロダイ",
      "サワラ"
    ],
    "methods": [],
    "season": "海況・工事と現地の開放案内を確認",
    "beginner": false,
    "kids": false,
    "note": "新湊大橋の東側にある柵付き護岸。アジやカマスなどの岸釣りを楽しめる開放区間。隣接する港内の禁止区域と区別する。",
    "googleQuery": "富山新港 東港口護岸",
    "officialUrl": "https://www.city.imizu.toyama.jp/guide/svGuideDtl.aspx?servno=39346",
    "verifiedAt": "2026-09-18",
    "sources": [
      {
        "label": "射水市：釣り可能区域と施設情報",
        "url": "https://www.city.imizu.toyama.jp/guide/svGuideDtl.aspx?servno=39346"
      },
      {
        "label": "公式の釣り可能区域図",
        "url": "https://www.city.imizu.toyama.jp/appupload/EDIT/137/137300.pdf"
      },
      {
        "label": "富山県観光公式：対象魚・釣り場情報",
        "url": "https://www.info-toyama.com/stories/tsuri_map"
      }
    ],
    "positionNote": "市の釣り可能区域図と地理院地図を照合し、緑地の中心ではなく開放護岸上に配置。",
    "access": "市が示す駐車場と開放護岸を利用する。現地の閉鎖表示を優先。",
    "field": "富山新港で岸釣りが開放されている護岸区間。",
    "bestFor": [
      "開放区間での岸釣り"
    ],
    "timing": "明るい時間帯かつ穏やかな海況を選ぶ。",
    "tips": [
      "現地の利用案内を確認してから竿を出す",
      "周囲の人の動きを確認して仕掛けを投入する"
    ],
    "caution": [
      "隣接する港湾作業区域・釣り禁止区域へ入らない",
      "救命胴衣を着用し、強風・高波時は利用しない",
      "路上駐車をせず、ごみは持ち帰る"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "parking": true,
    "toilet": true
  }
];
