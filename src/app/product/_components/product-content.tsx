import { Button } from "@/components/ui/button";
import { cn } from "./../../../lib/utils";

type ProductContentProps = {
  name: string;
  description: string;
  price: number;
  stock: number;
};

export default function ProductContent({
  name,
  description,
  price,
  stock,
}: ProductContentProps) {
  return (
    <div className="space-y-6 w-full lg:w-[60%]">
      <h1 className="text-center text-3xl text-blue-500">{name}</h1>
      <p>{description}</p>
      <p className="text-xl font-bold">${price}</p>
      <div className="space-x-4">
        <Button
          variant="outline"
          className={cn("text-xs text-green-500", {
            "text-red-500": stock <= 0,
          })}
        >
          {stock <= 0 ? "Out of stock" : "In stock"}
        </Button>
        <Button variant="outline" className="text-xs">
          Free shipping
        </Button>
      </div>
      <Button variant="blue">Add to cart</Button>
    </div>
  );
}
