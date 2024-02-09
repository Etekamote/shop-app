"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function CartItem() {
  return (
    <Card className="w-full ">
      <CardContent className="flex flex-row items-center justify-center gap-x-4">
        <Image
          src="/image.webp"
          width={80}
          height={80}
          alt="opis"
          className="m-auto"
        />
        <div>
          <p className="text-base lg:text-base ">Drukarka HiperExtra3000</p>
          <p className="text-base font-bold ">$559.99</p>
        </div>
      </CardContent>
    </Card>
  );
}
