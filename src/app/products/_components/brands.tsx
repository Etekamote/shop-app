import { Checkbox } from "@/components/ui/checkbox";
import Heading from "./heading";

export default function Brands() {
  const brands = [
    {
      id: 1,
      name: "Apple",
    },
    {
      id: 1,
      name: "Apple",
    },
    {
      id: 1,
      name: "Apple",
    },
    {
      id: 1,
      name: "Apple",
    },
  ];

  return (
    <div className="space-y-2">
      <Heading>Brands</Heading>
      <ul className="space-y-1">
        {brands.map((brand) => (
          <li key={brand.id}>
            <label className="flex items-center gap-x-1 ">
              <Checkbox id={brand.name} />
              <span>{brand.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
