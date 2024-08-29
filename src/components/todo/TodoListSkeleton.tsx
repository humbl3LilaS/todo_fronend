import {Skeleton} from "@/components/ui/skeleton.tsx";
import {cn} from "@/lib/utils.ts";

type TodoListSkeletonProps = {
    className?: string;
}

export default function TodoListSkeleton({className}: TodoListSkeletonProps) {
    console.log("skeleton rendered")
    return (
        <div className={cn("w-full h-[400px]", className)}>
            <Skeleton className="w-full h-full"/>
        </div>
    )
}