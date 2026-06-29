// ============================================================
// ラブテニ テニスシューズデータベース
// ============================================================

const SHOE_BRANDS = ['Asics', 'Nike', 'Adidas', 'New Balance', 'Mizuno', 'Babolat', 'HEAD', 'YONEX', 'Wilson'];

const SHOE_BRAND_INFO = {
  'Asics': {
    desc: '大阪発祥の日本トップスポーツブランド。GEL-RESOLUTIONシリーズはATPツアーで最も使用されているテニスシューズ。ジョコビッチも長年愛用し、耐久性と安定性のトップブランド。',
    color: '#2980b9', tagline: 'JAPAN TECH',
    players: ['ジョコビッチ（以前）', '岡村 依子']
  },
  'Nike': {
    desc: 'アメリカ発祥の世界最大スポーツブランド。Air Zoom Vapor Proシリーズはフェデラー・ナダル・セリーナが愛用したシリーズの後継。軽量性とフィット感の高さが世界トップクラス。',
    color: '#e74c3c', tagline: 'JUST DO IT',
    players: ['フェデラー（以前）', 'ナダル（以前）']
  },
  'Adidas': {
    desc: 'ドイツ発祥のスポーツブランド。Adizero Ubersonicシリーズは超軽量コンセプトのハイパフォーマンスシューズ。ズベレフ・サバレンカが愛用するATPツアーの定番。',
    color: '#27ae60', tagline: 'IMPOSSIBLE IS NOTHING',
    players: ['ズベレフ', 'サバレンカ']
  },
  'New Balance': {
    desc: 'アメリカ発祥のブランド。FuelCell 796シリーズはその反発力とグリップ力で急速に人気が拡大中。ソックスのような履き心地で足に自然に馴染むフィット感が特徴。',
    color: '#c0392b', tagline: 'FEARLESSLY INDEPENDENT',
    players: ['大坂 なおみ', 'シナー（以前）']
  },
  'Mizuno': {
    desc: '大阪発祥の日本老舗スポーツブランド。Wave Exceed Tourシリーズは日本のオムニコートに最も合わせて設計されたシューズとして国内で絶大な支持を得ている。',
    color: '#8e44ad', tagline: 'TOUCH THE DIAMOND',
    players: ['錦織 圭（以前）']
  },
  'Babolat': {
    desc: 'フランス発祥のテニスブランド。Propulse FuryはフランスのエリートプレーヤーやJet Mach IIIは高速プレーヤー向けに設計された軽量×高反発のハイパフォーマンスシューズ。',
    color: '#27ae60', tagline: 'FRENCH PERFORMANCE',
    players: ['アルカラス（Babolatシューズ）']
  },
  'HEAD': {
    desc: 'オーストリア発祥のブランド。Sprint Proシリーズはジョコビッチが長年愛用したシューズで、最高峰の安定性とサポート性を誇る。Revolt ProはWTAプレーヤーにも定評がある。',
    color: '#2c3e50', tagline: 'AUSTRIAN STABILITY',
    players: ['ジョコビッチ', 'ペトラ・クビトバ']
  },
  'YONEX': {
    desc: '日本のトップブランド。Power Cushionシリーズは独自の衝撃吸収技術で膝・腰への負担を軽減。Sonicageは国内競技者に特に人気が高く、オムニコートでの安定したグリップが評価される。',
    color: '#8e44ad', tagline: 'JAPANESE CUSHION',
    players: ['西岡 良仁', '内山 靖崇']
  },
  'Wilson': {
    desc: 'アメリカ発祥の総合ブランド。Rush Proシリーズはバランスに優れた万能モデルで幅広いプレースタイルに対応。Kaos 3.0はスピードと機動力重視のモデル。',
    color: '#e74c3c', tagline: 'AMERICAN BALANCE',
    players: []
  }
};

