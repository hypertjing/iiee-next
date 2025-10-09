"use server";

import { db_old } from "@/db/old";
import { chapters, regions, userprofiles } from "@/db/old/drizzle/schema";
import { and, asc, eq, gt, like, lt, or, sql } from "drizzle-orm";

export type MemberStatusType = "active" | "inactive" | "all";

type UserProfilesActionParams = {
    keyword: string;
    region: string;
    chapter: string;
    member_type: string;
    offset: number;
    limit: number;
    status: MemberStatusType;
};

export async function getUserProfilesAction(params: UserProfilesActionParams) {
    "use cache";

    type MemberType = (typeof userprofiles.$inferSelect)["memberType"];

    const member_type = params.member_type as MemberType;
    const region = params.region;
    const chapter = params.chapter;

    let member_type_filter = eq(userprofiles.memberType, member_type);
    if (params.member_type === "all") {
        member_type_filter = like(userprofiles.memberType, "%%");
    }

    let regions_filter = eq(regions.code, region);
    if (params.region === "all") {
        regions_filter = eq(regions.code, "NL");
    } else if (params.region != "NL") {
        regions_filter = like(regions.code, "%xxx%");
    }

    let chapter_filter = eq(chapters.code, chapter);
    if (params.chapter === "all") {
        chapter_filter = like(chapters.code, "%%");
    }

    const today = new Date();
    let status_filter = sql`1 = 1`;
    if (params.status === "active") {
        status_filter = gt(userprofiles.membershipValidity, today);
    } else if (params.status === "inactive") {
        status_filter = lt(userprofiles.membershipValidity, today);
    }

    const search_logic = and(
        or(
            like(userprofiles.fname, `%${params.keyword}%`),
            like(userprofiles.mname, `%${params.keyword}%`),
            like(userprofiles.lname, `%${params.keyword}%`)
        ),
        regions_filter,
        chapter_filter,
        member_type_filter,
        status_filter
    );

    // const max_page = await db.$count(userprofiles, search_logic);
    const [max_page] = await db_old
        .select({ count: sql<number>`count(*)` })
        .from(userprofiles)
        .leftJoin(chapters, eq(userprofiles.chapter, chapters.pkChaptersId))
        .leftJoin(regions, eq(userprofiles.region, regions.pkRegionsId))
        .where(search_logic);

    const active_member = (
        await db_old
            .select({ membershipValidity: userprofiles.membershipValidity })
            .from(userprofiles)
            .leftJoin(chapters, eq(userprofiles.chapter, chapters.pkChaptersId))
            .leftJoin(regions, eq(userprofiles.region, regions.pkRegionsId))
            .where(search_logic)
    ).filter((row) => row.membershipValidity >= today).length;

    const inactive_member = (
        await db_old
            .select({ membershipValidity: userprofiles.membershipValidity })
            .from(userprofiles)
            .leftJoin(chapters, eq(userprofiles.chapter, chapters.pkChaptersId))
            .leftJoin(regions, eq(userprofiles.region, regions.pkRegionsId))
            .where(search_logic)
    ).filter((row) => row.membershipValidity < today).length;

    const members = (
        await db_old
            .select()
            .from(userprofiles)
            .leftJoin(chapters, eq(userprofiles.chapter, chapters.pkChaptersId))
            .leftJoin(regions, eq(userprofiles.region, regions.pkRegionsId))
            .where(search_logic)
            .orderBy(
                asc(userprofiles.lname),
                asc(userprofiles.fname),
                asc(userprofiles.mname)
            )
            .offset(params.offset)
            .limit(params.limit)
    ).map((row) => {
        return {
            userprofiles: row.userprofiles,
            chapter: row.chapters,
            region: row.regions,
        };
    });

    return {
        members,
        max_page: max_page.count,
        active_member,
        inactive_member,
    };
}
