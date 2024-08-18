import {cn} from "@/lib/utils.ts";

type TDueDate = {
    due: number | undefined
}

export default function DueDate({due}: TDueDate) {
    if (!due) {
        return null;
    }
    const currentTimeStamp = Date.now();
    const dueDate = new Date(due).toDateString();

    return (
        <p className={cn(due < currentTimeStamp ? "text-red-500" : "text-stone-600")}>
            {dueDate}
        </p>
    )
}