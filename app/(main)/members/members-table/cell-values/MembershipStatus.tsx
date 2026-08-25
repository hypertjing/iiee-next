import { isExpired } from "@/lib/utils";

type MembershipStatusProps = {
    membershipValidity: Date;
    membershipType: string | null;
};

export function MembershipStatus({
    membershipValidity,
    membershipType,
}: MembershipStatusProps) {
    const membershipStatus = isExpired(membershipValidity);
    const isLifetime = membershipValidity.getFullYear() === 3000;

    const status =
        membershipStatus === true
            ? {
                  label: "Inactive",
                  containerClass: "border-red-500/20 bg-red-500/5",
                  badgeClass: "bg-red-500 text-white",
                  dateClass: "text-red-600 dark:text-red-400",
              }
            : membershipStatus === "dormant"
              ? {
                    label: "Dormant",
                    containerClass: "border-amber-500/20 bg-amber-500/5",
                    badgeClass: "bg-amber-500 text-white",
                    dateClass: "text-amber-600 dark:text-amber-400",
                }
              : {
                    label: "Active",
                    containerClass: "border-green-500/20 bg-green-500/5",
                    badgeClass: "bg-green-600 text-white",
                    dateClass: "text-green-600 dark:text-green-400",
                };

    return (
        <div
            className={`inline-flex min-w-[180px] flex-col gap-2 rounded-lg border px-3 py-2.5 ${status.containerClass}`}
        >
            {/* Status */}
            <div>
                <span
                    className={`rounded-md px-2 py-0.5 text-xs font-semibold ${status.badgeClass}`}
                >
                    {status.label}
                </span>
            </div>

            {/* Membership Type */}
            <span className="text-sm font-semibold text-foreground">
                {membershipType || "N/A"}
            </span>

            {/* Validity */}
            <div className="flex items-baseline justify-between gap-3">
                <span className="text-xs text-muted-foreground">
                    Valid until
                </span>

                <span className={`text-xs font-semibold ${status.dateClass}`}>
                    {isLifetime
                        ? "Life"
                        : Intl.DateTimeFormat(undefined, {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                          }).format(membershipValidity)}
                </span>
            </div>
        </div>
    );
}
