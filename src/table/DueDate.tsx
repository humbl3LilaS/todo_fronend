import {cn} from "@/lib/utils.ts";
import {differenceInDays} from "date-fns";

type TDueDate = {
    due: number | undefined
}

export default function DueDate({due}: TDueDate) {
    if (!due) {
        return null;
    }
    const diff = Math.abs(differenceInDays(new Date().valueOf(), due));
    const dueDate = new Date(due).toDateString();

    return (
        <p className={cn(diff > 0 ? "text-red-500" : "text-stone-600")}>
            {dueDate}
        </p>
    )
}