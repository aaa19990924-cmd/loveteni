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
| STEP4 ラケット診断強化 | 未着手 | |
| STEP5 今日のLOVETENI | 未着手 | |
| STEP6 部活カテゴリ整理 | 未着手 | |
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

## 人が確認・設定すべき項目（随時追記）

- [ ] Cloudflare Web Analytics: ダッシュボードでサイト登録し、発行されたトークンで `CF_BEACON_TOKEN`（site-header.js / index.html内）を置き換える
- [ ] Supabase SQL Editorで `supabase/analytics-schema.sql` を実行し `link_clicks` テーブルを作成する
- [ ] `supabase/analytics-schema.sql` 内のダミー管理者メール、および index.html 内の `ADMIN_EMAIL` 定数を実際の管理者メールアドレスに書き換える（両方を揃えないと集計ページは閲覧できない仕様）
