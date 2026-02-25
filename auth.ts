import { findUserByCredentials } from "@/app/(auth)/login/_actions/findUserByCredentials"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { email } from "zod"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {

      // procura usuario com as credenciais
      const user = await findUserByCredentials({
        email: credentials?.email as string,
        password: credentials?.password as string
      })

      return user;
      },
    }),
  ],
})