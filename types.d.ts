import { cogsrequest, sanitization_remarks } from "./db/new/schema";
import {
    chapters,
    fees,
    positions,
    regions,
    shippingtypes,
    useraccounts,
    userlicense,
    userpositions,
    userprofiles,
} from "./db/old/drizzle/schema";

export type UserAccount = typeof useraccounts.$inferSelect;
export type UserProfile = typeof userprofiles.$inferSelect;
export type UserLicense = typeof userlicense.$inferSelect;
export type MemberRegions = typeof regions.$inferSelect;
export type MemberChapters = typeof chapters.$inferSelect;

export type Position = typeof positions.$inferSelect;
export type UserPosition = typeof userpositions.$inferSelect;

export type MemberRegionChapter = {
    userprofiles: UserProfile;
    userlicense: UserLicense[] | null;
    chapter: MemberChapters | null;
    region: MemberRegions | null;
};

export type User = {
    userprofile: UserProfile;
    account: UserAccount;
    poistion: Position;
};

export type CogsRequest = typeof cogsrequest.$inferSelect;
export type CogsRequestForm = typeof cogsrequest.$inferInsert;
export type Fee = typeof fees.$inferSelect;
export type ShippingType = typeof shippingtypes.$inferSelect;

export type SanitizationRemarksType = "tbd" | "r" | "hns";

export type SanitizationRemarksForm = typeof sanitization_remarks.$inferInsert;
export type SanitizationRemarks = typeof sanitization_remarks.$inferSelect;
