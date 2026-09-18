# 港・堤防の追加とMAPプレビュー（2026-09-18）

## 今回の範囲

- 港・堤防を190地点追加。既存938地点から1128地点（休止・閉鎖38地点を含む）へ。
- 今回の通常追加はすべて岸釣り地点。船宿を件数に含めない。
- 約200地点を目標に候補を調査。重複、休園、明確な立入制限、別地域の同名港、位置を特定できない候補は除外した。
- Google Mapsの名称検索結果を候補として利用し、国土地理院標準地図 z16 の岸壁・波止と照合して座標を調整した。航空写真による全件の確認や管理者への現地照会は行っていない。
- 釣り広場の個別釣り場情報を参照し、紹介文は独自に要約。文章・写真を転載していない。出典の紹介は現在の釣り許可を証明するものではなく、現地の掲示・管理者の案内を優先する。
- 駐車場・トイレは存在や現在の利用条件を十分確認できないため構造化フィールドを未設定とした。過去の料金を固定表示しない。
- `shore-spot.ts` に既存の岸釣りデータ変換処理を移し、前回189地点と今回190地点で共用。魚・釣法・GUIDE・sitemapへの接続は既存レジストリを利用。

## MAPの選択操作

- マーカー選択ではページをスクロールしない。別地点は同じプレビューカードで切り替える。
- PCはMAP内左側、760px以下はMAP内下部にカードを重ねる。MAP本体のサイズとフィルター配置は維持。
- 「詳細を見る」だけ既存詳細へsmooth scroll。「MAPに戻る」で地図へ戻る。
- お気に入りは既存保存機能と共用し、★マーカーへ即反映。選択強調は既存のタイプ色を維持。
- クラスタ分解条件・マーカー表示範囲処理は変更していない。

## 検証

- TypeScript / lint 成功。回帰テスト147件成功。production buildで2021ページの生成が成功。
- 共通ヘルパー移行前後の既存938地点の全フィールドを比較し、変更0件。
- 追加後の柏漁港のMAPマーカー・PC左カード・スマホ下カード・内部リンクを再確認。ブラウザのコンソールエラーなし。
- PC 1280×900、iPhone相当390×844で確認。
- ネイティブクリックでスクロール位置が変わらないことを確認（PC 403→403、スマホ1143→1143、次のマーカーでも1143→1143）。
- 「詳細を見る」後は詳細先頭がヘッダー直下へ移動。お気に入りのカードとマーカー同期、閉じる、選択切替を確認。
- 新規地点に関わる重複ID・名称・近接座標・範囲異常の検証警告なし。既存14警告は、位置未登録8件と船宿の共有集合場所6組で今回追加からの増加なし。
- 新規190ページの静的共有JPEGを生成（最大42,916bytes）。既存画像は維持。

## 都道府県別追加数

| 都道府県 | 追加 |
| --- | ---: |
| 岩手県 | 15 |
| 宮城県 | 28 |
| 千葉県 | 11 |
| 静岡県 | 5 |
| 三重県 | 12 |
| 和歌山県 | 19 |
| 広島県 | 8 |
| 大分県 | 14 |
| 熊本県 | 17 |
| 鹿児島県 | 16 |
| 青森県 | 12 |
| 山口県 | 3 |
| 愛媛県 | 10 |
| 高知県 | 13 |
| 長崎県 | 7 |

## 個別出典と位置

以下は釣り場の代表位置であり、釣り許可範囲や駐車位置を示すものではない。

