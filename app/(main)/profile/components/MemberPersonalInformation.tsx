import { getUser } from "@/app/lib/dal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cake, Gem, IdCard, Mail, Phone, User } from "lucide-react";
import DetailItem from "./DetailItem";

export default async function MemberPersonalInformation() {
    const user = await getUser();

    if (!user) {
        return <div>Loading user information...</div>;
    }

    if (!user.userprofile) {
        return;
    }

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
                        value={`${user.userprofile.fname} ${user.userprofile.mname} ${user.userprofile.lname}`}
                    />

                    <DetailItem icon={IdCard} label="Gender" value={"Male"} />
                    <DetailItem
                        icon={Gem}
                        label="Civil Status"
                        value={user.userprofile.civilStatus}
                    />

                    <DetailItem
                        icon={Cake}
                        label="Birth Date"
                        value={Intl.DateTimeFormat(undefined, {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        }).format(user.userprofile.bdate)}
                    />
                    <DetailItem
                        icon={Phone}
                        label="Phone Number"
                        value={user.userprofile.celNo}
                    />
                    <DetailItem
                        icon={Mail}
                        label="Email Address"
                        value={user.userprofile.email}
                    />
                </div>
            </CardContent>
        </Card>
    );
}
