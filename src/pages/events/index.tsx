import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EventsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <Button>View All</Button>
        </Card>
      </div>
    </div>
  );
};

export default EventsPage;