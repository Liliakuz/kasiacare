import { pgTable, uuid, text, time, boolean, timestamp, pgEnum, date } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { careRecipientsTable } from "./care-recipients";
import { usersTable } from "./users";

export const mealTypeEnum = pgEnum("meal_type", [
  "breakfast",
  "lunch",
  "dinner",
  "snack",
]);

export const mealsTable = pgTable("meals", {
  id: uuid("id").primaryKey().defaultRandom(),
  careRecipientId: uuid("care_recipient_id")
    .notNull()
    .references(() => careRecipientsTable.id, { onDelete: "cascade" }),

  mealType: mealTypeEnum("meal_type").notNull(),
  mealDate: date("meal_date").notNull(),
  mealTime: time("meal_time"),
  mealDetails: text("meal_details"),
  notes: text("notes"),

  reminderEnabled: boolean("reminder_enabled").notNull().default(false),
  reminderTime: time("reminder_time"),

  completed: boolean("completed").notNull().default(false),
  completedAt: timestamp("completed_at"),
  completedByUserId: text("completed_by_user_id")
    .references(() => usersTable.id, { onDelete: "set null" }),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertMealSchema = createInsertSchema(mealsTable).omit({ id: true, createdAt: true, updatedAt: true });
export const selectMealSchema = createSelectSchema(mealsTable);
export type InsertMeal = z.infer<typeof insertMealSchema>;
export type Meal = typeof mealsTable.$inferSelect;
