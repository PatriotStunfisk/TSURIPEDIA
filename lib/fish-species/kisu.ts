import {defineFishSpecies} from './define';

export default defineFishSpecies({
  base:{slug:'kisu',name:'シロギス',en:'Japanese whiting',scientific:'Sillago japonica',season:'5〜10月',difficulty:1,danger:'低',methods:['ちょい投げ','船キス'],areas:['砂浜','湾内'],depth:'2〜30m',size:'15〜30cm',desc:'砂地に暮らす美しい魚。軽い仕掛けで楽しめ、親子の釣りにもおすすめです。',accent:'#e8dfc7',months:[5,6,7,8,9,10],beginner:true,kids:true},
  detail:{family:'キス科',genus:'キス属',aliases:['キス'],habitat:'砂浜・砂底・湾内の浅場',diet:'ゴカイ類、小型甲殻類',behavior:'砂底を群れで移動し、暖かい季節は浅場に寄りやすい',lifespan:'数年程度',taste:'淡白で上品。天ぷらの代表魚として有名',cooking:['天ぷら','刺身','塩焼き','南蛮漬け','昆布締め','フライ'],seasonNote:'初夏から秋に浅場で釣りやすく、盛夏は数釣りを楽しみやすい。',beginnerTip:'ちょい投げなら遠投は不要。仕掛けをゆっくり引いて、底の変化を探すと釣果が上がりやすい。',safety:'大きな危険は少ないが、針外し時のケガに注意。',body:'細長く透明感のある美しい魚体。砂地に適応した体色をしています。',fishing:'浜や堤防からの投げ釣り、ボートや船の天秤仕掛けが定番。軽いタックルでも楽しめます。',trivia:'「海の女王」と呼ばれることもあり、魚体の美しさと食味の良さで人気があります。'},
  launch:{catchPhrase:'砂浜の女王。軽い仕掛けで楽しむ。',identify:['細長くスマートな体型','体色は淡い黄褐色〜銀白色','口が小さく、砂底の小動物を食べる','透明感のある上品な魚体'],imageNotes:['全身：細身で淡い体色を確認','口元：小さな口と砂底適応を確認','生息：砂底の浅場を群れで移動','食味：天ぷらの代表魚'],related:['メゴチ','ハゼ','カレイ'],methodLinks:[{label:'ちょい投げ',href:'/methods'},{label:'船キス',href:'/methods'}],spotFocus:'砂浜・湾内・ボート釣り'},
  cooking:{
    prep:['ウロコを軽く落とし、胸びれの後ろから頭を落とす','腹を開いて内臓を取り、冷水で手早く洗って水気をしっかり拭く','天ぷらは背開きまたは腹開きにして中骨を外し、尾を残す','刺身は三枚おろしにして腹骨と小骨を取り、皮を引いて食べやすく切る'],
    recipes:[
      {slug:'tempura',name:'天ぷら',image:'/images/kisu-tempura.png',summary:'ふわっと軽い白身を楽しむ、シロギス料理の王道。',ingredients:['シロギス','天ぷら粉または薄力粉','冷水','揚げ油','塩または天つゆ'],steps:['背開きにして中骨を外し、水気を拭く','冷たい衣を薄くまとわせる','170〜180℃の油で衣が軽く色づくまで揚げる','油を切り、熱いうちに塩や天つゆで食べる'],tips:['衣を混ぜすぎない','小型で身が薄いので揚げすぎない']},
      {slug:'sashimi',name:'刺身',image:'/images/kisu-sashimi.png',summary:'良型の新鮮なシロギスならではの、繊細な甘みと透明感を楽しむ。',ingredients:['刺身用シロギス','大葉','わさび','醤油'],steps:['三枚おろしにして腹骨と小骨を取る','皮を引き、水分をしっかり拭く','小さな身に合わせて薄めに切り付ける','冷やした器に盛り薬味を添える'],tips:['身が小さいので厚く大ぶりに切らない','鮮度管理と生食上の安全対策を徹底する']},
      {slug:'shioyaki',name:'塩焼き',image:'/images/kisu-shioyaki.png',summary:'良型を丸ごと香ばしく焼き、上品な白身の香りを味わう。',ingredients:['シロギス','塩','好みでレモン・大根おろし'],steps:['ウロコと内臓を処理し水気を拭く','全体に軽く塩を振る','グリルで両面を香ばしく焼く','中まで火が通ったら盛り付ける'],tips:['水分をよく拭くと皮が香ばしくなる','小型は火が入りやすいので焼きすぎない']},
      {slug:'nanbanzuke',name:'南蛮漬け',image:'/images/kisu-nanbanzuke.png',summary:'揚げたシロギスを甘酸っぱい南蛮酢に漬け、野菜と一緒にさっぱり楽しむ。',ingredients:['シロギス','玉ねぎ','にんじん','酢','醤油','砂糖','唐辛子','片栗粉または薄力粉','揚げ油'],steps:['シロギスを下処理し水気を拭いて薄く粉をまぶす','油でカラッと揚げる','酢・醤油・砂糖を合わせた南蛮酢に玉ねぎとにんじんを加える','揚げたてのシロギスを漬け、味をなじませる'],tips:['小型は骨まで食べやすい','冷蔵庫で少し休ませると味がなじむ']}
    ]
  },
  tableGuide:{lead:'クセの少ない繊細な白身。軽い火入れや揚げ物で上品な甘みが出る。',dishes:[{name:'天ぷら',src:'/images/kisu-tempura.png',recipe:'tempura',desc:'ふわっとした白身を楽しめるシロギス料理の王道。'},{name:'刺身',src:'/images/kisu-sashimi.png',recipe:'sashimi',desc:'良型で鮮度が良ければ繊細な甘みを生食で楽しめる。'},{name:'塩焼き',src:'/images/kisu-shioyaki.png',recipe:'shioyaki',desc:'良型はシンプルな塩焼きでも身の香りが立つ。'},{name:'南蛮漬け',src:'/images/kisu-nanbanzuke.png',recipe:'nanbanzuke',desc:'小型も食べやすく、数釣りした時にも向く。'}]},
  featuredOrder:4
});
