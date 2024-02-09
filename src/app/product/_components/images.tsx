"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type ImagesProps = {
  img1: string;
  img2: string;
};

export default function Images({ img1, img2 }: ImagesProps) {
  const [mainImage, setMainImage] = useState(img1);

  const handleChangeMainImage = (src: string) => {
    setMainImage(src);
  };
  return (
    <div className="w-[100%] lg:w-[35%]">
      <Image
        src={mainImage}
        alt="Product image 1"
        width={400}
        height={400}
        layout="responsive"
      />
      <div className="flex gap-x-8">
        <Image
          src={img1}
          alt="Product image 2"
          width={100}
          height={100}
          className={cn("border p-2 cursor-pointer", {
            "border-blue-500": mainImage === img1,
          })}
          onClick={() => handleChangeMainImage(img1)}
        />
        <Image
          src={img2}
          alt="Product image 2"
          width={100}
          height={100}
          className={cn("border p-2 cursor-pointer", {
            "border-blue-500": mainImage === img2,
          })}
          onClick={() => handleChangeMainImage(img2)}
        />
      </div>
    </div>
  );
}
