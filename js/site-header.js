/**
 * site-header.js — LOVETENI 共通ヘッダー
 * <body> の最初の子要素として <script src="/js/site-header.js"></script> を置くこと。
 * document.currentScript を使って同期的に topline + header を挿入する。
 */
(function () {
  'use strict';

  /* ── CSS ─────────────────────────────────────────────── */
  var CSS = [
    /* CSS custom properties shared across all pages */
    ':root{--announce-height:36px;--nav-height:64px;}',

    /* topline */
    '.sh-topline{background:#0d1117;color:rgba(255,255,255,.85);font-size:12px;',
    'padding:8px 0;font-family:"DM Sans",-apple-system,sans-serif;',
    'letter-spacing:.05em;flex-shrink:0;}',

    '.sh-topline-inner{max-width:1360px;margin:0 auto;padding:0 24px;',
    'display:flex;justify-content:space-between;align-items:center;}',

    '.sh-topline-left{display:flex;gap:20px;}',
    '.sh-topline-right{display:flex;gap:14px;opacity:.7;font-size:11px;}',

    /* header */
    '.sh-header{background:rgba(255,255,255,.97);',
    'backdrop-filter:saturate(180%) blur(12px);',
    '-webkit-backdrop-filter:saturate(180%) blur(12px);',
    'border-bottom:1px solid #e2e2dc;',
    'position:sticky;top:0;z-index:100;flex-shrink:0;}',

    '.sh-header-inner{max-width:1360px;margin:0 auto;',
    'padding:0 24px;height:var(--nav-height,64px);',
    'display:flex;align-items:center;gap:12px;}',

    /* logo */
    '.sh-logo{display:flex;align-items:center;gap:10px;flex-shrink:0;',
    'cursor:pointer;text-decoration:none;}',

    '.sh-logo-mark{width:32px;height:32px;background:#0d1117;color:#fff;',
    'border-radius:50%;display:flex;align-items:center;justify-content:center;',
    'font-family:"Noto Serif JP",serif;font-weight:900;font-size:17px;',
    'font-style:italic;flex-shrink:0;}',

    '.sh-logo-text{font-family:"Noto Serif JP",serif;font-size:18px;',
    'font-weight:700;letter-spacing:.1em;color:#0d1117;white-space:nowrap;}',

    '.sh-logo-text em{font-style:italic;color:#00513a;}',

    /* gnav */
    '.sh-gnav{display:flex;gap:2px;margin-left:auto;align-items:center;',
    'flex-shrink:1;overflow:hidden;}',

    '.sh-gnav-item{font-size:14px;font-weight:500;padding:8px 6px;',
    'color:#0d1117;border-radius:4px;transition:color .15s;cursor:pointer;',
    'white-space:nowrap;text-decoration:none;display:inline-block;}',

    '.sh-gnav-item:hover{color:#00513a;}',
    '.sh-gnav-item.active{color:#00513a;font-weight:700;}',

    /* search */
    '.sh-search{width:160px;position:relative;flex-shrink:0;}',

    '.sh-search input{width:100%;padding:8px 14px 8px 32px;',
    'border:1px solid #e2e2dc;border-radius:20px;font-size:12px;',
    'font-family:inherit;background:#fafaf7;outline:none;',
    'transition:border-color .2s;cursor:pointer;}',

    '.sh-search input:focus{border-color:#00513a;background:#fff;}',

    '.sh-search-icon{position:absolute;left:11px;top:50%;',
    'transform:translateY(-50%);font-size:13px;color:#6b6b65;',
    'pointer-events:none;}',

    /* hamburger */
    '.sh-hamburger{display:none;width:28px;height:28px;font-size:22px;',
    'align-items:center;justify-content:center;',
    'cursor:pointer;background:none;border:none;flex-shrink:0;}',

    /* responsive */
    '@media(max-width:900px){',
    '.sh-search{display:none;}',
    '.sh-hamburger{display:flex;}',
    '.sh-gnav{display:none;}',
    '.sh-topline-right{display:none;}',
    '}',
  ].join('');

  var styleEl = document.createElement('style');
  styleEl.id = 'sh-styles';
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);

  /* ── Active page detection ───────────────────────── */
  var path = window.location.pathname;

  var NAV = [
    { label: 'ラケット',     href: '/' },
    { label: 'ガット',       href: '/' },
    { label: 'グリップ',     href: '/' },
    { label: '診断',         href: '/' },
    { label: 'コラム',       href: '/' },
    { label: '最新情報',     href: '/' },
    { label: 'トレーニング', href: '/' },
    { label: 'ルール',       href: '/' },
    { label: 'マイギア',     href: '/' },
    { label: '用品',         href: '/equipment.html' },
    { label: '手帳',         href: '/calendar.html' },
    { label: '動画',         href: '/videos.html' },
    { label: 'ランキング',   href: '/ranking.html' },
    { label: '乱数表',       href: '/court-draw.html' },
  ];

  function isActive(href) {
    if (href === '/') return false; // SPA items: never active on sub-pages
    var slug = href.replace(/^\//, '').replace(/\.html$/, '');
    return path.indexOf(slug) !== -1;
  }

  var navHTML = NAV.map(function (item) {
    var cls = 'sh-gnav-item' + (isActive(item.href) ? ' active' : '');
    return '<a href="' + item.href + '" class="' + cls + '">' + item.label + '</a>';
  }).join('');

  /* ── HTML ───────────────────────────────────────── */
  var toplineHTML =
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

  var headerHTML =
    '<header class="sh-header">' +
      '<div class="sh-header-inner">' +
        '<a href="/" class="sh-logo">' +
          '<div class="sh-logo-mark">L</div>' +
          '<div class="sh-logo-text">LOVE<em>TENI</em></div>' +
        '</a>' +
        '<nav class="sh-gnav" id="sh-gnav">' + navHTML + '</nav>' +
        '<div class="sh-search">' +
          '<span class="sh-search-icon">&#x2315;</span>' +
          '<input type="text" placeholder="検索..." onclick="location.href=\'/\'">' +
        '</div>' +
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
})();
