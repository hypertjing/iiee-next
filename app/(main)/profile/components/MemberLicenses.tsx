import { getUserLicenses } from "@/app/lib/dal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { FileBadge2 } from "lucide-react";
import { cacheLife, cacheTag } from "next/cache";
import MemberLicenseBlock from "./MemberLicenseBlock";

export default async function MemberLicenses(props: { profile_id: number }) {
    "use cache";
    cacheLife("default");
    cacheTag(`profile-${props.profile_id}`);

    const user_licenses = await getUserLicenses(props.profile_id);

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <FileBadge2 className="h-5 w-5 text-primary" />
                            Licenses
                        </CardTitle>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Your registered professional licenses.
                        </p>
                    </div>

                    <Badge variant="secondary">
                        {user_licenses.length} License
                        {user_licenses.length > 1 ? "s" : ""}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent>
                <div className="divide-y rounded-lg border">
                    {user_licenses.map((license, index) => (
                        <MemberLicenseBlock license={license} key={index} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export function MemberLicensesLoader() {
    return (
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
