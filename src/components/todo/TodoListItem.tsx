import {TTodo} from "@/types/apiResponseType.ts";
import TodoCheckBox from "@/table/TodoCheckBox.tsx";
import DueDate from "@/table/DueDate.tsx";
import ImportanceToggle from "@/components/button/ImportanceToggle.tsx";
import {cn} from "@/lib/utils.ts";

type TodoListItemProps = {
    context: TTodo,
    completed?: boolean
}
export default function TodoListItem({context, completed}: TodoListItemProps) {
    return (
        <li className={"flex justify-start items-start gap-x-10"}>
            <TodoCheckBox id={context._id} className={"mt-2"} checked={completed}/>
            <p className={"flex flex-col gap-y-1"}>
                <span className={cn("text-lg", completed && "line-through text-red-500")}>{context.content}</span>
                {context.dueAt && <DueDate due={context.dueAt} className={"text-sm"} prefixText={"Overdue: "}/>}
            </p>
            <ImportanceToggle id={context._id} importance={context.importance} className={"ml-auto"}/>
        </li>
    )
}