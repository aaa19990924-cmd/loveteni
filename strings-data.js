// テニスガット（ストリング）データベース
const STRING_BRANDS = ['Luxilon', 'Babolat', 'Wilson', 'YONEX', 'HEAD', 'Tecnifibre', 'Solinco', 'Gosen'];

const STRING_BRAND_INFO = {
  'Luxilon': { desc: 'ベルギー発祥、ポリエステルガットの王者。ATPツアーで最も使用されているガットブランドで、Wilsonの傘下。ALU POWERは世界中のプロが愛用する定番。', color: '#1a1a1a', tagline: 'POLY KING',
    series: [{name:'ALU POWER',desc:'プロ使用率No.1の定番'},{name:'4G',desc:'長持ちするロングセラー'},{name:'ELEMENT',desc:'マイルドな打感のポリ'},{name:'M2',desc:'コントロール志向'},{name:'BIG BANGER',desc:'パワー系の原点'}]},
  'Babolat': { desc: 'フランス発祥、ガット製造の歴史を持つ老舗。RPMシリーズはナダル・アルカラスが使用し、世界中のスピン系プレーヤーから支持される。', color: '#27ae60', tagline: 'FRENCH HERITAGE',
    series: [{name:'RPM Blast',desc:'スピン系の代名詞'},{name:'RPM Soft',desc:'柔らかい打感のRPM'},{name:'VS Touch',desc:'最高峰のナチュラルガット'},{name:'Pro Hurricane',desc:'コントロール重視ポリ'},{name:'Origin',desc:'高反発ポリ'}]},
  'Wilson': { desc: 'アメリカ発祥の総合スポーツブランド。ナイロン・マルチ系のNXTやSensationが定番。Champion\'s Choiceはフェデラーが愛用したハイブリッドセット。', color: '#e74c3c', tagline: 'AMERICAN ICON',
    series: [{name:'NXT',desc:'マルチフィラメントの定番'},{name:'Sensation',desc:'柔らかい打感のナイロン'},{name:'Revolve',desc:'スピン系ポリ'},{name:'Synthetic Gut',desc:'リーズナブルなナイロン'},{name:"Champion's Choice",desc:'プロ仕様ハイブリッド'}]},
  'YONEX': { desc: '日本を代表するテニスブランド。POLYTOURシリーズは世界中で高い評価。日本人に最適化された設計と高い耐久性が魅力。', color: '#8e44ad', tagline: 'JAPANESE PRECISION',
    series: [{name:'POLYTOUR PRO',desc:'バランス型ポリ'},{name:'POLYTOUR STRIKE',desc:'パワー系ポリ'},{name:'POLYTOUR REV',desc:'スピン特化'},{name:'POLYTOUR AIR',desc:'柔らかいポリ'},{name:'REXIS',desc:'プレミアムマルチ'}]},
  'HEAD': { desc: 'オーストリア発祥の老舗ブランド。LYNXシリーズはジョコビッチ仕様。HAWKは扱いやすさで初・中級者に人気。', color: '#2c3e50', tagline: 'AUSTRIAN TRADITION',
    series: [{name:'LYNX TOUR',desc:'ジョコビッチ仕様'},{name:'LYNX',desc:'スピン系ポリの定番'},{name:'HAWK TOUCH',desc:'柔らかい打感のポリ'},{name:'VELOCITY',desc:'マルチフィラメント'},{name:'SONIC PRO',desc:'コントロール系ポリ'}]},
  'Tecnifibre': { desc: 'フランス発祥のガットメーカー。マルチフィラメント技術に強みを持ち、X-ONE BIPHASEは世界最高峰のマルチとして知られる。', color: '#16a085', tagline: 'STRING SPECIALIST',
    series: [{name:'RAZOR CODE',desc:'コントロール系ポリ'},{name:'BLACK CODE',desc:'スピン特化ポリ'},{name:'X-ONE BIPHASE',desc:'最高峰のマルチ'},{name:'TRIAX',desc:'コンフォート系マルチ'},{name:'DURAMIX',desc:'耐久性重視ナイロン'}]},
  'Solinco': { desc: 'アメリカ発祥の新興ブランド。HYPER-Gはシフィオンテクが使用し、独特の五角形断面でスピンが圧倒的にかかると人気。', color: '#d35400', tagline: 'NEW WAVE POLY',
    series: [{name:'HYPER-G',desc:'シフィオンテク使用'},{name:'HYPER-G SOFT',desc:'柔らかい打感のHYPER-G'},{name:'TOUR BITE',desc:'スピン特化'},{name:'TOUR BITE SOFT',desc:'柔らかいTOUR BITE'},{name:'CONFIDENTIAL',desc:'コントロール志向'}]},
  'Gosen': { desc: '滋賀県発祥の国産ガットメーカー。OG-SHEEPシリーズは安価で耐久性が高く、学生プレーヤーから絶大な支持を受ける。', color: '#c0392b', tagline: 'JAPAN VALUE',
    series: [{name:'OG-SHEEP MICRO',desc:'学生定番のナイロン'},{name:'POLYLON',desc:'コスパ重視ポリ'},{name:'EGG POWER',desc:'高反発ポリ'},{name:'UMAMI',desc:'プレミアムポリ'}]}
};

