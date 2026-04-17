import { pgTable, uuid, text, time, boolean, timestamp, pgEnum, date } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { careRecipientsTable } from "./care-recipients";

export const activityTypeEnum = pgEnum("activity_type", [
  "outing",
  "family_visit",
  "entertainment",
  "exercise",
  "games",
  "social",
  "other",
]);

export const activitiesTable = pgTable("activities", {
  id: uuid("id").primaryKey().defaultRandom(),
  careRecipientId: uuid("care_recipient_id")
    .notNull()
    .references(() => careRecipientsTable.id, { onDelete: "cascade" }),

  name: text("name").notNull(),
  activityType: activityTypeEnum("activity_type").notNull().default("other"),
  activityDate: date("activity_date").notNull(),
  activityTime: time("activity_time"),
  notes: text("notes"),

  reminderEnabled: boolean("reminder_enabled").notNull().default(false),
  reminderTime: time("reminder_time"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertActivitySchema = createInsertSchema(activitiesTable).omit({ id: true, createdAt: true, updatedAt: true });
export const selectActivitySchema = createSelectSchema(activitiesTable);
export type InsertActivity = z.infer<typeof insertActivitySchema>;
export type Activity = typeof activitiesTable.$inferSelect;
