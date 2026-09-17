import type {FishingMapEntry} from './fishing-map-data';

// Source-backed September audit; seasonal closures stay excluded from the live map.
export const favoritesMapGrowth:FishingMapEntry[]=[
  {
    "slug": "growth-okinuma-pond",
    "name": "沖沼釣り公園",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "岩手県",
    "area": "岩手県",
    "terrain": "pond",
    "lat": 39.0663801,
    "lng": 141.1727679,
    "fish": [
      "ヘラブナ"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "前沢生母の池を利用するヘラブナ釣り場。橋を境に連なる二つの池で、岸の通路を空けて釣り座を選びます。",
    "googleQuery": "沖沼釣り公園 岩手県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://fish.boy.jp/tansui-site/okinuma.html"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%B2%96%E6%B2%BC%E9%87%A3%E3%82%8A%E5%85%AC%E5%9C%92/@39.0663801,141.1701876,17z/data=!3m1!4b1!4m6!3m5!1s0x5f88cb8fe937fc81:0xc34205216781937c!8m2!3d39.0663801!4d141.1727679!16s%2Fg%2F11f5q93drg?hl=ja&entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=135892"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "前沢生母の池を利用するヘラブナ釣り場。橋を境に連なる二つの池で、岸の通路を空けて釣り座を選びます。",
      "柵や立入表示を守り、使い終えた針と道糸を残さない。"
    ],
    "caution": [
      "柵や立入表示を守り、使い終えた針と道糸を残さない。"
    ]
  },
  {
    "slug": "growth-senjogataki-farm",
    "name": "千丈ヶ滝養魚場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "岩手県",
    "area": "岩手県",
    "terrain": "pond",
    "lat": 39.2921886,
    "lng": 141.8562322,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "釜石の千丈ヶ滝養魚場で行う釣り堀体験。釣った魚の塩焼きを頼めるため、食べる人数に合わせて釣る量を決めます。",
    "googleQuery": "千丈ヶ滝養魚場 岩手県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://kamaishi-town.com/archives/9307684.html"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%8D%83%E4%B8%88%E3%83%B6%E6%BB%9D%E9%A4%8A%E9%AD%9A%E5%A0%B4/@39.2921886,141.8562322,17z/data=!3m1!4b1!4m6!3m5!1s0x5f8609538329271d:0xf305054c3f89df21!8m2!3d39.2921886!4d141.8562322!16s%2Fg%2F11c75y21t4?hl=ja&entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=132975"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "釜石の千丈ヶ滝養魚場で行う釣り堀体験。釣った魚の塩焼きを頼めるため、食べる人数に合わせて釣る量を決めます。",
      "釣り堀は季節・曜日が限られるため、食事営業と釣りの実施を分けて確認する。"
    ],
    "caution": [
      "釣り堀は季節・曜日が限られるため、食事営業と釣りの実施を分けて確認する。"
    ]
  },
  {
    "slug": "growth-nanako-wakasagi",
    "name": "菜魚湖（大志田ダム）ワカサギ釣り",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "岩手県",
    "area": "岩手県",
    "terrain": "lake",
    "lat": 40.0802172,
    "lng": 141.2826542,
    "fish": [
      "ワカサギ"
    ],
    "fishSlugs": [],
    "methods": [
      "ワカサギ釣り"
    ],
    "methodSlugs": [
      "wakasagi"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "冬季の漁協が開放した氷上区画のみ。結氷状況で変更",
    "beginner": false,
    "kids": false,
    "note": "大志田ダムの菜魚湖で行う冬のワカサギ釣り。漁協が開放する氷上区域で利用し、レンタルの要否を出発前に決めます。",
    "officialUrl": "http://www.nanako-wakasagi.com/",
    "googleQuery": "菜魚湖（大志田ダム）ワカサギ釣り 岩手県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://www.nanako-wakasagi.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E8%8F%9C%E9%AD%9A%E6%B9%96/@40.0802213,141.2804602,17z/data=!3m1!4b1!4m5!3m4!1s0x5f85206c25edbba9:0xe9ec6b095015abd8!8m2!3d40.0802172!4d141.2826542"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=21309"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "湖の指定釣り区域",
    "bestFor": [
      "湖の指定釣り区域"
    ],
    "timing": "冬季の漁協が開放した氷上区画のみ。結氷状況で変更",
    "tips": [
      "大志田ダムの菜魚湖で行う冬のワカサギ釣り。漁協が開放する氷上区域で利用し、レンタルの要否を出発前に決めます。",
      "結氷だけを見て湖へ入らず、漁協が発表する解禁日と入場区画に従う。"
    ],
    "caution": [
      "結氷だけを見て湖へ入らず、漁協が発表する解禁日と入場区画に従う。"
    ]
  },
  {
    "slug": "growth-haruna-fish-farm",
    "name": "Fishing & Farm Haruna 遥菜養鱒場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "宮城県",
    "area": "宮城県",
    "terrain": "pond",
    "lat": 38.7498062,
    "lng": 140.8486708,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "宮城の遥菜養鱒場にある釣り堀。釣った魚をその場で塩焼きにしてもらう体験ができ、持ち帰る場合は冷やす準備をして訪れます。",
    "officialUrl": "https://harunayousonjyou867.wixsite.com/my-site-1/home",
    "googleQuery": "Fishing & Farm Haruna 遥菜養鱒場 宮城県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://harunayousonjyou867.wixsite.com/my-site-1/home"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/Fishing+%26+Farm+Haruna+%E9%81%A5%E8%8F%9C%E9%A4%8A%E9%B1%92%E5%A0%B4/@38.7498062,140.8486708,17z/data=!3m1!4b1!4m6!3m5!1s0x5f893be2d0550809:0x1ddd93e0925469cb!8m2!3d38.7498062!4d140.8486708!16s%2Fg%2F11y36tzr1k?hl=ja&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=132960"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "宮城の遥菜養鱒場にある釣り堀。釣った魚をその場で塩焼きにしてもらう体験ができ、持ち帰る場合は冷やす準備をして訪れます。",
      "釣りの最終受付と調理の受付を確認し、臨時休業の案内も確認する。"
    ],
    "caution": [
      "釣りの最終受付と調理の受付を確認し、臨時休業の案内も確認する。"
    ]
  },
  {
    "slug": "growth-wakuya-fishing-park",
    "name": "涌谷町釣り公園",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "宮城県",
    "area": "宮城県",
    "terrain": "lake",
    "lat": 38.5746979,
    "lng": 141.1980859,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "涌谷町の旧迫川に残る三日月湖を利用する釣り公園。馬蹄形の水面と浮桟橋があり、利用前に入釣章を購入する仕組みです。",
    "officialUrl": "https://www.town.wakuya.miyagi.jp:443/sangyo/kanko/asobu.html",
    "googleQuery": "涌谷町釣り公園 宮城県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.town.wakuya.miyagi.jp:443/sangyo/kanko/asobu.html"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%B6%8C%E8%B0%B7%E7%94%BA%E9%87%A3%E3%82%8A%E5%85%AC%E5%9C%92/@38.5746979,141.195511,17z/data=!3m1!4b1!4m6!3m5!1s0x5f8908a533e73b33:0x5cbd068e5b7153d7!8m2!3d38.5746979!4d141.1980859!16s%2Fg%2F11b7766pq5"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=84177"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "湖の指定釣り区域",
    "bestFor": [
      "湖の指定釣り区域"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "涌谷町の旧迫川に残る三日月湖を利用する釣り公園。馬蹄形の水面と浮桟橋があり、利用前に入釣章を購入する仕組みです。",
      "入釣章の有効期間と販売場所は町の最新案内を確認する。浮桟橋では足元と荷物の置き方に注意。"
    ],
    "caution": [
      "入釣章の有効期間と販売場所は町の最新案内を確認する。浮桟橋では足元と荷物の置き方に注意。"
    ]
  },
  {
    "slug": "growth-fujikura-pond",
    "name": "藤倉つり堀センター",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "秋田県",
    "area": "秋田県",
    "terrain": "pond",
    "lat": 39.7850292,
    "lng": 140.1983786,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "秋田市の藤倉つり堀センター。貸し道具で釣り、釣った魚は重量に応じて購入する方式です。炭火焼きの利用もできます。",
    "officialUrl": "https://fujikura-tc.com/",
    "googleQuery": "藤倉つり堀センター 秋田県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://fujikura-tc.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E8%97%A4%E5%80%89%E3%81%A4%E3%82%8A%E5%A0%80%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC/@39.784944,140.1962381,17z/data=!4m8!1m2!2m1!1z6Jek5YCJ44Gk44KK5aCA44K744Oz44K_44O8!3m4!1s0x5f8fe5e3b70ce2b7:0x164244baa6ad2b01!8m2!3d39.7850292!4d140.1983786"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=32292"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "秋田市の藤倉つり堀センター。貸し道具で釣り、釣った魚は重量に応じて購入する方式です。炭火焼きの利用もできます。",
      "釣具の持ち込みと釣った魚のリリースは禁止。魚の状態に伴う休業を営業カレンダーで確認する。"
    ],
    "caution": [
      "釣具の持ち込みと釣った魚のリリースは禁止。魚の状態に伴う休業を営業カレンダーで確認する。"
    ]
  },
  {
    "slug": "growth-wadona-ishiboriko",
    "name": "Fishing Bums, WaDoNa",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "福島県",
    "area": "福島県",
    "terrain": "pond",
    "lat": 36.8888276,
    "lng": 140.5384212,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "エリアトラウト"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "石堀湖のFishing Bums, WaDoNa。すべてリリースするルールで魚とのやり取りを楽しむ管理釣り場です。",
    "officialUrl": "https://www.wadonanikko.com/",
    "googleQuery": "Fishing Bums, WaDoNa 福島県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.wadonanikko.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/Fishing+Bums,WaDoNa/@36.885454,140.5317452,15.21z/data=!4m9!1m2!2m1!1sFishing+Bums,+WaDoNa!3m5!1s0x6021a5c59bf44417:0x67ac21fd9f343135!8m2!3d36.8888276!4d140.5384212!15sChRGaXNoaW5nIEJ1bXMsIFdhRG9OYZIBDGZpc2hpbmdfcG9uZA"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=65363"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "石堀湖のFishing Bums, WaDoNa。すべてリリースするルールで魚とのやり取りを楽しむ管理釣り場です。",
      "頻繁な放流を前提とした初心者向けの数釣り施設ではありません。入場前に独自ルールを読む。"
    ],
    "caution": [
      "頻繁な放流を前提とした初心者向けの数釣り施設ではありません。入場前に独自ルールを読む。"
    ]
  },
  {
    "slug": "growth-kotochu-farm",
    "name": "古戸中養魚場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "栃木県",
    "area": "栃木県",
    "terrain": "pond",
    "lat": 36.6118431,
    "lng": 139.6764877,
    "fish": [
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "鹿沼市の古戸中養魚場。ニジマスやヤシオマスを貸し竿で釣り、釣果の重さで精算する池です。店内調理や持ち帰りを選べます。",
    "officialUrl": "https://kotochu.com/",
    "googleQuery": "古戸中養魚場 栃木県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://kotochu.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%8F%A4%E6%88%B8%E4%B8%AD%E9%A4%8A%E9%AD%9A%E5%A0%B4/@36.6118431,139.6764877,17z/data=!3m1!4b1!4m6!3m5!1s0x601f0d4406482ead:0xe796cd8394466fbf!8m2!3d36.6118431!4d139.6764877!16s%2Fg%2F1tfqfx28?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=132957"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "鹿沼市の古戸中養魚場。ニジマスやヤシオマスを貸し竿で釣り、釣果の重さで精算する池です。店内調理や持ち帰りを選べます。",
      "釣った魚はすべて買い取りとなるため、食べる量を決めてから釣り始める。"
    ],
    "caution": [
      "釣った魚はすべて買い取りとなるため、食べる量を決めてから釣り始める。"
    ]
  },
  {
    "slug": "growth-kumamoto-farm-utsunomiya",
    "name": "熊本養魚場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "栃木県",
    "area": "栃木県",
    "terrain": "pond",
    "lat": 36.518914,
    "lng": 139.959291,
    "fish": [
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "エリアトラウト"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "宇都宮市の熊本養魚場。ルアー・フライでニジマスなどを狙う管理釣り場で、大型魚に備えてネットも用意します。",
    "officialUrl": "https://kumamoto-fish-farm.com/",
    "googleQuery": "熊本養魚場 栃木県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://kumamoto-fish-farm.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E7%86%8A%E6%9C%AC%E9%A4%8A%E9%AD%9A%E5%A0%B4+%E9%87%A3%E3%82%8A%E5%A0%80%E3%83%BB%E9%87%A3%E3%82%8A%E5%A0%B4/@36.518914,139.959291,17z/data=!3m1!4b1!4m6!3m5!1s0x601f5eec8c2a80d7:0x3f3740dd56a2f4ac!8m2!3d36.518914!4d139.959291!16s%2Fg%2F1tf_nd9g?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=132879"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "宇都宮市の熊本養魚場。ルアー・フライでニジマスなどを狙う管理釣り場で、大型魚に備えてネットも用意します。",
      "施設名の「熊本」は熊本県を意味しません。栃木県宇都宮市のアクセス案内を確認する。"
    ],
    "caution": [
      "施設名の「熊本」は熊本県を意味しません。栃木県宇都宮市のアクセス案内を確認する。"
    ]
  },
  {
    "slug": "growth-oyama-yusuien",
    "name": "Oyama Water Park 遊水園",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "栃木県",
    "area": "栃木県",
    "terrain": "pond",
    "lat": 36.3512078,
    "lng": 139.8591433,
    "fish": [
      "ニジマス",
      "金魚"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "小山市の遊水園。ニジマスのほか金魚やチョウザメの釣りを選べる施設で、魚種によって利用する池が異なります。",
    "officialUrl": "http://meiseikousan.jp/oyamawaterpark/",
    "googleQuery": "Oyama Water Park 遊水園 栃木県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://meiseikousan.jp/oyamawaterpark/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/Oyama+Water+Park+%E9%81%8A%E6%B0%B4%E5%9C%92/@36.3512121,139.8565684,17z/data=!3m1!4b1!4m6!3m5!1s0x601f512fdd39a57f:0x34134023c7ae8ffd!8m2!3d36.3512078!4d139.8591433!16s%2Fg%2F11px2xlryf?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=92807"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "小山市の遊水園。ニジマスのほか金魚やチョウザメの釣りを選べる施設で、魚種によって利用する池が異なります。",
      "希望するコースの実施日と道具を確認し、異なる池へ勝手に仕掛けを入れない。"
    ],
    "caution": [
      "希望するコースの実施日と道具を確認し、異なる池へ勝手に仕掛けを入れない。"
    ]
  },
  {
    "slug": "growth-nasu-seiryunosato",
    "name": "那須高原 清流の里",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "栃木県",
    "area": "栃木県",
    "terrain": "pond",
    "lat": 37.0612469,
    "lng": 139.9926034,
    "fish": [
      "ニジマス",
      "イワナ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "那須高原の清流の里。滝のある池で魚を釣り、その場の炭火焼きや持ち帰りにつなげる釣り堀です。",
    "officialUrl": "https://www.seiryunosato.com/",
    "googleQuery": "那須高原 清流の里 栃木県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.seiryunosato.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%BB%9D%E3%81%AE%E3%81%82%E3%82%8B%E9%87%A3%E5%A0%80+%E9%82%A3%E9%A0%88%E9%AB%98%E5%8E%9F+%E6%B8%85%E6%B5%81%E3%81%AE%E9%87%8C/@37.0612469,139.9900285,17z/data=!3m1!4b1!4m6!3m5!1s0x601f89b0c8698d95:0xef78eaeab83fc23d!8m2!3d37.0612469!4d139.9926034!16s%2Fg%2F1ttq265g?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=86412"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "那須高原の清流の里。滝のある池で魚を釣り、その場の炭火焼きや持ち帰りにつなげる釣り堀です。",
      "イワナは入荷状況で釣れない時があります。販売する焼き魚と池の放流魚を混同しない。"
    ],
    "caution": [
      "イワナは入荷状況で釣れない時があります。販売する焼き魚と池の放流魚を混同しない。"
    ]
  },
  {
    "slug": "growth-miyori-keiryu",
    "name": "三依渓流つり場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "栃木県",
    "area": "栃木県",
    "terrain": "river",
    "lat": 37.000859,
    "lng": 139.684176,
    "fish": [
      "ニジマス",
      "イワナ",
      "ヤマメ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "日光市三依の渓流を区切った釣り場。足場と流れを確認して釣り座を選び、受付で放流と調理の利用方法を確認します。",
    "officialUrl": "https://miyorikeiryutsuriba.jp/",
    "googleQuery": "三依渓流つり場 栃木県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://miyorikeiryutsuriba.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E4%B8%89%E4%BE%9D%E6%B8%93%E6%B5%81%E3%81%A4%E3%82%8A%E5%A0%B4/@37.000859,139.6816011,17z/data=!3m1!4b1!4m6!3m5!1s0x601fbfd3325d768b:0x2d592085f786a79!8m2!3d37.000859!4d139.684176!16s%2Fg%2F1tlqq2df?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=86411"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "日光市三依の渓流を区切った釣り場。足場と流れを確認して釣り座を選び、受付で放流と調理の利用方法を確認します。",
      "2026年9月の増水後は9月12日に再開の案内。雨量による再休業を出発前に確認する。"
    ],
    "caution": [
      "2026年9月の増水後は9月12日に再開の案内。雨量による再休業を出発前に確認する。"
    ]
  },
  {
    "slug": "growth-hokkojinomori",
    "name": "アウトドアヴィレッジ発光路の森フィッシングエリア",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "栃木県",
    "area": "栃木県",
    "terrain": "pond",
    "lat": 36.5809614,
    "lng": 139.5109192,
    "fish": [
      "ニジマス",
      "イワナ",
      "ヤマメ"
    ],
    "fishSlugs": [],
    "methods": [
      "エリアトラウト"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "鹿沼市の発光路の森。複数の池で魚種・サイズの異なるトラウトを狙うルアーのフィールドです。",
    "officialUrl": "https://hokkojinomori.livedoor.blog/",
    "googleQuery": "アウトドアヴィレッジ発光路の森フィッシングエリア 栃木県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://hokkojinomori.livedoor.blog/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%82%A2%E3%82%A6%E3%83%88%E3%83%89%E3%82%A2%E3%83%93%E3%83%AC%E3%83%83%E3%82%B8%E7%99%BA%E5%85%89%E8%B7%AF%E3%81%AE%E6%A3%AE%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%82%A8%E3%83%AA%E3%82%A2/@36.5809614,139.5087305,17z/data=!3m1!4b1!4m5!3m4!1s0x601f0596904d3ec7:0x46c56f554ddfded0!8m2!3d36.5809614!4d139.5109192"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=47628"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "鹿沼市の発光路の森。複数の池で魚種・サイズの異なるトラウトを狙うルアーのフィールドです。",
      "先にチケットを購入してから場所を確保。移動するときは椅子などの荷物も持って移る。"
    ],
    "caution": [
      "先にチケットを購入してから場所を確保。移動するときは椅子などの荷物も持って移る。"
    ]
  },
  {
    "slug": "growth-higashigoyako",
    "name": "東古屋湖",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "栃木県",
    "area": "栃木県",
    "terrain": "lake",
    "lat": 36.8198804,
    "lng": 139.803237,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "エリアトラウト"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "鬼怒川漁協が管理する東古屋湖の釣り場。湖岸やボートの利用条件を確認し、専用の遊漁ルールに沿って楽しみます。",
    "officialUrl": "https://www.kinugawa-gyokyou.com/higasigoyako/",
    "googleQuery": "東古屋湖 栃木県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.kinugawa-gyokyou.com/higasigoyako/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%9D%B1%E5%8F%A4%E5%B1%8B%E6%B9%96/@36.8186149,139.8009684,17z/data=!3m1!4b1!4m5!3m4!1s0x601f9dbb5068804f:0x3dd46bcdd415db4!8m2!3d36.8198804!4d139.803237"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=47381"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "湖の指定釣り区域",
    "bestFor": [
      "湖の指定釣り区域"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "鬼怒川漁協が管理する東古屋湖の釣り場。湖岸やボートの利用条件を確認し、専用の遊漁ルールに沿って楽しみます。",
      "トローリング・ハーリングは禁止。営業期間、ボートと岸釣りの条件は漁協案内を優先する。"
    ],
    "caution": [
      "トローリング・ハーリングは禁止。営業期間、ボートと岸釣りの条件は漁協案内を優先する。"
    ]
  },
  {
    "slug": "growth-kaminagano-fishing",
    "name": "フィッシングリゾート上永野",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "栃木県",
    "area": "栃木県",
    "terrain": "pond",
    "lat": 36.509873,
    "lng": 139.572802,
    "fish": [
      "ニジマス",
      "イワナ",
      "ヤマメ"
    ],
    "fishSlugs": [],
    "methods": [
      "エリアトラウト"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "鹿沼市のフィッシングリゾート上永野。里山の池でレインボートラウトやイワナなどを狙う管理釣り場です。",
    "officialUrl": "https://kaminagano-fishing.com/",
    "googleQuery": "フィッシングリゾート上永野 栃木県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://kaminagano-fishing.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E4%B8%8A%E6%B0%B8%E9%87%8E%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88/@36.509873,139.5706133,17z/data=!3m1!4b1!4m5!3m4!1s0x601f111c8dcb0ae7:0xf53869a34febe9a!8m2!3d36.509873!4d139.572802"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=30654"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "鹿沼市のフィッシングリゾート上永野。里山の池でレインボートラウトやイワナなどを狙う管理釣り場です。",
      "発券前の場所取りや持ち帰りの条件をレギュレーションで確認し、釣り座間隔を確保する。"
    ],
    "caution": [
      "発券前の場所取りや持ち帰りの条件をレギュレーションで確認し、釣り座間隔を確保する。"
    ]
  },
  {
    "slug": "growth-brgd-pond",
    "name": "BRGD POND（ブリゲードポンド）",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "群馬県",
    "area": "群馬県",
    "terrain": "pond",
    "lat": 36.4330914,
    "lng": 139.0724951,
    "fish": [
      "ブラックバス"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "前橋市のBRGD POND。地下水を使った池でバス釣りを楽しむ管理釣り場で、初めての利用は受付でルールを確認します。",
    "officialUrl": "https://bassbrigade.jp/pages/brgd-pond",
    "googleQuery": "BRGD POND（ブリゲードポンド） 群馬県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://bassbrigade.jp/pages/brgd-pond"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/BRGD+POND/@36.4330914,139.0724951,15z/data=!4m2!3m1!1s0x0:0x32d533d21e026268?sa=X&ved=1t:2428&hl=ja&ictx=111"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=106435"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "前橋市のBRGD POND。地下水を使った池でバス釣りを楽しむ管理釣り場で、初めての利用は受付でルールを確認します。",
      "野外の自然湖とは利用条件が異なります。持ち込めるルアー・針・ネットを確認する。"
    ],
    "caution": [
      "野外の自然湖とは利用条件が異なります。持ち込めるルアー・針・ネットを確認する。"
    ]
  },
  {
    "slug": "growth-niigata-hyotanike",
    "name": "新潟ひょうたん池フイッシングコミュニティー",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "新潟県",
    "area": "新潟県",
    "terrain": "pond",
    "lat": 37.9933549,
    "lng": 139.2701046,
    "fish": [
      "ヘラブナ"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "新潟ひょうたん池フィッシングコミュニティーはヘラブナ専門の管理池。底釣り・宙釣りの釣り座と当日の利用条件を確認して入場します。",
    "officialUrl": "https://niigatahyotanike.wixsite.com/4047",
    "googleQuery": "新潟ひょうたん池フイッシングコミュニティー 新潟県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://niigatahyotanike.wixsite.com/4047"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%96%B0%E6%BD%9F%E3%81%B2%E3%82%87%E3%81%86%E3%81%9F%E3%82%93%E6%B1%A0%E3%83%95%E3%82%A4%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%83%BC/@37.9933549,139.2701046,17z/data=!3m1!4b1!4m6!3m5!1s0x5f8b365f31d78e03:0x5853d7792d4afcf5!8m2!3d37.9933549!4d139.2701046!16s%2Fg%2F1v1sl15c?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=136615"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "新潟ひょうたん池フィッシングコミュニティーはヘラブナ専門の管理池。底釣り・宙釣りの釣り座と当日の利用条件を確認して入場します。",
      "大会・例会と定休日はカレンダーを確認。長い竿を扱うときは左右と背後を空ける。"
    ],
    "caution": [
      "大会・例会と定休日はカレンダーを確認。長い竿を扱うときは左右と背後を空ける。"
    ]
  },
  {
    "slug": "growth-iyashinosato-pond",
    "name": "いやしの郷",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "新潟県",
    "area": "新潟県",
    "terrain": "pond",
    "lat": 37.5969286,
    "lng": 138.7972915,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "新潟のいやしの郷にある屋内釣り堀。屋外の遊具とは受付が異なるため、まず釣り堀の利用と終了時刻を確認します。",
    "officialUrl": "https://iyashinosato8580.web.fc2.com/index.html",
    "googleQuery": "いやしの郷 新潟県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://iyashinosato8580.web.fc2.com/index.html"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%81%84%E3%82%84%E3%81%97%E3%81%AE%E9%83%B7/@37.5969286,138.7972915,17z/data=!3m1!4b1!4m6!3m5!1s0x5ff4fc1a4b3da279:0x28b15d3a4f763eb2!8m2!3d37.5969286!4d138.7972915!16s%2Fg%2F11c2pld30t?hl=ja&entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=136585"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "新潟のいやしの郷にある屋内釣り堀。屋外の遊具とは受付が異なるため、まず釣り堀の利用と終了時刻を確認します。",
      "魚の薬浴などで臨時休業する場合があります。施設全体の開園だけで釣りもできると判断しない。"
    ],
    "caution": [
      "魚の薬浴などで臨時休業する場合があります。施設全体の開園だけで釣りもできると判断しない。"
    ]
  },
  {
    "slug": "growth-gungun-fishing",
    "name": "Gun Gun Fishing Field",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "新潟県",
    "area": "新潟県",
    "terrain": "pond",
    "lat": 37.6700099,
    "lng": 139.0639222,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "田上町の森にあるGun Gun Fishing Field。釣り堀の利用内容を公式案内で確認して訪れるフィールドです。",
    "officialUrl": "https://gungun-ff.com/",
    "googleQuery": "Gun Gun Fishing Field 新潟県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://gungun-ff.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/GunGun+Fishing+Field+(%E3%82%B0%E3%83%B3%E3%82%B0%E3%83%B3+%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%EF%BC%89/@37.6700099,139.0639222,15z/data=!4m2!3m1!1s0x0:0xfcc14db55b4449f9?sa=X&ved=1t:2428&ictx=111"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=106375"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "田上町の森にあるGun Gun Fishing Field。釣り堀の利用内容を公式案内で確認して訪れるフィールドです。",
      "対象魚や営業日は変わることがあります。持ち込み道具の可否と予約方法を先に確認する。"
    ],
    "caution": [
      "対象魚や営業日は変わることがあります。持ち込み道具の可否と予約方法を先に確認する。"
    ]
  },
  {
    "slug": "growth-tochio-fishing",
    "name": "栃尾フィッシングパーク",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "新潟県",
    "area": "新潟県",
    "terrain": "river",
    "lat": 37.4383711,
    "lng": 139.0402833,
    "fish": [
      "ニジマス",
      "イワナ",
      "ヤマメ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "刈谷田川の流れを利用する栃尾フィッシングパーク。渓流魚の餌釣りと、別に実施するつかみ取りを選べます。",
    "officialUrl": "https://tochiokankou.jp/fishing/",
    "googleQuery": "栃尾フィッシングパーク 新潟県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://tochiokankou.jp/fishing/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%A0%83%E5%B0%BE%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%91%E3%83%BC%E3%82%AF/@37.4383753,139.0377084,17z/data=!3m1!4b1!4m6!3m5!1s0x5ff5093f64772f9b:0x6124061c8615ebb2!8m2!3d37.4383711!4d139.0402833!16s%2Fg%2F11cr_c7szf?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98558"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "刈谷田川の流れを利用する栃尾フィッシングパーク。渓流魚の餌釣りと、別に実施するつかみ取りを選べます。",
      "雨で水量が増える日は営業状況を確認。釣りとつかみ取りの料金・放流条件を分けて確認する。"
    ],
    "caution": [
      "雨で水量が増える日は営業状況を確認。釣りとつかみ取りの料金・放流条件を分けて確認する。"
    ]
  },
  {
    "slug": "growth-iwanosawa-farm",
    "name": "岩ノ沢養魚",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "新潟県",
    "area": "新潟県",
    "terrain": "pond",
    "lat": 36.932859,
    "lng": 138.872458,
    "fish": [
      "イワナ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "湯沢町の岩ノ沢養魚。天然の冷たい湧水を使うイワナ釣り堀で、釣った魚の処理や調理は受付で相談できます。",
    "officialUrl": "https://ss506955.stars.ne.jp/iwanosawa/menu/menu.html",
    "googleQuery": "岩ノ沢養魚 新潟県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://ss506955.stars.ne.jp/iwanosawa/menu/menu.html"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%B2%A9%E3%83%8E%E6%B2%A2%E9%A4%8A%E9%AD%9A/@36.9328633,138.8698831,17z/data=!3m1!4b1!4m6!3m5!1s0x601e0349aac92495:0xc23d49853057c4f6!8m2!3d36.932859!4d138.872458!16s%2Fg%2F1tk1z3m1?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98553"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "湯沢町の岩ノ沢養魚。天然の冷たい湧水を使うイワナ釣り堀で、釣った魚の処理や調理は受付で相談できます。",
      "釣った匹数と持ち帰り方法を確認し、冷たい魚を常温の車内へ置かない。"
    ],
    "caution": [
      "釣った匹数と持ち帰り方法を確認し、冷たい魚を常温の車内へ置かない。"
    ]
  },
  {
    "slug": "growth-pastime-fishing",
    "name": "フィッシングスポットパスタイム",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "新潟県",
    "area": "新潟県",
    "terrain": "pond",
    "lat": 37.2934989,
    "lng": 138.5466156,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "エリアトラウト"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "山あいの池でトラウトを狙うフィッシングスポットパスタイム。釣り座を移しながら水面と中層を探るルアーの釣り場です。",
    "officialUrl": "https://pastime-areatrout.jp/",
    "googleQuery": "フィッシングスポットパスタイム 新潟県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://pastime-areatrout.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%82%B9%E3%83%9D%E3%83%83%E3%83%88%E3%83%91%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%A0/@37.2935031,138.5440407,17z/data=!3m1!4b1!4m6!3m5!1s0x5ff5c862b322a49f:0x9e53b40bcb590438!8m2!3d37.2934989!4d138.5466156!16s%2Fg%2F1tmpvtx_?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98552"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "山あいの池でトラウトを狙うフィッシングスポットパスタイム。釣り座を移しながら水面と中層を探るルアーの釣り場です。",
      "フェザージグ・エッグボールタイプは禁止の案内。大型魚の持ち帰り制限と季節の虫対策も確認する。"
    ],
    "caution": [
      "フェザージグ・エッグボールタイプは禁止の案内。大型魚の持ち帰り制限と季節の虫対策も確認する。"
    ]
  },
  {
    "slug": "growth-hisuikyo-fishing",
    "name": "ヒスイ峡フィッシングパーク",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "新潟県",
    "area": "新潟県",
    "terrain": "river",
    "lat": 36.9226679,
    "lng": 137.8250559,
    "fish": [
      "イワナ",
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "糸魚川のヒスイ峡フィッシングパーク。川の水を引いた人工渓流でイワナ・ニジマスを釣り、場内調理も楽しめる施設です。",
    "officialUrl": "https://www.itoigawa-kanko.net/spot/hisuikyo_fishingpark_campsite/",
    "googleQuery": "ヒスイ峡フィッシングパーク 新潟県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.itoigawa-kanko.net/spot/hisuikyo_fishingpark_campsite/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%83%92%E3%82%B9%E3%82%A4%E5%B3%A1%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%91%E3%83%BC%E3%82%AF/@36.9226722,137.822481,17z/data=!3m1!4b1!4m6!3m5!1s0x5ff64f6ca7bb613f:0x6f33e09113818d98!8m2!3d36.9226679!4d137.8250559!16s%2Fg%2F11bwh5szyn?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98551"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "糸魚川のヒスイ峡フィッシングパーク。川の水を引いた人工渓流でイワナ・ニジマスを釣り、場内調理も楽しめる施設です。",
      "営業時期と釣りの受付を確認。濡れた石や川沿いの段差を避けて移動する。"
    ],
    "caution": [
      "営業時期と釣りの受付を確認。濡れた石や川沿いの段差を避けて移動する。"
    ]
  },
  {
    "slug": "growth-yuzawa-fishing",
    "name": "湯沢フィッシングパーク",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "新潟県",
    "area": "新潟県",
    "terrain": "river",
    "lat": 36.9147855,
    "lng": 138.8379496,
    "fish": [
      "イワナ",
      "ヤマメ",
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り",
      "エリアトラウト"
    ],
    "methodSlugs": [
      "freshwater-bait",
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "湯沢の渓流型フィッシングパーク。餌釣りとルアーは専用コーナーが分かれ、釣った魚の持ち帰り上限が券ごとに決まります。",
    "officialUrl": "https://yuzawa-fishingpark.com/",
    "googleQuery": "湯沢フィッシングパーク 新潟県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://yuzawa-fishingpark.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%B9%AF%E6%B2%A2%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%91%E3%83%BC%E3%82%AF/@36.9147387,138.835761,17z/data=!3m1!4b1!4m5!3m4!1s0x601e039d768f2299:0x16fcd015020aac7e!8m2!3d36.9147855!4d138.8379496"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=46014"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "湯沢の渓流型フィッシングパーク。餌釣りとルアーは専用コーナーが分かれ、釣った魚の持ち帰り上限が券ごとに決まります。",
      "ルアー区画で餌釣りはできません。ワーム・フライ等の禁止釣法と超過匹数の扱いを確認する。"
    ],
    "caution": [
      "ルアー区画で餌釣りはできません。ワーム・フライ等の禁止釣法と超過匹数の扱いを確認する。"
    ]
  },
  {
    "slug": "growth-takasome-fishing-pond",
    "name": "高ソメキャンプ場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "pond",
    "lat": 36.0783545,
    "lng": 137.6948609,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "高ソメキャンプ場の中央にある釣り池。キャンプサイトや散策路と分けられた水面で釣りを楽しみます。",
    "officialUrl": "https://takasome.furusatonagawa.com/",
    "googleQuery": "高ソメキャンプ場 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://takasome.furusatonagawa.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E9%AB%98%E3%82%BD%E3%83%A1+%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E5%A0%B4/@36.0783588,137.692286,17z/data=!3m1!4b1!4m10!3m9!1s0x601d3c9759d450c3:0x304878610a2b9444!5m3!1s2024-03-04!4m1!1i2!8m2!3d36.0783545!4d137.6948609!16s%2Fg%2F1tdwvs6h?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98491"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "高ソメキャンプ場の中央にある釣り池。キャンプサイトや散策路と分けられた水面で釣りを楽しみます。",
      "キャンプの予約と釣り利用の条件を確認。池の周囲を歩く人へ針を向けない。"
    ],
    "caution": [
      "キャンプの予約と釣り利用の条件を確認。池の周囲を歩く人へ針を向けない。"
    ]
  },
  {
    "slug": "growth-sawasho-pond",
    "name": "つり堀澤庄",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "pond",
    "lat": 35.4025958,
    "lng": 137.9732771,
    "fish": [
      "ヤマメ",
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "南信州のつり堀澤庄。ヤマメ・ニジマスが泳ぐ池で貸し竿を使い、魚影を見ながら餌を届ける釣りを体験できます。",
    "officialUrl": "https://sawasho.web.fc2.com/",
    "googleQuery": "つり堀澤庄 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://sawasho.web.fc2.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%81%A4%E3%82%8A%E5%A0%80%E6%BE%A4%E5%BA%84/@35.4026001,137.9707022,17z/data=!3m1!4b1!4m6!3m5!1s0x601b7d7154f79b99:0x645d3b670a9795a7!8m2!3d35.4025958!4d137.9732771!16s%2Fg%2F11qp3lt3zl?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98487"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "南信州のつり堀澤庄。ヤマメ・ニジマスが泳ぐ池で貸し竿を使い、魚影を見ながら餌を届ける釣りを体験できます。",
      "上村川本流の遊漁とは別の釣り堀です。川の遊漁券と施設利用料を混同しない。"
    ],
    "caution": [
      "上村川本流の遊漁とは別の釣り堀です。川の遊漁券と施設利用料を混同しない。"
    ]
  },
  {
    "slug": "growth-himekidaira-seiryu",
    "name": "つりぼり清流",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "pond",
    "lat": 36.1241094,
    "lng": 138.2299442,
    "fish": [
      "ヤマメ",
      "ニジマス",
      "イワナ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "姫木平のつりぼり清流。釣った魚を塩焼きにする、キャッチ＆イート方式の釣り堀です。",
    "officialUrl": "https://seiryu.biz/",
    "googleQuery": "つりぼり清流 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://seiryu.biz/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%81%A4%E3%82%8A%E3%81%BC%E3%82%8A%26BBQ%E3%82%AC%E3%83%BC%E3%83%86%E3%83%B3+%E6%B8%85%E6%B5%81/@36.1241137,138.2273693,17z/data=!3m1!4b1!4m6!3m5!1s0x601c52bf0c5ad09b:0x30b18fe69b77cc65!8m2!3d36.1241094!4d138.2299442!16s%2Fg%2F1tdb4bvd?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98485"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "姫木平のつりぼり清流。釣った魚を塩焼きにする、キャッチ＆イート方式の釣り堀です。",
      "リリースと飲食物の持ち込みは禁止。食べる・持ち帰る量を決めて釣る。"
    ],
    "caution": [
      "リリースと飲食物の持ち込みは禁止。食べる・持ち帰る量を決めて釣る。"
    ]
  },
  {
    "slug": "growth-kitashiga-seiryunosato",
    "name": "北志賀フィッシングパーク清流の里",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "pond",
    "lat": 36.7862091,
    "lng": 138.4411926,
    "fish": [
      "イワナ",
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "北志賀高原の清流の里。倉下川の水を引いた池でイワナやニジマスを釣り、塩焼き・唐揚げなどの調理につなげます。",
    "officialUrl": "https://seiryu-no-sato.com/",
    "googleQuery": "北志賀フィッシングパーク清流の里 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://seiryu-no-sato.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%8C%97%E5%BF%97%E8%B3%80%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%91%E3%83%BC%E3%82%AF%E6%B8%85%E6%B5%81%E3%81%AE%E9%87%8C/@36.7862134,138.4386177,17z/data=!3m1!4b1!4m6!3m5!1s0x601df5a0ffec26d1:0x7abd55bfbcae5cc1!8m2!3d36.7862091!4d138.4411926!16s%2Fg%2F1tdkxrwh?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98484"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "北志賀高原の清流の里。倉下川の水を引いた池でイワナやニジマスを釣り、塩焼き・唐揚げなどの調理につなげます。",
      "釣り体験は季節営業。鮮魚の販売・通信販売とフィッシングパークの営業を分けて確認する。"
    ],
    "caution": [
      "釣り体験は季節営業。鮮魚の販売・通信販売とフィッシングパークの営業を分けて確認する。"
    ]
  },
  {
    "slug": "growth-tateshina-takabayashi",
    "name": "信州蓼科高原渓流釣り場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "river",
    "lat": 36.054819,
    "lng": 138.262386,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "蓼科高原の高林養魚場が運営する渓流釣り場。時間制で貸し道具と指定の餌を使って釣ります。",
    "officialUrl": "https://www.iweb.ne.jp/takabayashi/",
    "googleQuery": "信州蓼科高原渓流釣り場 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.iweb.ne.jp/takabayashi/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E8%93%BC%E7%A7%91%E9%AB%98%E5%8E%9F+%E6%B8%93%E6%B5%81%E9%87%A3%E3%82%8A%E5%A0%B4+%E9%AB%98%E6%9E%97%E9%A4%8A%E9%AD%9A%E5%A0%B4/@36.054819,138.2598111,17z/data=!3m1!4b1!4m6!3m5!1s0x601c4e491d4c72e5:0x933d69c6c86f5942!8m2!3d36.054819!4d138.262386!16s%2Fg%2F1tfkwcrw?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=86170"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "蓼科高原の高林養魚場が運営する渓流釣り場。時間制で貸し道具と指定の餌を使って釣ります。",
      "施設以外の釣具・餌は使用できません。釣った魚を水へ戻さず、終了時間を確認する。"
    ],
    "caution": [
      "施設以外の釣具・餌は使用できません。釣った魚を水へ戻さず、終了時間を確認する。"
    ]
  },
  {
    "slug": "growth-ogurogawa-pond",
    "name": "小黒川渓谷キャンプ場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "pond",
    "lat": 35.831377,
    "lng": 137.87532,
    "fish": [
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "小黒川渓谷キャンプ場のニジマス釣り堀。管理棟で申し込み、釣果は焼いて食べるか持ち帰ります。",
    "officialUrl": "https://ogurogawakeikokucamp.com/",
    "googleQuery": "小黒川渓谷キャンプ場 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://ogurogawakeikokucamp.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%B0%8F%E9%BB%92%E5%B7%9D%E6%B8%93%E8%B0%B7%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E5%A0%B4/@35.831377,137.8727451,17z/data=!3m1!4b1!4m9!3m8!1s0x601cef73a8d52947:0x42f4b5c4693be1db!5m2!4m1!1i2!8m2!3d35.831377!4d137.87532!16s%2Fg%2F119t7fz50?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=86169"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "小黒川渓谷キャンプ場のニジマス釣り堀。管理棟で申し込み、釣果は焼いて食べるか持ち帰ります。",
      "キャッチ＆リリースは禁止。平日と休日で申込方法が異なる場合があり、魚の状態による中止も確認する。"
    ],
    "caution": [
      "キャッチ＆リリースは禁止。平日と休日で申込方法が異なる場合があり、魚の状態による中止も確認する。"
    ]
  },
  {
    "slug": "growth-kurokawa-suisan",
    "name": "黒川水産",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "pond",
    "lat": 35.7481033,
    "lng": 137.897312,
    "fish": [
      "ニジマス",
      "イワナ",
      "ヤマメ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り",
      "エリアトラウト"
    ],
    "methodSlugs": [
      "freshwater-bait",
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "駒ヶ根の黒川水産。貸し竿の餌釣りと、道具を持ち込むルアー・フライの利用を選べます。",
    "officialUrl": "http://www.kurokawa-suisan.com/",
    "googleQuery": "黒川水産 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://www.kurokawa-suisan.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E9%BB%92%E5%B7%9D%E6%B0%B4%E7%94%A3/@35.7481033,137.8951233,17z/data=!3m1!4b1!4m5!3m4!1s0x601ced0a00eecd69:0x19f6dd0edf46f6bd!8m2!3d35.7481033!4d137.897312"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=41342"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "駒ヶ根の黒川水産。貸し竿の餌釣りと、道具を持ち込むルアー・フライの利用を選べます。",
      "フリーエリアはバーブレスフックでリリースするルール。餌釣りの買い取り方式と混同しない。"
    ],
    "caution": [
      "フリーエリアはバーブレスフックでリリースするルール。餌釣りの買い取り方式と混同しない。"
    ]
  },
  {
    "slug": "growth-hakuba-nireike",
    "name": "白馬八方ニレ池フィッシングセンター",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "pond",
    "lat": 36.7067947,
    "lng": 137.8430938,
    "fish": [
      "ニジマス",
      "ヤマメ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り",
      "エリアトラウト"
    ],
    "methodSlugs": [
      "freshwater-bait",
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "白馬八方のニレ池フィッシングセンター。餌釣りとルアー・フライの区画があり、雪解け水の流れ込む池で釣ります。",
    "officialUrl": "https://www.nireike.com/",
    "googleQuery": "白馬八方ニレ池フィッシングセンター 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.nireike.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E7%99%BD%E9%A6%AC%E5%85%AB%E6%96%B9%E3%83%8B%E3%83%AC%E6%B1%A0%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC/@36.7067947,137.8409051,17z/data=!3m1!4b1!4m5!3m4!1s0x5ff7cde6b1ece9cf:0xd9c50fca054a7cf0!8m2!3d36.7067947!4d137.8430938"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=41333"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "白馬八方のニレ池フィッシングセンター。餌釣りとルアー・フライの区画があり、雪解け水の流れ込む池で釣ります。",
      "ルアー・フライ区画は入場券購入者本人のみ入場できる案内。同伴者の扱いを確認する。"
    ],
    "caution": [
      "ルアー・フライ区画は入場券購入者本人のみ入場できる案内。同伴者の扱いを確認する。"
    ]
  },
  {
    "slug": "growth-akakuranomori-pond",
    "name": "赤倉の森 オートキャンプ場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "pond",
    "lat": 36.193544,
    "lng": 138.208784,
    "fish": [
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "赤倉の森オートキャンプ場内のニジマス釣り堀。場内の池で釣った魚をキャンプの食事につなげる利用です。",
    "officialUrl": "https://akakuranomori.jp/",
    "googleQuery": "赤倉の森 オートキャンプ場 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://akakuranomori.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E8%B5%A4%E5%80%89%E3%81%AE%E6%A3%AE+%E3%82%AA%E3%83%BC%E3%83%88%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E5%A0%B4/@36.193544,138.2065953,17z/data=!3m1!4b1!4m8!3m7!1s0x601dadcf6fdd4793:0xb2c44a210e551886!5m2!4m1!1i2!8m2!3d36.193544!4d138.208784"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=34062"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "赤倉の森オートキャンプ場内のニジマス釣り堀。場内の池で釣った魚をキャンプの食事につなげる利用です。",
      "リリースは禁止。子どもだけの利用はできず、必ず保護者が付き添う。"
    ],
    "caution": [
      "リリースは禁止。子どもだけの利用はできず、必ず保護者が付き添う。"
    ]
  },
  {
    "slug": "growth-sabirodani-fishing",
    "name": "青空見聞塾",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "岐阜県",
    "area": "岐阜県",
    "terrain": "river",
    "lat": 35.6190326,
    "lng": 137.2783948,
    "fish": [
      "マス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "東白川村のサビロ谷渓流フィールドで行う、青空見聞塾のマス釣り体験。予約して参加する体験型の釣り場です。",
    "officialUrl": "https://aozora-kenbun.com/sabilovalleyfishing/",
    "googleQuery": "青空見聞塾 岐阜県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://aozora-kenbun.com/sabilovalleyfishing/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E7%89%B9%E5%AE%9A%E9%9D%9E%E5%96%B6%E5%88%A9%E6%B4%BB%E5%8B%95%E6%B3%95%E4%BA%BA%E9%9D%92%E7%A9%BA%E8%A6%8B%E8%81%9E%E5%A1%BE/@35.6190369,137.2758199,17z/data=!3m1!4b1!4m6!3m5!1s0x6003257099738e99:0x4b317178085e3996!8m2!3d35.6190326!4d137.2783948!16s%2Fg%2F11f7m3f3db?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98591"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "東白川村のサビロ谷渓流フィールドで行う、青空見聞塾のマス釣り体験。予約して参加する体験型の釣り場です。",
      "開催日と集合場所を予約時に確認。案内されていない川の区画へ入らない。"
    ],
    "caution": [
      "開催日と集合場所を予約時に確認。案内されていない川の区画へ入らない。"
    ]
  },
  {
    "slug": "growth-motai-fishing",
    "name": "フィッシング母袋",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "岐阜県",
    "area": "岐阜県",
    "terrain": "pond",
    "lat": 35.8653475,
    "lng": 136.9468757,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "エリアトラウト"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "郡上市のフィッシング母袋。ルアー・フライ専用の池で、自然に近い餌環境で育つトラウトを狙います。",
    "officialUrl": "https://www.motai.info/",
    "googleQuery": "フィッシング母袋 岐阜県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.motai.info/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E6%AF%8D%E8%A2%8B/@35.8653475,136.944687,17z/data=!3m1!4b1!4m5!3m4!1s0x6002f2d13afe8abf:0x47380bea96a9c272!8m2!3d35.8653475!4d136.9468757"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=65345"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "郡上市のフィッシング母袋。ルアー・フライ専用の池で、自然に近い餌環境で育つトラウトを狙います。",
      "餌釣りの池ではありません。持ち込み可能なルアー・針と持ち帰り条件を公式ルールで確認する。"
    ],
    "caution": [
      "餌釣りの池ではありません。持ち込み可能なルアー・針と持ち帰り条件を公式ルールで確認する。"
    ]
  },
  {
    "slug": "growth-ueno-fish-farm",
    "name": "上野養魚場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "広島県",
    "area": "広島県",
    "terrain": "pond",
    "lat": 34.7904162,
    "lng": 132.5605417,
    "fish": [
      "ヤマメ",
      "イワナ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "安芸高田の上野養魚場。生田川の清流で育てたヤマメやイワナを釣り、その場で炭火焼きにする利用ができます。",
    "officialUrl": "https://akitakata-kankou.jp/touristspot/424/",
    "googleQuery": "上野養魚場 広島県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://akitakata-kankou.jp/touristspot/424/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E4%B8%8A%E9%87%8E%E9%A4%8A%E9%AD%9A%E5%A0%B4/@34.7904162,132.5605417,17z/data=!3m1!4b1!4m6!3m5!1s0x355082ad7c09ad13:0x3cbcc70d93c4487d!8m2!3d34.7904162!4d132.5605417!16s%2Fg%2F1ty7228w?hl=ja&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=132953"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "安芸高田の上野養魚場。生田川の清流で育てたヤマメやイワナを釣り、その場で炭火焼きにする利用ができます。",
      "釣れた魚の数・時間の条件を受付で確認。調理と持ち帰りを決めてから釣る。"
    ],
    "caution": [
      "釣れた魚の数・時間の条件を受付で確認。調理と持ち帰りを決めてから釣る。"
    ]
  },
  {
    "slug": "growth-ogure-farm",
    "name": "大暮養魚場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "広島県",
    "area": "広島県",
    "terrain": "pond",
    "lat": 34.763676,
    "lng": 132.3412054,
    "fish": [
      "アマゴ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "芸北の大暮養魚場。山あいの水を使うアマゴの釣り堀で、場内マップに沿って指定の池を利用します。",
    "officialUrl": "https://www.ogure-amago.com/",
    "googleQuery": "大暮養魚場 広島県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.ogure-amago.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%A4%A7%E6%9A%AE%E9%A4%8A%E9%AD%9A%E5%A0%B4/@34.763676,132.3412054,17z/data=!3m1!4b1!4m6!3m5!1s0x355a62438a0c207f:0x27a90c3bfc0333f0!8m2!3d34.763676!4d132.3412054!16s%2Fg%2F11btrrr6d2?hl=ja&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=132951"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "芸北の大暮養魚場。山あいの水を使うアマゴの釣り堀で、場内マップに沿って指定の池を利用します。",
      "貸し道具・調理と営業日を公式案内で確認。養殖池へ無断で仕掛けを入れない。"
    ],
    "caution": [
      "貸し道具・調理と営業日を公式案内で確認。養殖池へ無断で仕掛けを入れない。"
    ]
  },
  {
    "slug": "growth-takigatani-farm",
    "name": "滝ケ谷養魚場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "広島県",
    "area": "広島県",
    "terrain": "pond",
    "lat": 34.7501117,
    "lng": 132.5801539,
    "fish": [
      "ヤマメ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "安芸高田の滝ヶ谷養魚場。ヤマメを育てる養魚場が設けた釣り堀で、釣りと鮮魚・加工品の購入を楽しめます。",
    "officialUrl": "https://shop.takigatani-yamame.com/",
    "googleQuery": "滝ケ谷養魚場 広島県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://shop.takigatani-yamame.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%BB%9D%E3%82%B1%E8%B0%B7%E9%A4%8A%E9%AD%9A%E5%A0%B4/@34.7501117,132.5801539,17z/data=!3m1!4b1!4m6!3m5!1s0x355083204a45e165:0xde2d475bc3bec034!8m2!3d34.7501117!4d132.5801539!16s%2Fg%2F1vl5dlk7?hl=ja&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=132950"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "安芸高田の滝ヶ谷養魚場。ヤマメを育てる養魚場が設けた釣り堀で、釣りと鮮魚・加工品の購入を楽しめます。",
      "商品の販売時間だけで釣り堀も利用可能と判断せず、釣りの実施日を確認する。"
    ],
    "caution": [
      "商品の販売時間だけで釣り堀も利用可能と判断せず、釣りの実施日を確認する。"
    ]
  },
  {
    "slug": "growth-mukaihara-farm",
    "name": "（有）向原養魚場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "広島県",
    "area": "広島県",
    "terrain": "pond",
    "lat": 34.6141736,
    "lng": 132.77247,
    "fish": [
      "ヤマメ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "向原養魚場のヤマメ釣り堀。山あいで餌釣りを体験し、塩焼きや食事につなげる利用ができます。",
    "officialUrl": "https://dive-hiroshima.com/explore/956/",
    "googleQuery": "（有）向原養魚場 広島県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://dive-hiroshima.com/explore/956/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%EF%BC%88%E6%9C%89%EF%BC%89%E5%90%91%E5%8E%9F%E9%A4%8A%E9%AD%9A%E5%A0%B4/@34.6141736,132.77247,17z/data=!3m1!4b1!4m6!3m5!1s0x3550891176eb6cf3:0xb3b2e0df39ed3de6!8m2!3d34.6141736!4d132.77247!16s%2Fg%2F1vl9p9hg?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=132949"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "向原養魚場のヤマメ釣り堀。山あいで餌釣りを体験し、塩焼きや食事につなげる利用ができます。",
      "料理・山菜料理は予約が必要な場合があります。釣りと食事の希望を先に伝える。"
    ],
    "caution": [
      "料理・山菜料理は予約が必要な場合があります。釣りと食事の希望を先に伝える。"
    ]
  },
  {
    "slug": "growth-taishakukyo-mizube",
    "name": "水辺公園（国定公園帝釈峡）",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "広島県",
    "area": "広島県",
    "terrain": "pond",
    "lat": 34.8455893,
    "lng": 133.2067228,
    "fish": [
      "マス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "帝釈峡の水辺公園にあるマス釣り体験。自然観察や季節の体験と合わせ、指定の釣り場で利用します。",
    "officialUrl": "http://taishakukyo.com/spot/%E5%B8%9D%E9%87%88%E5%B3%A1%E6%B0%B4%E8%BE%BA%E5%85%AC%E5%9C%92/",
    "googleQuery": "水辺公園（国定公園帝釈峡） 広島県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://taishakukyo.com/spot/%E5%B8%9D%E9%87%88%E5%B3%A1%E6%B0%B4%E8%BE%BA%E5%85%AC%E5%9C%92/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%B8%9D%E9%87%88%E5%B3%A1%E6%B0%B4%E8%BE%BA%E5%85%AC%E5%9C%92/@34.8455937,133.2041479,17z/data=!3m1!4b1!4m6!3m5!1s0x355129af6623ba3f:0x290fe787b1033389!8m2!3d34.8455893!4d133.2067228!16s%2Fg%2F11d_ts5fv1?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98473"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "帝釈峡の水辺公園にあるマス釣り体験。自然観察や季節の体験と合わせ、指定の釣り場で利用します。",
      "釣り体験の開催日と受付を確認。峡谷の川全体を自由に釣れる施設ではありません。"
    ],
    "caution": [
      "釣り体験の開催日と受付を確認。峡谷の川全体を自由に釣れる施設ではありません。"
    ]
  },
  {
    "slug": "growth-hiroshima-kaiyu",
    "name": "海上釣り堀 海遊",
    "type": "spot",
    "primaryType": "sea-pond",
    "prefecture": "広島県",
    "area": "広島県",
    "terrain": "sea-pond",
    "lat": 34.1955384,
    "lng": 132.3032876,
    "fish": [
      "マダイ",
      "ブリ",
      "カンパチ",
      "シマアジ",
      "ヒラマサ"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "広島の海上釣り堀海遊。生簀に放流されたマダイや青物を狙う有料施設で、天然魚の堤防釣りとは利用条件が異なります。",
    "officialUrl": "http://kaiyuu-turibori.com/",
    "googleQuery": "海上釣り堀 海遊 広島県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://kaiyuu-turibori.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%B5%B7%E4%B8%8A%E9%87%A3%E3%82%8A%E5%A0%80+%E6%B5%B7%E9%81%8A/@34.1955384,132.3007127,17z/data=!3m1!4b1!4m6!3m5!1s0x355ab4832df50c87:0xaf8cb377593f4a03!8m2!3d34.1955384!4d132.3032876!16s%2Fg%2F11cjp5sclz"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=84638"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "海水の管理釣り堀",
    "bestFor": [
      "海水の管理釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "広島の海上釣り堀海遊。生簀に放流されたマダイや青物を狙う有料施設で、天然魚の堤防釣りとは利用条件が異なります。",
      "予約・集合時刻・餌や仕掛けの指定を確認。大型魚が掛かったときは隣の釣り人と声を掛け合う。"
    ],
    "caution": [
      "予約・集合時刻・餌や仕掛けの指定を確認。大型魚が掛かったときは隣の釣り人と声を掛け合う。"
    ]
  },
  {
    "slug": "growth-furuyashiki-pond",
    "name": "つりぼり古屋敷",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "山口県",
    "area": "山口県",
    "terrain": "pond",
    "lat": 34.3402602,
    "lng": 131.627156,
    "fish": [
      "ヤマメ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "山口市阿東のつりぼり古屋敷。ヤマメを釣って食べる釣り堀で、塩焼きや持ち帰りを選べます。",
    "officialUrl": "https://x.com/yamametsuri",
    "googleQuery": "つりぼり古屋敷 山口県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://x.com/yamametsuri"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%81%A4%E3%82%8A%E3%81%BC%E3%82%8A%E5%8F%A4%E5%B1%8B%E6%95%B7/@34.3402602,131.627156,17z/data=!3m1!4b1!4m6!3m5!1s0x3544c84ed02ce2e9:0xfb488b3cb33c5be9!8m2!3d34.3402602!4d131.627156!16s%2Fg%2F1tn03ln3?hl=ja&entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=135437"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "山口市阿東のつりぼり古屋敷。ヤマメを釣って食べる釣り堀で、塩焼きや持ち帰りを選べます。",
      "土日祝を中心とした営業で雨天休業の案内があります。公式の営業日投稿を確認する。"
    ],
    "caution": [
      "土日祝を中心とした営業で雨天休業の案内があります。公式の営業日投稿を確認する。"
    ]
  },
  {
    "slug": "growth-heikedani-trout",
    "name": "平家谷自然公園",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "愛媛県",
    "area": "愛媛県",
    "terrain": "pond",
    "lat": 33.5186344,
    "lng": 132.3958474,
    "fish": [
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "八幡浜市の平家谷自然公園で行うニジマス釣り。そうめん流しと合わせて、釣果を塩焼きなどにして楽しめます。",
    "officialUrl": "https://www.city.yawatahama.ehime.jp/doc/2022060100030/",
    "googleQuery": "平家谷自然公園 愛媛県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.city.yawatahama.ehime.jp/doc/2022060100030/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/search/%E5%B9%B3%E5%AE%B6%E8%B0%B7%E8%87%AA%E7%84%B6%E5%85%AC%E5%9C%92/@33.5186344,132.3958474,17z/data=!3m1!4b1?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98467"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "八幡浜市の平家谷自然公園で行うニジマス釣り。そうめん流しと合わせて、釣果を塩焼きなどにして楽しめます。",
      "夏を中心とした季節営業。食事と釣りの受付終了は異なるため、市の最新案内を確認する。"
    ],
    "caution": [
      "夏を中心とした季節営業。食事と釣りの受付終了は異なるため、市の最新案内を確認する。"
    ]
  },
  {
    "slug": "growth-tsurikichi-mura",
    "name": "レジャーセンターつりきち村",
    "type": "spot",
    "primaryType": "sea-pond",
    "prefecture": "熊本県",
    "area": "熊本県",
    "terrain": "sea-pond",
    "lat": 32.6809559,
    "lng": 130.5501514,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "宇土市のつりきち村。陸上の池で海の魚を釣る管理施設で、通常の海岸や漁港の釣りとは分けて利用します。",
    "officialUrl": "https://frogangel.web.fc2.com/turikiti/html/turikitihomu.html",
    "googleQuery": "レジャーセンターつりきち村 熊本県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://frogangel.web.fc2.com/turikiti/html/turikitihomu.html"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%81%A4%E3%82%8A%E3%81%8D%E3%81%A1%E6%9D%91/@32.680936,130.5479453,17z/data=!3m1!4b1!4m5!3m4!1s0x3540649cf0891b63:0x5e8adef0c0d9623e!8m2!3d32.6809559!4d130.5501514"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=38282"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "海水の管理釣り堀",
    "bestFor": [
      "海水の管理釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "宇土市のつりきち村。陸上の池で海の魚を釣る管理施設で、通常の海岸や漁港の釣りとは分けて利用します。",
      "営業日・対象魚・持ち帰り条件は利用前に確認。海上へ渡る施設と間違えない。"
    ],
    "caution": [
      "営業日・対象魚・持ち帰り条件は利用前に確認。海上へ渡る施設と間違えない。"
    ]
  },
  {
    "slug": "growth-tani-tsuribori",
    "name": "谷釣り堀",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "宮崎県",
    "area": "宮崎県",
    "terrain": "pond",
    "lat": 31.5875508,
    "lng": 131.3924117,
    "fish": [
      "コイ"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "日南市の谷釣り堀。施設の竿と餌を使ってコイを釣り、計量して楽しむ釣り堀です。",
    "officialUrl": "http://www.btvm.ne.jp/~tani-tsuribori/",
    "googleQuery": "谷釣り堀 宮崎県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://www.btvm.ne.jp/~tani-tsuribori/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E8%B0%B7%E3%81%A4%E3%82%8A%E5%A0%80/@31.5875508,131.3898368,17z/data=!3m1!4b1!4m6!3m5!1s0x3538d63795725b03:0xdafd1383dbfa3e61!8m2!3d31.5875508!4d131.3924117!16s%2Fg%2F1hc3hrb41"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=84648"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "日南市の谷釣り堀。施設の竿と餌を使ってコイを釣り、計量して楽しむ釣り堀です。",
      "コイの持ち帰りはできません。ウキ以外の道具は施設指定を利用し、土日祝の営業を確認する。"
    ],
    "caution": [
      "コイの持ち帰りはできません。ウキ以外の道具は施設指定を利用し、土日祝の営業を確認する。"
    ]
  },
  {
    "slug": "growth-kanemi-fishing-land",
    "name": "カネミつりぼりランド",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "宮崎県",
    "area": "宮崎県",
    "terrain": "pond",
    "lat": 31.7826102,
    "lng": 131.0040746,
    "fish": [
      "コイ",
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "都城市のカネミつりぼりランド。山の水を取り込む池でコイやニジマスなどを釣り、家族で利用できる施設です。",
    "googleQuery": "カネミつりぼりランド 宮崎県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://town-miyakonojo.com/kanemi.php"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%82%AB%E3%83%8D%E3%83%9F%E3%81%A4%E3%82%8A%E3%81%BC%E3%82%8A%E3%83%A9%E3%83%B3%E3%83%89/@31.7826102,131.0018859,17z/data=!3m1!4b1!4m5!3m4!1s0x353f2174082e5555:0x8edc48fada64e24a!8m2!3d31.7826102!4d131.0040746"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=38271"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "都城市のカネミつりぼりランド。山の水を取り込む池でコイやニジマスなどを釣り、家族で利用できる施設です。",
      "団体利用は対応できない場合があるため事前相談。対象魚ごとの釣り方・持ち帰り条件を確認する。"
    ],
    "caution": [
      "団体利用は対応できない場合があるため事前相談。対象魚ごとの釣り方・持ち帰り条件を確認する。"
    ]
  },
  {
    "slug": "growth-hatchobori-yamanashi",
    "name": "八丁堀",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "山梨県",
    "area": "山梨県",
    "terrain": "pond",
    "lat": 35.7739862,
    "lng": 138.7002658,
    "fish": [
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "エリアトラウト"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "牧丘町の少人数制ルアー釣り堀。予約枠を確保し、甲斐サーモンなどのトラウトを狙います。",
    "officialUrl": "https://hatchobori.net/",
    "googleQuery": "八丁堀 山梨県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://hatchobori.net/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%85%AB%E4%B8%81%E5%A0%80/@35.7739905,138.6976909,17z/data=!3m1!4b1!4m6!3m5!1s0x601c00133e0965ef:0xaaba86c0086633ea!8m2!3d35.7739862!4d138.7002658!16s%2Fg%2F1tjtjbqn?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98560"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "牧丘町の少人数制ルアー釣り堀。予約枠を確保し、甲斐サーモンなどのトラウトを狙います。",
      "持ち帰りの匹数制限と使用できるルアーは最新規則を確認。夏季の休業期間にも注意。"
    ],
    "caution": [
      "持ち帰りの匹数制限と使用できるルアーは最新規則を確認。夏季の休業期間にも注意。"
    ]
  },
  {
    "slug": "growth-doshigawa-center",
    "name": "道志川渓流フィッシングセンター",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "山梨県",
    "area": "山梨県",
    "terrain": "river",
    "lat": 35.510155,
    "lng": 139.00005,
    "fish": [
      "ニジマス",
      "ヤマメ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "道志川のフィッシングセンターが管理する渓流釣り区画。自然河川の遊漁とは別に、受付で放流釣りの利用を申し込みます。",
    "officialUrl": "https://doshi-kanko.com/doushi-fish/",
    "googleQuery": "道志川渓流フィッシングセンター 山梨県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://doshi-kanko.com/doushi-fish/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E9%81%93%E5%BF%97%E5%B7%9D%E6%B8%93%E6%B5%81%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC/@35.5101593,138.9974751,17z/data=!3m1!4b1!4m6!3m5!1s0x60196c6289fc8473:0xf90cf25b51f29ad8!8m2!3d35.510155!4d139.00005!16s%2Fg%2F1xb2dml_?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98557"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "道志川のフィッシングセンターが管理する渓流釣り区画。自然河川の遊漁とは別に、受付で放流釣りの利用を申し込みます。",
      "本流の遊漁券とセンターの料金を混同しない。増水時は営業・入川可否を確認する。"
    ],
    "caution": [
      "本流の遊漁券とセンターの料金を混同しない。増水時は営業・入川可否を確認する。"
    ]
  },
  {
    "slug": "growth-ubaguchi-sato",
    "name": "右左口の里",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "山梨県",
    "area": "山梨県",
    "terrain": "pond",
    "lat": 35.5682006,
    "lng": 138.5995181,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "甲府の右左口の里。池で魚を釣り、隣接するBBQスペースで食事につなげられる施設です。",
    "officialUrl": "https://kofu-sato.jp/",
    "googleQuery": "右左口の里 山梨県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://kofu-sato.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%8F%B3%E5%B7%A6%E5%8F%A3%E3%81%AE%E9%87%8C%E5%B8%82%E5%96%B6%E3%81%A4%E3%82%8A%E5%A0%80/@35.5682006,138.5969432,17z/data=!3m1!4b1!4m6!3m5!1s0x601be4d63ae96a69:0x2936e8a972e17f95!8m2!3d35.5682006!4d138.5995181!16s%2Fg%2F1tf31gg6?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=86402"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "甲府の右左口の里。池で魚を釣り、隣接するBBQスペースで食事につなげられる施設です。",
      "池ごとの対象魚と料金を受付で確認。BBQ利用の予約とは別に釣りの条件を確認する。"
    ],
    "caution": [
      "池ごとの対象魚と料金を受付で確認。BBQ利用の予約とは別に釣りの条件を確認する。"
    ]
  },
  {
    "slug": "growth-monkey-toba-pond",
    "name": "海上釣堀モンキー（受付・乗船場）",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "三重県",
    "area": "三重県",
    "terrain": "boat",
    "lat": 34.4434551,
    "lng": 136.891408,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "鳥羽・浦村の海上釣堀モンキー。麻生浦大橋が見える入り江の生簀で、放流魚を狙います。",
    "officialUrl": "http://www.amigo.ne.jp/~monkey/",
    "googleQuery": "海上釣堀モンキー（受付・乗船場） 三重県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://www.amigo.ne.jp/~monkey/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/d/viewer?mid=1pW9k4TGElw3elZbL3b1uCjxlmBmYGd5Z"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98615"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "鳥羽・浦村の海上釣堀モンキー。麻生浦大橋が見える入り江の生簀で、放流魚を狙います。",
      "牡蠣料理の営業と釣り堀の実施を分けて確認。予約・道具と餌の指定は施設へ問い合わせる。"
    ],
    "caution": [
      "牡蠣料理の営業と釣り堀の実施を分けて確認。予約・道具と餌の指定は施設へ問い合わせる。"
    ]
  },
  {
    "slug": "growth-uosue-amago",
    "name": "魚末あまごセンター",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "三重県",
    "area": "三重県",
    "terrain": "pond",
    "lat": 34.4862379,
    "lng": 136.2707578,
    "fish": [
      "アマゴ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "美杉の魚末あまごセンター。山の水で育つアマゴを釣り堀で釣り、アマゴ料理と合わせて楽しめる施設です。",
    "officialUrl": "https://www.zb.ztv.ne.jp/uosue/",
    "googleQuery": "魚末あまごセンター 三重県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.zb.ztv.ne.jp/uosue/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E9%AD%9A%E6%9C%AB%E3%81%82%E3%81%BE%E3%81%94%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC/@34.4862423,136.2681829,17z/data=!3m1!4b1!4m6!3m5!1s0x60041ebc976382ed:0x3a9fa4c0a92dd9c!8m2!3d34.4862379!4d136.2707578!16s%2Fg%2F1v8j0crj?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98607"
      },
      {
        "label": "津市観光協会：釣り堀と食事",
        "url": "https://tsukanko.jp/spot/s713/"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "美杉の魚末あまごセンター。山の水で育つアマゴを釣り堀で釣り、アマゴ料理と合わせて楽しめる施設です。",
      "養殖の池は釣り区画ではありません。釣り堀の営業日と食事の予約を確認する。"
    ],
    "caution": [
      "養殖の池は釣り区画ではありません。釣り堀の営業日と食事の予約を確認する。"
    ]
  },
  {
    "slug": "growth-fukujyumaru-pond",
    "name": "海上釣り堀 福寿丸（受付・乗船場）",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "三重県",
    "area": "三重県",
    "terrain": "boat",
    "lat": 34.3202114,
    "lng": 136.6600141,
    "fish": [
      "マダイ",
      "ブリ",
      "カンパチ",
      "シマアジ"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "迫間浦の海上釣り堀福寿丸。生簀のマダイや青物を狙う釣り堀と、別メニューの筏釣りを選べます。",
    "officialUrl": "https://fukujyumaru.com/",
    "googleQuery": "海上釣り堀 福寿丸（受付・乗船場） 三重県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://fukujyumaru.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E9%87%A3%E3%82%8A%E5%A0%80+%E7%A6%8F%E5%AF%BF%E4%B8%B8/@34.3202114,136.6574392,17z/data=!3m1!4b1!4m6!3m5!1s0x60044d44ed380f2f:0xedd64df0e9b4e8a5!8m2!3d34.3202114!4d136.6600141!16s%2Fg%2F11cncn8gpc"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=84652"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "迫間浦の海上釣り堀福寿丸。生簀のマダイや青物を狙う釣り堀と、別メニューの筏釣りを選べます。",
      "釣り堀と天然魚の筏釣りで予約・仕掛けが異なります。乗船場所と集合時刻は予約時に確認。"
    ],
    "caution": [
      "釣り堀と天然魚の筏釣りで予約・仕掛けが異なります。乗船場所と集合時刻は予約時に確認。"
    ]
  },
  {
    "slug": "growth-sanctuary-inabe",
    "name": "フィッシングサンクチュアリ",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "三重県",
    "area": "三重県",
    "terrain": "pond",
    "lat": 35.186027,
    "lng": 136.472026,
    "fish": [
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "エリアトラウト",
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "trout-lure",
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "いなべ市のサンクチュアリ。複数の池でルアー釣りと餌釣りを分けて楽しむ管理釣り場です。",
    "officialUrl": "https://go-sanctuary.com/",
    "googleQuery": "フィッシングサンクチュアリ 三重県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://go-sanctuary.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%82%B5%E3%83%B3%E3%82%AF%E3%83%81%E3%83%A5%E3%82%A2%E3%83%AA/@35.186027,136.4698373,17z/data=!3m1!4b1!4m5!3m4!1s0x6003c6e4bc1dfca5:0xf79c5904d8786f11!8m2!3d35.186027!4d136.472026"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=24821"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "いなべ市のサンクチュアリ。複数の池でルアー釣りと餌釣りを分けて楽しむ管理釣り場です。",
      "池ごとに営業季節と使用できる釣法が異なります。餌釣りは前日までの予約条件を確認する。"
    ],
    "caution": [
      "池ごとに営業季節と使用できる釣法が異なります。餌釣りは前日までの予約条件を確認する。"
    ]
  },
  {
    "slug": "growth-aqua-heaven",
    "name": "釣りぼり　アクア．ヘヴン",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "滋賀県",
    "area": "滋賀県",
    "terrain": "pond",
    "lat": 35.1333109,
    "lng": 135.9023863,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "エリアトラウト"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "大津市真野のアクア・ヘヴン。ルアー・フライでトラウトを狙う管理池です。魚に合うネットを用意して入場します。",
    "officialUrl": "https://aqua-heaven.net/",
    "googleQuery": "釣りぼり　アクア．ヘヴン 滋賀県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://aqua-heaven.net/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%82%A2%E3%82%AF%E3%82%A2.%E3%83%98%E3%83%96%E3%83%B3/@35.1333109,135.9001976,17z/data=!3m1!4b1!4m5!3m4!1s0x6001a01fbc71e98d:0x9589945c67a28a2b!8m2!3d35.1333109!4d135.9023863"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=21461"
      },
      {
        "label": "施設の釣りルール",
        "url": "https://www.aqua-heaven.net/rule.php"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "大津市真野のアクア・ヘヴン。ルアー・フライでトラウトを狙う管理池です。魚に合うネットを用意して入場します。",
      "バーブレスフックを使用し、使用ルアーと魚の持ち帰り条件は施設のルールを確認する。"
    ],
    "caution": [
      "バーブレスフックを使用し、使用ルアーと魚の持ち帰り条件は施設のルールを確認する。"
    ]
  },
  {
    "slug": "growth-mitsue-fishing",
    "name": "みつえ青少年旅行村",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "奈良県",
    "area": "奈良県",
    "terrain": "river",
    "lat": 34.4686533,
    "lng": 136.1910107,
    "fish": [
      "アマゴ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "みつえ青少年旅行村の魚釣り体験。キャンプや日帰りプランと合わせ、指定の渓流区画で利用します。",
    "officialUrl": "https://mitsue.life/services/village/",
    "googleQuery": "みつえ青少年旅行村 奈良県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://mitsue.life/services/village/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%81%BF%E3%81%A4%E3%81%88%E9%9D%92%E5%B0%91%E5%B9%B4%E6%97%85%E8%A1%8C%E6%9D%91/@34.4686577,136.1884358,17z/data=!4m9!3m8!1s0x6006a7483e697653:0x530ec0fff92ef795!5m2!4m1!1i2!8m2!3d34.4686533!4d136.1910107!16s%2Fg%2F1tk6_g24?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98574"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "みつえ青少年旅行村の魚釣り体験。キャンプや日帰りプランと合わせ、指定の渓流区画で利用します。",
      "魚釣りだけの利用でもプラン予約が必要。つかみ取りと釣りの申込みを取り違えない。"
    ],
    "caution": [
      "魚釣りだけの利用でもプラン予約が必要。つかみ取りと釣りの申込みを取り違えない。"
    ]
  },
  {
    "slug": "growth-mito-forest-stream",
    "name": "みと自然の森",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "島根県",
    "area": "島根県",
    "terrain": "river",
    "lat": 34.6458358,
    "lng": 132.0266113,
    "fish": [
      "ヤマメ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "美都の自然の森を流れる清流で行う渓流釣り。施設利用と合わせて、釣れる範囲や遊漁条件を受付で確認します。",
    "officialUrl": "https://www.sizennomori.co.jp/index.html",
    "googleQuery": "みと自然の森 島根県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.sizennomori.co.jp/index.html"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%81%BF%E3%81%A8%E8%87%AA%E7%84%B6%E3%81%AE%E6%A3%AE/@34.6458402,132.0240364,17z/data=!4m9!3m8!1s0x355ae690f458cacd:0xac00f6db77ec356!5m2!4m1!1i2!8m2!3d34.6458358!4d132.0266113!16s%2Fg%2F1tdqlhkh?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98582"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "美都の自然の森を流れる清流で行う渓流釣り。施設利用と合わせて、釣れる範囲や遊漁条件を受付で確認します。",
      "山小屋の日帰り休憩は休止の案内。登山道工事の通行止め区域へ入らず、釣りの実施を確認する。"
    ],
    "caution": [
      "山小屋の日帰り休憩は休止の案内。登山道工事の通行止め区域へ入らず、釣りの実施を確認する。"
    ]
  },
  {
    "slug": "growth-naoshima-fishing-park",
    "name": "直島つり公園",
    "type": "spot",
    "primaryType": "sea-park",
    "prefecture": "香川県",
    "area": "香川県",
    "terrain": "pier",
    "lat": 34.4442647,
    "lng": 134.0019822,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "直島つり公園の西側石積場・小割施設付近を利用する海釣り。島内のバスと徒歩区間も含めて計画します。",
    "officialUrl": "https://www.town.naoshima.lg.jp/about/kanko/turi.html",
    "googleQuery": "直島つり公園 香川県",
    "verifiedAt": "2026-09-17",
    "positionNote": "自治体の利用可能範囲と航空写真を照合し、西側の石積み護岸を表示。東側の固定桟橋・磯釣り場は休止中です。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.town.naoshima.lg.jp/about/kanko/turi.html"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E7%9B%B4%E5%B3%B6%E3%81%A4%E3%82%8A%E5%85%AC%E5%9C%92/@34.4450667,133.9995605,17z/data=!3m1!4b1!4m5!3m4!1s0x3553ee1f911515b5:0xa8f701dc454a1a55!8m2!3d34.4450667!4d134.0017492"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=34080"
      },
      {
        "label": "国土地理院：位置照合用航空写真",
        "url": "https://maps.gsi.go.jp/#18/34.4442647/134.0019822/&base=seamlessphoto&ls=seamlessphoto&disp=1"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された海釣りエリア",
    "bestFor": [
      "管理された海釣りエリア"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "直島つり公園の西側石積場・小割施設付近を利用する海釣り。島内のバスと徒歩区間も含めて計画します。",
      "東側の固定桟橋と磯釣り場は当面利用不可。夜釣り営業はなく、立入可能な西側だけを利用する。"
    ],
    "caution": [
      "東側の固定桟橋と磯釣り場は当面利用不可。夜釣り営業はなく、立入可能な西側だけを利用する。"
    ]
  },
  {
    "slug": "growth-tosu-forest-fishing",
    "name": "自然の森フィッシングリゾート",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "佐賀県",
    "area": "佐賀県",
    "terrain": "pond",
    "lat": 33.3760361,
    "lng": 130.4574001,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "鳥栖の自然の森フィッシングリゾート。釣り堀と川沿いのBBQを組み合わせて、釣って食べる体験を楽しめます。",
    "officialUrl": "https://retreat-place.jp/",
    "googleQuery": "自然の森フィッシングリゾート 佐賀県",
    "verifiedAt": "2026-09-17",
    "positionNote": "施設案内と航空写真を照合し、受付建物ではなく釣り池の岸を表示。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://retreat-place.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E8%87%AA%E7%84%B6%E3%81%AE%E6%A3%AE+%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88/@33.3758124,130.4559513,17z/data=!3m1!4b1!4m5!3m4!1s0x3541bca4e9b779b7:0xde05d46eae5e90b2!8m2!3d33.3758124!4d130.45814"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=31833"
      },
      {
        "label": "佐賀県観光：施設案内",
        "url": "https://www.asobo-saga.jp/experiences/detail/61c5020e-8247-4b50-a5a6-171f59c1ab33"
      },
      {
        "label": "国土地理院：位置照合用航空写真",
        "url": "https://maps.gsi.go.jp/#18/33.3760361/130.4574001/&base=seamlessphoto&ls=seamlessphoto&disp=1"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "鳥栖の自然の森フィッシングリゾート。釣り堀と川沿いのBBQを組み合わせて、釣って食べる体験を楽しめます。",
      "場内の池と自然河川の釣りを混同しない。釣り・BBQそれぞれの受付と予約を確認する。"
    ],
    "caution": [
      "場内の池と自然河川の釣りを混同しない。釣り・BBQそれぞれの受付と予約を確認する。"
    ]
  },
  {
    "slug": "growth-bouken-okinawa",
    "name": "釣って見つける ぼうけんの国　沖縄",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "沖縄県",
    "area": "沖縄県",
    "terrain": "pond",
    "lat": 26.4397202,
    "lng": 127.8293912,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "うるま市のぼうけんの国沖縄。屋内水槽で熱帯魚とのやり取りを体験する施設で、海岸での釣りとは異なる楽しみ方です。",
    "officialUrl": "https://boukennokuni.com/",
    "googleQuery": "釣って見つける ぼうけんの国　沖縄 沖縄県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://boukennokuni.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E9%87%A3%E3%81%A3%E3%81%A6%E8%A6%8B%E3%81%A4%E3%81%91%E3%82%8B%E3%81%BC%E3%81%86%E3%81%91%E3%82%93%E3%81%AE%E5%9B%BD+%E6%B2%96%E7%B8%84/@26.4397202,127.8272025,17z/data=!3m1!4b1!4m5!3m4!1s0x34e50575d5fc3df9:0xfc4ca21dc6edc48!8m2!3d26.4397202!4d127.8293912"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=81133"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "うるま市のぼうけんの国沖縄。屋内水槽で熱帯魚とのやり取りを体験する施設で、海岸での釣りとは異なる楽しみ方です。",
      "施設指定の竿と仕掛けを使い、魚はスタッフの指示で外す。予約優先の入場条件を確認する。"
    ],
    "caution": [
      "施設指定の竿と仕掛けを使い、魚はスタッフの指示で外す。予約優先の入場条件を確認する。"
    ]
  },
  {
    "slug": "growth-bouken-sagamihara",
    "name": "釣って見つける ぼうけんの国　相模原上溝店",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "神奈川県",
    "area": "神奈川県",
    "terrain": "pond",
    "lat": 35.5584446,
    "lng": 139.3559778,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "相模原上溝のぼうけんの国。屋内の水槽で熱帯魚を釣り、針の外し方や魚の扱いを覚える体験施設です。",
    "officialUrl": "https://boukennokuni.com/",
    "googleQuery": "釣って見つける ぼうけんの国　相模原上溝店 神奈川県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://boukennokuni.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E9%87%A3%E3%81%A3%E3%81%A6%E8%A6%8B%E3%81%A4%E3%81%91%E3%82%8B+%E3%81%BC%E3%81%86%E3%81%91%E3%82%93%E3%81%AE%E5%9B%BD+%E7%9B%B8%E6%A8%A1%E5%8E%9F%E4%B8%8A%E6%BA%9D%E5%BA%97/@35.5584446,139.3537891,17z/data=!3m1!4b1!4m5!3m4!1s0x6019039e47723171:0xe4b3f123df53db8d!8m2!3d35.5584446!4d139.3559778"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=81132"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "相模原上溝のぼうけんの国。屋内の水槽で熱帯魚を釣り、針の外し方や魚の扱いを覚える体験施設です。",
      "希望する店舗の予約を取る。釣った魚の扱いと各アトラクションの年齢条件は施設の案内に従う。"
    ],
    "caution": [
      "希望する店舗の予約を取る。釣った魚の扱いと各アトラクションの年齢条件は施設の案内に従う。"
    ]
  },
  {
    "slug": "growth-yamaki-fishing",
    "name": "やま喜フィッシングセンター",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "神奈川県",
    "area": "神奈川県",
    "terrain": "pond",
    "lat": 35.5177264,
    "lng": 139.5509074,
    "fish": [
      "コイ",
      "金魚",
      "ヘラブナ"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "横浜のやま喜フィッシングセンター。貸し竿付きのコイ・金魚釣りと、自分の道具を使うヘラブナ釣りを選べます。",
    "officialUrl": "http://home.catv.ne.jp/dd/yamakifc/",
    "googleQuery": "やま喜フィッシングセンター 神奈川県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://home.catv.ne.jp/dd/yamakifc/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%82%84%E3%81%BE%E5%96%9C%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC/@35.5177264,139.5487187,17z/data=!3m1!4b1!4m5!3m4!1s0x6018587261ffb647:0x119ef15cbb633c7f!8m2!3d35.5177264!4d139.5509074"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=81131"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "横浜のやま喜フィッシングセンター。貸し竿付きのコイ・金魚釣りと、自分の道具を使うヘラブナ釣りを選べます。",
      "池ごとに道具と受付終了が異なります。金魚池は子ども優先で、ヘラブナ道具は自分で準備する。"
    ],
    "caution": [
      "池ごとに道具と受付終了が異なります。金魚池は子ども優先で、ヘラブナ道具は自分で準備する。"
    ]
  },
  {
    "slug": "growth-bouken-shonan",
    "name": "釣って見つける ぼうけんの国　湘南釣堀",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "神奈川県",
    "area": "神奈川県",
    "terrain": "pond",
    "lat": 35.3950869,
    "lng": 139.3811523,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "寒川のぼうけんの国湘南釣堀。海水魚の釣り堀と熱帯魚釣りを屋内で楽しめる施設です。",
    "officialUrl": "https://boukennokuni.com/",
    "googleQuery": "釣って見つける ぼうけんの国　湘南釣堀 神奈川県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://boukennokuni.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E9%87%A3%E3%81%A3%E3%81%A6%E8%A6%8B%E3%81%A4%E3%81%91%E3%82%8B+%E3%81%BC%E3%81%86%E3%81%91%E3%82%93%E3%81%AE%E5%9B%BD+%E6%B9%98%E5%8D%97%E9%87%A3%E5%A0%80/@35.395101,139.3789663,17z/data=!3m1!4b1!4m5!3m4!1s0x601854bc8f657f15:0x36ad17d9b3d3ce28!8m2!3d35.3950869!4d139.3811523"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=47487"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "寒川のぼうけんの国湘南釣堀。海水魚の釣り堀と熱帯魚釣りを屋内で楽しめる施設です。",
      "釣った魚の持ち帰り可否はコースによって異なります。希望する釣りと予約枠を確認する。"
    ],
    "caution": [
      "釣った魚の持ち帰り可否はコースによって異なります。希望する釣りと予約枠を確認する。"
    ]
  },
  {
    "slug": "growth-hatanodai-tsuribori",
    "name": "旗の台つりぼり店",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "東京都",
    "area": "東京都",
    "terrain": "pond",
    "lat": 35.6072589,
    "lng": 139.7056493,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "品川の旗の台つりぼり店。屋内で短時間の釣りを楽しみ、釣れた数を記録して遊べる施設です。",
    "officialUrl": "http://www.yanagidakoumuten.com/turibori/index_turibori.html",
    "googleQuery": "旗の台つりぼり店 東京都",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://www.yanagidakoumuten.com/turibori/index_turibori.html"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%97%97%E3%81%AE%E5%8F%B0%E3%81%A4%E3%82%8A%E3%81%BC%E3%82%8A%E5%BA%97/@35.6072589,139.7056493,17z/data=!3m1!4b1!4m6!3m5!1s0x60188abf291157a3:0xaff7179630d2b388!8m2!3d35.6072589!4d139.7056493!16s%2Fg%2F11ckrjfqhp?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=132900"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "品川の旗の台つりぼり店。屋内で短時間の釣りを楽しみ、釣れた数を記録して遊べる施設です。",
      "魚は持ち帰れません。針を外したらやさしく生簀へ戻し、施設の道具を使用する。"
    ],
    "caution": [
      "魚は持ち帰れません。針を外したらやさしく生簀へ戻し、施設の道具を使用する。"
    ]
  },
  {
    "slug": "growth-benkeibashi-fishing",
    "name": "弁慶橋ボート場（弁慶フィッシングクラブ）",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "東京都",
    "area": "東京都",
    "terrain": "pond",
    "lat": 35.679032,
    "lng": 139.735966,
    "fish": [
      "ブラックバス",
      "コイ"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "弁慶橋ボート場のフィッシングクラブ。堀のボート釣りと、区画された餌釣りを選べます。",
    "officialUrl": "https://benkeifishingclub.studio.site/",
    "googleQuery": "弁慶橋ボート場（弁慶フィッシングクラブ） 東京都",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://benkeifishingclub.studio.site/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%BC%81%E6%85%B6%E6%A9%8B%E3%83%9C%E3%83%BC%E3%83%88%E5%A0%B4(%E5%BC%81%E6%85%B6%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%82%AF%E3%83%A9%E3%83%96)/@35.679032,139.7337773,17z/data=!3m1!4b1!4m5!3m4!1s0x60188c7c183246d1:0x6bd334a5a66522e5!8m2!3d35.679032!4d139.735966"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=81249"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "弁慶橋ボート場のフィッシングクラブ。堀のボート釣りと、区画された餌釣りを選べます。",
      "土日祝の開場時にボートを利用する場合の予約条件を確認。堀の外側から勝手に釣らない。"
    ],
    "caution": [
      "土日祝の開場時にボートを利用する場合の予約条件を確認。堀の外側から勝手に釣らない。"
    ]
  },
  {
    "slug": "growth-tokyo-trout-country",
    "name": "TOKYOトラウトカントリー",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "東京都",
    "area": "東京都",
    "terrain": "river",
    "lat": 35.8251689,
    "lng": 139.0760909,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "エリアトラウト"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "奥多摩の日原川を利用するTOKYOトラウトカントリー。自然の流れを相手に、ルアー・フライ・テンカラを楽しむ管理区画です。",
    "officialUrl": "https://ttcmayfly.web.fc2.com/",
    "googleQuery": "TOKYOトラウトカントリー 東京都",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://ttcmayfly.web.fc2.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/TOKYO%E3%83%88%E3%83%A9%E3%82%A6%E3%83%88%E3%82%AB%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC/@35.8251689,139.0739022,17z/data=!3m1!4b1!4m5!3m4!1s0x6019365ddd237a0d:0xe36affa00d36b410!8m2!3d35.8251689!4d139.0760909"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=65439"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "奥多摩の日原川を利用するTOKYOトラウトカントリー。自然の流れを相手に、ルアー・フライ・テンカラを楽しむ管理区画です。",
      "一般入場はキャッチ＆リリース券のみの案内。増水で水況が変わるため出発前に営業を問い合わせる。"
    ],
    "caution": [
      "一般入場はキャッチ＆リリース券のみの案内。増水で水況が変わるため出発前に営業を問い合わせる。"
    ]
  },
  {
    "slug": "growth-hanaya-nojiriko-boat",
    "name": "花屋ボート",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "boat",
    "lat": 36.8361506,
    "lng": 138.2104881,
    "fish": [
      "ワカサギ",
      "ブラックバス"
    ],
    "fishSlugs": [],
    "methods": [
      "ワカサギ釣り"
    ],
    "methodSlugs": [
      "wakasagi"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "野尻湖の花屋ボート。暖房付きのワカサギ船やバス釣りの貸しボートを利用する拠点です。",
    "officialUrl": "https://hanayaboat.com/",
    "googleQuery": "花屋ボート 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://hanayaboat.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E8%8A%B1%E5%B1%8B%E3%83%9C%E3%83%BC%E3%83%88/@36.8361549,138.2079132,17z/data=!3m1!4b1!4m6!3m5!1s0x5ff6233c1ed93f23:0xa4746ca6dcb1b9c3!8m2!3d36.8361506!4d138.2104881!16s%2Fg%2F11btrr72wv?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98479"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "野尻湖の花屋ボート。暖房付きのワカサギ船やバス釣りの貸しボートを利用する拠点です。",
      "ワカサギとバスでは営業季節が異なります。乗船予約と遊漁券を確認し、桟橋では救命具を着用する。"
    ],
    "caution": [
      "ワカサギとバスでは営業季節が異なります。乗船予約と遊漁券を確認し、桟橋では救命具を着用する。"
    ]
  },
  {
    "slug": "growth-nojiriko-marina",
    "name": "野尻湖マリーナ",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "boat",
    "lat": 36.8359572,
    "lng": 138.2098228,
    "fish": [
      "ワカサギ",
      "ブラックバス"
    ],
    "fishSlugs": [],
    "methods": [
      "ワカサギ釣り"
    ],
    "methodSlugs": [
      "wakasagi"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "野尻湖マリーナの釣りボート。冬は屋形船でワカサギ、春から秋はバス釣りのボート利用を選べます。",
    "officialUrl": "https://www.nojiriko.jp/",
    "googleQuery": "野尻湖マリーナ 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.nojiriko.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E9%87%8E%E5%B0%BB%E6%B9%96%E3%83%9E%E3%83%AA%E3%83%BC%E3%83%8A/@36.8359572,138.2072479,17z/data=!3m1!4b1!4m6!3m5!1s0x5ff623d3e8a02a09:0xfdedc6985baaff7e!8m2!3d36.8359572!4d138.2098228!16s%2Fg%2F11h7cl86s9?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=86401"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "野尻湖マリーナの釣りボート。冬は屋形船でワカサギ、春から秋はバス釣りのボート利用を選べます。",
      "貸し道具・乗船人数・出船時刻は予約時に確認。湖面の風が強い日は出船判断を優先する。"
    ],
    "caution": [
      "貸し道具・乗船人数・出船時刻は予約時に確認。湖面の風が強い日は出船判断を優先する。"
    ]
  },
  {
    "slug": "growth-kizakiko-modernboat",
    "name": "木崎湖モダンボート",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "boat",
    "lat": 36.544545,
    "lng": 137.840311,
    "fish": [
      "ワカサギ",
      "ブラックバス"
    ],
    "fishSlugs": [],
    "methods": [
      "ワカサギ釣り"
    ],
    "methodSlugs": [
      "wakasagi"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "木崎湖モダンボート。ワカサギやバスを狙う貸しボートと湖の遊びを扱い、初回は操船の説明を受けて出艇します。",
    "officialUrl": "https://www.kizakiko.jp/",
    "googleQuery": "木崎湖モダンボート 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.kizakiko.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%9C%A8%E5%B4%8E%E6%B9%96%E3%83%A2%E3%83%80%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%88/@36.544545,137.8377361,17z/data=!3m1!4b1!4m6!3m5!1s0x601d61ff29efd353:0xba36cff61f0e500f!8m2!3d36.544545!4d137.840311!16s%2Fg%2F1tx8t8tv?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=86171"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "木崎湖モダンボート。ワカサギやバスを狙う貸しボートと湖の遊びを扱い、初回は操船の説明を受けて出艇します。",
      "釣りとSUPなどの航行範囲を確認。持ち込み道具と遊漁券の条件は予約時に問い合わせる。"
    ],
    "caution": [
      "釣りとSUPなどの航行範囲を確認。持ち込み道具と遊漁券の条件は予約時に問い合わせる。"
    ]
  },
  {
    "slug": "growth-joko-misho-raft",
    "name": "上甲商会",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "愛媛県",
    "area": "愛媛県",
    "terrain": "boat",
    "lat": 32.970717,
    "lng": 132.535063,
    "fish": [
      "クロダイ"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "御荘湾の上甲商会。チヌを狙う筏釣りを扱う施設で、利用する筏と渡り方は受付の案内に従います。",
    "officialUrl": "https://ehime-kaki.com/",
    "googleQuery": "上甲商会 愛媛県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://ehime-kaki.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E4%B8%8A%E7%94%B2%E5%95%86%E4%BC%9A(%E5%BE%A1%E8%8D%98%E6%B9%BE%E5%AE%B6%E6%97%8F%E3%81%84%E3%81%8B%E3%81%A0%E9%87%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC)%E3%83%BB%E3%81%8B%E3%81%8D%E5%B0%8F%E5%B1%8B/@32.9707215,132.5324881,17z/data=!3m1!4b1!4m6!3m5!1s0x3545ff4b9f4772cb:0x430a94852635d0b4!8m2!3d32.970717!4d132.535063!16s%2Fg%2F1tf0nf09?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98469"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "御荘湾の上甲商会。チヌを狙う筏釣りを扱う施設で、利用する筏と渡り方は受付の案内に従います。",
      "陸続きと沖の筏ではアクセスが異なります。牡蠣販売の営業と釣りの実施を混同しない。"
    ],
    "caution": [
      "陸続きと沖の筏ではアクセスが異なります。牡蠣販売の営業と釣りの実施を混同しない。"
    ]
  },
  {
    "slug": "growth-shinohara-hokuzan",
    "name": "ボートハウスシノハラ",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "佐賀県",
    "area": "佐賀県",
    "terrain": "boat",
    "lat": 33.4318267,
    "lng": 130.2567444,
    "fish": [
      "ブラックバス",
      "ワカサギ"
    ],
    "fishSlugs": [],
    "methods": [
      "ワカサギ釣り"
    ],
    "methodSlugs": [
      "wakasagi"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "北山湖のボートハウス・シノハラ。貸しボートでバスや季節のワカサギを狙う出艇拠点です。",
    "officialUrl": "https://shinohara-boat.com/",
    "googleQuery": "ボートハウスシノハラ 佐賀県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://shinohara-boat.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%83%9C%E3%83%BC%E3%83%88%E3%83%8F%E3%82%A6%E3%82%B9%E3%83%BB%E3%82%B7%E3%83%8E%E3%83%8F%E3%83%A9/@33.4318267,130.2567444,17z/data=!3m1!4b1!4m6!3m5!1s0x3541c6c343f0f34f:0xb5dfff9079d846ab!8m2!3d33.4318267!4d130.2567444!16s%2Fg%2F1vtzd_rl?hl=ja&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=113956"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "北山湖のボートハウス・シノハラ。貸しボートでバスや季節のワカサギを狙う出艇拠点です。",
      "減水により乗降場所や航行範囲が変わります。ワカサギの開始日と使用船は予約時に確認する。"
    ],
    "caution": [
      "減水により乗降場所や航行範囲が変わります。ワカサギの開始日と使用船は予約時に確認する。"
    ]
  },
  {
    "slug": "growth-marusui-mikiura",
    "name": "マルスイ海産",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "三重県",
    "area": "三重県",
    "terrain": "boat",
    "lat": 33.9869939,
    "lng": 136.2398504,
    "fish": [
      "クロダイ"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "三木浦のマルスイ海産が案内する筏釣り。湾内の筏へ渡り、ダンゴ釣りなどでチヌを狙う利用です。",
    "officialUrl": "https://marusuikaisan.wixsite.com/marusuikaisan",
    "googleQuery": "マルスイ海産 三重県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://marusuikaisan.wixsite.com/marusuikaisan"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%83%9E%E3%83%AB%E3%82%B9%E3%82%A4%E6%B5%B7%E7%94%A3/@33.9869939,136.2398504,15z/data=!4m2!3m1!1s0x0:0x933732296d79cb9c?sa=X&ved=1t:2428&ictx=111"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=110063"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "三木浦のマルスイ海産が案内する筏釣り。湾内の筏へ渡り、ダンゴ釣りなどでチヌを狙う利用です。",
      "乗船受付と筏は別の場所です。予約時に集合場所・帰りの便・救命具の条件を確認する。"
    ],
    "caution": [
      "乗船受付と筏は別の場所です。予約時に集合場所・帰りの便・救命具の条件を確認する。"
    ]
  },
  {
    "slug": "growth-naize-fishing-center",
    "name": "内瀬釣りセンター",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "三重県",
    "area": "三重県",
    "terrain": "boat",
    "lat": 34.3452784,
    "lng": 136.6657225,
    "fish": [
      "クロダイ",
      "マダイ"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "南伊勢の内瀬釣りセンター。筏・カセで天然魚を狙うコースと、放流魚の釣り堀を選べます。",
    "officialUrl": "https://www.ohyamanet.com/~zenme/",
    "googleQuery": "内瀬釣りセンター 三重県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.ohyamanet.com/~zenme/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%86%85%E7%80%AC%E9%87%A3%E3%82%8A%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC/@34.3452784,136.6635338,17z/data=!3m1!4b1!4m5!3m4!1s0x60044d787c62fc07:0x6eae50718bcef6e0!8m2!3d34.3452784!4d136.6657225"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=21431"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "南伊勢の内瀬釣りセンター。筏・カセで天然魚を狙うコースと、放流魚の釣り堀を選べます。",
      "予約したコースによって集合場所・終了時刻・釣法が異なります。釣り堀では撒き餌やサビキは禁止の案内。"
    ],
    "caution": [
      "予約したコースによって集合場所・終了時刻・釣法が異なります。釣り堀では撒き餌やサビキは禁止の案内。"
    ]
  },
  {
    "slug": "growth-numamoto-tsukuiko",
    "name": "津久井湖レンタルボート （沼本ボート）",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "神奈川県",
    "area": "神奈川県",
    "terrain": "boat",
    "lat": 35.5960163,
    "lng": 139.2278989,
    "fish": [
      "ブラックバス",
      "ヘラブナ",
      "ワカサギ"
    ],
    "fishSlugs": [],
    "methods": [
      "ワカサギ釣り"
    ],
    "methodSlugs": [
      "wakasagi"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "津久井湖の沼本ボート。道志橋近くから貸しボートで出艇し、バス・ヘラブナ・季節のワカサギを狙えます。",
    "officialUrl": "https://numamotoboat.main.jp/",
    "googleQuery": "津久井湖レンタルボート （沼本ボート） 神奈川県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://numamotoboat.main.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%B2%BC%E6%9C%AC%E3%83%9C%E3%83%BC%E3%83%88/@35.5960163,139.2257102,17z/data=!3m1!4b1!4m5!3m4!1s0x60191a40afd70001:0xc29b5803b334e706!8m2!3d35.5960163!4d139.2278989"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=25888"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "津久井湖の沼本ボート。道志橋近くから貸しボートで出艇し、バス・ヘラブナ・季節のワカサギを狙えます。",
      "流木・ゴミ除けロープの位置が変わるため、当日の航行案内を確認。定休日と船の予約を確認する。"
    ],
    "caution": [
      "流木・ゴミ除けロープの位置が変わるため、当日の航行案内を確認。定休日と船の予約を確認する。"
    ]
  },
  {
    "slug": "growth-tsukui-kanko-boat",
    "name": "津久井湖レンタルボート （津久井観光ボート）",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "神奈川県",
    "area": "神奈川県",
    "terrain": "boat",
    "lat": 35.5933024,
    "lng": 139.2610573,
    "fish": [
      "ブラックバス",
      "ワカサギ"
    ],
    "fishSlugs": [],
    "methods": [
      "ワカサギ釣り"
    ],
    "methodSlugs": [
      "wakasagi"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "津久井観光ボート。バス釣りボートや季節のワカサギドームを扱い、予約して湖上の釣りを楽しむ拠点です。",
    "officialUrl": "https://tsukuikankou.com/",
    "googleQuery": "津久井湖レンタルボート （津久井観光ボート） 神奈川県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://tsukuikankou.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%B4%A5%E4%B9%85%E4%BA%95%E8%A6%B3%E5%85%89%EF%BC%88%E6%A0%AA%EF%BC%89/@35.5933101,139.2588745,17z/data=!3m1!4b1!4m5!3m4!1s0x60191ba0f6c723d1:0x55900793ecc12ace!8m2!3d35.5933024!4d139.2610573"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=24865"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "津久井観光ボート。バス釣りボートや季節のワカサギドームを扱い、予約して湖上の釣りを楽しむ拠点です。",
      "桟橋周囲は通年釣り禁止の案内。貸切日・大会日と使用できる船、アラバマリグ禁止などのルールを確認する。"
    ],
    "caution": [
      "桟橋周囲は通年釣り禁止の案内。貸切日・大会日と使用できる船、アラバマリグ禁止などのルールを確認する。"
    ]
  },
  {
    "slug": "growth-syakudai-stream",
    "name": "水無瀬川 尺代アマゴ・マス釣り場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "大阪府",
    "area": "大阪府",
    "terrain": "river",
    "lat": 34.896723,
    "lng": 135.6531947,
    "fish": [
      "アマゴ",
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "尺代漁協が管理する水無瀬川の放流釣り場。冬から春のアマゴ・マス釣りを受付した区画で楽しみます。",
    "officialUrl": "https://syakudaigyokyou.wixsite.com/home",
    "googleQuery": "水無瀬川 尺代アマゴ・マス釣り場 大阪府",
    "verifiedAt": "2026-09-17",
    "positionNote": "管理釣り場の受付周辺を示します。営業再開時に指定される入川区画を漁協・受付で確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://syakudaigyokyou.wixsite.com/home"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%B0%B4%E7%84%A1%E7%80%AC%E5%B7%9D+%E5%B0%BA%E4%BB%A3%E3%82%A2%E3%83%9E%E3%82%B4%E3%83%BB%E3%83%9E%E3%82%B9%E9%87%A3%E3%82%8A%E5%A0%B4/@34.896723,135.6531947,15z/data=!4m2!3m1!1s0x0:0x21c0bdaf51a77312?sa=X&ved=1t:2428&hl=ja&ictx=111"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=106437"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "尺代漁協が管理する水無瀬川の放流釣り場。冬から春のアマゴ・マス釣りを受付した区画で楽しみます。",
      "2026年は5月6日で営業終了。次季は10月下旬予定のため、再開の公式告知を確認してから訪れる。"
    ],
    "caution": [
      "2026年は5月6日で営業終了。次季は10月下旬予定のため、再開の公式告知を確認してから訪れる。"
    ],
    "closed": true,
    "status": "2026年は5月6日で営業終了。次季は10月下旬予定のため、再開の公式告知を確認してから訪れる。"
  },
  {
    "slug": "growth-kogaki-stream",
    "name": "小柿渓谷放流釣り場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "兵庫県",
    "area": "兵庫県",
    "terrain": "river",
    "lat": 34.996957,
    "lng": 135.260649,
    "fish": [
      "アマゴ",
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "三田の羽束川上流を利用する小柿渓谷放流釣り場。地元組合が管理する区画で、受付と放流の説明を受けて釣ります。",
    "googleQuery": "小柿渓谷放流釣り場 兵庫県",
    "verifiedAt": "2026-09-17",
    "positionNote": "管理釣り場の受付周辺を示します。営業再開時に指定される入川区画を漁協・受付で確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.eonet.ne.jp/~kogaki-fishing/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%B0%8F%E6%9F%BF%E6%B8%93%E8%B0%B7%E6%94%BE%E6%B5%81%E9%87%A3%E3%82%8A%E5%A0%B4/@34.996957,135.2584603,17z/data=!3m1!4b1!4m5!3m4!1s0x600068ffbd67fb71:0x25e151abd845e9c5!8m2!3d34.996957!4d135.260649"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=25897"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "三田の羽束川上流を利用する小柿渓谷放流釣り場。地元組合が管理する区画で、受付と放流の説明を受けて釣ります。",
      "今季は5月11日で終了の案内。営業再開前や営業時間外の入川、受付前の場所取りはできません。"
    ],
    "caution": [
      "今季は5月11日で終了の案内。営業再開前や営業時間外の入川、受付前の場所取りはできません。"
    ],
    "closed": true,
    "status": "今季は5月11日で終了の案内。営業再開前や営業時間外の入川、受付前の場所取りはできません。"
  },
  {
    "slug": "growth-kitatahara-trout",
    "name": "北田原ます釣り場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "兵庫県",
    "area": "兵庫県",
    "terrain": "river",
    "lat": 34.9148332,
    "lng": 135.3603693,
    "fish": [
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り",
      "エリアトラウト"
    ],
    "methodSlugs": [
      "freshwater-bait",
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "猪名川町の北田原ます釣り場。餌釣りとルアー・フライの区画を設ける、冬季中心の管理釣り場です。",
    "officialUrl": "https://www.masu.jp/",
    "googleQuery": "北田原ます釣り場 兵庫県",
    "verifiedAt": "2026-09-17",
    "positionNote": "管理釣り場の受付周辺を示します。営業再開時に指定される入川区画を漁協・受付で確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.masu.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E5%8C%97%E7%94%B0%E5%8E%9F%E3%81%BE%E3%81%99%E9%87%A3%E3%82%8A%E5%A0%B4/@34.9148111,135.3581493,17z/data=!3m1!4b1!4m5!3m4!1s0x60005ec3c0e2d51f:0x118acb0ee0e8f368!8m2!3d34.9148332!4d135.3603693"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=21399"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "猪名川町の北田原ます釣り場。餌釣りとルアー・フライの区画を設ける、冬季中心の管理釣り場です。",
      "今季は5月24日で営業終了。再開日と次季ルールを確認し、無断入川・夜釣りはしない。"
    ],
    "caution": [
      "今季は5月24日で営業終了。再開日と次季ルールを確認し、無断入川・夜釣りはしない。"
    ],
    "closed": true,
    "status": "今季は5月24日で営業終了。再開日と次季ルールを確認し、無断入川・夜釣りはしない。"
  },
  {
    "slug": "growth-azuma-farm",
    "name": "あづま養魚場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "群馬県",
    "area": "群馬県",
    "terrain": "pond",
    "lat": 36.543119,
    "lng": 138.92808,
    "fish": [
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "東吾妻のあづま養魚場。湧水で育つニジマスなどを釣る管理池で、時間釣りと釣果の重量による利用を選べます。",
    "officialUrl": "https://fish-azuma.com/",
    "googleQuery": "あづま養魚場 群馬県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://fish-azuma.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%81%82%E3%81%A5%E3%81%BE%E9%A4%8A%E9%AD%9A%E5%A0%B4/@36.543119,138.92808,17z/data=!3m1!4b1!4m6!3m5!1s0x601e6452e3e65a23:0x944b87bc2cd5caa8!8m2!3d36.543119!4d138.92808!16s%2Fg%2F1tg6vsk4?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=134577"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "東吾妻のあづま養魚場。湧水で育つニジマスなどを釣る管理池で、時間釣りと釣果の重量による利用を選べます。",
      "2026年9月14～18日は改修休業の案内。営業再開と受付方法を確認する。"
    ],
    "caution": [
      "2026年9月14～18日は改修休業の案内。営業再開と受付方法を確認する。"
    ],
    "closed": true,
    "status": "2026年9月14～18日は改修休業の案内。営業再開と受付方法を確認する。"
  },
  {
    "slug": "growth-arima-stream",
    "name": "有間渓谷観光釣り場",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "埼玉県",
    "area": "埼玉県",
    "terrain": "river",
    "lat": 35.8764059,
    "lng": 139.1489547,
    "fish": [
      "ニジマス",
      "イワナ"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "飯能の有間渓谷観光釣り場。渓流を区切った管理区画で、放流されたニジマスやイワナを釣ります。",
    "officialUrl": "https://www.arimakeikoku.jp/",
    "googleQuery": "有間渓谷観光釣り場 埼玉県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.arimakeikoku.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E6%9C%89%E9%96%93%E6%B8%93%E8%B0%B7%E8%A6%B3%E5%85%89%E9%87%A3%E3%82%8A%E5%A0%B4/@35.8764059,139.1489547,17z/data=!3m1!4b1!4m6!3m5!1s0x601933d8e6125769:0xaba18fa79da4f295!8m2!3d35.8764059!4d139.1489547!16s%2Fg%2F1tfd70c7?hl=ja&entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=115965"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理された渓流区画",
    "bestFor": [
      "管理された渓流区画"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "飯能の有間渓谷観光釣り場。渓流を区切った管理区画で、放流されたニジマスやイワナを釣ります。",
      "臨時休業の告知があり、9月19日再開予定。再開前は利用せず、増水後の最新案内を確認する。"
    ],
    "caution": [
      "臨時休業の告知があり、9月19日再開予定。再開前は利用せず、増水後の最新案内を確認する。"
    ],
    "closed": true,
    "status": "臨時休業の告知があり、9月19日再開予定。再開前は利用せず、増水後の最新案内を確認する。"
  },
  {
    "slug": "growth-aokiya-achi",
    "name": "青木屋",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "長野県",
    "area": "長野県",
    "terrain": "pond",
    "lat": 35.438581,
    "lng": 137.650414,
    "fish": [
      "アマゴ",
      "イワナ",
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "渓流餌釣り"
    ],
    "methodSlugs": [
      "freshwater-bait"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "阿智村の青木屋。山の水を利用する池で魚を釣り、囲炉裏の焼き魚や食事につなげられる施設です。",
    "officialUrl": "https://aokiya.nagano.jp/",
    "googleQuery": "青木屋 長野県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://aokiya.nagano.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E9%9D%92%E6%9C%A8%E5%B1%8B/@35.4385853,137.6478391,17z/data=!3m1!4b1!4m6!3m5!1s0x601ca4e3f7d850e1:0x952eecf3aa3148a!8m2!3d35.438581!4d137.650414!16s%2Fg%2F1tgdnmsd?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98483"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "阿智村の青木屋。山の水を利用する池で魚を釣り、囲炉裏の焼き魚や食事につなげられる施設です。",
      "9月17日まで平日休業の案内。次の営業日と食事・釣りの受付を確認し、食べる量に合わせて釣る。"
    ],
    "caution": [
      "9月17日まで平日休業の案内。次の営業日と食事・釣りの受付を確認し、食べる量に合わせて釣る。"
    ],
    "closed": true,
    "status": "9月17日まで平日休業の案内。次の営業日と食事・釣りの受付を確認し、食べる量に合わせて釣る。"
  },
  {
    "slug": "growth-wabuka-owagari",
    "name": "和深 地のオワガリ",
    "type": "spot",
    "primaryType": "rock",
    "prefecture": "和歌山県",
    "area": "和歌山県",
    "terrain": "rock",
    "lat": 33.498806,
    "lng": 135.654739,
    "fish": [
      "メジナ",
      "アオリイカ"
    ],
    "fishSlugs": [],
    "methods": [
      "フカセ釣り",
      "エギング"
    ],
    "methodSlugs": [
      "fukase",
      "eging"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "潮位・うねり・風と現地の立入条件を確認",
    "beginner": false,
    "kids": false,
    "note": "和深駅下の海岸に広がる低い地磯。砂と岩礁が混じり、浅い根の際を探る釣り場です。",
    "googleQuery": "和深 地のオワガリ 和歌山県",
    "verifiedAt": "2026-09-17",
    "positionNote": "釣太郎の公開釣り場地図の地点を国土地理院航空写真と照合。現地の立入表示と潮位を優先してください。",
    "sources": [
      {
        "label": "釣太郎：現地写真・釣り場案内",
        "url": "https://tsuttarou.info/%e5%92%8c%e6%b7%b1%ef%bc%88%e3%82%8f%e3%81%b6%e3%81%8b%ef%bc%89%e5%9c%b0%e3%81%ae%e3%82%aa%e3%83%af%e3%82%ac%e3%83%aa/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/d/viewer?mid=1Hj5MuLfykHgZ4xRxNH3X-vz0odc"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "地磯",
    "bestFor": [
      "地磯"
    ],
    "timing": "潮位・うねり・風と現地の立入条件を確認",
    "tips": [
      "和深駅下の海岸に広がる低い地磯。砂と岩礁が混じり、浅い根の際を探る釣り場です。",
      "大潮の満潮時は水没する場所があります。波が低くても潮位と帰路を確認し、増水した小川を渡らない。"
    ],
    "caution": [
      "大潮の満潮時は水没する場所があります。波が低くても潮位と帰路を確認し、増水した小川を渡らない。"
    ]
  },
  {
    "slug": "growth-wabuka-jinoebisu",
    "name": "和深 地のエビス",
    "type": "spot",
    "primaryType": "rock",
    "prefecture": "和歌山県",
    "area": "和歌山県",
    "terrain": "rock",
    "lat": 33.4953,
    "lng": 135.657608,
    "fish": [
      "メジナ",
      "アオリイカ",
      "イシダイ",
      "シマアジ"
    ],
    "fishSlugs": [],
    "methods": [
      "フカセ釣り",
      "エギング"
    ],
    "methodSlugs": [
      "fukase",
      "eging"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "潮位・うねり・風と現地の立入条件を確認",
    "beginner": false,
    "kids": false,
    "note": "和深漁港の外側に伸びる地磯。浅い内向きと潮が当たる外側を、海況に合わせて選びます。",
    "googleQuery": "和深 地のエビス 和歌山県",
    "verifiedAt": "2026-09-17",
    "positionNote": "釣太郎の公開釣り場地図の地点を国土地理院航空写真と照合。現地の立入表示と潮位を優先してください。",
    "sources": [
      {
        "label": "釣太郎：現地写真・釣り場案内",
        "url": "https://tsuttarou.info/%e5%92%8c%e6%b7%b1%ef%bc%88%e3%82%8f%e3%81%b6%e3%81%8b%ef%bc%89%e5%9c%b0%e3%81%ae%e3%82%a8%e3%83%93%e3%82%b9/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/d/viewer?mid=1Hj5MuLfykHgZ4xRxNH3X-vz0odc"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "地磯",
    "bestFor": [
      "地磯"
    ],
    "timing": "潮位・うねり・風と現地の立入条件を確認",
    "tips": [
      "和深漁港の外側に伸びる地磯。浅い内向きと潮が当たる外側を、海況に合わせて選びます。",
      "先端は干潮時の利用を前提に判断。磯入口まで車で入れない区間があり、漁港敷地への無断駐車はしない。"
    ],
    "caution": [
      "先端は干潮時の利用を前提に判断。磯入口まで車で入れない区間があり、漁港敷地への無断駐車はしない。"
    ]
  },
  {
    "slug": "growth-takozaki-kushimoto",
    "name": "田子崎",
    "type": "spot",
    "primaryType": "rock",
    "prefecture": "和歌山県",
    "area": "和歌山県",
    "terrain": "rock",
    "lat": 33.48584,
    "lng": 135.681213,
    "fish": [
      "メジナ",
      "アオリイカ"
    ],
    "fishSlugs": [],
    "methods": [
      "フカセ釣り",
      "エギング"
    ],
    "methodSlugs": [
      "fukase",
      "eging"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "潮位・うねり・風と現地の立入条件を確認",
    "beginner": false,
    "kids": false,
    "note": "串本町田子の平らで低い地磯。隣のクエ床まで岩礁が続き、浅い根回りでアオリイカなどを狙います。",
    "googleQuery": "田子崎 和歌山県",
    "verifiedAt": "2026-09-17",
    "positionNote": "釣太郎の公開釣り場地図の地点を国土地理院航空写真と照合。現地の立入表示と潮位を優先してください。",
    "sources": [
      {
        "label": "釣太郎：現地写真・釣り場案内",
        "url": "https://tsuttarou.info/%e7%94%b0%e5%ad%90%ef%bc%88%e3%81%9f%e3%81%93%ef%bc%89/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/d/viewer?mid=1Hj5MuLfykHgZ4xRxNH3X-vz0odc"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "地磯",
    "bestFor": [
      "地磯"
    ],
    "timing": "潮位・うねり・風と現地の立入条件を確認",
    "tips": [
      "串本町田子の平らで低い地磯。隣のクエ床まで岩礁が続き、浅い根回りでアオリイカなどを狙います。",
      "満潮や波の高い日は磯が水没します。潮が上がりきる前に退出し、波をかぶる予報では入らない。"
    ],
    "caution": [
      "満潮や波の高い日は磯が水没します。潮が上がりきる前に退出し、波をかぶる予報では入らない。"
    ]
  },
  {
    "slug": "growth-tanami-port",
    "name": "田並漁港",
    "type": "spot",
    "primaryType": "port",
    "prefecture": "和歌山県",
    "area": "和歌山県",
    "terrain": "port",
    "lat": 33.485487,
    "lng": 135.708425,
    "fish": [
      "メジナ",
      "アオリイカ",
      "マアジ",
      "クロダイ"
    ],
    "fishSlugs": [],
    "methods": [
      "フカセ釣り",
      "エギング",
      "サビキ釣り"
    ],
    "methodSlugs": [
      "fukase",
      "eging",
      "sabiki"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "串本町田並の漁港。防波堤先端側はアジやアオリイカ、岩礁周りはグレを狙う場所として紹介されています。",
    "googleQuery": "田並漁港 和歌山県",
    "verifiedAt": "2026-09-17",
    "positionNote": "釣太郎の公開釣り場地図の地点を国土地理院航空写真と照合。現地の立入表示と潮位を優先してください。",
    "sources": [
      {
        "label": "釣太郎：現地写真・釣り場案内",
        "url": "https://tsuttarou.info/%e7%94%b0%e4%b8%a6/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/d/viewer?mid=1Hj5MuLfykHgZ4xRxNH3X-vz0odc"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "漁港の釣り可能区域",
    "bestFor": [
      "漁港の釣り可能区域"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "串本町田並の漁港。防波堤先端側はアジやアオリイカ、岩礁周りはグレを狙う場所として紹介されています。",
      "長い防波堤は帰路も含めて判断。作業岸壁・立入表示を優先し、滑る磯や外側へ無理に降りない。"
    ],
    "caution": [
      "長い防波堤は帰路も含めて判断。作業岸壁・立入表示を優先し、滑る磯や外側へ無理に降りない。"
    ]
  },
  {
    "slug": "growth-azashi-port",
    "name": "安指漁港",
    "type": "spot",
    "primaryType": "port",
    "prefecture": "和歌山県",
    "area": "和歌山県",
    "terrain": "port",
    "lat": 33.4898893,
    "lng": 135.6726229,
    "fish": [
      "アオリイカ",
      "メジナ"
    ],
    "fishSlugs": [],
    "methods": [
      "エギング",
      "フカセ釣り"
    ],
    "methodSlugs": [
      "eging",
      "fukase"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "串本町安指の小さな漁港。港口の船道と岩礁が近く、アオリイカやグレを狙う場として紹介されています。",
    "googleQuery": "安指漁港 和歌山県",
    "verifiedAt": "2026-09-17",
    "positionNote": "釣太郎の港案内と航空写真を照合し、港の駐車場ではなく西側防波堤上を表示。立入表示と漁業作業を優先してください。",
    "sources": [
      {
        "label": "釣太郎：現地写真・釣り場案内",
        "url": "https://tsuttarou.info/%e5%ae%89%e6%8c%87%ef%bc%88%e3%81%82%e3%81%96%e3%81%97%ef%bc%89/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/d/viewer?mid=1Hj5MuLfykHgZ4xRxNH3X-vz0odc"
      },
      {
        "label": "国土地理院：位置照合用航空写真",
        "url": "https://maps.gsi.go.jp/#18/33.4898893/135.6726229/&base=seamlessphoto&ls=seamlessphoto&disp=1"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "漁港の釣り可能区域",
    "bestFor": [
      "漁港の釣り可能区域"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "串本町安指の小さな漁港。港口の船道と岩礁が近く、アオリイカやグレを狙う場として紹介されています。",
      "船の進路へ仕掛けを投げない。周辺の低い磯への移動は満潮で退路を失うため、岸壁利用と分けて判断する。"
    ],
    "caution": [
      "船の進路へ仕掛けを投げない。周辺の低い磯への移動は満潮で退路を失うため、岸壁利用と分けて判断する。"
    ]
  },
  {
    "slug": "growth-arita-kushimoto-port",
    "name": "有田漁港（串本町）",
    "type": "spot",
    "primaryType": "port",
    "prefecture": "和歌山県",
    "area": "和歌山県",
    "terrain": "port",
    "lat": 33.4836347,
    "lng": 135.7363307,
    "fish": [
      "マアジ",
      "サヨリ",
      "アオリイカ",
      "メジナ"
    ],
    "fishSlugs": [],
    "methods": [
      "サビキ釣り",
      "エギング",
      "フカセ釣り"
    ],
    "methodSlugs": [
      "sabiki",
      "eging",
      "fukase"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "串本町の有田漁港。港内のアジ・サヨリ釣りと、岩礁に近い外側の釣りで仕掛けを使い分けます。",
    "googleQuery": "有田漁港（串本町） 和歌山県",
    "verifiedAt": "2026-09-17",
    "positionNote": "釣太郎の公開釣り場地図の地点を国土地理院航空写真と照合。現地の立入表示と潮位を優先してください。",
    "sources": [
      {
        "label": "釣太郎：現地写真・釣り場案内",
        "url": "https://tsuttarou.info/%e6%9c%89%e7%94%b0%e6%b8%af/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/d/viewer?mid=1Hj5MuLfykHgZ4xRxNH3X-vz0odc"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "漁港の釣り可能区域",
    "bestFor": [
      "漁港の釣り可能区域"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "串本町の有田漁港。港内のアジ・サヨリ釣りと、岩礁に近い外側の釣りで仕掛けを使い分けます。",
      "有田市の港とは別です。係留船と漁業作業を避け、現地の立入・駐車表示を優先する。"
    ],
    "caution": [
      "有田市の港とは別です。係留船と漁業作業を避け、現地の立入・駐車表示を優先する。"
    ]
  },
  {
    "slug": "growth-kashinozaki-rock",
    "name": "樫野崎 弁天島側",
    "type": "spot",
    "primaryType": "rock",
    "prefecture": "和歌山県",
    "area": "和歌山県",
    "terrain": "rock",
    "lat": 33.4725985,
    "lng": 135.8612332,
    "fish": [
      "メジナ",
      "イサキ"
    ],
    "fishSlugs": [],
    "methods": [
      "フカセ釣り"
    ],
    "methodSlugs": [
      "fukase"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "潮位・うねり・風と現地の立入条件を確認",
    "beginner": false,
    "kids": false,
    "note": "紀伊大島の樫野崎灯台下にある地磯。弁天島側と南向きで風の受け方が変わるため、釣座へ降りる前に海況を確認します。",
    "googleQuery": "樫野崎 弁天島側 和歌山県",
    "verifiedAt": "2026-09-17",
    "positionNote": "釣太郎の公開釣り場地図の地点を国土地理院航空写真と照合。現地の立入表示と潮位を優先してください。",
    "sources": [
      {
        "label": "釣太郎：現地写真・釣り場案内",
        "url": "https://tsuttarou.info/%e6%a8%ab%e9%87%8e%e5%b4%8e/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/d/viewer?mid=1Hj5MuLfykHgZ4xRxNH3X-vz0odc"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "地磯",
    "bestFor": [
      "地磯"
    ],
    "timing": "潮位・うねり・風と現地の立入条件を確認",
    "tips": [
      "紀伊大島の樫野崎灯台下にある地磯。弁天島側と南向きで風の受け方が変わるため、釣座へ降りる前に海況を確認します。",
      "北・北西風を強く受ける釣座があります。灯台周辺の遊歩道と磯への急な降り道を混同しない。"
    ],
    "caution": [
      "北・北西風を強く受ける釣座があります。灯台周辺の遊歩道と磯への急な降り道を混同しない。"
    ]
  },
  {
    "slug": "growth-suezaki-rock",
    "name": "須江崎",
    "type": "spot",
    "primaryType": "rock",
    "prefecture": "和歌山県",
    "area": "和歌山県",
    "terrain": "rock",
    "lat": 33.4493245,
    "lng": 135.8298755,
    "fish": [
      "メジナ",
      "イシダイ",
      "ブリ"
    ],
    "fishSlugs": [],
    "methods": [
      "フカセ釣り",
      "ショアジギング"
    ],
    "methodSlugs": [
      "fukase",
      "shore-jigging"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "潮位・うねり・風と現地の立入条件を確認",
    "beginner": false,
    "kids": false,
    "note": "紀伊大島の須江崎。高岩周辺に深い落ち込みがあり、沖の速い潮と足元の流れを見て釣座を選ぶ地磯です。",
    "googleQuery": "須江崎 和歌山県",
    "verifiedAt": "2026-09-17",
    "positionNote": "釣太郎の公開釣り場地図の地点を国土地理院航空写真と照合。現地の立入表示と潮位を優先してください。",
    "sources": [
      {
        "label": "釣太郎：現地写真・釣り場案内",
        "url": "https://tsuttarou.info/%e9%a0%88%e6%b1%9f%e5%b4%8e/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/d/viewer?mid=1Hj5MuLfykHgZ4xRxNH3X-vz0odc"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "地磯",
    "bestFor": [
      "地磯"
    ],
    "timing": "潮位・うねり・風と現地の立入条件を確認",
    "tips": [
      "紀伊大島の須江崎。高岩周辺に深い落ち込みがあり、沖の速い潮と足元の流れを見て釣座を選ぶ地磯です。",
      "渡船専用の沖磯へ歩いて渡らない。強い流れのときは隣の仕掛けと干渉しやすく、間隔と回収方向を相談する。"
    ],
    "caution": [
      "渡船専用の沖磯へ歩いて渡らない。強い流れのときは隣の仕掛けと干渉しやすく、間隔と回収方向を相談する。"
    ]
  },
  {
    "slug": "growth-makizaki-rock",
    "name": "潮岬 マキ崎",
    "type": "spot",
    "primaryType": "rock",
    "prefecture": "和歌山県",
    "area": "和歌山県",
    "terrain": "rock",
    "lat": 33.4378609,
    "lng": 135.7876575,
    "fish": [
      "メジナ",
      "イシダイ",
      "アオリイカ",
      "ブリ"
    ],
    "fishSlugs": [],
    "methods": [
      "フカセ釣り",
      "エギング",
      "ショアジギング"
    ],
    "methodSlugs": [
      "fukase",
      "eging",
      "shore-jigging"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "潮位・うねり・風と現地の立入条件を確認",
    "beginner": false,
    "kids": false,
    "note": "潮岬のマキ崎。地磯と沖の岩の間に水道が続き、潮の向きに合わせて根際を探る釣り場です。",
    "googleQuery": "潮岬 マキ崎 和歌山県",
    "verifiedAt": "2026-09-17",
    "positionNote": "釣太郎の公開釣り場地図の地点を国土地理院航空写真と照合。現地の立入表示と潮位を優先してください。",
    "sources": [
      {
        "label": "釣太郎：現地写真・釣り場案内",
        "url": "https://tsuttarou.info/%e6%bd%ae%e5%b2%ac%e3%80%80%e3%83%9e%e3%82%ad%e5%b4%8e/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/d/viewer?mid=1Hj5MuLfykHgZ4xRxNH3X-vz0odc"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "地磯",
    "bestFor": [
      "地磯"
    ],
    "timing": "潮位・うねり・風と現地の立入条件を確認",
    "tips": [
      "潮岬のマキ崎。地磯と沖の岩の間に水道が続き、潮の向きに合わせて根際を探る釣り場です。",
      "先端まで岩場を歩きます。明るい時間に退路を確認し、波・風が強まる前に引き返す。"
    ],
    "caution": [
      "先端まで岩場を歩きます。明るい時間に退路を確認し、波・風が強まる前に引き返す。"
    ]
  },
  {
    "slug": "growth-kurezaki-rock",
    "name": "潮岬 クレ崎",
    "type": "spot",
    "primaryType": "rock",
    "prefecture": "和歌山県",
    "area": "和歌山県",
    "terrain": "rock",
    "lat": 33.4331246,
    "lng": 135.7624716,
    "fish": [
      "メジナ",
      "イシダイ",
      "ブリ"
    ],
    "fishSlugs": [],
    "methods": [
      "フカセ釣り",
      "ショアジギング"
    ],
    "methodSlugs": [
      "fukase",
      "shore-jigging"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "潮位・うねり・風と現地の立入条件を確認",
    "beginner": false,
    "kids": false,
    "note": "潮岬南端のクレ崎。先端のトバナや東側の岩礁で、上物・底物・青物を狙う地磯です。",
    "googleQuery": "潮岬 クレ崎 和歌山県",
    "verifiedAt": "2026-09-17",
    "positionNote": "釣太郎の公開釣り場地図の地点を国土地理院航空写真と照合。現地の立入表示と潮位を優先してください。",
    "sources": [
      {
        "label": "釣太郎：現地写真・釣り場案内",
        "url": "https://tsuttarou.info/%e3%82%af%e3%83%ac%e5%b4%8e/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/d/viewer?mid=1Hj5MuLfykHgZ4xRxNH3X-vz0odc"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "地磯",
    "bestFor": [
      "地磯"
    ],
    "timing": "潮位・うねり・風と現地の立入条件を確認",
    "tips": [
      "潮岬南端のクレ崎。先端のトバナや東側の岩礁で、上物・底物・青物を狙う地磯です。",
      "道中の高低差が大きく、初心者向けの遊歩道ではありません。単独や暗い時間を避け、荒天時は入磯しない。"
    ],
    "caution": [
      "道中の高低差が大きく、初心者向けの遊歩道ではありません。単独や暗い時間を避け、荒天時は入磯しない。"
    ]
  },
  {
    "slug": "growth-ginzan-kohan-boat",
    "name": "生野銀山湖（レンタルボート湖畔）",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "兵庫県",
    "area": "兵庫県",
    "terrain": "boat",
    "lat": 35.1910076,
    "lng": 134.8337405,
    "fish": [
      "ブラックバス"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "生野銀山湖のレンタルボート湖畔。湖岸の受付から船を借り、湖上の釣りを計画する拠点です。",
    "officialUrl": "http://sasayuri-net.jp/users/lake-ginzan/ginzan_framepage1.html",
    "googleQuery": "生野銀山湖（レンタルボート湖畔） 兵庫県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://sasayuri-net.jp/users/lake-ginzan/ginzan_framepage1.html"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E7%94%9F%E9%87%8E%E9%8A%80%E5%B1%B1%E6%B9%96%E3%83%AC%E3%83%B3%E3%82%BF%E3%83%AB%E3%83%9C%E3%83%BC%E3%83%88%E6%B9%96%E7%95%94/@35.1909454,134.8315585,17z/data=!3m1!4b1!4m5!3m4!1s0x35554547aed765a7:0xf4feea38ac5168f4!8m2!3d35.1910076!4d134.8337405"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=21458"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "生野銀山湖のレンタルボート湖畔。湖岸の受付から船を借り、湖上の釣りを計画する拠点です。",
      "船種によって貸出時間が異なります。減水時の桟橋と航行範囲、必要な免許・装備を確認する。"
    ],
    "caution": [
      "船種によって貸出時間が異なります。減水時の桟橋と航行範囲、必要な免許・装備を確認する。"
    ]
  },
  {
    "slug": "growth-aono-outdoor-house",
    "name": "青野ダム（アウトドアハウス アオノ）",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "兵庫県",
    "area": "兵庫県",
    "terrain": "boat",
    "lat": 34.9377127,
    "lng": 135.2055463,
    "fish": [
      "ブラックバス",
      "ワカサギ"
    ],
    "fishSlugs": [],
    "methods": [
      "ワカサギ釣り"
    ],
    "methodSlugs": [
      "wakasagi"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "青野ダムのアウトドアハウス・アオノ。予約した貸しボートでバスや季節のワカサギを狙います。",
    "officialUrl": "http://www.outdoorhouse-aono.fishingclub.jp/",
    "googleQuery": "青野ダム（アウトドアハウス アオノ） 兵庫県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://www.outdoorhouse-aono.fishingclub.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%82%A2%E3%82%A6%E3%83%88%E3%83%89%E3%82%A2%E3%83%8F%E3%82%A6%E3%82%B9%E3%82%A2%E3%82%AA%E3%83%8E/@34.9376975,135.2033681,17z/data=!3m1!4b1!4m5!3m4!1s0x60006f5ffe3c8bc7:0xd79c4999aeba995d!8m2!3d34.9377127!4d135.2055463"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=21452"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "青野ダムのアウトドアハウス・アオノ。予約した貸しボートでバスや季節のワカサギを狙います。",
      "ワカサギの陸釣り・撒き餌は禁止の案内。営業期と放流魚の利用条件を受付で確認する。"
    ],
    "caution": [
      "ワカサギの陸釣り・撒き餌は禁止の案内。営業期と放流魚の利用条件を受付で確認する。"
    ]
  },
  {
    "slug": "growth-iruka-miharashi-boat",
    "name": "入鹿池（見晴茶屋）",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "愛知県",
    "area": "愛知県",
    "terrain": "boat",
    "lat": 35.3384906,
    "lng": 136.9910916,
    "fish": [
      "ブラックバス",
      "ワカサギ"
    ],
    "fishSlugs": [],
    "methods": [
      "ワカサギ釣り"
    ],
    "methodSlugs": [
      "wakasagi"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "入鹿池の見晴茶屋。貸しボートでバスやワカサギを狙い、初回は受付で乗降と操船の説明を受けます。",
    "officialUrl": "https://miharashichaya.com/",
    "googleQuery": "入鹿池（見晴茶屋） 愛知県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://miharashichaya.com/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E8%A6%8B%E6%99%B4%E8%8C%B6%E5%B1%8B/@35.3384479,136.9888476,17z/data=!3m1!4b1!4m5!3m4!1s0x600312979bb10869:0xf79af085c79012cd!8m2!3d35.3384906!4d136.9910916"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=21427"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "入鹿池の見晴茶屋。貸しボートでバスやワカサギを狙い、初回は受付で乗降と操船の説明を受けます。",
      "大会などで利用条件が変わる日があります。救命具を着用し、湖面状況と帰着時刻を確認する。"
    ],
    "caution": [
      "大会などで利用条件が変わる日があります。救命具を着用し、湖面状況と帰着時刻を確認する。"
    ]
  },
  {
    "slug": "growth-akiyamakawa-boat",
    "name": "秋山川釣の家",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "神奈川県",
    "area": "神奈川県",
    "terrain": "boat",
    "lat": 35.6078212,
    "lng": 139.1528999,
    "fish": [
      "ブラックバス",
      "ヘラブナ",
      "ワカサギ"
    ],
    "fishSlugs": [],
    "methods": [
      "ワカサギ釣り"
    ],
    "methodSlugs": [
      "wakasagi"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "相模湖の秋山川釣の家。秋山川筋を拠点とした貸しボートで、バスや季節の魚を狙えます。",
    "officialUrl": "https://ameblo.jp/akiyamakawa/",
    "googleQuery": "秋山川釣の家 神奈川県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://ameblo.jp/akiyamakawa/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E7%A7%8B%E5%B1%B1%E5%B7%9D%E9%87%A3%E3%81%AE%E5%AE%B6/@35.6078212,139.1528999,17z/data=!3m1!4b1!4m6!3m5!1s0x6019179c427dbe51:0x68f937a2de437873!8m2!3d35.6078212!4d139.1528999!16s%2Fg%2F11h3qrg08q?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=113939"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "相模湖の秋山川釣の家。秋山川筋を拠点とした貸しボートで、バスや季節の魚を狙えます。",
      "雨の後は濁り・流木・浮遊物が増えます。受付で航行状況と下船時刻を確認し、増水時は無理をしない。"
    ],
    "caution": [
      "雨の後は濁り・流木・浮遊物が増えます。受付で航行状況と下船時刻を確認し、増水時は無理をしない。"
    ]
  },
  {
    "slug": "growth-yamanakako-jupiter",
    "name": "山中湖ジュピター",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "山梨県",
    "area": "山梨県",
    "terrain": "boat",
    "lat": 35.4246589,
    "lng": 138.84912,
    "fish": [
      "ワカサギ"
    ],
    "fishSlugs": [],
    "methods": [
      "ワカサギ釣り"
    ],
    "methodSlugs": [
      "wakasagi"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "山中湖のジュピター。ドーム船でワカサギを狙う利用を予約し、寒い時期も船内から釣りを楽しめます。",
    "officialUrl": "http://www.y-jupiter.jp/",
    "googleQuery": "山中湖ジュピター 山梨県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "http://www.y-jupiter.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%82%B8%E3%83%A5%E3%83%94%E3%82%BF%E3%83%BC/@35.4246632,138.8465451,17z/data=!3m1!4b1!4m6!3m5!1s0x601965a864e6d503:0xe5d4434024887744!8m2!3d35.4246589!4d138.84912!16s%2Fg%2F1tctrqmj?entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=98556"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "山中湖のジュピター。ドーム船でワカサギを狙う利用を予約し、寒い時期も船内から釣りを楽しめます。",
      "船内でも防寒着を用意。予約人数・集合場所・貸し道具の有無を確認し、出船判断に従う。"
    ],
    "caution": [
      "船内でも防寒着を用意。予約人数・集合場所・貸し道具の有無を確認し、出船判断に従う。"
    ]
  },
  {
    "slug": "growth-chatan-seapark-boat",
    "name": "シーパーク北谷",
    "type": "boat",
    "primaryType": "boat",
    "prefecture": "沖縄県",
    "area": "沖縄県",
    "terrain": "boat",
    "lat": 26.3213622,
    "lng": 127.7548057,
    "fish": [],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "北谷町漁協のシーパーク北谷。沖へ出るボートフィッシング体験を、マリンレジャーとは別のコースとして予約できます。",
    "officialUrl": "https://chatan-information-center.co.jp/",
    "googleQuery": "シーパーク北谷 沖縄県",
    "verifiedAt": "2026-09-17",
    "positionNote": "貸しボート・渡船の受付または乗船拠点です。沖の釣座ではありません。乗船場所は予約時に再確認してください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://chatan-information-center.co.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%82%B7%E3%83%BC%E3%83%91%E3%83%BC%E3%82%AF%E5%8C%97%E8%B0%B7/@26.321562,127.7527463,17z/data=!3m1!4b1!4m5!3m4!1s0x34e5130897ec3cfd:0x62905ca7c385116d!8m2!3d26.3213622!4d127.7548057"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=32102"
      }
    ],
    "access": "乗船・受付の場所は予約時に確認。",
    "field": "釣り船・貸しボート・渡船の受付拠点",
    "bestFor": [
      "釣り船・貸しボート・渡船の受付拠点"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "北谷町漁協のシーパーク北谷。沖へ出るボートフィッシング体験を、マリンレジャーとは別のコースとして予約できます。",
      "陸の公園で自由に釣る施設ではありません。乗船条件・年齢条件・集合場所を予約時に確認する。"
    ],
    "caution": [
      "陸の公園で自由に釣る施設ではありません。乗船条件・年齢条件・集合場所を予約時に確認する。"
    ]
  },
  {
    "slug": "growth-golden-shrimp-kanaya",
    "name": "Golden Shrimp（ゴールデンシュリンプ）",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "千葉県",
    "area": "千葉県",
    "terrain": "pond",
    "lat": 35.1797547,
    "lng": 139.818886,
    "fish": [
      "オニテナガエビ"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "富津金谷のゴールデンシュリンプ。屋内でエビを釣る体験と、別予約の貸切海釣り場を扱う施設です。",
    "officialUrl": "https://goldenshrimp.jp/",
    "googleQuery": "Golden Shrimp（ゴールデンシュリンプ） 千葉県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://goldenshrimp.jp/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/Golden+Shrimp+(%E3%82%B4%E3%83%BC%E3%83%AB%E3%83%87%E3%83%B3+%E3%82%B7%E3%83%A5%E3%83%AA%E3%83%B3%E3%83%97)/@35.1797547,139.818886,17z/data=!3m1!4b1!4m6!3m5!1s0x60181b489ee6be0f:0xe6dae60775fc431e!8m2!3d35.1797547!4d139.818886!16s%2Fg%2F11wjqv7lth?hl=ja&entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=135025"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "富津金谷のゴールデンシュリンプ。屋内でエビを釣る体験と、別予約の貸切海釣り場を扱う施設です。",
      "エビ釣りと海釣りで予約・道具・利用場所が異なります。海岸へ直接入らず、希望する体験を受付で伝える。"
    ],
    "caution": [
      "エビ釣りと海釣りで予約・道具・利用場所が異なります。海岸へ直接入らず、希望する体験を受付で伝える。"
    ]
  },
  {
    "slug": "growth-river-runs-tsunokawa",
    "name": "リバーランズ角川",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "滋賀県",
    "area": "滋賀県",
    "terrain": "pond",
    "lat": 35.436331,
    "lng": 135.951873,
    "fish": [
      "ニジマス"
    ],
    "fishSlugs": [],
    "methods": [
      "エリアトラウト"
    ],
    "methodSlugs": [
      "trout-lure"
    ],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "高島市のリバーランズ角川。池でルアー・フライを楽しみ、キャッチ＆リリースで魚とのやり取りを学ぶ施設です。",
    "officialUrl": "https://www.riverruns-tunokawa.net/",
    "googleQuery": "リバーランズ角川 滋賀県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://www.riverruns-tunokawa.net/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%83%AA%E3%83%90%E3%83%BC%E3%83%A9%E3%83%B3%E3%82%BA%E8%A7%92%E5%B7%9D/@35.436331,135.951873,15z/data=!4m9!3m8!1s0x6001eb3b4e107c03:0xdc9c73a6fe1f03e7!5m2!4m1!1i2!8m2!3d35.436331!4d135.951873!16s%2Fg%2F1tjs4vx4?hl=ja&entry=ttu"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=102385"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "高島市のリバーランズ角川。池でルアー・フライを楽しみ、キャッチ＆リリースで魚とのやり取りを学ぶ施設です。",
      "2026年は9月18日にトラウト営業再開予定。再開告知を確認し、バーブレスのシングルフックなど施設規則を守る。"
    ],
    "caution": [
      "2026年は9月18日にトラウト営業再開予定。再開告知を確認し、バーブレスのシングルフックなど施設規則を守る。"
    ],
    "closed": true,
    "status": "2026年は9月18日にトラウト営業再開予定。再開告知を確認し、バーブレスのシングルフックなど施設規則を守る。"
  },
  {
    "slug": "growth-orara-tsuchiyu-ebi",
    "name": "おららのコミセ",
    "type": "spot",
    "primaryType": "fresh",
    "prefecture": "福島県",
    "area": "福島県",
    "terrain": "pond",
    "lat": 37.6821965,
    "lng": 140.3263816,
    "fish": [
      "オニテナガエビ"
    ],
    "fishSlugs": [],
    "methods": [
      "受付で指定する釣法"
    ],
    "methodSlugs": [],
    "guideSlugs": [
      "fishing-map-permission-check",
      "fishing-first-checklist"
    ],
    "season": "営業期間・休業日・当日の実施は公式案内を確認",
    "beginner": false,
    "kids": false,
    "note": "土湯温泉のおららのコミセ。温泉地熱の温水を活用して育てるエビを、屋内で釣って食べる体験ができます。",
    "officialUrl": "https://genkiuptcy.com/%E3%83%9B%E3%83%BC%E3%83%A0-2/oraranokomise/",
    "googleQuery": "おららのコミセ 福島県",
    "verifiedAt": "2026-09-17",
    "positionNote": "公開施設地図の地点を航空写真と照合。場内の使用区画は受付の案内に従ってください。",
    "sources": [
      {
        "label": "施設・地域の利用案内",
        "url": "https://genkiuptcy.com/%E3%83%9B%E3%83%BC%E3%83%A0-2/oraranokomise/"
      },
      {
        "label": "施設・釣り場の位置を確認",
        "url": "https://www.google.com/maps/place/%E3%81%8A%E3%82%89%E3%82%89%E3%81%AE%E3%82%B3%E3%83%9F%E3%82%BB/@37.6821965,140.3263816,17z/data=!3m1!4b1!4m6!3m5!1s0x5f8a99de3b74eb25:0x223f8ff0b9e3bd58!8m2!3d37.6821965!4d140.3263816!16s%2Fg%2F11kgnz6z14?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "label": "ハヤブサ HEAT：施設紹介",
        "url": "https://heat-hayabusa.com/activityspot/?sid=136701"
      }
    ],
    "access": "施設・現地の案内に沿って指定の入口を利用。",
    "field": "管理池・釣り堀",
    "bestFor": [
      "管理池・釣り堀"
    ],
    "timing": "営業期間・休業日・当日の実施は公式案内を確認",
    "tips": [
      "土湯温泉のおららのコミセ。温泉地熱の温水を活用して育てるエビを、屋内で釣って食べる体験ができます。",
      "魚の釣り堀とは異なるエビ釣り体験です。営業枠・調理の受付と持ち帰り条件を確認する。"
    ],
    "caution": [
      "魚の釣り堀とは異なるエビ釣り体験です。営業枠・調理の受付と持ち帰り条件を確認する。"
    ]
  }
];
