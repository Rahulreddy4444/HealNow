import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits:integer()
});

export const SessionChatTable = pgTable("sessions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  sessionId: uuid().notNull().defaultRandom(),
  notes: varchar({ length: 1000 }).notNull(),
  conversation: varchar({ length: 10000 }),
  report: varchar({ length: 10000 }),
  createdBy: varchar({ length: 255 }).notNull(),
  createdOn: varchar({ length: 255 }).notNull(),
  selectedDoctor: varchar({ length: 255 }).notNull(),
  user: integer("user_id")
});