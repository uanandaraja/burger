import { SQL } from "bun";

const databaseUrl = process.env.DATABASE_URL || "";

export const db = new SQL(databaseUrl);

// Test database connection
export async function initDatabase() {
  await db`SELECT 1`;
}