| 釣り場 | 都道府県 | 緯度, 経度 | 釣り情報 |
| --- | --- | --- | --- |
| 川津内漁港 | 岩手県 | [40.269736, 141.81545](https://maps.gsi.go.jp/#16/40.269736/141.81545/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatekawatunaigyokou.html) |
| 本波漁港 | 岩手県 | [40.241569, 141.826479](https://maps.gsi.go.jp/#16/40.241569/141.826479/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatehonnnamigyokou.html) |
| 麦生漁港 | 岩手県 | [40.223451, 141.831951](https://maps.gsi.go.jp/#16/40.223451/141.831951/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatemugyougyokou.html) |
| 三崎漁港 | 岩手県 | [40.152391, 141.867979](https://maps.gsi.go.jp/#16/40.152391/141.867979/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatemisakigyokou.html) |
| 玉川漁港 | 岩手県 | [40.080025, 141.832058](https://maps.gsi.go.jp/#16/40.080025/141.832058/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatetamagawagyokou.html) |
| 下安家漁港 | 岩手県 | [40.055295, 141.85225](https://maps.gsi.go.jp/#16/40.055295/141.85225/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatesimoaltukagyokou.html) |
| 沢漁港 | 岩手県 | [40.050022, 141.870189](https://maps.gsi.go.jp/#16/40.050022/141.870189/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatesawagyokou.html) |
| 黒崎漁港 | 岩手県 | [40.007763, 141.923425](https://maps.gsi.go.jp/#16/40.007763/141.923425/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatekurosakigyokou.html) |
| 平井賀漁港 | 岩手県 | [39.933812, 141.939411](https://maps.gsi.go.jp/#16/39.933812/141.939411/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatehiraigagyokou.html) |
| 島の越漁港 | 岩手県 | [39.913143, 141.947844](https://maps.gsi.go.jp/#16/39.913143/141.947844/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatesimanokosigyokou.html) |
| 茂師漁港 | 岩手県 | [39.829681, 141.979043](https://maps.gsi.go.jp/#16/39.829681/141.979043/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatemosigyokou.html) |
| 小港漁港（真崎漁港） | 岩手県 | [39.751364, 141.99739](https://maps.gsi.go.jp/#16/39.751364/141.99739/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatemasakigyokou.html) |
| 田老漁港 | 岩手県 | [39.735459, 141.975031](https://maps.gsi.go.jp/#16/39.735459/141.975031/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatetarougyokou.html) |
| 樫内漁港 | 岩手県 | [39.706708, 141.977134](https://maps.gsi.go.jp/#16/39.706708/141.977134/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatekasinaigyokou.html) |
| 宿漁港 | 岩手県 | [39.687358, 141.973486](https://maps.gsi.go.jp/#16/39.687358/141.973486/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwateyadogyokou.html) |
| 大沢（唐桑）漁港 | 宮城県 | [38.965215, 141.634583](https://maps.gsi.go.jp/#16/38.965215/141.634583/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagioosawakarakuwagyokou.html) |
| 只越漁港 | 宮城県 | [38.929536, 141.634347](https://maps.gsi.go.jp/#16/38.929536/141.634347/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagitadakosigyokou.html) |
| 御崎観光港 | 宮城県 | [38.861983, 141.668916](https://maps.gsi.go.jp/#16/38.861983/141.668916/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagiosakikannkoukou.html) |
| 長崎漁港 | 宮城県 | [38.854748, 141.625228](https://maps.gsi.go.jp/#16/38.854748/141.625228/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyaginagasakigyokou.html) |
| 浦の浜漁港 | 宮城県 | [38.865575, 141.612847](https://maps.gsi.go.jp/#16/38.865575/141.612847/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagiuranohamagyokou.html) |
| 川原漁港 | 宮城県 | [38.857388, 141.584415](https://maps.gsi.go.jp/#16/38.857388/141.584415/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagikawaragyokou.html) |
| 杉ノ下漁港 | 宮城県 | [38.823594, 141.589565](https://maps.gsi.go.jp/#16/38.823594/141.589565/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagisuginositagyokou.html) |
| 大谷漁港 | 宮城県 | [38.81592, 141.574974](https://maps.gsi.go.jp/#16/38.81592/141.574974/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagiooyagyokou.html) |
| 三島漁港 | 宮城県 | [38.810219, 141.571026](https://maps.gsi.go.jp/#16/38.810219/141.571026/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagimisimagyokou.html) |
| 日門漁港 | 宮城県 | [38.806774, 141.556928](https://maps.gsi.go.jp/#16/38.806774/141.556928/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagihikadogyokou.html) |
| 前浜漁港 | 宮城県 | [38.801992, 141.552229](https://maps.gsi.go.jp/#16/38.801992/141.552229/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagimaehamagyokou.html) |
| 赤牛漁港 | 宮城県 | [38.796724, 141.538153](https://maps.gsi.go.jp/#16/38.796724/141.538153/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagiakausigyokou.html) |
| 大沢（津谷）漁港 | 宮城県 | [38.793313, 141.529183](https://maps.gsi.go.jp/#16/38.793313/141.529183/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagioosawagyokou.html) |
| 二十一浜漁港 | 宮城県 | [38.759772, 141.520193](https://maps.gsi.go.jp/#16/38.759772/141.520193/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyaginijyuuitihamagyokou.html) |
| 蔵内漁港 | 宮城県 | [38.753113, 141.528475](https://maps.gsi.go.jp/#16/38.753113/141.528475/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagikurautigyokou.html) |
| 名足漁港 | 宮城県 | [38.72255, 141.558516](https://maps.gsi.go.jp/#16/38.72255/141.558516/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyaginatarigyokou.html) |
| 中山漁港 | 宮城県 | [38.72024, 141.557486](https://maps.gsi.go.jp/#16/38.72024/141.557486/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyaginakayamagyokou.html) |
| 伊里前漁港 | 宮城県 | [38.713878, 141.52354](https://maps.gsi.go.jp/#16/38.713878/141.52354/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagiisatomaegyokou.html) |
| 寄木漁港 | 宮城県 | [38.707432, 141.521115](https://maps.gsi.go.jp/#16/38.707432/141.521115/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagiyorikigyokou.html) |
| 平磯漁港 | 宮城県 | [38.677687, 141.473243](https://maps.gsi.go.jp/#16/38.677687/141.473243/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagihiraisogyokou.html) |
| 袖浜漁港 | 宮城県 | [38.673985, 141.467257](https://maps.gsi.go.jp/#16/38.673985/141.467257/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagisodehamagyokou.html) |
| 林漁港 | 宮城県 | [38.668155, 141.446593](https://maps.gsi.go.jp/#16/38.668155/141.446593/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagihayasigyokou.html) |
| 折立漁港 | 宮城県 | [38.646925, 141.441679](https://maps.gsi.go.jp/#16/38.646925/141.441679/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagioritategyokou.html) |
| 波伝谷漁港 | 宮城県 | [38.642048, 141.459188](https://maps.gsi.go.jp/#16/38.642048/141.459188/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagihadennyagyokou.html) |
| 津の宮漁港 | 宮城県 | [38.642534, 141.486311](https://maps.gsi.go.jp/#16/38.642534/141.486311/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagitunomiyagyokou.html) |
| 藤浜漁港 | 宮城県 | [38.639165, 141.504035](https://maps.gsi.go.jp/#16/38.639165/141.504035/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagifujihamagyokou.html) |
| 長清水漁港 | 宮城県 | [38.636383, 141.510987](https://maps.gsi.go.jp/#16/38.636383/141.510987/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyaginagasizugyokou.html) |
| 寺浜漁港 | 宮城県 | [38.637322, 141.519399](https://maps.gsi.go.jp/#16/38.637322/141.519399/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagiterahamagyokou.html) |
| 富浦旧港 | 千葉県 | [35.048742, 139.831924](https://maps.gsi.go.jp/#16/35.048742/139.831924/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibatomiurakou.html) |
| 富浦新港 | 千葉県 | [35.038922, 139.822097](https://maps.gsi.go.jp/#16/35.038922/139.822097/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibatomiurasinnkou.html) |
| 船形港 | 千葉県 | [35.024251, 139.84585](https://maps.gsi.go.jp/#16/35.024251/139.84585/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibafunakatakou.html) |
| 沖ノ島護岸 | 千葉県 | [34.99091, 139.83068](https://maps.gsi.go.jp/#16/34.99091/139.83068/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibaokinosimagogann.html) |
| 香谷堤防 | 千葉県 | [34.979324, 139.816604](https://maps.gsi.go.jp/#16/34.979324/139.816604/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibakouyagyokou.html) |
| 洲崎北港 | 千葉県 | [34.969496, 139.755471](https://maps.gsi.go.jp/#16/34.969496/139.755471/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibasunosakikitakou.html) |
| 木負堤防 | 静岡県 | [35.02541, 138.876586](https://maps.gsi.go.jp/#16/35.02541/138.876586/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/sizuokakisyouteibou.html) |
| 石部港 | 静岡県 | [34.734259, 138.756509](https://maps.gsi.go.jp/#16/34.734259/138.756509/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba8/sizuokaisibukou.html) |
| 伊浜港 | 静岡県 | [34.685893, 138.764062](https://maps.gsi.go.jp/#16/34.685893/138.764062/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba8/sizuokaihamakou.html) |
| 富洲原漁港 | 三重県 | [35.001298, 136.660931](https://maps.gsi.go.jp/#16/35.001298/136.660931/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba2/yoltukaititomisuhara.html) |
| 若松漁港 | 三重県 | [34.868644, 136.625462](https://maps.gsi.go.jp/#16/34.868644/136.625462/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba2/suzukasiwakamatu.html) |
| 白子漁港 | 三重県 | [34.830855, 136.59349](https://maps.gsi.go.jp/#16/34.830855/136.59349/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba2/suzukasisiroko.html) |
| 石鏡漁港 | 三重県 | [34.447052, 136.919582](https://maps.gsi.go.jp/#16/34.447052/136.919582/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/tobaijika.html) |
| 国崎漁港 | 三重県 | [34.412451, 136.92205](https://maps.gsi.go.jp/#16/34.412451/136.92205/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/tobakuzaki.html) |
| 畔蛸漁港 | 三重県 | [34.389328, 136.896214](https://maps.gsi.go.jp/#16/34.389328/136.896214/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/tobaadako.html) |
| 桃取港（答志島） | 三重県 | [34.513948, 136.85214](https://maps.gsi.go.jp/#16/34.513948/136.85214/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/tobamomotorikou.html) |
| 片田漁港 | 三重県 | [34.251027, 136.844351](https://maps.gsi.go.jp/#16/34.251027/136.844351/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/simasikatada.html) |
| 越賀漁港 | 三重県 | [34.256223, 136.794312](https://maps.gsi.go.jp/#16/34.256223/136.794312/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/simasikosikagyokou.html) |
| 浜島港 | 三重県 | [34.297678, 136.759744](https://maps.gsi.go.jp/#16/34.297678/136.759744/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/simasihamajima.html) |
| 宿田曽漁港 | 三重県 | [34.294984, 136.689556](https://maps.gsi.go.jp/#16/34.294984/136.689556/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/minamiisesyukutaso.html) |
| 大川漁港 | 和歌山県 | [34.308721, 135.088084](https://maps.gsi.go.jp/#16/34.308721/135.088084/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamaookawagyokou.html) |
| 年金波止 | 和歌山県 | [33.963384, 135.102525](https://maps.gsi.go.jp/#16/33.963384/135.102525/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamanennkinnhato.html) |
| 方杭漁港 | 和歌山県 | [33.939871, 135.084972](https://maps.gsi.go.jp/#16/33.939871/135.084972/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamakataguigyokou.html) |
| 小浦漁港 | 和歌山県 | [33.925646, 135.073214](https://maps.gsi.go.jp/#16/33.925646/135.073214/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamaouragyokou.html) |
| 田杭漁港 | 和歌山県 | [33.894963, 135.064974](https://maps.gsi.go.jp/#16/33.894963/135.064974/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamatakuigyokou.html) |
| 野島漁港 | 和歌山県 | [33.842992, 135.168228](https://maps.gsi.go.jp/#16/33.842992/135.168228/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamanojimagyokou.html) |
| 上野漁港 | 和歌山県 | [33.826808, 135.184987](https://maps.gsi.go.jp/#16/33.826808/135.184987/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamauenogyokou.html) |
| 下楠井漁港 | 和歌山県 | [33.816112, 135.193505](https://maps.gsi.go.jp/#16/33.816112/135.193505/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamakusuigyokou.html) |
| 岩代漁港 | 和歌山県 | [33.777382, 135.281675](https://maps.gsi.go.jp/#16/33.777382/135.281675/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamaiwasirogyokou.html) |
| 一本松漁港 | 和歌山県 | [33.749107, 135.326843](https://maps.gsi.go.jp/#16/33.749107/135.326843/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamailtuponnmatugyokou.html) |
| 新芳養漁港 | 和歌山県 | [33.74297, 135.353515](https://maps.gsi.go.jp/#16/33.74297/135.353515/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamasinnhayagyokou.html) |
| 磯間漁港（湊浦漁港） | 和歌山県 | [33.718164, 135.38244](https://maps.gsi.go.jp/#16/33.718164/135.38244/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamatanabeminato.html) |
| 新文里港 | 和歌山県 | [33.714898, 135.386217](https://maps.gsi.go.jp/#16/33.714898/135.386217/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamasinnmorikou.html) |
| 市江港（市江崎） | 和歌山県 | [33.586131, 135.403812](https://maps.gsi.go.jp/#16/33.586131/135.403812/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamaitiekou.html) |
| 大島漁港（田代漁港） | 和歌山県 | [33.473639, 135.803268](https://maps.gsi.go.jp/#16/33.473639/135.803268/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamaoosimagyokou.html) |
| 阿品護岸 | 広島県 | [34.319036, 132.314529](https://maps.gsi.go.jp/#16/34.319036/132.314529/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimaajinagogann.html) |
| 倉橋島・早瀬漁港 | 広島県 | [34.153277, 132.494001](https://maps.gsi.go.jp/#16/34.153277/132.494001/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimahayasegyokou.html) |
| 江田島・秋月港 | 広島県 | [34.229172, 132.491856](https://maps.gsi.go.jp/#16/34.229172/132.491856/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimaakidukikou.html) |
| 江田島・小用港 | 広島県 | [34.248206, 132.492907](https://maps.gsi.go.jp/#16/34.248206/132.492907/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimakoyoukou.html) |
| 江田島・大須港 | 広島県 | [34.285854, 132.438533](https://maps.gsi.go.jp/#16/34.285854/132.438533/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimaoosukou.html) |
| 能美島・外美能漁港 | 広島県 | [34.25319, 132.380319](https://maps.gsi.go.jp/#16/34.25319/132.380319/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimasotominougyokou.html) |
| 能美島・是長漁港 | 広島県 | [34.214659, 132.395768](https://maps.gsi.go.jp/#16/34.214659/132.395768/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimakorenagagyokou.html) |
| 真玉港 | 大分県 | [33.615191, 131.469355](https://maps.gsi.go.jp/#16/33.615191/131.469355/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitamatamakou.html) |
| 香々地新波止 | 大分県 | [33.675211, 131.521883](https://maps.gsi.go.jp/#16/33.675211/131.521883/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitakakadisinnhato.html) |
| 竹田津港 | 大分県 | [33.678783, 131.565399](https://maps.gsi.go.jp/#16/33.678783/131.565399/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitataketadukou.html) |
| 櫛来港 | 大分県 | [33.68355, 131.607735](https://maps.gsi.go.jp/#16/33.68355/131.607735/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitakusikukou.html) |
| 熊毛港 | 大分県 | [33.671301, 131.64947](https://maps.gsi.go.jp/#16/33.671301/131.64947/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitakumagekou.html) |
| 内迫漁港 | 大分県 | [33.6643, 131.665778](https://maps.gsi.go.jp/#16/33.6643/131.665778/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitautisakogyokou.html) |
| 富来港 | 大分県 | [33.604719, 131.707964](https://maps.gsi.go.jp/#16/33.604719/131.707964/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitatomikukou.html) |
| 武蔵港 | 大分県 | [33.500769, 131.730688](https://maps.gsi.go.jp/#16/33.500769/131.730688/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitamusasikou.html) |
| 納屋港 | 大分県 | [33.407173, 131.63415](https://maps.gsi.go.jp/#16/33.407173/131.63415/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitanayakou.html) |
| 加貫港 | 大分県 | [33.376233, 131.639428](https://maps.gsi.go.jp/#16/33.376233/131.639428/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitakanukikou.html) |
| 大分港・住吉泊地 | 大分県 | [33.250532, 131.602306](https://maps.gsi.go.jp/#16/33.250532/131.602306/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitasumiyosihakuti.html) |
| 神崎漁港 | 大分県 | [33.243928, 131.787701](https://maps.gsi.go.jp/#16/33.243928/131.787701/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitakouzakigyokou.html) |
| 金山港 | 大分県 | [33.249347, 131.872137](https://maps.gsi.go.jp/#16/33.249347/131.872137/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitakanayamakou.html) |
| 新川漁港 | 熊本県 | [32.904506, 130.47786](https://maps.gsi.go.jp/#16/32.904506/130.47786/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotosinnkawagyokou.html) |
| 塩屋漁港 | 熊本県 | [32.818837, 130.593474](https://maps.gsi.go.jp/#16/32.818837/130.593474/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotosioyagyokou.html) |
| ４番漁港 | 熊本県 | [32.754221, 130.604889](https://maps.gsi.go.jp/#16/32.754221/130.604889/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamoto4banngyokou.html) |
| 郡浦漁港 | 熊本県 | [32.619732, 130.530775](https://maps.gsi.go.jp/#16/32.619732/130.530775/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotokooriuragyokou.html) |
| 七つ割漁港 | 熊本県 | [32.591226, 130.396085](https://maps.gsi.go.jp/#16/32.591226/130.396085/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotonanatuwarigyokou.html) |
| 江樋戸港 | 熊本県 | [32.582023, 130.415161](https://maps.gsi.go.jp/#16/32.582023/130.415161/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotoebitokou.html) |
| 柳港 | 熊本県 | [32.550322, 130.439773](https://maps.gsi.go.jp/#16/32.550322/130.439773/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotoyanagikou.html) |
| 蔵々漁港 | 熊本県 | [32.576436, 130.482345](https://maps.gsi.go.jp/#16/32.576436/130.482345/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotozouzougyokou.html) |
| 須子漁港 | 熊本県 | [32.517977, 130.34066](https://maps.gsi.go.jp/#16/32.517977/130.34066/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotosujigyokou.html) |
| 島子漁港 | 熊本県 | [32.476225, 130.254507](https://maps.gsi.go.jp/#16/32.476225/130.254507/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotosimagogyokou.html) |
| 干切漁港 | 熊本県 | [32.514883, 130.457432](https://maps.gsi.go.jp/#16/32.514883/130.457432/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotohigiregyokou.html) |
| 牟田漁港 | 熊本県 | [32.47246, 130.437305](https://maps.gsi.go.jp/#16/32.47246/130.437305/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotomutagyokou.html) |
| 姫戸港（小島公園） | 熊本県 | [32.440521, 130.414431](https://maps.gsi.go.jp/#16/32.440521/130.414431/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotohimedokou.html) |
| 二間戸港 | 熊本県 | [32.42145, 130.40411](https://maps.gsi.go.jp/#16/32.42145/130.40411/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotofutamadokou.html) |
| 東風留港 | 熊本県 | [32.399983, 130.40102](https://maps.gsi.go.jp/#16/32.399983/130.40102/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotokotidomarikou.html) |
| 下桶川漁港 | 熊本県 | [32.379182, 130.419817](https://maps.gsi.go.jp/#16/32.379182/130.419817/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotosimookegawagyokou.html) |
| 小屋河内港 | 熊本県 | [32.392899, 130.389068](https://maps.gsi.go.jp/#16/32.392899/130.389068/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotokoyakawatikou.html) |
| 名護港 | 鹿児島県 | [32.123926, 130.329802](https://maps.gsi.go.jp/#16/32.123926/130.329802/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimanagokou.html) |
| 八郷港 | 鹿児島県 | [32.124363, 130.215776](https://maps.gsi.go.jp/#16/32.124363/130.215776/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimahatigoukou.html) |
| 佐潟港 | 鹿児島県 | [31.994119, 130.186787](https://maps.gsi.go.jp/#16/31.994119/130.186787/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimasagatakou.html) |
| 高之口港 | 鹿児島県 | [31.990097, 130.197859](https://maps.gsi.go.jp/#16/31.990097/130.197859/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimatakanokutikou.html) |
| 牛ノ浜漁港 | 鹿児島県 | [31.975773, 130.204146](https://maps.gsi.go.jp/#16/31.975773/130.204146/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimausinohamagyokou.html) |
| 汐見漁港 | 鹿児島県 | [32.107879, 130.13973](https://maps.gsi.go.jp/#16/32.107879/130.13973/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimasiomigyokou.html) |
| 北方崎港 | 鹿児島県 | [32.209261, 130.110784](https://maps.gsi.go.jp/#16/32.209261/130.110784/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimaholtupouzakikou.html) |
| 薄井漁港 | 鹿児島県 | [32.227705, 130.176294](https://maps.gsi.go.jp/#16/32.227705/130.176294/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimausuigyokou.html) |
| 観音港 | 鹿児島県 | [32.148365, 130.201185](https://maps.gsi.go.jp/#16/32.148365/130.201185/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimakannnonnkou.html) |
| 小島港 | 鹿児島県 | [32.117366, 130.175886](https://maps.gsi.go.jp/#16/32.117366/130.175886/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimakojimakou.html) |
| 唐浜漁港 | 鹿児島県 | [31.868173, 130.203974](https://maps.gsi.go.jp/#16/31.868173/130.203974/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimakarahamagyokou.html) |
| 土川漁港 | 鹿児島県 | [31.777814, 130.180113](https://maps.gsi.go.jp/#16/31.777814/130.180113/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimatutikawagyokou.html) |
| 羽島漁港 | 鹿児島県 | [31.753222, 130.198138](https://maps.gsi.go.jp/#16/31.753222/130.198138/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimahasimagyokou.html) |
| 小沢漁港 | 青森県 | [41.165765, 140.873523](https://maps.gsi.go.jp/#16/41.165765/140.873523/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba3/aomorikozawagyokou.html) |
| 蛎崎漁港 | 青森県 | [41.166443, 140.899079](https://maps.gsi.go.jp/#16/41.166443/140.899079/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba3/aomorikakizakigyokou.html) |
| 角違漁港 | 青森県 | [41.209074, 141.092112](https://maps.gsi.go.jp/#16/41.209074/141.092112/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba3/aomorisumitigaigyokou.html) |
| 浜奥内漁港 | 青森県 | [41.20076, 141.261477](https://maps.gsi.go.jp/#16/41.20076/141.261477/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba3/aomorihamaokunaigyokou.html) |
| 狩場沢漁港 | 青森県 | [40.896371, 141.079516](https://maps.gsi.go.jp/#16/40.896371/141.079516/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/aomorikaribasawagyokou.html) |
| 東田沢漁港 | 青森県 | [40.997796, 140.915043](https://maps.gsi.go.jp/#16/40.997796/140.915043/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/aomorihigasitazawagyokou.html) |
| 稲生漁港 | 青森県 | [40.983429, 140.868781](https://maps.gsi.go.jp/#16/40.983429/140.868781/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/aomoriinougyokou.html) |
| 浦田漁港 | 青森県 | [40.962708, 140.860326](https://maps.gsi.go.jp/#16/40.962708/140.860326/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/aomoriuratagyokou.html) |
| 茂浦漁港 | 青森県 | [40.944542, 140.870819](https://maps.gsi.go.jp/#16/40.944542/140.870819/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/aomorimouragyokou.html) |
| 浪打漁港 | 青森県 | [40.924441, 140.867901](https://maps.gsi.go.jp/#16/40.924441/140.867901/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/aomorinamiutigyokou.html) |
| 西浦漁港 | 山口県 | [34.010906, 131.51051](https://maps.gsi.go.jp/#16/34.010906/131.51051/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba3/yamaguchinisiuragyokou.html) |
| 大海漁港 | 山口県 | [34.032692, 131.467016](https://maps.gsi.go.jp/#16/34.032692/131.467016/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba3/yamaguchioomigyokou.html) |
| 床波漁港 | 山口県 | [33.949715, 131.307521](https://maps.gsi.go.jp/#16/33.949715/131.307521/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba3/yamaguchitokonamigyokou.html) |
| 西条港 | 愛媛県 | [33.927889, 133.157473](https://maps.gsi.go.jp/#16/33.927889/133.157473/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/ehimesaijyoukou.html) |
| 桜井漁港 | 愛媛県 | [34.023801, 133.045077](https://maps.gsi.go.jp/#16/34.023801/133.045077/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimesakuraigyokou.html) |
| 富田新港 | 愛媛県 | [34.051628, 133.029757](https://maps.gsi.go.jp/#16/34.051628/133.029757/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimetomitasinnkou.html) |
| 波方港 | 愛媛県 | [34.121451, 132.956607](https://maps.gsi.go.jp/#16/34.121451/132.956607/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimenamikatakou.html) |
| 亀岡漁港 | 愛媛県 | [34.056571, 132.869253](https://maps.gsi.go.jp/#16/34.056571/132.869253/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimekameokagyokou.html) |
| 田之尻漁港 | 愛媛県 | [34.02204, 132.816682](https://maps.gsi.go.jp/#16/34.02204/132.816682/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimetanosirigyokou.html) |
| 土手内港 | 愛媛県 | [33.970787, 132.770698](https://maps.gsi.go.jp/#16/33.970787/132.770698/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimedoteutikou.html) |
| 今出港 | 愛媛県 | [33.813777, 132.685704](https://maps.gsi.go.jp/#16/33.813777/132.685704/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimeimadukou.html) |
| 森漁港 | 愛媛県 | [33.744558, 132.678087](https://maps.gsi.go.jp/#16/33.744558/132.678087/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimemorigyokou.html) |
| 喜多漁港 | 愛媛県 | [33.634399, 132.525415](https://maps.gsi.go.jp/#16/33.634399/132.525415/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimekitagyokou.html) |
| 窪津漁港 | 高知県 | [32.786607, 132.997227](https://maps.gsi.go.jp/#16/32.786607/132.997227/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochikubotugyokou.html) |
| 以布利漁港 | 高知県 | [32.799649, 132.965341](https://maps.gsi.go.jp/#16/32.799649/132.965341/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochiiburigyokou.html) |
| 初崎漁港 | 高知県 | [32.932714, 132.987013](https://maps.gsi.go.jp/#16/32.932714/132.987013/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochihatuzakigyokou.html) |
| 伊田漁港 | 高知県 | [33.034625, 133.075333](https://maps.gsi.go.jp/#16/33.034625/133.075333/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochiidagyokou.html) |
| 志和漁港 | 高知県 | [33.23018, 133.250535](https://maps.gsi.go.jp/#16/33.23018/133.250535/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochisiwagyokou.html) |
| 矢井賀漁港 | 高知県 | [33.242026, 133.247616](https://maps.gsi.go.jp/#16/33.242026/133.247616/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochiyaigagyokou.html) |
| 中ノ島漁港 | 高知県 | [33.358492, 133.308921](https://maps.gsi.go.jp/#16/33.358492/133.308921/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochinakanosimagyokou.html) |
| 宇佐福島港 | 高知県 | [33.442078, 133.438482](https://maps.gsi.go.jp/#16/33.442078/133.438482/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochiusafukusimakou.html) |
| 宇佐漁港 | 高知県 | [33.451048, 133.446915](https://maps.gsi.go.jp/#16/33.451048/133.446915/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochiusagyokou.html) |
| 貴船漁港 | 高知県 | [33.501503, 133.566113](https://maps.gsi.go.jp/#16/33.501503/133.566113/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochikifunegyokou.html) |
| 相浦港 | 長崎県 | [33.193862, 129.654357](https://maps.gsi.go.jp/#16/33.193862/129.654357/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/nagasakiainourakou.html) |
| 東浜港 | 長崎県 | [33.133383, 129.742484](https://maps.gsi.go.jp/#16/33.133383/129.742484/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/nagasakihigasihamakou.html) |
| 寄船港 | 長崎県 | [33.097312, 129.682896](https://maps.gsi.go.jp/#16/33.097312/129.682896/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/nagasakiyorifunekou.html) |
| 大島漁港 | 長崎県 | [33.05736, 129.607301](https://maps.gsi.go.jp/#16/33.05736/129.607301/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/nagasakioosimagyokou.html) |
| 太田尾漁港 | 長崎県 | [33.039536, 129.590435](https://maps.gsi.go.jp/#16/33.039536/129.590435/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/nagasakiootaogyokou.html) |
| 崎戸港 | 長崎県 | [33.020341, 129.566574](https://maps.gsi.go.jp/#16/33.020341/129.566574/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/nagasakisakitokou.html) |
| 見立港 | 千葉県 | [35.427316, 139.903185](https://maps.gsi.go.jp/#16/35.427316/139.903185/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibamitatekou.html) |
| 竹岡港 | 千葉県 | [35.208985, 139.844992](https://maps.gsi.go.jp/#16/35.208985/139.844992/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibatakeokakou.html) |
| 大賀堤防 | 千葉県 | [34.981839, 139.823577](https://maps.gsi.go.jp/#16/34.981839/139.823577/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibaookateibou.html) |
| 見物堤防 | 千葉県 | [34.973909, 139.793386](https://maps.gsi.go.jp/#16/34.973909/139.793386/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibakennbututeibou.html) |
| 坂田堤防 | 千葉県 | [34.976916, 139.77416](https://maps.gsi.go.jp/#16/34.976916/139.77416/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibabanndateibou.html) |
| 久連港 | 静岡県 | [35.021439, 138.869505](https://maps.gsi.go.jp/#16/35.021439/138.869505/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/sizuokakudurakou.html) |
| 井田港 | 静岡県 | [35.000437, 138.778739](https://maps.gsi.go.jp/#16/35.000437/138.778739/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/sizuokaitakou.html) |
| 楠漁港 | 三重県 | [34.904516, 136.645632](https://maps.gsi.go.jp/#16/34.904516/136.645632/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba2/yoltukaitisikusu.html) |
| 柏漁港 | 和歌山県 | [33.948362, 135.09495](https://maps.gsi.go.jp/#16/33.948362/135.09495/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamakasiwagyokou.html) |
| 南塩屋漁港 | 和歌山県 | [33.862861, 135.159323](https://maps.gsi.go.jp/#16/33.862861/135.159323/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamaminamisioya.html) |
| 埴田漁港（南部漁港） | 和歌山県 | [33.759259, 135.324912](https://maps.gsi.go.jp/#16/33.759259/135.324912/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamahanetagyokou.html) |
| 内の浦漁港 | 和歌山県 | [33.696691, 135.387053](https://maps.gsi.go.jp/#16/33.696691/135.387053/&base=std&ls=std&disp=1) | [参照](https://wakayama.turihiroba.com/turiba/wakayamautinouragyokou.html) |
| 鹿島・宮ノ口港 | 広島県 | [34.052908, 132.521832](https://maps.gsi.go.jp/#16/34.052908/132.521832/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimamiyanokutikou.html) |
| 伊美港 | 大分県 | [33.687157, 131.600268](https://maps.gsi.go.jp/#16/33.687157/131.600268/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitaimikou.html) |
| 唐隈港 | 鹿児島県 | [32.117947, 130.121577](https://maps.gsi.go.jp/#16/32.117947/130.121577/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimakarakumakou.html) |
| 城川内港 | 鹿児島県 | [32.14524, 130.114882](https://maps.gsi.go.jp/#16/32.14524/130.114882/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimajyoukawautikou.html) |
| 西方漁港 | 鹿児島県 | [31.912791, 130.222213](https://maps.gsi.go.jp/#16/31.912791/130.222213/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimanisikatagyokou.html) |
| 蛸田漁港 | 青森県 | [41.132577, 140.790396](https://maps.gsi.go.jp/#16/41.132577/140.790396/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba3/aomoritakodagyokou.html) |
| 清水川漁港 | 青森県 | [40.921036, 141.031559](https://maps.gsi.go.jp/#16/40.921036/141.031559/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/aomorisimizugawagyokou.html) |
| あしずり港 | 高知県 | [32.781015, 132.933261](https://maps.gsi.go.jp/#16/32.781015/132.933261/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochiasizurikou.html) |
| 入野漁港 | 高知県 | [33.011794, 133.010724](https://maps.gsi.go.jp/#16/33.011794/133.010724/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochiirinogyokou.html) |
| 上ノ加江港 | 高知県 | [33.274431, 133.246286](https://maps.gsi.go.jp/#16/33.274431/133.246286/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochikaminokaekou.html) |
| 前津吉漁港 | 長崎県 | [33.209375, 129.452076](https://maps.gsi.go.jp/#16/33.209375/129.452076/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba5/nagasakimaetuyosigyokou.html) |

## 主な除外・補正

- 和歌山北港魚つり公園：休園の情報があるため追加しない。
- 小田漁港：既存地点と38mで一致し、別名による重複登録を回避。
- 清水港の鉄道岸壁・江尻埠頭：別の埠頭へ検索結果が置かれていたため今回は除外。
- 松合漁港・口広漁港・江梨港：町中心や山中の検索位置を採用しない。
- 福浦・宮崎・田野浦・川内など：検索で別県の同名地点が返った候補を除外。
- 中山漁港：波止の制限を明記し、港内側の代表位置と区別。
- 地点の追加と全国47都道府県それぞれ20地点の目標は別。北海道・秋田・山形・石川・鳥取など不足地域は残っている。確認できない港を数合わせで登録しない。
