import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  UserPlus, 
  Clock, 
  CheckCircle2, 
  Circle, 
  Loader2,
  Monitor,
  MessageSquare,
  Mail,
  FileText,
  Calendar,
  TrendingDown,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

interface OnboardingTask {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  manualTime: number; // in minutes
  automatedTime: number; // in seconds
  status: "pending" | "in_progress" | "completed";
}

interface NewHire {
  id: string;
  name: string;
  email: string;
  role: string;
  startDate: string;
  addedAt: Date;
  tasks: OnboardingTask[];
}

const defaultTasks: Omit<OnboardingTask, "status">[] = [
  { id: "it_setup", name: "IT Equipment Request", icon: Monitor, manualTime: 15, automatedTime: 2 },
  { id: "slack_invite", name: "Slack Workspace Invite", icon: MessageSquare, manualTime: 5, automatedTime: 1 },
  { id: "welcome_email", name: "Welcome Email", icon: Mail, manualTime: 10, automatedTime: 1 },
  { id: "docs_access", name: "Document Access", icon: FileText, manualTime: 20, automatedTime: 3 },
  { id: "calendar_setup", name: "Calendar Invites", icon: Calendar, manualTime: 10, automatedTime: 2 },
];

const OnboardingDashboard = () => {
  const { toast } = useToast();
  const [newHires, setNewHires] = useState<NewHire[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    startDate: ""
  });

  // Calculate metrics
  const totalManualTime = defaultTasks.reduce((acc, t) => acc + t.manualTime, 0);
  const totalAutomatedTime = defaultTasks.reduce((acc, t) => acc + t.automatedTime, 0) / 60; // convert to minutes
  const timeSavedPercentage = Math.round((1 - totalAutomatedTime / totalManualTime) * 100);
  const totalHiresProcessed = newHires.filter(h => h.tasks.every(t => t.status === "completed")).length;
  const totalTimeSaved = totalHiresProcessed * (totalManualTime - totalAutomatedTime);

  const handleAddHire = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in name and email",
        variant: "destructive"
      });
      return;
    }

    const newHire: NewHire = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      role: formData.role || "Team Member",
      startDate: formData.startDate || new Date().toISOString().split("T")[0],
      addedAt: new Date(),
      tasks: defaultTasks.map(t => ({ ...t, status: "pending" as const }))
    };

    setNewHires(prev => [newHire, ...prev]);
    setFormData({ name: "", email: "", role: "", startDate: "" });
    setIsAdding(false);

    toast({
      title: "New Hire Added",
      description: `Starting automated onboarding for ${formData.name}...`
    });

    // Simulate automated task execution
    runAutomatedTasks(newHire.id);
  };

  const runAutomatedTasks = async (hireId: string) => {
    for (let i = 0; i < defaultTasks.length; i++) {
      const task = defaultTasks[i];
      
      // Set task to in_progress
      setNewHires(prev => prev.map(h => {
        if (h.id === hireId) {
          return {
            ...h,
            tasks: h.tasks.map((t, idx) => 
              idx === i ? { ...t, status: "in_progress" as const } : t
            )
          };
        }
        return h;
      }));

      // Wait for the "automated time"
      await new Promise(resolve => setTimeout(resolve, task.automatedTime * 1000));

      // Set task to completed
      setNewHires(prev => prev.map(h => {
        if (h.id === hireId) {
          return {
            ...h,
            tasks: h.tasks.map((t, idx) => 
              idx === i ? { ...t, status: "completed" as const } : t
            )
          };
        }
        return h;
      }));
    }

    toast({
      title: "Onboarding Complete",
      description: "All automated tasks finished successfully!"
    });
  };

  const getStatusIcon = (status: OnboardingTask["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "in_progress":
        return <Loader2 className="w-5 h-5 text-primary animate-spin" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />;
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
              <h1 className="text-xl font-bold text-foreground">Internal Ops Dashboard</h1>
              <p className="text-sm text-muted-foreground">Automated New Hire Onboarding</p>
            </div>
          </div>
          <Button onClick={() => setIsAdding(true)} className="gap-2">
            <UserPlus className="w-4 h-4" />
            Add New Hire
          </Button>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-8">
        {/* Hero Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Manual Admin Reduction</p>
                <p className="text-4xl font-bold text-primary">{timeSavedPercentage}%</p>
                <p className="text-sm text-muted-foreground mt-1">time saved per hire</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/10">
                <TrendingDown className="w-6 h-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Manual Process</p>
                <p className="text-4xl font-bold text-foreground">{totalManualTime}</p>
                <p className="text-sm text-muted-foreground mt-1">minutes per hire</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary">
                <Clock className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Automated Process</p>
                <p className="text-4xl font-bold text-foreground">{Math.round(totalAutomatedTime * 60)}</p>
                <p className="text-sm text-muted-foreground mt-1">seconds per hire</p>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </Card>
        </div>

        {/* Add New Hire Form */}
        {isAdding && (
          <Card className="p-6 mb-8 border-primary/20">
            <h2 className="text-lg font-semibold mb-4">Add New Hire</h2>
            <form onSubmit={handleAddHire} className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="John Smith"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="john@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={e => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  placeholder="Software Engineer"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={e => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                />
              </div>
              <div className="md:col-span-2 flex gap-3 justify-end">
                <Button type="button" variant="outline" onClick={() => setIsAdding(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  Add & Start Onboarding
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Task Breakdown */}
        <Card className="p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Automated Task Breakdown</h2>
          <div className="space-y-3">
            {defaultTasks.map(task => (
              <div key={task.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <task.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{task.name}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground line-through">{task.manualTime} min manual</span>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-600">
                    {task.automatedTime}s automated
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* New Hires List */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Recent Onboarding ({newHires.length})</h2>
          
          {newHires.length === 0 ? (
            <Card className="p-12 text-center">
              <UserPlus className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No new hires yet</h3>
              <p className="text-muted-foreground mb-4">
                Add a new hire to see the automated onboarding in action
              </p>
              <Button onClick={() => setIsAdding(true)}>Add Your First Hire</Button>
            </Card>
          ) : (
            <div className="space-y-4">
              {newHires.map(hire => {
                const completedTasks = hire.tasks.filter(t => t.status === "completed").length;
                const progress = Math.round((completedTasks / hire.tasks.length) * 100);
                
                return (
                  <Card key={hire.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{hire.name}</h3>
                        <p className="text-sm text-muted-foreground">{hire.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{hire.role}</Badge>
                          <span className="text-xs text-muted-foreground">
                            Starts: {hire.startDate}
                          </span>
                        </div>
                      </div>
                      <Badge 
                        variant={progress === 100 ? "default" : "secondary"}
                        className={progress === 100 ? "bg-green-500" : ""}
                      >
                        {progress === 100 ? "Complete" : `${progress}%`}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                      {hire.tasks.map(task => (
                        <div 
                          key={task.id} 
                          className="flex flex-col items-center gap-1 p-2 rounded-lg bg-secondary/30"
                        >
                          {getStatusIcon(task.status)}
                          <span className="text-xs text-center text-muted-foreground">
                            {task.name.split(" ")[0]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* Integration Note */}
        <Card className="mt-8 p-6 border-dashed">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-secondary">
              <FileText className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Google Sheets Integration</h3>
              <p className="text-sm text-muted-foreground">
                In production, this dashboard connects via webhook to Google Sheets. 
                When a new row is added to your hiring spreadsheet, the onboarding automation triggers automatically.
                Connect via Zapier or Google Apps Script for seamless integration.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default OnboardingDashboard;
