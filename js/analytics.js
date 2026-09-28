/**
 * analytics.js — 楽天リンクのクリック計測 + Cloudflare Web Analytics 導入口
 * 全ページ共通で読み込む（静的ページは site-header.js が自動で読み込み、
 * index.html だけは <script src="/js/analytics.js"> を直接置いている）。
 *
 * 設計方針:
 * - 既存の strings-cheap.html にあった trackClick(id, action) というローカル計測の
 *   考え方（「将来の人気度分析の土台」というコメント付き）を踏襲・拡張し、
 *   サイト全体で使える共通の仕組みにした。
 * - Supabaseへの送信はfire-and-forget（失敗しても画面には一切影響させない）。
 *   js/supabase-auth.js と同じプロジェクトのURL/anonKeyを再利用しており、新規発行はしていない。
 *   anonKeyはRLSで保護される前提で公開しても安全（SUPABASE_SETUP.mdの既存の方針を踏襲）。
 * - link_clicksテーブルが未作成の間はPOSTが失敗するだけで、サイトの動作には影響しない。
 */
(function () {
  'use strict';

  var LT_SUPABASE_URL = 'https://mdrejtyrmjmhitebobhc.supabase.co';
  var LT_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kcmVqdHlybWptaGl0ZWJvYmhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2OTQwODYsImV4cCI6MjA5NTI3MDA4Nn0.iXKtPsCcCyMDYWDqDZPalSaF2vQGlfPwy3CslPodGaQ';

  var LOG_KEY = 'lt_click_log_v1';
  var LOG_MAX = 500;

  function localLog(entry) {
    try {
      var raw = localStorage.getItem(LOG_KEY);
      var log = raw ? JSON.parse(raw) : [];
      log.push(entry);
      while (log.length > LOG_MAX) log.shift();
      localStorage.setItem(LOG_KEY, JSON.stringify(log));
    } catch (e) { /* localStorage不可時は無視 */ }
  }

  function remoteLog(entry) {
    try {
      fetch(LT_SUPABASE_URL + '/rest/v1/link_clicks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': LT_SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + LT_SUPABASE_ANON_KEY,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          page: entry.page,
          click_type: entry.type,
          source: entry.source || null,
          label: entry.label || null,
          item_url: entry.url || null,
          price: entry.price || null,
          shop_name: entry.shopName || null
        }),
        keepalive: true
      }).catch(function () { /* テーブル未作成・オフライン等は静かに無視 */ });
    } catch (e) { /* 無視 */ }
  }

  // 各ページから呼べる計測関数。楽天への直接誘導（openRakuten系の関数呼び出しなど）
  // で使う。meta: { source, label, url, price, shopName }
  window.ltTrackRakutenClick = function (meta) {
    meta = meta || {};
    var entry = {
      type: 'rakuten',
      page: location.pathname,
      source: meta.source || '',
      label: meta.label || '',
      url: meta.url || '',
      price: meta.price || null,
      shopName: meta.shopName || '',
      ts: Date.now()
    };
    localLog(entry);
    remoteLog(entry);
  };

  // ── 楽天への直接リンク（<a href="...rakuten.co.jp...">）は自動で捕捉する ──────────
  // openRakuten系の関数はwindow.open()経由でこのリスナーを通らないため二重計測にはならない。
  // 新しく追加されるボタンがアンカータグである限り、個別に計測コードを仕込まなくても
  // 自動でカバーされる保険として機能する。
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (!/rakuten\.co\.jp/i.test(href)) return;
    window.ltTrackRakutenClick({
      source: a.className || 'link',
      label: (a.textContent || '').trim().slice(0, 80),
      url: a.href
    });
  }, true);

  // ── Cloudflare Web Analytics ─────────────────────────────────────────────
  // Cloudflareダッシュボード → Analytics & Logs → Web Analytics でサイトを追加すると
  // 発行されるビーコン用トークンを、下記 CF_BEACON_TOKEN に設定してください。
  // ダミー値のままの間はスクリプトを挿入しない（無駄な404リクエストを出さないため）。
  var CF_BEACON_TOKEN = 'YOUR_CF_BEACON_TOKEN';
  if (CF_BEACON_TOKEN && CF_BEACON_TOKEN !== 'YOUR_CF_BEACON_TOKEN') {
    var s = document.createElement('script');
    s.defer = true;
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_BEACON_TOKEN }));
    document.head.appendChild(s);
  }
})();
