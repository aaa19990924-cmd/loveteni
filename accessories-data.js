// ============================================================
// ラブテニ テニス用品データベース
// ============================================================

const ACCESSORIES_DATA = {
  balls: [
    {
      id: 'wilson-us-open',
      brand: 'Wilson',
      model: 'US OPEN',
      category: 'ボール',
      description: '全米オープン公式球。耐久性と一貫した弾みで、世界中の練習球として定番中の定番。',
      searchKeyword: 'Wilson US OPEN テニスボール',
      icon: '⚪'
    },
    {
      id: 'dunlop-fort',
      brand: 'Dunlop',
      model: 'Fort',
      category: 'ボール',
      description: '全豪オープン公式球。高い品質と安定した飛びで試合・練習どちらにも対応する信頼の一球。',
      searchKeyword: 'Dunlop Fort テニスボール',
      icon: '⚪'
    },
    {
      id: 'babolat-gold',
      brand: 'Babolat',
      model: 'Gold',
      category: 'ボール',
      description: '全仏オープン公式球。クレーコートに最適化された高品質プレミアムボール。',
      searchKeyword: 'Babolat Gold テニスボール',
      icon: '⚪'
    },
    {
      id: 'head-atp',
      brand: 'HEAD',
      model: 'ATP',
      category: 'ボール',
      description: 'ATPツアーの公式採用球。プロ仕様の一貫した飛び・弾みを体験できるプレミアムモデル。',
      searchKeyword: 'HEAD ATP テニスボール',
      icon: '⚪'
    },
    {
      id: 'yonex-ball',
      brand: 'YONEX',
      model: 'テニスボール',
      category: 'ボール',
      description: '国内大会の定番。日本のコートに合わせた品質設計で、プレーヤーに広く信頼される。',
      searchKeyword: 'YONEX ヨネックス テニスボール',
      icon: '⚪'
    },
    {
      id: 'tecnifibre-tf-x1',
      brand: 'Tecnifibre',
      model: 'TF-X1',
      category: 'ボール',
      description: '耐久性を重視した高品質ボール。長時間の練習でも変形しにくく一貫したフィールを保つ。',
      searchKeyword: 'Tecnifibre TF-X1 テニスボール',
      icon: '⚪'
    }
  ],
  bags: [
    {
      id: 'wilson-super-tour',
      brand: 'Wilson',
      model: 'Super Tour Bag',
      category: 'バッグ',
      description: '大型トーナメントバッグ。ラケット9〜12本収納可能なプロ仕様の最上位モデル。多様な収納で遠征にも対応。',
      searchKeyword: 'Wilson Super Tour テニスバッグ',
      icon: '🎒'
    },
    {
      id: 'babolat-pure-aero-rh12',
      brand: 'Babolat',
      model: 'Pure Aero RH12',
      category: 'バッグ',
      description: 'ラケット12本収納のラケットホルダー型バッグ。サーモガード搭載で高温からラケットを保護。',
      searchKeyword: 'Babolat Pure Aero RH12 テニスバッグ',
      icon: '🎒'
    },
    {
      id: 'head-tour-team',
      brand: 'HEAD',
      model: 'Tour Team',
      category: 'バッグ',
      description: '中型トーナメントバッグ。使いやすい収納設計と耐久性を両立した人気定番モデル。',
      searchKeyword: 'HEAD Tour Team テニスバッグ',
      icon: '🎒'
    },
    {
      id: 'yonex-bag2312',
      brand: 'YONEX',
      model: 'BAG2312',
      category: 'バッグ',
      description: '国内人気No.1モデル。機能的な収納と軽量設計で日常の練習・試合に最適。ヨネックスらしいスタイリッシュなデザイン。',
      searchKeyword: 'YONEX BAG2312 テニスバッグ',
      icon: '🎒'
    }
  ],
  others: [
    {
      id: 'vibration-dampener',
      brand: '各ブランド',
      model: '振動止め',
      category: 'その他',
      description: 'ストリングの振動を吸収し、打感をまろやかに。種類・形状で打感が微妙に変わる、こだわりのアクセサリー。',
      searchKeyword: 'テニス 振動止め',
      icon: '🔵'
    },
    {
      id: 'overgrip',
      brand: '各ブランド',
      model: 'オーバーグリップ',
      category: 'その他',
      description: 'ウェット・ドライ・タオルタイプで汗の多さやグリップ感の好みに合わせて選べる消耗品。',
      searchKeyword: 'テニス オーバーグリップ',
      icon: '🔵'
    },
    {
      id: 'shoes',
      brand: '各ブランド',
      model: 'テニスシューズ',
      category: 'その他',
      description: 'オムニ・ハード・クレー別のソール設計が重要。サーフェスに合ったシューズ選びがパフォーマンスを左右する。',
      searchKeyword: 'テニスシューズ',
      icon: '👟'
    }
  ]
};

function getAccessoriesByCategory(cat) {
  if (cat === 'balls') return ACCESSORIES_DATA.balls;
  if (cat === 'bags') return ACCESSORIES_DATA.bags;
  if (cat === 'others') return ACCESSORIES_DATA.others;
  return [...ACCESSORIES_DATA.balls, ...ACCESSORIES_DATA.bags, ...ACCESSORIES_DATA.others];
}
