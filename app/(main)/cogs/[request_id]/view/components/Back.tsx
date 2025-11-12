"use client";

import BackButton from "@/components/ui/back-button";

export default function Back() {
    function back() {
        window.history.back();
    }
    return <BackButton onClick={back} />;
}
