# 2026-09-20 GUIDE・魚図鑑・釣り場ページの拡充

## このまとまり
- 既存328本を棚卸し、新規QUICK GUIDE 57本、合計385本。
- 約200本追加という依頼の途中。残り143本は未執筆・未公開。件数達成とは扱わない。
- 各新記事には独立した疑問、結論、状況の見分け方、3手順、2ケースの判断表、補足、既存の詳しいGUIDEへのリンクを用意。
- カゴの餌の出方、穂先への糸絡み、オモリの単位換算は既存URLで補強し、新規ページを作らなかった。
- fish-speciesの8魚種にfieldNotesを追加。専用本文・画像・料理は保持。
- 尼崎魚つり公園、南港魚つり園、とっとパーク小島に個別の疑問集を追加。
- 関連記事は上限6件、内容分野を考慮。固有釣り場ページでは未登録の釣法の記事を魚名だけで推薦しない。
- GUIDE→MAPは魚名の全文検索ではなくfish/methodのIDフィルターへ。
- 新記事57本のJPEG共有画像を既存スクリプトで生成。

## 編集判断
検索数の実測値や順位を取得したものではない。既存記事の不足、メーカー入門資料、施設公式案内で確認できる疑問から優先した。検索結果への掲載・順位は保証できない。
短い疑問記事を親GUIDEと接続し、同じ答えに着地する言い換えは別URLにしない。親の釣法タグを引き継ぐと不適切になる新記事はinheritContext:falseで明示する。

## 確認資料
- 南港魚つり園 https://nankou-uotsuri-en.com/guide/
- 尼崎魚つり公園 https://amagasaki-uoturikouen.com/guide.html
- 岬町・とっとパーク小島 https://www.town.misaki.osaka.jp/soshiki/toshi_seibi/sangyo/kannkou/leisure/fishing/203.html
- DAIWA・タイラバ入門 https://www.daiwa.com/jp/special/products/tairubber
- MCL・底取り https://mcl3rd.com/kihoku-tairaba/tairubber-bottom/
- 第一精工・オモリ重量 https://www.daiichiseiko.com/faq/index.html?backid=5223&cmd=detail&id=1

## 次の執筆範囲
未作成143本を埋める際も、検索意図の重複確認を先に行う。
候補領域はヘラブナのウキのなじみ、ワカサギの仕掛け管理、イカメタルの棚の再現、浅場チニング、魚の識別写真、調理の仕上がりの失敗原因など。魚名だけの差し替えや地域×月の機械的な展開はしない。

成長施策はSearch Consoleの実際のクエリから不足する説明を追記する運用を優先。表示されるが読まれないページのタイトル改善と、読まれた記事から魚・釣法・MAPへ移れるかの点検が候補。新たなSNS・会員機能はこの変更には含めない。

## 検証
- 全unitテスト、TypeScript、lint、production build。
- tests/browser/guide-growth.cjs：ローカルproduction server(port 3132)で1280px/390px、記事の表・canonical・MAPリンク、魚の観察ポイント、釣り場のdetails開閉、横幅とpageerrorを検証。
- 記事・魚図鑑・釣り場のスクリーンショットも目視確認。
