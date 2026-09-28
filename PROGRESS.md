# LOVETENI ロードマップ STEP3〜9 進捗

作業開始: 2026-09-28。確認なし・自動実行で連続実装中。会話が途切れた場合はこのファイルから再開すること。

## 全体方針・判断ログ

- **アーキテクチャ確認済み**: index.htmlは単一ページのSPA（hashルーティング、`navigate(view)`でview-*のdivを切替、`restoreViewFromHash`/`popstate`でディープリンク復元）。ラケット/ガット/グリップ/用品(acc)の詳細は`showRkOffers`/`renderRkOffers`（STEP2で拡張済み）を共通利用。等身大の他ページ（equipment/calendar/court-draw/ranking/videos/strings-cheap.html）は`js/site-header.js`を読み込む静的ページ。index.htmlだけ独自ヘッダーを内蔵しているため、サイト全体に機能を入れる時はsite-header.js側とindex.html側の両方を触る。
- **診断ロジックの実態**: 既存のラケット診断（QUIZ/RESULTS）は5問だが、結果は`RESULTS[Math.floor(Math.random()*RESULTS.length)]`で**完全ランダム**（回答内容と無関係）。STEP4で実際にRACKET_DATABASEをスコアリングする方式に置き換える。
- **データ構造にprice/level/tagフィールドは存在しない**（racket/strings/grips-data.jsはweight/headSize/balance/pattern等の物理スペックのみ。価格は楽天APIのライブ取得のみ）。STEP4診断・STEP6部活カテゴリは物理スペックからヒューリスティックで導出する関数を作り、データファイル自体（数百モデル）は書き換えない。
- **予算判定は診断の絞り込み候補（上位5件程度）に対してのみ楽天価格を取得**し、価格自体はハードコードしない（レート制限対策を維持するため、全件の価格取得はしない）。
- **軟式（ソフトテニス）分離の土台**: 各データファイルの冒頭に`SPORT = 'hard'`のマーカーコメント/定数を追加し、将来ソフトテニス用データは別ファイル（例: `racket-data-soft.js`, `SPORT='soft'`）・別ルートに置く規約をコメントで明記。既存200+件のレコードに個別フィールドを追加する移行はしない（過剰実装のため）。
- **loveteni-22 は Amazonアソシエイトタグ、かつ equipment.html の楽天検索リンクの`icm_agf`パラメータとしても使用中**。新規に生の楽天検索リンク（API経由でないもの）を作る場合はequipment.htmlの`openRakutenSearch`と同じURL形式（`icm_agf=loveteni-22`付き）を踏襲する。
- **STEP9のクリック計測**: strings-cheap.htmlに既存の`trackClick(id,action)`ローカルログ（「将来の人気度分析の土台」と明記済み）を発見。これを踏襲・拡張する形で`js/analytics.js`を新設し、(1) 全ページ共通のクリックログ(localStorage) (2) Supabaseへのfire-and-forget送信 (3) `<a href*="rakuten.co.jp">`への全サイト共通クリック委譲リスナー、を実装。site-header.js経由で静的ページ全部に自動注入、index.htmlには個別追加。
- **STEP9の集計ページ**: 新規の認証つき静的ページは作らず、index.html内のSPA新ビュー`view-analytics`として実装（既存のSupabase auth・ログインモーダルをそのまま再利用できるため）。表示は管理者メールアドレス一致時のみ（`ADMIN_EMAIL`はダミー値、要書き換え）。DB側もRLSで同じ管理者メールにSELECTを制限（二重の安全策）。
- Supabase資格情報は既存のもの(`js/supabase-auth.js`のURL/anonKey)をそのまま利用（新規発行しない）。新規テーブルのDDLは`supabase/analytics-schema.sql`に用意し、人が手動でSupabase SQL Editorから実行する必要がある（このセッションにはDB実行権限がないため）。

## STEPステータス

