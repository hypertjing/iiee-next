import { getUserLatestLicense, getUserProfile } from "@/app/lib/dal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getInitials } from "@/lib/utils";
import { cacheLife, cacheTag } from "next/cache";

export default async function ProfileBanner(props: { profile_id: number }) {
    "use cache";
    cacheLife("weeks");
    cacheTag(`profile-${props.profile_id}`);

    // await sleep(5000);

    const userprofile = await getUserProfile(props.profile_id);
    const latest_license = await getUserLatestLicense(props.profile_id);

    let profession = "N/A";
    if (latest_license && latest_license.LicenseType) {
        profession = latest_license.LicenseType.description;
    }

    const avatarColors = [
        "bg-blue-500/10 text-blue-700 dark:text-blue-400",
        "bg-amber-500/10 text-amber-700 dark:text-amber-400",
        "bg-purple-500/10 text-purple-700 dark:text-purple-400",
        "bg-red-500/10 text-red-700 dark:text-red-400",
        "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
        "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
        "bg-pink-500/10 text-pink-700 dark:text-pink-400",
        "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
    ];

    const fullName = [userprofile.fname, userprofile.mname, userprofile.lname]
        .filter(Boolean)
        .join(" ");

    // Generate a stable color based on the member identity
    const colorKey = userprofile.membershipNo || fullName;

    const colorIndex = [...colorKey].reduce(
        (hash, char) => hash + char.charCodeAt(0),
        0,
    );
    const avatarColor = avatarColors[colorIndex % avatarColors.length];

    return (
        <Card className="overflow-hidden">
            {/* <div className="h-10 bg-primary" /> */}

            <CardContent className="relative">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Avatar className="h-30 w-30 ">
                        <AvatarFallback
                            className={`${avatarColor}  text-2xl font-semibold `}
                        >
                            {getInitials(
                                `${userprofile.fname} ${userprofile.mname} ${userprofile.lname}`,
                            )}
                        </AvatarFallback>
                    </Avatar>

                    <div>
                        <div className="flex flex-wrap items-center gap-2">
                            <h2 className="text-2xl font-semibold">
                                {`${userprofile.fname} ${userprofile.mname} ${userprofile.lname}`}{" "}
                            </h2>

                            <Badge
                                className={`${userprofile.akUserProfilesFlag === "Verified" ? "bg-green-600" : userprofile.akUserProfilesFlag === "Dormant" ? "bg-amber-500" : "bg-red-600"}`}
                            >
                                {userprofile.akUserProfilesFlag}
                            </Badge>
                        </div>

                        <div className=" text-sm text-muted-foreground">
                            <span className="font-medium">{profession}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export function ProfileBannerLoader() {
    return (
        <section className="rounded-xl border bg-background px-6 py-6">
            <div className="flex items-center gap-5">
                {/* Avatar */}
                <Skeleton className="size-[118px] shrink-0 rounded-full" />

                {/* Name / Position */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-7 w-[340px]" />
                        <Skeleton className="h-6 w-20 rounded-md" />
                    </div>

                    <Skeleton className="h-4 w-56" />
                </div>
            </div>
        </section>
    );
}
