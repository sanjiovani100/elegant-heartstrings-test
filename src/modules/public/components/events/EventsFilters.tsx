import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EventCategory } from "@/types/supabase/enums";

interface EventsFiltersProps {
  onFiltersChange: (filters: any) => void;
}

const EventsFilters = ({ onFiltersChange }: EventsFiltersProps) => {
  const [dateRange, setDateRange] = useState<Date | undefined>();
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [category, setCategory] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("upcoming");

  const handleClearFilters = () => {
    setDateRange(undefined);
    setPriceRange([0, 1000]);
    setCategory([]);
    setLocation("");
    setStatus("upcoming");
  };

  return (
    <div className="space-y-6 bg-white/5 border border-white/10 rounded-lg p-6">
      <div>
        <h3 className="text-lg font-montserrat text-white mb-4">Filters</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm text-gray-400">Category</Label>
            <Select>
              <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(EventCategory).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-gray-400">Date</Label>
            <Calendar
              mode="single"
              selected={dateRange}
              onSelect={setDateRange}
              className="rounded-md border border-white/20 bg-white/10"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-gray-400">Price Range</Label>
            <Slider
              defaultValue={[0, 1000]}
              max={1000}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="my-4"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-gray-400">Location</Label>
            <Input
              type="text"
              placeholder="Search location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
        </div>
      </div>

      <Button 
        variant="outline" 
        className="w-full border-white/20 text-white hover:bg-white/10"
        onClick={handleClearFilters}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default EventsFilters;