| STEP | 状態 | 主な変更ファイル |
|---|---|---|
| STEP3 商品比較機能強化 | 完了 | index.html |
| STEP4 ラケット診断強化 | 完了 | index.html |
| STEP5 今日のLOVETENI | 完了 | index.html |
| STEP6 部活カテゴリ整理 | 完了 | index.html, racket-data.js, strings-data.js, grips-data.js |
| STEP7 保護者向けコンテンツ | 未着手 | |
| STEP8 顧問・コーチ向け練習生成 | 未着手 | |
| STEP9 アクセス解析・収益分析 | 未着手 | |

## STEP3 詳細（完了）

- **既存の比較機能を発見・置き換え**: `view-compare`はすでに存在したが、`prompt()`でモデル名を手入力する2本限定・ラケットのみの試作品だった（`openCompareSelect`/`updateCompare`）。要件（一覧/詳細からワンクリック追加・ガット対応・購入導線・スマホ対応）を満たすため、同じview/nav導線はそのままに中身を全面置き換え。重複実装は作っていない。
- `compareState.racket[]` / `compareState.string[]`（各最大4件、localStorage `lt_compare_v1`）
- ラケット/ガットの一覧カード・詳細ページに「比較に追加」ボタンを追加（`compareBtnHtml`/`updateCompareBtn`）
- 全ビュー共通のフローティングバー（`#compare-fab`）を追加、追加数を表示し「比較する→」で`view-compare`へ
- 比較テーブルは横スクロール対応（`.compare-scroll`）でスマホでも見られる。数値スペックの最良/最悪値を色分け強調（`cmp-min`/`cmp-max`）
- 比較列ごとに1回だけ楽天最安値を取得（既存の`fetchRakutenDetailData`/`getCachedPrice`をそのまま使うためキャッシュ・タイムアウト・レート制限対策は詳細ページと共通）、購入ボタンと商品詳細へのリンクを設置
- Nodeでcompare関連関数のみを切り出し、DOMスタブに対して追加/削除/上限/最大最小ハイライト/空状態/クリアの単体テストを実施し、いずれも期待通りの結果を確認済み（ブラウザ実機・本番楽天APIでの確認は未実施）

## STEP4 詳細（完了）

- 質問を5問→6問に拡張（新規追加：「今、プレーで困っていることは？」＝悩み軸。既存のレベル・プレースタイル・重さ・重視点・予算はそのまま）
- 結果は`RESULTS[Math.floor(Math.random()*RESULTS.length)]`という完全ランダム抽選だったのを廃止し、`RACKET_DATABASE`全モデルを対象に重量/フェイス面積/パターン(縦糸本数)/コンセプト文のキーワードからスコアリングする方式に変更（`scoreRacket`/`quizIdealWeight`/`quizIdealHeadSize`/`quizPatternScore`/`quizConceptScore`）
- シリーズ単位で重複を除いた上位候補（最大5件）だけ楽天の実売価格を取得し、予算内かどうかで並び替え（全件の価格取得はしないためレート制限対策を維持）
- 結果は3〜5本のリスト表示に変更し、各商品に回答内容から動的生成した1行の理由（`buildQuizReason`）、詳細ページ導線、楽天購入導線を追加
- Node上でscoreRacket/renderQuizResultをモックデータで実行し、「パワー重視」「スピン重視」「コントロール重視」「快適性・肘負担」の4シナリオそれぞれで狙い通りの1位モデルが選ばれることを確認済み（実際のRACKET_DATABASE・本番楽天APIでの確認は未実施）

## STEP5 詳細（完了）

