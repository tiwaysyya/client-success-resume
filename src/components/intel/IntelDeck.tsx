import { ArrowLeft, Download, Lightbulb, TrendingUp, AlertTriangle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Competitor } from "@/pages/FoundersIntelligence";

interface IntelDeckProps {
  competitors: Competitor[];
  onClose: () => void;
}

const IntelDeck = ({ competitors, onClose }: IntelDeckProps) => {
  const competitorsWithData = competitors.filter(
    (c) => c.latestUpdates.length > 0 || c.strategicInsights?.length
  );

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleExport = () => {
    const content = generateMarkdownExport(competitorsWithData, today);
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `intel-deck-${new Date().toISOString().split("T")[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Weekly Intel Deck</h2>
            <p className="text-sm text-muted-foreground">{today}</p>
          </div>
        </div>
        <Button variant="outline" onClick={handleExport}>
          <Download className="h-4 w-4 mr-2" />
          Export Markdown
        </Button>
      </div>

      {/* Executive Summary */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Executive Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground">
            This week's competitive analysis covers {competitorsWithData.length} competitors in the
            Healthtech space. Key themes include product feature expansions, pricing strategy
            adjustments, and new market positioning. See individual competitor sections for
            strategic response recommendations.
          </p>
        </CardContent>
      </Card>

      {/* Competitor Sections */}
      {competitorsWithData.map((competitor) => (
        <Card key={competitor.id} className="overflow-hidden">
          <CardHeader className="bg-card border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{competitor.name}</CardTitle>
              <Badge variant="secondary">{competitor.latestUpdates.length} updates</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{competitor.description}</p>
          </CardHeader>

          <CardContent className="pt-6 space-y-6">
            {/* Latest Updates */}
            {competitor.latestUpdates.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  Latest Moves
                </h4>
                <div className="space-y-3">
                  {competitor.latestUpdates.map((update, index) => (
                    <div key={index} className="pl-4 border-l-2 border-muted">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs capitalize">
                          {update.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{update.date}</span>
                      </div>
                      <p className="font-medium text-foreground">{update.title}</p>
                      <p className="text-sm text-muted-foreground">{update.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Separator />

            {/* Strategic Response */}
            {competitor.strategicInsights && competitor.strategicInsights.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  Recommended Response
                </h4>
                <div className="space-y-2">
                  {competitor.strategicInsights.map((insight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                    >
                      <Lightbulb className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-foreground">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {competitorsWithData.length === 0 && (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">
            No competitor data available. Scan competitors first to generate insights.
          </p>
        </Card>
      )}
    </div>
  );
};

const generateMarkdownExport = (competitors: Competitor[], date: string): string => {
  let md = `# Weekly Intel Deck\n\n**Date:** ${date}\n\n---\n\n`;

  md += `## Executive Summary\n\nThis week's competitive analysis covers ${competitors.length} competitors in the Healthtech space.\n\n---\n\n`;

  for (const competitor of competitors) {
    md += `## ${competitor.name}\n\n`;
    md += `*${competitor.description}*\n\n`;

    if (competitor.latestUpdates.length > 0) {
      md += `### Latest Moves\n\n`;
      for (const update of competitor.latestUpdates) {
        md += `- **[${update.type.toUpperCase()}]** ${update.title}\n`;
        md += `  - ${update.summary}\n`;
        md += `  - *${update.date}*\n\n`;
      }
    }

    if (competitor.strategicInsights && competitor.strategicInsights.length > 0) {
      md += `### Recommended Response\n\n`;
      for (const insight of competitor.strategicInsights) {
        md += `- ${insight}\n`;
      }
      md += `\n`;
    }

    md += `---\n\n`;
  }

  return md;
};

export default IntelDeck;
