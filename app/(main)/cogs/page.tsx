import { getUser } from "@/app/lib/dal";
import { Button } from "@/components/ui/button";
import { db_new } from "@/db/new";
import { cogsrequest } from "@/db/new/schema";
import { eq } from "drizzle-orm";
import { Plus } from "lucide-react";
import Link from "next/link";
import RequestsTable from "./components/RequestsTable";

export default async function page() {
    // await sleep(2000);
    const user = await getUser();

    if (!user) {
        return <div>Loading...</div>;
    }

    const user_position: string = "P1";
    // const user_position = user.poistion?.code;

    const cogs_requests = await db_new.transaction(async (tx) => {
        let cogs_requests_temp;
        if (user_position == "P1") {
            cogs_requests_temp = await tx.select().from(cogsrequest);
        } else {
            cogs_requests_temp = await tx
                .select()
                .from(cogsrequest)
                .where(eq(cogsrequest.user_id, user.account.pkUserAccountsId));
        }

        return cogs_requests_temp;
    });

    return (
        <div>
            <div className="flex justify-start mb-5 space-x-4">
                <Link href="/cogs/create_request">
                    <Button>
                        <Plus /> New Request
                    </Button>
                </Link>
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
            <div>
                <RequestsTable requests={cogs_requests} />
            </div>
        </div>
    );
}