const SHOE_DATABASE = [
  // ========== Asics ==========
  {
    id: 'asics-gel-resolution-9',
    brand: 'Asics',
    model: 'GEL-RESOLUTION 9',
    surface: ['オールコート', 'ハード'],
    concept: 'ATP使用率No.1・安定感と耐久性の最高峰',
    description: 'ATPツアーで最も多く使用されるシューズ。6ヶ月の耐久性保証（ツアー使用）を誇り、横方向の動きを支えるDYNAWALL技術が足首を守る。安定性の基準となる存在。',
    weight: '約380g',
    features: ['DYNAWRAP', '6ヶ月耐久保証', 'GELクッション', '横方向安定'],
    searchKeyword: 'アシックス GEL-RESOLUTION 9 テニスシューズ'
  },
  {
    id: 'asics-gel-resolution-9-clay',
    brand: 'Asics',
    model: 'GEL-RESOLUTION 9 Clay',
    surface: ['クレー'],
    concept: 'GEL-RESOLUTION 9のクレー対応版',
    description: 'GEL-RESOLUTION 9の技術をクレーコートに特化。ヘリンボーンパターンのソールがクレーでのグリップと排砂性を高め、滑らかなフットワークを実現する。',
    weight: '約380g',
    features: ['ヘリンボーンソール', 'DYNAWRAP', 'GELクッション'],
    searchKeyword: 'アシックス GEL-RESOLUTION 9 Clay テニスシューズ'
  },
  {
    id: 'asics-solution-speed-ff3',
    brand: 'Asics',
    model: 'Solution Speed FF 3',
    surface: ['オールコート', 'ハード'],
    concept: '軽量×スピード重視の上位モデル',
    description: 'FF（FlyteFoam）ミッドソールで軽量かつ高反発を実現。スピードプレーヤーとフットワーク重視の選手に人気の一足。GEL-RESOLUTIONより軽量志向のコレクション。',
    weight: '約330g',
    features: ['FlyteFoamミッドソール', '軽量設計', 'スピード重視'],
    searchKeyword: 'アシックス Solution Speed FF 3 テニスシューズ'
  },
  {
    id: 'asics-gel-dedicate-8',
    brand: 'Asics',
    model: 'GEL-DEDICATE 8',
    surface: ['オムニ', 'クレー'],
    concept: 'オムニ・クレー対応のエントリーモデル',
    description: 'GELクッションを採用した入門向けモデル。オムニ・クレーコートに対応するソールパターンで、初心者からスクール生まで幅広く支持される国内定番シューズ。',
    weight: '約360g',
    features: ['GELクッション', 'オムニ・クレー対応ソール', 'コスパ重視'],
    searchKeyword: 'アシックス GEL-DEDICATE 8 テニスシューズ'
  },
  {
    id: 'asics-gel-game-9',
    brand: 'Asics',
    model: 'GEL-GAME 9',
    surface: ['オールコート'],
    concept: 'バランス重視のミドルクラスモデル',
    description: 'GELシリーズのミドルクラス。GEL-RESOLUTIONほどの専門性はないが、軽量さとクッション性のバランスが良く、週数回プレーするプレーヤーにちょうど良い一足。',
    weight: '約350g',
    features: ['GELクッション', 'バランス設計', '軽量'],
    searchKeyword: 'アシックス GEL-GAME 9 テニスシューズ'
  },

  // ========== Nike ==========
  {
    id: 'nike-air-zoom-vapor-pro-2',
    brand: 'Nike',
    model: 'Air Zoom Vapor Pro 2',
    surface: ['オールコート', 'ハード'],
    concept: '軽量×反発・Nikeハードコートの定番',
    description: 'Nikeのフラッグシップハードコートシューズ。Air Zoomユニットによる高反発クッションと軽量アッパーで、アグレッシブなフットワークを支援する。',
    weight: '約310g',
    features: ['Air Zoomユニット', '軽量アッパー', 'Zoom Airインソール'],
    searchKeyword: 'ナイキ Air Zoom Vapor Pro 2 テニスシューズ'
  },
  {
    id: 'nike-air-zoom-vapor-pro-2-clay',
    brand: 'Nike',
    model: 'Air Zoom Vapor Pro 2 Clay',
    surface: ['クレー'],
    concept: 'Vapor Pro 2のクレー特化版',
    description: 'Air Zoom Vapor Pro 2のクレーコート対応モデル。ヘリンボーンパターンのソールがクレーでのグリップを高め、Nikeの軽量技術をクレーコートに展開。',
    weight: '約315g',
    features: ['Air Zoomユニット', 'ヘリンボーンソール', '軽量'],
    searchKeyword: 'ナイキ Air Zoom Vapor Pro 2 Clay テニスシューズ'
  },
  {
    id: 'nike-air-zoom-gp-turbo',
    brand: 'Nike',
    model: 'Air Zoom GP Turbo',
    surface: ['オールコート', 'ハード'],
    concept: 'ナダル仕様・最高レベルの反発性',
    description: 'ナダルが長年使用したGPシリーズの後継。フルレングスのCarbon Fiber Spike Plateが地面を力強くとらえ、プッシュオフの際の推進力を最大化する。',
    weight: '約340g',
    features: ['Full-length Carbon Fiber Spike Plate', 'Air Zoomユニット', 'ナダル仕様'],
    searchKeyword: 'ナイキ Air Zoom GP Turbo テニスシューズ'
  },
  {
    id: 'nike-court-zoom-nxt',
    brand: 'Nike',
    model: 'Court Zoom NXT',
    surface: ['オールコート'],
    concept: 'コントロール重視のプレミアムモデル',
    description: 'Nikeのコントロール志向プレーヤー向けモデル。安定性と快適性を重視した設計で、ボレーヤーやオールラウンドプレーヤーに適したバランスの取れた一足。',
    weight: '約350g',
    features: ['Zoom Air', '安定性重視', 'コントロール設計'],
    searchKeyword: 'ナイキ Court Zoom NXT テニスシューズ'
  },

  // ========== Adidas ==========
  {
    id: 'adidas-adizero-ubersonic-4',
    brand: 'Adidas',
    model: 'Adizero Ubersonic 4',
    surface: ['オールコート', 'ハード'],
    concept: 'ズベレフ使用・超軽量スピード特化',
    description: 'ズベレフ愛用のAdidasフラッグシップ。「Adizero」の名が示す通り極限の軽量化と、Lightstrikecushioningによる優れたクッション性を両立させたプロ仕様のスピードシューズ。',
    weight: '約280g',
    features: ['Lightstrike Cushioning', '超軽量設計', 'Outsole Parley'],
    searchKeyword: 'アディダス Adizero Ubersonic 4 テニスシューズ'
  },
  {
    id: 'adidas-adizero-ubersonic-4-clay',
    brand: 'Adidas',
    model: 'Adizero Ubersonic 4 Clay',
    surface: ['クレー'],
    concept: 'Ubersonic 4のクレー特化軽量版',
    description: 'Adizero Ubersonic 4の軽量技術をクレーコートに展開。クレー向けアウトソールで滑らず、Adidasのスピードシューズをクレーシーズンに活用できる。',
    weight: '約285g',
    features: ['Lightstrike Cushioning', 'クレー用ソール', '超軽量'],
    searchKeyword: 'アディダス Adizero Ubersonic 4 Clay テニスシューズ'
  },
  {
    id: 'adidas-barricade-13',
    brand: 'Adidas',
    model: 'Barricade 13',
    surface: ['オールコート', 'ハード'],
    concept: '耐久性×安定性・サバレンカ使用',
    description: 'サバレンカが愛用するAdidasの堅牢シューズ。「Barricade」の名が示す通り耐久性と安定性に特化し、アグレッシブなフットワークに耐える強固なサポートが特徴。',
    weight: '約380g',
    features: ['ADITUFF耐摩耗素材', 'Lightstrike Cushioning', '高耐久性'],
    searchKeyword: 'アディダス Barricade 13 テニスシューズ'
  },

  // ========== New Balance ==========
  {
    id: 'new-balance-fuelcell-796v4',
    brand: 'New Balance',
    model: 'FuelCell 796 v4',
    surface: ['オールコート', 'ハード'],
    concept: '大坂なおみ使用・高反発FuelCell搭載',
    description: '大坂なおみが愛用するNew Balanceのフラッグシップ。FuelCellフォームが地面からの反発エネルギーを推進力に変え、爆発的な加速力を生み出す次世代テクノロジー搭載シューズ。',
    weight: '約330g',
    features: ['FuelCellフォーム', '高反発ミッドソール', 'Ndurance アウトソール'],
    searchKeyword: 'ニューバランス FuelCell 796 v4 テニスシューズ'
  },
  {
    id: 'new-balance-fresh-foam-lav-v2',
    brand: 'New Balance',
    model: 'Fresh Foam Lav V2',
    surface: ['オールコート'],
    concept: '快適性重視のFresh Foam搭載モデル',
    description: 'Fresh Foamミッドソールが長時間プレーでも疲れにくいクッション性を提供。シングルピースのFresh Foam Xソールが足全体を均等にサポートし、快適なテニスをサポートする。',
    weight: '約350g',
    features: ['Fresh Foam X', '長時間快適設計', 'ワイドラストオプション'],
    searchKeyword: 'ニューバランス Fresh Foam Lav V2 テニスシューズ'
  },
  {
    id: 'new-balance-1006-v1',
    brand: 'New Balance',
    model: '1006 V1',
    surface: ['オールコート', 'ハード'],
    concept: 'コントロール重視のハイサポートモデル',
    description: 'New Balanceのハイサポートモデル。横方向の動きに対するサポートを重視し、コートカバレッジを広げたいプレーヤーや膝・足首に不安があるプレーヤーに最適。',
    weight: '約370g',
    features: ['REVlite Foam', 'サポート重視', 'ハードコート耐久素材'],
    searchKeyword: 'ニューバランス 1006 V1 テニスシューズ'
  },

  // ========== Mizuno ==========
  {
    id: 'mizuno-wave-exceed-tour-6',
    brand: 'Mizuno',
    model: 'Wave Exceed Tour 6',
    surface: ['オムニ', 'クレー'],
    concept: '日本のオムニコートに最適化された最高峰',
    description: '国内テニスプレーヤーに最も支持されるオムニ・クレー専用ハイエンドモデル。独自のWave構造が衝撃を分散しつつ推進力に変換。日本のコートサーフェスを知り尽くしたMizunoの集大成。',
    weight: '約360g',
    features: ['WAVE構造', 'オムニ・クレー専用', 'グリップ力重視'],
    searchKeyword: 'ミズノ Wave Exceed Tour 6 テニスシューズ'
  },
  {
    id: 'mizuno-wave-exceed-tour-6-ac',
    brand: 'Mizuno',
    model: 'Wave Exceed Tour 6 AC',
    surface: ['オールコート'],
    concept: 'Wave Exceed Tour 6のオールコート版',
    description: 'Wave Exceed Tour 6の技術をオールコートに展開。ハード・クレー・オムニ対応のソールパターンで、複数のサーフェスでプレーするプレーヤーに最適な一足。',
    weight: '約365g',
    features: ['WAVE構造', 'オールコート対応', 'グリップ力'],
    searchKeyword: 'ミズノ Wave Exceed Tour 6 AC テニスシューズ'
  },
  {
    id: 'mizuno-wave-exceed-classic',
    brand: 'Mizuno',
    model: 'Wave Exceed Classic',
    surface: ['オムニ', 'クレー'],
    concept: 'Wave Exceedシリーズのコスパモデル',
    description: 'Wave Exceed Tourの技術をコスパ重視でまとめたスタンダードモデル。国内テニス愛好者の練習・日常使いに最適なミドルクラスのオムニ・クレー向けシューズ。',
    weight: '約355g',
    features: ['WAVE構造（簡略版）', 'コスパ重視', 'オムニ・クレー対応'],
    searchKeyword: 'ミズノ Wave Exceed Classic テニスシューズ'
  },

  // ========== Babolat ==========
  {
    id: 'babolat-propulse-fury-all-court',
    brand: 'Babolat',
    model: 'Propulse Fury All Court',
    surface: ['オールコート', 'ハード'],
    concept: 'パワー×グリップ力のフラッグシップ',
    description: 'Babolatのハイエンドシューズ。Michelin Compound（ミシュランコンパウンド）アウトソールで圧倒的な耐摩耗性とグリップ力を実現。パワープレーヤーに最適な一足。',
    weight: '約360g',
    features: ['Michelinアウトソール', 'Propulseシャーシ', 'パワー重視'],
    searchKeyword: 'バボラ Propulse Fury All Court テニスシューズ'
  },
  {
    id: 'babolat-propulse-fury-clay',
    brand: 'Babolat',
    model: 'Propulse Fury Clay',
    surface: ['クレー'],
    concept: 'クレーの本場フランスが設計した専用モデル',
    description: 'クレーコートに特化したPropulse Fury。フランスのクレーコートを知るBabolatが設計した専用ソールで、滑りと踏ん張りの絶妙なバランスを実現する。',
    weight: '約355g',
    features: ['クレー専用ソール', 'Michelinコンパウンド', 'クレー最適化'],
    searchKeyword: 'バボラ Propulse Fury Clay テニスシューズ'
  },
  {
    id: 'babolat-jet-mach-3',
    brand: 'Babolat',
    model: 'Jet Mach III All Court',
    surface: ['オールコート', 'ハード'],
    concept: '超軽量スピード特化モデル',
    description: 'Propulse Furyとは対照的に軽量スピードを追求したモデル。Michelin Compoundソールはそのままに、アッパーを徹底軽量化。スピードプレーヤーの機動力を最大化する。',
    weight: '約300g',
    features: ['超軽量アッパー', 'Michelinアウトソール', 'スピード設計'],
    searchKeyword: 'バボラ Jet Mach III テニスシューズ'
  },

  // ========== HEAD ==========
  {
    id: 'head-sprint-pro-35',
    brand: 'HEAD',
    model: 'Sprint Pro 3.5',
    surface: ['オールコート', 'ハード'],
    concept: 'ジョコビッチ愛用・安定性の最高峰',
    description: 'ジョコビッチが長年愛用するHEADのフラッグシップシューズ。EnviLite（環境配慮）素材のEVAフォームが高いクッション性と軽量化を実現。安定性と支持力が世界最高レベル。',
    weight: '約345g',
    features: ['EnviLite EVA', 'ダイナミックサポート', 'アウトドア耐久素材'],
    searchKeyword: 'ヘッド Sprint Pro 3.5 テニスシューズ'
  },
  {
    id: 'head-sprint-pro-35-sf',
    brand: 'HEAD',
    model: 'Sprint Pro 3.5 SF',
    surface: ['クレー'],
    concept: 'Sprint Pro 3.5のクレー・芝対応版',
    description: 'Sprint Pro 3.5のSF（Sand/Grass）モデル。クレーおよびグラスコート専用ソールでジョコビッチ仕様の安定性をクレーシーズンにも展開。',
    weight: '約345g',
    features: ['クレー・芝専用ソール', 'EnviLite EVA', 'ダイナミックサポート'],
    searchKeyword: 'ヘッド Sprint Pro 3.5 SF テニスシューズ'
  },
  {
    id: 'head-revolt-pro-45',
    brand: 'HEAD',
    model: 'Revolt Pro 4.5',
    surface: ['オールコート', 'ハード'],
    concept: 'プレミアムミッドクラス・汎用性重視',
    description: 'Sprint Proに次ぐHEADのミッドクラスシューズ。コスパと機能のバランスが良く、週末プレーヤーやスクール生が最初の本格シューズとして選ぶ定番モデル。',
    weight: '約355g',
    features: ['EVAクッション', 'オールコート対応', 'コスパ重視'],
    searchKeyword: 'ヘッド Revolt Pro 4.5 テニスシューズ'
  },

  // ========== YONEX ==========
  {
    id: 'yonex-power-cushion-sonicage-3',
    brand: 'YONEX',
    model: 'Power Cushion Sonicage 3',
    surface: ['オムニ', 'クレー'],
    concept: '国内競技者人気No.1・Power Cushion搭載',
    description: '国内テニスプレーヤーに最も支持されるYONEXのミドルクラス。独自のPower Cushion技術が衝撃を吸収しつつ反発エネルギーを生成。オムニコート対応ソールで日本の練習環境に最適。',
    weight: '約350g',
    features: ['Power Cushion技術', 'オムニ・クレー対応', 'Round Sole'],
    searchKeyword: 'ヨネックス Power Cushion Sonicage 3 テニスシューズ'
  },
  {
    id: 'yonex-power-cushion-eclipsion-5',
    brand: 'YONEX',
    model: 'Power Cushion Eclipsion 5',
    surface: ['ハード', 'オールコート'],
    concept: 'YONEXフラッグシップ・ハードコート最高峰',
    description: 'YONEXのハードコート最上位モデル。Eclipsion独自のレザーライクな素材とPower Cushionの組み合わせで最高レベルのフィット感とクッション性を実現する。',
    weight: '約360g',
    features: ['Power Cushion+', 'ハードコート耐久素材', 'エリートフィット'],
    searchKeyword: 'ヨネックス Power Cushion Eclipsion 5 テニスシューズ'
  },
  {
    id: 'yonex-power-cushion-fusionrev-5',
    brand: 'YONEX',
    model: 'Power Cushion Fusionrev 5',
    surface: ['オールコート'],
    concept: 'スピードとクッション性の最適バランス',
    description: '軽量かつ高い反発性を持つFusionrevシリーズの最新作。Power CushionにFusion加工を施し、スピードプレーヤーが求める推進力とYONEXのクッション性を両立させた万能モデル。',
    weight: '約320g',
    features: ['Power Cushion Fusion', '軽量設計', 'オールコート対応'],
    searchKeyword: 'ヨネックス Power Cushion Fusionrev 5 テニスシューズ'
  },

  // ========== Wilson ==========
  {
    id: 'wilson-rush-pro-4',
    brand: 'Wilson',
    model: 'Rush Pro 4.0',
    surface: ['オールコート', 'ハード'],
    concept: 'バランス重視のWilsonフラッグシップ',
    description: 'Wilsonのフラッグシップテニスシューズ。Sensifeel技術採用のアッパーが足にフィットし、Endofit構造が足全体を包み込む。安定性・軽量性・クッション性のバランスが高水準。',
    weight: '約340g',
    features: ['Sensifeel 2.0', 'Endofit', '6ヶ月耐久保証'],
    searchKeyword: 'ウイルソン Rush Pro 4.0 テニスシューズ'
  },
  {
    id: 'wilson-rush-pro-4-clay',
    brand: 'Wilson',
    model: 'Rush Pro 4.0 Clay',
    surface: ['クレー'],
    concept: 'Rush Pro 4.0のクレー対応版',
    description: 'Rush Pro 4.0の技術をクレーコートに展開。ヘリンボーンソールでクレー特有の滑りをコントロールしながら、Wilsonのバランス設計はそのままに。',
    weight: '約345g',
    features: ['Sensifeel 2.0', 'ヘリンボーンソール', 'Endofit'],
    searchKeyword: 'ウイルソン Rush Pro 4.0 Clay テニスシューズ'
  },
  {
    id: 'wilson-kaos-3',
    brand: 'Wilson',
    model: 'Kaos 3.0',
    surface: ['オールコート'],
    concept: 'スピード志向・軽量コンセプトモデル',
    description: 'Wilsonのスピード志向シューズ。Sensifeel技術の軽量アッパーとEndofitのサポートを組み合わせ、機動力を最優先したプレーヤーのための一足。',
    weight: '約305g',
    features: ['Sensifeel 2.0', '軽量設計', 'Endofit'],
    searchKeyword: 'ウイルソン Kaos 3.0 テニスシューズ'
  }
];

// ブランド別フィルター
function getShoesByBrand(brand) {
  return SHOE_DATABASE.filter(s => s.brand === brand);
}

// サーフェス別フィルター
function getShoesBySurface(surface) {
  return SHOE_DATABASE.filter(s =>
    s.surface.includes(surface) || s.surface.includes('オールコート')
  );
}
