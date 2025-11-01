import { betterAuth } from "better-auth";
import { magicLink } from "better-auth/plugins";
import { Pool } from "pg";
import { MagicLinkEmail } from "./lib/emails/magic-link";
import { resend } from "./lib/resend";

// Better Auth requires pg.Pool for PostgreSQL
// Use Bun.sql (from db.ts) for all other database operations in your app
export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
  database: new Pool({
    connectionString: process.env.DATABASE_URL!,
  }),
  plugins: [
    magicLink({
      async sendMagicLink({ email, url }) {
        const fromEmail = process.env.RESEND_FROM_EMAIL!;

        await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: "Sign in to Burger",
          react: MagicLinkEmail({ url }),
        });
      },
      expiresIn: 300, // 5 minutes
      disableSignUp: false,
    }),
  ],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});
