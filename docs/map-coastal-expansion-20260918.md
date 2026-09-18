# 岸釣り地点200件の追加（2026-09-18）

## 範囲と確認方法

- 港・波止・護岸を24県で200地点追加。総登録数1128→1328地点（休止・閉鎖38地点を含む）、通常表示対象1290地点。
- 既存1128地点の全フィールド・URL・分類は変更なし。MAPのプレビュー、クラスタリング、フィルター、お気に入り、船宿・釣具店レイヤーは変更なし。
- 公開の個別釣り場情報を読み、対象魚・足場・注意事項を独自に要約。外部の文章や写真は転載していない。
- Google Maps名称検索は候補座標としてのみ利用。国土地理院標準地図z16の岸壁・波止・海岸線と全追加地点を目視照合して座標を調整した。航空写真での全件確認や現地踏査・管理者照会は行っていない。
- 名称検索が町中心・山中・別県へ置かれた候補、利用区域を特定できない候補、既存地点と一致する候補は除外。代表位置は釣り許可範囲・駐車位置を意味しない。
- 駐車場・トイレの未確認情報は未設定。`verifiedAt`は公開情報を確認した日であり、現地の営業・釣り許可の保証ではない。現地掲示と漁業作業を優先する注意を各地点に掲載。
- 同名の大江・黒崎・大谷・神崎・大浦は新規地点の表示名に県名を付けて区別。既存表示名は維持。
- 共通`shore-spot.ts`と既存レジストリを使用し、魚・釣法・GUIDE・詳細・sitemapへの導線を接続。共有用JPEGも200ページ分追加。

## 利用制限の確認で除外・調整した例

- 犬走堤防：立入禁止の複数の現地紹介を確認し除外。
- 和田漁港：釣り可能区画と禁止堤防の切り分けに確信が持てず除外。
- 能美島・小田漁港：既存小田漁港と同地点のため除外。
- 山形県：県管理漁港の防波堤・酒田港の立入制限を踏まえ、今回の候補を除外。
- 石川県能登側：復旧工事後の利用状況を確認できない候補を数合わせで追加しない。
- 神戸港：港湾施設の立入・釣り制限がある非開放岸壁を除外。
- 乙浜港：南側岸壁を代表位置とし、東側小堤防のエギング制限を明記。今回の推奨釣法にエギングは含めない。
- 熊本県：土砂使用・ばくだん釣り餌料の制限を県の案内に接続。

