import { Card } from "@/components/ui/card";

const SponsorsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Sponsors</h1>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold">Our Sponsors</h2>
        </Card>
      </div>
    </div>
  );
};

export default SponsorsPage;