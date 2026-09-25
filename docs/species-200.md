# 魚図鑑200種への追加（2026-09-25）

既存190種に最後の10種を追加。ショウサイフグ案はユーザー指定でアカタチへ変更。検索数の実測順位ではなく、釣りでの認知・地域・食文化・見分け需要から選定。

- ハモ（hamo）：https://www.pref.osaka.lg.jp/o120130/suisan/fish/f01.html
- イイダコ（iidako）：https://www.pref.kagawa.lg.jp/suisan/yugyo/oshirase/iidakooshirase0710.html
- カミナリイカ（kaminariika）：https://www.zukan-bouz.com/syu/カミナリイカ
- ミズダコ（mizudako）：https://www.hro.or.jp/fisheries/publication/ima/o7u1kr0000001z0e.html
- カラフトマス（karafutomasu）：https://www.pref.hokkaido.lg.jp/sr/gid/fis021.html
- ハガツオ（hagatsuo）：https://www.honda.co.jp/fishing/picture-book/hagatsuo/
- スジアラ（sujiara）：https://www.zukan-bouz.com/syu/スジアラ
- ハマダイ（hamadai）：https://www.zukan-bouz.com/syu/ハマダイ
- アコウダイ（akoudai）：https://www.honda.co.jp/fishing/picture-book/akoudai/
- アカタチ（akatachi）：https://www.honda.co.jp/fishing/picture-book/akatachi/

## 追加確認資料

- アカタチ学名（近縁のスミツキアカタチと区別）：https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=203414
- イイダコ名称：https://www.caa.go.jp/policies/policy/food_labeling/meeting_materials/assets/food_labeling_cms201_241203_06.pdf
- 北海道サケマス採捕ルール：https://www.pref.hokkaido.lg.jp/sr/ggk/ggs/turi-r-m/rule-manner.html
- ミズダコ分類：https://www.sc.niigata-u.ac.jp/sc/sadomarine/marinelife/mizudako.html
- シガテラ：https://www.pref.okinawa.jp/_res/projects/default_project/_page_/001/004/114/ciga_leaf2022.pdf

## 構造と確認事項

- 1魚種1プロフィール。日英図鑑、4料理、関連魚、methods、既存GUIDE、MAP検索、QUEST、sitemapへ既存レジストリから接続。既存魚種・URL・トップ基本10種を維持。
- 10魚体画像と40料理画像は個別に新規生成。WebPへ最適化。生成プロンプトは species-200-assets.json に保存。既存画像は変更しない。
- ハモは専門店の骨切り済みを使用。タコ・イカは鱗や三枚おろしを流用せず専用手順。カラフトマスとアカタチは加熱料理。スジアラは産地・食用流通確認とシガテラ注意を維持。
- イイダコは香川県の2026年公的規制を明示。全国共通の釣期として扱わない。
- ハガツオを「カツオ」一般名検索へ接続し、「ミズダコ科」「マダコ科」をタコ類にまとめる。追加順は従来順を維持。
- 3Dモデル未提供の新魚種は既存2D表示と「3D準備中」を使用。モデルを捏造しない。
- QUESTの北の沿岸にキャスティング・タコエギ、暖海にジギング・ノマセを接続。ハマダイは深場へ限定。現地の採捕許可を表すものではない。

## 検証結果

- TypeScript・lint成功。全269テスト成功。本番build成功。
- 新規70ページ（魚10、英語魚10、料理一覧10、レシピ40）のHTTP・canonical・sitemap、画像50枚、既存7魚種のHTTPを確認。
- PCと390×844のスマホ幅でアカタチを確認。料理カード→天ぷらレシピ遷移と画像表示、横はみ出しなしを確認。
- 一覧200種、「カツオ」検索のハガツオ、英語版ハモのcanonicalとja/en/x-defaultを確認。確認ページにコンソールエラーなし。
