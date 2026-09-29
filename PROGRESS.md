# LOVETENI ロードマップ STEP3〜9 進捗

作業開始: 2026-09-28。確認なし・自動実行で連続実装中。会話が途切れた場合はこのファイルから再開すること。

追記(2026-09-29): 表示スケール調整（80〜85%相当への縮小・ヘッダー崩れ修正）と、
軟式（ソフトテニス）版の新規追加を別セッションで実施済み。詳細は本ファイル末尾の
「軟式（ソフトテニス）版 追加」セクションを参照。

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
| STEP7 保護者向けコンテンツ | 完了 | parents.html（新規）, js/site-header.js, index.html |
| STEP8 顧問・コーチ向け練習生成 | 完了 | coach.html（新規）, js/site-header.js, index.html |
| STEP9 アクセス解析・収益分析 | 完了 | js/analytics.js（新規）, supabase/analytics-schema.sql（新規）, js/site-header.js, js/supabase-auth.js, index.html, equipment.html |

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

## STEP7 詳細（完了）

- 新規ページ`parents.html`を追加（既存の静的ページ群と同じ構成：`js/site-header.js`でヘッダー/ナビを共通化、同じCSS変数・フォント・footerパターンを踏襲）
- 内容: 01ラケットの選び方 / 02ガットの選び方 / 03予算の目安（表形式、価格は「目安」と明記） / 04買い替え時期の目安 / 05失敗しない買い方 の5セクション。専門用語（スウィングウェイト等）は使わず、「面」「張り替え」などの最小限の言葉にも都度説明を添えた
- 各セクションから`index.html#diagnosis`・`#rackets`・`#strings`へのCTAリンクで購入導線に接続（ページ下部にも改めてCTAブロックを設置）
- ナビゲーションへの統合: `js/site-header.js`のNAV配列（全静的ページに反映）・index.html自身のgnav・index.htmlのフッターHELP列の3箇所に「保護者ガイド」リンクを追加
- HTMLのタグ対応（div/section/ul/li/table/a/p）をgrepで数え、開閉が一致していることを確認済み（実ブラウザでの見た目確認は未実施）

## STEP8 詳細（完了）

- 新規ページ`coach.html`を追加（court-draw.htmlと同じ「ローカル完結ツール」の作法：ステッパー入力・state管理・コピー/トースト）
- 入力: 参加人数(2〜60)・コート数(1〜10)・練習時間(30〜240分・15分刻み)・レベル(初心者/中級者/上級者)
- 生成ロジックは完全にローカル（外部API呼び出し一切なし）。ウォームアップ12%・基礎打ち28%・技術練習35%・ゲーム形式20%・クールダウン5%の配分で分数を5分刻みに算出し、丸め誤差は「技術練習」枠に寄せて合計が入力した練習時間と必ず一致するようにした
- レベルごとに異なるドリル内容（基礎打ち/技術練習/ゲーム形式）を用意し、レベルを変えると内容も変わる
- コート割りメモを自動生成し、既存の「乱数表」ツール（court-draw.html）への導線を設置
- 「コピーする」（プレーンテキストでクリップボードへ）・「印刷する」（`@media print`でヘッダー/入力欄/ボタンを非表示にし、メニュー部分だけを印刷用に整形）を実装
- ナビゲーションへの統合: `js/site-header.js`のNAV配列・index.htmlのgnav・フッターHELP列の3箇所に「練習メニュー」リンクを追加
- Node上で`generatePractice`を5パターンの入力（30分〜240分、人数6〜40名、レベル3種）で実行し、各配分の合計が入力した練習時間と完全に一致することを確認。ステッパーの上限/下限クランプも境界値で確認済み（実ブラウザでの印刷レイアウト・クリップボード動作の確認は未実施）

## STEP9 詳細（完了）

- 新規`js/analytics.js`（全ページ共通、index.htmlは直接読み込み、他の静的ページは`js/site-header.js`が自動注入）:
  1. `window.ltTrackRakutenClick(meta)` — 各所から呼べる計測関数。localStorage（`lt_click_log_v1`、strings-cheap.htmlの既存`trackClick`と同じ発想を踏襲）と、Supabaseの`link_clicks`テーブルへのfire-and-forget送信の両方を行う
  2. `<a href="...rakuten.co.jp...">` へのクリックを自動捕捉するdocument全体のクリックリスナー（新しいボタンを追加しても自動でカバーされる保険）
  3. Cloudflare Web Analyticsのビーコン挿入（`CF_BEACON_TOKEN`がダミー値の間は挿入しない設計。無駄な404を出さないため）
