import { getUser } from "@/app/lib/dal";
import { Button } from "@/components/ui/button";
import { db_new } from "@/db/new";
import { cogsrequest } from "@/db/new/schema";
import { eq } from "drizzle-orm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import RequestsTable from "../components/RequestsTable";

export default async function page() {
    const user = await getUser();

    if (!user) {
        return "failed to load user";
    }

    const cogs_requests_db = await db_new
        .select()
        .from(cogsrequest)
        .where(eq(cogsrequest.user_id, 73816));

    return (
        <div>
            <div className="flex justify-start mb-10 space-x-2">
                <Link href="/cogs">
                    <Button size={"sm"} className="underline" variant="ghost">
                        <ChevronLeft /> Back
                    </Button>
                </Link>
            </div>
            <div>
                <RequestsTable requests={cogs_requests_db} />
            </div>
        </div>
    );
}
