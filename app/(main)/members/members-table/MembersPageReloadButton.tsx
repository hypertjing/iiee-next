"use client";

import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";
import { useState } from "react";
import { reloadMembersTable } from "../actions";

export default function MembersPageReloadButton() {
    const [reload_pending, setReloadPending] = useState(false);

    const handleReload = async () => {
        if (reload_pending) return;

        setReloadPending(true);

        try {
            await reloadMembersTable();
        } finally {
            setReloadPending(false);
        }
    };
    return (
        <>
            <Button
                variant="outline"
                onClick={handleReload}
                disabled={reload_pending}
            >
                <RotateCw
                    className={`size-4 ${reload_pending ? "animate-spin" : ""}`}
                />
                {reload_pending ? "Refreshing..." : "Refresh"}
            </Button>
            {reload_pending && (
                <div className="w-full h-screen bg-white/50 absolute fixed ml-[-15px] top-0 z-1000 "></div>
            )}
        </>
    );
}
