import { getUserLicenses } from "@/app/lib/dal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { FileBadge2 } from "lucide-react";
import { cacheLife } from "next/cache";
import MemberLicenseBlock from "./MemberLicenseBlock";

export default async function MemberLicenses(props: { profile_id: number }) {
    "use cache";
    cacheLife("default");

    const user_licenses = await getUserLicenses(props.profile_id);

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

export function MemberLicensesLoader() {
    return <Skeleton className="h-[200px] w-full" />;
}
