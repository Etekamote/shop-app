"use client";

import FormContent from "@/app/sign-up/_components/form-content";
import Heading from "./heading";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { RegisterFormInputsT, RegisterStateT } from "@/lib/types";
import { createUser } from "@/lib/actions";
import { registerFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUpForm() {
  const inputs = [
    {
      type: "text",
      id: "name",
      placeholder: "Name",
    },
    {
      type: "email",
      id: "email",
      placeholder: "Email",
    },
    {
      type: "password",
      id: "password",
      placeholder: "Password",
    },
    {
      type: "password",
      id: "repeatPassword",
      placeholder: "Repeat password",
    },
  ];

  const { register } = useForm<RegisterFormInputsT>({
    mode: "all",
    resolver: zodResolver(registerFormSchema),
  });

  const [state, formAction] = useFormState<RegisterStateT, FormData>(
    createUser,
    null
  );

  if (state?.status === "success") {
    return (
      <div className=" w-full border rounded-lg py-4 px-6 space-y-6 lg:w-1/2 text-center">
        <p className="text-green-500 font-bold">{state.message}</p>
        <p>Your registration was successful. Now you can log in.</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className=" w-full border rounded-lg py-4 px-6 space-y-6 lg:w-1/2"
    >
      {state?.status === "error" && (
        <p className="text-center text-red-500">{state.message}</p>
      )}
      <Heading>Sign up in 30 seconds</Heading>
      <FormContent inputs={inputs} buttonText="Sign up!" register={register} />
    </form>
  );
}
