import { db_old } from "@/db/old";
import { chapters, regions } from "@/db/old/drizzle/schema";
import { asc, eq } from "drizzle-orm";
import { Metadata } from "next";
import { Suspense } from "react";
import Members from "./members-table/Members";

export const metadata: Metadata = {
    title: "Members",
};

export default async function MembersPage() {
    const regions_list = await db_old
        .select()
        .from(regions)
        // .where(eq(regions.code, "NL"))
        .orderBy(asc(regions.description));

    const chapters_list = await db_old
        .select()
        .from(chapters)
        .where(eq(chapters.fkRegionsId, 1))
        .orderBy(asc(chapters.description));

    return (
        <div>
            {/* <div className="mb-4">Members</div> */}
            {/* <RegisteMemberForm /> */}
            <Suspense fallback={<div>Loading...</div>}>
                <Members
                    regions_list={regions_list}
                    chapters_list={chapters_list}
                />
            </Suspense>
        </div>
    );
}
