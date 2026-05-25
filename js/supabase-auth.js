/**
 * ラブテニ - Supabase 認証モジュール
 * Supabase JS v2 (CDN) を前提とします
 */

// ================================================================
// ① 設定（Supabaseプロジェクト作成後に書き換えてください）
// ================================================================
const SUPABASE_URL     = 'https://mdrejtyrmjmhitebobhc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_F-5Z_51avlPcWYQK0nhb1g_1mUrsGxV';

// ================================================================
// クライアント初期化
// ================================================================
const { createClient } = window.supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    // Cloudflare Pages では localStorage が使えるのでデフォルトのまま
    persistSession: true,
    autoRefreshToken: true,
  }
});

// 現在のユーザー（グローバルに参照できるよう window に公開）
window.ltCurrentUser = null;
window.ltSupabase    = sb;

// ================================================================
// 認証状態の初期化（DOMContentLoaded 後に呼ぶ）
// ================================================================
async function initAuth() {
  // 既存セッションを復元
  const { data: { session } } = await sb.auth.getSession();
  window.ltCurrentUser = session?.user ?? null;
  renderAuthUI(window.ltCurrentUser);

  // 状態変化リスナー
  sb.auth.onAuthStateChange((event, session) => {
    window.ltCurrentUser = session?.user ?? null;
    renderAuthUI(window.ltCurrentUser);

    if (event === 'SIGNED_IN') {
      closeLoginModal();
      showAuthToast('ログインしました 🎾');
    }
    if (event === 'SIGNED_OUT') {
      showAuthToast('ログアウトしました');
      // マイギアページ表示中ならホームへ
      if (document.getElementById('view-mygear')?.classList.contains('active')) {
        navigate('home');
      }
    }
  });
}

// ================================================================
// ヘッダー UI の描画
// ================================================================
function renderAuthUI(user) {
  const btn = document.getElementById('auth-btn');
  if (!btn) return;

  if (user) {
    const email   = user.email || '';
    const initial = (user.user_metadata?.full_name || email || 'U')[0].toUpperCase();
    const name    = user.user_metadata?.full_name || email.split('@')[0] || 'ユーザー';
    btn.innerHTML = `
      <div class="auth-avatar" onclick="toggleAuthMenu()" title="${email}">
        ${initial}
      </div>
      <div class="auth-menu" id="auth-menu">
        <div class="auth-menu-name">${name}</div>
        <div class="auth-menu-email">${email}</div>
        <hr class="auth-menu-divider">
        <button class="auth-menu-item" onclick="navigate('mygear');closeAuthMenu()">
          🎾 マイギア管理
        </button>
        <button class="auth-menu-item auth-menu-item--danger" onclick="ltSignOut()">
          ログアウト
        </button>
      </div>`;
  } else {
    btn.innerHTML = `
      <button class="btn-login" onclick="openLoginModal()">ログイン</button>`;
  }
}

// ================================================================
// 認証メニュー開閉
// ================================================================
function toggleAuthMenu() {
  const menu = document.getElementById('auth-menu');
  if (!menu) return;
  menu.classList.toggle('open');
  // 外クリックで閉じる
  setTimeout(() => {
    document.addEventListener('click', closeAuthMenuOutside, { once: true });
  }, 0);
}
function closeAuthMenu() {
  document.getElementById('auth-menu')?.classList.remove('open');
}
function closeAuthMenuOutside(e) {
  const menu   = document.getElementById('auth-menu');
  const avatar = document.querySelector('.auth-avatar');
  if (menu && !menu.contains(e.target) && !avatar?.contains(e.target)) {
    menu.classList.remove('open');
  }
}

// ================================================================
// ログインモーダル 開閉
// ================================================================
function openLoginModal() {
  const modal = document.getElementById('login-modal');
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  // タブ初期化
  switchLoginTab('magic');
}
function closeLoginModal() {
  const modal = document.getElementById('login-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  clearLoginError();
  clearLoginSuccess();
}
// モーダル背景クリックで閉じる
document.addEventListener('click', (e) => {
  if (e.target?.id === 'login-modal') closeLoginModal();
});
// Esc キー
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLoginModal();
});

// ================================================================
// タブ切り替え（マジックリンク / パスワード / Google）
// ================================================================
function switchLoginTab(tab) {
  document.querySelectorAll('.login-tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  document.querySelectorAll('.login-tab-content').forEach(c => {
    c.classList.toggle('active', c.dataset.tab === tab);
  });
  clearLoginError();
  clearLoginSuccess();
}

