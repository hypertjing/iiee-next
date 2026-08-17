import { getUser } from "@/app/lib/dal";
import BackButton from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import { db_new } from "@/db/new";
import { cogsrequest } from "@/db/new/schema";
import { db_old } from "@/db/old";
import { userprofiles } from "@/db/old/drizzle/schema";
import { format } from "date-fns";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { Suspense } from "react";
import UserInfo from "../components/UserInfo";
import { StatusBadge } from "./StatusBadge";
import { ApproveButton } from "./components/ApproveButton";

export default async function RequestDetailsPage({
    params,
}: {
    params: Promise<{ request_id: number }>;
}) {
    const user = await getUser();

    if (!user) {
        return <div>Loading...</div>;
    }

    // const user_position = user.poistion?.code;

    const requestId = (await params).request_id;

    const request = (
        await db_new
            .select()
            .from(cogsrequest)
            .where(eq(cogsrequest.id, requestId))
    )[0];

    if (!request) {
        return <div className="p-4">Request not found.</div>;
    }

    const requestor = (
        await db_old
            .select()
            .from(userprofiles)
            .where(eq(userprofiles.fkUserAccountsId, request.user_id))
            .limit(1)
    )[0];

    request.amount_due = "0";
    // await sleep(1000);
    const allowed_positions = ["NP", "ChapterPresidents"];

    const user_position_code = user.account.fkUserControlCode;

    const allowed_to_approve_cogs_request =
        allowed_positions.includes(user_position_code);

    return (
        <>
            <div>
                <div className="flex justify-start mb-5">
                    <Link href="/cogs">
                        <BackButton />
                    </Link>
                </div>
                {request.status == "Approved" &&
                    request.user_id == user.account.pkUserAccountsId && (
                        // <div className="inline-block underline text-blue-600 m-5 cursor-pointer">
                        <Link
                            href={`/cogs/${requestId}/view`}
                            className="inline-block underline text-blue-600 m-5 cursor-pointer"
                        >
                            View your COGS
                        </Link>
                        // </div>
                    )}
                <div className="px-5">
                    <div className="text-3xl">
                        {requestor.fname} {requestor.mname} {requestor.lname}
                    </div>
                    <div className="mb-5 text-gray-500">
                        <div>
                            {request.created_at
                                ? format(
                                      new Date(request.created_at),
                                      "MMM d, yyyy hh:mm a",
                                  )
                                : "—"}
                        </div>
                        <div className="text-sm italic">
                            Updated:{" "}
                            {request.updated_at
                                ? format(
                                      new Date(request.updated_at),
                                      "MMM d, yyyy hh:mm a",
                                  )
                                : "—"}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-gray-600">
                        <p>
                            <span className="">Status:</span>{" "}
                            <StatusBadge status={request.status} />
                        </p>
                        <p>
                            <span className="">Amount Due:</span>{" "}
                            <span className="text-orange-500 font-semibold text-xl">
                                {Number(request.amount_due) <= 0 ? (
                                    <span className="text-green-600">Free</span>
                                ) : (
                                    <>₱{request.amount_due}</>
                                )}
                            </span>
                        </p>
                        <p>
                            <span className="">OR Number:</span>{" "}
                            {request.or_number ?? "—"}
                        </p>
                        <p>
                            <span className="">OR Date:</span>{" "}
                            {request.or_date
                                ? new Date(request.or_date).toLocaleString(
                                      "en-US",
                                      {
                                          month: "short",
                                          day: "numeric",
                                          year: "numeric",
                                          hour: "numeric",
                                          minute: "numeric",
                                          second: "numeric",
                                          hour12: true,
                                      },
                                  )
                                : "—"}
                        </p>
                        <p>
                            <span className="">Remarks:</span>{" "}
                            {request.remarks ?? "—"}
                        </p>
                        <div className="flex gap-2">
                            <span className="">Approved By:</span>{" "}
                            {request.approved_by ? (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <UserInfo user_id={request.approved_by} />
                                </Suspense>
                            ) : (
                                "—"
                            )}
                        </div>
                        <p>
                            <span className="">Approved At:</span>{" "}
                            {request.approved_at
                                ? format(
                                      new Date(request.approved_at),
                                      "MMM d, yyyy hh:mm a",
                                  )
                                : "—"}
                        </p>
                    </div>
                    <div className="mb-20">
                        <div className="mb-5 font-semibold">
                            Uploaded Certificates
                        </div>
                        <div className="flex gap-6 flex-wrap mt-3">
                            <div>
                                <div className="mb-2 text-gray-600">
                                    GMM Certificate
                                </div>
                                {request.certificate_gmm_file_url ? (
                                    <img
                                        src={request.certificate_gmm_file_url}
                                        alt="GMM Certificate"
                                        className="w-[300px] rounded-lg duration-200 shadow-lg/30 hover:shadow-xl/40"
                                    />
                                ) : (
                                    <p className="p-5 text-amber-800 bg-amber-100 rounded-lg">
                                        No GMM Certificate uploaded.
                                    </p>
                                )}
                            </div>
                            <div>
                                <div className="mb-2 text-gray-600">
                                    Institute Activity Certificate
                                </div>
                                {request.certificate_activity_file_url ? (
                                    <img
                                        src={
                                            request.certificate_activity_file_url
                                        }
                                        alt="Activity Certificate"
                                        className="w-[300px] rounded-lg duration-200 shadow-lg/30 hover:shadow-xl/40"
                                    />
                                ) : (
                                    <p className="p-5 text-amber-800 bg-amber-100 rounded-lg">
                                        No institute activity certificate
                                        uploaded.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-5 font-semibold">
                            Answered Questions
                        </div>
                        <div className="list-disc pl-5 space-y-1 text-gray-600">
                            <div className="mb-5">
                                <div className="mb-1">
                                    1. Are you involved in any investigation for
                                    unethical practices of electrical
                                    engineering?
                                </div>{" "}
                                <div className="ms-3">
                                    {request.question1 ? "✅ Yes" : "❌ No"}
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="mb-1">
                                    2. Are you involved in any form of sanction,
                                    suspension, or disciplinary censure from
                                    your respective chapter and/or the
                                    institute?
                                </div>{" "}
                                <div className="ms-3">
                                    {request.question2 ? "✅ Yes" : "❌ No"}
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="mb-1">
                                    3. Do you abide by the provisions of the
                                    Professional Practice Manual?
                                </div>{" "}
                                <div className="ms-3">
                                    {request.question3 ? "✅ Yes" : "❌ No"}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-10 mb-20 justify-center">
                        {allowed_to_approve_cogs_request &&
                            request.status == "Pending" && (
                                <>
                                    <Button className="bg-red-600">
                                        Decline
                                    </Button>
                                    <ApproveButton request={request} />
                                </>
                            )}
                    </div>
                </div>
            </div>
        </>
    );
}