参考：
- [山形県の漁港防波堤の案内](https://www.pref.yamagata.jp/020026/kensei/joho/kocho/namanokoe/2024nen/4gatsu/0610126.html)
- [酒田港の案内](https://www.pref.yamagata.jp/020026/kensei/joho/kocho/namanokoe/2026nen/4gatsu/0810107.html)
- [神戸市の港湾施設立入制限](https://www.city.kobe.lg.jp/a42810/kouwanshisetu/tachiirikinnshi.html)
- [熊本県の遊漁ルール](https://www.pref.kumamoto.jp/soshiki/94/122478.html)
- [乙浜港の現地紹介](https://chiba-tsuri.net/minamiboso/otohamako/)
- [犬走堤防の立入禁止表示の紹介](https://fish-beginner.com/minamiizu-shimodakou)

## 都道府県別の追加数

| 都道府県 | 追加数 |
| --- | ---: |
| 秋田県 | 2 |
| 福島県 | 1 |
| 茨城県 | 2 |
| 神奈川県 | 4 |
| 愛知県 | 15 |
| 岡山県 | 7 |
| 香川県 | 9 |
| 徳島県 | 2 |
| 宮崎県 | 4 |
| 福岡県 | 9 |
| 佐賀県 | 2 |
| 三重県 | 3 |
| 兵庫県 | 20 |
| 愛媛県 | 20 |
| 高知県 | 12 |
| 長崎県 | 13 |
| 岩手県 | 18 |
| 宮城県 | 19 |
| 千葉県 | 4 |
| 静岡県 | 2 |
| 広島県 | 9 |
| 大分県 | 7 |
| 熊本県 | 10 |
| 鹿児島県 | 6 |

## 個別出典・位置

| 地点 | 都道府県 | 代表座標 | 釣り情報 |
| --- | --- | --- | --- |
| 象潟漁港 | 秋田県 | [39.201614, 139.896061](https://maps.gsi.go.jp/#18/39.201614/139.896061/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/akitakisakatagyokou.html) |
| 小砂川漁港 | 秋田県 | [39.12515, 139.877715](https://maps.gsi.go.jp/#18/39.12515/139.877715/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/akitakosagawagyokou.html) |
| 久之浜港 | 福島県 | [37.148311, 141.002204](https://maps.gsi.go.jp/#18/37.148311/141.002204/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/fukusimahisanohamakou.html) |
| 日立会瀬港 | 茨城県 | [36.575904, 140.660191](https://maps.gsi.go.jp/#18/36.575904/140.660191/&base=std&ls=std&disp=1) | [参照](https://ibaraki.turihiroba.com/turiba/ibarakihitatiousekou.html) |
| 久慈漁港 | 茨城県 | [36.499598, 140.628734](https://maps.gsi.go.jp/#18/36.499598/140.628734/&base=std&ls=std&disp=1) | [参照](https://ibaraki.turihiroba.com/turiba/ibarakikujikou.html) |
| 大津港新堤防 | 神奈川県 | [35.265051, 139.696333](https://maps.gsi.go.jp/#18/35.265051/139.696333/&base=std&ls=std&disp=1) | [参照](https://kanagawa.turihiroba.com/turiba/kanagawaootukousinnteibou.html) |
| 新宿港 | 神奈川県 | [35.203533, 139.606533](https://maps.gsi.go.jp/#18/35.203533/139.606533/&base=std&ls=std&disp=1) | [参照](https://kanagawa.turihiroba.com/turiba/kanagawasinnjyukukou.html) |
| 湘南大堤防 | 神奈川県 | [35.299068, 139.487593](https://maps.gsi.go.jp/#18/35.299068/139.487593/&base=std&ls=std&disp=1) | [参照](https://kanagawa.turihiroba.com/turiba/kanagawasyounanndaiteibou.html) |
| 江之浦漁港 | 神奈川県 | [35.191995, 139.139056](https://maps.gsi.go.jp/#18/35.191995/139.139056/&base=std&ls=std&disp=1) | [参照](https://kanagawa.turihiroba.com/turiba/kanagawaenoura.html) |
| 鍋田避難港 | 愛知県 | [35.036761, 136.7803](https://maps.gsi.go.jp/#18/35.036761/136.7803/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/zznabeta.html) |
| りんくう釣り護岸 | 愛知県 | [34.880844, 136.822894](https://maps.gsi.go.jp/#18/34.880844/136.822894/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/zzrinnkuu.html) |
| 樽水漁港 | 愛知県 | [34.870651, 136.846175](https://maps.gsi.go.jp/#18/34.870651/136.846175/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba3/tokonametarumi.html) |
| 大谷漁港（愛知県） | 愛知県 | [34.839996, 136.865788](https://maps.gsi.go.jp/#18/34.839996/136.865788/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba3/tokonamekosugayaootani.html) |
| 小鈴谷漁港 | 愛知県 | [34.829058, 136.864736](https://maps.gsi.go.jp/#18/34.829058/136.864736/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba3/tokonamekosugaya.html) |
| 洲崎港 | 愛知県 | [34.784096, 137.163985](https://maps.gsi.go.jp/#18/34.784096/137.163985/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/nisiosuzaki.html) |
| 知柄漁港 | 愛知県 | [34.77798, 137.176645](https://maps.gsi.go.jp/#18/34.77798/137.176645/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/gamagooritigara.html) |
| 倉舞港（松島突堤） | 愛知県 | [34.770154, 137.168126](https://maps.gsi.go.jp/#18/34.770154/137.168126/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/gamagoorikuramai.html) |
| 形原漁港 | 愛知県 | [34.790369, 137.190163](https://maps.gsi.go.jp/#18/34.790369/137.190163/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/gamagoorikatahara.html) |
| 三谷漁港 | 愛知県 | [34.811073, 137.248828](https://maps.gsi.go.jp/#18/34.811073/137.248828/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/gamagoorimituya.html) |
| 牛窓港 | 岡山県 | [34.615021, 134.164567](https://maps.gsi.go.jp/#18/34.615021/134.164567/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba1/okayamausimadokou.html) |
| 子父雁漁港 | 岡山県 | [34.588033, 134.115815](https://maps.gsi.go.jp/#18/34.588033/134.115815/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba1/okayamakobukarigyokou.html) |
| 東宝伝漁港 | 岡山県 | [34.589375, 134.108477](https://maps.gsi.go.jp/#18/34.589375/134.108477/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba1/okayamahigasihoudenngyokou.html) |
| 向日比港 | 岡山県 | [34.453227, 133.93055](https://maps.gsi.go.jp/#18/34.453227/133.93055/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba1/okayamamukaihibikou.html) |
| 渋川港 | 岡山県 | [34.456783, 133.8992](https://maps.gsi.go.jp/#18/34.456783/133.8992/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba1/okayamasibukawakou.html) |
| 田之浦港 | 岡山県 | [34.435354, 133.806953](https://maps.gsi.go.jp/#18/34.435354/133.806953/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba1/okayamatanourakou.html) |
| 夏目港（夏目海岸） | 岡山県 | [34.47083, 133.530128](https://maps.gsi.go.jp/#18/34.47083/133.530128/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba1/okayamanatumekou.html) |
| 篠尾漁港 | 香川県 | [34.379217, 134.164352](https://maps.gsi.go.jp/#18/34.379217/134.164352/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/kagawasinoogyokou.html) |
| 庵治漁港 | 香川県 | [34.390408, 134.123433](https://maps.gsi.go.jp/#18/34.390408/134.123433/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/kagawaajigyokou.html) |
| 高松市木材港 | 香川県 | [34.35651, 134.015994](https://maps.gsi.go.jp/#18/34.35651/134.015994/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/kagawamokuzaikou.html) |
| 下笠居漁港 | 香川県 | [34.378066, 133.944025](https://maps.gsi.go.jp/#18/34.378066/133.944025/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/kagawasimokasaigyokou.html) |
| 竹浦漁港 | 香川県 | [34.358512, 133.855684](https://maps.gsi.go.jp/#18/34.358512/133.855684/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/kagawatakeuragyokou.html) |
| 富士見漁港 | 香川県 | [34.306187, 133.791311](https://maps.gsi.go.jp/#18/34.306187/133.791311/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/kagawamarugamekyouteijyouoku.html) |
| 須田港 | 香川県 | [34.234583, 133.652329](https://maps.gsi.go.jp/#18/34.234583/133.652329/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/kagawasudakou.html) |
| 新仁尾港 | 香川県 | [34.199078, 133.636343](https://maps.gsi.go.jp/#18/34.199078/133.636343/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/kagawasinnniokou.html) |
| 室本港 | 香川県 | [34.155621, 133.643789](https://maps.gsi.go.jp/#18/34.155621/133.643789/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/kagawamuromotokou.html) |
| 古牟岐漁港 | 徳島県 | [33.664604, 134.442272](https://maps.gsi.go.jp/#18/33.664604/134.442272/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/tokusimafurumugigyokou.html) |
| 鞆浦漁港 | 徳島県 | [33.592619, 134.363737](https://maps.gsi.go.jp/#18/33.592619/134.363737/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/tokusimatomouragyokou.html) |
| 土々呂港 | 宮崎県 | [32.513326, 131.68582](https://maps.gsi.go.jp/#18/32.513326/131.68582/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba2/miyazakitotorokou.html) |
| 宮崎港 | 宮崎県 | [31.904448, 131.458282](https://maps.gsi.go.jp/#18/31.904448/131.458282/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/miyazakikou.html) |
| 夫婦浦港 | 宮崎県 | [31.494061, 131.384082](https://maps.gsi.go.jp/#18/31.494061/131.384082/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/miyazakimeotourakou.html) |
| 大納港 | 宮崎県 | [31.41222, 131.345179](https://maps.gsi.go.jp/#18/31.41222/131.345179/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/miyazakioonoukou.html) |
| 大入漁港（配崎） | 福岡県 | [33.5129, 130.103681](https://maps.gsi.go.jp/#18/33.5129/130.103681/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba2/fukuokadainyuugyokou.html) |
| 深江漁港 | 福岡県 | [33.522166, 130.132413](https://maps.gsi.go.jp/#18/33.522166/130.132413/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba2/fukuokafukaegyokou.html) |
| 加布里漁港 | 福岡県 | [33.55014, 130.160458](https://maps.gsi.go.jp/#18/33.55014/130.160458/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba2/fukuokakafurigyokou.html) |
| 新町漁港 | 福岡県 | [33.567216, 130.130739](https://maps.gsi.go.jp/#18/33.567216/130.130739/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba2/fukuokasinnmatigyokou.html) |
| 福ノ浦漁港 | 福岡県 | [33.575333, 130.093532](https://maps.gsi.go.jp/#18/33.575333/130.093532/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba2/fukuokafukunouragyokou.html) |
| 野北漁港 | 福岡県 | [33.61453, 130.156338](https://maps.gsi.go.jp/#18/33.61453/130.156338/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba2/fukuokanogitagyokou.html) |
| 稲童漁港 | 福岡県 | [33.703581, 131.035416](https://maps.gsi.go.jp/#18/33.703581/131.035416/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba2/fukuokainadougyokou.html) |
| 飯田漁港 | 佐賀県 | [33.05745, 130.159407](https://maps.gsi.go.jp/#18/33.05745/130.159407/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/sagaiidagyokou.html) |
| 道越漁港 | 佐賀県 | [32.961938, 130.223415](https://maps.gsi.go.jp/#18/32.961938/130.223415/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/sagamitigosigyokou.html) |
| 引本港 | 三重県 | [34.110472, 136.248128](https://maps.gsi.go.jp/#18/34.110472/136.248128/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/kihokuhikimotokou.html) |
| 大曽根浦漁港 | 三重県 | [34.064001, 136.222336](https://maps.gsi.go.jp/#18/34.064001/136.222336/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba3/mieoozoneura.html) |
| 林崎漁港 | 兵庫県 | [34.645195, 134.966998](https://maps.gsi.go.jp/#18/34.645195/134.966998/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/hyougohayasizaki.html) |
| 江井ヶ島漁港 | 兵庫県 | [34.674564, 134.909148](https://maps.gsi.go.jp/#18/34.674564/134.909148/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/hyougoeigasima.html) |
| 高砂港 | 兵庫県 | [34.731614, 134.797461](https://maps.gsi.go.jp/#18/34.731614/134.797461/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/hyougotakasagokou.html) |
| 大塩十三段波止 | 兵庫県 | [34.758661, 134.758666](https://maps.gsi.go.jp/#18/34.758661/134.758666/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/hyougooosiojyuusanndannhato.html) |
| 鰯浜漁港 | 兵庫県 | [34.76536, 134.470918](https://maps.gsi.go.jp/#18/34.76536/134.470918/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/hyougoiwasihamagyokou.html) |
| 浦港 | 兵庫県 | [34.541101, 134.995816](https://maps.gsi.go.jp/#18/34.541101/134.995816/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba5/hyougourakou.html) |
| 釜口漁港 | 兵庫県 | [34.49195, 134.963372](https://maps.gsi.go.jp/#18/34.49195/134.963372/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba5/hyougokamagutigyokou.html) |
| 洲本港 | 兵庫県 | [34.348468, 134.90005](https://maps.gsi.go.jp/#18/34.348468/134.90005/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba5/hyougosumotokou.html) |
| 新川口漁港 | 兵庫県 | [34.29876, 134.942601](https://maps.gsi.go.jp/#18/34.29876/134.942601/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba5/hyougosinnkawaguti.html) |
| 仁頃漁港 | 兵庫県 | [34.191411, 134.74534](https://maps.gsi.go.jp/#18/34.191411/134.74534/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/hyougonigorogyokou.html) |
| 津井漁港 | 兵庫県 | [34.327773, 134.69146](https://maps.gsi.go.jp/#18/34.327773/134.69146/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/hyougotuigyokou.html) |
| 湊港 | 兵庫県 | [34.330838, 134.723775](https://maps.gsi.go.jp/#18/34.330838/134.723775/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/hyougominatokou.html) |
| 鳥飼漁港 | 兵庫県 | [34.374293, 134.748302](https://maps.gsi.go.jp/#18/34.374293/134.748302/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/hyougotorikaigyokou.html) |
| 江井漁港 | 兵庫県 | [34.46846, 134.830935](https://maps.gsi.go.jp/#18/34.46846/134.830935/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/hyougoeigyokou.html) |
| 郡家港 | 兵庫県 | [34.477163, 134.84499](https://maps.gsi.go.jp/#18/34.477163/134.84499/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/hyougogunnkekou.html) |
| 天満漁港 | 愛媛県 | [33.987513, 133.413141](https://maps.gsi.go.jp/#18/33.987513/133.413141/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba1/ehimetennmagyokou.html) |
| 磯河内漁港 | 愛媛県 | [33.93088, 132.761257](https://maps.gsi.go.jp/#18/33.93088/132.761257/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimeisogoutigyokou.html) |
| 下灘漁港 | 愛媛県 | [33.652709, 132.577043](https://maps.gsi.go.jp/#18/33.652709/132.577043/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimesimonadagyokou.html) |
| 沖浦漁港 | 愛媛県 | [33.610384, 132.473724](https://maps.gsi.go.jp/#18/33.610384/132.473724/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimeokiuragyokou.html) |
| 出海漁港 | 愛媛県 | [33.559117, 132.431881](https://maps.gsi.go.jp/#18/33.559117/132.431881/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/ehimeizumigyokou.html) |
| 足成漁港 | 愛媛県 | [33.472959, 132.267494](https://maps.gsi.go.jp/#18/33.472959/132.267494/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimeasinarugyokou.html) |
| 大江漁港（愛媛県） | 愛媛県 | [33.449687, 132.22533](https://maps.gsi.go.jp/#18/33.449687/132.22533/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimeooegyokou.html) |
| 神崎漁港（愛媛県） | 愛媛県 | [33.43171, 132.163768](https://maps.gsi.go.jp/#18/33.43171/132.163768/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimekannzakigyokou.html) |
| 宿毛新港 | 高知県 | [32.920106, 132.678494](https://maps.gsi.go.jp/#18/32.920106/132.678494/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochisukumosinnkou.html) |
| 小室漁港 | 高知県 | [33.161427, 133.205924](https://maps.gsi.go.jp/#18/33.161427/133.205924/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochikomurogyokou.html) |
| 赤岡漁港 | 高知県 | [33.536691, 133.722861](https://maps.gsi.go.jp/#18/33.536691/133.722861/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochiakaokagyokou.html) |
| 住吉漁港 | 高知県 | [33.51637, 133.765025](https://maps.gsi.go.jp/#18/33.51637/133.765025/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochisumiyosigyokou.html) |
| 伊尾木漁港 | 高知県 | [33.469701, 133.941965](https://maps.gsi.go.jp/#18/33.469701/133.941965/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochiiogigyokou.html) |
| 奈半利漁港 | 高知県 | [33.419568, 134.015479](https://maps.gsi.go.jp/#18/33.419568/134.015479/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochinaharigyokou.html) |
| 傍士漁港 | 高知県 | [33.324146, 134.104271](https://maps.gsi.go.jp/#18/33.324146/134.104271/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochihoujigyokou.html) |
| 行当漁港 | 高知県 | [33.293839, 134.11382](https://maps.gsi.go.jp/#18/33.293839/134.11382/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochigyoutougyokou.html) |
| 高岡漁港 | 高知県 | [33.261388, 134.184866](https://maps.gsi.go.jp/#18/33.261388/134.184866/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochitakaokagyokou.html) |
| 三津漁港 | 高知県 | [33.292692, 134.187419](https://maps.gsi.go.jp/#18/33.292692/134.187419/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochimitugyokou.html) |
| 椎名漁港 | 高知県 | [33.327731, 134.198084](https://maps.gsi.go.jp/#18/33.327731/134.198084/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochisiinagyokou.html) |
| 佐喜浜港 | 高知県 | [33.395512, 134.211667](https://maps.gsi.go.jp/#18/33.395512/134.211667/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba2/kochisakihamakou.html) |
| 馬草港 | 愛知県 | [34.669006, 137.197309](https://maps.gsi.go.jp/#18/34.669006/137.197309/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/taharamagusa.html) |
| 宇津江漁港 | 愛知県 | [34.661911, 137.177482](https://maps.gsi.go.jp/#18/34.661911/137.177482/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/taharautue.html) |
| 泉港 | 愛知県 | [34.65471, 137.158577](https://maps.gsi.go.jp/#18/34.65471/137.158577/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/taharaizumi.html) |
| 福江港 | 愛知県 | [34.64689, 137.085364](https://maps.gsi.go.jp/#18/34.64689/137.085364/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/taharafukue.html) |
| 赤羽根漁港 | 愛知県 | [34.604972, 137.188854](https://maps.gsi.go.jp/#18/34.604972/137.188854/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba/taharaakabane.html) |
| 宇島漁港 | 福岡県 | [33.62618, 131.144614](https://maps.gsi.go.jp/#18/33.62618/131.144614/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba2/fukuokaunosimagyokou.html) |
| 吉富港 | 福岡県 | [33.621034, 131.180341](https://maps.gsi.go.jp/#18/33.621034/131.180341/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba2/fukuokayositomikou.html) |
| 黒崎漁港（長崎県） | 長崎県 | [32.834489, 129.714718](https://maps.gsi.go.jp/#18/32.834489/129.714718/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/nagasakikurosakigyokou.html) |
| 手熊漁港 | 長崎県 | [32.775025, 129.800828](https://maps.gsi.go.jp/#18/32.775025/129.800828/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/nagasakitegumagyokou.html) |
| 小江新港 | 長崎県 | [32.756657, 129.808316](https://maps.gsi.go.jp/#18/32.756657/129.808316/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/nagasakikoesinnkou.html) |
| 堀切西港 | 長崎県 | [32.684157, 129.819539](https://maps.gsi.go.jp/#18/32.684157/129.819539/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/nagasakihorikirinisikou.html) |
| 野母漁港 | 長崎県 | [32.583433, 129.7539](https://maps.gsi.go.jp/#18/32.583433/129.7539/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/nagasakinomogyokou.html) |
| 脇岬港 | 長崎県 | [32.579474, 129.781258](https://maps.gsi.go.jp/#18/32.579474/129.781258/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/nagasakiwakimisakikou.html) |
| 木津漁港 | 長崎県 | [32.765896, 130.187516](https://maps.gsi.go.jp/#18/32.765896/130.187516/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/nagasakikitugyokou.html) |
| 木指漁港 | 長崎県 | [32.717417, 130.194919](https://maps.gsi.go.jp/#18/32.717417/130.194919/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/nagasakikisasigyokou.html) |
| 飛子漁港 | 長崎県 | [32.69622, 130.167217](https://maps.gsi.go.jp/#18/32.69622/130.167217/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/nagasakitobikogyokou.html) |
| 西郷港 | 長崎県 | [32.876145, 130.247276](https://maps.gsi.go.jp/#18/32.876145/130.247276/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/nagasakisaigoukou.html) |
| 久山港 | 長崎県 | [32.840673, 130.001349](https://maps.gsi.go.jp/#18/32.840673/130.001349/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/nagasakikuyamakou.html) |
| 子々川漁港 | 長崎県 | [32.864485, 129.806471](https://maps.gsi.go.jp/#18/32.864485/129.806471/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/nagasakisisigawagyokou.html) |
| 彼杵港 | 長崎県 | [33.039392, 129.907515](https://maps.gsi.go.jp/#18/33.039392/129.907515/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/nagasakisonogikou.html) |
| 松崎港 | 三重県 | [33.895943, 136.118288](https://maps.gsi.go.jp/#18/33.895943/136.118288/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba3/mieoodomari.html) |
| 育波漁港 | 兵庫県 | [34.530248, 134.89121](https://maps.gsi.go.jp/#18/34.530248/134.89121/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba5/hyougoikuhagyokou.html) |
| 浅野漁港 | 兵庫県 | [34.535604, 134.910285](https://maps.gsi.go.jp/#18/34.535604/134.910285/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba5/hyougoasanogyokou.html) |
| 富島漁港 | 兵庫県 | [34.548895, 134.930112](https://maps.gsi.go.jp/#18/34.548895/134.930112/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba5/hyougotosimagyokou.html) |
| 田結漁港 | 兵庫県 | [35.644149, 134.842715](https://maps.gsi.go.jp/#18/35.644149/134.842715/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/hyougotaigyokou.html) |
| 香住西港 | 兵庫県 | [35.643626, 134.63007](https://maps.gsi.go.jp/#18/35.643626/134.63007/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba6/hyougokasuminisikou.html) |
| 与侈漁港 | 愛媛県 | [33.388363, 132.077765](https://maps.gsi.go.jp/#18/33.388363/132.077765/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimeyobokorigyokou.html) |
| 伊方港 | 愛媛県 | [33.486167, 132.352595](https://maps.gsi.go.jp/#18/33.486167/132.352595/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimeikatakou.html) |
| 三瓶港 | 愛媛県 | [33.380982, 132.419715](https://maps.gsi.go.jp/#18/33.380982/132.419715/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimemikamekou.html) |
| 大早津の波止 | 愛媛県 | [33.311576, 132.44128](https://maps.gsi.go.jp/#18/33.311576/132.44128/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimeoosoudunohato.html) |
| 浅川漁港 | 愛媛県 | [33.262141, 132.526531](https://maps.gsi.go.jp/#18/33.262141/132.526531/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimeasakawagyokou.html) |
| 赤松漁港 | 愛媛県 | [33.238059, 132.536294](https://maps.gsi.go.jp/#18/33.238059/132.536294/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimeakamatugyokou.html) |
| 九島・本九島港 | 愛媛県 | [33.220864, 132.524471](https://maps.gsi.go.jp/#18/33.220864/132.524471/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimehonnkusimagyokou.html) |
| 石応漁港 | 愛媛県 | [33.213935, 132.518742](https://maps.gsi.go.jp/#18/33.213935/132.518742/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimekokubogyokou.html) |
| 津の浦漁港 | 愛媛県 | [33.200596, 132.446516](https://maps.gsi.go.jp/#18/33.200596/132.446516/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimetunouragyokou.html) |
| 平井漁港 | 愛媛県 | [33.056263, 132.451773](https://maps.gsi.go.jp/#18/33.056263/132.451773/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimehiraigyokou.html) |
| 柏崎漁港 | 愛媛県 | [33.011039, 132.49089](https://maps.gsi.go.jp/#18/33.011039/132.49089/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimekasiwazakigyokou.html) |
| 久良漁港 | 愛媛県 | [32.9426, 132.55022](https://maps.gsi.go.jp/#18/32.9426/132.55022/&base=std&ls=std&disp=1) | [参照](https://s.turihiroba.com/turiba3/ehimehisayosigyokou.html) |
| 羅賀漁港 | 岩手県 | [39.938698, 141.941857](https://maps.gsi.go.jp/#18/39.938698/141.941857/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwateragagyokou.html) |
| 日出島漁港 | 岩手県 | [39.672379, 141.980031](https://maps.gsi.go.jp/#18/39.672379/141.980031/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatehidesimagyokou.html) |
| 高浜漁港 | 岩手県 | [39.600282, 141.954002](https://maps.gsi.go.jp/#18/39.600282/141.954002/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatetakahamagyokou.html) |
| 津軽石漁港 | 岩手県 | [39.594677, 141.963422](https://maps.gsi.go.jp/#18/39.594677/141.963422/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatetugaruisigyokou.html) |
| 白浜漁港 | 岩手県 | [39.609358, 141.975782](https://maps.gsi.go.jp/#18/39.609358/141.975782/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatesirahamagyokou.html) |
| 浦の沢漁港 | 岩手県 | [39.639802, 142.003913](https://maps.gsi.go.jp/#18/39.639802/142.003913/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwateuranosawagyokou.html) |
| 音部漁港 | 岩手県 | [39.599687, 142.029555](https://maps.gsi.go.jp/#18/39.599687/142.029555/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwateotobegyokou.html) |
| 重茂漁港 | 岩手県 | [39.575478, 142.030563](https://maps.gsi.go.jp/#18/39.575478/142.030563/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwateomoegyokou.html) |
| 姉吉漁港 | 岩手県 | [39.532528, 142.053072](https://maps.gsi.go.jp/#18/39.532528/142.053072/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwateaneyosigyokou.html) |
| 千鶏漁港 | 岩手県 | [39.529615, 142.035005](https://maps.gsi.go.jp/#18/39.529615/142.035005/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatetikeigyokou.html) |
| 川代漁港 | 岩手県 | [39.499802, 142.011187](https://maps.gsi.go.jp/#18/39.499802/142.011187/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatekawasirogyokou.html) |
| 山田漁港 | 岩手県 | [39.462455, 141.959023](https://maps.gsi.go.jp/#18/39.462455/141.959023/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwateyamadagyokou.html) |
| 織笠漁港 | 岩手県 | [39.451852, 141.963594](https://maps.gsi.go.jp/#18/39.451852/141.963594/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwateorikasagyokou.html) |
| 大浦漁港（岩手県） | 岩手県 | [39.444943, 142.003891](https://maps.gsi.go.jp/#18/39.444943/142.003891/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwateoouragyokou.html) |
| 小谷鳥漁港 | 岩手県 | [39.425321, 142.014728](https://maps.gsi.go.jp/#18/39.425321/142.014728/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatekoyadorigyokou.html) |
| 山の内漁港 | 岩手県 | [39.426481, 141.975374](https://maps.gsi.go.jp/#18/39.426481/141.975374/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwateyamanoutigyokou.html) |
| 根浜漁港 | 岩手県 | [39.327476, 141.906495](https://maps.gsi.go.jp/#18/39.327476/141.906495/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatenebamagyokou.html) |
| 箱崎漁港 | 岩手県 | [39.326264, 141.913769](https://maps.gsi.go.jp/#18/39.326264/141.913769/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/iwatehakozakigyokou.html) |
| 要害漁港 | 宮城県 | [38.310531, 141.049433](https://maps.gsi.go.jp/#18/38.310531/141.049433/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagiyougaigyokouk.html) |
| 小滝漁港 | 宮城県 | [38.626678, 141.528239](https://maps.gsi.go.jp/#18/38.626678/141.528239/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagikotakigyokou.html) |
| 大指漁港 | 宮城県 | [38.608403, 141.52148](https://maps.gsi.go.jp/#18/38.608403/141.52148/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagioozasigyokou.html) |
| 小指漁港 | 宮城県 | [38.603608, 141.509635](https://maps.gsi.go.jp/#18/38.603608/141.509635/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagikozasigyokou.html) |
| 相川漁港 | 宮城県 | [38.60235, 141.503692](https://maps.gsi.go.jp/#18/38.60235/141.503692/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba2/miyagiaikawagyokou.html) |
| 船越漁港 | 宮城県 | [38.534336, 141.508842](https://maps.gsi.go.jp/#18/38.534336/141.508842/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyagifunakosigyokou.html) |
| 桑浜漁港 | 宮城県 | [38.493571, 141.524549](https://maps.gsi.go.jp/#18/38.493571/141.524549/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyagikuwahamagyokou.html) |
| 波板漁港 | 宮城県 | [38.487911, 141.491675](https://maps.gsi.go.jp/#18/38.487911/141.491675/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyaginamiitagyokou.html) |
| 桐ヶ崎漁港 | 宮城県 | [38.439422, 141.479144](https://maps.gsi.go.jp/#18/38.439422/141.479144/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyagikirigasakigyokou.html) |
| 飯子浜漁港 | 宮城県 | [38.401495, 141.482642](https://maps.gsi.go.jp/#18/38.401495/141.482642/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyagiiigohamagyokou.html) |
| 小屋取漁港 | 宮城県 | [38.408053, 141.50279](https://maps.gsi.go.jp/#18/38.408053/141.50279/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyagikoyadorigyokou.html) |
| 前網漁港 | 宮城県 | [38.389286, 141.515794](https://maps.gsi.go.jp/#18/38.389286/141.515794/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyagimaeamigyokou.html) |
| 新山漁港 | 宮城県 | [38.327939, 141.527617](https://maps.gsi.go.jp/#18/38.327939/141.527617/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyaginiiyamagyokou.html) |
| 表浜漁港 | 宮城県 | [38.323023, 141.466334](https://maps.gsi.go.jp/#18/38.323023/141.466334/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyagiomotehamagyokou.html) |
| 小網倉漁港 | 宮城県 | [38.351131, 141.459682](https://maps.gsi.go.jp/#18/38.351131/141.459682/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyagikoamikuragyokou.html) |
| 狐崎漁港 | 宮城県 | [38.349347, 141.41917](https://maps.gsi.go.jp/#18/38.349347/141.41917/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyagikitunezakigyokou.html) |
| 牧浜漁港 | 宮城県 | [38.365971, 141.437023](https://maps.gsi.go.jp/#18/38.365971/141.437023/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyagimakinohamatakenohama.html) |
| 小積浜漁港 | 宮城県 | [38.372734, 141.454768](https://maps.gsi.go.jp/#18/38.372734/141.454768/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyagioginohamakozumihama.html) |
| 桃浦漁港 | 宮城県 | [38.396248, 141.430736](https://maps.gsi.go.jp/#18/38.396248/141.430736/&base=std&ls=std&disp=1) | [参照](https://t.turihiroba.com/turiba1/miyagimomonouragyokou.html) |
| 原港 | 千葉県 | [34.906065, 139.908743](https://maps.gsi.go.jp/#18/34.906065/139.908743/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibaharakou.html) |
| 乙浜港 | 千葉県 | [34.910675, 139.924707](https://maps.gsi.go.jp/#18/34.910675/139.924707/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibaotohamakou.html) |
| 千田港 | 千葉県 | [34.931911, 139.954555](https://maps.gsi.go.jp/#18/34.931911/139.954555/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibasenndakou.html) |
| 江見港 | 千葉県 | [35.057911, 140.060985](https://maps.gsi.go.jp/#18/35.057911/140.060985/&base=std&ls=std&disp=1) | [参照](https://chiba.turihiroba.com/turiba/tibaemikou.html) |
| 子浦港 | 静岡県 | [34.667858, 138.786356](https://maps.gsi.go.jp/#18/34.667858/138.786356/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba8/sizuokakourakou.html) |
| 下流港 | 静岡県 | [34.623938, 138.87826](https://maps.gsi.go.jp/#18/34.623938/138.87826/&base=std&ls=std&disp=1) | [参照](https://turihiroba.com/turiba8/sizuokasitarukou.html) |
| 小方港（大竹港） | 広島県 | [34.236464, 132.224193](https://maps.gsi.go.jp/#18/34.236464/132.224193/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimaogatakoutobiisikou.html) |
| 倉橋島・渡子の波止 | 広島県 | [34.069334, 132.53859](https://maps.gsi.go.jp/#18/34.069334/132.53859/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimatonokonohato.html) |
| 倉橋島・宇和木の波止 | 広島県 | [34.134222, 132.499452](https://maps.gsi.go.jp/#18/34.134222/132.499452/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimauwaginohato.html) |
| 倉橋島・室尾港 | 広島県 | [34.096471, 132.541187](https://maps.gsi.go.jp/#18/34.096471/132.541187/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimamurookou.html) |
| 能美島・畑漁港 | 広島県 | [34.202539, 132.408257](https://maps.gsi.go.jp/#18/34.202539/132.408257/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimahatagyokou.html) |
| 能美島・深江漁港 | 広島県 | [34.165706, 132.445915](https://maps.gsi.go.jp/#18/34.165706/132.445915/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimafukaegyokou.html) |
| 下蒲刈島・丸谷港 | 広島県 | [34.19512, 132.681005](https://maps.gsi.go.jp/#18/34.19512/132.681005/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimamarutanikou.html) |
| 下蒲刈島・大地蔵港 | 広島県 | [34.173926, 132.660234](https://maps.gsi.go.jp/#18/34.173926/132.660234/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimaoojizoukou.html) |
| 忠海港 | 広島県 | [34.336065, 132.994051](https://maps.gsi.go.jp/#18/34.336065/132.994051/&base=std&ls=std&disp=1) | [参照](https://c.turihiroba.com/turiba2/hirosimatadanoumikou.html) |
| 灘手港 | 大分県 | [33.418708, 131.646917](https://maps.gsi.go.jp/#18/33.418708/131.646917/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitanadatekou.html) |
| 秋ノ江港 | 大分県 | [33.244197, 131.877823](https://maps.gsi.go.jp/#18/33.244197/131.877823/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitaakinoekou.html) |
| 白木漁港 | 大分県 | [33.231562, 131.872888](https://maps.gsi.go.jp/#18/33.231562/131.872888/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitasirakigyokou.html) |
| 中津浦港 | 大分県 | [33.141863, 131.815639](https://maps.gsi.go.jp/#18/33.141863/131.815639/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitanakatuurakou.html) |
| 風成港 | 大分県 | [33.117173, 131.845465](https://maps.gsi.go.jp/#18/33.117173/131.845465/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitakazanasikou_.html) |
| 柿ノ浦港 | 大分県 | [33.243156, 131.884604](https://maps.gsi.go.jp/#18/33.243156/131.884604/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitakakinourakou.html) |
| 長目港 | 大分県 | [33.109014, 131.881192](https://maps.gsi.go.jp/#18/33.109014/131.881192/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba1/ooitanagamekou.html) |
| 猪子田漁港 | 熊本県 | [32.400491, 130.291479](https://maps.gsi.go.jp/#18/32.400491/130.291479/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotoinokodagyokou.html) |
| 栖本漁港 | 熊本県 | [32.411831, 130.273519](https://maps.gsi.go.jp/#18/32.411831/130.273519/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotosumotogyokou.html) |
| 佐伊津漁港 | 熊本県 | [32.494959, 130.197515](https://maps.gsi.go.jp/#18/32.494959/130.197515/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba3/kumamotosaitugyokou.html) |
| 宮津漁港 | 熊本県 | [32.550937, 130.17698](https://maps.gsi.go.jp/#18/32.550937/130.17698/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kumamotomiyatugyokou.html) |
| 引坂漁港 | 熊本県 | [32.550973, 130.159171](https://maps.gsi.go.jp/#18/32.550973/130.159171/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kumamotohikizakagyokou.html) |
| 西河内漁港 | 熊本県 | [32.540826, 130.110075](https://maps.gsi.go.jp/#18/32.540826/130.110075/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kumamotonisikawatigyokou.html) |
| 坂瀬川漁港 | 熊本県 | [32.529682, 130.090549](https://maps.gsi.go.jp/#18/32.529682/130.090549/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kumamotosakasegawagyokou.html) |
| 志岐漁港 | 熊本県 | [32.516258, 130.053577](https://maps.gsi.go.jp/#18/32.516258/130.053577/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kumamotosikigyokou.html) |
| 富岡西港 | 熊本県 | [32.513562, 130.035274](https://maps.gsi.go.jp/#18/32.513562/130.035274/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kumamototomiokanisikou.html) |
| 大江漁港（熊本県） | 熊本県 | [32.321338, 129.992058](https://maps.gsi.go.jp/#18/32.321338/129.992058/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kumamotoooegyokou.html) |
| 大漉港 | 鹿児島県 | [32.111732, 130.190456](https://maps.gsi.go.jp/#18/32.111732/130.190456/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimaoosukikou.html) |
| 倉津港 | 鹿児島県 | [32.014681, 130.182023](https://maps.gsi.go.jp/#18/32.014681/130.182023/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimakuratukou.html) |
| 三船漁港 | 鹿児島県 | [32.215379, 130.161338](https://maps.gsi.go.jp/#18/32.215379/130.161338/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba4/kagosimamifunegyokou.html) |
| 戸崎漁港 | 鹿児島県 | [31.662167, 130.303409](https://maps.gsi.go.jp/#18/31.662167/130.303409/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba5/kagosimatozakigyokou.html) |
| 喜入新港 | 鹿児島県 | [31.379123, 130.550044](https://maps.gsi.go.jp/#18/31.379123/130.550044/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba5/kagosimakiiresinnkou.html) |
| 仁王崎港 | 鹿児島県 | [31.414307, 130.186379](https://maps.gsi.go.jp/#18/31.414307/130.186379/&base=std&ls=std&disp=1) | [参照](https://k.turihiroba.com/turiba5/kagosimaniouzakikou.html) |

## 検証結果

- TypeScript / lint成功、回帰テスト151件成功。production buildで2221ページ生成成功。
- 既存1128地点の全フィールドを追加前JSONと比較し変更0件。
- 追加200地点は重複ID・近接座標・分類・都道府県・範囲の検査で警告なし。既存の位置未登録8件・船宿共有位置6組の警告は今回の変更対象外で増加なし。
- 新規200ページすべてHTTP 200、名称・canonical・sitemap掲載を確認。共有JPEGを200件生成。
- PC 1280×900、iPhone相当390×844で香住西港を検索し、マーカー・プレビュー・詳細への移動・関連魚/釣法/GUIDEの表示を確認。
- スマホのプレビューからお気に入り登録でマーカーに★が反映。解除も確認してテスト前の状態へ戻した。コンソールエラーなし。
- 現地調査ではないため、工事・急な立入制限は現地掲示を優先。全県20地点の目標には未達地域が残る。
