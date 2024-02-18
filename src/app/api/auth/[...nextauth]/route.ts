import { getUser } from "@/lib/utils";
import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req): Promise<User | null> {
        const user = await getUser(credentials?.email);

        if (user && credentials?.password === user.password) {
          return {
            id: String(user.id),
            email: user.email,
            name: user.name,
          };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
