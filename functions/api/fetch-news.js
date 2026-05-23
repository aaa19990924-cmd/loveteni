// テニスニュース取得API（RSS + Gemini）
const TENNIS365_RSS = 'http://news.tennis365.net/news/rss/news.xml';
const TENNIS365_RSS_HTTPS = 'https://news.tennis365.net/news/rss/news.xml';

// シンプルなRSSパーサー
function parseRSS(xml) {
  const items = [];
  const itemMatches = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

  for (const item of itemMatches) {
    const title = extractTag(item, 'title');
    const link = extractTag(item, 'link');
    const pubDate = extractTag(item, 'pubDate');
    const description = extractTag(item, 'description');
    const category = extractTag(item, 'category');

    if (title) {
      items.push({
        title: cleanText(title),
        link: cleanText(link),
        pubDate: cleanText(pubDate),
        description: cleanText(description).replace(/<[^>]+>/g, '').substring(0, 200),
        category: cleanText(category)
      });
    }
  }
  return items;
}

function extractTag(text, tag) {
  const match = text.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  if (!match) return '';
  let content = match[1];
  // CDATAを除去
  content = content.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  return content.trim();
}

function cleanText(text) {
  if (!text) return '';
  return text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').trim();
}

// 日付フォーマット変換
function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;
  } catch(e) {
    return dateStr;
  }
}

// カテゴリ判定
function detectCategory(title, desc) {
  const text = (title + ' ' + desc).toLowerCase();
  if (text.match(/全仏|全英|全豪|全米|グランドスラム|ローランギャロス|ウィンブルドン/)) return 'tournament';
  if (text.match(/ラケット|ガット|ストリング|シューズ|用具/)) return 'product';
  if (text.match(/イベント|フェスタ|チャリティ/)) return 'event';
  return 'news';
}

// Geminiで全仏オープン速報を生成（オプション、APIキーがあれば）
async function generateTournamentSummary(articles, apiKey) {
  if (!apiKey) return null;
  if (!apiKey) return null;

  const tournamentArticles = articles.filter(a => detectCategory(a.title, a.description) === 'tournament').slice(0, 10);
  if (tournamentArticles.length === 0) return null;

  const prompt = `以下のテニスニュースから、全仏オープン2026に関する最新トピックを3行で要約してください。事実のみ。憶測や脚色は禁止。出典のあるニュースに書かれている内容のみ使用してください。

ニュース:
${tournamentArticles.map(a => `- ${a.title}: ${a.description}`).join('\n')}

出力形式（プレーンテキスト3行）:`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2, maxOutputTokens: 300 }
      })
    });
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
  } catch(e) {
    console.log('Gemini error:', e.message);
    return null;
  }
}

export async function onRequest(context) {
  const { request, env } = context;

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=1800' // 30分キャッシュ
  };

  try {
    // RSS取得（HTTPSを優先、失敗したらHTTP）
    let res;
    try {
      res = await fetch(TENNIS365_RSS_HTTPS, {
        headers: { 'User-Agent': 'Mozilla/5.0 LovetenetBot/1.0' }
      });
      if (!res.ok) throw new Error(`HTTPS failed: ${res.status}`);
    } catch(e) {
      console.log('HTTPS failed, trying HTTP:', e.message);
      res = await fetch(TENNIS365_RSS, {
        headers: { 'User-Agent': 'Mozilla/5.0 LovetenetBot/1.0' }
      });
    }

    if (!res.ok) {
      throw new Error(`RSS fetch failed: HTTP ${res.status}`);
    }

    const xml = await res.text();
    const items = parseRSS(xml);

    // 整形
    const articles = items.slice(0, 20).map(item => ({
      title: item.title,
      link: item.link,
      date: formatDate(item.pubDate),
      pubDate: item.pubDate,
      description: item.description,
      category: detectCategory(item.title, item.description)
    }));

    // Geminiでトピック要約（オプション）
    const summary = await generateTournamentSummary(articles, env?.GEMINI_API_KEY);

    return new Response(JSON.stringify({
        articles,
        count: articles.length,
        summary,
        updatedAt: new Date().toISOString(),
        source: 'tennis365.net'
      }), { status: 200, headers });

  } catch (error) {
    console.log('Error:', error.message);
    return new Response(JSON.stringify({ error: error.message, articles: [] }), { status: 500, headers });
  }
};
