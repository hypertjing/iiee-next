import { Badge } from "@/components/ui/badge";
import { isExpired } from "@/lib/utils";
import { License } from "@/types";
import { ChevronRight, FileBadge2 } from "lucide-react";

export default function MemberLicenseBlock({ license }: { license: License }) {
    return (
        <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <FileBadge2 className="h-5 w-5 text-primary" />
                </div>

                <div>
                    <p className="font-medium">
                        {license.LicenseType?.description}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        License No. {license.UserLicense.licenseNo}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-left sm:text-right">
                    {license.UserLicense.validityDate === "0000-00-00" ? (
                        <div className="mt-1 text-xs text-muted-foreground">
                            <div>
                                <InvalidExpirationDate />
                            </div>
                            <div className="mt-1">
                                Date:{" "}
                                <span className="font-semibold text-red-500">
                                    {license.UserLicense.validityDate}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <>
                            {isExpired(
                                new Date(license.UserLicense.validityDate),
                            ) ? (
                                <Expired />
                            ) : (
                                <NotExpired />
                            )}
                            <p className="mt-1 text-xs text-muted-foreground">
                                Valid until{" "}
                                <span
                                    className={`font-semibold ${isExpired(new Date(license.UserLicense.validityDate)) ? "text-red-500" : "text-green-600"}`}
                                >
                                    {Intl.DateTimeFormat(undefined, {
                                        weekday: "long",
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                    }).format(
                                        new Date(
                                            license.UserLicense.validityDate,
                                        ),
                                    )}
                                </span>
                            </p>
                        </>
                    )}
                </div>

                <ChevronRight className="hidden h-4 w-4 text-muted-foreground sm:block" />
            </div>
        </div>
    );
}

function InvalidExpirationDate() {
    return <Badge variant={"destructive"}>Invalide expiration date</Badge>;
}

function Expired() {
    return <Badge variant={"destructive"}>Expired</Badge>;
}
function NotExpired() {
    return <Badge className="bg-green-600">Active</Badge>;
}
