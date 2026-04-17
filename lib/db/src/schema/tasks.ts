import { pgTable, uuid, text, time, boolean, timestamp, pgEnum, date } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { careRecipientsTable } from "./care-recipients";
import { usersTable } from "./users";

export const taskCategoryEnum = pgEnum("task_category", [
  "nutrition_meals",
  "hygiene_personal_care",
  "mobility_physical",
  "health_medical",
  "household",
  "social_companionship",
  "rest_wellbeing",
  "scheduling_travel",
  "other",
]);

export const taskTimeOfDayEnum = pgEnum("task_time_of_day", [
  "am",
  "pm",
  "anytime",
  "specific_time",
]);

export const tasksTable = pgTable("tasks", {
  id: uuid("id").primaryKey().defaultRandom(),
  careRecipientId: uuid("care_recipient_id")
    .notNull()
    .references(() => careRecipientsTable.id, { onDelete: "cascade" }),
  assignedToUserId: text("assigned_to_user_id")
    .references(() => usersTable.id, { onDelete: "set null" }),

  name: text("name").notNull(),
  category: taskCategoryEnum("category").notNull().default("other"),
  timeOfDay: taskTimeOfDayEnum("time_of_day").notNull().default("anytime"),
  scheduledTime: time("scheduled_time"),
  notes: text("notes"),

  // Recurrence — simple V1 approach
  isRecurring: boolean("is_recurring").notNull().default(true),
  recurringDays: text("recurring_days"), // JSON array: ["mon","tue","wed","thu","fri","sat","sun"]
  activeDate: date("active_date"), // For one-off tasks

  reminderEnabled: boolean("reminder_enabled").notNull().default(false),
  reminderTime: time("reminder_time"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Real-time checklist completions — one row per task per day
export const taskCompletionsTable = pgTable("task_completions", {
  id: uuid("id").primaryKey().defaultRandom(),
  taskId: uuid("task_id")
    .notNull()
    .references(() => tasksTable.id, { onDelete: "cascade" }),
  completedByUserId: text("completed_by_user_id")
    .references(() => usersTable.id, { onDelete: "set null" }),
  completedDate: date("completed_date").notNull(),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
});

export const insertTaskSchema = createInsertSchema(tasksTable).omit({ id: true, createdAt: true, updatedAt: true });
export const insertTaskCompletionSchema = createInsertSchema(taskCompletionsTable).omit({ id: true, completedAt: true });
export const selectTaskSchema = createSelectSchema(tasksTable);
export const selectTaskCompletionSchema = createSelectSchema(taskCompletionsTable);
export type InsertTask = z.infer<typeof insertTaskSchema>;
export type Task = typeof tasksTable.$inferSelect;
export type InsertTaskCompletion = z.infer<typeof insertTaskCompletionSchema>;
export type TaskCompletion = typeof taskCompletionsTable.$inferSelect;
