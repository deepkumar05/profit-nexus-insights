
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Reports = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Reports & Exports</h1>
        <p className="text-muted-foreground">Generate detailed reports and export data</p>
      </div>
      
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>Reporting and export functionality will be available soon</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This section will include:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
            <li>Earnings per resource and project reports</li>
            <li>Profitability tables with red-flag conditions</li>
            <li>CSV and Excel export options</li>
            <li>Custom report generation tools</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
