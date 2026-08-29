import { Skeleton } from "@/components/ui/skeleton";

function MemberSkeleton() {
    return (
        <div className="flex min-h-[126px] items-center border-b last:border-b-0">
            {/* MEMBER */}
            <div className="w-[27%] px-4">
                <div className="flex items-center gap-3">
                    <Skeleton className="h-11 w-11 shrink-0 rounded-full" />

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-44" />
                        <Skeleton className="h-3 w-24" />
                    </div>
                </div>
            </div>

            {/* MEMBERSHIP */}
            <div className="w-[16%] px-4">
                <div className="w-[180px] space-y-2 rounded-lg border p-3">
                    <Skeleton className="h-6 w-14 rounded-md" />
                    <Skeleton className="h-4 w-20" />

                    <div className="flex items-center justify-between pt-1">
                        <Skeleton className="h-3 w-14" />
                        <Skeleton className="h-3 w-16" />
                    </div>
                </div>
            </div>

            {/* REGION & CHAPTER */}
            <div className="w-[21%] px-4">
                <div className="flex w-[262px] items-center gap-3 rounded-lg border p-3">
                    <Skeleton className="h-5 w-5 shrink-0 rounded-full" />

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-3 w-32" />
                    </div>
                </div>
            </div>

            {/* LICENSES */}
            <div className="w-[19%] px-4">
                <div className="w-[240px] space-y-3">
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-2 w-2 rounded-full" />

                        <div className="flex flex-1 items-center justify-between">
                            <Skeleton className="h-4 w-12" />
                            <Skeleton className="h-3 w-20" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Skeleton className="h-2 w-2 rounded-full" />

                        <div className="flex flex-1 items-center justify-between">
                            <Skeleton className="h-4 w-14" />
                            <Skeleton className="h-3 w-20" />
                        </div>
                    </div>
                </div>
            </div>

            {/* REMARKS */}
            <div className="w-[13%] px-4">
                <Skeleton className="h-8 w-28 rounded-md" />
            </div>

            {/* ACTION */}
            <div className="w-[5%] px-4">
                <Skeleton className="h-9 w-9 rounded-lg" />
            </div>
        </div>
    );
}

export default function MembersTableSkeleton() {
    return (
        <div className="overflow-hidden rounded-xl border">
            {/* Header */}
            <div className="flex h-12 items-center border-b bg-muted/30">
                <div className="w-[27%] px-4">
                    <Skeleton className="h-3 w-14" />
                </div>

                <div className="w-[16%] px-4">
                    <Skeleton className="h-3 w-20" />
                </div>

                <div className="w-[21%] px-4">
                    <Skeleton className="h-3 w-28" />
                </div>

                <div className="w-[19%] px-4">
                    <Skeleton className="h-3 w-16" />
                </div>

                <div className="w-[13%] px-4">
                    <Skeleton className="h-3 w-16" />
                </div>

                <div className="w-[5%] px-4">
                    <Skeleton className="h-3 w-12" />
                </div>
            </div>

            {/* Rows */}
            {Array.from({ length: 5 }).map((_, index) => (
                <MemberSkeleton key={index} />
            ))}
        </div>
    );
}
