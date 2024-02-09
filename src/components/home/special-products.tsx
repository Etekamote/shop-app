import SpecialProduct from "./special-product";

export default function SpecialProducts() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b pb-2">Best of Laptops</h2>
      <div className="flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:gap-y-0">
        <SpecialProduct />
        <SpecialProduct />
        <SpecialProduct />
        <SpecialProduct />
      </div>
    </section>
  );
}
