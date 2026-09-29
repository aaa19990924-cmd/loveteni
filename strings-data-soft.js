// ラブテニ 軟式（ソフトテニス）ガットデータベース
//
// SPORT区分: このファイルは軟式（soft）専用データ。strings-data.js（硬式/hard）とは
// 完全に分離しており、混在させない。
//
// データについての注記:
// - 実在するブランド・製品名を調査のうえ掲載（2026年9月時点の公開情報に基づく）。
// - gauge・素材等は公式サイト・正規販売店ページで確認できた情報のみを記載し、
//   確認できていない項目は null にしている（推測で埋めない）。
const STRING_DATA_SPORT = 'soft';

const SOFT_STRING_BRANDS = ['YONEX', 'GOSEN', 'TOALSON'];

const SOFT_STRING_BRAND_INFO = {
  'YONEX': { desc: '日本を代表する総合スポーツブランド。「サイバーナチュラル」シリーズは軟式ガットの定番として長年高い支持を得ている。', color: '#8e44ad', tagline: 'JAPANESE PRECISION' },
  'GOSEN': { desc: 'ガット専業メーカーとして高いシェアを持つ国内ブランド。独自のG.U.M.COATING（ガムコーティング）技術による打球感と耐久性の両立が特長。', color: '#e74c3c', tagline: 'STRING SPECIALIST' },
  'TOALSON': { desc: '国内外のトッププレーヤーにも使用されるストリング専業ブランド。「アスタリスタ」シリーズはスピン性能と柔らかい打球感で人気。', color: '#27ae60', tagline: 'STRING TECHNOLOGY' },
};

const SOFT_STRING_DATABASE = [
  // ============================================================
  // ========== YONEX ==========
  // ============================================================
  { id: 'yx-cybernatural-sharp-125', brand: 'YONEX', model: 'サイバーナチュラル シャープ 125', type: 'ナイロン（モノフィラメント）', gauge: '1.25mm', gaugeNum: 1.25, length: '11m', year: 2024, searchKeyword: 'ヨネックス サイバーナチュラルシャープ CSG550SP ソフトテニスガット', concept: '高速ボレー・鋭いレシーブに特化した、発売以来評価の高いベストセラーモデル。芯糸・側糸ともにハイポリマーナイロン＋シリコーンコンポジット構造で鋭い弾きを実現。' },
  { id: 'yx-cybernatural-gale-125', brand: 'YONEX', model: 'サイバーナチュラル ゲイル 125', type: 'ナイロン（モノフィラメント）', gauge: '1.25mm', gaugeNum: 1.25, length: null, year: 2024, searchKeyword: 'ヨネックス サイバーナチュラルゲイル ソフトテニスガット', concept: 'サイバーナチュラルシリーズのバリエーションモデル。定番のシャープと並ぶ人気を持つ一本。' },

  // ============================================================
  // ========== GOSEN ==========
  // ============================================================
  { id: 'gs-ogsheep-msforce-125', brand: 'GOSEN', model: 'オージーシープ MSフォース', type: 'ナイロン（高分子ブレンド）', gauge: '1.25mm', gaugeNum: 1.25, length: null, year: 2023, searchKeyword: 'ゴーセン オージーシープ MSフォース ソフトテニスガット', concept: '定評ある「OG-SHEEP」の芯糸をスリム化し、NFX（Neo FleXible）コーティングでソフト感を向上。打球感を硬くせずに反発力を獲得したスタンダードモデル。' },
  { id: 'gs-gumboost', brand: 'GOSEN', model: 'G.U.M.COATING ガムブースト', type: 'ナイロン', gauge: null, gaugeNum: null, length: null, year: 2023, searchKeyword: 'ゴーセン ガムブースト GUM BOOST ソフトテニスガット', concept: '特殊ゴム樹脂コーティング「G.U.M.COATING」によりコントロール性を追求したナイロンガット。' },
  { id: 'gs-gumenergy', brand: 'GOSEN', model: 'G.U.M.COATING ガムエナジー', type: 'ナイロン', gauge: null, gaugeNum: null, length: null, year: 2023, searchKeyword: 'ゴーセン ガムエナジー GUM ENERGY ソフトテニスガット', concept: 'ガムコーティングにデュアルエナジーコア構造を組み合わせ、ホールド感と高反発・高打球音を両立したモデル。' },
  { id: 'gs-risingstorm', brand: 'GOSEN', model: 'ライジングストーム', type: 'ポリエステル', gauge: null, gaugeNum: null, length: null, year: 2023, searchKeyword: 'ゴーセン ライジングストーム ソフトテニスガット', concept: 'プロ仕様のポリエステル系モデル。高い反発性能を求める上級者向け。' },
  { id: 'gs-sonicblow', brand: 'GOSEN', model: 'ソニックブロー', type: 'ポリエステル', gauge: null, gaugeNum: null, length: null, year: 2023, searchKeyword: 'ゴーセン ソニックブロー ソフトテニスガット', concept: 'プロ仕様のポリエステル系モデル。独特の打球感を求める上級者向け。' },

  // ============================================================
  // ========== TOALSON ==========
  // ============================================================
  { id: 'ts-asterista-125', brand: 'TOALSON', model: 'アスタリスタ 125', type: 'ナイロン', gauge: '1.25mm', gaugeNum: 1.25, length: null, year: 2023, searchKeyword: 'トアルソン アスタリスタ 125 ソフトテニスガット', concept: 'スタンダードなナイロンモデル。柔らかい打球感で扱いやすく、幅広いレベルのプレーヤーに支持される。' },
  { id: 'ts-asterista-130', brand: 'TOALSON', model: 'アスタリスタ 130', type: 'ナイロン', gauge: '1.30mm', gaugeNum: 1.30, length: null, year: 2023, searchKeyword: 'トアルソン アスタリスタ 130 ソフトテニスガット', concept: '125よりゲージを太くし、耐久性を高めたモデル。張り替え頻度を抑えたいプレーヤーに。' },
  { id: 'ts-asterista-tour', brand: 'TOALSON', model: 'アスタリスタ ツアー', type: 'ナイロン', gauge: null, gaugeNum: null, length: null, year: 2023, searchKeyword: 'トアルソン アスタリスタツアー ソフトテニスガット', concept: 'スタンダードなアスタリスタにスピン性能を強化したモデル。表面の特殊な波形コーティングがボールに強い食いつきを生む。' },
  { id: 'ts-asterista-armored', brand: 'TOALSON', model: 'アスタリスタ アーマード', type: 'ナイロン', gauge: null, gaugeNum: null, length: null, year: 2023, searchKeyword: 'トアルソン アスタリスタアーマード ソフトテニスガット', concept: 'ナイロンでありながらポリエステルのような使用感を持たせたモデル。耐久性とコントロール性を重視するプレーヤーに。' },
];

function getSoftStringById(id) {
  return SOFT_STRING_DATABASE.find(s => s.id === id);
}
