import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DesignerForm = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-black/50 border border-fashionista-grey/20 p-8">
          <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-8">
            Apply as a Designer
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Designer Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  className="bg-black/30"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="brand" className="block text-sm font-medium">
                  Brand Name
                </label>
                <Input
                  id="brand"
                  placeholder="Enter your brand name"
                  className="bg-black/30"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-black/30"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="collection" className="block text-sm font-medium">
                Collection Description
              </label>
              <Textarea
                id="collection"
                placeholder="Tell us about your collection"
                className="bg-black/30 min-h-[120px]"
              />
            </div>
            <Button className="w-full" size="lg">
              Submit Application
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default DesignerForm;