const STRING_DATABASE = [
  // ========== Luxilon ==========
  // ALU POWER
  { id: 'luxilon-alu-power-125', brand: 'Luxilon', model: 'ALU POWER 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'シルバー', year: 2024, concept: 'プロ使用率No.1の定番。ホールド感と打球感のバランスが絶妙', searchKeyword: 'Luxilon ALU POWER 125', players: ['ジョコビッチ', 'シフィオンテク'] },
  { id: 'luxilon-alu-power-130', brand: 'Luxilon', model: 'ALU POWER 130', type: 'ポリエステル', gauge: '1.30mm', length: '12.2m', color: 'シルバー', year: 2024, concept: '太めで耐久性とパワーを向上させたALU POWER', searchKeyword: 'Luxilon ALU POWER 130' },
  { id: 'luxilon-alu-power-rough-125', brand: 'Luxilon', model: 'ALU POWER ROUGH 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'シルバー', year: 2024, concept: '凹凸加工でスピンを強化したALU POWER', searchKeyword: 'Luxilon ALU POWER ROUGH' },
  { id: 'luxilon-alu-power-soft-125', brand: 'Luxilon', model: 'ALU POWER SOFT 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'シルバー', year: 2024, concept: '柔らかい打感を実現したソフトタイプ', searchKeyword: 'Luxilon ALU POWER SOFT' },
  // 4G
  { id: 'luxilon-4g-125', brand: 'Luxilon', model: '4G 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'ゴールド', year: 2023, concept: 'テンション維持性能No.1のロングセラー', searchKeyword: 'Luxilon 4G 125' },
  { id: 'luxilon-4g-soft-125', brand: 'Luxilon', model: '4G SOFT 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'ゴールド', year: 2023, concept: '4Gの耐久性に柔らかい打感をプラス', searchKeyword: 'Luxilon 4G SOFT' },
  // ELEMENT
  { id: 'luxilon-element-125', brand: 'Luxilon', model: 'ELEMENT 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'ロセ', year: 2024, concept: 'ポリ初心者にも優しいマイルドな打感', searchKeyword: 'Luxilon ELEMENT 125' },
  // M2
  { id: 'luxilon-m2-pro-125', brand: 'Luxilon', model: 'M2 PRO 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'グレー', year: 2024, concept: 'コントロール志向のテクニカルプレーヤー向け', searchKeyword: 'Luxilon M2 PRO 125' },
  // BIG BANGER
  { id: 'luxilon-big-banger-original-130', brand: 'Luxilon', model: 'BIG BANGER ORIGINAL 130', type: 'ポリエステル', gauge: '1.30mm', length: '12.2m', color: 'シルバー', year: 2023, concept: 'ポリエステルガットの原点', searchKeyword: 'Luxilon BIG BANGER ORIGINAL' },

  // ========== Babolat ==========
  // RPM Blast
  { id: 'babolat-rpm-blast-125', brand: 'Babolat', model: 'RPM Blast 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'ブラック', year: 2024, concept: 'ナダル・アルカラス使用、スピン系の代名詞', searchKeyword: 'Babolat RPM Blast 125', players: ['ナダル', 'アルカラス'] },
  { id: 'babolat-rpm-blast-130', brand: 'Babolat', model: 'RPM Blast 130', type: 'ポリエステル', gauge: '1.30mm', length: '12m', color: 'ブラック', year: 2024, concept: '太めでパワーアップ、耐久性も向上', searchKeyword: 'Babolat RPM Blast 130' },
  { id: 'babolat-rpm-blast-135', brand: 'Babolat', model: 'RPM Blast 135', type: 'ポリエステル', gauge: '1.35mm', length: '12m', color: 'ブラック', year: 2024, concept: 'ハードヒッター向けの最も太いRPM', searchKeyword: 'Babolat RPM Blast 135' },
  { id: 'babolat-rpm-blast-rough-125', brand: 'Babolat', model: 'RPM Blast Rough 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'ブラック', year: 2024, concept: '表面加工でスピン量がさらにアップ', searchKeyword: 'Babolat RPM Blast Rough' },
  // RPM Soft
  { id: 'babolat-rpm-soft-125', brand: 'Babolat', model: 'RPM Soft 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'グレー', year: 2024, concept: '柔らかい打感を実現したRPM', searchKeyword: 'Babolat RPM Soft' },
  // VS Touch (Natural)
  { id: 'babolat-vs-touch-130', brand: 'Babolat', model: 'VS Touch 130', type: 'ナチュラル', gauge: '1.30mm', length: '12m', color: 'ナチュラル', year: 2024, concept: '最高峰のナチュラルガット。柔らかさとパワーの極致', searchKeyword: 'Babolat VS Touch 130' },
  { id: 'babolat-vs-touch-135', brand: 'Babolat', model: 'VS Touch 135', type: 'ナチュラル', gauge: '1.35mm', length: '12m', color: 'ナチュラル', year: 2024, concept: '太めナチュラルでパワー重視', searchKeyword: 'Babolat VS Touch 135' },
  // Pro Hurricane
  { id: 'babolat-pro-hurricane-tour-125', brand: 'Babolat', model: 'Pro Hurricane Tour 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'イエロー', year: 2023, concept: 'コントロール重視のクラシックポリ', searchKeyword: 'Babolat Pro Hurricane Tour' },
  // Origin
  { id: 'babolat-origin-125', brand: 'Babolat', model: 'Origin 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'ナチュラル', year: 2023, concept: 'ホールド感重視の高反発ポリ', searchKeyword: 'Babolat Origin 125' },

  // ========== Wilson ==========
  { id: 'wilson-nxt-16', brand: 'Wilson', model: 'NXT 16', type: 'マルチフィラメント', gauge: '1.30mm', length: '12.2m', color: 'ナチュラル', year: 2024, concept: 'ナチュラルに最も近いと評されるマルチフィラメント', searchKeyword: 'Wilson NXT 16' },
  { id: 'wilson-nxt-17', brand: 'Wilson', model: 'NXT 17', type: 'マルチフィラメント', gauge: '1.24mm', length: '12.2m', color: 'ナチュラル', year: 2024, concept: '細めNXTで打球感さらにシャープ', searchKeyword: 'Wilson NXT 17' },
  { id: 'wilson-sensation-16', brand: 'Wilson', model: 'Sensation 16', type: 'ナイロン', gauge: '1.30mm', length: '12.2m', color: 'ナチュラル', year: 2023, concept: 'コストパフォーマンスに優れた定番ナイロン', searchKeyword: 'Wilson Sensation 16' },
  { id: 'wilson-revolve-17', brand: 'Wilson', model: 'Revolve 17', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'グリーン', year: 2024, concept: 'スピン重視のポリエステル', searchKeyword: 'Wilson Revolve 17' },
  { id: 'wilson-synthetic-gut-16', brand: 'Wilson', model: 'Synthetic Gut 16', type: 'ナイロン', gauge: '1.30mm', length: '12.2m', color: 'ナチュラル', year: 2023, concept: 'リーズナブルな入門向けナイロン', searchKeyword: 'Wilson Synthetic Gut 16' },
  { id: 'wilson-champions-choice-duo', brand: 'Wilson', model: "Champion's Choice Duo", type: 'ハイブリッド', gauge: '1.25/1.30mm', length: '12.2m', color: 'シルバー/ナチュラル', year: 2024, concept: 'ALU POWER+ナチュラルのハイブリッド、フェデラー仕様', searchKeyword: "Wilson Champion's Choice", players: ['フェデラー'] },

  // ========== YONEX ==========
  { id: 'yonex-polytour-pro-125', brand: 'YONEX', model: 'POLYTOUR PRO 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'グラファイト', year: 2024, concept: 'バランスの取れたツアーポリ', searchKeyword: 'ヨネックス POLYTOUR PRO 125' },
  { id: 'yonex-polytour-pro-130', brand: 'YONEX', model: 'POLYTOUR PRO 130', type: 'ポリエステル', gauge: '1.30mm', length: '12m', color: 'グラファイト', year: 2024, concept: '太めPOLYTOUR PROで耐久性アップ', searchKeyword: 'ヨネックス POLYTOUR PRO 130' },
  { id: 'yonex-polytour-strike-125', brand: 'YONEX', model: 'POLYTOUR STRIKE 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'コバルトブルー', year: 2025, concept: 'パワー重視のPOLYTOUR', searchKeyword: 'ヨネックス POLYTOUR STRIKE' },
  { id: 'yonex-polytour-rev-125', brand: 'YONEX', model: 'POLYTOUR REV 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'ブライトイエロー', year: 2024, concept: 'スピン特化、五角形断面', searchKeyword: 'ヨネックス POLYTOUR REV' },
  { id: 'yonex-polytour-air-125', brand: 'YONEX', model: 'POLYTOUR AIR 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'ホワイト', year: 2024, concept: '柔らかい打感のポリ', searchKeyword: 'ヨネックス POLYTOUR AIR' },
  { id: 'yonex-rexis-130', brand: 'YONEX', model: 'REXIS 130', type: 'マルチフィラメント', gauge: '1.30mm', length: '12m', color: 'シャンパンゴールド', year: 2024, concept: 'プレミアムマルチ。柔らかい打感と耐久性', searchKeyword: 'ヨネックス REXIS' },

  // ========== HEAD ==========
  { id: 'head-lynx-tour-125', brand: 'HEAD', model: 'LYNX TOUR 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'シャンパン', year: 2024, concept: 'ジョコビッチ仕様。コントロールとフィーリング', searchKeyword: 'HEAD LYNX TOUR 125', players: ['ジョコビッチ'] },
  { id: 'head-lynx-tour-130', brand: 'HEAD', model: 'LYNX TOUR 130', type: 'ポリエステル', gauge: '1.30mm', length: '12m', color: 'シャンパン', year: 2024, concept: '太めLYNX TOURで耐久性向上', searchKeyword: 'HEAD LYNX TOUR 130' },
  { id: 'head-lynx-125', brand: 'HEAD', model: 'LYNX 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'グリーン', year: 2023, concept: 'スピン系ポリの定番', searchKeyword: 'HEAD LYNX 125' },
  { id: 'head-hawk-touch-125', brand: 'HEAD', model: 'HAWK TOUCH 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'アンスラサイト', year: 2024, concept: 'ポリ初心者にも優しい柔らかな打感', searchKeyword: 'HEAD HAWK TOUCH' },
  { id: 'head-velocity-125', brand: 'HEAD', model: 'VELOCITY 125', type: 'マルチフィラメント', gauge: '1.25mm', length: '12m', color: 'ナチュラル', year: 2023, concept: '柔らかい打感のマルチ', searchKeyword: 'HEAD VELOCITY 125' },
  { id: 'head-sonic-pro-125', brand: 'HEAD', model: 'SONIC PRO 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'ブラック', year: 2023, concept: 'コントロール重視の薄ポリ', searchKeyword: 'HEAD SONIC PRO' },

  // ========== Tecnifibre ==========
  { id: 'tecnifibre-razor-code-125', brand: 'Tecnifibre', model: 'RAZOR CODE 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'カーボン', year: 2024, concept: 'コントロール重視のテクニカルポリ', searchKeyword: 'テクニファイバー RAZOR CODE' },
  { id: 'tecnifibre-black-code-125', brand: 'Tecnifibre', model: 'BLACK CODE 125', type: 'ポリエステル', gauge: '1.25mm', length: '12m', color: 'ブラック', year: 2024, concept: '五角形断面で圧倒的なスピン量', searchKeyword: 'テクニファイバー BLACK CODE' },
  { id: 'tecnifibre-x-one-biphase-130', brand: 'Tecnifibre', model: 'X-ONE BIPHASE 130', type: 'マルチフィラメント', gauge: '1.30mm', length: '12m', color: 'ナチュラル', year: 2024, concept: '世界最高峰のマルチフィラメント', searchKeyword: 'テクニファイバー X-ONE BIPHASE' },
  { id: 'tecnifibre-triax-130', brand: 'Tecnifibre', model: 'TRIAX 130', type: 'マルチフィラメント', gauge: '1.30mm', length: '12m', color: 'グレー', year: 2024, concept: 'ポリのフィーリングを持つマルチ', searchKeyword: 'テクニファイバー TRIAX' },
  { id: 'tecnifibre-duramix-130', brand: 'Tecnifibre', model: 'DURAMIX 130', type: 'ナイロン', gauge: '1.30mm', length: '12m', color: 'ナチュラル', year: 2023, concept: '耐久性重視の高コスパナイロン', searchKeyword: 'テクニファイバー DURAMIX' },

  // ========== Solinco ==========
  { id: 'solinco-hyper-g-125', brand: 'Solinco', model: 'HYPER-G 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'グリーン', year: 2024, concept: 'シフィオンテク使用。五角形断面で圧倒的なスピン', searchKeyword: 'Solinco HYPER-G 125', players: ['シフィオンテク'] },
  { id: 'solinco-hyper-g-130', brand: 'Solinco', model: 'HYPER-G 130', type: 'ポリエステル', gauge: '1.30mm', length: '12.2m', color: 'グリーン', year: 2024, concept: '太めHYPER-Gで耐久性アップ', searchKeyword: 'Solinco HYPER-G 130' },
  { id: 'solinco-hyper-g-soft-125', brand: 'Solinco', model: 'HYPER-G SOFT 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'グリーン', year: 2024, concept: '柔らかい打感のHYPER-G', searchKeyword: 'Solinco HYPER-G SOFT' },
  { id: 'solinco-tour-bite-125', brand: 'Solinco', model: 'TOUR BITE 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'シルバー', year: 2023, concept: '正方形断面で食いつき抜群、スピン特化', searchKeyword: 'Solinco TOUR BITE' },
  { id: 'solinco-tour-bite-soft-125', brand: 'Solinco', model: 'TOUR BITE SOFT 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'シルバー', year: 2023, concept: '柔らかいTOUR BITE', searchKeyword: 'Solinco TOUR BITE SOFT' },
  { id: 'solinco-confidential-125', brand: 'Solinco', model: 'CONFIDENTIAL 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'ブラック', year: 2023, concept: 'コントロール志向のプレミアムポリ', searchKeyword: 'Solinco CONFIDENTIAL' },

  // ========== Gosen ==========
  { id: 'gosen-og-sheep-micro-125', brand: 'Gosen', model: 'OG-SHEEP MICRO 16L', type: 'ナイロン', gauge: '1.25mm', length: '12.2m', color: 'ナチュラル', year: 2023, concept: '学生定番。コスパ最強の鉄板ナイロン', searchKeyword: 'ゴーセン OG-SHEEP MICRO' },
  { id: 'gosen-og-sheep-micro-130', brand: 'Gosen', model: 'OG-SHEEP MICRO 16', type: 'ナイロン', gauge: '1.30mm', length: '12.2m', color: 'ナチュラル', year: 2023, concept: '太めOG-SHEEPで耐久性アップ', searchKeyword: 'ゴーセン OG-SHEEP MICRO 16' },
  { id: 'gosen-polylon-comfort-125', brand: 'Gosen', model: 'POLYLON COMFORT 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'ブラック', year: 2024, concept: 'コスパに優れた柔らかポリ', searchKeyword: 'ゴーセン POLYLON COMFORT' },
  { id: 'gosen-egg-power-125', brand: 'Gosen', model: 'EGG POWER 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'イエロー', year: 2023, concept: '楕円断面で高反発、パワー系ポリ', searchKeyword: 'ゴーセン EGG POWER' },
  { id: 'gosen-umami-tour-125', brand: 'Gosen', model: 'UMAMI TOUR 125', type: 'ポリエステル', gauge: '1.25mm', length: '12.2m', color: 'ホワイト', year: 2024, concept: '日本らしい繊細な打感のプレミアムポリ', searchKeyword: 'ゴーセン UMAMI TOUR' }
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
