/**
 * ラブテニ - マイギア管理モジュール
 * 依存: supabase-auth.js (window.ltSupabase, window.ltCurrentUser)
 *      racket-data.js / strings-data.js / grips-data.js のブランド配列
 */

// ================================================================
// 状態
// ================================================================
const LT_MYGEAR = {
  gears: [],              // user_gears の全レコード
  settings: { restring_cycle_days: 30, notify_email: false },
  currentEdit: null,      // 編集中ギアのid or null
  formCategory: 'racket', // モーダル内のカテゴリ
  formBrand: null,
};

// ================================================================
// データ読み込み
// ================================================================
async function ltLoadMygear() {
  const sb = window.ltSupabase;
  const user = window.ltCurrentUser;
  if (!sb || !user) return;

  const container = document.getElementById('mygear-content');
  if (container) container.innerHTML = '<div class="mygear-loading">読み込み中...</div>';

  try {
    // 並列に取得
    const [gearsRes, settingsRes] = await Promise.all([
      sb.from('user_gears').select('*').eq('user_id', user.id).order('created_at', { ascending: false }),
      sb.from('string_settings').select('*').eq('user_id', user.id).single()
    ]);

    if (gearsRes.error) throw gearsRes.error;
    LT_MYGEAR.gears = gearsRes.data || [];

    // 設定が存在しなければデフォルトのままでOK（PostgRESTのsingle()は404を返すのでerrorを許容）
    if (settingsRes.data) {
      LT_MYGEAR.settings = settingsRes.data;
    }

    ltRenderMygear();
  } catch (e) {
    console.error(e);
    if (container) container.innerHTML = `<div class="mygear-empty"><div class="mygear-empty-icon">⚠️</div><p>データの取得に失敗しました</p><p style="color:var(--mute);font-size:13px;margin-top:8px">${e.message || e}</p></div>`;
  }
}

// ================================================================
// 描画
// ================================================================
function ltRenderMygear() {
  const gears = LT_MYGEAR.gears;
  const container = document.getElementById('mygear-content');
  if (!container) return;

  // 統計行（ヘッダー3カード）
  ltRenderStats();

  if (gears.length === 0) {
    container.innerHTML = `
      <div class="mygear-empty">
        <div class="mygear-empty-icon">🎾</div>
        <p>まだギアが登録されていません</p>
        <p style="color:var(--mute);font-size:14px;margin-top:8px">ラケット・ガット・グリップを記録しましょう</p>
        <button class="btn-primary" style="margin-top:20px" onclick="ltOpenGearModal('racket')">
          ＋ 最初のギアを追加
        </button>
      </div>`;
    return;
  }

  const rackets = gears.filter(g => g.category === 'racket');
  const strings = gears.filter(g => g.category === 'string');
  const grips   = gears.filter(g => g.category === 'grip');

  container.innerHTML = `
    ${ltRenderGearSection('🎾', 'ラケット', 'racket', rackets)}
    ${ltRenderGearSection('🪢', 'ガット', 'string', strings)}
    ${ltRenderGearSection('✊', 'グリップ', 'grip', grips)}

    <div class="mygear-settings-bar">
      <span class="mygear-settings-icon">⚙️</span>
      <span>ガット張替え周期: <strong>${LT_MYGEAR.settings.restring_cycle_days}日</strong></span>
      <button class="mygear-settings-btn" onclick="ltOpenSettingsModal()">変更する</button>
    </div>
  `;
}

