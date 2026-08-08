import { db_old } from "@/db/old";
import {
    chapters,
    cities,
    countries,
    provinces,
    userlicense,
    userpositions,
    userprofiles,
} from "@/db/old/drizzle/schema";
import type { CogsRequest, UserProfile } from "@/types";
import { eq } from "drizzle-orm";
import Image from "next/image";

export default async function CertificateNew({
    requestor,
    request,
}: {
    requestor: UserProfile;
    request: CogsRequest;
}) {
    if (request.cogs_exp_date === null) {
        return;
    }

    const city = (
        await db_old
            .select()
            .from(cities)
            .where(eq(cities.pkCitiesId, requestor.fkCitiesId))
    )[0];

    const province = (
        await db_old
            .select()
            .from(provinces)
            .where(eq(provinces.pkProvinces, requestor.fkProvincesId))
    )[0];

    const country = (
        await db_old
            .select()
            .from(countries)
            .where(eq(countries.pkCountriesId, requestor.fkCountriesId))
    )[0];

    const chapter = (
        await db_old
            .select()
            .from(chapters)
            .where(eq(chapters.pkChaptersId, Number(requestor.chapter)))
    )[0];

    const licence = (
        await db_old
            .select()
            .from(userlicense)
            .where(eq(userlicense.fkUserProfilesId, requestor.pkUserProfilesId))
    )[0];

    const nat_sec = await db_old
        .select({ userprofiles: userprofiles })
        .from(userpositions)
        .leftJoin(
            userprofiles,
            eq(userprofiles.pkUserProfilesId, userpositions.fkUserProfilesId),
        )
        .where(eq(userpositions.fkPositionsId, 5));

    const nat_pres = await db_old
        .select({ userprofiles: userprofiles })
        .from(userpositions)
        .leftJoin(
            userprofiles,
            eq(userprofiles.pkUserProfilesId, userpositions.fkUserProfilesId),
        )
        .where(eq(userpositions.fkPositionsId, 1));

    return (
        <div
            id="certificate"
            className="w-full max-w-4xl"
            style={{
                width: "210mm",
                height: "297mm",
                padding: "10mm",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
        >
            <div className="flex justify-between gap-5 items-center mb-15 relative">
                <div className=" top-[20px] left-0 absolute">
                    <Image
                        src={
                            "https://membership.iiee.org.ph/ee/assets/img/client-logo.png"
                        }
                        className="w-[110px]"
                        height={100}
                        width={100}
                        alt={"logo"}
                    />
                </div>
                <div className="text-center text-black font-bold w-full">
                    <h2 className="text-xl  font-[serif] uppercase">
                        Institute of Integrated Electrical Engineers
                        <br /> of the Philippines, Inc.
                    </h2>
                    <div className="text-xs">
                        <p className=" font-[serif]">PRC Cert. No. I-APO-016</p>
                        <p className="">
                            41 Monte de Piedad Street, Cubao, Quezon City, Metro
                            Manila 1111
                        </p>
                        <p className="">
                            Tel Nos.: 8477-4408, 8477-4074, 8477-4098, 8477-2561
                        </p>
                    </div>
                </div>
            </div>

            {/* <Separator className="my-4" /> */}
            <div className="w-full">
                <div className="flex justify-between">
                    <div className="text-sm text-gray-700">
                        Date:{" "}
                        <span className="underline font-bold">
                            {Intl.DateTimeFormat("en-PH", {
                                month: "long",
                                day: "2-digit",
                                year: "numeric",
                            }).format(Date.now())}
                        </span>
                    </div>
                    <div>
                        CGS No.:{" "}
                        <span className="underline font-bold">0003599</span>
                    </div>
                </div>
            </div>
            <div className="text-center my-10">
                <h1 className="text-2xl font-bold tracking-widest mt-2">
                    CERTIFICATE OF GOOD STANDING
                </h1>
            </div>
            <div className=" text-justify text-sm leading-[3]">
                <p className="uppercase font-semibold text-lg mb-2">
                    To Whom It May Concern:
                </p>
                <div className="italic">
                    <div className="mb-3">
                        This is to certify that{" "}
                        <span className="underline not-italic font-bold">
                            {`${requestor.fname} ${requestor.mname} ${requestor.lname}`.toUpperCase()}
                        </span>{" "}
                        from{" "}
                        <span className="font-bold uppercase underline not-italic">
                            {requestor.barangay}, {city.description},{" "}
                            {province.description}, {country.description}{" "}
                        </span>
                        of{" "}
                        <span className="font-bold uppercase underline not-italic">
                            {chapter.description}
                        </span>{" "}
                        Chapter with PRC Registration No.{" "}
                        <span className="font-bold uppercase underline not-italic">
                            {/* REE 14549,PEE 5286 */}
                            {licence.licenseType} {licence.licenseNo}
                        </span>{" "}
                        {/* <pre>{JSON.stringify(licence, null, 2)}</pre> */}
                        is an active{" "}
                        <span className="font-bold uppercase underline not-italic">
                            {requestor.memberType}
                        </span>{" "}
                        member of the Institute of Integrated Electrical
                        Engineers of the Philippines, Inc. (IIEE).
                    </div>
                    <div>
                        This certification is issued upon the request of Mr./Ms.{" "}
                        <span className="font-bold uppercase underline not-italic">
                            {requestor.lname}
                        </span>{" "}
                        for the purpose of renewing the professional
                        identification card as PEE/REE/RME issued by the
                        Professional Regulation Commission or until the same
                        earlier ordered suspended or revoked by the issuing
                        authority.
                    </div>
                </div>
            </div>
            <div className="flex gap-20 mt-15 mb-10">
                <div className="flex flex-col items-center w-full">
                    <div className="font-bold border-b-2 border-black w-full text-center">
                        {nat_sec[0].userprofiles?.fname}{" "}
                        {nat_sec[0].userprofiles?.mname}{" "}
                        {nat_sec[0].userprofiles?.lname}
                    </div>
                    <div className="font-semibold">National Secretary</div>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="font-bold border-b-2 border-black w-full text-center">
                        {nat_pres[0].userprofiles?.fname}{" "}
                        {nat_pres[0].userprofiles?.mname}{" "}
                        {nat_pres[0].userprofiles?.lname}
                    </div>
                    <div className="font-semibold">National President</div>
                </div>
            </div>

            <div>RELEASED BY:</div>
            <div className="flex gap-20 my-10 ">
                <div className="flex flex-col items-center  w-full">
                    <div className="font-bold border-b-2 border-black w-full text-center">
                        ALMA C. LARCE
                    </div>
                    <div className="text-center text-xs ">
                        <div className="italic">
                            (Signature over printed name/ Designation)
                        </div>
                        <div className="font-semibold">Membership Head</div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full">QR CODE</div>
            </div>

            <div className="w-2/3 space-y-5">
                <div className="flex">
                    <div className="w-full">Validity Date of COGS:</div>
                    <div className="font-bold border-b-2 border-black w-full text-center leading-none">
                        March 31, 2027
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full">Validity Date of Membership:</div>
                    <div className="font-bold border-b-2 border-black w-full text-center leading-none">
                        {Intl.DateTimeFormat("en-PH", {
                            month: "long",
                            day: "2-digit",
                            year: "numeric",
                        }).format(requestor.membershipValidity)}
                    </div>
                </div>
            </div>
        </div>
    );
}
