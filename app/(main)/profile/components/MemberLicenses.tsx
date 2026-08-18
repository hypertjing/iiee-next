import { getUser, getUserLicenses } from "@/app/lib/dal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileBadge2 } from "lucide-react";
import MemberLicenseBlock from "./MemberLicenseBlock";

export default async function MemberLicenses() {
    // const user_licenses = [
    //     {
    //         id: "1",
    //         name: "Professional License",
    //         licenseNumber: "PRC-1234567",
    //         status: "Active",
    //         validUntil: "June 30, 2028",
    //     },
    //     {
    //         id: "2",
    //         name: "Specialty License",
    //         licenseNumber: "SL-2026-00981",
    //         status: "Active",
    //         validUntil: "December 31, 2027",
    //     },
    // ];
    const user = await getUser();

    if (!user) {
        return <div>Loading user information...</div>;
    }

    if (!user.userprofile) {
        return;
    }

    const user_licenses = await getUserLicenses(
        user.userprofile.pkUserProfilesId,
    );

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
