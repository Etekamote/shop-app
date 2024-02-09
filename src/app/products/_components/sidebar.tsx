import Categories from "./categories";
import Brands from "./brands";
import PriceRange from "./price-range";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <aside className="w-full space-y-6  lg:border-r lg:pr-4">
      <Categories />
      <Brands />
      <PriceRange />
      <Button variant="blue" className="w-full">
        Apply filters
      </Button>
    </aside>
  );
}
