import { SQL } from "bun";

const databaseUrl = process.env.DATABASE_URL!;

export const db = new SQL(databaseUrl);

// Test database connection
export async function initDatabase() {
  try {
    await db`SELECT 1`;
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    throw error;
  }
}

