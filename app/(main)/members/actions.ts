"use server";

import { db } from "@/db";
import { userprofiles } from "@/db/schema";
import { and, asc, like, or } from "drizzle-orm";

export async function getUserProfilesAction(
    keyword: string,
    member_type: string,
    offset: number,
    limit: number
) {
    "use cache";

    const search_logic = and(
        or(
            like(userprofiles.fname, `%${keyword}%`),
            like(userprofiles.mname, `%${keyword}%`),
            like(userprofiles.lname, `%${keyword}%`)
        ),
        like(userprofiles.memberType, `%${""}%`)
    );

    const max_page = await db.$count(userprofiles, search_logic);

    const members = await db
        .select()
        .from(userprofiles)
        .where(search_logic)
        .orderBy(
            asc(userprofiles.lname),
            asc(userprofiles.fname),
            asc(userprofiles.mname)
        )
        .offset(offset)
        .limit(limit);

    console.log(members, keyword, member_type, offset, limit);

    return { members, max_page };
}
