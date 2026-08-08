import { db_old } from "@/db/old";
import { chapters, regions, userprofiles } from "@/db/old/drizzle/schema";
import { and, asc, eq, like, or, sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    type MemberType = (typeof userprofiles.$inferSelect)["memberType"];

    const keyword = searchParams.get("keyword") as string;
    const region = searchParams.get("region") as string;
    const chapter = searchParams.get("chapter") as string;
    const member_type_init = searchParams.get("member_type") as string;
    const member_type = searchParams.get("member_type") as MemberType;
    const offset = Number(searchParams.get("offset"));
    const limit = Number(searchParams.get("limit"));

    let member_type_filter = eq(userprofiles.memberType, member_type);
    if (member_type_init === "all") {
        member_type_filter = like(userprofiles.memberType, "%%");
    }

    let regions_filter = eq(regions.code, region);
    if (region === "all") {
        regions_filter = eq(regions.code, "NL");
    } else if (region != "NL") {
        regions_filter = like(regions.code, "%xxx%");
    }

    let chapter_filter = eq(chapters.code, chapter);
    if (chapter === "all") {
        chapter_filter = like(chapters.code, "%%");
    }

    const search_logic = and(
        or(
            like(userprofiles.fname, `%${keyword}%`),
            like(userprofiles.mname, `%${keyword}%`),
            like(userprofiles.lname, `%${keyword}%`),
        ),
        regions_filter,
        chapter_filter,
        member_type_filter,
    );

    // const max_page = await db.$count(userprofiles, search_logic);
    const [max_page] = await db_old
        .select({ count: sql<number>`count(*)` })
        .from(userprofiles)
        .leftJoin(chapters, eq(userprofiles.chapter, chapters.pkChaptersId))
        .leftJoin(regions, eq(userprofiles.region, regions.pkRegionsId))
        .where(search_logic);

    const members = (
        await db_old
            .select({
                userprofiles: userprofiles,
                chapters: chapters,
                regions: regions,
            })
            .from(userprofiles)
            .leftJoin(chapters, eq(userprofiles.chapter, chapters.pkChaptersId))
            .leftJoin(regions, eq(userprofiles.region, regions.pkRegionsId))
            .where(search_logic)
            .orderBy(
                asc(userprofiles.lname),
                asc(userprofiles.fname),
                asc(userprofiles.mname),
            )
            .offset(offset)
            .limit(limit)
    ).map((row) => {
        return {
            userprofiles: row.userprofiles,
            chapter: row.chapters,
            region: row.regions,
        };
    });

    // const max_page = members.length;
    // console.log(
    //     members,
    //     params.keyword,
    //     params.member_type,
    //     params.offset,
    //     params.limit
    // );
    console.log(region, chapter, member_type);

    // return { members, max_page: max_page.count };

    return NextResponse.json({ members, max_page: max_page.count });
}
