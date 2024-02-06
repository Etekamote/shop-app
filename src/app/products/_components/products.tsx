import ProductCard from "./product-card";

export default function Products() {
  return (
    <section className="w-full flex flex-col gap-y-6 lg:w-[80%] lg:px-4 lg:flex-row lg:flex-wrap lg:justify-between">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
}
