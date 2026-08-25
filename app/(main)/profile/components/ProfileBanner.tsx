import { getUserLatestLicense, getUserProfile } from "@/app/lib/dal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getInitials } from "@/lib/utils";
import { cacheLife } from "next/cache";

export default async function ProfileBanner(props: { profile_id: number }) {
    "use cache";
    cacheLife("default");

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const userprofile = await getUserProfile(props.profile_id);

    const latest_license = await getUserLatestLicense(props.profile_id);

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
                                `${userprofile.fname} ${userprofile.mname} ${userprofile.lname}`,
                            )}
                        </AvatarFallback>
                    </Avatar>

                    <div className="">
                        <div className="flex flex-wrap items-center gap-2">
                            <h2 className="text-2xl font-semibold">
                                {`${userprofile.fname} ${userprofile.mname} ${userprofile.lname}`}
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

export function ProfileBannerLoader() {
    return <Skeleton className="h-[200px] w-full" />;
}
