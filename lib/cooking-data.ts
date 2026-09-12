export type Recipe={slug:string;name:string;image?:string;summary:string;ingredients:string[];steps:string[];tips:string[]};
export type CookingFish={slug:string;name:string;prep:string[];recipes:Recipe[]};

export const cookingFish:CookingFish[]=[
 {slug:'saba',name:'マサバ',prep:['胸びれの後ろから頭を落とす','腹を開いて内臓を取り、血合いを流水でよく洗う','水気をしっかり拭き、用途に合わせて三枚おろしにする','生食はアニサキス対策を前提にし、目視だけに頼らない'],recipes:[
  {slug:'shimesaba',name:'しめ鯖',image:'/images/fish/saba-shimesaba.png',summary:'塩と酢で脂の甘みを引き締めるサバ料理の定番。',ingredients:['サバ 半身','塩 適量','酢 適量','好みで昆布'],steps:['三枚おろしにして腹骨を取り、身全体に塩を当てる','冷蔵庫で締めたあと塩を洗い、水気を完全に拭く','酢に浸して好みの締まり具合まで置く','薄皮と骨を処理して切り付ける'],tips:['脂が強い個体ほど塩をしっかり当てる','酢に漬けすぎると中心まで白く締まる','家庭での生食は寄生虫リスクへの適切な対策が必要']},
  {slug:'shioyaki',name:'塩焼き',image:'/images/fish/saba-shioyaki.png',summary:'皮を香ばしく、身はふっくら。脂のあるサバほどシンプルな塩焼きが合う。',ingredients:['サバ 切り身','塩 適量'],steps:['切り身の水気を拭く','両面に塩を振って少し置く','出てきた水分を再度拭く','皮目を香ばしく焼き、中まで火を通す'],tips:['焼く前の水分を拭くと臭みが出にくい','強火だけで焦がさず、皮を香ばしく仕上げる']},
  {slug:'misoni',name:'味噌煮',image:'/images/fish/saba-misoni.png',summary:'味噌と生姜で濃厚に仕上げる、ご飯に合う王道料理。',ingredients:['サバ 切り身','味噌','酒','みりん','砂糖','生姜'],steps:['切り身に熱湯をかけて霜降りし、水気を拭く','酒・みりん・砂糖・生姜を煮立ててサバを入れる','落とし蓋をして煮る','味噌を溶き入れ、煮汁をかけながら仕上げる'],tips:['味噌は後半に入れると香りが残る','煮崩れを防ぐため必要以上に触らない']},
  {slug:'tatsutaage',name:'竜田揚げ',image:'/images/fish/saba-tatsutaage.png',summary:'醤油と生姜の下味をつけ、外は香ばしく中はジューシーに。',ingredients:['サバ 切り身','醤油','酒','生姜','片栗粉','揚げ油'],steps:['骨を取り食べやすい大きさに切る','醤油・酒・生姜で下味をつける','汁気を切り片栗粉を薄くまぶす','油で中まで火が通るよう揚げる'],tips:['下味後の汁気を切ると衣がべたつきにくい','小さめに切ると弁当にも使いやすい']}
 ]}
];

export const getCookingFish=(slug:string)=>cookingFish.find(x=>x.slug===slug);
export const getRecipe=(fishSlug:string,recipeSlug:string)=>getCookingFish(fishSlug)?.recipes.find(x=>x.slug===recipeSlug);
