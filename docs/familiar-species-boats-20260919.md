# 2026-09-19 魚種・生態・船宿追加の確認記録

## 魚図鑑

- 100→112魚種。スズメダイ、ホシササノハベラ、アカササノハベラ、キュウセン、サッパ、シマガツオ、コブダイ、ウツボ、クロマグロ、ブラウントラウト、コショウダイ、ネンブツダイ。
- 「ササノハベラ」は2種を区別。既存魚を置換せず、プロフィールから一覧・詳細・料理・釣法・GUIDE・QUEST・metadata・sitemapに接続。
- 各魚4料理、合計48料理のレシピと対応画像。魚体画像12枚は透過WebP。新規GLBは追加せず、既存の2Dフォールバックを利用。
- ecology visualは16→28魚種。追加はマサバ、マイワシ、ニホンウナギ、マアナゴ、イシダイ、ホウボウ、マゴチ、カツオ、キュウセン、スズメダイ、ネンブツダイ、コブダイ。
- 画像生成・確認記録は `species-familiar-images.json`。画像と料理内容を照合し、サッパ・コショウダイの不適合案は公開版に使っていない。
- 小魚は大きさにより尾数が変わるため材料を重量基準で記載。ネンブツダイのつみれは骨を除いた身の重量を明記。

## MAP

- 純増55船宿、登録合計2333→2388（釣り場2086、船宿291、計画エリア11）。休業・閉鎖を除く初期表示件数とは異なる。
- 指定の海坊主Ⅴ、勇栄丸、MCL、リタックル、大雄丸を含む。大雄丸は明石沖へ出るが乗船港は須磨。
- 公式乗船案内と地図を照合。店舗・事務所と乗船場所を区別。不明な設備は補わない。
- Y’s、No Limitは既存の別表記と重複したため追加対象から除外。
- 同一岸壁の別船宿4組と宇波港／海坊主Ⅴは座標近接を確認済み。実座標は維持し、既存MAPのマーカー分離表示を利用。
- 約100件の希望に対し今回は55件。残りの候補は乗船位置の特定不足、旧公式ドメインの失効・別用途化、既存との重複があり、未確認データで件数を埋めていない。

### 都道府県別追加数

- 富山県：1件
- 和歌山県：2件
- 兵庫県：2件
- 山形県：2件
- 福井県：4件
- 島根県：2件
- 徳島県：4件
- 秋田県：4件
- 岡山県：3件
- 高知県：2件
- 石川県：3件
- 鳥取県：4件
- 広島県：2件
- 福島県：1件
- 茨城県：6件
- 新潟県：2件
- 福岡県：3件
- 熊本県：1件
- 長崎県：1件
- 沖縄県：1件
- 鹿児島県：4件
- 大分県：1件

## 検証

- TypeScript、ESLint、181テスト、Next.js production build成功。
- 新12魚種の図鑑・料理・48レシピと既存7魚種、計79ページがHTTP 200、canonicalあり。
- PC 1280pxとiPhone相当390pxで船宿検索・マーカー・プレビューを確認。横はみ出しなし、コンソールエラーなし。
- 生態コーナーと画像付き料理をモバイルで確認。ネンブツダイの料理カードからレシピ遷移も確認。
- トップ基本10魚種、既存専用ページ、3D viewer、URL、既存画像は変更なし。
- 実機iPhoneの検証ではなくブラウザの幅指定による確認。

## 船宿の参照元

