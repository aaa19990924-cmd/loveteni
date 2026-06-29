// ============================================================
// ラブテニ テニスアクセサリーデータベース（振動止め・ボールホッパー等）
// ============================================================

const ACCESSORIES_DATA = {
  // --- 振動止め ---
  dampeners: [
    {
      id: 'wilson-pro-feel-damp',
      brand: 'Wilson',
      model: 'Pro Feel Vibration Dampener',
      type: '振動止め',
      shape: '丸型',
      concept: 'シンプル定番・丸型振動止め',
      description: 'Wilsonの定番丸型振動止め。取り付けやすくズレにくい設計で、初心者から上級者まで幅広く愛用される最もシンプルなタイプ。',
      searchKeyword: 'Wilson Pro Feel 振動止め テニス'
    },
    {
      id: 'wilson-shock-shield',
      brand: 'Wilson',
      model: 'Shock Shield Dampener',
      type: '振動止め',
      shape: 'Wブレード型',
      concept: 'Wブレード形状・強力振動吸収',
      description: 'Wilsonのフラッグシップ振動止め。2点で固定するWブレード形状が強力に振動を吸収。丸型より大きな面積で打撃ショックを大幅に低減する。',
      searchKeyword: 'Wilson Shock Shield 振動止め テニス'
    },
    {
      id: 'babolat-custom-damp',
      brand: 'Babolat',
      model: 'Custom Damp',
      type: '振動止め',
      shape: '丸型',
      concept: 'カラー豊富・Babolatブランド統一',
      description: 'BabolatのシンプルなロゴマークDampener。RPM Blastなどのガットと同ブランドで揃えられる定番アクセサリー。豊富なカラーバリエーションが魅力。',
      searchKeyword: 'Babolat Custom Damp 振動止め テニス'
    },
    {
      id: 'head-smartsorb',
      brand: 'HEAD',
      model: 'Smartsorb Vibration Damper',
      type: '振動止め',
      shape: '星型',
      concept: '独自スター型・フィット感抜群',
      description: 'HEAD独自の星型デザインで4点固定。ガットに深く絡みつくことでズレにくく、効果的に振動を吸収。ジョコビッチらHEADプレーヤーのラケットにも採用される。',
      searchKeyword: 'HEAD Smartsorb 振動止め テニス'
    },
    {
      id: 'yonex-vibration-stopper-5',
      brand: 'YONEX',
      model: 'Vibration Stopper 5',
      type: '振動止め',
      shape: 'W型',
      concept: 'YONEX定番・W型2点固定',
      description: 'YONEXの定番振動止め。W型の2点固定でズレにくく、国内プレーヤーに最も普及しているモデルの一つ。Super GrapなどYONEXグリップとのセット購入も人気。',
      searchKeyword: 'ヨネックス Vibration Stopper 5 テニス'
    },
    {
      id: 'tecnifibre-damp-pro',
      brand: 'Tecnifibre',
      model: 'Damp Pro',
      type: '振動止め',
      shape: '丸型',
      concept: 'Tecnifibreブランドの定番振動止め',
      description: 'TecnifibreのシンプルDampener。RAZORシリーズなどのガットと統一ブランドで揃えられる定番アイテム。取り付け簡単でコスパに優れた実用的なモデル。',
      searchKeyword: 'Tecnifibre Damp Pro 振動止め テニス'
    },
    {
      id: 'solinco-heaven-damp',
      brand: 'Solinco',
      model: 'Heaven Damp',
      type: '振動止め',
      shape: '楕円型',
      concept: 'HYPER-Gに合うSolinco振動止め',
      description: 'SolincoのシンプルDampener。HYPER-GやTOUR BITEなどSolincoのガットとのセットに最適。楕円形デザインでガットにしっかりフィットする。',
      searchKeyword: 'Solinco Heaven Damp 振動止め テニス'
    },
    {
      id: 'kimony-bat-damp',
      brand: 'Kimony',
      type: '振動止め',
      model: 'KVI208 Bat Dampener',
      shape: 'コウモリ型',
      concept: 'コウモリ型・ユニークデザイン',
      description: 'Kimony（キモニー）のユニークなコウモリ型振動止め。日本のブランドらしい遊び心あるデザインで、機能性も十分。ギフトにも人気のアクセサリー。',
      searchKeyword: 'キモニー KVI208 コウモリ 振動止め テニス'
    }
  ],

  // --- ボールホッパー・ボールカゴ ---
  hoppers: [
    {
      id: 'gamma-hopper-72',
      brand: 'Gamma',
      model: 'Ball Hopper Pro 72',
      type: 'ボールホッパー',
      capacity: '72球',
      concept: '72球収納の大容量スタンダードホッパー',
      description: '72球収納の大容量ボールホッパー。バスケット状の底面で球出しに便利なデザイン。スクールや団体練習での球出しに最適なスタンダードモデル。',
      searchKeyword: 'Gamma Ball Hopper Pro 72 テニス'
    },
    {
      id: 'wilson-ball-hopper-ultra',
      brand: 'Wilson',
      model: 'Ultra Ball Hopper',
      type: 'ボールホッパー',
      capacity: '72球',
      concept: 'Wilsonの定番72球ボールホッパー',
      description: 'Wilsonの標準ボールホッパー。72球収納で球出し練習に最適なサイズ。底面に収納スタンド付きでコート上での安定使用が可能。',
      searchKeyword: 'Wilson Ultra Ball Hopper テニス'
    },
    {
      id: 'prince-ball-hopper-large',
      brand: 'Prince',
      model: 'Ball Hopper Large',
      type: 'ボールホッパー',
      capacity: '65球',
      concept: 'Prince製・65球コスパホッパー',
      description: 'Princeの65球ボールホッパー。コスパ重視のシンプルな設計で自主練習から集団練習まで対応する使いやすいモデル。',
      searchKeyword: 'Prince Ball Hopper テニス'
    },
    {
      id: 'yonex-ball-basket',
      brand: 'YONEX',
      model: 'Ball Basket AC500',
      type: 'ボールカゴ',
      capacity: '120球',
      concept: '大容量120球・スクール向けボールカゴ',
      description: 'YONEXの大容量ボールカゴ。120球収納で折りたたみ可能な設計がコート端への収納を容易にする。スクール・クラブの団体練習に最適。',
      searchKeyword: 'ヨネックス Ball Basket AC500 テニス'
    },
    {
      id: 'dunlop-ball-basket',
      brand: 'Dunlop',
      model: 'Ball Basket 120',
      type: 'ボールカゴ',
      capacity: '120球',
      concept: '大容量120球カゴ・部活定番',
      description: 'Dunlopの折りたたみ式大容量ボールカゴ。120球収納でキャスター付きの移動しやすい設計。部活動や学校テニスコートの定番アイテム。',
      searchKeyword: 'Dunlop Ball Basket テニス ボールかご'
    },
    {
      id: 'hart-ball-hopper-60',
      brand: 'HART',
      model: 'Ball Hopper 60',
      type: 'ボールホッパー',
      capacity: '60球',
      concept: '個人練習向け軽量60球ホッパー',
      description: 'HARTの60球ホッパー。個人の自主練習に最適なコンパクト設計。ショルダーベルト付きで持ち運びも便利なエントリーモデル。',
      searchKeyword: 'HART Ball Hopper 60 テニス'
    }
  ],

  // --- リストバンド・ヘッドバンド ---
  bands: [
    {
      id: 'wilson-wristband-single',
      brand: 'Wilson',
      model: 'Wristband Single',
      type: 'リストバンド',
      concept: 'コンパクトなWilson定番リストバンド',
      description: 'Wilsonのシンプルなリストバンド。汗をシャットアウトし、ラケットのグリップへの汗の流れ込みを防ぐ。コンパクトサイズで邪魔にならない定番アイテム。',
      searchKeyword: 'Wilson Wristband テニス リストバンド'
    },
    {
      id: 'wilson-wristband-wide',
      brand: 'Wilson',
      model: 'Wristband Wide',
      type: 'リストバンド',
      concept: 'ワイドタイプ・吸汗量が多い人向け',
      description: 'Wilsonのワイド（広め）リストバンド。汗の多いプレーヤーに最適な幅広タイプ。手の甲まで広くカバーしてグリップの汗濡れを防ぐ。',
      searchKeyword: 'Wilson Wristband Wide テニス リストバンド'
    },
    {
      id: 'nike-swoosh-headband',
      brand: 'Nike',
      model: 'Swoosh Headband',
      type: 'ヘッドバンド',
      concept: 'スウッシュロゴ・定番ヘッドバンド',
      description: 'Nikeのアイコニックなスウッシュロゴ入りヘッドバンド。Dri-FIT素材が素早く汗を拡散・乾燥させ、試合中の視界確保に貢献する定番アクセサリー。',
      searchKeyword: 'Nike Swoosh Headband テニス ヘッドバンド'
    },
    {
      id: 'adidas-tennis-headband',
      brand: 'Adidas',
      model: 'Tennis Headband',
      type: 'ヘッドバンド',
      concept: 'スリーストライプス・Adidasヘッドバンド',
      description: 'Adidasのテニス専用ヘッドバンド。AEROREADY（エアロレディ）素材が汗を素早く吸収・拡散。ズベレフらAdidasプレーヤーと同シリーズを着用できる。',
      searchKeyword: 'Adidas Tennis Headband テニス'
    },
    {
      id: 'head-basic-wristband',
      brand: 'HEAD',
      model: 'Basic Wristband',
      type: 'リストバンド',
      concept: 'HEADのシンプルリストバンド',
      description: 'HEADのベーシックリストバンド。どのラケットにも合うシンプルデザインで、ジョコビッチと同ブランドで揃えたいプレーヤーに人気。柔らかくフィット感が良い。',
      searchKeyword: 'HEAD Basic Wristband テニス リストバンド'
    },
    {
      id: 'yonex-wristband-ac488',
      brand: 'YONEX',
      model: 'Wristband AC488',
      type: 'リストバンド',
      concept: 'YONEX定番・国内テニスの王道バンド',
      description: 'YONEXの定番リストバンド。国内テニス愛好家に最も普及しているモデルで、スウェット素材が素早く汗を吸収。左右両用でラケットと統一感のあるカラーが揃う。',
      searchKeyword: 'ヨネックス AC488 リストバンド テニス'
    },
    {
      id: 'babolat-jump-headband',
      brand: 'Babolat',
      model: 'Jump Headband',
      type: 'ヘッドバンド',
      concept: 'Babolatのスポーティーヘッドバンド',
      description: 'BabolatのJumpシリーズヘッドバンド。ポリエステル混紡素材で吸汗・速乾性に優れ、アルカラスらBabolatプレーヤーと同シリーズカラーで統一できる。',
      searchKeyword: 'Babolat Jump Headband テニス'
    }
  ]
};

function getAccessoriesByCategory(cat) {
  if (cat === 'dampeners') return ACCESSORIES_DATA.dampeners;
  if (cat === 'hoppers') return ACCESSORIES_DATA.hoppers;
  if (cat === 'bands') return ACCESSORIES_DATA.bands;
  return [
    ...ACCESSORIES_DATA.dampeners,
    ...ACCESSORIES_DATA.hoppers,
    ...ACCESSORIES_DATA.bands
  ];
}
