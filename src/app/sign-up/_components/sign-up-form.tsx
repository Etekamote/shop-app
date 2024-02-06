import FormContent from "@/components/form/form-content";
import Heading from "./heading";

export default function SignUpForm() {
  const inputs = [
    {
      type: "text",
      id: "first-name",
      placeholder: "First name",
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
      id: "repeat-password",
      placeholder: "Repeat password",
    },
  ];

  return (
    <form className=" w-full border rounded-lg py-4 px-6 space-y-6 lg:w-1/2">
      <Heading>Sign up in 30 seconds</Heading>
      <FormContent inputs={inputs} buttonText="Sign up!" />
    </form>
  );
}
