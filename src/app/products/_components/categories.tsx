import Link from "next/link";
import Heading from "./heading";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Laptops",
      qty: 10,
      path: "/",
    },
    {
      id: 1,
      name: "Laptops",
      qty: 10,
      path: "/",
    },
    {
      id: 1,
      name: "Laptops",
      qty: 10,
      path: "/",
    },
    {
      id: 1,
      name: "Laptops",
      qty: 10,
      path: "/",
    },
    {
      id: 1,
      name: "Laptops",
      qty: 10,
      path: "/",
    },
  ];

  return (
    <div className="space-y-2">
      <Heading>Categories</Heading>
      <ul className="space-y-1">
        {categories.map((category) => (
          <li key={category.id} className="text-gray-500">
            <Link href={category.path}>
              {category.name}
              <span className="ml-1 text-gray-400">{`(${category.qty})`}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
