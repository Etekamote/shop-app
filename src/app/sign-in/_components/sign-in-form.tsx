"use client";
import { signIn } from "next-auth/react";
import Heading from "@/app/sign-up/_components/heading";
import FormContent from "../_components/form-content";
import { InputT } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInForm() {
  const inputs: InputT[] = [
    {
      id: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      id: "password",
      type: "password",
      placeholder: "Password",
    },
  ];

  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailInput = (e.target as HTMLFormElement).querySelector(
      "#email"
    ) as HTMLInputElement;
    const passwordInput = (e.target as HTMLFormElement).querySelector(
      "#password"
    ) as HTMLInputElement;

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    if (!emailValue || !passwordValue) {
      setError("Please fill in all fields");
      return;
    }
    const response = await signIn("credentials", {
      email: emailValue,
      password: passwordValue,
      redirect: false,
    });
    if (!response?.error) {
      router.push("/");
      router.refresh();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full border rounded-lg py-4 px-6 space-y-6 lg:w-1/2"
    >
      {error && <p className="text-red-500 text-center">{error}</p>}
      <Heading>Sign in</Heading>
      <FormContent inputs={inputs} buttonText="Sign in" />
    </form>
  );
}
