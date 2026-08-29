"use server";

import { db_old } from "@/db/old";
import {
    chapters,
    regions,
    userlicense,
    userprofiles,
} from "@/db/old/drizzle/schema";
import { UserLicense } from "@/types";
import {
    and,
    asc,
    countDistinct,
    eq,
    exists,
    gt,
    gte,
    inArray,
    like,
    lt,
    lte,
    or,
    sql,
} from "drizzle-orm";

import { cacheLife, cacheTag, refresh, updateTag } from "next/cache";

export type MemberStatusType = "active" | "inactive" | "dormant" | "all";
export type LicenseType = "RME" | "REE" | "PEE" | "BSEE" | "all";

type UserProfilesActionParams = {
    keyword: string;
    region: string;
    chapter: string;
    member_type: string;
    license_type: LicenseType;
    offset: number;
    limit: number;
    status: MemberStatusType;
};

// export async function getUserProfilesAction(params: UserProfilesActionParams) {
//     "use cache";
//     cacheLife("minutes");

//     type MemberType = (typeof userprofiles.$inferSelect)["memberType"];
//     type LicenseDBType = (typeof userlicense.$inferSelect)["licenseType"];

//     const member_type = params.member_type as MemberType;
//     const region = params.region;
//     const chapter = params.chapter;
//     const license_type = params.license_type as LicenseDBType;

//     let member_type_filter = eq(userprofiles.memberType, member_type);
//     if (params.member_type === "all") {
//         member_type_filter = like(userprofiles.memberType, "%%");
//     }

//     let regions_filter = eq(regions.code, region);
//     if (params.region === "all") {
//         regions_filter = like(regions.code, "%%");
//     }

//     let chapter_filter = eq(chapters.code, chapter);
//     if (params.chapter === "all") {
//         chapter_filter = like(chapters.code, "%%");
//     }

//     let status_filter: any = sql`1 = 1`;
//     if (params.status === "active") {
//         status_filter = gt(userprofiles.membershipValidity, today);
//     } else if (params.status === "inactive") {
//         status_filter = and(
//             lt(userprofiles.membershipValidity, today),
//             gt(userprofiles.membershipValidity, date_2016),
//         );
//     } else if (params.status === "dormant") {
//         status_filter = lte(userprofiles.membershipValidity, date_2016);
//     }

//     let license_filter = like(userlicense.licenseType, "%%");
//     if (params.license_type != "all") {
//         license_filter = eq(userlicense.licenseType, license_type);
//     }

//     const searchColumns = [
//         userprofiles.fname,
//         userprofiles.mname,
//         userprofiles.lname,
//     ];

//     const keywords: string[] = params.keyword.split(" ");

//     const key_search_logic = keywords.map((keyword) =>
//         or(...searchColumns.map((col) => like(col, `%${keyword}%`))),
//     );

//     const search_logic = and(
//         ...key_search_logic,
//         regions_filter,
//         chapter_filter,
//         member_type_filter,
//         status_filter,
//         license_filter,
//     );

//     const active_member = await db_old
//         .select({ count: countDistinct(userprofiles.pkUserProfilesId) })
//         .from(userprofiles)
//         .leftJoin(chapters, eq(userprofiles.chapter, chapters.pkChaptersId))
//         .leftJoin(regions, eq(userprofiles.region, regions.pkRegionsId))
//         .leftJoin(
//             userlicense,
//             eq(userprofiles.pkUserProfilesId, userlicense.fkUserProfilesId),
//         )
//         .where(
//             and(
//                 search_logic,
//                 gte(userprofiles.membershipValidity, today),
//             ),
//         );

//     const inactive_member = await db_old
//         .select({ count: countDistinct(userprofiles.pkUserProfilesId) })
//         .from(userprofiles)
//         .leftJoin(chapters, eq(userprofiles.chapter, chapters.pkChaptersId))
//         .leftJoin(regions, eq(userprofiles.region, regions.pkRegionsId))
//         .leftJoin(
//             userlicense,
//             eq(userprofiles.pkUserProfilesId, userlicense.fkUserProfilesId),
//         )
//         .where(
//             and(
//                 search_logic,
//                 and(
//                     lt(userprofiles.membershipValidity, today),
//                     gt(userprofiles.membershipValidity, date_2016),
//                 ),
//             ),
//         );

