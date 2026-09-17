# MAP 第2次施設拡充（2026-09-17）

前回の100地点とは別に103地点を追加。MAP全登録は275→378件。船宿・計画エリア・閉鎖施設を「利用候補の釣り場20地点」の達成数へ混ぜない。

## 調査と採用基準

- 管理釣り場ドットコムとハヤブサHEATで施設名・所在地候補を発見し、運営者・自治体・観光協会等の案内を読んで利用条件を整理した。外部の文章・写真は転載していない。
- 位置は掲載の地図ピンと所在地を照合した参考位置。受付・集合地の場合もあるため、釣り座そのものや周辺全域の立入り許可とは説明しない。
- 既存275件と名称・近接座標を照合。同一施設の改称や複数の池・筏は水増しせず、1施設として登録。
- 駐車場・トイレは今回一律未確認扱い。料金・出船時刻も固定転載しない。各地点に公式リンク・照合資料・確認日を保存。
- 宿泊者限定（百楽荘・海楽園・天草渚亭）、キャンプ利用者限定（アオミ）、港内側禁止（福間）、大鯛コース休止（阿納）、餌釣り終了（日本イワナセンター）を区別した。
- 公式リンクのHTTPSを確認。証明書不備・非対応の場合は警告を回避せず、公開されているHTTP案内を保持し、テストで対象ドメインを限定した。サイトに個人情報を送信していない。
- 季節営業や当日の利用可否は保証しない。公開日以降の規制変更は再確認が必要。

## 採用しなかった例

浮島つり園（閉鎖）、篠島つり天国（2025年終了）、和歌山マリーナシティ海釣り公園（終了）、海恵（終了）、小豆島ふるさと村の海釣り（廃止）、宮津市海洋つり場（当面休業・既存登録あり）、シーロード八幡浜（休業）、BRGD POND（2026年7月終了）、あづま養魚場（確認当日は改修休業）。別事業のドメインへ変わっていた古いリンクも採用しない。

## 県別の進捗

「釣り場」は type=spot かつ closed でないレコード。季節・予約の条件は別途確認する。目標20は将来の編集目標で、今回全県達成したという意味ではない。

`node scripts/audit-map.cjs` で表、`--json` で機械処理用の集計を出力できる。

| 都道府県 | 今回追加 | 利用候補の釣り場（前→後） | 20地点まで不足 |
|---|---:|---:|---:|
| 北海道 | 0 | 11→11 | 9 |
| 青森県 | 1 | 2→3 | 17 |
| 岩手県 | 2 | 3→5 | 15 |
| 宮城県 | 0 | 6→6 | 14 |
| 秋田県 | 0 | 2→2 | 18 |
| 山形県 | 3 | 2→5 | 15 |
| 福島県 | 7 | 5→12 | 8 |
| 茨城県 | 2 | 3→5 | 15 |
| 栃木県 | 0 | 4→4 | 16 |
| 群馬県 | 3 | 7→10 | 10 |
| 埼玉県 | 2 | 1→3 | 17 |
| 千葉県 | 0 | 1→1 | 19 |
| 東京都 | 0 | 8→8 | 12 |
| 神奈川県 | 0 | 12→12 | 8 |
| 新潟県 | 1 | 4→5 | 15 |
| 富山県 | 0 | 2→2 | 18 |
| 石川県 | 1 | 1→2 | 18 |
| 福井県 | 5 | 5→10 | 10 |
| 山梨県 | 6 | 1→7 | 13 |
| 長野県 | 3 | 3→6 | 14 |
| 岐阜県 | 7 | 2→9 | 11 |
| 静岡県 | 2 | 7→9 | 11 |
| 愛知県 | 0 | 7→7 | 13 |
| 三重県 | 7 | 3→10 | 10 |
| 滋賀県 | 7 | 2→9 | 11 |
| 京都府 | 1 | 1→2 | 18 |
| 大阪府 | 6 | 4→10 | 10 |
| 兵庫県 | 2 | 7→9 | 11 |
| 奈良県 | 5 | 1→6 | 14 |
| 和歌山県 | 2 | 4→6 | 14 |
| 鳥取県 | 0 | 2→2 | 18 |
| 島根県 | 0 | 10→10 | 10 |
| 岡山県 | 2 | 5→7 | 13 |
| 広島県 | 4 | 7→11 | 9 |
| 山口県 | 3 | 2→5 | 15 |
| 徳島県 | 0 | 1→1 | 19 |
| 香川県 | 0 | 1→1 | 19 |
| 愛媛県 | 3 | 1→4 | 16 |
| 高知県 | 0 | 0→0 | 20 |
| 福岡県 | 3 | 2→5 | 15 |
| 佐賀県 | 0 | 2→2 | 18 |
| 長崎県 | 3 | 1→4 | 16 |
| 熊本県 | 7 | 5→12 | 8 |
| 大分県 | 0 | 2→2 | 18 |
| 宮崎県 | 1 | 1→2 | 18 |
| 鹿児島県 | 2 | 2→4 | 16 |
| 沖縄県 | 0 | 1→1 | 19 |

