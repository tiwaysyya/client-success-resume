import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Interview {
  participant: string;
  role: string;
  keyQuote: string;
  painPoints: string[];
  themes: string[];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { interviews } = await req.json();

    if (!interviews || interviews.length < 2) {
      return new Response(
        JSON.stringify({ error: 'At least 2 interviews are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Generating feature matrix from', interviews.length, 'interviews');

    // Compile all pain points and themes
    const allPainPoints = interviews.flatMap((i: Interview) => i.painPoints);
    const allThemes = interviews.flatMap((i: Interview) => i.themes);
    
    const interviewSummary = interviews.map((i: Interview) => 
      `${i.participant} (${i.role}): "${i.keyQuote}" | Pain points: ${i.painPoints.join(', ')}`
    ).join('\n');

    const systemPrompt = `You are a product strategist creating a Feature Priority Matrix based on user research. 
    
Given a set of user interviews with extracted pain points, recommend 4-6 product features that would address these pain points. For each feature:
1. Estimate Impact (1-10): How much value would this deliver to users?
2. Estimate Effort (1-10): How much development effort is required?
3. Categorize by quadrant:
   - "Quick Win" = High Impact (≥7), Low Effort (≤4)
   - "Major Project" = High Impact (≥7), High Effort (>4)
   - "Fill-In" = Low Impact (<7), Low Effort (≤4)
   - "Thankless Task" = Low Impact (<7), High Effort (>4)

Focus on features that address multiple pain points across different interviews.`;

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
          { role: 'user', content: `Interviews:\n${interviewSummary}\n\nAll pain points: ${allPainPoints.join(', ')}\n\nAll themes: ${[...new Set(allThemes)].join(', ')}` }
        ],
        tools: [
          {
            type: 'function',
            function: {
              name: 'create_feature_matrix',
              description: 'Create a feature priority matrix based on user research',
              parameters: {
                type: 'object',
                properties: {
                  features: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: { type: 'string', description: 'Unique ID for the feature' },
                        name: { type: 'string', description: 'Feature name (concise, 3-6 words)' },
                        impact: { type: 'number', description: 'Impact score 1-10' },
                        effort: { type: 'number', description: 'Effort score 1-10' },
                        linkedPainPoints: { 
                          type: 'array', 
                          items: { type: 'string' },
                          description: 'Pain points this feature addresses'
                        },
                        priority: { 
                          type: 'string', 
                          enum: ['Quick Win', 'Major Project', 'Fill-In', 'Thankless Task'],
                          description: 'Strategic priority quadrant'
                        }
                      },
                      required: ['id', 'name', 'impact', 'effort', 'linkedPainPoints', 'priority'],
                      additionalProperties: false
                    }
                  }
                },
                required: ['features'],
                additionalProperties: false
              }
            }
          }
        ],
        tool_choice: { type: 'function', function: { name: 'create_feature_matrix' } }
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

    const matrix = JSON.parse(toolCall.function.arguments);
    console.log('Generated features:', matrix.features.length);

    return new Response(
      JSON.stringify(matrix),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error generating feature matrix:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to generate feature matrix' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});