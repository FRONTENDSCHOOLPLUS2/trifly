import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";

const SERVER = process.env.MARKET_API_SERVER;
const CLIENT_ID = process.env.MARKET_API_CLIENT_ID as string;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const res = await fetch(`${SERVER}/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "client-id": CLIENT_ID,
          },
          body: JSON.stringify(credentials),
        });
        const resJson = await res.json();

        if (resJson.ok) {
          const user = resJson.item;
          return {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            birth: user.extra.birth,
            type: user.type,
            accessToken: user.token.accessToken,
            refreshToken: user.token.refreshToken,
          };
        } else return null;
      },
    }),

    // github({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),

    // google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],

  session: {},

  pages: {},

  callbacks: {
    async signIn({ user }) {
      return true;
    },

    async jwt({ token, user }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.birth = user.birth;
        token.phone = user.phone;
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.birth = token.birth;
      session.phone = token.phone;
      return session;
    },
  },
});
