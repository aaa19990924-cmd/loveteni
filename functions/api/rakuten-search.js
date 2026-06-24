// 楽天商品検索API (Cloudflare Pages Functions版)
// URL: /api/rakuten-search?keyword=...&janCode=...

const APP_ID = '7b627f1f-1924-415a-99fd-288cf2a9cfde';
const ACCESS_KEY = 'pk_IgvEkDTYVvSiaBtknnPRI49moxxWNTumxumFqtFtvMz';
const AFFILIATE_ID = '5025c3cb.15c5bf2c.5025c3cc.9bf454b7';
const API_ENDPOINT = 'https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20220601';

// エッジキャッシュTTL（秒）: 同じ検索は1時間はCloudflareのCDNから返す
const EDGE_CACHE_TTL = 3600;

function janCodeMatches(janCode, itemName) {
  if (!janCode || !itemName) return false;
  const normalize = (s) => s.toUpperCase().replace(/[\s\-]/g, '');
  const normJan = normalize(janCode);
  const normName = normalize(itemName);
  const janCore = normJan.replace(/U\d*$/, '');
  if (janCore.length < 6) return normName.includes(normJan);
  return normName.includes(normJan) || normName.includes(janCore);
}

function mapItem(i) {
  const imageUrl = (i.mediumImageUrls && i.mediumImageUrls[0]) || '';
  const price = i.itemPrice || 0;
  return {
    name: i.itemName || '',
    price: price,
    point: Math.floor(price / 100),
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

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response('', { status: 200, headers: corsHeaders });
  }

  const responseHeaders = {
    ...corsHeaders,
    'Content-Type': 'application/json',
    'Cache-Control': `public, max-age=${EDGE_CACHE_TTL}`,
  };

  // ── Cloudflare エッジキャッシュ ──────────────────────────────────────────
  // 同じURLへのリクエストはCDNからキャッシュを返す（Rakuten API呼び出し不要）
  const cache = caches.default;
  const cacheKey = request.url;
  try {
    const cached = await cache.match(cacheKey);
    if (cached) {
      // キャッシュヒット：そのまま返す（CORSヘッダーを付け直す）
      const body = await cached.text();
      return new Response(body, { status: 200, headers: responseHeaders });
    }
  } catch (_) {}
  // ────────────────────────────────────────────────────────────────────────

  const keyword = params.get('keyword') || 'テニスラケット';
  const janCode = params.get('janCode') || '';

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
    const janSearch = janNorm.replace(/(U)\d+$/, '$1');
    const janBare = janNorm.replace(/U\d*$/, '');

    const isShortNumeric = /^\d{1,7}$/.test(janNorm);

    const keywordNoJan = (keyword || '')
      .replace(new RegExp(janNorm, 'ig'), '')
      .replace(janBare ? new RegExp(janBare, 'ig') : /\b\B/, '')
      .replace(/\s+/g, ' ').trim() || keyword;

    let searchKey;
    if (janCode && !isShortNumeric) {
      searchKey = janSearch;
    } else if (janCode && isShortNumeric) {
      searchKey = keywordNoJan;
    } else {
      searchKey = keyword;
    }

    const result = await runSearch(searchKey);
    if (result.error) {
      // エラーはキャッシュしない（短いTTLでブラウザに返す）
      return new Response(JSON.stringify({
        items: [], count: 0, searchKey, error: result.error, errorDetail: result.detail
      }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=60' } });
    }

    let items = result.items;
    const rawCount = items.length;
    let fallback = false;
    let fallbackKey = '';

    if (janCode && !isShortNumeric) {
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
      const filtered = items.filter(item => janCodeMatches(janCode, item.name));
      if (filtered.length > 0) {
        items = filtered;
      } else {
        fallback = true;
        fallbackKey = searchKey;
      }
    }

    items.sort((a, b) => {
      if (a.isProSports && !b.isProSports) return -1;
      if (!a.isProSports && b.isProSports) return 1;
      return 0;
    });

    const responseBody = JSON.stringify({
      items, count: items.length, rawCount, searchKey, janCode, filtered: !!janCode, fallback
    });

    // 成功レスポンスをエッジキャッシュに保存
    const responseToCache = new Response(responseBody, { status: 200, headers: responseHeaders });
    context.waitUntil(cache.put(cacheKey, responseToCache.clone()));

    return new Response(responseBody, { status: 200, headers: responseHeaders });

  } catch (error) {
    return new Response(JSON.stringify({
      items: [], count: 0, error: 'exception', errorDetail: error.message
    }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
  }
}
