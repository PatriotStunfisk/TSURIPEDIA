export type GearProduct={slug:string;brand:string;name:string;kind:'rod'|'reel';summary:string;specs:Record<string,string>;methods:string[];fish:string[];source:string;asin?:string;amazonQuery?:string;line:string;query:string;accessory:string;accessoryQuery:string;check:string;image?:{src:string;alt:string;credit:string;permission:string;caption?:string}};
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
];
export const gearVerifiedAt='2026-09-24';
export function getGearProduct(slug:string){return gearCatalog.find(p=>p.slug===slug)}
export function filterGear(q:{q?:string;brand?:string;kind?:string;method?:string;fish?:string}){const terms=(q.q??'').normalize('NFKC').toLowerCase().trim().split(/\s+/).filter(Boolean);return gearCatalog.filter(p=>(!q.brand||p.brand===q.brand)&&(!q.kind||p.kind===q.kind)&&(!q.method||p.methods.includes(q.method))&&(!q.fish||p.fish.includes(q.fish))&&terms.every(t=>`${p.brand} ${p.name} ${p.summary}`.normalize('NFKC').toLowerCase().includes(t)))}
