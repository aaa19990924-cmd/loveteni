// ============================================================
// ラブテニ テニスボールデータベース
// ============================================================

const BALL_BRANDS = ['Wilson', 'Babolat', 'Dunlop', 'HEAD', 'YONEX', 'Tecnifibre'];

const BALL_BRAND_INFO = {
  'Wilson': {
    desc: 'アメリカ発祥の総合スポーツブランド。US OPENシリーズは全米オープンの公式球として世界中のプレーヤーに愛用される。Trinitはプレッシャーレス技術で従来球の常識を覆した革新作。',
    color: '#e74c3c', tagline: 'AMERICAN STANDARD',
    official: '全米オープン公式'
  },
  'Babolat': {
    desc: 'フランス発祥の老舗テニスブランド。Goldシリーズは全仏オープンの公式球。クレーコートの本場フランスが生んだ高品質プレミアムボール。',
    color: '#27ae60', tagline: 'FRENCH HERITAGE',
    official: '全仏オープン公式'
  },
  'Dunlop': {
    desc: 'イギリス発祥の老舗スポーツブランド。Fortシリーズは全豪オープンをはじめ世界中のプロツアーで使用される実績あるプレミアムボール。',
    color: '#e67e22', tagline: 'BRITISH HERITAGE',
    official: '全豪オープン公式'
  },
  'HEAD': {
    desc: 'オーストリア発祥の世界トップブランド。ATP Tourシリーズは数多くのATPマスターズ大会の公式球として採用。フェルトの持続性と安定した飛びが特徴。',
    color: '#2c3e50', tagline: 'AUSTRIAN TRADITION',
    official: 'ATPツアー公式'
  },
  'YONEX': {
    desc: '日本を代表するテニスブランド。国内大会の定番ボールとして広く普及。日本のコートサーフェスに合わせた設計で、国内プレーヤーに高い信頼を得ている。',
    color: '#8e44ad', tagline: 'JAPANESE PRECISION',
    official: null
  },
  'Tecnifibre': {
    desc: 'フランス発祥のガット・ボール専門ブランド。TF-X1は独自技術で耐久性と品質を高いレベルで両立させた次世代プレッシャーボール。',
    color: '#16a085', tagline: 'FRENCH INNOVATION',
    official: null
  }
};

