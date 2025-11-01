import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";

// Better Auth tables (for reference - these are managed by Better Auth CLI)
// These are here for type safety when querying with Drizzle
export const user = pgTable("user", {
  id: uuid("id").primaryKey(),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified"),
  name: text("name"),
  image: text("image"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const session = pgTable("session", {
  id: uuid("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: uuid("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const account = pgTable("account", {
  id: uuid("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: uuid("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const verification = pgTable("verification", {
  id: uuid("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt"),
  updatedAt: timestamp("updatedAt"),
});

// Add your app-specific tables below
// Example:
// export const posts = pgTable("posts", {
//   id: uuid("id").primaryKey().defaultRandom(),
//   title: text("title").notNull(),
//   content: text("content"),
//   userId: uuid("userId")
//     .notNull()
//     .references(() => user.id, { onDelete: "cascade" }),
//   createdAt: timestamp("createdAt").notNull().defaultNow(),
//   updatedAt: timestamp("updatedAt").notNull().defaultNow(),
// });

// Type exports for Better Auth tables
export type User = InferSelectModel<typeof user>;
export type Session = InferSelectModel<typeof session>;
export type Account = InferSelectModel<typeof account>;
export type Verification = InferSelectModel<typeof verification>;

// Re-export InferInsertModel for creating new records
export type { InferInsertModel };

