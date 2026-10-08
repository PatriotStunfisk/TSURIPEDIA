import type {GuideArticle} from './guide-articles';

export const purchaseCompatibilityGuides:GuideArticle[]=[
 {
  slug:'electric-reel-boat-power-or-battery',title:'電動リールのバッテリーは買うべき？船電源・レンタルと比べる',
  query:'電動リール バッテリー 船電源 レンタル 選び方 電圧',category:'道具の適合・比較',
  summary:'船電源があればバッテリーは不要とは限らない。電圧・端子・釣行頻度を比較して、購入前に確認する順番を整理する。',
  answer:'初回は船宿に電源設備と貸しバッテリーを確認する。持参品を買う場合は、容量より先にリールの指定電圧・対応電源・コードの適合を合わせる。端子がつながるだけでは使用可能とは判断できない。',
  inheritContext:false,editorial:{articleType:'QUICK GUIDE',topic:'tackle',gearTags:['reel','tools'],parentGuide:'tachiuo-tenya-reel-choice'},
  buying:{kind:'tool',method:'tachiuo-tenya',query:'電動リール 専用 バッテリー'},
  verifiedAt:'2026-10-08',sources:[{label:'シマノ：電動リールQ&A',url:'https://fish.shimano.com/ja-JP/content/special_contents/dendo-reel/qa.html'}],
  sections:[
   {heading:'予約時に聞く3つのこと',body:'「電源はある？」だけで終わらせず、釣り座ごとの設備と接続方法まで聞く。',steps:[{title:'リールの型番を伝える',body:'メーカー・型番・釣り物を伝え、船電源が使えるか確認する。古いコードを使うならコードの品番も控える。'},{title:'貸出条件を確認する',body:'貸しバッテリーの有無、予約の必要性、料金、付属コードを確認する。船に電源があっても持参推奨の場合がある。'},{title:'持ち込み荷物を決める',body:'専用充電器、保護ケース、予備コードの必要性を整理する。船の通路を横断しない位置に置けるかも確認する。'}]},
   {heading:'船電源・レンタル・購入を比較',body:'年に何回使うかに加え、充電・運搬・保管を自分で続けられるかを判断する。',table:{headers:['選択肢','向く状況','先に確認'],rows:[['船電源','船宿が使用を案内している','指定電圧・端子・対応コード'],['レンタル','初回や年数回の釣行','在庫予約・料金・コード付属'],['持参バッテリー','複数の船で繰り返し使う','適合・充電器・重さ・持続時間']],caption:'電源を決める比較表'}},
   {heading:'容量の数字だけで選ばない',body:'同じAh表記でも、電圧・電池の種類・リールの負荷によって使い方は変わる。「大容量だから何でも使える」「これで必ず一日もつ」とは考えない。メーカーの対応表と、自分のリールの取扱説明書を先に読む。',points:['リールの型番と使用可能電源を照合','対応するコードと専用充電器を確認','製品重量と保管方法を確認']},
   {heading:'購入を急ぐ前の結論',body:'船宿の設備で足りるなら、最初から買い足さなくてもよい。購入する場合は、適合確認後に同じ型番・付属品の条件をそろえて比較する。船の高電圧電源への直結や自己流の配線変更は行わない。'}
  ],related:[{label:'船タチウオのリール選び',href:'/guide/tachiuo-tenya-reel-choice'},{label:'タチウオテンヤの仕掛け',href:'/methods/tachiuo-tenya'},{label:'釣具図鑑で適合を確認',href:'/gear'},{label:'タチウオを知る',href:'/fish/tachiuo'}]
 },
 {
  slug:'cooler-inner-length-not-liters',title:'クーラーは何Lより内寸？魚が入らない買い物を防ぐ測り方',
  query:'釣り クーラーボックス 内寸 魚 入らない 長さ 容量 選び方',category:'道具の適合・比較',
  summary:'容量・内寸・外寸の役割を分け、魚・氷・運搬場所が収まるクーラーを選ぶ。カタログの数字から失敗を減らす比較表。',
  answer:'Lは総容量で、魚をまっすぐ置ける長さではない。対象魚の全長とクーラーの内寸を比べ、氷・魚袋・仕切りを置いた後の空間を見積もる。車やキャリーに載るかは外寸で確認する。',
  inheritContext:false,editorial:{articleType:'QUICK GUIDE',topic:'tackle',gearTags:['cooler'],parentGuide:'fishing-first-checklist'},
  buying:{kind:'cooler',query:'釣り クーラーボックス 内寸 ロング'},
  verifiedAt:'2026-10-08',sources:[{label:'ダイワ：ライトトランクαの製品仕様',url:'https://www.daiwa.com/jp/product/2023/05/09/08/17/twjlq4i'},{label:'ダイワ：クールラインの製品仕様',url:'https://www.daiwa.com/jp/product/2023/05/09/08/15/6s1pifi'}],
  sections:[
   {heading:'容量・内寸・外寸を混同しない',body:'細長い魚1尾と、小魚を多数持ち帰る釣りでは必要な形が違う。まず釣る魚と持ち帰る量を決める。',table:{caption:'仕様表で見る数字',headers:['数字','判断できること','判断できないこと'],rows:[['容量（L）','箱全体の収納量の目安','長い魚がまっすぐ入るか'],['内寸','魚と保冷材を置く空間','車内や収納棚に収まるか'],['外寸','運搬・収納時の大きさ','蓋や持ち手を動かす余白'],['本体重量','空の状態の重さ','氷と釣果を入れた運搬重量']]}},
   {heading:'通販で買う前に自宅で再現する',body:'メジャーと紙で確認できる。写真の見た目や「青物用」という商品名だけに頼らない。',steps:[{title:'底面の大きさを紙で作る',body:'仕様表の内寸を確認し、幅と奥行きを紙に描く。角の丸みや底すぼまりで実際に使える範囲は狭くなる場合がある。'},{title:'氷の置き場を先に取る',body:'使う保冷剤や板氷の寸法を紙の上に置き、魚袋と魚を収める空間を確認する。氷を減らして無理に魚を詰める前提にはしない。'},{title:'移動時の重さを試す',body:'本体だけでなく、氷・魚・飲料を加えた状態を想像する。持ち上げられるかだけでなく、駅や駐車場まで歩けるかで判断する。'}]},
   {heading:'斜めにすれば入る、だけでは決めない',body:'計算上の対角線が魚より長くても、魚の厚み・尾・氷・内壁の形がある。大きい魚を毎回ぎゅうぎゅうに詰めるなら、長い底面の箱を検討する。たまの大物のために、毎回運べない箱へ買い替える必要はない。'},
   {heading:'最後に比較する3項目',body:'同じ容量の製品を並べても、形や重さは同じではない。候補を絞ってから販売先で型番とサイズ表を再確認する。',points:['対象魚の全長と内寸の長辺','保冷材を置いた後の空間','外寸・総重量と自分の移動手段']}
  ],related:[{label:'2人の釣果をまとめるクーラー選び',href:'/guide/cooler-two-people-one-box'},{label:'氷と保冷剤の置き場',href:'/guide/cooler-ice-block-space'},{label:'クーラーを釣具図鑑で比較',href:'/gear'},{label:'持ち帰った魚の料理',href:'/cooking'}]
 }
];
