// ラブテニ 軟式（ソフトテニス）ボールデータベース
//
// SPORT区分: このファイルは軟式（soft）専用データ。
//
// データについての注記:
// - 日本ソフトテニス連盟が公認するボールメーカーは、アカエム・ダンロップ・ケンコーの3社。
//   これにヨネックスの公認球を加えた実在の製品のみを掲載している（2026年9月時点の公開情報に基づく）。
// - 重量・直径等の詳細な物理数値は連盟規定によるが、本データでは未確認の数値を掲載しないため
//   仕様欄は年度・公認区分・特徴のみとしている。
const BALL_DATA_SPORT = 'soft';

const SOFT_BALL_BRANDS = ['YONEX', 'DUNLOP', 'アカエム', 'ケンコー'];

const SOFT_BALL_DATABASE = [
  { id: 'yx-tour-platinum', brand: 'YONEX', model: 'ツアープラチナム', official: true, searchKeyword: 'ヨネックス ツアープラチナム ソフトテニスボール 公認球', concept: '日本ソフトテニス連盟公認球。高いコントロール性と柔らかい打球感が特徴。2球入り・4球入りの缶で販売。' },
  { id: 'dunlop-koninkyu', brand: 'DUNLOP', model: '公認球（ホワイト）', official: true, searchKeyword: 'ダンロップ ソフトテニスボール 公認球', concept: '日本ソフトテニス連盟公認球。2球入り・1ダース・10ダース入りバスケットなど、部活・大会向けの大容量パッケージも用意。' },
  { id: 'akam-koninkyu', brand: 'アカエム', model: '公認球', official: true, searchKeyword: 'アカエム ソフトテニスボール 公認球', concept: '1890年創業、国内シェアNo.1の軟式ボール専業メーカー。高品質な天然ゴムを使用し、日本ソフトテニス連盟・国際ソフトテニス連盟の両方の公認を取得。' },
  { id: 'kenko-koninkyu', brand: 'ケンコー', model: '公認球', official: true, searchKeyword: 'ケンコー ソフトテニスボール 公認球', concept: '球技ボールメーカーとして長い実績を持つブランド。しっかりめの打球感が特徴と評される。' },
];

function getSoftBallById(id) {
  return SOFT_BALL_DATABASE.find(b => b.id === id);
}
