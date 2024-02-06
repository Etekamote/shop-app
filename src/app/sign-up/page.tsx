import SignUpForm from "./_components/sign-up-form";
import SignUpInfo from "./_components/sign-up-info";

export default function SignUpPage() {
  return (
    <main className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
      <SignUpForm />
      <SignUpInfo />
    </main>
  );
}
