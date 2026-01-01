import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { keyword, industry } = await req.json();

    if (!keyword) {
      return new Response(
        JSON.stringify({ error: 'Keyword is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Searching for pain points: "${keyword}" in ${industry || 'general'}`);

    const firecrawlKey = Deno.env.get('FIRECRAWL_API_KEY');
    if (!firecrawlKey) {
      throw new Error('FIRECRAWL_API_KEY not configured');
    }

    // Search Reddit and Twitter for pain points
    const searchQueries = [
      `site:reddit.com "${keyword}" frustrated OR annoying OR hate OR problem`,
      `site:reddit.com "${keyword}" looking for OR need help OR recommendations`,
      `"${keyword}" complaints OR issues OR switching from`,
    ];

    const allResults: any[] = [];

    for (const query of searchQueries) {
      try {
        const response = await fetch('https://api.firecrawl.dev/v1/search', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${firecrawlKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            limit: 5,
            scrapeOptions: {
              formats: ['markdown']
            }
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.data) {
            allResults.push(...data.data);
          }
        }
      } catch (e) {
        console.error('Search query failed:', query, e);
      }
    }

    console.log(`Found ${allResults.length} raw results`);

    // Use AI to extract and categorize pain points
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const extractionPrompt = `Analyze these search results and extract customer pain points related to "${keyword}"${industry ? ` in the ${industry} industry` : ''}.

Search Results:
${allResults.slice(0, 10).map((r, i) => `
[${i + 1}] ${r.title || 'No title'}
URL: ${r.url || 'N/A'}
Content: ${(r.markdown || r.description || '').slice(0, 500)}
`).join('\n')}

Extract up to 8 unique pain points. For each, provide:
1. A clear, specific pain point statement (1-2 sentences, written as if the customer said it)
2. The source type (reddit or twitter based on URL)
3. A fake but realistic username
4. The sentiment: "frustrated" (angry about current solution), "seeking_solution" (actively looking for alternatives), or "comparing" (evaluating options)
5. A theme category (e.g., "pricing", "usability", "support", "features", "reliability")

Return ONLY a JSON array with objects containing: content, source, author, url, sentiment, theme`;

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: 'You are an expert at analyzing customer feedback and identifying pain points. Return only valid JSON.' },
          { role: 'user', content: extractionPrompt }
        ],
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI extraction failed:', errorText);
      throw new Error('Failed to analyze pain points');
    }

    const aiData = await aiResponse.json();
    let painPointsText = aiData.choices?.[0]?.message?.content || '[]';
    
    // Clean up the response
    painPointsText = painPointsText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    let painPoints = [];
    try {
      painPoints = JSON.parse(painPointsText);
    } catch (e) {
      console.error('Failed to parse AI response:', painPointsText);
      painPoints = [];
    }

    // Add IDs to pain points
    painPoints = painPoints.map((p: any, i: number) => ({
      id: `pp_${Date.now()}_${i}`,
      content: p.content || '',
      source: p.source || 'reddit',
      author: p.author || 'anonymous',
      url: p.url || '',
      sentiment: p.sentiment || 'frustrated',
      theme: p.theme || 'general'
    }));

    console.log(`Extracted ${painPoints.length} pain points`);

    return new Response(
      JSON.stringify({ painPoints }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Error in scrape-pain-points:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
