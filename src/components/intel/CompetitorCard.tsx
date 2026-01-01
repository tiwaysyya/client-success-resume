import { ExternalLink, RefreshCw, Trash2, Clock, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Competitor, CompetitorUpdate } from "@/pages/FoundersIntelligence";

interface CompetitorCardProps {
  competitor: Competitor;
  onScan: () => void;
  onRemove: () => void;
  isScanning: boolean;
}

const updateTypeBadge = (type: CompetitorUpdate["type"]) => {
  const styles = {
    feature: "bg-blue-500/10 text-blue-700 border-blue-200",
    pricing: "bg-green-500/10 text-green-700 border-green-200",
    news: "bg-purple-500/10 text-purple-700 border-purple-200",
    other: "bg-muted text-muted-foreground border-border",
  };
  return styles[type];
};

const CompetitorCard = ({ competitor, onScan, onRemove, isScanning }: CompetitorCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg flex items-center gap-2">
              {competitor.name}
              <a
                href={competitor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
              </a>
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{competitor.description}</p>
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={onScan}
              disabled={isScanning}
            >
              <RefreshCw className={`h-4 w-4 ${isScanning ? "animate-spin" : ""}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-destructive hover:text-destructive"
              onClick={onRemove}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {competitor.lastScraped && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
            <Clock className="h-3 w-3" />
            Last scanned: {new Date(competitor.lastScraped).toLocaleDateString()}
          </div>
        )}

        {competitor.latestUpdates.length > 0 ? (
          <div className="space-y-3">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Latest Updates
            </div>
            {competitor.latestUpdates.slice(0, 3).map((update, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={`text-xs ${updateTypeBadge(update.type)}`}>
                    {update.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{update.date}</span>
                </div>
                <p className="text-sm font-medium text-foreground">{update.title}</p>
                <p className="text-xs text-muted-foreground line-clamp-2">{update.summary}</p>
              </div>
            ))}
            {competitor.latestUpdates.length > 3 && (
              <p className="text-xs text-muted-foreground">
                +{competitor.latestUpdates.length - 3} more updates
              </p>
            )}
          </div>
        ) : (
          <div className="text-center py-4 border border-dashed border-border rounded-lg bg-muted/20">
            <Tag className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">No updates yet</p>
            <Button variant="link" size="sm" onClick={onScan} disabled={isScanning}>
              {isScanning ? "Scanning..." : "Scan now"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CompetitorCard;
