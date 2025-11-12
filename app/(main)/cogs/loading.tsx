import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
    return (
        <div>
            <Skeleton className="h-[38px] w-[140px]" />
            <div className="space-y-2 mt-7">
                <Skeleton className="h-[39px] w-full" />
                <Skeleton className="h-[39px] w-full" />
                <Skeleton className="h-[39px] w-full" />
                <Skeleton className="h-[39px] w-full" />
                <Skeleton className="h-[39px] w-full" />
            </div>
        </div>
    );
}
