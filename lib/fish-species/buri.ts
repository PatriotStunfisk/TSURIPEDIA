import {defineFishSpecies} from './define';

export default defineFishSpecies({
  quest: {"stamina": 95, "runPower": 95, "swimSpeed": 1.8},
  base: {slug:'buri',name:'ブリ',en:'Japanese amberjack',scientific:'Seriola quinqueradiata',season:'秋〜冬',difficulty:4,danger:'低',methods:['ノマセ','ジギング'],areas:['明石','紀北','日本海'],depth:'20〜100m',size:'60〜100cm',desc:'強烈な引きが魅力の大型青物。生き餌を使うノマセ釣りやジギングで狙います。',accent:'#99b9cf',months:[10,11,12,1,2],beginner:false,kids:false},
  detail: {family:'アジ科',genus:'ブリ属',aliases:['ハマチ','メジロ','ワラサ','イナダ'],habitat:'沿岸〜沖合の中層・表層',diet:'アジ、イワシ、サバなどの小魚',behavior:'群れで広く回遊し、ベイトを追って活発に移動する',lifespan:'7〜10年前後',taste:'冬の寒ブリは脂が強く、刺身やしゃぶしゃぶで特に人気',cooking:['刺身','照り焼き','ぶりしゃぶ','ぶり大根','塩焼き'],seasonNote:'秋から冬に大型が狙いやすく、冬は食味も最盛期。',beginnerTip:'ノマセ釣りでは生き餌を弱らせないことが大切。ドラグを適切に設定して、最初の強烈な走りに備える。',safety:'大型は非常に力が強い。船上で暴れる魚やフックによる事故に注意。',body:'紡錘形の強い体と黄色い体側線が特徴。成長に伴い呼び名が変わる代表的な出世魚です。',fishing:'ノマセ釣りとジギングが代表的。明石など潮の速いエリアでは底取りとオマツリ対策が重要です。',trivia:'関西ではツバス→ハマチ→メジロ→ブリなど、地域ごとに成長段階の呼び名が異なります。'},
  launch: {catchPhrase:'一度走れば止まらない。青物の王道。',identify:['体側に明瞭な黄色いライン','太く強い紡錘形の体','目から口元へ黄色味が続くことがある','成長段階で呼び名が変わる出世魚'],imageNotes:['全身：黄色い体側線と厚い魚体','頭部：大型青物らしい強い顎','生息：ベイトを追って沿岸〜沖を回遊','食味：寒ブリは脂が強く、しゃぶしゃぶにも'],related:['ハマチ','カンパチ','ヒラマサ'],methodLinks:[{label:'ノマセ釣り',href:'/methods/nomase'},{label:'ジギング',href:'/methods'}],spotFocus:'明石海峡・紀北・日本海'},
  cooking: {
    prep:['胸びれの後ろから頭を落とし、腹を開いて内臓を取り除く','血合いを冷水で手早く洗い、水気をしっかり拭く','背骨に沿って三枚おろしにし、腹骨と小骨を処理する','刺身・しゃぶしゃぶは皮を引き、加熱料理は用途に合わせて切り身やアラに分ける'],
    recipes:[
      {slug:'sashimi',name:'刺身',image:'/images/buri-sashimi.png',summary:'脂の乗った寒ブリの旨味をそのまま楽しむ王道。',ingredients:['新鮮なブリ 適量','大葉','大根のつま','わさび','醤油'],steps:['三枚おろしにして腹骨と小骨を取り除く','皮を引き、血合い骨を避けて柵にする','食べやすい厚さに切り付ける','冷やした器に盛り、薬味を添える'],tips:['脂の強い腹身とさっぱりした背身を食べ比べる','切る直前まで低温で保つ']},
      {slug:'teriyaki',name:'照り焼き',image:'/images/buri-teriyaki.png',summary:'甘辛いタレを絡め、脂のあるブリを香ばしく仕上げる定番。',ingredients:['ブリ 切り身','醤油','みりん','酒','砂糖'],steps:['切り身の水気を拭く','フライパンで両面を香ばしく焼く','余分な脂を拭き、醤油・みりん・酒・砂糖を加える','タレを煮詰めながらブリに絡めて照りを出す'],tips:['タレは最後に加えると焦げにくい','煮詰めすぎず身をふっくら残す']},
      {slug:'shabu',name:'ぶりしゃぶ',image:'/images/buri-shabu.png',summary:'薄切りのブリをだしにさっとくぐらせ、脂を軽く落として味わう。',ingredients:['刺身用ブリ','昆布だし','白菜','長ねぎ','水菜','きのこ類','ポン酢'],steps:['ブリをしゃぶしゃぶ用に薄く切る','鍋に昆布だしを用意し、野菜を煮る','ブリを箸で持ち、だしに数回くぐらせる','表面が白くなったらポン酢や薬味で食べる'],tips:['火を通しすぎず中心に生感を少し残す','脂の多い腹身は特にしゃぶしゃぶ向き']},
      {slug:'daikon',name:'ぶり大根',image:'/images/buri-daikon.png',summary:'ブリの旨味を大根にたっぷり含ませる冬の定番料理。',ingredients:['ブリ 切り身またはアラ','大根','醤油','酒','みりん','砂糖','しょうが'],steps:['大根を厚めに切って下ゆでする','ブリに熱湯をかけて霜降りし、汚れを落とす','酒・みりん・砂糖・しょうがでブリと大根を煮る','醤油を加え、煮汁をかけながら味を含ませる'],tips:['アラを使うと旨味が濃くなる','一度冷ますと大根に味が入りやすい']}
    ]
  },
  tableGuide:{lead:'脂の乗りを生かす刺身から、火を入れて旨味を引き出す料理まで相性が良い。',dishes:[{name:'刺身',src:'/images/buri-sashimi.png',recipe:'sashimi',desc:'脂の乗った身をそのまま味わう定番。腹身は特に濃厚。'},{name:'照り焼き',src:'/images/buri-teriyaki.png',recipe:'teriyaki',desc:'甘辛いタレと脂の強い身がよく合う王道料理。'},{name:'ぶりしゃぶ',src:'/images/buri-shabu.png',recipe:'shabu',desc:'薄切りをさっと湯にくぐらせ、脂を軽く落として楽しむ。'},{name:'ぶり大根',src:'/images/buri-daikon.png',recipe:'daikon',desc:'ブリの旨味を大根に含ませる冬の定番。'}]},
  featuredOrder:3
});
