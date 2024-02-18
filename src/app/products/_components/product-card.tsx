import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Products } from "@prisma/client";
import { getImage } from "@/lib/utils";

type ProductCardProps = {
  product: Products;
};

export default async function ProductCard({ product }: ProductCardProps) {
  const img = await getImage(product.id);
  return (
    <Link href={`/product/${product.id}`} className="lg:w-[28%]">
      <Card className="w-full   hover:cursor-pointer hover:scale-105 hover:shadow-lg transition ">
        <CardContent className="flex flex-col justify-center gap-y-6">
          <Image
            src={img?.image}
            width={300}
            height={300}
            alt="opis"
            className="m-auto"
          />
          <p className="text-lg lg:text-base ">
            {product.name.length < 40
              ? product.name
              : `${product.name.slice(0, 40)}...`}
          </p>
          <p className="">
            <StarBorderIcon className="text-yellow-700" />
            {product.reviews == 0
              ? "0"
              : (product.rating / product.reviews).toFixed(2)}
            /5 ({product.reviews})
          </p>
          <p className="text-xl font-bold ">${product.price}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
