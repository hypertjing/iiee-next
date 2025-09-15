import { useraccounts, userprofiles } from "./db/schema";

export type UserAccount = typeof useraccounts.$inferSelect;
export type UserProfile = typeof userprofiles.$inferSelect;
