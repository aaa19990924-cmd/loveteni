// ラブテニ 軟式（ソフトテニス）ラケットデータベース
//
// SPORT区分: このファイルは軟式（soft）専用データ。racket-data.js（硬式/hard）とは
// 完全に分離しており、混在させない。
//
// データについての注記:
// - ブランド・モデル名は実在する現行ラインナップを調査のうえ掲載（2026年9月時点の公開情報に基づく）。
// - ブリヂストンは2020年12月末にテニス事業から撤退しており、現行の軟式ラケットが存在しないため、
//   本データには含めていない（実在しない商品を掲載しないため）。
// - プリンスについても、現行の軟式（ソフトテニス）ラケットラインナップを一次情報で確認できなかったため、
//   誤情報を避けるため今回は掲載を見送っている。
// - weightMin/weightMax/balance等は、公式サイト・正規販売店の商品ページで確認できた数値のみを記載し、
//   確認できていない項目は null のままにしている（未確認の数値を推測で埋めない）。
//   軟式ラケットは同じモデルでもグリップサイズ（0/1/2等）によってフレーム重量が変わるため、
//   weightMin〜weightMaxで幅を持たせて表現している。
const RACKET_DATA_SPORT = 'soft';

const SOFT_RACKET_BRANDS = ['YONEX', 'Mizuno'];

