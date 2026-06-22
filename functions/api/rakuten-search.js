// 楽天商品検索API (Cloudflare Pages Functions版)
// URL: /api/rakuten-search?keyword=...&janCode=...

const APP_ID = '7b627f1f-1924-415a-99fd-288cf2a9cfde';
const ACCESS_KEY = 'pk_IgvEkDTYVvSiaBtknnPRI49moxxWNTumxumFqtFtvMz';
const AFFILIATE_ID = '5025c3cb.15c5bf2c.5025c3cc.9bf454b7';
const API_ENDPOINT = 'https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20220601';

// 品番が商品名に含まれているか判定
function janCodeMatches(janCode, itemName) {
  if (!janCode || !itemName) return false;
  const normalize = (s) => s.toUpperCase().replace(/[\s\-]/g, '');
  const normJan = normalize(janCode);
  const normName = normalize(itemName);
  const janCore = normJan.replace(/U\d*$/, '');
  if (janCore.length < 6) return normName.includes(normJan);
  return normName.includes(normJan) || normName.includes(janCore);
}

// 楽天APIの1件をフロント用に整形（ポイント還元額を含む）
function mapItem(i) {
  const imageUrl = (i.mediumImageUrls && i.mediumImageUrls[0]) || '';
  const price = i.itemPrice || 0;
  const pointRate = i.pointRate || 1;
  return {
    name: i.itemName || '',
    price: price,
    pointRate: pointRate,
    pointRateEndTime: i.pointRateEndTime || '',
    point: Math.floor(price * pointRate / 100),
    itemUrl: i.affiliateUrl || i.itemUrl || '',
    shopName: i.shopName || '',
    shopCode: i.shopCode || '',
    imageUrl: imageUrl,
    largeImageUrl: imageUrl.replace(/_ex=\d+x\d+/, '_ex=400x400') || imageUrl,
    reviewCount: i.reviewCount || 0,
    reviewAverage: i.reviewAverage || 0,
    isProSports: (i.shopCode || '').toLowerCase() === 'prospo'
  };
}

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const params = url.searchParams;

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=60'
  };

  if (request.method === 'OPTIONS') {
    return new Response('', { status: 200, headers });
  }

  const keyword = params.get('keyword') || 'テニスラケット';
  const janCode = params.get('janCode') || '';

  // 指定キーで楽天検索を実行し、整形済みitems（またはerror）を返す
  async function runSearch(searchKey) {
    const urlParams = new URLSearchParams({
      applicationId: APP_ID,
      accessKey: ACCESS_KEY,
      affiliateId: AFFILIATE_ID,
      keyword: searchKey,
      hits: '30',
      format: 'json',
      formatVersion: '2',
      imageFlag: '1'
    });
    const apiUrl = `${API_ENDPOINT}?${urlParams.toString()}`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${ACCESS_KEY}`,
        'Accept': 'application/json',
        'Referer': 'https://loveteni.pages.dev/',
        'Origin': 'https://loveteni.pages.dev',
        'User-Agent': 'Mozilla/5.0 (Linux; Cloudflare Workers) LoveteniBot/1.0'
      }
    });
    const responseText = await response.text();
    if (!response.ok) return { error: `HTTP ${response.status}`, detail: responseText.substring(0, 300), items: [] };
    let data;
    try { data = JSON.parse(responseText); }
    catch (e) { return { error: 'Invalid JSON', detail: responseText.substring(0, 300), items: [] }; }
    if (data.error) return { error: data.error, detail: data.error_description || '', items: [] };
    return { items: (data.Items || []).map(mapItem) };
  }

  try {
    const janNorm = janCode ? janCode.toUpperCase().replace(/[\s\-]/g, '') : '';
    const janSearch = janNorm.replace(/(U)\d+$/, '$1'); // 検索用: 末尾Uを残す
    const janBare = janNorm.replace(/U\d*$/, '');        // 照合/キーワード除去用: Uなし

    // 短い数字だけの品番(例: 101567=Babolat, 232006=HEAD)は、水着やヘルメット等の
    // 無関係商品の品番と数字が衝突する。これらは「品番で直接検索」せず、品番を除いた
    // ブランド名キーワードで検索してから品番で絞り込む(誤ヒット防止)。
    // 英字入りの品番(WR173011U1, 7TJ256 等)や8桁以上のJAN/EANは固有性が高いので直接検索。
    const isShortNumeric = /^\d{1,7}$/.test(janNorm);

    // 品番を取り除いた検索用キーワード(例:"Babolat Pure Aero 98 2026 101567"→"Babolat Pure Aero 98 2026")
    const keywordNoJan = (keyword || '')
      .replace(new RegExp(janNorm, 'ig'), '')
      .replace(janBare ? new RegExp(janBare, 'ig') : /\b\B/, '')
      .replace(/\s+/g, ' ').trim() || keyword;

    // 検索キー決定
    let searchKey;
    if (janCode && !isShortNumeric) {
      searchKey = janSearch;     // 固有性の高い品番は直接検索が確実
    } else if (janCode && isShortNumeric) {
      searchKey = keywordNoJan;  // 短い数字品番はブランド名で検索
    } else {
      searchKey = keyword;
    }

    const result = await runSearch(searchKey);
    if (result.error) {
      return new Response(JSON.stringify({
        items: [], count: 0, searchKey, error: result.error, errorDetail: result.detail
      }), { status: 200, headers });
    }

    let items = result.items;
    const rawCount = items.length;
    let fallback = false;
    let fallbackKey = '';

    if (janCode && !isShortNumeric) {
      // 固有性の高い品番: 商品名一致でフィルタ。0件なら「品番を除いた名前」で再検索
      const filtered = items.filter(item => janCodeMatches(janCode, item.name));
      if (filtered.length > 0) {
        items = filtered;
      } else if (keyword) {
        fallbackKey = keywordNoJan;
        const fb = await runSearch(fallbackKey);
        if (!fb.error && fb.items.length) {
          items = fb.items;
          fallback = true;
        } else {
          items = [];
        }
      } else {
        items = [];
      }
    } else if (janCode && isShortNumeric) {
      // 短い数字品番: ブランド名検索の結果から品番一致を優先採用。
      // 一致が無くてもブランド名検索の結果をそのまま使う(水着等の混入を防ぐため空にしない)
      const filtered = items.filter(item => janCodeMatches(janCode, item.name));
      if (filtered.length > 0) {
        items = filtered;
      } else {
        fallback = true;       // 品番一致なし=ブランド名検索結果をそのまま使用
        fallbackKey = searchKey;
      }
    }
    // janCodeなしはキーワード検索結果をそのまま使用

    // prospo商品を先頭に（フロント側で安い順/ポイント順に再ソートする保険）
    items.sort((a, b) => {
      if (a.isProSports && !b.isProSports) return -1;
      if (!a.isProSports && b.isProSports) return 1;
      return 0;
    });

    return new Response(JSON.stringify({
      items, count: items.length, rawCount, searchKey, janCode, filtered: !!janCode, fallback
    }), { status: 200, headers });

  } catch (error) {
    return new Response(JSON.stringify({
      items: [], count: 0, error: 'exception', errorDetail: error.message
    }), { status: 200, headers });
  }
}
