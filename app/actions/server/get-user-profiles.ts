import "server-only";

import { db } from "@/db";
import { userprofiles } from "@/db/schema";
import { UserProfile } from "@/types";

export async function getUserProfiles(offset: number): Promise<UserProfile[]> {
    "use cache";

    return await db.select().from(userprofiles).offset(offset).limit(10);
}
