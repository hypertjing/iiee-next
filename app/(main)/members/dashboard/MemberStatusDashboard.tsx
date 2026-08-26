import { UserCheck, UserRoundMinus, UserX } from "lucide-react";
import React from "react";

interface MemberStatusDashboardProps {
    totalMembers: number;
    activeCount: number;
    inactiveCount: number;
    dormantCount: number;
}

const MemberStatusDashboard: React.FC<MemberStatusDashboardProps> = ({
    totalMembers,
    activeCount,
    inactiveCount,
    dormantCount,
}) => {
    const activePercentage = totalMembers
        ? (activeCount / totalMembers) * 100
        : 0;

    const inactivePercentage = totalMembers
        ? (inactiveCount / totalMembers) * 100
        : 0;

    const dormantPercentage = totalMembers
        ? (dormantCount / totalMembers) * 100
        : 0;

    const statuses = [
        {
            label: "Active",
            count: activeCount,
            percentage: activePercentage,
            icon: UserCheck,
            iconClass: "text-emerald-600",
            tileClass: "border bg-white",
            progressColor: "bg-emerald-500",
        },
        {
            label: "Inactive",
            count: inactiveCount,
            percentage: inactivePercentage,
            icon: UserX,
            iconClass: "text-red-600",
            tileClass: "border bg-white",
            progressColor: "bg-red-500",
        },
        {
            label: "Dormant",
            count: dormantCount,
            percentage: dormantPercentage,
            icon: UserRoundMinus,
            iconClass: "text-amber-600",
            tileClass: "border bg-white",
            progressColor: "bg-amber-500",
        },
    ];

    return (
        <>
            <div className="flex items-center gap-3 rounded-xl border bg-white p-5 mb-4">
                <div className="flex size-9 items-center justify-center rounded-md border bg-background">
                    <span className="text-sm font-semibold text-muted-foreground">
                        #
                    </span>
                </div>

                <div className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Total Members
                    </span>

                    <span className="text-2xl font-bold tracking-tight text-foreground">
                        {totalMembers.toLocaleString()}
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {statuses.map((status) => {
                    const Icon = status.icon;

                    return (
                        <div
                            key={status.label}
                            className={`flex min-h-[190px] flex-col rounded-xl border p-5 ${status.tileClass}`}
                        >
                            {/* Status */}
                            <div className="flex items-center gap-2">
                                <div className="flex size-9 items-center justify-center rounded-lg bg-background/60 border">
                                    <Icon
                                        className={`size-4 ${status.iconClass}`}
                                    />
                                </div>

                                <span className="font-medium">
                                    {status.label}
                                </span>
                            </div>

                            {/* Count */}
                            <div className="mt-6">
                                <div className="text-3xl font-semibold tracking-tight">
                                    {status.count.toLocaleString()}
                                </div>

                                <div className="mt-1 text-sm text-muted-foreground">
                                    Members
                                </div>
                            </div>

                            {/* Percentage and Progress */}
                            <div className="mt-auto pt-6">
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground">
                                        Of total members
                                    </span>

                                    <span className="text-sm font-semibold">
                                        {status.percentage.toFixed(1)}%
                                    </span>
                                </div>

                                <div className="h-1.5 overflow-hidden rounded-full bg-neutral-200">
                                    <div
                                        className={`h-full rounded-full transition-all ${status.progressColor}`}
                                        style={{
                                            width: `${status.percentage}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default MemberStatusDashboard;
