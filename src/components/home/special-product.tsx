import Link from "next/link";
import Image from "next/image";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Card, CardContent } from "../ui/card";

export default function SpecialProduct() {
  return (
    <Link href="/" className="lg:w-[22%]">
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
