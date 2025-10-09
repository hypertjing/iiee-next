import { Button } from "@/components/ui/button";
import { db_new } from "@/db/new";
import { cogsrequest } from "@/db/new/schema";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import RequestsTable from "./RequestsTable";

export default async function page() {
    const cogs_requests_db = await db_new.select().from(cogsrequest);

    return (
        <div>
            <div className="flex justify-start mb-10 space-x-2">
                <Link href="/cogs">
                    <Button size={"icon"} variant="ghost">
                        <ChevronLeft />
                    </Button>
                </Link>
            </div>
            <div>
                <RequestsTable requests={cogs_requests_db} />
            </div>
        </div>
    );
}
