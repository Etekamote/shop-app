import { getProducts } from "@/lib/utils";
import ProductCard from "./product-card";

export default async function Products() {
  const products = await getProducts();
  console.log(products.length);
  return (
    <section className="w-full flex flex-col gap-y-6 lg:w-[80%] lg:px-4 lg:flex-row lg:flex-wrap lg:justify-between">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
