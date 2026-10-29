import {defineFishSpecies} from './define';

export default defineFishSpecies({
  ecologyVisual:{
  "title": "小魚を追って、群れで回遊する",
  "description": "ブリは成長するとアジやイワシなどの小魚を追い、群れで広い海を移動します。岸から釣れるかどうかは餌の群れと回遊次第。同じ堤防でも毎日同じ場所にいる魚ではありません。",
  "alt": "青い海を群れで泳ぐブリの再現画像",
  "image": "/images/ecology/buri-20260919.webp",
  "width": 1200,
  "height": 800,
  "source": {
    "label": "Honda釣り倶楽部：魚種の特徴",
    "url": "https://www.honda.co.jp/fishing/picture-book/buri/"
  }
},
  representativeRecipes: ["sashimi","teriyaki","shabu","daikon"],
  quest: {hook: {kind:'mouth',mouthAnchor:{x:0.025,y:0.55},modelAnchor:{x:0.025,y:0.44999999999999996,z:.5}},methods:['nomase','jigging','shore-jigging'], fightProfile: 'diver', "stamina": 95, "runPower": 95, "swimSpeed": 1.8},
  base: {slug:'buri',name:'ブリ',en:'Japanese amberjack',scientific:'Seriola quinqueradiata',season:'秋〜冬',difficulty:4,danger:'低',methods:['ノマセ','ジギング'],areas:['明石','紀北','日本海'],depth:'20〜100m',size:'60〜100cm',desc:'強烈な引きが魅力の大型青物。生き餌を使うノマセ釣りやジギングで狙います。',accent:'#99b9cf',months:[10,11,12,1,2],beginner:false,kids:false},
  detail: {family:'アジ科',genus:'ブリ属',aliases:['ハマチ','メジロ','ワラサ','イナダ'],habitat:'沿岸〜沖合の中層・表層',diet:'アジ、イワシ、サバなどの小魚',behavior:'群れで広く回遊し、ベイトを追って活発に移動する',lifespan:'7〜10年前後',taste:'冬の寒ブリは脂が強く、刺身やしゃぶしゃぶで特に人気',cooking:['刺身','照り焼き','ぶりしゃぶ','ぶり大根','塩焼き'],seasonNote:'秋から冬に大型が狙いやすく、冬は食味も最盛期。',beginnerTip:'ノマセ釣りでは生き餌を弱らせないことが大切。ドラグを適切に設定して、最初の強烈な走りに備える。',safety:'大型は非常に力が強い。船上で暴れる魚やフックによる事故に注意。',body:'紡錘形の強い体と黄色い体側線が特徴。成長に伴い呼び名が変わる代表的な出世魚です。',fishing:'ノマセ釣りとジギングが代表的。明石など潮の速いエリアでは底取りとオマツリ対策が重要です。',trivia:'関西ではツバス→ハマチ→メジロ→ブリなど、地域ごとに成長段階の呼び名が異なります。'},
  launch: {catchPhrase:'一度走れば止まらない。青物の王道。',identify:['体側に明瞭な黄色いライン','太く強い紡錘形の体','目から口元へ黄色味が続くことがある','成長段階で呼び名が変わる出世魚'],imageNotes:['全身：黄色い体側線と厚い魚体','頭部：大型青物らしい強い顎','生息：ベイトを追って沿岸〜沖を回遊','食味：寒ブリは脂が強く、しゃぶしゃぶにも'],related:['ハマチ','カンパチ','ヒラマサ'],methodLinks:[{label:'ノマセ釣り',href:'/methods/nomase'},{label:'ジギング',href:'/methods/jigging'}],spotFocus:'明石海峡・紀北・日本海'},
  cooking: {
    prepImages: [{"step":2,"src":"/images/preparation/buri-fillet.webp","alt":"ブリを三枚おろしにし、左右の身と中骨を分けた状態"}],
    prep:['胸びれの後ろから頭を落とし、腹を開いて内臓を取り除く','血合いを冷水で手早く洗い、水気をしっかり拭く','背骨に沿って三枚おろしにし、腹骨と小骨を処理する','刺身・しゃぶしゃぶは皮を引き、加熱料理は用途に合わせて切り身やアラに分ける'],
    recipes:[
      {preparation:'raw',slug:'sashimi',name:'刺身',image:'/images/buri-sashimi.png',summary:'脂の乗った寒ブリの旨味をそのまま楽しむ王道。',ingredients:['新鮮なブリ 適量','大葉','大根のつま','わさび','醤油'],steps:['三枚おろしにして腹骨と小骨を取り除く','皮を引き、血合い骨を避けて柵にする','食べやすい厚さに切り付ける','冷やした器に盛り、薬味を添える'],tips:['脂の強い腹身とさっぱりした背身を食べ比べる','切る直前まで低温で保つ']},
      {slug:'teriyaki',
 detail:{"intro": "ブリは脂の多い腹側と比較的あっさりした背側で、フライパンに出る脂の量が変わります。焼く工程とたれを絡める工程を分け、脂を整理してから味を付けると、焦げと脂っぽさを調整しやすくなります。", "checkpoints": [{"title": "たれは先に合わせておく", "body": "まず2切れ分の配合例として、しょうゆ・みりん各大さじ1、砂糖小さじ1/2を合わせます。これは参考資料の配合で、試作で確認した時間・栄養値ではありません。酒でのばす場合は少量ずつ加え、追加後も十分に加熱します。"}, {"title": "焼いた後の脂を拭く", "body": "水気を拭いた切り身を焼き、両面に焼き色が付いたらいったん取り出します。フライパンの余分な脂を紙で拭き、火を弱めて合わせたたれを入れます。油が多いまま注ぐと跳ねやすいため注意します。"}, {"title": "とろみだけを追いかけない", "body": "切り身を戻し、たれを上からかけて絡めます。煮詰まって焦げそうなら少量の水でのばし、中まで十分に加熱してください。たれが濃くなったことと、厚い身の中心に火が通ったことは別に確認します。"}], "troubleshooting": [{"problem": "たれが焦げる", "solution": "焼き始めから砂糖入りのたれを入れず、脂を拭いた後に加えます。煮詰まり始めたら火を弱めます。"}, {"problem": "身がぱさつく", "solution": "照りを出すためだけに長く煮続けないよう、たれの量と火力を調整します。加熱不足のまま取り出すのは避けてください。"}, {"problem": "脂で味がぼやける", "solution": "たれを足す前にフライパンの脂を拭き取ります。しょうゆだけを追加して塩辛くしないようにします。"}], "sources": [{"label": "みんなのきょうの料理：ぶりの照り焼き（配合・調理の参考）", "url": "https://www.kyounoryouri.jp/recipe/19068_ぶりの照り焼き.html"}, {"label": "農林水産省：調理器具と加熱の注意", "url": "https://www.maff.go.jp/j/pr/aff/2212/spe1_02.html"}]},
        "stepImages": [
  {
    "step": 1,
    "src": "/images/cooking/steps/buri-teriyaki-1.svg",
    "alt": "ブリの照り焼き：切り身の水分を拭く",
    "caption": "身の表面をペーパーで押さえる。水分が多いと焼き色が付きにくく、たれも薄まりやすくなる。"
  },
  {
    "step": 2,
    "src": "/images/cooking/steps/buri-teriyaki-2.svg",
    "alt": "ブリの照り焼き：焼き面を固めて返す",
    "caption": "焼き始めに動かし続けず、面が固まってから返す。厚い部分の加熱も確認する。"
  },
  {
    "step": 3,
    "src": "/images/cooking/steps/buri-teriyaki-3.svg",
    "alt": "ブリの照り焼き：脂を拭いてからたれ",
    "caption": "ブリから出た脂が多ければ余分を拭く。たれを入れる時は火力を落とし、はねに注意する。"
  },
  {
    "step": 4,
    "src": "/images/cooking/steps/buri-teriyaki-4.svg",
    "alt": "ブリの照り焼き：たれを絡める",
    "caption": "砂糖入りのたれは焦げやすいので弱火で。スプーンで回しかけ、つやが出たら煮詰めすぎないようにする。"
  }
],name:'照り焼き',image:'/images/buri-teriyaki.png',summary:'甘辛いタレを絡め、脂のあるブリを香ばしく仕上げる定番。',ingredients:['ブリ 切り身','醤油','みりん','酒','砂糖'],steps:['切り身の水気を拭く','フライパンで両面を香ばしく焼く','余分な脂を拭き、醤油・みりん・酒・砂糖を加える','タレを煮詰めながらブリに絡めて照りを出す'],tips:['タレは最後に加えると焦げにくい','煮詰めすぎず身をふっくら残す']},
      {slug:'shabu',name:'ぶりしゃぶ',image:'/images/buri-shabu.png',summary:'薄切りのブリをだしにさっとくぐらせ、脂を軽く落として味わう。',ingredients:['刺身用ブリ','昆布だし','白菜','長ねぎ','水菜','きのこ類','ポン酢'],steps:['ブリをしゃぶしゃぶ用に薄く切る','鍋に昆布だしを用意し、野菜を煮る','ブリを箸で持ち、だしに数回くぐらせる','表面が白くなったらポン酢や薬味で食べる'],tips:['火を通しすぎず中心に生感を少し残す','脂の多い腹身は特にしゃぶしゃぶ向き']},
      {slug:'daikon',name:'ぶり大根',image:'/images/buri-daikon.png',summary:'ブリの旨味を大根にたっぷり含ませる冬の定番料理。',ingredients:['ブリ 切り身またはアラ','大根','醤油','酒','みりん','砂糖','しょうが'],steps:['大根を厚めに切って下ゆでする','ブリに熱湯をかけて霜降りし、汚れを落とす','酒・みりん・砂糖・しょうがでブリと大根を煮る','醤油を加え、煮汁をかけながら味を含ませる'],tips:['アラを使うと旨味が濃くなる','一度冷ますと大根に味が入りやすい']}
    ]
  },
  tableGuide:{lead:'脂の乗りを生かす刺身から、火を入れて旨味を引き出す料理まで相性が良い。',dishes:[{name:'刺身',src:'/images/buri-sashimi.png',recipe:'sashimi',desc:'脂の乗った身をそのまま味わう定番。腹身は特に濃厚。'},{name:'照り焼き',src:'/images/buri-teriyaki.png',recipe:'teriyaki',desc:'甘辛いタレと脂の強い身がよく合う王道料理。'},{name:'ぶりしゃぶ',src:'/images/buri-shabu.png',recipe:'shabu',desc:'薄切りをさっと湯にくぐらせ、脂を軽く落として楽しむ。'},{name:'ぶり大根',src:'/images/buri-daikon.png',recipe:'daikon',desc:'ブリの旨味を大根に含ませる冬の定番。'}]},
  featuredOrder:3
});
