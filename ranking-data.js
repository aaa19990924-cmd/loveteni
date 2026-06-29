// tennisbear.net から収集したラケットデータ (2026-06-29)
// 7ブランド 45モデル
const RANKING_RACKETS = [
  // ── Babolat ──────────────────────────────────────────────
  { id: 'babolat-pure-aero-2026',      brand: 'Babolat', model: 'PURE AERO',                   year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/32594/info' },
  { id: 'babolat-pure-aero-98-2026',   brand: 'Babolat', model: 'PURE AERO 98',                year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/32627/info' },
  { id: 'babolat-pure-aero-team',      brand: 'Babolat', model: 'PURE AERO TEAM',              year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/32792/info' },
  { id: 'babolat-pure-aero-plus',      brand: 'Babolat', model: 'PURE AERO PLUS',              year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/32891/info' },
  { id: 'babolat-pure-drive-2025',     brand: 'Babolat', model: 'PURE DRIVE',                  year: 2025, imageUrl: null, url: 'https://www.tennisbear.net/racket/19229/info' },
  { id: 'babolat-pure-drive-98',       brand: 'Babolat', model: 'PURE DRIVE 98',               year: 2023, imageUrl: null, url: 'https://www.tennisbear.net/racket/1189/info' },
  { id: 'babolat-pure-drive-wimbledon',brand: 'Babolat', model: 'PURE DRIVE WIMBLEDON',        year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/37280/info' },
  { id: 'babolat-pure-strike-2026',    brand: 'Babolat', model: 'PURE STRIKE',                 year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/36224/info' },

  // ── YONEX ─────────────────────────────────────────────────
  { id: 'yonex-vcore-100-2026',        brand: 'YONEX',   model: 'VCORE 100',                   year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/30713/info' },
  { id: 'yonex-vcore-98-2026',         brand: 'YONEX',   model: 'VCORE 98',                    year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/31373/info' },
  { id: 'yonex-vcore-100d',            brand: 'YONEX',   model: 'VCORE 100D',                  year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/30350/info' },
  { id: 'yonex-vcore-100l',            brand: 'YONEX',   model: 'VCORE 100L',                  year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/31901/info' },
  { id: 'yonex-vcore-95',              brand: 'YONEX',   model: 'VCORE 95',                    year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/30845/info' },
  { id: 'yonex-ezone-100-2025',        brand: 'YONEX',   model: 'EZONE 100',                   year: 2025, imageUrl: null, url: 'https://www.tennisbear.net/racket/18767/info' },
  { id: 'yonex-muse-100',              brand: 'YONEX',   model: 'MUSE 100',                    year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/35333/info' },

  // ── Wilson ────────────────────────────────────────────────
  { id: 'wilson-blade-98-16x19-v10',   brand: 'Wilson',  model: 'BLADE 98 16×19 V10',          year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/35168/info' },
  { id: 'wilson-blade-98-v10',         brand: 'Wilson',  model: 'BLADE 98 V10',                year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/34871/info' },
  { id: 'wilson-blade-100-v10',        brand: 'Wilson',  model: 'BLADE 100 V10',               year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/36818/info' },
  { id: 'wilson-pro-staff-97-classic', brand: 'Wilson',  model: 'PRO STAFF 97 CLASSIC',        year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/31505/info' },
  { id: 'wilson-pro-staff-x-classic',  brand: 'Wilson',  model: 'PRO STAFF X CLASSIC',         year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/32165/info' },
  { id: 'wilson-clash-100-v3',         brand: 'Wilson',  model: 'CLASH 100 V3 REVERSE',        year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/33254/info' },

  // ── HEAD ──────────────────────────────────────────────────
  { id: 'head-speed-tour',             brand: 'HEAD',    model: 'SPEED TOUR',                  year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/30647/info' },
  { id: 'head-speed-mp',               brand: 'HEAD',    model: 'SPEED MP',                    year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/31539/info' },
  { id: 'head-speed-mpl',              brand: 'HEAD',    model: 'SPEED MPL',                   year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/31571/info' },
  { id: 'head-boom-mp',                brand: 'HEAD',    model: 'BOOM MP',                     year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/33650/info' },
  { id: 'head-boom-mp-alternate',      brand: 'HEAD',    model: 'BOOM MP Alternate',           year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/34607/info' },
  { id: 'head-squared',                brand: 'HEAD',    model: 'SQUARED',                     year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/34805/info' },

  // ── Prince ────────────────────────────────────────────────
  { id: 'prince-tour-98',              brand: 'Prince',  model: 'TOUR 98',                     year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/29393/info' },
  { id: 'prince-phantom-g100xs-300',   brand: 'Prince',  model: 'PHANTOM GRAPHITE 100XS 300g', year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/32660/info' },
  { id: 'prince-phantom-g100xs-285',   brand: 'Prince',  model: 'PHANTOM GRAPHITE 100XS 285g', year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/32924/info' },
  { id: 'prince-phantom-100-jetblack', brand: 'Prince',  model: 'PHANTOM 100 Jet black',       year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/31868/info' },
  { id: 'prince-emblem-110',           brand: 'Prince',  model: 'EMBLEM 110',                  year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/11513/info' },
  { id: 'prince-sierra-o3',            brand: 'Prince',  model: 'SIERRA O3',                   year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/37148/info' },

  // ── Tecnifibre ────────────────────────────────────────────
  { id: 'tecnifibre-fire-300',         brand: 'Tecnifibre', model: 'FIRE 300',               year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/33584/info' },
  { id: 'tecnifibre-fire-305s',        brand: 'Tecnifibre', model: 'FIRE 305S',              year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/33222/info' },
  { id: 'tecnifibre-fire-285',         brand: 'Tecnifibre', model: 'FIRE 285',               year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/33287/info' },
  { id: 'tecnifibre-t-fight-300-ig',   brand: 'Tecnifibre', model: 'T-FIGHT 300 IG',         year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/35828/info' },
  { id: 'tecnifibre-t-fight-300s-ig',  brand: 'Tecnifibre', model: 'T-FIGHT 300S IG',        year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/36092/info' },
  { id: 'tecnifibre-t-fight-300-hinoe',brand: 'Tecnifibre', model: 'T-FIGHT 300 Hinoe',      year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/31439/info' },

  // ── DUNLOP ────────────────────────────────────────────────
  { id: 'dunlop-lx800-tour',           brand: 'DUNLOP',  model: 'LX800 TOUR',                  year: 2026, imageUrl: null, url: 'https://www.tennisbear.net/racket/37511/info' },
  { id: 'dunlop-sx-300',               brand: 'DUNLOP',  model: 'SX 300',                      year: 2025, imageUrl: null, url: 'https://www.tennisbear.net/racket/19262/info' },
  { id: 'dunlop-sx-300-tour',          brand: 'DUNLOP',  model: 'SX 300 TOUR',                 year: 2025, imageUrl: null, url: 'https://www.tennisbear.net/racket/19658/info' },
  { id: 'dunlop-sx-300-ls',            brand: 'DUNLOP',  model: 'SX 300 LS',                   year: 2025, imageUrl: null, url: 'https://www.tennisbear.net/racket/21770/info' },
  { id: 'dunlop-fx-500',               brand: 'DUNLOP',  model: 'FX 500',                      year: 2025, imageUrl: null, url: 'https://www.tennisbear.net/racket/29195/info' },
  { id: 'dunlop-fx-500-tour',          brand: 'DUNLOP',  model: 'FX 500 TOUR',                 year: 2025, imageUrl: null, url: 'https://www.tennisbear.net/racket/28667/info' },
];
