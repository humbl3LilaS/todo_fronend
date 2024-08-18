import {createColumnHelper} from "@tanstack/react-table";
import {TTableTodo} from "@/types/apiResponseType.ts";
import DueDate from "@/table/DueDate.tsx";
import TodoCheckBox from "@/table/TodoCheckBox.tsx";


const columnHelper = createColumnHelper<TTableTodo>();

const columns = [
    columnHelper.accessor("_id",
        {
            header: "",
            cell: ({getValue}) => <TodoCheckBox id={getValue()}/>
        }),
    columnHelper.accessor("content",
        {
            header: 'Todo',
            cell: props => <div>{props.getValue()}</div>
        }),
    columnHelper.accessor("dueAt",
        {
            header: "Due Date",
            cell: props => <DueDate due={props.getValue()}/>
        })
]

export const useTableColumns = () => columns;
