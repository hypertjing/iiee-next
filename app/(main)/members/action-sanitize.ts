"use server";

import { db_new } from "@/db/new";
import { sanitization_remarks } from "@/db/new/schema";
import { SanitizationRemarksForm, SanitizationRemarksType } from "@/types";
import { count, eq } from "drizzle-orm";

type MarkMemberParam = {
    member_id: number;
    remarks: SanitizationRemarksType;
};

type MarkMemberReturnType = {
    sucess: boolean;
    message: string;
};

export async function getMemberSanitizationRemarks(
    member_id: number,
): Promise<SanitizationRemarksType> {
    const res = await db_new
        .select()
        .from(sanitization_remarks)
        .where(eq(sanitization_remarks.member_id, member_id));

    const return_val = res[0].remarks as unknown as SanitizationRemarksType;

    return return_val;
}

export async function markMember(
    data: MarkMemberParam,
): Promise<MarkMemberReturnType> {
    console.log(data);
    // await new Promise((resolve) =>
    //     setTimeout(resolve, 100 + Math.random() * 5000),
    // );

    try {
        const insert_data: SanitizationRemarksForm = {
            member_id: data.member_id,
            remarks: data.remarks,
        };

        const existing_count = await db_new
            .select({ value: count(sanitization_remarks.member_id) })
            .from(sanitization_remarks)
            .where(eq(sanitization_remarks.member_id, insert_data.member_id));

        if (existing_count[0].value > 0) {
            await db_new
                .update(sanitization_remarks)
                .set({
                    remarks: insert_data.remarks,
                })
                .where(
                    eq(sanitization_remarks.member_id, insert_data.member_id),
                );
        } else {
            await db_new.insert(sanitization_remarks).values(insert_data);
        }
    } catch (error) {
        return {
            sucess: false,
            message:
                "An error occured. Failed to add remarks, please try again.",
        };
    }

    return {
        sucess: true,
        message: "ok",
    };
}
