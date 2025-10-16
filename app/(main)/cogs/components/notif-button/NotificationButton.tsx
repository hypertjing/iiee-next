import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type NotificationButtonProps = {
    /** show the small red dot indicator */
    showDot?: boolean;
    /** optional numeric count to show instead of dot */
    count?: number | null;
    /** button label for accessibility (screen reader) */
    srLabel?: string;
    onClick?: () => void;
    component: React.ReactNode;
};

/**
 * NotificationButton
 * - uses shadcn `Button` + `Badge` styling conventions
 * - small red dot is an absolutely positioned element so it sits on the corner of the icon
 * - accessible: includes sr-only text and aria-live for counts
 */
export default function NotificationButton({
    showDot = true,
    count = null,
    srLabel = "Notifications",
    onClick,
    component,
}: NotificationButtonProps) {
    const hasCount = typeof count === "number" && count > 0;

    return (
        <div className="relative inline-flex items-center">
            <Button
                variant="outline"
                size="icon"
                aria-label={srLabel}
                onClick={onClick}
                className="relative"
            >
                {component}
                {/* red dot indicator (visible when showDot && no numeric count) */}
                {showDot && !hasCount && (
                    <span
                        aria-hidden
                        className="pointer-events-none absolute -top-1 -right-1 flex h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-background animate-pulse"
                    />
                )}
            </Button>

            {/* numeric badge (if count provided) */}
            {hasCount && (
                <span className="absolute -top-2 -right-2">
                    <Badge
                        variant={"destructive"}
                        className="rounded-full px-1.5 py-0.5 text-xs"
                    >
                        {count > 99 ? "99+" : count}
                    </Badge>
                </span>
            )}

            {/* Screen-reader live region so assistive tech hears changes to count */}
            <span className="sr-only" aria-live="polite">
                {hasCount
                    ? `${count} unread notifications`
                    : showDot
                    ? "Unread notifications"
                    : "No unread notifications"}
            </span>
        </div>
    );
}

/**
 * Usage examples:
 *
 * <NotificationButton showDot onClick={() => console.log('open')}/>
 * <NotificationButton count={3} onClick={openNotifications}/>
 */
