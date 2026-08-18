import { Card, CardContent } from "@/components/ui/card";

type IconType = React.ComponentType<{
    className?: string;
}>;

export default function InfoCard({
    icon: Icon,
    label,
    value,
}: {
    icon: IconType;
    label: string;
    value: string;
}) {
    return (
        <Card>
            <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                </div>

                <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {label}
                    </p>

                    <p className="mt-1 truncate font-medium">{value}</p>
                </div>
            </CardContent>
        </Card>
    );
}
