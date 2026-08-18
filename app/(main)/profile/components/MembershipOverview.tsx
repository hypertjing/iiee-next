import { getUser, getUserMembershipInfo } from "@/app/lib/dal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Building2,
    CalendarDays,
    CreditCard,
    Globe2,
    IdCard,
    ShieldCheck,
    UserStar,
} from "lucide-react";
import DetailItem from "./DetailItem";

export default async function MembershipOverview() {
    const user = await getUser();

    if (!user) {
        return <div>Loading user information...</div>;
    }

    if (!user.userprofile) {
        return;
    }

    const membership_info = await getUserMembershipInfo(
        user.userprofile.pkUserProfilesId,
    );

    return (
        <div>
            <Card>
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
                            value={Intl.DateTimeFormat(undefined, {
                                weekday: "long",
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            }).format(membership_info.membership_validity)}
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

                        <DetailItem
                            icon={ShieldCheck}
                            label="Status"
                            value={membership_info.membership_status}
                        />
                    </section>
                </CardContent>
            </Card>
        </div>
    );
}
