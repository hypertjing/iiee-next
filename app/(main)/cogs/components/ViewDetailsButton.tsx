"use client";

import { Button } from "@/components/ui/button";
import { CogsRequest } from "@/types";
import { Eye, Loader2 } from "lucide-react";
import { useTransition } from "react";

export default function ViewDetailsButton(props: {
    onViewAction: (request_id: number) => Promise<void>;
    request: CogsRequest;
}) {
    const [pending, startTransition] = useTransition();

    function handleView() {
        startTransition(async () => {
            await props.onViewAction(props.request.id);
        });
    }

    return (
        <Button
            disabled={pending}
            variant="outline"
            size="sm"
            onClick={handleView}
        >
            {pending ? (
                <>
                    <Loader2
                        className="text-blue-500 animate-spin"
                        strokeWidth={3}
                    />
                    Loading...
                </>
            ) : (
                <>
                    <Eye />
                    View Details
                </>
            )}
        </Button>
    );
}
