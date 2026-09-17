# 主要7魚種の工程画像

2026-09-17、imagegenで魚種と工程を指定して生成し、目視確認した画像を1200px WebP（quality85）へ変換。原画像は変更せず、新規追加。ページには「工程を説明する生成イメージ」を明記する。実写の記録写真として扱わない。

| 魚 | 工程（0始まり） | 画像 | 確認内容 |
| --- | ---: | --- | --- |
| マアジ | 0 | aji-scutes.webp | 尾側のゼイゴを包丁で薄くそぐ |
| マダイ | 0 | madai-scaling.webp | 赤い魚体、尾から頭方向のウロコ取り |
| ブリ | 2 | buri-fillet.webp | 左右の身と中骨、黄色い尾 |
| マサバ | 1 | saba-bloodline.webp | 内臓除去後の腹内の血合いを洗う |
| タチウオ | 2 | tachiuo-fillet.webp | 銀色の細長い身と中骨を分ける |
| シロギス | 2 | kisu-butterfly.webp | 開いた身、中骨除去、尾を残す |
| カサゴ | 0 | kasago-scaling.webp | 布で固定し棘を避けてウロコ取り |

保存先はpublic/images/preparation。既存のprep本文・レシピ・代表4料理は変更せず、各profileのprepImagesへ登録。料理ページの共通FishPreparationで縦方向に画像→STEP→説明を表示する。工程番号・画像存在・重複は既存テストで検証。既存レシピのハッシュ検証は追加のprepImagesを除外し、元のハッシュを維持。
