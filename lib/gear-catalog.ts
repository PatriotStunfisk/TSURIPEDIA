export type GearProduct={slug:string;brand:string;name:string;kind:'rod'|'reel'|'lure'|'egi';summary:string;specs:Record<string,string>;methods:string[];fish:string[];source:string;relatedGear?:string[];asin?:string;amazonQuery?:string;line:string;query:string;accessory:string;accessoryQuery:string;check:string;image?:{src:string;alt:string;credit:string;permission:string;caption?:string}};
export const gearKindLabels={rod:'ロッド',reel:'リール',lure:'ルアー',egi:'エギ'} as const;
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
    "name": "26 ナスキー C3000",
    "kind": "reel",
    "summary": "餌釣りと岸のルアー釣りを兼用したいときに。ノーマルギアのC3000を、使う道糸から選ぶ。",
    "specs": {
      "自重": "235g",
      "ギア比": "5.0",
      "巻取り長さ": "73cm / ハンドル1回転",
      "PE巻糸量": "1号 400m / 1.5号 270m",
      "ナイロン巻糸量": "3号 150m"
    },
    "methods": [
      "sabiki",
      "choinage",
      "seabass-lure"
    ],
    "fish": [
      "aji",
      "kisu",
      "suzuki"
    ],
    "source": "https://fish.shimano.com/ja-JP/product/reel/hanyouspinning/a075f00003slx0xqac.html",
    "line": "堤防のサビキやちょい投げならナイロン2〜3号、ルアーなら対象魚に合わせたPE＋リーダーを組みます。",
    "query": "釣り ナイロン 3号 150m",
    "accessory": "PEを使うなら下巻きとリーダーを準備。竿の適合糸・ルアー重量と合わせて決めます。",
    "accessoryQuery": "釣り PEライン ハサミ",
    "check": "同名の旧モデルやC3000HGと混同しないよう、商品コード048134・JAN4969363048134を確認します。",
    "image": {
      "src": "/images/gear/shimano-nasci-c3000.webp",
      "alt": "SHIMANO ナスキー C3000シリーズの参考写真",
      "credit": "写真：SHIMANO",
      "permission": "User reports oral permission for product-photo republication on 2026-09-24",
      "caption": "シリーズ参考写真"
    },
    "amazonQuery": "シマノ 26 ナスキー C3000 048134"
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
      "caption": "シリーズ写真・B"
    }
  }

];
export const gearVerifiedAt='2026-09-24';
export function getGearProduct(slug:string){return gearCatalog.find(p=>p.slug===slug)}
export function filterGear(q:{q?:string;brand?:string;kind?:string;method?:string;fish?:string}){const terms=(q.q??'').normalize('NFKC').toLowerCase().trim().split(/\s+/).filter(Boolean);return gearCatalog.filter(p=>(!q.brand||p.brand===q.brand)&&(!q.kind||p.kind===q.kind)&&(!q.method||p.methods.includes(q.method))&&(!q.fish||p.fish.includes(q.fish))&&terms.every(t=>`${p.brand} ${p.name} ${p.summary}`.normalize('NFKC').toLowerCase().includes(t)))}
