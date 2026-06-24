// ラブテニ ラケットデータベース
// 2026/05/27更新版 - 各ブランドの最新ラインナップを反映
// 情報源: ウインザーラケット、各ブランド公式サイト、テニスクラシック等

const BRANDS = ['Wilson', 'Babolat', 'YONEX', 'HEAD', 'DUNLOP', 'Prince', 'Tecnifibre', 'Kneissl', 'DIADEM', 'Snauwaert', 'Lacoste'];

const RACKET_DATABASE = [
  // ============================================================
  // ========== Wilson ==========
  // ============================================================

  // RF 01 (2024) - フェデラー監修
  { id: 'wilson-rf01-pro', brand: 'Wilson', series: 'RF', model: 'RF 01 Pro', janCode: 'WR151311U2', searchKeyword: 'Wilson RF01 Pro WR151311', weight: 320, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2024, players: ['フェデラー監修'], concept: 'フェデラー監修・SABRフレーム採用のプロモデル' },
  { id: 'wilson-rf01', brand: 'Wilson', series: 'RF', model: 'RF 01', janCode: 'WR151411U2', searchKeyword: 'Wilson RF01 WR151411', weight: 300, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2024, players: ['フェデラー監修'], concept: 'フェデラー監修・スタンダード300g' },
  { id: 'wilson-rf01-future', brand: 'Wilson', series: 'RF', model: 'RF 01 Future', janCode: 'WR166811U1', searchKeyword: 'Wilson RF01 Future WR166811', weight: 280, headSize: 98, balance: 320, pattern: '16x19', beam: '22mm', year: 2024, players: ['フェデラー監修'], concept: 'フェデラー監修・軽量モデル' },
  { id: 'wilson-rf01-future-lite', brand: 'Wilson', series: 'RF', model: 'RF 01 Future Lite', janCode: 'WR175711U2', searchKeyword: 'Wilson RF01 Future Lite WR175711', weight: 265, headSize: 98, balance: 320, pattern: '16x19', beam: '22mm', year: 2024, players: ['フェデラー監修'], concept: 'フェデラー監修・最軽量モデル' },

  // Blade V10 (2026) - 2026/4/15発売
  { id: 'wilson-blade-98-16x19-v10', brand: 'Wilson', series: 'BLADE', model: 'Blade 98 16x19 V10', janCode: 'WR207811U2', searchKeyword: 'Wilson Blade 98 16x19 V10 WR207811', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '21.5-20.5mm', year: 2026, players: [], concept: 'しなりと面の安定性を高めたコントロール系の主軸モデル' },
  { id: 'wilson-blade-98-18x20-v10', brand: 'Wilson', series: 'BLADE', model: 'Blade 98 18x20 V10', janCode: 'WR207911U2', searchKeyword: 'Wilson Blade 98 18x20 V10 WR207911', weight: 305, headSize: 98, balance: 320, pattern: '18x20', beam: '21.5-20.5mm', year: 2026, players: [], concept: '密パターンで高精度なコントロールモデル' },
  { id: 'wilson-blade-98s-v10', brand: 'Wilson', series: 'BLADE', model: 'Blade 98S V10', janCode: 'WR208011U2', searchKeyword: 'Wilson Blade 98S V10 WR208011', weight: 295, headSize: 98, balance: 325, pattern: '18x16', beam: '21.5-20.5mm', year: 2026, players: [], concept: 'スピン特化の18x16パターン' },
  { id: 'wilson-blade-98-pro-16x19-v10', brand: 'Wilson', series: 'BLADE', model: 'Blade 98 Pro 16x19 V10', janCode: 'WR207611U2', searchKeyword: 'Wilson Blade 98 Pro 16x19 V10 WR207611', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '21.5mm', year: 2026, players: [], concept: 'フラットビームのプロ仕様・しっかりした打感' },
  { id: 'wilson-blade-98-pro-18x20-v10', brand: 'Wilson', series: 'BLADE', model: 'Blade 98 Pro 18x20 V10', janCode: 'WR207711U2', searchKeyword: 'Wilson Blade 98 Pro 18x20 V10 WR207711', weight: 305, headSize: 98, balance: 320, pattern: '18x20', beam: '21.5mm', year: 2026, players: [], concept: 'プロ仕様・密パターンで高いコントロール性' },
  { id: 'wilson-blade-101-team-v10', brand: 'Wilson', series: 'BLADE', model: 'Blade 101 Team V10', janCode: 'WR208810U1', searchKeyword: 'Wilson Blade 101 Team V10 WR208810', weight: 275, headSize: 101, balance: 330, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: '軽量275gの扱いやすいチームモデル' },
  { id: 'wilson-blade-104-v10', brand: 'Wilson', series: 'BLADE', model: 'Blade 104 V10', janCode: 'WR208511U1', searchKeyword: 'Wilson Blade 104 V10 WR208511', weight: 290, headSize: 104, balance: 320, pattern: '16x19', beam: '22mm', year: 2026, players: [], concept: '104インチ・27.5インチで楽に飛ばせるモデル' },

  // Blade V9 (2024)
  { id: 'wilson-blade-98-16x19-v9', brand: 'Wilson', series: 'BLADE', model: 'Blade 98 16x19 V9', janCode: 'WR149811U4', searchKeyword: 'Wilson Blade 98 16x19 V9 WR149811', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '21mm', year: 2024, players: ['デミノー'], concept: 'しなりとコントロールの代名詞' },
  { id: 'wilson-blade-98-18x20-v9', brand: 'Wilson', series: 'BLADE', model: 'Blade 98 18x20 V9', janCode: 'WR149911U2', searchKeyword: 'Wilson Blade 98 18x20 V9 WR149911', weight: 305, headSize: 98, balance: 320, pattern: '18x20', beam: '21mm', year: 2024, players: [], concept: 'コントロール重視の密パターン' },
  { id: 'wilson-blade-100-v9', brand: 'Wilson', series: 'BLADE', model: 'Blade 100 V9', janCode: 'WR151511U1', searchKeyword: 'Wilson Blade 100 V9 WR151511', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '22mm', year: 2024, players: [], concept: '扱いやすい100インチブレード' },
  { id: 'wilson-blade-100l-v9', brand: 'Wilson', series: 'BLADE', model: 'Blade 100L V9', searchKeyword: 'Wilson Blade 100L V9', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '22mm', year: 2024, players: [], concept: '軽量100インチブレード' },

  // Clash V3 (2025)
  { id: 'wilson-clash-100-pro-v3', brand: 'Wilson', series: 'CLASH', model: 'Clash 100 Pro V3.0', janCode: 'WR172711U2', searchKeyword: 'Wilson Clash 100 Pro V3 WR172711', weight: 310, headSize: 100, balance: 310, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: 'シリーズ史上最もしなるプロモデル' },
  { id: 'wilson-clash-100-v3', brand: 'Wilson', series: 'CLASH', model: 'Clash 100 V3.0', janCode: 'WR172811U1', searchKeyword: 'Wilson Clash 100 V3 WR172811', weight: 295, headSize: 100, balance: 310, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: '柔らかい打感のオールラウンダー' },
  { id: 'wilson-clash-100l-v3', brand: 'Wilson', series: 'CLASH', model: 'Clash 100L V3.0', janCode: 'WR172911U1', searchKeyword: 'Wilson Clash 100L V3 WR172911', weight: 280, headSize: 100, balance: 315, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: '軽量クラッシュ' },
  { id: 'wilson-clash-100ul-v3', brand: 'Wilson', series: 'CLASH', model: 'Clash 100UL V3.0', janCode: 'WR173011U1', searchKeyword: 'Wilson Clash 100UL V3 WR173011', weight: 265, headSize: 100, balance: 325, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: 'ウルトラライトクラッシュ' },
  { id: 'wilson-clash-108-v3', brand: 'Wilson', series: 'CLASH', model: 'Clash 108 V3.0', janCode: 'WR173111U1', searchKeyword: 'Wilson Clash 108 V3 WR173111', weight: 280, headSize: 108, balance: 335, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: 'デカラケクラッシュ' },

  // Ultra V5 (2025)
  { id: 'wilson-ultra-100-v5', brand: 'Wilson', series: 'ULTRA', model: 'Ultra 100 V5.0', janCode: 'WR178811U1', searchKeyword: 'Wilson Ultra 100 V5 WR178811', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: ['錦織圭'], concept: 'パワーとスピンの黄金スペック' },
  { id: 'wilson-ultra-100l-v5', brand: 'Wilson', series: 'ULTRA', model: 'Ultra 100L V5.0', janCode: 'WR178911U1', searchKeyword: 'Wilson Ultra 100L V5 WR178911', weight: 280, headSize: 100, balance: 325, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: '軽量ウルトラ' },
  { id: 'wilson-ultra-tour-98-v5', brand: 'Wilson', series: 'ULTRA', model: 'Ultra Tour 98 V5.0', janCode: 'WR189711U2', searchKeyword: 'Wilson Ultra Tour 98 V5 WR189711', weight: 305, headSize: 98, balance: 325, pattern: '16x19', beam: '21.5mm', year: 2025, players: [], concept: 'コントロール系ウルトラツアー' },
  { id: 'wilson-ultra-tour-98j-v5', brand: 'Wilson', series: 'ULTRA', model: 'Ultra Tour 98J V5.0', janCode: 'WR189811U2', searchKeyword: 'Wilson Ultra Tour 98J V5 WR189811', weight: 290, headSize: 98, balance: 330, pattern: '16x20', beam: '21.5mm', year: 2025, players: [], concept: '日本限定ウルトラツアー' },
  { id: 'wilson-ultra-99-pro-v5', brand: 'Wilson', series: 'ULTRA', model: 'Ultra 99 Pro V5.0', janCode: 'WR178711U2', searchKeyword: 'Wilson Ultra 99 Pro V5 WR178711', weight: 305, headSize: 99, balance: 325, pattern: '16x20', beam: '22mm', year: 2025, players: [], concept: '99インチプロモデル' },

  // Pro Staff V14 (2023)
  { id: 'wilson-prostaff-97-v14', brand: 'Wilson', series: 'PRO STAFF', model: 'Pro Staff 97 V14', janCode: 'WR125711U2', searchKeyword: 'Wilson Pro Staff 97 V14 WR125711', weight: 315, headSize: 97, balance: 310, pattern: '16x19', beam: '21.5mm', year: 2023, players: [], concept: '伝統のプロスタッフ・コントロール最重視' },
  { id: 'wilson-prostaff-97l-v14', brand: 'Wilson', series: 'PRO STAFF', model: 'Pro Staff 97L V14', janCode: 'WR125911U1', searchKeyword: 'Wilson Pro Staff 97L V14 WR125911', weight: 290, headSize: 97, balance: 325, pattern: '16x19', beam: '21.5mm', year: 2023, players: [], concept: '軽量プロスタッフ' },

  // Shift V2 (2024)
  { id: 'wilson-shift-99-v2', brand: 'Wilson', series: 'SHIFT', model: 'Shift 99 V2', janCode: 'WR173311U1', searchKeyword: 'Wilson Shift 99 V2 WR173311', weight: 300, headSize: 99, balance: 320, pattern: '16x20', beam: '23mm', year: 2024, players: [], concept: 'バランスの取れたシフト' },
  { id: 'wilson-shift-99-pro-v2', brand: 'Wilson', series: 'SHIFT', model: 'Shift 99 Pro V2', janCode: 'WR173411U1', searchKeyword: 'Wilson Shift 99 Pro V2 WR173411', weight: 315, headSize: 99, balance: 315, pattern: '16x20', beam: '23mm', year: 2024, players: [], concept: 'スピン&コントロール重視' },

  // ============================================================
  // ========== Babolat ==========
  // ============================================================

  // Pure Aero 2026 (Gen9) - 2026/2発売
  { id: 'babolat-pureaero-2026', brand: 'Babolat', series: 'Pure Aero', model: 'Pure Aero 2026', janCode: '101569', searchKeyword: 'Babolat Pure Aero 2026 101569', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2026, players: ['アルカラス', 'フィス'], concept: 'スピン系の代名詞・Gen9で空力進化' },
  { id: 'babolat-pureaero-98-2026', brand: 'Babolat', series: 'Pure Aero', model: 'Pure Aero 98 2026', janCode: '101567', searchKeyword: 'Babolat Pure Aero 98 2026 101567', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '21-23-21mm', year: 2026, players: ['アルカラス'], concept: 'アルカラス使用・98インチ精密スピン' },
  { id: 'babolat-pureaero-plus-2026', brand: 'Babolat', series: 'Pure Aero', model: 'Pure Aero + 2026', janCode: '101570', searchKeyword: 'Babolat Pure Aero Plus 2026 101570', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2026, players: [], concept: '27.5インチロングボディ・スピン強化' },
  { id: 'babolat-pureaero-team-2026', brand: 'Babolat', series: 'Pure Aero', model: 'Pure Aero Team 2026', janCode: '101571', searchKeyword: 'Babolat Pure Aero Team 2026 101571', weight: 285, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2026, players: [], concept: '軽量ピュアアエロ・操作性重視' },
  { id: 'babolat-pureaero-lite-2026', brand: 'Babolat', series: 'Pure Aero', model: 'Pure Aero Lite 2026', janCode: '101572', searchKeyword: 'Babolat Pure Aero Lite 2026 101572', weight: 270, headSize: 100, balance: 330, pattern: '16x19', beam: '23-26-23mm', year: 2026, players: [], concept: 'ライトピュアアエロ・初中級者向け' },
  { id: 'babolat-pureaero-superlite-2026', brand: 'Babolat', series: 'Pure Aero', model: 'Pure Aero Super Lite 2026', janCode: '101573', searchKeyword: 'Babolat Pure Aero Super Lite 2026 101573', weight: 255, headSize: 100, balance: 330, pattern: '16x19', beam: '23-26-23mm', year: 2026, players: [], concept: '超軽量ピュアアエロ' },

  // Pure Drive 2025
  { id: 'babolat-puredrive-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive 2025', janCode: '101552', searchKeyword: 'Babolat Pure Drive 2025 101552', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: 'パワーとスピンの黄金スペック' },
  { id: 'babolat-puredrive-98-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive 98 2025', janCode: '101551', searchKeyword: 'Babolat Pure Drive 98 2025 101551', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '21mm', year: 2025, players: [], concept: 'コントロール重視の98インチ' },
  { id: 'babolat-puredrive-plus-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive + 2025', janCode: '101553', searchKeyword: 'Babolat Pure Drive Plus 2025 101553', weight: 300, headSize: 100, balance: 325, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: '27.5インチロングボディ' },
  { id: 'babolat-puredrive-team-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive Team 2025', janCode: '101554', searchKeyword: 'Babolat Pure Drive Team 2025 101554', weight: 285, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: '軽量チームモデル' },
  { id: 'babolat-puredrive-lite-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive Lite 2025', janCode: '101555', searchKeyword: 'Babolat Pure Drive Lite 2025 101555', weight: 270, headSize: 100, balance: 330, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: 'ライトモデル' },
  { id: 'babolat-puredrive-superlite-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive Super Lite 2025', janCode: '101556', searchKeyword: 'Babolat Pure Drive Super Lite 2025 101556', weight: 255, headSize: 100, balance: 335, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: '超軽量モデル' },
  { id: 'babolat-puredrive-107-2025', brand: 'Babolat', series: 'Pure Drive', model: 'Pure Drive 107 2025', janCode: '101557', searchKeyword: 'Babolat Pure Drive 107 2025 101557', weight: 280, headSize: 107, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: 'デカラケパワー系' },

  // Pure Strike 2025
  { id: 'babolat-purestrike-100-2025', brand: 'Babolat', series: 'Pure Strike', model: 'Pure Strike 100 2025', janCode: '101579', searchKeyword: 'Babolat Pure Strike 100 2025 101579', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '21-23-21mm', year: 2025, players: [], concept: 'コントロール系オールラウンダー' },
  { id: 'babolat-purestrike-100-16x20-2025', brand: 'Babolat', series: 'Pure Strike', model: 'Pure Strike 100 16x20 2025', janCode: '101576', searchKeyword: 'Babolat Pure Strike 100 16x20 2025 101576', weight: 305, headSize: 100, balance: 310, pattern: '16x20', beam: '21-23-21mm', year: 2025, players: [], concept: '密パターン版' },
  { id: 'babolat-purestrike-100-team-2025', brand: 'Babolat', series: 'Pure Strike', model: 'Pure Strike 100 Team 2025', janCode: '101580', searchKeyword: 'Babolat Pure Strike 100 Team 2025 101580', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '21-23-21mm', year: 2025, players: [], concept: '軽量ピュアストライク' },
  { id: 'babolat-purestrike-98-16x19-2025', brand: 'Babolat', series: 'Pure Strike', model: 'Pure Strike 98 16x19 2025', janCode: '101577', searchKeyword: 'Babolat Pure Strike 98 16x19 2025 101577', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '21-23-21mm', year: 2025, players: [], concept: '98インチコントロール' },
  { id: 'babolat-purestrike-98-18x20-2025', brand: 'Babolat', series: 'Pure Strike', model: 'Pure Strike 98 18x20 2025', janCode: '101578', searchKeyword: 'Babolat Pure Strike 98 18x20 2025 101578', weight: 305, headSize: 98, balance: 320, pattern: '18x20', beam: '21-23-21mm', year: 2025, players: [], concept: '密パターン98インチ' },
  { id: 'babolat-purestrike-97-2025', brand: 'Babolat', series: 'Pure Strike', model: 'Pure Strike 97 2025', janCode: '101574', searchKeyword: 'Babolat Pure Strike 97 2025 101574', weight: 310, headSize: 97, balance: 315, pattern: '16x19', beam: '21-21-21mm', year: 2025, players: [], concept: '競技志向の97インチ' },
  { id: 'babolat-purestrike-lite-2025', brand: 'Babolat', series: 'Pure Strike', model: 'Pure Strike Lite 2025', janCode: '101581', searchKeyword: 'Babolat Pure Strike Lite 2025 101581', weight: 265, headSize: 100, balance: 330, pattern: '16x19', beam: '21-23-21mm', year: 2025, players: [], concept: 'ライトピュアストライク' },

  // Evo Aero 2026
  { id: 'babolat-evoaero-2026', brand: 'Babolat', series: 'Evo Aero', model: 'Evo Aero 2026', janCode: '101562', searchKeyword: 'Babolat Evo Aero 2026 101562', weight: 275, headSize: 102, balance: 320, pattern: '16x19', beam: '26mm', year: 2026, players: [], concept: '快適性重視・スピン入門' },
  { id: 'babolat-evoaero-pink-2026', brand: 'Babolat', series: 'Evo Aero', model: 'Evo Aero Pink 2026', janCode: '101563', searchKeyword: 'Babolat Evo Aero Pink 2026 101563', weight: 275, headSize: 102, balance: 320, pattern: '16x19', beam: '26mm', year: 2026, players: [], concept: '女性向けピンクモデル' },
  { id: 'babolat-evoaero-lite-2026', brand: 'Babolat', series: 'Evo Aero', model: 'Evo Aero Lite 2026', janCode: '101564', searchKeyword: 'Babolat Evo Aero Lite 2026 101564', weight: 260, headSize: 102, balance: 325, pattern: '16x19', beam: '26mm', year: 2026, players: [], concept: 'ライトモデル' },

  // ============================================================
  // ========== YONEX ==========
  // ============================================================

  // EZONE 2025
  { id: 'yonex-ezone-98-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 98 2025', searchKeyword: 'ヨネックス EZONE 98 2025', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '23.5mm', year: 2025, players: ['大坂なおみ', 'シェルトン'], concept: 'MINOLON素材・大坂なおみ使用' },
  { id: 'yonex-ezone-98l-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 98L 2025', searchKeyword: 'ヨネックス EZONE 98L 2025', weight: 285, headSize: 98, balance: 330, pattern: '16x19', beam: '23.5mm', year: 2025, players: [], concept: '軽量98インチEZONE' },
  { id: 'yonex-ezone-100-tour-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 100 Tour 2025', searchKeyword: 'ヨネックス EZONE 100 Tour 2025', weight: 315, headSize: 100, balance: 315, pattern: '16x19', beam: '23.5-26-22mm', year: 2025, players: [], concept: 'ツアープレーヤー向け黄金スペック' },
  { id: 'yonex-ezone-100-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 100 2025', searchKeyword: 'ヨネックス EZONE 100 2025', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23.5-26-22mm', year: 2025, players: ['大坂なおみ'], concept: '黄金スペック・大坂なおみ使用' },
  { id: 'yonex-ezone-100l-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 100L 2025', searchKeyword: 'ヨネックス EZONE 100L 2025', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '23.5-26-22mm', year: 2025, players: [], concept: '軽量100インチEZONE' },
  { id: 'yonex-ezone-100sl-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 100SL 2025', searchKeyword: 'ヨネックス EZONE 100SL 2025', weight: 270, headSize: 100, balance: 330, pattern: '16x19', beam: '23.5-26-22mm', year: 2025, players: [], concept: 'スーパーライト' },
  { id: 'yonex-ezone-105-2025', brand: 'YONEX', series: 'EZONE', model: 'EZONE 105 2025', searchKeyword: 'ヨネックス EZONE 105 2025', weight: 275, headSize: 105, balance: 325, pattern: '16x19', beam: '25.5-27.5-21.5mm', year: 2025, players: [], concept: 'デカラケEZONE' },

  // VCORE 2026
  { id: 'yonex-vcore-98-2026', brand: 'YONEX', series: 'VCORE', model: 'VCORE 98 2026', searchKeyword: 'ヨネックス VCORE 98 2026', weight: 305, headSize: 98, balance: 315, pattern: '16x20', beam: '21mm', year: 2026, players: ['西岡良仁'], concept: 'スピン特化フラッグシップ' },
  { id: 'yonex-vcore-100-2026', brand: 'YONEX', series: 'VCORE', model: 'VCORE 100 2026', searchKeyword: 'ヨネックス VCORE 100 2026', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: 'スピンの黄金スペック' },
  { id: 'yonex-vcore-100l-2026', brand: 'YONEX', series: 'VCORE', model: 'VCORE 100L 2026', searchKeyword: 'ヨネックス VCORE 100L 2026', weight: 280, headSize: 100, balance: 330, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: '軽量VCORE' },
  { id: 'yonex-vcore-95-2026', brand: 'YONEX', series: 'VCORE', model: 'VCORE 95 2026', searchKeyword: 'ヨネックス VCORE 95 2026', weight: 310, headSize: 95, balance: 310, pattern: '16x20', beam: '20mm', year: 2026, players: [], concept: '95インチ競技モデル' },

  // PERCEPT 2023
  { id: 'yonex-percept-97-2023', brand: 'YONEX', series: 'PERCEPT', model: 'PERCEPT 97 2023', searchKeyword: 'ヨネックス PERCEPT 97', weight: 310, headSize: 97, balance: 310, pattern: '16x19', beam: '21mm', year: 2023, players: [], concept: 'コントロール志向の薄ラケ' },
  { id: 'yonex-percept-100-2023', brand: 'YONEX', series: 'PERCEPT', model: 'PERCEPT 100 2023', searchKeyword: 'ヨネックス PERCEPT 100', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '21mm', year: 2023, players: [], concept: '100インチパーセプト' },

  // ASTREL 2023（中高年向け）
  { id: 'yonex-astrel-100-2023', brand: 'YONEX', series: 'ASTREL', model: 'ASTREL 100 2023', searchKeyword: 'ヨネックス ASTREL 100', weight: 280, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2023, players: [], concept: '中高年向け軽量モデル' },
  { id: 'yonex-astrel-105-2023', brand: 'YONEX', series: 'ASTREL', model: 'ASTREL 105 2023', searchKeyword: 'ヨネックス ASTREL 105', weight: 260, headSize: 105, balance: 325, pattern: '16x19', beam: '23mm', year: 2023, players: [], concept: 'デカラケASTREL' },

  // ============================================================
  // ========== HEAD ==========
  // ============================================================

  // Speed 2026（2026/1/22発売・Hy-Bor搭載、シナー使用）
  { id: 'head-speed-pro-2026', brand: 'HEAD', series: 'Speed', model: 'Speed Pro 2026', janCode: '232006', searchKeyword: 'HEAD Speed Pro 2026 232006', weight: 310, headSize: 100, balance: 310, pattern: '18x20', beam: '23mm', year: 2026, players: ['ジョコビッチ'], concept: '18×20の密パターン・コントロール最重視' },
  { id: 'head-speed-tour-2026', brand: 'HEAD', series: 'Speed', model: 'Speed Tour 2026', janCode: '232016', searchKeyword: 'HEAD Speed Tour 2026 232016', weight: 305, headSize: 97, balance: 315, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: 'Speed初の97インチ・フラット主体（2026新登場）' },
  { id: 'head-speed-mp-2026', brand: 'HEAD', series: 'Speed', model: 'Speed MP 2026', janCode: '232026', searchKeyword: 'HEAD Speed MP 2026 232026', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2026, players: ['シナー'], concept: 'シナー使用・Speedシリーズ黄金スペック' },
  { id: 'head-speed-mp-l-2026', brand: 'HEAD', series: 'Speed', model: 'Speed MP L 2026', janCode: '232036', searchKeyword: 'HEAD Speed MP L 2026 232036', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: '振り抜きの良い285gモデル' },
  { id: 'head-speed-mp-ul-2026', brand: 'HEAD', series: 'Speed', model: 'Speed MP UL 2026', janCode: '232046', searchKeyword: 'HEAD Speed MP UL 2026 232046', weight: 265, headSize: 100, balance: 330, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: 'シリーズ最軽量265g（2026新登場）' },
  { id: 'head-speed-team-2026', brand: 'HEAD', series: 'Speed', model: 'Speed Team 2026', janCode: '232056', searchKeyword: 'HEAD Speed Team 2026 232056', weight: 270, headSize: 105, balance: 325, pattern: '16x19', beam: '24mm', year: 2026, players: [], concept: '105インチ・27.2インチロング' },

  // Boom 2026
  { id: 'head-boom-pro-2026', brand: 'HEAD', series: 'Boom', model: 'Boom Pro 2026', janCode: '232206', searchKeyword: 'HEAD Boom Pro 2026 232206', weight: 310, headSize: 98, balance: 310, pattern: '16x19', beam: '21-23-21mm', year: 2026, players: [], concept: '競技者向けブーム・スピン&パワー' },
  { id: 'head-boom-mp-2026', brand: 'HEAD', series: 'Boom', model: 'Boom MP 2026', janCode: '232216', searchKeyword: 'HEAD Boom MP 2026 232216', weight: 295, headSize: 100, balance: 315, pattern: '16x19', beam: '24mm', year: 2026, players: [], concept: 'スピン&パワーの黄金スペック' },
  { id: 'head-boom-mp-l-2026', brand: 'HEAD', series: 'Boom', model: 'Boom MP L 2026', janCode: '232226', searchKeyword: 'HEAD Boom MP L 2026 232226', weight: 275, headSize: 100, balance: 325, pattern: '16x19', beam: '24mm', year: 2026, players: [], concept: '軽量ブーム' },
  { id: 'head-boom-mp-ul-2026', brand: 'HEAD', series: 'Boom', model: 'Boom MP UL 2026', janCode: '232236', searchKeyword: 'HEAD Boom MP UL 2026 232236', weight: 255, headSize: 100, balance: 330, pattern: '16x19', beam: '24mm', year: 2026, players: [], concept: '超軽量ブーム' },
  { id: 'head-boom-team-2026', brand: 'HEAD', series: 'Boom', model: 'Boom Team 2026', janCode: '232246', searchKeyword: 'HEAD Boom Team 2026 232246', weight: 260, headSize: 107, balance: 340, pattern: '16x19', beam: '25mm', year: 2026, players: [], concept: '105インチデカラケブーム' },

  // Radical 2025
  { id: 'head-radical-pro-2025', brand: 'HEAD', series: 'Radical', model: 'Radical Pro 2025', janCode: '231005', searchKeyword: 'HEAD Radical Pro 2025 231005', weight: 315, headSize: 98, balance: 315, pattern: '16x19', beam: '21.5mm', year: 2025, players: [], concept: 'ラディカル新世代プロ' },
  { id: 'head-radical-mp-2025', brand: 'HEAD', series: 'Radical', model: 'Radical MP 2025', janCode: '231015', searchKeyword: 'HEAD Radical MP 2025 231015', weight: 300, headSize: 98, balance: 320, pattern: '16x19', beam: '21.5mm', year: 2025, players: [], concept: 'ラディカル黄金スペック' },
  { id: 'head-radical-team-2025', brand: 'HEAD', series: 'Radical', model: 'Radical Team 2025', janCode: '231025', searchKeyword: 'HEAD Radical Team 2025 231025', weight: 280, headSize: 102, balance: 320, pattern: '16x19', beam: '21.5mm', year: 2025, players: [], concept: '軽量ラディカル' },
  { id: 'head-radical-team-l-2025', brand: 'HEAD', series: 'Radical', model: 'Radical Team L 2025', janCode: '231035', searchKeyword: 'HEAD Radical Team L 2025 231035', weight: 260, headSize: 102, balance: 340, pattern: '16x19', beam: '23mm', year: 2025, players: [], concept: '軽量・大きめフェイス' },

  // Gravity 2025
  { id: 'head-gravity-pro-2025', brand: 'HEAD', series: 'Gravity', model: 'Gravity Pro 2025', janCode: '231105', searchKeyword: 'HEAD Gravity Pro 2025 231105', weight: 315, headSize: 100, balance: 310, pattern: '18x20', beam: '20mm', year: 2025, players: ['ベルレッティーニ'], concept: 'コントロール系プロモデル' },
  { id: 'head-gravity-tour-2025', brand: 'HEAD', series: 'Gravity', model: 'Gravity Tour 2025', janCode: '231115', searchKeyword: 'HEAD Gravity Tour 2025 231115', weight: 305, headSize: 99, balance: 315, pattern: '18x20', beam: '20mm', year: 2025, players: [], concept: 'グラビティツアー' },
  { id: 'head-gravity-mp-2025', brand: 'HEAD', series: 'Gravity', model: 'Gravity MP 2025', janCode: '231125', searchKeyword: 'HEAD Gravity MP 2025 231125', weight: 295, headSize: 100, balance: 325, pattern: '16x20', beam: '22mm', year: 2025, players: [], concept: 'グラビティ黄金スペック' },
  { id: 'head-gravity-mp-l-2025', brand: 'HEAD', series: 'Gravity', model: 'Gravity MP L 2025', janCode: '231135', searchKeyword: 'HEAD Gravity MP L 2025 231135', weight: 280, headSize: 100, balance: 330, pattern: '16x20', beam: '22mm', year: 2025, players: [], concept: '軽量グラビティMP' },
  { id: 'head-gravity-team-2025', brand: 'HEAD', series: 'Gravity', model: 'Gravity Team 2025', janCode: '231145', searchKeyword: 'HEAD Gravity Team 2025 231145', weight: 270, headSize: 104, balance: 325, pattern: '16x20', beam: '23mm', year: 2025, players: [], concept: 'デカラケグラビティ' },

  // Extreme 2024
  { id: 'head-extreme-pro-2024', brand: 'HEAD', series: 'Extreme', model: 'Extreme Pro 2024', janCode: '231104', searchKeyword: 'HEAD Extreme Pro 2024 231104', weight: 310, headSize: 100, balance: 315, pattern: '16x19', beam: '23-26-21mm', year: 2024, players: [], concept: 'エクストリームプロ' },
  { id: 'head-extreme-mp-2024', brand: 'HEAD', series: 'Extreme', model: 'Extreme MP 2024', janCode: '231114', searchKeyword: 'HEAD Extreme MP 2024 231114', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '24-26-22mm', year: 2024, players: [], concept: 'スピン系黄金スペック' },
  { id: 'head-extreme-mp-l-2024', brand: 'HEAD', series: 'Extreme', model: 'Extreme MP L 2024', janCode: '231124', searchKeyword: 'HEAD Extreme MP L 2024 231124', weight: 280, headSize: 100, balance: 325, pattern: '16x19', beam: '24-26-22mm', year: 2024, players: [], concept: '軽量エクストリーム' },
  { id: 'head-extreme-team-2024', brand: 'HEAD', series: 'Extreme', model: 'Extreme Team 2024', janCode: '231134', searchKeyword: 'HEAD Extreme Team 2024 231134', weight: 265, headSize: 105, balance: 340, pattern: '16x19', beam: '25mm', year: 2024, players: [], concept: 'エクストリームチーム' },

  // Prestige 2023
  { id: 'head-prestige-pro-2023', brand: 'HEAD', series: 'Prestige', model: 'Prestige Pro 2023', janCode: '236103', searchKeyword: 'HEAD Prestige Pro 2023 236103', weight: 320, headSize: 98, balance: 305, pattern: '16x19', beam: '21mm', year: 2023, players: [], concept: '伝統のコントロール系' },
  { id: 'head-prestige-tour-2023', brand: 'HEAD', series: 'Prestige', model: 'Prestige Tour 2023', janCode: '236113', searchKeyword: 'HEAD Prestige Tour 2023 236113', weight: 315, headSize: 95, balance: 315, pattern: '16x19', beam: '21mm', year: 2023, players: [], concept: '扱いやすいプレステージ' },
  { id: 'head-prestige-mp-2023', brand: 'HEAD', series: 'Prestige', model: 'Prestige MP 2023', janCode: '236123', searchKeyword: 'HEAD Prestige MP 2023 236123', weight: 310, headSize: 98, balance: 320, pattern: '18x20', beam: '21mm', year: 2023, players: [], concept: 'しなり重視の薄ラケ' },
  { id: 'head-prestige-mp-l-2023', brand: 'HEAD', series: 'Prestige', model: 'Prestige MP L 2023', janCode: '236133', searchKeyword: 'HEAD Prestige MP L 2023 236133', weight: 300, headSize: 98, balance: 315, pattern: '18x20', beam: '21mm', year: 2023, players: [], concept: '軽量プレステージMP' },

  // ============================================================
  // ========== DUNLOP ==========
  // ============================================================

  // FX 2026
  { id: 'dunlop-fx500-tour-2026', brand: 'DUNLOP', series: 'FX', model: 'FX 500 Tour 2026', searchKeyword: 'DUNLOP FX500 Tour 2026', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: '2026新作・パワー系ツアー' },
  { id: 'dunlop-fx500-2026', brand: 'DUNLOP', series: 'FX', model: 'FX 500 2026', searchKeyword: 'DUNLOP FX500 2026', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2026, players: [], concept: '2026新作・パワー系黄金' },
  { id: 'dunlop-fx500-ls-2026', brand: 'DUNLOP', series: 'FX', model: 'FX 500 LS 2026', searchKeyword: 'DUNLOP FX500 LS 2026', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '23-26-23mm', year: 2026, players: [], concept: '2026軽量FX' },

  // SX 2025
  { id: 'dunlop-sx300-tour-2025', brand: 'DUNLOP', series: 'SX', model: 'SX 300 Tour 2025', searchKeyword: 'DUNLOP SX300 Tour 2025', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '23mm', year: 2025, players: [], concept: 'スピン系ツアーモデル' },
  { id: 'dunlop-sx300-2025', brand: 'DUNLOP', series: 'SX', model: 'SX 300 2025', searchKeyword: 'DUNLOP SX300 2025', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: ['ティアフォー'], concept: 'スピン系黄金スペック' },
  { id: 'dunlop-sx300-ls-2025', brand: 'DUNLOP', series: 'SX', model: 'SX 300 LS 2025', searchKeyword: 'DUNLOP SX300 LS 2025', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: '軽量SX' },

  // CX 2024
  { id: 'dunlop-cx200-tour-2024', brand: 'DUNLOP', series: 'CX', model: 'CX 200 Tour 2024', searchKeyword: 'DUNLOP CX200 Tour 2024', weight: 315, headSize: 95, balance: 310, pattern: '16x19', beam: '20.5mm', year: 2024, players: [], concept: '95インチコントロール最重視' },
  { id: 'dunlop-cx200-2024', brand: 'DUNLOP', series: 'CX', model: 'CX 200 2024', searchKeyword: 'DUNLOP CX200 2024', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '21.5mm', year: 2024, players: [], concept: 'コントロール系薄ラケ' },
  { id: 'dunlop-cx200-18x20-2024', brand: 'DUNLOP', series: 'CX', model: 'CX 200 18x20 2024', searchKeyword: 'DUNLOP CX200 18x20 2024', weight: 305, headSize: 98, balance: 315, pattern: '18x20', beam: '21.5mm', year: 2024, players: [], concept: '密パターンCX' },
  { id: 'dunlop-cx400-tour-2024', brand: 'DUNLOP', series: 'CX', model: 'CX 400 Tour 2024', searchKeyword: 'DUNLOP CX400 Tour 2024', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2024, players: [], concept: '扱いやすいCX' },

  // LX 2024-2026
  { id: 'dunlop-lx800-tour-2026', brand: 'DUNLOP', series: 'LX', model: 'LX 800 Tour 2026', searchKeyword: 'DUNLOP LX800 Tour 2026', weight: 285, headSize: 110, balance: 325, pattern: '16x18', beam: '23mm', year: 2026, players: [], concept: '最大パワー追求' },
  { id: 'dunlop-lx1000-2024', brand: 'DUNLOP', series: 'LX', model: 'LX 1000 2024', searchKeyword: 'DUNLOP LX1000 2024', weight: 280, headSize: 110, balance: 335, pattern: '16x19', beam: '27mm', year: 2024, players: [], concept: 'デカラケ最強パワー' },

  // ============================================================
  // ========== Prince ==========
  // ============================================================

  // PHANTOM GRAPHITE 2026 (伝説のグラファイト復活)
  { id: 'prince-phantom-graphite-97-315-2026', brand: 'Prince', series: 'PHANTOM GRAPHITE', model: 'PHANTOM GRAPHITE 97 315g 2026', janCode: '7tj247', searchKeyword: 'プリンス Phantom Graphite 97 315g 7tj247', weight: 315, headSize: 97, balance: 310, pattern: '16x19', beam: '20mm', year: 2026, players: [], concept: '伝説の97インチ復活' },
  { id: 'prince-phantom-graphite-100-2026', brand: 'Prince', series: 'PHANTOM GRAPHITE', model: 'PHANTOM GRAPHITE 100 2026', janCode: '7tj226', searchKeyword: 'プリンス Phantom Graphite 100 7tj226', weight: 305, headSize: 100, balance: 315, pattern: '16x18', beam: '20mm', year: 2026, players: [], concept: '100インチファントムグラファイト' },

  // PHANTOM 2025 (素のファントム)
  { id: 'prince-phantom-100-2025', brand: 'Prince', series: 'PHANTOM', model: 'PHANTOM 100 2025', janCode: '7tj232', searchKeyword: 'プリンス Phantom 100 7tj232', weight: 305, headSize: 100, balance: 315, pattern: '16x18', beam: '22mm', year: 2025, players: [], concept: '100インチファントム・オールラウンド' },
  { id: 'prince-phantom-o3-100-2025', brand: 'Prince', series: 'PHANTOM', model: 'PHANTOM O3 100 2025', janCode: '7tj231', searchKeyword: 'プリンス Phantom O3 100 7tj231', weight: 305, headSize: 100, balance: 315, pattern: '16x18', beam: '22mm', year: 2025, players: [], concept: 'O3ポート搭載ファントム' },

  // TOUR 2026
  { id: 'prince-tour-95-2026', brand: 'Prince', series: 'TOUR', model: 'TOUR 95 2026', janCode: '7tj256', searchKeyword: 'プリンス Tour 95 7tj256', weight: 310, headSize: 95, balance: 310, pattern: '16x19', beam: '22mm', year: 2026, players: [], concept: '2026新作・95インチ競技モデル' },
  { id: 'prince-tour-98-2026', brand: 'Prince', series: 'TOUR', model: 'TOUR 98 2026', janCode: '7tj257', searchKeyword: 'プリンス Tour 98 7tj257', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2026, players: [], concept: '2026新作・98インチツアー' },
  { id: 'prince-tour-100-305-2026', brand: 'Prince', series: 'TOUR', model: 'TOUR 100 305g 2026', janCode: '7tj251', searchKeyword: 'プリンス Tour 100 305g 7tj251', weight: 305, headSize: 100, balance: 315, pattern: '16x18', beam: '22-23-20mm', year: 2026, players: [], concept: 'オールラウンドツアー' },
  { id: 'prince-tour-100-290-2026', brand: 'Prince', series: 'TOUR', model: 'TOUR 100 290g 2026', janCode: '7tj252', searchKeyword: 'プリンス Tour 100 290g 7tj252', weight: 290, headSize: 100, balance: 325, pattern: '16x19', beam: '22-23-20mm', year: 2026, players: [], concept: '軽量ツアー' },

  // BEAST 2024-2025
  { id: 'prince-beast-98-2024', brand: 'Prince', series: 'BEAST', model: 'BEAST 98 2024', janCode: '7tj227', searchKeyword: 'プリンス Beast 98 7tj227', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '23-25-22mm', year: 2024, players: [], concept: '98インチビースト' },
  { id: 'prince-beast-100-2024', brand: 'Prince', series: 'BEAST', model: 'BEAST 100 2024', janCode: '7tj201', searchKeyword: 'プリンス Beast 100 7tj201', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '25-26-23mm', year: 2024, players: [], concept: '攻撃型黄金スペック' },
  { id: 'prince-beast-o3-100-2024', brand: 'Prince', series: 'BEAST', model: 'BEAST O3 100 2024', janCode: '7tj205', searchKeyword: 'プリンス Beast O3 100 7tj205', weight: 280, headSize: 100, balance: 330, pattern: '16x19', beam: '25-26-23mm', year: 2024, players: [], concept: 'O3ポート搭載パワー系' },

  // EMBLEM 2026
  { id: 'prince-emblem-110-2026', brand: 'Prince', series: 'EMBLEM', model: 'EMBLEM 110 2026', janCode: '7tj233', searchKeyword: 'プリンス Emblem 110 7tj233', weight: 250, headSize: 110, balance: 335, pattern: '16x19', beam: '28mm', year: 2026, players: [], concept: '最強パワーシリーズ' },
  { id: 'prince-emblem-120-2026', brand: 'Prince', series: 'EMBLEM', model: 'EMBLEM 120 2026', janCode: '7tj234', searchKeyword: 'プリンス Emblem 120 7tj234', weight: 230, headSize: 120, balance: 340, pattern: '16x19', beam: '30mm', year: 2026, players: [], concept: '究極のデカラケパワー' },

  // ============================================================
  // ========== Tecnifibre ==========
  // ============================================================

  // T-FIGHT 2025
  { id: 'tecnifibre-tfight-315-s-2025', brand: 'Tecnifibre', series: 'T-FIGHT', model: 'T-FIGHT 315 S 2025', searchKeyword: 'テクニファイバー T-FIGHT 315S 2025', weight: 315, headSize: 98, balance: 310, pattern: '18x19', beam: '22mm', year: 2025, players: [], concept: 'しなり強化T-FIGHT' },
  { id: 'tecnifibre-tfight-305-s-2025', brand: 'Tecnifibre', series: 'T-FIGHT', model: 'T-FIGHT 305 S 2025', searchKeyword: 'テクニファイバー T-FIGHT 305S 2025', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2025, players: [], concept: 'バランス型T-FIGHT' },
  { id: 'tecnifibre-tfight-300-s-2025', brand: 'Tecnifibre', series: 'T-FIGHT', model: 'T-FIGHT 300 S 2025', searchKeyword: 'テクニファイバー T-FIGHT 300S 2025', weight: 300, headSize: 98, balance: 320, pattern: '16x19', beam: '22mm', year: 2025, players: [], concept: 'バランスの良いT-FIGHT' },
  { id: 'tecnifibre-tfight-300-2025', brand: 'Tecnifibre', series: 'T-FIGHT', model: 'T-FIGHT 300 2025', searchKeyword: 'テクニファイバー T-FIGHT 300 2025', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '22mm', year: 2025, players: [], concept: 'スタンダードT-FIGHT' },
  { id: 'tecnifibre-tfight-285-2025', brand: 'Tecnifibre', series: 'T-FIGHT', model: 'T-FIGHT 285 2025', searchKeyword: 'テクニファイバー T-FIGHT 285 2025', weight: 285, headSize: 100, balance: 320, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: '軽量T-FIGHT' },
  { id: 'tecnifibre-tfight-270-2025', brand: 'Tecnifibre', series: 'T-FIGHT', model: 'T-FIGHT 270 2025', searchKeyword: 'テクニファイバー T-FIGHT 270 2025', weight: 270, headSize: 100, balance: 325, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: '入門者向けT-FIGHT' },

  // TF40 v3 (2024)
  { id: 'tecnifibre-tf40-305-v3', brand: 'Tecnifibre', series: 'TF40', model: 'TF40 305 16M v3', searchKeyword: 'テクニファイバー TF40 305 16M', weight: 305, headSize: 98, balance: 320, pattern: '16x19', beam: '21.5mm', year: 2024, players: ['メドベージェフ'], concept: 'メドベージェフ使用・ツアープレーヤー向け' },
  { id: 'tecnifibre-tf40-315-v3', brand: 'Tecnifibre', series: 'TF40', model: 'TF40 315 18M v3', searchKeyword: 'テクニファイバー TF40 315 18M', weight: 315, headSize: 98, balance: 315, pattern: '18x20', beam: '21.5mm', year: 2024, players: [], concept: 'ヘビーモデルTF40' },
  { id: 'tecnifibre-tf40-290-v3', brand: 'Tecnifibre', series: 'TF40', model: 'TF40 290 16M v3', searchKeyword: 'テクニファイバー TF40 290 16M', weight: 290, headSize: 100, balance: 320, pattern: '16x19', beam: '21.5mm', year: 2024, players: [], concept: '軽量TF40' },

  // TF-X1 v2 (2024)
  { id: 'tecnifibre-tfx1-305-v2', brand: 'Tecnifibre', series: 'TF-X1', model: 'TF-X1 v2 305', searchKeyword: 'テクニファイバー TF-X1 305', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '23mm', year: 2024, players: [], concept: 'オールラウンドTF-X1' },
  { id: 'tecnifibre-tfx1-300-v2', brand: 'Tecnifibre', series: 'TF-X1', model: 'TF-X1 v2 300', searchKeyword: 'テクニファイバー TF-X1 300', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2024, players: [], concept: 'スタンダードTF-X1' },

  // TEMPO v2 (2024)
  { id: 'tecnifibre-tempo-298-iga', brand: 'Tecnifibre', series: 'TEMPO', model: 'TEMPO 298 IGA', searchKeyword: 'テクニファイバー TEMPO 298 Iga', weight: 298, headSize: 98, balance: 320, pattern: '16x19', beam: '24mm', year: 2024, players: ['シフィオンテク'], concept: 'シフィオンテク使用モデル' },
  { id: 'tecnifibre-tempo-285-v2', brand: 'Tecnifibre', series: 'TEMPO', model: 'TEMPO 285 v2', searchKeyword: 'テクニファイバー TEMPO 285', weight: 285, headSize: 100, balance: 320, pattern: '16x19', beam: '24mm', year: 2024, players: [], concept: '軽量テンポ' },

  // ============================================================
  // ========== Kneissl ==========
  // ============================================================
  { id: 'kneissl-prime-star-black', brand: 'Kneissl', series: 'PRIME STAR', model: 'PRIME STAR Black', searchKeyword: 'クナイスル PRIME STAR Black KTPSB', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '24-26-22mm', year: 2024, players: [], concept: 'シンプルデザイン・高品質' },
  { id: 'kneissl-prime-star-white', brand: 'Kneissl', series: 'PRIME STAR', model: 'PRIME STAR White', searchKeyword: 'クナイスル PRIME STAR White KTPSW', weight: 285, headSize: 100, balance: 320, pattern: '16x19', beam: '24-26-22mm', year: 2024, players: [], concept: '軽量モデル' },

  // ============================================================
  // ========== DIADEM ==========
  // ============================================================

  // AXIS (2025)
  { id: 'diadem-axis-98', brand: 'DIADEM', series: 'AXIS', model: 'AXIS 98', searchKeyword: 'DIADEM AXIS 98 TAA019', weight: 305, headSize: 98, balance: 315, pattern: '16x20', beam: '22mm', year: 2025, players: [], concept: '98インチAXIS・コントロール' },
  { id: 'diadem-axis-100', brand: 'DIADEM', series: 'AXIS', model: 'AXIS 100', searchKeyword: 'DIADEM AXIS 100 TAA017', weight: 300, headSize: 100, balance: 330, pattern: '16x19', beam: '23mm', year: 2025, players: ['スビトリナ'], concept: 'スビトリナ使用モデル' },
  { id: 'diadem-axis-100-team', brand: 'DIADEM', series: 'AXIS', model: 'AXIS 100 TEAM', searchKeyword: 'DIADEM AXIS 100 Team TAA018', weight: 280, headSize: 100, balance: 330, pattern: '16x19', beam: '23mm', year: 2025, players: [], concept: '軽量AXIS' },

  // ELEVATE V3 (2023)
  { id: 'diadem-elevate-98-v3', brand: 'DIADEM', series: 'ELEVATE', model: 'ELEVATE 98 V3', searchKeyword: 'DIADEM ELEVATE 98 V3 TAA007', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2023, players: [], concept: 'スピンとコントロール両立' },
  { id: 'diadem-elevate-tour-98-v3', brand: 'DIADEM', series: 'ELEVATE', model: 'ELEVATE TOUR 98 V3', searchKeyword: 'DIADEM ELEVATE Tour 98 V3 TAA009', weight: 315, headSize: 98, balance: 315, pattern: '16x20', beam: '22mm', year: 2023, players: [], concept: 'ツアーモデル' },
  { id: 'diadem-elevate-lite-98-v3', brand: 'DIADEM', series: 'ELEVATE', model: 'ELEVATE LITE 98 V3', searchKeyword: 'DIADEM ELEVATE Lite 98 V3 TAA008', weight: 290, headSize: 98, balance: 335, pattern: '16x20', beam: '22mm', year: 2023, players: [], concept: '軽量ELEVATE' },

  // NOVA V3 (2024)
  { id: 'diadem-nova-v3-100', brand: 'DIADEM', series: 'NOVA', model: 'NOVA V3 100', searchKeyword: 'DIADEM NOVA V3 100 TAA010', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23-26-22mm', year: 2024, players: [], concept: 'パワーとオールラウンド性能' },
  { id: 'diadem-nova-v3-team', brand: 'DIADEM', series: 'NOVA', model: 'NOVA V3 TEAM', searchKeyword: 'DIADEM NOVA V3 Team TAA011', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '23-26-22mm', year: 2024, players: [], concept: '軽量NOVA' },
  { id: 'diadem-nova-v3-plus', brand: 'DIADEM', series: 'NOVA', model: 'NOVA V3 PLUS', searchKeyword: 'DIADEM NOVA V3 Plus TAA012', weight: 295, headSize: 100, balance: 325, pattern: '16x19', beam: '23-26-22mm', year: 2024, players: [], concept: 'ロングボディNOVA' },
  { id: 'diadem-nova-v3-tour', brand: 'DIADEM', series: 'NOVA', model: 'NOVA V3 TOUR', searchKeyword: 'DIADEM NOVA V3 Tour', weight: 310, headSize: 100, balance: 310, pattern: '16x19', beam: '24mm', year: 2024, players: [], concept: '重量系パワーNOVA' },
  { id: 'diadem-nova-v3-lite', brand: 'DIADEM', series: 'NOVA', model: 'NOVA V3 LITE', searchKeyword: 'DIADEM NOVA V3 Lite', weight: 265, headSize: 100, balance: 335, pattern: '16x19', beam: '24mm', year: 2024, players: [], concept: '超軽量入門向けNOVA' },
  { id: 'diadem-dreamer-105', brand: 'DIADEM', series: 'DREAMER', model: 'DREAMER 105', searchKeyword: 'DIADEM DREAMER 105', weight: 270, headSize: 105, balance: 335, pattern: '16x19', beam: '26mm', year: 2025, players: [], concept: '105インチデカラケ・楽々パワー系' },
  { id: 'diadem-dreamer-110', brand: 'DIADEM', series: 'DREAMER', model: 'DREAMER 110', searchKeyword: 'DIADEM DREAMER 110', weight: 255, headSize: 110, balance: 345, pattern: '16x19', beam: '28mm', year: 2025, players: [], concept: '110インチ最強パワーシリーズ' },
  { id: 'diadem-axis-98-svitolina', brand: 'DIADEM', series: 'AXIS', model: 'AXIS 98 SVITOLINA', searchKeyword: 'DIADEM AXIS 98 Svitolina', weight: 305, headSize: 98, balance: 315, pattern: '16x20', beam: '22mm', year: 2025, players: ['スビトリナ'], concept: 'スビトリナ監修98インチ限定モデル' },

  // ============================================================
  // ========== Snauwaert ========== (ウインザー取扱・ベルギー名門)
  // ============================================================
  { id: 'snauwaert-vitas-115', brand: 'Snauwaert', series: 'VITAS', model: 'VITAS 115', searchKeyword: 'Snauwaert Vitas 115', weight: 265, headSize: 115, balance: 345, pattern: '16x19', beam: '28mm', year: 2024, players: [], concept: '115インチ超大型フェイス・究極のパワーサポート' },
  { id: 'snauwaert-hi-ten-98-torneo', brand: 'Snauwaert', series: 'HI-TEN', model: 'HI-TEN 98 TORNEO', searchKeyword: 'Snauwaert Hi-Ten 98 Torneo', weight: 310, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2024, players: [], concept: 'コントロール志向98インチ競技モデル' },
  { id: 'snauwaert-hi-ten-98r', brand: 'Snauwaert', series: 'HI-TEN', model: 'HI-TEN 98R', searchKeyword: 'Snauwaert Hi-Ten 98R', weight: 300, headSize: 98, balance: 320, pattern: '16x19', beam: '22mm', year: 2024, players: [], concept: '98インチバランス重視モデル' },
  { id: 'snauwaert-hi-ten-98l', brand: 'Snauwaert', series: 'HI-TEN', model: 'HI-TEN 98L', searchKeyword: 'Snauwaert Hi-Ten 98L', weight: 285, headSize: 98, balance: 325, pattern: '16x19', beam: '22mm', year: 2024, players: [], concept: '軽量98インチ' },
  { id: 'snauwaert-hi-ten-100r', brand: 'Snauwaert', series: 'HI-TEN', model: 'HI-TEN 100R', searchKeyword: 'Snauwaert Hi-Ten 100R', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2024, players: [], concept: '100インチオールラウンド' },
  { id: 'snauwaert-vitas-100r-ff', brand: 'Snauwaert', series: 'VITAS', model: 'VITAS 100R FF', searchKeyword: 'Snauwaert Vitas 100R FF', weight: 290, headSize: 100, balance: 325, pattern: '16x19', beam: '25mm', year: 2024, players: [], concept: 'フレックスフレーム搭載100インチ' },
  { id: 'snauwaert-vitas-100l-ff', brand: 'Snauwaert', series: 'VITAS', model: 'VITAS 100L FF', searchKeyword: 'Snauwaert Vitas 100L FF', weight: 275, headSize: 100, balance: 330, pattern: '16x19', beam: '25mm', year: 2024, players: [], concept: '軽量フレックスフレーム100インチ' },

  // ============================================================
  // ========== Lacoste ========== (ウインザー取扱・仏高級ブランド)
  // ============================================================
  { id: 'lacoste-l23', brand: 'Lacoste', series: 'L.23', model: 'L.23', searchKeyword: 'Lacoste L23 テニスラケット', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2023, players: [], concept: 'ラコステ正規品・フレンチエレガンス×高性能' },
  { id: 'lacoste-l23-light', brand: 'Lacoste', series: 'L.23', model: 'L.23 LIGHT', searchKeyword: 'Lacoste L23 Light テニスラケット', weight: 285, headSize: 100, balance: 325, pattern: '16x19', beam: '23mm', year: 2023, players: [], concept: '軽量版L.23・扱いやすさ重視' },

  // ============================================================
  // ========== YONEX 追加モデル ==========
  // ============================================================
  // MUSE 2025 (新シリーズ)
  { id: 'yonex-muse-98-2025', brand: 'YONEX', series: 'MUSE', model: 'MUSE 98 2025', searchKeyword: 'ヨネックス MUSE 98 2025', weight: 305, headSize: 98, balance: 315, pattern: '16x19', beam: '22mm', year: 2025, players: [], concept: '2025新シリーズ・MUSE 98インチ。しなりとパワーの融合' },
  { id: 'yonex-muse-100-2025', brand: 'YONEX', series: 'MUSE', model: 'MUSE 100 2025', searchKeyword: 'ヨネックス MUSE 100 2025', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '23mm', year: 2025, players: [], concept: 'MUSE黄金スペック' },
  { id: 'yonex-muse-100l-2025', brand: 'YONEX', series: 'MUSE', model: 'MUSE 100L 2025', searchKeyword: 'ヨネックス MUSE 100L 2025', weight: 280, headSize: 100, balance: 325, pattern: '16x19', beam: '23mm', year: 2025, players: [], concept: '軽量MUSE' },
  { id: 'yonex-muse-100sl-2025', brand: 'YONEX', series: 'MUSE', model: 'MUSE 100SL 2025', searchKeyword: 'ヨネックス MUSE 100SL 2025', weight: 265, headSize: 100, balance: 330, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: 'スーパーライトMUSE' },
  { id: 'yonex-muse-107-2025', brand: 'YONEX', series: 'MUSE', model: 'MUSE 107 2025', searchKeyword: 'ヨネックス MUSE 107 2025', weight: 270, headSize: 107, balance: 335, pattern: '16x19', beam: '26mm', year: 2025, players: [], concept: 'デカラケMUSE' },
  // VCORE追加
  { id: 'yonex-vcore-100d-2026', brand: 'YONEX', series: 'VCORE', model: 'VCORE 100D 2026', searchKeyword: 'ヨネックス VCORE 100D 2026', weight: 310, headSize: 100, balance: 315, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: '重量版VCORE・パワーヒッター向け' },
  { id: 'yonex-vcore-98l-2026', brand: 'YONEX', series: 'VCORE', model: 'VCORE 98L 2026', searchKeyword: 'ヨネックス VCORE 98L 2026', weight: 285, headSize: 98, balance: 325, pattern: '16x19', beam: '21mm', year: 2026, players: [], concept: '軽量VCORE 98' },
  { id: 'yonex-vcore-102-2026', brand: 'YONEX', series: 'VCORE', model: 'VCORE 102 2026', searchKeyword: 'ヨネックス VCORE 102 2026', weight: 285, headSize: 102, balance: 325, pattern: '16x19', beam: '23mm', year: 2026, players: [], concept: '102インチVCORE' },
  // PERCEPT追加
  { id: 'yonex-percept-100d-2023', brand: 'YONEX', series: 'PERCEPT', model: 'PERCEPT 100D 2023', searchKeyword: 'ヨネックス PERCEPT 100D', weight: 310, headSize: 100, balance: 310, pattern: '16x19', beam: '21mm', year: 2023, players: [], concept: '重量版PERCEPT・操作性重視' },
  { id: 'yonex-percept-97d-2023', brand: 'YONEX', series: 'PERCEPT', model: 'PERCEPT 97D 2023', searchKeyword: 'ヨネックス PERCEPT 97D', weight: 320, headSize: 97, balance: 305, pattern: '18x20', beam: '21mm', year: 2023, players: [], concept: '97インチ密パターン競技モデル' },
  { id: 'yonex-percept-104-2023', brand: 'YONEX', series: 'PERCEPT', model: 'PERCEPT 104 2023', searchKeyword: 'ヨネックス PERCEPT 104', weight: 270, headSize: 104, balance: 330, pattern: '16x19', beam: '23mm', year: 2023, players: [], concept: '104インチ扱いやすいパーセプト' },
  { id: 'yonex-percept-100l-2023', brand: 'YONEX', series: 'PERCEPT', model: 'PERCEPT 100L 2023', searchKeyword: 'ヨネックス PERCEPT 100L', weight: 280, headSize: 100, balance: 325, pattern: '16x19', beam: '21mm', year: 2023, players: [], concept: '軽量PERCEPT' },

  // ============================================================
  // ========== HEAD 追加モデル ==========
  // ============================================================
  { id: 'head-squared-2026', brand: 'HEAD', series: 'SQUARED', model: 'SQUARED 2026', janCode: '232616', searchKeyword: 'HEAD SQUARED 2026', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '24mm', year: 2026, players: [], concept: '2026新シリーズ・スクエアフレーム採用・パワーとスピン' },
  { id: 'head-boom-alternate-mp-2026', brand: 'HEAD', series: 'Boom', model: 'Boom MP ALTERNATE 2026', janCode: '232256', searchKeyword: 'HEAD Boom MP Alternate 2026', weight: 295, headSize: 100, balance: 315, pattern: '16x19', beam: '24mm', year: 2026, players: [], concept: 'Boomの別カラーリングモデル' },
  { id: 'head-instinct-mp-2023', brand: 'HEAD', series: 'Instinct', model: 'Instinct MP 2023', janCode: '235323', searchKeyword: 'HEAD Instinct MP 2023', weight: 300, headSize: 100, balance: 320, pattern: '16x19', beam: '25mm', year: 2023, players: [], concept: 'マリア・シャラポワ愛用シリーズ' },

  // ============================================================
  // ========== Prince 追加モデル ==========
  // ============================================================
  // X SERIES 2025 (ウインザー特別取扱)
  { id: 'prince-x-100-tour-2025', brand: 'Prince', series: 'X', model: 'X 100 TOUR 2025', searchKeyword: 'プリンス X 100 Tour テニスラケット', weight: 315, headSize: 100, balance: 305, pattern: '16x18', beam: '20mm', year: 2025, players: [], concept: '最薄ビーム20mm・極限コントロールを追求したXシリーズ最高峰' },
  { id: 'prince-x-98-tour-2025', brand: 'Prince', series: 'X', model: 'X 98 TOUR 2025', searchKeyword: 'プリンス X 98 Tour テニスラケット', weight: 315, headSize: 98, balance: 305, pattern: '16x18', beam: '20mm', year: 2025, players: [], concept: '98インチ最薄フレームX TOUR' },
  { id: 'prince-x-100-2025', brand: 'Prince', series: 'X', model: 'X 100 2025', searchKeyword: 'プリンス X 100 テニスラケット', weight: 305, headSize: 100, balance: 315, pattern: '16x18', beam: '20mm', year: 2025, players: [], concept: '100インチXシリーズスタンダード' },
  { id: 'prince-x-105-290-2025', brand: 'Prince', series: 'X', model: 'X 105 290g 2025', searchKeyword: 'プリンス X 105 290g テニスラケット', weight: 290, headSize: 105, balance: 325, pattern: '16x19', beam: '22mm', year: 2025, players: [], concept: '105インチ扱いやすいX' },
  { id: 'prince-x-105-270-2025', brand: 'Prince', series: 'X', model: 'X 105 270g 2025', searchKeyword: 'プリンス X 105 270g テニスラケット', weight: 270, headSize: 105, balance: 335, pattern: '16x19', beam: '24mm', year: 2025, players: [], concept: '軽量105インチX' },
  { id: 'prince-x-115-2025', brand: 'Prince', series: 'X', model: 'X 115 2025', searchKeyword: 'プリンス X 115 テニスラケット', weight: 236, headSize: 115, balance: 345, pattern: '16x19', beam: '28mm', year: 2025, players: [], concept: '115インチ超軽量デカラケ' },
  // TOUR O3
  { id: 'prince-tour-o3-100-305-2026', brand: 'Prince', series: 'TOUR', model: 'TOUR O3 100 305g 2026', janCode: '7tj253', searchKeyword: 'プリンス Tour O3 100 305g 7tj253', weight: 305, headSize: 100, balance: 315, pattern: '16x18', beam: '22-23-20mm', year: 2026, players: [], concept: 'O3ポート搭載ツアー・打球感向上' },
  { id: 'prince-tour-o3-100-290-2026', brand: 'Prince', series: 'TOUR', model: 'TOUR O3 100 290g 2026', janCode: '7tj254', searchKeyword: 'プリンス Tour O3 100 290g 7tj254', weight: 290, headSize: 100, balance: 325, pattern: '16x19', beam: '22-23-20mm', year: 2026, players: [], concept: '軽量O3ツアー' },
  // Phantom Graphite 97
  { id: 'prince-phantom-graphite-97-300-2026', brand: 'Prince', series: 'PHANTOM GRAPHITE', model: 'PHANTOM GRAPHITE 97 300g 2026', janCode: '7tj248', searchKeyword: 'プリンス Phantom Graphite 97 300g 7tj248', weight: 300, headSize: 97, balance: 315, pattern: '16x19', beam: '20mm', year: 2026, players: [], concept: '97インチ伝説グラファイト軽量版' },
  // Phantom Graphite 100XS
  { id: 'prince-phantom-graphite-100xs-300-2026', brand: 'Prince', series: 'PHANTOM GRAPHITE', model: 'PHANTOM GRAPHITE 100XS 300g 2026', searchKeyword: 'プリンス Phantom Graphite 100XS 300g', weight: 300, headSize: 100, balance: 315, pattern: '16x18', beam: '20mm', year: 2026, players: [], concept: '100インチXSスペックグラファイト' },
  { id: 'prince-phantom-graphite-100xs-285-2026', brand: 'Prince', series: 'PHANTOM GRAPHITE', model: 'PHANTOM GRAPHITE 100XS 285g 2026', searchKeyword: 'プリンス Phantom Graphite 100XS 285g', weight: 285, headSize: 100, balance: 320, pattern: '16x18', beam: '20mm', year: 2026, players: [], concept: '軽量100XS グラファイト' },
  // Sierra O3
  { id: 'prince-sierra-o3-2025', brand: 'Prince', series: 'SIERRA', model: 'SIERRA O3 2025', searchKeyword: 'プリンス Sierra O3 テニスラケット', weight: 265, headSize: 107, balance: 335, pattern: '16x19', beam: '26mm', year: 2025, players: [], concept: 'O3搭載・女性・シニア向けパワーラケット' },

  // ============================================================
  // ========== DUNLOP 追加モデル ==========
  // ============================================================
  { id: 'dunlop-lx800-2024', brand: 'DUNLOP', series: 'LX', model: 'LX 800 2024', searchKeyword: 'DUNLOP LX800 2024', weight: 275, headSize: 110, balance: 330, pattern: '16x19', beam: '25mm', year: 2024, players: [], concept: 'パワーとコンフォートのLX系黄金スペック' },
  { id: 'dunlop-fx500-lite-2026', brand: 'DUNLOP', series: 'FX', model: 'FX 500 Lite 2026', searchKeyword: 'DUNLOP FX500 Lite 2026', weight: 270, headSize: 100, balance: 330, pattern: '16x19', beam: '23-26-23mm', year: 2026, players: [], concept: '軽量FX・初中級者向け' },
  { id: 'dunlop-cx200-os-2024', brand: 'DUNLOP', series: 'CX', model: 'CX 200 OS 2024', searchKeyword: 'DUNLOP CX200 OS 2024', weight: 290, headSize: 102, balance: 325, pattern: '16x19', beam: '22mm', year: 2024, players: [], concept: 'オーバーサイズCX・コントロール系大き目フェイス' },
  { id: 'dunlop-cx400-2024', brand: 'DUNLOP', series: 'CX', model: 'CX 400 2024', searchKeyword: 'DUNLOP CX400 2024', weight: 285, headSize: 104, balance: 320, pattern: '16x19', beam: '24mm', year: 2024, players: [], concept: '104インチ扱いやすいコントロール系' },
  { id: 'dunlop-sx300-lite-2025', brand: 'DUNLOP', series: 'SX', model: 'SX 300 Lite 2025', searchKeyword: 'DUNLOP SX300 Lite 2025', weight: 265, headSize: 100, balance: 335, pattern: '16x19', beam: '23-26-23mm', year: 2025, players: [], concept: '超軽量スピン系SX' },
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
