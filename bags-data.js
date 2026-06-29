// ============================================================
// ラブテニ テニスバッグデータベース
// ============================================================

const BAG_BRANDS = ['Wilson', 'Babolat', 'HEAD', 'YONEX', 'Dunlop', 'Prince', 'Tecnifibre'];

const BAG_BRAND_INFO = {
  'Wilson': {
    desc: 'アメリカ発祥の総合スポーツブランド。Super Tourシリーズはプロ選手の間で最も使用されるトーナメントバッグ。大容量かつ機能的な収納設計が定評。',
    color: '#e74c3c', tagline: 'AMERICAN ICON'
  },
  'Babolat': {
    desc: 'フランス発祥の老舗テニスブランド。Pure Aero/Drive/Strikeの各シリーズバッグはラケットとのセットアップに人気。サーモガード搭載で炎天下のラケット保護も万全。',
    color: '#27ae60', tagline: 'FRENCH HERITAGE'
  },
  'HEAD': {
    desc: 'オーストリア発祥の世界トップブランド。Tour Teamシリーズはジョコビッチやズベレフらトッププロが愛用するフラッグシップ。機能性とスタイルを高次元で両立。',
    color: '#2c3e50', tagline: 'AUSTRIAN TRADITION'
  },
  'YONEX': {
    desc: '日本のトップブランド。国内プレーヤーに広く浸透し、機能的なポケット設計と耐久性が人気。Pro Tourシリーズはダブルスプレーヤーに最適な12本収納大型バッグ。',
    color: '#8e44ad', tagline: 'JAPANESE PRECISION'
  },
  'Dunlop': {
    desc: 'イギリス発祥の老舗スポーツブランド。CX Performanceシリーズはシンプルながら機能的な設計で練習・試合両用に使いやすいと評価が高い。',
    color: '#e67e22', tagline: 'BRITISH HERITAGE'
  },
  'Prince': {
    desc: 'アメリカ発祥の老舗ラケットブランド。Tour Teamシリーズはリーズナブルながら実用的なトーナメントバッグとして人気が高い。コスパ重視プレーヤーの定番。',
    color: '#7f8c8d', tagline: 'CLASSIC AMERICAN'
  },
  'Tecnifibre': {
    desc: 'フランス発祥のブランド。Tour Enduranceシリーズはプロテクトスポンジ付きラケットコンパートメントを採用し、ラケットを安全に運ぶための設計にこだわり抜いた逸品。',
    color: '#16a085', tagline: 'STRING SPECIALIST'
  }
};

