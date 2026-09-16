# 淡水魚・釣行導線の追加（2026-09-17）

先行公開: `9910986` / Vercel `B64wyEgBZmEWGYsaKyVdPWorKeDq`、Production Ready確認。本番の魚・QUICK GUIDE・釣り場と共有JPEGはTwitterbot UAで200確認。

## 追加
- イワナ1魚種：基本・生態・見分け方・保全・安全・釣法・QUEST・塩焼き/唐揚げ/南蛮漬け/ムニエルの4料理。専用3Dは未提供のため2D表示。透過イラストは今回のオリジナル生成物で、既存画像は無変更。
- GUIDE：`iwana-first-trip`。道具の比較表、投入〜取り込みの手順、流し方図、釣れない場合の対処。
- QUICK GUIDE：`wakasagi-dome-reservation-check`。親は`wakasagi-first-trip`。予約・貸道具・遊漁券・子どもの条件。
- MAP 3船宿：山中湖うおやすボート、旭日丘観光 山中湖ドーム船、須崎市観光漁業センター。公式の利用条件と地図を照合。料金・出船時刻は固定しない。旭日丘の2026年10月営業開始、須崎の2026年4月からの水曜休館を注記。
- 既存MAPの対象魚名が図鑑の正式名と完全一致する場合だけ、魚slugを共通レジストリから補完。曖昧な「青物」「根魚」等は推測で割り当てない。

現在64魚種、225記事、MAP82件（初期表示78件）。共有画像703ページ分。

## 検証
TypeScript・lint・build成功。104/104テスト成功。HTTPで703ページ、904内部リンク、243画像参照、639 Amazonリンクを確認しエラーなし。新魚種・料理一覧・GUIDE・船宿詳細・MAP検索を実ブラウザで確認。実幅390pxの魚ページとQUICK GUIDEは横はみ出しなし。船宿は専用船マーカーを確認。検証専用HTMLはコミット対象から削除。

## 出典
- https://www.pref.nagano.lg.jp/suisan/joho/sakanatachi/iwana.html
- https://www.aomori-itc.or.jp/soshiki/suisan_naisuimen/naisuimen/iwana.html
- https://fish.shimano.com/ja-JP/content/fishingstyle/article/river/vol46.html
- https://fishing.uoyasu.info/wakasagi.php
- https://fishing.uoyasu.info/access.php
- https://www.asakan.gr.jp/dome.php
- https://www.asakan.gr.jp/access.php
- https://mapfan.com/spots/S3C3W%2CJ%2CLN5BR
- https://susaki.fishing/price/
- https://www.city.susaki.lg.jp/life/detail.php?hdnKey=5953
- https://www.japan47go.travel/en/detail/539dfd71-6b57-4403-82af-76645430ad5e
