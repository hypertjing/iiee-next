import { Skeleton } from "@/components/ui/skeleton";
import { Users } from "lucide-react";

export default async function loading() {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center gap-2">
                <Users className="size-5 text-muted-foreground" />
                <Skeleton className="h-7 w-40" />
            </div>

            {/* Total Members */}
            <div className="rounded-xl border bg-muted/30 px-5 py-4">
                <div className="flex items-center gap-3">
                    <Skeleton className="size-10 rounded-md" />

                    <div className="flex flex-col gap-1">
                        <Skeleton className="h-3 w-24" />
                        <Skeleton className="h-7 w-28" />
                    </div>
                </div>
            </div>

            {/* Status Dashboard */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Active */}
                <div className="min-h-[190px] rounded-xl border bg-muted/20 p-5">
                    <div className="flex items-center gap-2">
                        <Skeleton className="size-9 rounded-lg" />
                        <Skeleton className="h-5 w-16" />
                    </div>

                    <div className="mt-6 space-y-2">
                        <Skeleton className="h-9 w-28" />
                        <Skeleton className="h-4 w-16" />
                    </div>

                    <div className="mt-6">
                        <div className="mb-2 flex justify-between">
                            <Skeleton className="h-3 w-28" />
                            <Skeleton className="h-4 w-10" />
                        </div>

                        <Skeleton className="h-1.5 w-full rounded-full" />
                    </div>
                </div>

                {/* Inactive */}
                <div className="min-h-[190px] rounded-xl border bg-muted/20 p-5">
                    <div className="flex items-center gap-2">
                        <Skeleton className="size-9 rounded-lg" />
                        <Skeleton className="h-5 w-20" />
                    </div>

                    <div className="mt-6 space-y-2">
                        <Skeleton className="h-9 w-28" />
                        <Skeleton className="h-4 w-16" />
                    </div>

                    <div className="mt-6">
                        <div className="mb-2 flex justify-between">
                            <Skeleton className="h-3 w-28" />
                            <Skeleton className="h-4 w-10" />
                        </div>

                        <Skeleton className="h-1.5 w-full rounded-full" />
                    </div>
                </div>

                {/* Dormant */}
                <div className="min-h-[190px] rounded-xl border bg-muted/20 p-5">
                    <div className="flex items-center gap-2">
                        <Skeleton className="size-9 rounded-lg" />
                        <Skeleton className="h-5 w-16" />
                    </div>

                    <div className="mt-6 space-y-2">
                        <Skeleton className="h-9 w-28" />
                        <Skeleton className="h-4 w-16" />
                    </div>

                    <div className="mt-6">
                        <div className="mb-2 flex justify-between">
                            <Skeleton className="h-3 w-28" />
                            <Skeleton className="h-4 w-10" />
                        </div>

                        <Skeleton className="h-1.5 w-full rounded-full" />
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="space-y-2">
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-10 w-[400px]" />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                    <FilterSkeleton />
                    <FilterSkeleton />
                    <FilterSkeleton />
                    <FilterSkeleton />
                    <FilterSkeleton />
                </div>

                <div className="flex gap-2">
                    <Skeleton className="h-10 w-24 rounded-md" />
                    <Skeleton className="size-10 rounded-md" />
                    <Skeleton className="h-10 w-[180px] rounded-md" />
                </div>
            </div>

            {/* Members Table */}
            <div className="overflow-hidden rounded-xl border bg-background">
                {/* Header */}
                <div className="grid grid-cols-[1.5fr_1fr_1.2fr_1.2fr_80px] items-center border-b bg-muted/50 px-4 py-4">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-3 w-28" />
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="mx-auto h-3 w-12" />
                </div>

                {/* Rows */}
                <div>
                    <MemberTableRowSkeleton />
                    <MemberTableRowSkeleton />
                    <MemberTableRowSkeleton />
                    <MemberTableRowSkeleton />
                    <MemberTableRowSkeleton />
                </div>
            </div>
        </div>
    );
}

function FilterSkeleton() {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-[180px]" />
        </div>
    );
}

function MemberTableRowSkeleton() {
    return (
        <div className="grid min-h-[150px] grid-cols-[1.5fr_1fr_1.2fr_1.2fr_80px] items-start gap-4 border-b px-4 py-5 last:border-b-0">
            {/* Member */}
            <div className="flex items-center gap-3">
                <Skeleton className="size-11 shrink-0 rounded-full" />

                <div className="flex min-w-0 flex-col gap-2">
                    <Skeleton className="h-4 w-36" />
                    <Skeleton className="h-3 w-24" />
                </div>
            </div>

            {/* Membership */}
            <div className="flex flex-col gap-3">
                <Skeleton className="h-7 w-20 rounded-full" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-3 w-20" />
            </div>

            {/* Region & Chapter */}
            <div className="flex items-center gap-3 rounded-lg border bg-muted/20 px-4 py-3">
                <Skeleton className="size-8 shrink-0 rounded-md" />

                <div className="flex min-w-0 flex-col gap-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-28" />
                </div>
            </div>

            {/* Licenses */}
            <div className="space-y-1">
                <Skeleton className="h-10 w-full rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
            </div>

            {/* Action */}
            <div className="flex justify-center">
                <Skeleton className="size-10 rounded-md" />
            </div>
        </div>
    );
}
