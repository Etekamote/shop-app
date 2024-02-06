"use client";

import { Input } from "@/components/ui/input";
import Heading from "./heading";
import { FormEvent, useState } from "react";

export default function PriceRange() {
  const [values, setValues] = useState({ from: "", to: "" });

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValues({ ...values, [e.currentTarget.name]: parseInt(value) });
  };

  return (
    <div className="space-y-2">
      <Heading>Price</Heading>
      <form className="flex justify-between items-center gap-x-6">
        <div className="flex items-center gap-x-1">
          <Input
            name="from"
            type="number"
            placeholder="From"
            onChange={handleChange}
          />
          <span>zł</span>
        </div>
        <span>-</span>
        <div className="flex items-center gap-x-1">
          <Input
            name="to"
            type="number"
            placeholder="To"
            onChange={handleChange}
          />
          <span>zł</span>
        </div>
      </form>
    </div>
  );
}
