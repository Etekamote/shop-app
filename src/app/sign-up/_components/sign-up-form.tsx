import FormContent from "./form-content";
import Heading from "./heading";

export default function SignUpForm() {
  return (
    <form className=" w-full border rounded-lg py-4 px-6 space-y-4 lg:w-1/2">
      <Heading>Sign up in 30 seconds</Heading>
      <FormContent />
    </form>
  );
}
