/**
 * site-header.js — LOVETENI 共通ヘッダー
 * <body> の最初の子要素として <script src="/js/site-header.js"></script> を置くこと。
 * document.currentScript を使って同期的に topline + header を挿入する。
 */
(function () {
  'use strict';

  /* ── 硬式/軟式の判定とテーマ色 ──────────────────────────
     ファイル名が soft- で始まるページ（例: /soft-rackets.html）を軟式ページとみなす。
     軟式ページのみアクセントカラーをピンク系に切り替える。硬式側の緑には一切影響しない。
     注意: Cloudflare Pagesの既定設定(html_handling: auto-trailing-slash)では、
     /soft-rackets.html へのアクセスが拡張子なしの /soft-rackets にリダイレクトされるため、
     location.pathname に .html が付いているとは限らない。判定・パス比較はすべて
     「.html と末尾スラッシュを取り除いた正規化パス」で行い、拡張子の有無に影響されないようにする。 */
  var path = window.location.pathname;
  var normPath = path.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  var isSoft = /^\/soft-[a-z-]+$/.test(normPath);

  var THEME = isSoft ? {
    accent: '#c2255c',       // メインピンク（緑 #00513a 相当：文字・下線・ボタン背景など）
    accentBright: '#ec4899', // ホバー・強調用の鮮やかなピンク（緑 --accent-bright 相当）
    accentSoft: '#fdeef4',   // 背景アクセント用のごく薄いピンク
  } : {
    accent: '#00513a',
    accentBright: '#008156',
    accentSoft: '#eaf5f0',
  };

  /* ── CSS ─────────────────────────────────────────────── */
  var CSS = [
    /* CSS custom properties shared across all pages */
    ':root{--announce-height:36px;--nav-height:64px;',
    '--sh-accent:' + THEME.accent + ';--sh-accent-bright:' + THEME.accentBright + ';--sh-accent-soft:' + THEME.accentSoft + ';}',

    /* topline */
    '.sh-topline{background:#0d1117;color:rgba(255,255,255,.85);font-size: 12px;',
    'padding: 8px 0;font-family:"DM Sans",-apple-system,sans-serif;',
    'letter-spacing:.05em;flex-shrink:0;}',

    '.sh-topline-inner{max-width: 1240px;margin: 0 auto;padding: 0 19px;',
    'display:flex;justify-content:space-between;align-items:center;}',

    '.sh-topline-left{display:flex;gap: 16px;}',
    '.sh-topline-right{display:flex;gap: 11px;opacity:.7;font-size: 11px;}',

    /* header */
    '.sh-header{background:rgba(255,255,255,.97);',
    'backdrop-filter:saturate(180%) blur(12px);',
    '-webkit-backdrop-filter:saturate(180%) blur(12px);',
    'border-bottom:1px solid #e2e2dc;',
    'position:sticky;top:0;z-index:100;flex-shrink:0;}',

    '.sh-header-inner{max-width: 1240px;margin: 0 auto;',
    'padding: 0 19px;height:var(--nav-height,64px);',
    'display:flex;align-items:center;gap: 10px;}',

    /* logo */
    '.sh-logo{display:flex;align-items:center;gap: 8px;flex-shrink:0;',
    'cursor:pointer;text-decoration:none;}',

    '.sh-logo-mark{width:32px;height:32px;background:#0d1117;color:#fff;',
    'border-radius:50%;display:flex;align-items:center;justify-content:center;',
    'font-family:"Noto Serif JP",serif;font-weight:900;font-size: 17px;',
    'font-style:italic;flex-shrink:0;}',

    '.sh-logo-text{font-family:"Noto Serif JP",serif;font-size: 18px;',
    'font-weight:700;letter-spacing:.1em;color:#0d1117;white-space:nowrap;}',

    '.sh-logo-text em{font-style:italic;color:var(--sh-accent);}',

    /* gnav（overflow:hiddenは「その他」ドロップダウンを切り取るため付けない） */
    '.sh-gnav{display:flex;gap: 2px;margin-left: auto;align-items:center;',
    'flex-shrink:1;}',

    '.sh-gnav-item{font-size: 14px;font-weight:500;padding: 8px 6px;',
    'color:#0d1117;border-radius:4px;transition:color .15s;cursor:pointer;',
    'white-space:nowrap;text-decoration:none;display:inline-block;}',

    '.sh-gnav-item:hover{color:var(--sh-accent);}',
    '.sh-gnav-item.active{color:var(--sh-accent);font-weight:700;}',

    /* gnav "その他" dropdown（優先度の低い項目をまとめる） */
    '.sh-gnav-more{position:relative;}',
    '.sh-gnav-more-panel{display:none;position:absolute;top:100%;right:0;margin-top:6px;',
    'background:#fff;border:1px solid #e2e2dc;box-shadow:0 8px 24px rgba(0,0,0,.08);',
    'min-width:168px;padding:8px 0;z-index:150;border-radius:4px;}',
    '.sh-gnav-more-panel.open{display:block;}',
    '.sh-gnav-more-item{display:block;padding:9px 16px;font-size:13px;color:#0d1117;',
    'cursor:pointer;white-space:nowrap;text-decoration:none;}',
    '.sh-gnav-more-item:hover{background:#fafaf7;color:var(--sh-accent);}',
    '.sh-gnav-more-item.active{color:var(--sh-accent);font-weight:700;}',

    /* search */
    '.sh-search{width:160px;position:relative;flex-shrink:0;}',

    '.sh-search input{width:100%;padding: 8px 11px 8px 26px;',
    'border:1px solid #e2e2dc;border-radius:20px;font-size: 12px;',
    'font-family:inherit;background:#fafaf7;outline:none;',
    'transition:border-color .2s;cursor:pointer;}',

    '.sh-search input:focus{border-color:var(--sh-accent);background:#fff;}',

    '.sh-search-icon{position:absolute;left:11px;top:50%;',
    'transform:translateY(-50%);font-size: 13px;color:#6b6b65;',
    'pointer-events:none;}',

    /* 硬式/軟式 切り替えボタン */
    '.sh-sport-toggle{font-family:"DM Sans",sans-serif;font-size:12px;font-weight:700;',
    'padding:7px 14px;border-radius:100px;white-space:nowrap;text-decoration:none;',
    'flex-shrink:0;background:var(--sh-accent);color:#fff;transition:background .15s;}',
    '.sh-sport-toggle:hover{background:var(--sh-accent-bright);}',

    /* hamburger */
    '.sh-hamburger{display:none;width:28px;height:28px;font-size: 19px;',
    'align-items:center;justify-content:center;',
    'cursor:pointer;background:none;border:none;flex-shrink:0;}',

    /* responsive */
    '@media(max-width:900px){',
    '.sh-search{display:none;}',
    '.sh-hamburger{display:flex;}',
    '.sh-gnav{display:none;}',
    '.sh-topline-right{display:none;}',
    '.sh-topline-left{flex:1;min-width:0;overflow:hidden;white-space:nowrap;}',
    '.sh-topline-left span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
    '.sh-topline-left span:first-child{max-width:60%;display:inline-block;vertical-align:bottom;}',
    '.sh-sport-toggle{font-size:11px;padding:6px 10px;}',
    '}',
  ].join('');

  var styleEl = document.createElement('style');
  styleEl.id = 'sh-styles';
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);

  /* ── ナビ項目（硬式・軟式でそれぞれ別セットを持つ。軟式内のリンクは軟式ページ同士に閉じる） ── */
  // 優先度の高い項目は常時表示、残りは「その他」ドロップダウンにまとめる
  // （1024〜1440px幅で項目が横に収まりきらずはみ出していた問題の対策）
  var HARD_NAV = [
    { label: 'ラケット',     href: '/' },
    { label: 'ガット',       href: '/' },
    { label: 'グリップ',     href: '/' },
    { label: '診断',         href: '/' },
    { label: '用品',         href: '/equipment.html' },
    { label: 'ランキング',   href: '/ranking.html' },
    { label: '手帳',         href: '/calendar.html' },
  ];
  var HARD_MORE_NAV = [
    { label: 'コラム',       href: '/' },
    { label: '最新情報',     href: '/' },
    { label: 'トレーニング', href: '/' },
    { label: 'ルール',       href: '/' },
    { label: 'マイギア',     href: '/' },
    { label: '動画',         href: '/videos.html' },
    { label: '乱数表',       href: '/court-draw.html' },
    { label: '最安ガット',   href: '/strings-cheap.html' },
    { label: '保護者ガイド', href: '/parents.html' },
    { label: '練習メニュー', href: '/coach.html' },
  ];
  var SOFT_NAV = [
    { label: 'トップ',       href: '/soft-index.html' },
    { label: 'ラケット',     href: '/soft-rackets.html' },
    { label: 'ガット',       href: '/soft-strings.html' },
    { label: 'グリップ',     href: '/soft-grips.html' },
    { label: '用品',         href: '/soft-equipment.html' },
    { label: '診断',         href: '/soft-diagnosis.html' },
    { label: '保護者ガイド', href: '/soft-parents.html' },
  ];
  var SOFT_MORE_NAV = [];

  var NAV = isSoft ? SOFT_NAV : HARD_NAV;
  var MORE_NAV = isSoft ? SOFT_MORE_NAV : HARD_MORE_NAV;

  function isActive(href) {
    if (href === '/') return false; // SPA items: never active on sub-pages
    var slug = href.replace(/^\//, '').replace(/\.html$/, '');
    return normPath.indexOf(slug) !== -1;
  }

  var navHTML = NAV.map(function (item) {
    var cls = 'sh-gnav-item' + (isActive(item.href) ? ' active' : '');
    return '<a href="' + item.href + '" class="' + cls + '">' + item.label + '</a>';
  }).join('');

  if (MORE_NAV.length) {
    var moreActive = MORE_NAV.some(function (item) { return isActive(item.href); });
    var moreItemsHTML = MORE_NAV.map(function (item) {
      var cls = 'sh-gnav-more-item' + (isActive(item.href) ? ' active' : '');
      return '<a href="' + item.href + '" class="' + cls + '">' + item.label + '</a>';
    }).join('');
    navHTML +=
      '<div class="sh-gnav-more" id="sh-gnav-more">' +
        '<span class="sh-gnav-item sh-gnav-more-toggle' + (moreActive ? ' active' : '') + '" id="sh-gnav-more-toggle">その他 ▾</span>' +
        '<div class="sh-gnav-more-panel" id="sh-gnav-more-panel">' + moreItemsHTML + '</div>' +
      '</div>';
  }

  /* ── 硬式/軟式 切り替えボタンの行き先を決める ──────────────────────────
     ページ単位で1対1対応させる。対応ページがなければ相手側のトップへ。
     キーは正規化パス（.html・末尾スラッシュなし）で持ち、normPathと突き合わせる。 */
  var SWITCH_TO_SOFT = {
    '/equipment': '/soft-equipment.html',
    '/parents': '/soft-parents.html',
  };
  var SWITCH_TO_HARD = {
    '/soft-index': '/',
    '/soft-rackets': '/#rackets',
    '/soft-strings': '/#strings',
    '/soft-grips': '/#grips',
    '/soft-diagnosis': '/#diagnosis',
    '/soft-equipment': '/equipment.html',
    '/soft-parents': '/parents.html',
  };
  var switchHref, switchLabel;
  if (isSoft) {
    switchHref = SWITCH_TO_HARD[normPath] || '/';
    switchLabel = '硬式へ切替';
  } else {
    switchHref = SWITCH_TO_SOFT[normPath] || '/soft-index.html';
    switchLabel = '軟式へ切替';
  }
  var switchHTML = '<a href="' + switchHref + '" class="sh-sport-toggle">' + switchLabel + '</a>';

  /* ── HTML ───────────────────────────────────────── */
  var toplineHTML = isSoft ?
    '<div class="sh-topline">' +
      '<div class="sh-topline-inner">' +
        '<div class="sh-topline-left">' +
          '<span>ソフトテニス部の用具選びをもっと簡単に</span>' +
          '<span>—</span>' +
          '<span>中学部活の定番ブランドを掲載中</span>' +
        '</div>' +
        '<div class="sh-topline-right">' +
          '<span>JP</span><span>|</span><span id="sh-date"></span>' +
        '</div>' +
      '</div>' +
    '</div>'
  :
    '<div class="sh-topline">' +
      '<div class="sh-topline-inner">' +
        '<div class="sh-topline-left">' +
          '<span>全仏オープン 2026 開幕間近</span>' +
          '<span>—</span>' +
          '<span>本戦 5/24（日）スタート</span>' +
        '</div>' +
        '<div class="sh-topline-right">' +
          '<span>JP</span><span>|</span><span id="sh-date"></span>' +
        '</div>' +
      '</div>' +
    '</div>';

  var logoHref = isSoft ? '/soft-index.html' : '/';
  var headerHTML =
    '<header class="sh-header">' +
      '<div class="sh-header-inner">' +
        '<a href="' + logoHref + '" class="sh-logo">' +
          '<div class="sh-logo-mark">L</div>' +
          '<div class="sh-logo-text">LOVE<em>TENI</em></div>' +
        '</a>' +
        '<nav class="sh-gnav" id="sh-gnav">' + navHTML + '</nav>' +
        '<div class="sh-search">' +
          '<span class="sh-search-icon">&#x2315;</span>' +
          '<input type="text" placeholder="検索..." onclick="location.href=\'' + (isSoft ? '/soft-index.html' : '/') + '\'">' +
        '</div>' +
        switchHTML +
        '<button class="sh-hamburger" id="sh-hamburger">&#8801;</button>' +
      '</div>' +
    '</header>';

  /* ── Inject (synchronous — currentScript is the <script> tag itself) ── */
  var script = document.currentScript;
  var parent = script.parentNode;

  var headerFrag = document.createElement('div');
  headerFrag.innerHTML = headerHTML;
  var headerNode = headerFrag.firstChild;

  var toplineFrag = document.createElement('div');
  toplineFrag.innerHTML = toplineHTML;
  var toplineNode = toplineFrag.firstChild;

  // Insert order: topline first, then header, both before the script tag
  parent.insertBefore(headerNode, script);
  parent.insertBefore(toplineNode, headerNode);

  /* ── STEP9: 楽天クリック計測 + Cloudflare Web Analytics（全静的ページ共通） ── */
  if (!document.querySelector('script[src="/js/analytics.js"]')) {
    var analyticsScript = document.createElement('script');
    analyticsScript.src = '/js/analytics.js';
    document.head.appendChild(analyticsScript);
  }

  /* ── Date ───────────────────────────────────────── */
  var dateEl = document.getElementById('sh-date');
  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('ja-JP', {
      year: 'numeric', month: '2-digit', day: '2-digit'
    }).replace(/\//g, '.');
  }

  /* ── Mobile nav toggle ──────────────────────────── */
  var hamburger = document.getElementById('sh-hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      var nav = document.getElementById('sh-gnav');
      if (!nav) return;
      var isOpen = nav.getAttribute('data-open') === '1';
      if (isOpen) {
        nav.removeAttribute('style');
        nav.removeAttribute('data-open');
      } else {
        nav.setAttribute('data-open', '1');
        Object.assign(nav.style, {
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '100%',
          left: '0',
          right: '0',
          background: '#ffffff',
          padding: '12px 20px',
          borderBottom: '1px solid #e2e2dc',
          zIndex: '200',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        });
      }
    });
  }

  // Close mobile nav when a link is clicked
  document.addEventListener('click', function (e) {
    var nav = document.getElementById('sh-gnav');
    var hb  = document.getElementById('sh-hamburger');
    if (!nav || !hb) return;
    if (nav.getAttribute('data-open') !== '1') return;
    if (!hb.contains(e.target) && !nav.contains(e.target)) {
      nav.removeAttribute('style');
      nav.removeAttribute('data-open');
    }
  });

  /* ── 「その他」ドロップダウン（デスクトップ幅のナビ整理） ──────────── */
  var moreToggle = document.getElementById('sh-gnav-more-toggle');
  if (moreToggle) {
    moreToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var panel = document.getElementById('sh-gnav-more-panel');
      if (panel) panel.classList.toggle('open');
    });
  }
  document.addEventListener('click', function (e) {
    var more = document.getElementById('sh-gnav-more');
    var panel = document.getElementById('sh-gnav-more-panel');
    if (!more || !panel || !panel.classList.contains('open')) return;
    if (!more.contains(e.target)) panel.classList.remove('open');
  });
})();
