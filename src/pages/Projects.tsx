
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, FolderOpen, Calendar, Users, DollarSign } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Project Alpha",
      client: "TechCorp Inc.",
      status: "Active",
      startDate: "2024-01-15",
      endDate: "2024-06-30",
      submittedRate: 1000,
      basicRate: 820,
      cirProfit: 170,
      acrProfit: 40,
      resources: 3,
    },
    {
      id: 2,
      name: "Project Beta",
      client: "FinanceFlow Ltd.",
      status: "Active",
      startDate: "2024-02-01",
      endDate: "2024-08-15",
      submittedRate: 850,
      basicRate: 695,
      cirProfit: 95,
      acrProfit: -25,
      resources: 2,
    },
    {
      id: 3,
      name: "Project Gamma",
      client: "DataDriven Co.",
      status: "Completed",
      startDate: "2023-10-01",
      endDate: "2024-03-31",
      submittedRate: 1200,
      basicRate: 980,
      cirProfit: 230,
      acrProfit: 80,
      resources: 4,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-finance-profit/10 text-finance-profit";
      case "Completed":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted/20 text-muted-foreground";
    }
  };

  const getProfitColor = (profit: number) => {
    return profit >= 0 ? "text-finance-profit" : "text-finance-loss";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">Manage your resource supply projects and track profitability</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-200">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FolderOpen className="w-5 h-5" />
                    {project.name}
                  </CardTitle>
                  <CardDescription>{project.client}</CardDescription>
                </div>
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Project Details */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Project Details</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-3 h-3" />
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-3 h-3" />
                      <span>{project.resources} resources</span>
                    </div>
                  </div>
                </div>

                {/* Rate Information */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Rates</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Submitted:</span>
                      <span className="font-mono">${project.submittedRate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Basic:</span>
                      <span className="font-mono text-primary">${project.basicRate}</span>
                    </div>
                  </div>
                </div>

                {/* Profit Analysis */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Profit Analysis</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>CIR Profit:</span>
                      <span className={`font-mono ${getProfitColor(project.cirProfit)}`}>
                        ${project.cirProfit}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>ACR Profit:</span>
                      <span className={`font-mono ${getProfitColor(project.acrProfit)}`}>
                        ${project.acrProfit}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Actions</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Edit Project
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
