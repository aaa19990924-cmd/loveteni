// ============================================================
// ラブテニ 動画データベース
// 追加方法: 下の配列に1オブジェクト追加するだけ
//
// youtubeId: YouTubeのURLの「v=」以降の11文字
//   例) https://www.youtube.com/watch?v=AbCdEfGhIjK → 'AbCdEfGhIjK'
// tag: 'ハイライト' | '試合' | '練習' | 'インタビュー' | 'その他'
// ============================================================

const VIDEOS_DATA = [
  {
    id: 'nishioka-miami-2025',
    youtubeId: 'RSTzDi0S2_A',
    title: '西岡良仁 マイアミ・オープン 2025 ハイライト',
    description: 'ATP 1000 マイアミ・オープン。西岡が見せた粘り強いプレーのハイライト。',
    player: '西岡良仁',
    tournament: 'マイアミ・オープン 2025',
    tag: 'ハイライト'
  },
  {
    id: 'nishioka-winston-2024',
    youtubeId: 'k3lGKoZ7V5M',
    title: '西岡良仁 ウィンストン・セーラム・オープン 2024',
    description: 'ATP 250 ウィンストン・セーラム大会でのベスト試合。',
    player: '西岡良仁',
    tournament: 'ウィンストン・セーラム 2024',
    tag: 'ハイライト'
  },
  {
    id: 'japan-open-2024',
    youtubeId: 'v0G7LvJG0oI',
    title: 'ラクマ楽天ジャパンオープン 2024 ハイライト',
    description: '東京・有明で開催されたATP 500大会のハイライト映像。',
    player: '複数選手',
    tournament: 'ラクマ楽天ジャパンオープン 2024',
    tag: 'ハイライト'
  },
  {
    id: 'daniel-wimbledon-2024',
    youtubeId: 'NqVv9g7VFRI',
    title: '丹尼尔 タロ ウィンブルドン 2024',
    description: 'グランドスラム・ウィンブルドンでの日本人選手の活躍。',
    player: 'ダニエル太郎',
    tournament: 'ウィンブルドン 2024',
    tag: '試合'
  },
  {
    id: 'nishioka-usopen-2024',
    youtubeId: 'MpJHiAyFQz8',
    title: '西岡良仁 全米オープン 2024 ハイライト',
    description: '全米オープンでの西岡のプレー集。ハードコートでの攻守のバランスが光る。',
    player: '西岡良仁',
    tournament: '全米オープン 2024',
    tag: 'ハイライト'
  },
  {
    id: 'atp-best-rallies-japan',
    youtubeId: 'sX8BoZPnJBs',
    title: '日本人選手のベストラリー集 2024',
    description: 'ATP公式がまとめた2024年シーズンの日本人選手によるベストラリー集。',
    player: '複数選手',
    tournament: '2024シーズン総集編',
    tag: 'ハイライト'
  }
];

// 動画をタグでフィルタリング
function getVideosByTag(tag) {
  if (!tag || tag === 'all') return VIDEOS_DATA;
  return VIDEOS_DATA.filter(v => v.tag === tag);
}
