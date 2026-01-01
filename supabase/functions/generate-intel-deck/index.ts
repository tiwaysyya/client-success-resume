import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CompetitorUpdate {
  type: 'feature' | 'pricing' | 'news' | 'other';
  title: string;
  summary: string;
  date: string;
}

interface Competitor {
  id: string;
  name: string;
  description: string;
  latestUpdates: CompetitorUpdate[];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { competitors } = await req.json() as { competitors: Competitor[] };

    if (!competitors || competitors.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'No competitors provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'AI not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Generating intel deck for', competitors.length, 'competitors');

    // Generate strategic insights for each competitor
    const insightsMap: Record<string, string[]> = {};

    for (const competitor of competitors) {
      if (competitor.latestUpdates.length === 0) continue;

      const updatesContext = competitor.latestUpdates
        .map(u => `[${u.type.toUpperCase()}] ${u.title}: ${u.summary} (${u.date})`)
        .join('\n');

      const prompt = `You are a strategic advisor for a healthtech startup. Analyze these recent moves by ${competitor.name} (${competitor.description}):

${updatesContext}

Provide exactly 3 strategic recommendations for how a competing healthtech startup should respond. Each recommendation should:
1. Be specific and actionable
2. Reference the competitor's move
3. Suggest a concrete counter-strategy

Format: Return ONLY a JSON array of 3 strings, each being one recommendation.
Example: ["Counter their referral program by launching a loyalty tier system with better rewards", "Accelerate our enterprise sales push before they establish market dominance", "Differentiate on data privacy as they expand data collection"]`;

      console.log('Generating insights for:', competitor.name);

      const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOVABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [
            { 
              role: 'system', 
              content: 'You are a senior strategy consultant specializing in healthtech competitive intelligence. Provide sharp, actionable strategic recommendations. Always respond with valid JSON only.' 
            },
            { role: 'user', content: prompt }
          ],
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('AI error for', competitor.name, ':', response.status, errorText);
        
        if (response.status === 429) {
          return new Response(
            JSON.stringify({ success: false, error: 'Rate limit exceeded. Please try again later.' }),
            { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        if (response.status === 402) {
          return new Response(
            JSON.stringify({ success: false, error: 'AI credits exhausted. Please add credits.' }),
            { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        continue;
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || '[]';
      
      console.log('AI insights for', competitor.name, ':', content.slice(0, 200));

      try {
        // Clean up the response
        const cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const insights = JSON.parse(cleanContent);
        if (Array.isArray(insights)) {
          insightsMap[competitor.id] = insights.slice(0, 3);
        }
      } catch (parseError) {
        console.error('Failed to parse insights for', competitor.name, ':', parseError);
      }
    }

    console.log('Generated insights for', Object.keys(insightsMap).length, 'competitors');

    return new Response(
      JSON.stringify({ success: true, insights: insightsMap }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error generating intel deck:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
