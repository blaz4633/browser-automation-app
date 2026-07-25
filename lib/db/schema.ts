import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

// Example starter table — replace or extend with your app schema.
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
