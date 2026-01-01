import { useState } from "react";
import { ArrowLeft, Download, RefreshCw, BarChart3, TrendingUp, Activity, Beaker, Info, X, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from "recharts";

interface TherapeuticArea {
  id: string;
  name: string;
  tam: number;
  cagr: number;
  attractivenessScore: number;
  competitorCount: number;
  regulatoryComplexity: "Low" | "Medium" | "High";
  ipLandscape: "Crowded" | "Moderate" | "Open";
  recentDeals: number;
  pipelineStrength: number;
  historicalData: { year: string; tam: number; growth: number }[];
  topCompetitors: string[];
  recentMA: { deal: string; value: string; date: string }[];
  scoreBreakdown: {
    marketSize: number;
    growthPotential: number;
    competitiveIntensity: number;
    regulatoryFavorability: number;
    ipOpportunity: number;
  };
}

const therapeuticAreas: TherapeuticArea[] = [
  {
    id: "oncology",
    name: "Oncology",
    tam: 286.5,
    cagr: 9.8,
    attractivenessScore: 85,
    competitorCount: 245,
    regulatoryComplexity: "High",
    ipLandscape: "Crowded",
    recentDeals: 42,
    pipelineStrength: 92,
    historicalData: [
      { year: "2020", tam: 180, growth: 8.2 },
      { year: "2021", tam: 198, growth: 10.0 },
      { year: "2022", tam: 220, growth: 11.1 },
      { year: "2023", tam: 248, growth: 12.7 },
      { year: "2024", tam: 286.5, growth: 9.8 },
    ],
    topCompetitors: ["Roche", "Merck", "Bristol-Myers Squibb", "Pfizer", "AstraZeneca"],
    recentMA: [
      { deal: "Pfizer acquires Seagen", value: "$43B", date: "2023" },
      { deal: "AbbVie acquires ImmunoGen", value: "$10.1B", date: "2023" },
    ],
    scoreBreakdown: { marketSize: 95, growthPotential: 88, competitiveIntensity: 65, regulatoryFavorability: 78, ipOpportunity: 72 },
  },
  {
    id: "immunology",
    name: "Immunology",
    tam: 142.3,
    cagr: 7.2,
    attractivenessScore: 78,
    competitorCount: 156,
    regulatoryComplexity: "Medium",
    ipLandscape: "Moderate",
    recentDeals: 28,
    pipelineStrength: 85,
    historicalData: [
      { year: "2020", tam: 98, growth: 6.5 },
      { year: "2021", tam: 106, growth: 8.2 },
      { year: "2022", tam: 118, growth: 11.3 },
      { year: "2023", tam: 132, growth: 6.8 },
      { year: "2024", tam: 142.3, growth: 7.2 },
    ],
    topCompetitors: ["AbbVie", "Johnson & Johnson", "Amgen", "Novartis"],
    recentMA: [
      { deal: "Amgen acquires Horizon", value: "$27.8B", date: "2023" },
    ],
    scoreBreakdown: { marketSize: 82, growthPotential: 75, competitiveIntensity: 72, regulatoryFavorability: 80, ipOpportunity: 78 },
  },
  {
    id: "neurology",
    name: "Neurology",
    tam: 98.7,
    cagr: 11.4,
    attractivenessScore: 82,
    competitorCount: 89,
    regulatoryComplexity: "High",
    ipLandscape: "Moderate",
    recentDeals: 19,
    pipelineStrength: 76,
    historicalData: [
      { year: "2020", tam: 52, growth: 5.8 },
      { year: "2021", tam: 58, growth: 11.5 },
      { year: "2022", tam: 68, growth: 17.2 },
      { year: "2023", tam: 82, growth: 20.6 },
      { year: "2024", tam: 98.7, growth: 11.4 },
    ],
    topCompetitors: ["Biogen", "Eisai", "Eli Lilly", "Roche"],
    recentMA: [
      { deal: "Biogen/Eisai Leqembi approval", value: "N/A", date: "2023" },
    ],
    scoreBreakdown: { marketSize: 72, growthPotential: 94, competitiveIntensity: 82, regulatoryFavorability: 68, ipOpportunity: 85 },
  },
  {
    id: "rare-disease",
    name: "Rare Disease",
    tam: 67.4,
    cagr: 12.8,
    attractivenessScore: 88,
    competitorCount: 52,
    regulatoryComplexity: "Medium",
    ipLandscape: "Open",
    recentDeals: 15,
    pipelineStrength: 81,
    historicalData: [
      { year: "2020", tam: 38, growth: 10.2 },
      { year: "2021", tam: 44, growth: 15.8 },
      { year: "2022", tam: 52, growth: 18.2 },
      { year: "2023", tam: 60, growth: 15.4 },
      { year: "2024", tam: 67.4, growth: 12.8 },
    ],
    topCompetitors: ["Alexion/AstraZeneca", "Vertex", "BioMarin", "Ultragenyx"],
    recentMA: [
      { deal: "Alexion integration complete", value: "$39B", date: "2021" },
    ],
    scoreBreakdown: { marketSize: 65, growthPotential: 92, competitiveIntensity: 88, regulatoryFavorability: 90, ipOpportunity: 92 },
  },
  {
    id: "gene-therapy",
    name: "Gene & Cell Therapy",
    tam: 28.9,
    cagr: 24.6,
    attractivenessScore: 91,
    competitorCount: 78,
    regulatoryComplexity: "High",
    ipLandscape: "Open",
    recentDeals: 31,
    pipelineStrength: 88,
    historicalData: [
      { year: "2020", tam: 8, growth: 35.2 },
      { year: "2021", tam: 12, growth: 50.0 },
      { year: "2022", tam: 17, growth: 41.7 },
      { year: "2023", tam: 23, growth: 35.3 },
      { year: "2024", tam: 28.9, growth: 24.6 },
    ],
    topCompetitors: ["Novartis", "Bluebird Bio", "CRISPR Therapeutics", "Vertex"],
    recentMA: [
      { deal: "Vertex acquires Exonics", value: "$1B", date: "2023" },
    ],
    scoreBreakdown: { marketSize: 55, growthPotential: 98, competitiveIntensity: 75, regulatoryFavorability: 72, ipOpportunity: 95 },
  },
  {
    id: "cardiovascular",
    name: "Cardiovascular",
    tam: 78.2,
    cagr: 5.4,
    attractivenessScore: 68,
    competitorCount: 112,
    regulatoryComplexity: "Medium",
    ipLandscape: "Crowded",
    recentDeals: 12,
    pipelineStrength: 65,
    historicalData: [
      { year: "2020", tam: 62, growth: 3.2 },
      { year: "2021", tam: 65, growth: 4.8 },
      { year: "2022", tam: 69, growth: 6.2 },
      { year: "2023", tam: 74, growth: 7.2 },
      { year: "2024", tam: 78.2, growth: 5.4 },
    ],
    topCompetitors: ["Novartis", "Bayer", "Boehringer Ingelheim", "Pfizer"],
    recentMA: [],
    scoreBreakdown: { marketSize: 75, growthPotential: 58, competitiveIntensity: 62, regulatoryFavorability: 78, ipOpportunity: 55 },
  },
];

const BiotechMarketDashboard = () => {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState<TherapeuticArea | null>(null);
  const [compareMode, setCompareMode] = useState(false);
  const [compareSelection, setCompareSelection] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "high-growth" | "low-competition">("all");
  const lastUpdated = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });

  const filteredAreas = therapeuticAreas.filter((area) => {
    if (filter === "high-growth") return area.cagr > 10;
    if (filter === "low-competition") return area.competitorCount < 100;
    return true;
  });

  const toggleCompare = (id: string) => {
    setCompareSelection((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-emerald-400";
    if (score >= 70) return "text-amber-400";
    return "text-rose-400";
  };

  const getComplexityColor = (complexity: string) => {
    if (complexity === "Low") return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    if (complexity === "Medium") return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    return "bg-rose-500/20 text-rose-400 border-rose-500/30";
  };

  const exportToPDF = () => {
    const content = `
BIOTECH MARKET ANALYSIS REPORT
Generated: ${lastUpdated}

EXECUTIVE SUMMARY
==================
Total Therapeutic Areas Analyzed: ${therapeuticAreas.length}
Combined TAM: $${therapeuticAreas.reduce((sum, a) => sum + a.tam, 0).toFixed(1)}B
Average CAGR: ${(therapeuticAreas.reduce((sum, a) => sum + a.cagr, 0) / therapeuticAreas.length).toFixed(1)}%

TOP OPPORTUNITIES BY ATTRACTIVENESS
====================================
${therapeuticAreas
  .sort((a, b) => b.attractivenessScore - a.attractivenessScore)
  .slice(0, 3)
  .map((a, i) => `${i + 1}. ${a.name} - Score: ${a.attractivenessScore}/100, TAM: $${a.tam}B, CAGR: ${a.cagr}%`)
  .join("\n")}

DETAILED ANALYSIS
==================
${therapeuticAreas.map((a) => `
${a.name}
- TAM: $${a.tam}B | CAGR: ${a.cagr}%
- Attractiveness Score: ${a.attractivenessScore}/100
- Competitors: ${a.competitorCount}
- Regulatory Complexity: ${a.regulatoryComplexity}
- IP Landscape: ${a.ipLandscape}
- Top Players: ${a.topCompetitors.join(", ")}
`).join("\n")}
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `biotech-market-analysis-${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const comparedAreas = therapeuticAreas.filter((a) => compareSelection.includes(a.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="text-slate-400 hover:text-white">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-cyan-400" />
                  Biotech Market Analysis
                </h1>
                <p className="text-sm text-slate-400">Therapeutic Area Intelligence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-800/50 px-3 py-1.5 rounded-full">
                <RefreshCw className="h-3 w-3" />
                Last updated: {lastUpdated}
              </div>
              <Button
                variant={compareMode ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setCompareMode(!compareMode);
                  setCompareSelection([]);
                }}
                className={compareMode ? "bg-cyan-600 hover:bg-cyan-700" : "border-slate-700 text-slate-300"}
              >
                {compareMode ? "Exit Compare" : "Compare Mode"}
              </Button>
              <Button variant="outline" size="sm" onClick={exportToPDF} className="border-slate-700 text-slate-300 hover:text-white">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-white">${therapeuticAreas.reduce((sum, a) => sum + a.tam, 0).toFixed(0)}B</div>
              <div className="text-sm text-slate-400">Combined TAM</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-emerald-400">{(therapeuticAreas.reduce((sum, a) => sum + a.cagr, 0) / therapeuticAreas.length).toFixed(1)}%</div>
              <div className="text-sm text-slate-400">Avg. CAGR</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-cyan-400">{therapeuticAreas.reduce((sum, a) => sum + a.recentDeals, 0)}</div>
              <div className="text-sm text-slate-400">Recent Deals</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-amber-400">{therapeuticAreas.reduce((sum, a) => sum + a.competitorCount, 0)}</div>
              <div className="text-sm text-slate-400">Total Competitors</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          {[
            { key: "all", label: "All Areas" },
            { key: "high-growth", label: "High Growth (>10%)" },
            { key: "low-competition", label: "Low Competition (<100)" },
          ].map((f) => (
            <Button
              key={f.key}
              variant={filter === f.key ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f.key as typeof filter)}
              className={filter === f.key ? "bg-cyan-600 hover:bg-cyan-700" : "border-slate-700 text-slate-400"}
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Compare Selection Bar */}
        {compareMode && compareSelection.length > 0 && (
          <div className="bg-cyan-900/30 border border-cyan-700/50 rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-cyan-300 text-sm">Comparing {compareSelection.length}/3:</span>
              <div className="flex gap-2">
                {comparedAreas.map((a) => (
                  <Badge key={a.id} className="bg-cyan-600/30 text-cyan-300 border-cyan-500/50">
                    {a.name}
                    <button onClick={() => toggleCompare(a.id)} className="ml-1 hover:text-white">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
            {compareSelection.length >= 2 && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                    View Comparison
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-900 border-slate-700 max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-white">Side-by-Side Comparison</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${comparedAreas.length}, 1fr)` }}>
                    {comparedAreas.map((area) => (
                      <div key={area.id} className="space-y-4">
                        <h3 className="text-lg font-semibold text-white text-center border-b border-slate-700 pb-2">{area.name}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between"><span className="text-slate-400">TAM</span><span className="text-white font-medium">${area.tam}B</span></div>
                          <div className="flex justify-between"><span className="text-slate-400">CAGR</span><span className="text-emerald-400 font-medium">{area.cagr}%</span></div>
                          <div className="flex justify-between"><span className="text-slate-400">Score</span><span className={`font-medium ${getScoreColor(area.attractivenessScore)}`}>{area.attractivenessScore}</span></div>
                          <div className="flex justify-between"><span className="text-slate-400">Competitors</span><span className="text-white font-medium">{area.competitorCount}</span></div>
                          <div className="flex justify-between"><span className="text-slate-400">Regulatory</span><span className="text-white font-medium">{area.regulatoryComplexity}</span></div>
                          <div className="flex justify-between"><span className="text-slate-400">IP Landscape</span><span className="text-white font-medium">{area.ipLandscape}</span></div>
                        </div>
                        {/* Mini sparkline */}
                        <div className="h-16">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={area.historicalData}>
                              <Area type="monotone" dataKey="tam" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.2} strokeWidth={2} />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        )}

        {/* Therapeutic Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area) => (
            <Card
              key={area.id}
              className={`bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all cursor-pointer ${
                compareMode && compareSelection.includes(area.id) ? "ring-2 ring-cyan-500" : ""
              }`}
              onClick={() => (compareMode ? toggleCompare(area.id) : setSelectedArea(area))}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    {compareMode && (
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        compareSelection.includes(area.id) ? "bg-cyan-600 border-cyan-600" : "border-slate-600"
                      }`}>
                        {compareSelection.includes(area.id) && <Check className="h-3 w-3 text-white" />}
                      </div>
                    )}
                    {area.name}
                  </CardTitle>
                  <div className={`text-2xl font-bold ${getScoreColor(area.attractivenessScore)}`}>
                    {area.attractivenessScore}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Sparkline */}
                <div className="h-12">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={area.historicalData}>
                      <Area type="monotone" dataKey="tam" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.1} strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-400">TAM</div>
                    <div className="text-white font-semibold">${area.tam}B</div>
                  </div>
                  <div>
                    <div className="text-slate-400">CAGR</div>
                    <div className="text-emerald-400 font-semibold flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {area.cagr}%
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Badge className={getComplexityColor(area.regulatoryComplexity)}>
                    {area.regulatoryComplexity} Regulatory
                  </Badge>
                  <Badge className={`${area.ipLandscape === "Open" ? "bg-emerald-500/20 text-emerald-400" : area.ipLandscape === "Moderate" ? "bg-amber-500/20 text-amber-400" : "bg-rose-500/20 text-rose-400"} border-0`}>
                    {area.ipLandscape} IP
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{area.competitorCount} competitors</span>
                  <span>{area.recentDeals} recent deals</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Detail Panel Dialog */}
      <Dialog open={!!selectedArea} onOpenChange={() => setSelectedArea(null)}>
        <DialogContent className="bg-slate-900 border-slate-700 max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedArea && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-white flex items-center justify-between">
                  {selectedArea.name}
                  <span className={`text-3xl font-bold ${getScoreColor(selectedArea.attractivenessScore)}`}>
                    {selectedArea.attractivenessScore}/100
                  </span>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">${selectedArea.tam}B</div>
                    <div className="text-xs text-slate-400">TAM</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-emerald-400">{selectedArea.cagr}%</div>
                    <div className="text-xs text-slate-400">CAGR</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-cyan-400">{selectedArea.competitorCount}</div>
                    <div className="text-xs text-slate-400">Competitors</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-amber-400">{selectedArea.pipelineStrength}</div>
                    <div className="text-xs text-slate-400">Pipeline Score</div>
                  </div>
                </div>

                {/* Historical Chart */}
                <div>
                  <h3 className="text-sm font-medium text-slate-300 mb-3">TAM Growth Trajectory</h3>
                  <div className="h-48 bg-slate-800/30 rounded-lg p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={selectedArea.historicalData}>
                        <XAxis dataKey="year" stroke="#64748b" fontSize={12} />
                        <YAxis stroke="#64748b" fontSize={12} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area type="monotone" dataKey="tam" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.2} strokeWidth={2} name="TAM ($B)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Score Breakdown */}
                <div>
                  <h3 className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                    Score Breakdown
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-slate-500" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-slate-800 border-slate-700 max-w-xs">
                        <p className="text-sm">Attractiveness score calculated from weighted factors: Market Size (25%), Growth (25%), Competition (20%), Regulatory (15%), IP (15%)</p>
                      </TooltipContent>
                    </Tooltip>
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(selectedArea.scoreBreakdown).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                          <span className="text-white">{value}/100</span>
                        </div>
                        <Progress value={value} className="h-2 bg-slate-700" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Competitors */}
                <div>
                  <h3 className="text-sm font-medium text-slate-300 mb-3">Top Competitors</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedArea.topCompetitors.map((comp) => (
                      <Badge key={comp} className="bg-slate-700/50 text-slate-300 border-slate-600">
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Recent M&A */}
                {selectedArea.recentMA.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-slate-300 mb-3">Recent M&A Activity</h3>
                    <div className="space-y-2">
                      {selectedArea.recentMA.map((deal, i) => (
                        <div key={i} className="bg-slate-800/50 rounded-lg p-3 flex justify-between items-center">
                          <span className="text-white text-sm">{deal.deal}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-emerald-400 font-semibold">{deal.value}</span>
                            <span className="text-slate-500 text-xs">{deal.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BiotechMarketDashboard;
