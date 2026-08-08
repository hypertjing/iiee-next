"use client";

import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Fee, Position, UserAccount, UserProfile } from "@/types";
import { Loader2, Send } from "lucide-react";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { YesNo } from "../page";
import FileUploader from "./FileUploader";
import FormQ1 from "./FormQ1";
import FormQ2 from "./FormQ2";
import FormQ3 from "./FormQ3";

export type CogsRequestFormType = {
    user_id: number;
    certificate_gmm_file: File | undefined;
    certificate_activity_file: File | undefined;
    question1: YesNo | undefined;
    question2: YesNo | undefined;
    question3: YesNo | undefined;
    fee: Fee | undefined;
    amount_due: string;
    status:
        | "Pending"
        | "Approved"
        | "On Process"
        | "For Payment"
        | "Paid"
        | "For Printing"
        | "For Delivery"
        | "Delivered"
        | "Denied"
        | "Not Required";
    viewed: boolean;
};

export default function RequestForm(props: {
    user: {
        userprofile: UserProfile;
        account: UserAccount;
        position: Position;
    };
    db_fees: Fee[];
    onSubmitAction: (
        data: CogsRequestFormType,
    ) => Promise<{ success: boolean; message: string }>;
}) {
    const [form, setForm] = useState<CogsRequestFormType>({
        user_id: props.user.account.pkUserAccountsId,
        certificate_gmm_file: undefined,
        certificate_activity_file: undefined,
        question1: undefined,
        question2: undefined,
        question3: undefined,
        fee: undefined,
        amount_due: "0.00",
        status: "Pending",
        viewed: false,
    });

    function resetForm() {
        setForm({
            user_id: props.user.account.pkUserAccountsId,
            certificate_gmm_file: undefined,
            certificate_activity_file: undefined,
            question1: undefined,
            question2: undefined,
            question3: undefined,
            fee: undefined,
            amount_due: "0.00",
            status: "Pending",
            viewed: false,
        });
    }

    // const user_position = props.user.poistion?.code;
    const user_position = "P1";
    // const get_user_query = useQuery({ queryKey: ["user"], queryFn: getUser });

    function handleRequestTypeChange(fee_id: string): void {
        // const [fee_id, fee_code] = value.split("|");
        const temp_form = { ...form };

        const selected_fee = props.db_fees.find(
            (fee) => fee.pkFeesId == Number(fee_id),
        );

        if (!selected_fee) {
            toast("Fee not found.");
            return;
        }

        // if (selected_fee.code == "COGS") {
        //     temp_form.amount_due = "0.00";
        // }
        temp_form.fee = selected_fee;
        temp_form.amount_due = selected_fee.amount;

        setForm(temp_form);
    }

    function handleQ1Select(ans: YesNo) {
        setForm({
            ...form,
            question1: ans,
        });
    }

    function handleQ2Select(ans: YesNo) {
        setForm({
            ...form,
            question2: ans,
        });
    }

    function handleQ3Select(ans: YesNo) {
        setForm({
            ...form,
            question3: ans,
        });
    }

    const [pending, startTransition] = useTransition();
    function handleSubmit() {
        const data = { ...form };
        startTransition(async () => {
            const res = await props.onSubmitAction(data);
            if (res.success) {
                toast.success(res.message);
                resetForm();
                redirect("/cogs");
                return;
            }

            toast.error(res.message);
        });
    }

    return (
        <div className="w-[600px] space-y-4">
            <div className="bg-white rounded-xl space-y-2 mb-10">
                <div>Request Type</div>
                <Select onValueChange={handleRequestTypeChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select request type" />
                    </SelectTrigger>
                    <SelectContent>
                        {props.db_fees.map((fee) => (
                            <SelectItem
                                value={`${fee.pkFeesId}`}
                                key={fee.pkFeesId}
                            >
                                {fee.code} - {fee.description}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {form.fee?.code == "COGS" && (
                <>
                    <div className=" bg-white rounded-xl">
                        <div className="grid w-full items-center gap-4">
                            <div className="font-semibold">
                                Upload the following documents:
                            </div>
                            <ul className="list-disc mx-5 space-y-4">
                                <li className="space-y-2">
                                    <div>
                                        Certificate of Attendance for one (1)
                                        GMM of the Chapter
                                    </div>
                                    <FileUploader
                                        file={form.certificate_gmm_file}
                                        onUpload={(file) =>
                                            setForm({
                                                ...form,
                                                certificate_gmm_file: file,
                                            })
                                        }
                                    />
                                </li>
                                <li className="space-y-2">
                                    <div>
                                        Certificate of Attendance for one (1)
                                        chapter activity or national or regional
                                        conference in a year
                                    </div>
                                    <FileUploader
                                        file={form.certificate_activity_file}
                                        onUpload={(file) => {
                                            if (file === undefined) return;
                                            setForm({
                                                ...form,
                                                certificate_activity_file: file,
                                            });
                                        }}
                                    />
                                </li>
                            </ul>

                            {/* {JSON.stringify(form)} */}
                        </div>
                    </div>
                    <FormQ1
                        onAnswer={handleQ1Select}
                        defaultValue={form.question1}
                    />
                    <FormQ2
                        onAnswer={handleQ2Select}
                        defaultValue={form.question2}
                    />
                    <FormQ3
                        onAnswer={handleQ3Select}
                        defaultValue={form.question3}
                    />
                    <div className="text-lg font-semibold mt-10 mb-5">
                        <span className="font-semibold">Total Fee:</span>
                        <span className="text-green-600">Free</span>
                    </div>
                    <Button
                        className="bg-[#627aae] hover:bg-[#4b6cb3]"
                        onClick={handleSubmit}
                        disabled={pending}
                    >
                        {pending ? (
                            <>
                                <Loader2 className="animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            <>
                                <Send /> Submit
                            </>
                        )}
                    </Button>
                </>
            )}
        </div>
    );
}