const BALL_DATABASE = [
  // ========== Wilson ==========
  {
    id: 'wilson-us-open-extra-duty',
    brand: 'Wilson',
    model: 'US OPEN Extra Duty',
    type: 'プレッシャー',
    surface: ['ハード'],
    official: '全米オープン公式',
    concept: '全米オープン公式・ハードコートの王道',
    description: '全米オープンの公式採用球。耐久性フェルトとBraided Coreで安定した飛びを実現。世界中のハードコートプレーヤーの定番。',
    searchKeyword: 'ウィルソン US OPEN テニスボール',
    year: 2024
  },
  {
    id: 'wilson-us-open-regular-duty',
    brand: 'Wilson',
    model: 'US OPEN Regular Duty',
    type: 'プレッシャー',
    surface: ['クレー', 'オムニ', '室内'],
    official: null,
    concept: 'ソフトフェルトでクレー・室内向け',
    description: 'Extra Dutyより薄いフェルトを使用。クレーコートや室内コートでの使用に最適で、弾みが穏やかでコントロールしやすい。',
    searchKeyword: 'ウィルソン テニスボール クレー',
    year: 2024
  },
  {
    id: 'wilson-championship-extra-duty',
    brand: 'Wilson',
    model: 'Championship Extra Duty',
    type: 'プレッシャー',
    surface: ['ハード'],
    official: null,
    concept: 'コスパ最高の定番練習球（ハード）',
    description: 'Wilsonのエントリーラインながら安定した品質。ハードコートの練習球として圧倒的なコスパを誇り、スクールや部活に最適。',
    searchKeyword: 'ウィルソン チャンピオンシップ テニスボール',
    year: 2024
  },
  {
    id: 'wilson-championship-regular-duty',
    brand: 'Wilson',
    model: 'Championship Regular Duty',
    type: 'プレッシャー',
    surface: ['クレー', 'オムニ', '室内'],
    official: null,
    concept: 'コスパ最高の定番練習球（クレー・室内）',
    description: 'クレー・オムニ・室内コート向けの入門練習球。フェルトが柔らかくクレーでのプレーに適した弾みを実現。',
    searchKeyword: 'ウィルソン チャンピオンシップ テニスボール',
    year: 2024
  },
  {
    id: 'wilson-triniti',
    brand: 'Wilson',
    model: 'Triniti',
    type: 'プレッシャーレス',
    surface: ['オールコート'],
    official: null,
    concept: 'プレッシャーレスで1年以上使える革新球',
    description: '従来の缶不要のチューブ入り。空気を入れない構造で圧力が落ちず、一般的なボールの4倍以上の耐久性を誇る。地球環境にも優しい次世代ボール。',
    searchKeyword: 'ウィルソン Triniti テニスボール',
    year: 2024
  },
  {
    id: 'wilson-roland-garros-clay',
    brand: 'Wilson',
    model: 'Roland Garros Clay',
    type: 'プレッシャー',
    surface: ['クレー'],
    official: '全仏オープン公式（Roland Garros大会指定）',
    concept: '全仏仕様・クレーコート特化モデル',
    description: '全仏オープン（Roland Garros）のパートナー製品。クレーコートの特性に合わせたフェルト設計で、泥はけが良く一貫したバウンドを提供。',
    searchKeyword: 'ウィルソン ローランギャロス テニスボール',
    year: 2024
  },

  // ========== Babolat ==========
  {
    id: 'babolat-gold-french-open',
    brand: 'Babolat',
    model: 'Gold French Open',
    type: 'プレッシャー',
    surface: ['クレー'],
    official: '全仏オープン公式',
    concept: '全仏オープン公式・クレー最高峰',
    description: '全仏オープンの公式採用球。クレーコートに最適化されたフェルトで、泥を含んでも一貫した弾みを維持。プロが認めた本物のクレーボール。',
    searchKeyword: 'バボラ ゴールド テニスボール',
    year: 2024
  },
  {
    id: 'babolat-gold-all-court',
    brand: 'Babolat',
    model: 'Gold All Court',
    type: 'プレッシャー',
    surface: ['オールコート'],
    official: null,
    concept: 'クレーのBabolatがオールコート対応',
    description: 'Babolatの技術をオールコートに展開。ハード・クレー・オムニどのサーフェスでも安定した弾みを発揮する汎用プレミアムモデル。',
    searchKeyword: 'バボラ ゴールド テニスボール オールコート',
    year: 2024
  },
  {
    id: 'babolat-french-open-clay',
    brand: 'Babolat',
    model: 'French Open Clay',
    type: 'プレッシャー',
    surface: ['クレー'],
    official: null,
    concept: '公式球ライン・クレー特化エントリー版',
    description: 'Gold French Openのスペックを継承しながらコスパを重視。クレーコート練習球の定番として国内外で人気の高いモデル。',
    searchKeyword: 'バボラ フレンチオープン テニスボール',
    year: 2024
  },
  {
    id: 'babolat-team',
    brand: 'Babolat',
    model: 'Team',
    type: 'プレッシャー',
    surface: ['オールコート'],
    official: null,
    concept: '練習向けコスパボール',
    description: 'スクールや日常練習に最適なBabolatのエントリーモデル。価格を抑えながらBabolatの品質基準をクリアした信頼の練習球。',
    searchKeyword: 'バボラ チーム テニスボール',
    year: 2024
  },

  // ========== Dunlop ==========
  {
    id: 'dunlop-fort-all-court',
    brand: 'Dunlop',
    model: 'Fort All Court TS',
    type: 'プレッシャー',
    surface: ['オールコート'],
    official: '全豪オープン公式',
    concept: '全豪オープン公式・オールコート最高峰',
    description: '全豪オープンの公式採用球。Titanium Seriesのフェルトがコート表面への付着を抑え、耐久性と一貫した弾みを長時間維持する最高峰モデル。',
    searchKeyword: 'ダンロップ フォート テニスボール',
    year: 2024
  },
  {
    id: 'dunlop-fort-clay',
    brand: 'Dunlop',
    model: 'Fort Clay',
    type: 'プレッシャー',
    surface: ['クレー'],
    official: null,
    concept: 'クレーコート特化版Fort',
    description: 'クレーコートの特性に合わせたフェルト厚設計。泥を吸い込みにくく、砂の摩耗からフェルトを守る専用モデル。欧州クレーシーズンの定番。',
    searchKeyword: 'ダンロップ フォート クレー テニスボール',
    year: 2024
  },
  {
    id: 'dunlop-fort-indoor',
    brand: 'Dunlop',
    model: 'Fort Indoor',
    type: 'プレッシャー',
    surface: ['室内'],
    official: null,
    concept: '室内コート専用・静音フェルト設計',
    description: '室内コート（カーペット・フローリング）に最適化。静音性に優れたフェルトで屋内施設での使用に配慮した専用設計。',
    searchKeyword: 'ダンロップ フォート インドア テニスボール',
    year: 2024
  },
  {
    id: 'dunlop-atp-championship',
    brand: 'Dunlop',
    model: 'ATP Championship',
    type: 'プレッシャー',
    surface: ['ハード', 'クレー'],
    official: 'ATPチャンピオンシップ公式',
    concept: 'ATPチャンピオンシップ採用の実力派',
    description: 'ATPチャンピオンシップで採用された実績を持つ高品質ボール。プロ基準のフェルト品質と安定した内圧でハードゲームにも対応。',
    searchKeyword: 'ダンロップ ATPチャンピオンシップ テニスボール',
    year: 2024
  },
  {
    id: 'dunlop-australian-open',
    brand: 'Dunlop',
    model: 'Australian Open',
    type: 'プレッシャー',
    surface: ['ハード'],
    official: '全豪オープン冠名モデル',
    concept: '全豪オープン冠名・ハードコート向け',
    description: '全豪オープンの名を冠したDunlopのプレミアムハードコートモデル。Melbourne Parkの高速サーフェスを想定した耐久フェルト仕様。',
    searchKeyword: 'ダンロップ オーストラリアンオープン テニスボール',
    year: 2024
  },

  // ========== HEAD ==========
  {
    id: 'head-atp-tour',
    brand: 'HEAD',
    model: 'ATP Tour',
    type: 'プレッシャー',
    surface: ['オールコート'],
    official: 'ATPツアー公式',
    concept: 'ATPツアー公式・高耐久フェルト採用',
    description: 'ATPツアーのマスターズ大会で使用されるプロ仕様球。独自のナノパウダーフェルトが毛羽立ちを抑え、試合中に弾みの変化が起きにくい高耐久設計。',
    searchKeyword: 'ヘッド ATP Tour テニスボール',
    year: 2024
  },
  {
    id: 'head-atp-tour-clay',
    brand: 'HEAD',
    model: 'ATP Tour Clay',
    type: 'プレッシャー',
    surface: ['クレー'],
    official: null,
    concept: 'ATPツアー仕様のクレーコート特化版',
    description: 'ATP Tour球の技術をクレーコートに特化させたモデル。砂のコートで汚れても弾みが安定し、長持ちするフェルト設計が採用されている。',
    searchKeyword: 'ヘッド ATP Tour クレー テニスボール',
    year: 2024
  },
  {
    id: 'head-tour-xt',
    brand: 'HEAD',
    model: 'Tour XT',
    type: 'プレッシャー',
    surface: ['オールコート'],
    official: null,
    concept: 'エクストラデューティ・耐久強化版',
    description: 'HEADのオールコート練習向けモデル。Extra Thick（XT）フェルトで耐久性を高め、練習時間が長くても品質が持続する信頼のトレーニング球。',
    searchKeyword: 'ヘッド Tour XT テニスボール',
    year: 2024
  },

  // ========== YONEX ==========
  {
    id: 'yonex-tour',
    brand: 'YONEX',
    model: 'Tour',
    type: 'プレッシャー',
    surface: ['オムニ', 'クレー', 'ハード'],
    official: null,
    concept: '国内大会の定番・高品質プレミアムボール',
    description: '国内公認大会の多くで使用されるYONEXのフラッグシップボール。日本のオムニコートに合わせたフェルト設計で、一貫した弾みと耐久性を発揮する。',
    searchKeyword: 'ヨネックス テニスボール Tour',
    year: 2024
  },
  {
    id: 'yonex-team',
    brand: 'YONEX',
    model: 'Team',
    type: 'プレッシャー',
    surface: ['オムニ', 'クレー'],
    official: null,
    concept: '練習・日常使いのコスパモデル',
    description: 'YONEXのエントリーボール。学校・スクール・部活動での練習用として広く普及。Tourと同じ製造ラインのコスパ重視バリエーション。',
    searchKeyword: 'ヨネックス テニスボール チーム',
    year: 2024
  },

  // ========== Tecnifibre ==========
  {
    id: 'tecnifibre-tf-x1',
    brand: 'Tecnifibre',
    model: 'TF-X1',
    type: 'プレッシャー',
    surface: ['オールコート'],
    official: null,
    concept: '耐久性と品質を両立した次世代プレミアム球',
    description: '独自のX1テクノロジーによりフェルトの毛羽立ちを最小化。長時間練習でも弾みが安定し、試合での集中力を維持できる高品質ボール。',
    searchKeyword: 'テクニファイバー TF-X1 テニスボール',
    year: 2024
  },
  {
    id: 'tecnifibre-tf-x1-clay',
    brand: 'Tecnifibre',
    model: 'TF-X1 Clay',
    type: 'プレッシャー',
    surface: ['クレー'],
    official: null,
    concept: 'TF-X1のクレー特化バージョン',
    description: 'TF-X1のクレーコート対応モデル。砂の浸入に強いフェルト構造で、クレーコートのプレーヤーに最適な耐久性と品質を提供。',
    searchKeyword: 'テクニファイバー TF-X1 テニスボール クレー',
    year: 2024
  }
];

// ブランド別にグループ化
function getBallsByBrand(brand) {
  return BALL_DATABASE.filter(b => b.brand === brand);
}

// サーフェス別にフィルター
function getBallsBySurface(surface) {
  return BALL_DATABASE.filter(b =>
    b.surface.includes(surface) || b.surface.includes('オールコート')
  );
}

// 公式球のみ
function getOfficialBalls() {
  return BALL_DATABASE.filter(b => b.official);
}
