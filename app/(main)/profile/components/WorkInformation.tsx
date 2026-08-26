import { getUserProfile } from "@/app/lib/dal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Building2,
    Factory,
    Forklift,
    MapPinHouse,
    UserStar,
} from "lucide-react";
import DetailItem from "./DetailItem";

export default async function WorkInformation(props: { profile_id: number }) {
    const userprofile = await getUserProfile(props.profile_id);

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <UserStar className="h-5 w-5 text-primary" />
                        Membership Overview
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-5">
                    <section className="grid gap-4 md:grid-cols-2">
                        <DetailItem
                            icon={Factory}
                            label="Company"
                            value={
                                userprofile.company
                                    ? userprofile.company
                                    : "N/A"
                            }
                        />
                        <DetailItem
                            icon={MapPinHouse}
                            label="Designation"
                            value={
                                userprofile.designation
                                    ? userprofile.designation
                                    : "N/A"
                            }
                        />
                        <DetailItem
                            icon={Building2}
                            label="Sector"
                            value={
                                userprofile.sector ? userprofile.sector : "N/A"
                            }
                        />
                        <DetailItem
                            icon={Forklift}
                            label="Industry"
                            value={
                                <div className="space-x-1">
                                    {userprofile.industry
                                        .split("|")
                                        .filter((item) => {
                                            return item != "";
                                        })
                                        .map((item, index) => (
                                            <Badge
                                                key={index}
                                                variant={"default"}
                                                className="bg-blue-500"
                                            >
                                                {item}
                                            </Badge>
                                        ))}
                                </div>
                            }
                        />
                    </section>
                </CardContent>
            </Card>
        </>
    );
}

export function WorkInformationLoader() {
    return (
        <section className="rounded-xl border bg-background p-7">
            {/* Section title */}
            <Skeleton className="mb-8 h-6 w-52" />

            <div className="grid grid-cols-1 gap-x-16 gap-y-7 md:grid-cols-2">
                {/* Company */}
                <InfoSkeleton labelWidth="w-20" valueWidth="w-[360px]" />

                {/* Designation */}
                <InfoSkeleton labelWidth="w-24" valueWidth="w-40" />

                {/* Sector */}
                <InfoSkeleton labelWidth="w-16" valueWidth="w-28" />

                {/* Industry */}
                <div className="flex flex-col gap-3">
                    <Skeleton className="h-4 w-20" />

                    <div className="flex flex-wrap gap-2">
                        <Skeleton className="h-7 w-32 rounded-full" />
                        <Skeleton className="h-7 w-28 rounded-full" />
                        <Skeleton className="h-7 w-32 rounded-full" />
                        <Skeleton className="h-7 w-40 rounded-full" />
                        <Skeleton className="h-7 w-20 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function InfoSkeleton({
    labelWidth,
    valueWidth,
}: {
    labelWidth: string;
    valueWidth: string;
}) {
    return (
        <div className="flex flex-col gap-2">
            <Skeleton className={`h-4 ${labelWidth}`} />

            <Skeleton className={`h-5 max-w-full ${valueWidth}`} />
        </div>
    );
}
