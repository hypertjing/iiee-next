import "server-only";

import { decrypt } from "@/app/lib/session";
import { db_old } from "@/db/old";
import {
    chapters,
    cities,
    citiesRegion,
    countries,
    licenseType,
    provinces,
    regions,
    useraccounts,
    userlicense,
    userprofiles,
} from "@/db/old/drizzle/schema";
import { isExpired } from "@/lib/utils";
import { LicenseCodeType, MemberStatus, MemberType, User } from "@/types";
import { asc, desc, eq } from "drizzle-orm";
import { cacheLife, cacheTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connection } from "next/server";
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

export async function getUserAccount(account_id: number) {
    const accountdb = await db_old
        .select()
        .from(useraccounts)
        .where(eq(useraccounts.pkUserAccountsId, account_id));

    const account = accountdb[0];

    return account;
}

export async function getUserProfile(profile_id: number) {
    const user_profile_db = await db_old
        .select()
        .from(userprofiles)
        .where(eq(userprofiles.pkUserProfilesId, profile_id));

    const userprofile = user_profile_db[0];

    return userprofile;
}

async function getUserInfo(session: {
    isAuth: boolean;
    userId: {};
    userProfileId: unknown;
}) {
    "use cache";
    cacheLife("hours");
    cacheTag("user-info");

    const userProfileId: number = session.userProfileId as number;
    const userId: number = session.userId as number;

    const account = await getUserAccount(userId);

    if (
        account.fkUserProfilesId == 0 ||
        account.akUserAccountsType == "ADMIN"
    ) {
        return { account };
    }

    const userprofile = await getUserProfile(userProfileId);

    return { account, userprofile };
}

export const getUser = async () => {
    const session = await verifySession();
    if (!session) return null;

    const user_info = await getUserInfo(session);

    return {
        account: user_info.account,
        userprofile: user_info.userprofile,
    };
};

export async function getAuthId() {
    const session = await verifySession();
    if (!session) return null;

    const userId: number = session.userId as number;

    return userId;
}

// export async function getUserPositionCode(userProfileId: number) {
//     "use cache";
//     cacheLife("hours");
//     const user_position_pivot = (
//         await db_old
//             .select()
//             .from(userpositions)
//             .where(eq(userpositions.fkUserProfilesId, userProfileId))
//     )[0];

//     if (!user_position_pivot) {
//         return "no_position"; // could be admin
//     }

//     const position = (
//         await db_old
//             .select()
//             .from(positions)
//             .where(
//                 eq(positions.pkPositionsId, user_position_pivot.fkPositionsId),
//             )
//     )[0];

//     return position.code;

//     // "use cache";
//     // const user = await getUser();

//     // if (user) {
//     //     const user_position = user.position?.code;

//     //     return user_position;
//     // }
// }

export async function getUserMailingAddress(profile_id: number) {
    const userprofile = (
        await db_old
            .select({
                userprofiles: userprofiles,
                cities: cities,
                provinces: provinces,
                countries: countries,
            })
            .from(userprofiles)
            .leftJoin(
                citiesRegion,
                eq(userprofiles.fkRegionIdM, citiesRegion.pkRegionsId),
            )
            .leftJoin(cities, eq(userprofiles.fkCitiesIdM, cities.pkCitiesId))
            .leftJoin(
                provinces,
                eq(userprofiles.fkProvincesIdM, provinces.pkProvinces),
            )
            .leftJoin(
                countries,
                eq(userprofiles.fkCountriesIdM, countries.pkCountriesId),
            )
            .where(eq(userprofiles.pkUserProfilesId, profile_id))
    )[0];

    return {
        all: `${userprofile.userprofiles.address} Brgy. ${userprofile.userprofiles.barangay}, ${userprofile.cities?.description} ${userprofile.userprofiles.zipCode}, ${userprofile.provinces?.description} ${userprofile.countries?.description}`,
        address: userprofile.userprofiles.address,
        barangay: userprofile.userprofiles.barangay,
        city: userprofile.cities?.description,
        province: userprofile.provinces?.description,
        country: userprofile.countries?.description,
        zipCode: userprofile.userprofiles.zipCode,
    };
}

