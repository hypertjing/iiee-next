import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
    return (
        <div>
            <Skeleton className="h-[25px] w-[100px]" />
            <div className="space-y-2 mt-7">
                <Skeleton className="h-[30px] w-[150px]" />
                <div className="ms-10 space-y-2 mt-7">
                    <Skeleton className="h-[25px] w-[150px]" />
                    <Skeleton className="h-[39px] w-[600px]" />
                </div>
            </div>
        </div>
    );
}
