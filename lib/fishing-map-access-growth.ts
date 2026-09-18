import type {FishingMapEntry} from './fishing-map-data';

// Reviewed 2026-09-17: public access points and booking bases, never permission for adjacent areas.
export const accessMapGrowth:FishingMapEntry[]=[
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": false,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "googleQuery": "折居海岸・鞍島 島根県",
    "bestFor": [
      "クロダイを狙う釣り",
      "スズキを狙う釣り",
      "シロギスを狙う釣り"
    ],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "orii-kurashima",
    "name": "折居海岸・鞍島",
    "prefecture": "島根県",
    "area": "島根・浜田",
    "primaryType": "rock",
    "terrain": "rock",
    "fish": [
      "クロダイ",
      "スズキ",
      "シロギス"
    ],
    "methods": [
      "ウキ釣り",
      "ルアー"
    ],
    "note": "折居町から三隅町にかけての海岸。岩場や消波ブロックを含むため、足場の判断ができる経験者向けです。",
    "access": "鞍島へは渡船を予約。海岸側でも無理に消波ブロックへ乗らない。",
    "field": "折居町から三隅町にかけての海岸。岩場や消波ブロックを含むため、足場の判断ができる経験者向けです。",
    "lat": 34.82627777777778,
    "lng": 131.98569444444442,
    "positionNote": "浜田市観光協会の地図に指定された地点。掲載範囲の代表位置で、周辺全域の釣り許可を意味しません。",
    "officialUrl": "https://kankou-hamada.or.jp/guidepost/6469",
    "sources": [
      {
        "label": "浜田市観光協会：釣り場・対象魚・地図",
        "url": "https://kankou-hamada.or.jp/guidepost/6469"
      }
    ],
    "tips": [
      "足元の水深と流れを確認してから仕掛けを入れる。"
    ],
    "caution": [
      "低い磯は波をかぶりやすく、北西風やうねりがある日は見送る。",
      "当日の掲示・管理者の案内を優先し、ごみ・針・糸を持ち帰る。"
    ],
    "methodSlugs": [
      "uki"
    ]
  },
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": false,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "googleQuery": "下府浜 島根県",
    "bestFor": [
      "シロギスを狙う釣り",
      "ヒラメを狙う釣り",
      "クロダイを狙う釣り",
      "スズキを狙う釣り"
    ],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "shimoko-beach",
    "name": "下府浜",
    "prefecture": "島根県",
    "area": "島根・浜田",
    "primaryType": "beach",
    "terrain": "beach",
    "fish": [
      "シロギス",
      "ヒラメ",
      "クロダイ",
      "スズキ"
    ],
    "methods": [
      "投げ釣り",
      "ルアー"
    ],
    "note": "国府海水浴場付近の砂浜。キスの投げ釣りを組み立てやすく、場所と季節によりルアーで底付近も探れます。",
    "access": "浜田市下府町。海水浴の利用区画と現地の釣り規制を確認。",
    "field": "国府海水浴場付近の砂浜。キスの投げ釣りを組み立てやすく、場所と季節によりルアーで底付近も探れます。",
    "lat": 34.935805555555554,
    "lng": 132.10722222222222,
    "positionNote": "浜田市観光協会の地図に指定された地点。掲載範囲の代表位置で、周辺全域の釣り許可を意味しません。",
    "officialUrl": "https://kankou-hamada.or.jp/guidepost/6452",
    "sources": [
      {
        "label": "浜田市観光協会：釣り場・対象魚・地図",
        "url": "https://kankou-hamada.or.jp/guidepost/6452"
      }
    ],
    "tips": [
      "砂地では着底を取り、ゆっくり探って反応のあった距離を覚える。"
    ],
    "caution": [
      "遊泳者がいる範囲へ仕掛けを投げない。",
      "当日の掲示・管理者の案内を優先し、ごみ・針・糸を持ち帰る。"
    ],
    "methodSlugs": []
  },
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": false,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "googleQuery": "石見海浜公園・赤鼻 島根県",
    "bestFor": [
      "シロギスを狙う釣り",
      "ヒラメを狙う釣り",
      "スズキを狙う釣り",
      "メバルを狙う釣り"
    ],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "iwami-akabana",
    "name": "石見海浜公園・赤鼻",
    "prefecture": "島根県",
    "area": "島根・浜田",
    "primaryType": "rock",
    "terrain": "rock",
    "fish": [
      "シロギス",
      "ヒラメ",
      "スズキ",
      "メバル"
    ],
    "methods": [
      "投げ釣り",
      "ルアー"
    ],
    "note": "公園沿いの砂浜と赤鼻の岩場を含む釣り場。砂地と根周りで対象魚が変わるため、足場に応じて釣法を選びます。",
    "access": "浜田市国分町。園内案内で釣り可能な場所を確認。",
    "field": "公園沿いの砂浜と赤鼻の岩場を含む釣り場。砂地と根周りで対象魚が変わるため、足場に応じて釣法を選びます。",
    "lat": 34.950694444444444,
    "lng": 132.1145,
    "positionNote": "浜田市観光協会の地図に指定された地点。掲載範囲の代表位置で、周辺全域の釣り許可を意味しません。",
    "officialUrl": "https://kankou-hamada.or.jp/guidepost/6458",
    "sources": [
      {
        "label": "浜田市観光協会：釣り場・対象魚・地図",
        "url": "https://kankou-hamada.or.jp/guidepost/6458"
      }
    ],
    "tips": [
      "足元の水深と流れを確認してから仕掛けを入れる。"
    ],
    "caution": [
      "赤鼻は足場が悪い区間があり、北西風・高波時は近づかない。",
      "当日の掲示・管理者の案内を優先し、ごみ・針・糸を持ち帰る。"
    ],
    "methodSlugs": []
  },
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": false,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "googleQuery": "日脚海岸 島根県",
    "bestFor": [
      "シロギスを狙う釣り",
      "マゴチを狙う釣り",
      "スズキを狙う釣り"
    ],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "hinashi-beach",
    "name": "日脚海岸",
    "prefecture": "島根県",
    "area": "島根・浜田",
    "primaryType": "beach",
    "terrain": "beach",
    "fish": [
      "シロギス",
      "マゴチ",
      "スズキ"
    ],
    "methods": [
      "投げ釣り",
      "ルアー"
    ],
    "note": "浜田市西部の砂浜。キスを狙う投げ釣りと、砂地に沿って探るマゴチのルアー釣りが候補になります。",
    "access": "浜田市日脚町。海岸への通路と駐車可能な場所は現地で確認。",
    "field": "浜田市西部の砂浜。キスを狙う投げ釣りと、砂地に沿って探るマゴチのルアー釣りが候補になります。",
    "lat": 34.87097222222222,
    "lng": 132.02294444444445,
    "positionNote": "浜田市観光協会の地図に指定された地点。掲載範囲の代表位置で、周辺全域の釣り許可を意味しません。",
    "officialUrl": "https://kankou-hamada.or.jp/guidepost/6460",
    "sources": [
      {
        "label": "浜田市観光協会：釣り場・対象魚・地図",
        "url": "https://kankou-hamada.or.jp/guidepost/6460"
      }
    ],
    "tips": [
      "砂地では着底を取り、ゆっくり探って反応のあった距離を覚える。"
    ],
    "caution": [
      "沈み根に仕掛けを止め続けず、根掛かり時は周囲を確認して回収する。",
      "当日の掲示・管理者の案内を優先し、ごみ・針・糸を持ち帰る。"
    ],
    "methodSlugs": []
  },
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": false,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "googleQuery": "浜田川河口 島根県",
    "bestFor": [
      "スズキを狙う釣り",
      "メジナを狙う釣り",
      "シロギスを狙う釣り",
      "クロダイを狙う釣り"
    ],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "hamadagawa-estuary",
    "name": "浜田川河口",
    "prefecture": "島根県",
    "area": "島根・浜田",
    "primaryType": "estuary",
    "terrain": "estuary",
    "fish": [
      "スズキ",
      "メジナ",
      "シロギス",
      "クロダイ"
    ],
    "methods": [
      "ルアー",
      "ウキ釣り"
    ],
    "note": "浜田城跡近くの河口。川の流れと海の潮が交わり、スズキを狙うルアーやウキ釣りを検討できます。",
    "access": "浜田市港町。河口の立入可能な岸から利用。",
    "field": "浜田城跡近くの河口。川の流れと海の潮が交わり、スズキを狙うルアーやウキ釣りを検討できます。",
    "lat": 34.90736111111111,
    "lng": 132.06997222222222,
    "positionNote": "浜田市観光協会の地図に指定された地点。掲載範囲の代表位置で、周辺全域の釣り許可を意味しません。",
    "officialUrl": "https://kankou-hamada.or.jp/guidepost/6462",
    "sources": [
      {
        "label": "浜田市観光協会：釣り場・対象魚・地図",
        "url": "https://kankou-hamada.or.jp/guidepost/6462"
      }
    ],
    "tips": [
      "足元の水深と流れを確認してから仕掛けを入れる。"
    ],
    "caution": [
      "磯へ通じる足場の悪い道や、増水した川岸には入らない。",
      "当日の掲示・管理者の案内を優先し、ごみ・針・糸を持ち帰る。"
    ],
    "methodSlugs": [
      "uki"
    ]
  },
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": false,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "googleQuery": "円通寺波止 島根県",
    "bestFor": [
      "マアジを狙う釣り",
      "メバルを狙う釣り",
      "カサゴを狙う釣り",
      "シロギスを狙う釣り",
      "アオリイカを狙う釣り"
    ],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "entsuji-hato",
    "name": "円通寺波止",
    "prefecture": "島根県",
    "area": "島根・浜田",
    "primaryType": "pier",
    "terrain": "pier",
    "fish": [
      "マアジ",
      "メバル",
      "カサゴ",
      "シロギス",
      "アオリイカ"
    ],
    "methods": [
      "サビキ",
      "胴突き",
      "エギング"
    ],
    "note": "長浜町の波止。足元のサビキや根魚の探り釣りを選びやすく、季節によってエギングも候補になります。",
    "access": "浜田市長浜町。作業車や係留船を避け、現地の利用表示に従う。",
    "field": "長浜町の波止。足元のサビキや根魚の探り釣りを選びやすく、季節によってエギングも候補になります。",
    "lat": 34.87111111111111,
    "lng": 132.04830555555554,
    "positionNote": "浜田市観光協会の地図に指定された地点。掲載範囲の代表位置で、周辺全域の釣り許可を意味しません。",
    "officialUrl": "https://kankou-hamada.or.jp/guidepost/6456",
    "sources": [
      {
        "label": "浜田市観光協会：釣り場・対象魚・地図",
        "url": "https://kankou-hamada.or.jp/guidepost/6456"
      }
    ],
    "tips": [
      "足元の水深と流れを確認してから仕掛けを入れる。"
    ],
    "caution": [
      "漁業作業・船の出入りを優先し、係留索や立入制限区画に近づかない。",
      "当日の掲示・管理者の案内を優先し、ごみ・針・糸を持ち帰る。"
    ],
    "methodSlugs": [
      "sabiki",
      "douzuki",
      "eging"
    ]
  },
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": true,
    "kids": true,
    "verifiedAt": "2026-09-17",
    "googleQuery": "千代ノ浦マリンパーク 釣り護岸 北海道",
    "bestFor": [
      "アイナメを狙う釣り",
      "チカを狙う釣り",
      "コマイを狙う釣り"
    ],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "chiyonoura-marine-park",
    "name": "千代ノ浦マリンパーク 釣り護岸",
    "prefecture": "北海道",
    "area": "北海道・釧路",
    "primaryType": "park",
    "terrain": "pier",
    "lat": 42.968881,
    "lng": 144.393452,
    "fish": [
      "アイナメ",
      "チカ",
      "コマイ"
    ],
    "methods": [
      "投げ釣り",
      "サビキ"
    ],
    "parking": true,
    "toilet": true,
    "note": "釧路市の海辺の公園に整備された釣り護岸。家族で利用する場合も、遊具広場と針を扱う場所を分けて過ごせます。",
    "access": "釧路市千代ノ浦の公園へ。園内に車両は乗り入れできません。",
    "field": "北海道所管の釣り護岸。公園の擬岩山は老朽化により使用禁止です。",
    "positionNote": "公園付近の代表位置を市の施設案内と照合。釣り区画は現地の護岸案内を確認。",
    "officialUrl": "https://www.city.kushiro.lg.jp/sangyou/suisan/1006271/1006273.html",
    "sources": [
      {
        "label": "釧路市：施設・釣り護岸・使用禁止設備",
        "url": "https://www.city.kushiro.lg.jp/sangyou/suisan/1006271/1006273.html"
      },
      {
        "label": "公園位置の照合",
        "url": "https://www.turiba-spot-ichiran.com/chiyonoragyokomarimpaku/"
      }
    ],
    "tips": [
      "貸竿はないため、道具・餌・針外しを持参する。"
    ],
    "caution": [
      "使用禁止の擬岩山へ登らない。",
      "濃霧・高波・凍結時は水際に近づかない。"
    ],
    "methodSlugs": [
      "sabiki"
    ]
  },
  {
    "type": "spot",
    "season": "積雪期を除く概ね4月〜12月中旬。公園施設の営業期間とは異なる",
    "beginner": true,
    "kids": true,
    "verifiedAt": "2026-09-17",
    "googleQuery": "しべつ海の公園 釣り突堤 北海道",
    "bestFor": [],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "shibetsu-seaside-fishing",
    "name": "しべつ海の公園 釣り突堤",
    "prefecture": "北海道",
    "area": "北海道・標津",
    "primaryType": "park",
    "terrain": "pier",
    "lat": 43.6579,
    "lng": 145.1359,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "parking": true,
    "toilet": true,
    "note": "標津町のサンライズビーチに隣接する釣り突堤。南側には釣り護岸が整備され、公園の設備を利用した釣行を計画できます。",
    "access": "標津町の海浜公園へ。マーカーは公園の代表位置で、利用する突堤は園内案内を確認。",
    "field": "海水浴場の北と南に釣り用突堤。南護岸にも釣り区画があります。",
    "positionNote": "北海道オープンデータの海浜公園代表座標。釣り座そのものの位置ではありません。",
    "officialUrl": "https://www.shibetsutown.jp/culture/?content=408",
    "sources": [
      {
        "label": "標津町：釣り突堤の利用期間と設備",
        "url": "https://www.shibetsutown.jp/culture/?content=408"
      },
      {
        "label": "北海道オープンデータ：公園位置",
        "url": "https://www.harp.lg.jp/opendata/dataset/1708/resource/3868/content.html"
      }
    ],
    "tips": [
      "釣りカレンダーと当日の海況を確認して対象魚を決める。"
    ],
    "caution": [
      "突堤は照明がなく、初心者は明るい時間に利用する。",
      "積雪・凍結期や高波時は利用を見合わせる。"
    ],
    "methodSlugs": []
  },
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": true,
    "kids": true,
    "verifiedAt": "2026-09-17",
    "googleQuery": "直江津港第3東防波堤 管理釣り場 新潟県",
    "bestFor": [
      "マアジを狙う釣り",
      "ヒラメを狙う釣り"
    ],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "naoetsu-happyfishing",
    "name": "直江津港第3東防波堤 管理釣り場",
    "prefecture": "新潟県",
    "area": "新潟・上越・直江津",
    "lat": 37.213105,
    "lng": 138.276308,
    "primaryType": "facility",
    "terrain": "pier",
    "fish": [
      "マアジ",
      "ヒラメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "note": "直江津港で受付を通して利用する管理釣り場。大型船の入出港や風の状態で閉鎖されるため、開放予定を見て釣行を決めます。",
    "access": "上越市八千浦の管理棟で受付。港の他区画へ釣り目的で立ち入らない。",
    "field": "直江津港で受付を通して利用する管理釣り場。大型船の入出港や風の状態で閉鎖されるため、開放予定を見て釣行を決めます。",
    "positionNote": "地理院地図・航空写真と施設案内を照合した釣りエリアの代表位置。ピンは駐車場や入口ではありません。利用区画は現地の案内で確認してください。",
    "officialUrl": "https://happyfishing-n.jp/",
    "sources": [{
        "label": "公式：利用・営業案内",
        "url": "https://happyfishing-n.jp/"
      },{
        "label": "アクセス地図・位置の照合",
        "url": "https://happyfishing-n.jp/access/"
      },{"label":"国土地理院：釣りエリアの位置を照合（2026-09-18）","url":"https://maps.gsi.go.jp/#18/37.213105/138.276308/&base=std&ls=std&disp=1"}],
    "tips": [
      "受付で利用できる釣法・貸道具・餌を確認してから始める。"
    ],
    "caution": [
      "大型船の入出港日は終日閉鎖になる場合がある。",
      "救命具・年齢・竿数・順番待ちなど運営者の規則を確認。"
    ],
    "methodSlugs": []
  },
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": true,
    "kids": true,
    "verifiedAt": "2026-09-17",
    "googleQuery": "下津ピアーランド 和歌山県",
    "bestFor": [],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "shimotsu-pialand",
    "name": "下津ピアーランド",
    "prefecture": "和歌山県",
    "area": "和歌山・海南・下津",
    "lat": 34.1383067,
    "lng": 135.1439637,
    "primaryType": "facility",
    "terrain": "pier",
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "note": "海南市下津町の海釣り公園。桟橋での釣りを中心に、貸道具や販売品を確認して手持ちの装備を補えます。",
    "access": "海南市下津町丸田1204-20。JR加茂郷駅からは車での移動が必要。",
    "field": "海南市下津町の海釣り公園。桟橋での釣りを中心に、貸道具や販売品を確認して手持ちの装備を補えます。",
    "positionNote": "施設の公式アクセス案内と位置情報を照合した代表位置。実際の釣り区画は受付で確認。",
    "officialUrl": "https://www.shimotsu-pialand.com/",
    "sources": [
      {
        "label": "公式：利用・営業案内",
        "url": "https://www.shimotsu-pialand.com/"
      },
      {
        "label": "アクセス地図・位置の照合",
        "url": "https://mapfan.com/spots/S3C3A%2CJ%2CRLEXE"
      }
    ],
    "tips": [
      "受付で利用できる釣法・貸道具・餌を確認してから始める。"
    ],
    "caution": [
      "気象警報の発令時は閉園。",
      "12歳未満は保護者または引率者と利用する。"
    ],
    "methodSlugs": []
  },
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": true,
    "kids": true,
    "verifiedAt": "2026-09-17",
    "googleQuery": "しおかぜ公園 海釣りエリア 岩手県",
    "bestFor": [],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "miyako-shiokaze",
    "name": "しおかぜ公園 海釣りエリア",
    "prefecture": "岩手県",
    "area": "岩手・宮古・出崎",
    "lat": 39.6385233,
    "lng": 141.97229255,
    "primaryType": "facility",
    "terrain": "pier",
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "note": "宮古港の出崎地区に整備された公園。約150mの海釣りエリアが設けられ、散策する人と場所を分けて釣りを楽しめます。",
    "access": "道の駅みやこ・シートピアなあどに隣接。園内の海釣りエリア案内を確認。",
    "field": "宮古港の出崎地区に整備された公園。約150mの海釣りエリアが設けられ、散策する人と場所を分けて釣りを楽しめます。",
    "positionNote": "施設の公式アクセス案内と位置情報を照合した代表位置。実際の釣り区画は受付で確認。",
    "officialUrl": "https://www.pref.iwate.jp/engan/miya_doboku/1068762/1068763/1058063.html",
    "sources": [
      {
        "label": "公式：利用・営業案内",
        "url": "https://www.pref.iwate.jp/engan/miya_doboku/1068762/1068763/1058063.html"
      },
      {
        "label": "アクセス地図・位置の照合",
        "url": "https://www.mapion.co.jp/phonebook/M04010/03202/ILSP0084353695_ipclm/"
      }
    ],
    "tips": [
      "受付で利用できる釣法・貸道具・餌を確認してから始める。"
    ],
    "caution": [
      "園内の指定海釣りエリア以外では釣らない。",
      "周辺港湾や浮桟橋を釣り場として利用しない。"
    ],
    "methodSlugs": []
  },
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": true,
    "kids": true,
    "verifiedAt": "2026-09-17",
    "googleQuery": "城ヶ島 J’sフィッシング 神奈川県",
    "bestFor": [
      "マダイを狙う釣り",
      "カンパチを狙う釣り",
      "シマアジを狙う釣り",
      "ヒラメを狙う釣り"
    ],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "jogashima-js-fishing",
    "name": "城ヶ島 J’sフィッシング",
    "prefecture": "神奈川県",
    "area": "神奈川・三浦・城ヶ島",
    "lat": 35.137439,
    "lng": 139.612991,
    "primaryType": "facility",
    "terrain": "sea-pond",
    "fish": [
      "マダイ",
      "カンパチ",
      "シマアジ",
      "ヒラメ"
    ],
    "methods": [
      "餌釣り"
    ],
    "note": "城ヶ島の海上イケス釣堀。コースごとの予約と受付を済ませ、指定の釣り座で放流魚の引きを楽しむ施設です。",
    "access": "三浦市三崎町城ヶ島650-70。城ヶ島バス停から徒歩圏。",
    "field": "城ヶ島の海上イケス釣堀。コースごとの予約と受付を済ませ、指定の釣り座で放流魚の引きを楽しむ施設です。",
    "positionNote": "施設の公式アクセス案内と位置情報を照合した代表位置。実際の釣り区画は受付で確認。",
    "officialUrl": "https://js-fishing.com/",
    "sources": [
      {
        "label": "公式：利用・営業案内",
        "url": "https://js-fishing.com/"
      },
      {
        "label": "アクセス地図・位置の照合",
        "url": "https://js-fishing.com/access/"
      }
    ],
    "tips": [
      "受付で利用できる釣法・貸道具・餌を確認してから始める。"
    ],
    "caution": [
      "餌・ハリス・針は施設指定品を使い、持込規則を確認。",
      "ルアー・疑似餌・コマセ・上投げは禁止。"
    ],
    "methodSlugs": []
  },
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": false,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "googleQuery": "舘山寺内浦 静岡県",
    "bestFor": [
      "マハゼを狙う釣り",
      "クロダイを狙う釣り"
    ],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "kanzanji-uchiura",
    "name": "舘山寺内浦",
    "prefecture": "静岡県",
    "area": "静岡・浜松・浜名湖",
    "lat": 34.764885,
    "lng": 137.613879,
    "primaryType": "shore",
    "terrain": "shore",
    "fish": [
      "マハゼ",
      "クロダイ"
    ],
    "methods": [
      "ちょい投げ"
    ],
    "note": "舘山寺温泉近くの内浦。湾奥の穏やかな場所でも潮で水深が変わるため、足元の状況を見ながら短い仕掛けで探ります。",
    "access": "浜松市の現地案内を確認。通行・散策・係留船の利用を妨げない岸から利用する。",
    "field": "舘山寺温泉近くの内浦。湾奥の穏やかな場所でも潮で水深が変わるため、足元の状況を見ながら短い仕掛けで探ります。",
    "officialUrl": "https://hamamatsu-daisuki.net/pickup/7181/",
    "sources": [
      {
        "label": "浜松・浜名湖観光公式：釣りスポット案内",
        "url": "https://hamamatsu-daisuki.net/pickup/7181/"
      },
      {
        "label": "具体的な位置の照合",
        "url": "https://www.turiba-spot-ichiran.com/kanzanjiuchiura/"
      }
    ],
    "positionNote": "観光公式の紹介範囲と釣り場地図の代表位置を照合。私有地・作業場・橋上からの釣り許可を示すものではありません。",
    "tips": [
      "軽い仕掛けから始め、流されすぎる場合に重さを調整する。"
    ],
    "caution": [
      "増水・大雨・強風時は水辺に近づかない。",
      "養殖施設や船の係留場所、立入禁止表示のある場所を避ける。"
    ],
    "methodSlugs": [
      "choinage"
    ]
  },
  {
    "type": "spot",
    "season": "季節・天候・利用区画の最新案内を確認",
    "beginner": false,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "googleQuery": "都田川 みおつくし橋周辺 静岡県",
    "bestFor": [
      "マハゼを狙う釣り",
      "クロダイを狙う釣り",
      "スズキを狙う釣り"
    ],
    "timing": "釣行前に当日の開放・営業状況を確認。",
    "guideSlugs": [
      "fishing-map-permission-check"
    ],
    "slug": "miyakoda-miotsukushi",
    "name": "都田川 みおつくし橋周辺",
    "prefecture": "静岡県",
    "area": "静岡・浜松・浜名湖",
    "lat": 34.805596,
    "lng": 137.651688,
    "primaryType": "estuary",
    "terrain": "estuary",
    "fish": [
      "マハゼ",
      "クロダイ",
      "スズキ"
    ],
    "methods": [
      "ちょい投げ"
    ],
    "note": "奥浜名湖へ注ぐ都田川の下流。みおつくし橋周辺の岸からハゼなどを狙い、流れに合わせて仕掛けを送り込む釣り場です。",
    "access": "浜松市の現地案内を確認。通行・散策・係留船の利用を妨げない岸から利用する。",
    "field": "奥浜名湖へ注ぐ都田川の下流。みおつくし橋周辺の岸からハゼなどを狙い、流れに合わせて仕掛けを送り込む釣り場です。",
    "officialUrl": "https://hamamatsu-daisuki.net/pickup/7181/",
    "sources": [
      {
        "label": "浜松・浜名湖観光公式：釣りスポット案内",
        "url": "https://hamamatsu-daisuki.net/pickup/7181/"
      },
      {
        "label": "具体的な位置の照合",
        "url": "https://www.ishiguro-gr.com/enjoy/fishing-post/detail.php?id=76"
      }
    ],
    "positionNote": "観光公式の紹介範囲と釣り場地図の代表位置を照合。私有地・作業場・橋上からの釣り許可を示すものではありません。",
    "tips": [
      "軽い仕掛けから始め、流されすぎる場合に重さを調整する。"
    ],
    "caution": [
      "増水・大雨・強風時は水辺に近づかない。",
      "養殖施設や船の係留場所、立入禁止表示のある場所を避ける。"
    ],
    "methodSlugs": [
      "choinage"
    ]
  },
  {
    "slug": "ueno-oobiki",
    "name": "上野渡船",
    "prefecture": "和歌山県",
    "port": "大引港",
    "area": "和歌山県・大引港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 33.969719,
    "lng": 135.083543,
    "fish": [
      "カワハギ"
    ],
    "methods": [
      "ジギング",
      "カワハギ釣り"
    ],
    "note": "大引を拠点に磯への渡船と船釣りを案内。渡船利用とルアー船では必要な装備が違うため、予約時に目的を伝えます。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://minnaga.com/uenotosen/",
    "googleQuery": "上野渡船 大引港",
    "access": "大引港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://minnaga.com/uenotosen/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190750_4176"
      }
    ],
    "bestFor": [
      "カワハギの船釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "磯へ渡る便と船上で釣る便を混同せず、帰港便も確認する。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": [
      "kawahagi"
    ]
  },
  {
    "slug": "yoyomaru-fukuro",
    "name": "代々丸",
    "prefecture": "和歌山県",
    "port": "袋港",
    "area": "和歌山県・袋港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 33.62945,
    "lng": 135.395615,
    "fish": [],
    "methods": [
      "ジギング"
    ],
    "note": "白浜の富田浦・袋港を拠点とする遊漁船。南紀のジギングを計画するときは、釣り物と海況に合う道具を船宿に相談できます。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://minnaga.com/yoyomaru/",
    "googleQuery": "代々丸 袋港",
    "access": "袋港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://minnaga.com/yoyomaru/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190751_4176"
      }
    ],
    "bestFor": [
      "船宿に相談して選ぶ釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "使用ジグの重さ・ライン・電動リールの可否を便ごとに確認する。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": []
  },
  {
    "slug": "anseimaru-nadachi",
    "name": "安盛丸",
    "prefecture": "新潟県",
    "port": "名立港",
    "area": "新潟県・名立港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 37.166485,
    "lng": 138.088939,
    "fish": [
      "マダイ"
    ],
    "methods": [
      "餌釣り"
    ],
    "note": "名立港から日本海へ出る釣り船。乗合の釣り物と予約枠を確認し、初めての場合は道具の準備から相談できます。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://nadachianseimaru.wixsite.com/anseimaru",
    "googleQuery": "安盛丸 名立港",
    "access": "名立港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://nadachianseimaru.wixsite.com/anseimaru"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190724_4174"
      }
    ],
    "bestFor": [
      "マダイの船釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "駐車は国道側から詰めるなど、当日の船宿案内に従う。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": []
  },
  {
    "slug": "yutakamaru-teradomari",
    "name": "ゆたか丸",
    "prefecture": "新潟県",
    "port": "寺泊港",
    "area": "新潟県・寺泊港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 37.642416,
    "lng": 138.76403,
    "fish": [
      "マダイ",
      "キジハタ",
      "カサゴ",
      "ウマヅラハギ"
    ],
    "methods": [
      "タイラバ",
      "ひとつテンヤ"
    ],
    "note": "寺泊から近海の根魚やマダイ、佐渡沖の釣りへ出る船宿。近海便と沖の便で釣行時間やタックルが変わります。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://yutakamaru.tsuri-navi.jp/",
    "googleQuery": "ゆたか丸 寺泊港",
    "access": "寺泊港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://yutakamaru.tsuri-navi.jp/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190726_4174"
      }
    ],
    "bestFor": [
      "マダイの船釣り",
      "キジハタの船釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "電動リール用バッテリーや餌の準備範囲を出船案内で確認する。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": [
      "tai-rubber",
      "hitotsu-tenya"
    ]
  },
  {
    "slug": "kouyu-nou",
    "name": "こうゆう丸",
    "prefecture": "新潟県",
    "port": "能生漁港",
    "area": "新潟県・能生漁港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 37.110127,
    "lng": 137.996145,
    "fish": [
      "マダイ",
      "ブリ",
      "タチウオ"
    ],
    "methods": [
      "タイラバ",
      "ひとつテンヤ",
      "ジギング"
    ],
    "note": "能生漁港の遊漁船。マダイから中深場の魚まで釣り物別の募集があり、同じ港でも目的に合わせて便を選ぶ必要があります。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://kouyuu-ngt.com/",
    "googleQuery": "こうゆう丸 能生漁港",
    "access": "能生漁港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://kouyuu-ngt.com/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190722_4174"
      }
    ],
    "bestFor": [
      "マダイの船釣り",
      "ブリの船釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "複数の釣りを組み合わせる便では、両方の仕掛けを予約時に確認する。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": [
      "tai-rubber",
      "hitotsu-tenya"
    ]
  },
  {
    "slug": "meiseimaru-haifuku",
    "name": "明生丸",
    "prefecture": "長崎県",
    "port": "早福港",
    "area": "長崎県・早福港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 33.22772222222222,
    "lng": 129.3842222222222,
    "fish": [],
    "methods": [
      "泳がせ釣り"
    ],
    "note": "平戸・早福を拠点とする釣り船。大物を狙う便を検討する際は、募集魚種・必要装備・経験に合うプランを船長と相談します。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "http://meiseimaru.com/",
    "googleQuery": "明生丸 早福港",
    "access": "早福港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "http://meiseimaru.com/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1243651_4179"
      }
    ],
    "bestFor": [
      "船宿に相談して選ぶ釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "強い負荷がかかる釣りでは、竿受けや仕掛けの指定を事前に確認する。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": [
      "nomase"
    ]
  },
  {
    "slug": "uminchu-tamana",
    "name": "海人丸",
    "prefecture": "熊本県",
    "port": "玉名新川漁港",
    "area": "熊本県・玉名新川漁港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 32.904264,
    "lng": 130.47682,
    "fish": [
      "マダイ",
      "ヒラメ",
      "シロギス",
      "マダコ"
    ],
    "methods": [
      "タイラバ",
      "ひとつテンヤ",
      "泳がせ釣り"
    ],
    "note": "玉名新川漁港から有明海・天草方面へ出船。マダイやキス・ヒラメなどの便を選び、家族や初心者も貸道具を相談できます。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://www.uminchumaru.com/",
    "googleQuery": "海人丸 玉名新川漁港",
    "access": "玉名新川漁港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://www.uminchumaru.com/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1246313_4179"
      }
    ],
    "bestFor": [
      "マダイの船釣り",
      "ヒラメの船釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "複数船で募集しているため、予約した船と釣り物を受付時に照合する。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": [
      "tai-rubber",
      "hitotsu-tenya",
      "nomase"
    ]
  },
  {
    "slug": "beppumaru-wakakusa",
    "name": "べっぷ丸",
    "prefecture": "大分県",
    "port": "新若草港",
    "area": "大分県・新若草港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 33.287732,
    "lng": 131.50603,
    "fish": [
      "マアジ",
      "マサバ",
      "カワハギ",
      "タチウオ",
      "マダイ"
    ],
    "methods": [
      "カワハギ釣り",
      "タイラバ"
    ],
    "note": "別府を拠点に関アジ・関サバやカワハギ、タチウオなどを案内。魚種ごとの道具説明を読んで便に合う準備を進められます。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "http://www.beppumaru.com/",
    "googleQuery": "べっぷ丸 新若草港",
    "access": "新若草港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "http://www.beppumaru.com/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190788_4179"
      }
    ],
    "bestFor": [
      "マアジの船釣り",
      "マサバの船釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "集合する港と待合室は別の場合があるため、予約案内の集合位置を優先する。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": [
      "kawahagi",
      "tai-rubber"
    ]
  },
  {
    "slug": "kaiseimaru-shigetomi",
    "name": "海晴丸",
    "prefecture": "鹿児島県",
    "port": "重富漁港",
    "area": "鹿児島県・重富漁港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 31.701234,
    "lng": 130.616981,
    "fish": [
      "マダイ",
      "カワハギ",
      "タチウオ"
    ],
    "methods": [
      "タイラバ",
      "ジギング",
      "カワハギ釣り"
    ],
    "note": "重富漁港から錦江湾の釣りへ出る遊漁船。マダイに加え、季節に応じてカワハギやタチウオなどの便を検討できます。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://kaisei.synapse.kagoshima.jp/",
    "googleQuery": "海晴丸 重富漁港",
    "access": "重富漁港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://kaisei.synapse.kagoshima.jp/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190791_4179"
      }
    ],
    "bestFor": [
      "マダイの船釣り",
      "カワハギの船釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "湾内でも風と潮で必要な重さが変わるため、船長の指定を確認する。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": [
      "tai-rubber",
      "kawahagi"
    ]
  },
  {
    "slug": "suitenmaru-nakabayashi",
    "name": "水天丸",
    "prefecture": "徳島県",
    "port": "中林漁港",
    "area": "徳島県・中林漁港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 33.902766399892535,
    "lng": 134.6942620852112,
    "fish": [
      "カワハギ",
      "アオリイカ",
      "ブリ",
      "ヒラメ"
    ],
    "methods": [
      "カワハギ釣り",
      "ティップラン",
      "ジギング"
    ],
    "note": "阿南市中林漁港を拠点とする遊漁船。カワハギやティップランなど、魚種ごとの専門的な釣りを選んで予約できます。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://www.suitenmaru.com/",
    "googleQuery": "水天丸 中林漁港",
    "access": "中林漁港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://www.suitenmaru.com/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190785_4178"
      }
    ],
    "bestFor": [
      "カワハギの船釣り",
      "アオリイカの船釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "港の駐車位置写真を確認し、漁業者の作業場所を空ける。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": [
      "kawahagi",
      "tiprun"
    ]
  },
  {
    "slug": "kuroiwa-matsuyama",
    "name": "黒岩フィッシングサービス",
    "prefecture": "愛媛県",
    "port": "高浜",
    "area": "愛媛県・高浜",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 33.87718874028428,
    "lng": 132.69964434843064,
    "fish": [
      "マダイ",
      "マアジ",
      "カワハギ",
      "アオリイカ"
    ],
    "methods": [
      "タイラバ",
      "ティップラン"
    ],
    "note": "松山沖でのタイラバやアジ釣りなどを案内する船宿。宇和海営業所発の便もあるため、釣り物と出発拠点をセットで確認します。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://f-kuroiwa.jp/",
    "googleQuery": "黒岩フィッシングサービス 高浜",
    "access": "高浜の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://f-kuroiwa.jp/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190779_4178"
      }
    ],
    "bestFor": [
      "マダイの船釣り",
      "マアジの船釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "このマーカーは松山側。宇和海便の集合場所は別途確認する。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": [
      "tai-rubber",
      "tiprun"
    ]
  },
  {
    "slug": "heishinmaru-miyako",
    "name": "平進丸",
    "prefecture": "岩手県",
    "port": "宮古港",
    "area": "岩手県・宮古港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 39.618119,
    "lng": 141.965461,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "note": "佐々木釣具店とともに宮古の船釣りを案内する船宿。深場を含む季節の釣りを計画する際は、募集内容と必要な仕掛けを相談します。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://heishinmaru.com/",
    "googleQuery": "平進丸 宮古港",
    "access": "宮古港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://heishinmaru.com/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190603_4172"
      }
    ],
    "bestFor": [
      "船宿に相談して選ぶ釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "深場の便は糸巻き量・オモリ・電源を事前に確認する。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": []
  },
  {
    "slug": "koshinmaru-sakihama",
    "name": "広進丸",
    "prefecture": "岩手県",
    "port": "崎浜漁港",
    "area": "岩手県・崎浜漁港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 39.101208,
    "lng": 141.861026,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "note": "大船渡市越喜来の崎浜漁港を拠点とする釣り船。出船予定と釣果を運営者のブログで確認してから、希望の釣りを相談できます。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://kousinnmaru.hateblo.jp/",
    "googleQuery": "広進丸 崎浜漁港",
    "access": "崎浜漁港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://kousinnmaru.hateblo.jp/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190601_4172"
      }
    ],
    "bestFor": [
      "船宿に相談して選ぶ釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "船着き場と駐車場は運営者の港内案内に従う。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": []
  },
  {
    "slug": "kikushin-arahama",
    "name": "きくしん丸",
    "prefecture": "宮城県",
    "port": "荒浜港（鳥の海）",
    "area": "宮城県・荒浜港（鳥の海）",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 38.039388,
    "lng": 140.913219,
    "fish": [
      "マアジ",
      "ヒラメ"
    ],
    "methods": [
      "船サビキ",
      "泳がせ釣り"
    ],
    "note": "亘理町の荒浜港から出船する船宿。アジやヒラメなど、その時期の募集便に合わせて餌と仕掛けを準備できます。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://www.kikushin.com/",
    "googleQuery": "きくしん丸 荒浜港（鳥の海）",
    "access": "荒浜港（鳥の海）の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://www.kikushin.com/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190597_4172"
      }
    ],
    "bestFor": [
      "マアジの船釣り",
      "ヒラメの船釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "場所取りは船宿が案内する受付終了後のルールに従う。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": [
      "nomase"
    ]
  },
  {
    "slug": "tsumeki-suzaki",
    "name": "爪木丸",
    "prefecture": "静岡県",
    "port": "須崎港",
    "area": "静岡県・須崎港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 34.65471,
    "lng": 138.966644,
    "fish": [
      "マダイ",
      "シマアジ",
      "スルメイカ"
    ],
    "methods": [
      "餌釣り",
      "イカ釣り"
    ],
    "note": "下田・須崎港を拠点に神子元島周辺などへ出る釣り船。イカや魚の便で仕掛けが大きく異なるため、出船予定を見て選びます。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://tsumeki.com/home/",
    "googleQuery": "爪木丸 須崎港",
    "access": "須崎港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://tsumeki.com/home/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190747_4175"
      }
    ],
    "bestFor": [
      "マダイの船釣り",
      "シマアジの船釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "イカ便と魚の便では投入器具やオモリが異なるため、持参品を確認する。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": []
  },
  {
    "slug": "shichifuku-morozaki",
    "name": "七福丸",
    "prefecture": "愛知県",
    "port": "師崎港",
    "area": "愛知県・師崎港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 34.699293,
    "lng": 136.971574,
    "fish": [],
    "methods": [
      "船釣り"
    ],
    "note": "知多半島先端の師崎港を拠点にする船宿。初心者や家族の利用も案内しており、参加者に合う釣り物と貸道具を相談できます。",
    "season": "釣り物・出船日は最新の募集案内を確認",
    "beginner": true,
    "kids": false,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://www.sitifuku.com/",
    "googleQuery": "七福丸 師崎港",
    "access": "師崎港の指定集合場所へ。受付・乗船位置は予約時の案内で確認。",
    "field": "乗船して沖へ向かう釣り。港のマーカーは乗船拠点で、周辺岸壁での釣り許可を意味しません。",
    "positionNote": "DAIWA掲載の船着き場座標と運営者の出船港を照合。古い住所表記や事務所所在地とは区別し、予約時の集合案内を優先。",
    "sources": [
      {
        "label": "運営者：予約・営業・釣り物の案内",
        "url": "https://www.sitifuku.com/"
      },
      {
        "label": "DAIWA：船着き場と集合場所の地図",
        "url": "https://www.daiwa.com/jp/partner/fishingmap/fishingboat/list/detail?ship=1190745_4175"
      }
    ],
    "bestFor": [
      "船宿に相談して選ぶ釣り"
    ],
    "timing": "予約した便の出船確認・集合時刻を船宿で確認。",
    "tips": [
      "集合場所と受付、港の駐車案内を確認して早朝の移動を計画する。"
    ],
    "caution": [
      "適合するライフジャケットを着用し、船長の指示に従う。",
      "港内の荷揚げや船の出入りを妨げない。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": []
  },
  {
    "slug": "umiusagi-kadena",
    "name": "海うさぎ丸・海あしび",
    "prefecture": "沖縄県",
    "area": "沖縄・嘉手納漁港",
    "port": "嘉手納漁港",
    "type": "boat",
    "primaryType": "boat",
    "terrain": "boat",
    "lat": 26.3619497,
    "lng": 127.7472927,
    "fish": [],
    "methods": [
      "餌釣り"
    ],
    "season": "開催便・天候は予約時に確認",
    "beginner": true,
    "kids": true,
    "verifiedAt": "2026-09-17",
    "officialUrl": "https://www.okinawa-fishing.jp/",
    "googleQuery": "嘉手納漁港 海うさぎ丸",
    "note": "嘉手納漁港から出る初心者向けの船釣り体験。短時間の釣りやカヤックとのセットを選べ、観光の予定と組み合わせられます。",
    "access": "嘉手納町水釜566-7の嘉手納漁港で集合。事務所住所（水釜6-25-3）とは異なります。",
    "field": "漁港から船で移動する海釣り体験。岸壁での自由釣りを案内する地点ではありません。",
    "positionNote": "運営者の集合場所ページにあるGoogleマップ目的地。旧観光案内の事務所座標は使っていません。",
    "sources": [
      {
        "label": "海うさぎ丸：開催コース",
        "url": "https://www.okinawa-fishing.jp/"
      },
      {
        "label": "公式：漁港集合場所",
        "url": "https://www.okinawa-fishing.jp/shop/"
      }
    ],
    "bestFor": [
      "道具を借りて始める船釣り体験"
    ],
    "timing": "予約した便の集合時間と開催可否を確認。",
    "tips": [
      "釣った魚の持ち帰り・調理を希望する場合は予約時に相談する。"
    ],
    "caution": [
      "参加年齢・服装・持ち物はコースの案内を確認。",
      "日差し・暑さ対策をし、救命具はスタッフの指示通り着用する。"
    ],
    "guideSlugs": [
      "boat-fishing-seasick"
    ],
    "methodSlugs": []
  }
];
