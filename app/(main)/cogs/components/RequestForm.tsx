"use client";

import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { AlertCircle, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { YesNo } from "../page";
import FileUploader from "./FileUploader";
import FormQ1 from "./FormQ1";
import FormQ2 from "./FormQ2";
import FormQ3 from "./FormQ3";

export type RequestFormType = {
    req_type: string;
    file1: File | undefined;
    file2: File | undefined;
    q1_answer: YesNo | undefined;
    q2_answer: YesNo | undefined;
    q3_answer: YesNo | undefined;
};

export default function RequestForm(props: {
    user_has_voted: boolean;
    onSubmitAction: (data: RequestFormType) => Promise<void>;
}) {
    const [form, setForm] = useState<RequestFormType>({
        req_type: "",
        file1: undefined,
        file2: undefined,
        q1_answer: undefined,
        q2_answer: undefined,
        q3_answer: undefined,
    });

    function handleSubmit() {
        const data = { ...form };
        if (data.file1 == undefined || data.file2 == undefined) {
            toast("Please upload a file created.");
            return;
        }

        // if (data. == undefined) {
        //     toast("Please upload a file created.");
        //     return;
        // }

        // console.log(data);

        // props.onSubmitAction(data);
    }

    function handleQ1Select(ans: YesNo) {
        setForm({
            ...form,
            q1_answer: ans,
        });
        if (ans == "yes") {
            setForm({
                ...form,
                q1_answer: ans,
                q2_answer: undefined,
            });
        }
    }

    function handleQ2Select(ans: YesNo) {
        setForm({
            ...form,
            q2_answer: ans,
        });
    }

    function handleQ3Select(ans: YesNo) {
        setForm({
            ...form,
            q3_answer: ans,
        });
    }

    useEffect(() => {
        if (form.file1 == null) {
            setForm({
                ...form,
                file1: undefined,
                q1_answer: undefined,
                q2_answer: undefined,
                q3_answer: undefined,
            });
            console.log("Okay", form);
        }
    }, [form.file1]);

    useEffect(() => {
        if (form.file2 == null) {
            setForm({
                ...form,
                file2: undefined,
                q1_answer: undefined,
                q2_answer: undefined,
                q3_answer: undefined,
            });
            console.log("Okay", form);
        }
    }, [form.file2]);

    return (
        <div className="w-[600px] space-y-4">
            <div className="">Request Form</div>
            <div className="bg-white rounded-xl p-5 space-y-2">
                <div>Request Type</div>
                <Select
                    onValueChange={(value) =>
                        setForm({ ...form, req_type: value })
                    }
                    defaultValue={form.req_type}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select request type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="cogs">
                            COGS - Request life member
                        </SelectItem>
                        <SelectItem value="uid">UID - UNIVERSAL ID</SelectItem>
                    </SelectContent>
                </Select>
                <input
                    type="hidden"
                    value={form.req_type}
                    name="request_type"
                />
            </div>
            {form.req_type == "cogs" && (
                <>
                    {props.user_has_voted ? (
                        <>
                            <div className="shadow-lg bg-white rounded-xl p-5">
                                <div className="grid w-full items-center gap-4">
                                    <div className="font-semibold">
                                        Upload the following documents:
                                        <div className="text-red-500 p-2 bg-red-100 rounded-md">
                                            <span className="">Required</span>
                                        </div>
                                    </div>
                                    <ul className="list-disc mx-5 space-y-4">
                                        <li className="space-y-2">
                                            <div>
                                                Certificate of Attendance for
                                                one (1) GMM of the Chapter
                                            </div>
                                            <FileUploader
                                                file={form.file1}
                                                onUpload={(file) =>
                                                    setForm({
                                                        ...form,
                                                        file1: file,
                                                    })
                                                }
                                            />
                                        </li>
                                        <li className="space-y-2">
                                            <div>
                                                Certificate of Attendance for
                                                one (1) chapter activity or
                                                national or regional conference
                                                in a year
                                            </div>
                                            <FileUploader
                                                file={form.file2}
                                                onUpload={(file) =>
                                                    setForm({
                                                        ...form,
                                                        file2: file,
                                                    })
                                                }
                                            />
                                        </li>
                                    </ul>

                                    {/* {JSON.stringify(form)} */}
                                </div>
                            </div>
                            {form.file1 && form.file2 && (
                                <>
                                    <FormQ1
                                        onAnswer={handleQ1Select}
                                        defaultValue={form.q1_answer}
                                    />
                                    <FormQ2
                                        onAnswer={handleQ2Select}
                                        defaultValue={form.q2_answer}
                                    />
                                    <FormQ3
                                        onAnswer={handleQ3Select}
                                        defaultValue={form.q3_answer}
                                    />
                                    <Button
                                        className="bg-[#627aae] hover:bg-[#4b6cb3] shadow-lg/40"
                                        onClick={handleSubmit}
                                    >
                                        <Send />
                                        Submit
                                    </Button>
                                </>
                            )}

                            {/* {JSON.stringify(form)} */}
                        </>
                    ) : (
                        <div className="flex gap-4 p-5 bg-amber-100 rounded-lg text-gray-600">
                            <div>
                                <AlertCircle
                                    className="text-amber-500"
                                    size={50}
                                />
                            </div>
                            <div>
                                <b>Attention:</b> Members who have not voted in
                                the recent elections are{" "}
                                <b>not allowed to request </b>
                                for COGS. Please contact your Chapter President.
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
