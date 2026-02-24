"use server";

import { SanitizationRemarksType } from "@/types";

type MarkMemberParam = {
    member_id: number;
    remarks: SanitizationRemarksType;
};

type MarkMemberReturnType = {
    sucess: boolean;
    message: string;
};

export async function markMember(
    data: MarkMemberParam,
): Promise<MarkMemberReturnType> {
    console.log(data);
    // await new Promise((resolve) =>
    //     setTimeout(resolve, 100 + Math.random() * 5000),
    // );

    return {
        sucess: false,
        message: "An error occured. Failed to add remarks, please try again.",
    };

    return {
        sucess: true,
        message: "ok",
    };
}
