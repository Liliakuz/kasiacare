import { pgTable, uuid, text, date, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { usersTable } from "./users";

export const careRecipientsTable = pgTable("care_recipients", {
  id: uuid("id").primaryKey().defaultRandom(),
  ownerUserId: text("owner_user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),

  // Basic Profile
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  preferredName: text("preferred_name"),
  dateOfBirth: date("date_of_birth"),
  photoUrl: text("photo_url"),

  // Personal Preferences
  foodLikes: text("food_likes"),
  foodDislikes: text("food_dislikes"),
  dietaryNotes: text("dietary_notes"),
  communicationPreferences: text("communication_preferences"),
  comfortItems: text("comfort_items"),

  // Daily Routine Notes
  morningRoutineNotes: text("morning_routine_notes"),
  eveningRoutineNotes: text("evening_routine_notes"),
  generalNotes: text("general_notes"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertCareRecipientSchema = createInsertSchema(careRecipientsTable).omit({ id: true, createdAt: true, updatedAt: true });
export const selectCareRecipientSchema = createSelectSchema(careRecipientsTable);
export type InsertCareRecipient = z.infer<typeof insertCareRecipientSchema>;
export type CareRecipient = typeof careRecipientsTable.$inferSelect;