function ltRenderStats() {
  const row = document.getElementById('mygear-stats-row');
  if (!row) return;

  const currentRacket = LT_MYGEAR.gears.find(g => g.category === 'racket' && g.is_current);
  const currentString = LT_MYGEAR.gears.find(g => g.category === 'string' && g.is_current);
  const cycle = LT_MYGEAR.settings.restring_cycle_days || 30;

  // ラケット
  document.getElementById('mygear-racket-name').textContent = currentRacket
    ? `${currentRacket.brand} ${currentRacket.model}` : '未設定';

  // ガット張替えからの日数
  if (currentString && currentString.restring_date) {
    const days = ltDaysSince(currentString.restring_date);
    const remain = cycle - days;
    const daysEl = document.getElementById('mygear-days');
    const dateEl = document.getElementById('mygear-restring-date');
    daysEl.textContent = `${days} 日経過`;
    if (remain > 0) {
      daysEl.style.color = remain <= 3 ? 'var(--signal)' : 'var(--ink)';
      dateEl.textContent = `推奨張替えまで残り ${remain} 日`;
    } else {
      daysEl.style.color = 'var(--signal)';
      dateEl.textContent = `⚠️ 推奨張替え時期を ${-remain}日 超過`;
    }
  } else {
    document.getElementById('mygear-days').textContent = '— 日';
    document.getElementById('mygear-restring-date').textContent = '';
  }

  // 現在のガット
  document.getElementById('mygear-gut-name').textContent = currentString
    ? `${currentString.brand} ${currentString.model}` : '未設定';

  row.style.display = '';
}

function ltRenderGearSection(emoji, label, category, items) {
  return `
    <section class="mygear-section">
      <div class="mygear-section-head">
        <h3 class="mygear-section-title"><span>${emoji}</span> ${label} <span class="mygear-section-count">${items.length}</span></h3>
        <button class="mygear-add-btn" onclick="ltOpenGearModal('${category}')">＋ 追加</button>
      </div>
      ${items.length === 0
        ? `<div class="mygear-section-empty">登録なし</div>`
        : `<div class="mygear-list">${items.map(g => ltRenderGearCard(g)).join('')}</div>`}
    </section>`;
}

function ltRenderGearCard(g) {
  const isCurrent = g.is_current;
  let detail = '';
  let warning = '';

  if (g.category === 'racket' && g.purchase_date) {
    const months = ltMonthsSince(g.purchase_date);
    detail = `購入: ${ltFmtDate(g.purchase_date)} （在籍 ${months}ヶ月）`;
  } else if (g.category === 'string' && g.restring_date) {
    const days  = ltDaysSince(g.restring_date);
    const cycle = LT_MYGEAR.settings.restring_cycle_days || 30;
    const remain = cycle - days;
    detail = `張替え: ${ltFmtDate(g.restring_date)} （${days}日経過）`;
    if (g.tension) detail += ` / ${g.tension}lbs`;
    if (isCurrent && remain <= 0) {
      warning = `<div class="mygear-card-warn">⚠️ 推奨張替え時期を ${-remain}日 超過しています</div>`;
    } else if (isCurrent && remain <= 3) {
      warning = `<div class="mygear-card-warn-soft">あと ${remain}日 で推奨張替え目安</div>`;
    }
  } else if (g.category === 'grip' && g.purchase_date) {
    detail = `交換: ${ltFmtDate(g.purchase_date)}`;
  }

  return `
    <div class="mygear-card ${isCurrent ? 'is-current' : ''}">
      <div class="mygear-card-main">
        <div class="mygear-card-head">
          <span class="mygear-card-brand">${g.brand}</span>
          ${isCurrent ? '<span class="mygear-current-badge">⭐ 使用中</span>' : ''}
        </div>
        <div class="mygear-card-model">${g.model}</div>
        ${detail ? `<div class="mygear-card-detail">${detail}</div>` : ''}
        ${g.note ? `<div class="mygear-card-note">${g.note}</div>` : ''}
        ${warning}
      </div>
      <div class="mygear-card-actions">
        ${!isCurrent ? `<button class="mygear-act-btn" onclick="ltSetCurrentGear('${g.id}', '${g.category}')" title="使用中にする">⭐</button>` : ''}
        <button class="mygear-act-btn" onclick="ltEditGear('${g.id}')" title="編集">✏️</button>
        <button class="mygear-act-btn mygear-act-danger" onclick="ltDeleteGear('${g.id}')" title="削除">🗑️</button>
      </div>
    </div>`;
}

