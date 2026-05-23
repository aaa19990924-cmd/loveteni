// テニスグリップデータベース
const GRIP_BRANDS = ['Wilson', 'Tourna', 'YONEX', 'Babolat', 'HEAD', 'Tecnifibre', 'Gosen', 'Prince'];

const GRIP_BRAND_INFO = {
  'Wilson': { desc: 'アメリカ発祥の総合スポーツブランド。Pro Overgripは世界中のテニス選手から最も信頼されるオーバーグリップとして君臨。', color: '#e74c3c', tagline: 'AMERICAN ICON' },
  'Tourna': { desc: 'アメリカ発祥のグリップ専門ブランド。象徴的なTourna Grip（青）とXL（黄）はドライ系オーバーグリップの定番。多くのプロも愛用。', color: '#f1c40f', tagline: 'GRIP SPECIALIST' },
  'YONEX': { desc: '日本のテニスブランド。Super Grapシリーズは日本で最も使われているオーバーグリップ。豊富なカラー展開も魅力。', color: '#8e44ad', tagline: 'JAPANESE PRECISION' },
  'Babolat': { desc: 'フランス発祥の老舗テニスブランド。VS Original（高品質ウェット）とPro Tour Overgripで知られる。', color: '#27ae60', tagline: 'FRENCH HERITAGE' },
  'HEAD': { desc: 'オーストリア発祥の世界トップブランド。HydroSorbシリーズは吸汗性に優れたリプレースメントグリップとして有名。', color: '#2c3e50', tagline: 'AUSTRIAN TRADITION' },
  'Tecnifibre': { desc: 'フランス発祥のブランド。X-Tra FeelやATP RazorSoftなどプレミアム系オーバーグリップを展開。', color: '#16a085', tagline: 'FRENCH ENGINEERING' },
  'Gosen': { desc: '滋賀県発祥の国産メーカー。マイクロファイバーグリップやアクアタッチなど、技術力で勝負する国産ブランド。', color: '#c0392b', tagline: 'JAPAN VALUE' },
  'Prince': { desc: 'アメリカ発祥のブランド。Towel Gripはタオル素材で汗を吸収する独自設計のオーバーグリップ。', color: '#2980b9', tagline: 'AMERICAN INNOVATION' }
};