## 採用地点と参照先

| 地点 | 都道府県 | 利用条件の確認先 | 名称・位置の照合 |
|---|---|---|---|
| いずもざき海遊広場 フィッシングブリッジ | 新潟県 | [案内](https://www.izumozaki.net/outdoor/sea/) | [資料](https://www.kanritsuriba.com/cgi-bin/niigata/izumozaki/sea.cgi) |
| 海上釣堀フィッシングレインボー | 福井県 | [案内](https://fishing-r.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/fukui/rainbow/sea.cgi) |
| フィッシングランド日向 | 福井県 | [案内](https://fl-hiruga.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/fukui/hiruga/sea.cgi) |
| ブルーパーク阿納 | 福井県 | [案内](https://bluepark-ano.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/fukui/bluepark_ano/sea.cgi) |
| シーパーク丹生 | 福井県 | [案内](http://www1.kl.mmnet-ai.ne.jp/~nyu/seapark.html) | [資料](https://www.kanritsuriba.com/cgi-bin/fukui/sp_nyuu/sea.cgi) |
| 筏釣りの東海 海上釣り堀 | 静岡県 | [案内](https://tokai-ikadatsuri.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/shizuoka/tokai/sea.cgi) |
| 海上釣り堀まるや | 静岡県 | [案内](https://maruya-maruya.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/shizuoka/maruya/sea.cgi) |
| 松名瀬フィッシングパーク | 三重県 | [案内](https://fishing-park.jp/) | [資料](https://www.kanritsuriba.com/cgi-bin/mie/matsunase/sea.cgi) |
| フィッシングパークトリトン | 三重県 | [案内](https://toba-triton.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/mie/triton/sea.cgi) |
| 鵜方浜釣センター 筏・カセ釣り | 三重県 | [案内](https://nishiotosen.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/mie/ugatahama/sea.cgi) |
| はさま浦釣り堀センター | 三重県 | [案内](https://www.hasamaura.com) | [資料](https://www.kanritsuriba.com/cgi-bin/mie/hasama/sea.cgi) |
| 海釣ぽ〜と田尻 | 大阪府 | [案内](https://www.osaka-tajiri.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/osaka/tajiri/sea.cgi) |
| 小島養漁場 | 大阪府 | [案内](http://kojima-fm.jp/) | [資料](https://www.kanritsuriba.com/cgi-bin/osaka/kojima/sea.cgi) |
| 海上釣り堀オーパ | 大阪府 | [案内](https://tsuribori-opa.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/osaka/opa/sea.cgi) |
| 鳥の巣釣り場 | 和歌山県 | [案内](https://www.sinjyo-gyokyou.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/wakayama/torinosu/sea.cgi) |
| 和歌山北港海つり公園 | 和歌山県 | [案内](https://wakayama-fising.jp/) | [資料](https://www.kanritsuriba.com/cgi-bin/wakayama/wakayama_kitakou/sea.cgi) |
| 釣り堀 水宝 | 兵庫県 | [案内](https://www.suihoh.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/hyogo/suiho/sea.cgi) |
| 淡路じゃのひれフィッシングパーク | 兵庫県 | [案内](https://janohire.co.jp/) | [資料](https://www.kanritsuriba.com/cgi-bin/hyogo/janohire/sea.cgi) |
| 天草釣堀レジャーランド | 熊本県 | [案内](https://turiland.jp/) | [資料](https://www.kanritsuriba.com/cgi-bin/kumamoto/leisure/sea.cgi) |
| ジャンボフィッシング村 | 長崎県 | [案内](https://jumbofishing.jimdofree.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/nagasaki/jumbo/sea.cgi) |
| 釣り堀 浜活 | 長崎県 | [案内](https://www.hamakatu.com/) | [資料](https://www.kanritsuriba.com/cgi-bin/nagasaki/hamakatsu/sea.cgi) |
| フィッシングエリア ウキウキランド | 青森県 | [案内](http://ukiukiland.g2.xrea.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=34002) |
| 久慈港シーサイドパーク | 岩手県 | [案内](https://iwate-kuji.com/kujikoshisaidopaku/) | [資料](https://heat-hayabusa.com/activityspot/?sid=135644) |
| フィッシングパーク江釣子 | 岩手県 | [案内](https://www.fp-ezuriko.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=34000) |
| 蔵王釣堀 | 山形県 | [案内](https://www.zao-minsyuku.com/tsuribori/) | [資料](https://heat-hayabusa.com/activityspot/?sid=46018) |
| 長者屋敷 釣り場 | 山形県 | [案内](https://chouja.fishing/) | [資料](https://heat-hayabusa.com/activityspot/?sid=46017) |
| 鳥海高原家族旅行村 渓流釣り場 | 山形県 | [案内](https://www.choukai.jp/ryokomura/) | [資料](https://heat-hayabusa.com/activityspot/?sid=35269) |
| 小田養魚場 | 福島県 | [案内](https://tsuribori.bandaisan.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=132959) |
| 会津高原アングラーズエリア ロストルアーズ | 福島県 | [案内](https://www.lost-lures.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=86405) |
| 幻の岩魚 東北釣堀苑 | 福島県 | [案内](https://iwana.ne.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=86404) |
| アクアマリンいなわしろ 釣り体験 | 福島県 | [案内](https://www.aquamarine.or.jp/kawasemi/) | [資料](https://heat-hayabusa.com/activityspot/?sid=86403) |
| 裏磐梯フォレストスプリングス | 福島県 | [案内](https://urabandai.forest-springs.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=65332) |
| 陣内つりぼり園 | 長野県 | [案内](https://shirakabakogen.jp/spot/jinnaitsuribori) | [資料](https://heat-hayabusa.com/activityspot/?sid=116061) |
| 風布にじます釣り堀センター | 埼玉県 | [案内](https://nijimasuya.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=126728) |
| 奥秩父源流 中津川渓流釣場 | 埼玉県 | [案内](https://www.nakatsu-tsuri.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=65440) |
| Mt.Kentoku Fish & Lodge 釣り堀 | 山梨県 | [案内](https://www.mt-kentoku-fandl.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=133064) |
| 忍野フィッシングエリア | 山梨県 | [案内](https://www.mfi.or.jp/~bass/oshino.html) | [資料](https://heat-hayabusa.com/activityspot/?sid=98559) |
| おくとねフィッシングパーク | 群馬県 | [案内](http://www7.wind.ne.jp/okutone/index_o.htm) | [資料](https://heat-hayabusa.com/activityspot/?sid=61061) |
| 日本イワナセンター | 群馬県 | [案内](http://www7.wind.ne.jp/okutone/center/index.htm) | [資料](https://heat-hayabusa.com/activityspot/?sid=51623) |
| サンワ設計ネーブルパーク 釣り堀 | 茨城県 | [案内](https://navelpark.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=113346) |
| ミッドクリークフィッシングエリア | 茨城県 | [案内](https://midcreek.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=46751) |
| 海楽園 宿泊者向け釣り施設 | 三重県 | [案内](https://www.kairakuen.net/) | [資料](https://heat-hayabusa.com/activityspot/?sid=137115) |
| 大吉アマゴセンター | 三重県 | [案内](https://tsukanko.jp/spot/s1356/) | [資料](https://heat-hayabusa.com/activityspot/?sid=131252) |
| 百楽荘 宿泊者専用釣り桟橋 | 石川県 | [案内](https://www.100raku.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=24828) |
| 八ヶ峰家族旅行村 釣り堀 | 福井県 | [案内](https://hachigamine.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98550) |
| 池田養魚場 渓流釣り | 滋賀県 | [案内](https://iwanaya.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=102424) |
| 泉南フィッシング・パークSAZAN | 大阪府 | [案内](https://www.sazanfisher.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=106730) |
| 王仁新池釣センター | 大阪府 | [案内](https://wanitsuri.wixsite.com/wani-tsuri) | [資料](https://heat-hayabusa.com/activityspot/?sid=102292) |
| 北今西あまご放流釣り場 | 奈良県 | [案内](https://kawarabisou.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=127554) |
| 釣り堀 相ノ見の里 | 山口県 | [案内](https://kuga.iwakuni.city/shop/159) | [資料](https://heat-hayabusa.com/activityspot/?sid=135436) |
| 美祢市養鱒場釣り堀 | 山口県 | [案内](https://karusuto.com/spot/tsuribori/) | [資料](https://heat-hayabusa.com/activityspot/?sid=135435) |
| 川尻岬 | 山口県 | [案内](https://nanavi.jp/activities/kawasirimisaki-camp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=131423) |
| 蒜山塩釜養魚センター | 岡山県 | [案内](https://siogama.sakura.ne.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=120644) |
| 花見養魚センター | 岡山県 | [案内](https://niimi.gr.jp/member/member_detail/index/68.html) | [資料](https://heat-hayabusa.com/activityspot/?sid=98579) |
| しまなみ海道 つり堀公園 | 広島県 | [案内](https://shimanami.main.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=135523) |
| マリンパークおおさき | 広島県 | [案内](https://osakiuchiura-gyokyo.jp/marine-park/) | [資料](https://heat-hayabusa.com/activityspot/?sid=135522) |
| 湯来つり堀 | 広島県 | [案内](https://morishitakashi.wixsite.com/mysite-3) | [資料](https://heat-hayabusa.com/activityspot/?sid=135464) |
| 渓流茶園 | 広島県 | [案内](https://tsuribori191.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=135462) |
| 須賀公園 | 愛媛県 | [案内](https://www.iyokannet.jp/spot/644) | [資料](https://heat-hayabusa.com/activityspot/?sid=122849) |
| 大角海浜公園 | 愛媛県 | [案内](https://www.city.imabari.ehime.jp/kanko/spot/?a=160) | [資料](https://heat-hayabusa.com/activityspot/?sid=122834) |
| 天草渚亭 宿泊者向け釣り施設 | 熊本県 | [案内](https://www.amakusanagisatei.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=137119) |
| お手水の森 釣り堀 | 熊本県 | [案内](https://nijimasu.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=134753) |
| 天草海上釣り堀 楽つり | 熊本県 | [案内](https://rakutsuri.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=134752) |
| 林養魚場 ますつり公園 | 福島県 | [案内](https://www.hayashitrout.com/masutsuri/) | [資料](https://heat-hayabusa.com/activityspot/?sid=33994) |
| 渓流釣り堀 ぼん天 | 福島県 | [案内](http://takamori-bonten.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=33993) |
| 北川遊魚 | 長野県 | [案内](https://www.fc-kitagawa.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98503) |
| フィッシングランドはなおか | 長野県 | [案内](https://fishinglandhanaoka.jimdofree.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98489) |
| FISH ON！鹿留 | 山梨県 | [案内](https://www.sisidome.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=65442) |
| 白州トラウトフィッシングエリア シルフ | 山梨県 | [案内](https://shylph.boy.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=34064) |
| おさかなつり とと | 山梨県 | [案内](https://www.toto-yamanashi.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=34063) |
| ウエストリバーキャンプ場 管理釣り場 | 山梨県 | [案内](https://westriver-camp.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=33596) |
| 白根魚苑 | 群馬県 | [案内](https://www.shiranegyoen.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=34726) |
| あご湾釣りセンター 筏釣り | 三重県 | [案内](https://www.shima.mctv.ne.jp/~agowan/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98611) |
| あくだ渓流苑 | 岐阜県 | [案内](http://www.gujo-tv.ne.jp/~keiryuen/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98603) |
| さかなのさと すぎしま | 岐阜県 | [案内](https://sakananosato.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98602) |
| つりぼり喜水園 | 岐阜県 | [案内](http://www.kisuien.info/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98594) |
| アオミキャンプ場 マス釣り | 岐阜県 | [案内](https://www.tsukechi.jp/camp_aomi/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98590) |
| 明宝 つりぼりや | 岐阜県 | [案内](https://m-i-service.net/tsuriboriya/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98589) |
| やったね！釣り堀 | 岐阜県 | [案内](https://hwju3.hp.peraichi.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98586) |
| 清流長良川あゆパーク 釣り体験 | 岐阜県 | [案内](https://ayupark.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98585) |
| 近江あまごの里 | 滋賀県 | [案内](https://oumiamago.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=102419) |
| 黒滝遊漁場 | 滋賀県 | [案内](https://tsuchiyama-gyokyou.jimdofree.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=102384) |
| へらぶな釣り水茎 | 滋賀県 | [案内](https://ameblo.jp/suikei1002/) | [資料](https://heat-hayabusa.com/activityspot/?sid=102383) |
| フィッシングパーク高島の泉 | 滋賀県 | [案内](https://www.takashimanoizumi.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=60199) |
| 岩魚の里 永源寺グリーンランド | 滋賀県 | [案内](https://eigenjigreenland.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=40398) |
| 南郷水産センター 釣り場 | 滋賀県 | [案内](http://www.suisan-center.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=25899) |
| つり池 弁慶 | 京都府 | [案内](https://benkeiike.web.fc2.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98569) |
| 小さな釣り堀屋 | 大阪府 | [案内](https://tiisanaturibori.jimdofree.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=101346) |
| 和佐又渓流釣り場 | 奈良県 | [案内](https://r.goope.jp/wasamatakeiryu/) | [資料](https://heat-hayabusa.com/activityspot/?sid=115964) |
| 井氷鹿の里・もりもり館 | 奈良県 | [案内](https://g-tourism.jp/kanko/morimorikan/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98576) |
| 中井渓谷自然塾 | 奈良県 | [案内](https://g-tourism.jp/kanko/nakaikeikoku/) | [資料](https://heat-hayabusa.com/activityspot/?sid=98575) |
| 津風呂湖観光 釣り桟橋・貸しボート | 奈良県 | [案内](http://tuburoko.net/) | [資料](https://heat-hayabusa.com/activityspot/?sid=21444) |
| フィッシングパーク大三島 | 愛媛県 | [案内](http://jf-omishima.or.jp/publics/index/20/) | [資料](https://heat-hayabusa.com/activityspot/?sid=34084) |
| 五ヶ瀬 やまめの里 | 宮崎県 | [案内](http://www.yamame.co.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=84647) |
| 舟の口養魚場 | 熊本県 | [案内](https://www.funanokuchiyougyojou.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=84650) |
| 湯の児フィッシングパーク | 熊本県 | [案内](https://www.go-minamata.jp/infodtl.html?ds=2024031506062430465085110012) | [資料](https://heat-hayabusa.com/activityspot/?sid=38277) |
| 木郷滝自然つりセンター | 熊本県 | [案内](https://www.kigo.co.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=24860) |
| ヤマメ釣り堀 細流 | 福岡県 | [案内](https://seseragi.jp/) | [資料](https://heat-hayabusa.com/activityspot/?sid=30833) |
| 福間漁港海浜公園 | 福岡県 | [案内](https://www.city.fukutsu.lg.jp/shisei/shisetsu/4/4146.html) | [資料](https://heat-hayabusa.com/activityspot/?sid=21373) |
| うみんぐ大島 | 福岡県 | [案内](https://umi-ing.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=21289) |
| 迎パールマリン 釣りイカダ | 長崎県 | [案内](https://reonreon.ti-da.net/) | [資料](https://heat-hayabusa.com/activityspot/?sid=32088) |
| 奥花瀬ニジマス釣場 | 鹿児島県 | [案内](https://okuhanaze.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=84646) |
| 釣りイカダ宇検 | 鹿児島県 | [案内](http://www.tsuriikada-uken.com/) | [資料](https://heat-hayabusa.com/activityspot/?sid=84644) |

## 検証

- TypeScript / ESLint：成功。
- 回帰テスト126件：成功。全47都道府県の不足数、釣船・閉鎖施設等の除外、103件のID・近接座標・関連リンクを検査。
- Production build：成功（静的生成1,163ページ）。
- HTTP検査：共有対象1,102ページ、内部リンク、画像、Amazonタグにエラーなし。
- ブラウザ：PC / 390px幅でMAP描画、都道府県・文字検索、個別マーカー、MAP直下の詳細、詳細ページ遷移、横幅、釣具店OFF/ON（全国109件）を確認。コンソールエラーなし。
- クラスタリング・既存URL・トップ基本10魚種・3D操作の実装は変更していない。関連回帰テストが成功。
