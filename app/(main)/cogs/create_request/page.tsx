import { getUser } from "@/app/lib/dal";
import { db_new } from "@/db/new";
import { cogsrequest } from "@/db/new/schema";
import { db_old } from "@/db/old";
import { fees } from "@/db/old/drizzle/schema";
import { CogsRequestForm } from "@/types";
import { eq, or } from "drizzle-orm";
import RequestForm, { CogsRequestFormType } from "./components/RequestForm";
export type YesNo = "yes" | "no";

import BackButton from "@/components/ui/back-button";
import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";

export default async function CogsPage() {
    async function saveFile(
        file: File,
        folder: string
    ): Promise<string | null> {
        "use server";

        try {
            const uploadDir = path.join(process.cwd(), "public", folder);
            await fs.mkdir(uploadDir, { recursive: true });

            const filePath = path.join(uploadDir, file.name);
            const bytes = await file.arrayBuffer();
            await fs.writeFile(filePath, Buffer.from(bytes));

            return `/${folder}/${file.name}`; // return relative URL
        } catch (error) {
            console.error("File upload failed:", error);
            return null;
        }
    }

    async function submitRequest(formData: CogsRequestFormType) {
        "use server";

        if (formData.fee == undefined) {
            return {
                success: false,
                message: "No type of request was selected.",
            };
        }

        const gmmFileUrl = formData.certificate_gmm_file
            ? await saveFile(formData.certificate_gmm_file, "uploads")
            : null;

        const activityFileUrl = formData.certificate_activity_file
            ? await saveFile(formData.certificate_activity_file, "uploads")
            : null;

        // ❌ If any file upload failed, stop here
        if (
            (formData.certificate_gmm_file && !gmmFileUrl) ||
            (formData.certificate_activity_file && !activityFileUrl)
        ) {
            return {
                success: false,
                message: "One or more file uploads failed. Please try again.",
            };
        }

        const data: CogsRequestForm = {
            user_id: formData.user_id,
            certificate_gmm_file_url: gmmFileUrl,
            certificate_activity_file_url: activityFileUrl,
            question1: formData.question1 === "yes" ? true : false,
            question2: formData.question2 === "yes" ? true : false,
            question3: formData.question3 === "yes" ? true : false,
            fee_id: formData.fee.pkFeesId,
            amount_due: formData.amount_due,
            status: "Pending",
            created_at: new Date(Date.now()),
            updated_at: new Date(Date.now()),
        };

        const result = await db_new
            .insert(cogsrequest)
            .values(data)
            .$returningId();

        if (!result[0].id) {
            return { success: false, message: "Failed to submit request." };
        }

        return { success: true, message: "Request submitted successfully." };
    }

    const user = await getUser();

    if (!user) {
        return <div>Loading...</div>;
    }

    const db_fees = await db_old
        .select()
        .from(fees)
        .where(
            or(
                eq(fees.memberType, user.userprofile.memberType),
                eq(fees.memberType, "")
            )
        );

    const user_position = "P1";
    // const user_position = user.poistion?.code;

    // if (user_position !== "P1" && user_position !== "P2") {
    //     return <div>Access Denied</div>;
    // }
    // await sleep(1000);
    return (
        <div>
            <Link href="/cogs">
                <BackButton />
            </Link>
            <div className="font-semibold text-lg my-5">Request Form</div>

            {/* <div className="flex justify-start mb-10 space-x-4">
                {user_position == "P1" && (
                    <>
                        <Link href="/cogs/request_list">
                            <NotificationButton
                                count={notification_count}
                                showDot={false}
                                component={<Bell className="h-5 w-5" />}
                            />
                        </Link>
                    </>
                )}

                <Link href="/cogs/myrequests">
                    <NotificationButtonRequestor />
                </Link>
            </div> */}
            <div className="mx-10 mb-10">
                <RequestForm
                    db_fees={db_fees}
                    user={user}
                    onSubmitAction={submitRequest}
                />
            </div>
            {/* <DateExpired /> */}
        </div>
    );
}
