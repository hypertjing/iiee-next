import { getUser, getUserProfile } from "@/app/lib/dal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Cake, Gem, IdCard, Mail, Phone, User } from "lucide-react";
import DetailItem from "./DetailItem";

export default async function MemberPersonalInformation(props: {
    profile_id?: number;
}) {
    const user = await getUser();

    if (!user) {
        return <div>Loading...</div>;
    }

    if (!user.userprofile) {
        return;
    }

    const profile_id = props.profile_id
        ? props.profile_id
        : user.userprofile.pkUserProfilesId;

    const userprofile = await getUserProfile(profile_id);

    return (
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Personal Information
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                    <DetailItem
                        icon={User}
                        label="Full Name"
                        value={`${userprofile.fname} ${userprofile.mname} ${userprofile.lname}`}
                    />

                    <DetailItem icon={IdCard} label="Gender" value={"Male"} />
                    <DetailItem
                        icon={Gem}
                        label="Civil Status"
                        value={userprofile.civilStatus}
                    />

                    <DetailItem
                        icon={Cake}
                        label="Birth Date"
                        value={Intl.DateTimeFormat(undefined, {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        }).format(userprofile.bdate)}
                    />
                    <DetailItem
                        icon={Phone}
                        label="Phone Number"
                        value={userprofile.celNo}
                    />
                    <DetailItem
                        icon={Mail}
                        label="Email Address"
                        value={userprofile.email}
                    />
                </div>
            </CardContent>
        </Card>
    );
}

export function MemberPersonalInformationLoader() {
    return (
        <section className="rounded-xl border bg-background p-6 lg:col-span-2">
            <div className="mb-8">
                <Skeleton className="h-6 w-52" />
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                <PersonalDetailSkeleton labelWidth="w-20" valueWidth="w-48" />

                <PersonalDetailSkeleton labelWidth="w-14" valueWidth="w-12" />

                <PersonalDetailSkeleton labelWidth="w-20" valueWidth="w-20" />

                <PersonalDetailSkeleton labelWidth="w-20" valueWidth="w-40" />

                <PersonalDetailSkeleton labelWidth="w-28" valueWidth="w-36" />

                <PersonalDetailSkeleton labelWidth="w-24" valueWidth="w-52" />
            </div>
        </section>
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
