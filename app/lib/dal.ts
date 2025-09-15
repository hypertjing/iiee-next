import "server-only";

import { decrypt } from "@/app/lib/session";
import { db } from "@/db";
import { useraccounts, userprofiles } from "@/db/schema";
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

    const data = await db
        .select()
        .from(userprofiles)
        .where(eq(userprofiles.pkUserProfilesId, userProfileId));

    const userprofile = data[0];

    const accountdb = await db
        .select()
        .from(useraccounts)
        .where(eq(useraccounts.pkUserAccountsId, userId));

    const account = accountdb[0];
    if (!account || !userprofile) {
        return null;
    }

    return { userprofile, account };
});
