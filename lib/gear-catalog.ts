import expansion from './gear-catalog-expansion.json';
import series from './gear-catalog-series.json';
import reels from './gear-catalog-reels.json';
export type GearProduct={slug:string;brand:string;name:string;kind:GearKind;subtype?:GearSubtype;summary:string;colors?:{name:string;models:string[]}[];specs:Record<string,string>;variants?:{headers:string[];rows:string[][]};methods:string[];fish:string[];source:string;sources?:{label:string;url:string}[];relatedGear?:string[];asin?:string;amazonQuery?:string;line:string;query:string;accessory:string;accessoryQuery:string;check:string;image?:{src:string;alt:string;credit:string;permission:string;caption?:string;flipX?:boolean}};
export const gearKindLabels={rod:'ロッド',reel:'リール',lure:'ルアー',egi:'エギ',line:'ライン',cooler:'クーラー',tool:'小物',rig:'仕掛け・針',storage:'バッグ・ケース',net:'ランディング用品'} as const;
export type GearKind=keyof typeof gearKindLabels;
export const gearSubtypeLabels={minnow:'ミノー',metalJig:'メタルジグ',vibration:'バイブレーション',pencil:'ペンシル',popper:'ポッパー',crank:'クランク',spoon:'スプーン',spinner:'スピナー・スピナーベイト',worm:'ワーム',taiRubber:'タイラバ',otherLure:'その他ルアー',pe:'PEライン',nylon:'ナイロン',fluoro:'フロロカーボン',leader:'リーダー',otherLine:'金属・その他ライン'} as const;
export type GearSubtype=keyof typeof gearSubtypeLabels;
export function getGearSubtype(p:GearProduct):GearSubtype|undefined{return p.subtype??(p.kind==='lure'?(p.slug.startsWith('jackall-bigbacker')?'vibration':'minnow'):undefined)}
export const gearPageSize=24;
export function paginateGear(products:GearProduct[],input:string|undefined){const totalPages=Math.max(1,Math.ceil(products.length/gearPageSize));const n=Number(input);const page=Number.isSafeInteger(n)?Math.min(totalPages,Math.max(1,n)):1;return {page,totalPages,items:products.slice((page-1)*gearPageSize,page*gearPageSize)}}

