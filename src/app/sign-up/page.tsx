import SignUpForm from "./_components/sign-up-form";
import SignUpInfo from "./_components/sign-up-info";

export default function SignUpPage() {
  return (
    <main className="flex flex-col lg:flex-row">
      <SignUpForm />
      <SignUpInfo />
    </main>
  );
}
