// テニスガット（ストリング）データベース
const STRING_BRANDS = ['Luxilon', 'Babolat', 'Wilson', 'YONEX', 'HEAD', 'Tecnifibre', 'Solinco', 'Gosen', 'Toalson', 'Prince', 'Dunlop', 'Polyfibre', 'Diadem', 'Kirschbaum', 'MSV', 'Pacific', 'Signum Pro', 'Weiss Cannon'];

const STRING_BRAND_INFO = {
  'Luxilon': { desc: 'ベルギー発祥、ポリエステルガットの王者。ATPツアーで最も使用されているガットブランドで、Wilsonの傘下。ALU POWERは世界中のプロが愛用する定番。', color: '#1a1a1a', tagline: 'POLY KING',
    series: [{name:'ALU POWER',desc:'プロ使用率No.1の定番'},{name:'4G',desc:'長持ちするロングセラー'},{name:'ELEMENT',desc:'マイルドな打感のポリ'},{name:'M2',desc:'コントロール志向'},{name:'BIG BANGER',desc:'パワー系の原点'}]},
  'Babolat': { desc: 'フランス発祥、ガット製造の歴史を持つ老舗。RPMシリーズはナダル・アルカラスが使用し、世界中のスピン系プレーヤーから支持される。', color: '#27ae60', tagline: 'FRENCH HERITAGE',
    series: [{name:'RPM Blast',desc:'スピン系の代名詞'},{name:'RPM Power',desc:'高反発パワー系ポリ'},{name:'RPM Team',desc:'コスパに優れたRPMエントリー'},{name:'RPM Soft',desc:'柔らかい打感のRPM'},{name:'VS Touch',desc:'最高峰のナチュラルガット'},{name:'Pro Hurricane',desc:'コントロール重視ポリ'},{name:'Origin',desc:'高反発ポリ'}]},
  'Wilson': { desc: 'アメリカ発祥の総合スポーツブランド。ナイロン・マルチ系のNXTやSensationが定番。Champion\'s Choiceはフェデラーが愛用したハイブリッドセット。', color: '#e74c3c', tagline: 'AMERICAN ICON',
    series: [{name:'NXT',desc:'マルチフィラメントの定番'},{name:'Sensation',desc:'柔らかい打感のナイロン'},{name:'Revolve',desc:'スピン系ポリ'},{name:'Synthetic Gut',desc:'リーズナブルなナイロン'},{name:"Champion's Choice",desc:'プロ仕様ハイブリッド'}]},
  'YONEX': { desc: '日本を代表するテニスブランド。POLYTOURシリーズは世界中で高い評価。2025年はPOLYTOUR FORCEとDRIVEが新登場。日本人に最適化された設計と高い耐久性が魅力。', color: '#8e44ad', tagline: 'JAPANESE PRECISION',
    series: [{name:'POLYTOUR PRO',desc:'バランス型ポリ'},{name:'POLYTOUR FORCE',desc:'2025新作・パワー重視'},{name:'POLYTOUR DRIVE',desc:'八角断面スピン&コントロール'},{name:'POLYTOUR STRIKE',desc:'パワー系ポリ'},{name:'POLYTOUR SPIN',desc:'スナップバック特化'},{name:'POLYTOUR FIRE',desc:'超細ゲージ・鋭い球離れ'},{name:'POLYTOUR REV',desc:'スピン特化五角断面'},{name:'POLYTOUR AIR',desc:'柔らかいポリ'},{name:'AEROBITE',desc:'ハイブリッドセット'},{name:'REXIS',desc:'プレミアムマルチ'}]},
  'HEAD': { desc: 'オーストリア発祥の老舗ブランド。LYNXシリーズはジョコビッチ仕様。HAWK TOURはリサイクルPET採用のエコポリ。REFLEX MLTはプレミアムマルチの新定番。', color: '#2c3e50', tagline: 'AUSTRIAN TRADITION',
    series: [{name:'LYNX TOUR',desc:'ジョコビッチ仕様'},{name:'LYNX POWER',desc:'パワー重視のLYNX新作'},{name:'LYNX',desc:'スピン系ポリの定番'},{name:'LYNX TOUCH',desc:'振動吸収コーティングのLYNX'},{name:'HAWK TOUR rPET',desc:'七角断面エコポリ'},{name:'HAWK TOUCH',desc:'柔らかい打感のポリ'},{name:'HAWK POWER',desc:'パワー重視のHAWK'},{name:'VELOCITY',desc:'マルチフィラメント'},{name:'VELOCITY POWER',desc:'パワー強化マルチ'},{name:'REFLEX MLT',desc:'超コンフォートプレミアムマルチ'},{name:'SONIC PRO',desc:'コントロール系ポリ'}]},
  'Tecnifibre': { desc: 'フランス発祥のガットメーカー。X-ONE BIPHASEは最高峰マルチ。RAZORシリーズはポリの新定番。PRO RED CODE WAXはコスパ最強クラスのポリ。', color: '#16a085', tagline: 'STRING SPECIALIST',
    series: [{name:'RAZOR CODE',desc:'コントロール系ポリ'},{name:'RAZOR SOFT',desc:'柔らかいRAZOR'},{name:'RAZOR SPIN',desc:'スピン特化RAZOR'},{name:'BLACK CODE',desc:'五角断面スピンポリ'},{name:'RED CODE',desc:'スピン特化レッドポリ'},{name:'PRO RED CODE',desc:'コスパ重視ポリ'},{name:'PRO RED CODE WAX',desc:'ワックス注入コスパポリ'},{name:'X-ONE BIPHASE',desc:'最高峰のマルチ'},{name:'TGV',desc:'プレミアムマルチ'},{name:'NRG2',desc:'スタンダードマルチ'},{name:'XR3',desc:'細めゲージマルチ'},{name:'MULTIFEEL',desc:'エントリーマルチ'}]},
  'Solinco': { desc: 'アメリカ発祥の新興ブランド。HYPER-Gはシフィオンテクが使用し五角形断面でスピン圧倒的。REVOLUTION・BARB WIREなど多彩なポリラインナップ。', color: '#d35400', tagline: 'NEW WAVE POLY',
    series: [{name:'HYPER-G',desc:'シフィオンテク使用・五角断面'},{name:'HYPER-G SOFT',desc:'柔らかい打感のHYPER-G'},{name:'HYPER-G ROUND',desc:'丸断面で滑らかなHYPER-G'},{name:'TOUR BITE',desc:'スピン特化'},{name:'TOUR BITE DIAMOND ROUGH',desc:'ダイヤモンドラフ加工版'},{name:'REVOLUTION',desc:'六角断面コントロールポリ'},{name:'BARB WIRE',desc:'ラフ加工スピンポリ'},{name:'OUTLAST',desc:'最高耐久性ポリ'},{name:'VANQUISH',desc:'Solincoのプレミアムマルチ'},{name:'MACH TEN',desc:'高速スナップバック新モデル'},{name:'CONFIDENTIAL',desc:'コントロール志向'}]},
  'Gosen': { desc: '滋賀県発祥の国産ガットメーカー。OG-SHEEPは学生から支持される定番。G-TOURシリーズは競技者向け、G-XXはハイブリッドセット展開も充実。', color: '#c0392b', tagline: 'JAPAN VALUE',
    series: [{name:'OG-SHEEP MICRO',desc:'学生定番のナイロン'},{name:'G-TOUR 1',desc:'ツアーポリNo.1・硬め'},{name:'G-TOUR 2',desc:'スピン特化ツアーポリ'},{name:'G-TOUR 3',desc:'エントリーツアーポリ'},{name:'G-SPIN 3',desc:'スピン特化ポリ'},{name:'G-XX',desc:'ポリ×ナイロンハイブリッドセット'},{name:'POLYLON SIDEWINDER',desc:'楕円断面の異形ポリ'},{name:'POLYLON',desc:'コスパ重視ポリ'},{name:'EGG POWER',desc:'高反発ポリ'},{name:'UMISHIMA AK PRO',desc:'海島ナイロン高性能マルチ'},{name:'TECH GUT',desc:'ナチュラル感覚のマルチ'}]},
  'Dunlop': { desc: 'イギリス発祥の老舗スポーツブランド。ICONICシリーズはコスパに優れ、日本の一般プレーヤーに人気。2024年からEXPLOSIVEシリーズも展開。', color: '#e67e22', tagline: 'BRITISH HERITAGE',
    series: [{name:'ICONIC ALL',desc:'オールラウンド定番ポリ'},{name:'ICONIC SPIN',desc:'スピン特化五角断面'},{name:'ICONIC TOUR',desc:'ツアー向けコントロール'},{name:'ICONIC TOUCH',desc:'コンフォートマルチ'},{name:'EXPLOSIVE',desc:'新シリーズ・Bite/Speed/Tour/Turbo展開'}]},
  'Toalson': { desc: '日本の老舗ガットメーカー・トアルソン。TOUGH BLADEはコスパ最強の国産ポリ、BIOLOGICはプレミアムマルチ、RENKON DEVIL SPINは蓮根断面の個性派ポリ。', color: '#2980b9', tagline: 'JAPAN CRAFT',
    series: [{name:'TOUGH BLADE',desc:'コスパ最強の国産ポリ'},{name:'ASTERISTA',desc:'スタンダードポリ'},{name:'ASTERISTA ARMORED',desc:'耐久コーティング強化版'},{name:'BIOLOGIC XX',desc:'国産プレミアムマルチ'},{name:'BIOLOGIC LIVE WIRE',desc:'フラッグシップマルチ'},{name:'RENKON DEVIL SPIN',desc:'蓮根断面スピン特化'}]},
  'Prince': { desc: 'アメリカ発祥の老舗ラケットブランド。LIGHTNINGからHARRIER、PHANTOMまで多彩なラインナップ。BEAST XPはBEASTラケットとの相性が抜群。', color: '#7f8c8d', tagline: 'CLASSIC AMERICAN',
    series: [{name:'LIGHTNING XX',desc:'高弾力モノフィラメント'},{name:'LIGHTNING XP',desc:'プレミアムマルチ'},{name:'HARRIER POWER',desc:'パワー&コンフォートマルチ'},{name:'HARRIER RESPONSE',desc:'反発重視の細めマルチ'},{name:'EMBLEM CONTROL',desc:'コントロール向けポリ'},{name:'EMBLEM SOFT',desc:'柔らかい打感のマルチ'},{name:'PHANTOM TOUCH',desc:'マルチフィラメント定番'},{name:'PHANTOM SPIN',desc:'スピン特化ポリ'},{name:'TOUR XX SPIN',desc:'コスパスピンポリ'},{name:'BEAST XP',desc:'BEASTラケット向け爆発力ポリ'}]},
  'Polyfibre': { desc: 'ベルギー発祥のポリエステルガット専門ブランド。BLACK VENOMは欧州ツアーで高い人気を誇り、パワーと食いつきを兼ね備える。TCSはソフトな打感で幅広い層に対応。', color: '#1a1a2e', tagline: 'EUROPEAN POLY',
    series: [{name:'BLACK VENOM',desc:'パワーと食いつきの欧州人気ポリ'},{name:'BLACK VENOM ROUGH',desc:'表面加工でスピンをさらに強化'},{name:'TCS',desc:'柔らかい打感のコポリ'},{name:'TCS ROUGH',desc:'スピン特化のTCSバリエーション'}]},
  'Diadem': { desc: 'アメリカ発祥の新興ガットブランド。SOLSTICEはスピンとコントロールを高次元で両立し、競技者の間で急速に人気拡大中。DARK MATTERは異形断面の注目モデル。', color: '#2d1b4e', tagline: 'NEW AMERICAN POLY',
    series: [{name:'SOLSTICE',desc:'フラッグシップ・スピン&コントロール'},{name:'SOLSTICE POWER',desc:'パワー特化バリエーション'},{name:'EVOLUTION',desc:'バランス型スタンダードポリ'},{name:'DARK MATTER',desc:'異形断面のスピン特化'}]},
  'Kirschbaum': { desc: 'ドイツ発祥の老舗ガットメーカー。PRO LINE IIはプレストレッチ加工でテンション維持に定評があり、欧州ツアーでも使用されるドイツ品質の代表作。', color: '#c0392b', tagline: 'GERMAN ENGINEERING',
    series: [{name:'PRO LINE II',desc:'プレストレッチ定番コポリ'},{name:'PRO LINE II ROUGH',desc:'ラフ加工でスピン追加'},{name:'MAX POWER',desc:'コントロール重視コポリ'},{name:'XPLOSIVE SPEED',desc:'異形断面スピンポリ'},{name:'BLACK SHARK',desc:'八角断面スピン特化'},{name:'EVOLUTION',desc:'精密コントロールコポリ'},{name:'FLASH',desc:'コスパモデル'},{name:'TOUCH MULTIFIBRE',desc:'コンフォートマルチ'}]},
  'MSV': { desc: 'ドイツ発祥の六角断面ポリのパイオニア。FOCUS HEXは独自の六角形断面でスピン量を革命的に向上させ、ベースラインプレーヤーに世界的人気を誇る。', color: '#2980b9', tagline: 'HEX SPIN PIONEER',
    series: [{name:'FOCUS HEX',desc:'六角断面スピンの元祖'},{name:'FOCUS HEX SOFT',desc:'ソフト版六角断面'},{name:'FOCUS HEX +38',desc:'さらに柔らかい六角断面'},{name:'FOCUS HEX ULTRA',desc:'重量級プレーヤー向け'},{name:'CO.-FOCUS',desc:'細め丸型コポリ'},{name:'HEPTA-TWIST',desc:'七角ねじれ断面'},{name:'SWIFT COMFORT',desc:'コンフォートコポリ'}]},
  'Pacific': { desc: 'ドイツ発祥のナチュラルガット・高級ポリの専門ブランド。PrimeGutは世界最高峰のナチュラルガットの一つ。Poly Forceシリーズはコントロール重視のポリの定番。', color: '#27ae60', tagline: 'NATURAL GUT SPECIALIST',
    series: [{name:'PrimeGut',desc:'世界トップクラスのナチュラルガット'},{name:'ClassicGut',desc:'柔らかさ重視のナチュラルガット'},{name:'Poly Force',desc:'コントロール系ポリの定番'},{name:'Poly Power Pro',desc:'高モジュラスポリのフラッグシップ'},{name:'X Force',desc:'アグレッシブなポリ'},{name:'Champ Tour',desc:'柔らかめポリのロングセラー'},{name:'Syntec',desc:'オールラウンドマルチ'},{name:'FTX',desc:'コンフォートマルチ'}]},
  'Signum Pro': { desc: 'ドイツ発祥のプレミアムガットブランド。FIRESTORMはベレッティーニが使用するフラッグシップ。PLASMAシリーズはスピンとコントロールで高い評価を受ける。', color: '#8e44ad', tagline: 'GERMAN PREMIUM',
    series: [{name:'FIRESTORM',desc:'ベレッティーニ使用フラッグシップ'},{name:'POLY PLASMA',desc:'スピン&コントロールの定番'},{name:'POLY PLASMA PURE',desc:'コンフォート版PLASMA'},{name:'PLASMA HEXTREME',desc:'六角断面スピン特化'},{name:'HYPERION',desc:'高反発コポリ'},{name:'TORNADO',desc:'七角ねじれ断面'},{name:'THUNDERSTORM',desc:'十角ねじれ断面'},{name:'POLARIS',desc:'細め高コンフォートポリ'},{name:'FIBERCORE',desc:'コンフォートマルチ'}]},
  'Weiss Cannon': { desc: 'ドイツ発祥の革新的ガットブランド。SILVERSTRINGはクリスプな打感で幅広い層に人気のフラッグシップ。ULTRA CABLEは四角断面のスピン特化モデル。', color: '#1a1a1a', tagline: 'GERMAN INNOVATION',
    series: [{name:'SILVERSTRING',desc:'クリスプなフラッグシップコポリ'},{name:'ULTRA CABLE',desc:'四角断面スピン特化'},{name:'SCORPION',desc:'パワー重視コポリ'},{name:'BLACK 5 EDGE',desc:'五角断面コポリ'},{name:'RED GHOST',desc:'七角断面細め'},{name:'TURBOTWIST',desc:'ねじれ構造スピン特化'},{name:'MOSQUITO BITE',desc:'超細1.16mmポリ'},{name:'EXPLOSIV',desc:'コンフォートマルチ'}]},
};

