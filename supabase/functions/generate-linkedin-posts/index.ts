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
    const { painPoints, industry } = await req.json();

    if (!painPoints || painPoints.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Pain points are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Generating LinkedIn posts for ${painPoints.length} pain points in ${industry}`);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const painPointsSummary = painPoints.map((p: any, i: number) => 
      `${i + 1}. [${p.sentiment}] ${p.content} (Theme: ${p.theme})`
    ).join('\n');

    const prompt = `You are a LinkedIn ghostwriter for startup CEOs. Based on these real customer pain points from ${industry}, create 3 high-performing LinkedIn posts.

CUSTOMER PAIN POINTS:
${painPointsSummary}

Create 3 LinkedIn posts that:
1. Start with a hook that stops the scroll (controversial, surprising, or relatable)
2. Address a specific pain point with empathy and insight
3. Position the CEO as a thought leader who understands the problem deeply
4. End with an engagement-driving CTA (question, poll prompt, or discussion starter)

Each post should be different in style:
- Post 1: Personal story / vulnerability angle
- Post 2: Hot take / contrarian viewpoint  
- Post 3: Educational / how-to value bomb

Format requirements:
- Hook: 1-2 punchy sentences
- Body: 3-5 short paragraphs, use line breaks, emojis sparingly
- CTA: Ends with a question or call for comments
- Keep each post under 1300 characters

Return ONLY a JSON array with 3 objects, each containing:
- hook (string)
- body (string with \\n for line breaks)
- cta (string)
- targetPainPoint (which pain point theme it addresses)`;

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
            content: 'You are an expert LinkedIn content strategist who creates viral posts for startup founders. Your posts get high engagement because they are authentic, insightful, and spark conversation. Return only valid JSON.' 
          },
          { role: 'user', content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI generation failed:', errorText);
      throw new Error('Failed to generate posts');
    }

    const data = await response.json();
    let postsText = data.choices?.[0]?.message?.content || '[]';
    
    // Clean up the response
    postsText = postsText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    let posts = [];
    try {
      posts = JSON.parse(postsText);
    } catch (e) {
      console.error('Failed to parse AI response:', postsText);
      posts = [];
    }

    // Add IDs to posts
    posts = posts.map((p: any, i: number) => ({
      id: `post_${Date.now()}_${i}`,
      hook: p.hook || '',
      body: p.body || '',
      cta: p.cta || '',
      targetPainPoint: p.targetPainPoint || 'general'
    }));

    console.log(`Generated ${posts.length} LinkedIn posts`);

    return new Response(
      JSON.stringify({ posts }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Error in generate-linkedin-posts:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
