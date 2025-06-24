
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CompanyEarnings = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Company Earnings</h1>
        <p className="text-muted-foreground">Comprehensive earnings breakdown and analysis</p>
      </div>
      
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>Company earnings analysis functionality will be available soon</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This section will provide:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
            <li>Earnings breakdown by project and cost component</li>
            <li>Totals for referral bonuses and recurring shares</li>
            <li>Timeline and project-based filters</li>
            <li>Profitability trend analysis</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyEarnings;
