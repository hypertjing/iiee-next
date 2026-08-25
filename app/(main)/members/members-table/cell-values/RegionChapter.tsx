import { MapPin } from "lucide-react";

type RegionChapterProps = {
    region?: {
        description?: string | null;
    } | null;
    chapter?: {
        description?: string | null;
    } | null;
};

export function RegionChapter({ region, chapter }: RegionChapterProps) {
    return (
        <div className="inline-flex min-w-[240px] w-full items-center gap-3 rounded-lg border bg-muted/20 px-4 py-3">
            {/* Location Icon */}
            <div className="flex size-8 shrink-0 items-center justify-center text-muted-foreground">
                <MapPin className="size-5" />
            </div>

            {/* Location Information */}
            <div className="flex min-w-0 flex-col gap-1">
                <span className="truncate text-sm font-semibold text-foreground">
                    {region?.description || "N/A"}
                </span>

                <span className="truncate text-sm text-muted-foreground">
                    {chapter?.description || "N/A"}
                </span>
            </div>
        </div>
    );
}
