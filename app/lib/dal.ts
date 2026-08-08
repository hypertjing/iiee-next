import "server-only";

import { decrypt } from "@/app/lib/session";
import { db_old } from "@/db/old";
import {
    cities,
    citiesRegion,
    countries,
    positions,
    provinces,
    useraccounts,
    userpositions,
    userprofiles,
} from "@/db/old/drizzle/schema";
import { eq } from "drizzle-orm";
import { cacheLife } from "next/cache";
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

async function getUserInfo(session: {
    isAuth: boolean;
    userId: {};
    userProfileId: unknown;
}) {
    "use cache";
    cacheLife("minutes");

    const userProfileId: number = session.userProfileId as number;
    const userId: number = session.userId as number;

    const accountdb = await db_old
        .select()
        .from(useraccounts)
        .where(eq(useraccounts.pkUserAccountsId, userId));

    const account = accountdb[0];

    const data = await db_old
        .select()
        .from(userprofiles)
        .where(eq(userprofiles.pkUserProfilesId, userProfileId));

    const userprofile = data[0];

    const user_position_pivot = (
        await db_old
            .select()
            .from(userpositions)
            .where(eq(userpositions.fkUserProfilesId, userProfileId))
    )[0];

    // let position: Position | null;
    // if (!user_position_pivot) {
    //     position = null;
    // } else {
    //     position = (
    //         await db_old
    //             .select()
    //             .from(positions)
    //             .where(
    //                 eq(
    //                     positions.pkPositionsId,
    //                     user_position_pivot.fkPositionsId,
    //                 ),
    //             )
    //     )[0];
    // }

    const position = (
        await db_old
            .select()
            .from(positions)
            .where(
                eq(positions.pkPositionsId, user_position_pivot.fkPositionsId),
            )
    )[0];

    if (!account || !userprofile) {
        return null;
    }

    return { userprofile, account, position };
}

export const getUser = cache(async () => {
    const session = await verifySession();
    if (!session) return null;

    const user_info = await getUserInfo(session);

    if (user_info === null) {
        return null;
    }

    return {
        userprofile: user_info.userprofile,
        account: user_info.account,
        position: user_info.position,
    };
});

export async function getUserPositionCode(userProfileId: number) {
    "use cache";
    cacheLife("hours");
    const user_position_pivot = (
        await db_old
            .select()
            .from(userpositions)
            .where(eq(userpositions.fkUserProfilesId, userProfileId))
    )[0];

    if (!user_position_pivot) {
        return "no_position"; // could be admin
    }

    const position = (
        await db_old
            .select()
            .from(positions)
            .where(
                eq(positions.pkPositionsId, user_position_pivot.fkPositionsId),
            )
    )[0];

    return position.code;

    // "use cache";
    // const user = await getUser();

    // if (user) {
    //     const user_position = user.position?.code;

    //     return user_position;
    // }
}

export async function getUserPermanentAddress(userId?: number) {
    const auth = await getUser();
    if (!auth) return null;

    const userIdFinal = userId ? userId : auth.userprofile.pkUserProfilesId;

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
            .where(eq(userprofiles.pkUserProfilesId, userIdFinal))
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
