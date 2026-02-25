import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useUserContext } from "@/contexts/user-context";
import { SanitizationRemarksType } from "@/types";
import {
    CircleCheckBig,
    Loader2,
    Shield,
    Trash,
    TriangleAlert,
} from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { getMemberSanitizationRemarks, markMember } from "../action-sanitize";

export default function MemberSanitizationRemarks(props: {
    member_id: number;
}) {
    const user = useUserContext();
    const user_position_code: string = "P1";
    // const user_position_code = user.poistion.code;

    const [remarks, setRemarks] = useState<
        SanitizationRemarksType | undefined
    >();

    const [opened, setOpened] = useState<boolean>(false);
    const [errors, setErrors] = useState<string | null>(null);

    const [pending, startTransition] = useTransition();
    function initMarkMember(value: SanitizationRemarksType) {
        startTransition(async () => {
            const res = await markMember({
                member_id: props.member_id,
                remarks: value,
            });

            if (!res.sucess) {
                setErrors(res.message);
                setOpened(true);
                return;
            }

            setErrors(null);
            setRemarks(value);
        });
    }

    useEffect(() => {
        getMemberSanitizationRemarks(props.member_id).then((res) => {
            setRemarks(res);
        });
    }, []);

    return (
        <>
            <div className="flex items-center justify-start gap-2">
                <div className="w-auto px-2">
                    {pending ? (
                        <>
                            <Loader2
                                strokeWidth={3}
                                size={20}
                                className="animate-spin text-blue-900"
                            />
                        </>
                    ) : (
                        <>
                            {remarks === undefined &&
                            user_position_code != "P1" ? (
                                <div className="text-amber-700 bg-amber-100 border border-amber-600 px-1 rounded">
                                    For evaluation
                                </div>
                            ) : (
                                <>
                                    {remarks === "tbd" && (
                                        <div className="flex gap-2">
                                            <Trash
                                                className="text-red-700 fill-red-300"
                                                size={20}
                                            />{" "}
                                            {user_position_code != "P1" && (
                                                <div>To be deleted</div>
                                            )}
                                        </div>
                                    )}
                                    {remarks === "r" && (
                                        <div className="flex gap-2">
                                            <CircleCheckBig
                                                className="text-green-700 fill-green-300"
                                                size={20}
                                            />{" "}
                                            {user_position_code != "P1" && (
                                                <div>Retain</div>
                                            )}
                                        </div>
                                    )}
                                    {remarks === "hns" && (
                                        <div className="flex gap-2">
                                            <Shield
                                                className="text-amber-700 fill-amber-300"
                                                size={20}
                                            />{" "}
                                            {user_position_code != "P1" && (
                                                <div>Hold, not sure</div>
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
                {user_position_code === "P1" && (
                    <div className="w-full">
                        <Select
                            value={remarks}
                            onValueChange={(value: SanitizationRemarksType) =>
                                initMarkMember(value)
                            }
                        >
                            <SelectTrigger
                                className={`bg-white w-full ${errors && "ring-red-400 ring-3 bg-red-100"}`}
                            >
                                <SelectValue placeholder="Select a remarks" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="tbd">
                                        To be deleted
                                    </SelectItem>
                                    <SelectItem value="r">Retain</SelectItem>
                                    <SelectItem value="hns">
                                        Hold, Not sure
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                )}
            </div>
            <AlertDialog open={opened}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl mb-3">
                            Notice!
                        </AlertDialogTitle>
                        <AlertDialogDescription className="flex  gap-5 bg-red-100 text-red-700 p-5 rounded-xl">
                            <TriangleAlert size={40} /> {errors}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction
                            className="bg-red-700 hover:bg-red-800"
                            onClick={() => setOpened(false)}
                        >
                            Close
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
