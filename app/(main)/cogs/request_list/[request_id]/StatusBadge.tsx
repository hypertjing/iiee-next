import { Badge } from "@/components/ui/badge";

const statusColors: Record<
    | "Pending"
    | "On Process"
    | "For Payment"
    | "Paid"
    | "For Printing"
    | "For Delivery"
    | "Delivered"
    | "Approved"
    | "Denied"
    | "Not Required",
    string
> = {
    Pending: "bg-amber-200 text-amber-800",
    "On Process": "bg-blue-200 text-blue-800",
    "For Payment": "bg-yellow-200 text-yellow-800",
    Paid: "bg-green-200 text-green-800",
    "For Printing": "bg-purple-200 text-purple-800",
    "For Delivery": "bg-indigo-200 text-indigo-800",
    Delivered: "bg-green-300 text-green-900",
    Approved: "bg-emerald-200 text-emerald-800",
    Denied: "bg-red-200 text-red-800",
    "Not Required": "bg-slate-200 text-slate-800",
};

export function StatusBadge({ status }: { status: keyof typeof statusColors }) {
    return (
        <Badge className={`${statusColors[status]} px-3 py-1 rounded-full`}>
            {status}
        </Badge>
    );
}
