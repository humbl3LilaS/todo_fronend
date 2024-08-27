import {TTodo} from "@/types/apiResponseType.ts";
import TodoCheckBox from "@/table/TodoCheckBox.tsx";
import DueDate from "@/table/DueDate.tsx";
import ImportanceToggle from "@/components/button/ImportanceToggle.tsx";
import TodoDetailDialog from "@/components/todo/TodoDetailDialog.tsx";
import {DateInputProvider} from "@/provider/dateInputProvider.tsx";

type TodoListItemProps = {
    context: TTodo,
    completed?: boolean
}
export default function TodoListItem({context, completed}: TodoListItemProps) {
    return (
        <li className={"flex justify-start items-start gap-x-10"}>
                <TodoCheckBox id={context._id} className={"mt-2"} checked={completed}/>
            <p className={"flex flex-col gap-y-1"}>
                <DateInputProvider>
                    <TodoDetailDialog data={context}/>
                </DateInputProvider>
                {context.dueAt && <DueDate due={context.dueAt} className={"text-sm"} prefixText={"Overdue: "}/>}
            </p>
            <ImportanceToggle id={context._id} importance={context.importance} className={"ml-auto"}/>
        </li>
    )
}