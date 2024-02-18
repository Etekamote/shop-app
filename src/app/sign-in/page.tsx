import { redirect } from "next/navigation";
import SignInForm from "./_components/sign-in-form";
import SignInInfo from "./_components/sign-in-info";
import { getServerSession } from "next-auth";

export default async function SignInPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <main className="flex flex-col lg:flex-row lg:justify-between">
      <SignInForm />
      <SignInInfo />
    </main>
  );
}
