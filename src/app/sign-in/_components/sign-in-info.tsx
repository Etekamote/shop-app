import Heading from "@/app/sign-up/_components/heading";
import Info from "@/components/info/info";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SignInInfo() {
  return (
    <section className=" space-y-4 flex flex-col items-center lg:w-1/2">
      <section className="w-[80%] border rounded-lg py-4 px-6 space-y-6">
        <Heading>
          You don&apos;t have an account? Create one in 30 seconds{" "}
        </Heading>
        <Link
          href="/sign-up"
          className={cn(
            "text-center w-full",
            buttonVariants({ variant: "blue" })
          )}
        >
          Sign up
        </Link>
      </section>
      <Info />
    </section>
  );
}
