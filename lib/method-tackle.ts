import {getMethod} from './method-registry';
import {amazonSearchUrl,tackleSearchTerms} from './affiliate-products';

export type TacklePart={label:string;note:string;icon:'line'|'float'|'swivel'|'weight'|'hook'|'lure'|'basket';branch?:string};
export type TackleRig={variant:string;parts:TacklePart[];caution:string;leaderInRig?:boolean};
const part=(label:string,note:string,icon:TacklePart['icon'],branch?:string):TacklePart=>({label,note,icon,branch});
const snap=part('スナップ','結束したら開閉と強度を確認','swivel');
const branchRig=(bait:string)=>[part('スナップ付きサルカン','仕掛け上端へ接続','swivel'),part('幹糸 → 枝ス → 針',bait,'hook','枝針'),part('一番下にオモリ','仕掛けの下端に接続。船では指定号数','weight')];
const jigRig=[part('ソリッドリング','リーダーを結ぶ。結び目を割れ目へ掛けない','swivel'),part('スプリットリング → メタルジグ','アシストフックは上部リングへ。製品の接続図も確認','lure','アシストフック')];
export const tackleRigs:Record<string,TackleRig>={
 'sayori-uki':{variant:'小型ウキ・1本針',leaderInRig:true,parts:[part('小型ウキ / シモリウキ','道糸へ取り付け、完成仕掛けの固定方法を守る','float'),part('接続部 → ハリス','必要な小オモリで浮力を調整。付け餌は浅い層へ','swivel'),part('サヨリ針 ＋ 小さな付け餌','長い下あごの先ではなく小さな口へ餌を入れる','hook')],caution:'遠投カゴ式とは別の例です。投げる負荷と、まき餌の可否を確認。'},
 'ishidai-bottom':{variant:'遊動オモリの底物仕掛け',leaderInRig:true,parts:[part('遊動オモリ → 保護ビーズ','道糸を通す向きと負荷を確認','weight'),part('サルカン → 専用ハリス','ワイヤー等は製品指定の接続方法を守る','swivel'),part('イシダイ針 ＋ 貝・ウニ餌','専用針へ餌を固定する','hook')],caution:'磯の条件で仕掛けは変わります。経験者の案内と製品説明を優先。'},
 nage:{variant:'力糸・天秤の投げ仕掛け',leaderInRig:true,parts:[part('力糸','投擲時の負荷を受ける。傷と結束を確認','line'),part('天秤 ＋ 指定オモリ','道糸側とハリス側を間違えず接続','weight','天秤の腕からハリス'),part('カレイ用ハリス → 針 ＋ 虫餌','オモリの先に針を直列につながない','hook')],caution:'重いオモリは投げ竿の適合負荷以内で使用。後方と左右の安全確認が必須。'},
 'amadai-tenbin':{variant:'船・天秤吹き流し',leaderInRig:true,parts:[part('天秤 ＋ 指定オモリ','上端に道糸を接続する','weight','腕の先からハリス'),part('アマダイ用ハリス → 針','オキアミをまっすぐ刺す。長さは船宿指定','hook')],caution:'底を引きずらず、着底後に少し浮かせます。ハリス長とオモリは乗船先へ合わせる。'},
 'deepsea-douzuki':{variant:'枝針と下端オモリ',leaderInRig:true,parts:branchRig('指定の枝ハリスと針数。魚種別の完成仕掛けを使用'),caution:'キンメダイとアカムツで針数・負荷は大きく変わります。固定の号数を流用せず船宿へ確認。'},
 'medai-komase':{variant:'天秤・コマセカゴ',leaderInRig:true,parts:[part('天秤 ＋ 指定ビシ・カゴ','道糸を上端へ。コマセを入れる','basket','腕の先からハリス'),part('指定ハリス → メダイ針','クッションゴムの使用は船に確認','hook')],caution:'周囲とビシ号数・ハリス長をそろえます。大型魚の取り込みにはタモを用意。'},
 sabiki:{variant:'足元・下カゴ式',parts:[part('スナップ付きサルカン','市販仕掛けの「上」へつなぐ','swivel'),part('幹糸 → 枝ス → サビキ針','魚皮・スキンの擬餌針。ここへアミエビを刺さない','hook','複数の枝針'),part('オモリ付きコマセカゴ','最下部に接続し、アミエビを入れる','basket')],caution:'上カゴ式など別構成もあります。完成仕掛けの上下表示を優先し、竿の負荷以内で使います。'},
 eging:{variant:'岸のエギング',parts:[snap,part('エギ（オモリ・カンナ一体）','別のオモリや針を直列に追加しない','lure')],caution:'秋は小さめ、春は3〜3.5号が目安。ロッドのエギ号数表示と沈下速度も確認。'},
 ajing:{variant:'ジグヘッド単体',parts:[part('結び目（直結）','小型スナップを使う場合も強度を確認','swivel'),part('ジグヘッド ＋ ワーム','オモリと針が一体。ワームを曲げずに刺す','hook')],caution:'軽量仕掛け向けの例。フロート・キャロは別構成です。風と流れで重さを調整。'},
 mebaring:{variant:'ジグヘッド単体',parts:[part('結び目 / 小型スナップ','結束部を点検','swivel'),part('ジグヘッド ＋ ワーム','まずは一定の深さをゆっくり引く','hook')],caution:'プラグへ交換するときは、その重量に合う竿を使用します。'},
 'tai-rubber':{variant:'遊動式タイラバ',parts:[part('ヘッドの穴へリーダーを通す','ヘッドを固定せず、下のユニットへ結ぶ','weight'),part('ネクタイ・フックユニット','製品指定の結束部へ。ヘッドの上下方向も確認','hook')],caution:'固定式とは接続が異なります。船長の重量指定を優先し、商品説明書で向きを確認。'},
 jigging:{variant:'船・アシストフック式',parts:jigRig,caution:'水深・潮・船宿の指定でジグ重量を選びます。岸用の重さをそのまま流用しないでください。'},
 'shore-jigging':{variant:'岸・メタルジグ',parts:jigRig,caution:'軽いジグを使うライトショアジギングも接続の基本は同じ。竿の適合重量と対象魚に合わせて糸・リングを選択。'},
 nomase:{variant:'船・胴突き泳がせ',parts:branchRig('枝ス先の針へ活き餌を付ける'),caution:'船用胴突きの例です。堤防のウキ泳がせは異なる構成。餌の付け方とオモリは船長に確認。'},
 'tachiuo-tenya':{variant:'船テンヤ',parts:[snap,part('テンヤ（オモリ・針一体）','イワシをまっすぐ添え、固定用針金で巻く','hook')],caution:'号数と先糸は船宿指定を優先。岸用の軽量テンヤとは区別します。'},
 kawahagi:{variant:'船・3本針胴突き',parts:branchRig('短い枝スの針へアサリを付ける'),caution:'直結仕掛けでは別リーダーが不要な場合も。仕掛けの説明と船宿のオモリ指定を優先。'},
 douzuki:{variant:'足元・胴突き',parts:branchRig('枝針に小さく餌を付ける'),caution:'枝スが横に出て、オモリが最下部に来ます。針とオモリを逆につながないでください。'},
 ana:{variant:'ブラクリ',parts:[part('結び目 / スナップ','ブラクリの上端へ接続','swivel'),part('ブラクリ（オモリ ＋ 短いハリス ＋ 針）','針へ切り身や虫餌を付ける','hook')],caution:'安全な平らな足場から届く範囲で。消波ブロックへ無理に乗る釣り方ではありません。'},
 choinage:{variant:'小型天秤',parts:[part('天秤の道糸側へ結束','オモリ側とハリス側の接続部を確認','swivel','天秤のオモリ'),part('天秤の腕 → ハリス → キス針','オモリを針の先へ直列につながない','hook')],caution:'1号は約3.75g。例えば5号は約18.75gなので、ルアーロッドの上限重量を超えないよう確認。'},
 'hitotsu-tenya':{variant:'エビ餌・ひとつテンヤ',parts:[part('テンヤ上部の接続環','直結かスナップかは製品指定に従う','swivel'),part('テンヤ親針 ＋ 孫針','エビを親針にまっすぐ刺し、孫針を頭部側へ','hook')],caution:'タチウオテンヤとは別の釣法。エビの大きさと潮に合わせ、船宿指定号数を優先。'},
 fukase:{variant:'半遊動のウキ仕掛け',parts:[part('ウキ止め → シモリ玉 → 円錐ウキ','道糸に取り付け、深さをウキ止めで調整','float'),part('からまん棒 → サルカン','ウキの下の緩衝・接続部','swivel'),part('ハリス ＋ ガン玉','ガン玉はウキ負荷と潮に合わせて調整','weight'),part('チヌ針 / グレ針 ＋ オキアミ','最後に付け餌をセット','hook')],caution:'この構成ではハリスはウキとサルカンの下。全遊動仕掛けは別構成です。'}
};

export function getMethodTackle(slug:string){
 const method=getMethod(slug);if(!method)return undefined;
 const rig=Object.hasOwn(tackleRigs,slug)?tackleRigs[slug]:undefined;
 const specs=([['rod','ロッド'],['reel','リール'],['line','メインライン'],['leader','リーダー / ハリス'],['rig','仕掛け'],['bait','餌・ルアー']] as const).map(([key,label])=>({key,label,value:method[key],shop:amazonSearchUrl(tackleSearchTerms[slug]?.[key]??`${method.name} ${label}`)}));
 return {method,rig,specs};
}
