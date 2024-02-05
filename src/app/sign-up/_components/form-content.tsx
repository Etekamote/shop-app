import { Button } from "@/components/ui/button";

import Input from "../../../components/input/input";

export default function FormContent() {
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
    <>
      {inputs.map((input) => (
        <Input key={input.id} {...input} />
      ))}
      <Button type="submit" className="w-full" variant="blue">
        Sign up!
      </Button>
    </>
  );
}
