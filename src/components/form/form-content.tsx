import { Button } from "@/components/ui/button";

import Input from "@/components/form/input";
import { InputT } from "@/lib/types";

type FormContentProps = {
  inputs: InputT[];
  buttonText: string;
};

export default function FormContent({ inputs, buttonText }: FormContentProps) {
  return (
    <>
      {inputs.map((input) => (
        <Input key={input.id} {...input} />
      ))}
      <Button type="submit" className="w-full" variant="blue">
        {buttonText}
      </Button>
    </>
  );
}
