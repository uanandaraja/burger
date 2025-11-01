import { drizzle } from "drizzle-orm/bun-sql";
import { SQL } from "bun";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL!;

// Bun's native SQL instance (for raw queries if needed)
export const sql = new SQL(databaseUrl);

// Drizzle instance with schema for type-safe queries
export const db = drizzle(sql, { schema });

// Re-export schema and types for convenience
export { schema };
export type { User, Session, Account, Verification, InferInsertModel } from "./schema";
