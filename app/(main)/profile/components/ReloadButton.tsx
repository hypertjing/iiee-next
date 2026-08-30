"use client";

import { Button } from "@/components/ui/button";
import { Loader2, RotateCw } from "lucide-react";
import { useTransition } from "react";
import { reloadProfilePage } from "../actions";

export default function ReloadButton(props: { profile_id: number }) {
    const [pending, startTransition] = useTransition();

    function handleReload(profile_id: number) {
        startTransition(() => reloadProfilePage(profile_id));
    }

    return (
        <Button
            disabled={pending}
            variant={"outline"}
            onClick={() => handleReload(props.profile_id)}
        >
            {pending ? (
                <>
                    <Loader2 className="animate-spin" /> Reloading...
                </>
            ) : (
                <>
                    <RotateCw /> Reload
                </>
            )}
        </Button>
    );
}
