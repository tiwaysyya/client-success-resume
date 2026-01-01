import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, TrendingDown, AlertTriangle, DollarSign, Users, Clock, Zap, Bell, Download, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, ReferenceLine } from "recharts";
import { toast } from "sonner";

// Simulated data
const monthlyMetrics = [
  { month: "Jul", cac: 120, ltv: 380, ratio: 3.17, payback: 4.2, mrr: 45000, customers: 125 },
  { month: "Aug", cac: 135, ltv: 395, ratio: 2.93, payback: 4.8, mrr: 52000, customers: 142 },
  { month: "Sep", cac: 142, ltv: 410, ratio: 2.89, payback: 5.1, mrr: 61000, customers: 168 },
  { month: "Oct", cac: 158, ltv: 425, ratio: 2.69, payback: 5.6, mrr: 72000, customers: 195 },
  { month: "Nov", cac: 175, ltv: 430, ratio: 2.46, payback: 6.2, mrr: 85000, customers: 228 },
  { month: "Dec", cac: 195, ltv: 445, ratio: 2.28, payback: 6.8, mrr: 98000, customers: 267 },
];

const cohortData = [
  { cohort: "Q1 2024", month0: 100, month1: 85, month2: 78, month3: 72, month4: 68, month5: 65, ltv: 420 },
  { cohort: "Q2 2024", month0: 100, month1: 82, month2: 74, month3: 68, month4: 63, month5: 60, ltv: 385 },
  { cohort: "Q3 2024", month0: 100, month1: 80, month2: 71, month3: 64, month4: 59, month5: null, ltv: 350 },
  { cohort: "Q4 2024", month0: 100, month1: 78, month2: 69, month3: null, month4: null, month5: null, ltv: 310 },
];

const channelBreakdown = [
  { channel: "Google Ads", cac: 145, ltv: 420, ratio: 2.90, spend: 28500, customers: 196, payback: 5.2 },
  { channel: "LinkedIn Ads", cac: 225, ltv: 580, ratio: 2.58, spend: 18000, customers: 80, payback: 6.8 },
  { channel: "Meta Ads", cac: 95, ltv: 310, ratio: 3.26, spend: 12350, customers: 130, payback: 4.1 },
  { channel: "Organic", cac: 35, ltv: 450, ratio: 12.86, spend: 4200, customers: 120, payback: 1.4 },
  { channel: "Referrals", cac: 50, ltv: 520, ratio: 10.40, spend: 3500, customers: 70, payback: 1.8 },
];

const alerts = [
  { id: 1, type: "warning", message: "LinkedIn Ads payback period exceeded 6 months", time: "2 hours ago", channel: "LinkedIn Ads" },
  { id: 2, type: "critical", message: "Overall CAC increased 12% month-over-month", time: "1 day ago", channel: "All Channels" },
  { id: 3, type: "info", message: "Organic channel LTV/CAC ratio improved to 12.86x", time: "2 days ago", channel: "Organic" },
  { id: 4, type: "warning", message: "Q4 cohort showing faster decay than Q3", time: "3 days ago", channel: "All Channels" },
];

const burnProjection = [
  { month: "Jan", runway: 18, burn: 125000, revenue: 98000 },
  { month: "Feb", runway: 16.5, burn: 135000, revenue: 108000 },
  { month: "Mar", runway: 15, burn: 145000, revenue: 118000 },
  { month: "Apr", runway: 13.2, burn: 158000, revenue: 130000 },
  { month: "May", runway: 11.8, burn: 168000, revenue: 142000 },
  { month: "Jun", runway: 10.5, burn: 175000, revenue: 155000 },
];

const UnitEconomicsDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("6m");
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [paybackThreshold, setPaybackThreshold] = useState("6");

  const currentMetrics = monthlyMetrics[monthlyMetrics.length - 1];
  const previousMetrics = monthlyMetrics[monthlyMetrics.length - 2];

  const getHealthStatus = (ratio: number) => {
    if (ratio >= 3) return { status: "Healthy", color: "text-green-400", bg: "bg-green-500/20" };
    if (ratio >= 2) return { status: "Watch", color: "text-yellow-400", bg: "bg-yellow-500/20" };
    return { status: "Critical", color: "text-red-400", bg: "bg-red-500/20" };
  };

  const getPaybackStatus = (months: number) => {
    if (months <= 6) return { status: "Safe", color: "text-green-400" };
    if (months <= 9) return { status: "Warning", color: "text-yellow-400" };
    return { status: "Danger", color: "text-red-400" };
  };

  const health = getHealthStatus(currentMetrics.ratio);
  const paybackHealth = getPaybackStatus(currentMetrics.payback);

  const handleExport = () => {
    const report = `
UNIT ECONOMICS HEALTH REPORT
Generated: ${new Date().toLocaleDateString()}

═══════════════════════════════════════

KEY METRICS (Current Month)
───────────────────────────────────────
CAC: $${currentMetrics.cac}
LTV: $${currentMetrics.ltv}
LTV/CAC Ratio: ${currentMetrics.ratio.toFixed(2)}x
Payback Period: ${currentMetrics.payback} months
MRR: $${currentMetrics.mrr.toLocaleString()}
Active Customers: ${currentMetrics.customers}

HEALTH STATUS: ${health.status.toUpperCase()}

═══════════════════════════════════════

CHANNEL PERFORMANCE
───────────────────────────────────────
${channelBreakdown.map(c => `${c.channel}: ${c.ratio.toFixed(2)}x LTV/CAC, ${c.payback}mo payback`).join('\n')}

═══════════════════════════════════════

RECENT ALERTS
───────────────────────────────────────
${alerts.map(a => `[${a.type.toUpperCase()}] ${a.message}`).join('\n')}

═══════════════════════════════════════

RECOMMENDATIONS
───────────────────────────────────────
1. Review LinkedIn Ads targeting - payback exceeds threshold
2. Scale Organic and Referral channels - highest efficiency
3. Monitor Q4 cohort retention closely
4. Consider reducing Meta Ads spend - lower LTV despite good CAC
    `;
    
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `unit-economics-report-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Report exported successfully");
  };

  const simulateAlert = () => {
    toast.warning("⚠️ Alert: Payback period for LinkedIn Ads has exceeded 6 months threshold", {
      description: "Current payback: 6.8 months | Threshold: 6.0 months",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back to Portfolio</span>
              </Link>
              <div className="h-6 w-px bg-border hidden sm:block" />
              <h1 className="text-lg font-semibold">Unit Economics Health Monitor</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Label htmlFor="alerts" className="text-sm text-muted-foreground hidden sm:inline">Slack Alerts</Label>
                <Switch id="alerts" checked={alertsEnabled} onCheckedChange={setAlertsEnabled} />
              </div>
              <Button variant="outline" size="sm" onClick={simulateAlert}>
                <Bell size={16} className="mr-2" />
                Test Alert
              </Button>
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download size={16} className="mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Health Status Banner */}
        <div className={`${health.bg} border border-border/40 rounded-lg p-4 mb-8`}>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              {health.status === "Healthy" ? (
                <TrendingUp className={health.color} size={24} />
              ) : health.status === "Watch" ? (
                <AlertTriangle className={health.color} size={24} />
              ) : (
                <TrendingDown className={health.color} size={24} />
              )}
              <div>
                <p className={`font-semibold ${health.color}`}>Unit Economics Status: {health.status}</p>
                <p className="text-sm text-muted-foreground">
                  LTV/CAC Ratio: {currentMetrics.ratio.toFixed(2)}x | Payback: {currentMetrics.payback} months
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <RefreshCw size={14} />
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card border-border/40">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="text-primary" size={20} />
                <Badge variant={currentMetrics.cac > previousMetrics.cac ? "destructive" : "default"} className="text-xs">
                  {currentMetrics.cac > previousMetrics.cac ? "+" : ""}{((currentMetrics.cac - previousMetrics.cac) / previousMetrics.cac * 100).toFixed(1)}%
                </Badge>
              </div>
              <p className="text-2xl font-bold">${currentMetrics.cac}</p>
              <p className="text-sm text-muted-foreground">Customer Acquisition Cost</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/40">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Users className="text-primary" size={20} />
                <Badge variant="default" className="text-xs">
                  +{((currentMetrics.ltv - previousMetrics.ltv) / previousMetrics.ltv * 100).toFixed(1)}%
                </Badge>
              </div>
              <p className="text-2xl font-bold">${currentMetrics.ltv}</p>
              <p className="text-sm text-muted-foreground">Lifetime Value</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/40">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Zap className={health.color} size={20} />
                <Badge variant={currentMetrics.ratio < 3 ? "secondary" : "default"} className="text-xs">
                  {currentMetrics.ratio >= 3 ? "Target Met" : "Below Target"}
                </Badge>
              </div>
              <p className="text-2xl font-bold">{currentMetrics.ratio.toFixed(2)}x</p>
              <p className="text-sm text-muted-foreground">LTV/CAC Ratio</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/40">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Clock className={paybackHealth.color} size={20} />
                <Badge variant={currentMetrics.payback > 6 ? "destructive" : "default"} className="text-xs">
                  {currentMetrics.payback <= 6 ? "Safe" : "Exceeds 6mo"}
                </Badge>
              </div>
              <p className="text-2xl font-bold">{currentMetrics.payback}mo</p>
              <p className="text-sm text-muted-foreground">Payback Period</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="trends" className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <TabsList className="bg-card/50">
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="cohorts">Cohort Analysis</TabsTrigger>
              <TabsTrigger value="channels">Channel Breakdown</TabsTrigger>
              <TabsTrigger value="runway">Runway Impact</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
            </TabsList>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3m">3 Months</SelectItem>
                <SelectItem value="6m">6 Months</SelectItem>
                <SelectItem value="12m">12 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Trends Tab */}
          <TabsContent value="trends" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">CAC vs LTV Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyMetrics}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="cac" name="CAC ($)" stroke="hsl(var(--destructive))" strokeWidth={2} dot={{ fill: "hsl(var(--destructive))" }} />
                        <Line type="monotone" dataKey="ltv" name="LTV ($)" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))" }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">LTV/CAC Ratio & Payback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyMetrics}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                        />
                        <Legend />
                        <ReferenceLine yAxisId="left" y={3} stroke="hsl(var(--primary))" strokeDasharray="5 5" label={{ value: "Target 3x", fill: "hsl(var(--primary))", fontSize: 10 }} />
                        <ReferenceLine yAxisId="right" y={6} stroke="hsl(var(--destructive))" strokeDasharray="5 5" label={{ value: "6mo Threshold", fill: "hsl(var(--destructive))", fontSize: 10 }} />
                        <Line yAxisId="left" type="monotone" dataKey="ratio" name="LTV/CAC Ratio" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))" }} />
                        <Line yAxisId="right" type="monotone" dataKey="payback" name="Payback (months)" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={{ fill: "hsl(var(--chart-3))" }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border/40">
              <CardHeader>
                <CardTitle className="text-lg">MRR & Customer Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyMetrics}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                        formatter={(value: number, name: string) => [
                          name === "MRR ($)" ? `$${value.toLocaleString()}` : value,
                          name
                        ]}
                      />
                      <Legend />
                      <Area yAxisId="left" type="monotone" dataKey="mrr" name="MRR ($)" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth={2} />
                      <Line yAxisId="right" type="monotone" dataKey="customers" name="Customers" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ fill: "hsl(var(--chart-2))" }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cohorts Tab */}
          <TabsContent value="cohorts" className="space-y-6">
            <Card className="bg-card border-border/40">
              <CardHeader>
                <CardTitle className="text-lg">Cohort Retention Curves</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} type="category" allowDuplicatedCategory={false} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 100]} unit="%" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      {cohortData.map((cohort, idx) => {
                        const data = [
                          { month: "M0", value: cohort.month0 },
                          { month: "M1", value: cohort.month1 },
                          { month: "M2", value: cohort.month2 },
                          { month: "M3", value: cohort.month3 },
                          { month: "M4", value: cohort.month4 },
                          { month: "M5", value: cohort.month5 },
                        ].filter(d => d.value !== null);
                        const colors = ["hsl(var(--primary))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"];
                        return (
                          <Line
                            key={cohort.cohort}
                            data={data}
                            dataKey="value"
                            name={cohort.cohort}
                            stroke={colors[idx]}
                            strokeWidth={2}
                            dot={{ fill: colors[idx] }}
                            connectNulls
                          />
                        );
                      })}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/40">
              <CardHeader>
                <CardTitle className="text-lg">Cohort LTV Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={cohortData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis dataKey="cohort" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={80} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                        formatter={(value: number) => [`$${value}`, "LTV"]}
                      />
                      <Bar dataKey="ltv" name="LTV ($)" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]}>
                        {cohortData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.ltv < 400 ? "hsl(var(--chart-3))" : "hsl(var(--primary))"} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  ⚠️ Note: Q4 2024 cohort showing 26% lower projected LTV than Q1 — investigate acquisition channel mix
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Channels Tab */}
          <TabsContent value="channels" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">LTV/CAC Ratio by Channel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={channelBreakdown}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="channel" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-20} textAnchor="end" height={60} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                        />
                        <ReferenceLine y={3} stroke="hsl(var(--primary))" strokeDasharray="5 5" />
                        <Bar dataKey="ratio" name="LTV/CAC Ratio" radius={[4, 4, 0, 0]}>
                          {channelBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.ratio >= 3 ? "hsl(var(--primary))" : entry.ratio >= 2 ? "hsl(var(--chart-3))" : "hsl(var(--destructive))"} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">Payback Period by Channel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={channelBreakdown}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="channel" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-20} textAnchor="end" height={60} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                        />
                        <ReferenceLine y={6} stroke="hsl(var(--destructive))" strokeDasharray="5 5" label={{ value: "Threshold", fill: "hsl(var(--destructive))", fontSize: 10 }} />
                        <Bar dataKey="payback" name="Payback (months)" radius={[4, 4, 0, 0]}>
                          {channelBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.payback <= 6 ? "hsl(var(--primary))" : "hsl(var(--destructive))"} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border/40">
              <CardHeader>
                <CardTitle className="text-lg">Channel Performance Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/40">
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Channel</th>
                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">CAC</th>
                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">LTV</th>
                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">Ratio</th>
                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">Payback</th>
                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">Spend</th>
                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">Customers</th>
                        <th className="text-center py-3 px-4 font-medium text-muted-foreground">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {channelBreakdown.map((channel) => (
                        <tr key={channel.channel} className="border-b border-border/20 hover:bg-muted/20">
                          <td className="py-3 px-4 font-medium">{channel.channel}</td>
                          <td className="text-right py-3 px-4">${channel.cac}</td>
                          <td className="text-right py-3 px-4">${channel.ltv}</td>
                          <td className={`text-right py-3 px-4 font-medium ${channel.ratio >= 3 ? "text-green-400" : channel.ratio >= 2 ? "text-yellow-400" : "text-red-400"}`}>
                            {channel.ratio.toFixed(2)}x
                          </td>
                          <td className={`text-right py-3 px-4 ${channel.payback <= 6 ? "text-green-400" : "text-red-400"}`}>
                            {channel.payback}mo
                          </td>
                          <td className="text-right py-3 px-4">${channel.spend.toLocaleString()}</td>
                          <td className="text-right py-3 px-4">{channel.customers}</td>
                          <td className="text-center py-3 px-4">
                            <Badge variant={channel.ratio >= 3 && channel.payback <= 6 ? "default" : channel.ratio >= 2 ? "secondary" : "destructive"}>
                              {channel.ratio >= 3 && channel.payback <= 6 ? "Scale" : channel.ratio >= 2 ? "Optimize" : "Review"}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Runway Tab */}
          <TabsContent value="runway" className="space-y-6">
            <Card className="bg-card border-border/40">
              <CardHeader>
                <CardTitle className="text-lg">Runway Impact Projection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={burnProjection}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                        formatter={(value: number, name: string) => [
                          name === "Runway (months)" ? `${value} months` : `$${value.toLocaleString()}`,
                          name
                        ]}
                      />
                      <Legend />
                      <Area yAxisId="right" type="monotone" dataKey="burn" name="Burn ($)" fill="hsl(var(--destructive) / 0.2)" stroke="hsl(var(--destructive))" strokeWidth={2} />
                      <Area yAxisId="right" type="monotone" dataKey="revenue" name="Revenue ($)" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" strokeWidth={2} />
                      <Line yAxisId="left" type="monotone" dataKey="runway" name="Runway (months)" stroke="hsl(var(--chart-2))" strokeWidth={3} dot={{ fill: "hsl(var(--chart-2))", r: 5 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-card border-border/40">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Current Runway</p>
                  <p className="text-3xl font-bold text-yellow-400">10.5 months</p>
                  <p className="text-sm text-muted-foreground mt-2">Based on current burn rate</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/40">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Net Burn</p>
                  <p className="text-3xl font-bold text-destructive">-$20K</p>
                  <p className="text-sm text-muted-foreground mt-2">Revenue - Expenses</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/40">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Path to Profitability</p>
                  <p className="text-3xl font-bold text-primary">8 months</p>
                  <p className="text-sm text-muted-foreground mt-2">At current growth rate</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <Card className="bg-card border-border/40">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Alert Configuration</CardTitle>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="threshold" className="text-sm">Payback Threshold:</Label>
                    <Select value={paybackThreshold} onValueChange={setPaybackThreshold}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 months</SelectItem>
                        <SelectItem value="6">6 months</SelectItem>
                        <SelectItem value="9">9 months</SelectItem>
                        <SelectItem value="12">12 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`flex items-start gap-4 p-4 rounded-lg border ${
                        alert.type === "critical" ? "border-red-500/40 bg-red-500/10" :
                        alert.type === "warning" ? "border-yellow-500/40 bg-yellow-500/10" :
                        "border-blue-500/40 bg-blue-500/10"
                      }`}
                    >
                      <div className={`p-2 rounded-full ${
                        alert.type === "critical" ? "bg-red-500/20" :
                        alert.type === "warning" ? "bg-yellow-500/20" :
                        "bg-blue-500/20"
                      }`}>
                        {alert.type === "critical" ? (
                          <TrendingDown className="text-red-400" size={16} />
                        ) : alert.type === "warning" ? (
                          <AlertTriangle className="text-yellow-400" size={16} />
                        ) : (
                          <TrendingUp className="text-blue-400" size={16} />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{alert.message}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-muted-foreground">{alert.time}</span>
                          <Badge variant="outline" className="text-xs">{alert.channel}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/40">
              <CardHeader>
                <CardTitle className="text-lg">Slack Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#4A154B] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">#</span>
                    </div>
                    <div>
                      <p className="font-medium">#growth-alerts</p>
                      <p className="text-sm text-muted-foreground">Connected · Receiving alerts</p>
                    </div>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Alerts are sent automatically when payback period exceeds {paybackThreshold} months or LTV/CAC ratio drops below 2.0x
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default UnitEconomicsDashboard;
