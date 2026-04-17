import { pgTable, uuid, text, integer, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { usersTable } from "./users";
import { careRecipientsTable } from "./care-recipients";

export const careTeamRoleEnum = pgEnum("care_team_role", [
  "family_member",
  "personal_aid",
  "caregiver",
  "coordinator",
]);

// Links users to care recipients (many-to-many)
export const careTeamMembersTable = pgTable("care_team_members", {
  id: uuid("id").primaryKey().defaultRandom(),
  careRecipientId: uuid("care_recipient_id")
    .notNull()
    .references(() => careRecipientsTable.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  role: careTeamRoleEnum("role").notNull().default("caregiver"),
  displayName: text("display_name"), // Override for display (e.g. "Sarah M.")
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Emergency contacts per care recipient
export const emergencyContactsTable = pgTable("emergency_contacts", {
  id: uuid("id").primaryKey().defaultRandom(),
  careRecipientId: uuid("care_recipient_id")
    .notNull()
    .references(() => careRecipientsTable.id, { onDelete: "cascade" }),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  relationship: text("relationship"),
  phonePrimary: text("phone_primary").notNull(),
  phoneSecondary: text("phone_secondary"),
  email: text("email"),
  notes: text("notes"),
  priorityOrder: integer("priority_order").notNull().default(1),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertCareTeamMemberSchema = createInsertSchema(careTeamMembersTable).omit({ id: true, createdAt: true });
export const insertEmergencyContactSchema = createInsertSchema(emergencyContactsTable).omit({ id: true, createdAt: true, updatedAt: true });
export const selectCareTeamMemberSchema = createSelectSchema(careTeamMembersTable);
export const selectEmergencyContactSchema = createSelectSchema(emergencyContactsTable);
export type InsertCareTeamMember = z.infer<typeof insertCareTeamMemberSchema>;
export type CareTeamMember = typeof careTeamMembersTable.$inferSelect;
export type InsertEmergencyContact = z.infer<typeof insertEmergencyContactSchema>;
export type EmergencyContact = typeof emergencyContactsTable.$inferSelect;