// ================================================================
// マジックリンク（パスワードレス）ログイン
// ================================================================
async function ltSendMagicLink() {
  const email = document.getElementById('magic-email')?.value?.trim();
  if (!email) { showLoginError('メールアドレスを入力してください'); return; }

  const btn = document.getElementById('magic-send-btn');
  btn.disabled = true;
  btn.textContent = '送信中...';

  const { error } = await sb.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: window.location.origin }
  });

  btn.disabled = false;
  btn.textContent = 'マジックリンクを送信';

  if (error) {
    showLoginError(error.message);
  } else {
    showLoginSuccess(`✅ ${email} に認証リンクを送りました。\nメールをご確認ください。`);
  }
}

// ================================================================
// メール + パスワード ログイン
// ================================================================
async function ltSignInWithPassword() {
  const email    = document.getElementById('pw-email')?.value?.trim();
  const password = document.getElementById('pw-password')?.value;
  if (!email || !password) { showLoginError('メールとパスワードを入力してください'); return; }

  const btn = document.getElementById('pw-signin-btn');
  btn.disabled = true;
  btn.textContent = 'ログイン中...';

  const { error } = await sb.auth.signInWithPassword({ email, password });

  btn.disabled = false;
  btn.textContent = 'ログイン';

  if (error) showLoginError(errorToJa(error.message));
}

async function ltSignUpWithPassword() {
  const email    = document.getElementById('pw-email')?.value?.trim();
  const password = document.getElementById('pw-password')?.value;
  if (!email || !password) { showLoginError('メールとパスワードを入力してください'); return; }
  if (password.length < 8)  { showLoginError('パスワードは8文字以上にしてください'); return; }

  const btn = document.getElementById('pw-signup-btn');
  btn.disabled = true;
  btn.textContent = '登録中...';

  const { error } = await sb.auth.signUp({
    email, password,
    options: { emailRedirectTo: window.location.origin }
  });

  btn.disabled = false;
  btn.textContent = '新規登録';

  if (error) {
    showLoginError(errorToJa(error.message));
  } else {
    showLoginSuccess('✅ 確認メールを送信しました。メールのリンクをクリックして登録を完了してください。');
  }
}

// ================================================================
// Google OAuth ログイン
// ================================================================
async function ltSignInWithGoogle() {
  const { error } = await sb.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin,
      queryParams: { prompt: 'select_account' }
    }
  });
  if (error) showLoginError(error.message);
}

// ================================================================
// ログアウト
// ================================================================
async function ltSignOut() {
  closeAuthMenu();
  await sb.auth.signOut();
}

// ================================================================
// マイギアページ — 認証ガード
// ================================================================
function navigateToMygear() {
  if (!window.ltCurrentUser) {
    openLoginModal();
    showLoginError('マイギア機能を使うにはログインが必要です');
    return;
  }
  navigate('mygear');
  loadMygear();
}

// ================================================================
// マイギア — データ読み込み（後で実装するテーブルのプレースホルダー）
// ================================================================
async function loadMygear() {
  if (!window.ltCurrentUser) return;
  const container = document.getElementById('mygear-content');
  if (!container) return;

  container.innerHTML = '<div class="mygear-loading">読み込み中...</div>';

  // TODO: Supabase user_gears テーブルから取得
  // const { data, error } = await sb
  //   .from('user_gears')
  //   .select('*')
  //   .eq('user_id', window.ltCurrentUser.id)
  //   .order('created_at', { ascending: false });

  // 現時点ではプレースホルダー表示
  setTimeout(() => {
    container.innerHTML = `
      <div class="mygear-empty">
        <div class="mygear-empty-icon">🎾</div>
        <p>まだギアが登録されていません</p>
        <p style="color:var(--mute);font-size:14px;margin-top:8px">ラケット・ガット・グリップを登録しましょう</p>
        <button class="btn-primary" style="margin-top:20px" onclick="alert('ギア追加は次のアップデートで実装予定です！')">
          ＋ ギアを追加する
        </button>
      </div>`;
  }, 500);
}

// ================================================================
// UI ヘルパー
// ================================================================
function showLoginError(msg) {
  const el = document.getElementById('login-error');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}
function clearLoginError() {
  const el = document.getElementById('login-error');
  if (el) { el.textContent = ''; el.style.display = 'none'; }
}
function showLoginSuccess(msg) {
  const el = document.getElementById('login-success');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}
function clearLoginSuccess() {
  const el = document.getElementById('login-success');
  if (el) { el.textContent = ''; el.style.display = 'none'; }
}

function showAuthToast(msg) {
  let toast = document.getElementById('auth-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'auth-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function errorToJa(msg) {
  const map = {
    'Invalid login credentials': 'メールアドレスまたはパスワードが正しくありません',
    'Email not confirmed': 'メールアドレスが確認されていません。届いたメールをご確認ください',
    'User already registered': 'このメールアドレスはすでに登録されています',
    'Password should be at least 6 characters': 'パスワードは6文字以上にしてください',
  };
  return map[msg] || msg;
}

// ================================================================
// DOMContentLoaded で初期化
// ================================================================
document.addEventListener('DOMContentLoaded', initAuth);
