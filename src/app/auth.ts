import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "@/app/lib";

if(!process.env.GITHUB_ID || !process.env.GITHUB_SECRET){
    throw new Error('Missing github client id or client secret');
}

export const {handlers:{GET, POST}, auth, signIn, signOut} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async session({ user, session }) {
            if (session && user) {
                session.user.id = user.id
            }
            return session;
        }
    }
})
console.log("ENV GITHUB_ID:", process.env.GITHUB_ID);
console.log("ENV GITHUB_SECRET:", process.env.GITHUB_SECRET);
console.log("ENV NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);
console.log("ENV DATABASE_URL:", process.env.DATABASE_URL);


