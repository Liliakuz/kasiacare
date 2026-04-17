import { pgTable, uuid, text, time, boolean, timestamp, pgEnum, date } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { careRecipientsTable } from "./care-recipients";
import { usersTable } from "./users";

export const reminderRepeatEnum = pgEnum("reminder_repeat", [
  "daily",
  "weekly",
  "custom",
]);

// V1: stores only a time-based label — no medication names or dosages (PHI boundary)
export const medicationRemindersTable = pgTable("medication_reminders", {
  id: uuid("id").primaryKey().defaultRandom(),
  careRecipientId: uuid("care_recipient_id")
    .notNull()
    .references(() => careRecipientsTable.id, { onDelete: "cascade" }),

  reminderLabel: text("reminder_label").notNull(), // User writes their own label
  reminderTime: time("reminder_time").notNull(),
  repeat: reminderRepeatEnum("repeat").notNull().default("daily"),
  reminderEnabled: boolean("reminder_enabled").notNull().default(true),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Daily completion log
export const medicationCompletionsTable = pgTable("medication_completions", {
  id: uuid("id").primaryKey().defaultRandom(),
  reminderId: uuid("reminder_id")
    .notNull()
    .references(() => medicationRemindersTable.id, { onDelete: "cascade" }),
  completedDate: date("completed_date").notNull(),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
  completedByUserId: text("completed_by_user_id")
    .references(() => usersTable.id, { onDelete: "set null" }),
});

export const insertMedicationReminderSchema = createInsertSchema(medicationRemindersTable).omit({ id: true, createdAt: true, updatedAt: true });
export const insertMedicationCompletionSchema = createInsertSchema(medicationCompletionsTable).omit({ id: true, completedAt: true });
export const selectMedicationReminderSchema = createSelectSchema(medicationRemindersTable);
export type InsertMedicationReminder = z.infer<typeof insertMedicationReminderSchema>;
export type MedicationReminder = typeof medicationRemindersTable.$inferSelect;
export type MedicationCompletion = typeof medicationCompletionsTable.$inferSelect;
