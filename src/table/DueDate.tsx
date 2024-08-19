import {cn} from "@/lib/utils.ts";
import {differenceInDays} from "date-fns";
import {ReactNode} from "react";

type TDueDate = {
    due: number | undefined,
    className?: string,
    prefixText?: string,
}

export default function DueDate({due, className, prefixText = ""}: TDueDate) {
    if (!due) {
        return null;
    }
    const diff = Math.abs(differenceInDays(new Date().valueOf(), due));
    const dueDate = new Date(due).toDateString();

    return (
        <p className={cn(diff > 0 ? "text-red-500" : "text-stone-600", className)}>
            {diff > 0 && prefixText} {dueDate}
        </p>
    )
}