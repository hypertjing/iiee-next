import { getUser, getUserPositionCode } from "@/app/lib/dal";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { db_new } from "@/db/new";
import { cogsrequest } from "@/db/new/schema";
import { CogsRequest } from "@/types";
import { format } from "date-fns";
import { eq } from "drizzle-orm";
import { Dot } from "lucide-react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { StatusBadge } from "../[request_id]/StatusBadge";
import UserInfo from "./UserInfo";
import ViewDetailsButton from "./ViewDetailsButton";

export default async function RequestsTable({
    requests,
}: {
    requests: CogsRequest[];
}) {
    const user = await getUser();

    if (!user) {
        return <div>Loading...</div>;
    }

    const user_position = await getUserPositionCode();

    if (!user) {
        return <div>Loading user info...</div>;
    }

    async function markRequestAsViewed(requestId: number) {
        "use server";

        // await new Promise((resolve) => setTimeout(resolve, 5000));

        if (user_position == "P1") {
            await db_new
                .update(cogsrequest)
                .set({ viewed: true })
                .where(eq(cogsrequest.id, requestId));
            revalidatePath("/cogs");
        } else {
            await db_new
                .update(cogsrequest)
                .set({ response_viewed: true })
                .where(eq(cogsrequest.id, requestId));
            revalidatePath("/cogs");
        }

        console.log("marked");
        redirect(`/cogs/${requestId}`);
    }

    return (
        <>
            <Table>
                <TableCaption>All submitted COGS requests.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Requestor</TableHead>
                        <TableHead>Amount Due</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date Requested</TableHead>
                        <TableHead>Date Modified</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {requests.map((req) => (
                        <TableRow key={req.id}>
                            {/* <TableCell>{req.id}</TableCell> */}
                            <TableCell>
                                <div className="flex items-center">
                                    <Suspense
                                        fallback={
                                            <Skeleton className="h-5 w-[150px]" />
                                        }
                                    >
                                        <UserInfo user_id={req.user_id} />
                                    </Suspense>
                                    {!req.viewed && (
                                        <Dot
                                            size={50}
                                            className="animate-pulse text-red-500"
                                        />
                                    )}
                                </div>
                            </TableCell>
                            {/* <TableCell>₱{req.amount_due}</TableCell> */}
                            <TableCell>Free</TableCell>

                            <TableCell>
                                <StatusBadge status={req.status} />
                            </TableCell>
                            <TableCell>
                                {req.created_at
                                    ? format(
                                          new Date(req.created_at),
                                          "MMM d, yyyy hh:mm a",
                                      )
                                    : "—"}
                            </TableCell>
                            <TableCell>
                                {req.updated_at
                                    ? format(
                                          new Date(req.updated_at),
                                          "MMM d, yyyy hh:mm a",
                                      )
                                    : "—"}
                            </TableCell>
                            <TableCell>
                                {/* <Link href={``}> */}
                                <ViewDetailsButton
                                    request={req}
                                    onViewAction={markRequestAsViewed}
                                />
                                {/* </Link> */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
