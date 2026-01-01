import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Radar, Plus, RefreshCw, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import CompetitorCard from "@/components/intel/CompetitorCard";
import AddCompetitorDialog from "@/components/intel/AddCompetitorDialog";
import IntelDeck from "@/components/intel/IntelDeck";
import { supabase } from "@/integrations/supabase/client";

export interface Competitor {
  id: string;
  name: string;
  website: string;
  description: string;
  lastScraped?: string;
  latestUpdates: CompetitorUpdate[];
  strategicInsights?: string[];
}

export interface CompetitorUpdate {
  type: "feature" | "pricing" | "news" | "other";
  title: string;
  summary: string;
  date: string;
  source?: string;
}

const defaultCompetitors: Competitor[] = [
  {
    id: "1",
    name: "Headspace",
    website: "https://www.headspace.com",
    description: "Mental health and meditation app",
    latestUpdates: [],
  },
  {
    id: "2",
    name: "Calm",
    website: "https://www.calm.com",
    description: "Sleep, meditation and relaxation app",
    latestUpdates: [],
  },
  {
    id: "3",
    name: "Noom",
    website: "https://www.noom.com",
    description: "Weight loss and health coaching platform",
    latestUpdates: [],
  },
  {
    id: "4",
    name: "Hinge Health",
    website: "https://www.hingehealth.com",
    description: "Digital musculoskeletal care platform",
    latestUpdates: [],
  },
  {
    id: "5",
    name: "Teladoc",
    website: "https://www.teladoc.com",
    description: "Virtual healthcare and telemedicine",
    latestUpdates: [],
  },
];

const FoundersIntelligence = () => {
  const { toast } = useToast();
  const [competitors, setCompetitors] = useState<Competitor[]>(defaultCompetitors);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isGeneratingDeck, setIsGeneratingDeck] = useState(false);
  const [showIntelDeck, setShowIntelDeck] = useState(false);
  const [scanningCompetitorId, setScanningCompetitorId] = useState<string | null>(null);

  const handleAddCompetitor = (competitor: Omit<Competitor, "id" | "latestUpdates">) => {
    const newCompetitor: Competitor = {
      ...competitor,
      id: Date.now().toString(),
      latestUpdates: [],
    };
    setCompetitors([...competitors, newCompetitor]);
    toast({
      title: "Competitor added",
      description: `${competitor.name} has been added to your watchlist.`,
    });
  };

  const handleRemoveCompetitor = (id: string) => {
    setCompetitors(competitors.filter((c) => c.id !== id));
    toast({
      title: "Competitor removed",
      description: "The competitor has been removed from your watchlist.",
    });
  };

  const handleScanCompetitor = async (id: string) => {
    const competitor = competitors.find((c) => c.id === id);
    if (!competitor) return;

    setScanningCompetitorId(id);

    try {
      const { data, error } = await supabase.functions.invoke("scrape-competitor", {
        body: { url: competitor.website, name: competitor.name },
      });

      if (error) throw error;

      const updates: CompetitorUpdate[] = data.updates || [];
      
      setCompetitors(
        competitors.map((c) =>
          c.id === id
            ? { ...c, latestUpdates: updates, lastScraped: new Date().toISOString() }
            : c
        )
      );

      toast({
        title: "Scan complete",
        description: `Found ${updates.length} updates for ${competitor.name}.`,
      });
    } catch (error) {
      console.error("Scan error:", error);
      toast({
        title: "Scan failed",
        description: "Could not scan competitor. Please try again.",
        variant: "destructive",
      });
    } finally {
      setScanningCompetitorId(null);
    }
  };

  const handleScanAll = async () => {
    setIsScanning(true);
    
    for (const competitor of competitors) {
      await handleScanCompetitor(competitor.id);
    }
    
    setIsScanning(false);
    toast({
      title: "All scans complete",
      description: "Finished scanning all competitors.",
    });
  };

  const handleGenerateIntelDeck = async () => {
    const competitorsWithUpdates = competitors.filter(c => c.latestUpdates.length > 0);
    
    if (competitorsWithUpdates.length === 0) {
      toast({
        title: "No data available",
        description: "Scan competitors first to gather intelligence.",
        variant: "destructive",
      });
      return;
    }

    setIsGeneratingDeck(true);

    try {
      const { data, error } = await supabase.functions.invoke("generate-intel-deck", {
        body: { competitors: competitorsWithUpdates },
      });

      if (error) throw error;

      // Update competitors with strategic insights
      const insightsMap = data.insights as Record<string, string[]>;
      setCompetitors(
        competitors.map((c) => ({
          ...c,
          strategicInsights: insightsMap[c.id] || c.strategicInsights,
        }))
      );

      setShowIntelDeck(true);
      toast({
        title: "Intel Deck generated",
        description: "Strategic insights are ready for review.",
      });
    } catch (error) {
      console.error("Generate deck error:", error);
      toast({
        title: "Generation failed",
        description: "Could not generate Intel Deck. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingDeck(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Founder's Intelligence | Competitive Analysis Tool</title>
        <meta name="description" content="Track competitors, analyze market moves, and generate strategic insights for busy founders." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Radar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Founder's Intelligence</h1>
                  <p className="text-sm text-muted-foreground">Healthtech Competitive Analysis</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAddDialogOpen(true)}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Competitor
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleScanAll}
                  disabled={isScanning}
                >
                  <RefreshCw className={`h-4 w-4 mr-1 ${isScanning ? "animate-spin" : ""}`} />
                  Scan All
                </Button>
                <Button
                  size="sm"
                  onClick={handleGenerateIntelDeck}
                  disabled={isGeneratingDeck}
                >
                  <Sparkles className={`h-4 w-4 mr-1 ${isGeneratingDeck ? "animate-pulse" : ""}`} />
                  Generate Intel Deck
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container max-w-7xl mx-auto px-4 py-8">
          {showIntelDeck ? (
            <IntelDeck 
              competitors={competitors} 
              onClose={() => setShowIntelDeck(false)} 
            />
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-foreground mb-1">Competitor Watchlist</h2>
                <p className="text-sm text-muted-foreground">
                  Track your top competitors and gather intelligence on their latest moves.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {competitors.map((competitor) => (
                  <CompetitorCard
                    key={competitor.id}
                    competitor={competitor}
                    onScan={() => handleScanCompetitor(competitor.id)}
                    onRemove={() => handleRemoveCompetitor(competitor.id)}
                    isScanning={scanningCompetitorId === competitor.id}
                  />
                ))}
              </div>

              {competitors.length === 0 && (
                <div className="text-center py-12 border border-dashed border-border rounded-lg">
                  <Radar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">No competitors yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Add competitors to start tracking their moves.
                  </p>
                  <Button onClick={() => setIsAddDialogOpen(true)}>
                    <Plus className="h-4 w-4 mr-1" />
                    Add Your First Competitor
                  </Button>
                </div>
              )}
            </>
          )}
        </main>

        <AddCompetitorDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onAdd={handleAddCompetitor}
        />
      </div>
    </>
  );
};

export default FoundersIntelligence;
