import { getUserProfile } from "@/app/lib/dal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Cake, Gem, IdCard, Mail, Phone, User } from "lucide-react";
import { cacheLife } from "next/cache";
import DetailItem from "./DetailItem";

export default async function MemberPersonalInformation(props: {
    profile_id: number;
}) {
    "use cache";
    cacheLife("default");

    const userprofile = await getUserProfile(props.profile_id);

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
    return <Skeleton className="h-[200px] w-full" />;
}
