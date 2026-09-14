# 沿岸魚10種の拡充（2026-09-15）

対象：メジナ、マハゼ、アイナメ、キジハタ、アカハタ、オオモンハタ、ホウボウ、イトヨリダイ、コウイカ、ヤリイカ。

各魚種は`lib/fish-species/<slug>.ts`へ基本情報・詳細・見分け方・初心者情報・安全情報・料理4品・釣法・関連魚・GUIDE・QUESTのファイト設定をまとめ、indexに登録。互換データへの二重入力は不要。

魚図鑑・料理40レシピ・GUIDE10本・metadata・sitemap・釣法との相互リンク・QUESTへ接続した。新しい釣法としてロックフィッシュルアーと船イカヅノを追加。既存の魚を重複作成せず、グレはメジナの別名として扱う。ユーザーが削除したガシラの重複公開登録は復活させない。

新規50画像は組み込み画像生成によるオリジナル。`species-coastal-images.json`に生成指示とファイルハッシュを記録。魚の比較図と料理の盛り付け例であり、標本写真や実際の調理記録ではない。第三者の写真は転用していない。新規10種のGLBは未提供なので2D表示が基本。後日、同じslugのGLBを追加すれば共有ビューアとQUESTに反映する。

## 参照資料

形態・分類・釣法を照合し、本文と家庭向けレシピ手順は独自に作成。旬や釣期・水深は地域と釣法で変わる目安。各釣り場の営業・採捕規則は公式情報を別途確認する。

- [DAIWA：メジナ](https://www.daiwa.com/jp/column/fish_field_guide/sea/050)
- [DAIWA：マハゼ](https://www.daiwa.com/jp/column/fish_field_guide/sea/047)
- [DAIWA：アイナメ](https://www.daiwa.com/jp/column/fish_field_guide/sea/002)
- [DAIWA：ホウボウ](https://www.daiwa.com/jp/column/fish_field_guide/sea/041)
- [市場魚貝類図鑑：キジハタ](https://www.zukan-bouz.com/syu/キジハタ)、[アカハタ](https://www.zukan-bouz.com/syu/アカハタ)、[オオモンハタ](https://www.zukan-bouz.com/syu/オオモンハタ)
- [黒潮生物研究所：イトヨリダイ](https://kuroshio.or.jp/creature/イトヨリダイ/)
- [市場魚貝類図鑑：コウイカ](https://www.zukan-bouz.com/syu/コウイカ)、[ヤリイカ](https://www.zukan-bouz.com/syu/ヤリイカ)
- [DAIWA：プラヅノやスッテでイカを釣る](https://www.daiwa.com/jp/beginner/place/ika_sutte)
