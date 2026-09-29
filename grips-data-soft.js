// ラブテニ 軟式（ソフトテニス）グリップテープデータベース
//
// SPORT区分: このファイルは軟式（soft）専用データ。grips-data.js（硬式/hard）とは
// 完全に分離しており、混在させない。
//
// データについての注記:
// - オーバーグリップテープは硬式・軟式で共通して使用される製品が多く、本データも
//   ソフトテニス用品店・公式サイトで「ソフトテニスにもおすすめ」として案内されている
//   実在の製品のみを掲載している（2026年9月時点の公開情報に基づく）。
const GRIP_DATA_SPORT = 'soft';

const SOFT_GRIP_BRANDS = ['YONEX', 'TOALSON'];

const SOFT_GRIP_BRAND_INFO = {
  'YONEX': { desc: '日本を代表する総合スポーツブランド。ウェットタイプのオーバーグリップは軟式・硬式を問わず定番。', color: '#8e44ad', tagline: 'JAPANESE PRECISION' },
  'TOALSON': { desc: '吸汗性能に優れたグリップテープで知られるストリング専業ブランド。', color: '#27ae60', tagline: 'GRIP TECHNOLOGY' },
};

const SOFT_GRIP_DATABASE = [
  { id: 'yx-ac102', brand: 'YONEX', model: 'AC102 ウェットスーパーグリップ（3本入）', type: 'オーバーグリップ', texture: 'ウェット', thickness: '0.6mm', colors: '複数色', year: 2023, searchKeyword: 'ヨネックス AC102 ウェットスーパーグリップ', concept: '厚み0.6mmで柔らかくしっかりとしたグリップ力を発揮するロングセラーモデル。吸汗性に優れ、長尺ラケットにも対応。' },
  { id: 'yx-ac135', brand: 'YONEX', model: 'AC135 ウェットスーパーストロンググリップ（3本入）', type: 'オーバーグリップ', texture: 'ウェット', thickness: null, colors: '複数色', year: 2023, searchKeyword: 'ヨネックス AC135 ウェットスーパーストロンググリップ', concept: 'AC102よりグリップ力を強化したモデル。汗をかきやすいプレーヤー向け。' },
  { id: 'yx-moist-super-grip', brand: 'YONEX', model: 'モイストスーパーグリップテープ', type: 'オーバーグリップ', texture: 'ウェット', thickness: null, colors: '複数色', year: 2023, searchKeyword: 'ヨネックス モイストスーパーグリップテープ', concept: 'すばやく汗を吸収し、しっとりとした握り心地が特徴。長尺にも対応。' },
  { id: 'ts-quick-dry-grip', brand: 'TOALSON', model: 'クイックドライグリップ', type: 'オーバーグリップ', texture: 'ウェット（速乾）', thickness: null, colors: '複数色', year: 2023, searchKeyword: 'トアルソン クイックドライグリップ', concept: 'ポリウレタンの吸水層に無数の微細な穴（ミクロポーラス）を持たせ、従来比約8倍の速さで汗を吸収する。' },
  { id: 'ts-ultra-grip', brand: 'TOALSON', model: 'ウルトラグリップ', type: 'オーバーグリップ', texture: 'ウェット', thickness: null, colors: '複数色', year: 2023, searchKeyword: 'トアルソン ウルトラグリップ', concept: '手のひらに心地よくフィットするソフトな握り心地。トッププロからビギナーまで幅広く使われている。' },
];

function getSoftGripById(id) {
  return SOFT_GRIP_DATABASE.find(g => g.id === id);
}
