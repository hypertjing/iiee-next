import {
    getUser,
    getUserMailingAddress,
    getUserPermanentAddress,
} from "@/app/lib/dal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { House, Mail, MapPin } from "lucide-react";

export default async function MemberAddress() {
    const user = await getUser();

    if (!user) {
        return <div>Loading user information...</div>;
    }

    if (!user.userprofile) {
        return;
    }

    const permanent_address = await getUserPermanentAddress(
        user.userprofile.pkUserProfilesId,
    );
    const mailing_address = await getUserMailingAddress(
        user.userprofile.pkUserProfilesId,
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Address
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                <div>
                    <div className="mb-4 flex items-center gap-2">
                        <House className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">Permanent</h3>
                    </div>

                    <div className="rounded-lg border bg-muted/30 p-4 text-sm leading-6">
                        <p>{permanent_address?.address}</p>
                        <p>{permanent_address?.barangay}</p>
                        <p>
                            {permanent_address?.city},{" "}
                            {permanent_address?.province}{" "}
                            {permanent_address?.zipCode}
                        </p>
                    </div>
                </div>

                <div>
                    <div className="mb-4 flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">Mailing</h3>
                    </div>

                    <div className="rounded-lg border bg-muted/30 p-4 text-sm leading-6">
                        <p>{mailing_address?.address}</p>
                        <p>{mailing_address?.barangay}</p>
                        <p>
                            {mailing_address?.city}, {mailing_address?.province}{" "}
                            {mailing_address?.zipCode}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
