import { pgTable, uuid, text, boolean, timestamp, date } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { careRecipientsTable } from "./care-recipients";
import { usersTable } from "./users";

// Daily care notes
export const dailyNotesTable = pgTable("daily_notes", {
  id: uuid("id").primaryKey().defaultRandom(),
  careRecipientId: uuid("care_recipient_id")
    .notNull()
    .references(() => careRecipientsTable.id, { onDelete: "cascade" }),
  authorUserId: text("author_user_id")
    .references(() => usersTable.id, { onDelete: "set null" }),

  noteDate: date("note_date").notNull(),
  content: text("content").notNull(),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Supply needs tracking
export const supplyNeedsTable = pgTable("supply_needs", {
  id: uuid("id").primaryKey().defaultRandom(),
  careRecipientId: uuid("care_recipient_id")
    .notNull()
    .references(() => careRecipientsTable.id, { onDelete: "cascade" }),

  itemName: text("item_name").notNull(),
  notes: text("notes"),
  resolved: boolean("resolved").notNull().default(false),
  resolvedAt: timestamp("resolved_at"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertDailyNoteSchema = createInsertSchema(dailyNotesTable).omit({ id: true, createdAt: true, updatedAt: true });
export const insertSupplyNeedSchema = createInsertSchema(supplyNeedsTable).omit({ id: true, createdAt: true, updatedAt: true });
export const selectDailyNoteSchema = createSelectSchema(dailyNotesTable);
export const selectSupplyNeedSchema = createSelectSchema(supplyNeedsTable);
export type InsertDailyNote = z.infer<typeof insertDailyNoteSchema>;
export type DailyNote = typeof dailyNotesTable.$inferSelect;
export type InsertSupplyNeed = z.infer<typeof insertSupplyNeedSchema>;
export type SupplyNeed = typeof supplyNeedsTable.$inferSelect;
