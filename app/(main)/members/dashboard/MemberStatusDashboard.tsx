import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
        ? ((activeCount / totalMembers) * 100).toFixed(1)
        : 0;
    const inactivePercentage = totalMembers
        ? ((inactiveCount / totalMembers) * 100).toFixed(1)
        : 0;
    const dormantPercentage = totalMembers
        ? ((dormantCount / totalMembers) * 100).toFixed(1)
        : 0;

    return (
        <Card className="shadow-none bg-gray-100 border-0 rounded-2xl">
            <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-md font-semibold flex items-center gap-2">
                    Current Member Status
                </CardTitle>
                <span className="text-sm text-muted-foreground">
                    Total: {totalMembers}
                </span>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Active Members */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium">
                            Active Members
                        </span>
                    </div>
                    <span className="text-sm font-semibold">{activeCount}</span>
                </div>
                <Progress
                    color={"bg-green-500"}
                    value={Number(activePercentage)}
                    className="h-2 bg-gray-300"
                />
                <p className="text-xs text-muted-foreground">
                    {activePercentage}% of total members are active
                </p>

                {/* Inactive Members */}
                <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center gap-2">
                        <UserX className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-medium">
                            Inactive Members
                        </span>
                    </div>
                    <span className="text-sm font-semibold">
                        {inactiveCount}
                    </span>
                </div>
                <Progress
                    color="bg-red-400"
                    value={Number(inactivePercentage)}
                    className="h-2 bg-gray-300"
                />
                <p className="text-xs text-muted-foreground">
                    {inactivePercentage}% of total members are inactive
                </p>
                {/* Dormant Members */}
                <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center gap-2">
                        <UserRoundMinus className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium">
                            Dormant Members
                        </span>
                    </div>
                    <span className="text-sm font-semibold">
                        {dormantCount}
                    </span>
                </div>
                <Progress
                    color="bg-amber-500"
                    value={Number(dormantPercentage)}
                    className="h-2 bg-gray-300"
                />
                <p className="text-xs text-muted-foreground">
                    {dormantPercentage}% of total members are dormant
                </p>
            </CardContent>
        </Card>
    );
};

export default MemberStatusDashboard;
