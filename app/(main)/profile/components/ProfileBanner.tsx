import { getUser, getUserLatestLicense } from "@/app/lib/dal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { getInitials } from "@/lib/utils";

export default async function ProfileBanner() {
    const user = await getUser();

    if (!user) {
        return <div>Loading user information...</div>;
    }

    if (!user.userprofile) {
        return;
    }

    const latest_license = await getUserLatestLicense(
        user.userprofile.pkUserProfilesId,
    );

    let profession = "N/A";
    if (latest_license.LicenseType) {
        profession = latest_license.LicenseType.description;
    }

    return (
        <Card className="overflow-hidden">
            {/* <div className="h-10 bg-primary" /> */}

            <CardContent className="relative">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Avatar className="h-40 w-40 border-4 border-background shadow-md">
                        <AvatarFallback className="bg-primary/10 text-2xl font-semibold text-primary">
                            {getInitials(
                                `${user.userprofile?.fname} ${user.userprofile?.mname} ${user.userprofile?.lname}`,
                            )}
                        </AvatarFallback>
                    </Avatar>

                    <div className="">
                        <div className="flex flex-wrap items-center gap-2">
                            <h2 className="text-2xl font-semibold">
                                {`${user.userprofile?.fname} ${user.userprofile?.mname} ${user.userprofile?.lname}`}
                            </h2>

                            {/* <Badge className="gap-1">
                                    <BadgeCheck className="h-3.5 w-3.5 text-sky-400" />
                                </Badge> */}
                        </div>

                        <p className="mt-1 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">
                                {profession}
                            </span>
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
