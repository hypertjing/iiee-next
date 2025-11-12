"use server";

import { logout } from "@/app/actions/auth";
import { getUser } from "@/app/lib/dal";
import { db_new } from "@/db/new";
import { cogsrequest } from "@/db/new/schema";
import { CogsRequest } from "@/types";
import { eq } from "drizzle-orm";

export async function approveRequest(request: CogsRequest): Promise<{
    status: boolean;
    message: string;
}> {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const auth = await getUser();

    if (!auth) {
        await logout();
    }

    const cogs_exp_date = new Date();
    cogs_exp_date.setMonth(new Date().getMonth() + 12);

    const update_res = await db_new
        .update(cogsrequest)
        .set({
            status: "Approved",
            response_viewed: false,
            updated_at: new Date(Date.now()),
            approved_at: new Date(Date.now()),
            approved_by: auth?.account.pkUserAccountsId,
            cogs_exp_date: cogs_exp_date,
        })
        .where(eq(cogsrequest.id, request.id));

    if (update_res[0].affectedRows <= 0) {
        return {
            status: false,
            message: "Failed to approve request, please try again.",
        };
    }

    return {
        status: true,
        message: "",
    };
}
