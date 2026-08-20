import { getUser, isMembershipExpired } from "@/app/lib/dal";
import { Button } from "@/components/ui/button";
import { db_new } from "@/db/new";
import { cogsrequest } from "@/db/new/schema";
import { eq } from "drizzle-orm";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import RequestsTable from "./components/RequestsTable";

export const metadata: Metadata = {
    title: "COGS Request",
};

export default async function page() {
    // await sleep(2000);
    const user = await getUser();

    if (!user) {
        return <div>Loading...</div>;
    }

    if (!user.userprofile) {
        return;
    }

    const user_position_code = user.account.fkUserControlCode;

    const allowed_positions = [
        "NP",
        "Rgov",
        "ChapterPresidents",
        "Super Admin",
        "MCDC",
    ];

    const allowed_to_view_cogs_requests =
        allowed_positions.includes(user_position_code);

    const cogs_requests = await db_new.transaction(async (tx) => {
        let cogs_requests_temp;
        if (allowed_to_view_cogs_requests) {
            cogs_requests_temp = await tx.select().from(cogsrequest);
        } else {
            cogs_requests_temp = await tx
                .select()
                .from(cogsrequest)
                .where(eq(cogsrequest.user_id, user.account.pkUserAccountsId));
        }

        return cogs_requests_temp;
    });

    const expired_mem = await isMembershipExpired(user.userprofile);

    return (
        <div>
            <div className="flex justify-start items-center gap-2 mb-5 space-x-4">
                {expired_mem ? (
                    <Button
                        variant={"iieeblue"}
                        className="cursor-not-allowed "
                        disabled={expired_mem}
                    >
                        <Plus /> New Request
                    </Button>
                ) : (
                    <Link href="/cogs/create_request">
                        <Button variant={"iieeblue"}>
                            <Plus /> New Request
                        </Button>
                    </Link>
                )}
                {expired_mem && (
                    <div className="text-amber-700 text-sm border border-amber-400 rounded bg-amber-50 p-1 px-2">
                        Expired membership cannot request for cogs
                    </div>
                )}
                {/* {user_position == "P1" && (
                    <>
                        <Link href="/cogs/request_list">
                            <NotificationButton
                                count={10}
                                showDot={false}
                                component={<Bell className="h-5 w-5" />}
                            />
                        </Link>
                    </>
                )} */}
                {/* <Link href="/cogs/myrequests">
                    <NotificationButtonRequestor />
                </Link> */}
            </div>
            <div className="relative">
                {expired_mem && (
                    <div className="absolute bg-white/50 backdrop-blur-[2px] w-full h-full z-[1000]" />
                )}
                <RequestsTable requests={cogs_requests} />
            </div>
        </div>
    );
}
