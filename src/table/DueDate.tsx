import {cn} from "@/lib/utils.ts";
import {differenceInDays} from "date-fns";

type TDueDate = {
    due: number | undefined,
    className?: string,
    prefixText?: string,
}

export default function DueDate({due, className, prefixText = ""}: TDueDate) {
    if (!due) {
        return null;
    }
    const diff = differenceInDays(due, new Date().valueOf());
    const dueDate = new Date(due).toDateString();

    return (
        <span className={cn(diff < 0 ? "text-red-500" : "text-stone-600", "font-semibold", className)}>
            {diff < 0 && prefixText} {dueDate}
        </span>
    )
}