"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CogsRequest } from "@/types";
import { Loader, ThumbsUp } from "lucide-react";
import { redirect } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { approveRequest } from "../actions";

export function ApproveButton(props: { request: CogsRequest }) {
    const [pending, startTransition] = useTransition();

    async function handleApprove() {
        startTransition(async () => {
            const res = await approveRequest(props.request);
            if (!res.status) {
                toast.error(res.message);
                return;
            }

            redirect("/cogs");
        });
    }

    return (
        <>
            {pending && (
                <div className="bg-black/70 w-full h-screen fixed z-50 top-0 left-0 text-white text-xl flex flex-col justify-center items-center">
                    <Loader size={60} className="animate-spin text-green-400" />
                    Processing...
                </div>
            )}
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                        Approve
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            You’re about to approve this request. Once approved,
                            the requester will be notified and the status cannot
                            be changed.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            disabled={pending}
                            className="bg-green-600 hover:bg-green-700"
                            onClick={handleApprove}
                        >
                            <ThumbsUp />
                            Confirm
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
