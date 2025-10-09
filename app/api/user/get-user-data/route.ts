import { db_old } from "@/db/old";
import { userprofiles } from "@/db/old/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const user_id = Number(searchParams.get("user_id"));

    const user = (
        await db_old
            .select()
            .from(userprofiles)
            .where(eq(userprofiles.fkUserAccountsId, user_id))
            .limit(1)
    )[0];

    return NextResponse.json({ user });
}
