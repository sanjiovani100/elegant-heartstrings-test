import { DashboardLayout } from "@/components/dashboard/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SponsorshipApplicationPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Sponsorship Application</h1>

        <Card>
          <CardHeader>
            <CardTitle>Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Application form coming soon. Please check back later.
            </p>
            <Button variant="outline">Back to Sponsors</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SponsorshipApplicationPage;