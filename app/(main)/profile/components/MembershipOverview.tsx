import { getUserMembershipInfo } from "@/app/lib/dal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MemberStatus } from "@/types";
import {
    Building2,
    CalendarDays,
    CreditCard,
    Globe2,
    IdCard,
    ShieldCheck,
    UserStar,
} from "lucide-react";
import { cacheLife, cacheTag } from "next/cache";
import DetailItem from "./DetailItem";

export default async function MembershipOverview(props: {
    profile_id: number;
}) {
    "use cache";
    cacheLife("default");
    cacheTag(`profile-${props.profile_id}`);

    const membership_info = await getUserMembershipInfo(props.profile_id);

    const is_membership_expired: MemberStatus =
        membership_info.membership_status;

    return (
        <div>
            <Card
                className={`${is_membership_expired == "Inactive" ? "border-2 border-red-500 bg-red-50" : is_membership_expired == "Dormant" ? "border-2 border-amber-500 bg-amber-50" : ""}`}
            >
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <UserStar className="h-5 w-5 text-primary" />
                        Membership Overview
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-5">
                    <section className="grid gap-4 md:grid-cols-3">
                        <DetailItem
                            icon={IdCard}
                            label="Member ID"
                            value={membership_info.membership_no}
                        />
                        <DetailItem
                            icon={CreditCard}
                            label="Membership Type"
                            value={membership_info.membership_type}
                        />

                        <DetailItem
                            icon={CalendarDays}
                            label="Membership Valid Until"
                            value={
                                <span
                                    className={`${is_membership_expired === "Inactive" ? "text-red-500" : is_membership_expired === "Dormant" ? "text-amber-600" : ""}`}
                                >
                                    {Intl.DateTimeFormat(undefined, {
                                        weekday: "long",
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                    }).format(
                                        membership_info.membership_validity,
                                    )}
                                </span>
                            }
                        />
                    </section>
                    <section className="grid gap-4 md:grid-cols-3">
                        <DetailItem
                            icon={Building2}
                            label="Chapter"
                            value={membership_info.membership_chapter}
                        />
                        <DetailItem
                            icon={Globe2}
                            label="Region"
                            value={membership_info.membership_region}
                        />

                        <div>
                            <DetailItem
                                icon={ShieldCheck}
                                label="Status"
                                value={
                                    is_membership_expired === "Active" ? (
                                        <Active />
                                    ) : is_membership_expired === "Inactive" ? (
                                        <InActive />
                                    ) : (
                                        <Dormant />
                                    )
                                }
                            />
                        </div>
                    </section>
                </CardContent>
            </Card>
        </div>
    );
}

function InActive() {
    return <Badge variant={"destructive"}>Inactive</Badge>;
}
function Active() {
    return <Badge className="bg-green-600">Active</Badge>;
}
function Dormant() {
    return <Badge className="bg-amber-600">Dormant</Badge>;
}

export function MembershipOverviewLoader() {
    return (
        <section className="rounded-xl border bg-background">
            <div className="px-6 py-5">
                <Skeleton className="h-5 w-48" />
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-7 px-6 pb-7 md:grid-cols-3">
                <MembershipDetailSkeleton labelWidth="w-20" valueWidth="w-28" />

                <MembershipDetailSkeleton labelWidth="w-36" valueWidth="w-20" />

                <MembershipDetailSkeleton labelWidth="w-40" valueWidth="w-48" />

                <MembershipDetailSkeleton labelWidth="w-16" valueWidth="w-44" />

                <MembershipDetailSkeleton labelWidth="w-16" valueWidth="w-40" />

                <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-14" />
                    <Skeleton className="h-6 w-16 rounded-md" />
                </div>
            </div>
        </section>
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
