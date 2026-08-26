import { Skeleton } from "@/components/ui/skeleton";

export default async function loading() {
    return (
        <div className="space-y-6">
            {/* Back */}
            <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded-sm" />
                <Skeleton className="h-4 w-12" />
            </div>

            {/* Member Header */}
            <section className="rounded-xl border bg-background px-6 py-6">
                <div className="flex items-center gap-5">
                    {/* Avatar */}
                    <Skeleton className="size-[118px] shrink-0 rounded-full" />

                    {/* Name / Position */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-7 w-[340px]" />
                            <Skeleton className="h-6 w-20 rounded-md" />
                        </div>

                        <Skeleton className="h-4 w-56" />
                    </div>
                </div>
            </section>

            {/* Membership Overview */}
            <section className="rounded-xl border bg-background">
                <div className="px-6 py-5">
                    <Skeleton className="h-5 w-48" />
                </div>

                <div className="grid grid-cols-1 gap-x-12 gap-y-7 px-6 pb-7 md:grid-cols-3">
                    <MembershipDetailSkeleton
                        labelWidth="w-20"
                        valueWidth="w-28"
                    />

                    <MembershipDetailSkeleton
                        labelWidth="w-36"
                        valueWidth="w-20"
                    />

                    <MembershipDetailSkeleton
                        labelWidth="w-40"
                        valueWidth="w-48"
                    />

                    <MembershipDetailSkeleton
                        labelWidth="w-16"
                        valueWidth="w-44"
                    />

                    <MembershipDetailSkeleton
                        labelWidth="w-16"
                        valueWidth="w-40"
                    />

                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-4 w-14" />
                        <Skeleton className="h-6 w-16 rounded-md" />
                    </div>
                </div>
            </section>

            {/* Licenses */}
            <section className="rounded-xl border bg-background">
                <div className="flex items-start justify-between px-6 py-5">
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-4 w-64" />
                    </div>

                    <Skeleton className="h-6 w-20 rounded-full" />
                </div>

                <div className="px-6 pb-6">
                    <div className="overflow-hidden rounded-xl border">
                        <LicenseSkeleton />
                        <LicenseSkeleton />
                        <LicenseSkeleton />
                    </div>
                </div>
            </section>

            {/* Personal Information + Address */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
                {/* Personal Information */}
                <section className="rounded-xl border bg-background p-6">
                    <div className="mb-8">
                        <Skeleton className="h-6 w-52" />
                    </div>

                    <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                        <PersonalDetailSkeleton
                            labelWidth="w-20"
                            valueWidth="w-48"
                        />

                        <PersonalDetailSkeleton
                            labelWidth="w-14"
                            valueWidth="w-12"
                        />

                        <PersonalDetailSkeleton
                            labelWidth="w-20"
                            valueWidth="w-20"
                        />

                        <PersonalDetailSkeleton
                            labelWidth="w-20"
                            valueWidth="w-40"
                        />

                        <PersonalDetailSkeleton
                            labelWidth="w-28"
                            valueWidth="w-36"
                        />

                        <PersonalDetailSkeleton
                            labelWidth="w-24"
                            valueWidth="w-52"
                        />
                    </div>
                </section>

                {/* Address */}
                <section className="rounded-xl border bg-background p-6">
                    <div className="mb-7">
                        <Skeleton className="h-6 w-24" />
                    </div>

                    {/* Permanent */}
                    <div className="space-y-3">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-[105px] w-full rounded-xl" />
                    </div>

                    {/* Mailing */}
                    <div className="mt-7 space-y-3">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-[105px] w-full rounded-xl" />
                    </div>
                </section>
            </div>
        </div>
    );
}

function MembershipDetailSkeleton({
    labelWidth,
    valueWidth,
}: {
    labelWidth: string;
    valueWidth: string;
}) {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className={`h-4 ${labelWidth}`} />
            <Skeleton className={`h-5 ${valueWidth}`} />
        </div>
    );
}

function PersonalDetailSkeleton({
    labelWidth,
    valueWidth,
}: {
    labelWidth: string;
    valueWidth: string;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <Skeleton className={`h-4 ${labelWidth}`} />
            <Skeleton className={`h-5 ${valueWidth}`} />
        </div>
    );
}

function LicenseSkeleton() {
    return (
        <div className="flex items-center justify-between gap-6 border-b px-4 py-4 last:border-b-0">
            <div className="flex min-w-0 items-center gap-4">
                <Skeleton className="size-11 shrink-0 rounded-lg" />

                <div className="flex min-w-0 flex-col gap-2">
                    <Skeleton className="h-4 w-52" />
                    <Skeleton className="h-3 w-28" />
                </div>
            </div>

            <div className="flex shrink-0 items-center gap-6">
                <div className="flex flex-col items-end gap-2">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-4 w-36" />
                </div>

                <Skeleton className="size-4 rounded-full" />
            </div>
        </div>
    );
}