- `window.open()`でリンクを開く経路（`<a href>`を経由しないためリスナー②では捕捉できない）は個別に計測を追加: index.htmlの`openRakuten`/`openRakutenString`/`openRakutenGrip`/`openRakutenStringRoll`、equipment.htmlの`openRakutenSearch`
- 新規`supabase/analytics-schema.sql`: `link_clicks`テーブルのDDLとRLS（誰でもINSERT可・管理者メールのみSELECT可）。**実行はこのセッションではできないため、人がSupabase側で実行する必要がある**
- index.html に新規SPAビュー`view-analytics`を追加（新規の認証つき静的ページは作らず、既存のSupabase auth・ログインモーダルをそのまま再利用）。管理者メール（`ADMIN_EMAIL`、ダミー値）と一致する場合のみ、直近500件のクリックログをページ別・商品別に集計して表示。フッターの「アクセス解析」リンクから遷移（目立たせすぎないよう主要ナビには追加していない）
- `js/supabase-auth.js`のSIGNED_IN/SIGNED_OUTハンドラに、アクセス解析ページ表示中なら再描画するフックを追加
- Node上で(1)`ltTrackRakutenClick`がSupabaseへ正しい形式でPOSTしlocalStorageにも記録すること (2)`renderAnalyticsView`が未ログイン/権限なし/正常系（50件のモックデータでページ別・商品別集計が正しい件数になること）を確認済み（実ブラウザでの表示・本番Supabase/Cloudflareでの動作確認は未実施）

## 人が確認・設定すべき項目（まとめ）

- [ ] **Cloudflare Web Analytics**: Cloudflareダッシュボード → Analytics & Logs → Web Analytics でサイトを追加し、発行されたトークンで `js/analytics.js` 内の `CF_BEACON_TOKEN`（ダミー値 `'YOUR_CF_BEACON_TOKEN'`）を置き換える
- [ ] **Supabaseテーブル作成**: Supabase Dashboard の SQL Editor で `supabase/analytics-schema.sql` を実行し `link_clicks` テーブルを作成する（実行するまでクリック計測は静かに失敗し続けるだけでサイトの動作には影響しない）
- [ ] **管理者メールアドレスの設定**: `supabase/analytics-schema.sql` 内のダミー管理者メール、および `index.html` 内の `const ADMIN_EMAIL = 'ADMIN_EMAIL_PLACEHOLDER@example.com';` を、実際に管理者としてログインするアカウントのメールアドレスに書き換える（**両方を同じ値に揃えないと「アクセス解析」ページは常に非表示のまま**）
- [ ] 上記3点の設定後、本番環境（loveteni.pages.dev）で実際に楽天リンクをクリックし、`link_clicks`テーブルに行が増えること・「アクセス解析」ページ（フッター内リンク、管理者ログイン後）に集計が表示されることを確認する

---

## 表示スケール調整・ヘッダー崩れ修正（2026-09-29）

- 全ページのフォントサイズ（20px以上の見出し等を階層的に72〜85%）・余白（8px超のpadding/margin/gapを80%）・コンテナ幅（1360→1240px）を縮小。ルートのfont-sizeは変更していない（本サイトはrem単位をほぼ使わずpx直書きのため、html{font-size}を下げても既存CSSには影響しないと判明したため、px値を直接スケールする方式を採用）。
- ヘッダーナビが1440/1280/1024pxで崩れていた問題を修正: 17項目を常時表示7個＋「その他」ドロップダウンに整理（index.html独自ヘッダー・js/site-header.js共通ヘッダー両方）。副次バグとして`.gnav`/`.sh-gnav`の`overflow:hidden`が新設したドロップダウンパネルを切り取っていた問題も発見・修正。
- ヒーローの「ラケットを探す」ボタン幅不揃い・見出し肥大・右側の間延びを修正（3ボタン固定幅200px化、見出し72px化、強調フレーズのwhite-space:nowrap化）。
- モバイルでiOS自動ズームを防ぐため16px未満だった入力欄（ログイン/マイギア/乱数表参加者名）を16pxに統一。
- Playwrightで1920/1440/1280/1024/768/375px×全9ページのスクリーンショット確認済み（横スクロール・JSエラー0件）。

## 軟式（ソフトテニス）版 追加（2026-09-29）

