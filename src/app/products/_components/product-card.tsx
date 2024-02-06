import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function ProductCard() {
  return (
    <Link href="/" className="lg:w-[28%]">
      <Card className="w-full  hover:cursor-pointer hover:scale-105 hover:shadow-lg transition ">
        <CardContent className="flex flex-col justify-center gap-y-2">
          <Image
            src="/image.webp"
            width={300}
            height={300}
            alt="opis"
            className="m-auto"
          />
          <p className="text-lg lg:text-base ">Drukarka HiperExtra3000</p>
          <p>
            <StarBorderIcon className="text-yellow-700" />
            4.38/5 (13)
          </p>
          <p className="text-xl font-bold ">$559.99</p>
        </CardContent>
      </Card>
    </Link>
  );
}
