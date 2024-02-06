import Heading from "@/app/sign-up/_components/heading";
import FormContent from "@/components/form/form-content";
import { InputT } from "@/lib/types";

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

  return (
    <form className=" w-full border rounded-lg py-4 px-6 space-y-6 lg:w-1/2">
      <Heading>Sign in</Heading>
      <FormContent inputs={inputs} buttonText="Sign in" />
    </form>
  );
}
