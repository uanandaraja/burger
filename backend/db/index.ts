import { SQL } from "bun";
import { drizzle } from "drizzle-orm/bun-sql";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL!;

// Bun's native SQL instance (for raw queries if needed)
export const sql = new SQL(databaseUrl);

// Drizzle instance with schema for type-safe queries
export const db = drizzle(sql, { schema });

// Re-export schema and types for convenience
export { schema };
export type {
  Account,
  InferInsertModel,
  Session,
  User,
  Verification,
} from "./schema";
