
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, DollarSign, Users, FolderOpen, Calculator } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const Dashboard = () => {
  // Mock data for charts
  const profitData = [
    { month: "Jan", cir: 45000, acr: 52000, basic: 38000 },
    { month: "Feb", cir: 52000, acr: 61000, basic: 44000 },
    { month: "Mar", cir: 48000, acr: 56000, basic: 41000 },
    { month: "Apr", cir: 61000, acr: 71000, basic: 53000 },
    { month: "May", cir: 55000, acr: 64000, basic: 47000 },
    { month: "Jun", cir: 67000, acr: 78000, basic: 58000 },
  ];

  const projectData = [
    { name: "Project Alpha", profit: 15000, margin: 22 },
    { name: "Project Beta", profit: 8500, margin: 18 },
    { name: "Project Gamma", profit: 12000, margin: 25 },
    { name: "Project Delta", profit: -2000, margin: -5 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Real-time financial overview and project metrics</p>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card/50 backdrop-blur-sm border-finance-profit/20 profit-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gross Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-finance-profit" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-finance-profit">$234,500</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Badge variant="secondary" className="bg-finance-profit/10 text-finance-profit">
                +12.5%
              </Badge>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$187,200</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                +8.2%
              </Badge>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Margin</CardTitle>
            <Calculator className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.7%</div>
            <Progress value={18.7} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Target: 20%</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-finance-loss/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <FolderOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span className="text-finance-loss">2 underperforming</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profit Trend Chart */}
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Profit Trends</CardTitle>
            <CardDescription>CIR vs ACR vs Basic Rate profits over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={profitData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px"
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="cir" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: "#10b981", strokeWidth: 2 }}
                  name="CIR Profit"
                />
                <Line 
                  type="monotone" 
                  dataKey="acr" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", strokeWidth: 2 }}
                  name="ACR Profit"
                />
                <Line 
                  type="monotone" 
                  dataKey="basic" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  dot={{ fill: "#f59e0b", strokeWidth: 2 }}
                  name="Basic Rate"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Project Performance */}
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Project Performance</CardTitle>
            <CardDescription>Profit and margin by project</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px"
                  }} 
                />
                <Bar 
                  dataKey="profit" 
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-finance-profit rounded-full"></div>
              <div className="text-sm">
                <p className="font-medium">Project Alpha completed</p>
                <p className="text-muted-foreground text-xs">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="text-sm">
                <p className="font-medium">New resource assigned</p>
                <p className="text-muted-foreground text-xs">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-finance-loss rounded-full"></div>
              <div className="text-sm">
                <p className="font-medium">Cost override applied</p>
                <p className="text-muted-foreground text-xs">1 day ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-finance-loss/20">
          <CardHeader>
            <CardTitle className="text-sm text-finance-loss">Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-finance-loss/10 border border-finance-loss/20 rounded-lg">
              <p className="text-sm font-medium text-finance-loss">Project Delta</p>
              <p className="text-xs text-muted-foreground">Basic rate below CIR threshold</p>
            </div>
            <div className="p-3 bg-finance-warning/10 border border-finance-warning/20 rounded-lg">
              <p className="text-sm font-medium text-finance-warning">Resource Utilization</p>
              <p className="text-xs text-muted-foreground">3 resources underutilized</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm">Formula Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs">
            <div className="p-2 bg-muted/20 rounded">
              <p className="font-mono">CIR Profit = Basic Rate - CIR Rate</p>
            </div>
            <div className="p-2 bg-muted/20 rounded">
              <p className="font-mono">ACR Profit = Basic Rate - (CIR Rate + 20%)</p>
            </div>
            <div className="p-2 bg-muted/20 rounded">
              <p className="font-mono">Basic Rate = Submitted Rate - (Static Costs + Tolerance)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
