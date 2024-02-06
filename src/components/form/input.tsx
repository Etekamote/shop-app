import { Label } from "@/components/ui/label";
import { Input as ShadcnInput } from "@/components/ui/input";

type InputProps = React.ComponentPropsWithoutRef<"input">;

export default function Input({ type, id, placeholder }: InputProps) {
  return (
    <div className="space-y-1 group relative">
      <Label
        htmlFor={id}
        className="z-50 bg-white px-2 ml-3 opacity-0 absolute text-blue-500 text-xs top-0 group-focus-within:opacity-100 group-focus-within:-translate-y-[7px] transition-all"
      >
        {placeholder}
      </Label>
      <ShadcnInput
        type={type}
        className="focus:placeholder:text-transparent focus:border-blue-500"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
