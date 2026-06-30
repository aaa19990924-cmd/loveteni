// カロリー計算API（Cloudflare Pages Functions × Anthropic API）
export async function onRequest(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: corsHeaders });
  }

  const apiKey = env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500, headers: corsHeaders });
  }

  let body;
  try {
    body = await request.json();
  } catch(e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: corsHeaders });
  }

  const foodText = (body.foodText || '').trim();
  if (!foodText) {
    return new Response(JSON.stringify({ error: 'foodText is required' }), { status: 400, headers: corsHeaders });
  }

  const prompt = `以下の食事内容のカロリーを推定してください。
JSON形式のみで回答し、説明文や前置きは一切含めないこと。コードブロックも使用しないこと。

食事内容: "${foodText}"

形式:
{"items":[{"name":"品目名","kcal":数値}],"totalKcal":合計数値,"note":"簡単な栄養コメント（20文字程度）"}`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return new Response(JSON.stringify({ error: 'Anthropic API error', detail: errText }), { status: 502, headers: corsHeaders });
    }

    const data = await res.json();
    let text = (data.content && data.content[0] && data.content[0].text) || '';
    // Remove code blocks if present
    text = text.replace(/```json?\s*/gi, '').replace(/```\s*/g, '').trim();

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch(e) {
      return new Response(JSON.stringify({ error: 'Failed to parse AI response', raw: text }), { status: 502, headers: corsHeaders });
    }

    return new Response(JSON.stringify(parsed), { status: 200, headers: corsHeaders });
  } catch(e) {
    return new Response(JSON.stringify({ error: 'Network error', detail: String(e) }), { status: 502, headers: corsHeaders });
  }
}