- トップページのヒーロー直下（サービス一覧より上、最も目に留まりやすい位置）に「今日のLOVETENI」3カラムを追加
- 日付文字列（YYYY-MM-DD）をシードにした疑似ランダムで「今日の最安ガット」「注目ラケット」「ひと言コラム」を選択（`todaySeed`/`pickOfTheDay`）。日が変われば自動的に内容が変わり、同じ日なら何度見ても同じ内容
- 最安ガットは6モデルの厳選リストから選び、楽天最安値を取得。取得結果はlocalStorageにその日の分だけキャッシュするため、同一端末での再訪問時は楽天APIへ再リクエストしない。加えて`/api/rakuten-search`自体もCloudflareエッジで1時間キャッシュ済みのため、全訪問者合算でもレート制限への影響は小さい
- 注目ラケットは6モデルの厳選リスト、ひと言コラムは12件の短い豆知識から日替わりで選択（コラムはAPI不要の静的テキスト）
- 両方とも詳細ページ（`selectRacket`/`selectString`）・購入導線（楽天リンク）・コラム一覧への遷移を設置
- Node上でシード関数の30日分の分布確認（全6枠に均等に分散）と、`renderTodayWidget`をモックDOM/fetchで実行し3カードが正しく描画されfetchが1回だけ呼ばれることを確認済み（実ブラウザ・本番楽天APIでの確認は未実施）

## STEP6 詳細（完了）

- **部活タグはヒューリスティック算出**（`clubTagsForRacket`/`clubTagsForString`）。データファイルに新フィールドは追加せず、既存の重量・フェイス面積・パターン・材質から都度判定。価格データを持たないため「コスパ重視」はスペック傾向の近似であり実売価格の保証ではない（実データ190ラケット/246ガットで分布を確認し、極端な偏りがないこと・RF01 Pro等の重量級シグネチャーモデルが「部活の定番」に誤って含まれないことを確認・調整済み。ただし完全な精度は価格データなしには出せない限界がある）
- **ガット**: 既存のグローバル横断フィルター（`strFilter`・ブランド/タイプ/形態/ゲージ）に「部活で使える」行（初心者向け/コスパ重視/まとめ買い向け）を追加。既存の`applyStrFilter`/`renderStringsFiltered`/`resetStringFilters`を拡張する形で実装し、重複機能は作っていない
- **ラケット**: 横断フィルターが存在しなかったため、ラケット一覧トップ（ブランド一覧の上）に新規で「部活で使える」フィルター（初心者向け/部活の定番/コスパ重視）を追加。シリーズ単位で重複を除いた代表モデルを表示し、画像取得は`rkf-`という専用ID接頭辞を使うことで既存のシリーズ一覧画像（`ci-`接頭辞）とのDOM ID衝突を回避
- **スコープ判断**: equipment.html（ボール/バッグ/シューズ/アクセサリー）とグリップは、信頼できる部活タグの判定材料（材質・価格傾向）が乏しく、今回は対象外とした。既存機能は一切変更していない
- **軟式（ソフトテニス）分離の土台**: `racket-data.js`/`strings-data.js`/`grips-data.js`の先頭に`RACKET_DATA_SPORT`/`STRING_DATA_SPORT`/`GRIP_DATA_SPORT`（すべて`'hard'`）を追加し、将来ソフトテニス用データは別ファイル・別定数名・別ルートで管理する規約をコメントで明記。**重要な判断**: 当初 `DATA_SPORT` という共通定数名で統一しようとしたが、3ファイルとも index.html に同時読み込みされるためグローバル変数名が衝突し`SyntaxError`でサイト全体が壊れることに気づき、ファイルごとに一意な定数名に変更した（`node`で結合読み込みし衝突がないことを確認済み）
- 一覧や検索から部活向けの絞り込みができるようにする、という要件は今回はラケット・ガットの2大カテゴリで実装。ボール等の消耗品への拡張は将来のSTEPで検討

## 人が確認・設定すべき項目（随時追記）

- [ ] Cloudflare Web Analytics: ダッシュボードでサイト登録し、発行されたトークンで `CF_BEACON_TOKEN`（site-header.js / index.html内）を置き換える
- [ ] Supabase SQL Editorで `supabase/analytics-schema.sql` を実行し `link_clicks` テーブルを作成する
- [ ] `supabase/analytics-schema.sql` 内のダミー管理者メール、および index.html 内の `ADMIN_EMAIL` 定数を実際の管理者メールアドレスに書き換える（両方を揃えないと集計ページは閲覧できない仕様）
