type MemberIdentityProps = {
    firstName: string | null;
    lastName: string | null;
    middleName?: string | null;
    membershipNo: string | null;
};

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

export function MemberIdentity({
    firstName,
    lastName,
    middleName,
    membershipNo,
}: MemberIdentityProps) {
    const initials = `${firstName?.[0] ?? ""}${
        lastName?.[0] ?? ""
    }`.toUpperCase();

    const fullName = [firstName, middleName, lastName]
        .filter(Boolean)
        .join(" ");

    // Generate a stable color based on the member identity
    const colorKey = membershipNo || fullName;

    const colorIndex = [...colorKey].reduce(
        (hash, char) => hash + char.charCodeAt(0),
        0,
    );

    const avatarColor = avatarColors[colorIndex % avatarColors.length];

    return (
        <div className="flex items-center gap-3">
            {/* Avatar */}
            <div
                className={`flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${avatarColor}`}
            >
                {initials || "?"}
            </div>

            {/* Member Information */}
            <div className="flex min-w-0 flex-col gap-1">
                <span className="truncate text-sm font-semibold text-foreground">
                    {fullName}
                </span>

                <span className="truncate text-sm text-muted-foreground">
                    {membershipNo || "No membership number"}
                </span>
            </div>
        </div>
    );
}
