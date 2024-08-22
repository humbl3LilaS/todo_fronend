import {useTableColumns} from "@/table/TodoTableColumns.tsx";
import {flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {TTodo} from "@/types/apiResponseType.ts";

type TodoTableProps = {
    data: TTodo[] | undefined;
}

export default function TodoTable({data}: TodoTableProps) {

    const columns = useTableColumns();

    const table = useReactTable({
        data: data ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        <div>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (<TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((column) => (
                            <TableHead key={column.id}>
                                {column.isPlaceholder ? null : flexRender(column.column.columnDef.header, column.getContext())}
                            </TableHead>
                        ))}
                    </TableRow>))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.map((rowModel) => (
                        <TableRow key={rowModel.id}>
                            {rowModel.getVisibleCells().map((visibleCells) => (
                                <TableCell key={visibleCells.id}>
                                    {flexRender(visibleCells.column.columnDef.cell, visibleCells.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}