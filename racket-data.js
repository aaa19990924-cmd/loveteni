// テニスラケットデータベース（2022年以降のモデルのみ）
const BRANDS = ['Wilson', 'Babolat', 'YONEX', 'HEAD', 'DUNLOP', 'Prince', 'Tecnifibre', 'Kneissl', 'DIADEM'];

const RACKET_DATABASE = [
  // ========== Wilson ==========
  // RF01シリーズ (2024)
  { id: 'wilson-rf01-pro', brand: 'Wilson', series: 'RF', model: 'RF 01 PRO', janCode: 'WR151311U2', searchKeyword: 'Wilson RF01 Pro', weight: 320, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2024, players: ['フェデラー監修'], concept: 'フェデラー監修、SABRフレーム採用のプロモデル' },
  { id: 'wilson-rf01', brand: 'Wilson', series: 'RF', model: 'RF 01', janCode: 'WR151411U2', searchKeyword: 'Wilson RF01', weight: 300, headSize: 98, balance: 320, pattern: '16x19', beam: '22mm', year: 2024, players: ['フェデラー監修'], concept: 'フェデラー監修、スタンダード300gモデル' },
  { id: 'wilson-rf01-future', brand: 'Wilson', series: 'RF', model: 'RF 01 FUTURE', janCode: 'WR166811U1', searchKeyword: 'Wilson RF01 Future', weight: 280, headSize: 98, balance: 320, pattern: '16x19', beam: '22mm', year: 2024, players: ['フェデラー監修'], concept: 'フェデラー監修、ジュニア・軽量モデル' },
  { id: 'wilson-rf01-future-lite', brand: 'Wilson', series: 'RF', model: 'RF 01 FUTURE LITE', janCode: 'WR175711U2', searchKeyword: 'Wilson RF01 Future Lite', weight: 260, headSize: 98, balance: 325, pattern: '16x19', beam: '22mm', year: 2024, players: ['フェデラー監修'], concept: 'フェデラー監修、最軽量モデル' },

  // Blade V9 (2024)
  { id: 'wilson-blade-98-v9', brand: 'Wilson', series: 'BLADE', model: 'Blade 98 16x19 V9', janCode: 'WR149811U4', searchKeyword: 'Wilson Blade 98 V9', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '21mm', year: 2024, players: ['デミノー', 'ハレプ'], concept: 'しなりとコントロールの融合' },
  { id: 'wilson-blade-98-18x20-v9', brand: 'Wilson', series: 'BLADE', model: 'Blade 98 18x20 V9', janCode: 'WR149911U2', searchKeyword: 'Wilson Blade 98 18x20 V9', weight: 305, headSize: 98, balance: 320, pattern: '18x20', beam: '21mm', year: 2024, players: [], concept: 'コントロール重視の密パターン' },
  { id: 'wilson-blade-100-v9', brand: 'Wilson', series: 'BLADE', model: 'Blade 100 V9', janCode: 'WR151511U1', searchKeyword: 'Wilson Blade 100 V9', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '22mm', year: 2024, players: [], concept: '扱いやすい100インチブレード' },
  { id: 'wilson-blade-100l-v9', brand: 'Wilson', series: 'BLADE', model: 'Blade 100L V9', searchKeyword: 'Wilson Blade 100L V9', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '22mm', year: 2024, players: [], concept: '軽量ブレード' },

  // Clash V3 (2025)
  { id: 'wilson-clash-100-pro-v3', brand: 'Wilson', series: 'CLASH', model: 'Clash 100 PRO V3.0', janCode: 'WR172711U2', searchKeyword: 'Wilson Clash 100 Pro V3', weight: 310, headSize: 100, balance: 310, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: 'シリーズ史上最もしなるプロモデル' },
  { id: 'wilson-clash-100-v3', brand: 'Wilson', series: 'CLASH', model: 'Clash 100 V3.0', janCode: 'WR172811U1', searchKeyword: 'Wilson Clash 100 V3', weight: 295, headSize: 100, balance: 310, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: '柔らかい打感のオールラウンダー' },
  { id: 'wilson-clash-100l-v3', brand: 'Wilson', series: 'CLASH', model: 'Clash 100L V3.0', janCode: 'WR172911U1', searchKeyword: 'Wilson Clash 100L V3', weight: 280, headSize: 100, balance: 320, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: '軽量クラッシュ' },
  { id: 'wilson-clash-100ul-v3', brand: 'Wilson', series: 'CLASH', model: 'Clash 100UL V3.0', janCode: 'WR173011U1', searchKeyword: 'Wilson Clash 100UL V3', weight: 265, headSize: 100, balance: 325, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: 'ウルトラライトクラッシュ' },
  { id: 'wilson-clash-108-v3', brand: 'Wilson', series: 'CLASH', model: 'Clash 108 V3.0', janCode: 'WR173111U1', searchKeyword: 'Wilson Clash 108 V3', weight: 280, headSize: 108, balance: 320, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: 'デカラケクラッシュ' },

  // Ultra V5 (2025)
  { id: 'wilson-ultra-100-v5', brand: 'Wilson', series: 'ULTRA', model: 'Ultra 100 V5.0', janCode: 'WR178811U1', searchKeyword: 'Wilson Ultra 100 V5', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: 'パワーとスピンの黄金スペック' },
  { id: 'wilson-ultra-100l-v5', brand: 'Wilson', series: 'ULTRA', model: 'Ultra 100L V5.0', janCode: 'WR178911U1', searchKeyword: 'Wilson Ultra 100L V5', weight: 280, headSize: 100, balance: 325, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: '軽量ウルトラ' },
  { id: 'wilson-ultra-tour-98-v5', brand: 'Wilson', series: 'ULTRA', model: 'Ultra Tour 98 V5.0', janCode: 'WR189711U2', searchKeyword: 'Wilson Ultra Tour 98 V5', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '21.5mm', year: 2025, players: [], concept: 'コントロール系ウルトラ' },
  { id: 'wilson-ultra-tour-98j-v5', brand: 'Wilson', series: 'ULTRA', model: 'Ultra Tour 98J V5.0', janCode: 'WR189811U2', searchKeyword: 'Wilson Ultra Tour 98J V5', weight: 290, headSize: 98, balance: 325, pattern: '16x20', beam: '21.5mm', year: 2025, players: [], concept: '日本限定ウルトラツアー' },
  { id: 'wilson-ultra-99-pro-v5', brand: 'Wilson', series: 'ULTRA', model: 'Ultra 99 PRO V5.0', janCode: 'WR178711U2', searchKeyword: 'Wilson Ultra 99 Pro V5', weight: 305, headSize: 99, balance: 315, pattern: '16x20', beam: '22mm', year: 2025, players: [], concept: '99インチプロモデル' },

  // Pro Staff V14 (2023)
  { id: 'wilson-prostaff-97-v14', brand: 'Wilson', series: 'PRO STAFF', model: 'Pro Staff 97 V14', janCode: 'WR125711U2', searchKeyword: 'Wilson Pro Staff 97 V14', weight: 315, headSize: 97, balance: 310, pattern: '16x19', beam: '21.5mm', year: 2023, players: [], concept: '伝統のプロスタッフ' },
  { id: 'wilson-prostaff-97l-v14', brand: 'Wilson', series: 'PRO STAFF', model: 'Pro Staff 97L V14', janCode: 'WR125911U1', searchKeyword: 'Wilson Pro Staff 97L V14', weight: 290, headSize: 97, balance: 325, pattern: '16x19', beam: '21.5mm', year: 2023, players: [], concept: '軽量プロスタッフ' },

  // Shift (2023)
  { id: 'wilson-shift-99-pro', brand: 'Wilson', series: 'SHIFT', model: 'Shift 99 Pro', janCode: 'WR145411U2', searchKeyword: 'Wilson Shift 99 Pro', weight: 315, headSize: 99, balance: 315, pattern: '16x20', beam: '23mm', year: 2023, players: [], concept: 'スピン＆コントロール重視の新シリーズ' },
  { id: 'wilson-shift-99', brand: 'Wilson', series: 'SHIFT', model: 'Shift 99', janCode: 'WR145311U2', searchKeyword: 'Wilson Shift 99', weight: 300, headSize: 99, balance: 320, pattern: '16x20', beam: '23mm', year: 2023, players: [], concept: 'バランスの取れたシフト' },

  // ========== Babolat ==========
  { id: 'babolat-puredrive-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive 2025', janCode: '101552', searchKeyword: 'Babolat Pure Drive', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: 'パワーとスピンの黄金スペック' },
  { id: 'babolat-puredrive-98-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive 98 2025', janCode: '101551', searchKeyword: 'Babolat Pure Drive 98', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '21mm', year: 2025, players: [], concept: 'コントロール重視の98インチ' },
  { id: 'babolat-puredrive-plus-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive Plus 2025', janCode: '101553', searchKeyword: 'Babolat Pure Drive Plus', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: 'ロングボディバージョン' },
  { id: 'babolat-puredrive-team-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive Team 2025', janCode: '101554', searchKeyword: 'Babolat Pure Drive Team', weight: 285, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: '軽量チームモデル' },
  { id: 'babolat-puredrive-lite-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive Lite 2025', janCode: '101555', searchKeyword: 'Babolat Pure Drive Lite', weight: 270, headSize: 100, balance: 330, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: 'ライトモデル' },
  { id: 'babolat-puredrive-107-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive 107 2025', janCode: '101557', searchKeyword: 'Babolat Pure Drive 107', weight: 280, headSize: 107, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: 'デカラケパワー系' },

  { id: 'babolat-pureaero-2023', brand: 'Babolat', series: 'Pure Aero', model: 'Pure Aero 2023', janCode: '101569', searchKeyword: 'Babolat Pure Aero', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2023, players: ['ナダル', 'アルカラス'], concept: 'スピン系の代名詞' },
  { id: 'babolat-pureaero-98-2023', brand: 'Babolat', series: 'Pure Aero', model: 'Pure Aero 98 2023', janCode: '101567', searchKeyword: 'Babolat Pure Aero 98', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '21-23-21mm', year: 2023, players: [], concept: 'コントロール重視スピン系' },
  { id: 'babolat-pureaero-team-2023', brand: 'Babolat', series: 'Pure Aero', model: 'Pure Aero Team 2023', janCode: '101571', searchKeyword: 'Babolat Pure Aero Team', weight: 285, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2023, players: [], concept: '軽量ピュアアエロ' },
  { id: 'babolat-pureaero-lite-2023', brand: 'Babolat', series: 'Pure Aero', model: 'Pure Aero Lite 2023', janCode: '101572', searchKeyword: 'Babolat Pure Aero Lite', weight: 270, headSize: 100, balance: 330, pattern: '16x19', beam: '23-26-23mm', year: 2023, players: [], concept: 'ライトピュアアエロ' },
  { id: 'babolat-pureaero-rafa-2023', brand: 'Babolat', series: 'Pure Aero', model: 'Pure Aero Rafa 2023', searchKeyword: 'Babolat Pure Aero Rafa', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2023, players: ['ナダル'], concept: 'ナダルモデル' },

  { id: 'babolat-purestrike-100-2025', brand: 'Babolat', series: 'Pure Strike', model: 'Pure Strike 100 2025', janCode: '101579', searchKeyword: 'Babolat Pure Strike 100', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '21-23-21mm', year: 2025, players: [], concept: 'コントロール系オールラウンダー' },
  { id: 'babolat-purestrike-100-16x20-2025', brand: 'Babolat', series: 'Pure Strike', model: 'Pure Strike 100 16x20 2025', janCode: '101576', searchKeyword: 'Babolat Pure Strike 100 16x20', weight: 305, headSize: 100, balance: 310, pattern: '16x20', beam: '21-23-21mm', year: 2025, players: [], concept: '密パターン版' },
  { id: 'babolat-purestrike-98-2025', brand: 'Babolat', series: 'Pure Strike', model: 'Pure Strike 98 16x19 2025', janCode: '101577', searchKeyword: 'Babolat Pure Strike 98', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '21-23-21mm', year: 2025, players: [], concept: '98インチコントロール' },
  { id: 'babolat-purestrike-97-2025', brand: 'Babolat', series: 'Pure Strike', model: 'Pure Strike 97 2025', janCode: '101574', searchKeyword: 'Babolat Pure Strike 97', weight: 310, headSize: 97, balance: 315, pattern: '16x19', beam: '21-21-21mm', year: 2025, players: ['ティエム'], concept: '最も競技志向のピュアストライク' },

  { id: 'babolat-evodrive-tour-2025', brand: 'Babolat', series: 'Evo Aero', model: 'Evo Drive Tour 2025', searchKeyword: 'Babolat Evo Drive Tour', weight: 285, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-22mm', year: 2025, players: [], concept: '快適性重視の中級者向け' },

  // ========== YONEX ==========
  { id: 'yonex-ezone-98-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 98 2025', searchKeyword: 'ヨネックス EZONE 98 2025', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '23.5mm', year: 2025, players: ['大坂なおみ', 'シェルトン'], concept: 'MINOLON素材採用' },
  { id: 'yonex-ezone-98l-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 98L 2025', searchKeyword: 'ヨネックス EZONE 98L 2025', weight: 285, headSize: 98, balance: 330, pattern: '16x19', beam: '23.5mm', year: 2025, players: [], concept: '軽量イーゾーン98' },
  { id: 'yonex-ezone-100-tour-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 100 Tour 2025', searchKeyword: 'ヨネックス EZONE 100 Tour', weight: 315, headSize: 100, balance: 315, pattern: '16x19', beam: '23.5-26-22mm', year: 2025, players: [], concept: 'ツアープレーヤー向け100インチ' },
  { id: 'yonex-ezone-100-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 100 2025', searchKeyword: 'ヨネックス EZONE 100 2025', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23.5-26-22mm', year: 2025, players: [], concept: '黄金スペック・大坂なおみ使用' },
  { id: 'yonex-ezone-100l-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 100L 2025', searchKeyword: 'ヨネックス EZONE 100L', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '23.5-26-22mm', year: 2025, players: [], concept: '軽量イーゾーン100' },
  { id: 'yonex-ezone-100s-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 100S 2025', searchKeyword: 'ヨネックス EZONE 100S', weight: 270, headSize: 100, balance: 330, pattern: '16x19', beam: '23.5-26-22mm', year: 2025, players: [], concept: 'スーパーライト' },
  { id: 'yonex-ezone-105-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 105 2025', searchKeyword: 'ヨネックス EZONE 105', weight: 275, headSize: 105, balance: 325, pattern: '16x19', beam: '25.5-27.5-21.5mm', year: 2025, players: [], concept: 'デカラケEZONE' },

  // VCORE 2026
  { id: 'yonex-vcore-98-2026', brand: 'YONEX', series: 'VCORE', model: 'VCORE 98 2026', searchKeyword: 'ヨネックス VCORE 98 2026', weight: 305, headSize: 98, balance: 315, pattern: '16x20', beam: '21mm', year: 2026, players: ['西岡良仁'], concept: 'スピン特化フラッグシップ' },
  { id: 'yonex-vcore-100-2026', brand: 'YONEX', series: 'VCORE', model: 'VCORE 100 2026', searchKeyword: 'ヨネックス VCORE 100 2026', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: 'スピンの黄金スペック' },
  { id: 'yonex-vcore-100l-2026', brand: 'YONEX', series: 'VCORE', model: 'VCORE 100L 2026', searchKeyword: 'ヨネックス VCORE 100L', weight: 280, headSize: 100, balance: 325, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: '軽量VCORE' },
  { id: 'yonex-vcore-95-2026', brand: 'YONEX', series: 'VCORE', model: 'VCORE 95 2026', searchKeyword: 'ヨネックス VCORE 95', weight: 310, headSize: 95, balance: 310, pattern: '16x20', beam: '20mm', year: 2026, players: [], concept: '95インチ競技モデル' },

  // PERCEPT
  { id: 'yonex-percept-97-2023', brand: 'YONEX', series: 'PERCEPT', model: 'PERCEPT 97 2023', searchKeyword: 'ヨネックス PERCEPT 97', weight: 310, headSize: 97, balance: 310, pattern: '16x19', beam: '21mm', year: 2023, players: [], concept: 'コントロール志向の薄ラケ' },
  { id: 'yonex-percept-100-2023', brand: 'YONEX', series: 'PERCEPT', model: 'PERCEPT 100 2023', searchKeyword: 'ヨネックス PERCEPT 100', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '21mm', year: 2023, players: [], concept: '100インチパーセプト' },

  // MUSE (2026新)
  { id: 'yonex-muse-100-2026', brand: 'YONEX', series: 'MUSE', model: 'MUSE 100 2026', searchKeyword: 'ヨネックス MUSE 100', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: '2026年新シリーズ・快適性追求' },
  { id: 'yonex-muse-98-2026', brand: 'YONEX', series: 'MUSE', model: 'MUSE 98 2026', searchKeyword: 'ヨネックス MUSE 98', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2026, players: [], concept: '98インチMUSE' },

  // ASTREL
  { id: 'yonex-astrel-100-2023', brand: 'YONEX', series: 'ASTREL', model: 'ASTREL 100 2023', searchKeyword: 'ヨネックス ASTREL 100', weight: 280, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2023, players: [], concept: '中高年向け軽量モデル' },
  { id: 'yonex-astrel-105-2023', brand: 'YONEX', series: 'ASTREL', model: 'ASTREL 105 2023', searchKeyword: 'ヨネックス ASTREL 105', weight: 260, headSize: 105, balance: 325, pattern: '16x19', beam: '23mm', year: 2023, players: [], concept: 'デカラケASTREL' },

  // ========== HEAD ==========
  // Speed 2026（2026/1/22発売・Hy-Bor搭載、シナー使用）
  { id: 'head-speed-pro-2026', brand: 'HEAD', series: 'Speed', model: 'Speed Pro 2026', janCode: '232006', searchKeyword: 'HEAD Speed Pro 2026 232006', weight: 310, headSize: 100, balance: 310, pattern: '18x20', beam: '23mm', year: 2026, players: ['ジョコビッチ'], concept: '18×20の密パターン・コントロール最重視のプロモデル' },
  { id: 'head-speed-tour-2026', brand: 'HEAD', series: 'Speed', model: 'Speed Tour 2026', janCode: '232016', searchKeyword: 'HEAD Speed Tour 2026 232016', weight: 305, headSize: 97, balance: 315, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: 'Speed初の97インチ・フラット主体の競技モデル（2026新登場）' },
  { id: 'head-speed-mp-2026', brand: 'HEAD', series: 'Speed', model: 'Speed MP 2026', janCode: '232026', searchKeyword: 'HEAD Speed MP 2026 232026', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2026, players: ['シナー'], concept: 'Speedシリーズの黄金スペック・シナー使用モデル' },
  { id: 'head-speed-mp-l-2026', brand: 'HEAD', series: 'Speed', model: 'Speed MP L 2026', janCode: '232036', searchKeyword: 'HEAD Speed MP L 2026 232036', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: '振り抜きの良い285gモデル' },
  { id: 'head-speed-mp-ul-2026', brand: 'HEAD', series: 'Speed', model: 'Speed MP UL 2026', janCode: '232046', searchKeyword: 'HEAD Speed MP UL 2026 232046', weight: 265, headSize: 100, balance: 330, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: 'シリーズ最軽量265g・操作性重視（2026新登場）' },
  { id: 'head-speed-team-2026', brand: 'HEAD', series: 'Speed', model: 'Speed Team 2026', janCode: '232056', searchKeyword: 'HEAD Speed Team 2026 232056', weight: 270, headSize: 105, balance: 325, pattern: '16x19', beam: '24mm', year: 2026, players: [], concept: '105インチ・27.2インチロング・パワー重視' },

  // Gravity 2025
  { id: 'head-gravity-pro-2025', brand: 'HEAD', series: 'Gravity', model: 'Gravity Pro 2025', janCode: '235303', searchKeyword: 'HEAD Gravity Pro', weight: 315, headSize: 100, balance: 310, pattern: '18x20', beam: '20mm', year: 2025, players: ['ベルレッティーニ'], concept: 'コントロール系プロモデル' },
  { id: 'head-gravity-mp-2025', brand: 'HEAD', series: 'Gravity', model: 'Gravity MP 2025', janCode: '235323', searchKeyword: 'HEAD Gravity MP', weight: 295, headSize: 100, balance: 320, pattern: '16x19', beam: '22mm', year: 2025, players: [], concept: 'グラビティ黄金スペック' },
  { id: 'head-gravity-tour-2025', brand: 'HEAD', series: 'Gravity', model: 'Gravity Tour 2025', searchKeyword: 'HEAD Gravity Tour', weight: 305, headSize: 99, balance: 315, pattern: '18x20', beam: '20mm', year: 2025, players: [], concept: 'グラビティツアー' },

  // Radical 2025
  { id: 'head-radical-pro-2025', brand: 'HEAD', series: 'Radical', model: 'Radical Pro 2025', janCode: '235103', searchKeyword: 'HEAD Radical Pro', weight: 315, headSize: 98, balance: 315, pattern: '16x19', beam: '21.5mm', year: 2025, players: [], concept: 'ラディカル新世代プロ' },
  { id: 'head-radical-mp-2025', brand: 'HEAD', series: 'Radical', model: 'Radical MP 2025', janCode: '235113', searchKeyword: 'HEAD Radical MP', weight: 300, headSize: 98, balance: 320, pattern: '16x19', beam: '21.5mm', year: 2025, players: [], concept: 'ラディカル黄金スペック' },
  { id: 'head-radical-team-2025', brand: 'HEAD', series: 'Radical', model: 'Radical Team 2025', searchKeyword: 'HEAD Radical Team', weight: 280, headSize: 98, balance: 325, pattern: '16x19', beam: '21.5mm', year: 2025, players: [], concept: '軽量ラディカル' },

  // Extreme 2024
  { id: 'head-extreme-pro-2024', brand: 'HEAD', series: 'Extreme', model: 'Extreme Pro 2024', janCode: '231104', searchKeyword: 'HEAD Extreme Pro', weight: 310, headSize: 100, balance: 315, pattern: '16x19', beam: '23-26-21mm', year: 2024, players: [], concept: 'エクストリームプロ' },
  { id: 'head-extreme-mp-2024', brand: 'HEAD', series: 'Extreme', model: 'Extreme MP 2024', searchKeyword: 'HEAD Extreme MP', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '24-26-22mm', year: 2024, players: [], concept: 'スピン系黄金スペック' },

  // Prestige 2023
  { id: 'head-prestige-pro-2023', brand: 'HEAD', series: 'Prestige', model: 'Prestige Pro 2023', janCode: '236103', searchKeyword: 'HEAD Prestige Pro', weight: 320, headSize: 98, balance: 305, pattern: '16x19', beam: '21mm', year: 2023, players: [], concept: '伝統のコントロール系' },
  { id: 'head-prestige-mp-2023', brand: 'HEAD', series: 'Prestige', model: 'Prestige MP 2023', searchKeyword: 'HEAD Prestige MP', weight: 310, headSize: 98, balance: 315, pattern: '18x20', beam: '21mm', year: 2023, players: [], concept: 'しなり重視の薄ラケ' },
  { id: 'head-prestige-tour-2023', brand: 'HEAD', series: 'Prestige', model: 'Prestige Tour 2023', searchKeyword: 'HEAD Prestige Tour', weight: 305, headSize: 99, balance: 320, pattern: '18x19', beam: '21mm', year: 2023, players: [], concept: '扱いやすいプレステージ' },

  // Boom 2026
  { id: 'head-boom-pro-2026', brand: 'HEAD', series: 'Boom', model: 'Boom Pro 2026', janCode: '232206', searchKeyword: 'HEAD Boom Pro 2026 232206', weight: 310, headSize: 98, balance: 315, pattern: '16x19', beam: '21-23-21mm', year: 2026, players: [], concept: '競技者向けブーム・スピン&パワー' },
  { id: 'head-boom-mp-2026', brand: 'HEAD', series: 'Boom', model: 'Boom MP 2026', janCode: '232216', searchKeyword: 'HEAD Boom MP 2026 232216', weight: 295, headSize: 100, balance: 320, pattern: '16x19', beam: '24mm', year: 2026, players: [], concept: 'スピン＆パワーの黄金スペック' },
  { id: 'head-boom-mp-l-2026', brand: 'HEAD', series: 'Boom', model: 'Boom MP L 2026', janCode: '232226', searchKeyword: 'HEAD Boom MP L 2026 232226', weight: 275, headSize: 100, balance: 325, pattern: '16x19', beam: '24mm', year: 2026, players: [], concept: '軽量ブーム' },

  // ========== DUNLOP ==========
  // SX 2025
  { id: 'dunlop-sx300-tour-2025', brand: 'DUNLOP', series: 'SX', model: 'SX 300 Tour 2025', janCode: '25sx300tour', searchKeyword: 'DUNLOP SX300 Tour', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '23mm', year: 2025, players: [], concept: 'スピン系ツアーモデル' },
  { id: 'dunlop-sx300-2025', brand: 'DUNLOP', series: 'SX', model: 'SX 300 2025', janCode: '25sx300', searchKeyword: 'DUNLOP SX300', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: 'スピン系黄金スペック' },
  { id: 'dunlop-sx300-ls-2025', brand: 'DUNLOP', series: 'SX', model: 'SX 300 LS 2025', janCode: '25sx300ls', searchKeyword: 'DUNLOP SX300 LS', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: '軽量SX' },

  // CX 2024-2025
  { id: 'dunlop-cx200-2025', brand: 'DUNLOP', series: 'CX', model: 'CX 200 2025', janCode: '24cx200', searchKeyword: 'DUNLOP CX200', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '21.5mm', year: 2025, players: [], concept: 'コントロール系薄ラケ' },
  { id: 'dunlop-cx200-18x20-2025', brand: 'DUNLOP', series: 'CX', model: 'CX 200 18x20 2025', janCode: '24cx200tour18x20', searchKeyword: 'DUNLOP CX200 18x20', weight: 305, headSize: 98, balance: 315, pattern: '18x20', beam: '21.5mm', year: 2025, players: [], concept: '密パターンCX' },
  { id: 'dunlop-cx400-tour-2025', brand: 'DUNLOP', series: 'CX', model: 'CX 400 Tour 2025', janCode: '24cx400tour', searchKeyword: 'DUNLOP CX400 Tour', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2025, players: [], concept: '扱いやすいCX' },

  // FX 2026新
  { id: 'dunlop-fx500-tour-2026', brand: 'DUNLOP', series: 'FX', model: 'FX 500 Tour 2026', janCode: '26fx500tour', searchKeyword: 'DUNLOP FX500 Tour', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: '2026新作・パワー系ツアー' },
  { id: 'dunlop-fx500-2026', brand: 'DUNLOP', series: 'FX', model: 'FX 500 2026', janCode: '26fx500', searchKeyword: 'DUNLOP FX500', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2026, players: [], concept: '2026新作・パワー系黄金' },
  { id: 'dunlop-fx500-ls-2026', brand: 'DUNLOP', series: 'FX', model: 'FX 500 LS 2026', janCode: '26fx500ls', searchKeyword: 'DUNLOP FX500 LS', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '23-26-23mm', year: 2026, players: [], concept: '2026軽量FX' },

  // LX 2024-2026
  { id: 'dunlop-lx800-tour-2026', brand: 'DUNLOP', series: 'LX', model: 'LX 800 Tour 2026', janCode: '26lx800tour', searchKeyword: 'DUNLOP LX800 Tour', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: '最大パワー追求' },
  { id: 'dunlop-lx1000-2024', brand: 'DUNLOP', series: 'LX', model: 'LX 1000 2024', janCode: '24lx1000', searchKeyword: 'DUNLOP LX1000', weight: 280, headSize: 110, balance: 335, pattern: '16x19', beam: '27mm', year: 2024, players: [], concept: 'デカラケ最強パワー' },

  // ========== Prince ==========
  // Tour 2026
  { id: 'prince-tour-95-2026', brand: 'Prince', series: 'TOUR', model: 'TOUR 95 2026', janCode: '7tj256', searchKeyword: 'プリンス Tour 95 7tj256', weight: 315, headSize: 95, balance: 310, pattern: '16x18', beam: '22mm', year: 2026, players: [], concept: '2026新作・95インチ' },
  { id: 'prince-tour-98-2026', brand: 'Prince', series: 'TOUR', model: 'TOUR 98 2026', janCode: '7tj257', searchKeyword: 'プリンス Tour 98 7tj257', weight: 310, headSize: 98, balance: 315, pattern: '16x18', beam: '22mm', year: 2026, players: [], concept: '2026新作・98インチ' },
  { id: 'prince-tour-100-305-2026', brand: 'Prince', series: 'TOUR', model: 'TOUR 100 305g 2026', janCode: '7tj251', searchKeyword: 'プリンス Tour 100 7tj251', weight: 305, headSize: 100, balance: 315, pattern: '16x18', beam: '22-23-20mm', year: 2026, players: [], concept: 'オールラウンドツアー' },
  { id: 'prince-tour-100-290-2026', brand: 'Prince', series: 'TOUR', model: 'TOUR 100 290g 2026', janCode: '7tj252', searchKeyword: 'プリンス Tour 100 7tj252', weight: 290, headSize: 100, balance: 325, pattern: '16x18', beam: '22-23-20mm', year: 2026, players: [], concept: '軽量ツアー' },

  // Phantom Graphite 2026
  { id: 'prince-phantom-graphite-97-315-2026', brand: 'Prince', series: 'PHANTOM GRAPHITE', model: 'PHANTOM GRAPHITE 97 315g 2026', janCode: '7tj247', searchKeyword: 'プリンス Phantom Graphite 97 7tj247', weight: 315, headSize: 97, balance: 310, pattern: '16x19', beam: '20mm', year: 2026, players: [], concept: '伝説の97インチ復活' },
  { id: 'prince-phantom-graphite-100-2026', brand: 'Prince', series: 'PHANTOM GRAPHITE', model: 'PHANTOM GRAPHITE 100 2026', janCode: '7tj226', searchKeyword: 'プリンス Phantom Graphite 100 7tj226', weight: 305, headSize: 100, balance: 315, pattern: '16x18', beam: '20mm', year: 2026, players: [], concept: '100インチファントムグラファイト' },

  // Beast 2024-2025
  { id: 'prince-beast-100-2024', brand: 'Prince', series: 'BEAST', model: 'BEAST 100 2024', janCode: '7tj201', searchKeyword: 'プリンス Beast 100 7tj201', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '25-26-23mm', year: 2024, players: [], concept: '攻撃型黄金スペック' },
  { id: 'prince-beast-o3-100-2024', brand: 'Prince', series: 'BEAST', model: 'BEAST O3 100 2024', janCode: '7tj205', searchKeyword: 'プリンス Beast O3 100 7tj205', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '25-26-23mm', year: 2024, players: [], concept: 'O3ポート搭載パワー系' },
  { id: 'prince-beast-98-2024', brand: 'Prince', series: 'BEAST', model: 'BEAST 98 2024', janCode: '7tj227', searchKeyword: 'プリンス Beast 98 7tj227', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '23-25-22mm', year: 2024, players: [], concept: '98インチビースト' },

  // Phantom 2025
  { id: 'prince-phantom-100-2025', brand: 'Prince', series: 'PHANTOM', model: 'PHANTOM 100 2025', janCode: '7tj232', searchKeyword: 'プリンス Phantom 100 7tj232', weight: 305, headSize: 100, balance: 315, pattern: '16x18', beam: '22mm', year: 2025, players: [], concept: '100インチファントム' },
  { id: 'prince-phantom-o3-100-2025', brand: 'Prince', series: 'PHANTOM', model: 'PHANTOM O3 100 2025', janCode: '7tj231', searchKeyword: 'プリンス Phantom O3 100 7tj231', weight: 305, headSize: 100, balance: 315, pattern: '16x18', beam: '22mm', year: 2025, players: [], concept: 'O3ファントム' },

  // EMBLEM 2026
  { id: 'prince-emblem-110-2026', brand: 'Prince', series: 'EMBLEM', model: 'EMBLEM 110 2026', janCode: '7tj233', searchKeyword: 'プリンス Emblem 110 7tj233', weight: 250, headSize: 110, balance: 335, pattern: '16x19', beam: '28mm', year: 2026, players: [], concept: '最強パワーシリーズ' },
  { id: 'prince-emblem-120-2026', brand: 'Prince', series: 'EMBLEM', model: 'EMBLEM 120 2026', janCode: '7tj234', searchKeyword: 'プリンス Emblem 120 7tj234', weight: 230, headSize: 120, balance: 340, pattern: '16x19', beam: '30mm', year: 2026, players: [], concept: '究極のデカラケパワー' },

  // ========== Tecnifibre ==========
  { id: 'tecnifibre-tfight-315-s-2025', brand: 'Tecnifibre', series: 'T-FIGHT', model: 'T-FIGHT 315 S 2025', janCode: 't-fight-315s', searchKeyword: 'テクニファイバー T-FIGHT 315S', weight: 315, headSize: 98, balance: 305, pattern: '18x19', beam: '22mm', year: 2025, players: [], concept: '新設計T-FIGHT、しなり強化' },
  { id: 'tecnifibre-tfight-305-s-2025', brand: 'Tecnifibre', series: 'T-FIGHT', model: 'T-FIGHT 305 S 2025', janCode: 't-fight-305s', searchKeyword: 'テクニファイバー T-FIGHT 305S', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2025, players: [], concept: 'バランス型T-FIGHT' },
  { id: 'tecnifibre-tfight-300-s-2025', brand: 'Tecnifibre', series: 'T-FIGHT', model: 'T-FIGHT 300 S 2025', janCode: 't-fight-300s', searchKeyword: 'テクニファイバー T-FIGHT 300S', weight: 300, headSize: 98, balance: 320, pattern: '16x19', beam: '22mm', year: 2025, players: [], concept: 'バランスの良いT-FIGHT' },
  { id: 'tecnifibre-tfight-300-2025', brand: 'Tecnifibre', series: 'T-FIGHT', model: 'T-FIGHT 300 2025', janCode: 't-fight-300', searchKeyword: 'テクニファイバー T-FIGHT 300', weight: 300, headSize: 98, balance: 320, pattern: '16x19', beam: '22mm', year: 2025, players: [], concept: 'スタンダードT-FIGHT' },
  { id: 'tecnifibre-tfight-285-2025', brand: 'Tecnifibre', series: 'T-FIGHT', model: 'T-FIGHT 285 2025', searchKeyword: 'テクニファイバー T-FIGHT 285', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: '軽量T-FIGHT' },
  { id: 'tecnifibre-tfight-270-2025', brand: 'Tecnifibre', series: 'T-FIGHT', model: 'T-FIGHT 270 2025', searchKeyword: 'テクニファイバー T-FIGHT 270', weight: 270, headSize: 100, balance: 330, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: '入門者向けT-FIGHT' },

  // TF40 v3
  { id: 'tecnifibre-tf40-305-v3', brand: 'Tecnifibre', series: 'TF40', model: 'TF40 305 16M v3', searchKeyword: 'テクニファイバー TF40 305 16M', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '21.5mm', year: 2024, players: ['メドベージェフ'], concept: 'ツアープレーヤー向けコントロール' },
  { id: 'tecnifibre-tf40-315-v3', brand: 'Tecnifibre', series: 'TF40', model: 'TF40 315 18M v3', searchKeyword: 'テクニファイバー TF40 315 18M', weight: 315, headSize: 98, balance: 315, pattern: '18x20', beam: '21.5mm', year: 2024, players: [], concept: 'ヘビーモデルTF40' },
  { id: 'tecnifibre-tf40-290-v3', brand: 'Tecnifibre', series: 'TF40', model: 'TF40 290 16M v3', searchKeyword: 'テクニファイバー TF40 290 16M', weight: 290, headSize: 100, balance: 320, pattern: '16x19', beam: '21.5mm', year: 2024, players: [], concept: '軽量TF40' },

  // TF-X1 v2
  { id: 'tecnifibre-tfx1-305-v2', brand: 'Tecnifibre', series: 'TF-X1', model: 'TF-X1 v2 305', searchKeyword: 'テクニファイバー TF-X1 305', weight: 305, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2024, players: [], concept: 'オールラウンドTF-X1' },
  { id: 'tecnifibre-tfx1-300-v2', brand: 'Tecnifibre', series: 'TF-X1', model: 'TF-X1 v2 300', searchKeyword: 'テクニファイバー TF-X1 300', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2024, players: [], concept: 'スタンダードTF-X1' },

  // TEMPO v2
  { id: 'tecnifibre-tempo-298-iga', brand: 'Tecnifibre', series: 'TEMPO', model: 'TEMPO 298 IGA', searchKeyword: 'テクニファイバー TEMPO 298 Iga', weight: 298, headSize: 100, balance: 320, pattern: '16x19', beam: '24mm', year: 2024, players: ['シフィオンテク'], concept: 'シフィオンテク使用モデル' },
  { id: 'tecnifibre-tempo-285-v2', brand: 'Tecnifibre', series: 'TEMPO', model: 'TEMPO 285 v2', searchKeyword: 'テクニファイバー TEMPO 285', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '24mm', year: 2024, players: [], concept: '軽量テンポ' },

  // FIRE 2026新
  { id: 'tecnifibre-fire-300-2026', brand: 'Tecnifibre', series: 'FIRE', model: 'FIRE 300 2026', searchKeyword: 'テクニファイバー FIRE 300', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '24mm', year: 2026, players: [], concept: '2026新作・高反発' },
  { id: 'tecnifibre-fire-285-2026', brand: 'Tecnifibre', series: 'FIRE', model: 'FIRE 285 2026', searchKeyword: 'テクニファイバー FIRE 285', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '24mm', year: 2026, players: [], concept: '軽量FIRE' },

  // ========== Kneissl ==========
  { id: 'kneissl-prime-star-black', brand: 'Kneissl', series: 'PRIME STAR', model: 'PRIME STAR Black', searchKeyword: 'クナイスル PRIME STAR Black KTPSB', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '24-26-22mm', year: 2024, players: [], concept: '高品質・シンプルデザイン代表' },
  { id: 'kneissl-prime-star-white', brand: 'Kneissl', series: 'PRIME STAR', model: 'PRIME STAR White', searchKeyword: 'クナイスル PRIME STAR White KTPSW', weight: 285, headSize: 100, balance: 320, pattern: '16x19', beam: '24-26-22mm', year: 2024, players: [], concept: '軽量モデル' },

  // ========== DIADEM ==========
  // AXIS
  { id: 'diadem-axis-100', brand: 'DIADEM', series: 'AXIS', model: 'AXIS 100', searchKeyword: 'DIADEM AXIS 100 TAA017', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2025, players: [], concept: 'スビトリナ使用モデル' },
  { id: 'diadem-axis-98', brand: 'DIADEM', series: 'AXIS', model: 'AXIS 98', searchKeyword: 'DIADEM AXIS 98 TAA019', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2025, players: [], concept: '98インチAXIS' },
  { id: 'diadem-axis-100-team', brand: 'DIADEM', series: 'AXIS', model: 'AXIS 100 TEAM', searchKeyword: 'DIADEM AXIS 100 Team TAA018', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '23mm', year: 2025, players: [], concept: '軽量AXIS' },

  // ELEVATE V3
  { id: 'diadem-elevate-98-v3', brand: 'DIADEM', series: 'ELEVATE', model: 'ELEVATE 98 V3', searchKeyword: 'DIADEM ELEVATE 98 V3 TAA007', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2023, players: [], concept: 'スピンとコントロール両立' },
  { id: 'diadem-elevate-tour-98-v3', brand: 'DIADEM', series: 'ELEVATE', model: 'ELEVATE TOUR 98 V3', searchKeyword: 'DIADEM ELEVATE Tour 98 V3 TAA009', weight: 315, headSize: 98, balance: 310, pattern: '16x19', beam: '22mm', year: 2023, players: [], concept: 'ツアーモデル' },
  { id: 'diadem-elevate-lite-98-v3', brand: 'DIADEM', series: 'ELEVATE', model: 'ELEVATE LITE 98 V3', searchKeyword: 'DIADEM ELEVATE Lite 98 V3 TAA008', weight: 290, headSize: 98, balance: 320, pattern: '16x19', beam: '22mm', year: 2023, players: [], concept: '軽量ELEVATE' },

  // NOVA V3
  { id: 'diadem-nova-v3-100', brand: 'DIADEM', series: 'NOVA', model: 'NOVA V3 100', searchKeyword: 'DIADEM NOVA V3 100 TAA010', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-22mm', year: 2024, players: [], concept: 'パワーとオールラウンド性能' },
  { id: 'diadem-nova-v3-team', brand: 'DIADEM', series: 'NOVA', model: 'NOVA V3 TEAM', searchKeyword: 'DIADEM NOVA V3 Team TAA011', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '23-26-22mm', year: 2024, players: [], concept: '軽量NOVA' },
  { id: 'diadem-nova-v3-plus', brand: 'DIADEM', series: 'NOVA', model: 'NOVA V3 PLUS', searchKeyword: 'DIADEM NOVA V3 Plus TAA012', weight: 295, headSize: 100, balance: 325, pattern: '16x19', beam: '23-26-22mm', year: 2024, players: [], concept: 'ロングボディNOVA' },

  // DREAMER
  { id: 'diadem-dreamer-105', brand: 'DIADEM', series: 'DREAMER', model: 'DREAMER 105', searchKeyword: 'DIADEM DREAMER 105 TAA015', weight: 270, headSize: 105, balance: 325, pattern: '16x19', beam: '25-27-23mm', year: 2024, players: [], concept: '大きめフェイスで快適性重視' },
  { id: 'diadem-dreamer-110', brand: 'DIADEM', series: 'DREAMER', model: 'DREAMER 110', searchKeyword: 'DIADEM DREAMER 110 TAA016', weight: 255, headSize: 110, balance: 330, pattern: '16x19', beam: '25-27-23mm', year: 2024, players: [], concept: 'デカラケDREAMER' },
];

// ヘルパー関数
function getRacketsByBrand(brand) {
  return RACKET_DATABASE.filter(r => r.brand === brand);
}

function getRacketById(id) {
  return RACKET_DATABASE.find(r => r.id === id);
}

function getRacketsFilteredByYear(minYear) {
  return RACKET_DATABASE.filter(r => r.year >= minYear);
}
