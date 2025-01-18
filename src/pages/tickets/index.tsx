import { Card } from "@/components/ui/card";

const TicketsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Tickets</h1>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold">Available Tickets</h2>
        </Card>
      </div>
    </div>
  );
};

export default TicketsPage;