- 海坊主Ⅴ（富山県）：https://www.umibouzu-5.com/company/
- 勇栄丸（和歌山県）：https://wakayama.tsurisoku.com/yueimaru/access/
- MCL（Marin Club Lotus）（和歌山県）：https://www.mclosaka.com/お問い合わせ
- リタックル（兵庫県）：https://ameblo.jp/akashiretackle/
- 大雄丸（須磨）（兵庫県）：https://daiyuumaru.com/reserve.html
- RDR（酒田）（山形県）：https://www.rdr-sakata.com/access/
- EMPRESS（酒田）（山形県）：https://www.sakata-empress.com/access/
- 一海丸（福井県）：https://ogakimaru.jimdofree.com/
- Aigis（エイジス）（島根県）：https://fishing-aigis.com/
- 海誠（鳴門）（徳島県）：http://narutokaisei.com/gaiyo.html
- 幸豊丸（三隅）（島根県）：https://www.kouhoumaru.com/
- ブラックフィン（秋田県）：https://superblackfin.com/
- 第十八福海丸（福井県）：https://zekkouchou.com/fukukai/
- STAR LINE（三蟠港）（岡山県）：https://yuugyo-starline.amebaownd.com/
- 恋丸（高知県）：https://koimaru-fishing.com/
- 勝丸（塩屋港）（石川県）：http://www2.kagacable.ne.jp/~katumaru11/
- JERK（福井県）：http://cfo-jerk.com/
- SUNLINE（鳥取県）：https://www.sunline-soj.com/
- ZEELⅡ（広島県）：http://www.zeel2.com/
- 第三勝仁丸（秋田県）：https://shojinmaru.com/
- 海匠（徳島県）：https://kaisho1531.jp/
- 大翔丸（鳴門）（徳島県）：https://fishing-taisyomaru.net/
- SEAHAWK（徳島県）：https://seahowk0210.com/
- 流魅丸（石川県）：http://rumimaru.amsstudio.jp/plan.html
- SEA LINE（境港）（鳥取県）：https://www.sea-line.net/
- BIG BOY（秋田港）（秋田県）：http://bigboy-fishing.com/
- 第八光勝丸（福島県）：https://zekkouchou.com/no8koshomaru/
- 盛竜丸（秋田県）：https://seiryumaru.net/
- make LINE 優星丸（広島県）：https://www.make-line.com/
- 第八達丸（鳥取県）：http://www.daihachitatsumaru.com/
- 北祐丸（鳥取県）：http://hokuyuumaru.web.fc2.com/
- 内浜丸（岡山県）：http://www.uchihama.com/info/index.html
- 幸友丸（野々浜港）（岡山県）：http://kouyuumaru.info/
- ちさと丸（高知県）：https://chisatomaru.com/
- RISE金沢（石川県）：https://www.rise-kanazawa.com/
- 仙昇丸（茨城県）：https://senshomaru1.com/
- ナシレラスター（新潟県）：https://nashirera-star.jp/
- たいが（南浜港）（新潟県）：https://www.niigata-taiga.com/
- 徹海丸（福井県）：https://zekkouchou.com/tekkaimaru/
- 勇正丸DREAM（福岡県）：http://yusyomaru-dream.com/
- 雅々丸（福岡県）：https://www.gagamaru.net/price
- 末広丸Ⅲ（熊本県）：https://www.suehiromaruhp.com/about
- それいけ大志丸（長崎県）：https://soreike-taishimaru.com/
- 栄真丸（宮古島）（沖縄県）：https://www.eishinmaru.net/
- 銀鱗（枕崎）（鹿児島県）：https://ginrin.netlify.app/
- 宝生丸（大里）（福岡県）：http://www.houseimaru.net/
- May’s Guide Service（鹿児島県）：https://mays-guide-service.info/
- 絢美丸（鹿児島県）：https://ayamimaru.com/
- 由香丸（伊座敷）（鹿児島県）：https://yugyo-yukamaru.com/
- 弁天丸（会瀬）（茨城県）：https://bentenmaru.net/
- ことぶき丸（会瀬）（茨城県）：https://kotobuki-maru.net/
- 弘漁丸（茨城県）：http://www.kouryoumaru.com/
- 第三直重丸（茨城県）：https://dai3-naojumaru.com/index.html
- 仁徳丸（茨城県）：https://jintokumaru.com/
- オッターテイル（大分県）：http://ottertails.net/home/index.html
