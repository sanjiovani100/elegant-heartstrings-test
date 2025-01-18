import { Card } from "@/components/ui/card";
import { SponsorshipForm } from "@/components/sponsors/form/SponsorshipForm";

const SponsorshipApplicationPage = () => {
  return (
    <div className="container mx-auto p-6">
      <Card className="p-6 bg-black/50 border-white/10">
        <h1 className="text-3xl font-bold mb-6 text-white">Sponsorship Application</h1>
        <SponsorshipForm />
      </Card>
    </div>
  );
};

export default SponsorshipApplicationPage;