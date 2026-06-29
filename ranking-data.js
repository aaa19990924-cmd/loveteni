// tennisbear.net から収集したラケットデータ (2026-06-29)
// 34ブランド 約200モデル / 画像は Tennis Warehouse CDN から取得
const RANKING_RACKETS = [
  // ── Babolat ──────────────────────────────────────────────────────────
  { id: 'babolat-pure-aero-2026',        brand: 'Babolat',      model: 'PURE AERO (2026)',              imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=BPAR26-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/32594/info' },
  { id: 'babolat-pure-aero-98-2026',     brand: 'Babolat',      model: 'PURE AERO 98 (2026)',           imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=BPA98R-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/32627/info' },
  { id: 'babolat-pure-aero-team-2026',   brand: 'Babolat',      model: 'PURE AERO TEAM (2026)',         imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=BPAT26-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/32792/info' },
  { id: 'babolat-pure-aero-plus-2026',   brand: 'Babolat',      model: 'PURE AERO PLUS (2026)',         imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=BPAPLR-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/32891/info' },
  { id: 'babolat-pure-aero-lite-2026',   brand: 'Babolat',      model: 'PURE AERO LITE (2026)',         imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=BPALTR-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/36026/info' },
  { id: 'babolat-pure-aero-sl-2026',     brand: 'Babolat',      model: 'PURE AERO Super Lite (2026)',   imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=BPARSL-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/35861/info' },
  { id: 'babolat-pure-drive-wimbledon',  brand: 'Babolat',      model: 'PURE DRIVE WIMBLEDON (2026)',   imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=BPDW26-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/37280/info' },
  { id: 'babolat-pure-strike-2026',      brand: 'Babolat',      model: 'PURE STRIKE (2026)',            imageUrl: null, url: 'https://www.tennisbear.net/racket/36224/info' },
  { id: 'babolat-pure-drive-2025',       brand: 'Babolat',      model: 'PURE DRIVE (2025)',             imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=BPD25R-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/19229/info' },
  { id: 'babolat-pure-drive-98-2025',    brand: 'Babolat',      model: 'PURE DRIVE 98 (2025)',          imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=PD98R-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/1189/info' },
  { id: 'babolat-pure-drive-plus-2025',  brand: 'Babolat',      model: 'PURE DRIVE PLUS (2025)',        imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=BPDP25-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/19229/info' },
  { id: 'babolat-pure-drive-team-2025',  brand: 'Babolat',      model: 'PURE DRIVE TEAM (2025)',        imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=BRPTR-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/19229/info' },
  { id: 'babolat-pure-drive-lite-2025',  brand: 'Babolat',      model: 'PURE DRIVE LITE (2025)',        imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=BPDLR-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/19229/info' },
  { id: 'babolat-pure-drive-sl-2025',    brand: 'Babolat',      model: 'PURE DRIVE Super Lite (2025)',  imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=BPDSLR-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/19229/info' },

  // ── YONEX ─────────────────────────────────────────────────────────────
  { id: 'yonex-vcore-100-2026',          brand: 'YONEX',        model: 'VCORE 100 (2026)',              imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=VC108G-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/30713/info' },
  { id: 'yonex-vcore-98-2026',           brand: 'YONEX',        model: 'VCORE 98 (2026)',               imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=VC988G-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/31373/info' },
  { id: 'yonex-vcore-95-2026',           brand: 'YONEX',        model: 'VCORE 95 (2026)',               imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=VC958G-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/30845/info' },
  { id: 'yonex-vcore-100d',              brand: 'YONEX',        model: 'VCORE 100D (2026)',             imageUrl: null, url: 'https://www.tennisbear.net/racket/30350/info' },
  { id: 'yonex-vcore-100l',              brand: 'YONEX',        model: 'VCORE 100L (2026)',             imageUrl: null, url: 'https://www.tennisbear.net/racket/31901/info' },
  { id: 'yonex-vcore-98l',               brand: 'YONEX',        model: 'VCORE 98L (2026)',              imageUrl: null, url: 'https://www.tennisbear.net/racket/34145/info' },
  { id: 'yonex-muse-100-2026',           brand: 'YONEX',        model: 'MUSE 100 (2026)',               imageUrl: null, url: 'https://www.tennisbear.net/racket/35333/info' },
  { id: 'yonex-muse-100l',               brand: 'YONEX',        model: 'MUSE 100L (2026)',              imageUrl: null, url: 'https://www.tennisbear.net/racket/35069/info' },
  { id: 'yonex-muse-98',                 brand: 'YONEX',        model: 'MUSE 98 (2026)',                imageUrl: null, url: 'https://www.tennisbear.net/racket/34937/info' },
  { id: 'yonex-ezone-100-2025',          brand: 'YONEX',        model: 'EZONE 100 (2025)',              imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=EZ10BB-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/18767/info' },
  { id: 'yonex-ezone-98-2025',           brand: 'YONEX',        model: 'EZONE 98 (2025)',               imageUrl: null, url: 'https://www.tennisbear.net/racket/18932/info' },

  // ── Wilson ────────────────────────────────────────────────────────────
  { id: 'wilson-blade-98-16x19-v10',     brand: 'Wilson',       model: 'BLADE 98 16×19 V10',           imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=WB9810-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/35168/info' },
  { id: 'wilson-blade-98-18x20-v10',     brand: 'Wilson',       model: 'BLADE 98 18×20 V10',           imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=WB9818-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/34871/info' },
  { id: 'wilson-blade-98s-v10',          brand: 'Wilson',       model: 'BLADE 98S V10',                imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=WB98SV-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/35201/info' },
  { id: 'wilson-blade-100-v10',          brand: 'Wilson',       model: 'BLADE 100 V10',                imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=WB1001-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/36818/info' },
  { id: 'wilson-blade-100-pro-v10',      brand: 'Wilson',       model: 'BLADE 100 PRO V10',            imageUrl: null, url: 'https://www.tennisbear.net/racket/36785/info' },
  { id: 'wilson-pro-staff-97-classic',   brand: 'Wilson',       model: 'PRO STAFF 97 CLASSIC',         imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=WPS97C-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/31505/info' },
  { id: 'wilson-pro-staff-97l-classic',  brand: 'Wilson',       model: 'PRO STAFF 97L CLASSIC',        imageUrl: null, url: 'https://www.tennisbear.net/racket/31934/info' },
  { id: 'wilson-pro-staff-x-classic',    brand: 'Wilson',       model: 'PRO STAFF X CLASSIC',          imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=WPSTMC-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/32165/info' },
  { id: 'wilson-clash-100-v3',           brand: 'Wilson',       model: 'CLASH 100 V3',                 imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=CL103V-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/33254/info' },
  { id: 'wilson-clash-100-v3-reverse',   brand: 'Wilson',       model: 'CLASH 100 V3 REVERSE',         imageUrl: null, url: 'https://www.tennisbear.net/racket/33254/info' },
  { id: 'wilson-clash-100l-v3-reverse',  brand: 'Wilson',       model: 'CLASH 100L V3 REVERSE',        imageUrl: null, url: 'https://www.tennisbear.net/racket/32825/info' },

  // ── HEAD ──────────────────────────────────────────────────────────────
  { id: 'head-speed-tour-2026',          brand: 'HEAD',         model: 'SPEED TOUR (2026)',             imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=HSPDT6-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/30647/info' },
  { id: 'head-speed-pro-2026',           brand: 'HEAD',         model: 'SPEED PRO (2026)',              imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=HSPDP6-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/32331/info' },
  { id: 'head-speed-mp-2026',            brand: 'HEAD',         model: 'SPEED MP (2026)',               imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=HSPMP6-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/31539/info' },
  { id: 'head-speed-mpl-2026',           brand: 'HEAD',         model: 'SPEED MPL (2026)',              imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=HSMPL6-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/31571/info' },
  { id: 'head-speed-mpul-2026',          brand: 'HEAD',         model: 'SPEED MPUL (2026)',             imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=HSMPUL-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/33188/info' },
  { id: 'head-boom-pro-2026',            brand: 'HEAD',         model: 'BOOM PRO (2026)',               imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=HBOOMP-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/34013/info' },
  { id: 'head-boom-mp-2026',             brand: 'HEAD',         model: 'BOOM MP (2026)',                imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=HBOOMM-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/33650/info' },
  { id: 'head-boom-mpl-2026',            brand: 'HEAD',         model: 'BOOM MPL (2026)',               imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=HBMPL6-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/33650/info' },
  { id: 'head-boom-mp-alternate',        brand: 'HEAD',         model: 'BOOM MP Alternate',             imageUrl: null, url: 'https://www.tennisbear.net/racket/34607/info' },
  { id: 'head-squared',                  brand: 'HEAD',         model: 'SQUARED',                      imageUrl: null, url: 'https://www.tennisbear.net/racket/34805/info' },

  // ── Prince ────────────────────────────────────────────────────────────
  { id: 'prince-tour-98-2026',           brand: 'Prince',       model: 'TOUR 98 (2026)',                imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=PTR698-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/29393/info' },
  { id: 'prince-phantom-g100xs-300',     brand: 'Prince',       model: 'PHANTOM GRAPHITE 100XS 300g',  imageUrl: null, url: 'https://www.tennisbear.net/racket/32660/info' },
  { id: 'prince-phantom-g100xs-285',     brand: 'Prince',       model: 'PHANTOM GRAPHITE 100XS 285g',  imageUrl: null, url: 'https://www.tennisbear.net/racket/32924/info' },
  { id: 'prince-phantom-100-jetblack',   brand: 'Prince',       model: 'PHANTOM 100 Jet black',        imageUrl: null, url: 'https://www.tennisbear.net/racket/31868/info' },
  { id: 'prince-phantom-100x-305',       brand: 'Prince',       model: 'PHANTOM 100X 305g (2024)',     imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=PHNX5-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/32660/info' },
  { id: 'prince-phantom-100x-290',       brand: 'Prince',       model: 'PHANTOM 100X 290g (2024)',     imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=PHNX9-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/32924/info' },
  { id: 'prince-phantom-g107',           brand: 'Prince',       model: 'PHANTOM GRAPHITE 107 (2025)',  imageUrl: null, url: 'https://www.tennisbear.net/racket/11510/info' },
  { id: 'prince-phantom-g100',           brand: 'Prince',       model: 'PHANTOM GRAPHITE 100 (2025)',  imageUrl: null, url: 'https://www.tennisbear.net/racket/11509/info' },
  { id: 'prince-tour-o3-100',            brand: 'Prince',       model: 'TOUR O3 100',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/27116/info' },
  { id: 'prince-emblem-110',             brand: 'Prince',       model: 'EMBLEM 110',                   imageUrl: null, url: 'https://www.tennisbear.net/racket/11513/info' },
  { id: 'prince-sierra-o3',              brand: 'Prince',       model: 'SIERRA O3',                    imageUrl: null, url: 'https://www.tennisbear.net/racket/37148/info' },

  // ── Tecnifibre ────────────────────────────────────────────────────────
  { id: 'tecnifibre-fire-300',           brand: 'Tecnifibre',   model: 'FIRE 300',                     imageUrl: null, url: 'https://www.tennisbear.net/racket/33584/info' },
  { id: 'tecnifibre-fire-305s',          brand: 'Tecnifibre',   model: 'FIRE 305S',                    imageUrl: null, url: 'https://www.tennisbear.net/racket/33222/info' },
  { id: 'tecnifibre-fire-285',           brand: 'Tecnifibre',   model: 'FIRE 285',                     imageUrl: null, url: 'https://www.tennisbear.net/racket/33287/info' },
  { id: 'tecnifibre-t-fight-300-ig',     brand: 'Tecnifibre',   model: 'T-FIGHT 300 IG',               imageUrl: null, url: 'https://www.tennisbear.net/racket/35828/info' },
  { id: 'tecnifibre-t-fight-300s-ig',    brand: 'Tecnifibre',   model: 'T-FIGHT 300S IG',              imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=TF3IGS-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/36092/info' },
  { id: 'tecnifibre-t-fight-300-hinoe',  brand: 'Tecnifibre',   model: 'T-FIGHT 300 Hinoe Edition',    imageUrl: null, url: 'https://www.tennisbear.net/racket/31439/info' },
  { id: 'tecnifibre-t-fight-300s',       brand: 'Tecnifibre',   model: 'T-FIGHT 300S',                 imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=TF300S-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/19823/info' },
  { id: 'tecnifibre-t-fight-305s',       brand: 'Tecnifibre',   model: 'T-FIGHT 305S',                 imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=TF305S-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/19758/info' },
  { id: 'tecnifibre-t-fight-300',        brand: 'Tecnifibre',   model: 'T-FIGHT 300',                  imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=TF30ST-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/21440/info' },

  // ── DUNLOP ────────────────────────────────────────────────────────────
  { id: 'dunlop-lx800-tour',             brand: 'DUNLOP',       model: 'LX 800 TOUR',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/37511/info' },
  { id: 'dunlop-sx-300-2025',            brand: 'DUNLOP',       model: 'SX 300 (2025)',                imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=DSX3R-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/19262/info' },
  { id: 'dunlop-sx-300-tour-2025',       brand: 'DUNLOP',       model: 'SX 300 TOUR (2025)',           imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=DSXTR-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/19658/info' },
  { id: 'dunlop-sx-300-ls-2025',         brand: 'DUNLOP',       model: 'SX 300 LS (2025)',             imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=DSXLSR-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/21770/info' },
  { id: 'dunlop-fx-500-2025',            brand: 'DUNLOP',       model: 'FX 500 (2025)',                imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=DF500-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/29195/info' },
  { id: 'dunlop-fx-500-tour-2025',       brand: 'DUNLOP',       model: 'FX 500 TOUR (2025)',           imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=FX5TR-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/28667/info' },
  { id: 'dunlop-fx-500-ls',              brand: 'DUNLOP',       model: 'FX 500 LS',                    imageUrl: 'https://img.tennis-warehouse.com/watermark/rs.php?path=FX5LR-1.jpg&nw=455', url: 'https://www.tennisbear.net/racket/30383/info' },
  { id: 'dunlop-cx200-black',            brand: 'DUNLOP',       model: 'CX 200 BLACK Limited Edition', imageUrl: null, url: 'https://www.tennisbear.net/racket/26655/info' },
  { id: 'dunlop-cx400-tour-black',       brand: 'DUNLOP',       model: 'CX 400 TOUR LIMITED BLACK',    imageUrl: null, url: 'https://www.tennisbear.net/racket/26555/info' },

  // ── Mizuno ────────────────────────────────────────────────────────────
  { id: 'mizuno-acrostrike-305',         brand: 'Mizuno',       model: 'ACROSTRIKE 305',               imageUrl: null, url: 'https://www.tennisbear.net/racket/32990/info' },
  { id: 'mizuno-acrostrike-290',         brand: 'Mizuno',       model: 'ACROSTRIKE 290',               imageUrl: null, url: 'https://www.tennisbear.net/racket/34673/info' },
  { id: 'mizuno-acrospeed-v05',          brand: 'Mizuno',       model: 'ACROSPEED V-05',               imageUrl: null, url: 'https://www.tennisbear.net/racket/31606/info' },
  { id: 'mizuno-acrospeed-300',          brand: 'Mizuno',       model: 'ACROSPEED 300',                imageUrl: null, url: 'https://www.tennisbear.net/racket/1586/info' },
  { id: 'mizuno-acrospeed-285',          brand: 'Mizuno',       model: 'ACROSPEED 285',                imageUrl: null, url: 'https://www.tennisbear.net/racket/1629/info' },
  { id: 'mizuno-acrospeed-270',          brand: 'Mizuno',       model: 'ACROSPEED 270',                imageUrl: null, url: 'https://www.tennisbear.net/racket/35762/info' },
  { id: 'mizuno-acrospeed-spro',         brand: 'Mizuno',       model: 'ACROSPEED S-Pro',              imageUrl: null, url: 'https://www.tennisbear.net/racket/8108/info' },
  { id: 'mizuno-acrospeed-accel-260',    brand: 'Mizuno',       model: 'ACROSPEED ACCEL 260',          imageUrl: null, url: 'https://www.tennisbear.net/racket/1630/info' },
  { id: 'mizuno-pro-light-1',            brand: 'Mizuno',       model: 'PRO LIGHT 1',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/17612/info' },

  // ── BRIDGESTONE ───────────────────────────────────────────────────────
  { id: 'bridgestone-xblade-bx300',      brand: 'BRIDGESTONE',  model: 'X BLADE BX 300',               imageUrl: null, url: 'https://www.tennisbear.net/racket/389/info' },
  { id: 'bridgestone-xblade-bx305',      brand: 'BRIDGESTONE',  model: 'X BLADE BX 305',               imageUrl: null, url: 'https://www.tennisbear.net/racket/388/info' },
  { id: 'bridgestone-xblade-bx315',      brand: 'BRIDGESTONE',  model: 'X BLADE BX 315',               imageUrl: null, url: 'https://www.tennisbear.net/racket/390/info' },
  { id: 'bridgestone-xblade-rs300',      brand: 'BRIDGESTONE',  model: 'X BLADE RS 300',               imageUrl: null, url: 'https://www.tennisbear.net/racket/384/info' },
  { id: 'bridgestone-xblade-rz300',      brand: 'BRIDGESTONE',  model: 'X BLADE RZ 300',               imageUrl: null, url: 'https://www.tennisbear.net/racket/394/info' },
  { id: 'bridgestone-beam-os280',        brand: 'BRIDGESTONE',  model: 'BEAM-OS 280',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/5438/info' },
  { id: 'bridgestone-beam-os265',        brand: 'BRIDGESTONE',  model: 'BEAM-OS 265',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/378/info' },
  { id: 'bridgestone-beam-os240',        brand: 'BRIDGESTONE',  model: 'BEAM-OS 240',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/377/info' },

  // ── SRIXON ────────────────────────────────────────────────────────────
  { id: 'srixon-revo-cs10-black',        brand: 'SRIXON',       model: 'REVO CS 10.0 BLACK',           imageUrl: null, url: 'https://www.tennisbear.net/racket/506/info' },
  { id: 'srixon-revo-cs10',              brand: 'SRIXON',       model: 'REVO CS 10.0',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/507/info' },
  { id: 'srixon-revo-cs8',               brand: 'SRIXON',       model: 'REVO CS 8.0',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/508/info' },
  { id: 'srixon-revo-cv3-ftour',         brand: 'SRIXON',       model: 'REVO CV 3.0 F-TOUR',           imageUrl: null, url: 'https://www.tennisbear.net/racket/22827/info' },
  { id: 'srixon-revo-cv3-fls',           brand: 'SRIXON',       model: 'REVO CV 3.0 F-LS',             imageUrl: null, url: 'https://www.tennisbear.net/racket/10946/info' },
  { id: 'srixon-revo-cx2',               brand: 'SRIXON',       model: 'REVO CX 2.0',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/18899/info' },
  { id: 'srixon-revo-cx2-tour',          brand: 'SRIXON',       model: 'REVO CX 2.0 TOUR 16x19',       imageUrl: null, url: 'https://www.tennisbear.net/racket/1844/info' },
  { id: 'srixon-revo-cz100s',            brand: 'SRIXON',       model: 'REVO CZ 100S',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/17810/info' },
  { id: 'srixon-revo-cz98d',             brand: 'SRIXON',       model: 'REVO CZ 98D',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/25598/info' },

  // ── Toalson ───────────────────────────────────────────────────────────
  { id: 'toalson-smach-tour-300-v5',     brand: 'Toalson',      model: 'S-MACH TOUR 300 Ver.5.0',      imageUrl: null, url: 'https://www.tennisbear.net/racket/30812/info' },
  { id: 'toalson-smach-tour-v5',         brand: 'Toalson',      model: 'S MACH TOUR V5',               imageUrl: null, url: 'https://www.tennisbear.net/racket/34146/info' },
  { id: 'toalson-smach-tour-280-v4',     brand: 'Toalson',      model: 'S-MACH TOUR 280 Ver.4.0',      imageUrl: null, url: 'https://www.tennisbear.net/racket/33848/info' },
  { id: 'toalson-smach-tour-300-v4',     brand: 'Toalson',      model: 'S-MACH TOUR 300 Ver.4.0',      imageUrl: null, url: 'https://www.tennisbear.net/racket/7976/info' },
  { id: 'toalson-forty-love-xxv',        brand: 'Toalson',      model: 'FORTY-LOVE XXV',               imageUrl: null, url: 'https://www.tennisbear.net/racket/24179/info' },
  { id: 'toalson-ovr-108',               brand: 'Toalson',      model: 'OVR 108 (2024)',               imageUrl: null, url: 'https://www.tennisbear.net/racket/8372/info' },
  { id: 'toalson-pius-code',             brand: 'Toalson',      model: 'Pius.Code',                    imageUrl: null, url: 'https://www.tennisbear.net/racket/1576/info' },

  // ── Diadem ────────────────────────────────────────────────────────────
  { id: 'diadem-axis-100-svitolina',     brand: 'Diadem',       model: 'AXIS 100 SVITOLINA',           imageUrl: null, url: 'https://www.tennisbear.net/racket/32099/info' },
  { id: 'diadem-axis-98-svitolina',      brand: 'Diadem',       model: 'AXIS 98 SVITOLINA',            imageUrl: null, url: 'https://www.tennisbear.net/racket/37808/info' },
  { id: 'diadem-axis-100',               brand: 'Diadem',       model: 'AXIS 100',                     imageUrl: null, url: 'https://www.tennisbear.net/racket/21011/info' },
  { id: 'diadem-axis-98',                brand: 'Diadem',       model: 'AXIS 98',                      imageUrl: null, url: 'https://www.tennisbear.net/racket/20945/info' },
  { id: 'diadem-edge-blucore-pro-16',    brand: 'Diadem',       model: 'EDGE BLUCORE PRO 16',          imageUrl: null, url: 'https://www.tennisbear.net/racket/29360/info' },
  { id: 'diadem-edge-blucore-pro-14',    brand: 'Diadem',       model: 'EDGE BLUCORE PRO 14',          imageUrl: null, url: 'https://www.tennisbear.net/racket/30285/info' },
  { id: 'diadem-edge-blucore-hybrid',    brand: 'Diadem',       model: 'EDGE BLUCORE HYBRID 16',       imageUrl: null, url: 'https://www.tennisbear.net/racket/31802/info' },
  { id: 'diadem-warrior-blucore-pro',    brand: 'Diadem',       model: 'WARRIOR BLUCORE PRO 16',       imageUrl: null, url: 'https://www.tennisbear.net/racket/24839/info' },

  // ── ProKennex ─────────────────────────────────────────────────────────
  { id: 'prokennex-black-ace-300',       brand: 'ProKennex',    model: 'Black Ace 300',                imageUrl: null, url: 'https://www.tennisbear.net/racket/25301/info' },
  { id: 'prokennex-black-ace-pro',       brand: 'ProKennex',    model: 'Black Ace Pro',                imageUrl: null, url: 'https://www.tennisbear.net/racket/23288/info' },
  { id: 'prokennex-black-ace-105-2025',  brand: 'ProKennex',    model: 'Black Ace 105 2025',           imageUrl: null, url: 'https://www.tennisbear.net/racket/20351/info' },
  { id: 'prokennex-black-ace-105',       brand: 'ProKennex',    model: 'Black Ace 105',                imageUrl: null, url: 'https://www.tennisbear.net/racket/7877/info' },
  { id: 'prokennex-ki-q15-v20',          brand: 'ProKennex',    model: 'Ki Q+15 ver.20',               imageUrl: null, url: 'https://www.tennisbear.net/racket/201/info' },
  { id: 'prokennex-ki-q20-v21',          brand: 'ProKennex',    model: 'Ki Q+ 20 ver.21',              imageUrl: null, url: 'https://www.tennisbear.net/racket/196/info' },
  { id: 'prokennex-c1-pro-tour-v20',     brand: 'ProKennex',    model: 'C1 Pro Tour ver.20',           imageUrl: null, url: 'https://www.tennisbear.net/racket/199/info' },
  { id: 'prokennex-wisdom-comp',         brand: 'ProKennex',    model: 'WISDOM COMP',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/28898/info' },

  // ── Solinco ───────────────────────────────────────────────────────────
  { id: 'solinco-whiteout-v2',           brand: 'Solinco',      model: 'WHITEOUT Ver2',                imageUrl: null, url: 'https://www.tennisbear.net/racket/23982/info' },
  { id: 'solinco-whiteout-v2-305-xtd',   brand: 'Solinco',      model: 'WHITEOUT V2 305 XTD',          imageUrl: null, url: 'https://www.tennisbear.net/racket/26423/info' },
  { id: 'solinco-whiteout-305',          brand: 'Solinco',      model: 'WHITEOUT 305',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/6533/info' },
  { id: 'solinco-whiteout-305-18x20',    brand: 'Solinco',      model: 'WHITEOUT 305 18x20',           imageUrl: null, url: 'https://www.tennisbear.net/racket/6532/info' },
  { id: 'solinco-whiteout-290',          brand: 'Solinco',      model: 'WHITEOUT 290',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/6537/info' },
  { id: 'solinco-blackout-v2-300',       brand: 'Solinco',      model: 'BLACKOUT V2 300',              imageUrl: null, url: 'https://www.tennisbear.net/racket/34277/info' },
  { id: 'solinco-blackout-v2-300-xtd',   brand: 'Solinco',      model: 'BLACKOUT V2 300 XTD',          imageUrl: null, url: 'https://www.tennisbear.net/racket/30548/info' },
  { id: 'solinco-blackout-300',          brand: 'Solinco',      model: 'Blackout 300',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/6526/info' },
  { id: 'solinco-blackout-285',          brand: 'Solinco',      model: 'Blackout 285',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/6529/info' },

  // ── VOLKL ─────────────────────────────────────────────────────────────
  { id: 'volkl-v8-pro',                  brand: 'VOLKL',        model: 'V8 PRO',                       imageUrl: null, url: 'https://www.tennisbear.net/racket/37577/info' },
  { id: 'volkl-vostra-v1-pro',           brand: 'VOLKL',        model: 'VOSTRA V1 Pro',                imageUrl: null, url: 'https://www.tennisbear.net/racket/25103/info' },
  { id: 'volkl-vostra-v1-mp',            brand: 'VOLKL',        model: 'VOSTRA V1 MP',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/27215/info' },
  { id: 'volkl-vostra-v8-300',           brand: 'VOLKL',        model: 'Vostra V8 300G',               imageUrl: null, url: 'https://www.tennisbear.net/racket/9065/info' },
  { id: 'volkl-vostra-v8-285',           brand: 'VOLKL',        model: 'Vostra V8 285G',               imageUrl: null, url: 'https://www.tennisbear.net/racket/16094/info' },
  { id: 'volkl-vostra-v9-305',           brand: 'VOLKL',        model: 'Vostra V9 305g',               imageUrl: null, url: 'https://www.tennisbear.net/racket/11936/info' },
  { id: 'volkl-c10-pro',                 brand: 'VOLKL',        model: 'C10 Pro',                      imageUrl: null, url: 'https://www.tennisbear.net/racket/7151/info' },

  // ── MANTIS ────────────────────────────────────────────────────────────
  { id: 'mantis-tour-305',               brand: 'MANTIS',       model: 'MANTIS TOUR 305',              imageUrl: null, url: 'https://www.tennisbear.net/racket/3224/info' },
  { id: 'mantis-pro-310',                brand: 'MANTIS',       model: 'MANTIS PRO 310',               imageUrl: null, url: 'https://www.tennisbear.net/racket/127/info' },
  { id: 'mantis-300-ps-iii',             brand: 'MANTIS',       model: 'MANTIS 300 PS III',            imageUrl: null, url: 'https://www.tennisbear.net/racket/132/info' },
  { id: 'mantis-285-ps-iii',             brand: 'MANTIS',       model: 'MANTIS 285 PS III',            imageUrl: null, url: 'https://www.tennisbear.net/racket/131/info' },
  { id: 'mantis-265-cs-iii',             brand: 'MANTIS',       model: 'MANTIS 265 CS III',            imageUrl: null, url: 'https://www.tennisbear.net/racket/130/info' },

  // ── WINNING SHOT ──────────────────────────────────────────────────────
  { id: 'winningshot-vatic-vsol-pro',    brand: 'WINNING SHOT', model: 'Vatic Pro V-sol Pro Flash',    imageUrl: null, url: 'https://www.tennisbear.net/racket/31340/info' },
  { id: 'winningshot-holbrook-aeroti',   brand: 'WINNING SHOT', model: 'HOLBROOK AEROTI PRO',          imageUrl: null, url: 'https://www.tennisbear.net/racket/31010/info' },
  { id: 'winningshot-vatic-saga-v7',     brand: 'WINNING SHOT', model: 'Vatic Pro Saga V7-LH',         imageUrl: null, url: 'https://www.tennisbear.net/racket/34310/info' },
  { id: 'winningshot-vatic-prism',       brand: 'WINNING SHOT', model: 'Vatic Pro PRISM BLOOM',        imageUrl: null, url: 'https://www.tennisbear.net/racket/24806/info' },
  { id: 'winningshot-holbrook-power',    brand: 'WINNING SHOT', model: 'HOLBROOK POWER PRO Blue',      imageUrl: null, url: 'https://www.tennisbear.net/racket/30218/info' },
  { id: 'winningshot-evolution-tour',    brand: 'WINNING SHOT', model: 'THE EVOLUTION TOUR',           imageUrl: null, url: 'https://www.tennisbear.net/racket/14213/info' },

  // ── Pacific ───────────────────────────────────────────────────────────
  { id: 'pacific-x-force-pro-no1',       brand: 'Pacific',      model: 'X FORCE PRO NO.1',             imageUrl: null, url: 'https://www.tennisbear.net/racket/14147/info' },
  { id: 'pacific-bxt-x-force-pro',       brand: 'Pacific',      model: 'BXT X FORCE PRO NO.1',         imageUrl: null, url: 'https://www.tennisbear.net/racket/8210/info' },
  { id: 'pacific-x-fast-pro',            brand: 'Pacific',      model: 'X Fast Pro',                   imageUrl: null, url: 'https://www.tennisbear.net/racket/10649/info' },
  { id: 'pacific-x-feel-pro-90',         brand: 'Pacific',      model: 'X Feel Pro 90 Vacuum',         imageUrl: null, url: 'https://www.tennisbear.net/racket/15236/info' },

  // ── Snauwaert ─────────────────────────────────────────────────────────
  { id: 'snauwaert-hi-ten-98-tj',        brand: 'Snauwaert',    model: 'Hi-TEN 98 TJ',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/18998/info' },
  { id: 'snauwaert-hi-ten-100r',         brand: 'Snauwaert',    model: 'HI-TEN 100 R',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/9329/info' },
  { id: 'snauwaert-hi-ten-98r-torneo',   brand: 'Snauwaert',    model: 'HI-TEN 98R TORNEO',            imageUrl: null, url: 'https://www.tennisbear.net/racket/18470/info' },
  { id: 'snauwaert-hi-ten-pro-98',       brand: 'Snauwaert',    model: 'HI-TEN PRO 98',                imageUrl: null, url: 'https://www.tennisbear.net/racket/1117/info' },
  { id: 'snauwaert-vitas-115',           brand: 'Snauwaert',    model: 'VITAS 115',                    imageUrl: null, url: 'https://www.tennisbear.net/racket/27743/info' },

  // ── Lacoste ───────────────────────────────────────────────────────────
  { id: 'lacoste-l23',                   brand: 'Lacoste',      model: 'L.23',                         imageUrl: null, url: 'https://www.tennisbear.net/racket/4214/info' },
  { id: 'lacoste-l23-light',             brand: 'Lacoste',      model: 'L.23 LIGHT',                   imageUrl: null, url: 'https://www.tennisbear.net/racket/4215/info' },
  { id: 'lacoste-l20',                   brand: 'Lacoste',      model: 'L.20',                         imageUrl: null, url: 'https://www.tennisbear.net/racket/19460/info' },
  { id: 'lacoste-lt303',                 brand: 'Lacoste',      model: 'LT303 Equijet System',         imageUrl: null, url: 'https://www.tennisbear.net/racket/35300/info' },

  // ── Donnay ────────────────────────────────────────────────────────────
  { id: 'donnay-borg-pro',               brand: 'Donnay',       model: 'BORG PRO',                     imageUrl: null, url: 'https://www.tennisbear.net/racket/13851/info' },
  { id: 'donnay-classic-pro',            brand: 'Donnay',       model: 'CLASSIC PRO',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/36851/info' },
  { id: 'donnay-allwood',                brand: 'Donnay',       model: 'ALLWOOD',                      imageUrl: null, url: 'https://www.tennisbear.net/racket/28337/info' },
  { id: 'donnay-x-orange',               brand: 'Donnay',       model: 'X-ORANGE',                     imageUrl: null, url: 'https://www.tennisbear.net/racket/28403/info' },
  { id: 'donnay-1980-graphite',          brand: 'Donnay',       model: 'Donnay 1980 Graphite',         imageUrl: null, url: 'https://www.tennisbear.net/racket/12860/info' },

  // ── YAMAHA ────────────────────────────────────────────────────────────
  { id: 'yamaha-proto-ex110-tour',       brand: 'YAMAHA',       model: 'PROTO EX-110 TOUR EDITION',    imageUrl: null, url: 'https://www.tennisbear.net/racket/38072/info' },
  { id: 'yamaha-proto-ex110',            brand: 'YAMAHA',       model: 'PROTO EX110',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/32132/info' },
  { id: 'yamaha-ex100g',                 brand: 'YAMAHA',       model: 'EX100G',                       imageUrl: null, url: 'https://www.tennisbear.net/racket/34442/info' },

  // ── adidas ────────────────────────────────────────────────────────────
  { id: 'adidas-adibarricade-2',         brand: 'adidas',       model: 'adiBARRICADE 2',               imageUrl: null, url: 'https://www.tennisbear.net/racket/4/info' },
  { id: 'adidas-adibarricade',           brand: 'adidas',       model: 'adiBARRICADE',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/3/info' },
  { id: 'adidas-adigrans',               brand: 'adidas',       model: 'ADIGRANS',                     imageUrl: null, url: 'https://www.tennisbear.net/racket/2/info' },
  { id: 'adidas-gtx-pro',                brand: 'adidas',       model: 'GTX PRO',                      imageUrl: null, url: 'https://www.tennisbear.net/racket/25665/info' },

  // ── Gamma ─────────────────────────────────────────────────────────────
  { id: 'gamma-rzr-98',                  brand: 'Gamma',        model: 'RZR 98',                       imageUrl: null, url: 'https://www.tennisbear.net/racket/25962/info' },
  { id: 'gamma-rzr-100t',                brand: 'Gamma',        model: 'RZR 100T',                     imageUrl: null, url: 'https://www.tennisbear.net/racket/8339/info' },
  { id: 'gamma-rainmaker-16',            brand: 'Gamma',        model: 'RAINMAKER 16',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/27941/info' },

  // ── KNEISSL ───────────────────────────────────────────────────────────
  { id: 'kneissl-prime-star-black',      brand: 'KNEISSL',      model: 'PRIME STAR BLACK',             imageUrl: null, url: 'https://www.tennisbear.net/racket/8570/info' },
  { id: 'kneissl-prime-star-white',      brand: 'KNEISSL',      model: 'PRIME STAR WHITE',             imageUrl: null, url: 'https://www.tennisbear.net/racket/7745/info' },

  // ── FISCHER ───────────────────────────────────────────────────────────
  { id: 'fischer-vacuum-pro-ms90',       brand: 'FISCHER',      model: 'VACUUM PRO MS 90',             imageUrl: null, url: 'https://www.tennisbear.net/racket/25829/info' },
  { id: 'fischer-powerwood',             brand: 'FISCHER',      model: 'POWERWOOD',                    imageUrl: null, url: 'https://www.tennisbear.net/racket/31673/info' },
  { id: 'fischer-m-pro-no1-98',          brand: 'FISCHER',      model: 'M-Pro No.1 98',                imageUrl: null, url: 'https://www.tennisbear.net/racket/36455/info' },
  { id: 'fischer-pro-tour-extreme-ft',   brand: 'FISCHER',      model: 'PRO TOUR EXTREME FT',          imageUrl: null, url: 'https://www.tennisbear.net/racket/34739/info' },

  // ── Slazenger ─────────────────────────────────────────────────────────
  { id: 'slazenger-aero-tour-98',        brand: 'Slazenger',    model: 'Aero Tour 98',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/33947/info' },
  { id: 'slazenger-type-one-nx',         brand: 'Slazenger',    model: 'TYPE ONE NX',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/1269/info' },
  { id: 'slazenger-pro-braided',         brand: 'Slazenger',    model: 'Pro braided',                  imageUrl: null, url: 'https://www.tennisbear.net/racket/23519/info' },

  // ── ARTENGO ───────────────────────────────────────────────────────────
  { id: 'artengo-tr990-pro',             brand: 'ARTENGO',      model: 'TR990 Pro',                    imageUrl: null, url: 'https://www.tennisbear.net/racket/1253/info' },
  { id: 'artengo-tr960-18x20',           brand: 'ARTENGO',      model: 'TR960 Control Tour 18x20',     imageUrl: null, url: 'https://www.tennisbear.net/racket/831/info' },
  { id: 'artengo-tr960-16x19',           brand: 'ARTENGO',      model: 'TR960 Control Tour 16x19',     imageUrl: null, url: 'https://www.tennisbear.net/racket/18602/info' },
  { id: 'artengo-tr960-precision',       brand: 'ARTENGO',      model: 'TR960 PRECISION',              imageUrl: null, url: 'https://www.tennisbear.net/racket/1365/info' },

  // ── KPI ───────────────────────────────────────────────────────────────
  { id: 'kpi-k-classic',                 brand: 'KPI',          model: 'K Classic-Black/Gold',         imageUrl: null, url: 'https://www.tennisbear.net/racket/4743/info' },
  { id: 'kpi-k-air',                     brand: 'KPI',          model: 'K Air-Black/Silver/Blue',      imageUrl: null, url: 'https://www.tennisbear.net/racket/4742/info' },
  { id: 'kpi-k-pro-295',                 brand: 'KPI',          model: 'K Pro 295+',                   imageUrl: null, url: 'https://www.tennisbear.net/racket/4748/info' },
  { id: 'kpi-k-tour-295',                brand: 'KPI',          model: 'K Tour 295',                   imageUrl: null, url: 'https://www.tennisbear.net/racket/4746/info' },
  { id: 'kpi-k-tour-322',                brand: 'KPI',          model: 'K Tour 322',                   imageUrl: null, url: 'https://www.tennisbear.net/racket/4747/info' },

  // ── ANGEL ─────────────────────────────────────────────────────────────
  { id: 'angel-k7-cyan',                 brand: 'ANGEL',        model: 'K7 CYAN',                      imageUrl: null, url: 'https://www.tennisbear.net/racket/1139/info' },
  { id: 'angel-k7',                      brand: 'ANGEL',        model: 'K7',                           imageUrl: null, url: 'https://www.tennisbear.net/racket/17876/info' },
  { id: 'angel-v4-100',                  brand: 'ANGEL',        model: 'V4 CUSTOM 100inch',            imageUrl: null, url: 'https://www.tennisbear.net/racket/1134/info' },
  { id: 'angel-v4-97',                   brand: 'ANGEL',        model: 'V4 CUSTOM 97inch',             imageUrl: null, url: 'https://www.tennisbear.net/racket/1135/info' },

  // ── TENX ──────────────────────────────────────────────────────────────
  { id: 'tenx-xcalibre-315',             brand: 'TENX',         model: 'XCALIBRE 315G',                imageUrl: null, url: 'https://www.tennisbear.net/racket/1028/info' },
  { id: 'tenx-xcalibre-300',             brand: 'TENX',         model: 'XCALIBRE 300G',                imageUrl: null, url: 'https://www.tennisbear.net/racket/1027/info' },
  { id: 'tenx-xcalibre-290',             brand: 'TENX',         model: 'XCALIBRE 290G',                imageUrl: null, url: 'https://www.tennisbear.net/racket/1026/info' },
  { id: 'tenx-xstrike-300',              brand: 'TENX',         model: 'XSTRIKE 300G',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/1031/info' },
  { id: 'tenx-xstrike-285',              brand: 'TENX',         model: 'XSTRIKE 285G',                 imageUrl: null, url: 'https://www.tennisbear.net/racket/1030/info' },

  // ── Bosworth ──────────────────────────────────────────────────────────
  { id: 'bosworth-fox-target-210',       brand: 'Bosworth',     model: 'Fox Target 210',               imageUrl: null, url: 'https://www.tennisbear.net/racket/9527/info' },
];
