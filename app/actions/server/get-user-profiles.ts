import "server-only";

import { db_old } from "@/db/old";
import { userprofiles } from "@/db/old/drizzle/schema";
import { UserProfile } from "@/types";

export async function getUserProfiles(offset: number): Promise<UserProfile[]> {
    "use cache";

    return await db_old.select().from(userprofiles).offset(offset).limit(10);
}