//     const dormant_member = await db_old
//         .select({ count: countDistinct(userprofiles.pkUserProfilesId) })
//         .from(userprofiles)
//         .leftJoin(chapters, eq(userprofiles.chapter, chapters.pkChaptersId))
//         .leftJoin(regions, eq(userprofiles.region, regions.pkRegionsId))
//         .leftJoin(
//             userlicense,
//             eq(userprofiles.pkUserProfilesId, userlicense.fkUserProfilesId),
//         )
//         .where(
//             and(
//                 search_logic,
//                 lte(userprofiles.membershipValidity, date_2016),
//             ),
//         );

//     const members: {
//         userlicense: UserLicense[] | null;
//         userprofiles: UserProfile;
//         chapter: MemberChapters | null;
//         region: MemberRegions | null;
//     }[] = (
//         await db_old
//             .select({
//                 userprofiles: userprofiles,
//                 chapters: chapters,
//                 regions: regions,
//             })
//             .from(userprofiles)
//             .leftJoin(chapters, eq(userprofiles.chapter, chapters.pkChaptersId))
//             .leftJoin(regions, eq(userprofiles.region, regions.pkRegionsId))
//             .leftJoin(
//                 userlicense,
//                 eq(userprofiles.pkUserProfilesId, userlicense.fkUserProfilesId),
//             )
//             .where(search_logic)
//             .orderBy(
//                 asc(userprofiles.lname),
//                 asc(userprofiles.fname),
//                 asc(userprofiles.mname),
//             )
//             .offset(params.offset)
//             .limit(params.limit)
//             .groupBy(userprofiles.pkUserProfilesId)
//     ).map((row) => {
//         return {
//             userlicense: null,
//             userprofiles: row.userprofiles,
//             chapter: row.chapters,
//             region: row.regions,
//         };
//     });

//     for (let member of members) {
//         member.userlicense = await getUserLicenseInfo(
//             member.userprofiles.pkUserProfilesId,
//         );
//     }

//     const max_page =
//         active_member[0].count +
//         inactive_member[0].count +
//         dormant_member[0].count;

//     return {
//         members,
//         max_page: max_page,
//         active_member: active_member[0].count,
//         inactive_member: inactive_member[0].count,
//         dormant_member: dormant_member[0].count,
//     };
// }

