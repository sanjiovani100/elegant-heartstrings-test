import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
    <aside className="w-full md:w-1/4 space-y-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
      <div className="space-y-4">
        <h3 className="text-lg font-montserrat text-white">Filters</h3>
        
        {/* Category Filter */}
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

        {/* Date Filter */}
        <div className="space-y-2">
          <Label className="text-sm text-gray-400">Date</Label>
          <Calendar
            mode="single"
            selected={dateRange}
            onSelect={setDateRange}
            className="rounded-md border border-white/20 bg-white/10"
          />
        </div>

        {/* Price Range */}
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

        {/* Location Filter */}
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

        {/* Status Filter */}
        <div className="space-y-2">
          <Label className="text-sm text-gray-400">Status</Label>
          <RadioGroup value={status} onValueChange={setStatus}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upcoming" id="upcoming" />
              <Label htmlFor="upcoming">Upcoming</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ongoing" id="ongoing" />
              <Label htmlFor="ongoing">Ongoing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="past" id="past" />
              <Label htmlFor="past">Past</Label>
            </div>
          </RadioGroup>
        </div>

        <Button 
          variant="outline" 
          className="w-full border-white/20 text-white hover:bg-white/10"
          onClick={handleClearFilters}
        >
          Clear Filters
        </Button>
      </div>
    </aside>
  );
};

export default EventsFilters;