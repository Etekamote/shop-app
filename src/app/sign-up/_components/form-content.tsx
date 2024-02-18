"use client";
import { Button } from "@/components/ui/button";

import Input from "@/app/sign-up/_components/input";
import { InputT, RegisterFormInputsT } from "@/lib/types";
import { UseFormRegister } from "react-hook-form";
import { useFormStatus } from "react-dom";

type FormContentProps = {
  inputs: InputT[];
  buttonText: string;
  register: UseFormRegister<RegisterFormInputsT>;
};

export default function FormContent({
  inputs,
  buttonText,
  register,
}: FormContentProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {inputs.map((input) => (
        <Input key={input.id} {...input} register={register} />
      ))}
      <Button
        type="submit"
        className="w-full"
        variant="blue"
        disabled={pending}
      >
        {buttonText}
      </Button>
    </>
  );
}
