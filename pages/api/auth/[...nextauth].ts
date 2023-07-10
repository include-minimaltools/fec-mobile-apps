import NextAuth, { type NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import UserCollection from "~/firebase/database/user.collection";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    async session({ session }) {
      if (session.user && session.user.email && session.user.image && session.user.name)
        await new UserCollection().createWithId({
          id: session.user.email,
          email: session.user.email,
          image: session.user.image,
          name: session.user.name
        })
      

      return Promise.resolve(session);
    },
  },

}

export default NextAuth(authOptions);
