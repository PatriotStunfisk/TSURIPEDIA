# 天気と潮汐

- 日別予報・天文潮位: 気象庁。既存 `/api/weather` を継続利用。
- 時間別天気・気温・降水量・風: MET Norway Locationforecast compact。https://api.met.no/doc/TermsOfService — CC BY 4.0、画面に出典・ライセンス・加工を表示。User-AgentでUOLINKを明示し、サーバーで1時間キャッシュ。利用者のIPや現在地は送信しない。
- 時間別有義波高: PacIOOS WW3 global (NOAA ERDDAP経由)。https://upwell.pfeg.noaa.gov/erddap/info/ww3_global/index.html — 無償利用・再配布可。約0.5度/50km格子。湾内の値を偽装せず、`weather-locations.ts` の別の沖合地点を明示する。港内・岸際の予測ではない。
- 地図輪郭: Natural Earth 1:110m admin_0 countries のJapan、public domain。沖縄は別枠の模式表示。https://www.naturalearthdata.com/about/terms-of-use/

`/api/weather/hourly` は対応都市と今日・明日だけを受け付ける。UTC→JSTの厳密な時刻一致で表に結合する。気象APIが提供しない過去時刻・欠測は `null` / — のまま。波から天気、日別予報から毎時値などを推定しない。片方の取得失敗でももう片方は表示する。外部取得は最大12秒で打ち切り、失敗結果の配信キャッシュは短くする。

トップの6都市概要は時間別APIを呼ばない。地図・時間別表は天気詳細の遅延ロード内に置く。
