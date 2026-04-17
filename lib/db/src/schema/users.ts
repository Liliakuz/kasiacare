import { pgTable, text, timestamp, pgEnum, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const userRoleEnum = pgEnum("user_role", [
  "family_member",
  "personal_aid",
  "caregiver",
  "individual",
]);

export const subscriptionTierEnum = pgEnum("subscription_tier", [
  "free_trial",
  "basic",
  "plus",
]);

export const usersTable = pgTable("users", {
  id: text("id").primaryKey(), // Clerk user ID (e.g. user_xxx)
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  role: userRoleEnum("role").notNull().default("family_member"),
  subscriptionTier: subscriptionTierEnum("subscription_tier").notNull().default("free_trial"),
  googleCalendarSync: boolean("google_calendar_sync").notNull().default(false),
  notificationEmail: boolean("notification_email").notNull().default(true),
  notificationText: boolean("notification_text").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(usersTable);
export const selectUserSchema = createSelectSchema(usersTable);
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof usersTable.$inferSelect;
