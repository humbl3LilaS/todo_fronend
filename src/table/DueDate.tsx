import {TTodo} from "@/types/apiResponseType.ts";
import {Getter} from "@tanstack/react-table";
import {cn} from "@/lib/utils.ts";

type TDueDate = {
    getValue: Getter<TTodo["dueAt"]>
}

export default function DueDate({getValue}: TDueDate) {
    const dueTimeStamp = getValue();
    if (!dueTimeStamp) {
        return null;
    }
    const currentTimeStamp = Date.now();
    const dueDate = new Date(dueTimeStamp).toDateString();

    return (
        <p className={cn(dueTimeStamp < currentTimeStamp ? "text-red-500" : "text-stone-600")}>
            {dueDate}
        </p>
    )
}