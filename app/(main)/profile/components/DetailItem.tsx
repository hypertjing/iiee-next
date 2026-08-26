type IconType = React.ComponentType<{
    className?: string;
}>;

export default function DetailItem({
    icon: Icon,
    label,
    value,
}: {
    icon: IconType;
    label: string;
    value: string | React.ReactNode;
}) {
    return (
        <div className="flex gap-3">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />

            <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{label}</p>

                <div className="mt-1 break-words text-sm font-medium">
                    {value}
                </div>
            </div>
        </div>
    );
}
