import { pgTable, uuid, text, time, boolean, timestamp, date } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { careRecipientsTable } from "./care-recipients";
import { usersTable } from "./users";

export const appointmentsTable = pgTable("appointments", {
  id: uuid("id").primaryKey().defaultRandom(),
  careRecipientId: uuid("care_recipient_id")
    .notNull()
    .references(() => careRecipientsTable.id, { onDelete: "cascade" }),
  accompaniedByUserId: text("accompanied_by_user_id")
    .references(() => usersTable.id, { onDelete: "set null" }),

  name: text("name").notNull(),
  appointmentDate: date("appointment_date").notNull(),
  appointmentTime: time("appointment_time"),
  location: text("location"),
  bringItems: text("bring_items"), // Notes on what to bring
  notes: text("notes"),

  reminderEnabled: boolean("reminder_enabled").notNull().default(true),
  reminderTime: time("reminder_time"),

  googleCalendarEventId: text("google_calendar_event_id"), // For Google Calendar sync

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertAppointmentSchema = createInsertSchema(appointmentsTable).omit({ id: true, createdAt: true, updatedAt: true });
export const selectAppointmentSchema = createSelectSchema(appointmentsTable);
export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type Appointment = typeof appointmentsTable.$inferSelect;
