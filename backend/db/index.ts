import { SQL } from "bun";
import { drizzle } from "drizzle-orm/bun-sql";

import { account, session, user, verification } from "./schema";

const databaseUrl = process.env.DATABASE_URL || "";

// Bun's native SQL instance (for raw queries if needed)
export const sql = new SQL(databaseUrl);

// Drizzle instance with schema for type-safe queries
export const db = drizzle(sql, {
  schema: {
    user,
    session,
    account,
    verification,
  },
});
