import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
    return (
        <div>
            <Skeleton className="h-[25px] w-[100px]" />
            <div className="space-y-5 mt-7">
                <Skeleton className="h-[30px] w-[150px]" />
                <Skeleton className="h-[45px] w-[400px]" />
                <div className="flex gap-5">
                    <Skeleton className="h-[300px] w-full" />
                    <Skeleton className="h-[300px] w-full" />
                </div>
                <div className="flex gap-5">
                    <Skeleton className="h-[300px] w-1/4" />
                    <Skeleton className="h-[300px] w-1/4" />
                </div>
            </div>
        </div>
    );
}