const GRIP_DATABASE = [
  // ========== Wilson ==========
  { id: 'wilson-pro-overgrip', brand: 'Wilson', model: 'Pro Overgrip', type: 'オーバーグリップ', texture: 'ドライ寄り', thickness: '薄め (0.55mm)', colors: 'ホワイト/ブラック/レッド他多色', year: 2024, concept: '世界中のプロが最も使用するオーバーグリップ。フィット感とフィーリングの完成形', searchKeyword: 'Wilson Pro Overgrip', players: ['多数のATP/WTA選手'] },
  { id: 'wilson-pro-overgrip-comfort', brand: 'Wilson', model: 'Pro Overgrip Comfort', type: 'オーバーグリップ', texture: 'ウェット寄り', thickness: '厚め (0.70mm)', colors: 'ホワイト/ブラック', year: 2024, concept: 'Pro Overgripに厚みとクッションを追加', searchKeyword: 'Wilson Pro Overgrip Comfort' },
  { id: 'wilson-cushion-aire-classic', brand: 'Wilson', model: 'Cushion-Aire Classic', type: 'リプレースメントグリップ', texture: '穴あきウェット', thickness: '1.7mm', colors: 'ブラック', year: 2023, concept: '通気性に優れた定番リプレースメント', searchKeyword: 'Wilson Cushion-Aire Classic' },
  { id: 'wilson-premium-leather', brand: 'Wilson', model: 'Premium Leather', type: 'リプレースメントグリップ', texture: 'レザー', thickness: '1.5mm', colors: 'ブラウン', year: 2023, concept: 'プロスタッフ等に合うレザーグリップ', searchKeyword: 'Wilson Premium Leather Grip' },

  // ========== Tourna ==========
  { id: 'tourna-grip-original', brand: 'Tourna', model: 'Tourna Grip Original', type: 'オーバーグリップ', texture: 'ドライ', thickness: '薄め (0.45mm)', colors: 'ブルー', year: 2024, concept: '汗をかけばかくほどグリップ力が増す、伝説のドライグリップ', searchKeyword: 'Tourna Grip Original' },
  { id: 'tourna-grip-xl', brand: 'Tourna', model: 'Tourna Grip XL', type: 'オーバーグリップ', texture: 'ドライ', thickness: '薄め (0.45mm)', colors: 'イエロー', year: 2024, concept: 'XLサイズで長くカット可能。手汗が多い人の救世主', searchKeyword: 'Tourna Grip XL' },
  { id: 'tourna-tac', brand: 'Tourna', model: 'Tourna Tac', type: 'オーバーグリップ', texture: 'タッキー(ウェット)', thickness: '標準 (0.50mm)', colors: 'ホワイト/ブラック/ピンク他', year: 2024, concept: 'ウェット系を求める層向けのTourna', searchKeyword: 'Tourna Tac' },

  // ========== YONEX ==========
  { id: 'yonex-super-grap', brand: 'YONEX', model: 'Super Grap', type: 'オーバーグリップ', texture: 'ウェット', thickness: '標準 (0.60mm)', colors: 'ホワイト/ブラック/レッド/ブルー他多色', year: 2024, concept: '日本で最も売れているウェット系オーバーグリップ', searchKeyword: 'ヨネックス Super Grap' },
  { id: 'yonex-wet-super-grip', brand: 'YONEX', model: 'Wet Super Grip', type: 'オーバーグリップ', texture: '強ウェット', thickness: '標準 (0.60mm)', colors: 'ホワイト/ブラック多色', year: 2024, concept: 'Super Grapよりさらにウェット感が強い', searchKeyword: 'ヨネックス Wet Super Grip' },
  { id: 'yonex-super-grap-tough', brand: 'YONEX', model: 'Super Grap Tough', type: 'オーバーグリップ', texture: 'ウェット', thickness: '厚め (0.70mm)', colors: 'ホワイト/ブラック', year: 2024, concept: '耐久性を強化したSuper Grap', searchKeyword: 'ヨネックス Super Grap Tough' },
  { id: 'yonex-ai-grip', brand: 'YONEX', model: 'AIグリップ', type: 'リプレースメントグリップ', texture: 'ウェット', thickness: '1.6mm', colors: 'ブラック', year: 2024, concept: '高い吸汗性とフィット感のリプレースメント', searchKeyword: 'ヨネックス AIグリップ' },

  // ========== Babolat ==========
  { id: 'babolat-pro-tour', brand: 'Babolat', model: 'Pro Tour Overgrip', type: 'オーバーグリップ', texture: 'ウェット', thickness: '薄め (0.55mm)', colors: 'ホワイト/ブラック多色', year: 2024, concept: 'ナダル使用のウェット系定番', searchKeyword: 'Babolat Pro Tour Overgrip', players: ['ナダル'] },
  { id: 'babolat-vs-original', brand: 'Babolat', model: 'VS Original', type: 'オーバーグリップ', texture: 'ドライ寄り', thickness: '薄め (0.45mm)', colors: 'ホワイト/ブラック', year: 2024, concept: 'Tourna Gripに似たドライ系、高品質仕上げ', searchKeyword: 'Babolat VS Original Overgrip' },
  { id: 'babolat-syntec-pro', brand: 'Babolat', model: 'Syntec Pro', type: 'リプレースメントグリップ', texture: 'ウェット', thickness: '1.7mm', colors: 'ブラック多色', year: 2023, concept: 'バランスの取れたリプレースメント', searchKeyword: 'Babolat Syntec Pro' },

  // ========== HEAD ==========
  { id: 'head-hydrosorb-pro', brand: 'HEAD', model: 'HydroSorb Pro', type: 'リプレースメントグリップ', texture: '穴あきウェット', thickness: '1.8mm', colors: 'ブラック多色', year: 2024, concept: '吸汗性に優れたプロ仕様リプレースメント', searchKeyword: 'HEAD HydroSorb Pro' },
  { id: 'head-prime-tour', brand: 'HEAD', model: 'Prime Tour Overgrip', type: 'オーバーグリップ', texture: 'ドライ寄り', thickness: '薄め (0.55mm)', colors: 'ホワイト/ブラック', year: 2024, concept: 'ジョコビッチが使用するプロ仕様', searchKeyword: 'HEAD Prime Tour Overgrip', players: ['ジョコビッチ'] },
  { id: 'head-xtremesoft', brand: 'HEAD', model: 'XtremeSoft Grip', type: 'オーバーグリップ', texture: 'ウェット', thickness: '標準 (0.60mm)', colors: 'ホワイト/ブラック/ピンク多色', year: 2024, concept: '柔らかい握り心地のウェット系', searchKeyword: 'HEAD XtremeSoft Grip' },

  // ========== Tecnifibre ==========
  { id: 'tecnifibre-x-tra-feel', brand: 'Tecnifibre', model: 'X-Tra Feel', type: 'オーバーグリップ', texture: 'ウェット', thickness: '薄め (0.55mm)', colors: 'ホワイト/ブラック', year: 2024, concept: 'メドベージェフが使用する高フィーリングモデル', searchKeyword: 'テクニファイバー X-Tra Feel', players: ['メドベージェフ'] },
  { id: 'tecnifibre-atp-razorsoft', brand: 'Tecnifibre', model: 'ATP RazorSoft', type: 'オーバーグリップ', texture: 'ウェット', thickness: '標準 (0.60mm)', colors: 'ホワイト/ブラック', year: 2024, concept: '柔らかい握り心地のATPシリーズ', searchKeyword: 'テクニファイバー ATP RazorSoft' },
  { id: 'tecnifibre-atp-tour-grip', brand: 'Tecnifibre', model: 'ATP Tour Grip', type: 'リプレースメントグリップ', texture: 'ウェット', thickness: '1.7mm', colors: 'ブラック', year: 2023, concept: 'プロ仕様のリプレースメント', searchKeyword: 'テクニファイバー ATP Tour Grip' },

  // ========== Gosen ==========
  { id: 'gosen-microfiber-grip', brand: 'Gosen', model: 'マイクロファイバーグリップ', type: 'オーバーグリップ', texture: 'ウェット', thickness: '標準 (0.60mm)', colors: 'ホワイト/ブラック/ピンク多色', year: 2024, concept: '吸汗性に優れたマイクロファイバー素材', searchKeyword: 'ゴーセン マイクロファイバーグリップ' },
  { id: 'gosen-aquatouch', brand: 'Gosen', model: 'アクアタッチ', type: 'オーバーグリップ', texture: '強ウェット', thickness: '薄め (0.50mm)', colors: 'ホワイト/ブラック', year: 2024, concept: '水に濡れたような独特のグリップ感', searchKeyword: 'ゴーセン アクアタッチ' },
  { id: 'gosen-dragon-grip', brand: 'Gosen', model: 'ドラゴングリップ', type: 'オーバーグリップ', texture: 'ドライ', thickness: '薄め (0.45mm)', colors: 'ホワイト/ブラック', year: 2023, concept: '汗をかいてもズレないドライ系', searchKeyword: 'ゴーセン ドラゴングリップ' },

  // ========== Prince ==========
  { id: 'prince-towel-grip', brand: 'Prince', model: 'Towel Grip', type: 'オーバーグリップ', texture: 'タオル素材', thickness: '厚め (1.0mm)', colors: 'ホワイト/ブラック多色', year: 2024, concept: 'タオル素材で圧倒的な吸汗性。独自の握り心地', searchKeyword: 'プリンス タオルグリップ' },
  { id: 'prince-resipro', brand: 'Prince', model: 'ResiPro', type: 'オーバーグリップ', texture: 'ウェット', thickness: '標準 (0.60mm)', colors: 'ホワイト/ブラック多色', year: 2024, concept: '定番のウェット系オーバーグリップ', searchKeyword: 'プリンス ResiPro' },
  { id: 'prince-exspeed-grip', brand: 'Prince', model: 'EX SPEED グリップ', type: 'リプレースメントグリップ', texture: 'ウェット', thickness: '1.8mm', colors: 'ブラック', year: 2023, concept: 'スピードラケット向けリプレースメント', searchKeyword: 'プリンス EX SPEED グリップ' }
];

// ヘルパー関数
function getGripsByBrand(brand) {
  return GRIP_DATABASE.filter(g => g.brand === brand);
}

function getGripById(id) {
  return GRIP_DATABASE.find(g => g.id === id);
}

function getGripsByType(type) {
  return GRIP_DATABASE.filter(g => g.type === type);
}
