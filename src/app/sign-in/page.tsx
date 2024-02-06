import SignInForm from "./_components/sign-in-form";
import SignInInfo from "./_components/sign-in-info";

export default function SignInPage() {
  return (
    <main className="flex flex-col lg:flex-row lg:justify-between">
      <SignInForm />
      <SignInInfo />
    </main>
  );
}
