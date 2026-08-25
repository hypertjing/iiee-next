"use client";
import BackButton from "@/components/ui/back-button";

export default function HistoryBackButton() {
    return <BackButton onClick={() => window.history.back()} />;
}
