import {defineFishSpecies} from './define';

export default defineFishSpecies({
  fieldNotes: [{"heading":"釣れた針が棚の手掛かり","body":"サビキの上針に続けて掛かるなら、仕掛け全体を少し上へ。下針なら少し下へ寄せる。道糸の目印や竿先からの長さを覚え、次の投入でも同じ層へ戻す。"},{"heading":"水面の群れと狙う魚を分ける","body":"水面の小魚がすべてアジとは限らない。尾の硬いゼイゴなどで種類を確認。見える群れにこだわらず、その下の層も探る。"},{"heading":"持ち帰りは量を先に決める","body":"食べ切れる分を確保したら、氷と保冷スペースが足りるか確認。釣れた順に冷やし、帰宅後は小型を南蛮漬け、開ける大きさをフライなどに分けると下処理を進めやすい。"}],
  ecologyVisual: {
  "title": "群れで泳ぐ、岸近くの回遊魚",
  "description": "マアジは群れをつくって岸近くから沖合を回遊し、沿岸に定着するものもいます。釣りでは同じ場所でも群れが通る水深を探すのが手掛かり。一匹釣れたら、その棚を覚えておきましょう。",
  "alt": "青緑色の沿岸の海を群れで泳ぐマアジの再現画像",
  "source": {
    "label": "葛西臨海水族園：マアジ",
    "url": "https://www.tokyo-zoo.net/kasai/encyclopedia/japanese-jack-mackerel/index.html"
  },
  "image": "/images/ecology/aji-20260919.webp",
  "width": 1200,
  "height": 800
},
  representativeRecipes: ["sashimi","shioyaki","aji-fry","namero"],
  quest: {hook: {kind:'mouth',mouthAnchor:{x:0.025,y:0.52},modelAnchor:{x:0.025,y:0.48,z:.5}},"swimSpeed": 1.1, "stamina": 45, "runPower": 25, "wariness": 0.1},
  base: {
    slug: 'aji', name: 'マアジ', en: 'Japanese horse mackerel', scientific: 'Trachurus japonicus',
    season: '5〜11月', difficulty: 1, danger: '低', methods: ['サビキ','アジング','船釣り'],
    areas: ['全国の港','大阪湾'], depth: '5〜100m', size: '15〜40cm',
    desc: '家族釣りの定番。群れに当たれば数釣りが楽しめ、食味も非常に良い魚です。',
    accent: '#a7d8de', months: [5,6,7,8,9,10,11], beginner: true, kids: true
  },
  detail: {
    family: 'アジ科', genus: 'マアジ属', aliases: ['アジ','ホンアジ'],
    habitat: '沿岸の岩礁・港湾・沖合の中層', diet: 'プランクトン、小型甲殻類、小魚',
    behavior: '群れで回遊し、朝夕に活性が上がりやすい', lifespan: 'およそ5〜7年',
    taste: '脂と旨味のバランスが良く、生食から加熱料理まで万能',
    cooking: ['刺身','塩焼き','アジフライ','なめろう','たたき','南蛮漬け'],
    seasonNote: '地域差はあるが、沿岸では春から秋に釣りやすく、初夏〜秋は数釣りも期待しやすい。',
    beginnerTip: 'まずは堤防のサビキ釣りがおすすめ。群れが入っていれば、棚を合わせるだけでも釣果につながりやすい。',
    safety: 'ゼイゴや背びれで手を傷つけることがあるので、魚つかみがあると安心。',
    body: '尾びれの付け根に硬いウロコ「ゼイゴ」が並ぶのが特徴。体側には黄色みを帯びた線が見えることがあります。',
    fishing: 'サビキ、アジング、船の胴突きなど釣り方が多く、初心者から上級者まで楽しめる代表的なターゲットです。',
    trivia: '同じマアジでも、回遊型と居着き型では体形や脂の乗り方が異なるといわれます。'
  },
  launch: {
    catchPhrase: '身近で、奥深い。海釣りの入口。',
    identify: ['尾の付け根に硬いゼイゴが並ぶ','体側に黄色味のある線が見えることがある','胸びれが比較的長い','細身でよく泳ぐ回遊魚らしい体型'],
    imageNotes: ['全身：ゼイゴと体側線を確認','尾部：マアジ特有のゼイゴを拡大','生息：港湾から沖の中層を群れで回遊','食味：刺身・塩焼き・フライ・なめろうまで万能'],
    related: ['マサバ','マイワシ','メバル'],
    methodLinks: [{label:'サビキ釣り',href:'/methods/sabiki'},{label:'アジング',href:'/methods'},{label:'船の胴突き',href:'/methods'}],
    spotFocus: '大阪湾・和歌山・全国の港'
  },
  cooking: {
    prepImages: [{"step":0,"src":"/images/preparation/aji-scutes.webp","alt":"マアジの尾側にある硬いゼイゴを薄くそぎ取る工程"}],
    prep: ['ゼイゴを尾から頭方向へ薄くそぎ取り、胸びれの後ろから頭を落とす','腹を開いて内臓を取り、血合いを冷水で手早く洗って水気をしっかり拭く','背骨に沿って包丁を入れ、三枚おろしにして腹骨をすき取る','刺身やなめろうは小骨を抜き、加熱料理は用途に合わせて開きや切り身にする'],
    recipes: [
      {preparation:'raw',slug:'sashimi',name:'刺身',image:'/images/aji-sashimi-new.png',summary:'鮮度の良いマアジの甘みと旨味をまっすぐ楽しむ定番。',ingredients:['新鮮なマアジ 適量','大葉','大根のつま','しょうが・ねぎ','醤油'],steps:['三枚おろしにして腹骨と小骨を取り除く','皮を引くか、好みで銀皮を残して食べやすい厚さに切る','冷やした器に盛り付け、薬味を添える','食べる直前まで低温で保つ'],tips:['水分をよく拭くと味がぼやけにくい','よく切れる包丁で身をつぶさずに切る','生食は鮮度管理と寄生虫リスクへの対策を前提にする']},
      {slug:'shioyaki',name:'塩焼き',image:'/images/aji-shioyaki.png',summary:'香ばしい皮とふっくらした身をシンプルに味わう。',ingredients:['マアジ 1尾または切り身','塩 適量','好みで大根おろし・レモン'],steps:['ウロコと内臓を処理し、水気をよく拭く','両面に塩を振り10〜15分ほど置く','出てきた水分を拭き、グリルやフライパンで焼く','皮を香ばしく、中まで火を通して仕上げる'],tips:['焼く前に水気を拭くと臭みが出にくい','良型は開かず丸ごと焼いても旨味を逃しにくい']},
      {slug:'aji-fry',
        "stepImages": [
  {
    "step": 1,
    "src": "/images/cooking/steps/aji-aji-fry-1.svg",
    "alt": "マアジのアジフライ：開いた身の骨を取る",
    "caption": "背開きでも三枚おろしでも、腹骨と残った小骨を確かめてから衣を付ける。"
  },
  {
    "step": 2,
    "src": "/images/cooking/steps/aji-aji-fry-2.svg",
    "alt": "マアジのアジフライ：粉 → 卵 → パン粉",
    "caption": "粉を厚く残すと衣がはがれやすくなる。余分な粉を落とし、パン粉は軽く押さえる。"
  },
  {
    "step": 3,
    "src": "/images/cooking/steps/aji-aji-fry-3.svg",
    "alt": "マアジのアジフライ：少量ずつ揚げる",
    "caption": "一度に入れすぎると油温が下がる。衣の色だけでなく厚い身まで加熱できたことを確認する。"
  },
  {
    "step": 4,
    "src": "/images/cooking/steps/aji-aji-fry-4.svg",
    "alt": "マアジのアジフライ：重ねず油を切る",
    "caption": "揚げたてを重ねると蒸気で衣が湿る。網に少し立てかけるように置く。"
  }
],name:'アジフライ',image:'/images/aji-fry-new.png',summary:'ふっくらした身とサクサク衣を楽しむアジ料理の王道。',ingredients:['マアジ 1〜2尾','塩・こしょう','薄力粉','卵','パン粉','揚げ油','好みでタルタルソース'],steps:['アジを背開きまたは三枚おろしにして骨を取り除く','軽く塩こしょうをして薄力粉・卵・パン粉の順に衣をつける','170〜180℃の油で両面をきつね色に揚げる','油を切り、熱いうちに盛り付ける'],tips:['衣をつける前に表面の水分を拭く','揚げすぎず身のふっくら感を残す']},
      {preparation:'raw',slug:'namero',name:'なめろう',image:'/images/aji-namero-new.png',summary:'味噌と薬味でたたき、アジの旨味を濃厚に楽しむ漁師料理。',ingredients:['刺身用マアジ','味噌','しょうが','長ねぎまたは青ねぎ','大葉'],steps:['三枚おろしにして皮と骨を除く','身を粗く刻み、しょうが・ねぎ・大葉を加える','味噌を加えて包丁で好みの粗さまでたたく','器に盛り、そのまままたはご飯にのせて食べる'],tips:['たたきすぎず少し身の食感を残すと食べ応えが出る','味噌は魚の量に合わせて少しずつ加える','生食は鮮度管理を徹底する']}
    ]
  },
  tableGuide: {
    lead: '脂と旨味のバランスが良く、生でも焼いても揚げても強い万能魚。',
    dishes: [
      {name:'刺身',src:'/images/aji-sashimi-new.png',recipe:'sashimi',desc:'鮮度の良い身の甘みと旨味をそのまま味わう。'},
      {name:'塩焼き',src:'/images/aji-shioyaki.png',recipe:'shioyaki',desc:'皮を香ばしく焼き、ふっくらした身を楽しむ。'},
      {name:'アジフライ',src:'/images/aji-fry-new.png',recipe:'aji-fry',desc:'サクサク衣とやわらかな身の王道コンビ。'},
      {name:'なめろう',src:'/images/aji-namero-new.png',recipe:'namero',desc:'味噌と薬味でアジの旨味を濃厚に引き出す。'}
    ]
  },
  featuredOrder: 1
});