// ================================================================
// モーダル: 追加/編集
// ================================================================
function ltOpenGearModal(category, editId = null) {
  LT_MYGEAR.currentEdit = editId;
  LT_MYGEAR.formCategory = category;
  LT_MYGEAR.formBrand = null;

  // 既存編集ならフォーム埋め
  let editData = null;
  if (editId) {
    editData = LT_MYGEAR.gears.find(g => g.id === editId);
    if (editData) {
      LT_MYGEAR.formCategory = editData.category;
      LT_MYGEAR.formBrand = editData.brand;
    }
  }

  const labels = { racket: 'ラケット', string: 'ガット', grip: 'グリップ' };
  const brands = ltGetBrandList(LT_MYGEAR.formCategory);

  const modal = document.getElementById('mygear-modal');
  modal.innerHTML = `
    <div class="mygear-modal-box">
      <button class="mygear-modal-close" onclick="ltCloseGearModal()">✕</button>
      <h2 class="mygear-modal-title">${editId ? '✏️ 編集' : '＋ 新規追加'}</h2>

      <div class="mygear-field">
        <label class="mygear-label">カテゴリ</label>
        <div class="mygear-cat-tabs">
          ${['racket','string','grip'].map(c => `
            <button class="mygear-cat-tab ${LT_MYGEAR.formCategory===c?'active':''}"
              ${editId ? 'disabled' : ''}
              onclick="ltSwitchModalCategory('${c}')">${labels[c]}</button>
          `).join('')}
        </div>
      </div>

      <div class="mygear-field">
        <label class="mygear-label">ブランド <span class="mygear-required">*</span></label>
        <select id="mg-brand" class="mygear-input" onchange="LT_MYGEAR.formBrand=this.value">
          <option value="">選択してください</option>
          ${brands.map(b => `<option value="${b}" ${editData && editData.brand===b ? 'selected' : ''}>${b}</option>`).join('')}
        </select>
      </div>

      <div class="mygear-field">
        <label class="mygear-label">モデル名 <span class="mygear-required">*</span></label>
        <input id="mg-model" class="mygear-input" placeholder="例: Pure Aero 98 2026"
          value="${editData ? ltEsc(editData.model) : ''}">
      </div>

      ${LT_MYGEAR.formCategory === 'racket' ? `
        <div class="mygear-field">
          <label class="mygear-label">購入日</label>
          <input id="mg-purchase-date" type="date" class="mygear-input"
            value="${editData && editData.purchase_date ? editData.purchase_date : ''}">
        </div>
      ` : ''}

      ${LT_MYGEAR.formCategory === 'string' ? `
        <div class="mygear-field">
          <label class="mygear-label">張替え日</label>
          <input id="mg-restring-date" type="date" class="mygear-input"
            value="${editData && editData.restring_date ? editData.restring_date : new Date().toISOString().slice(0,10)}">
        </div>
        <div class="mygear-field">
          <label class="mygear-label">テンション</label>
          <input id="mg-tension" class="mygear-input" placeholder="例: 48/46 または 50"
            value="${editData && editData.tension ? ltEsc(editData.tension) : ''}">
        </div>
      ` : ''}

      ${LT_MYGEAR.formCategory === 'grip' ? `
        <div class="mygear-field">
          <label class="mygear-label">交換日</label>
          <input id="mg-purchase-date" type="date" class="mygear-input"
            value="${editData && editData.purchase_date ? editData.purchase_date : new Date().toISOString().slice(0,10)}">
        </div>
      ` : ''}

      <div class="mygear-field">
        <label class="mygear-label">メモ（任意）</label>
        <textarea id="mg-note" class="mygear-input" rows="2"
          placeholder="例: 親指側がほつれてきた / 6本セットで購入">${editData && editData.note ? ltEsc(editData.note) : ''}</textarea>
      </div>

      <div class="mygear-field">
        <label class="mygear-check">
          <input id="mg-current" type="checkbox" ${editData ? (editData.is_current?'checked':'') : 'checked'}>
          <span>現在使用中（同カテゴリで1つだけ⭐マーク）</span>
        </label>
      </div>

      <div id="mygear-modal-error" class="mygear-modal-error"></div>

      <div class="mygear-modal-actions">
        <button class="btn-secondary" onclick="ltCloseGearModal()">キャンセル</button>
        <button class="btn-primary" id="mg-save-btn" onclick="ltSaveGear()">${editId ? '保存する' : '追加する'}</button>
      </div>
    </div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function ltSwitchModalCategory(cat) {
  LT_MYGEAR.formCategory = cat;
  ltOpenGearModal(cat); // 再描画
}

function ltCloseGearModal() {
  const modal = document.getElementById('mygear-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ================================================================
// 保存
// ================================================================
async function ltSaveGear() {
  const errBox = document.getElementById('mygear-modal-error');
  errBox.textContent = '';

  const brand = document.getElementById('mg-brand').value;
  const model = document.getElementById('mg-model').value.trim();
  if (!brand) { errBox.textContent = 'ブランドを選択してください'; return; }
  if (!model) { errBox.textContent = 'モデル名を入力してください'; return; }

  const cat = LT_MYGEAR.formCategory;
  const isCurrent = document.getElementById('mg-current').checked;

  const payload = {
    user_id: window.ltCurrentUser.id,
    category: cat,
    brand, model,
    is_current: isCurrent,
    note: document.getElementById('mg-note').value.trim() || null
  };

  if (cat === 'racket') {
    payload.purchase_date = document.getElementById('mg-purchase-date').value || null;
  } else if (cat === 'string') {
    payload.restring_date = document.getElementById('mg-restring-date').value || null;
    payload.tension = document.getElementById('mg-tension').value.trim() || null;
  } else if (cat === 'grip') {
    payload.purchase_date = document.getElementById('mg-purchase-date').value || null;
  }

  const btn = document.getElementById('mg-save-btn');
  btn.disabled = true;
  btn.textContent = '保存中...';

  const sb = window.ltSupabase;
  try {
    // 「使用中」をONにする場合、まず同カテゴリの既存をすべてOFF
    if (isCurrent) {
      await sb.from('user_gears').update({ is_current: false })
        .eq('user_id', window.ltCurrentUser.id)
        .eq('category', cat);
    }

    if (LT_MYGEAR.currentEdit) {
      const { error } = await sb.from('user_gears').update(payload).eq('id', LT_MYGEAR.currentEdit);
      if (error) throw error;
    } else {
      const { error } = await sb.from('user_gears').insert(payload);
      if (error) throw error;
    }

    ltCloseGearModal();
    ltShowToast(LT_MYGEAR.currentEdit ? '保存しました' : '追加しました');
    await ltLoadMygear();
  } catch (e) {
    errBox.textContent = e.message || 'エラーが発生しました';
    btn.disabled = false;
    btn.textContent = LT_MYGEAR.currentEdit ? '保存する' : '追加する';
  }
}

// ================================================================
// 編集 / 削除 / 使用中切替
// ================================================================
function ltEditGear(id) {
  const g = LT_MYGEAR.gears.find(x => x.id === id);
  if (!g) return;
  ltOpenGearModal(g.category, id);
}

async function ltDeleteGear(id) {
  const g = LT_MYGEAR.gears.find(x => x.id === id);
  if (!g) return;
  if (!confirm(`「${g.brand} ${g.model}」を削除しますか？`)) return;

  const sb = window.ltSupabase;
  const { error } = await sb.from('user_gears').delete().eq('id', id);
  if (error) { alert(error.message); return; }
  ltShowToast('削除しました');
  await ltLoadMygear();
}

async function ltSetCurrentGear(id, category) {
  const sb = window.ltSupabase;
  // 同カテゴリの他を全部OFF
  await sb.from('user_gears').update({ is_current: false })
    .eq('user_id', window.ltCurrentUser.id)
    .eq('category', category);
  // 対象をON
  await sb.from('user_gears').update({ is_current: true }).eq('id', id);
  ltShowToast('使用中にしました');
  await ltLoadMygear();
}

// ================================================================
// 設定モーダル: 張替え周期
// ================================================================
function ltOpenSettingsModal() {
  const modal = document.getElementById('mygear-modal');
  const cycle = LT_MYGEAR.settings.restring_cycle_days || 30;
  modal.innerHTML = `
    <div class="mygear-modal-box">
      <button class="mygear-modal-close" onclick="ltCloseGearModal()">✕</button>
      <h2 class="mygear-modal-title">⚙️ 張替え周期の設定</h2>

      <div class="mygear-field">
        <label class="mygear-label">ガット張替え推奨日数</label>
        <p style="color:var(--mute);font-size:13px;margin-bottom:12px;line-height:1.6">
          現在使用中のガットを張替えてから、何日経過したら通知するかを設定します。<br>
          一般的な目安: 月1〜3回プレー → 60日 / 週1〜2回 → 30日 / 週3回以上 → 14日
        </p>
        <div class="mygear-cycle-presets">
          ${[14, 30, 60, 90].map(d => `
            <button class="mygear-cycle-preset ${cycle===d?'active':''}" onclick="document.getElementById('mg-cycle').value='${d}'; this.parentNode.querySelectorAll('button').forEach(b=>b.classList.remove('active')); this.classList.add('active');">${d}日</button>
          `).join('')}
        </div>
        <input id="mg-cycle" type="number" class="mygear-input" min="1" max="365" value="${cycle}" style="margin-top:12px">
      </div>

      <div id="mygear-modal-error" class="mygear-modal-error"></div>

      <div class="mygear-modal-actions">
        <button class="btn-secondary" onclick="ltCloseGearModal()">キャンセル</button>
        <button class="btn-primary" onclick="ltSaveSettings()">保存する</button>
      </div>
    </div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

async function ltSaveSettings() {
  const cycle = parseInt(document.getElementById('mg-cycle').value, 10);
  if (!cycle || cycle < 1) {
    document.getElementById('mygear-modal-error').textContent = '1以上の数値を入力してください';
    return;
  }
  const sb = window.ltSupabase;
  // upsert
  const { error } = await sb.from('string_settings').upsert({
    user_id: window.ltCurrentUser.id,
    restring_cycle_days: cycle,
    updated_at: new Date().toISOString()
  });
  if (error) {
    document.getElementById('mygear-modal-error').textContent = error.message;
    return;
  }
  LT_MYGEAR.settings.restring_cycle_days = cycle;
  ltCloseGearModal();
  ltShowToast('設定を保存しました');
  ltRenderMygear();
}

// ================================================================
// ヘルパー
// ================================================================
function ltGetBrandList(category) {
  if (category === 'racket') return typeof BRAND_LIST !== 'undefined' ? BRAND_LIST : [];
  if (category === 'string') return typeof STRING_BRANDS !== 'undefined' ? STRING_BRANDS : [];
  if (category === 'grip')   return typeof GRIP_BRANDS !== 'undefined' ? GRIP_BRANDS : [];
  return [];
}
function ltDaysSince(dateStr) {
  if (!dateStr) return 0;
  const d = new Date(dateStr);
  const now = new Date();
  return Math.floor((now - d) / 86400000);
}
function ltMonthsSince(dateStr) {
  if (!dateStr) return 0;
  const d = new Date(dateStr);
  const now = new Date();
  return (now.getFullYear() - d.getFullYear()) * 12 + (now.getMonth() - d.getMonth());
}
function ltFmtDate(s) {
  if (!s) return '—';
  return s.replace(/-/g, '/');
}
function ltEsc(s) {
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function ltShowToast(msg) {
  let t = document.getElementById('auth-toast');
  if (!t) { t = document.createElement('div'); t.id='auth-toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ================================================================
// supabase-auth.js の loadMygear() を上書き
// ================================================================
window.loadMygear = ltLoadMygear;