// form: 'single'=単品のみ, 'roll'=ロールのみ, 'both'=単品・ロール両方
// gaugeNum: ゲージを数値で表現（フィルター比較用）
const STRING_DATABASE = [
  // ========== Luxilon ==========
  // ALU POWER
  { id: 'luxilon-alu-power-125', brand: 'Luxilon', model: 'ALU POWER 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'シルバー', year: 2024, form: 'both', concept: 'プロ使用率No.1の定番。ホールド感と打球感のバランスが絶妙', searchKeyword: 'Luxilon ALU POWER 125', players: ['ジョコビッチ', 'シフィオンテク'] },
  { id: 'luxilon-alu-power-130', brand: 'Luxilon', model: 'ALU POWER 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'シルバー', year: 2024, form: 'both', concept: '太めで耐久性とパワーを向上させたALU POWER', searchKeyword: 'Luxilon ALU POWER 130' },
  { id: 'luxilon-alu-power-rough-125', brand: 'Luxilon', model: 'ALU POWER ROUGH 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'シルバー', year: 2024, form: 'both', concept: '凹凸加工でスピンを強化したALU POWER', searchKeyword: 'Luxilon ALU POWER ROUGH' },
  { id: 'luxilon-alu-power-soft-125', brand: 'Luxilon', model: 'ALU POWER SOFT 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'シルバー', year: 2024, form: 'both', concept: '柔らかい打感を実現したソフトタイプ', searchKeyword: 'Luxilon ALU POWER SOFT' },
  // 4G
  { id: 'luxilon-4g-125', brand: 'Luxilon', model: '4G 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ゴールド', year: 2023, form: 'both', concept: 'テンション維持性能No.1のロングセラー', searchKeyword: 'Luxilon 4G 125' },
  { id: 'luxilon-4g-soft-125', brand: 'Luxilon', model: '4G SOFT 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ゴールド', year: 2023, form: 'both', concept: '4Gの耐久性に柔らかい打感をプラス', searchKeyword: 'Luxilon 4G SOFT' },
  // ELEMENT
  { id: 'luxilon-element-125', brand: 'Luxilon', model: 'ELEMENT 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ロセ', year: 2024, form: 'both', concept: 'ポリ初心者にも優しいマイルドな打感', searchKeyword: 'Luxilon ELEMENT 125' },
  // M2
  { id: 'luxilon-m2-pro-125', brand: 'Luxilon', model: 'M2 PRO 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'グレー', year: 2024, form: 'both', concept: 'コントロール志向のテクニカルプレーヤー向け', searchKeyword: 'Luxilon M2 PRO 125' },
  // ALU POWER ICE (限定カラー)
  { id: 'luxilon-alu-power-ice-125', brand: 'Luxilon', model: 'ALU POWER ICE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'スカイブルー', year: 2024, form: 'single', concept: 'ALU POWER限定カラー・爽やかなスカイブルー', searchKeyword: 'Luxilon ALU POWER ICE 125' },
  // BIG BANGER
  { id: 'luxilon-big-banger-original-130', brand: 'Luxilon', model: 'BIG BANGER ORIGINAL 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'シルバー', year: 2023, form: 'both', concept: 'ポリエステルガットの原点', searchKeyword: 'Luxilon BIG BANGER ORIGINAL' },

  // ========== Babolat ==========
  // RPM Blast
  { id: 'babolat-rpm-blast-125', brand: 'Babolat', model: 'RPM Blast 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'ナダル・アルカラス使用、スピン系の代名詞', searchKeyword: 'Babolat RPM Blast 125', players: ['ナダル', 'アルカラス'] },
  { id: 'babolat-rpm-blast-130', brand: 'Babolat', model: 'RPM Blast 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '太めでパワーアップ、耐久性も向上', searchKeyword: 'Babolat RPM Blast 130' },
  { id: 'babolat-rpm-blast-135', brand: 'Babolat', model: 'RPM Blast 135', type: 'ポリエステル', gauge: '1.35mm', gaugeNum: 1.35, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'ハードヒッター向けの最も太いRPM', searchKeyword: 'Babolat RPM Blast 135' },
  { id: 'babolat-rpm-blast-rough-125', brand: 'Babolat', model: 'RPM Blast Rough 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '表面加工でスピン量がさらにアップ', searchKeyword: 'Babolat RPM Blast Rough' },
  // RPM Soft
  { id: 'babolat-rpm-soft-125', brand: 'Babolat', model: 'RPM Soft 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'グレー', year: 2024, form: 'both', concept: '柔らかい打感を実現したRPM', searchKeyword: 'Babolat RPM Soft' },
  // VS Touch (Natural) — ナチュラルガットは単品のみ
  { id: 'babolat-vs-touch-130', brand: 'Babolat', model: 'VS Touch 130', type: 'ナチュラル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'single', concept: '最高峰のナチュラルガット。柔らかさとパワーの極致', searchKeyword: 'Babolat VS Touch 130' },
  { id: 'babolat-vs-touch-135', brand: 'Babolat', model: 'VS Touch 135', type: 'ナチュラル', gauge: '1.35mm', gaugeNum: 1.35, length: '12m', color: 'ナチュラル', year: 2024, form: 'single', concept: '太めナチュラルでパワー重視', searchKeyword: 'Babolat VS Touch 135' },
  // Pro Hurricane
  { id: 'babolat-pro-hurricane-tour-125', brand: 'Babolat', model: 'Pro Hurricane Tour 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'イエロー', year: 2023, form: 'both', concept: 'コントロール重視のクラシックポリ', searchKeyword: 'Babolat Pro Hurricane Tour' },
  // RPM Power
  { id: 'babolat-rpm-power-125', brand: 'Babolat', model: 'RPM Power 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'イエロー', year: 2024, form: 'both', concept: 'パワー特化のRPMバリエーション・黄色が目印', searchKeyword: 'Babolat RPM Power 125' },
  { id: 'babolat-rpm-power-130', brand: 'Babolat', model: 'RPM Power 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'イエロー', year: 2024, form: 'both', concept: '太めゲージで耐久性・パワーをさらに向上', searchKeyword: 'Babolat RPM Power 130' },
  // RPM Team
  { id: 'babolat-rpm-team-125', brand: 'Babolat', model: 'RPM Team 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'フラッシュレッド', year: 2024, form: 'both', concept: 'コスパに優れたRPMエントリーモデル・鮮やかな赤', searchKeyword: 'Babolat RPM Team 125' },
  // Origin
  { id: 'babolat-origin-125', brand: 'Babolat', model: 'Origin 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2023, form: 'both', concept: 'ホールド感重視の高反発ポリ', searchKeyword: 'Babolat Origin 125' },

  // ========== Wilson ==========
  { id: 'wilson-nxt-16', brand: 'Wilson', model: 'NXT 16', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'ナチュラルに最も近いと評されるマルチフィラメント', searchKeyword: 'Wilson NXT 16' },
  { id: 'wilson-nxt-17', brand: 'Wilson', model: 'NXT 17', type: 'マルチフィラメント', gauge: '1.24mm', gaugeNum: 1.24, length: '12.2m', color: 'ナチュラル', year: 2024, form: 'both', concept: '細めNXTで打球感さらにシャープ', searchKeyword: 'Wilson NXT 17' },
  { id: 'wilson-sensation-16', brand: 'Wilson', model: 'Sensation 16', type: 'ナイロン', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'ナチュラル', year: 2023, form: 'both', concept: 'コストパフォーマンスに優れた定番ナイロン', searchKeyword: 'Wilson Sensation 16' },
  { id: 'wilson-revolve-17', brand: 'Wilson', model: 'Revolve 17', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'グリーン', year: 2024, form: 'both', concept: 'スピン重視のポリエステル', searchKeyword: 'Wilson Revolve 17' },
  { id: 'wilson-synthetic-gut-16', brand: 'Wilson', model: 'Synthetic Gut 16', type: 'ナイロン', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'ナチュラル', year: 2023, form: 'both', concept: 'リーズナブルな入門向けナイロン', searchKeyword: 'Wilson Synthetic Gut 16' },
  { id: 'wilson-champions-choice-duo', brand: 'Wilson', model: "Champion's Choice Duo", type: 'ハイブリッド', gauge: '1.25/1.30mm', gaugeNum: 1.25, length: '12.2m', color: 'シルバー/ナチュラル', year: 2024, form: 'single', concept: 'ALU POWER+ナチュラルのハイブリッド、フェデラー仕様', searchKeyword: "Wilson Champion's Choice", players: ['フェデラー'] },

  // ========== YONEX ==========
  { id: 'yonex-polytour-pro-125', brand: 'YONEX', model: 'POLYTOUR PRO 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'グラファイト', colors: ['グラファイト', 'フラッシュイエロー'], year: 2024, form: 'both', concept: 'バランスの取れたツアーポリ', searchKeyword: 'ヨネックス POLYTOUR PRO 125 グラファイト' },
  { id: 'yonex-polytour-pro-120', brand: 'YONEX', model: 'POLYTOUR PRO 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'グラファイト', year: 2024, form: 'both', concept: '細め1.20mm・よりシャープな打球感のPOLYTOUR PRO', searchKeyword: 'ヨネックス POLYTOUR PRO 120' },
  { id: 'yonex-polytour-pro-130', brand: 'YONEX', model: 'POLYTOUR PRO 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'グラファイト', year: 2024, form: 'both', concept: '太めPOLYTOUR PROで耐久性アップ', searchKeyword: 'ヨネックス POLYTOUR PRO 130' },
  { id: 'yonex-polytour-strike-125', brand: 'YONEX', model: 'POLYTOUR STRIKE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'コバルトブルー', colors: ['コバルトブルー', 'シルバー'], year: 2025, form: 'both', concept: 'パワー重視のPOLYTOUR', searchKeyword: 'ヨネックス POLYTOUR STRIKE 125' },
  { id: 'yonex-polytour-rev-125', brand: 'YONEX', model: 'POLYTOUR REV 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブライトイエロー', colors: ['ブライトイエロー', 'ピンク'], year: 2024, form: 'both', concept: 'スピン特化、五角形断面', searchKeyword: 'ヨネックス POLYTOUR REV' },
  { id: 'yonex-polytour-air-125', brand: 'YONEX', model: 'POLYTOUR AIR 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ホワイト', colors: ['ホワイト', 'オレンジ'], year: 2024, form: 'both', concept: '柔らかい打感のポリ', searchKeyword: 'ヨネックス POLYTOUR AIR 125' },
  { id: 'yonex-polytour-rev-120', brand: 'YONEX', model: 'POLYTOUR REV 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'ブライトイエロー', year: 2024, form: 'both', concept: '細め1.20mm・よりシャープなスピン&コントロール', searchKeyword: 'ヨネックス POLYTOUR REV 120' },
  { id: 'yonex-polytour-spin-125', brand: 'YONEX', model: 'POLYTOUR SPIN 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2025, form: 'both', concept: '2024-25新作・スナップバック特化でスピン量を大幅アップ', searchKeyword: 'ヨネックス POLYTOUR SPIN 125' },
  { id: 'yonex-polytour-spin-120', brand: 'YONEX', model: 'POLYTOUR SPIN 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'ブラック', year: 2025, form: 'both', concept: '細め1.20mm・より鋭いスピン&コントロール', searchKeyword: 'ヨネックス POLYTOUR SPIN 120' },
  { id: 'yonex-polytour-fire-120', brand: 'YONEX', model: 'POLYTOUR FIRE 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'フラッシュイエロー', year: 2024, form: 'both', concept: '鋭い球離れ・スピン+スナップバックのニュースタンダード', searchKeyword: 'ヨネックス POLYTOUR FIRE 120' },
  { id: 'yonex-polytour-fire-115', brand: 'YONEX', model: 'POLYTOUR FIRE 115', type: 'ポリエステル', gauge: '1.15mm', gaugeNum: 1.15, length: '12m', color: 'フラッシュイエロー', year: 2024, form: 'both', concept: '超細ゲージ1.15mm・最大スピンを追求', searchKeyword: 'ヨネックス POLYTOUR FIRE 115' },
  { id: 'yonex-aerobite', brand: 'YONEX', model: 'AEROBITE', type: 'ハイブリッド', gauge: '1.25/1.30mm', gaugeNum: 1.25, length: '12m×2本', color: 'コバルトブルー/ホワイト', year: 2024, form: 'single', concept: 'コントロール特化ハイブリッドセット・縦1.25mm(青)+横1.30mm(白)の異径構成', searchKeyword: 'ヨネックス AEROBITE' },
  { id: 'yonex-rexis-130', brand: 'YONEX', model: 'REXIS 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'シャンパンゴールド', year: 2024, form: 'both', concept: 'プレミアムマルチ。柔らかい打感と耐久性', searchKeyword: 'ヨネックス REXIS 130' },
  { id: 'yonex-rexis-125', brand: 'YONEX', model: 'REXIS 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'シャンパンゴールド', year: 2024, form: 'both', concept: '細め1.25mm・よりシャープな打感のプレミアムマルチ', searchKeyword: 'ヨネックス REXIS 125' },

  // ========== HEAD ==========
  { id: 'head-lynx-tour-125', brand: 'HEAD', model: 'LYNX TOUR 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'シャンパン', year: 2024, form: 'both', concept: 'ジョコビッチ仕様。コントロールとフィーリング', searchKeyword: 'HEAD LYNX TOUR 125', players: ['ジョコビッチ'] },
  { id: 'head-lynx-tour-130', brand: 'HEAD', model: 'LYNX TOUR 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'シャンパン', year: 2024, form: 'both', concept: '太めLYNX TOURで耐久性向上', searchKeyword: 'HEAD LYNX TOUR 130' },
  { id: 'head-lynx-125', brand: 'HEAD', model: 'LYNX 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'グリーン', year: 2023, form: 'both', concept: 'スピン系ポリの定番', searchKeyword: 'HEAD LYNX 125' },
  { id: 'head-hawk-touch-125', brand: 'HEAD', model: 'HAWK TOUCH 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'アンスラサイト', year: 2024, form: 'both', concept: 'ポリ初心者にも優しい柔らかな打感', searchKeyword: 'HEAD HAWK TOUCH' },
  { id: 'head-velocity-125', brand: 'HEAD', model: 'VELOCITY 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2023, form: 'both', concept: '柔らかい打感のマルチ', searchKeyword: 'HEAD VELOCITY 125' },
  { id: 'head-sonic-pro-125', brand: 'HEAD', model: 'SONIC PRO 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2023, form: 'both', concept: 'コントロール重視の薄ポリ', searchKeyword: 'HEAD SONIC PRO' },
  { id: 'head-hawk-125', brand: 'HEAD', model: 'HAWK 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'スピン系スタンダードポリ・HAWK TOUCHより硬め', searchKeyword: 'HEAD HAWK 125' },
  { id: 'head-lynx-tour-115', brand: 'HEAD', model: 'LYNX TOUR 115', type: 'ポリエステル', gauge: '1.15mm', gaugeNum: 1.15, length: '12m', color: 'シャンパン', year: 2024, form: 'both', concept: '超細ゲージ版LYNX TOUR・ジョコビッチ系の鋭い打感', searchKeyword: 'HEAD LYNX TOUR 115' },

  // ========== Tecnifibre ==========
  { id: 'tecnifibre-razor-code-125', brand: 'Tecnifibre', model: 'RAZOR CODE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'カーボン', year: 2024, form: 'both', concept: 'コントロール重視のテクニカルポリ', searchKeyword: 'テクニファイバー RAZOR CODE' },
  { id: 'tecnifibre-black-code-125', brand: 'Tecnifibre', model: 'BLACK CODE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '五角形断面で圧倒的なスピン量', searchKeyword: 'テクニファイバー BLACK CODE' },
  { id: 'tecnifibre-x-one-biphase-130', brand: 'Tecnifibre', model: 'X-ONE BIPHASE 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'single', concept: '世界最高峰のマルチフィラメント', searchKeyword: 'テクニファイバー X-ONE BIPHASE' },
  { id: 'tecnifibre-triax-130', brand: 'Tecnifibre', model: 'TRIAX 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'グレー', year: 2024, form: 'both', concept: 'ポリのフィーリングを持つマルチ', searchKeyword: 'テクニファイバー TRIAX' },
  { id: 'tecnifibre-duramix-130', brand: 'Tecnifibre', model: 'DURAMIX 130', type: 'ナイロン', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2023, form: 'both', concept: '耐久性重視の高コスパナイロン', searchKeyword: 'テクニファイバー DURAMIX' },
  { id: 'tecnifibre-black-code-4s-125', brand: 'Tecnifibre', model: 'BLACK CODE 4S 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '四角断面のBLACK CODE・さらに高いスピン&コントロール', searchKeyword: 'テクニファイバー BLACK CODE 4S' },
  { id: 'tecnifibre-hdmx-125', brand: 'Tecnifibre', model: 'HDMX 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'ハイブリッドダイナミクス素材・マルチとポリの中間的打感', searchKeyword: 'テクニファイバー HDMX 125' },

  // ========== Solinco ==========
  { id: 'solinco-hyper-g-125', brand: 'Solinco', model: 'HYPER-G 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'グリーン', year: 2024, form: 'both', concept: 'シフィオンテク使用。五角形断面で圧倒的なスピン', searchKeyword: 'Solinco HYPER-G 125', players: ['シフィオンテク'] },
  { id: 'solinco-hyper-g-130', brand: 'Solinco', model: 'HYPER-G 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'グリーン', year: 2024, form: 'both', concept: '太めHYPER-Gで耐久性アップ', searchKeyword: 'Solinco HYPER-G 130' },
  { id: 'solinco-hyper-g-soft-125', brand: 'Solinco', model: 'HYPER-G SOFT 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'グリーン', year: 2024, form: 'both', concept: '柔らかい打感のHYPER-G', searchKeyword: 'Solinco HYPER-G SOFT' },
  { id: 'solinco-tour-bite-125', brand: 'Solinco', model: 'TOUR BITE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'シルバー', year: 2023, form: 'both', concept: '正方形断面で食いつき抜群、スピン特化', searchKeyword: 'Solinco TOUR BITE' },
  { id: 'solinco-tour-bite-soft-125', brand: 'Solinco', model: 'TOUR BITE SOFT 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'シルバー', year: 2023, form: 'both', concept: '柔らかいTOUR BITE', searchKeyword: 'Solinco TOUR BITE SOFT' },
  { id: 'solinco-confidential-125', brand: 'Solinco', model: 'CONFIDENTIAL 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ブラック', year: 2023, form: 'both', concept: 'コントロール志向のプレミアムポリ', searchKeyword: 'Solinco CONFIDENTIAL' },

  // ========== Gosen ==========
  { id: 'gosen-og-sheep-micro-125', brand: 'Gosen', model: 'OG-SHEEP MICRO 16L', type: 'ナイロン', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ナチュラル', colors: ['ナチュラル', 'ホワイト'], year: 2023, form: 'both', concept: '学生定番。コスパ最強の鉄板ナイロン', searchKeyword: 'ゴーセン OG-SHEEP MICRO' },
  { id: 'gosen-og-sheep-micro-130', brand: 'Gosen', model: 'OG-SHEEP MICRO 16', type: 'ナイロン', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'ナチュラル', colors: ['ナチュラル', 'ホワイト'], year: 2023, form: 'both', concept: '太めOG-SHEEPで耐久性アップ', searchKeyword: 'ゴーセン OG-SHEEP MICRO 16' },
  { id: 'gosen-polylon-comfort-125', brand: 'Gosen', model: 'POLYLON COMFORT 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ブラック', year: 2024, form: 'both', concept: 'コスパに優れた柔らかポリ', searchKeyword: 'ゴーセン POLYLON COMFORT' },
  { id: 'gosen-egg-power-125', brand: 'Gosen', model: 'EGG POWER 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'イエロー', year: 2023, form: 'both', concept: '楕円断面で高反発、パワー系ポリ', searchKeyword: 'ゴーセン EGG POWER' },
  { id: 'gosen-polylon-ice-125', brand: 'Gosen', model: 'POLYLON ICE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'クリアブルー', year: 2024, form: 'both', concept: 'Gosenの人気ポリ・クリアブルーが特徴的', searchKeyword: 'ゴーセン POLYLON ICE 125' },
  { id: 'gosen-umami-tour-125', brand: 'Gosen', model: 'UMAMI TOUR 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ホワイト', year: 2024, form: 'both', concept: '日本らしい繊細な打感のプレミアムポリ', searchKeyword: 'ゴーセン UMAMI TOUR 125' },

  // ========== Dunlop ==========
  { id: 'dunlop-iconic-all-125', brand: 'Dunlop', model: 'ICONIC ALL 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'オールラウンドポリ・コントロールと耐久性のバランス', searchKeyword: 'ダンロップ ICONIC ALL 125' },
  { id: 'dunlop-iconic-spin-125', brand: 'Dunlop', model: 'ICONIC SPIN 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'イエロー', year: 2024, form: 'both', concept: 'スピン特化型・五角形断面採用', searchKeyword: 'ダンロップ ICONIC SPIN 125' },
  { id: 'dunlop-iconic-tour-125', brand: 'Dunlop', model: 'ICONIC TOUR 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'レッド', year: 2024, form: 'both', concept: 'ツアープレーヤー向けコントロール系ポリ', searchKeyword: 'ダンロップ ICONIC TOUR 125' },
  { id: 'dunlop-iconic-comfort-130', brand: 'Dunlop', model: 'ICONIC COMFORT 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '柔らかい打感のマルチフィラメント・腕への負担軽減', searchKeyword: 'ダンロップ ICONIC COMFORT 130' },

  // ========== Toalson ==========
  { id: 'toalson-toughblade-125', brand: 'Toalson', model: 'TOUGH BLADE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', colors: ['ナチュラル', 'ブラック'], year: 2024, form: 'both', concept: '日本製コスパ最強ポリ・学生・一般プレーヤーに大人気', searchKeyword: 'トアルソン TOUGH BLADE 125' },
  { id: 'toalson-toughblade-130', brand: 'Toalson', model: 'TOUGH BLADE 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '太めタフブレードで耐久性重視', searchKeyword: 'トアルソン TOUGH BLADE 130' },
  { id: 'toalson-asterism-125', brand: 'Toalson', model: 'ASTERISM 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブルー', colors: ['ブルー', 'オレンジ'], year: 2024, form: 'both', concept: '五角形断面でスピン&コントロール両立の高性能ポリ', searchKeyword: 'トアルソン ASTERISM 125' },
  { id: 'toalson-asterism-soft-125', brand: 'Toalson', model: 'ASTERISM SOFT 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ピンク', year: 2024, form: 'both', concept: 'ソフト版アスタリズム・腕への負担を軽減', searchKeyword: 'トアルソン ASTERISM SOFT 125' },
  { id: 'toalson-poly-tour-spin-125', brand: 'Toalson', model: 'POLY TOUR SPIN 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'オレンジ', year: 2024, form: 'both', concept: 'スピン特化ポリ・中厚ラケット向け', searchKeyword: 'トアルソン ポリツアー スピン 125' },

  // ========== Prince ==========
  { id: 'prince-beast-xp-125', brand: 'Prince', model: 'BEAST XP 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'BEASTラケット専用開発・スピンとパワーの爆発力', searchKeyword: 'プリンス BEAST XP 125' },
  { id: 'prince-beast-xp-130', brand: 'Prince', model: 'BEAST XP 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '太めBEAST XP・耐久性重視', searchKeyword: 'プリンス BEAST XP 130' },
  { id: 'prince-phantom-touch-130', brand: 'Prince', model: 'PHANTOM TOUCH 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '柔らかい打感のマルチ・ナチュラルガット代替として人気', searchKeyword: 'プリンス PHANTOM TOUCH 130' },
  { id: 'prince-premier-control-125', brand: 'Prince', model: 'PREMIER CONTROL 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ホワイト', year: 2024, form: 'both', concept: 'コントロール重視ポリ・ナイロンに近い打感', searchKeyword: 'プリンス PREMIER CONTROL 125' },

  // ========== Luxilon (追加モデル) ==========
  { id: 'luxilon-alu-power-110', brand: 'Luxilon', model: 'ALU POWER 110', type: 'ポリエステル', gauge: '1.10mm', gaugeNum: 1.10, length: '12.2m', color: 'シルバー', year: 2024, form: 'both', concept: '超細1.10mm・最大スナップバックと鋭い打感', searchKeyword: 'Luxilon ALU POWER 110' },
  { id: 'luxilon-alu-power-vibe-125', brand: 'Luxilon', model: 'ALU POWER VIBE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'シルバー', year: 2024, form: 'both', concept: '振動吸収コーティングで腕への負担を軽減したALU POWER', searchKeyword: 'Luxilon ALU POWER VIBE 125' },
  { id: 'luxilon-alu-power-black-125', brand: 'Luxilon', model: 'ALU POWER BLACK 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ブラック', year: 2024, form: 'both', concept: 'ALU POWERのブラックカラー・ステルス仕上げ', searchKeyword: 'Luxilon ALU POWER ブラック 125' },
  { id: 'luxilon-4g-black-125', brand: 'Luxilon', model: '4G BLACK 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ブラック', year: 2023, form: 'both', concept: '4Gのブラックカラー・テンション維持性能を継承', searchKeyword: 'Luxilon 4G BLACK 125' },
  { id: 'luxilon-element-black-128', brand: 'Luxilon', model: 'ELEMENT BLACK 128', type: 'ポリエステル', gauge: '1.28mm', gaugeNum: 1.28, length: '12.2m', color: 'ブラック', year: 2024, form: 'both', concept: '独自1.28mm・マイルドなELEMENTのブラック版', searchKeyword: 'Luxilon ELEMENT BLACK 128' },
  { id: 'luxilon-eco-power-125', brand: 'Luxilon', model: 'ECO POWER 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'シルバー', year: 2024, form: 'both', concept: 'リサイクル素材使用のサステナブルポリ・コスパ重視', searchKeyword: 'Luxilon ECO POWER 125' },
  { id: 'luxilon-natural-gut-125', brand: 'Luxilon', model: 'NATURAL GUT 125', type: 'ナチュラル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ナチュラル', year: 2024, form: 'single', concept: 'Luxilonブランドの高品質ナチュラルガット', searchKeyword: 'Luxilon ナチュラルガット 125' },

  // ========== Babolat (追加モデル) ==========
  { id: 'babolat-syn-gut-125', brand: 'Babolat', model: 'Syn-Gut 125', type: 'ナイロン', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2023, form: 'both', concept: '入門向け定番ナイロン・コスパNo.1', searchKeyword: 'Babolat Syn-Gut シンガット 125' },
  { id: 'babolat-excel-125', brand: 'Babolat', model: 'Excel 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '柔らかく包み込む打感の人気マルチフィラメント', searchKeyword: 'Babolat Excel エクセル 125' },
  { id: 'babolat-excel-red-125', brand: 'Babolat', model: 'Excel Red 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'レッド', year: 2024, form: 'both', concept: 'Excelのレッドカラーバリエーション・目を引く赤', searchKeyword: 'Babolat Excel Red 125' },
  { id: 'babolat-addiction-plus-125', brand: 'Babolat', model: 'Addiction Plus 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'ソフト打感のエントリーマルチ・腕に優しい設計', searchKeyword: 'Babolat Addiction Plus アディクション 125' },
  { id: 'babolat-touch-tonic-130', brand: 'Babolat', model: 'Touch Tonic 130', type: 'ナチュラル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'single', concept: 'VS Touchより手頃なナチュラルガット・試合向け', searchKeyword: 'Babolat Touch Tonic タッチトニック 130' },
  { id: 'babolat-rpm-rough-125', brand: 'Babolat', model: 'RPM Rough 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ダークグレー', year: 2024, form: 'both', concept: 'ざらつき加工でスピンを最大化した新RPMシリーズ', searchKeyword: 'Babolat RPM Rough 125' },
  { id: 'babolat-rpm-hurricane-120', brand: 'Babolat', model: 'RPM Hurricane 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'コントロール志向の1.20mm細ゲージポリ', searchKeyword: 'Babolat RPM Hurricane 120' },

  // ========== Wilson (追加モデル) ==========
  { id: 'wilson-repel-124', brand: 'Wilson', model: 'Repel 124', type: 'ポリエステル', gauge: '1.24mm', gaugeNum: 1.24, length: '12.2m', color: 'ブラック', year: 2024, form: 'both', concept: 'Wilsonのスピン重視コポリ・角断面でボールを噛む', searchKeyword: 'Wilson Repel 124' },
  { id: 'wilson-nxt-soft-16', brand: 'Wilson', model: 'NXT Soft 16', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'ナチュラル', year: 2023, form: 'both', concept: 'NXTの超ソフトバージョン・最高のコンフォート感', searchKeyword: 'Wilson NXT Soft 16' },
  { id: 'wilson-nxt-power-16', brand: 'Wilson', model: 'NXT Power 16', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'ナチュラル', year: 2023, form: 'both', concept: 'パワーを強化したNXT・高反発マルチ', searchKeyword: 'Wilson NXT Power 16' },
  { id: 'wilson-natural-gut-16', brand: 'Wilson', model: 'Natural Gut 16', type: 'ナチュラル', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'ナチュラル', year: 2024, form: 'single', concept: 'Wilsonの本格ナチュラルガット・最高の反発と打感', searchKeyword: 'Wilson ナチュラルガット Natural Gut 16' },
  { id: 'wilson-reaction-16', brand: 'Wilson', model: 'Reaction 16', type: 'ナイロン', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'ナチュラル', year: 2023, form: 'both', concept: 'コスパ重視の定番ナイロン・耐久性と反発のバランス', searchKeyword: 'Wilson Reaction 16' },
  { id: 'wilson-hybrid-duo-power', brand: 'Wilson', model: 'Hybrid Duo Power', type: 'ハイブリッド', gauge: '1.25/1.30mm', gaugeNum: 1.25, length: '12.2m', color: 'シルバー/ナチュラル', year: 2024, form: 'single', concept: 'パワー重視のハイブリッドセット', searchKeyword: 'Wilson Hybrid Duo Power ハイブリッド' },
  { id: 'wilson-hybrid-duo-feel', brand: 'Wilson', model: 'Hybrid Duo Feel', type: 'ハイブリッド', gauge: '1.25/1.30mm', gaugeNum: 1.25, length: '12.2m', color: 'ナチュラル', year: 2024, form: 'single', concept: 'フィール重視のハイブリッドセット', searchKeyword: 'Wilson Hybrid Duo Feel ハイブリッド' },

  // ========== HEAD (追加モデル) ==========
  { id: 'head-synthetic-gut-jp-130', brand: 'HEAD', model: 'Synthetic Gut JP 130', type: 'ナイロン', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ホワイト', year: 2023, form: 'both', concept: '入門者向けスタンダードナイロン・日本市場向け', searchKeyword: 'HEAD シンセティックガット Synthetic Gut JP 130' },
  { id: 'head-lynx-touch-125', brand: 'HEAD', model: 'LYNX TOUCH 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'アンスラサイト', year: 2024, form: 'both', concept: '振動吸収コーティングで肘に優しいLYNX', searchKeyword: 'HEAD LYNX TOUCH 125' },
  { id: 'head-hawk-power-125', brand: 'HEAD', model: 'HAWK POWER 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ペトロール', year: 2024, form: 'both', concept: 'パワー重視のHAWKバリエーション・青緑カラー', searchKeyword: 'HEAD HAWK POWER 125' },

  // ========== Tecnifibre (追加モデル) ==========
  { id: 'tecnifibre-razor-soft-120', brand: 'Tecnifibre', model: 'RAZOR SOFT 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'ホワイト', year: 2024, form: 'both', concept: '柔らかくマイルドな打感・腕に優しい1.20mmポリ', searchKeyword: 'テクニファイバー RAZOR SOFT 120' },
  { id: 'tecnifibre-razor-spin-125', brand: 'Tecnifibre', model: 'RAZOR SPIN 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'スピン特化の最新RAZORシリーズ・独自断面採用', searchKeyword: 'テクニファイバー RAZOR SPIN 125' },
  { id: 'tecnifibre-ice-code-120', brand: 'Tecnifibre', model: 'ICE CODE 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'ホワイト', year: 2023, form: 'both', concept: 'コスパ重視エントリーポリ・白く清潔感のある外観', searchKeyword: 'テクニファイバー ICE CODE 120' },
  { id: 'tecnifibre-red-code-125', brand: 'Tecnifibre', model: 'RED CODE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'レッド', year: 2024, form: 'both', concept: '五角断面スピン特化のRED CODE・鮮やかな赤', searchKeyword: 'テクニファイバー RED CODE 125' },
  { id: 'tecnifibre-tgv-130', brand: 'Tecnifibre', model: 'TGV 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2023, form: 'both', concept: 'X-ONE BIPHASEより手頃なプレミアムマルチ', searchKeyword: 'テクニファイバー TGV 130' },
  { id: 'tecnifibre-nrg2-130', brand: 'Tecnifibre', model: 'NRG2 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2023, form: 'both', concept: '柔らかく反発性の高いスタンダードマルチ', searchKeyword: 'テクニファイバー NRG2 130' },
  { id: 'tecnifibre-xr3-125', brand: 'Tecnifibre', model: 'XR3 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '細めゲージのプレミアムマルチ・シャープな打感', searchKeyword: 'テクニファイバー XR3 125' },
  { id: 'tecnifibre-multifeel-125', brand: 'Tecnifibre', model: 'MULTIFEEL 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'エントリー向けコスパマルチ・柔らかな打感', searchKeyword: 'テクニファイバー マルチフィール MULTIFEEL 125' },

  // ========== Solinco (追加モデル) ==========
  { id: 'solinco-hyper-g-round-120', brand: 'Solinco', model: 'HYPER-G ROUND 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12.2m', color: 'グリーン', year: 2024, form: 'both', concept: '丸断面HYPER-G・滑らかな打感でコントロール向上', searchKeyword: 'Solinco HYPER-G ROUND 120' },
  { id: 'solinco-mach-ten-120', brand: 'Solinco', model: 'MACH TEN 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12.2m', color: 'ホワイト', year: 2024, form: 'both', concept: '高速スナップバック・パワーとスピンを両立する注目新作', searchKeyword: 'Solinco MACH TEN 120' },
  { id: 'solinco-confidential-soft-120', brand: 'Solinco', model: 'CONFIDENTIAL SOFT 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12.2m', color: 'ブラック', year: 2024, form: 'both', concept: 'CONFIDENTIALの柔らかいバージョン・1.20mm細ゲージ', searchKeyword: 'Solinco CONFIDENTIAL SOFT 120' },

  // ========== Gosen (追加モデル) ==========
  { id: 'gosen-g-tour1-125', brand: 'Gosen', model: 'G-TOUR 1 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ブラック', year: 2024, form: 'both', concept: 'GosenツアーポリNo.1・硬めでコントロール性能高い', searchKeyword: 'ゴーセン G-TOUR 1 125' },
  { id: 'gosen-g-tour2-125', brand: 'Gosen', model: 'G-TOUR 2 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'メタリックブルー', year: 2024, form: 'both', concept: 'スピン特化ツアーポリ・メタリックブルーが目印', searchKeyword: 'ゴーセン G-TOUR 2 125' },
  { id: 'gosen-g-tour3-125', brand: 'Gosen', model: 'G-TOUR 3 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ブラック', year: 2024, form: 'both', concept: 'エントリーツアーポリ・柔らかくコントロール重視', searchKeyword: 'ゴーセン G-TOUR 3 125' },
  { id: 'gosen-g-spin3-124', brand: 'Gosen', model: 'G-SPIN 3 124', type: 'ポリエステル', gauge: '1.24mm', gaugeNum: 1.24, length: '12.2m', color: 'クリムゾンレッド', year: 2024, form: 'both', concept: '17ゲージスピン特化ポリ・鮮やかな赤が特徴', searchKeyword: 'ゴーセン G-SPIN 3 124' },
  { id: 'gosen-umishima-ak-pro-130', brand: 'Gosen', model: 'UMISHIMA AK PRO 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'ナチュラル', year: 2024, form: 'both', concept: '高品質マルチフィラメント・プレミアム感のある打感', searchKeyword: 'ゴーセン 海島 UMISHIMA AK PRO 130' },
  { id: 'gosen-tech-gut-130', brand: 'Gosen', model: 'TECH GUT 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'ナチュラルガットに近い打感のマルチ・弾力豊か', searchKeyword: 'ゴーセン テックガット TECH GUT 130' },

  // ========== Dunlop (追加モデル) ==========
  { id: 'dunlop-explosive-bite-125', brand: 'Dunlop', model: 'EXPLOSIVE BITE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'イエロー', year: 2024, form: 'both', concept: '食いつき重視・スピン量を最大化する角断面ポリ', searchKeyword: 'ダンロップ EXPLOSIVE BITE 125' },
  { id: 'dunlop-explosive-tour-125', brand: 'Dunlop', model: 'EXPLOSIVE TOUR 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'ツアー向けコントロール&耐久性・プロ品質', searchKeyword: 'ダンロップ EXPLOSIVE TOUR 125' },

  // ========== Toalson (追加モデル) ==========
  { id: 'toalson-biologic-xx-123', brand: 'Toalson', model: 'BIOLOGIC XX 123', type: 'マルチフィラメント', gauge: '1.23mm', gaugeNum: 1.23, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '国産プレミアムマルチ・ナチュラルに迫る打感', searchKeyword: 'トアルソン バイオロジック XX 123' },
  { id: 'toalson-renkon-devil-spin-125', brand: 'Toalson', model: 'RENKON DEVIL SPIN 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'イエロー', year: 2024, form: 'both', concept: '蓮根断面の異形ポリ・国内最高クラスのスピン性能', searchKeyword: 'トアルソン れんこん デビルスピン RENKON 125' },
  { id: 'toalson-asterista-125', brand: 'Toalson', model: 'ASTERISTA 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'パールオレンジ', year: 2024, form: 'both', concept: 'コスパ重視のスタンダードポリ・スピンとコントロール', searchKeyword: 'トアルソン アスタリスタ ASTERISTA 125' },
  { id: 'toalson-gold-react-130', brand: 'Toalson', model: 'GOLD REACT 130', type: 'ナイロン', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ゴールド', year: 2024, form: 'both', concept: '高反発モノフィラメント・パワーと耐久性を両立', searchKeyword: 'トアルソン ゴールドリアクト GOLD REACT 130' },

  // ========== Prince (追加モデル) ==========
  { id: 'prince-lightning-xx-130', brand: 'Prince', model: 'LIGHTNING XX 130', type: 'ナイロン', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'クリア', year: 2023, form: 'both', concept: '高弾力モノフィラメント・反発とパワーを重視', searchKeyword: 'プリンス LIGHTNING XX 130' },
  { id: 'prince-lightning-xp-130', brand: 'Prince', model: 'LIGHTNING XP 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '柔らかい打感のプレミアムマルチ・LIGHTNING上位版', searchKeyword: 'プリンス LIGHTNING XP 130' },
  { id: 'prince-harrier-power-130', brand: 'Prince', model: 'HARRIER POWER 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'パワーとコンフォートを両立したプレミアムマルチ', searchKeyword: 'プリンス HARRIER POWER 130' },
  { id: 'prince-harrier-response-124', brand: 'Prince', model: 'HARRIER RESPONSE 124', type: 'マルチフィラメント', gauge: '1.24mm', gaugeNum: 1.24, length: '12m', color: 'クリアホワイト', year: 2024, form: 'both', concept: '反発性重視の細めマルチ・コントロールプレーヤー向け', searchKeyword: 'プリンス HARRIER RESPONSE 124' },
  { id: 'prince-emblem-control-130', brand: 'Prince', model: 'EMBLEM CONTROL 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'コントロール志向のスタンダードポリ・安定した打球感', searchKeyword: 'プリンス EMBLEM CONTROL 130' },
  { id: 'prince-emblem-soft-130', brand: 'Prince', model: 'EMBLEM SOFT 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'ソフト打感の中級マルチ・腕への負担軽減', searchKeyword: 'プリンス EMBLEM SOFT 130' },
  { id: 'prince-phantom-pro-130', brand: 'Prince', model: 'PHANTOM PRO 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'グラファイト', year: 2024, form: 'both', concept: 'PHANTOMシリーズのポリ版・コントロール重視のダーク系', searchKeyword: 'プリンス PHANTOM PRO 130' },
  { id: 'prince-phantom-spin-130', brand: 'Prince', model: 'PHANTOM SPIN 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'スピン特化のPHANTOMポリエステル', searchKeyword: 'プリンス PHANTOM SPIN 130' },
  { id: 'prince-tour-xx-spin-130', brand: 'Prince', model: 'TOUR XX SPIN 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ブラック', year: 2023, form: 'both', concept: 'コスパに優れたスピン向けポリ・入門から使えるPrince', searchKeyword: 'プリンス TOUR XX SPIN 130' },

  // ========== Polyfibre (新ブランド) ==========
  { id: 'polyfibre-black-venom-125', brand: 'Polyfibre', model: 'BLACK VENOM 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '欧州で高い人気・パワーと食いつきを兼ね備えたポリ', searchKeyword: 'Polyfibre ポリファイバー BLACK VENOM 125' },
  { id: 'polyfibre-black-venom-130', brand: 'Polyfibre', model: 'BLACK VENOM 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '太め1.30mmで耐久性とパワーをさらに強化', searchKeyword: 'Polyfibre ポリファイバー BLACK VENOM 130' },
  { id: 'polyfibre-black-venom-rough-125', brand: 'Polyfibre', model: 'BLACK VENOM ROUGH 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '表面加工でスピン量をさらに向上させたBLACK VENOM', searchKeyword: 'Polyfibre BLACK VENOM ROUGH 125' },
  { id: 'polyfibre-tcs-125', brand: 'Polyfibre', model: 'TCS 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '柔らかい打感のコポリ・Polyfibreのスタンダードモデル', searchKeyword: 'Polyfibre TCS 125' },
  { id: 'polyfibre-tcs-rough-125', brand: 'Polyfibre', model: 'TCS ROUGH 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '表面加工でスピンを追加したTCS・万能コポリ', searchKeyword: 'Polyfibre TCS ROUGH 125' },

  // ========== Diadem (新ブランド) ==========
  { id: 'diadem-solstice-black-120', brand: 'Diadem', model: 'SOLSTICE BLACK 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '米国新興ブランドのフラッグシップ・スピン&コントロール', searchKeyword: 'Diadem ダイアデム SOLSTICE BLACK 120' },
  { id: 'diadem-solstice-power-120', brand: 'Diadem', model: 'SOLSTICE POWER 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'ティール', year: 2024, form: 'both', concept: 'パワー特化のSOLSTICEバリエーション・ターコイズカラー', searchKeyword: 'Diadem SOLSTICE POWER 120' },
  { id: 'diadem-evolution-125', brand: 'Diadem', model: 'EVOLUTION 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'バランス型スタンダードポリ・オールラウンドプレーヤー向け', searchKeyword: 'Diadem EVOLUTION 125' },
  { id: 'diadem-dark-matter-125', brand: 'Diadem', model: 'DARK MATTER 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '多角断面で最高スピン性能を追求した異形ポリ', searchKeyword: 'Diadem DARK MATTER 125' },

  // ========== Luxilon (追加3) ==========
  { id: 'luxilon-alu-power-spin-127', brand: 'Luxilon', model: 'ALU POWER SPIN 127', type: 'ポリエステル', gauge: '1.27mm', gaugeNum: 1.27, length: '12.2m', color: 'シルバー', year: 2024, form: 'both', concept: '五角断面でスピンを強化したALU POWERバリエーション', searchKeyword: 'Luxilon ALU POWER SPIN 127' },
  { id: 'luxilon-4g-rough-125', brand: 'Luxilon', model: '4G ROUGH 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ゴールド', year: 2024, form: 'both', concept: '表面加工でスピン強化・テンション維持も優秀な4G', searchKeyword: 'Luxilon 4G ROUGH 125' },
  { id: 'luxilon-element-rough-130', brand: 'Luxilon', model: 'ELEMENT ROUGH 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'ロセ', year: 2024, form: 'both', concept: 'ざらつき加工のELEMENT・スピンとコンフォートの融合', searchKeyword: 'Luxilon ELEMENT ROUGH 130' },
  { id: 'luxilon-savage-127', brand: 'Luxilon', model: 'SAVAGE 127', type: 'ポリエステル', gauge: '1.27mm', gaugeNum: 1.27, length: '12.2m', color: 'ブラック', year: 2024, form: 'both', concept: '六角断面でスピン量を最大化・硬めのコントロール系ポリ', searchKeyword: 'Luxilon SAVAGE 127' },
  { id: 'luxilon-eco-rough-125', brand: 'Luxilon', model: 'ECO ROUGH 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'グレー', year: 2024, form: 'both', concept: 'リサイクル素材の表面加工ポリ・スピン重視のエコモデル', searchKeyword: 'Luxilon ECO ROUGH 125' },
  { id: 'luxilon-eco-spin-125', brand: 'Luxilon', model: 'ECO SPIN 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'グレー', year: 2024, form: 'both', concept: 'リサイクル素材の五角断面ポリ・スピン特化のエコライン', searchKeyword: 'Luxilon ECO SPIN 125' },

  // ========== Babolat (追加3) ==========
  { id: 'babolat-rpm-blast-120', brand: 'Babolat', model: 'RPM Blast 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '最細1.20mmのRPM Blast・最大スピンと繊細な打感', searchKeyword: 'Babolat RPM Blast 120' },
  { id: 'babolat-vs-touch-125', brand: 'Babolat', model: 'VS Touch 125', type: 'ナチュラル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'single', concept: '細め1.25mmのプレミアムナチュラルガット', searchKeyword: 'Babolat VS Touch 125' },
  { id: 'babolat-xplore-125', brand: 'Babolat', model: 'Xplore 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'コンフォートと反発を両立するエントリーマルチ', searchKeyword: 'Babolat Xplore エクスプロア 125' },
  { id: 'babolat-rpm-hurricane-130', brand: 'Babolat', model: 'RPM Hurricane 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '太め1.30mmの耐久重視RPM Hurricane', searchKeyword: 'Babolat RPM Hurricane 130' },

  // ========== Wilson (追加3) ==========
  { id: 'wilson-revolve-16', brand: 'Wilson', model: 'Revolve 16', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12.2m', color: 'グリーン', year: 2024, form: 'both', concept: '太め1.30mmのスピン系コポリ・耐久性も向上', searchKeyword: 'Wilson Revolve 16' },
  { id: 'wilson-revolve-spin-17', brand: 'Wilson', model: 'Revolve Spin 17', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'レッド', year: 2024, form: 'both', concept: '表面加工でスピンを最大化したRevolveバリエーション', searchKeyword: 'Wilson Revolve Spin 17' },

  // ========== YONEX (追加3 - 新シリーズ) ==========
  { id: 'yonex-polytour-force-120', brand: 'YONEX', model: 'POLYTOUR FORCE 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'ブライトレッド', year: 2025, form: 'both', concept: '2025年新作・細め1.20mmでパワーと食いつき両立', searchKeyword: 'ヨネックス POLYTOUR FORCE 120' },
  { id: 'yonex-polytour-force-125', brand: 'YONEX', model: 'POLYTOUR FORCE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブライトレッド', year: 2025, form: 'both', concept: 'パワーとコントロールのバランス型・2025年新シリーズ', searchKeyword: 'ヨネックス POLYTOUR FORCE 125' },
  { id: 'yonex-polytour-force-130', brand: 'YONEX', model: 'POLYTOUR FORCE 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ブライトレッド', year: 2025, form: 'both', concept: '太め1.30mmでパワーと耐久性を最大化', searchKeyword: 'ヨネックス POLYTOUR FORCE 130' },
  { id: 'yonex-polytour-drive-125', brand: 'YONEX', model: 'POLYTOUR DRIVE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブライトオレンジ', year: 2024, form: 'both', concept: '八角断面+シリコンオイル注入でスピンとコントロール', searchKeyword: 'ヨネックス POLYTOUR DRIVE 125' },
  { id: 'yonex-polytour-drive-soft-125', brand: 'YONEX', model: 'POLYTOUR DRIVE SOFT 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ピンク', year: 2024, form: 'both', concept: 'POLYTOUR DRIVEの柔らかいバージョン・腕への負担軽減', searchKeyword: 'ヨネックス POLYTOUR DRIVE SOFT 125' },

  // ========== HEAD (追加3) ==========
  { id: 'head-lynx-power-125', brand: 'HEAD', model: 'LYNX POWER 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'イエロー', year: 2024, form: 'both', concept: 'パワーとポケッティングを強化したLYNX新バリエーション', searchKeyword: 'HEAD LYNX POWER 125' },
  { id: 'head-hawk-tour-rpet-125', brand: 'HEAD', model: 'HAWK TOUR rPET 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'リサイクルPET素材の七角断面ポリ・スピン&エコ両立', searchKeyword: 'HEAD HAWK TOUR rPET 125' },
  { id: 'head-sonic-pro-tour-rpet-125', brand: 'HEAD', model: 'SONIC PRO TOUR rPET 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '八角断面+リサイクルPET・スピン特化のエコポリ', searchKeyword: 'HEAD SONIC PRO TOUR rPET 125' },
  { id: 'head-velocity-power-125', brand: 'HEAD', model: 'VELOCITY POWER 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'パワーを強化したVELOCITYマルチ・高反発で腕に優しい', searchKeyword: 'HEAD VELOCITY POWER 125' },
  { id: 'head-reflex-mlt-125', brand: 'HEAD', model: 'REFLEX MLT 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '超コンフォートのプレミアムマルチ・衝撃吸収特化設計', searchKeyword: 'HEAD REFLEX MLT 125' },

  // ========== Tecnifibre (追加3) ==========
  { id: 'tecnifibre-pro-red-code-125', brand: 'Tecnifibre', model: 'PRO RED CODE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'レッド', year: 2024, form: 'both', concept: 'RED CODEのコスパ重視版・入門〜中級者に最適なポリ', searchKeyword: 'テクニファイバー PRO RED CODE 125' },
  { id: 'tecnifibre-pro-red-code-wax-125', brand: 'Tecnifibre', model: 'PRO RED CODE WAX 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'レッド', year: 2024, form: 'both', concept: 'ワックス注入でスナップバック向上のコスパポリ', searchKeyword: 'テクニファイバー PRO RED CODE WAX 125' },

  // ========== Solinco (追加3) ==========
  { id: 'solinco-revolution-125', brand: 'Solinco', model: 'REVOLUTION 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ブラック', year: 2024, form: 'both', concept: '六角断面でスピンとコントロールを強化した新世代ポリ', searchKeyword: 'Solinco REVOLUTION 125' },
  { id: 'solinco-barb-wire-125', brand: 'Solinco', model: 'BARB WIRE 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'シルバー', year: 2024, form: 'both', concept: 'ラフ加工でアグレッシブなスピンバイト・コントロール志向', searchKeyword: 'Solinco BARB WIRE 125' },
  { id: 'solinco-outlast-125', brand: 'Solinco', model: 'OUTLAST 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ブラック', year: 2024, form: 'both', concept: '最高クラスの耐久性・ストリングブレーカーに最適', searchKeyword: 'Solinco OUTLAST 125' },
  { id: 'solinco-tour-bite-diamond-rough-125', brand: 'Solinco', model: 'TOUR BITE DIAMOND ROUGH 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'シルバー', year: 2024, form: 'both', concept: 'ダイヤモンドラフ加工でTOUR BITEのスピン量を極限まで強化', searchKeyword: 'Solinco TOUR BITE DIAMOND ROUGH 125' },
  { id: 'solinco-vanquish-125', brand: 'Solinco', model: 'VANQUISH 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ナチュラル', year: 2024, form: 'both', concept: '豊かな打感とパワーを兼ね備えたSolinco初のマルチ', searchKeyword: 'Solinco VANQUISH 125' },

  // ========== Gosen (追加3) ==========
  { id: 'gosen-polylon-sidewinder-125', brand: 'Gosen', model: 'POLYLON SIDEWINDER 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12.2m', color: 'ブラック', year: 2024, form: 'both', concept: '楕円形異形断面でコントロールとスピンを両立する国産ポリ', searchKeyword: 'ゴーセン ポリロン サイドワインダー POLYLON SIDEWINDER 125' },
  { id: 'gosen-polybreak-124', brand: 'Gosen', model: 'POLYBREAK 124', type: 'ポリエステル', gauge: '1.24mm', gaugeNum: 1.24, length: '12.2m', color: 'ブラック', year: 2024, form: 'both', concept: '丸型コポリ・柔らかめでコントロール重視のリーズナブルポリ', searchKeyword: 'ゴーセン ポリブレイク POLYBREAK 124' },
  { id: 'gosen-g-xx1-hybrid', brand: 'Gosen', model: 'G-XX 1 Hybrid', type: 'ハイブリッド', gauge: '1.25/1.24mm', gaugeNum: 1.25, length: '12m×2', color: 'ブラック', year: 2024, form: 'single', concept: 'G-TOURポリ縦×AK PROナイロン横のハイブリッドセット', searchKeyword: 'ゴーセン G-XX ハイブリッド 縦ポリ横ナイロン' },
  { id: 'gosen-tecgut-multi-cx-124', brand: 'Gosen', model: 'TECGUT MULTI CX 124', type: 'マルチフィラメント', gauge: '1.24mm', gaugeNum: 1.24, length: '12.2m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'ガット感覚のソフトマルチ・コントロール性能が高い', searchKeyword: 'ゴーセン テックガット マルチ CX 124' },

  // ========== Kirschbaum (新ブランド) ==========
  { id: 'kirschbaum-pro-line-ii-125', brand: 'Kirschbaum', model: 'PRO LINE II 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'プレストレッチ加工でテンション維持に優れるドイツ製コポリの定番', searchKeyword: 'Kirschbaum キルシュバウム PRO LINE II 125' },
  { id: 'kirschbaum-pro-line-ii-120', brand: 'Kirschbaum', model: 'PRO LINE II 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '細め1.20mmのPRO LINE II・スピン量アップ&繊細な打感', searchKeyword: 'Kirschbaum PRO LINE II 120' },
  { id: 'kirschbaum-pro-line-ii-rough-125', brand: 'Kirschbaum', model: 'PRO LINE II ROUGH 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'PRO LINE IIにラフ加工を追加・スピンバイトを強化', searchKeyword: 'Kirschbaum PRO LINE II ROUGH 125' },
  { id: 'kirschbaum-max-power-125', brand: 'Kirschbaum', model: 'MAX POWER 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'シルバー', year: 2024, form: 'both', concept: 'コントロールと耐久性を両立したベースラインプレーヤー向けコポリ', searchKeyword: 'Kirschbaum MAX POWER 125' },
  { id: 'kirschbaum-max-power-rough-125', brand: 'Kirschbaum', model: 'MAX POWER ROUGH 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'シルバー', year: 2024, form: 'both', concept: 'MAX POWERにラフ加工・スピン量を強化したコントロールポリ', searchKeyword: 'Kirschbaum MAX POWER ROUGH 125' },
  { id: 'kirschbaum-xplosive-speed-123', brand: 'Kirschbaum', model: 'XPLOSIVE SPEED 123', type: 'ポリエステル', gauge: '1.23mm', gaugeNum: 1.23, length: '12m', color: 'イエロー', year: 2024, form: 'both', concept: '異形断面が生み出すスピン&比較的柔らかい打感を両立', searchKeyword: 'Kirschbaum XPLOSIVE SPEED 123' },
  { id: 'kirschbaum-black-shark-125', brand: 'Kirschbaum', model: 'BLACK SHARK 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '八角断面がボールを噛む・スピン特化の異形ポリ', searchKeyword: 'Kirschbaum BLACK SHARK 125' },
  { id: 'kirschbaum-super-smash-orange-123', brand: 'Kirschbaum', model: 'SUPER SMASH ORANGE 123', type: 'ポリエステル', gauge: '1.23mm', gaugeNum: 1.23, length: '12m', color: 'オレンジ', year: 2024, form: 'both', concept: 'プレストレッチ加工の硬めコポリ・パワーとコントロールの王道', searchKeyword: 'Kirschbaum SUPER SMASH ORANGE 123' },
  { id: 'kirschbaum-evolution-125', brand: 'Kirschbaum', model: 'EVOLUTION 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'プレストレッチでコントロール精度を高めた上級者向けコポリ', searchKeyword: 'Kirschbaum EVOLUTION 125' },
  { id: 'kirschbaum-touch-multifibre-125', brand: 'Kirschbaum', model: 'TOUCH MULTIFIBRE 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'PUコーティングで耐久性を高めたコンフォートマルチ', searchKeyword: 'Kirschbaum TOUCH MULTIFIBRE 125' },

  // ========== MSV (新ブランド) ==========
  { id: 'msv-focus-hex-127', brand: 'MSV', model: 'FOCUS HEX 127', type: 'ポリエステル', gauge: '1.27mm', gaugeNum: 1.27, length: '12m', color: 'シルバー', year: 2024, form: 'both', concept: '六角断面スピンポリの元祖・ボールバイト抜群のドイツ製オリジナル', searchKeyword: 'MSV FOCUS HEX 127' },
  { id: 'msv-focus-hex-118', brand: 'MSV', model: 'FOCUS HEX 118', type: 'ポリエステル', gauge: '1.18mm', gaugeNum: 1.18, length: '12m', color: 'シルバー', year: 2024, form: 'both', concept: '細め1.18mmのFOCUS HEX・スピン量と繊細さを極めた超細ゲージ', searchKeyword: 'MSV FOCUS HEX 118' },
  { id: 'msv-focus-hex-soft-125', brand: 'MSV', model: 'FOCUS HEX SOFT 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'グリーン', year: 2024, form: 'both', concept: '柔らかい素材の六角断面・スピンを保ちながら腕に優しい', searchKeyword: 'MSV FOCUS HEX SOFT 125' },
  { id: 'msv-focus-hex-38-125', brand: 'MSV', model: 'FOCUS HEX +38 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブルー', year: 2024, form: 'both', concept: 'FOCUS HEXシリーズ最も柔らかい六角断面・コンフォート重視', searchKeyword: 'MSV FOCUS HEX +38 125' },
  { id: 'msv-focus-hex-ultra-130', brand: 'MSV', model: 'FOCUS HEX ULTRA 130', type: 'ポリエステル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '太め1.30mmの六角断面・頻繁に切るストリングブレーカー向け', searchKeyword: 'MSV FOCUS HEX ULTRA 130' },
  { id: 'msv-co-focus-118', brand: 'MSV', model: 'CO.-FOCUS 118', type: 'ポリエステル', gauge: '1.18mm', gaugeNum: 1.18, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '丸型コポリの細め・食いつきとコントロールに優れる薄ゲージポリ', searchKeyword: 'MSV CO-FOCUS 118' },
  { id: 'msv-hepta-twist-125', brand: 'MSV', model: 'HEPTA-TWIST 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '七角断面をねじった革新構造・強烈なスピンを生み出す異形ポリ', searchKeyword: 'MSV HEPTA-TWIST 125' },
  { id: 'msv-swift-comfort-125', brand: 'MSV', model: 'SWIFT COMFORT 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'レッド', year: 2024, form: 'both', concept: 'コンフォート優先の丸型コポリ・精密なコントロール感覚', searchKeyword: 'MSV SWIFT COMFORT 125' },

  // ========== Pacific (新ブランド) ==========
  { id: 'pacific-primegut-130', brand: 'Pacific', model: 'PrimeGut 130', type: 'ナチュラル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'single', concept: '世界最高峰クラスの柔らかさ・プロツアーでも使用されるドイツ製ナチュラルガット', searchKeyword: 'Pacific パシフィック PrimeGut ナチュラルガット 130' },
  { id: 'pacific-primegut-125', brand: 'Pacific', model: 'PrimeGut 125', type: 'ナチュラル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'single', concept: '細め1.25mmのPrimeGut・スピン&フィールを高次元で両立', searchKeyword: 'Pacific PrimeGut 125 ナチュラルガット' },
  { id: 'pacific-classicgut-130', brand: 'Pacific', model: 'ClassicGut 130', type: 'ナチュラル', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'single', concept: '世界3位の柔らかさを誇るコスパ優秀なナチュラルガット', searchKeyword: 'Pacific ClassicGut クラシックガット 130 ナチュラル' },
  { id: 'pacific-poly-force-125', brand: 'Pacific', model: 'Poly Force 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '高モジュラスポリでコントロールと耐久性を両立する定番ポリ', searchKeyword: 'Pacific パシフィック Poly Force ポリフォース 125' },
  { id: 'pacific-poly-power-pro-125', brand: 'Pacific', model: 'Poly Power Pro 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'シルバー', year: 2024, form: 'both', concept: '独自コーティングの高モジュラスポリ・コントロールと耐久性のフラッグシップ', searchKeyword: 'Pacific Poly Power Pro 125' },
  { id: 'pacific-x-force-125', brand: 'Pacific', model: 'X Force 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'アグレッシブなプレーヤー向け・コントロールとスピンのポリ', searchKeyword: 'Pacific X Force 125' },
  { id: 'pacific-champ-tour-125', brand: 'Pacific', model: 'Champ Tour 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '柔らかめ素材でフィールと耐久性を両立・長年愛される定番ポリ', searchKeyword: 'Pacific Champ Tour 125' },
  { id: 'pacific-ftx-128', brand: 'Pacific', model: 'FTX 128', type: 'マルチフィラメント', gauge: '1.28mm', gaugeNum: 1.28, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '2種のコポリフィラメントで衝撃吸収とテンション維持を両立するマルチ', searchKeyword: 'Pacific FTX 128 マルチ' },

  // ========== Signum Pro (新ブランド) ==========
  { id: 'signum-pro-firestorm-125', brand: 'Signum Pro', model: 'FIRESTORM 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'レッド', year: 2024, form: 'both', concept: 'ベレッティーニ使用・低テンションロスとコントロールのドイツ製フラッグシップ', searchKeyword: 'Signum Pro シグナムプロ FIRESTORM 125' },
  { id: 'signum-pro-poly-plasma-123', brand: 'Signum Pro', model: 'POLY PLASMA 123', type: 'ポリエステル', gauge: '1.23mm', gaugeNum: 1.23, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '広いゲージ展開のスピン&コントロールポリ・扱いやすい定番', searchKeyword: 'Signum Pro POLY PLASMA 123' },
  { id: 'signum-pro-poly-plasma-pure-123', brand: 'Signum Pro', model: 'POLY PLASMA PURE 123', type: 'ポリエステル', gauge: '1.23mm', gaugeNum: 1.23, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'POLY PLASMAのコンフォート版・柔らかさと耐久性を向上', searchKeyword: 'Signum Pro POLY PLASMA PURE 123' },
  { id: 'signum-pro-plasma-hextreme-125', brand: 'Signum Pro', model: 'PLASMA HEXTREME 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'イエロー', year: 2024, form: 'both', concept: '六角断面の強烈なボールバイトでスピン量を最大化', searchKeyword: 'Signum Pro PLASMA HEXTREME 125' },
  { id: 'signum-pro-hyperion-124', brand: 'Signum Pro', model: 'HYPERION 124', type: 'ポリエステル', gauge: '1.24mm', gaugeNum: 1.24, length: '12m', color: 'オレンジ', year: 2024, form: 'both', concept: 'テンションロスを最小化する高反発コポリ・スピンとコントロールのバランス型', searchKeyword: 'Signum Pro HYPERION 124' },
  { id: 'signum-pro-tornado-123', brand: 'Signum Pro', model: 'TORNADO 123', type: 'ポリエステル', gauge: '1.23mm', gaugeNum: 1.23, length: '12m', color: 'パープル', year: 2024, form: 'both', concept: '七角断面のねじれ構造でスピンとコンフォートを両立', searchKeyword: 'Signum Pro TORNADO 123' },
  { id: 'signum-pro-thunderstorm-124', brand: 'Signum Pro', model: 'THUNDERSTORM 124', type: 'ポリエステル', gauge: '1.24mm', gaugeNum: 1.24, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '十角断面ねじれ構造・スピンとコントロールを極めたシグナムの革新作', searchKeyword: 'Signum Pro THUNDERSTORM 124' },
  { id: 'signum-pro-polaris-120', brand: 'Signum Pro', model: 'POLARIS 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'グリーン', year: 2024, form: 'both', concept: '細め1.20mmの高コンフォートコポリ・スピンと腕への優しさを両立', searchKeyword: 'Signum Pro POLARIS 120' },
  { id: 'signum-pro-fibercore-130', brand: 'Signum Pro', model: 'FIBERCORE 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '低摩擦コーティングでテンション維持と打感を両立するコンフォートマルチ', searchKeyword: 'Signum Pro FIBERCORE 130 マルチ' },

  // ========== Weiss Cannon (新ブランド) ==========
  { id: 'weiss-cannon-silverstring-125', brand: 'Weiss Cannon', model: 'SILVERSTRING 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'シルバー', year: 2024, form: 'both', concept: 'クリスプなフィールで人気のドイツ製フラッグシップコポリ', searchKeyword: 'Weiss Cannon ワイスキャノン SILVERSTRING 125' },
  { id: 'weiss-cannon-silverstring-120', brand: 'Weiss Cannon', model: 'SILVERSTRING 120', type: 'ポリエステル', gauge: '1.20mm', gaugeNum: 1.20, length: '12m', color: 'シルバー', year: 2024, form: 'both', concept: '細め1.20mmのSILVERSTRING・スピンと繊細な操作性を強化', searchKeyword: 'Weiss Cannon SILVERSTRING 120' },
  { id: 'weiss-cannon-ultra-cable-123', brand: 'Weiss Cannon', model: 'ULTRA CABLE 123', type: 'ポリエステル', gauge: '1.23mm', gaugeNum: 1.23, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '四角断面がボールを捕まえる・スピン最重視のコポリ', searchKeyword: 'Weiss Cannon ULTRA CABLE 123' },
  { id: 'weiss-cannon-scorpion-122', brand: 'Weiss Cannon', model: 'SCORPION 122', type: 'ポリエステル', gauge: '1.22mm', gaugeNum: 1.22, length: '12m', color: 'レッド', year: 2024, form: 'both', concept: 'パワーと食いつきのバランス型コポリ・コントロールを保ちながら反発力を追加', searchKeyword: 'Weiss Cannon SCORPION 122' },
  { id: 'weiss-cannon-black-5-edge-124', brand: 'Weiss Cannon', model: 'BLACK 5 EDGE 124', type: 'ポリエステル', gauge: '1.24mm', gaugeNum: 1.24, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '五角断面でスピン・パワー・耐久性を高次元に両立', searchKeyword: 'Weiss Cannon BLACK 5 EDGE 124' },
  { id: 'weiss-cannon-red-ghost-118', brand: 'Weiss Cannon', model: 'RED GHOST 118', type: 'ポリエステル', gauge: '1.18mm', gaugeNum: 1.18, length: '12m', color: 'レッド', year: 2024, form: 'both', concept: '七角丸みエッジの超細1.18mm・スピン量と繊細なフィールの超薄型ポリ', searchKeyword: 'Weiss Cannon RED GHOST 118' },
  { id: 'weiss-cannon-turbotwist-124', brand: 'Weiss Cannon', model: 'TURBOTWIST 124', type: 'ポリエステル', gauge: '1.24mm', gaugeNum: 1.24, length: '12m', color: 'グレー', year: 2024, form: 'both', concept: '特許取得のねじれ構造でギア効果を生み出すスピン強化ポリ', searchKeyword: 'Weiss Cannon TURBOTWIST 124' },
  { id: 'weiss-cannon-mosquito-bite-116', brand: 'Weiss Cannon', model: 'MOSQUITO BITE 116', type: 'ポリエステル', gauge: '1.16mm', gaugeNum: 1.16, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '1.16mmの超極細ポリ・鋭いスピンと繊細なコントロールの最先端モデル', searchKeyword: 'Weiss Cannon MOSQUITO BITE 116' },
  { id: 'weiss-cannon-explosiv-130', brand: 'Weiss Cannon', model: 'EXPLOSIV 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'コポリアミドのコンフォートマルチ・柔らかさと弾力性のWeiss Cannon腕優しモデル', searchKeyword: 'Weiss Cannon EXPLOSIV 130 マルチ' },

  // ========== Toalson (追加分) ==========
  { id: 'toalson-biologic-cr1296-125', brand: 'Toalson', model: 'BIOLOGIC CR1296 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2025, form: 'both', concept: '1296本クリンプドマルチ+TPU最大配合・2025年発売の次世代プレミアムマルチ', searchKeyword: 'トアルソン BIOLOGIC CR1296 125' },
  { id: 'toalson-biologic-double-xx-123', brand: 'Toalson', model: 'BIOLOGIC DOUBLE XX 123', type: 'マルチフィラメント', gauge: '1.23mm', gaugeNum: 1.23, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '柔軟性とパワーを両立したトアルソンの定番マルチ', searchKeyword: 'トアルソン BIOLOGIC DOUBLE XX 123' },
  { id: 'toalson-biologic-livewire-125', brand: 'Toalson', model: 'BIOLOGIC LIVEWIRE 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'TNT熱放射線処理でナチュラルを超える反発力のトーナメント向けマルチ', searchKeyword: 'トアルソン BIOLOGIC LIVEWIRE 125' },
  { id: 'toalson-biologic-livewire-130', brand: 'Toalson', model: 'BIOLOGIC LIVEWIRE 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'LIVEWIRE太め1.30mm・ボールホールド感と耐久性を強化', searchKeyword: 'トアルソン BIOLOGIC LIVEWIRE 130' },
  { id: 'toalson-biologic-livewire-xp-130', brand: 'Toalson', model: 'BIOLOGIC LIVEWIRE XP 130', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'LIVEWIREにPEEK繊維を追加・弾性と耐久性をさらに強化した上位モデル', searchKeyword: 'トアルソン BIOLOGIC LIVEWIRE XP 130' },
  { id: 'toalson-biologic-livewire-ocho-xp-125', brand: 'Toalson', model: 'BIOLOGIC LIVEWIRE OCHO XP 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'LIVEWIRE XPに8角形コーティングでスピン性能も追加したマルチの最上位', searchKeyword: 'トアルソン BIOLOGIC LIVEWIRE OCHO XP 125' },
  { id: 'toalson-t8-125', brand: 'Toalson', model: 'T8 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'PEEK繊維+TNT加工で高弾性・硬めの打感でパワーと耐久性を追求', searchKeyword: 'トアルソン T8 125' },
  { id: 'toalson-asterista-armored-125', brand: 'Toalson', model: 'ASTERISTA ARMORED 125', type: 'ナイロン', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '耐摩耗糸ラッピング+八角形成形・ポリに近い切断耐久性とスピンを持つモノフィラメント', searchKeyword: 'トアルソン ASTERISTA ARMORED アスタリスタ アーモード 125' },
  { id: 'toalson-hybrid-spoon-02-125', brand: 'Toalson', model: 'HYBRID SPOON 02', type: 'ハイブリッド', gauge: '1.25/1.30mm', gaugeNum: 1.25, length: '12m×2', color: 'ブラック', year: 2024, form: 'single', concept: 'スプーン形状ポリ縦×マルチ横・グリップ感とスピン&コントロールを両立するハイブリッド', searchKeyword: 'トアルソン HYBRID SPOON 02 ハイブリッド 縦ポリ横マルチ' },

  // ========== Prince (追加分) ==========
  { id: 'prince-vortex-125', brand: 'Prince', model: 'VORTEX 17', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '成形断面でスピン性能を強化した新世代Princeポリ', searchKeyword: 'プリンス VORTEX 17 125' },
  { id: 'prince-vortex-triad-125', brand: 'Prince', model: 'VORTEX TRIAD 17', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: 'さらにアグレッシブな成形断面でスピン量を極限まで追求したVORTEX上位モデル', searchKeyword: 'プリンス VORTEX TRIAD 17 125' },
  { id: 'prince-tour-xc-127', brand: 'Prince', model: 'TOUR XC 16L', type: 'ポリエステル', gauge: '1.27mm', gaugeNum: 1.27, length: '12m', color: 'ブラック', year: 2024, form: 'both', concept: '滑らかなコーティングでスピンとコントロールを両立するコポリ', searchKeyword: 'プリンス TOUR XC 16L 127' },
  { id: 'prince-tour-xp-125', brand: 'Prince', model: 'TOUR XP 17', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'オレンジ', year: 2024, form: 'both', concept: 'サーモポリ技術でコントロールに反発感を融合したPrince独自のパワーポリ', searchKeyword: 'プリンス TOUR XP 17 125' },
  { id: 'prince-diablo-prism-125', brand: 'Prince', model: 'DIABLO PRISM 17', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'パープル', year: 2024, form: 'both', concept: 'コントロール・スピン・耐久性のバランス型成形断面ポリ', searchKeyword: 'プリンス DIABLO PRISM 17 125' },
  { id: 'prince-premier-control-130', brand: 'Prince', model: 'PREMIER CONTROL 16', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: 'トリプルコア+マルチストランドのコントロール特化マルチ', searchKeyword: 'プリンス PREMIER CONTROL 16 130' },
  { id: 'prince-premier-power-130', brand: 'Prince', model: 'PREMIER POWER 16', type: 'マルチフィラメント', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '快適性とパワーを高次元に両立したPrinceのプレミアムマルチ', searchKeyword: 'プリンス PREMIER POWER 16 130' },
  // ========== Dunlop (追加分) ==========
  { id: 'dunlop-explosive-turbo-125', brand: 'Dunlop', model: 'EXPLOSIVE TURBO 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブラック', year: 2025, form: 'both', concept: 'BOOST POLYESTER+八角形断面で2025年発売・スピンとパワーを高次元に両立', searchKeyword: 'ダンロップ EXPLOSIVE TURBO 125' },
  { id: 'dunlop-explosive-bite-127', brand: 'Dunlop', model: 'EXPLOSIVE BITE 127', type: 'ポリエステル', gauge: '1.27mm', gaugeNum: 1.27, length: '12m', color: 'グリーン', year: 2024, form: 'both', concept: '三角形断面のソフトポリ・グリップ感と高弾道でパワフルなストロークを実現', searchKeyword: 'ダンロップ EXPLOSIVE BITE 127' },
  { id: 'dunlop-explosive-speed-125', brand: 'Dunlop', model: 'EXPLOSIVE SPEED 125', type: 'ポリエステル', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ブルー', year: 2024, form: 'both', concept: '丸断面の高反発ポリ・余分なバイト感を抑え球速を最大化', searchKeyword: 'ダンロップ EXPLOSIVE SPEED 125' },
  { id: 'dunlop-iconic-touch-125', brand: 'Dunlop', model: 'ICONIC TOUCH 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '緩撚りソフトフィラメントで柔軟性と打感を最優先したコンフォートマルチ', searchKeyword: 'ダンロップ ICONIC TOUCH 125 マルチ' },
  { id: 'dunlop-iconic-speed-125', brand: 'Dunlop', model: 'ICONIC SPEED 125', type: 'マルチフィラメント', gauge: '1.25mm', gaugeNum: 1.25, length: '12m', color: 'ホワイト', year: 2024, form: 'both', concept: 'ハードコーティングで滑り性を高め・スピードショットを追求するレスポンス重視マルチ', searchKeyword: 'ダンロップ ICONIC SPEED 125 マルチ' },
  { id: 'dunlop-synthetic-tough-130', brand: 'Dunlop', model: 'SYNTHETIC TOUGH 130', type: 'ナイロン', gauge: '1.30mm', gaugeNum: 1.30, length: '12m', color: 'ナチュラル', year: 2024, form: 'both', concept: '太コアの定番モノフィラメント・切断耐久性とコスパに優れるエントリーナイロン', searchKeyword: 'ダンロップ SYNTHETIC TOUGH 130 ナイロン' },

];

// ヘルパー関数
function getStringsByBrand(brand) {
  return STRING_DATABASE.filter(s => s.brand === brand);
}

function getStringsBySeries(brand, series) {
  return STRING_DATABASE.filter(s => {
    if (s.brand !== brand) return false;
    const sl = series.toLowerCase().replace(/[\s\-']/g,'');
    const ml = (s.model||'').toLowerCase().replace(/[\s\-']/g,'');
    return ml.includes(sl);
  });
}

function getStringById(id) {
  return STRING_DATABASE.find(s => s.id === id);
}
