# 魚図鑑148種・検索整理（2026-09-25）

既存132種に16種を追加。標準和名オニカサゴと、船釣りでオニカサゴと呼ばれるイズカサゴを別レコードにする。シロザケはサケの別名として同じレコードへ接続する。

## 情報確認先

- ニザダイ：https://kamo-kurage.jp/shonaizukan/nizadai/
- オニカサゴ：https://aquarium.co.jp/picturebook/scorpaenopsis-cirrhosa.html
- イズカサゴ：https://aquarium.co.jp/picturebook/scorpaena-neglecta.html
- イシガキダイ：https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syokuchu/poison/animal_det_02.html
- キアマダイ：https://www.jfa.maff.go.jp/j/sigen/attach/pdf/20170321redlist-56.pdf
- オキザヨリ：https://oki-churaumi.jp/fishbook/1702444889/
- サケ（シロザケ）：https://www.pref.hokkaido.lg.jp/sr/gid/fis019.html
- ギンザケ：https://www.pref.miyagi.jp/soshiki/mtsc/ginzake.html
- キタマクラ：https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000090748.html
- コモンフグ：https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000090748.html
- シマフグ：https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000090748.html
- トラフグ：https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000090748.html
- ハコフグ：https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syokuchu/poison/animal_det_03.html
- アオブダイ：https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syokuchu/poison/animal_det_03.html
- ソウシハギ：https://www.pref.osaka.lg.jp/o120130/suisan/ichiran.html
- ヒョウモンダコ：https://aquarium.co.jp/picturebook/hapalochlaena-fasciata.html

サケの釣行条件は北海道の遊漁ルールを確認する：
https://www.pref.hokkaido.lg.jp/sr/ggk/ggs/turi-r-m/rule-manner.html

資料の文章・写真は転載せず、図鑑用の説明を独自に構成した。分布や釣期の不確実な範囲を、実績や釣り許可と断定しない。

## 画像

魚体16点・料理32点は今回新規生成し、魚種・料理ごとに別画像を使用。魚体は透過WebP、料理はWebP。既存画像は変更しない。接触シートで魚体全景と料理の対応を確認。キアマダイは初回の体形が不適切だったため再生成した。画像だけで毒魚の確定識別や食用可否を案内しない。

## 安全・料理

キタマクラ・コモンフグ・シマフグ・トラフグ・ハコフグ・アオブダイ・ソウシハギ・ヒョウモンダコは料理なし、QUEST対象外。毒のある魚の家庭用下処理は作らない。
オニカサゴ・イズカサゴの料理は専門家による処理済み切り身が前提。
イシガキダイはシガテラに関する説明を明示し、釣った個体の自己判断での利用を勧めない。加熱で無毒化できるとは書かない。
天然サケや管理釣り場のギンザケは加熱料理を案内する。

## 表示と検索

初期の基本10魚種を上位に残し、以降は仲間ごとにまとまる基本順へ。登録配列は変更せず「追加順」で参照できる。
一般検索用のタグを正確な魚名解決と分離する。カツオ検索でスマ・ソウダ類を探せても、MAPの「カツオ」は従来どおりkatsuoへ解決する。
写真判別は既存APIと画面を再利用する。有料API接続の許可・設定が揃うまでは有効にしない。
スマホの一覧見出しの上下余白を調整し、PCの余白は維持する。

## 検証

- 回帰テスト260件成功、TypeScript・lint・production build成功。
- 新魚種の日英ページ・料理ページ・画像112 URLでHTTP 200を確認。魚ページのcanonicalを確認。
- 390×844と1280×900でブラウザ確認。魚図鑑・料理・釣果・釣り方のスマホ見出し余白、写真ボタン、料理写真、危険魚の料理非表示を確認。
- カツオ検索4種、カレイ検索7種を実操作で確認。追加順→条件解除で一覧と選択欄が一致することを確認。
- 写真AI判別は未有効化。有料APIの実費・精度は未計測。ユーザーへ従量課金の試算を説明済みで、課金の承認は未取得。
