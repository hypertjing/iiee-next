import "server-only";

import { decrypt } from "@/app/lib/session";
import { db_old } from "@/db/old";
import {
    positions,
    useraccounts,
    userpositions,
    userprofiles,
} from "@/db/old/drizzle/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

export const verifySession = cache(async () => {
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
        redirect("/login");
    }

    return {
        isAuth: true,
        userId: session.userId,
        userProfileId: session.userProfileId,
    };
});

export const getUser = cache(async () => {
    const session = await verifySession();
    if (!session) return null;

    const userProfileId: number = session.userProfileId as number;
    const userId: number = session.userId as number;

    const data = await db_old
        .select()
        .from(userprofiles)
        .where(eq(userprofiles.pkUserProfilesId, userProfileId));

    const userprofile = data[0];

    const accountdb = await db_old
        .select()
        .from(useraccounts)
        .where(eq(useraccounts.pkUserAccountsId, userId));

    const account = accountdb[0];

    const user_poistion_pivot = (
        await db_old
            .select()
            .from(userpositions)
            .where(eq(userpositions.fkUserProfilesId, userProfileId))
    )[0];

    const poistion = (
        await db_old
            .select()
            .from(positions)
            .where(
                eq(positions.pkPositionsId, user_poistion_pivot.fkPositionsId)
            )
    )[0];

    if (!account || !userprofile) {
        return null;
    }

    return { userprofile, account, poistion };
});
