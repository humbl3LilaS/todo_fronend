import {Skeleton} from "@/components/ui/skeleton.tsx";


export default function TodoTableSkeleton() {
    console.log("skeleton rendered")
    return (
        <div className={"w-full h-[420px] flex flex-col gap-y-4"}>
            <Skeleton className="w-full h-3/4"/>
            <div className={"w-full h-14 "}>
                <Skeleton className="w-[500px] h-full m-auto"/>
            </div>
        </div>
    )
}