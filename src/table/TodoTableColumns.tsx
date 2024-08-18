import {createColumnHelper} from "@tanstack/react-table";
import {TTableTodo} from "@/types/apiResponseType.ts";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import DueDate from "@/table/DueDate.tsx";

const columnHelper = createColumnHelper<TTableTodo>();

const checkBox = {
    id: "select",
// @ts-ignore
    cell: ({row}) => (
        <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
        />
    ),

}

const columns = [
    checkBox,
    columnHelper.accessor("content", {
        header: "Todo",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor("dueAt", {
        header: "Due At",
        cell: ({getValue}) => <DueDate getValue={getValue}/>

    })
];

export const useTableColumns = () => columns;
