# ラブテニ Supabase ログイン機能 — セットアップガイド

## ① Supabaseプロジェクト作成

1. https://supabase.com でアカウント作成・ログイン
2. **New project** → プロジェクト名: `loveteni`、リージョン: **Northeast Asia (Tokyo)** を選択
3. プロジェクト作成完了後、**Settings → API** を開く

必要な値をメモしておく：
```
Project URL:   https://xxxxxxxxxxxxxxxx.supabase.co
anon key:      eyJhbGciOiJIUzI1NiIs...（長い文字列）
```

---

## ② `js/supabase-auth.js` の設定値を書き換える

```js
// 書き換え前
const SUPABASE_URL     = 'https://YOUR_PROJECT_REF.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';

// 書き換え後（実際の値を入れる）
const SUPABASE_URL     = 'https://abcdefghijklmnop.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

> **anon key はフロントエンドに置いてOK**。  
> Supabase のRLS（行レベルセキュリティ）で保護されるため公開しても安全です。

---

## ③ Google OAuth を有効化（Googleログインを使う場合）

### Supabase側
1. Supabase Dashboard → **Authentication → Providers**
2. **Google** を展開 → **Enabled** をON
3. **Redirect URL** をコピーしておく:  
   `https://xxxxxxxx.supabase.co/auth/v1/callback`

### Google Cloud側
1. https://console.cloud.google.com → 新規プロジェクト作成
2. **APIs & Services → OAuth consent screen**  
   - User Type: External → App名: `ラブテニ` → メール設定 → 保存
3. **APIs & Services → Credentials → Create Credentials → OAuth Client ID**  
   - Application type: **Web application**  
   - Authorized redirect URIs: `https://xxxxxxxx.supabase.co/auth/v1/callback`（Supabaseからコピーしたもの）
4. **Client ID** と **Client Secret** をコピー

### Supabaseに戻って入力
- Google Provider画面で **Client ID** と **Client Secret** を貼り付け → Save

---

## ④ メール確認のRedirect URL設定

1. Supabase Dashboard → **Authentication → URL Configuration**
2. **Site URL**: `https://loveteni.pages.dev`
3. **Redirect URLs** に追加:
   ```
   https://loveteni.pages.dev
   https://loveteni.pages.dev/*
   ```
   （ローカル開発用も追加しておくと便利）
   ```
   http://localhost:8788
   http://localhost:8788/*
   ```

---

## ⑤ メールテンプレートを日本語化（任意）

1. Supabase Dashboard → **Authentication → Email Templates**

### Magic Link（マジックリンク）
```html
<h2>ラブテニ ログインリンク</h2>
<p>以下のリンクをクリックしてログインしてください。</p>
<p><a href="{{ .ConfirmationURL }}">ログインする</a></p>
<p>このリンクは1時間有効です。</p>
```

### Confirm Signup（会員登録確認）
```html
<h2>ラブテニ 登録確認</h2>
<p>以下のリンクをクリックして登録を完了してください。</p>
<p><a href="{{ .ConfirmationURL }}">登録を完了する</a></p>
```

---

## ⑥ Cloudflare Pagesにデプロイ

```bash
# 変更ファイル
git add js/supabase-auth.js index.html
git commit -m "feat: Supabase認証基盤を追加（メール/Google/マジックリンク）"
git push
```

Cloudflare Pages が自動デプロイします。

---

## ⑦ 動作確認チェックリスト

- [ ] ヘッダーに「ログイン」ボタンが表示される
- [ ] クリックでモーダルが開く
- [ ] マジックリンクタブ → メールを入力して送信 → メールが届く → クリックでログイン完了
- [ ] ヘッダーにアバター（頭文字）が表示される
- [ ] アバタークリックでドロップダウン（マイギア・ログアウト）
- [ ] ログアウト → 「ログイン」ボタンに戻る
- [ ] マイギアナビ → 未ログインなら自動でモーダルを開く
- [ ] Googleタブ → Googleアカウントで認証できる

---

## 今後の実装ロードマップ

### 次のステップ（マイギア管理）

Supabase SQL Editorで以下のテーブルを作成する：

```sql
-- ユーザーギア管理テーブル
CREATE TABLE user_gears (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id       UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  category      TEXT NOT NULL CHECK (category IN ('racket', 'string', 'grip')),
  brand         TEXT NOT NULL,
  model         TEXT NOT NULL,
  restring_date DATE,         -- ガット張替え日
  tension       TEXT,         -- テンション（例: "50/48"）
  note          TEXT,
  is_current    BOOLEAN DEFAULT true,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- RLS（自分のデータのみアクセス可）
ALTER TABLE user_gears ENABLE ROW LEVEL SECURITY;

CREATE POLICY "自分のギアのみ参照" ON user_gears
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "自分のギアのみ追加" ON user_gears
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "自分のギアのみ更新" ON user_gears
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "自分のギアのみ削除" ON user_gears
  FOR DELETE USING (auth.uid() = user_id);
```

### その後（練習記録）

```sql
-- 練習・試合記録テーブル
CREATE TABLE practice_logs (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id      UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  log_date     DATE NOT NULL,
  type         TEXT CHECK (type IN ('practice', 'match')),
  duration_min INTEGER,
  opponent     TEXT,
  score        TEXT,
  result       TEXT CHECK (result IN ('win', 'lose', 'draw')),
  memo         TEXT,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE practice_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "自分の記録のみ" ON practice_logs
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
```

---

## ファイル構成（追加後）

```
loveteni-cf-v3/
├── index.html              ← 変更済み（auth UI追加）
├── js/
│   └── supabase-auth.js    ← 新規追加（認証モジュール）
├── functions/
│   └── api/
│       ├── fetch-news.js
│       └── rakuten-search.js
├── racket-data.js
├── strings-data.js
├── grips-data.js
└── SUPABASE_SETUP.md       ← このファイル
```
