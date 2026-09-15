export const japanRegions={
 北海道:['北海道'],東北:['青森県','岩手県','宮城県','秋田県','山形県','福島県'],関東:['茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県'],
 '甲信越・北陸':['新潟県','富山県','石川県','福井県','山梨県','長野県'],東海:['岐阜県','静岡県','愛知県','三重県'],関西:['滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県'],
 中国:['鳥取県','島根県','岡山県','広島県','山口県'],四国:['徳島県','香川県','愛媛県','高知県'],九州:['福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県'],沖縄:['沖縄県']
} as const;
export type JapanRegion=keyof typeof japanRegions;
export type Prefecture=(typeof japanRegions)[JapanRegion][number];
export const prefectures=Object.values(japanRegions).flat();
export function regionForPrefecture(prefecture?:string){return (Object.keys(japanRegions) as JapanRegion[]).find(region=>(japanRegions[region] as readonly string[]).includes(prefecture??''))}