- **アーキテクチャ**: 硬式index.htmlのような単一巨大SPAではなく、`soft-index.html`/`soft-rackets.html`/`soft-strings.html`/`soft-grips.html`/`soft-equipment.html`/`soft-diagnosis.html`/`soft-parents.html`の7つの独立した軽量ページで構成。軟式データはSTEP6で用意した命名規則（`racket-data-soft.js`など、`*_DATA_SPORT='soft'`）に従う。
- **配色**: `js/site-header.js`を`isSoft`（パスが`/soft-*.html`かどうか）で判定してテーマを切り替える方式に改修。硬式の緑（#00513a系）はそのまま、軟式は`--accent:#c2255c`（本文/ボタン用の視認性を保ったピンク）・`--accent-bright:#ec4899`（ホバー用）・`--accent-soft:#fdeef4`（背景アクセント用の淡いピンク）の3階調。**判断**: ユーザー指定の目安色`#f4a6c0`はそのままだと白背景でのテキストコントラストが硬式の緑と同等に保てないため、`--accent-bright`（ホバー・差し色）側に活かし、本文・ボタン背景として使う`--accent`はコントラストを確保できる濃さのピンクにした。各軟式ページ自身の`<style>`でも同じ変数値を個別に定義しており、硬式ページのCSSには一切触れていないため色の混在は起きない（Playwrightで硬式7ページ・軟式7ページのヘッダーを確認し、混在なしを確認済み）。
- **切り替えボタン**: `js/site-header.js`にページ単位の硬式⇔軟式マッピングを実装（例: `/equipment.html`⇔`/soft-equipment.html`、対応ページが無い場合は相手側トップへ）。index.html（site-header.js非使用のSPA）には別途`#sport-toggle-link`を実装し、`navigate()`のビュー名から`/soft-rackets.html`等へ動的にリンク先を切り替える（`navigate('rackets'|'brand'|'series'|'detail')`→`/soft-rackets.html`等）。Playwrightで全パターンの遷移先を確認済み。
- **軟式データ（実在データのみ・推測数値なし）**:
  - `racket-data-soft.js`: YONEX 16モデル・Mizuno 7モデル（計23モデル、2ブランド）。**重要な調査結果**: ブリヂストンは2020年末にテニス事業から撤退しており現行の軟式ラケットが存在しないため掲載していない。プリンスも現行の軟式ラケットラインナップを一次情報で確認できなかったため掲載を見送った（ユーザーの想定ブランド例と実態が異なっていたため明記）。重量・バランス等はWeb検索で確認できたモデルのみ数値を入れ、未確認の項目は`null`のままにして、詳細ページでは「メーカー公表値をご確認ください」と表示する設計にした（数値を推測で埋めていない）。
  - `strings-data-soft.js`: YONEX・GOSEN・TOALSONの計11モデル。
  - `grips-data-soft.js`: YONEX・TOALSONの計5モデル（オーバーグリップは硬式・軟式で共通利用される実在製品）。
  - `balls-data-soft.js`: YONEX・DUNLOP・アカエム・ケンコーの公認球4件（日本ソフトテニス連盟の公認メーカーはアカエム・ダンロップ・ケンコーの3社と確認）。
- **部活カテゴリ**: soft-rackets.html/soft-strings.htmlに硬式と同じ考え方の「部活で使える」フィルター（初心者向け/部活の定番/コスパ重視）を実装。軟式データはlevel/type等の項目自体が少ないため、硬式ほど細かいヒューリスティックにはしていない。
- **ラケット診断**: soft-diagnosis.htmlを新規実装。硬式にない「ポジション（前衛/後衛/オールラウンド）」を質問に追加し、position/level/コンセプト文のキーワード一致でスコアリング（軟式データはweight/balance未確認のモデルが多いため、数値スコアリングには頼らない設計）。
- **保護者向け**: soft-parents.htmlを新規実装。硬式との違い（ラケット/ボールが専用品であること）、予算目安、買い替え時期を軟式向けに書き下ろし。
- **既存機能への影響確認**: Playwrightで硬式の主要ページ（index.html、equipment.html等）を再確認し、ヘッダー配色が緑のまま・「軟式へ切替」ボタンが正しく表示されることを確認。硬式データファイル（racket-data.js等）・既存の比較/診断/今日のLOVETENI機能には一切変更を加えていない。
- **確認方法**: Playwrightで軟式7ページ×2幅（1280px・375px）、硬式ページのヘッダー差分を確認。横スクロール・JSエラーは0件。診断のスコアリング、ラケット一覧の各フィルター（ブランド/ポジション/部活カテゴリ）、詳細ページの「未確認スペックの表示」、深リンク（`#detail/{id}`）の直接アクセスをNode/Playwrightで動作確認済み。
- **未対応事項**:
  - ラケット・比較（商品比較）機能の軟式版は今回未実装（要求リストに明記されていなかったため対象外とした）
  - 「今日のLOVETENI」的な日替わりコンテンツの軟式版は未実装
  - 軟式ラケットの一部モデル（GEOBREAK80シリーズ、VOLTRAGE8シリーズ等）は重量・バランス等の数値スペックが未確認のまま（詳細ページで「メーカー公表値をご確認ください」と表示。確認でき次第、該当フィールドを埋めるだけで反映される設計）
  - プリンス・ブリヂストンの軟式ラケットは掲載していない（上記の調査結果を参照）
  - 本番の楽天API・実ブラウザでの購入導線の動作確認は未実施（ローカル静的サーバーでの確認のみ）
