import { getUserPermanentAddress } from "@/app/lib/dal";
import { db_new } from "@/db/new";
import { cogsrequest } from "@/db/new/schema";
import { db_old } from "@/db/old";
import { userlicense, userprofiles } from "@/db/old/drizzle/schema";
import { eq } from "drizzle-orm";
import Back from "./components/Back";
import CertificateNew from "./components/CertificateNew";
import DownloadButton from "./components/DownloadButton";

export default async function page({
    params,
}: {
    params: Promise<{ request_id: number }>;
}) {
    const { request_id } = await params;

    const request = (
        await db_new
            .select()
            .from(cogsrequest)
            .where(eq(cogsrequest.id, request_id))
    )[0];

    if (!request) {
        return <div className="p-4">Request not found.</div>;
    }

    if (request.cogs_exp_date === null) {
        return (
            <>
                <div className="flex justify-start mb-5">
                    <Back />
                </div>
                <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded">
                    <div className="mb-3 font-bold">Something went wrong</div>
                    <div className="text-sm">
                        Cannot view COGS. COGS Expiration Date not set.
                    </div>
                </div>
            </>
        );
    }

    const requestor = (
        await db_old
            .select()
            .from(userprofiles)
            .where(eq(userprofiles.fkUserAccountsId, request.user_id))
            .limit(1)
    )[0];

    const user_lisence = await db_old
        .select()
        .from(userlicense)
        .where(eq(userlicense.fkUserProfilesId, requestor.pkUserProfilesId));

    const user_address = await getUserPermanentAddress();

    return (
        <div>
            <div className="flex justify-start mb-5">
                <Back />
            </div>
            <div>
                {/* <pre>{JSON.stringify(request, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(requestor, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(user_lisence, null, 2)}</pre> */}
            </div>
            {/* <div className="p-10 border rounded-lg shadow-md">
                <div className="mb-10">
                    {format(new Date(request.created_at), "MMMM d, yyyy")}
                </div>
                <div className="text-4xl font-semibold">
                    {requestor.fname} {requestor.mname} {requestor.lname}
                </div>
                <div>{user_address?.all}</div>
                <div>
                    {user_lisence[0].licenseType} {user_lisence[0].licenseNo}{" "}
                    {format(
                        new Date(user_lisence[0].validityDate),
                        "MM/dd/yyyy"
                    )}
                </div>
            </div> */}
            <div className="text-center">
                <DownloadButton />
            </div>
            <div className="flex justify-center items-center mt-20">
                {/* <CertificateOld requestor={requestor} request={request} /> */}
                <CertificateNew requestor={requestor} request={request} />
            </div>
        </div>
    );
}
