/** Three editorial pilots; each NG is immediately followed by a usable correction. */
export const motionShortEdits = [
 {slug:'aji-sabiki-depth',topic:'sabiki',hook:'サビキで釣れない\nNG行動 3つ',promise:'最後は「釣れた後」の落とし穴',items:[
  {ng:'同じ深さで\n待ち続ける',fix:'約1mずつ\n棚を変える',ngCaption:'魚のいる深さとズレたまま',fixCaption:'底を切り、少しずつ上へ'},
  {ng:'コマセと針が\n別々の深さ',fix:'餌の煙幕に\n針を重ねる',ngCaption:'撒いても針が離れている',fixCaption:'小さく振ったら、止めて待つ'},
  {ng:'釣れた棚を\n覚えていない',fix:'ハンドル回数で\n深さを再現',ngCaption:'毎回違う深さへ戻してしまう',fixCaption:'釣れた場所を、もう一度通す'},
 ],recap:'棚を変える\n餌と重ねる・棚を覚える'},
 {slug:'eging-shakuri-count',topic:'eging',hook:'エギングで見直す\n誘い方 3つ',promise:'しゃくった後、何を見ている？',items:[
  {ng:'ずっと\nしゃくり続ける',fix:'小さく2〜3回\nその後は沈める',ngCaption:'誘うだけでは、抱く間がない',fixCaption:'止める時間も釣りの一部'},
  {ng:'糸を張りすぎて\nエギを引っ張る',fix:'張りすぎず\n姿勢を保って落とす',ngCaption:'沈めたいのに、手前へ動く',fixCaption:'糸は緩めすぎないことも大切'},
  {ng:'沈めている間\n糸を見ていない',fix:'停止・横走り\nたるみを見る',ngCaption:'抱いた変化を見逃しやすい',fixCaption:'違和感は糸ふけを取って合わせる'},
 ],recap:'誘う → 沈める\n沈む間の糸を見る'},
 {slug:'tairaba-bottom-contact',topic:'tairaba',hook:'タイラバの色より\n先に直す 3つ',promise:'そのコツコツ、止めていない？',items:[
  {ng:'着底したまま\n底に置いておく',fix:'糸の出が止まる\nその瞬間に巻く',ngCaption:'底取りと巻き始めをつなぐ',fixCaption:'底が不明なら船宿指定内で重さを調整'},
  {ng:'巻く速さが\nバラバラ',fix:'竿を上下させず\n一定速度で巻く',ngCaption:'色を替える前に、巻きを整える',fixCaption:'船長が指示した層まで巻く'},
  {ng:'コツコツしたら\n巻くのを止める',fix:'最初の接触でも\n巻き続ける',ngCaption:'早い大合わせにも注意',fixCaption:'魚の重みが乗るまで同じ速度'},
 ],recap:'着底 → すぐ巻く\n一定速度・触っても巻く'},
] as const;
