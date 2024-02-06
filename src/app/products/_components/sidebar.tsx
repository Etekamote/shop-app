import Categories from "./categories";
import Brands from "./brands";
import PriceRange from "./price-range";

export default function Sidebar() {
  return (
    <aside className="w-full space-y-6  lg:border-r lg:pr-4">
      <Categories />
      <Brands />
      <PriceRange />
    </aside>
  );
}
