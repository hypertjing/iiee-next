import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { db_new } from "@/db/new";
import { cogsrequest } from "@/db/new/schema";
import { eq } from "drizzle-orm";
import { BellElectric } from "lucide-react";

export default async function NotificationButtonRequestor() {
    const notification_count = await db_new.$count(
        cogsrequest,
        eq(cogsrequest.response_viewed, false)
    );

    return (
        <div className="relative inline-flex items-center">
            <Button variant="outline" size="icon" className="relative">
                <BellElectric className="h-5 w-5" />
                {/* red dot indicator (visible when showDot && no numeric count) */}
            </Button>

            {/* numeric badge (if count provided) */}
            {notification_count > 0 && (
                <span className="absolute -top-2 -right-2">
                    <Badge
                        variant={"destructive"}
                        className="rounded-full px-1.5 py-0.5 text-xs"
                    >
                        {notification_count > 99 ? "99+" : notification_count}
                    </Badge>
                </span>
            )}
        </div>
    );
}
