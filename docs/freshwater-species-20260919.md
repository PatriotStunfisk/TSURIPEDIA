# 淡水魚と釣り方の拡充（2026-09-19）

## 追加内容

- ヘラブナ・コイ・オイカワを種別プロフィールへ追加。図鑑、釣法、関連魚、MAP、QUESTは既存レジストリを利用。
- ヘラブナの底釣り・コイの底釣りを追加。既存の淡水小物ウキ釣りにはオイカワを接続。
- 竿、道糸、ハリス、餌、玉網を選ぶための説明と、共通Amazon検索導線を追加。タグ `uolink-22` を維持。
- コイ：うま煮・鯉こく・唐揚げ・甘酢あんかけ。オイカワ：甘露煮・唐揚げ・南蛮漬け・天ぷら。各4料理に専用WebP画像。
- ヘラブナは管理池の釣り・リリースを中心に紹介。持ち帰り不可の施設があるためレシピは設けず、食用不可という意味ではない旨を表示。
- 新規3魚種は透過WebPの2D画像。実在する3Dモデルが未登録のため既存の2D表示を利用。トップの基本10魚種は変更しない。

## 資料

- [DAIWA ヘラブナのウキ釣り](https://www.daiwa.com/jp/beginner/place/herabuna_uki)
- [DAIWA ヘラブナ入門仕掛け](https://www.daiwa.com/-/media/Project/globeride/daiwa_com_dyfc/site/enjoy/rental/pdf/hera.pdf)
- [DAIWA コイのぶっこみ釣り](https://www.daiwa.com/jp/beginner/place/carp_bukkomi)
- [SHIMANO コイ](https://fish.shimano.com/ja-JP/content/beginners/fish/koi/index.html)
- [DAIWA オイカワ](https://www.daiwa.com/jp/column/fish_field_guide/river_lake/058)
- [Honda オイカワ](https://www.honda.co.jp/fishing/picture-book/oikawa/)
- [長谷大池 ヘラブナの利用規則](https://nagataniooike.com/herabuna-fishing/)
- [農林水産省 鯉のうま煮](https://www.maff.go.jp/j/keikaku/syokubunka/traditional-foods/menu/koinoumani.html)
- [農林水産省 鯉こく](https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/koikoku_nagano.html)
- [岐阜県 ザッコの食文化](https://gifu-kiwami.jp/products/3216/)
- [食品安全委員会 淡水魚と寄生虫](https://www.fsc.go.jp/sonota/kiseichu_foodpoisoning2.html)
- [厚生労働省 コイの胆のう](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/syokuchu/poison/animal_det_05.html)

## 画像

魚体3枚・料理8枚は今回生成したオリジナルの説明用画像。第三者の写真の流用や実際の釣果写真としての利用はしない。魚体は透過背景、料理は料理名に合う加熱済みの盛り付けを指定し、出力を目視確認した。魚体は最大1200px、料理は最大960pxに整えてWebPへ変換。

- `/images/fish/{herabuna,koi,oikawa}-profile.webp`
- `/images/cooking/koi-{umani,koikoku,karaage,ankake}.webp`
- `/images/cooking/oikawa-{kanroni,karaage,nanban,tempura}.webp`

淡水魚の生食は案内せず、内臓除去・中心までの加熱を説明。採捕・持ち帰り・リリースは水域と施設の規則を優先する。