export async function getUserProfilesAction(params: UserProfilesActionParams) {
    "use cache";
    cacheTag("members-table-data");
    cacheLife("weeks");

    type MemberType = (typeof userprofiles.$inferSelect)["memberType"];
    type LicenseDBType = (typeof userlicense.$inferSelect)["licenseType"];

    const today = new Date();
    const date_2016 = new Date("2016-01-01");

    const member_type = params.member_type as MemberType;
    const license_type = params.license_type as LicenseDBType;

    // Only add a filter when it's actually restrictive — "all" means "no filter", not "LIKE '%%'"
    const member_type_filter =
        params.member_type === "all"
            ? undefined
            : eq(userprofiles.memberType, member_type);

    const regions_filter =
        params.region === "all" ? undefined : eq(regions.code, params.region);

    const chapter_filter =
        params.chapter === "all"
            ? undefined
            : eq(chapters.code, params.chapter);

    let status_filter;
    if (params.status === "active") {
        status_filter = gte(userprofiles.membershipValidity, today);
    } else if (params.status === "inactive") {
        status_filter = and(
            lt(userprofiles.membershipValidity, today),
            gt(userprofiles.membershipValidity, date_2016),
        );
    } else if (params.status === "dormant") {
        status_filter = lte(userprofiles.membershipValidity, date_2016);
    }

    // License filter as EXISTS subquery instead of a join — avoids row fan-out
    const license_filter =
        params.license_type === "all"
            ? undefined
            : exists(
                  db_old
                      .select({ one: sql`1` })
                      .from(userlicense)
                      .where(
                          and(
                              eq(
                                  userlicense.fkUserProfilesId,
                                  userprofiles.pkUserProfilesId,
                              ),
                              eq(userlicense.licenseType, license_type),
                          ),
                      ),
              );

    const searchColumns = [
        userprofiles.fname,
        userprofiles.mname,
        userprofiles.lname,
    ];
    const keywords = params.keyword.split(" ").filter(Boolean);

    const key_search_logic = keywords.map((keyword) =>
        or(...searchColumns.map((col) => like(col, `%${keyword}%`))),
    );

    // Base filters shared by counts + list (status excluded — counts need per-bucket status)
    const base_filters = [
        ...key_search_logic,
        regions_filter,
        chapter_filter,
        member_type_filter,
        license_filter,
    ].filter(Boolean);

    const search_logic = and(...base_filters, status_filter);

    // --- ONE query for all three counts instead of three separate scans ---
    const countsQuery = db_old
        .select({
            active: countDistinct(
                sql`CASE WHEN ${userprofiles.membershipValidity} >= ${today} THEN ${userprofiles.pkUserProfilesId} END`,
            ),
            inactive: countDistinct(
                sql`CASE WHEN ${userprofiles.membershipValidity} < ${today} AND ${userprofiles.membershipValidity} > ${date_2016} THEN ${userprofiles.pkUserProfilesId} END`,
            ),
            dormant: countDistinct(
                sql`CASE WHEN ${userprofiles.membershipValidity} <= ${date_2016} THEN ${userprofiles.pkUserProfilesId} END`,
            ),
        })
        .from(userprofiles)
        .leftJoin(chapters, eq(userprofiles.chapter, chapters.pkChaptersId))
        .leftJoin(regions, eq(userprofiles.region, regions.pkRegionsId))
        .where(search_logic); // status excluded here — we're bucketing by status ourselves

    // --- Members page query — no userlicense join/groupBy needed anymore ---
    const membersQuery = db_old
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
        .offset(params.offset)
        .limit(params.limit);

    const [countsResult, memberRows] = await Promise.all([
        countsQuery,
        membersQuery,
    ]);

    const memberIds = memberRows.map((r) => r.userprofiles.pkUserProfilesId);

    // --- ONE query for all licenses instead of N sequential ones ---
    const allLicenses = memberIds.length
        ? await db_old
              .select()
              .from(userlicense)
              .where(inArray(userlicense.fkUserProfilesId, memberIds))
        : [];

    const licensesByUser = new Map<number, typeof allLicenses>();
    for (const lic of allLicenses) {
        const arr = licensesByUser.get(lic.fkUserProfilesId) ?? [];
        arr.push(lic);
        licensesByUser.set(lic.fkUserProfilesId, arr);
    }

    const members = memberRows.map((row) => ({
        userlicense:
            licensesByUser.get(row.userprofiles.pkUserProfilesId) ?? [],
        userprofiles: row.userprofiles,
        chapter: row.chapters,
        region: row.regions,
    }));

    const { active, inactive, dormant } = countsResult[0];
    const max_page = active + inactive + dormant;

    return {
        members,
        max_page,
        active_member: active,
        inactive_member: inactive,
        dormant_member: dormant,
    };
}

export async function reloadMembersTable() {
    updateTag("members-table-data");
    updateTag("sanitize-remarks");

    refresh();
}

export async function getRegionChapters(region_code: string) {
    "use cache";
    cacheLife("weeks");

    if (region_code === "all") {
        const chapters_list = await db_old
            .select()
            .from(chapters)
            .orderBy(asc(chapters.description));

        return chapters_list;
    }

    const region_info = await db_old
        .select()
        .from(regions)
        .where(eq(regions.code, region_code));

    const chapters_list = await db_old
        .select()
        .from(chapters)
        .where(eq(chapters.fkRegionsId, region_info[0].pkRegionsId))
        .orderBy(asc(chapters.description));

    return chapters_list;
}

async function getUserLicenseInfo(
    pk_userprofiles_id: number,
): Promise<UserLicense[] | null> {
    "use cache";
    cacheLife("minutes");

    const data = await db_old
        .select()
        .from(userlicense)
        .where(eq(userlicense.fkUserProfilesId, pk_userprofiles_id));

    if (data.length > 0) {
        return data;
    }

    return null;
}