export const gearCatalog:GearProduct[]=[
  {
    "slug": "daiwa-revros-lt2500d",
    "brand": "DAIWA",
    "name": "24 レブロス LT2500D",
    "kind": "reel",
    "summary": "ナイロンを巻く堤防の餌釣りから、PEを使うエギングまで。深溝スプールの巻糸量を生かしたい人の候補。",
    "specs": {
      "自重": "210g",
      "ギア比": "5.3",
      "巻取り長さ": "75cm / ハンドル1回転",
      "PE巻糸量": "1.2号 300m",
      "ナイロン巻糸量": "12lb 150m"
    },
    "methods": [
      "sabiki",
      "choinage",
      "eging"
    ],
    "fish": [
      "aji",
      "saba",
      "kisu",
      "aoriika"
    ],
    "source": "https://www.daiwa.com/jp/product/hlz949j",
    "asin": "B0DCKBP14Z",
    "line": "エギングならPE0.6〜0.8号＋フロロリーダー2号前後。深溝なので、使う糸の長さに合わせて下巻きを調整します。",
    "query": "エギング PE 0.8号 150m",
    "accessory": "下巻き用ナイロンとPE対応ハサミ。サビキなら道糸をナイロンに替える選択肢もあります。",
    "accessoryQuery": "リール 下巻き ナイロン",
    "check": "LT2500S-XHは浅溝・ハイギアの別仕様です。商品名末尾のDまで照合してください。",
    "image": {
      "src": "/images/gear/daiwa-revros-lt2500d.webp",
      "alt": "DAIWA 24 レブロス LT2500Dの製品写真",
      "credit": "写真：DAIWA",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "caption": ""
    }
  },
  {
    "slug": "daiwa-legalis-lt2500s-xh",
    "brand": "DAIWA",
    "name": "23 レガリス LT2500S-XH",
    "kind": "reel",
    "summary": "細いPEを使う岸のルアー釣りに。軽さと糸ふけの回収速度を重視する2500番の浅溝モデル。",
    "specs": {
      "自重": "185g",
      "ギア比": "6.2",
      "巻取り長さ": "87cm / ハンドル1回転",
      "PE巻糸量": "0.6号 200m / 0.8号 190m"
    },
    "methods": [
      "eging",
      "chinning"
    ],
    "fish": [
      "aoriika",
      "chinu"
    ],
    "source": "https://www.daiwa.com/jp/product/cx5krwk",
    "line": "エギングならPE0.6〜0.8号とフロロ1.75〜2.5号が組み合わせの目安。巻糸量は使うラインの実径でも変わります。",
    "query": "エギング PE 0.6号 200m",
    "accessory": "エギ用スナップとリーダー。ハイギアでは同じハンドル速度でも回収が速いので、巻く速さを調整します。",
    "accessoryQuery": "エギング スナップ リーダー",
    "check": "スプール互換性は番手が同じだけでは判断できません。交換部品はメーカーの適合表で確認してください。",
    "image": {
      "src": "/images/gear/daiwa-legalis-lt2500s-xh.webp",
      "alt": "DAIWA 23 レガリス LT2500S-XHの製品写真",
      "credit": "写真：DAIWA",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "caption": ""
    }
  },
  {
    "slug": "shimano-nasci-c3000",
    "brand": "SHIMANO",
    "name": "ナスキー",
    "kind": "reel",
    "summary": "ナスキーの汎用スピニングシリーズ。小番手と大番手では適した糸量や重さが変わります。堤防の餌釣りとルアーで兼用する場合も、竿の適合ラインを先に確認します。",
    "specs": {
      "メーカー分類": "汎用スピニング",
      "掲載単位": "製品シリーズ"
    },
    "variants": {
      "headers": [
        "番手・型番",
        "ギア比",
        "自重(g)",
        "最大ドラグ(kg)",
        "PE糸巻量(号-m)",
        "ナイロン糸巻量(号-m)",
        "最大巻上長(cm/回転)"
      ],
      "rows": [
        [
          "500",
          "5.6",
          "170",
          "3",
          "0.6-185, 0.8-140, 1-110",
          "1-150, 1.5-90, 2-70",
          "69"
        ],
        [
          "1000",
          "5",
          "205",
          "3",
          "0.8-240, 1-190",
          "1.5-130, 2-100, 2.5-85",
          "66"
        ],
        [
          "C2000S",
          "5",
          "210",
          "3",
          "0.6-150, 0.8-110, 1-80",
          "-",
          "66"
        ],
        [
          "C2000SHG",
          "6",
          "210",
          "3",
          "0.6-150, 0.8-110, 1-80",
          "-",
          "79"
        ],
        [
          "2500",
          "5",
          "235",
          "9",
          "1-320, 1.2-270, 1.5-220",
          "2-170, 2.5-150, 3-120",
          "73"
        ],
        [
          "2500HG",
          "6.2",
          "235",
          "9",
          "1-320, 1.2-270, 1.5-220",
          "2-170, 2.5-150, 3-120",
          "91"
        ],
        [
          "2500SHG",
          "6.2",
          "235",
          "4",
          "0.6-200, 0.8-150, 1-120",
          "-",
          "91"
        ],
        [
          "C3000",
          "5",
          "235",
          "9",
          "1-400, 1.5-270, 2-200",
          "2.5-180, 3-150, 4-100",
          "73"
        ],
        [
          "C3000HG",
          "6.2",
          "235",
          "9",
          "1-400, 1.5-270, 2-200",
          "2.5-180, 3-150, 4-100",
          "91"
        ],
        [
          "4000",
          "4.7",
          "280",
          "11",
          "1-490, 1.5-320, 2-240",
          "3.5-170, 4-150, 5-125",
          "75"
        ],
        [
          "4000XG",
          "6.2",
          "280",
          "11",
          "1-490, 1.5-320, 2-240",
          "3.5-170, 4-150, 5-125",
          "99"
        ],
        [
          "C5000XG",
          "6.2",
          "300",
          "11",
          "1.5-400, 2-300, 3-200",
          "4-190, 5-150, 6-125",
          "105"
        ]
      ]
    },
    "methods": [
      "sabiki",
      "choinage",
      "seabass-lure"
    ],
    "fish": [
      "suzuki"
    ],
    "source": "https://fish.shimano.com/ja-JP/product/reel/hanyouspinning/a075f00003slx0xqac.html",
    "relatedGear": [],
    "line": "巻糸量の表で必要な号数・長さを確認。浅溝と深溝、ナイロンとPEの表示を分けて見ます。",
    "query": "釣り PEライン リーダー",
    "accessory": "下巻き糸、ライン用ハサミ、リールケース。左右ハンドルの仕様は購入する型番で確認します。",
    "accessoryQuery": "釣り リールケース",
    "check": "最大ドラグ力を常用する設定にはしません。結束部の強度と竿の許容範囲に合わせ、実釣前にドラグを調整します。",
    "image": {
      "src": "/images/gear/shimano-nasci-c3000.webp",
      "alt": "SHIMANO ナスキーのシリーズ代表写真",
      "credit": "写真：SHIMANO",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "caption": "シリーズ代表写真"
    },
    "amazonQuery": "シマノ ナスキー"
  },
  {
    "slug": "majorcraft-solpara-spe-832m",
    "brand": "Major Craft",
    "name": "24 ソルパラ SPE-832M",
    "kind": "rod",
    "summary": "3〜3.5号のエギを軸に、堤防からテンポよく探りたいときの8ft3in。取り回しと遠投のバランスから選ぶ一本。",
    "specs": {
      "全長": "8ft3in",
      "継数": "2本",
      "自重": "104g",
      "対応エギ": "2.0〜4.0号",
      "適合PE": "0.4〜1.2号"
    },
    "methods": [
      "eging"
    ],
    "fish": [
      "aoriika",
      "kouika"
    ],
    "source": "https://www.majorcraft.co.jp/rod/new-sp-eging/eging/",
    "line": "PE0.6〜0.8号とフロロリーダー2号前後から検討。エギの号数だけでなく重さ・沈下タイプも確認します。",
    "query": "エギング PE 0.8号 リーダー 2号",
    "accessory": "2500〜3000番のスピニング、エギ用スナップ、着脱しやすいエギケース。高い足場ではタモも必要です。",
    "accessoryQuery": "エギング スナップ エギケース",
    "check": "旧SPXシリーズとは異なるSPE-832Mです。ショア用ロッドなので、船の重いティップラン用エギの適合は別に確認してください。",
    "image": {
      "src": "/images/gear/majorcraft-solpara-spe-832m.webp",
      "alt": "Major Craft 24 ソルパラ SPE-832Mの製品写真",
      "credit": "写真：Major Craft",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "flipX": true,
      "caption": ""
    }
  },
  {
    "slug": "shimano-salty-advance-eging-s86m",
    "brand": "SHIMANO",
    "name": "ソルティーアドバンス EGING S86M（273581）",
    "kind": "rod",
    "summary": "広い範囲を投げて探るエギング用。対応エギとPEを明示して選べる、8ft6inのMパワー。",
    "specs": {
      "全長": "2.59m",
      "継数": "2本",
      "仕舞寸法": "133.2cm",
      "自重": "98g",
      "対応エギ": "2〜4号",
      "適合PE": "0.5〜1号"
    },
    "methods": [
      "eging"
    ],
    "fish": [
      "aoriika",
      "kouika"
    ],
    "source": "https://fish.shimano.com/ja-JP/product/rod/shoresalt/other/a075f00004axuetqap_2.html",
    "line": "PE0.6〜0.8号＋フロロリーダー2号前後を基準に、根の荒さ・エギの重さで調整します。",
    "query": "エギング PE 0.6号 リーダー 2号",
    "accessory": "2500〜3000番のスピニングとエギ用スナップ。イカを抜き上げずに回収できるタモを足場に合わせて選びます。",
    "accessoryQuery": "エギング タモ スナップ",
    "check": "同じソルティーアドバンスでも対象釣法と品番で負荷が違います。商品コード273581を基準に販売ページを照合してください。",
    "image": {
      "src": "/images/gear/shimano-salty-advance-eging-s86m.webp",
      "alt": "SHIMANO ソルティーアドバンス EGING S86Mシリーズの参考写真",
      "credit": "写真：SHIMANO",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "caption": "シリーズ参考写真"
    }
  },
  {
    "slug": "daiwa-lurenist-86ml",
    "brand": "DAIWA",
    "name": "ルアーニスト 86ML",
    "kind": "rod",
    "summary": "専用竿を増やす前に、岸からの軽めのルアー釣りを幅広く試したい人へ。投げる重さを先に決めて選ぶ汎用モデル。",
    "specs": {
      "全長": "2.59m",
      "継数": "2本",
      "仕舞寸法": "134cm",
      "自重": "147g",
      "ルアー重量": "5〜25g",
      "対応エギ": "2.5〜3.5号",
      "適合PE": "0.6〜1.2号"
    },
    "methods": [
      "eging",
      "seabass-lure"
    ],
    "fish": [
      "aoriika",
      "suzuki"
    ],
    "source": "https://www.daiwa.com/jp/product/jif8hho",
    "line": "PE0.8〜1号を起点に、エギングとシーバスでリーダーを使い分けます。ルアーはフック等を含めた総重量を確認します。",
    "query": "釣り PE 1号 150m",
    "accessory": "2500〜3000番のスピニングと用途に合うスナップ。ルアー交換時に使えるプライヤーも用意します。",
    "accessoryQuery": "釣り スナップ プライヤー",
    "check": "86MLは5〜25g対応です。40gのショアジギング用ジグを投げる用途には選びません。",
    "image": {
      "src": "/images/gear/daiwa-lurenist-86ml.webp",
      "alt": "DAIWA シリーズ参考写真（76L）の製品写真",
      "credit": "写真：DAIWA",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "caption": "シリーズ参考写真（76L）"
    }
  }
,

  {
    "slug": "yamashita-egi-oh-k-35",
    "brand": "YAMASHITA",
    "name": "エギ王 K 3.5号",
    "kind": "egi",
    "specs": {
      "サイズ": "3.5号",
      "重量": "22g",
      "沈下速度": "約3秒/m"
    },
    "methods": [
      "eging"
    ],
    "fish": [
      "aoriika",
      "kouika"
    ],
    "source": "https://www.yamaria.co.jp/yamashita/product/detail/522",
    "summary": "沈める時間を数えて、同じ層を探り直すためのベーシックタイプ。シャクリの大きさより、フォール中の糸の変化を見たい場面に。",
    "line": "PE0.6〜0.8号＋フロロリーダー2号前後を起点に、足場と根の荒さで調整。",
    "query": "エギング PE 0.8号 リーダー 2号",
    "accessory": "エギ用スナップ、カンナカバー、エギケース。回収後はカンナの曲がりと付着した藻を確認します。",
    "accessoryQuery": "エギング スナップ ケース",
    "check": "同じ3.5号でもシャロー・ディープは沈下速度が異なります。水深だけでなく潮流と風で沈む時間が変わります。",
    "image": {
      "src": "/images/gear/yamashita-egi-oh-k-35.webp",
      "alt": "YAMASHITA エギ王 K 3.5号 シリーズ写真・金アジ",
      "credit": "写真：YAMASHITA",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "caption": "シリーズ写真・金アジ"
    }
  },
  {
    "slug": "yamashita-egi-oh-k-shallow-35",
    "brand": "YAMASHITA",
    "name": "エギ王 K 3.5号S シャロー",
    "kind": "egi",
    "specs": {
      "サイズ": "3.5号S",
      "重量": "20g",
      "沈下速度": "約6秒/m"
    },
    "methods": [
      "eging"
    ],
    "fish": [
      "aoriika"
    ],
    "source": "https://www.yamaria.co.jp/yamashita/product/detail/523",
    "summary": "浅い藻場や根の上をゆっくり見せて通したいときに。ベーシックより沈下を遅くし、着底前に誘い直す間を取りやすいタイプ。",
    "line": "PE0.6〜0.8号＋フロロ1.75〜2.5号を目安に、風を受ける糸を張りすぎないよう調整。",
    "query": "エギング PE 0.8号 リーダー 2号",
    "accessory": "エギスナップと偏光グラス。藻の上端や沈み根を見ながら、沈める秒数を少しずつ増やします。",
    "accessoryQuery": "エギング スナップ ケース",
    "check": "SとSSは別仕様です。3.5号SSは19.5g・約8秒/mなので、購入時はS表記を確認します。",
    "image": {
      "src": "/images/gear/yamashita-egi-oh-k-shallow-35.webp",
      "alt": "YAMASHITA エギ王 K 3.5号S シャロー 写真上：シャロー／下：スーパーシャロー",
      "credit": "写真：YAMASHITA",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "caption": "写真上：シャロー／下：スーパーシャロー"
    }
  },
  {
    "slug": "megabass-x80sw",
    "brand": "Megabass",
    "name": "X-80SW",
    "kind": "lure",
    "specs": {
      "全長": "80.5mm",
      "重量": "11g",
      "タイプ": "スローシンキング",
      "フック": "#6 ×2"
    },
    "methods": [
      "seabass-lure"
    ],
    "fish": [
      "suzuki"
    ],
    "source": "https://www.megabass.co.jp/site/products/x-80sw/",
    "summary": "港湾の小魚に合わせて、短い移動距離で誘いを入れたいときのミノー。一定速の巻きと短いトゥイッチを切り替えて反応を探ります。",
    "line": "PE0.8〜1.2号＋ナイロンまたはフロロリーダー16〜25lbを目安に、障害物への接触で太さを調整。",
    "query": "釣り PEライン ショックリーダー",
    "accessory": "小型スナップとプライヤー。着水後すぐに巻く場合と少し沈める場合を比べ、底を擦り続けない層を探します。",
    "accessoryQuery": "釣り スナップ プライヤー",
    "check": "11gを気持ちよく投げられるロッドを選びます。ShallowやLBOとは別モデルです。",
    "image": {
      "src": "/images/gear/megabass-x80sw.webp",
      "alt": "Megabass X-80SW GG IWASHI",
      "credit": "写真：Megabass",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "caption": "GG IWASHI"
    }
  },
  {
    "slug": "megabass-x80sw-shallow",
    "brand": "Megabass",
    "name": "X-80SW Shallow",
    "kind": "lure",
    "specs": {
      "全長": "80.5mm",
      "重量": "11g",
      "タイプ": "スローシンキング",
      "フック": "#6 ×2"
    },
    "methods": [
      "seabass-lure"
    ],
    "fish": [
      "suzuki"
    ],
    "source": "https://www.megabass.co.jp/site/products/x-80sw-shallow/",
    "summary": "通常のミノーが底を擦りやすい浅い場所で、表層寄りを探る選択肢。竿先の高さと巻き速度を変え、引ける水深を確かめます。",
    "line": "PE0.8〜1.2号＋リーダー16〜25lbを目安に。太い糸や大きなスナップは泳ぎにも影響します。",
    "query": "釣り PEライン ショックリーダー",
    "accessory": "小型スナップ、プライヤー、フックカバー。暗い場所では針を外す前に手元灯を点けます。",
    "accessoryQuery": "釣り スナップ プライヤー",
    "check": "浅場向けでも沈むルアーです。止めたまま放置せず、障害物に触れる前に回収します。",
    "image": {
      "src": "/images/gear/megabass-x80sw-shallow.webp",
      "alt": "Megabass X-80SW Shallow GG IL IWASHI",
      "credit": "写真：Megabass",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "caption": "GG IL IWASHI"
    }
  },
  {
    "slug": "jackall-bigbacker-107",
    "relatedGear": [],
    "brand": "JACKALL",
    "name": "ビッグバッカー107",
    "kind": "lure",
    "specs": {
      "全長": "107mm",
      "重量": "27g",
      "タイプ": "シンキング",
      "フック": "#8"
    },
    "methods": [
      "shore-jigging",
      "seabass-lure"
    ],
    "fish": [
      "buri",
      "suzuki",
      "sawara"
    ],
    "source": "https://www.jackall.co.jp/saltwater/offshore-casting/products/bigbackermetal/",
    "summary": "堤防から広い範囲を巻いて探る金属バイブレーション。着水後のカウントを変え、表層だけでなく一段下の回遊も探ります。",
    "line": "PE1〜1.5号＋リーダー20〜30lbを起点に、青物のサイズと足場に合わせて調整。",
    "query": "釣り PEライン ショックリーダー",
    "accessory": "強度を合わせたスナップ、プライヤー、タモ。巻き抵抗があるため、竿の適合重量だけでなく引き心地も確認します。",
    "accessoryQuery": "釣り スナップ プライヤー",
    "check": "27gの107と35gの107HW、43gの鰤カスタムを混同しないよう型番を確認。着底させる場所は根掛かりにも注意します。",
    "image": {
      "src": "/images/gear/jackall-bigbacker-107.webp",
      "alt": "JACKALL ビッグバッカー107 シリーズ写真・イワシ／ボーダーホロ",
      "credit": "写真：JACKALL",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "caption": "シリーズ写真・イワシ／ボーダーホロ"
    }
  },
  {
    "slug": "jackall-bigbacker-107-buri",
    "relatedGear": [],
    "brand": "JACKALL",
    "name": "ビッグバッカー107 鰤カスタム",
    "kind": "lure",
    "specs": {
      "全長": "107mm",
      "重量": "43g",
      "タイプ": "シンキング"
    },
    "methods": [
      "shore-jigging"
    ],
    "fish": [
      "buri",
      "sawara"
    ],
    "source": "https://www.jackall.co.jp/saltwater/shore-casting/products/lure/blue-fish/bigbacker107buricustom/",
    "summary": "大型青物を視野に入れた重めのモデル。深い層や遠い潮目へ届かせたい場面で、43gに対応するショアタックルと組みます。",
    "line": "PE2〜3号＋リーダー40〜60lbを目安に、ロッドの適合糸と釣り場の条件を優先します。",
    "query": "釣り PEライン ショックリーダー",
    "accessory": "強度を揃えた接続金具と青物用タモ。足場が高い場合は取り込み手段を先に決めておきます。",
    "accessoryQuery": "釣り スナップ プライヤー",
    "check": "標準107より重い43gです。エギングロッドや軽いシーバスロッドの適合重量を超えないよう確認してください。",
    "image": {
      "src": "/images/gear/jackall-bigbacker-107-buri.webp",
      "alt": "JACKALL ビッグバッカー107 鰤カスタム アルミイワシ",
      "credit": "写真：JACKALL",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "caption": "アルミイワシ"
    }
  },
  {
    "slug": "rapala-countdown-cd7",
    "brand": "Rapala",
    "name": "カウントダウン CD7",
    "kind": "lure",
    "specs": {
      "全長": "7cm",
      "重量": "8g",
      "潜行深度目安": "1.5〜2.4m",
      "フック": "Two No.7"
    },
    "methods": [
      "seabass-lure",
      "trout-lure"
    ],
    "fish": [
      "suzuki",
      "nijimasu"
    ],
    "source": "https://rapala.co.jp/cn4/cn5/cd.html",
    "summary": "着水後に沈める時間を変え、魚のいる層を探りやすい沈むミノー。港湾のシーバスとトラウトで、巻く速さとカウントを使い分けます。",
    "line": "シーバスではPE0.6〜1号＋リーダー12〜20lb、トラウトではナイロン4〜6lb等を釣り場ルールに合わせて検討。",
    "query": "釣り PEライン ショックリーダー",
    "accessory": "小型スナップと針外し。管理釣り場ではフック本数・バーブの規則に合わせた交換が必要な場合があります。",
    "accessoryQuery": "釣り スナップ プライヤー",
    "check": "沈下中も糸を見て根掛かりを避けます。潜行深度は糸の太さや巻き速度で変化し、一定の水深を保証するものではありません。",
    "image": {
      "src": "/images/gear/rapala-countdown-cd7.webp",
      "alt": "Rapala カウントダウン CD7 MTC",
      "credit": "写真：Rapala",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "flipX": true,
      "caption": "MTC"
    }
  },
  {
    "slug": "rapala-countdown-lipless-cdl7",
    "brand": "Rapala",
    "name": "カウントダウン リップレス CDL7",
    "kind": "lure",
    "specs": {
      "全長": "7cm",
      "重量": "8g",
      "タイプ": "リップレス・シンキング"
    },
    "methods": [
      "seabass-lure"
    ],
    "fish": [
      "suzuki"
    ],
    "source": "https://rapala.co.jp/cn4/cn5/cdl.html",
    "summary": "リップ付きミノーより動きを抑えて通したい場面の選択肢。流れに乗せつつ糸ふけを回収し、巻きすぎない誘いを試せます。",
    "line": "PE0.6〜1号＋リーダー12〜20lbを目安に、足元の障害物に応じて太さを調整。",
    "query": "釣り PEライン ショックリーダー",
    "accessory": "小さめのスナップ、プライヤー、フックカバー。流れの向きが変わったら立ち位置から見直します。",
    "accessoryQuery": "釣り スナップ プライヤー",
    "check": "CD7とは形状が異なるCDL7です。同じ重さでも泳ぎと沈み方は同じではないため、足元で動きを確認してから投げます。",
    "image": {
      "src": "/images/gear/rapala-countdown-lipless-cdl7.webp",
      "alt": "Rapala カウントダウン リップレス CDL7 シリーズ写真・B",
      "credit": "写真：Rapala",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "flipX": true,
      "caption": "シリーズ写真・B"
    }
  }

, ...expansion as GearProduct[], ...series as GearProduct[], ...reels as GearProduct[]];
export const gearVerifiedAt='2026-09-24';
export function getGearProduct(slug:string){return gearCatalog.find(p=>p.slug===slug)}
export function filterGear(input:{q?:string;brand?:string;kind?:string;subtype?:string;method?:string;fish?:string}){const q=normalizeGearFilters(input);const terms=(q.q??'').normalize('NFKC').toLowerCase().trim().split(/\s+/).filter(Boolean);return gearCatalog.filter(p=>(!q.brand||p.brand===q.brand)&&(!q.kind||p.kind===q.kind)&&(!q.subtype||getGearSubtype(p)===q.subtype)&&(!q.method||p.methods.includes(q.method))&&(!q.fish||p.fish.includes(q.fish))&&terms.every(t=>`${p.brand} ${p.name} ${p.summary} ${gearKindLabels[p.kind]} ${getGearSubtype(p)?gearSubtypeLabels[getGearSubtype(p)!]:''} ${p.colors?.map(c=>c.name).join(' ')??''} ${p.variants?.rows.map(row=>row[0]).join(' ')??''}`.normalize('NFKC').toLowerCase().includes(t)))}

// Explicit product relationships only: never infer compatibility from a shared fish.
export function selectRelatedGear({method,fish,limit=6}:{method?:string;fish?:string;limit?:number}){
 const candidates=gearCatalog.filter(p=>(!method||p.methods.includes(method))&&(!fish||p.fish.includes(fish)));
 const selected:GearProduct[]=[];
 for(const kind of ['rod','reel','lure','egi','rig','line','tool','cooler','net','storage']){const p=candidates.find(p=>p.kind===kind);if(p)selected.push(p);if(selected.length>=limit)break}
 for(const p of candidates){if(selected.length>=limit)break;if(!selected.includes(p))selected.push(p)}
 return selected;
}

export function gearSubtypesForKind(kind:string){return kind==='lure'||kind==='line'?[...new Set(gearCatalog.filter(p=>p.kind===kind).map(getGearSubtype).filter((id):id is GearSubtype=>!!id))]:[]}
export function normalizeGearFilters<T extends {kind?:string;subtype?:string}>(q:T):T{return {...q,subtype:gearSubtypesForKind(q.kind??'').includes(q.subtype as GearSubtype)?q.subtype:''}}
