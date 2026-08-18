import { getUser, getUserMembershipInfo } from "@/app/lib/dal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
