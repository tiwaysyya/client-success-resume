import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  ArrowLeft, 
  Search, 
  MessageSquare,
  Twitter,
  Loader2,
  Lightbulb,
  Copy,
  ThumbsUp,
  TrendingUp,
  Users,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

interface PainPoint {
  id: string;
  source: "reddit" | "twitter";
  content: string;
  author: string;
  url: string;
  sentiment: "frustrated" | "seeking_solution" | "comparing";
  theme: string;
}

interface LinkedInPost {
  id: string;
  hook: string;
  body: string;
  cta: string;
  targetPainPoint: string;
}

const SocialProofScraper = () => {
  const { toast } = useToast();
  const [keyword, setKeyword] = useState("");
  const [industry, setIndustry] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [painPoints, setPainPoints] = useState<PainPoint[]>([]);
  const [linkedInPosts, setLinkedInPosts] = useState<LinkedInPost[]>([]);

  const handleSearch = async () => {
    if (!keyword.trim()) {
      toast({
        title: "Missing Keyword",
        description: "Please enter a keyword to search for",
        variant: "destructive"
      });
      return;
    }

    setIsSearching(true);
    setPainPoints([]);
    setLinkedInPosts([]);

    try {
      const { data, error } = await supabase.functions.invoke("scrape-pain-points", {
        body: { keyword: keyword.trim(), industry: industry.trim() }
      });

      if (error) throw error;

      setPainPoints(data.painPoints || []);
      
      toast({
        title: "Search Complete",
        description: `Found ${data.painPoints?.length || 0} customer pain points`
      });
    } catch (error: any) {
      console.error("Search error:", error);
      toast({
        title: "Search Failed",
        description: error.message || "Failed to search for pain points",
        variant: "destructive"
      });
    } finally {
      setIsSearching(false);
    }
  };

  const handleGeneratePosts = async () => {
    if (painPoints.length === 0) {
      toast({
        title: "No Pain Points",
        description: "Search for pain points first before generating posts",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    try {
      const { data, error } = await supabase.functions.invoke("generate-linkedin-posts", {
        body: { 
          painPoints: painPoints.map(p => ({ content: p.content, theme: p.theme, sentiment: p.sentiment })),
          industry: industry || keyword
        }
      });

      if (error) throw error;

      setLinkedInPosts(data.posts || []);
      
      toast({
        title: "Posts Generated",
        description: "3 LinkedIn post templates are ready!"
      });
    } catch (error: any) {
      console.error("Generation error:", error);
      toast({
        title: "Generation Failed",
        description: error.message || "Failed to generate LinkedIn posts",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyPost = (post: LinkedInPost) => {
    const fullPost = `${post.hook}\n\n${post.body}\n\n${post.cta}`;
    navigator.clipboard.writeText(fullPost);
    toast({
      title: "Copied!",
      description: "Post copied to clipboard"
    });
  };

  const getSentimentColor = (sentiment: PainPoint["sentiment"]) => {
    switch (sentiment) {
      case "frustrated": return "bg-red-500/10 text-red-600 border-red-500/20";
      case "seeking_solution": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "comparing": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    }
  };

  const getSourceIcon = (source: PainPoint["source"]) => {
    switch (source) {
      case "reddit": return <MessageSquare className="w-4 h-4" />;
      case "twitter": return <Twitter className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">Social Proof Scraper</h1>
              <p className="text-sm text-muted-foreground">Find pain points, craft viral posts</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-8">
        {/* Search Section */}
        <Card className="p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" />
            Monitor Customer Conversations
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="keyword">Search Keyword *</Label>
              <Input
                id="keyword"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="e.g., switching banks, HR software"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry Context</Label>
              <Input
                id="industry"
                value={industry}
                onChange={e => setIndustry(e.target.value)}
                placeholder="e.g., fintech, SaaS"
              />
            </div>
            <div className="flex items-end">
              <Button 
                onClick={handleSearch} 
                disabled={isSearching}
                className="w-full gap-2"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Find Pain Points
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>

        {/* Pain Points Database */}
        {painPoints.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Customer Pain Points Database ({painPoints.length})
              </h2>
              <Button 
                onClick={handleGeneratePosts}
                disabled={isGenerating}
                className="gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate LinkedIn Posts
                  </>
                )}
              </Button>
            </div>

            <div className="grid gap-4">
              {painPoints.map(point => (
                <Card key={point.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-secondary">
                      {getSourceIcon(point.source)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className={getSentimentColor(point.sentiment)}>
                          {point.sentiment.replace("_", " ")}
                        </Badge>
                        <Badge variant="secondary">{point.theme}</Badge>
                        <span className="text-xs text-muted-foreground">@{point.author}</span>
                      </div>
                      <p className="text-foreground">{point.content}</p>
                      {point.url && (
                        <a 
                          href={point.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
                        >
                          View source <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* LinkedIn Posts */}
        {linkedInPosts.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              LinkedIn Post Templates (CEO-Ready)
            </h2>

            <div className="grid gap-6">
              {linkedInPosts.map((post, index) => (
                <Card key={post.id} className="p-6 border-primary/20">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-primary">Post #{index + 1}</Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyPost(post)}
                      className="gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">HOOK (Stops the scroll)</p>
                      <p className="text-lg font-semibold text-foreground">{post.hook}</p>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">BODY (Delivers value)</p>
                      <p className="text-foreground whitespace-pre-line">{post.body}</p>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">CTA (Drives engagement)</p>
                      <p className="text-primary font-medium">{post.cta}</p>
                    </div>

                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Lightbulb className="w-3 h-3" />
                        Addresses: {post.targetPainPoint}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {painPoints.length === 0 && !isSearching && (
          <Card className="p-12 text-center">
            <Search className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">Start Your Research</h3>
            <p className="text-muted-foreground mb-4 max-w-md mx-auto">
              Enter keywords related to your startup&apos;s problem space to find real customer pain points from Reddit and Twitter
            </p>
          </Card>
        )}
      </main>
    </div>
  );
};

export default SocialProofScraper;
