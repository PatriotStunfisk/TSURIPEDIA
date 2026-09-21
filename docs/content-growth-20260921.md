# 2026-09-21 GUIDEと既存ページの補強

- 新規20本：基本GUIDE2本（ヘラブナ底釣り、チニング）、QUICK GUIDE18本（各6本：ヘラブナ、ワカサギ、チニング）。全405本。
- 前回57本と合わせて77本追加。約200本追加の目標には残り123本。
- 既存の餌サイズ・誘いの止め方等とは異なる疑問を選び、投入点、仕掛け全長、カウンター再設定、底とアタリの違い等を個別に説明。
- 各記事は既存all-guidesへ登録。共有画像20枚、sitemap、metadata、親GUIDE・魚・釣法・MAP導線を既存の仕組みから生成。
- ヘラブナ・ワカサギ・クロダイ・キビレに観察ポイントを2点ずつ追加。画像・料理・専用本文は維持。
- うおやすボート・桧原湖エリアに施設を選ぶ際の説明とFAQを追加。地図初期データへ長文を追加しない。
- 検索ボリュームを実測した選定ではない。既存記事の不足と具体的な釣行上の疑問を優先。

## 確認元
- https://www.marukyu.com/marukyu/hajimete_b/gyoshu/gyoshu3_4_4.html
- https://fish.shimano.com/ja-JP/content/beginners/fishingstyle/lurefishing/chinning/index.html
- https://www.daiwa.com/jp/product/cpho2cd
- https://www.daiwa.com/ja/resources/fishing/item/terminal_tackle/wakasagi/crystia_w_crpt/download/manual.pdf
- https://fishing.uoyasu.info/wakasagi.php
- https://www.urabandai-inf.com/?page_id=28186

製品ごとに異なる設定値や操作は共通の断定にせず、使用機種の説明書へ案内。施設の料金・時刻は今回新たに固定保存していない。

## 検証結果
204件のunitテスト、TypeScript、lint、production build（3,541ページ）に成功。1280px・390pxのChromiumで新記事4本の表・canonical、魚図鑑の追記、釣り場FAQの開閉、魚フィルター付きMAPリンクを確認。横はみ出し・pageerrorなし。スマホ相当の画像も目視確認。
