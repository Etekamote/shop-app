import Link from "next/link";
import NavItem from "./nav-item";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "./../../lib/utils";

import { getServerSession } from "next-auth";
import UserBar from "./user-bar";

export default async function Menu() {
  const session = await getServerSession();
  return (
    <nav>
      <ul className="space-y-8 flex flex-col md:flex-row md:space-y-0 md:items-center md:gap-x-8">
        <NavItem path="/">Home</NavItem>
        <NavItem path="/products">Store</NavItem>
        {!session ? (
          <>
            <Link
              href="/sign-in"
              className={cn("w-24", buttonVariants({ variant: "outline" }))}
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className={cn("w-24", buttonVariants({ variant: "blue" }))}
            >
              Sign up
            </Link>{" "}
          </>
        ) : (
          <UserBar />
        )}
      </ul>
    </nav>
  );
}