const SOFT_RACKET_DATABASE = [
  // ============================================================
  // ========== YONEX / GEOBREAK（ジオブレイク） ==========
  // ============================================================
  { id: 'yx-geobreak-80s', brand: 'YONEX', series: 'GEOBREAK', model: 'GEOBREAK 80S', searchKeyword: 'ヨネックス ジオブレイク80S ソフトテニスラケット', position: '後衛', level: '上級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: null, tensionMax: null, headSize: null, year: 2024, concept: 'スピン性能・ボールの食いつき・コントロール性を高いレベルで両立するジオブレイクシリーズの最上位モデル。後衛の粘り強いストローク戦を支える一本。' },
  { id: 'yx-geobreak-80v', brand: 'YONEX', series: 'GEOBREAK', model: 'GEOBREAK 80V', searchKeyword: 'ヨネックス ジオブレイク80V ソフトテニスラケット', position: '前衛', level: '上級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: null, tensionMax: null, headSize: null, year: 2024, concept: 'ジオブレイク最上位モデルの前衛用。高いボールコントロール性能でネットプレーの精度を高める。' },
  { id: 'yx-geobreak-70s', brand: 'YONEX', series: 'GEOBREAK', model: 'GEOBREAK 70S', searchKeyword: 'ヨネックス ジオブレイク70S ソフトテニスラケット', position: '後衛', level: '中級', weightMin: 216, weightMax: 245, balance: null, gripSizes: '00/0/1/2', length: 690, tensionMin: 25, tensionMax: 35, headSize: null, year: 2023, concept: '中上級者向けオールラウンドシリーズ「ジオブレイク70」の後衛用。安定したコントロール性能で組み立て力を支える。' },
  { id: 'yx-geobreak-70v', brand: 'YONEX', series: 'GEOBREAK', model: 'GEOBREAK 70V', searchKeyword: 'ヨネックス ジオブレイク70V ソフトテニスラケット', position: '前衛', level: '中級', weightMin: 216, weightMax: 245, balance: 282, gripSizes: '00/0/1/2', length: 690, tensionMin: 25, tensionMax: 35, headSize: null, year: 2023, concept: '高強度カーボン＋リアクトレジン＋2G-Namd構造の中上級者向け前衛モデル。オールポジション対応の人気シリーズ。' },
  { id: 'yx-geobreak-70vs', brand: 'YONEX', series: 'GEOBREAK', model: 'GEOBREAK 70VS（バーサス）', searchKeyword: 'ヨネックス ジオブレイク70VS ソフトテニスラケット', position: 'オールラウンド', level: '中級', weightMin: 216, weightMax: 245, balance: null, gripSizes: '00/0/1/2', length: 690, tensionMin: 25, tensionMax: 35, headSize: null, year: 2024, concept: '前衛・後衛どちらのポジションにも対応するオールラウンドモデル。ポジションが定まっていない中学生の1本目にも。' },
  { id: 'yx-geobreak-50s', brand: 'YONEX', series: 'GEOBREAK', model: 'GEOBREAK 50S', searchKeyword: 'ヨネックス ジオブレイク50S ソフトテニスラケット', position: '後衛', level: '初級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: null, tensionMax: null, headSize: null, year: 2023, concept: 'ジオブレイクシリーズのエントリーモデル。1万円台から購入できる後衛向けの入門機。' },
  { id: 'yx-geobreak-50v', brand: 'YONEX', series: 'GEOBREAK', model: 'GEOBREAK 50V', searchKeyword: 'ヨネックス ジオブレイク50V ソフトテニスラケット', position: '前衛', level: '初級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: null, tensionMax: null, headSize: null, year: 2023, concept: 'ジオブレイクシリーズのエントリーモデル前衛用。振りやすさ重視で部活の入部シーズンに選びやすい。' },
  { id: 'yx-geobreak-50vs', brand: 'YONEX', series: 'GEOBREAK', model: 'GEOBREAK 50VS（バーサス）', searchKeyword: 'ヨネックス ジオブレイク50VS ソフトテニスラケット', position: 'オールラウンド', level: '初級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: null, tensionMax: null, headSize: null, year: 2023, concept: 'ジオブレイクのエントリー・オールラウンドモデル。部活のはじめの1本としても選びやすい価格帯。' },

  // ============================================================
  // ========== YONEX / VOLTRAGE（ボルトレイジ） ==========
  // ============================================================
  { id: 'yx-voltrage-8s', brand: 'YONEX', series: 'VOLTRAGE', model: 'VOLTRAGE 8S', searchKeyword: 'ヨネックス ボルトレイジ8S ソフトテニスラケット', position: '後衛', level: '上級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: null, tensionMax: null, headSize: null, year: 2026, concept: '弾きとスピードに特化した攻撃型シリーズ「ボルトレイジ」の最上位モデル。SWELL SHAFT構造採用。' },
  { id: 'yx-voltrage-8v', brand: 'YONEX', series: 'VOLTRAGE', model: 'VOLTRAGE 8V', searchKeyword: 'ヨネックス ボルトレイジ8V ソフトテニスラケット', position: '前衛', level: '上級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: null, tensionMax: null, headSize: null, year: 2026, concept: 'ボルトレイジ最上位モデルの前衛用。2026年7月発売の新フェイス形状で弾きを追求。' },
  { id: 'yx-voltrage-7s', brand: 'YONEX', series: 'VOLTRAGE', model: 'VOLTRAGE 7S', searchKeyword: 'ヨネックス ボルトレイジ7S ソフトテニスラケット', position: '後衛', level: '中級', weightMin: null, weightMax: null, balance: 290, gripSizes: null, length: 690, tensionMin: 20, tensionMax: 30, headSize: 90, year: 2023, concept: '高強度カーボン＋リアクトレジン＋トレカM46X構造のストローク重視モデル。攻撃的なグラウンドストロークを支える後衛用。' },
  { id: 'yx-voltrage-7v', brand: 'YONEX', series: 'VOLTRAGE', model: 'VOLTRAGE 7V', searchKeyword: 'ヨネックス ボルトレイジ7V ソフトテニスラケット', position: '前衛', level: '中級', weightMin: null, weightMax: null, balance: 270, gripSizes: null, length: 685, tensionMin: 20, tensionMax: 30, headSize: 90, year: 2023, concept: '従来モデルより全長5mm短く設計し振りやすさを高めた前衛モデル。高弾性カーボン＋Namd構造で弾きも両立。' },
  { id: 'yx-voltrage-7vs', brand: 'YONEX', series: 'VOLTRAGE', model: 'VOLTRAGE 7VS（バーサス）', searchKeyword: 'ヨネックス ボルトレイジ7VS ソフトテニスラケット', position: 'オールラウンド', level: '中級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: 20, tensionMax: 30, headSize: 90, year: 2023, concept: 'ボルトレイジ7シリーズのオールラウンドモデル。前衛・後衛どちらも視野に入れたいプレーヤーに。' },
  { id: 'yx-voltrage-5s', brand: 'YONEX', series: 'VOLTRAGE', model: 'VOLTRAGE 5S', searchKeyword: 'ヨネックス ボルトレイジ5S ソフトテニスラケット', position: '後衛', level: '初級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: null, tensionMax: null, headSize: null, year: 2026, concept: '2026年3月発売の新シリーズ。全長を従来より5mm短く設計し振りやすさを高めた入門〜中級向けモデル。' },
  { id: 'yx-voltrage-5v', brand: 'YONEX', series: 'VOLTRAGE', model: 'VOLTRAGE 5V', searchKeyword: 'ヨネックス ボルトレイジ5V ソフトテニスラケット', position: '前衛', level: '初級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: null, tensionMax: null, headSize: null, year: 2026, concept: 'ボルトレイジ5シリーズの前衛用。軽やかな弾きとクリアな打球音がコンセプト。' },

  // ============================================================
  // ========== YONEX / エントリーモデル ==========
  // ============================================================
  { id: 'yx-soar-1', brand: 'YONEX', series: 'SOAR', model: 'SOAR-1（ソア）', searchKeyword: 'ヨネックス ソア SOAR-1 ソフトテニスラケット', position: 'オールラウンド', level: '初級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: null, tensionMax: null, headSize: null, year: 2026, concept: '柔らかい打球感とボールを楽に飛ばす飛距離性能が特長の入門者向け全ポジション対応モデル。初めてのラケットにおすすめ。' },

  // ============================================================
  // ========== Mizuno / DUALSTRIKE（デュアルストライク） ==========
  // ============================================================
  { id: 'mz-dualstrike-v50', brand: 'Mizuno', series: 'DUALSTRIKE', model: 'デュアルストライク V-50', searchKeyword: 'ミズノ デュアルストライク V-50 ソフトテニスラケット', position: '前衛', level: '中級', weightMin: null, weightMax: null, balance: 290, gripSizes: null, length: 690, tensionMin: 25, tensionMax: 35, headSize: null, year: 2026, concept: '2026年発売の新シリーズ「デュアルストライク」前衛モデル。ストリングパターン16×17で弾きとコントロールを両立。' },
  { id: 'mz-dualstrike-s50', brand: 'Mizuno', series: 'DUALSTRIKE', model: 'デュアルストライク S-50', searchKeyword: 'ミズノ デュアルストライク S-50 ソフトテニスラケット', position: '後衛', level: '中級', weightMin: 223, weightMax: 223, balance: 290, gripSizes: null, length: 690, tensionMin: 25, tensionMax: 35, headSize: null, year: 2026, concept: 'デュアルストライクシリーズの後衛モデル。安定したグラウンドストロークをサポートするパワー系設計。' },
  { id: 'mz-dualstrike-vs50', brand: 'Mizuno', series: 'DUALSTRIKE', model: 'デュアルストライク VS-50', searchKeyword: 'ミズノ デュアルストライク VS-50 ソフトテニスラケット', position: 'オールラウンド', level: '中級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: 690, tensionMin: 25, tensionMax: 35, headSize: null, year: 2026, concept: 'デュアルストライクのオールラウンドモデル。ポジションを問わず扱いやすいバランス設計。' },
  { id: 'mz-acrospeed-v01', brand: 'Mizuno', series: 'ACROSPEED', model: 'アクロスピード V-01', searchKeyword: 'ミズノ アクロスピード V-01 ソフトテニスラケット', position: '前衛', level: '上級', weightMin: 223, weightMax: 223, balance: 280, gripSizes: null, length: 685, tensionMin: null, tensionMax: null, headSize: null, year: 2025, concept: 'スピードタイプの「アクロスピード」シリーズ最上位モデル。前衛の素早い反応・ボレー性能を追求。' },
  { id: 'mz-acrospeed-v05', brand: 'Mizuno', series: 'ACROSPEED', model: 'アクロスピード V-05', searchKeyword: 'ミズノ アクロスピード V-05 ソフトテニスラケット', position: '前衛', level: '中級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: null, tensionMax: null, headSize: null, year: 2025, concept: 'アクロスピードシリーズの中級者向け前衛モデル。スピード系のシャープな振り抜きが持ち味。' },
  { id: 'mz-acrospeed-vs05', brand: 'Mizuno', series: 'ACROSPEED', model: 'アクロスピード VS-05', searchKeyword: 'ミズノ アクロスピード VS-05 ソフトテニスラケット', position: 'オールラウンド', level: '中級', weightMin: null, weightMax: null, balance: null, gripSizes: null, length: null, tensionMin: null, tensionMax: null, headSize: null, year: 2025, concept: 'アクロスピードのオールラウンドモデル。スピード系の軽快な振り抜きをポジションを問わず楽しめる。' },
  { id: 'mz-dforce-vs50', brand: 'Mizuno', series: 'D-FORCE', model: 'ディーフォース VS-50', searchKeyword: 'ミズノ ディーフォース VS-50 ソフトテニスラケット', position: 'オールラウンド', level: '中級', weightMin: 208, weightMax: 208, balance: 305, gripSizes: null, length: 690, tensionMin: null, tensionMax: null, headSize: null, year: 2024, concept: 'パワータイプの「ディーフォース」シリーズのオールラウンドモデル。トップヘビーなバランスで打球にパワーを乗せやすい。' },
];

function getSoftRacketById(id) {
  return SOFT_RACKET_DATABASE.find(r => r.id === id);
}
