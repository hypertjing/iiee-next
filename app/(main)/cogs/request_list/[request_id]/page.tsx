import { Button } from "@/components/ui/button";
import { db_new } from "@/db/new";
import { cogsrequest } from "@/db/new/schema";
import { db_old } from "@/db/old";
import { userprofiles } from "@/db/old/drizzle/schema";
import { format } from "date-fns";
import { eq } from "drizzle-orm";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StatusBadge } from "./StatusBadge";

export default async function RequestDetailsPage({
    params,
}: {
    params: { request_id: number };
}) {
    const requestId = params.request_id;

    const request = (
        await db_new
            .select()
            .from(cogsrequest)
            .where(eq(cogsrequest.id, requestId))
    )[0];

    if (!request) {
        return <div className="p-4">Request not found.</div>;
    }

    const user = (
        await db_old
            .select()
            .from(userprofiles)
            .where(eq(userprofiles.fkUserAccountsId, request.user_id))
            .limit(1)
    )[0];

    const update_res = await db_new
        .update(cogsrequest)
        .set({ viewed: true })
        .where(eq(cogsrequest.id, requestId));

    return (
        <>
            <div>
                <div className="flex justify-start mb-5">
                    <Link href="/cogs/request_list">
                        <Button size="icon" variant="ghost">
                            <ChevronLeft />
                        </Button>
                    </Link>
                </div>
                <div className="px-5">
                    <div className="text-3xl">
                        {user.fname} {user.mname} {user.lname}
                    </div>
                    <div className="mb-5 text-gray-500">
                        <div>
                            {request.created_at
                                ? format(
                                      new Date(request.created_at),
                                      "MMM d, yyyy hh:mm a"
                                  )
                                : "—"}
                        </div>
                        <div className="text-sm italic">
                            Updated:{" "}
                            {request.created_at
                                ? format(
                                      new Date(request.created_at),
                                      "MMM d, yyyy hh:mm a"
                                  )
                                : "—"}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        <p>
                            <span className="text-gray-600">Status:</span>{" "}
                            <StatusBadge status={request.status} />
                        </p>
                        <p>
                            <span className="text-gray-600">Amount Due:</span>{" "}
                            <span className="text-orange-500 font-semibold text-xl">
                                ₱{request.amount_due}
                            </span>
                        </p>
                        <p>
                            <span className="text-gray-600">OR Number:</span>{" "}
                            {request.or_number ?? "—"}
                        </p>
                        <p>
                            <span className="text-gray-600">OR Date:</span>{" "}
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
                                      }
                                  )
                                : "—"}
                        </p>
                        <p>
                            <span className="text-gray-600">Remarks:</span>{" "}
                            {request.remarks ?? "—"}
                        </p>
                        <p>
                            <span className="text-gray-600">Approved By:</span>{" "}
                            {request.approved_by ?? "—"}
                        </p>
                        <p>
                            <span className="text-gray-600">Approved At:</span>{" "}
                            {request.approved_at
                                ? new Date(request.approved_at).toLocaleString()
                                : "—"}
                        </p>
                    </div>
                    <div className="mb-20">
                        <div className="mb-5 font-semibold">
                            Uploaded Certificates
                        </div>
                        <div className="flex gap-6 flex-wrap mt-3">
                            {request.certificate_gmm_file_url ? (
                                <Image
                                    src={request.certificate_gmm_file_url}
                                    width={300}
                                    height={300}
                                    alt="GMM Certificate"
                                    className="rounded-lg shadow-md border"
                                />
                            ) : (
                                <p>No GMM Certificate uploaded.</p>
                            )}
                            {request.certificate_activity_file_url ? (
                                <Image
                                    src={request.certificate_activity_file_url}
                                    width={300}
                                    height={300}
                                    alt="Activity Certificate"
                                    className="rounded-lg shadow-md border"
                                />
                            ) : (
                                <p>No Activity Certificate uploaded.</p>
                            )}
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
                    <div>
                        <Button className="bg-red-600">Decline</Button>
                        <Button className="bg-green-600">Approve</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
