import { db } from "@/db";
import { userprofiles } from "@/db/schema";
import { and, asc, like, or } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    // "use cache";

    const { searchParams } = new URL(request.url);

    // Get specific parameters
    const offset = searchParams.get("offset");
    const limit = searchParams.get("limit");
    const search_keyword = searchParams.get("search_keyword");
    const member_type =
        searchParams.get("member_type") != "all"
            ? searchParams.get("member_type")
            : "";

    const offset_value = offset ? parseInt(offset) : 0;
    const limit_value = limit ? parseInt(limit) : 10;

    const search_logic = and(
        or(
            like(userprofiles.fname, `%${search_keyword}%`),
            like(userprofiles.mname, `%${search_keyword}%`),
            like(userprofiles.lname, `%${search_keyword}%`)
        ),
        like(userprofiles.memberType, `%${member_type}%`)
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
        .offset(offset_value)
        .limit(limit_value);

    return NextResponse.json({ members, max_page });
}