export async function getUserPermanentAddress(profile_id: number) {
    const userprofile = (
        await db_old
            .select({
                userprofiles: userprofiles,
                cities: cities,
                provinces: provinces,
                countries: countries,
            })
            .from(userprofiles)
            .leftJoin(
                citiesRegion,
                eq(userprofiles.fkRegionId, citiesRegion.pkRegionsId),
            )
            .leftJoin(cities, eq(userprofiles.fkCitiesId, cities.pkCitiesId))
            .leftJoin(
                provinces,
                eq(userprofiles.fkProvincesId, provinces.pkProvinces),
            )
            .leftJoin(
                countries,
                eq(userprofiles.fkCountriesId, countries.pkCountriesId),
            )
            .where(eq(userprofiles.pkUserProfilesId, profile_id))
    )[0];

    return {
        all: `${userprofile.userprofiles.address} Brgy. ${userprofile.userprofiles.barangay}, ${userprofile.cities?.description} ${userprofile.userprofiles.zipCode}, ${userprofile.provinces?.description} ${userprofile.countries?.description}`,
        address: userprofile.userprofiles.address,
        barangay: userprofile.userprofiles.barangay,
        city: userprofile.cities?.description,
        province: userprofile.provinces?.description,
        country: userprofile.countries?.description,
        zipCode: userprofile.userprofiles.zipCode,
    };
}

export async function getUserLatestLicense(profile_id: number) {
    const license = await db_old
        .select()
        .from(userlicense)
        .leftJoin(licenseType, eq(licenseType.code, userlicense.licenseType))
        .where(eq(userlicense.fkUserProfilesId, profile_id))
        .orderBy(desc(licenseType.seqNo))
        .limit(1);

    return license[0];
}

export async function getUserLicenses(profile_id: number) {
    const licenses = await db_old
        .select()
        .from(userlicense)
        .leftJoin(licenseType, eq(licenseType.code, userlicense.licenseType))
        .orderBy(desc(licenseType.seqNo))
        .where(eq(userlicense.fkUserProfilesId, profile_id));

    return licenses;
}

export async function mapLicenseType(type: LicenseCodeType) {
    const license_type = await db_old
        .select()
        .from(licenseType)
        .where(eq(licenseType.code, type))
        .limit(1);

    return license_type[0];
}

type MembershipInfoReturnType = Promise<{
    membership_no: string;
    membership_type: MemberType;
    membership_date_reg: Date;
    membership_validity: Date;
    membership_date_updated: Date;
    membership_chapter: string;
    membership_region: string;
    membership_status: MemberStatus;
}>;
export async function getUserMembershipInfo(
    profile_id: number,
): MembershipInfoReturnType {
    const date_2016 = new Date("2016-01-01");

    const userprofile = (
        await db_old
            .select()
            .from(userprofiles)
            .where(eq(userprofiles.pkUserProfilesId, profile_id))
            .limit(1)
    )[0];

    const chapter = (
        await db_old
            .select()
            .from(chapters)
            .where(eq(chapters.pkChaptersId, Number(userprofile.chapter)))
            .limit(1)
    )[0];

    const region = (
        await db_old
            .select()
            .from(regions)
            .where(eq(regions.pkRegionsId, Number(userprofile.region)))
            .limit(1)
    )[0];

    let membership_status: MemberStatus = isExpired(
        userprofile.membershipValidity,
    )
        ? "Inactive"
        : "Active";

    if (userprofile.membershipValidity <= date_2016) {
        membership_status = "Dormant";
    }

    return {
        membership_no: userprofile.membershipNo,
        membership_type: userprofile.memberType,
        membership_date_reg: userprofile.membershipDateReg,
        membership_validity: userprofile.membershipValidity,
        membership_date_updated: userprofile.membershipDateUpdated,
        membership_chapter: chapter ? chapter.description : "N/A",
        membership_region: region ? region.description : "N/A",
        membership_status: membership_status,
    };
}

export async function isMembershipExpired(user: User) {
    await connection();
    const date_now = new Date(Date.now());
    if (!user.userprofile) {
        return false;
    }

    return date_now > user.userprofile.membershipValidity;
}

export async function getAllRegions() {
    "use cache";
    cacheLife("weeks");

    const regions_list = await db_old
        .select()
        .from(regions)
        .orderBy(asc(regions.description));

    return regions_list;
}
