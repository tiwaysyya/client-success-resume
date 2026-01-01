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
    const { notes, participant, role } = await req.json();

    if (!notes) {
      return new Response(
        JSON.stringify({ error: 'Interview notes are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Analyzing interview for:', participant);

    const systemPrompt = `You are a senior UX researcher and product strategist analyzing user interviews for a biotech software product. Your task is to extract actionable insights from interview notes.

Extract the following from the interview:
1. The single most compelling direct quote that captures a key pain point (verbatim if possible, or synthesized if not)
2. 2-4 specific pain points the user experiences in their workflow
3. 2-4 thematic categories these pain points fall into

Focus on concrete workflow problems, tool frustrations, and unmet needs that could inform product decisions.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Interview with ${participant} (${role}):\n\n${notes}` }
        ],
        tools: [
          {
            type: 'function',
            function: {
              name: 'extract_interview_insights',
              description: 'Extract key insights from a user interview',
              parameters: {
                type: 'object',
                properties: {
                  keyQuote: {
                    type: 'string',
                    description: 'The most compelling quote or statement from the interview (1-2 sentences)'
                  },
                  painPoints: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'List of 2-4 specific pain points mentioned or implied'
                  },
                  themes: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'List of 2-4 thematic categories (e.g., Data Management, Compliance, Collaboration)'
                  }
                },
                required: ['keyQuote', 'painPoints', 'themes'],
                additionalProperties: false
              }
            }
          }
        ],
        tool_choice: { type: 'function', function: { name: 'extract_interview_insights' } }
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'API credits exhausted. Please add funds to continue.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI API error:', response.status, errorText);
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('AI response received');

    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      throw new Error('No tool call in response');
    }

    const insights = JSON.parse(toolCall.function.arguments);
    console.log('Extracted insights:', insights);

    return new Response(
      JSON.stringify(insights),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error analyzing interview:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to analyze interview' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});