-- LOVETENI: 楽天リンク クリック計測用テーブル（STEP9 アクセス解析・収益分析）
--
-- 実行方法:
--   1. Supabase Dashboard を開く（プロジェクトは js/supabase-auth.js に設定済みのものと同一）
--   2. 左メニュー「SQL Editor」→「New query」でこのファイルの内容を貼り付けて実行する
--
-- 実行前に必ずやること:
--   下記2箇所の '(ここに管理者のメールアドレスを入力)' を、実際に管理者としてログインする
--   アカウントのメールアドレスに書き換える。さらに index.html 内の
--   `const ADMIN_EMAIL = 'ADMIN_EMAIL_PLACEHOLDER@example.com';` も必ず同じ値に揃えること。
--   両方が一致していないと、index.html の「アクセス解析」ページは常に非表示のままになる
--   （UIとDBのRLSで二重に管理者チェックをしているため）。

create table if not exists public.link_clicks (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  page text,        -- クリックが発生したページのpathname（例: /index.html, /strings-cheap.html）
  click_type text,  -- 'rakuten' 固定（将来Amazon等を追加する場合の拡張用）
  source text,      -- どのボタン/経路から発生したか（例: openRakuten, rakuten-item-btn）
  label text,       -- 商品名・検索キーワードなど人が読める識別子
  item_url text,    -- 実際に開いた楽天のURL
  price integer,    -- わかる場合のみ（詳細ページ・比較画面など価格情報がある経路）
  shop_name text     -- わかる場合のみ
);

alter table public.link_clicks enable row level security;

-- 誰でも（未ログインの訪問者を含む）クリックを記録できるようにする
create policy "link_clicks_insert_anyone"
  on public.link_clicks
  for insert
  to anon, authenticated
  with check (true);

-- 集計の閲覧は管理者のメールアドレスでログインしたユーザーのみに限定する
create policy "link_clicks_select_admin_only"
  on public.link_clicks
  for select
  to authenticated
  using (auth.jwt() ->> 'email' = '(ここに管理者のメールアドレスを入力)');

-- ===================================================================
-- 参考: SQL Editorから直接集計したい場合のクエリ例
-- ===================================================================

-- 直近30日、ページ別のクリック数
-- select page, count(*) as clicks
-- from public.link_clicks
-- where created_at > now() - interval '30 days'
-- group by page
-- order by clicks desc;

-- 直近30日、商品・リンク別のクリック数
-- select label, count(*) as clicks
-- from public.link_clicks
-- where created_at > now() - interval '30 days'
-- group by label
-- order by clicks desc
-- limit 50;

-- 日別の合計クリック数の推移
-- select date_trunc('day', created_at) as day, count(*) as clicks
-- from public.link_clicks
-- group by day
-- order by day desc;
