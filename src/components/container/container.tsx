"use client";

import { SessionProvider } from "next-auth/react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <SessionProvider>
      <div className="max-w-screen-xl px-8 m-auto">{children}</div>
    </SessionProvider>
  );
}
