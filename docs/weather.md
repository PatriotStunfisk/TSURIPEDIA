# 天気と潮汐

- 日別予報・天文潮位: 気象庁。既存 `/api/weather` を継続利用。
- 時間別天気・気温・降水量・風: MET Norway Locationforecast compact。https://api.met.no/doc/TermsOfService — CC BY 4.0、画面に出典・ライセンス・加工を表示。User-AgentでUOLINKを明示し、サーバーで1時間キャッシュ。利用者のIPや現在地は送信しない。
- 時間別有義波高: PacIOOS WW3 global (NOAA ERDDAP経由)。https://upwell.pfeg.noaa.gov/erddap/info/ww3_global/index.html — 無償利用・再配布可。約0.5度/50km格子。湾内の値を偽装せず、`weather-locations.ts` の別の沖合地点を明示する。港内・岸際の予測ではない。
- 地図輪郭: Natural Earth 1:110m admin_0 countries のJapan、public domain。沖縄は別枠の模式表示。https://www.naturalearthdata.com/about/terms-of-use/

`/api/weather/hourly` は対応都市と今日・明日だけを受け付ける。UTC→JSTの厳密な時刻一致で表に結合する。気象APIが提供しない過去時刻・欠測は `null` / — のまま。波から天気、日別予報から毎時値などを推定しない。片方の取得失敗でももう片方は表示する。外部取得は最大12秒で打ち切り、失敗結果の配信キャッシュは短くする。

トップの6都市概要は時間別APIを呼ばない。地図・時間別表は天気詳細の遅延ロード内に置く。

## 登録釣り場の地点予報

`/api/weather/places?q=地名` は既存MAPデータの名称・都道府県・エリアを検索し、最大20件を返す。閉鎖済み・座標のない地点を除外。全地点データをブラウザへ送らない。`/weather?spot=<既存slug>` で選択を再現できる。

地点選択時はその座標を用いたMET Norwayの毎時天気・風だけを取得する。任意の外部URL・座標はAPIで受け付けず、既存の地点IDをサーバーで解決する。近隣主要都市の潮位や沖合波高を、その釣り場のデータとして流用しない。未対応の潮汐・波は明記し、主要都市の海域予報も引き続き選べる。

## 地図から地点を選ぶ
Leafletを天気ページ内で遅延ロード。places API の bounds / zoom で表示範囲のみ集約して配信し、予報は選択地点だけ取得する。日本国内の範囲とズームを検証。都市の潮汐を地点の潮汐として流用しない。

## 一覧と詳細の選び分け
初期表示は主要11都市の日本地図。詳細地点検索・Leaflet地図は「もっと詳しい地点を選ぶ」で初めてマウントし、閉じると破棄する。選択した地点・URLは閉じても維持し、主要都市を選ぶと都市の天気・潮汐に戻る。

## Two-day forecast, weekly outlook and detailed-place tides
- `/api/weather/hourly` returns 48 hourly slots from the selected JST date and seven daily outlook rows from the same MET Norway response. Missing one-hour values remain missing; six-hour rain is never relabeled as one-hour rain.
- Weekly weather uses the available symbol nearest noon. Temperature ranges use supplied samples (remaining hours on today, six-hour samples further ahead), not official daily maxima/minima.
- `/api/weather/tide` accepts a registered spot ID and today/tomorrow, with an optional validated station ID. It reuses the JMA astronomical tide parser and cache. One source failure does not block weather.
- `lib/tide-station-data.json` contains 239 station names/codes/coordinates from the JMA 2026 station table, checked 2026-09-24: https://www.data.jma.go.jp/kaiyou/db/tide/suisan/station.php . Nearest eight stations are offered with distance; users can correct a nearest station across a different bay. These are station predictions, never claimed to be the exact fishing location's water level or inland water levels.
- MET format reference: https://docs.api.met.no/doc/ForecastJSON.html . Short-range one-hour and medium-range six-hour fields are kept distinct.
