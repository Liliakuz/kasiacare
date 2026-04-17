// Plus tier only — Caregiver Calendar
import { pgTable, uuid, text, time, boolean, timestamp, date } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { careRecipientsTable } from "./care-recipients";
import { usersTable } from "./users";

export const caregiverVisitsTable = pgTable("caregiver_visits", {
  id: uuid("id").primaryKey().defaultRandom(),
  careRecipientId: uuid("care_recipient_id")
    .notNull()
    .references(() => careRecipientsTable.id, { onDelete: "cascade" }),
  caregiverUserId: text("caregiver_user_id")
    .references(() => usersTable.id, { onDelete: "set null" }),

  visitDate: date("visit_date").notNull(),
  startTime: time("start_time").notNull(),
  endTime: time("end_time"),
  notes: text("notes"),

  reminderEnabled: boolean("reminder_enabled").notNull().default(true),
  reminderTime: time("reminder_time"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertCaregiverVisitSchema = createInsertSchema(caregiverVisitsTable).omit({ id: true, createdAt: true, updatedAt: true });
export const selectCaregiverVisitSchema = createSelectSchema(caregiverVisitsTable);
export type InsertCaregiverVisit = z.infer<typeof insertCaregiverVisitSchema>;
export type CaregiverVisit = typeof caregiverVisitsTable.$inferSelect;
