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

// Cloudflare Pages Functionsのエクスポート形式
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const params = url.searchParams;

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=300'
  };

  if (request.method === 'OPTIONS') {
    return new Response('', { status: 200, headers });
  }

  const keyword = params.get('keyword') || 'テニスラケット';
  const janCode = params.get('janCode') || '';
  const searchKey = janCode || keyword;

  try {
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

    if (!response.ok) {
      return new Response(JSON.stringify({
        items: [], count: 0, searchKey,
        error: `HTTP ${response.status}`,
        errorDetail: responseText.substring(0, 300)
      }), { status: 200, headers });
    }

    let data;
    try { data = JSON.parse(responseText); }
    catch(e) {
      return new Response(JSON.stringify({
        items: [], count: 0, searchKey,
        error: 'Invalid JSON',
        errorDetail: responseText.substring(0, 300)
      }), { status: 200, headers });
    }

    if (data.error) {
      return new Response(JSON.stringify({
        items: [], count: 0, searchKey,
        error: data.error,
        errorDetail: data.error_description || ''
      }), { status: 200, headers });
    }

    // 整形
    let items = (data.Items || []).map(i => {
      const imageUrl = (i.mediumImageUrls && i.mediumImageUrls[0]) || '';
      return {
        name: i.itemName || '',
        price: i.itemPrice || 0,
        itemUrl: i.affiliateUrl || i.itemUrl || '',
        shopName: i.shopName || '',
        shopCode: i.shopCode || '',
        imageUrl: imageUrl,
        largeImageUrl: imageUrl.replace(/_ex=\d+x\d+/, '_ex=400x400') || imageUrl,
        reviewCount: i.reviewCount || 0,
        reviewAverage: i.reviewAverage || 0,
        isProSports: (i.shopCode || '').toLowerCase() === 'prospo'
      };
    });

    const rawCount = items.length;

    // 品番指定があれば商品名一致フィルタ
    if (janCode) {
      items = items.filter(item => janCodeMatches(janCode, item.name));
    }

    // prospo商品を先頭に並べる
    items.sort((a, b) => {
      if (a.isProSports && !b.isProSports) return -1;
      if (!a.isProSports && b.isProSports) return 1;
      return 0;
    });

    return new Response(JSON.stringify({
      items,
      count: items.length,
      rawCount,
      searchKey,
      janCode,
      filtered: !!janCode
    }), { status: 200, headers });

  } catch (error) {
    return new Response(JSON.stringify({
      items: [], count: 0, searchKey,
      error: 'exception',
      errorDetail: error.message
    }), { status: 200, headers });
  }
}
