import {Skeleton} from "@/components/ui/skeleton.tsx";
import {cn} from "@/lib/utils.ts";

type TodoListSkeletonProps = {
    className?: string;
}

export default function TodoListSkeleton({className}: TodoListSkeletonProps) {
    console.log("skeleton rendered")
    return (
        <div className={cn("w-full h-[420px] flex flex-col gap-y-4", className)}>
            <Skeleton className="w-full h-3/4"/>
            <div className={"w-full h-14 "}>
                <Skeleton className="w-[500px] h-full m-auto"/>
            </div>
        </div>
    )
}