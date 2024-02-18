"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "next-auth/react";

export default function LogoutPage() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.user.id) {
      redirect("/");
    } else {
      signOut();
      redirect("/");
    }
  }, [session?.user.id]);

  return <div></div>;
}