const BAG_DATABASE = [
  // ========== Wilson ==========
  {
    id: 'wilson-super-tour-15',
    brand: 'Wilson',
    model: 'Super Tour 15 Pack',
    type: 'トーナメントバッグ',
    capacity: '15本',
    concept: '最大15本収納のプロ仕様最上位バッグ',
    description: 'Wilsonの最上位トーナメントバッグ。ラケット15本を収納できる大容量で、多くのプロが遠征に使用する定番バッグ。サーモガード搭載ラケットコンパートメント付き。',
    features: ['サーモガード内蔵', 'シューズコンパートメント', 'ウェットポケット', '15本収納'],
    searchKeyword: 'Wilson Super Tour 15 Pack テニスバッグ'
  },
  {
    id: 'wilson-super-tour-12',
    brand: 'Wilson',
    model: 'Super Tour 12 Pack',
    type: 'トーナメントバッグ',
    capacity: '12本',
    concept: 'プロ仕様・12本収納の定番トーナメントバッグ',
    description: 'Wilsonの定番大型トーナメントバッグ。ラケット12本収納でプロから一般プレーヤーまで幅広く支持される。独立したシューズコンパートメントで遠征も快適。',
    features: ['サーモガード内蔵', 'シューズコンパートメント', '12本収納'],
    searchKeyword: 'Wilson Super Tour 12 Pack テニスバッグ'
  },
  {
    id: 'wilson-super-tour-9',
    brand: 'Wilson',
    model: 'Super Tour 9 Pack',
    type: 'トーナメントバッグ',
    capacity: '9本',
    concept: 'コンパクトなプロ仕様9本収納バッグ',
    description: '9本収納の中型トーナメントバッグ。Super Tourシリーズの機能はそのままに、携帯しやすいサイズ感が人気の理由。普段使いから試合まで対応する万能バッグ。',
    features: ['サーモガード内蔵', '9本収納', '複数収納ポケット'],
    searchKeyword: 'Wilson Super Tour 9 Pack テニスバッグ'
  },
  {
    id: 'wilson-super-tour-6',
    brand: 'Wilson',
    model: 'Super Tour 6 Pack',
    type: 'トーナメントバッグ',
    capacity: '6本',
    concept: '普段使いしやすい6本収納モデル',
    description: '6本収納のミディアムサイズトーナメントバッグ。試合・練習どちらにも使いやすいサイズで、Super Tourシリーズの充実した機能を最もコンパクトに体験できる。',
    features: ['サーモガード内蔵', '6本収納'],
    searchKeyword: 'Wilson Super Tour 6 Pack テニスバッグ'
  },
  {
    id: 'wilson-tour-backpack',
    brand: 'Wilson',
    model: 'Tour Backpack',
    type: 'バックパック',
    capacity: '2本',
    concept: '日常使いに最適なデザインバックパック',
    description: 'Wilsonのスタイリッシュなバックパック。ラケット2本を収納でき、ポケット類も充実。電車や自転車での移動が多い都市部プレーヤーに人気のデザイン性の高いバッグ。',
    features: ['ラケット2本収納', 'ラップトップポケット', '軽量設計'],
    searchKeyword: 'Wilson Tour Backpack テニスバッグ'
  },
  {
    id: 'wilson-team-tote',
    brand: 'Wilson',
    model: 'Team III Tote',
    type: 'トートバッグ',
    capacity: '6本',
    concept: 'サブバッグにも使えるスタイリッシュトート',
    description: 'Wilsonのトートスタイルバッグ。ラケット6本収納可能で、日常のスタイルに馴染むデザインが特徴。軽めの練習や日帰り試合に最適。',
    features: ['6本収納', 'トートスタイル', '軽量'],
    searchKeyword: 'Wilson Team III Tote テニスバッグ'
  },

  // ========== Babolat ==========
  {
    id: 'babolat-pure-aero-rh12',
    brand: 'Babolat',
    model: 'Pure Aero RH12',
    type: 'トーナメントバッグ',
    capacity: '12本',
    concept: '全仏仕様・12本収納フラッグシップ',
    description: 'アルカラス・ナダルが使用するPure Aeroシリーズの最上位バッグ。ラケット12本収納のサーモガード付きラケットホルダー型。バッグ自体もスピン性能を想起させる鮮やかなデザイン。',
    features: ['サーモガード内蔵', '12本収納', 'RHモデル（横向き収納）'],
    searchKeyword: 'Babolat Pure Aero RH12 テニスバッグ'
  },
  {
    id: 'babolat-pure-strike-rh9',
    brand: 'Babolat',
    model: 'Pure Strike RH9',
    type: 'トーナメントバッグ',
    capacity: '9本',
    concept: 'Pure Strikeシリーズ9本収納ミディアムバッグ',
    description: '9本収納のミディアムサイズ。Pure Strikeの洗練されたデザインとサーモガードを継承。遠征から日常練習まで使いやすい絶妙なサイズ感。',
    features: ['サーモガード内蔵', '9本収納', '複数ポケット'],
    searchKeyword: 'Babolat Pure Strike RH9 テニスバッグ'
  },
  {
    id: 'babolat-pure-drive-backpack',
    brand: 'Babolat',
    model: 'Pure Drive Backpack',
    type: 'バックパック',
    capacity: '2本',
    concept: 'Pure Driveラインの人気バックパック',
    description: 'Babolatの人気バックパック。ラケット2本収納のコンパクトなスタイルで学生から社会人まで人気。オールブルーのPure Driveデザインが街中でも映える。',
    features: ['ラケット2本収納', '軽量コンパクト', 'ラップトップポケット'],
    searchKeyword: 'Babolat Pure Drive Backpack テニスバッグ'
  },
  {
    id: 'babolat-team-backpack',
    brand: 'Babolat',
    model: 'Team Backpack',
    type: 'バックパック',
    capacity: '2本',
    concept: 'コスパ重視のエントリーバックパック',
    description: 'Babolatのエントリーバックパック。シンプルなデザインでテニスをはじめた方や学生に人気。ラケット2本収納と必要十分な収納ポケットを備える。',
    features: ['ラケット2本収納', 'シンプル設計', 'コスパ重視'],
    searchKeyword: 'Babolat Team Backpack テニスバッグ'
  },
  {
    id: 'babolat-pure-aero-rh6',
    brand: 'Babolat',
    model: 'Pure Aero RH6',
    type: 'トーナメントバッグ',
    capacity: '6本',
    concept: 'Pure Aeroシリーズのコンパクトモデル',
    description: '6本収納のミディアムサイズPure Aeroバッグ。サーモガード付きで日帰り試合から練習まで幅広く対応。Pure Aeroシリーズのデザインを普段使いサイズで体験できる。',
    features: ['サーモガード内蔵', '6本収納'],
    searchKeyword: 'Babolat Pure Aero RH6 テニスバッグ'
  },

  // ========== HEAD ==========
  {
    id: 'head-tour-team-12r',
    brand: 'HEAD',
    model: 'Tour Team 12R',
    type: 'トーナメントバッグ',
    capacity: '12本',
    concept: 'ジョコビッチ使用・12本収納フラッグシップ',
    description: 'ジョコビッチやズベレフが使用するHEADのトップバッグ。ラケット12本収納でサーモガード搭載のラケットコンパートメント、大容量メインポケット、シューズポケットを装備したプロ仕様。',
    features: ['サーモガード内蔵', '12本収納', 'シューズコンパートメント'],
    searchKeyword: 'HEAD Tour Team 12R テニスバッグ'
  },
  {
    id: 'head-pro-x-12r',
    brand: 'HEAD',
    model: 'Pro X 12R',
    type: 'トーナメントバッグ',
    capacity: '12本',
    concept: 'プレミアムラインの12本収納バッグ',
    description: 'HEADのプレミアムラインProXシリーズのトーナメントバッグ。高級感あるデザインと充実した機能で、Tour Teamよりワンランク上の質感を求める選手向け。',
    features: ['サーモガード内蔵', '12本収納', 'プレミアム素材'],
    searchKeyword: 'HEAD Pro X 12R テニスバッグ'
  },
  {
    id: 'head-speed-12r',
    brand: 'HEAD',
    model: 'Speed 12R',
    type: 'トーナメントバッグ',
    capacity: '12本',
    concept: 'Speedシリーズ12本収納・シナー仕様',
    description: 'シナーが愛用するHEAD Speedシリーズのバッグ。12本収納の大型モデルでブルー×オレンジのSpeedカラーが印象的。サーモガード内蔵でプロ仕様の品質を誇る。',
    features: ['サーモガード内蔵', '12本収納', 'Speedカラー'],
    searchKeyword: 'HEAD Speed 12R テニスバッグ'
  },
  {
    id: 'head-djokovic-12r',
    brand: 'HEAD',
    model: 'Djokovic Monstercombi 12R',
    type: 'トーナメントバッグ',
    capacity: '12本',
    concept: 'ジョコビッチシグネチャー超大型バッグ',
    description: 'ジョコビッチのシグネチャーモデル。Monstercomiと呼ばれる超大型設計で、遠征に必要なすべての用品を1つのバッグに収められるツアー選手のための究極バッグ。',
    features: ['サーモガード内蔵', '12本収納', 'Djokovic限定デザイン'],
    searchKeyword: 'HEAD Djokovic Monstercombi テニスバッグ'
  },
  {
    id: 'head-tour-team-backpack',
    brand: 'HEAD',
    model: 'Tour Team Backpack',
    type: 'バックパック',
    capacity: '2本',
    concept: 'Tour Teamシリーズの機能的バックパック',
    description: 'Tour Teamのデザインをバックパック型に。ラケット2本収納でPCポケット付き、通勤・通学とテニスを両立するプレーヤーに人気の一品。',
    features: ['ラケット2本収納', 'PCポケット', '軽量'],
    searchKeyword: 'HEAD Tour Team Backpack テニスバッグ'
  },

  // ========== YONEX ==========
  {
    id: 'yonex-pro-tour-bag',
    brand: 'YONEX',
    model: 'Pro Tournament Bag',
    type: 'トーナメントバッグ',
    capacity: '12本',
    concept: 'YONEX最上位・12本収納プロトーナメント仕様',
    description: 'YONEXのフラッグシップバッグ。ラケット12本収納でプロ公式試合にも対応する最高品質モデル。日本製らしい精密なポケット設計と素材の上質さが際立つ。',
    features: ['サーモガード内蔵', '12本収納', 'ウォータープルーフ底面'],
    searchKeyword: 'ヨネックス Pro Tournament Bag テニスバッグ'
  },
  {
    id: 'yonex-team-bag-9r',
    brand: 'YONEX',
    model: 'Team Bag 9R',
    type: 'トーナメントバッグ',
    capacity: '9本',
    concept: '国内定番・9本収納の使いやすいバッグ',
    description: 'YONEXの定番中型トーナメントバッグ。9本収納で日常練習から週末試合まで使いやすい絶妙なサイズ。国内テニス愛好家に最も普及しているモデルの一つ。',
    features: ['9本収納', '多機能ポケット', '日常使い向け'],
    searchKeyword: 'ヨネックス Team Bag 9R テニスバッグ'
  },
  {
    id: 'yonex-active-backpack',
    brand: 'YONEX',
    model: 'Active Backpack',
    type: 'バックパック',
    capacity: '2本',
    concept: '軽量コンパクトなYONEXバックパック',
    description: 'YONEXの軽量バックパック。ラケット2本収納でコンパクト設計。学生・社会人問わず日常テニスに最適なデザインと機能性を持つ定番モデル。',
    features: ['ラケット2本収納', '軽量設計', 'コンパクト'],
    searchKeyword: 'ヨネックス Active Backpack テニスバッグ'
  },
  {
    id: 'yonex-performance-backpack',
    brand: 'YONEX',
    model: 'Performance Backpack',
    type: 'バックパック',
    capacity: '2本',
    concept: '機能重視のプレミアムバックパック',
    description: 'Active Backpackの上位機種。より大きな収納容量とPC対応ポケットを追加し、テニス以外の日常シーンでも使えるプレミアムバックパック。',
    features: ['ラケット2本収納', 'PCポケット', '多機能収納'],
    searchKeyword: 'ヨネックス Performance Backpack テニスバッグ'
  },

  // ========== Dunlop ==========
  {
    id: 'dunlop-cx-performance-15',
    brand: 'Dunlop',
    model: 'CX Performance 15 Pack',
    type: 'トーナメントバッグ',
    capacity: '15本',
    concept: 'Dunlop最大容量・遠征対応15本バッグ',
    description: 'DunlopのCXシリーズ最大容量バッグ。ラケット15本収納で長期遠征にも対応。フライパッド付きで航空機の荷物室での輸送も安心な設計。',
    features: ['15本収納', 'フライパッド対応', 'シューズコンパートメント'],
    searchKeyword: 'Dunlop CX Performance 15 テニスバッグ'
  },
  {
    id: 'dunlop-cx-performance-12',
    brand: 'Dunlop',
    model: 'CX Performance 12 Pack',
    type: 'トーナメントバッグ',
    capacity: '12本',
    concept: 'Dunlopスタンダード・12本収納定番バッグ',
    description: 'Dunlopの定番12本収納トーナメントバッグ。シンプルで使いやすいデザインと充実した収納で、日本のプレーヤーに広く使用されている信頼のモデル。',
    features: ['12本収納', 'サーモガード内蔵', 'シューズポケット'],
    searchKeyword: 'Dunlop CX Performance 12 テニスバッグ'
  },
  {
    id: 'dunlop-cx-performance-backpack',
    brand: 'Dunlop',
    model: 'CX Performance Backpack',
    type: 'バックパック',
    capacity: '2本',
    concept: 'CXシリーズのコンパクトバックパック',
    description: 'CXシリーズのデザインをバックパックに。ラケット2本収納でシンプル使いやすい。日常使いと試合をバランスよく使いたいプレーヤーの定番バッグ。',
    features: ['ラケット2本収納', 'シンプル設計', '軽量'],
    searchKeyword: 'Dunlop CX Performance Backpack テニスバッグ'
  },

  // ========== Prince ==========
  {
    id: 'prince-tour-team-12',
    brand: 'Prince',
    model: 'Tour Team 12 Pack',
    type: 'トーナメントバッグ',
    capacity: '12本',
    concept: 'コスパ重視の12本収納バッグ',
    description: 'Princeのリーズナブルな12本収納トーナメントバッグ。必要な機能をシンプルにまとめたコスパに優れたモデル。学生や趣味のプレーヤーに人気の入門バッグ。',
    features: ['12本収納', 'コスパ重視', 'シンプル設計'],
    searchKeyword: 'Prince Tour Team 12 Pack テニスバッグ'
  },
  {
    id: 'prince-tour-team-9',
    brand: 'Prince',
    model: 'Tour Team 9 Pack',
    type: 'トーナメントバッグ',
    capacity: '9本',
    concept: 'Princeのベーシック9本収納バッグ',
    description: '9本収納のコスパモデル。日常練習から小規模大会まで対応する使いやすいサイズで、Princeのラケットとのセットアップにも人気。',
    features: ['9本収納', 'コスパ重視'],
    searchKeyword: 'Prince Tour Team 9 Pack テニスバッグ'
  },
  {
    id: 'prince-tour-team-backpack',
    brand: 'Prince',
    model: 'Tour Team Backpack',
    type: 'バックパック',
    capacity: '2本',
    concept: 'Princeのシンプルバックパック',
    description: 'Princeのエントリーバックパック。2本収納のシンプル設計でリーズナブルな価格帯。テニスをはじめた方の最初のバッグとして最適。',
    features: ['ラケット2本収納', 'コスパ重視'],
    searchKeyword: 'Prince Tour Team Backpack テニスバッグ'
  },

  // ========== Tecnifibre ==========
  {
    id: 'tecnifibre-tour-endurance-15rs',
    brand: 'Tecnifibre',
    model: 'Tour Endurance 15R RS',
    type: 'トーナメントバッグ',
    capacity: '15本',
    concept: 'プロ仕様のフラッグシップ超大型バッグ',
    description: 'Tecnifibreのプロ向け最上位バッグ。15本収納のRS（Remote System）モデルは、プロテクトスポンジ付きラケットコンパートメントでラケットを守る。ムゾルのコーチやプロが愛用。',
    features: ['15本収納', 'プロテクトスポンジ', 'RS仕様'],
    searchKeyword: 'Tecnifibre Tour Endurance 15R RS テニスバッグ'
  },
  {
    id: 'tecnifibre-tour-endurance-12rs',
    brand: 'Tecnifibre',
    model: 'Tour Endurance 12R RS',
    type: 'トーナメントバッグ',
    capacity: '12本',
    concept: '12本収納の定番Tecnifibreトーナメントバッグ',
    description: '12本収納のプレミアムトーナメントバッグ。プロテクトスポンジ仕様で衝撃からラケットを守り、大型ウェットポケットと多機能収納を備えたプロ仕様のデザイン。',
    features: ['12本収納', 'プロテクトスポンジ', 'ウェットポケット'],
    searchKeyword: 'Tecnifibre Tour Endurance 12R RS テニスバッグ'
  },
  {
    id: 'tecnifibre-tour-endurance-backpack',
    brand: 'Tecnifibre',
    model: 'Tour Endurance RS Backpack',
    type: 'バックパック',
    capacity: '2本',
    concept: 'Tecnifibreのスタイリッシュバックパック',
    description: '2本収納のプレミアムバックパック。Tecnifibreのスタイリッシュなデザインとプロテクトスポンジ内蔵の高品質を日常に。PCポケット付きで通勤・通学にも対応。',
    features: ['ラケット2本収納', 'プロテクトスポンジ', 'PCポケット'],
    searchKeyword: 'Tecnifibre Tour Endurance RS Backpack テニスバッグ'
  }
];

// ブランド別フィルター
function getBagsByBrand(brand) {
  return BAG_DATABASE.filter(b => b.brand === brand);
}

// タイプ別フィルター
function getBagsByType(type) {
  return BAG_DATABASE.filter(b => b.type === type);
}
