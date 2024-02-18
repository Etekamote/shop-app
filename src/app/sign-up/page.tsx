import { getServerSession } from "next-auth/next";
import SignUpForm from "./_components/sign-up-form";
import SignUpInfo from "./_components/sign-up-info";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <main className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
      <SignUpForm />
      <SignUpInfo />
    </main>
  );
}
