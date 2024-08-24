import {createColumnHelper} from "@tanstack/react-table";
import {TTableTodo} from "@/types/apiResponseType.ts";
import DueDate from "@/table/DueDate.tsx";
import TodoCheckBox from "@/table/TodoCheckBox.tsx";
import ImportanceToggle from "@/components/button/ImportanceToggle.tsx";


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
        }),
    columnHelper.accessor("importance", {
        header: "Importance",
        cell: ({getValue, row}) => <ImportanceToggle id={row.original._id} importance={getValue()} key={row.original._id}/>
    }),

]

export const useTableColumns = () => columns;
